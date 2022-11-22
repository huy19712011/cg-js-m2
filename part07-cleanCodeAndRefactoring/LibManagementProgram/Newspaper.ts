import {Doc} from "./Document";
const readlineSync = require("readline-sync");

export class Newspaper extends Doc {
    private day: Date;

    constructor(id: number, title: string, company:string, quantity: number, day: Date) {
        super(id, title, company, quantity);
        this.day = new Date();
    }

    static emptyInstance(){
        return new Newspaper(9999, "", "", 0, new Date());
    }


    input() {
        const doc = super.input();
        const day = readlineSync.question("Input pages: ");

        return new Newspaper(doc.getId(), doc.getTitle(), doc.getPublishingCompany(), doc.getQuantity(), day);
    }

    showInfo(): string {
        return `Newspaper id = ${this.id} day ${this.day}`;
    }
}