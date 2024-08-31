const clock = document.getElementById('clock');
/* getting element id named 'clocl' to manipulate
output*/

//const clock =  document.querySelector('#clock')
//you can use any one

//displaying clock (digital)
// let date = new Date();
// console.log(date.toLocaleTimeString())

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString())
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
/*to update time every-second, we will use 
setInterval method,
it controls event, continously runs given method for the given interval of time*/
