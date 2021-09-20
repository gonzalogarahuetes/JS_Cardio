function isAnagram(str1, str2) {
  let lowerStr1 = str1.toLowerCase();
  let filteredStr1 = [...lowerStr1].filter((e) => e !== " ").sort();
  let lowerStr2 = str2.toLowerCase();
  let filteredStr2 = [...lowerStr2].filter((e) => e !== " ").sort();
  let result = filteredStr1.join("") === filteredStr2.join("") ? true : false;

  return result;
}

describe("Anagrams", () => {
  it("should judge if two words are anagrams", () => {
    const str1 = "elbow";
    const str2 = "below";
    const str3 = "wolves";
    expect(isAnagram(str1, str2)).toBe(true);
    expect(isAnagram(str1, str3)).toBe(false);
  });
  it("should detect anagrams regardless of spaces and uppercase", () => {
    const str1 = "Gareth A Sue";
    const str2 = "G Arahuetes";
    expect(isAnagram(str1, str2)).toBe(true);
  });
});
