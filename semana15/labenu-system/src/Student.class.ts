import User from "./User.interface";
import * as moment from "moment";

export default class Student {
  constructor(
    public id: number,
    public name: string,
    public email: string,
    public birthdate: moment.Moment
  ) {}

  public getAge = (): number => {
    return moment().diff(this.birthdate, "years");
  };

  public getId = (): number => {
    return this.id;
  };

  public getName = (name: string): string => {
    return this.name;
  };
}
