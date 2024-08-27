const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNumers.map( (num) => num + 10 ) //map also follows explicit function
console.log(newNums);

//https://youtu.be/9MfwYoWKKVE?list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&t=1268
//chaining: using multiple map/filters after one and other 

const newNum = myNumers
                    .map( (num) => num * 10 )
                    .map( (num) => num + 1 )
                    .filter( (num) => num >= 40 )
console.log(newNum);
//refer to the video