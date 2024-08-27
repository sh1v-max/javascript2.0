//https://youtu.be/M0YImBHQsWU?list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&t=901
console.log(`========forin with objects continue=========`);


const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}
//we will use forin loop in case of objects

for (const key in myObject) {
    // console.log(key); 
        /*output: 
        js
        cpp
        rb
        swift*/
    // console.log(myObject[key]);
        /*output: 
        javascript
        c++
        ruby
        swift by apple*/
    // to print both key value:
    console.log(`${key} shortcut is for ${myObject[key]}`);
    /*output:   js shortcut is for javascript
                cpp shortcut is for c++
                rb shortcut is for ruby
                swift shortcut is for swift by apple*/
}

console.log(`========forin with arrays================`);

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // if (Object.prototype.hasOwnProperty.call(object, key)) {
    //     const element = object[key];
    // } :: we will talk about it later
    // console.log(key);
            /*output: 
            0
            1
            2
            3
            4
            key will be printed and not values*/
    console.log(programming[key]);
    /*output: remember this syntax, it will print value
            js
            rb
            py
            java
            cpp*/   
}

console.log(`=========applying forof loop on map=========`);
//https://youtu.be/M0YImBHQsWU?list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&t=1153

const map = new Map()
map.set('IN', "India") // ('key', "pair")
map.set('USA', "united states of america")
map.set('Fr', "france")

for (const key in map) {
    console.log(key);
    // it wont print anything
    // reasong: map is not iterable
}