import { BooleanQuestion, MultipleQuestion, TextQuestion } from "../components";
import { Question, QuestionBoolean, QuestionMultiple, QuestionText } from "../types";

export function getQuestionComponent(question: Question) {
  if (question.type === "text") return <TextQuestion key={question.question} question={question as QuestionText} />;
  if (question.type === "multiple")
    return <MultipleQuestion key={question.question} question={question as QuestionMultiple} />;
  if (question.type === "boolean")
    return <BooleanQuestion key={question.question} question={question as QuestionBoolean} />;
  return <></>;
}
