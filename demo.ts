let io = require('readline-sync');

function showMenu() {
    const mainMenu = `
        ---------------------Menu---------------------
        1. Add employee
        2. Edit employee
        3. Delete employee
        4. Sort employees by name
        5. Show all employees
        6. Sort employees
        0. Exit
    `;
    console.log(mainMenu);
}

showMenu();

let exit: boolean = false;
while (true) {
    const choose = + io.question("Please choose: ");
    switch (choose) {
        case 1:

            break;
        case 2:
            break;
        case 3:
            break;
        case 4:
            break;
        case 5:
            break;
        case 6:
            break;
        case 0:
            console.log("Exit...");
            exit = true;
            break;
    }
    if (exit) {
        break;
    }
    showMenu();
}


// stack and queue
/*
class Stack<T> {
    container: T[] = [];

    constructor() {
    }

    push(data: T): void {
        this.container.push(data)
    }

    pop(): T | undefined {
        return this.container.pop();
    }
}


class Queue<T> {
    container: T[] = [];

    constructor() {
    }

    enqueue(item: T): void {
        this.container.push(item);
    }

    dequeue(): T | undefined {
        return this.container.shift();
    }

}


function isSymmetrical(str: string): boolean {
    let stack = new Stack<string>();
    let queue = new Queue<string>();

    for (let char of str) {
        stack.push(char);
        queue.enqueue(char);
    }

    for (let i = 0; i < str.length; ++i) {
        if (stack.pop() !== queue.dequeue())
            return false;
    }

    return true;
}

let str = "sammas";
console.log(isSymmetrical(str));
*/

// reduce()
/*
let i1 = {
    name: "item1",
    price: 10
}

let i2 = {
    name: "item2",
    price: 20
}

let i3 = {
    name: "item3",
    price: 30
}

let a = [i1, i2, i3];

let sum = a.reduce((sum, item) => sum + item.price, 0);
let max = a.reduce((m, i) => Math.max(m, i.price), 0);
console.log(sum);
console.log(max);
*/



