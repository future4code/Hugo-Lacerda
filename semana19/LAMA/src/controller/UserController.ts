import { Request, Response } from "express";
import { UserInputDTO, LoginInputDTO} from "../model/User";
import { UserBusiness } from "../business/UserBusiness";
import { BaseDatabase } from "../data/BaseDatabase";
import { UserDatabase } from "../data/UserDatabase";
import { HashManager } from "../services/HashManager";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

export class UserController {

    private static UserBusiness = new UserBusiness(
        new UserDatabase(),
        new HashManager(),
        new Authenticator(),
        new IdGenerator()
    )

    async signup(req: Request, res: Response) {
        try {

            const input: UserInputDTO = {
                email: req.body.email,
                name: req.body.name,
                password: req.body.password,
                role: req.body.role
            }

            const token = await UserController.UserBusiness.createUser(input);

            res.status(200).send({ token });

        } catch (error) {
            res.status(400).send({ error: error.message });
        }

        await BaseDatabase.destroyConnection();
    }

    async login(req: Request, res: Response) {

        try {

            const loginData: LoginInputDTO = {
                email: req.body.email,
                password: req.body.password
            };

            const token = await UserController.UserBusiness.getUserByEmail(loginData);

            res.status(200).send({ token });

        } catch (error) {
            res.status(400).send({ error: error.message });
        }

        await BaseDatabase.destroyConnection();
    }

}