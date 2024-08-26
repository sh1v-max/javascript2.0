//https://www.geeksforgeeks.org/difference-between-var-let-and-const-keywords-in-javascript/

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


