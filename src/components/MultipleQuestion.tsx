import { useFocusOnMount, useUpdateQuestion } from "../hooks";
import { QuestionMultiple } from "../types";
import { QuestionContainer } from "./QuestionContainer";

type Props = {
  question: QuestionMultiple;
};

export const MultipleQuestion = (props: Props) => {
  const { question } = props;
  const [value, setValue] = useUpdateQuestion();
  const ref = useFocusOnMount<HTMLLabelElement>();

  const options = [...question.incorrect_answers, question.correct_answer];

  return (
    <QuestionContainer question={question.question}>
      <fieldset className="flex flex-col items-center">
        <div className="space-y-6">
          {options.map((option, index) => (
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
              <label
                ref={index === 0 ? ref : undefined}
                htmlFor={option}
                className="ml-3 block text-md font-medium leading-6 text-white"
              >
                {option}
              </label>
            </div>
          ))}
        </div>
      </fieldset>
    </QuestionContainer>
  );
};
