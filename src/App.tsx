import React, { useState } from 'react';
import { fetchQuizQuestion, Diffculty } from './component/Api';
import { QuestionCard } from './component/QuestionCard';
import './App.css';

const TOTAL_QUESTIONS = 10;
function App() {
  const [loading, setLoading] = useState(false);
  const [number, setNumber] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const StartTrivia = async () => {};
  console.log(fetchQuizQuestion(TOTAL_QUESTIONS, Diffculty.EASY));
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};

  const nextQuestion = () => {};
  return (
    <div className="App">
      <h1>React Quiz</h1>
      <button className="start">Start</button>
      <p className="score">Your Score:</p>
      <p>Wait Loading Question ...!</p>
      {/* <QuestionCard
        questionNr={number + 1}
        totalQuestion={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        callback={checkAnswer}
      /> */}
      <button className="next" onClick={nextQuestion}>
        Next Question
      </button>
    </div>
  );
}

export default App;
