import { BooleanQuestion, MultipleQuestion, TextQuestion } from "../components";
import { Question, QuestionMultiple } from "../types";

export function getQuestionComponent(question: Question) {
  if (question.type === "text") return <TextQuestion question={question} />;
  if (question.type === "multiple") return <MultipleQuestion question={question as QuestionMultiple} />;
  if (question.type === "boolean") return <BooleanQuestion question={question} />;
  return <></>;
}
