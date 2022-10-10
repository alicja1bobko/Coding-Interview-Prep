import { symDiff } from "./symmetric_difference";

describe("symmetric difference", () => {
  it("should return a specific output", () => {
    expect(symDiff([1, 2, 3], [5, 2, 1, 4]).sort()).toEqual([3, 4, 5]);
  });
  it("should return a specific output", () => {
    expect(symDiff([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]).sort()).toEqual([
      1, 4, 5,
    ]);
  });
  it("should return a specific output", () => {
    expect(
      symDiff(
        [3, 3, 3, 2, 5],
        [2, 1, 5, 7],
        [3, 4, 6, 6],
        [1, 2, 3],
        [5, 3, 9, 8],
        [1]
      ).sort()
    ).toEqual([1, 2, 4, 5, 6, 7, 8, 9]);
  });
});
