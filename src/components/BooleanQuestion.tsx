import { Radio, RadioGroup } from "@headlessui/react";
import { useUpdateQuestion } from "../hooks";
import { Question } from "../types";
import { QuestionContainer } from "./QuestionContainer";

type Props = {
  question: Question;
};

const options = ["True", "False"];

export const BooleanQuestion = (props: Props) => {
  const { question } = props;
  const [value, setValue] = useUpdateQuestion();

  return (
    <QuestionContainer question={question.question}>
      <fieldset aria-label="Choose an option" className="flex flex-col items-center">
        <RadioGroup id={value} value={value || ""} onChange={setValue} className="flex mt-2 gap-3">
          {options.map((option) => (
            <Radio
              key={option}
              value={option}
              className="flex items-center text-md w-20 cursor-pointer focus:outline-none justify-center rounded-md bg-white px-3 py-3 font-semibold uppercase text-gray-900 ring-1 ring-gray-300 hover:bg-gray-50 data-[checked]:bg-indigo-600 data-[checked]:text-white data-[checked]:ring-0 data-[focus]:data-[checked]:ring-2 data-[focus]:ring-2 data-[focus]:ring-indigo-600 data-[focus]:ring-offset-2 data-[checked]:hover:bg-indigo-500 sm:flex-1 [&:not([data-focus],[data-checked])]:ring-inset"
            >
              {option}
            </Radio>
          ))}
        </RadioGroup>
      </fieldset>
    </QuestionContainer>
  );
};
