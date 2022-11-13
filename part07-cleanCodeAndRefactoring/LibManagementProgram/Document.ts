export class Doc { // tai lieu
    protected id: number; // ma so
    protected publishingCompany: string; // nha xuat ban
    protected quantity: number; // so luong

    constructor(id: number, company: string, quantity: number) {
        this.id = id;
        this.publishingCompany = company;
        this.quantity = quantity;
    }

    getId(): number {
        return this.id;
    };

    showInfo(): string {
        return "";
    };
}