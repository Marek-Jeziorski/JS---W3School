//DEMO_1A ----------------------------------------------
{
  const person = { fname: "John", lname: "Doe", age: 25 };

  let txt = "";
  for (let x in person) {
    txt += person[x] + " ";
  }

  document.getElementById("demo_1a").innerHTML = txt;
}
//DEMO_2A ----------------------------------------------
{
  const numbers = [45, 4, 9, 16, 25];

  let txt = "";
  for (let x in numbers) {
    txt += numbers[x] + "<br>";
  }

  document.getElementById("demo_2a").innerHTML = txt;
}
//DEMO_3A ----------------------------------------------
{
  const numbers = [100, 4, 9, 16, 25];

  let txt = "";
  numbers.forEach(myFunction);
  document.getElementById("demo_3a").innerHTML = txt;

  function myFunction(value, index, array) {
    txt += value + "<br>";
  }
}
