// since difficulty can be many options, we export enum from TS and call it difficulty
// inside you speficy the constants, so we never will mistype a difficulty 
export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",

}

// fetching data from API here
export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty) => {
   const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
   // two await, first you await the fetch and then the JSON conversion  
   const data = await (await fetch(endpoint)).json();
   console.log(data);
   

}