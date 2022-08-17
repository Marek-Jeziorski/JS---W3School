//DEMO_1A ----------------------------------------------
{
  const numbers = [45, 4, 9, 16, 25];

  let txt = "";
  numbers.forEach(myFunction);
  document.getElementById("demo_1a").innerHTML = txt;

  function myFunction(value, index, array) {
    txt += value + "<br>";
  }
}

//DEMO_2A ----------------------------------------------
{
  const numbers1 = [45, 4, 9, 16, 25];
  const numbers2 = numbers1.map(myFunction);

  document.getElementById("demo_2a").innerHTML = numbers2;

  function myFunction(value, index, array) {
    return value * 2;
  }
}
