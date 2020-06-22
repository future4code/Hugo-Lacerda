let minhaString: string = "Hugo";

// a. Ocorre o erro "Type '1' is not assignable to type 'string'", devido ao tipo tipo divergente.

let meuNumero: number = 4;

// b. Podemos se instanciarmos com a sintaxe 'let meuNumero: number | string'

// type pessoa = {
//   nome: string;
//   idade: number;
//   corFavorita: string;
// };

// // c. Desse modo o objetos desse tipo sempre deverão ter essas características.

// const pessoa1: pessoa = {
//   nome: "XPTO",
//   idade: 2,
//   corFavorita: "Preto",
// };
// const pessoa2: pessoa = {
//   nome: "PTOX",
//   idade: 12,
//   corFavorita: "Rosa",
// };
// const pessoa3: pessoa = {
//   nome: "OPTX",
//   idade: 2,
//   corFavorita: "Branco",
// };

// d. Ok.

enum CorArcoIris {
  VIOLETA = 1,
  ANIL = 2,
  AZUL = 3,
  VERDE = 4,
  AMARELO = 5,
  LARANJA = 6,
  VERMELHO = 7,
}

type pessoa = {
  nome: string;
  idade: number;
  corFavorita: CorArcoIris;
};

const pessoa1: pessoa = {
  nome: "XPTO",
  idade: 2,
  corFavorita: CorArcoIris.VERDE,
};
const pessoa2: pessoa = {
  nome: "PTOX",
  idade: 12,
  corFavorita: CorArcoIris.VERMELHO,
};
const pessoa3: pessoa = {
  nome: "OPTX",
  idade: 2,
  corFavorita: CorArcoIris.ANIL,
};

// e. Ok.
