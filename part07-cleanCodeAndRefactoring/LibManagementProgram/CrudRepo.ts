class CrudRepo<T> {
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

    update(index: number, newItem: T) {
        this.list =
            this.list.map((item, idx) => idx === index ? {...newItem} : item);

            // this.list.map((item, idx) => {
            //     if (idx === index) {
            //         item = {...newItem};
            //     }
            //     return item;
            // });
    }
}