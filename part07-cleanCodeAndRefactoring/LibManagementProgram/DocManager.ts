import {Doc} from "./Document";
import {Book} from "./Book";
import {Magazine} from "./Magazine";
import {Newspaper} from "./Newspaper";

export class DocManager {
    private list: Doc[] = [];

    constructor(list: Doc[]) {
        this.list = list;
    }

    showAll() {
        // this.list.forEach(doc => console.log(doc.showInfo()));
        this.list.forEach(doc => console.log(doc));
    }

    showBooks() {
        this.list.filter(doc => doc instanceof Book)
            .forEach(doc => console.log(doc));
    }

    showMagazines() {
        this.list.filter(doc => doc instanceof Magazine)
            .forEach(doc => console.log(doc));
    }

    showNewspapers() {
        this.list.filter(doc => doc instanceof Newspaper)
            .forEach(doc => console.log(doc));
    }

    add(doc: Doc) {
        this.list = [...this.list, doc];
        // this.list.push(doc);
    }

    remove(id: number) {
        this.list = this.list.filter(doc => doc.getId() !== id);
    }

    findByTitle(title: string): Doc[] {
        return this.list.filter(doc => doc.getTitle() === title);
    }

    findById(id: number): Doc[] {
        return this.list.filter(doc => doc.getId() === id);
    }

    update(id: number, newItem: Doc): void {
        this.list = this.list.map(item => {
            if (item.getId() === id)
                return newItem;

            return item;
        });
    }
}