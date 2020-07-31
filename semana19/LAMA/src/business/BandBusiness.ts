import { BandInputDTO, Band } from "../model/Band";
import { BandDatabase } from "../data/BandDatabase";
import { IdGenerator } from "../services/IdGenerator";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";

export class BandBusiness {

    constructor(
        private bandDatabase: BandDatabase,
        private hashManager: HashManager,
        private authenticator: Authenticator,
        private idGenerator: IdGenerator
    ){}

    async createBand(band: BandInputDTO) {

        const id = this.idGenerator.generate();

        await this.bandDatabase.createBand(id, band.name, band.music_genre, band.responsible)
    }

    async getBandById(id: string): Promise<Band> {

        const bandFromDB = await this.bandDatabase.getBandById(id);

        return bandFromDB;
    }

    async getBandByName(name: string): Promise<Band> {

        const bandFromDB = await this.bandDatabase.getBandByName(name);

        return bandFromDB;
    }
}