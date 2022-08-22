'use strict';
//DOM MAINPULATION AND EVENT FUNDAMENTALS
/*
console.log(document.querySelector('.message').textContent);

//DOM =DOCUMENT OBJECT MODEL
//structured representation of html documents.Allows js to access html elements and styles to manipulate them.
//dom is like tree structure and dom tree structure is generated automatically in the browser 
//whatever in the html document is always in the dom document
//Document==>html=>head and body(parent elements)=>then all nodes are represented as a child elements
//DOM !== JS
 //DOM AND DOM METHODS ARE WEB API'S THAT WE CAN ACCESS FROM OUR JS CODE
 //JS CAN ONLY INTERACT WITH JS

 //changing the content ex
 document.querySelector('.message').textContent='Correct Number 👌';
document.querySelector('.number').textContent=13;
document.querySelector('.score').textContent=10;
//to give testing input value
document.querySelector('.guess').value=23;
console.log(document.querySelector('.guess').value); //here it will be empty before we get an input from the user
*/
//handling click events(event listeners)

//secret number
let secretNumber = Math.trunc(Math.random() * 20) + 1; //trunc tp round the value
let score = 20;
let highscore = 0;

//console.log(secretNumber);
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess);
  //console to check the type of input

  //when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number 😁';
    //player win
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🏆 Correct Number 👌';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.backgroundColor = 'white';
    document.querySelector('.number').style.color = '#60b347';

    //manipulating css
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    //setting highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
      console.log(highscore);
    }

    //when guess is high
  } else if (guess > secretNumber) {
    //here checking and defining the loosing point
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too High !';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = `👻 You lost the Game..`;
      document.querySelector('.score').textContent = 0;
    } //when guess is low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too Low !';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = `👻 You lost the Game..`;
      document.querySelector('.score').textContent = 0;
    }
  }
}); //here onclick the ip value is consoled,here we cannot assign the function in variable and cant pass function name here.
//here the function only called by the v8engine after the event happened

//restart the game again
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'start guessing..';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = `?`;
  document.querySelector('.guess').value = '';
  //restoring css
  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';
});
