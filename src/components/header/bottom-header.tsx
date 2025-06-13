import React from 'react';
import './BottomHeader.css'; // Создадим отдельный файл стилей

const BottomHeader = () => {
  return (
    <header className="bottom-header">
      {/* Левая часть с логотипом */}
      <div className="logo">
        <img 
          alt="Логотип компании" 
          src='https://www.shutterstock.com/image-vector/blue-tooth-logo-icon-line-260nw-2196367425.jpg'
        />
      </div>
      
      {/* Правая часть с элементами и кнопкой */}
      <div className="right-section">
        {/* Список из 6 элементов */}
        <div className="item-list">
          {['О компании', 'Услуги', 'Портфолио', 'Отзывы', 'Блог', 'Контакты'].map((item, index) => (
            <div key={index} className="nav-item">
              {item}
            </div>
          ))}
        </div>
        
        {/* Кнопка */}
        <button className="action-button">
          Заказать звонок
        </button>
      </div>
    </header>
  );
};

export default BottomHeader;