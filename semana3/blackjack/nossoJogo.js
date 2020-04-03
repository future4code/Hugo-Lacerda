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

// function comprarCarta() {
//    // Cria array de cartas
//    const cartas = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
 
//    // Cria array de naipes
//    const naipes = ["♦️", "♥️", "♣️", "♠️"]
 
//    // Sorteia uma carta
//    const numero = cartas[Math.floor(Math.random() * 13)]
 
//    // Sorteia um naipe
//    const naipe = naipes[Math.floor(Math.random() * 4)]
 
//    let valor
 
//    // Verifica se é uma das letras e coloca o valor correspondente na variável valor
//    if (numero === "A") {
//      valor = 11
//    } else if (numero === "J" || numero === "Q" || numero === "K") {
//      valor = 10
//    } else { // Se nao for uma das letras, só converte a string para número
//      valor = Number(numero)
//    }
 
//    // Cria um objeto da carta com as propriedades que vamos precisar: texto e valor
//    const carta = {
//      texto: numero + naipe,
//      valor: valor
//    }
 
//    return carta
//  }
// import comprarCarta from './naoMexer.js'



// const even = 'Empate!';
// const userWin = "O usuário ganhou!";
// const pcWin = 'O computador ganho!';

//  console.log('Bem vindo ao jogo de Blackjack!');

//  if(confirm('Deseja iniciar uma nova rodada?')){
//     const cartaUser1 = comprarCarta();
//     const cartaUser2 = comprarCarta();
//     const cartaPC1 = comprarCarta();
//     const cartaPC2 = comprarCarta();

//     const somaUser = cartaUser1.valor + cartaUser2.valor;
//     const somaPC = cartaPC1.valor + cartaPC2.valor;

//     console.log('Usuário - cartas: ', cartaUser1.texto, ' ', cartaUser2.texto, ' - pontuação ', somaUser.toString());
//     console.log('Computador - cartas: ' + cartaPC1.texto, ' ', cartaPC2.texto, ' - pontuação ', somaPC.toString());
    
//     if(somaUser === somaPC){
//        console.log(even);
//     }else if(somaUser > somaPC){
//        console.log(userWin);
//     }else{
//        console.log(pcWin)
//     }
//  }else{
//     console.log('O jogo acabou.');
//  }