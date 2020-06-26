const operador: string = process.argv[2]
const num1: number = Number(process.argv[3])
const num2: number = Number(process.argv[4])

switch(operador){
  case 'add':
    console.log(`R: ${num1+num2}`);
    break;
  case 'sub':
    console.log(`R: ${num1-num2}`);
    break;
  case 'mult':
    console.log(`R: ${num1*num2}`);
    break;
  case 'div':
    console.log(`R: ${num1/num2}`);
    break;
  default:
    console.log(`R: ${num1+num2}`);
}