function flattenArray(arr) {
  if (arr[0][0][0]) return arr.flat(2);
  return arr.flat();
}

describe("Flatten Array", () => {
  it("returns the flatten array of the example", () => {
    const arr = [[1, 2, 3], [4, 5, 6], [7]];
    expect(flattenArray(arr, 3)).toStrictEqual([1, 2, 3, 4, 5, 6, 7]);
  });
  it("returns flatten array with depth 2", () => {
    const arr = [[[1, 2], 3], [4, [5, 6]], [7]];
    expect(flattenArray(arr, 2)).toStrictEqual([1, 2, 3, 4, 5, 6, 7]);
  });
});
