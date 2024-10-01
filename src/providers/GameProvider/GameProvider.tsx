import { GameContext } from "./GameContext";
import data from "../../questions.json";
import { shuffleArray } from "../../utils/shuffle-array";
import { ReactNode, useState } from "react";

type Props = { children: ReactNode };

export const GameProvider = (props: Props) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questions, setQuestions] = useState(shuffleArray(data));
  const [isStart, setIsStart] = useState(false);
  const [isEnd, setIsEnd] = useState(false);

  const onSetCurrentQuestions = (number: number) => {
    if (currentQuestion >= questions.length - 1) {
      return;
    }
    setCurrentQuestion(number);
  };

  return (
    <GameContext.Provider
      {...props}
      value={{
        questionsPull: data,
        questions,
        setQuestions,
        currentQuestion,
        setCurrentQuestion: onSetCurrentQuestions,
        isStart,
        setIsStart,
        isEnd,
        setIsEnd,
        resetGame: () => {
          setIsEnd(false);
          setQuestions(shuffleArray(data));
        },
      }}
    />
  );
};
