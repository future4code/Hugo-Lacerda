import knex from "knex";

export default class UserDB {
  private connection = knex({
    client: "mysql",
    connection: {
      host: process.env.DB_HOST,
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    },
  });

  private static TABLE_NAME = "UserA";

  public createUser = async (
    id: string,
    email: string,
    password: string
  ): Promise<void> => {
    await this.connection
      .insert({
        id,
        email,
        password,
      })
      .into(UserDB.TABLE_NAME);
  };

  public getUserByEmail = async (email: string): Promise<any> => {
    const result = await this.connection
      .select("*")
      .from(UserDB.TABLE_NAME)
      .where({ email });

    return result[0];
  };

  public getUserById = async (id: string): Promise<any> => {
    const result = await this.connection
      .select("*")
      .from(UserDB.TABLE_NAME)
      .where({ id });

    return result[0];
  };
}
