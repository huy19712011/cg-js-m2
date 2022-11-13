import {Doc} from "./Document";

export class Book extends Doc {
    private author: string;
    private pages: number;

    constructor(id: number, company:string, quantity: number, author: string, pages: number) {
        super(id, company, quantity);
        this.author = author;
        this.pages = pages;
    }

    showInfo(): string {
        return `Book id = ${this.id} author ${this.author} ${this.pages} pages`;
    }
}