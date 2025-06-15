import React, { useState } from 'react';
import { AppointmentFormData } from '../../../../types/services';
import './AppointmentModal.css'; // Измененный импорт стилей

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceTitle?: string;
  onSubmit: (data: AppointmentFormData) => void;
}

const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  serviceTitle,
  onSubmit
}) => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    name: '',
    phone: '',
    email: '',
    service: serviceTitle || '',
    date: '',
    comment: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose} aria-label="Закрыть">
          &times;
        </button>

        <h2 className="modal-title">Запись на прием</h2>
        
        {serviceTitle && (
          <div className="service-info">
            <span>Выбранная услуга:</span>
            <strong>{serviceTitle}</strong>
          </div>
        )}

        <form onSubmit={handleSubmit} className="appointment-form">
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Ваше имя*
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone" className="form-label">
              Телефон*
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="form-input"
              required
              pattern="\+?[0-9\s\-\(\)]+"
              title="Введите корректный номер телефона"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="date" className="form-label">
              Желаемая дата
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="form-input"
              min={new Date().toISOString().split('T')[0]}
            />
          </div>

          <div className="form-group">
            <label htmlFor="comment" className="form-label">
              Комментарий
            </label>
            <textarea
              id="comment"
              name="comment"
              value={formData.comment || ''}
              onChange={handleChange}
              className="form-textarea"
              rows={3}
            />
          </div>

          <div className="form-footer">
            <button type="submit" className="submit-button">
              Отправить заявку
            </button>
            <p className="form-note">
              *Поля, обязательные для заполнения
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AppointmentModal;