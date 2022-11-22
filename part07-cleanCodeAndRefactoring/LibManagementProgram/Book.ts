let readlineSync = require('readline-sync');
import {Doc} from "./Document";

export class Book extends Doc {
    private author: string;
    private pages: number;

    constructor(id: number, title: string, company:string, quantity: number, author: string, pages: number) {
        super(id, title, company, quantity);
        this.author = author;
        this.pages = pages;
    }

    static emptyInstance(){
        return new Book(9999, "", "", 0, "", 0);
    }

    showInfo(): string {
        return `Book id = ${this.id} author ${this.author} ${this.pages} pages`;
    }
    input() {
        const doc = super.input();
        const author = readlineSync.question("Input author: ");
        const pages = readlineSync.question("Input pages: ");

        return new Book(doc.getId(), doc.getTitle(), doc.getPublishingCompany(), doc.getQuantity(), author, pages);
    }
}