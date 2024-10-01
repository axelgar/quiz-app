import { BooleanQuestion } from "../components/BooleanQuestion";
import { MultipleQuestion } from "../components/MultipleQuestion";
import { TextQuestion } from "../components/TextQuestion";
import { Question } from "../types";

export function getQuestionComponent(question: Question) {
  if (question.type === "text") return <TextQuestion question={question} />;
  if (question.type === "multiple") return <MultipleQuestion question={question} />;
  if (question.type === "boolean") return <BooleanQuestion question={question} />;
  return <></>;
}
