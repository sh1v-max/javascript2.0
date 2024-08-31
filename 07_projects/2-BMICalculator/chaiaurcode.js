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
