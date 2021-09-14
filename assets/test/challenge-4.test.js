function capitalizeLetters(str) {
  let array = [];
  for (let i = 0; i < str.length; ++i) {
    if (str[i - 1] === " " || i === 0) {
      array.push(str[i].toUpperCase());
    } else array.push(str[i]);
  }
  return array.join("");
}

describe("Capitalize Letters", () => {
  it("should capitalize the firs letter of the string", () => {
    const str = "hello";
    expect(capitalizeLetters(str)[0]).toBe("H");
  });

  it("should capitalize all capital letters of the string", () => {
    const str = "guitar is my passion";
    expect(capitalizeLetters(str)).toBe("Guitar Is My Passion");
  });
});
