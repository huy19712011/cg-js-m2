import {IT} from "./IT";
import {Doc} from "./Document";

export class CrudRepo<T extends IT> {
    protected list: T[] = [];

    getOne(index: number): T {
        return this.list[index];
    }

    getAll(): T[] {
        return this.list;
    }

    add(item: T) {
        this.list = [...this.list, item];
    }

    update(id: number, newItem: T) {
        this.list =
            this.list.map(item => item.getId() === id ? newItem : item);
    }

    // update(id: number, newItem: T): void {
    //     this.list = this.list.map(item => {
    //         if (item.getId() === id)
    //             return newItem;
    //
    //         return item;
    //     });
    // }

    remove(id: number) {
        this.list = this.list.filter(item => item.getId() !== id);
    }
}