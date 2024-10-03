import { useCallback } from "react";
import { useGameProvider } from "../providers/GameProvider";

export const useUpdateQuestion: () => [string | undefined, (userAnswer: string) => void] = () => {
  const { questions, currentIndex, setQuestions } = useGameProvider();

  const updateAnswer = useCallback(
    (userAnswer: string) => {
      questions[currentIndex] = { ...questions[currentIndex], userAnswer };
      setQuestions([...questions]);
    },
    [currentIndex, setQuestions],
  );

  return [questions[currentIndex].userAnswer, updateAnswer];
};
