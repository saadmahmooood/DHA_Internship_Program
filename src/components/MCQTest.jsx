import React, { useState, useEffect } from 'react';
import './MCQTest.css';

const questions = [
  { id: 1, question: 'Which of the following data structures is the most efficient for implementing a priority queue?', options: ['Stack', 'Queue', 'Linked List', 'Heap'] },
  { id: 2, question: 'In the Software Development Life Cycle (SDLC), what is the primary purpose of the "Design" phase?', options: ['To gather and analyze requirements', 'To write and test the code', 'To plan the project timeline and resources', 'To create the architecture and design specifications'] },
  // Add more questions as needed
];

const MCQTest = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(3600); // 1 hour in seconds
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    const id = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime <= 0) {
          clearInterval(id);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    setIntervalId(id);
    return () => clearInterval(id);
  }, []);

  const handleAnswerChange = (questionId, option) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: option
    });
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prevIndex => prevIndex - 1);
    }
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <div className="mcq-test-container">
      <img className="im" src="src/assets/images/logo.png" alt="DHA Logo" />
      <div className="test-header">
        <h1>MCQ Test</h1>
        <div className="timer">
          <span>Time Left:</span>
          <span>{formatTime(timeLeft)}</span>
        </div>
      </div>
      <div className="progress-tracker">
        <div className="progress-bar" style={{ width: `${(currentQuestionIndex + 1) / questions.length * 100}%` }} />
        <div className="progress-text">
          Question {currentQuestionIndex + 1} of {questions.length}
        </div>
      </div>
      <div className="question-container">
        <h2>{questions[currentQuestionIndex].question}</h2>
        <div className="options">
          {questions[currentQuestionIndex].options.map((option, index) => (
            <label key={index} className="option-label">
              <input
                type="radio"
                name={`question-${questions[currentQuestionIndex].id}`}
                value={option}
                checked={selectedAnswers[questions[currentQuestionIndex].id] === option}
                onChange={() => handleAnswerChange(questions[currentQuestionIndex].id, option)}
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
        <div className="navigation-buttons">
          <button onClick={handlePrevQuestion} disabled={currentQuestionIndex === 0}>Previous</button>
          <button onClick={handleNextQuestion} disabled={currentQuestionIndex === questions.length - 1}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default MCQTest;
