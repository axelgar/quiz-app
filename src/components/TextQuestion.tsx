import { ChangeEvent } from "react";
import { useUpdateQuestion } from "../hooks/useUpdateQuestion";
import { useGameProvider } from "../providers/GameProvider";
import { Question } from "../types";
import { QuestionContainer } from "./QuestionContainer";

type Props = {
  question: Question;
};

export const TextQuestion = (props: Props) => {
  const { currentIndex: currentQuestion } = useGameProvider();
  const [value, setValue] = useUpdateQuestion();

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <QuestionContainer question={props.question.question}>
      <form className="flex flex-col items-center">
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
      </form>
    </QuestionContainer>
  );
};
