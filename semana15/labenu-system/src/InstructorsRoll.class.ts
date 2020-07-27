import * as moment from "moment";
import Instructor from "./Instructor.class";

export default class InstructorsRoll {
  constructor(private roll: Instructor[] | any) {}

  getInstructorAge = (id: number): number => {
    let age: number = undefined;
    this.roll.map((instructor: Instructor | any) => {
      if (id === Number(instructor.id)) {
        age = moment().diff(instructor.birthdate, "years");
      }
    });

    return age;
  };
}
