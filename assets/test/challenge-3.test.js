function reverseInt(int) {
  let reversedInt = int.toString();
  return eval([...reversedInt].reverse().join(""));
}

describe("Reverse Integers", () => {
  it("should reverse the integer", () => {
    const int = 435;
    expect(reverseInt(int)).toBe(534);
  });

  it("transforms '81293' into '39218'", () => {
    const int = 81293;
    expect(reverseInt(int)).toBe(39218);
  });

  it("should work regardless decimals", () => {
    const int = 1.55;
    expect(reverseInt(int)).toBe(55.1);
  });
});
