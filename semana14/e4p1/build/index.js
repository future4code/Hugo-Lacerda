const operador = process.argv[2];
const num1 = Number(process.argv[3]);
const num2 = Number(process.argv[4]);
switch (operador) {
    case 'add':
        console.log(`R: ${num1 + num2}`);
        break;
    case 'sub':
        console.log(`R: ${num1 - num2}`);
        break;
    case 'mult':
        console.log(`R: ${num1 * num2}`);
        break;
    case 'div':
        console.log(`R: ${num1 / num2}`);
        break;
    default:
        console.log(`R: ${num1 + num2}`);
}
//# sourceMappingURL=index.js.map