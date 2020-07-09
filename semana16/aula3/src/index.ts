import knex from "knex";
import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";

dotenv.config();

const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT || 3306),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

const getActorById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * 
    FROM Actor 
    WHERE id = '${id}'
  `);

  return result[0][0];
};

const searchActorByName = async (name: string): Promise<any> => {
  const result = await connection.raw(`
  SELECT * 
  FROM Actor
  WHERE name = "${name}"`);

  return result[0][0];
};

const getActorsCountByGender = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
  SELECT COUNT(*) AS count
  FROM Actor
  WHERE gender = "${gender}"`);

  return result[0][0].count;
};

const createActor = async (
  id: string,
  name: string,
  salary: number,
  birth_date: Date,
  gender: string
): Promise<void> => {
  await connection
    .insert({
      id: id,
      name: name,
      salary: salary,
      birth_date: birth_date,
      gender: gender,
    })
    .into("Actor");
};

const modifySalary = async (id: string, new_salary: number): Promise<void> => {
  await connection("Actor")
    .update({
      salary: new_salary,
    })
    .where("id", id);
};

const deleteActor = async (id: string): Promise<void> => {
  await connection("Actor").delete().where("id", id);
};

const avgSalaryByGender = async (gender: string): Promise<any> => {
  const result = await connection("Actor")
    .avg("salary as avarage")
    .where({ gender });

  return result[0].avarage;
};

// const res1 = avgSalaryByGender("female");
// res1.then((value) => console.log(value));

app.get("/actor/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const actor = await getActorById(id);

    res.status(200).send(actor);
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

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

app.put("/actor", async (req: Request, res: Response) => {
  try {
    await createActor(
      req.body.id,
      req.body.name,
      req.body.salary,
      new Date(req.body.dateOfBirth),
      req.body.salary
    );

    res.status(200).send();
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

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

const searchFilms = async (searchFor: string): Promise<any> => {
  const result = await connection.raw(`
  SELECT * 
  FROM Film
  WHERE title LIKE "%${searchFor}%" OR synopsis LIKE "%${searchFor}%"`);

  return result[0][0];
};

app.get("/film/search", async (req: Request, res: Response) => {
  try {
    const films = await searchFilms(req.query.query as string);

    res.status(200).send({
      films: films,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
