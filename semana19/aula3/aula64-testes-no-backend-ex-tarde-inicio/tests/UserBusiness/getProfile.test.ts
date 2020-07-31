import { UserBusiness } from "../../src/business/UserBusiness";
import { User, UserRole, stringToUserRole } from "../../src/model/User";

describe("Testing UserBusiness.getUserById", () => {
  let userDatabase: any = {};
  let hashGenerator: any = {};
  let tokenGenerator: any = {};
  let idGenerator: any = {};
  it("Should return error code 404 and the message 'User not found' when the user doesn't exist", async () => {
    try {
      const getProfile = jest.fn();
      const getUserById = jest.fn();
      userDatabase = { getProfile, getUserById };

      const userBusiness = new UserBusiness(
        userDatabase,
        hashGenerator,
        tokenGenerator,
        idGenerator
      );

      const user = await userBusiness.getProfile("00000");

    } catch (err) {
      expect(err.errorCode).toEqual(404);
      expect(err.message).toEqual("User not found");
    }
  });

  it("Should return the expected data from the user", async () => {
    
    const getUserById = jest.fn(
        (id: string) =>
          new User(
            "id",
            "Mordecai",
            "mordecai@gmail.com",
            "hashPass",
            stringToUserRole("ADMIN")
          )
      );
      
    const getProfile = jest.fn(
      (id: string) =>
        ({
          id: "id",
          name: "Mordecai",
          email: "mordecai@gmail.com",
          role: stringToUserRole("ADMIN")
        })
    );

    userDatabase = { getUserById };

    const userBusiness = new UserBusiness(
      userDatabase,
      hashGenerator,
      tokenGenerator,
      idGenerator
    );

    const user = await userBusiness.getProfile("id");
    
    expect(getUserById).toHaveBeenCalled();
    expect(user).toEqual({
      id: "id",
      name: "Mordecai",
      email: "mordecai@gmail.com",
      role: UserRole.ADMIN,
    });
  });
});
