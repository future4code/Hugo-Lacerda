// PARTE 1
// Ex 1
// O código abaixo está fazendo um laço for, repetindo uma operação de soma até a condição ser alcançada pelo contador i. O resultado impresso é 105.

// Ex 2
// a. Adiciona um elemento ao final da lista.
// b. [10, 15, 25, 30].
// c. [12, 15, 18, 21, 27, 30] e [12].

// PARTE 2
// Ex 3

let array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];

// a.começo
let maior = array[0];
let menor = array[0];

for (num of array) {
  if (num > maior) {
    maior = num;
  }
  if (num < menor) {
    menor = num;
  }
}

console.log("O maior número é ", maior, " e o menor é ", menor);
// a.final

// b.começo
let arrayDivPor10 = new Array();

for (let i = 0; i < array.length; i++) {
  arrayDivPor10.push(array[i] / 10);
}

console.log(arrayDivPor10);
// b.final

// c.começo
let arrayPar = new Array();

for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 == 0) {
    arrayPar.push(array[i]);
  }
}

console.log(arrayPar);
// c.final

// d.começo
let arrayFrase = new Array();

for (let i = 0; i < array.length; i++) {
  arrayFrase.push(
    "O elemento do índex " + i.toString() + " é " + array[i].toString()
  );
}

console.log(arrayFrase);
// d.final

// Desafios 
// Desafio 1
// 0
// 00
// 000
// 0000

// Desafio 2

// let advinha = Number(prompt('Digite um número para o seu amigo tentar advinhar:'))

// let tentativa;
// let numTentativas = 0;
// while(tentativa != advinha){
//     tentativa = Number(prompt('Tente advinhar o número:'));
//     numTentativas ++;
//     if(tentativa > advinha){
//         console.log('O número chutado foi', tentativa);
//         console.log('Errrrrrrrou, é menor');
//     }else if(tentativa < advinha){
//         console.log('O número chutado foi', tentativa);
//         console.log('Errrrrrrrou, é maior');
//     }
// }

// console.log('Acertou!! \nO número de tentativas foi ', numTentativas);

// Desafio 3

let numPC = Math.floor((Math.random() * 100) + 1);
console.log(numPC);
let user;

let numTentativas = 0;

while(user != numPC){
    user = Number(prompt('Tente advinhar o número:'));
    numTentativas ++;
    if(user > numPC){
        console.log('O número chutado foi', user);
        console.log('Errrrrrrrou, é menor');
    }else if(user < numPC){
        console.log('O número chutado foi', user);
        console.log('Errrrrrrrou, é maior');
    }
}

console.log('Acertou!! \nO número de tentativas foi ', numTentativas);

// Foi fácil fazer a alteração. ;)