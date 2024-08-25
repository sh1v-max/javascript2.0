// array - collection of elements of multiple datatypes
// arrays in javascript are resizable
// arrays are non associative, must be accessed using integers ie index

const myArr = [0,1,2,3,4,5,]
const myHero  = ["shaktiman",'nagraj']

const myArr2 = new Array(1,2,3,4)
console.log(myArr[1]);

// methods in arrays

// myArr.push(6)
// myArr.push(7)
// myArr.push(4)
// myArr.pop() // removes the last element
// console.log((myArr));

myArr.unshift(9) //insert the element given in arg at the end
myArr.shift()  // removes the first element

console.log(myArr.includes(9));
console.log(myArr.indexOf(9));
console.log(myArr.indexOf(3));

const newArr =  myArr.join()  //it changes the type of array to string
console.log(newArr);
console.log(typeof newArr);

console.log(myArr);

// SLICE and SPLICE
console.log("-----SLICE and SPLICE--------");


console.log("A", myArr);
const myn1 = myArr.slice(1,3)
const myn2 = myArr.slice(3,5)  // prints array from starting and end 
// index given in arg
// slice create shollow copy, dsnt mannipulate original array
console.log((myn1));
console.log((myn2));
console.log("B", myArr);


const myn3 = myArr.splice(1,3) /* splica(start, optional delecte count, optional item to add)
above, otional item is not added hence, remove all element after 3rd element
remember (after 3rd element), not 3rd index
splice method will change the original array
*/
console.log("C", myArr);
console.log((myn3));

/* OUTPUT
-----SLICE and SPLICE--------
A [ 0, 1, 2, 3, 4, 5 ]
[ 1, 2 ]
B [ 0, 1, 2, 3, 4, 5 ]
C [ 0, 4, 5 ]
[ 1, 2, 3 ]
 */
