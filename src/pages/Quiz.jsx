import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle, XCircle, ArrowRight, RotateCcw } from 'lucide-react';
import './Quiz.css';

const Quiz = () => {
  const { id } = useParams();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  // Mock quiz data
  const quizData = [
    {
      question: "Which SQL statement is used to extract data from a database?",
      options: ["EXTRACT", "GET", "OPEN", "SELECT"],
      correctAnswer: 3
    },
    {
      question: "Which of the following is the correct syntax to select all columns from a table named 'Customers'?",
      options: [
        "SELECT all FROM Customers;",
        "SELECT * FROM Customers;",
        "SELECT [all] FROM Customers;",
        "SELECT Customers;"
      ],
      correctAnswer: 1
    },
    {
      question: "What does the DISTINCT keyword do in a SELECT statement?",
      options: [
        "Selects only unique values",
        "Selects only NULL values",
        "Selects all values",
        "Orders the results alphabetically"
      ],
      correctAnswer: 0
    }
  ];

  const handleOptionSelect = (index) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);

    if (index === quizData[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowResults(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setShowResults(false);
  };

  if (showResults) {
    return (
      <div className="quiz-page animate-fade-in">
        <div className="quiz-card card results-card">
          <h2>Quiz Complete!</h2>
          <div className="score-display">
            <div className="score-circle">
              <span className="score-text">{score}/{quizData.length}</span>
            </div>
          </div>
          <p className="feedback-text">
            {score === quizData.length ? 'Perfect score! You are a SQL master.' : 
             score > 0 ? 'Good job! Review the notes to perfect your knowledge.' : 
             'Keep learning and try again!'}
          </p>
          <div className="results-actions">
            <button onClick={restartQuiz} className="btn btn-outline">
              <RotateCcw size={18} /> Retake Quiz
            </button>
            <Link to="/topics" className="btn btn-primary">
              <ArrowRight size={18} /> Next Topic
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-page animate-fade-in">
      <div className="quiz-card card">
        <div className="quiz-header">
          <span className="question-count">Question {currentQuestion + 1} of {quizData.length}</span>
          <div className="quiz-progress">
            <div 
              className="fill" 
              style={{ width: `${((currentQuestion + 1) / quizData.length) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="question-section">
          <h2 className="question-text">{quizData[currentQuestion].question}</h2>
        </div>

        <div className="options-section">
          {quizData[currentQuestion].options.map((option, index) => {
            let optionClass = 'option';
            if (isAnswered) {
              if (index === quizData[currentQuestion].correctAnswer) {
                optionClass += ' correct';
              } else if (index === selectedOption) {
                optionClass += ' incorrect';
              }
            } else if (index === selectedOption) {
              optionClass += ' selected';
            }

            return (
              <button 
                key={index} 
                className={optionClass}
                onClick={() => handleOptionSelect(index)}
                disabled={isAnswered}
              >
                <span>{option}</span>
                {isAnswered && index === quizData[currentQuestion].correctAnswer && <CheckCircle size={20} />}
                {isAnswered && index === selectedOption && index !== quizData[currentQuestion].correctAnswer && <XCircle size={20} />}
              </button>
            );
          })}
        </div>

        {isAnswered && (
          <div className="quiz-footer animate-fade-in">
            <button onClick={nextQuestion} className="btn btn-primary next-btn">
              {currentQuestion === quizData.length - 1 ? 'Finish' : 'Next Question'} <ArrowRight size={18} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
