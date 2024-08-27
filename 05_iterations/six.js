//https://youtu.be/9MfwYoWKKVE?si=PeNAV8UDlAXKZ_bB

const coding = ["js", "ruby", "java", "python", "cpp" ]

// what if we will store forif into a variable

const values = coding.forEach( (item) => {
    console.log(item);
    return item
} )
console.log(values);
/*output: 
    js
    ruby
    java
    python
    cpp
    undefined
return type of `value` ie foreach function is undefined
*/

// now how to return values (we will use filters here)
console.log(`=================filters======================`);

const myNums0 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums0 = myNums0.filter( (num) => num>4 )
console.log(newNums0);

// now the same code using explicit functions (using return keyword)

const myNums1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums1 = myNums1.filter( (num) => {  // arrow function
    return num>4 //now the problem is, its an explicit function, it wont get executed 
            //without using `return` keyword because its inside parantheses.
})
console.log(newNums1);
/*output: 
    [ 5, 6, 7, 8, 9, 10 ]
    [ 5, 6, 7, 8, 9, 10 ]
*/

//now how to do same using foreach
console.log(`=======using same with the help of foreach=====`);

const newNums = []// empty array in which we will be pushing num

myNums1.forEach( (num) => {
    if (num > 4) {
        newNums.push(num) //basic array push function to add num
    }
})
console.log(newNums);
// you can use both filter or foreach

console.log(`============exploring filters in deep=============`);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
]; 

/* you will get similar kind of values from database and user will ask to 
perform some filters*/

/*user is asking for all books under `history` genre*/

let userBooks = books.filter( (element) => element.genre === 'History')

userBooks = books.filter( (element) => {
    return element.publish >= 1995 && element.genre === 'History'
})
console.log(userBooks);

/*output: will be an array
    [
    {
        title: 'Book Three',
        genre: 'History',
        publish: 1999,
        edition: 2007
    },
    {
        title: 'Book Seven',
        genre: 'History',
        publish: 1986,
        edition: 1996
    }
    ]
*/