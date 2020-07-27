import knex from "knex";
import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import moment from "moment";
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

const editUser = async (id: string, newName?: string, newUsername?: string): Promise<any> => {
  const user = await connection("User").update({
    name: newName,
    username: newUsername
  }).where("id", id);
};

app.put(
  "/user/edit/:id",
  async (req: Request, res: Response): Promise<void> => {
    try {

      if(req.body.name === "" || req.body.username === "" || !req.params.id){
        throw new Error("Failed: Review your parameters")
      }
      
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

const createTask = async (
  title: string, 
  description: string, 
  deadline: moment.Moment,
  creator_id: string
  ): Promise<any> => {
    await connection
    .insert({
      id: Date.now().toString(),
      title: title,
      description: description,
      deadline: deadline.format("YYYY-MM-DD"),
      creator_id: creator_id
    })
    .into("Task")
  }


  app.put("/task", async(req: Request, res: Response): Promise<void> => {
    try{
      if(!req.body.title || !req.body.description || !req.body.deadline || !req.body.creator_id){
        throw new Error('Failed: Review your parameters')
      }

      const date = moment(req.body.deadline, "DD/MM/YYYY");
      await createTask(req.body.title, req.body.description, date, req.body.creator_id);

      res.status(200).send({
        message: "Success!",
      });
    }catch(err){
      res.status(400).send({
        meassage: err.message,
      })
    }
  });

  // 5

  const getTaskById = async (id: string): Promise<any> => {
    const task = await connection.raw(`
      SELECT t.id as taskId, 
      t.title,
      t.description,
      t.deadline,
      t.status,
      t.creator_id,
      u.username as creator_username
      FROM Task AS t
      JOIN User AS u
      ON t.creator_id = u.id
      WHERE t.id = ${id}
    `);
  
    return task[0][0];
  };
  
  app.get(
    "/task/:id",
    async (req: Request, res: Response): Promise<void> => {
      try {
        const task = await getTaskById(req.params.id);
        task.deadline = moment(task.deadline, "YYYY-MM-DD").format("DD/MM/YYYY")
        res.status(200).send(task);
      } catch (err) {
        res.status(400).send({
          message: err.message,
        });
      }
    }
  );