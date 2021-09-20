function chunkArray(arr, len) {
  const newArr = [];
  newArr.push(
    arr.slice(0, len),
    arr.slice(len, len * 2),
    arr.slice(len * 2, len * 3)
  );

  if (arr.length > len * 3) newArr.push(arr.slice(len * 3, len * 4));

  return newArr;
}

describe("Array chunking", () => {
  it("should return a chunked array", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    expect(chunkArray(arr, 3)[0][0]).toBe(1);
    expect(chunkArray(arr, 3)[0][1]).toBe(2);
  });
  it("returns the chunked array of the example", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    expect(chunkArray(arr, 3)).toStrictEqual([[1, 2, 3], [4, 5, 6], [7]]);
  });
  it("returns the chunked array no matter the length", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    expect(chunkArray(arr, 2)).toStrictEqual([[1, 2], [3, 4], [5, 6], [7]]);
  });
});
