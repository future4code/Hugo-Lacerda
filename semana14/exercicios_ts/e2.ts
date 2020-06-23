function doisNum(num1: number, num2: number): void {
  console.log(num1 + num2);
  console.log(num1 - num2);
  console.log(num1 * num2);
  if (num1 !== num2) {
    if (num1 > num2) {
      console.log(`${num1} é o maior`);
    } else {
      console.log(`${num2} é o maior`);
    }
  } else {
    console.log("São iguais.");
  }
}

doisNum(2, 2);
