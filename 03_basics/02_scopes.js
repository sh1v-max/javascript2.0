//https://www.geeksforgeeks.org/difference-between-var-let-and-const-keywords-in-javascript/

//https://www.youtube.com/watch?v=eWwge2YpHhc&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=22

// global scope acts differently in code ide and in inspect/console of browser

let a0 = 10
const b0 = 20
var c0 = 30

console.log(a0);
console.log(b0);
console.log(c0);
// there is no problem with scope till here

// now lets try with scope(global/local)
// {} curly braces are assigned with scope of program(not in case of Objects)
// inside if is BLOCK scope, outside is GLOBAL scope

if(true){
    let a = 10
    const b = 20
    var c = 30    //var is global scope, can be accesses outside scope
    // thats why we dont use var that much, not inside scope atleast
}
/* something declared inside block scope should not be accessible outsside 
thats where 'var' creates proble, and we prevent using var*/

// console.log(a); // will print undefined
// console.log(b); // will print undefined
console.log(c); // will print 30

console.log("=====================================================");

let x = 300
if(true){
    let x = 10
    console.log("inner: ", x);
    // value of inside x will be only accessible inside if block
}
console.log(x);
//value of x outside is still accessible by x outside as well as inside

console.log("==================nested scope=====================");

function one(){
    const unsername = "shiv"
    console.log(unsername); // will pring username, called below
    
    function two() {
        const website = "youtube"
        console.log(unsername); //will print username
        console.log(website);
        
    }
    // console.log(website); // website is not defined
    two()
}
one() // will print shiv

console.log("================with if else nested=================");

if (true) {
    const username = "wazir"
    if (username=== "wazir") {
        const website= " youtube"
        console.log(username + website);
        
    }
    //console.log(website);// wont get printed, as called outside block scope
    // same with username
}
// console.log(username);

console.log("==================interesting========================");

// notice that we are using/calling funtion ,console.log before and after the functions

//1.
console.log(addone(5));
function addone(num){
    return num +1
} 
// output: 6

//2.
function addone(num){
    return num +1
}
console.log(addone(5)); // we have returned it only, not printing it
//output: 6

//3.
console.log(addTwo(5));
const addTwo = function(num){
    return num + 2
}
//output: Cannot access 'addTwo' before initialization
// declaring function while holding it into a variable causes this problem.
// we can asses before initialization in case or general function but not
// in case of variable holding function

//4.
const addTwo0 = function(num){
    return num + 2
}
console.log(addTwo0(5));
//putput: 7

//this is called  HOISTING

/* note: both are functions, addone is basic functions and addTwo is using 
variable to create function ie const */
