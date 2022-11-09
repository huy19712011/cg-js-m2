// 1, 2. Khái niệm, các thuật ngữ (slide + bài đọc 2)


// 3. Phân loại: 3 + slide


// 4, 5. Nạp chồng overloading: 4 + 5
// Tên phương thức giống nhau
// Số lượng các tham số là như nhau, và kiểu của chúng là khác nhau.
/*
function add(a: string, b: string): string;

function add(a: number, b: number): number;

function add(a: any, b: any): any {
    return a + b;
}

console.log(add("Hello ", "CodeGym")); // Hello CodeGym
console.log(add(10, 20)); // 30
*/

// numbers of parameters different => error
// function display(a: string, b: string): void //Compiler Error: Duplicate function implementation
// {
//     console.log(a + b);
// }
//
// function display(a: number): void //Compiler Error: Duplicate function implementation
// {
//     console.log(a);
// }



// 6. Overriding: slide + 6
class Programmer {
    private name: string = '';
    private email: string = '';
    protected languages: string[] = [];

    constructor() {
    }

    showInfo() {
        console.log("I am programmer");
    }
}
class CppProgrammer {
    private name: string = '';
    private email: string = '';
    protected languages: string[] = [];

    constructor() {
    }

    showInfo() {
        console.log("I am programmer");
    }
}

class JsProgrammer extends Programmer {
    constructor() {
        super();
        this.languages = ["Javascript"];
    }

    showInfo() {
        super.showInfo();
        console.log(`I write code using ${this.languages}`);
    }
}

class JavaProgrammer extends Programmer {
    constructor() {
        super();
        this.languages = ["Java", "SQL"];
    }

    showInfo() {
        super.showInfo();
        console.log(`I write code using ${this.languages}`);
    }
}

class PhpProgrammer{

}

let jsPr = new JsProgrammer();
jsPr.showInfo();
let javaPr = new JavaProgrammer();
javaPr.showInfo();
// let phpProgrammer = new PhpProgrammer();
// let cppPr = new CppProgrammer();

let arr: Programmer[] = [];
arr.push(javaPr);
arr.push(jsPr);
// arr.push(phpProgrammer);
// arr.push(cppPr);
arr.forEach(programmer => programmer .showInfo())
