import { Button, KeyIcon } from "../../atoms";
import { useGameProvider } from "../../providers";
import { useFocusOnMount } from "../../hooks";

export const WelcomeScreen = () => {
  const { start } = useGameProvider();
  const ref = useFocusOnMount<HTMLButtonElement>();

  return (
    <>
      <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
        Welcome to the Cint Quiz 🎉
      </h2>
      <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
        In this game you will get a random set of questions to test your general knowledge. There are three different
        type of questions, multiple choice, yes or no, and free text.
      </p>

      <ul className="text-white flex flex-col gap-2 mx-auto mt-10">
        <li className="flex items-center gap-2">
          <KeyIcon>ESC</KeyIcon> Restart quiz
        </li>
        <li className="flex items-center gap-2">
          <KeyIcon>→</KeyIcon> Next question
        </li>
        <li className="flex items-center gap-2">
          <KeyIcon>←</KeyIcon> Previous question
        </li>
      </ul>

      <div className="mt-10 flex items-center justify-center gap-x-6">
        <Button ref={ref} onClick={start}>
          START →
        </Button>
      </div>
    </>
  );
};
