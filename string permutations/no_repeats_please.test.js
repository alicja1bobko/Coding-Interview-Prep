import { permAlone, findPerms } from "./no_repeats_please";

describe("permAlone", () => {
  it("should return 2", () => {
    expect(permAlone("aab")).toBe(2);
  });
  it("should return 0", () => {
    expect(permAlone("aaa")).toBe(0);
  });
  it("should return 1", () => {
    expect(permAlone("a")).toBe(1);
  });
  it("should return 3600", () => {
    expect(permAlone("abcdefa")).toBe(3600);
  });
});
