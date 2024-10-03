import { ReactNode } from "react";
import { useGameProvider } from "../providers";
import { Button } from "../atoms";
import { Pager } from "./Pager";

type Props = {
  question: string;
  children: ReactNode;
};

export const QuestionContainer = (props: Props) => {
  const { children, question } = props;
  const { questionsIndex, increaseQuestionsIndex, decreaseQuestionsIndex, questions, end } = useGameProvider();

  const handleNextClick = () => {
    if (questionsIndex + 1 === questions.length) {
      return end();
    }
    increaseQuestionsIndex();
  };

  const handlePreviousClick = () => {
    decreaseQuestionsIndex();
  };

  return (
    <>
      <header className="absolute top-5 right-8">
        <p className="text-white text-end rounded-full py-2 px-4 border-2 border-white">{questionsIndex + 1}</p>
      </header>
      <h1 className="mx-auto max-w-2xl text-2xl font-bold tracking-tight text-white sm:text-3xl">{question}</h1>

      {children}

      <footer>
        <div className="flex items-center justify-center gap-x-6 sm:w-60 mx-auto flex-row-reverse">
          <Button onClick={handleNextClick} fullWidth>
            {questionsIndex === questions.length - 1 ? "Finish" : "Next"} →
          </Button>
          <Button onClick={handlePreviousClick} fullWidth disabled={questionsIndex - 1 < 0}>
            ← Previous
          </Button>
        </div>
        <Pager />
      </footer>
    </>
  );
};
