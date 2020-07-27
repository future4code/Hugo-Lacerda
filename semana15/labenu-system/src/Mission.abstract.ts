import * as moment from "moment";
import Instructor from "./Instructor.class";
import Student from "./Student.class";
export default abstract class Mission {
  protected name: string = "";

  constructor(
    private id: number,
    private startDate: moment.Moment,
    private endDate: moment.Moment,
    private currentModule: MODULE = undefined,
    private instructors: Instructor[] = [],
    private students: Student[] = []
  ) {}

  public getId = (): number => {
    return this.id;
  };

  public getName = (): string => {
    return this.name;
  };

  public getStartDate = (): moment.Moment => {
    return this.startDate;
  };

  public getEndDate = (): moment.Moment => {
    return this.endDate;
  };

  public getCurrentModule = (): MODULE | undefined => {
    return this.currentModule;
  };

  public getInstructors = (): Instructor[] => {
    return this.instructors;
  };

  public getStudents = (): Student[] => {
    return this.students;
  };

  public addInstructor = (instructor: Instructor) => {
    this.instructors.push(instructor);
  };

  public addStudent = (student: Student) => {
    this.students.push(student);
  };

  public setName = (name: string) => {
    this.name = name;
  };
}

export enum MODULE {
  ONE = "FUNDAMENTOS WEB DEV",
  TWO = "REACT E ASSINCRONICIDADE",
  THREE = "REACT AVANÇADO E HOOKS",
  FOUR = "OOP",
  FIVE = "BACKEND",
  SIX = "INFRAESTRUTURA E DEVOPS",
  SEVEN = "SOFTWARE DEV NO MUNDO REAL",
}
