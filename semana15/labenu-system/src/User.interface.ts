import * as moment from "moment";

export default interface User {
  id: number;
  name: string;
  email: string;
  birthdate: moment.Moment;
}
