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

// 2.
const quantidadeNumPares = Number(prompt());
let i = 0;
while(i < quantidadeNumPares){
    console.log(i*2);
    i++;
}