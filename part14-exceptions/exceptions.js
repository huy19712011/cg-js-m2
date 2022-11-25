// 1. Javascript errors
// When executing JavaScript code, different errors can occur.
// Errors can be coding errors made by the programmer, errors due to wrong input, and other unforeseeable things.


// EvalError	Deprecated - use SyntaxError instead
// RangeError	A number "out of range" has occurred
// ReferenceError	An illegal reference has occurred
// SyntaxError	A syntax error has occurred
// TypeError	A type error has occurred
// URIError	An error in encodeURI() has occurred

/*
let num = 1;
// num.toPrecision(500);

try {
    num.toPrecision(500);
}
catch(err) {
    console.log(err.name);
    console.log(err.message);
    console.log(err);
}
*/


/*
let x = 5;
try {
    x = y + 1;
}
catch(err) {
    console.log(err);
}
*/


/*
try {
    eval("'Hello");
}
catch(err) {
    console.log(err);
}
*/


/*
let num = 1;
try {
    num.toUpperCase();
}
catch(err) {
    console.log(err);
}
*/


/*
try {
    decodeURI("%%%");
}
catch(err) {
    console.log(err);
}
*/


// 2. try .. catch .. finally, throw
// The try statement defines a code block to run (to try).
// The catch statement defines a code block to handle any error.
// The finally statement defines a code block to run regardless of the result.
// The throw statement defines a custom error.


// try {
//     Block of code to try
// }
// catch(err) {
//     Block of code to handle errors
// }


// try {
//
//     // try statements
//     // code to run
//
// } catch (exception_var) {
//
//     // catch statements
//     // code to run if exception occurs
//
// } finally {
//
//     // finally statements
//     // code that is always executed
//
// }


// try {
//
//     // try statements
//     // code to run
//
// } finally {
//
//     // finally statements
//     // code that is always executed
// }


// throw error-object


// 3. Examples: 4, 5, 6

// 4. Js vs Typescript
function doOrThrow(err) {
    if (Math.random() > .5) {
        console.log('true')
        return true;
    } else {
        throw err;
    }
}

try {
    doOrThrow('err1');
    doOrThrow('err2');
    doOrThrow('err3');
} catch (e) {
    console.log(e, 'error');
} finally {
    console.log("Terminated");
}