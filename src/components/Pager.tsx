import { twMerge } from "tailwind-merge";
import { useGameProvider } from "../providers";

export const Pager = () => {
  const { questions, setQuestionsIndex, questionsIndex } = useGameProvider();

  return (
    <div className="flex gap-4 justify-center mt-5 items-center">
      {questions.map((question, index) => {
        return (
          <button
            aria-label={`Select sepecific question: ${index}`}
            onClick={() => setQuestionsIndex(index)}
            key={`index-${index}`}
            className={twMerge(
              `h-3 w-3 rounded-full bg-white`,
              question.userAnswer && "bg-green-500",
              index === questionsIndex && "scale-150",
            )}
          />
        );
      })}
    </div>
  );
};
