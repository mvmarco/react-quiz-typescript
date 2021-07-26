import { useState } from 'react';
// import function API
import { fetchQuizQuestions } from './API';
// import types, DIFFICULTY from API to use the fetchQuizQuestions arguments
import { Difficulty } from './API';
// components
import QuestionCard from './components/QuestionCard';

const TOTAL_QUESTIONS = 10;
function App() {

  // STATES
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  // FUNCTIONS

  // API
  console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY));

  // function that start when we start the quiz
  const startTrivia = async () => {

  };
  // when the user select an answer this function gets fired
  /* 
    https://fettblog.eu/typescript-react/events/ :notes here
  */
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  }
  // function that triggers to let the user goes to the next question
  const nextQuestion = () => {

  }

  return (
    <div className="App">
      <h1>REACT QUIZ</h1>
      <button className="start" onClick={startTrivia}>
        Start
      </button>
      <p className="score">Score:</p>
      <p>Loading questions ...</p>
      {/* <QuestionCard
        question={questions[number].question}
        answers={questions[number].answers}
        callback={checkAnswer}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        questionNr={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
      /> */}
      <button className="next" onClick={nextQuestion}>
        Next Question
      </button>

    </div>
  );
}

export default App;
