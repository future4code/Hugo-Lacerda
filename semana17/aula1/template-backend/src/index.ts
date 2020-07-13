import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import IdGenerator from "./services/IdGen.class"
import UserDB from "./data/UserDB.class";
import Authenticator from "./services/Authenticator.class";
dotenv.config();

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

const idGen = new IdGenerator();

const userDB = new UserDB();

const auth = new Authenticator();

app.post("/signup", async(req: Request, res: Response) => {
  try {
    if(!req.body.email || req.body.email.indexOf("@") === -1){
      throw new Error("Invad email address");
    }

    if(!req.body.password || req.body.password.lenght < 6) {
      throw new Error("Invalid password")
    }

    const data = {
      email: req.body.email,
      password: req.body.password,
    }

    const id = idGen.generateId();
    
    await userDB.createUser(id, data.email, data.password);

    const token = auth.generateToken({ id, });

    res.status(200).send({ token });
  } catch(err){
    res.status(400).send({
      message: err.message,
    })
  }
})

app.post("/login", async(req: Request, res: Response) => {

  
  try {
    if(!req.body.email || req.body.email.indexOf("@") === -1){
      throw new Error("Invad email address");
    }

    const user = await userDB.getUserByEmail(req.body.email);
    
    if(req.body.password !== user.password) {
      throw new Error("Invalid password")
    }

    const data = {
      email: req.body.email,
      password: req.body.password,
    }

    const token = auth.generateToken({ id: user.id, });

    res.status(200).send({ token });
  } catch(err){
    res.status(400).send({
      message: err.message,
    })
  }
})

app.get("/user/profile", async(req: Request, res: Response) => {
  try {
    const token = req.headers.authorization as string;

    const authData = auth.getData(token);

    const user = await userDB.getUserById(authData.id)

    res.status(200).send({ 
      id: user.id,
      email: user.email
     });
  } catch(err){
    res.status(400).send({
      message: err.message,
    })
  }
})

