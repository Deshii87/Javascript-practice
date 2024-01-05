// 1. Create a multidimensional array to hold quiz questions and answers
const quizMaterial = [
  ['What is Swedens capital?', 'stockholm'],
  ['What is Swedens second biggest city?', 'göteborg'],
  ['What is Swedens third largest city?', 'malmö']
]
const correctAnswersOne = []
const wrongAnswersOne = []
let html = '';
let htmlTwo = '';
let htmlThree = '';
let correctAnswers = 0;
let emptyVar = '';
// 2. Store the number of questions answered correctly


/* 
  3. Use a loop to cycle through each question
      - Present each question to the user
      - Compare the user's response to answer in the array
      - If the response matches the answer, the number of correctly
        answered questions increments by 1
*/
for (i = 0; i < quizMaterial.length; i++){
 let question = quizMaterial[i][0];
 let answer = quizMaterial[i][1];
 let response = prompt(question);
 if (response === answer){
  correctAnswers += 1;
  correctAnswersOne.push(question);
 html += `<ul><li> ${correctAnswersOne[i]}</li></ul>`;
 } 
 else {  
  wrongAnswersOne.push(question);
  htmlTwo += `<ul> <li> ${wrongAnswersOne[i]}</li></ul>`;
} 
if (htmlTwo === emptyVar){
  htmlThree = '<h2> No wrong answers, you are a hero </h2>';
}
}



document.querySelector('main').innerHTML = `<h2>  You got ${correctAnswers} of 3 correct answers </h2>
                                            <h1> Correct answers </h1> 
                                            ${html} <h1> Wrong answers </h1>${htmlTwo} ${htmlThree}` 
                                          
                                             



// 4. Display the number of correct answers to the user