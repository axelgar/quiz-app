import { describe, expect, it } from "vitest";
import { screen, setup } from "../../tests/uitls";
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
    setup(<TextQuestion question={question} />);

    expect(screen.getByLabelText("answer-0")).toBeInTheDocument();
  });

  it("should be able to type an answer", async () => {
    const { user } = setup(<TextQuestion question={question} />);

    const input = screen.getByLabelText("answer-0");
    await user.type(input, "foo");

    expect(screen.getByDisplayValue("foo")).toBeInTheDocument();
  });
});
