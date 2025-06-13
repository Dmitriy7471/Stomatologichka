import React, { useRef, useState, useEffect } from 'react';
import { Doctor } from '../../../../types';
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
  const [showPreview, setShowPreview] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      if (currentlyPlaying === doctor.id) {
        videoRef.current.play();
        setShowPreview(false);
      } else {
        videoRef.current.pause();
        setShowPreview(true);
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
    <div className="doctor-card">
      <div className="video-container" onClick={togglePlay}>
        {/* Видео с превью */}
        <video
          ref={videoRef}
          src={`/data/videos/${doctor.videoFileName}`}
          loop
          playsInline
          className="doctor-video"
          poster={`/data/videos/previews/${doctor.videoFileName.replace('.mp4', '.jpg')}`}
        />
        
        {/* Всегда видимое превью */}
        {showPreview && (
          <div className="video-preview">
            <img
              src={`/data/videos/previews/${doctor.videoFileName.replace('.mp4', '.jpg')}`}
              alt={`Превью ${doctor.name}`}
              className="preview-image"
            />
            <div className="play-button-overlay">
              <PlayIcon />
            </div>
          </div>
        )}
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
  <svg viewBox="0 0 24 24" width="48" height="48">
    <path fill="currentColor" d="M8,5.14V19.14L19,12.14L8,5.14Z" />
  </svg>
);