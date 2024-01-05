const playlist = [
  'So What',
  'Respect',
  'What a Wonderful World',
  'At Last',
  'Three Little Birds',
  'The Way You Look Tonight'
];


function createListItems(arr){
 let listItems = '';
 for (let i = 0; i < arr.length; i++){
  listItems += `<li> ${arr[i]} </li>`;
  } 
  return listItems;
}
document.querySelector('main').innerHTML = `
<ol>
 ${createListItems(playlist)}

</ol>

`;

const scores = [ 20, 50, 75, 100, 115 ];
let total = 0;

for ( let i = 0; i < scores.length; i++ ) {
  total += scores[i];
}

console.log( total / scores.length );
