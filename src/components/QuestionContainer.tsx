import { ReactNode } from "react";
import { useGameProvider } from "../providers/GameProvider";
import { Button } from "../atoms";
import { twMerge } from "tailwind-merge";

type Props = {
  question: string;
  children: ReactNode;
};

export const QuestionContainer = (props: Props) => {
  const { currentIndex, setCurrentIndex, questions, setStatus } = useGameProvider();

  const handleNextClick = () => {
    if (currentIndex + 1 === questions.length) {
      return setStatus("end");
    }
    setCurrentIndex(currentIndex + 1);
  };

  const handlePreviousClick = () => {
    if (currentIndex - 1 < 0) {
      return setStatus("idle");
    }
    setCurrentIndex(currentIndex - 1);
  };

  return (
    <>
      <header className="absolute top-5 right-8">
        <p className="text-white text-end rounded-full py-2 px-4 border-2 border-white">{currentIndex + 1}</p>
      </header>
      <h1 className="mx-auto max-w-2xl text-2xl font-bold tracking-tight text-white sm:text-3xl">{props.question}</h1>

      {props.children}

      <footer>
        <div className="flex items-center justify-center gap-x-6 sm:w-60 mx-auto ">
          <Button onClick={handlePreviousClick} fullWidth>
            ← Previous
          </Button>
          <Button onClick={handleNextClick} fullWidth>
            Next →
          </Button>
        </div>

        <div className="flex gap-4 justify-center mt-5">
          {questions.map((question, index) => {
            return (
              <button
                aria-label={`Select sepecific question: ${index}`}
                onClick={() => setCurrentIndex(index)}
                key={`index-${index}`}
                className={twMerge(
                  `h-3 w-3 rounded-full bg-white border-2 border-transparent`,
                  question.userAnswer && "bg-green-500",
                  index === currentIndex && "border-orange-400",
                )}
              />
            );
          })}
        </div>
      </footer>
    </>
  );
};
