import { useRef } from "react";
import { Button, KeyIcon } from "../atoms";
import { useGameProvider } from "../providers";
import { useFocusOnMount } from "../hooks";

export const EndScreen = () => {
  const { reset: resetGame, questions } = useGameProvider();
  const ref = useRef<HTMLButtonElement>(null);
  useFocusOnMount(ref);

  const correctAnswers = questions.filter(
    ({ userAnswer, correct_answer }) => userAnswer?.toLowerCase() === correct_answer.toLowerCase(),
  ).length;

  const wrongAnswers = questions.filter(
    ({ userAnswer, correct_answer }) => userAnswer?.toLowerCase() !== correct_answer.toLowerCase(),
  ).length;

  const answers = questions.filter(({ userAnswer }) => userAnswer).length;

  const score = Math.round((correctAnswers / (correctAnswers + wrongAnswers)) * 100);

  return (
    <>
      <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
        Congratulations! ✨
      </h2>
      <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
        You have finished the quiz, now you can see how well you have done it right below:
      </p>

      <div className="flex justify-center">
        <ul className="text-white mt-10 flex flex-col items-start">
          <li>Correct: {correctAnswers}</li>
          <li>Wrong: {wrongAnswers}</li>
          <li>Questions answered: {answers}</li>
          <li>Score: {score}%</li>
        </ul>
      </div>

      <div className="mt-10 flex items-center justify-center gap-x-6">
        <Button onClick={resetGame} ref={ref}>
          RESTART <KeyIcon variant="dark">ESC</KeyIcon>
        </Button>
      </div>
    </>
  );
};
