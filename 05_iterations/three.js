//https://youtu.be/M0YImBHQsWU?si=ZEi7YG-qDZ_HxJ3b

/*for of loop
its very important concept and easy to use

    for (const element of object) { //here element and object represent syntax and 
                                    //a vaiable(array/string) to get syntax from
        
    }
*/
//https://www.w3schools.com/js/js_loop_forof.asp
console.log(`==============with array===============`);

const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    console.log(num);
    
}

console.log(`==============with strings==============`);

const greetings = "hello world"
for (const greet of greetings) {
    console.log(`each char is ${greet}`);
    
}


console.log(`==================maps=================`);

/*MAPS
A Map holds key-value pairs where the keys can be any datatype.
A Map remembers the original insertion order of the keys.
any value(both objects and primitive values) may be used as either 
as a key or value

maps are objects

https://www.w3schools.com/js/js_maps.asp
*/
const map = new Map()
map.set('IN', "India") // ('key', "pair")
map.set('USA', "united states of america")
map.set('Fr', "france")

console.log(map);
/* output will be an object
    output: Map(3) {
    'IN' => 'India',
    'USA' => 'united states of america',
    'Fr' => 'france'
    }
*/
//map is unique and follows order

console.log(`======applying forof loop on map========`);

for (const key of map) {
    console.log(key);
}
/* output: will be an array
    [ 'IN', 'India' ]
    [ 'USA', 'united states of america' ]
    [ 'Fr', 'france' ]
*/

//method 2:
for (const [key, value] of map) {
    console.log(key, ':', value);
}
/*output: now it wont be an array
    IN : India
    USA : united states of america
    Fr : france
*/

console.log(`=========applying forof loop on object======`);

const myObj = {
    'game1'/*game1*/: 'NFS',
    'game2'/*game2*/: 'spiderman' 
}

for (const [key, value] of myObj) {
    console.log(key, ':', value);
}
/* output: myObj is not iterable
forof dont work with objects as it was working with arrays
*/

