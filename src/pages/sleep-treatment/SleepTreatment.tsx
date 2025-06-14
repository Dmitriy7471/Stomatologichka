import React from 'react';
import { PageLayout } from '../../components/PageLayout/PageLayout';
import './SleepTreatment.css';

export const SleepTreatment = () => {
  return (
    <PageLayout>
      <main className="sleep-treatment-container">
        <section className="hero-section">
          <h1>Лечение зубов во сне</h1>
          <p className="subtitle">Безопасно и комфортно для взрослых и детей</p>
        </section>

        <section className="content-section">
          <div className="benefits">
            <h2>Преимущества метода</h2>
            <ul>
              <li>Полное отсутствие дискомфорта</li>
              <li>Идеально для пациентов с дентофобией</li>
              <li>Возможность провести все лечение за один визит</li>
            </ul>
          </div>

          <div className="procedure-details">
            <h2>Как проходит процедура</h2>
            <ol>
              <li>Консультация анестезиолога</li>
              <li>Подбор индивидуальной седации</li>
              <li>Безболезненное лечение</li>
              <li>Пробуждение без неприятных ощущений</li>
            </ol>
          </div>
        </section>
      </main>
    </PageLayout>
  );
};

export default SleepTreatment;