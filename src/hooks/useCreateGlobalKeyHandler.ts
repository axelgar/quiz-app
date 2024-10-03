import { useCallback } from "react";
import { KEYS } from "../constants";
import { useGameProvider } from "../providers";

export const useCreateGlobalKeyHandler = () => {
  const { status, idle, questionsIndex, decreaseQuestionsIndex, increaseQuestionsIndex, start, questions, end, reset } =
    useGameProvider();

  const eventHandler = useCallback(
    (event: KeyboardEvent) => {
      switch (event.key) {
        case KEYS.Escape:
          reset();
          break;

        case KEYS.ArrowLeft:
          if (status === "end") {
            return;
          }

          if (questionsIndex === 0) {
            return idle();
          }

          decreaseQuestionsIndex();
          break;

        case KEYS.ArrowRight:
          if (status === "idle") {
            return start();
          }

          if (questionsIndex === questions.length - 1) {
            return end();
          }

          increaseQuestionsIndex();
          break;
      }
    },
    [decreaseQuestionsIndex, end, idle, increaseQuestionsIndex, questions.length, questionsIndex, start, status, reset],
  );

  return eventHandler;
};
