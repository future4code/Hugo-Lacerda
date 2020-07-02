import User from "./User.interface";
import * as moment from "moment";

export default class Instuctor implements User {
  constructor(
    public id: number,
    public name: string,
    public email: string,
    public birthdate: moment.Moment,
    public specializations: SPECIALIZATION[]
  ) {}

  public getAge = (): number => {
    return moment().diff(this.birthdate, "years");
  };

  public getId = (): number => {
    return this.id;
  };

  public getName = (): string => {
    return this.name;
  };

  public getSpecializations = (): SPECIALIZATION[] => {
    return this.specializations;
  };
}

export enum SPECIALIZATION {
  REACT = "REACT",
  REDUX = "REDUX",
  CSS = "CSS",
  TESTES = "TESTES",
  TYPESCRIPT = "TYPESCRIPT",
  OOP = "OOP",
  BACKEND = "BACKEND",
}
