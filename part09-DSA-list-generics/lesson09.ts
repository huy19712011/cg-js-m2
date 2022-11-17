// 1. Overview
// Trong một cấu trúc dữ liệu thì có 2 thành phần quan trọng chính là container và element.
// Container: Là lớp chứa dữ liệu và cung cấp các phương thức để thao tác với dữ liệu
// Elements: Chính là các phần tử dữ liệu

// Set (Tập hợp): Nhóm các phần tử không trùng nhau
// List (Danh sách): Nhóm ác phần tử có thể trùng nhau
// Stack: Nhóm các phần tử theo trật tự first-in/last-out (vào trước/ra sau)
// Queue: Nhóm các phần tử theo trật tự first-in/first-out (vào trước/ra trước)
// Map (Bản đồ): Lưu trữ các cặp key/value

// Tree (Cây): Lưu trữ các phần tử theo mối quan hệ cha-con
// Graph (Đồ thị): Lưu trữ các phần tử theo mối quan hệ mạng lưới



// 2. Thuật ngữ
//     Dữ liệu: Dữ liệu là các giá trị hoặc là tập hợp các giá trị.
//
//     Phần tử dữ liệu: Phần tử dữ liệu là một đơn vị đơn lẻ của giá trị.
//
//     Các phần tử nhóm: Phần tử dữ liệu mà được chia thành các phần tử con thì được gọi là các phần tử nhóm.
//
//     Các phần tử cơ bản: Phần tử dữ liệu mà không thể bị chia nhỏ thành các phần tử con thì gọi là các phần tử cơ bản.
//
//     Thuộc tính và Thực thể: Một thực thể là cái mà chứa một vài thuộc tính nào đó, và các thuộc tính này có thể được gán các giá trị.
//
//     Tập hợp thực thể: Các thực thể mà có các thuộc tính tương tự nhau thì cấu thành một tập hợp thực thể.
//
//     Trường: Trường là một đơn vị thông tin cơ bản biểu diễn một thuộc tính của một thực thể.
//
//     Bản ghi: Bản ghi là một tập hợp các giá trị trường của một thực thể đã cho.
//
//     File: Là một tập hợp các bản ghi của các thực thể trong một tập hợp thực thể đã cho.



// 3. Array: 3



// 4. List overview
// INSERT: Phép toán chèn phần tử vào danh sách, có thể chèn vào đầu, cuối hay vị trí bất kỳ trong danh sách
// REMOVE: Phép toán xoá phần tử khỏi danh sách, cos thể xoá  đầu, cuối hay vị trí bất kỳ trong danh sách
// RETRIEVE: Lấy phần tử tại vị trí bất kỳ trong danh sách
// EMPTY_LIST: Kiểm tra danh sách có rỗng hay không
// READ_LIST: Đọc danh sách

// Danh sách liên kết đơn
// Danh sách liên kết đơn vòng
// Danh sách liên kết đôi
// Danh sách liên kết đôi vòng



// 5. Linked list: 5
/*
class MyNode<T> {
    data: T;
    next: MyNode<T> | null = null;

    constructor(data: T) {
        this.data = data;
    }
}

class LinkedList<T> {
    head: MyNode<T> | null;
    tail: MyNode<T> | null;

    size: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
}
*/


class MyNode<T> {
    data: T;
    next: MyNode<T> | null = null;

    constructor(data: T) {
        this.data = data;
    }
}

export class LinkedList<T> {
    head: MyNode<T> | null;
    tail: MyNode<T> | null;

    size: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    insertFirstNode(data: T) {
        let node = new MyNode(data);
        node.next = this.head;
        this.head = node;

        if (!this.tail) {
            this.tail = node
        }
        this.size++;
    }

    insertLastNode(data: T) {
        if (!this.head){
            this.insertFirstNode(data);
        }else {
            let node = new MyNode(data);
            this.tail.next = node;
            this.tail = node;
            this.size++;
        }
    }

    search(data: T) {
        if (this.size){
            let currentNode = this.head;
            while (currentNode !== null) {
                if (currentNode.data == data) {
                    return currentNode;
                }
                currentNode = currentNode.next;
            }
        }

        return null;
    }

    deleteFirstNode() {
        if (this.head) {
            if (this.head.next){
                this.head = this.head.next;
            } else {
                this.head = null;
            }
            this.size--;
        }
    }

    deleteLastNode() {
        if (this.head) {
            let currentNode = this.head;
            if (!currentNode.next) {
                this.head = null;
            } else {
                let previousNode = null;
                while (currentNode.next) {
                    previousNode = currentNode;
                    currentNode = currentNode.next;
                }
                previousNode.next = null;
                this.tail = previousNode;
                this.size--;
            }
        }
    }

}

let list = new LinkedList<number>();
list.insertFirstNode(1);
list.insertFirstNode(2);
list.insertFirstNode(3);
list.insertFirstNode(4);

console.log(list);


// 6. Double Linked list
/*
class DoublyLinkedList {
    nodes: any[] = [];

    size(): number {
        return this.nodes.length;
    }

    head() {
        return (this.size() ? this.nodes[0] : null);
    }

    tail() {
        return this.size() ? this.nodes[this.size() - 1] : null;
    }

    insertAt(index: number, value: any) {
        const previousNode = this.nodes[index - 1] || null;
        const nextNode = this.nodes[index] || null;
        const node = {value, next: nextNode, previous: previousNode};
        if (previousNode) {
            previousNode.next = node;
        }

        if (nextNode) {
            nextNode.previous = node;
        }

        this.nodes.splice(index, 0, node);
    }

    insertFirst(value: any) {
        this.insertAt(0, value);
    }

    insertLast(value: any) {
        this.insertAt(this.size(), value);
    }

    getAt(index: number) {
        return this.nodes[index];
    }

    removeAt(index: number) {
        const previousNode = this.nodes[index - 1] || null;
        const nextNode = this.nodes[index + 1] || null;

        if (previousNode) previousNode.next = nextNode;
        if (nextNode) nextNode.previous = previousNode;

        return this.nodes.splice(index, 1);
    }

    clear() {
        this.nodes = [];
    }

    reverse() {
        this.nodes = this.nodes.reduce((acc, {value}) => {
            const nextNode = acc[0] || null;
            const node = {value, next: nextNode, previous: null};
            if (nextNode) nextNode.previous = node;
            return [node, ...acc];
        }, []);
    }

}

const list = new DoublyLinkedList();

list.insertFirst(1);
list.insertFirst(2);
list.insertFirst(3);
list.insertLast(4);
list.insertAt(3, 5);
//
console.log(list)
*/

