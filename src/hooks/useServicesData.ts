import { useState, useEffect } from 'react';
import { Service, QuizQuestion } from '../types/services';

export const useServicesData = () => {
  const [data, setData] = useState<{
    services: Service[];
    quizQuestions: QuizQuestion[];
    loading: boolean;
    error: string | null;
  }>({
    services: [],
    quizQuestions: [],
    loading: true,
    error: null
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [servicesRes, quizRes] = await Promise.all([
          fetch('/data/services.json'),
          fetch('/data/quiz-questions.json')
        ]);

        if (!servicesRes.ok || !quizRes.ok) {
          throw new Error('Failed to load data');
        }

        const [services, quizQuestions] = await Promise.all([
          servicesRes.json() as Promise<Service[]>,
          quizRes.json() as Promise<QuizQuestion[]>
        ]);

        setData({
          services,
          quizQuestions,
          loading: false,
          error: null
        });
      } catch (error) {
        setData({
          services: [],
          quizQuestions: [],
          loading: false,
          error: error instanceof Error ? error.message : 'Unknown error'
        });
      }
    };

    fetchData();
  }, []);

  return data;
};