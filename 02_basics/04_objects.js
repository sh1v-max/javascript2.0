//https://youtu.be/4lb2pXWWXJI?list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&t=24

// CONSTRUCTOR or singleton(dnt think about what is singleton)
const tinderUser0 = new Object()
console.log(tinderUser0);             // {}

const tinderUser = {}
tinderUser.id = "1234"
tinderUser.name = "wazir"
tinderUser.loggedIn = true

console.log(tinderUser); // { id: '1234', name: 'wazir', loggedIn: true }

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        fistname: "wazir",
        lstname: "singh",
        age: {
            userage: 22,     //nested object
        }
    }
}

console.log(regularUser.fullname); 
    //{ fistname: 'wazir', lstname: 'singh', age: { userage: 22 } }
console.log(regularUser.fullname.age); 
    //{ userage: 22 }

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "d"}

//https://youtu.be/4lb2pXWWXJI?list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&t=507
const obj3 = {obj1, obj2}
console.log(obj3); 
//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': '5' } }
// const obj4 = Object.assign(obj1, obj2,) 
/*ussingn assign operator, assign(source, target)
add all the target elements into source*/
const obj5 = {...obj1, ...obj2}// spread operator
console.log(obj3); 
//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': '5' } }
// console.log(obj4);
console.log(obj5);

console.log("====================================================");

//https://youtu.be/4lb2pXWWXJI?list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&t=745
//when values are coming from database :
const users = [
    {
        id: 1,
        email:"hg@gmail.com"
    },
    {
        id: 1,
        email:"hg@gmail.com"
    },
    {
        id: 1,
        email:"hg@gmail.com"
    },
]

users[1].email
console.log(tinderUser);  //from tinderUser

console.log(Object.keys(tinderUser));   // [ 'id', 'name', 'loggedIn' ]
//data type will be array(usefull)
console.log(Object.values(tinderUser)); // [ '1234', 'wazir', true ]
/*to get keys and values, output will be in array form.
the fact that the output is in array form, is very imp and will
be used in lots of places in future*/
console.log(Object.entries(tinderUser)); 
/*[ [ 'id', '1234' ], [ 'name', 'wazir' ], [ 'loggedIn', true ] ]
it will print all the key value painr in the form of aray inside another array.
*/

// //now lets check if a property is present or not
console.log(tinderUser.hasOwnProperty('loggedIn'));  //true
console.log(tinderUser.hasOwnProperty('loggedOut')); //false

// //check ref image


// console.log("==================================================");
// const course = {
//     coursename: "js in hindi",
//     price: "999",
//     courseInstructor: "wazir"
// }
// course.courseInstructor
// course.coursename
// course.price
// //rather than using course. all the time, we can use something else...

// const {courseInstructor} = course
// const {courseInstructor: instructor} = course
// console.log(courseInstructor);
// console.log(instructor);


// console.log("=============object destructuring==================");

// let user = {
//     name0: "wazir baba",
//     age: 25,
//     city: "delhi"
// }
// let{name0, age, city} = user; // all parameters should be same as key inside object
// console.log(name0);
// console.log(age);
// console.log(city);

// // see the curly braces({}) and its destructuring.



