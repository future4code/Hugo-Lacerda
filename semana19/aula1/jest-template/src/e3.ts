enum LOCATION {
    EUA = "EUA",
    BRAZIL = "BRAZIL",
  }
  
  enum NATIONALITY {
    BRAZILIAN = "BRAZILIAN",
    AMERICAN = "AMERICAN",
  }
  
  interface User {
    name: string;
    age: number;
    nationality: NATIONALITY;
  }
  
  interface Casino {
    name: string;
    location: LOCATION;
  }

  interface Result {
    brazilians: ResultItem;
    americans: ResultItem;
  }
  
  interface ResultItem {
    allowed: string[];
    unallowed: string[];
  }

  function verifyPermission(casino: Casino, users: User[]): Result{

    let allowedUsers: User[] = [];
    let unallowedUsers: User[] = [];

    for (const user of users) {
        if (casino.location === LOCATION.EUA) {
          if (user.age >= 21) {
            allowedUsers.push(user);
          } else {
            unallowedUsers.push(user);
          }
        } else if (casino.location === LOCATION.BRAZIL) {
          if (user.age >= 18) {
            allowedUsers.push(user);
          } else {
            unallowedUsers.push(user);
          }
          break;
        }
      }
    
      return {
        brazilians: {
          allowed: allowedUsers
            .filter((user) => user.nationality === NATIONALITY.BRAZILIAN)
            .map((u) => u.name),
          unallowed: unallowedUsers
            .filter((user) => user.nationality === NATIONALITY.BRAZILIAN)
            .map((u) => u.name),
        },
        americans: {
          allowed: allowedUsers
            .filter((user) => user.nationality === NATIONALITY.AMERICAN)
            .map((u) => u.name),
          unallowed: unallowedUsers
            .filter((user) => user.nationality === NATIONALITY.AMERICAN)
            .map((u) => u.name),
        },
      };
  };

  export { verifyPermission, User, LOCATION, NATIONALITY, Casino };