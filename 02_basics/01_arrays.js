//https://youtu.be/cejBux2gtEE?si=NB4iG-eve8PaW3Wk

// array - collection of elements of multiple datatypes
// arrays in javascript are resizable
// arrays are non associative, must be accessed using integers ie index

const myArr = [0,1,2,3,4,5,]
const myHero  = ["shaktiman",'nagraj']

const myArr2 = new Array(1,2,3,4)
console.log(myArr[1]);     // 1

// methods in arrays

myArr.push(6)
myArr.push(7)
myArr.push(4) //will be added at last index
myArr.pop() // removes the last element //4 will be removed
console.log((myArr));   //[ 0, 1, 2, 3, 4, 5, 6, 7, 4 ]
 
myArr.unshift(9) //insert the element given in arg at the end //9 was added at the 0 index
myArr.shift()  // removes the first element // 9 was removed

console.log(myArr.includes(9));  //false
console.log(myArr.indexOf(9));   //-1 as not present
console.log(myArr.indexOf(3));   //3

const newArr =  myArr.join()     //it changes the type of array to string
console.log(newArr);             //0,1,2,3,4,5,6,7
console.log(typeof newArr);      // string

console.log(myArr);              //[ 0, 1, 2, 3, 4, 5, 6, 7 ]

// // SLICE and SPLICE
console.log("=========SLICE and SPLICE============");


console.log("A", myArr);         //A [0, 1, 2, 3, 4, 5, 6, 7]
const myn1 = myArr.slice(1,3)
const myn2 = myArr.slice(3,5)    // prints array from starting arg and end arg 
// index given in arg
// slice create shallow copy, dsnt mannipulate original array
console.log((myn1));             //[ 1, 2 ]
console.log((myn2));             //[ 3, 4 ]
console.log("B", myArr);         //[ 0, 1, 2, 3, 4, 5, 6, 7 ]


const myn3 = myArr.splice(1,3) /* splica(start, optional delecte count, optional item to add)
above, otional item is not added hence, remove all element after 3rd element
remember (after 3rd element), not 3rd index
splice method will change the original array
*/
console.log("C", myArr);         // C [ 0, 4, 5, 6, 7 ]
console.log((myn3));             // [ 1, 2, 3 ]
