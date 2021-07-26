import { shuffleArray } from "./utils";
// since difficulty can be many options, we export enum from TS and call it difficulty
// inside you speficy the constants, so we never will mistype a difficulty 
export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",

}

// the fetchQuizQuestion contains information that we need to put in TS in case we need to use them
export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

// the purpose of this type is to put together the correct answer and the incorect answer, array of strings
// in this way we add in Question a new key: value pair answers: string[] called QuestionsState
// QuestionState includes Question and the new type for answer!!! check APP
// we just add the TS not the actual value, the value is added in line 33
export type QuestionsState = Question & { answers: string[] };

// fetching data from API here
export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty) => {
   const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
   // two await, first you await the fetch and then the JSON conversion  
   const data = await (await fetch(endpoint)).json();
   console.log(data); // so you know that the result of the data is a JSON called results
   return data.results.map((question: Question) => {
     // we want to return an object, so it is easy to manipulate in APP
     // inside we spread the question array and the answers using the shuffleArray function in utils.js
     return (
       {
         ...question,
         answers: shuffleArray([...question.incorrect_answers, question.correct_answer]),
       }
     )
   })
   

}