// PARTE 1
// Exercício 1
// O código recebe um valor do usuário, depois transforma a string recebida em number. Após, na condicional if, é checado se o resto do número na divisão por dois equivale a zero, sendo que true retorna no console o string informando que passou no teste e o dalse leva ao else que imprime no console a falha ao passar no teste. Para números pares o usuário passará no teste, já para ímpares, não. 

// Exercício 2
// a. Para imprimir uma string informando o preço da fruta de acordo com a que o usuário digitou.
// b. O preço da fruta Maçã é R$ 2.25
// c. 24.55, uma vez que o preço da banana, por não estar determinado, cairia no default 5.
// d. O preço da fruta  Pêra  é  R$  5

// Exercício 3
// A mensagem alertará que não há qualquer definição para a variável mensagem. Isso ocorre porque seu escopo não é global, uma vez que foi criada e teve um valor atribuído em um escopo local de uma condicional if, só podendo ser acessada por ela mesma ou outros 'locais' criados em seu interior, mas não fora. 

// Exercício 4
// a. Os dois números foram impressos, pois comparei o primeiro com o segundo, determindo a impressão do primeiro seguido do segundo (n1, n2) caso true, e no else determinei a impressão na ordem reversa (n2, n1).
// b. Nada é impresso pela nova lógica.

// let n1 = Number(prompt("Digite um número:"));
// let n2 = Number(prompt("Digite outro número:"));
// let n3 = Number(prompt("Digite um terceiro número:"));

// if(n1 === n2 && n1 === n3){
//     alert("Redigite os números, agora diferentes um do outro, por favor.")
//     n1 = Number(prompt("Digite um número:"));
//     n2 = Number(prompt("Digite outro número:"));
//     n3 = Number(prompt("Digite um terceiro número:"));
// }

// if(n1 > n2 && n1 > n3){
//     console.log(n1)
//     if(n2 > n3){
//         console.log(n2)
//         console.log(n3)
//     }else{
//         console.log(n3)
//         console.log(n2)
//     }
// }
// if(n2 > n1 && n2 > n3){
//     console.log(n2)
//     if(n1 > n3){
//         console.log(n1)
//         console.log(n3)
//     }else{
//         console.log(n3)
//         console.log(n1)
//     }
// }
// if(n3 > n1 && n3 > n2){
//     console.log(n3)
//     if(n1 > n2){
//         console.log(n1)
//         console.log(n2)
//     }else{
//         console.log(n2)
//         console.log(n1)
//     }
// }

// Exercício 5
// a. https://drive.google.com/file/d/1vgKGU7d9Hn9xNF7OOay5KBx9Stemy-Xd/view?usp=sharing

// b. 

let temOssos = prompt("Este animal possuí ossos? [s/n]")
let temPelos = prompt("Possuí pelos? [s/n]")
let racional = prompt("É racional? [s/n]")
let temPernas = prompt("Possuí pernas? [s/n]")
let terrestre = prompt("É terrestre? [s/n]")
let vidaAqua = prompt("Parte da sua vida é aquática? [s/n]")

if(temOssos === 'n'){
    console.log('Invertebrado')
}else if(temPelos === 's'){
    if(racional === 's'){
        console.log('ser humano')
    }else{
        console.log('mamífero não humano')
    }
}else{
    if(temPernas === 's'){
        console.log('ave')
    }else if(terrestre === 's'){
        if(vidaAqua === 's'){
            console.log('anfibio')
        }else{
            console.log('réptil')
        }
    }else{
        console.log('peixe')
    }
}