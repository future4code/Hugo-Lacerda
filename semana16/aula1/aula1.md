### Exercício 1

a) Utilizamos VARCHAR(n) no id, name e gênero representando que estes atributo tem o formato de texto e seu número máximo de caracteres é 255 para os dois primeiros atributos e 6 para o gender. Utilizamos tipo Date no birth_date pois trata-se de uma data. O comando PRIMARY KEY nos indica que o atributo id é o identificador único da entidade. NOT NULL usamos para indicar a obrigatoriedade de ser atribuído um valor ao atributo que não seja nulo (null). CREATE TABLE, por sua vez, é utilizado para declarar o conjunto de atributos que compoem a tabela.

b) O SHOW DATABASES retorna duas 'linhas', information_schema e meu banco de dados. Já o SHOW TABLES retorna a 'tabela' criada, Actor.

c) DESCRIBE Actor mostra os campos da tabela, o tipo de cada um desses campos, se o valor pode ser nulo, qual campo é uma chave e os valores padrões de cada campo, no caso, null.

### Exercício 2

a) Feito.

b) O erro ocorreu pois não podem haver duas entidades de uma mesma tabela com a mesma chave primária, pois trata-se de um identificador único.

c) O número de colunas não bate com o número de valores passados na linha 1.

d) O campo 'nome' não apresenta um valor padrão, ou seja, precisa ser passado.

e) Valor incorreto de data: como foi passada sem aspas, o programa entendeu como uma operação numérica e resultou em 1950.

f) Feito.

### Exercício 3

a) A query é:

```
SELECT *
FROM Actor
WHERE gender = S'female';
```

b) A query é:

```
SELECT salary
FROM Actor
WHERE name = 'Tony Ramos';
```

c) A query é:

```
SELECT *
FROM Actor
WHERE gender='invalid';
```

E o resultado é uma linha com valores nulos em todos os campos, pois nenhuma entidade da tabela apresenta o valor 'invalid' como gênero.

d) A query é:

```
SELECT id, name, salary
FROM Actor
WHERE salary <= 500000;
```

e) O programa não localizou qualquer campo com o nome 'nome'. Foi corrigido com a correção para 'name'.

```
SELECT id, name from Actor WHERE id = "002"
```

### Exercício 4

a) A query citada seleciona todas as informações da tabela Actor onde os nomes começam com a letra 'A' ou com a letra 'J%' cujos salários sejam aiores que 300000.

b) A query é:

```
SELECT *
FROM Actor
WHERE name NOT LIKE 'A%'
AND salary > 350000;
```

c) A query é:

```
SELECT *
FROM Actor
WHERE name LIKE '%G%' OR name LIKE '%g%';
```

d) A query é:

```
SELECT *
FROM Actor
WHERE (name LIKE '%G%' OR name LIKE '%g%'
OR name LIKE '%A%' OR name LIKE '%a%')
AND salary BETWEEN 350000 AND 900000;
```

### Exercício 5

a) A query é:

```
CREATE TABLE Film (
	id VARCHAR(255) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  synopsis TEXT NOT NULL,
  release_date DATE NOT NULL,
  rate INT NOT NULL
)
```

A query cria uma tabela chamada Film, cujos campos são id, name, synopsis, release_data e rate, todos representados com a tipagem que melhor lhes descreve e nenhum podendo ser null.

b, c, d, e) As queries:

```
INSERT INTO Film(id, title, synopsis, release_date, rate)
VALUES(
	'001',
	'Se Eu Fosse Você',
	'Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos',
	'2006-01-06',
	7
);

INSERT INTO Film(id, title, synopsis, release_date, rate)
VALUES(
	'002',
	'Doce de mãe',
	'Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela',
	'2012-12-27',
	10
);

INSERT INTO Film(id, title, synopsis, release_date, rate)
VALUES(
	'003',
	'Dona Flor e Seus Dois Maridos',
	'Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.',
	'2017-11-02',
	8
);

INSERT INTO Film(id, title, synopsis, release_date, rate)
VALUES(
	'004',
	'Bacurau',
	'Os moradores de um pequeno povoado do sertão brasileiro, chamado Bacurau, descobrem que a comunidade não consta mais em qualquer mapa. Aos poucos, percebem algo estranho na região: enquanto drones passeiam pelos céus, estrangeiros chegam à cidade. Quando carros se tornam vítimas de tiros e cadáveres começam a aparecer, Teresa, Domingas, Acácio, Plínio, Lunga e outros habitantes chegam à conclusão de que estão sendo atacados. Falta identificar o inimigo e criar coletivamente um meio de defesa.',
	'2019-08-29',
	10
);
```

### Exercício 6

a) A query é:

```
SELECT id, title, rate
FROM Film
WHERE id = '004';
```

b) A query é:

```
SELECT *
FROM Film
WHERE title = 'Bacurau';
```

c) A query é:

```
SELECT id, title, synopsis
FROM Film
WHERE rate >= 7;
```

### Exercício 7

a) A query é:

```
SELECT *
FROM Film
WHERE title LIKE '%vida%';
```

b) A query é:

```
SELECT *
FROM Film
WHERE title LIKE '%valor_busca%' OR synopsis LIKE '%valor_busca%';
```

c) A query é:

```
SELECT *
FROM Film
WHERE release_date < '2020-07-06';
```

d) A query é:

```
SELECT *
FROM Film
WHERE release_date < '2020-07-06'
AND (title LIKE '%termo_busca%' OR synopsis LIKE '%termo_busca%')
AND rate > 7;
```
