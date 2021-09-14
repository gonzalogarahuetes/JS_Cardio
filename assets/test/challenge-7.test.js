function longestWord(str) {
  let word = [];
  const arraySort = str.split(" ").sort((a, b) => {
    if (a.length > b.length) return -1;
    if (a.length < b.length) return 1;
    return 0;
  });
  for (let i = 0; i < arraySort.length; i++) {
    if (i === 0)
      if (arraySort[i].length !== arraySort[i + 1].length) return arraySort[i];
    if (arraySort[i].length === arraySort[0].length) word.push(arraySort[i]);
  }
  return word;
}

describe("Longest Word", () => {
  it("should return the longest word of the string", () => {
    const str =
      "Session of our Intermediate whiteboard style JavaScript challenges";
    expect(longestWord(str)).toBe("Intermediate");
  });
  it("should create an array if two or more longest words", () => {
    const str = "Session of our whiteboard style JavaScript challenges";
    expect(longestWord(str)).toStrictEqual([
      "whiteboard",
      "JavaScript",
      "challenges",
    ]);
  });
});
