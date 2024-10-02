import { Button } from "../atoms";
import { useGameProvider } from "../providers/GameProvider/GameContext";
import { Question } from "../types";

type Props = {
  question: Question;
};

export const MultipleQuestion = (props: Props) => {
  const { currentQuestion, setCurrentQuestion } = useGameProvider();

  return (
    <article>
      <header className="absolute top-5 right-8">
        <p className="text-white text-end rounded-full py-2 px-4 border-2 border-white">{currentQuestion + 1}</p>
      </header>
      <h1 className="mx-auto max-w-2xl text-2xl font-bold tracking-tight text-white sm:text-3xl">
        {props.question.question}
      </h1>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <Button onClick={() => setCurrentQuestion(currentQuestion + 1)}>Next →</Button>
      </div>
    </article>
  );
};
