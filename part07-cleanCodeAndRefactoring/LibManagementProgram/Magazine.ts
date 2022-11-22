const readlineSync = require("readline-sync");
import {Doc} from "./Document";

export class Magazine extends Doc {
    private num: number;
    private date: Date | string;

    constructor(id: number, title: string, company:string, quantity: number, num: number, date: Date) {
        super(id, title, company, quantity);
        this.num = num;
        this.date = new Date();
    }

    static emptyInstance(){
        return new Magazine(9999, "", "", 0, 0, new Date());
    }


    input() {
        const doc = super.input();
        const number = readlineSync.question("Input number: ");
        const date = readlineSync.question("Input date: ");

        return new Magazine(doc.getId(), doc.getTitle(), doc.getPublishingCompany(), doc.getQuantity(), number, date);
    }

    showInfo(): string {
        return `Magazine id = ${this.id} number ${this.num} date ${this.date}`;
    }

}