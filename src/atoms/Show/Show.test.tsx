import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Show } from "./Show";

describe("Show", () => {
  it("renders children when 'when' is truthy", () => {
    render(
      <Show when={true}>
        <p>foo</p>
      </Show>,
    );

    expect(screen.queryByText("foo")).toBeInTheDocument();
  });

  it("does not renders children when 'when' is falsy", () => {
    render(
      <Show when={false}>
        <p>foo</p>
      </Show>,
    );

    expect(screen.queryByText("foo")).not.toBeInTheDocument();
  });
});
