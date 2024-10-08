import { ChangeEvent } from "react";
import { useFocusOnMount, useUpdateQuestion } from "../../hooks";
import { useGameProvider } from "../../providers";
import { QuestionText } from "../../types";
import { QuestionContainer } from "../QuestionContainer/QuestionContainer";

type Props = {
  question: QuestionText;
};

export const TextQuestion = (props: Props) => {
  const { question } = props;
  const { questionsIndex } = useGameProvider();
  const [value, setValue] = useUpdateQuestion();
  const ref = useFocusOnMount<HTMLInputElement>();

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <QuestionContainer question={question.question}>
      <div className="flex flex-col items-center">
        <label
          htmlFor={`answer-${questionsIndex}`}
          className="text-start block text-md font-medium leading-6 text-white mb-2"
        >
          Type your answer
        </label>
        <input
          ref={ref}
          id={`answer-${questionsIndex}`}
          name={`answer-${questionsIndex}`}
          aria-label={`answer-${questionsIndex}`}
          placeholder="Batman"
          maxLength={100}
          value={value || ""}
          onChange={handleOnChange}
          required
          aria-describedby={`answer-to-question-${questionsIndex}`}
          className="block w-full sm:w-48 rounded-md border-0 text-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </QuestionContainer>
  );
};
