/*
 1 - The typeof Operator
*/
var x = myFunction(4, 3);
document.getElementById('demo').innerHTML = x;
console.log(x);

function myFunction(a, b) {
  let p1 = a;
  let p2 = b;
  return p1 * p2;
}

//-----------------------------------------

/*
3 - Why Functions?
*/

function toCelsius(f) {
  return (5 / 9) * (f - 32);
}
document.getElementById('demo-2').innerHTML = toCelsius(77);

/*
4 - Functions Used as Variable Values
*/

document.getElementById('demo-3').innerHTML = 'The temperature is ' + toCelsius(140) + ' Celsius';
