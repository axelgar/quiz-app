import { describe, expect, it } from "vitest";
import { render, screen, fireEvent } from "../../tests/uitls";
import { MultipleQuestion } from "./MultipleQuestion";
import { QuestionMultiple } from "../../types";

const question: QuestionMultiple = {
  category: "Geography",
  correct_answer: "foo",
  difficulty: "easy",
  question: "Question?",
  type: "multiple",
  incorrect_answers: ["bar", "zed"],
};

describe("MultipleQuestion", () => {
  it("renders correclty", () => {
    render(<MultipleQuestion question={question} />);
    const options = [question.correct_answer, ...question.incorrect_answers].length;
    expect(screen.getAllByRole("radio").length).toBe(options);
  });

  it("user can select between the options", () => {
    render(<MultipleQuestion question={question} />);

    const firstRadioButton = screen.getAllByRole("radio")[0];
    const secondRadioButton = screen.getAllByRole("radio")[1];

    expect(firstRadioButton.ariaChecked).toBe("false");
    expect(secondRadioButton.ariaChecked).toBe("false");

    fireEvent.click(firstRadioButton);
    expect(firstRadioButton.ariaChecked).toBe("true");
    expect(secondRadioButton.ariaChecked).toBe("false");

    fireEvent.click(secondRadioButton);
    expect(firstRadioButton.ariaChecked).toBe("false");
    expect(secondRadioButton.ariaChecked).toBe("true");
  });
});
