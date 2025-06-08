import React, { useState } from 'react';
import { Doctor } from '../../types';
import { DoctorCard } from './DoctorCard';
import './DoctorsList.css';

interface DoctorsListProps {
  doctors: Doctor[];
}

export const DoctorsList: React.FC<DoctorsListProps> = ({ doctors }) => {
  const [currentlyPlaying, setCurrentlyPlaying] = useState<string | null>(null);

  return (
    <div className="doctors-grid">
      {doctors.map(doctor => (
        <DoctorCard 
          key={doctor.id}
          doctor={doctor}
          currentlyPlaying={currentlyPlaying}
          setCurrentlyPlaying={setCurrentlyPlaying}
        />
      ))}
    </div>
  );
};