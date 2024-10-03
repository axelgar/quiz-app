import { ReactNode, useState } from "react";
import { GameContext } from "./GameContext";
import { shuffleArray } from "../../utils";
import { GameStatus } from "./types";
import data from "../../questions.json";

type Props = { children: ReactNode };

export const GameProvider = (props: Props) => {
  const [questionsIndex, setQuestionsIndex] = useState(0);
  const [questions, setQuestions] = useState(shuffleArray(data).slice(0, 5));
  const [status, setStatus] = useState<GameStatus>("idle");

  const increaseQuestionsIndex = () => {
    setQuestionsIndex((prev) => Math.min(prev + 1, questions.length - 1));
  };

  const decreaseQuestionsIndex = () => {
    setQuestionsIndex((prev) => Math.max(prev - 1, 0));
  };

  const reset = () => {
    console.info("reset()");
    setStatus("idle");
    setQuestionsIndex(0);
    setQuestions([...shuffleArray(data).slice(0, 5)]);
  };

  const idle = () => {
    console.info("idle()");
    setStatus("idle");
  };

  const start = () => {
    console.info("start()");
    setStatus("start");
  };

  const end = () => {
    console.info("end()");
    setStatus("end");
  };

  return (
    <GameContext.Provider
      {...props}
      value={{
        questions,
        setQuestions,
        status,
        reset,
        idle,
        start,
        end,
        questionsIndex,
        increaseQuestionsIndex,
        decreaseQuestionsIndex,
        setQuestionsIndex,
      }}
    />
  );
};
