import React, { useState } from 'react';
import { QuizQuestion } from '../../../../types/services';
import './Quiz.css'; // Импорт обычного CSS-файла

interface QuizProps {
  questions: QuizQuestion[];
  onComplete: (result: string) => void;
}

const Quiz: React.FC<QuizProps> = ({ questions, onComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerSelect = (service: string) => {
    const newAnswers = {
      ...selectedAnswers,
      [currentQuestionIndex]: service
    };

    setSelectedAnswers(newAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      determineResult(newAnswers);
    }
  };

  const determineResult = (answers: Record<number, string>) => {
    const result = Object.values(answers).includes('Имплантация') 
      ? 'Имплантация зубов' 
      : 'Лечение кариеса';
    onComplete(result);
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <h3 className="quiz-question">{currentQuestion.question}</h3>
        <div className="quiz-progress">
          Вопрос {currentQuestionIndex + 1} из {questions.length}
        </div>
      </div>

      <div className="quiz-options">
        {currentQuestion.options.map((option, index) => (
          <button
            key={index}
            className="quiz-option"
            onClick={() => handleAnswerSelect(option.service)}
          >
            {option.text}
          </button>
        ))}
      </div>

      <div className="quiz-navigation">
        {currentQuestionIndex > 0 && (
          <button 
            className="quiz-back-button" 
            onClick={handleBack}
          >
            Назад
          </button>
        )}
        <progress 
          className="quiz-progress-bar"
          value={currentQuestionIndex + 1} 
          max={questions.length} 
        />
      </div>
    </div>
  );
};

export default Quiz;