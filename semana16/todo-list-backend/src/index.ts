import knex from "knex";
import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";

/**************************************************************/

dotenv.config();

/**************************************************************/

const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});

/**************************************************************/

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

/**************************************************************/

// 1

const createUser = async (
  name: string,
  username: string,
  email: string
): Promise<any> => {
  await connection
    .insert({
      id: Date.now().toString(),
      name: name,
      username: username,
      email: email,
    })
    .into("User");
};

app.put(
  "/user",
  async (req: Request, res: Response): Promise<void> => {
    try {
      await createUser(req.body.name, req.body.username, req.body.email);

      res.status(200).send({
        message: "Success!",
      });
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  }
);

// 2

const getUserById = async (id: string): Promise<any> => {
  const user = await connection("User").select("username", "id").where("id", id);

  return user;
};

app.get(
  "/user/:id",
  async (req: Request, res: Response): Promise<void> => {
    try {
      const user = await getUserById(req.params.id);

      res.status(200).send(user);
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  }
);

// 3

const editUser = async (id: string, newName: string, newUsername: string): Promise<any> => {
  const user = await connection("User").update({
    name: newName,
    username: newUsername
  }).where("id", id);
};

app.put(
  "/user/edit/:id",
  async (req: Request, res: Response): Promise<void> => {
    try {
      await editUser(req.params.id, req.body.name, req.body.username);

      res.status(200).send({
        message: "Succes on editing an user."
      });
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  }
);

// 4
