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

/*
let arr = [1,2,3,-1];

console.log(Math.min(...arr)); // -1
console.log(Math.min(arr)); // NaN
*/

/*
function myConcat(separator) {
    let args = Array.prototype.slice.call(arguments, 1);
    return args.join(separator);
}

let result = myConcat(', ', 'red', 'orange', 'blue');
console.log(result);
 */

/*
let arr = [1, 3, 5, 6, 9];
let findIndex = arr.findIndex(value => {
    return value % 2 == 0
});
let find = arr.find(value => value % 2 == 0);
console.log(findIndex);
console.log(find);
 */

function detectCollision(objects, point) {

    for (let i = 0; i < objects.length; i++) {


        let object = objects[i];


        if (point.x >= object.x && point.x <= object.x + object.width &&


            point.y >= object.y && point.y <= object.y + object.height)


            return object;


    }


}

const myObjects = [


    {x: 10, y: 20, width: 30, height: 30},


    {x: -40, y: 20, width: 30, height: 30},


    {x: 0, y: 0, width: 10, height: 5}


];

console.log(detectCollision(myObjects, {x: 4, y: 2}));

let point = {x: 4, y: 2};
let findRect = myObjects.find(rect => {
    return (
        (rect.x - point.x) * (rect.x + rect.width - point.x) <= 0 &&
        (rect.y - point.y) * (rect.y + rect.height - point.y) <= 0
    );
});
console.log(findRect);

function customFind(arr, point) {
    return arr.find(rect => {
        return (rect.x - point.x) * (rect.x + rect.width - point.x) <= 0 &&
            (rect.y - point.y) * (rect.y + rect.height - point.y) <= 0;
    });
}

let result = customFind(myObjects, point);
console.log(result);