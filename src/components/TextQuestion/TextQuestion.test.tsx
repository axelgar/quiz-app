import { describe, expect, it } from "vitest";
import { render, screen, fireEvent } from "../../tests/uitls";
import { TextQuestion } from "./TextQuestion";
import { QuestionText } from "../../types";

const question: QuestionText = {
  category: "Geography",
  correct_answer: "foo",
  difficulty: "easy",
  question: "Question?",
  type: "text",
};

describe("TextQuestion", () => {
  it("renders correclty", () => {
    render(<TextQuestion question={question} />);
    screen.debug();
    expect(screen.getByLabelText("answer-0")).toBeInTheDocument();
  });

  it("use can type an anwser", () => {
    render(<TextQuestion question={question} />);

    const input = screen.getByLabelText("answer-0");
    fireEvent.change(input, { target: { value: "foo" } });

    expect(screen.getByDisplayValue("foo")).toBeInTheDocument();
  });
});
