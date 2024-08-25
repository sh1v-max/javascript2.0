/*

https://www.youtube.com/watch?v=vVYOHmqQDCU&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=16

how to declare objects==
using LITERALS and CONSTRUCTOR.
SINGLETON: whenever we use constroctor to create an object, 
singleton is formed. it is one of its kind,
using literals doesnt form singleton
*/

//object cunstroctor
Object.create

//object literals : declaring

const mySym = Symbol("key1") //declaring symbol
const mySym2 = Symbol("key2")

const JsUser = {
    name: "shiv",  //key: pair
    /* by-default system will process 'name' ie key as a 
    "string"*/
    "full name": "shiv singh", /*we can access this key pair only
    by using "console.log(JsUser["name"]);" this statement*/
    mySym:"mykey1", //symbol as a key
    [mySym2]:"mykey2", // correct way to initialise symbol
    email:"shiv@gmail.com",
    age: 22,
    location: "varanasi",
    lastLoginDays:["saturday", "monday"]
}

//accessing objects
console.log(JsUser.name); //dnt need to access in the string form
console.log(JsUser["name"]); //in this case you have to give arg in the form of string
//ie default form of key
console.log(JsUser["full name"]);
console.log(JsUser.mySym); // output: mykey1
/*by using "JsUser.mySym" this access comand, we can get the value as output
but the problem is its dataType, it will be string and now a symbol */
console.log(typeof JsUser.mySym); //output: string
console.log(JsUser[mySym2]);
console.log(typeof JsUser[mySym2]);
/*  const mySym2 = Symbol('description'); // Create a symbol
    const JsUser = {
        [mySym2]: 'someValue', // Use the symbol as a key
    };
    console.log(typeof JsUser[mySym2]); // This should log "string" if 'someValue' is a string*/

JsUser.email="wazir@gmail.com" // changing email, will change original email too
// Object.freeze(JsUser) // freezing object to prevent changing of key pair
JsUser.email= "villian@gmail.com" //it wont get reflected as we have freezed the object
console.log(JsUser);

/* output: 
{
  name: 'shiv',
  'full name': 'shiv singh',
  mySym: 'mykey1', //trating as a string
  email: 'wazir@gmail.com',
  age: 22,
  location: 'varanasi',
  lastLoginDays: [ 'saturday', 'monday' ],
  [Symbol(key2)]: 'mykey2' //showing its a Symbol with a string value
}*/

//now lets add function in an object, function can be treated as a variable 
// we have to unfeeze the object(if freezed) first, line no 52
JsUser.greeting = function(){
    console.log("hello js user");    
}
console.log(JsUser.greeting);  //[Function (anonymous)]
/* output will be function return back type, function isnt executed
just showing the refrence.*/
console.log(JsUser.greeting()); 

//another function
JsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`); /*using string interpolation(that `(backtick) thing) to get refrence 
    from object we created above */  
}
console.log(JsUser.greetingTwo());

/* dont think about {"this" keyword}
and 'undefined' in the output
output:
    [Function (anonymous)] // the refrence we talking about
    hello js user
    undefined
    hello js user, shiv
    undefined
*/