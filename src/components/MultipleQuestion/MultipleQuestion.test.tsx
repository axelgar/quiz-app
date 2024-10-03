import { describe, expect, it } from "vitest";
import { setup, screen } from "../../tests/uitls";
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
    setup(<MultipleQuestion question={question} />);
    const options = [question.correct_answer, ...question.incorrect_answers].length;
    expect(screen.getAllByRole("radio").length).toBe(options);
  });

  it("should be able to select between the options", async () => {
    const { user } = setup(<MultipleQuestion question={question} />);

    const firstRadioButton = screen.getAllByRole("radio")[0];
    const secondRadioButton = screen.getAllByRole("radio")[1];

    expect(firstRadioButton.ariaChecked).toBe("false");
    expect(secondRadioButton.ariaChecked).toBe("false");

    await user.click(firstRadioButton);
    expect(firstRadioButton.ariaChecked).toBe("true");
    expect(secondRadioButton.ariaChecked).toBe("false");

    await user.click(secondRadioButton);
    expect(firstRadioButton.ariaChecked).toBe("false");
    expect(secondRadioButton.ariaChecked).toBe("true");
  });
});
