function fizzBuzz() {
  let array = [],
    element;
  for (let i = 0; i < 101; i++) {
    if (i % 3 === 0 && i % 5 !== 0) element = "Fizz";
    if (i % 3 !== 0 && i % 5 === 0) element = "Buzz";
    if (i % 3 === 0 && i % 5 === 0) element = "FizzBuzz";
    if (i % 3 !== 0 && i % 5 !== 0) element = i;
    array.push(element);
  }
  return array;
}

describe("FizzBuzz", () => {
  it("should print the numbers from 0 to 100", () => {
    expect(fizzBuzz()).toHaveLength(101);
  });
  it("should pritn 'Fizz' instead of multiples of 3", () => {
    expect(fizzBuzz()[3]).toBe("Fizz");
    expect(fizzBuzz()[99]).toBe("Fizz");
    expect(fizzBuzz()[66]).toBe("Fizz");
  });
  it("should print 'Buzz' instead of multiples of 5", () => {
    expect(fizzBuzz()[5]).toBe("Buzz");
    expect(fizzBuzz()[35]).toBe("Buzz");
    expect(fizzBuzz()[100]).toBe("Buzz");
  });
  it("should print 'FizzBuzz' instead of multiples of 3 and 5", () => {
    expect(fizzBuzz()[30]).toBe("FizzBuzz");
    expect(fizzBuzz()[15]).toBe("FizzBuzz");
    expect(fizzBuzz()[90]).toBe("FizzBuzz");
  });
});
