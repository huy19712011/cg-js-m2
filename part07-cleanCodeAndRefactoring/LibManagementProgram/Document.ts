let readlineSync = require('readline-sync');

export class Doc { // tai lieu
    protected id: number; // ma so
    protected title: string;
    protected publishingCompany: string; // nha xuat ban
    protected quantity: number; // so luong

    // static emptyConstructor() {
    //     this.id = id;
    //     this.title = title;
    //     this.publishingCompany = company;
    //     this.quantity = quantity;
    // }

    constructor(id: number, title: string, company: string, quantity: number) {
        this.id = id;
        this.title = title;
        this.publishingCompany = company;
        this.quantity = quantity;
    }

    static emptyInstance(){
        return new Doc(9999, "", "", 0);
    }

    input() {
        const id = +readlineSync.question("Input id: ");
        const title = readlineSync.question("Input title: ");
        const company = readlineSync.question("Input company: ");
        const quantity = +readlineSync.question("Input quantity: ");

        return new Doc(id, title, company, quantity);
    }


    getId(): number {
        return this.id;
    };

    setId(id: number) {
        this.id = id;
    }

    showInfo(): string {
        return "";
    };

    getTitle(): string {
        return this.title
    }

    getPublishingCompany(): string {
        return this.publishingCompany;
    }

    getQuantity(): number {
        return this.quantity;
    }
}