import { describe, expect, it, Mock, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { QuestionContainer } from "./QuestionContainer";
import { useGameProvider } from "../../providers";

vi.mock("../../providers", () => ({
  useGameProvider: vi.fn(),
}));

describe("QuestionContainer", () => {
  it("should increase the question index when clicking the 'Next' button", async () => {
    const user = userEvent.setup();

    const increaseQuestionsIndex = vi.fn();
    const decreaseQuestionsIndex = vi.fn();
    const end = vi.fn();

    (useGameProvider as Mock).mockReturnValue({
      questionsIndex: 0,
      increaseQuestionsIndex,
      decreaseQuestionsIndex,
      questions: ["Question 1", "Question 2", "Question 3"],
      end,
    });

    render(<QuestionContainer question="question">Content</QuestionContainer>);
    expect(screen.getByText("1")).toBeInTheDocument();

    await user.click(screen.getByText("Next →"));

    expect(increaseQuestionsIndex).toHaveBeenCalled();
  });

  it("should decrease the question index when clicking the 'Previous' button", async () => {
    const user = userEvent.setup();

    const increaseQuestionsIndex = vi.fn();
    const decreaseQuestionsIndex = vi.fn();
    const end = vi.fn();

    (useGameProvider as Mock).mockReturnValue({
      questionsIndex: 1,
      increaseQuestionsIndex,
      decreaseQuestionsIndex,
      questions: ["Question 1", "Question 2", "Question 3"],
      end,
    });

    render(<QuestionContainer question="question">Content</QuestionContainer>);

    expect(screen.getByText("2")).toBeInTheDocument();

    await user.click(screen.getByText("← Previous"));

    expect(decreaseQuestionsIndex).toHaveBeenCalled();
  });

  it("should disable the 'Previous' button when questionsIndex is 0", () => {
    const increaseQuestionsIndex = vi.fn();
    const decreaseQuestionsIndex = vi.fn();
    const end = vi.fn();

    (useGameProvider as Mock).mockReturnValue({
      questionsIndex: 0,
      increaseQuestionsIndex,
      decreaseQuestionsIndex,
      questions: ["Question 1", "Question 2", "Question 3"],
      end,
    });

    render(<QuestionContainer question="question">Content</QuestionContainer>);

    expect(screen.getByText("← Previous")).toBeDisabled();
  });

  it("should call 'end' when the last question is reached and 'Next' is clicked", async () => {
    const user = userEvent.setup();

    const increaseQuestionsIndex = vi.fn();
    const decreaseQuestionsIndex = vi.fn();
    const end = vi.fn();

    (useGameProvider as Mock).mockReturnValue({
      questionsIndex: 2,
      increaseQuestionsIndex,
      decreaseQuestionsIndex,
      questions: ["Question 1", "Question 2", "Question 3"],
      end,
    });

    render(<QuestionContainer question="question">Content</QuestionContainer>);

    await user.click(screen.getByText("Finish →"));

    expect(end).toHaveBeenCalled();
  });
});
