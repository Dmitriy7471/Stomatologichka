import React from 'react';
import './Footer.css';
import Header from 'components/header/header';


export const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-logo-column">
          <img src='https://www.shutterstock.com/image-vector/blue-tooth-logo-icon-line-260nw-2196367425.jpg' alt="AMBC Стоматология" className="footer-logo" />
          <p className="footer-copyright">Сайт основателя клиники Бочарова Дмитрия</p>
        </div>

        <div className="footer-links-column">
          <h4 className="footer-links-title">Карта сайта</h4>
          <ul className="footer-links-list">
            <li><a href="/services">Услуги</a></li>
            <li><a href="/doctors">Врачи</a></li>
            <li><a href="/sleep-treatment">Лечение во сне</a></li>
            <li><a href="/about">О клинике</a></li>
            <li><a href="/media">О нас в СМИ</a></li>
          </ul>
        </div>

        <div className="footer-links-column">
          <h4 className="footer-links-title">Информация</h4>
          <ul className="footer-links-list">
            <li><a href="/rules">Правила пользования сайтом</a></li>
            <li><a href="/dms">Лечение по ДМС</a></li>
            <li><a href="/non-resident">Иногородним пациентам</a></li>
            <li><a href="/tax-deduction">Налоговый вычет</a></li>
            <li><a href="/reviews">Отзывы</a></li>
            <li><a href="/faq">F.A.Q.</a></li>
            <li><a href="/contacts">Контакты</a></li>
          </ul>
        </div>

        <div className="footer-cta-column">
          <button className="footer-appointment-btn">
            Записаться
          </button>
        </div>
      </div>
      <header/>
    </footer>
  );
};