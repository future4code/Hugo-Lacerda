export const printEachEl = (arr: any[]): void => {
  if(arr.length > 0){
    console.log(arr[arr.length - 1])
    arr.pop();
    printEachEl(arr)
  }
}