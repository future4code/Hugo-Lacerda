import * as moment from "moment";
import Student from "./Student.class";

export default class StudentRoll {
  constructor(private roll: Student[] | any) {}

  getStudentAge = (id: number): number => {
    let age: number = undefined;
    this.roll.map((student: Student | any) => {
      if (id === Number(student.id)) {
        age = moment().diff(student.birthdate, "years");
      }
    });

    return age;
  };
}
