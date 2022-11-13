import {Doc} from "./Document";

export class DocManager {
    private list: Doc[] = [];

    constructor(list: Doc[]) {
        this.list = list;
    }

    showAll() {
        this.list.forEach(doc => console.log(doc.showInfo()));
    }

    add(doc: Doc) {
        this.list = [...this.list, doc];
        // this.list.push(doc);
    }

    remove(id: number) {
        this.list = this.list.filter(doc => doc.getId() !== id);
    }
}