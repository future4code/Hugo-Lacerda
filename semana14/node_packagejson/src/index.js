"use strict";
// E1
exports.__esModule = true;
// a. Primeiro devemos declarar a variável atribuindo o valor process.argv[i], sendo que i começa no dois, pois os primeiros índices já são ocupados. Em seguida, deve-se seguir o seguinte comando no terminal: node arquivo.js seguido dos valores que desejamos atribuir.
// b.
// const nome: string = process.argv[2];
// const idade: number = Number(process.argv[3]);
// console.log(`Olá, ${nome}! Você tem ${idade} anos!`)
// c. 
// console.log(`Olá, ${nome}! Você tem ${idade} anos e terá ${idade+7} daqui a 7 anos!`)
// ------------------------------------------------
// E2
// const operador: string = process.argv[2]
// const num1: number = Number(process.argv[3])
// const num2: number = Number(process.argv[4])
// switch(operador){
//   case 'add':
//     console.log(`R: ${num1+num2}`);
//     break;
//   case 'sub':
//     console.log(`R: ${num1-num2}`);
//     break;
//   case 'mult':
//     console.log(`R: ${num1*num2}`);
//     break;
//   case 'div':
//     console.log(`R: ${num1/num2}`);
//     break;
//   default:
//     console.log(`R: ${num1+num2}`);
// }
// ------------------------------------------------
// E3
var fs = require("fs");
var arquivo = process.argv[2];
var tarefa = process.argv[3];
fs.appendFileSync(arquivo, tarefa);
// type person = {
//   name: string
// }
// function createPerson(name: string): person {
// 	return {name: name} 
// } 
// const myPerson2 = createPerson("Robson");
// console.log(myPerson2);
