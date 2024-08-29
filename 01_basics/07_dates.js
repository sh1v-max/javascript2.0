
// Date : Date is an object in javascript. 
// JavaScript stores dates as number of milliseconds strating from January 01, 1970
const myDate = new Date();
console.log(myDate)                      // Output : 2023-10-09T14:38:09.847Z
// We can use various methods to convert this date into more readable value.
console.log(myDate.toString())           // Output : Sat Aug 24 2024 17:16:34 GMT+0000 (Coordinated Universal Time)

console.log(myDate.toLocaleString())     // Output : 8/24/2024, 5:16:34 PM
console.log(myDate.toLocaleDateString()) // Output : 8/24/2024
// toLocaleString defines an object

console.log(myDate.toLocaleTimeString()) // Output : 5:16:34 PM

console.log(myDate.toDateString())       //Output : Sat Aug 24 2024
console.log(myDate.toTimeString())       // Output : 17:16:34 GMT+0000 (Coordinated Universal Time)

console.log(myDate.toISOString())        // Output : 2024-08-24T17:16:34.466Z
console.log(myDate.toJSON())             //Output : 2024-08-24T17:16:34.466Z
/*date.json doesn't natively support dates and times, but it can
serialize dates as ISO 8601 Date strings. These strings are 
straightforward, unambiguous, human-readable, and well-supported. 
toISOString() returns a string in the format YYYY-MM-DDTHH:mm:ss.sssZ 
or ±YYYYYY-MM-DDTHH:mm:ss.sssZ, which is always 24 or 27 characters long. 
The timezone is always zero UTC offset, as denoted by the suffix "Z". */

console.log(typeof myDate)                 //object

let myCreateDate = new Date(2024, 0, 23) 
console.log(myCreateDate.toDateString())    // Tue Jan 23 2024

let myCreateDate2 = new Date(2024, 0, 23, 5,3)
console.log(myCreateDate2.toLocaleString()) // 1/23/2024, 5:03:00 AM

let myCreateDate3 = new Date("2024-1-23")
console.log(myCreateDate3.toLocaleString()) // 1/23/2024, 12:00:00 AM

let myCreateDate4 = new Date("01-04-2024")
console.log(myCreateDate4.toLocaleString()) // 1/4/2024, 12:00:00 AM

let myTimeStamp = Date.now()
console.log(myTimeStamp);                   //1724521793779
/*
output ===1724521555279
its time elapsed in ms, starting from 1st jan 1970(default value given by ecma script)
till now which is in parameter
 */

console.log(myCreateDate4.getTime());      // 1704326400000
/*
it will print time in ms starting from 1st jan 1970
till date assignes in myCreateDate4 */

console.log(Math.floor(Date.now()/1000));  // 1724521934
/*
it will print the time in ms from 1st jan 2024 till now
and we have devided by 1000 to get time in seconds.
after deviding by 1000, we get decimal values, to remove them 
we are using floor function
*/

let newDate = new Date()
console.log(newDate);                      // 2024-08-24T17:58:05.530Z
console.log(newDate.toDateString());       // Thu Aug 29 2024
console.log(newDate.getMonth() + 1);       // 8 // think why we have added 1
console.log(newDate.getDay());             // 4 for thursday

console.log(`${newDate.getDate()} and the time is ${newDate.getDay()} `);
// 29 and the time is 4

newDate.toLocaleString('default',{
     weekday: "long",

})

