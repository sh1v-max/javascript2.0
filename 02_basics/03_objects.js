/*
what is OBJECT: An object is a collection of properties, and a property is 
an association between a name (or key) and a value. A property's value 
can be a function, in which case the property is known as a method.
Objects in JavaScript, just as in many other programming languages, 
can be compared to objects in real life.

https://www.youtube.com/watch?v=vVYOHmqQDCU&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=16

how to declare objects==
using LITERALS and CONSTRUCTOR.
SINGLETON: whenever we use constroctor to create an object, 
singleton is formed. it is one of its kind,
using literals doesnt form singleton
*/

//object CONSTRUCTOR(we will talk about constructor in next part)
Object.create

//object LITERALS : declaring

const mySym = Symbol("key1") //declaring symbol
const mySym2 = Symbol("key2")

const JsUser = {
    name: "shiv",  //key: pair
    /* by-default system will process 'name' ie key as a 
    "string"*/
    "full name": "shiv singh", /*we can access this key pair only
    by using "console.log(JsUser["name"]);" this statement*/
    mySym:"mykey1", //symbol as a key
    [mySym2]:"mykey2", // correct way to initialise symbol/ using []
    email:"shiv@gmail.com",
    age: 22,
    location: "varanasi",
    lastLoginDays:["saturday", "monday"]
}

//accessing objects
console.log(JsUser.name);          // shiv
//dnt need to access in the string form
console.log(JsUser["name"]);       // shiv
/*in this case you have to give arg(key) in the form of string
ie default form of key*/
console.log(JsUser["full name"]);  //shiv singh
console.log(JsUser.mySym);         // mykey1
/*by using "JsUser.mySym" this access comand, we can get the value as output
but the problem is its dataType, it will be string and not a symbol */
console.log(typeof JsUser.mySym);  // string
console.log(JsUser[mySym2]);       // mykey2
console.log(typeof JsUser[mySym2]);// string
/*  const mySym2 = Symbol('description'); // Create a symbol
    const JsUser = {
        [mySym2]: 'someValue', // Use the symbol as a key
    };
    console.log(typeof JsUser[mySym2]); 
This should log "string" if 'someValue' is a string*/

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
// we have to unfeeze the object(if freezed) first, line no 60
JsUser.greeting = function(){
    console.log("hello js user");    
}
console.log(JsUser.greeting);  //[Function (anonymous)]
/* output will be function return back type, function isnt executed
just showing the refrence.*/
console.log(JsUser.greeting()); //hello js user
//we must call function using parentheses()

//another function
JsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`); /*using string interpolation
    from object we created above */  
}
console.log(JsUser.greetingTwo()); // undefined

/* dont think about {"this" keyword}
output:
    [Function (anonymous)] // the refrence we talking about
    hello js user
    undefined
    hello js user, shiv
    undefined
*/