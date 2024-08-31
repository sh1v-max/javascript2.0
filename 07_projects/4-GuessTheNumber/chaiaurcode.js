//https://youtu.be/EGqHVjU-fas?list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&t=3280

/* we have 2 divs, form and resultParas, we will be using them to 
manipulate the output,
form 'contains guess the number' and 2 input field, and div contains cases*/

//to generate random number(1-100)
const randomNumber = console.log(parseInt(Math.random() * 100 + 1));

/* now to get a lots of numbers (guesses) and to store in submit we are selecting 'subt' input field and storing into submit
and same for 'guessField' also */

//we have to show these all values to the user
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

//we will be inserting some values:
//an array to store previous guesses
let prevGuess = [];
let numGuess = 1;
let playGame = true;

//to validate all the guesses (between 1-100 and more)
function validateGuess() {}

//to print if the guesses is valid or not (both validate and check are diff) ie if user wins
//and to print low and high if no is higher then guess
function checkGuess(guess) {}

//it will clean the input field so that user can guess next
function displayGuess(guess) {}

//to print all messages
function displayMessage(message) {
  
}

function endGame(){
  
}

function newGame(){

}

