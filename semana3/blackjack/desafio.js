/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

function comprarCarta() {
  // Cria array de cartas
  const cartas = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
  ];

  // Cria array de naipes
  const naipes = ["♦️", "♥️", "♣️", "♠️"];

  // Sorteia uma carta
  const numero = cartas[Math.floor(Math.random() * 13)];

  // Sorteia um naipe
  const naipe = naipes[Math.floor(Math.random() * 4)];

  let valor;

  // Verifica se é uma das letras e coloca o valor correspondente na variável valor
  if (numero === "A") {
    valor = 11;
  } else if (numero === "J" || numero === "Q" || numero === "K") {
    valor = 10;
  } else {
    // Se nao for uma das letras, só converte a string para número
    valor = Number(numero);
  }

  // Cria um objeto da carta com as propriedades que vamos precisar: texto e valor
  const carta = {
    texto: numero + naipe,
    valor: valor,
  };

  return carta;
}

const even = "Empate!";
const userWin = "O usuário ganhou!";
const pcWin = "O computador ganhou!";
let arrayUser = new Array();
let arrayUserVal = new Array();
let arrayUserTxt = new Array();
let arrayPC = new Array();
let arrayPCVal = new Array();
let arrayPCTxt = new Array();
console.log("Bem vindo ao jogo de Blackjack!");

if (confirm("Deseja iniciar uma nova rodada?")) {
  let cartaUser1 = comprarCarta();
  let cartaUser2 = comprarCarta();
  let cartaPC1 = comprarCarta();
  let cartaPC2 = comprarCarta();
  let novaCartaUser;
  let novaCartaPC;
  while (
    (cartaUser1.valor === 11 && cartaUser2.valor === 11) ||
    (cartaPC1.valor === 11 && cartaPC2.valor === 11)
  ) {
    cartaUser1 = comprarCarta();
    cartaUser2 = comprarCarta();
    cartaPC1 = comprarCarta();
    cartaPC2 = comprarCarta();
  }

  arrayUser.push(cartaUser1, cartaUser2);
  arrayUserVal.push(cartaUser1.valor, cartaUser2.valor);
  arrayUserTxt.push(cartaUser1.texto, cartaUser2.texto);
  arrayPC.push(cartaPC1, cartaPC2);
  arrayPCVal.push(cartaPC1.valor, cartaPC2.valor);
  arrayPCTxt.push(cartaPC1.texto, cartaPC2.texto);

  // console.log(arrayUser)
  // console.log(arrayUserVal.reduce((a, b) => a + b));
  // console.log(arrayUserVal);

  while (
    confirm(
      "Suas cartas são " +
        arrayUserTxt +
        " e a carta revelada do computador é " +
        cartaPC1.texto +
        ". \nDeseja comprar mais uma carta?"
    ) &&
    arrayUserVal.reduce((a, b) => a + b) <= 21
  ) {
    novaCartaUser = comprarCarta();
    arrayUser.push(novaCartaUser);
    arrayUserVal.push(novaCartaUser.valor);
    arrayUserTxt.push(novaCartaUser.texto);
  }
  while (arrayPCVal.reduce((a, b) => a + b) <= 21) {
    novaCartaPC = comprarCarta();
    arrayPC.push(novaCartaPC);
    arrayPCVal.push(novaCartaPC.valor);
    arrayPCTxt.push(novaCartaPC.texto);
  }

  let pontuacaoUser = arrayUserVal.reduce((a, b) => a + b);
  let pontuacaoPC = arrayPCVal.reduce((a, b) => a + b);

  console.log(
    "Suas cartas são " +
      arrayUserTxt +
      ". Sua pontuação é: " +
      pontuacaoUser +
      ".\nAs cartas do computador são " +
      arrayPCTxt +
      ". A pontuação do PC é " +
      pontuacaoPC +
      "."
  );

  if (pontuacaoUser > 21 && pontuacaoPC <= 21) {
    console.log(pcWin);
  } else if (pontuacaoPC > 21 && pontuacaoUser <= 21) {
    console.log(userWin);
  } else if (novaCartaUser === pontuacaoPC) {
    console.log(even);
  } else {
    console.log("Os dois ultrapassaram 21. Ninguém venceu.");
  }
} else {
  console.log("O jogo acabou.");
}
