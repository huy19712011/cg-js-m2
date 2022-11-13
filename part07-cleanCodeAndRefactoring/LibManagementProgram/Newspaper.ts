import {Doc} from "./Document";

export class Newspaper extends Doc {
    private day: Date;

    constructor(id: number, company:string, quantity: number, day: Date) {
        super(id, company, quantity);
        this.day = new Date();
    }


    showInfo(): string {
        return `Newspaper id = ${this.id} day ${this.day}`;
    }
}