//DEMO_1A ----------------------------------------------
{
  const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

  let text = "";
  for (let i = 0; i < cars.length; i++) {
    text += cars[i] + "<br>";
  }

  document.getElementById("demo_1a").innerHTML = text;
}
//DEMO_2A ----------------------------------------------
{
  let text = "";

  for (let t = 8; t < 16; t += 2) {
    text += "The number is " + t + "<br>";
  }

  document.getElementById("demo_2a").innerHTML = text;
}
//DEMO_2B ----------------------------------------------
{
  const cars = ["BMW", "Volvo", "Saab", "Ford"];

  let i, len, text;

  for (i = 0, len = cars.length, text = ""; i < len; i++) {
    text += cars[i] + "<br>";
  }
  document.getElementById("demo_2b").innerHTML = text;
}
//DEMO_2C ----------------------------------------------
{
  const cars = ["BMW", "Volvo", "Saab", "Ford"];
  let i = 2;
  let len = cars.length;
  let text = "";

  for (; i < len; i++) {
    text += cars[i] + "<br>";
  }

  document.getElementById("demo_2c").innerHTML = text;
}
//DEMO_2D ----------------------------------------------
{
  const cars = ["BMW", "Volvo", "Saab", "Ford"];

  let i = 0;
  let len = cars.length;
  let text = "";

  for (; i < len; ) {
    text += cars[i] + "<br>";
    i++;
  }
  document.getElementById("demo_2d").innerHTML = text;
}
//DEMO_3A ----------------------------------------------
{
  var i = 5;
  let txt = "";

  for (var i = 4; i < 10; i++) {
    // some statements
    txt += i + "<br>";
  }

  document.getElementById("demo_3a+").innerHTML = "Inside the loop i = " + txt;

  document.getElementById("demo_3a").innerHTML =
    "After finished/out Loop i = " + i;
}

//DEMO_3B,3C ----------------------------------------------
{
  let i = 5;
  let txt = "";

  for (let i = 0; i < 10; i++) {
    txt += i + "<br>";
    document.getElementById("demo_3b").innerHTML = "Inside Loop i = " + i;
  }

  document.getElementById("demo_3c").innerHTML =
    "After finished/out Loop i = " + i;
}
