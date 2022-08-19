//DEMO_1A ----------------------------------------------
{
  const numbers = [45, 4, 9, 16, 25];
  let txt = "";

  numbers.forEach(myFunction);

  function myFunction(value, index, array) {
    txt += value + "<br>";
  }

  document.getElementById("demo_1a").innerHTML = txt;
}
//DEMO_2A ----------------------------------------------
{
  const numbers1 = [45, 4, 9, 16, 25];
  const numbers2 = numbers1.map(myFunction);

  function myFunction(value, index, array) {
    return value * 2;
  }

  document.getElementById("demo_2a").innerHTML = numbers2;
}
//DEMO_3A ----------------------------------------------
{
  const numbers = [45, 4, 9, 16, 25];
  const over18 = numbers.filter(myFunction);

  document.getElementById("demo_3a").innerHTML = over18;

  function myFunction(value, index, array) {
    return value > 18;
  }
}
//DEMO_4A ----------------------------------------------
{
  const numbers = [45, 4, 9, 16, 25];
  let sum = numbers.reduce(myFunction);

  document.getElementById("demo_4a").innerHTML = "The sum is " + sum;

  function myFunction(total, value, index, array) {
    return total + value;
  }
}
//DEMO_4b ----------------------------------------------
{
  const numbers = [45, 4, 9, 16, 25];
  let sum = numbers.reduce(myFunction, 100);

  document.getElementById("demo_4b").innerHTML = "The sum is " + sum;

  function myFunction(total, value) {
    return total + value;
  }
}
//DEMO_5a ----------------------------------------------
{
  const numbers = [45, 4, 9, 16, 25];
  let allOver18 = numbers.every(myFunction);

  document.getElementById("demo_5a").innerHTML = "All over 18 is " + allOver18;

  function myFunction(value, index, array) {
    return value > 18;
  }
}
//DEMO_6a ----------------------------------------------

{
  const numbers = [45, 4, 9, 16, 25];
  let someOver18 = numbers.some(myFunction);

  document.getElementById("demo_6a").innerHTML =
    "Some over 18 is " + someOver18;

  function myFunction(value, index, array) {
    return value > 18;
  }
}
//DEMO_7a ----------------------------------------------

{
  const fruits = ["Apple", "Orange", "Apple", "Mango"];
  let position = fruits.indexOf("Apple") + 1;

  document.getElementById("demo_7a").innerHTML =
    "Apple is found in position " + position;
}
//DEMO_8a ----------------------------------------------
{
  const numbers = [4, 9, 16, 25, 29];
  let first = numbers.find(myFunction);

  document.getElementById("demo_8a").innerHTML =
    "First number over 18 is " + first;

  function myFunction(value, index, array) {
    return value > 18;
  }
}
//DEMO_9a ----------------------------------------------
{
  const numbers = [4, 9, 16, 25, 29];

  document.getElementById("demo_9a").innerHTML =
    "First number over 18 has index " + numbers.findIndex(myFunction);

  function myFunction(value, index, array) {
    return value > 18;
  }
}
//DEMO_10a ----------------------------------------------

{
  const myArr = Array.from("ABCDEFG EF");
  document.getElementById("demo_10a").innerHTML = myArr;
}
