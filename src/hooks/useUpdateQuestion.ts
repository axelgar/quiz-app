import { useCallback } from "react";
import { useGameProvider } from "../providers";

export const useUpdateQuestion: () => [string | undefined, (userAnswer: string) => void] = () => {
  const { questions, questionsIndex, setQuestions } = useGameProvider();

  const updateAnswer = useCallback(
    (userAnswer: string) => {
      questions[questionsIndex] = { ...questions[questionsIndex], userAnswer };
      setQuestions([...questions]);
    },
    [questionsIndex, questions, setQuestions],
  );

  return [questions[questionsIndex].userAnswer, updateAnswer];
};
