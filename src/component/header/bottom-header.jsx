import React from 'react';
import './BottomHeader.css'; // Создадим отдельный файл стилей

const BottomHeader = () => {
  return (
    <header className="bottom-header">
      {/* Левая часть с логотипом */}
      <div className="logo">
        <img 
          src="https://via.placeholder.com/150x40?text=Company+Logo" 
          alt="Логотип компании" 
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