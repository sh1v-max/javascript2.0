//https://www.youtube.com/watch?v=9ksqBa8_txM&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=23

const user = {
    username: "wazir",
    price: 999,

    welcomeMessage: function(){  //welcomeMessage as a function
        console.log(`${this.username}, welcome to website`);
        // this keyword refers to an object/ particular object
        // i specifically wanted to refer username here in object(wazir)
        // so i used this .... it refers to the current context
        console.log(this); //output for console.log, everytime function is called, for all context
        /*
        {
            username: 'wazir',
            price: 999,
            welcomeMessage: [Function: welcomeMessage]
        }
        sam, welcome to website
        {
            username: 'sam',
            price: 999,
            welcomeMessage: [Function: welcomeMessage]
        }
        */
    }
}
// user.welcomeMessage() // dnt forget to use brackets
// user.username = "sam" //now current context of username is sam, this.username prints sam
// user.welcomeMessage()
console.log(this); //output: {} ie empty object
//now we are using this outside the function, there is no current context

console.log("====================with function========================");

function chai() {
    console.log(this);
       
}
chai()
//here we are printing this inside function, output will be complex, consists of a lot of things

//trying same with function as we did with object
function chai2() {
    let username2 = "wazir"
    console.log(this.username2); //output: undefined
    //this time it wont print username inside functions
    //doesnt work with functions, unable to read username
       
}
chai2()

//ARROW FUNCTIONS
//https://www.w3schools.com/js/js_arrow_function.asp
console.log("==================arrow functions===================");

const chai3 = () => { //arrow function (() => {})
    let username = "wazir"
    console.log(this.username); //undefined
    console.log(this); //{} empty parntheses/object
}
chai3()// output will be still undefined
// this resolves the dout htat you cannot use this function inside both regular and arrow function\

//forget everything till now, lets learn arrow functn
console.log("================learn arrow function=================");

//method 1. explicit return(use of return)
const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(3, 4)); // output 7

//method 2. implicit return
// we dont use retunt keyword in this method

const addTwo0 = (num1, num2) => (num1 + num2) // we are not using curly brackets, this no retunr
// we have to use return with curly brackets
console.log(addTwo0(3, 4));

/*it doesnt work with objects, we have to use curly brackets in case of objects.*/

