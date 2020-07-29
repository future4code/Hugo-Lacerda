import { UserBusiness } from "../../src/business/UserBusiness";
import { User, UserRole, stringToUserRole } from "../../src/model/User";

describe("Testing UserBusiness.getAllUsers", () => {
  let userDatabase: any = {};
  let hashGenerator: any = {};
  let tokenGenerator: any = {};
  let idGenerator: any = {};
  it("Should return error code 401 and the message 'Unauthorized: admin status is required to access this endpoint' when the user is not an admin", async () => {
    expect.assertions(2);

    try {
      const userBusiness = new UserBusiness(
        userDatabase,
        hashGenerator,
        tokenGenerator,
        idGenerator
      );

      await userBusiness.getAllUsers(UserRole.NORMAL)

    } catch (err) {
      expect(err.errorCode).toEqual(403);
      expect(err.message).toEqual("Unauthorized: admin status is required to access this endpoint");
    }
  });
  it("Should return error code 401 and the message 'Unauthorized: admin status is required to access this endpoint' when the user is not an admin", async () => {
    const getAllUsers = jest.fn(() => [
        new User(
          "id",
          "Benson",
          "benson@gmail.com",
          "hashPass",
          stringToUserRole("ADMIN")
        ),
      ]);
      userDatabase = { getAllUsers };
  
      const userBusiness = new UserBusiness(
        userDatabase,
        hashGenerator,
        tokenGenerator,
        idGenerator
      );
  
      const result = await userBusiness.getAllUsers(UserRole.ADMIN);
  
      expect(getAllUsers).toHaveBeenCalledTimes(1);
      expect(result).toContainEqual({
        id: "id",
        name: "Benson",
        email: "benson@gmail.com",
        role: UserRole.ADMIN,
      });
    });
});
