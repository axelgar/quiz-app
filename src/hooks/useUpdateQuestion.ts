import { useCallback } from "react";
import { useGameProvider } from "../providers/GameProvider/GameContext";

export const useUpdateQuestion: () => [string | undefined, (newAnswer: string) => void] = () => {
  const { questions, currentQuestion, setQuestions } = useGameProvider();

  const updateAnswer = useCallback(
    (newAnswer: string) => {
      questions[currentQuestion].userAnswer = newAnswer;
      setQuestions({ ...questions });
    },
    [currentQuestion, questions, setQuestions],
  );

  return [questions[currentQuestion].userAnswer, updateAnswer];
};
