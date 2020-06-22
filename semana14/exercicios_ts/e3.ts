function arrayInfo(arr: number[]): object {
  const oddArr: number[] = arr.filter((number) => {
    if (number % 2 !== 0) {
      return number;
    }
  });

  return {
    nums: arr.length,
    oddNums: oddArr.length,
    sum: arr.reduce((a, b) => a + b, 0),
  };
}

console.log(arrayInfo([1, 2, 3, 4, 5]));
