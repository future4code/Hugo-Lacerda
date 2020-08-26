export const sumZeroUpToN = (n: number, sum: number = 0): number => {
  if(n === 0){
    return sum;
  }
  return sumZeroUpToN(n - 1, sum + n);
}