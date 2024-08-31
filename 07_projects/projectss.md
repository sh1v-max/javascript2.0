# Projects related to DOM
## Project link

[My project link](https://stackblitz.com/edit/dom-project-chaiaurcode-vqyhkh?file=index.html)

# Solution code

## Project 1 solution

```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = 'grey';
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = 'white';
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = 'blue';
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = 'yellow';
    }
  });
});

```

## Project 2 solution

```javascript
const form = document.querySelector('form');

/*what if we will use this initialisation at the starting, ie after form (outside form), 
it will automatically get value zero (empty) and 
we want to get value as we click, at the same event,
this usecase will give empty value

https://youtu.be/EGqHVjU-fas?list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&t=1977
 */

/* in previous case, awe have used click event
but in this case, we have to print some value, so we will be use submit event*/

form.addEventListener('submit', function (e) {
  e.preventDefault();
  // to prevent default action, not to submit

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  /*height.value will be string so we are using parseInt
  to convert string value to int*/

  if (isNaN(height) || height <= 0) {
    results.innerHTML = `Please give a valid height.`;
  } else if (isNaN(weight) || weight <= 0) {
    results.innerHTML = `Please give a valid weight.`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    let status = '';

    if (bmi < 18.6) {
      status = 'Under Weight';
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      status = 'Normal Range';
    } else {
      status = 'Overweight';
    }

    // Show the result with BMI status
    results.innerHTML = `<span>BMI: ${bmi} - ${status}</span>`;
  }
});

```

## Project 3 solution
```javascript
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

```