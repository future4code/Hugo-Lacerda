### Exercício 1

a. Concordo, sim, pois usando strings possuimos uma variedade maior de opções dentro do mesmo número de caracteres para dígitos, uma vez que podemos usar letras nas duas caixas, números e caracteres especiais, tornando muito mais difícil um algorítimo gerar duplicatas.

b. Feito:

```
import { v4 } from "uuid";

export default class IdGenerator {

    public generateId = (): string => (v4());
};
```

### Exercício 2

a. A primeira constante declarada no código, connection, estabelece a conexão com o banco de dados cujas informações armazenamos no arquilo .env. Essa conexão é feita utilizando o knex. Já a segunda constante é uma função assíncrona reponsável por adicionar um registro a tabela de usuários que especificamos como parâmetro no .into.

b. Feito:

```
CREATE TABLE UserA (
id VARCHAR(255) PRIMARY KEY,
email VARCHAR(255) NOT NULL UNIQUE,
password VARCHAR(255) NOT NULL
);
```

c. Feito:

```
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

  public async createUser(
    id: string,
    email: string,
    password: string
  ): Promise<void> {
    await this.connection
      .insert({
        id,
        email,
        password,
      })
		.into(UserDB.TABLE_NAME);
  }
}
```

d. Feito.

### Exercício 3

a. O `as string` é uma forma de 'garantirmos' que aquele valor não será undefined, nos tornando necessário que tenhamos essa variável de ambiente, a JWT_KEY.

b. Feito.

```
import * as jwt from "jsonwebtoken";

interface AuthenticationData {
  id: string;
}
export default class Authenticator {
  private static EXPIRES_IN = "1min";

  public generateToken = (input: AuthenticationData): string => {
    const token = jwt.sign(
      {
        id: input.id,
      },
      process.env.JWT_KEY as string,
      {
        expiresIn: Authenticator.EXPIRES_IN,
      }
    );

    return token;
  };
}
```

### Exercício 4

a, b, c. Feitos:

```
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

    const userDB = new UserDB();

    await userDB.createUser(id, data.email, data.password);

    const auth = new Authenticator();

    const token = auth.generateToken({ id, });

    res.status(200).send({ token });
  } catch(err){
    res.status(400).send({
      message: err.message,
    })
  }
})
```

### Exercício 5

a. Feito:

```
  public getUserByEmail = async(email: string): Promise<any> => {
      const result = await this.connection
      .select("*")
      .from(UserDB.TABLE_NAME)
      .where({ email })

      return result[0]
  }
```

b. Feito:

```
userDB.getUserByEmail("paçoca@banana.com").then(value => console.log(value));
  ..............
  RowDataPacket {
  id: '625b6b98-3f79-44f0-8d10-12f280a628cc',
  email: 'paçoca@banana.com',
  password: 'ananab'
}
```

### Exercício 6

a, b. Feitos:

```
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
```

### Exercício 7

a. O método verify do jwt decodifica as informações guardadas pelo nosso token e, como não sabemos exatamente o que será retornado, devemos usar o as any, que tornará válido qualquer formato.

b. Feito:

```
  public getData = (token: string): AuthenticationData => {
    const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
    const result = {
      id: payload.id,
    };
    return result;
  }
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
