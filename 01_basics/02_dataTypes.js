/*
1. primitive data type ... call by value
original value doesnt change, you will be provided with 
copy of data every type you call it rather than the
original data... thats why called call by value

7 types: string, number, Boolean, null, undefined, symbol, Bigint

*/

"use strict"; //treat all js code as newer version

//alert( 3 + 3) //do same on ispect chrome and see the output
//aler require different syntex..... we are using node js not browser

console.log(3+
    3) //code readability should be high

console.log("shiv")

let name="hitesh"
let age= 18
//let isLoggedIn = false

// number =>2 to power 53
// bigint
// string => true/false
// null = standalone value
// undefined => 
// symbol => unique
// object

console.log(typeof age);
console.log(typeof null)
console.log(typeof undefined)

const score=10
const scoreValue= 100.3

const isLoggedIn = false
const outsideTemp = null
let userAge;             //undefined
let userAge2=undefined   //undefined

//to declare symbol
const id= Symbol('123')
const anotherId=Symbol('123')

console.log(id===Symbol);

// const bigNumber=32425345353253453n //add n at end




/*
2. refrence(non premetive)

types: arrays, object, function

dynamically typed language or statically typed language...
const score=false
const score =100
const score ="false"
we dont initialise data type, javascript handles it iteself 
accordingly so its dynamically typed language or week typing
*/

const heros = ["shaktiman", "nagraj", "doga"]; // array
let myObj={                                    // object
    name:"shiv",    // initialise in curly brackets
    age:22,         // data type can be any thing       
}

const myFunction = function() {
    console.log("Hello World");
    
}

console.log(typeof bigNumber);     // undefined
console.log(typeof outsideTemp);   // object
console.log((typeof myFunction));  // function

/*
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
*/