import { describe, it, expect } from "vitest";
import { shuffleArray } from "./shuffle-array";

describe("shuffleArray", () => {
  it("returned array has the same length as the original one", () => {
    const array = new Array(5).fill(0);
    const shuffled = shuffleArray(array);
    expect(shuffled.length).toEqual(array.length);
  });

  it("returns same itmes as the original array", () => {
    const array = new Array(5).fill(0).map((_, index) => index);
    const shuffled = shuffleArray(array);
    expect(shuffled.filter((value) => array.includes(value)).length).toEqual(array.length);
  });
});
