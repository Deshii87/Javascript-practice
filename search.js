const inStock = ['pizza', 'cookies', 'eggs', 'apples', 'milk', 'cheese', 'bread', 'lettuce', 'carrots', 'broccoli', 'potatoes', 'crackers', 'onions', 'tofu', 'limes', 'cucumbers'];
const search = prompt('Search for a product.');
let message;

if (!search){
message = `<strong>The list items are = </strong> ${inStock.join(', ')}`;


}
else if (inStock.includes(search.toLowerCase())) {
message = `Yes we have the item <strong>${search.toLowerCase()}</strong>. The item is #${inStock.indexOf(search) + 1} on the list.`;

}
else {
message = `${search.toLowerCase() } is not in stock`;
}

console.log(message);
document.querySelector('main').innerHTML = `<p> ${message} </p>`


