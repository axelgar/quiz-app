import { twMerge } from "tailwind-merge";
import { useGameProvider } from "../providers";

export const Pager = () => {
  const { questions, setQuestionsIndex, questionsIndex } = useGameProvider();

  return (
    <div className="flex gap-4 justify-center mt-5">
      {questions.map((question, index) => {
        return (
          <button
            aria-label={`Select sepecific question: ${index}`}
            onClick={() => setQuestionsIndex(index)}
            key={`index-${index}`}
            className={twMerge(
              `h-3 w-3 rounded-full bg-white border-2 border-transparent`,
              question.userAnswer && "bg-green-500",
              index === questionsIndex && "outline outline-2 outline-offset-2 outline-white",
            )}
          />
        );
      })}
    </div>
  );
};
