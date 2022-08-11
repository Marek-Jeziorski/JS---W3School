/*
 1 - The typeof Operator
*/

let x = 16 + '-Volvo';

console.log(x + ' ' + typeof x);
document.getElementById('demo').innerHTML = 'demo-1 : ' + x + ' ' + typeof x;

//-----------------------------------------
let y = 16 + 30;
console.log(y + ' ' + typeof y);
document.getElementById('demo-2').innerHTML = 'demo-2 : ' + y + ' ' + typeof y;

/* 
2 - Undefined Value and type 
*/

var car;
console.log(typeof car);
document.getElementById('demo-3').innerHTML = 'demo-3 : ' + car;

//-----------------------------------------
var bus = 'Volvo';
document.getElementById('demo-4').innerHTML = 'demo-4 : ' + bus + '<br>' + typeof bus;

bus = undefined;
document.getElementById('demo-5').innerHTML = 'demo-5 : ' + bus + '<br>' + typeof bus;

/* 
3 - Empty value
*/

var car = '';
document.getElementById('demo-6').innerHTML = 'demo-6 : <br/>' + 'The value is: ' + car + '<br>' + 'The type is: ' + typeof car;

//-----------------------------------------
