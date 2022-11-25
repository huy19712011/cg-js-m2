// 1. String
// series of characters
/*
let str = 'Codegym';
console.log(str);
str = new String("C09");
console.log(str);
console.log(str.toString());
console.log(str === "C09");
*/

// 2. Regular expression
let regExp= /xy+z/;

let pattern = /codegym/; // i: modifier, not check case
let tex = "we are Codegymers";
console.log(pattern.test(tex));
let result = tex.match(pattern);
console.log(result);
