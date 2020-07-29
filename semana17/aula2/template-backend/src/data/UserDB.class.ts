import knex from "knex";
import BaseDB from "./BaseDB.class";
import { USER_ROLES } from "../services/Authenticator.class"
import { table } from "console";

export default class UserDB extends BaseDB {

  private static TABLE_NAME = "UserA";

  public createUser = async (
    id: string,
    email: string,
    password: string,
    role: USER_ROLES
  ): Promise<void> => {
    await this.getConnection()
      .insert({
        id,
        email,
        password,
        role
      })
      .into(UserDB.TABLE_NAME);

      BaseDB.destroyConnection()
  };

  public getUserByEmail = async (email: string): Promise<any> => {
    const result = await this.getConnection()
      .select("*")
      .from(UserDB.TABLE_NAME)
      .where({ email });

      BaseDB.destroyConnection();

    return result[0];
  };

  public getUserById = async (id: string): Promise<any> => {
    const result = await this.getConnection()
      .select("*")
      .from(UserDB.TABLE_NAME)
      .where({ id });

    BaseDB.destroyConnection();
    return result[0];
  };

  public deleteUser = async (id: string): Promise<void> => {
    await this.getConnection().raw(
      `
      DELETE FROM ${UserDB.TABLE_NAME}
      WHERE id = "${id}";
      `
    )

    BaseDB.destroyConnection();
  } 
}
