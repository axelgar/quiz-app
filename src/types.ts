export type Question = {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
};

export type QuestionMultiple = Omit<Question, "type"> & {
  type: "multiple";
  incorrect_answers: string[];
};

export type QuestionBoolean = Omit<Question, "type"> & {
  type: "boolean";
  incorrect_answers: string[];
};

export type QuestionText = Omit<Question, "type"> & {
  type: "text";
};

export type QuestionWithAnswer = Question & { userAnswer?: string };
