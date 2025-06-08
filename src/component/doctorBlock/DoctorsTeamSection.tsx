import { useState } from 'react';
import { Doctor, SpecializationFilter } from '../../types';
import { DoctorsList } from './DoctorsList';
import './DoctorsTeamSection.css';
interface DoctorsTeamSectionProps {
  doctors: Doctor[];
}

export const DoctorsTeamSection = ({ doctors }: DoctorsTeamSectionProps) => {
  const [filter, setFilter] = useState<SpecializationFilter>('все');

  const filteredDoctors = filter === 'все' 
    ? doctors 
    : doctors.filter(doctor => doctor.specialization === filter);

  return (
    <section className="doctors-dark-section">
      <div className="container">
        <h2 className="section-title">Наша команда специалистов</h2>
        
        <div className="specialization-filters">
          <button 
            className={`filter-item ${filter === 'все' ? 'active' : ''}`}
            onClick={() => setFilter('все')}
          >
            Все врачи
          </button>
          <button 
            className={`filter-item ${filter === 'все' ? 'active' : ''}`}
            onClick={() => setFilter('терапевт')}
          >
            Терапевты
          </button>
          <button 
            className={`filter-item ${filter === 'все' ? 'active' : ''}`}
            onClick={() => setFilter('хирург')}
          >
            Хирурги
          </button>
          <button 
            className={`filter-item ${filter === 'все' ? 'active' : ''}`}
            onClick={() => setFilter('ортодонт')}
          >
            Ортодонты
          </button>
          <button 
            className={`filter-item ${filter === 'все' ? 'active' : ''}`}
            onClick={() => setFilter('педиатр')}
          >
            Педиаторы
          </button>
          <button 
            className={`filter-item ${filter === 'все' ? 'active' : ''}`}
            onClick={() => setFilter('Гигиенист')}
          >
            Гигиенисты
          </button>
          <button 
            className={`filter-item ${filter === 'все' ? 'active' : ''}`}
            onClick={() => setFilter('Детский стоматолог')}
          >
            Детские стоматологи
          </button>
          <button 
            className={`filter-item ${filter === 'все' ? 'active' : ''}`}
            onClick={() => setFilter('Анастезиолог')}
          >
            Анастезиологи
          </button>
          {/* Добавьте другие кнопки по аналогии */}
        </div>

        <DoctorsList doctors={filteredDoctors} />
      </div>
    </section>
  );
};