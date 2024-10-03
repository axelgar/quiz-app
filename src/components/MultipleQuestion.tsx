import { useUpdateQuestion } from "../hooks/useUpdateQuestion";
import { QuestionMultiple } from "../types";
import { QuestionContainer } from "./QuestionContainer";

type Props = {
  question: QuestionMultiple;
};

export const MultipleQuestion = (props: Props) => {
  const [value, setValue] = useUpdateQuestion();
  const options = [...props.question.incorrect_answers, props.question.correct_answer];

  return (
    <QuestionContainer question={props.question.question}>
      <fieldset className="flex flex-col items-center">
        <div className="space-y-6">
          {options.map((option) => (
            <div key={option} className="flex items-center">
              <input
                checked={value === option}
                id={option}
                name="notification-method"
                type="radio"
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                onChange={() => {
                  setValue(option);
                }}
              />
              <label htmlFor={option} className="ml-3 block text-md font-medium leading-6 text-white">
                {option}
              </label>
            </div>
          ))}
        </div>
      </fieldset>
    </QuestionContainer>
  );
};
