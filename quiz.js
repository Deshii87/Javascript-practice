let Answer1 = 'STOCKHOLM'; 
let Answer2 = 'MALMÖ';
let Answer3 = 'LUND';
let Answer4 = 'HELSINGBORG';
let Answer5 = 'GÖTEBORG';


// 3. Select the <main> HTML element
const main = document.querySelector("main");


var correctAnswers = 0;




let questionOne = prompt("Whats the captial of Sweden?");

if (questionOne.toUpperCase() === Answer1 ){
  correctAnswers += 1;
}else {
  correctAnswers += 0;
}

let questionTwo = prompt("The biggest city in Scania is?");

if (questionTwo.toUpperCase() === Answer2){
  correctAnswers += 1;
}else {
 correctAnswers += 0;
}

let questionThree = prompt('In wich city can you find Lunds university?');
 
if (questionThree.toUpperCase() === Answer3){
  correctAnswers += 1;
 }else {
  correctAnswers += 0;
 }

let questionFour = prompt('The second biggest city in Scania is?');

if( questionFour.toUpperCase() === Answer4){
 correctAnswers += 1;
}else {
 correctAnswers += 0;
}

let questionFive = prompt('What is Swedens second largest city?');
 if(questionFive.toUpperCase() === Answer5){
   correctAnswers += 1;
 }else {
  correctAnswers += 0;
 }
 
 var playerRank = (correctAnswers);
 
 let title = "";

 if (playerRank >= 1 && playerRank <= 2 ) {
 title = "Bronze";
}
else if (playerRank >= 3 && playerRank <= 4){
 title = "Silver";
}
else if (playerRank == 5){
  title = "Gold";
}
else {
 title = "Loser";
}



console.log(`you got ${correctAnswers} out of 5 correct answers. You have earned the ${title} rank!`);

main.innerHTML = `
<h2> You got ${correctAnswers} of 5 answers correct. </h2>
<h3>  You have earned the ${title} rank. </h3>
`;

// 6. Output results to the <main> element