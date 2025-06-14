import React from 'react';
import './BottomHeader.css'; // Создадим отдельный файл стилей
import { NavLink } from 'react-router-dom';

const BottomHeader = () => {
  return (
    <header className="bottom-header">
      {/* Левая часть с логотипом */}
      <NavLink 
          to="/" 
          className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
        >
          <div className="logo">
        <img 
          alt="Логотип компании" 
          src='https://www.shutterstock.com/image-vector/blue-tooth-logo-icon-line-260nw-2196367425.jpg'
        />
      </div>
        </NavLink>
      
      
      {/* Правая часть с элементами и кнопкой */}
      <div className="right-section">
        <nav>
          <NavLink 
            to="/sleep-treatment" 
            className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
          >
            Лечение во сне
          </NavLink>
        </nav>
        <nav>
          <NavLink 
            to="/services" 
            className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
          >
            Услуги
          </NavLink>
        </nav>
        {/* Список из 6 элементов */}
        <div className="item-list">
          {['О компании', 'Портфолио', 'Отзывы', 'Блог', 'Контакты'].map((item, index) => (
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