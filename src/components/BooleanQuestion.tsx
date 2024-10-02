import { Button } from "../atoms";
import { useUpdateQuestion } from "../hooks/useUpdateQuestion";
import { useGameProvider } from "../providers/GameProvider/GameContext";
import { Question } from "../types";
import { Radio, RadioGroup } from "@headlessui/react";

type Props = {
  question: Question;
};

const options = [
  { name: "True", inStock: true },
  { name: "False", inStock: true },
];

export const BooleanQuestion = (props: Props) => {
  const { currentQuestion, setCurrentQuestion } = useGameProvider();
  const [value, setValue] = useUpdateQuestion();

  return (
    <article>
      <header className="absolute top-5 right-8">
        <p className="text-white text-end rounded-full py-2 px-4 border-2 border-white">{currentQuestion}</p>
      </header>
      <h1 className="mx-auto max-w-2xl text-2xl font-bold tracking-tight text-white sm:text-3xl">
        {props.question.question}
      </h1>

      <fieldset aria-label="Choose an option" className="mt-10 flex flex-col items-center">
        <RadioGroup id={value} value={value || ""} onChange={setValue} className="flex mt-2 gap-3">
          {options.map((option) => (
            <Radio
              key={option.name}
              value={option}
              disabled={!option.inStock}
              className="flex items-center w-20 cursor-pointer focus:outline-none justify-center rounded-md bg-white px-3 py-3 text-sm font-semibold uppercase text-gray-900 ring-1 ring-gray-300 hover:bg-gray-50 data-[checked]:bg-indigo-600 data-[checked]:text-white data-[checked]:ring-0 data-[focus]:data-[checked]:ring-2 data-[focus]:ring-2 data-[focus]:ring-indigo-600 data-[focus]:ring-offset-2 data-[checked]:hover:bg-indigo-500 sm:flex-1 [&:not([data-focus],[data-checked])]:ring-inset"
            >
              {option.name}
            </Radio>
          ))}
        </RadioGroup>
      </fieldset>

      <div className="mt-10 flex items-center justify-center gap-x-6">
        <Button onClick={() => setCurrentQuestion(currentQuestion + 1)} disabled={!value}>
          Next →
        </Button>
      </div>
    </article>
  );
};
