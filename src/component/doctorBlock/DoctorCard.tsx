import React, { useRef, useEffect } from 'react';
import { Doctor } from '../../types';
import './DoctorCard.css';

interface DoctorCardProps {
  doctor: Doctor;
  currentlyPlaying: string | null;
  setCurrentlyPlaying: (id: string | null) => void;
}

export const DoctorCard: React.FC<DoctorCardProps> = ({ 
  doctor, 
  currentlyPlaying,
  setCurrentlyPlaying 
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (currentlyPlaying === doctor.id) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [currentlyPlaying, doctor.id]);

  const togglePlay = () => {
    if (currentlyPlaying === doctor.id) {
      setCurrentlyPlaying(null);
    } else {
      setCurrentlyPlaying(doctor.id);
    }
  };

  return (
    <div className="doctor-card" key={doctor.id}>
      <div className="video-container" onClick={togglePlay}>
        <video
          ref={videoRef}
          src={`/data/videos/${doctor.videoFileName}`}
          loop
          playsInline
          className="doctor-video"
          poster="/images/doctor-poster.jpg"
        />
        
        <div className={`video-controls ${currentlyPlaying === doctor.id ? 'playing' : ''}`}>
          <div className="play-icon">
            {currentlyPlaying === doctor.id ? <PauseIcon /> : <PlayIcon />}
          </div>
        </div>
      </div>

      <div className="doctor-info">
        <h3 className="doctor-name">{doctor.name}</h3>
        <p className="doctor-specialization">
          {doctor.specialization}
        </p>
      </div>
    </div>
  );
};

const PlayIcon = () => (
  <svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M8,5.14V19.14L19,12.14L8,5.14Z" />
  </svg>
);

const PauseIcon = () => (
  <svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M14,19H18V5H14M6,19H10V5H6V19Z" />
  </svg>
);