/////////////////////  LET , CONST  ////////////////////////////
console.log('3) Redeclaring Variables  - EXAMPLE 1');
var x = 10;
console.log('x = ' + x);
{
  var x = 3;
  console.log('x = ' + x);
}
console.log('x = ' + x);

//
// EXAMPLE

console.log('6) Constant Objects and Arrays  - EXAMPLE 1');
// Create an Array:
const cars = ['Saab', 'Volvo', 'BMW'];

// Change an element:
cars[0] = 'Toyota';

// Add an element:
cars.push('Audi');

// Display the Array:
document.getElementById('myCars').innerHTML = cars;
console.log(cars);

//
// EXAMPLE

try {
  const friends = ['Saab', 'Volvo', 'BMW'];
  friends = ['Toyota', 'Volvo', 'Audi'];
} catch (err) {
  document.getElementById('myFriends').innerHTML = err;
  console.log(err);
}

// 7 - Assignment Operators
// EXAMPLE 1

console.log('7) Assignment Operators - EXAMPLE 1');

var x = 5 + 5;
console.log(x);
let y = '5' + 5;
console.log(y);

let z = 'Hello' + 5;
console.log(z);

document.getElementById('string-a').innerHTML = x + '<br>' + y + '<br>' + z;

// 7 - Assignment Operators
// EXAMPLE 2

let text1 = 'What a very ';
text1 += 'nice day';
document.getElementById('string-b').innerHTML = text1;
