function capitalizeLetters(str) {
  let array = [];
  for (let i = 0; i < str.length; ++i) {
    if (str[i - 1] === " " || i === 0) {
      array.push(str[i].toUpperCase());
    } else array.push(str[i]);
  }
  return array.join("");
}

describe("Most Frequent Character", () => {
  it("should return a character of the string", () => {
    const str = "hello";
    expect([...str]).toContain(maxCharacter(str));
  });

  it("should return the most frequent character of the string", () => {
    const str = "Book";
    expect(maxCharacter(str)).toBe("o");
  });

  it("should not take spaces into account", () => {
    const str = "viola is not my passion";
    expect(maxCharacter(str)).toBe("i");
  });
});
