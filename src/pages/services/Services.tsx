import React, { useState, useEffect } from 'react';
import { PageLayout } from '../../components/PageLayout/PageLayout';
import './Services.css';

// Типы (оставляем как было)
interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  price: string;
}

interface QuizQuestion {
  question: string;
  options: {
    text: string;
    service: string;
  }[];
}

interface ServiceCardProps extends Service {
  highlighted: boolean;
}

interface QuizProps {
  questions: QuizQuestion[];
  onComplete: (result: string) => void;
}

export const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'list' | 'quiz'>('list');
  const [quizResult, setQuizResult] = useState<string | null>(null);
  const [services, setServices] = useState<Service[]>([]);
  const [quizQuestions, setQuizQuestions] = useState<QuizQuestion[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Загрузка данных при монтировании
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [servicesRes, quizRes] = await Promise.all([
          fetch('/data/services.json'),
          fetch('/data/quiz-questions.json')
        ]);

        if (!servicesRes.ok || !quizRes.ok) {
          throw new Error('Ошибка загрузки данных');
        }

        const [servicesData, quizData] = await Promise.all([
          servicesRes.json(),
          quizRes.json()
        ]);

        setServices(servicesData);
        setQuizQuestions(quizData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Неизвестная ошибка');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleQuizComplete = (result: string) => {
    setQuizResult(result);
    setActiveTab('list');
  };

  if (isLoading) {
    return (
      <PageLayout>
        <div className="loading-message">Загрузка данных...</div>
      </PageLayout>
    );
  }

  if (error) {
    return (
      <PageLayout>
        <div className="error-message">Ошибка: {error}</div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className="services-page">
        <h1>Наши услуги</h1>
        
        <div className="services-tabs">
          <button 
            className={`tab-btn ${activeTab === 'list' ? 'active' : ''}`}
            onClick={() => setActiveTab('list')}
          >
            Все услуги
          </button>
          <button 
            className={`tab-btn ${activeTab === 'quiz' ? 'active' : ''}`}
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
              />
            ))}
          </div>
        ) : (
          <Quiz 
            questions={quizQuestions} 
            onComplete={handleQuizComplete}
          />
        )}
      </div>
    </PageLayout>
  );
};

// Компоненты ServiceCard и Quiz остаются без изменений
const ServiceCard: React.FC<ServiceCardProps> = ({ 
  icon, 
  title, 
  description, 
  price, 
  highlighted 
}) => (
  <div className={`service-card ${highlighted ? 'highlighted' : ''}`}>
    <div className="service-icon">{icon}</div>
    <h3>{title}</h3>
    <p>{description}</p>
    <div className="service-price">{price}</div>
    <button className="appointment-btn">Записаться</button>
  </div>
);

const Quiz: React.FC<QuizProps> = ({ questions, onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const handleAnswer = (service: string) => {
    const newAnswers = { ...answers, [currentQuestion]: service };
    setAnswers(newAnswers);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const result = Object.values(newAnswers).reduce((acc, val) => 
        val === "Имплантация" ? val : acc, 
        "Терапия"
      );
      onComplete(result);
    }
  };

  return (
    <div className="quiz-container">
      <h3>{questions[currentQuestion].question}</h3>
      <div className="quiz-options">
        {questions[currentQuestion].options.map((option, idx: number) => (
          <button 
            key={idx}
            className="quiz-option"
            onClick={() => handleAnswer(option.service)}
          >
            {option.text}
          </button>
        ))}
      </div>
      <progress 
        value={currentQuestion + 1} 
        max={questions.length} 
      />
    </div>
  );
};

export default Services;