// DEMO 1A-------------------------------------------
{
  // Create a String
  const name = "STRING";

  // List all Elements
  let text = "";
  for (const x of name) {
    text += x + "<br>";
  }

  document.getElementById("demo_1a").innerHTML = text;
}
