function maxCharacter(str) {
  const array = [...str].filter((e) => e !== " ").sort();
  let count = 0,
    max = 0,
    char;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === array[i - 1] && i > 0) count++;
    else count = 1;
    if (count > max) {
      max = count;
      char = array[i];
    }
  }
  return char;
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
    const str = "violin is not my passion";
    expect(maxCharacter(str)).toBe("i");
  });
});
