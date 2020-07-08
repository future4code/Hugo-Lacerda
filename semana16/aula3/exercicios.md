### Exercício 1

a. Quando usamos o raw, recebemos exatamente o que o MySQL devolve, não somente os dados que requisitamos, pois, além deles, a resposta vem carregada de metadados sobre o banco. Todas essas informações são retornadas dentro de um array e os dados da tabela que queremos vem na posição 0 do índice 0 no caso da função que pega um ator pelo id.

b. Feito:

```
const searchActorByName = async (name: string): Promise<any> => {
  const result = await connection.raw(`
  SELECT *
  FROM Actor
  WHERE name = "${name}"`);

  return result[0][0];
};
```

c. Feito:

```
const getActorsSumByGender = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
  SELECT COUNT(*) AS count
  FROM Actor
  WHERE gender = "${gender}"`);

  return result[0][0].count;
};
```

### Exercício 2

a. Quando usamos o raw, recebemos exatamente o que o MySQL devolve, não somente os dados que requisitamos, pois, além deles, a resposta vem carregada de metadados sobre o banco. Todas essas informações são retornadas dentro de um array e os dados da tabela que queremos vem na posição 0 do índice 0 no caso da função que pega um ator pelo id.

b. Feito:

```
const searchActorByName = async (name: string): Promise<any> => {
  const result = await connection.raw(`
  SELECT *
  FROM Actor
  WHERE name = "${name}"`);

  return result[0][0];
};
```

c. Feito:

```
const getActorsSumByGender = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
  SELECT COUNT(*) AS count
  FROM Actor
  WHERE gender = "${gender}"`);

  return result[0][0].count;
};
```
