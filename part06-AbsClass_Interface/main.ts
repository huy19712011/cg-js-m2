// 1. Abstract class: slide + 1
// 1a. abstract method
/*
abstract class Person {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    display(): void {
        console.log(this.name);
    }

    abstract find(string): void;

    // abstract method with default implementation
    // find(string: string): void {
    //     // do somethings
    //     console.log("Parent class");
    // };
}

class Employee extends Person {
    empCode: number;

    constructor(name: string, code: number) {
        super(name); // must call super()
        this.empCode = code;
    }

    find(name: string): Person {
        // execute AJAX request to find an employee from a db
        return new Employee(name, 1);
    }
}

let employee = new Employee("John", 100);
employee.display();
employee.find("Mark");
*/


// 1b. abstract properties
/*
abstract class Person {
    abstract name: string;

    display(): void{
        console.log(this.name);
    }
}

class Employee extends Person {
    name: string; // must have this property
    empCode: number;

    constructor(name: string, code: number) {
        super(); // must call super()

        this.empCode = code;
        this.name = name;
    }
}

let employee = new  Employee("James", 1000);
employee.display();
*/


// 2, 3, 4. Interface: slide + 2, 3, 4
// Declaration of properties and methods, but not implementations


// 2a
// syntax for classes to follow
/*
interface IEmployee {
    empCode: number;
    empName: string;
    getSalary: (number) => number; // arrow function
    getManagerName(number): string;
}
*/


// type
/*
interface KeyPair {
    key: number;
    value: string;
}

let kv1: KeyPair = {key: 1, value: "Steve"}; // OK
// let kv2: KeyPair = { key:1, val:"Steve" }; // Compiler Error: 'val' doesn't exist in type 'KeyPair'
// let kv3: KeyPair = { key:1, value:100 }; // Compiler Error:


// define a type of a function. This ensures the function signature.
interface KeyValueProcessor {
    (key: number, value: string): void;
};

function addKeyValue(key: number, value: string): void {
    console.log('addKeyValue: key = ' + key + ', value = ' + value)
}

function updateKeyValue(key: number, value: string): void {
    console.log('updateKeyValue: key = ' + key + ', value = ' + value)
}

let kvp: KeyValueProcessor = addKeyValue;
kvp(1, 'Bill'); //Output: addKeyValue: key = 1, value = Bill

kvp = updateKeyValue;
kvp(2, 'Steve'); //Output: updateKeyValue: key = 2, value = Steve
*/


// interface for array type
/*
interface NumList {
    [index:number]:number
}

let numArr: NumList = [1, 2, 3];
console.log(numArr[0]);
console.log(numArr[1]);

interface IStringList {
    [index:string]:string
}

let strArr : IStringList = {};
strArr["TS"] = "TypeScript";
strArr["JS"] = "JavaScript";
console.log(strArr); // { TS: 'TypeScript', JS: 'JavaScript' }
*/


//optional property
/*
interface IEmployee {
    empCode: number;
    empName: string;
    empDept?:string;
}

let empObj1:IEmployee = {   // OK
    empCode:1,
    empName:"Steve"
}

let empObj2:IEmployee = {    // OK
    empCode:1,
    empName:"Bill",
    empDept:"IT"
}
*/


// extending interface
/*
interface IPerson {
    name: string;
    gender: string;
}

interface IEmployee extends IPerson {
    empCode: number;
}

let empObj:IEmployee = {
    empCode:1,
    name:"Bill",
    gender:"Male"
}
*/


// 2b: Implementing interface
/*
interface IEmployee {
    empCode: number;
    name: string;
    getSalary:(empCode: number) => number;
}

class Employee implements IEmployee {
    empCode: number;
    name: string;

    constructor(code: number, name: string) {
        this.empCode = code;
        this.name = name;
    }

    getSalary(empCode:number):number {
        return 20_000_000;
    }
}

let emp = new Employee(1, "Steve");
*/


// 5, 6, 7. Generic
// generic classes
/*
class ArrayOfNumbers {
    constructor(public collection: number[]) {
    }

    get(index: number): number {
        return this.collection[index];
    }
}

class ArrayOfStrings {
    constructor(public collection: string[]) {
    }

    get(index: number): string {
        return this.collection[index];
    }
}

class ArrayOfAnything<T> {
    constructor(public collection: T[]) {
    }

    get(index: number): T {
        return this.collection[index];
    }
}

new ArrayOfAnything(['a', 'b', 'c']);
*/


// Example of generics with functions
/*
function printStrings(arr: string[]): void {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

function printNumbers(arr: number[]): void {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

function printAnything<T>(arr: T[]): void {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
    // arr.forEach(t => console.log(t));
}

printAnything<string>(['a', 'b', 'c']);
*/


// Genric Constraints
class Car {
    print() {
        console.log('I am a car');
    }
}

class House {
    print() {
        console.log('I am a house');
    }
}

interface Printable {
    print(): void;
}

function printHousesOrCars<T extends Printable>(arr: T[]): void {
    for (let i = 0; i < arr.length; i++) {
        arr[i].print();
    }
}

printHousesOrCars<House>([new House(), new House()]);
printHousesOrCars<Car>([new Car(), new Car()]);
