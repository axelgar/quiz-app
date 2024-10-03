import { useCallback } from "react";
import { KEYS } from "../constants";
import { useGameProvider } from "../providers";

export const useCreateGlobalKeyHandler = () => {
  const { status, questionsIndex, decreaseQuestionsIndex, increaseQuestionsIndex, questions, reset } =
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
            return;
          }

          decreaseQuestionsIndex();
          break;

        case KEYS.ArrowRight:
          if (status === "idle") {
            return;
          }

          if (questionsIndex === questions.length - 1) {
            return;
          }

          increaseQuestionsIndex();
          break;
      }
    },
    [decreaseQuestionsIndex, increaseQuestionsIndex, questions.length, questionsIndex, status, reset],
  );

  return eventHandler;
};
