/*
 1 - Subtopic name
*/
//DEMO-1 -----------------------------------------
let text = 'ABCDEFGHIJKLMNOPQRSTUVWXdfsdfsdfYZ';
document.getElementById('demo').innerHTML = text.length;

//DEMO-2 -----------------------------------------
let str = 'Apple, Banana, Kiwi';
console.log(str.length);
document.getElementById('demo-2').innerHTML = str.length + ' ' + 'string.length';
document.getElementById('demo-2a').innerHTML = str.slice(7, 13);

//DEMO-3 -----------------------------------------
function myFunction() {
  let text = document.getElementById('demo-3').innerHTML;
  document.getElementById('demo-3').innerHTML = text.replace('Microsoft', 'W3Schools');
}
function myReFunction() {
  let text = document.getElementById('demo-3').innerHTML;
  document.getElementById('demo-3').innerHTML = text.replace('W3Schools', 'Microsoft');
}

//DEMO-4 -----------------------------------------
function myFunction2() {
  let text = document.getElementById('demo-4').innerHTML;
  document.getElementById('demo-4').innerHTML = text.replace(/Microsoft/g, 'W3Schools');
}
function myReFunction2() {
  let text = document.getElementById('demo-4').innerHTML;
  document.getElementById('demo-4').innerHTML = text.replace('W3Schools', 'Microsoft');
}

//DEMO-5 -----------------------------------------
function myFunA() {
  let text = document.getElementById('demo-5').innerHTML;
  document.getElementById('demo-5').innerHTML = text.toUpperCase();
}
function myFunAre() {
  let text = document.getElementById('demo-5').innerHTML;
  document.getElementById('demo-5').innerHTML = text.toLowerCase();
}

//DEMO-6 -----------------------------------------
{
  let text1 = 'Hello';
  let text2 = 'World!';
  let text3 = 'World!';

  let text4 = text1.concat(' ', text2, ' ', text3);
  document.getElementById('demo-6').innerHTML = text4;
}
// console.log(text1); TODO: not find because of block scope {}

//DEMO-7 -----------------------------------------
{
  let text1 = '     Hello World!     ';
  let text2 = text1.trim();

  document.getElementById('demo-7').innerHTML = 'Length text1=' + text1.length + '<br>Length2 text2=' + text2.length;
}

//DEMO-8 -----------------------------------------
{
  let text = 'string some'; // this is a string !
  document.getElementById('demo-8').innerHTML = text.padStart(19, '.');
}

// DEMO-8B
{
  let numb = 5; // this is a number !
  let text = numb.toString();
  document.getElementById('demo-8b').innerHTML = text.padStart(9, '.');
}

//DEMO-9 -----------------------------------------

{
  let text = 'HELLO WORLD';
  document.getElementById('demo-9').innerHTML = text.charAt(0);
  document.getElementById('demo-9b').innerHTML = text.charCodeAt(0);
  document.getElementById('demo-9c').innerHTML = text[0];
}

//DEMO-10 -----------------------------------------
{
  let text = 'a,b,c,d,e,f -- g,h,i,j';
  const myArray = text.split('--');
  document.getElementById('demo-10').innerHTML = myArray;

  // DEMO-10B
  document.getElementById('demo-10b').innerHTML = myArray[0];

  // DEMO-10C
  document.getElementById('demo-10c').innerHTML = myArray[1];
}
// DEMO-10D

{
  let text = 'Hello stop What stop are stop you stop doing?';
  // const myArr = text.split(''); // case 1
  // const myArr = text.split(' '); // case 2
  const myArr = text.split(/stop/); // case 3

  text = '';
  for (let i = 0; i < myArr.length; i++) {
    text += myArr[i] + '<br>';
  }
  document.getElementById('demo-10d').innerHTML = text;
}
