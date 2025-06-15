import React from 'react';
import { Service } from '../../../../types/services';
import './ServiceCard.css';

interface ServiceCardProps extends Service {
  highlighted: boolean;
  onAppointmentClick: (title: string) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  price,
  highlighted,
  onAppointmentClick
}) => {
  return (
    <div className={`service-card ${highlighted ? 'highlighted' : ''}`}>
      <div className="service-icon">{icon}</div>
      <h3 className="service-title">{title}</h3>
      <p className="service-description">{description}</p>
      <div className="service-price">{price}</div>
      <button 
        className="service-button"
        onClick={() => onAppointmentClick(title)}
      >
        Записаться
      </button>
    </div>
  );
};

export default ServiceCard;