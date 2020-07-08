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

const getActorsSumByGender = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
  SELECT COUNT(*) AS count
  FROM Actor
  WHERE gender = "${gender}"`);

  return result[0][0].count;
};

// const res0 = getActorById("002");
// const res1 = searchActorByName("Tony Ramos");
const res2 = getActorsSumByGender("female");
const res3 = getActorsSumByGender("male");
res2.then((value) => console.log(value));
res3.then((value) => console.log(value));
