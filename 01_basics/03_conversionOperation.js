let score = "33abc"
//initial value was 33 but i have changed to 33abc for 
//condition in line 9

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number (score)
console.log(typeof valueInNumber);
// what if value in score is "33abc"
console.log(valueInNumber);
/*
well you can see the output
the value will get converted to the number
string
string
number....... its still a number buttt
NaN.......... here its saying not a number
In case of in case of null it will print zero
And in case of undefined it will again print Nan
and for any boolean value it will print one zero
And for any string it won't get converted into a number so it will print NaN again
*/ 

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// It will convert the number one and zero for their corresponding true or false
// true for any string
// false for empty string

let someNumber=33
let stringNumber=String(someNumber)
console.log(stringNumber);
console.log(typeof(stringNumber));

