//question card component, where the questions are displayed as well as options

// typeScript properties
type Props = {
  question: string;
  // array of strings
  answers: string[];
  callback: any;
  userAnswer: any; // any, because it will be used as boolean on the button disabled
  questionNr: number;
  totalQuestions: number;
};


// first specificy it is an funtional component (FC) and the props are passed inside a <Props>
const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestions
}) => {
  return (
    <div>
      <p className="number">
        Question: {questionNr} / {totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }} />
      <div>
        {answers.map(answer => {
          return (
            <div>
              <button disabled={userAnswer} onClick={callback}>
                <span dangerouslySetInnerHTML={{ __html: answer }}></span>
              </button>
            </div>
          )
        })}
      </div>
    </div >
  )
};

export default QuestionCard;