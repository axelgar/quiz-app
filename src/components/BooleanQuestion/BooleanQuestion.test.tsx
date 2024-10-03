import { describe, expect, it } from "vitest";
import { setup, screen } from "../../tests/uitls";
import { BooleanQuestion } from "./BooleanQuestion";
import { QuestionBoolean } from "../../types";

const question: QuestionBoolean = {
  category: "Geography",
  correct_answer: "True",
  difficulty: "easy",
  question: "Question?",
  type: "boolean",
  incorrect_answers: ["False"],
};

describe("BooleanQuestion", () => {
  it("renders correclty", () => {
    setup(<BooleanQuestion question={question} />);

    expect(screen.getByRole("radiogroup")).toBeInTheDocument();
    expect(screen.getAllByRole("radio").length).toBe(2);
  });

  it("should be able to select between the options", async () => {
    const { user } = setup(<BooleanQuestion question={question} />);

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
