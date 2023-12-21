let correctguess = false;
const number = 6;
const guess = prompt("Guess a number between 1 and 10!");

if( +guess === number){
 correctguess = true;
}

if (correctguess === true) {
  console.log('You guessed the number.');
} else {
  console.log(`wrong. The number was ${number}.`);
}
