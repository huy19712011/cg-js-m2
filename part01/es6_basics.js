/*
const student = {
    name: "student 1",
    email: "email 1",
    result: "good"
};

let {name, email, result} = student;

// here order of items is not affect
// let {email, name, result} = student; // same

console.log(name);
console.log(email);
console.log(result);
*/

let arr = [1,2,3,-1];

console.log(Math.min(...arr)); // -1
console.log(Math.min(arr)); // -1