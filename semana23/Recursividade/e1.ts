// a.

export const printZeroUpToN = (n: number) => {
  if(n >= 0){
    printZeroUpToN(n - 1)
    console.log(n)
  }
}
// a.

export const printDownToZero = (n: number) => {
  if(n >= 0){
    console.log(n)
  }
    printDownToZero(n - 1)
}