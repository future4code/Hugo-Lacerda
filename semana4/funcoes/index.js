// PARTE 1
// Ex 1

// a. []
// b. [0, 1, 0, 1, 2, 3]
// c. [0, 1, 0, 1, 2, 3, 0, 1, 2, 3, 4, 5]

// Ex 2

// a. 0
//    2
//    undefined
// b. Sim, funcionaria, pois o tipo do elemento não interfere na operação da função.

// Ex 3
// A função abaixo recebe um array e retorna outro contendo o resultado da soma e da multiplicação de todos os elementos do array passado. um melhor nome, por mais que longo, seria somaEMultElementos.

// PARTE 2
// Ex 4
// a.
function idadeCanina(anosHumanos) {
  let anosCaninos = anosHumanos * 7;
  return anosCaninos;
}
// b.
function infoPessoal(nome, idade, endereço, ehEstudante) {
  if (ehEstudante) {
    return (
      "Eu sou " +
      nome +
      ", tenho " +
      idade +
      " anos, moro em " +
      endereço +
      " e sou estudante."
    );
  } else {
    return (
      "Eu sou " +
      nome +
      ", tenho " +
      idade +
      " anos, moro em " +
      endereço +
      " e não sou estudante."
    );
  }
}

// Ex 5
function secDoAno(ano) {
  let seculo;
  if (ano >= 1001 && ano <= 1100) {
    seculo = "XI";
  } else if (ano >= 1101 && ano <= 1200) {
    seculo = "XII";
  } else if (ano >= 1201 && ano <= 1300) {
    seculo = "XIII";
  } else if (ano >= 1301 && ano <= 1400) {
    seculo = "XIV";
  } else if (ano >= 1401 && ano <= 1500) {
    seculo = "XV";
  } else if (ano >= 1501 && ano <= 1600) {
    seculo = "XVI";
  } else if (ano >= 1601 && ano <= 1700) {
    seculo = "XVII";
  } else if (ano >= 1701 && ano <= 1800) {
    seculo = "XVIII";
  } else if (ano >= 1801 && ano <= 1900) {
    seculo = "XIX";
  } else if (ano >= 1901 && ano <= 2000) {
    seculo = "XX";
  } else if (ano >= 2001 && ano <= 2020) {
    seculo = "XXI";
  }
  return "O ano " + ano + " pertence ao século " + seculo;
}

// Ex 6
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22];

// a.
function quantidadeElementos(array) {
  return array.length;
}

// console.log(quantidadeElementos(array));

// b.
function par(num) {
  let ehPar = new Boolean();
  if (num % 2 === 0) {
    ehPar = true;
  } else {
    ehPar = false;
  }
  return ehPar;
}

// console.log(par(1));

// c.
function quantidadeElePares(array) {
  let contadorPar = 0;
  for (let num of array) {
    if (num % 2 === 0) {
      contadorPar++;
    }
  }

  return contadorPar;
}

console.log(quantidadeElePares(array));

// d.
function quantidadeElePares2(array) {
  let contadorPar = 0;
  for (let num of array) {
    if (par(num)) {
      contadorPar++;
    }
  }

  return contadorPar;
}

console.log(quantidadeElePares(array));
