import updateInventory from "./inventory_update_ES6";

describe("updateInventory", () => {
  it("should return an array with a length of 6", () => {
    const inventory = updateInventory(
      [
        [21, "Bowling Ball"],
        [2, "Dirty Sock"],
        [1, "Hair Pin"],
        [5, "Microphone"],
      ],
      [
        [2, "Hair Pin"],
        [3, "Half-Eaten Apple"],
        [67, "Bowling Ball"],
        [7, "Toothpaste"],
      ]
    );
    expect(inventory.length).toBe(6);
  });

  it("should return a specific output", () => {
    expect(
      updateInventory(
        [
          [21, "Bowling Ball"],
          [2, "Dirty Sock"],
          [1, "Hair Pin"],
          [5, "Microphone"],
        ],
        [
          [2, "Hair Pin"],
          [3, "Half-Eaten Apple"],
          [67, "Bowling Ball"],
          [7, "Toothpaste"],
        ]
      )
    ).toStrictEqual([
      [88, "Bowling Ball"],
      [2, "Dirty Sock"],
      [3, "Hair Pin"],
      [3, "Half-Eaten Apple"],
      [5, "Microphone"],
      [7, "Toothpaste"],
    ]);
  });

  it("should return a specific output with zeros", () => {
    expect(
      updateInventory(
        [
          [0, "Bowling Ball"],
          [0, "Dirty Sock"],
          [0, "Hair Pin"],
          [0, "Microphone"],
        ],
        [
          [1, "Hair Pin"],
          [1, "Half-Eaten Apple"],
          [1, "Bowling Ball"],
          [1, "Toothpaste"],
        ]
      )
    ).toStrictEqual([
      [1, "Bowling Ball"],
      [0, "Dirty Sock"],
      [1, "Hair Pin"],
      [1, "Half-Eaten Apple"],
      [0, "Microphone"],
      [1, "Toothpaste"],
    ]);
  });
});
