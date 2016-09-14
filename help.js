// JavaScript Document


var foods = [
  ['sushi', ['rice', 'seaweed', 'fish']], 
  ['tacos', ['tortillas', 'meat', 'cheese', 'lettuce']], 
  ['pizza', ['dough', 'cheese', 'sauce']]
];


for (var i = 0; i < foods.length; i++) {
  console.log(foods[i][0]);
  
  for (var j = 0; j < foods[i][1].length; j++) {
    console.log('\t' + foods[i][1][j]);
  }
}