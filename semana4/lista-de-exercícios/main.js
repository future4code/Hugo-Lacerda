// Bloco 1, parte 1
// 1. O trecho de código cria uma função que recebe como parâmetro um valor em dólar. Dentro desta função, é pedido um input ao usuário (convertido automaticamente para Number) referente a cotação do dolar para reais e, por fim, a função retorna o valor do argumento dado como parâmetro multiplicado pela entrada do usuário, equivalendo ao valor em reais. A função é chamada abaixo na atribuição da variável declarada meuDinheiro, na qual é dado 100 como parâmetro. O valor será impresso no console após o cálculo, que dependerá com o input do usuário.

// 2. É criada uma função que recebe como parâmetro dois valores, um referente ao tipo de investimento e outro ao valor investido. Logo na primeira linha da função é declarada uma variável a qual será atribuido o valor após o investimento, o qual variará de acordo com o tipo dado como parâmetro. Um laço switch case é usado para comparar qual tipo foi digitado, atribuido valores diferentes ao valor após o investimento de acordo com o tipo. O default inicializa um alert informando erro no tipo de investimento digitado. Por fim, a função retorna o valor após o investimento.

// 3. O presente trecho de código começa declarando três variáveis, sendo um array chamado número com 14 elementos numéricos, e dois arrays vazios array1 e array2, respectivamente. Após, um laço for of é usado para percorrer o array numeros, passando uma condicional if else que checa se o valor é par ou ímpar. Se par, o valor é adicionado ao array1, se não, é adicionado ao array2. Por fim, o console imprime a quantidade total de números no array numeros, a quantidade de números no array1 e a quantidade de números no array2.

// 4. O trecho de código tem início com a declaração de um array numeros composto por 25 valores numéricos. Seguindo, é declarada uma variável numero1, que recebe o valor infinito, e uma variável numero2, que recebe o valor zero. O array números é então percorrido por um laçõ for of que usa dois blocos ifs: o primeiro checa se o valor de numero (elemento de numeros) é menor do que o valor de numero1 e, caso true, o valor de numero é atribuido a numero1; e o segundo if checa se o valor de numero é maior do que o valor de numero2 e, caso positivo, atribui o valor de número a numero2. Basicamente, o numero1 equivalerá ao menor número do array numeros no final, enquanro numero2 equivalerá ao menor. Os valores de numero1 e numero2 são impressos no final do código. 

// Bloco 1, parte 2
// 1.
// a. false
// b. false
// c. true
// d. true
// e. true

// 2. Não, porque o valor de quandidadeNumPares não havia sido inicializado e o valor de i não estava sendo incrementado. Além disso, a condição deveria ser somente <, e não <=, pois estava dando um número a mais. Correção:
// const quantidadeNumPares = Number(prompt());
// let i = 0;
// while(i < quantidadeNumPares){
//     console.log(i*2);
//     i++;
// }

// 3. 
// function trianguloId(a,b,c){
//     let tipo;

//     if(a === b && a === c){
//         tipo = 'equilátero';
//     }else if((a === b && a !==c) || (b === c && b !== a) || (c === a && c !== b)){
//         tipo = 'isóceles';
//     }else{
//         tipo = 'escaleno';
//     }

//     return tipo;
// }

// 4.
// function comparaDoisNums(num1,num2){
//     let maior;
//     let menor;
//     let diferença;

//     if(num1 > num2){
//         maior = num1;
//         menor = num2;
//         console.log(`O maior é: ${maior}`)
//     }else if(num2 > num1){
//         maior = num2;
//         menor = num1;
//         console.log(`O maior é: ${maior}`)
//     }else{
//         maior = num1;
//         menor = maior;
//         console.log(`Não há maior: ${num1} e ${num2} são iguais`)
//     }

//     if(num1%num2 === 0){
//         console.log(`${num1} é divisível por ${num2}`)
//     }else{
//         console.log(`${num1} não é divisível por ${num2}`)
//     }

//     if(num2%num1 === 0){
//         console.log(`${num2} é divisível por ${num1}`)
//     }else{
//         console.log(`${num2} não é divisível por ${num1}`)
//     }

//     diferença = maior - menor;

//     console.log(`A diferença entre eles é ${diferença}`);
// }

// Bloco 2, parte 1
// 1. 
// Para este exercício havia chegado a uma solução com o aprendido em aula, mas ela não funcionava em todos os casos. Achei essa mais precisa usando set (que não permite repetições) e depois convertendo novamente a um array.

// function segundoMenorEMaior(array){
//     let segundoMaior;
//     let segundoMenor;

//     array2 = array.sort(function(x,y){
//         return x-y;
//     })

//     arrayUni1 = [... new Set(array2)];
    
//     segundoMenor = arrayUni1[1];

//     array3 = array.sort(function(x,y){
//         return y-x;
//     })

//     arrayUni2 = [... new Set(array3)];

//     segundoMaior = arrayUni2[1];

//     console.log(`O segundo maior é ${segundoMaior} e o segundo menor é ${segundoMenor}`);
// }

// segundoMenorEMaior([0,7,6,5,4,3,2,1,0]);

// 2.

// let halloLabenu_ = function(){
//     alert('Hello, Labenu_');
// }

// halloLabenu_();

// Bloco 2, parte 2
// 1. Arrays e objetos são coleções que guardam informações de modo organizado e ordenado. É interessante o uso tanto de objetos quanto de arrays, portanto, quando queremos armazenar dados correlacionados. Um dos exemplos do uso dos dois juntos pode ser um array contendo vários objetos referentes, cada um, a postagens em um site, separando seus índices por título, autor e conteúdo, por exemplo. Desse modo, o armazenamento fica mais fácil do que ter vários objetos soltos ou, ainda, várias informações soltas e que dizem respeito a um mesmo objeto.

// 2.
function criarRetangulo(lado1, lado2){
    let perimetro = (lado1 + lado2) * 2;
    let area = lado1 * lado2;
    const retangulo = {
        largura: lado1,
        altura: lado2,
        perimetro: perimetro,
        area: area
    }

    return retangulo;
}