### Exercício 1

a. A constantante rounds representa o fator custo que será recebido pelo método que gera o salt. Quanto maior este número, maior o tempo de execução do algoritimo, e seu valor pode variar de acordo com o sistema utilizado. Já o salt é uma string gerada pelo algorítmo e que é adicionada de modo aleatório no texto passado antes do hash ser gerado. Estou atribuindo o valor 12 no programa por ser o padrão na maioria das libs.

b, c. Feitos:

```
import * as bcrypt from 'bcryptjs';

export default class HashManager {

    public hash = async(text: string): Promise<string> => {
        const salt = await bcrypt.genSalt(Number(process.env.BCRYPT_ROUNDS));
        const cipherText = await bcrypt.hash(text, salt);

        return cipherText;
    }

    public compare = async(text: string,
        cipherText: string): Promise<boolean> => {
            const result = await bcrypt.compare(text, cipherText);

            return result;
        }
}
```

### Exercício 2

a. O cadastro, pois precisamos criar inserir novos registros no banco de usuários para que possamos checar se as senhas estão sendo inseridas criptografadas. Os registros anteriores a mudança permaneceram com as senhas expostas no banco.

b. Feito:

```
const hashManager = new HashManager();

const cipherText = await hashManager.hash(data.password);

const id = idGen.generateId();

await userDB.createUser(id, data.email, cipherText, data.role);
```

c. Feito:

```
 const hashManager = new HashManager();
    const correctPassword = await hashManager.compare(data.password, user.password)

    if(!correctPassword) {
      throw new Error("Invalid password")
    }
```

d. Não precisamos modificar este endpoint, pois não utilizamos o password para pegarmos as informações, somente o id.

### Exercício 3

a, b, c, d. Feitos.

### Exercício 4

a. Feito:

```
    if(authData.role !== "NORMAL"){
      throw new Error("Unauthorized: only normal users have permission to perform this action.")
    }
```

### Exercício 5

a. Feito:

```
  public deleteUser = async (id: string): Promise<void> => {
    await this.getConnection().raw(
      `
      DELETE FROM ${UserDB.TABLE_NAME}
      WHERE id = "${id}";
      `
    )

    BaseDB.destroyConnection();
  }

......

app.delete("/user/delete/:id", async(req: Request, res: Response) => {
  try{

    const token = req.headers.authorization as string;

    const tokenData = auth.getData(token);

    if(tokenData.role !== "ADMIN"){
      throw new Error("Unauthorized: only admins have permission to perform this action.")
    }
    const userDB = new UserDB();
    await userDB.deleteUser(req.params.id);

    res.status(200).send({
      message: "Success on deleting an user"
    })
  } catch(err){
    res.status(400).send({
      message: err.message,
    })
  }
})
```

### Exercício 6

a. Feito:

```
app.get("/user/:id", async (req: Request, res: Response) => {
  try {

    const token = req.headers.authorization as string;

    auth.getData(token);

    const id = req.params.id;

    const user = await userDB.getUserById(id);

    res.status(200).send({
      id: user.id,
      email: user.email,
      role: user.role
    })
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

```

### Exercício 8

a. Feito:

```
  public getUserById = async (id: string): Promise<any> => {
    const result = await this.connection
      .select("*")
      .from(UserDB.TABLE_NAME)
      .where({ id });

    return result[0];
  };
```

b. Feito:

```
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
```

### Exercício 7

a, b: Feitos:

```
import knex from "knex";
import Knex from "knex";

export default abstract class BaseDB {
  private static connection: Knex | null = null;

  protected getConnection = (): Knex => {
    if (!BaseDB.connection) {
      BaseDB.connection = knex({
        client: "mysql",
        connection: {
          host: process.env.DB_HOST,
          port: 3306,
          user: process.env.DB_USER,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_NAME,
        },
      });
    }
    return BaseDB.connection;
  };

  public static destroyConnection = async(): Promise<void> => {
      if(BaseDB.connection){
          await BaseDB.connection.destroy();
          BaseDB.connection = null;
      }
  }
}
```
