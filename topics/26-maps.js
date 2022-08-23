//DEMO_1A ----------------------------------------------
{
  // Create a Set
  const letters = new Set(["a", "b", "c"]);

  // Display set.size
  document.getElementById("demo_1a").innerHTML = letters.size;
  console.log(letters);
}

//DEMO_1B ----------------------------------------------
{
  // Create a Set
  const letters = new Set();

  // Add Values to the Set
  letters.add("a");
  letters.add("b");
  letters.add("c");
  letters.add("d");

  // Display set.size
  document.getElementById("demo_1b").innerHTML = letters.size;
  console.log(letters);
}

//DEMO_1C ----------------------------------------------
{
  // Create a Set
  const letters = new Set();

  // Create Variables
  const a = "a1";
  const b = "b1";
  const c = "c1";
  const d = "c1";

  // Add the Variables to the Set
  letters.add(a);
  letters.add(b);
  letters.add(c);
  letters.add(d);

  // Display set.size
  document.getElementById("demo_1c").innerHTML = letters.size;
  console.log(letters);
}

//DEMO_2A ----------------------------------------------
{
  // Create a Set
  const letters = new Set(["a", "b", "c"]);

  // List all Elements
  let text = "";
  letters.forEach(function (value) {
    text += value + "<br>";
  });

  document.getElementById("demo_2a").innerHTML = text;
}

//DEMO_3A ----------------------------------------------
{
  // Create a Set
  const letters = new Set(["a", "b", "c"]);

  // Display iterator object
  document.getElementById("demo_3a").innerHTML = letters.values();

  // Now you can use the Iterator object to access the elements:

  // List all Elements
  let text = "";
  for (const x of letters.values()) {
    text += x + "<br>";
  }

  document.getElementById("demo_3b").innerHTML = text;
}
