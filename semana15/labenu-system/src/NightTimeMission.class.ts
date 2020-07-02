import Mission, { MODULE } from "./Mission.abstract";
import Student from "./Student.class";
import Instructor from "./Instructor.class";

export default class NightTimeMission extends Mission {
  name = "";

  constructor(
    id: number,
    startDate: moment.Moment,
    endDate: moment.Moment,
    currentModule: MODULE = undefined,
    instructors: Instructor[] = [],
    students: Student[] = []
  ) {
    super(id, startDate, endDate, currentModule, instructors, students);
  }

  public setName = (name: string): void => {
    if (name.indexOf("-na-night") !== -1) {
      this.name = name;
    } else {
      console.log(
        "Nome inválido: turmas noturnas devem terminar com o sufixo '-na-night'"
      );
    }
  };
}
