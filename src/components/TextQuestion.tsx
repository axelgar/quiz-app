import { useGameProvider } from "../providers/GameProvider/GameContext";
import { Question } from "../types";

type Props = {
  question: Question;
};

export const TextQuestion = (props: Props) => {
  const { currentQuestion, setCurrentQuestion } = useGameProvider();

  return (
    <article>
      <header className="absolute top-5 right-8">
        <p className="text-white text-end rounded-full py-2 px-4 border-2 border-white">{currentQuestion}</p>
      </header>
      <h1 className="text-white">{props.question.question}</h1>
      <button
        onClick={() => setCurrentQuestion(currentQuestion + 1)}
        className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        Start →
      </button>
    </article>
  );
};
