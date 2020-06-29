export default class Transaction {
    date: number;
    value: number;
    description: string;

    constructor(newDate: number, newValue: number, newDescription: string){
        this.date = newDate;
        this.value = newValue;
        this.description = newDescription;
    }
}