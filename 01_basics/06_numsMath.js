const score = 400
console.log(score);  //400

const balance = new Number(100)
console.log(balance);  //[Number: 100]
//its same as that of string

console.log(balance.toString());  //100
console.log(balance.toFixed(2)); //100.00  // to print fixed value to its second decimal

const otherNumber = 1223.9888

console.log(otherNumber.toPrecision(3));   //1.22e+3
/*
to print precise value to its 3rd digit
will round of the number, and for higher number it will print
output in the form of exponential... see output
*/

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); //10,00,000
/*
print the value in the form of indian standards
ie. 10,00,000
*/

// ++++++++++ Maths ++++++++++++++++++
console.log("===============maths==============");
console.log(Math);                           //Object [Math] {}
console.log(Math.abs(-4));                   //4
console.log(Math.round(4.6));                //5
console.log(Math.ceil(4.2));                 //5
console.log(Math.floor(4.9));                //4
console.log(Math.min(4,5,6,7,8,9));          //4
console.log(Math.max(4,5,6,7,8,9));          //9
console.log(Math.random());                  //0.8627077946042856(1<n<0)
console.log((Math.random()*10)+1);           //7.131641743544652
console.log(Math.floor(Math.random()*10)+1); //6


const max = 10
const min = 20 

console.log(Math.floor(Math.random() * (max - min + 1)) + min);  //17




