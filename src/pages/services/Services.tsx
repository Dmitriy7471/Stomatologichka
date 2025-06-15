import React, { useState } from 'react';
import { useServicesData } from '../../hooks/useServicesData';
import ServiceCard from './components/ServiceCard/ServiceCard';
import Quiz from './components/Quiz/Quiz';
import AppointmentModal from './components/AppointmentModal/AppointmentModal';
import {PageLayout} from '../../components/PageLayout/PageLayout'; // Импорт PageLayout
import './Services.css';

const Services: React.FC = () => {
  const { services, quizQuestions, loading, error } = useServicesData();
  const [activeTab, setActiveTab] = useState<'list' | 'quiz'>('list');
  const [quizResult, setQuizResult] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const handleQuizComplete = (result: string) => {
    setQuizResult(result);
    setActiveTab('list');
  };

  const handleAppointmentClick = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setIsModalOpen(true);
  };

  return (
    <PageLayout>
      <div className="services-page">
        {loading ? (
          <div className="loading-screen">Загрузка услуг...</div>
        ) : error ? (
          <div className="error-message">Ошибка: {error}</div>
        ) : (
          <>
            <h1 className="services-header">Наши услуги</h1>
            
            <div className="services-tabs">
              <button
                className={`tab-button ${activeTab === 'list' ? 'active' : ''}`}
                onClick={() => setActiveTab('list')}
              >
                Все услуги
              </button>
              <button
                className={`tab-button ${activeTab === 'quiz' ? 'active' : ''}`}
                onClick={() => setActiveTab('quiz')}
              >
                Подобрать услугу
              </button>
            </div>

            {activeTab === 'list' ? (
              <div className="services-grid">
                {services.map(service => (
                  <ServiceCard
                    key={service.id}
                    {...service}
                    highlighted={quizResult === service.title}
                    onAppointmentClick={handleAppointmentClick}
                  />
                ))}
              </div>
            ) : (
              <Quiz
                questions={quizQuestions}
                onComplete={handleQuizComplete}
              />
            )}

            <AppointmentModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              serviceTitle={selectedService}
              onSubmit={(formData) => {
                console.log('Форма отправлена:', formData);
                setIsModalOpen(false);
              }}
            />
          </>
        )}
      </div>
    </PageLayout>
  );
};

export default Services;