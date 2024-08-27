//https://www.youtube.com/watch?v=0P_YvC6Gg0c&t=1984s

const userEmail = "wazir@gamil.com" //true
// const userEmail = {} // got user email...true
// const userEmail = [] // got user email...true
// const userEmail = "" //dont have user email... false in case of strings

if(userEmail){
    console.log("got user email");
}else{
    console.log("dont have user email");
}

/*falsy value: 
    false, 0, -0, BigInt 0n, null, undefined, NaN

truthy value:
    "0", 'false', " "(space inside string), function(){}
*/

// now how to check empty arrays and objects:
const emptyArray = []

if (emptyArray.length===0) {//checking for length if its 0
    console.log("array is empty"); 
}

const emptyObj = {}

if (Object.keys(emptyObj).length===0){ //Object.keys(emptyObj)--> will return an array of keys and
    // we are getting length using length function and if the length is 0, its empty
    console.log("object is empty");
    
}