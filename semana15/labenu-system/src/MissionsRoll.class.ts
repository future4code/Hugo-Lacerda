import * as moment from "moment";
import Mission from "./Mission.abstract";

export default class MissionRoll {
  constructor(private roll: Mission[] | any) {}

  public studentsDataLog = (): void => {
    this.roll.forEach((mission: any) => {
      mission.students.forEach((student: any) => {
        console.log(`
        Nome: ${student.name}
        Email: ${student.email}
        Curso: WEB DEV 
        Turma: ${mission.name} 
        Idade: ${moment().diff(student.birthdate, "years")}
        `);
      });
    });
  };

  public instructorsDataLog = (): void => {
    this.roll.forEach((mission: any) => {
      mission.instructors.forEach((instructor: any) => {
        console.log(`
        Nome: ${instructor.name}
        Email: ${instructor.email}
        Idade: ${moment().diff(instructor.birthdate, "years")}
        Especialidades: ${instructor.specializations}
        `);
      });
    });
  };
}

// Nome: <NOME DO PROFESSOR>
// Email: <EMAIL DO PROFESSOR>
// Idade: <IDADE DO PROFESSOR>
// Especialiadades: OO, React e HTML
