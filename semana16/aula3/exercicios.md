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

a. Feito:

```
const modifySalary = async (id: string, new_salary: number): Promise<void> => {
  await connection("Actor")
    .update({
      salary: new_salary,
    })
    .where("id", id);
};
```

b. Feito:

```
const deleteActor = async (id: string): Promise<void> => {
  await connection("Actor").delete().where("id", id);
};
```

c. Feito:

```
const avgSalaryByGender = async (gender: string): Promise<any> => {
  const result = await connection("Actor")
    .avg("salary as avarage")
    .where({ gender });

  return result[0].avarage;
};
```

### Exercício 3

a. Porque trata-se de um informação mandada ao back-end (req) advinda do parâmetro na url (params) com o 'nome' id.

b. Os números entre parênteses após a palavra status dizem respeito ao próprio status da resposta transmitida pelo sevidor ao client, sendo 200 a resposta de sucesso e 400 uma resposta genérica de erro. Podemos observar, intuitivamente, que o status(200) é seguido pela função utilizada para chamar, enquanto o status(400) é seguido por uma mensagem de erro.

c. Feito:

```
app.get("/actor", async (req: Request, res: Response) => {
  try {
    const count = await getActorsCountByGender(req.query.gender as string);
    res.status(200).send({
      quantity: count,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
```

### Exercício 4

a, b. Feitos:

```
app.post("/actor", async (req: Request, res: Response) => {
  try {
    await modifySalary(req.body.id, req.body.salary);

    res.status(200).send({ message: "Success" });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

app.delete("/actor:id", async (req: Request, res: Response) => {
  try {
    await deleteActor(req.params.id);
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
```

### Exercício 5

Feito:

```
const createFilm = async (
  id: string,
  title: string,
  synopsis: string,
  release_date: Date,
  rate: number,
  playing_limit_date: Date
) => {
  await connection
    .insert({
      id: id,
      title: title,
      synopsis: synopsis,
      releas_date: release_date,
      rate: rate,
      playing_limit_date: playing_limit_date,
    })
    .into("Film");
};

app.post("/film/:id", async (req: Request, res: Response) => {
  try {
    await createFilm(
      req.body.id,
      req.body.title,
      req.body.synopsis,
      req.body.releaseDate,
      req.body.rate,
      req.body.playingLimitDate
    );

    res.status(200).send({
      message: "Success",
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
```

### Exercício 6

Feito:

```
const getAllFilms = async (): Promise<any> => {
  const result = await connection.raw(`
    SELECT *
    FROM Film
    LIMIT 15
  `);

  return result[0];
};

app.get("/film/all", async (req: Request, res: Response) => {
  try {
    const films = await getAllFilms();

    res.status(200).send({
      films: films,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
```

### Exercício 7
