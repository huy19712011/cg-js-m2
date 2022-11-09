// 1. access modifiers
// private

class Student {
    private _firstName: string = "";
    private lastName: string = "";
    private age: Number = 18;
    protected email: string = "";
    public hobby: string ="foot ball";
    otherField: string = ""; // default is public


    constructor() {
    }


    get firstName(): string {
        return this._firstName;
    }

    set firstName(value: string) {
        this._firstName = value;
    }
}

let student = new Student();
// console.log(student.firstName); // error, cannot access private field
// console.log(student.email); // error, cannot access protected field
console.log(student.hobby); // ok, access public field is allowed
console.log(student.otherField);

class SubStudent extends Student {
    constructor() {
        super();

        this.email = "newEmail"; // ok, email is protected
        // this.lastName = "newLastName"; // error, lastName is private
    }

}




// 2. getters and setters

class Person {
    private _firstName: string = "";
    private lastName: string = "";
    private email: string = "";


    constructor() {
    }


    // getter and setter
    // note: auto generate => firstname ---> _firstName
    get firstName(): string {
        return this._firstName;
    }

    set firstName(value: string) {
        this._firstName = value;
    }

    // "classical" getter and setter
    getEmail(): string {
        return this.email;
    }
    setEmail(email: string): void {
        this.email = email;
    }
}

let person1 = new Person();
person1.firstName = "John"; // implicit call setter
console.log(person1.firstName); // implicit call getter

person1.setEmail("newEmail");
console.log(person1.getEmail());

// auto create properties
class Person2 {
    constructor(private firstName: string, private lastName: string) {
    }

    fullName(): string {
        return this.firstName + " " + this.lastName;
    }

}
let person2 = new Person2("John", "Doe");
console.log(person2.fullName());




// 3. static properties and methods

class ClassWithStaticMembers {
    static staticProperty: string = "staticProperty"; // default public

    static staticMethod(): string {
        return "static method called";
    }
}

ClassWithStaticMembers.staticProperty = "someValue";
console.log(ClassWithStaticMembers.staticProperty);
console.log(ClassWithStaticMembers.staticMethod());




// 4. static block
class ClassWithStaticBlock {
    static field1 = console.log("field 1");
    static {
        console.log("Block 1");
    }
}