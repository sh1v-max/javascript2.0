//https://youtu.be/M0YImBHQsWU?list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&t=1291
// in case of arrays, you will be mostly using foreach or map 
console.log(`===learning foreach with array===`);
/*The forEach() method of Array instances executes a provided function once 
for each array element.*/

const coding = ["js", "ruby", "java", "python", "cpp" ]

coding.forEach(function (val){
    console.log(val);// as its running for an array, it will automatically
    // fetch value of array inside arg 'val'
    
})
    /*foreach requires a callback function
    callback functions dont have names

    forEach(callbackfn: (value: string, index: number, array: string[]) => void, 
    thisArg?: any): void. A function that accepts up to three arguments. 
    forEach calls the callbackfn function one time for each element 
    in the array.
    Performs the specified action for each element in an array*/

//method 2: with arrow function
console.log(`========with arrow function===============`);

coding.forEach((item1) =>{
    console.log(item1);
})

console.log(`====giving ref of precreated funtn====`);

/*method 3: we will create a function and give refrence of that 
function inside foreach*/

function printMe(item0){
    console.log(item0);
}

coding.forEach(printMe)
/*passing ref(printMe/ without parantheses) of already created function not calling or 
printing function( printMe()/ with parantheses)*/


console.log(`=====other arguments for foreach=======`);
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
//https://youtu.be/M0YImBHQsWU?list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&t=1720

coding.forEach((item, index, arr)=>{
    console.log(item, index, arr);
    
})


console.log(`======get values from objects using foreach======`);
//https://youtu.be/M0YImBHQsWU?list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&t=1820
const myCoding = [       //objects inside array
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "js"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    // console.log(item); 
        /*calling it item, we are refering all objects
        inside array as items and we want to get(let suppose 
        languageName) from all objects, so we will do 'item.languageName'*/    
        console.log(item.languageName);
        /*output: 
            javascript
            jjava
            python
        we have done such a complex task within seconds*/
        
} )