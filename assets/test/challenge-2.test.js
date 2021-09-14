function isPalindrome(str) {
  let lowerStr = str.toLowerCase();
  let filteredStr = [...lowerStr].filter((e) => e !== " ");
  let result =
    [...filteredStr].reverse().join("") === [...filteredStr].join("")
      ? true
      : false;
  return result;
}

describe("Check Palindromes", () => {
  it("checks if 'stars' is a palindrome", () => {
    const str = "stars";

    expect(isPalindrome(str)).toBe(false); //9466111cf079
  });

  it("should works also with more than one word", () => {
    const str = "anita lava la tina";

    expect(isPalindrome(str)).toBe(true);
  });

  it("checks if 'Sometamos o matemos' is a palindrome", () => {
    const str = "sometamos o matemos";

    expect(isPalindrome(str)).toBe(true);
  });

  it("should work regardless uppercase", () => {
    const str = "Sometamos o matemos";

    expect(isPalindrome(str)).toBe(true);
  });
});
