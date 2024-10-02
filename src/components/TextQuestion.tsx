import { ChangeEvent } from "react";
import { useUpdateQuestion } from "../hooks/useUpdateQuestion";
import { useGameProvider } from "../providers/GameProvider/GameContext";
import { Question } from "../types";
import { Button } from "../atoms";

type Props = {
  question: Question;
};

export const TextQuestion = (props: Props) => {
  const { currentQuestion, setCurrentQuestion } = useGameProvider();
  const [value, setValue] = useUpdateQuestion();

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <article>
      <header className="absolute top-5 right-8">
        <p className="text-white text-end rounded-full py-2 px-4 border-2 border-white">{currentQuestion}</p>
      </header>
      <h1 className="mx-auto max-w-2xl text-2xl font-bold tracking-tight text-white sm:text-3xl">
        {props.question.question}
      </h1>
      <form className="mt-10 flex flex-col items-center">
        <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
          Type your answer
        </label>
        <div className="mt-2">
          <input
            id={`answer-${currentQuestion}`}
            name={`answer-${currentQuestion}`}
            placeholder="8"
            maxLength={100}
            value={value || ""}
            onChange={handleOnChange}
            required
            aria-describedby={`answer-to-question-${currentQuestion}`}
            className="block w-36 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </form>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <Button onClick={() => setCurrentQuestion(currentQuestion + 1)} disabled={!value}>
          Next →
        </Button>
      </div>
    </article>
  );
};
