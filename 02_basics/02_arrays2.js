//https://youtu.be/m6azhgyCi-k?list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&t=189

const marvel_heros = ["thor","ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

// marvel_heros.push(dc_heros)
// // it will add dc_heros into marvel_heros as subarry with index 3
// console.log(marvel_heros);
// // [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heros[3]);
//  // [ 'superman', 'flash', 'batman' ]
// console.log(marvel_heros[3][0]);  // superman

//comment all above codes, or it will affect this concat part below

//using concat function instead of push
const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros); 

//alternative of concate, Spread operator(...)
const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);

/* concat has limitation to use only 1 array
while we can use as much array with spread operator
that why we generally use spread operator
*/

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array =  another_array.flat(Infinity)
/*flat method require 'depth' as an arg and spread all the element
of array, sub array to the depth given
*/
console.log(real_another_array);

//using some "Array" methods

console.log(Array.isArray("wazir"));     // false
// check if arg is array or not
console.log(Array.from("wazir"));        //[ 'w', 'a', 'z', 'i', 'r' ]
// convert arg into an array
console.log(Array.from(
    {
    name:"wazir"
})); //
// now, its an object contain wazir string
// Array.from doesnt work with objects

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));  // [ 100, 200, 300 ]
///to convert multiple variables(whatever it is) into an array


