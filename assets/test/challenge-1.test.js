function reverseString(str) {
  return [...str].reverse().join("");
}

describe("Reverse Strings", () => {
  it("should make last char become the first one", () => {
    const str = "hello";

    expect(str[4]).toEqual(reverseString(str)[0]);
  });

  it("should reverse the string", () => {
    const str = "guitar";
    expect(reverseString(str)).toBe("ratiug");
  });

  it("transforms 'pencil' into 'licnep'", () => {
    const str = "pencil";
    expect(reverseString(str)).toBe("licnep");
  });
});
