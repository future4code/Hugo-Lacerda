### Exercício 1

a. Exclui a coluna salary da tabela.

b. Troca o nome da coluna gender para sex, com o mesmo tipo e número máximo de caracteres.

c. Altera o número máximo de caracteres de gender para 255.

d. A query foi:

```
ALTER TABLE Actor
CHANGE gender gender VARCHAR(100);
```

### Exercício 2

a. A query é:

```
UPDATE Actor
SET name = "Moacyr Franco",
  birth_date = "2020-02-10"
WHERE id = "003";
```

b. As queries são:

```
UPDATE Actor
SET name = "JULIANA PÃES"
WHERE name = "Juliana Paes";
UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PÃES";
```

c. A query é:

```
UPDATE Actor
SET name = "Novo Nome",
  birth_date = "1980-12-12",
  salary = 12
  gender = "xpto"
WHERE id = "005";
```

d. O erro dita que não há uma coluna com o nome passado na lista de campos, ou seja, não há o que ser alterado uma vez que trata-se de um campo inexistente.

### Exercício 3

a. A query é:

```
DELETE
FROM Actor
WHERE name = "Fernanda Montenegro";
```

b. A query é:

```
DELETE
FROM Actor
WHERE gender = "male"
AND salary > 1000000;
```

### Exercício 4

a. A query é:

```
SELECT MAX(salary)
FROM Actor;
```

b. A query é:

```
SELECT MIN(salary)
FROM Actor
WHERE gender = "female";
```

c. A query é:

```
SELECT COUNT(*)
FROM Actor
WHERE gender = "female";
```

d. A query é:

```
SELECT SUM(salary)
FROM Actor;
```

### Exercício 5

a. A query realiza a conta de registros de acordo com o termo passado na cláusula GROUP BY, no caso, gender, retornando uma coluna com o resultado conta da quantidade ao lado de uma com os respectivos gêneros.

b. A query é:

```
SELECT id, name
FROM Actor
ORDER BY name DESC;
```

c. A query é:

```
SELECT *
FROM Actor
ORDER BY salary;
```

d. A query é:

```
SELECT *
FROM Actor
ORDER BY salary DESC
LIMIT 3;
```

e. A query é:

```
SELECT AVG(salary), gender
FROM Actor
GROUP BY gender;
```

### Exercício 6

a. A query foi:

```
ALTER TABLE Film
ADD playing_limit_date DATE;
```

b. A query foi:

```
ALTER TABLE Film
CHANGE rate rate FLOAT;
```

c. As queries foram:

```
UPDATE Film
SET playing_limit_date = "2020-11-18"
WHERE id = "004";
UPDATE Film
SET playing_limit_date = "2019-11-18"
WHERE id = "003";
```

d. Não ocorreu qualquer erro, mas a resposta doi que nenhuma linha foi afetada.

### Exercício 7

a. A query foi:

```
SELECT COUNT(*)
FROM Film
WHERE rate > 7.5;
```

b. A query foi:

```
SELECT AVG(rate)
FROM Film;
```

c. As query foi:

```
SELECT COUNT(*)
FROM Film
WHERE playing_limit_date > CURDATE();
```

d. As query foi:

```
SELECT COUNT(*)
FROM Film
WHERE release_date < CURDATE();
```

### Exercício 8

a. A query foi:

```
SELECT *
FROM Film
ORDER BY title;
```

b. A query foi:

```
SELECT *
FROM Film
ORDER BY title
LIMIT 5;
```

c. As query foi:

```
SELECT *
FROM Film
WHERE release_date < CURDATE()
ORDER BY release_date DESC
LIMIT 3;
```

d. As query foi:

```
SELECT *
FROM Film
ORDER BY rating DESC
LIMIT 3;
```
