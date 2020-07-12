### Exercício 1

a. Foreign Key, ou Chave Estrangeira, é um identificador que faz referência a uma entidade no contexto da tabela de outra, geralmente sendo um código ou id, pois é importante que seja algo único a um registro, que não provoque ambiguidade.

b. Feito:

```
INSERT INTO Review ()
VALUES (
	"001",
    "Melhor filme de 2019 e uma das melhores obras cinematográficas do Brasil.",
    10.0,
    "004"
);
INSERT INTO Review ()
VALUES (
	"002",
    "Filme de comédia.",
    6.0,
    "001"
);

INSERT INTO Review ()
VALUES (
	"003",
    "Filme clássico.",
    8.0,
    "003"
);
```

c. A "restrição" falhou, significando que não foi encontrada a "restrição" imposta pela chave estrangeira, ou seja, não foi encontrado um registro com o id passado na tabela referenciada.

d. Feito:

```
ALTER TABLE Film
DROP COLUMN rate;
```

e. Ocorre um erro relacionado a ter uma chave estrangeira relacionada, impossibilitando a atualização ou exclusão.

### Exercício 2

a. A tabela FilmCast é composta por duas colunas, film_id e actor_id, ambas chaves estrangeiras com referências, respectivamente, na tabela Film e na tabela Actor, descrevendo qual de qual filme trata-se o elenco e aos atores envolvidos.

b. Feito.

c. O mesmo erro explicado no item c do exercício anterior.

d. Mesmo erro explicado no item e do exercício anterior.

### Exercício 3

a. A query acima seleciona todas as colunas da inner join entre a tabela Film e a tabela Review, sendo ON o determinador do parâmetro identificador que uma tabela deve buscar na outra equivalendo ao seu próprio identificador passado.

b. Feito:

```
SELECT title, Film.id, rate
FROM Film
INNER JOIN Review
ON Film.id = Review.film_id;
```

### Exercício 4

a. Feito:

```
SELECT title, f.id AS film_id, rate, comment
FROM Film AS f
LEFT JOIN Review AS r
ON f.id = r.film_id;
```

b.

```
SELECT f.id AS film_id, title, c.actor_id
FROM Film AS f
RIGHT JOIN FilmCast AS c
ON f.id = c.film_id;
```

c.

```
SELECT AVG(r.rate) AS avg_rate, f.id, f.title
FROM Film AS f
LEFT JOIN Review AS r
ON f.id = r.film_id
GROUP BY (f.id);
```

### Exercício 5

a. A query acima junta, primeiramente, a tabela Films com a tabela FilmCast na igualdade entre a coluna id na primeira a film_id na segunda e, em seguida, adiciona a tabela Actor a primeira junção na igualdade entre a id em Actor e a actor_id na FilmCast, selecionando todas as colunas. Há a necessidade de dois JOIN pois queremos relacionar 3 tabelas e não podemos unir 3 tabelas com um só JOIN, sendo preciso primeiramente unirmos duas e, em seguida, a última a primeira junção.

b.

```
SELECT c.film_id, f.title, c.actor_id, a.name AS actor_name
FROM Film AS f
LEFT JOIN FilmCast AS c
ON f.id = c.film_id
JOIN Actor AS a ON a.id = c.actor_id;
```

c. A query passada não funciona pois está com uma vírgula e não um ponto em "m,title", fazendo com que o programa interprete o m como referência a uma coluna, mas nenhuma coluna m é encontrada em qualquer uma das tabelas.

d.

```
SELECT f.id AS film_id, title, a.id AS actor_id, name AS actor, r.id as review_id, rate, comment
FROM Film AS f
LEFT JOIN FilmCast AS c
ON f.id = c.film_id
LEFT JOIN Review AS r
ON f.id = r.film_id
INNER JOIN Actor AS a
ON c.actor_id = a.id;
```

### Exercício 6

a. Trata-se de uma relação N:N, pois um Oscar pode ser dado a vários filmes e um filme pode ganhar vários Oscars.

b. O query foi:

```
CREATE TABLE OscarAward (
	id VARCHAR(255) PRIMARY KEY,
	category VARCHAR(255) NOT NULL,
  date DATE NOT NULL,
  film_id VARCHAR(255) NOT NULL,
  FOREIGN KEY (film_id) REFERENCES Film(id));
```

Ele recebe uma coluna id como chave primária, uma category representando a categoria, uma date, representando a data, uma film_id como chave estrangeira referenciando o filme premiado.

c.

```
INSERT INTO OscarAward()
VALUES(
  "001",
  "Melhor longa-metragem estrangeira",
  "2020-01-01",
  "004"
);
INSERT INTO OscarAward()
VALUES(
  "002",
  "Melhor roteiro original",
  "2020-01-01",
  "004"
);
INSERT INTO OscarAward()
VALUES(
  "003",
  "Melhor comédia",
  "2010-01-01",
  "001"
);
INSERT INTO OscarAward()
VALUES(
  "004",
  "Melhor Tony Ramos",
  "2010-01-01",
  "001"
);
INSERT INTO OscarAward()
VALUES(
  "005",
  "Melhor direção",
  "2000-01-01",
  "003"
);
INSERT INTO OscarAward()
VALUES(
  "006",
  "Melhor fotografia",
  "2000-01-01",
  "003"
);
```

d.

```
SELECT title, category
FROM Film AS f
LEFT JOIN OscarAward AS o
ON f.id = o.film_id;
```
