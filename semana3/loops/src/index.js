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
