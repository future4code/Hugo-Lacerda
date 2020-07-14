import * as jwt from "jsonwebtoken";

interface AuthenticationData {
  id: string;
  role: USER_ROLES
}
export default class Authenticator {
  private static EXPIRES_IN = "10min";

  public generateToken = (input: AuthenticationData): string => {
    const token = jwt.sign(
      {
        id: input.id,
        role: input.role
      },
      process.env.JWT_KEY as string,
      {
        expiresIn: Authenticator.EXPIRES_IN,
      }
    );

    return token;
  };

  public getData = (token: string): AuthenticationData => {
    const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
    const result = {
      id: payload.id,
      role: payload.role
    };
    return result;
  }
}


export enum USER_ROLES {
  NORMAL = "NORMAL",
  ADMIN = "ADMIN"
}