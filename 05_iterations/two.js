//https://youtu.be/w3Q55-l47P0?si=EMwd9CStttQaJ9Oa


console.log("================while loop=================");

let index = 0
while (index <= 10) {
    console.log(`value of index is ${index}`);
    index = index + 2
}

let myArray = ["flash", "batman", "superman"]
let arr = 0
while (arr < myArray.length) {
    console.log(`value is ${myArray[arr]}`);
    arr = arr + 1
}

console.log("============== do while loop================");

let score = 1

do {
    console.log(`score is ${score}`);
    score ++
} while (score <= 10);

/* special case for do while loop:
as it always print before checking the condition, 
you will always get atleas one output even if condition id wrong
like, if score = 11
it will print  `score is  11`(as it prints before checking condition)
*/