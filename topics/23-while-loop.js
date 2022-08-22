//DEMO_1A ----------------------------------------------
{
  let text = "";
  let i = 0;
  while (i < 5) {
    text += "<br>The number is " + i;
    i++;
  }
  document.getElementById("demo_1a").innerHTML = text;
}
//DEMO_2A ----------------------------------------------
{
  let text = "";
  let i = 0;

  do {
    text += "<br>The number is " + i;
    i++;
  } while (i < 5);

  document.getElementById("demo_2a").innerHTML = text;
}
//DEMO_3A ----------------------------------------------
{
  const cars = ["BMW", "Volvo", "Saab", "Ford"];
  let i = 0;
  let text = "";

  for (; cars[i]; ) {
    text += cars[i] + "<br>";
    i++;
  }

  document.getElementById("demo_3a").innerHTML = text;
}
//DEMO_3B ----------------------------------------------
{
  const cars = ["BMW", "Volvo", "Saab", "Ford"];
  let i = 0;
  let text = "";

  while (cars[i]) {
    text += cars[i] + "<br>";
    i++;
  }

  document.getElementById("demo_3b").innerHTML = text;
}
