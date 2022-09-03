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

// DEMO 1A-------------------------------------------
{
  // Create aa Array
  const letters = ["a", "b", "c"];

  // List all Elements
  let text = "";

  for (const x of letters) {
    text += x + "<br>";
  }

  document.getElementById("demo_2a").innerHTML = text;
}

// DEMO 4A-------------------------------------------
{
  // Home Made Iterable
  function myNumbers() {
    let n = 0;

    return {
      next: function () {
        n += 10;

        console.log("2 --> " + n);

        return { value: n, done: false };
      },
    };
  }

  // Create Iterable
  const n = myNumbers();

  // n.next(); // 10
  // n.next(); // 20
  // n.next(); // 30

  document.getElementById("demo_4a").innerHTML = n.next().value;
}
