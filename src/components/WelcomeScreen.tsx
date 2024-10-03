import { Button } from "../atoms";
import { useGameProvider } from "../providers/GameProvider";

export const WelcomeScreen = () => {
  const { setStatus } = useGameProvider();

  return (
    <>
      <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
        Welcome to the Cint Quiz 🎉
      </h2>
      <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
        In this game you will get a random set of questions to test your general knowledge. There are three different
        type of questions, multiple choice, yes or no, and free text.
      </p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <Button onClick={() => setStatus("start")}>START →</Button>
      </div>
    </>
  );
};
