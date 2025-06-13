import React, { useState } from 'react';
import './AppointmentForm.css';

export const AppointmentForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [consent, setConsent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Обработка отправки формы
    console.log({ name, phone, consent });
  };

  return (
    <div className="appointment-container">
      <h2 className="appointment-title">Запись на приём</h2>
      
      <form onSubmit={handleSubmit} className="appointment-form">
        <div className="form-group">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ваше имя"
            required
          />
        </div>
        
        <div className="form-group">
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Ваш телефон"
            required
          />
        </div>

        <div className="divider"></div>

        <div className="consent-checkbox">
          <input
            type="checkbox"
            id="consent"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            required
          />
          <label htmlFor="consent">
            Даю свою согласие на обработку компанией ООО "Stomatology" 
            моих персональных данных в соответствии с требованиями 
            52 от 11.07.2007 г. №152-ФЗ «О персональных данных» 
            и Политикой обработки и защиты персональных данных.
          </label>
        </div>

        <button type="submit" className="submit-btn">
          Получить консультацию
        </button>
      </form>
    </div>
  );
};