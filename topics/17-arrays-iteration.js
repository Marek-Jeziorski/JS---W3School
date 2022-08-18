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
