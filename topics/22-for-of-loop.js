//DEMO_2A ----------------------------------------------
{
  const cars = ["BMW", "Volvo", "Mini"];

  let text = "";
  for (let x of cars) {
    text += x + "<br>";
  }

  document.getElementById("demo_2a").innerHTML = text;
}
//DEMO_3A ----------------------------------------------
{
  let language = "JavaScript";

  let text = "";
  for (let x of language) {
    text += x + "<br>";
  }

  document.getElementById("demo_3a").innerHTML = text;
}
