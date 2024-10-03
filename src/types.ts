export type QuestionType = "boolean" | "multiple" | "text";

export type Question = {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers?: string[];
};

export type QuestionMultiple = Omit<Question, "incorrect_answers"> & { incorrect_answers: string[] };

export type QuestionWithAnswer = Question & { userAnswer?: string };
