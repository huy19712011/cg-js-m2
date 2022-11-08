// 1. first ts program
// tsc: compile .ts to .js
// node: run .js file
// or using ts-node for both compile and run
/*
function sayHello(name: string): void {
    console.log("Hello, ", name);
}

sayHello("John");
*/


// 2. Dynamic and static type
// javascript
/*
let a = 10;
a = "str"; // error
// typescript
let b: string = "str";
*/


// 3. Exercise
/*
enum Level {
    SLOW = 1,
    MEDIUM,
    FAST
};
class Fan {
    private speed: Level = Level.SLOW;
    private status: boolean = false;
    private radius: number = 5;
    private color: string = "blue";

    constructor() {
    }

    toString(): string {
        return this.status ? `This Fan has speed of ${Level[this.speed]}, color of ${this.color}, radius of ${this.radius} and fan is on`
            : `This Fan has color of ${this.color}, radius of ${this.radius} and fan is off`;
    }

    getSpeed(): Level {
        return this.speed;
    }
    setSpeed(level: Level): void {
        this.speed = level;
    }
    getStatus(): boolean {
        return this.status;
    }
    setStatus(status: boolean): void {
        this.status = status;
    }
    getRadius(): number {
        return this.radius;
    }
    setRadius(radius: number): void {
        this.radius = radius;
    }
    getColor(): string {
        return this.color;
    }
    setColor(color: string): void {
        this.color = color;
    }
}

let fan1 = new Fan();
fan1.setSpeed(Level.FAST);
fan1.setRadius(10);
fan1.setColor("yellow");
fan1.setStatus(true);
console.log(fan1.toString());

let fan2 = new Fan();
fan2.setSpeed(Level.MEDIUM);
// fan2.setRadius(10);
// fan2.setColor("yellow");
// fan2.setStatus(true);
console.log(fan2.toString());
*/


// 4. types
// Enum
// Tuple
/*
type MyType = [string, number];
let x: MyType = ["Codegym", 2017];
let arr: MyType[] = [
    ["C09", 2022],
    ["C01", 2023]
];
// Generics T
// *Decorators
*/

// 5. Union
/*
type MyBool = true | false;
type WindowStates = "open" | "closed" | "minimized";
*/


// 6. Array
/*
let numbers: number[] = [1, 2, 3];
numbers.push(4, 5, 6);
console.log(numbers);
for (let n of numbers) {
    console.log(n);
}
numbers.forEach(value => {
    console.log(value);
});
numbers.filter(value => value % 2 == 1).forEach(value => console.log(value));
*/


// 7. Tuple


// 8. Optional parameters
/*
function add(a: number, b: number, c?: number): number {
    if (typeof c !== "undefined")
        return a + b + c;

    return a + b;
}

function add2(a: number, b: number, c?: number) {
    return c ? a + b + c : a + b;
}

function add3(a: number, b?: number, c: number) { //error
    return c ? a + b + c : a + b;
}

console.log(add(1, 2, 3));
console.log(add2(1, 2, 3));
*/

// tsconfig.json
// tsc --init


// Exercises
// Fibonacci
/*
function fibonacci(num: Number): number {
    if (num == 1)
        return 0;
    if (num == 2)
        return 1;
    // @ts-ignore
    return fibonacci(num - 1) + fibonacci(num - 2);
}

function summary(n: number): Number {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += fibonacci(i);
    }
    return sum;
}

console.log(fibonacci(8));
console.log(summary(8));
*/

// 2 arrays
const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const b = [0, 2, 3, 5, 7, 8, 9, 10];
a
    .filter(value => b.indexOf(value) < 0)
    .forEach(value => console.log(value));
