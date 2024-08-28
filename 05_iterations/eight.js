//https://youtu.be/9MfwYoWKKVE?list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&t=1546
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

// its also a callback function

/*reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: number[]) => number): number
A function that accepts up to four arguments. 
The reduce method calls the callbackfn function one time for each element in the array.

Calls the specified callback function for all the elements in an array. 
The return value of the callback function is the accumulated result, 
and is provided as an argument in the next call to the callback function.*/

const myNums = [1, 3, 4]

const myToatl0 = myNums.reduce(function (acc, currval){
    console.log(`acc: ${acc} and currval: ${currval}`);
    // to check what value does acc and currval are holding each time
    return acc + currval
}, 0)// assigning initial value to `acc`// whatever u will assign here will go to acc
// and result will print accordingly
console.log(myToatl0);

//with arrow
console.log(`=======reduce function with arrow============`);

const myToatl = myNums.reduce( (acc, curr)  => acc + curr , 0)
console.log(myToatl);


console.log(`===================example 2===================`);
const shoppingCart = [
    {
        itemName: "js course",
        itemPrice: 2999
    },
    {
        itemName: "py course",
        itemPrice: 999
    },
    {
        itemName: "mobile dev course",
        itemPrice: 5999
    },
    {
        itemName: "data science course",
        itemPrice: 12999
    },
]

// add all the prices of items in shopping cart using reduce

const totalPrice = shoppingCart.reduce((acc, item) =>  acc + item.itemPrice, 0)
console.log(totalPrice);
//element as an object of array will be stored in item at a time
//and item.itemPrice will get the price of specifit item and add it