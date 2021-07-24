import React from 'react';

function App() {
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
    </div>
  );
}

export default App;
