import React, { useState } from 'react';
import './Background.css'; // Стили вынесены в отдельный файл

const Background: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Форма отправлена!\nИмя: ${formData.name}\nТелефон: ${formData.phone}`);
    setFormData({ name: '', phone: '' });
  };

  return (
    <div className="background-container">
      {/* Фоновое изображение */}
      <div className="background-image"></div>
      
      {/* Контент поверх фона */}
      <div className="content">
        <h1>Свяжитесь с нами</h1>
        <p className="subtitle">Оставьте свои данные и мы перезвоним вам в течение 15 минут</p>
        
        {/* Форма */}
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Ваше имя"
              required
            />
          </div>
          
          <div className="form-group">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Ваш телефон"
              required
            />
          </div>
          
          <button type="submit" className="submit-button">
            Отправить
          </button>
        </form>
      </div>
    </div>
  );
};

export default Background;