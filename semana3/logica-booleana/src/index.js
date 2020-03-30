// PARTE 1

// Exercício 1

// a. false
// b. false
// c. true
// d. false
// e. boolean


// Exercício 2

// a. Array é um tipo de coleção que pode reunir uma variedade de tipos de variáveis. Modo de declaração de um array em JS pode ser let a = new Array(1,2,3,4,6,73,4) ou simplesmente let b = [1,2,3,4,6,73,4].
// b. O index inicial de um array é 0.
// c. O tamanho de um array pode ser determinado pelo com o atributo length (objeto.length).
// d. 
// I. undefined
// II. null
// III. 11
// IV. 3 e 4
// V. 19 e 9
// VI. 3
// VII. 1

// PARTE 2

// Exercício 1
// a.
let f = 77
let k = (f-32)*(5/9)+273.15
console.log(f + "ºF equivale a " + k + "K")

// b. 
let c = 80
f = c*(9/5)+32
console.log(c + "ºC equivale a " + f + "ºF")

// c80
c = 30
f = c*(9/5)+32
k = (f-32)*(5/9)+273.15
console.log(c + "ºC equivale a " + f + "ºF e " + k + "K")

// d
// c = Number(prompt('Escreva um valor em graus Celsius para convertê-lo em graus Fahrenheit e em Kelvin'))
// f = c*(9/5)+32
// k = (f-32)*(5/9)+273.15
// console.log(c + "ºC equivale a " + f + "ºF e a " + k + "K")

// const pergunta1 = '1. Qual é o seu nome?'
// const pergunta2 = '2. Qual é o nome do seu cachorro?'
// const pergunta3 = '3. Qual é seu sobrenome?'
// const pergunta4 = '4. Qual é o sobrenome do seu cachorro?'
// const pergunta5 = '5. Quantos anos tem seu cachorro?'

// // Exercício 2

// let resposta1 = prompt(pergunta1)
// console.log(pergunta1 + "\nResposta: " + resposta1)
// let resposta2 = prompt(pergunta2)
// console.log(pergunta2 + "\nResposta: " + resposta2)
// let resposta3 = prompt(pergunta3)
// console.log(pergunta3 + "\nResposta: " + resposta3)
// let resposta4 = prompt(pergunta4)
// console.log(pergunta4 + "\nResposta: " + resposta4)
// let resposta5 = Number(prompt(pergunta5))
// console.log(pergunta5 + "\nResposta: " + resposta5)

// Exercício 3

// let kwConsumido = Number(prompt("Digite a quantidade de quilowatts consumidas:"))

// a.
let valor280 = 280 * 0.05
console.log('O valor de 280 quilowatts-hora é ' + valor280)
// b.
let valorDescontado = 280 * 0.05 * 0.85
console.log('O valor de 280 quilowatts-hora com desconto de 15% equivale a ' + valorDescontado)

// Desafio

// a.
let lb = 20
let lb2kg = lb/2.2046
console.log(lb + "lb equivalem a " + lb2kg + 'kg')
// b.
let oz = 10.5
let oz2kg = oz/35.274
console.log(oz + "oz equivalem a " + oz2kg + 'kg')
// c.
let mi = 100
let mi2metro = mi/0.00062137
console.log(mi + "mi equivalem a " + mi2metro + 'm')
// d.
let ft = 50
let ft2metro = ft/3.2808
console.log(ft + "ft equivalem a " + ft2metro + 'm')
// e.
let gal = 103.56
let gal2litro = gal/0.26417
console.log(gal + "gal equivalem a " + gal2litro + 'L')
// f.
let xic = 450
let xic2litro = xic/4.2268
console.log(xic + "xic equivalem a " + xic2litro + 'L')

// g.
mi = Number(prompt('Escreva um valor em milhas para ser convertido em metros:'))
mi2metro = mi/0.00062137
console.log(mi + "mi equivalem a " + mi2metro + 'm')