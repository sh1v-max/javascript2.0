// Immediately Invoked Function Expression (IIFE)

//https://www.youtube.com/watch?v=GAIbn16Iytc&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=24

/*
An Immediately Invoked Function Expression (IIFE) in JavaScript is a function
that is executed right after it is defined. It is a common pattern used to 
create a local scope for variables and functions, which helps avoid polluting 
the global namespace.
. The function is defined within parentheses: (function() { ... }).
. The function is immediately invoked by adding () right after the closing parenthesis.
*/

function chai (){
    console.log(`DB Connected`);
    
}
chai()

console.log("================IIFE=======================");
//basic format '()()'
/*first small bracket consist of functions and second one will 
call the function*/

/*basic syntax
    (function() {
        // code here
    })();
*/

(function chai(){ //NAMED IIFE
    console.log(`db connected`);
})(); 
/*we must use semicolon to end the IIFE
so that secend one(if present) can executed or
it wont execute*/

// iife with arrow function
console.log(`================with arrow functn=============`);

/*basic syntax
    (function() {
        // code here
    })();
*/

( () => {  //UNNAMED IIFE
    console.log(`db2 connected`);
}) (); // dont forget to call the IIFE using second small bracket(`()`)
//works with arrow funtion too

//exaple 2. taking name as input and printing it
( (name) => {
    console.log(`db2 connected ${name}`);
}) ("wazir") 

//must use semi colon(;) for using 2 iffe
//must watch video