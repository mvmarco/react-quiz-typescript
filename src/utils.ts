// keep small functions to randomize answers from the question the user sees
// here we shuffle the array, the type is any type inside an array
export const shuffleArray = (array: any[]) =>
// the array we give/pass to the function will be spreaded
  [...array].sort(() => Math.random() - 0.5);