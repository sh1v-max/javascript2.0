// console.log(2>1);
// console.log(2<1);


//not lets compare diff datatypes
console.log("2">1); // true
console.log("02">1);  //true

console.log(null>0); //false
console.log(null==0); //false
console.log(null>=0); //true
/*
the reason is that an equality check (==) and comparision
(<>>=<=) work differently,
comparision convert null to a number, treat it as 0.
thats why (null>=0); //true and (null>0); //false
*/

console.log(undefined>0);  //false
console.log(undefined==0);  //false
console.log(undefined>=0);  //false
// here it will be false for all the cases

//(===) string check, it also checks the data type
console.log("2"==2);//true
console.log("2"===2); //false

