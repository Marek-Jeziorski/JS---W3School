//DEMO_1A ----------------------------------------------
{
  let text = "";

  for (let i = 0; i < 10; i++) {
    if (i === 3) {
      break;
    }

    text += "The number is " + i + "<br>";
  }

  document.getElementById("demo_1a").innerHTML = text;
}
//DEMO_2A ----------------------------------------------
{
  let text = "";

  for (let i = 0; i < 6; i++) {
    if (i === 3) {
      continue;
    }

    text += "The number is " + i + "<br>";
  }

  document.getElementById("demo_2a").innerHTML = text;
}
//DEMO_3A ----------------------------------------------
{
  const cars = ["BMW", "Volvo", "Saab", "Ford", "Kia"];
  let text = "";

  list: {
    text += cars[0] + "<br>";
    text += cars[1] + "<br>";
    text += cars[2] + "<br>";

    break list;
    text += cars[3] + "<br>";
    text += cars[4] + "<br>";
  }

  document.getElementById("demo_3a").innerHTML = text;
}
