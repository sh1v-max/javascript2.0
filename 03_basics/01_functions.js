//https://youtu.be/Bn56WahG_t0?si=axL0vL9nNJ7KYoUP

/*A JavaScript function is a block of code designed to perform a particular task.
A JavaScript function is executed when "something" invokes it (calls it).

    function myFunction(p1, p2) {
    return p1 * p2;
    }
*/

function sayMyName(){
    console.log("W");
    console.log("A");
    console.log("Z");
    console.log("I");
    console.log("R");
}
sayMyName()
console.log("===============================================");


function addTwoNumbers0(number1, number2){
    console.log(number1+number2);
}
// addTwoNumbers(3, 4)  //7
// addTwoNumbers(3, "4")  //34
// addTwoNumbers(3, "a")  //3a
// addTwoNumbers(3, null)  //3

const result0 = addTwoNumbers0(3, 5)  //see how its diff from above one
console.log("result: "+ result0);  //undefined
/*The code is printing undefined because the addTwoNumbers function 
does not return a value. In JavaScript, when a function does not 
explicitly return a value, it returns undefined by default.

to solve this, we will use return keyword
*/
function addTwoNumbers(number1, number2){
    // let result=number1+number2
    // return result;       
    return number1 + number2
    // whatever you write after return statement
    console.log("shiv"); // it wont be reached by the function
    
}
const result = addTwoNumbers(3, 5)
console.log("result: "+ result);  //result: 8

console.log("=============exploring functions==============");

function loginUserMessage(username="sam"){    
    /*we can use default value to tackle undefined wala condition, wont work for empty 
    string tho(" ") empty string and undefined(here) are considered as 'false' value in js*/   
    if (!username/*username === undefined*/) {                      
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("wazir")); //wazir just logged in
console.log(loginUserMessage("")); // empty string:  just logged in/undefined
console.log(loginUserMessage()); //it wont print null(it will print default value)
// to handle undefined, we will use if statement insite function

/* output:
    =============exploring functions==============
    wazir just logged in
    please enter a username
    undefined
    sam just logged in
*/


//https://youtu.be/t7ZHPhgdA4U?si=qAJG7mbJPmwAJefr
console.log("============more with functions=============");
/* in previous care we were getting only 2 args ie (3, 5), what if we 
dont know the number of argumennt we will be getting from the user,
in case of shopping cart*/ 

// function calculateCartPrice(num1){
function calculateCartPrice0(...num0){  
    /*its not a spread operator, its rest operator here
    printing rest operator will generate an array*/
    return num0
}
console.log(calculateCartPrice0(200, 300, 3500)); // output will be 200
// output now [ 200, 300, 3500 ]

//case 2:
function calculateCartPrice(val1, val2, ...num1){
    console.log(val1);
    console.log(val2);
    return num1
}
console.log(calculateCartPrice(200, 400, 500, 600)); //[ 500, 600 ]
// first and sec arg will assign to val1 and val2 and rest will be in rest operator
//we are only printing num1 and not val1, val2

console.log("============functions with objects=============");

const user = {
    username: "wazir",
    price: 199
}

function handleObject(anyobject){ 
    // anyobject is used to refer to the object that will be passed into the function.
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
handleObject(user) //precreated object
//now passing an object inside function rather than taking input from pre created object
handleObject({
    username:"sam", //creating object and calling function at the same time
    price: 299
})
/*output: 
Username is wazir and price is 199
Username is sam and price is 299*/

console.log("===============function with an array==========");

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 600]));

