//https://youtu.be/0P_YvC6Gg0c?si=kU-H12uDWceDMv-Y

///if
if (true) {
    //code will executed
}

if (false) {
    //code will not be executed
}

const isUserLoggedIn = true
if (isUserLoggedIn) {
    //executed
}

//diff between == and ===
if (2=="2") { //this only checks value 
    console.log("executed");
}

if (2==="2") { /// this will change type of data also
    console.log("statement 2 executed");
}

const temperature = 41
if (temperature<=50) {
    console.log("moderate temperature");
}else {
    console.log("greater than 50");
}
console.log("executed");

console.log("==========example 2===================");
const score = 200

if (score>100) {
    let power = "fly"
    console.log(`user power: ${power}`); // executed
}
//console.log(`user power: ${power}`); //fly is not defined

console.log("==============short hand notation============");
//not using scope({})

const balance = 1000
if (balance > 500) console.log("test"), 
console.log("test 2");
// known as implicit scope (we assumed)
// we dont follow this process, its very unreadable

console.log("===============if else if====================");

if (balance<500) {
    console.log(`greater than 500`);
}else if (balance<700) {
    console.log(`greater than 700`);
}else if (balance<1000) {
    console.log(`greater than 1000`);
}else{
    console.log(`greater than 1200`);  
}

console.log(`=================other example=================`);

const isUserLoggedIn0 = true
const debitCard = true
const loggedInFromGoogle = true
const loggedInFromEmail = true

if (isUserLoggedIn0 && debitCard) { //&&/and meand all conditions must be true 
    console.log("allow to buy courses");
}if(loggedInFromGoogle || loggedInFromEmail){
    console.log("allow to by courses");
}

// &&(and) and ||(or) are called logical operators

//Nullish coalescing operator (??): null, undefined
//https://www.youtube.com/watch?v=0P_YvC6Gg0c&t=2545s

let val1;
val1 = 5 ?? 10
val2 = null ?? 10
val3 = undefined ?? 10
console.log(val1);  //5
console.log(val2);  //10
console.log(val3);  //10

/* The nullish coalescing (??) operator is a logical operator that returns 
its right-hand side operand when its left-hand side operand is null or undefined, 
and otherwise returns its left-hand side operand*/

//terniary operator
//condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
// output: more than 80
