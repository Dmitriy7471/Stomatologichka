import React from 'react';
import { PageLayout } from '../../components/PageLayout/PageLayout';
/* import { ServiceList } from './components/ServiceList'; */
import './Services.css';

export const Services = () => {
  return (
    <PageLayout>
      <main className="services-page">
        <h1>Наши услуги</h1> 
        
        {/* <ServiceList /> */}
        
        <section className="consultation-section">
          {/* Блок консультации */}
        </section>
      </main>
    </PageLayout>
  );
};

export default Services;