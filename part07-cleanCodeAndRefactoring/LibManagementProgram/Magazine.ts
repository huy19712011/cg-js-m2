import {Doc} from "./Document";

export class Magazine extends Doc {
    private num: number;
    private date: Date;

    constructor(id: number, company:string, quantity: number, num: number, date: Date) {
        super(id, company, quantity);
        this.num = num;
        this.date = new Date();
    }

    showInfo(): string {
        return `Magazine id = ${this.id} number ${this.num} date ${this.date}`;
    }

}