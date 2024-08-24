const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString());
console.log(balance.toFixed(2)); // to print fixed value to its second decimal
/*  OUTPUT
400
[Number: 100]
100
100.00
 */

const otherNumber = 1223.9888

console.log(otherNumber.toPrecision(3)); 
/*
to print precise value to its 3rd digit
will round of the number, and for higher number it will print
output in the form of exponential... see output
400
[Number: 100]
100
100.00
1.22e+3
*/

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));
/*
print the value in the form of indian standards
ie. 10,00,000
*/

// ++++++++++ Maths ++++++++++++++++++
console.log("===============maths==============");
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4,5,6,7,8,9));
console.log(Math.max(4,5,6,7,8,9));
console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);


const max = 10
const min = 20 

console.log(Math.floor(Math.random() * (max - min + 1)) + min);




