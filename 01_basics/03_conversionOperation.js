let score = "33abc"
/*initial value was 33 but i have changed to 33abc for 
condition in line 9*/

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
In case of null it will print zero
And in case of undefined it will again print Nan
and for any boolean value it will print 0/1
And for any string it won't get converted into a number so it will print NaN again
*/ 

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); //true

// It will convert the number one and zero for their corresponding true or false
// true for any string
// false for empty string

let someNumber=33
let stringNumber=String(someNumber)
console.log(stringNumber); //33
console.log(typeof(stringNumber));  //string

//**********************operations**************** */

let value = 3
let negValue=-value
console.log(negValue); //-3


console.log(2+2);
console.log(2-2);
console.log(2*2);

let str1 = "hello"
let str2=" shiv"

let str3=str1+str2
console.log(str3);  // hello shiv

console.log("1"+2);  //12
console.log(1+"2");  //12
console.log("1"+2+2);  //122
console.log(1+2+"2");  //32
// see outputs carefully 
console.log(+true); //1
console.log(+"");  //0








