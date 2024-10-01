import { Question } from "../types";

type Props = {
  question: Question;
};

export const BooleanQuestion = (props: Props) => {
  return <h1 className="text-white">{props.question.question}</h1>;
};
