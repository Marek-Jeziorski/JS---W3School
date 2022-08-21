//DEMO_1A ----------------------------------------------
{
  const cars = ["BMW", "Volvo", "Mini"];

  let text = "";
  for (let x of cars) {
    text += x + "<br>";
  }

  document.getElementById("demo_1a").innerHTML = text;
}
