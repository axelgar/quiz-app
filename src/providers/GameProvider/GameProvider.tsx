import { GameContext } from "./GameContext";
import data from "../../questions.json";
import { shuffleArray } from "../../utils";
import { ReactNode, useState } from "react";
import { GameStatus } from "../../types";

type Props = { children: ReactNode };

export const GameProvider = (props: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [questions, setQuestions] = useState(shuffleArray(data).slice(0, 5));
  const [status, setStatus] = useState<GameStatus>("idle");

  const onSetCurrentIndex = (number: number) => {
    if (currentIndex > questions.length - 1 || currentIndex < 0) {
      return;
    }

    setCurrentIndex(number);
  };

  const resetGame = () => {
    setStatus("idle");
    setCurrentIndex(0);
    setQuestions([...shuffleArray(data).slice(0, 5)]);
  };

  return (
    <GameContext.Provider
      {...props}
      value={{
        questions,
        setQuestions,
        status,
        setStatus,
        currentIndex,
        setCurrentIndex: onSetCurrentIndex,
        resetGame,
      }}
    />
  );
};
