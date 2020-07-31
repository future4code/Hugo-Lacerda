import { Request, Response } from "express";
import { BandInputDTO } from "../model/Band";
import { BandBusiness } from "../business/BandBusiness";
import { BaseDatabase } from "../data/BaseDatabase";
import { BandDatabase } from "../data/BandDatabase";
import { UserDatabase } from "../data/UserDatabase";
import { HashManager } from "../services/HashManager";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";
import { UnauthorizedError } from "../error/UnauthorizedError";

export class BandController {

    private static BandBusiness = new BandBusiness(
        new BandDatabase(),
        new HashManager(),
        new Authenticator(),
        new IdGenerator()
    )

    async createBand(req: Request, res: Response) {
        try {

            const userData = new Authenticator().getData(req.headers.authorization!);

            if(userData.role !== "ADMIN"){
                throw new UnauthorizedError("Unauthorized: only admins can perform this action.")
            }

            const input: BandInputDTO = {
                name: req.body.name,
                music_genre: req.body.music_genre,
                responsible: req.body.role
            }

            const band = await BandController.BandBusiness.createBand(input);

            res.status(200).send({ band });

        } catch (error) {
            res.status(401).send({ error: error.message });
        }

        await BaseDatabase.destroyConnection();
    }

    async getBand(req: Request, res: Response) {

        try {

            if(!req.body.id || !req.body.name){
                throw new Error ("Missing input values.")
            }

        } catch (error) {
            res.status(400).send({ error: error.message });
        }

        await BaseDatabase.destroyConnection();
    }

}