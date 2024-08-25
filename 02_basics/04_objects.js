// constructors or singleton(dnt think about what is singleton)
const tinderUser0 = new Object()
console.log(tinderUser0);

const tinderUser = {}
tinderUser.id = "1234"
tinderUser.name = "wazir"
tinderUser.loggedIn = true

console.log(tinderUser); //output:{}, both console.log will print empty object only 
/* difference: first one is singleton object and other is non singleton object*/

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        fistname: "wazir",
        lstname: "singh",
        age: {
            userage: 22,        //nested object
        }
    }
}

console.log(regularUser.fullname); //{ fistname: 'wazir', lstname: 'singh', age: { userage: 22 } }
console.log(regularUser.fullname.age); //{ userage: 22 }

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "5"}

const obj3 = {obj1, obj2}
const obj4 = Object.assign(obj1, obj2,) 
/*ussingn assign operator, assign(source, target)
add all the target elements into source*/
const obj5 = {...obj1, ...obj2}// spread operator
console.log(obj3); //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': '5' } }
console.log(obj4);
console.log(obj5);

console.log("====================================================");

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
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
/*to get keys and values, output will be in array form.
the fact that the output is in array form, is very imp and will
be used in lots of places in future*/
console.log(Object.entries(tinderUser));
/*it will print all the key value painr in the form of aray inside another array.
output: 
    [ [ 'id', '1234' ], [ 'name', 'wazir' ], [ 'loggedIn', false ] ]\
*/

//now lets check if a property is present or not
console.log(tinderUser.hasOwnProperty('loggedIn'));
console.log(tinderUser.hasOwnProperty('loggedOut'));

//check ref image


console.log("==================================================");
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "wazir"
}
course.courseInstructor
course.coursename
course.price
//rather than using course. all the time, we can use something else...

const {courseInstructor} = course
const {courseInstructor: instructor} = course
console.log(courseInstructor);
console.log(instructor);


console.log("=============object destructuring==================");

let user = {
    name0: "wazir baba",
    age: 25,
    city: "delhi"
}
let{name0, age, city} = user; // all parameters should be same as key inside object
console.log(name0);
console.log(age);
console.log(city);

// see the curly braces({}) and its destructuring.



