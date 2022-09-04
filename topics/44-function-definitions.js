// DEMO 2A-------------------------------------------
{
  const x = function (a, b) {
    return a * b;
  };
  document.getElementById("demo_2a").innerHTML = x(4, 3);
}
// DEMO 4A-------------------------------------------
{
  (function () {
    document.getElementById("demo_4a").innerHTML = "Hello! I called myself";
  })();
}

// DEMO 6A-------------------------------------------
{
  function myFunction(a, b, c, d) {
    return arguments.length;
  }

  document.getElementById("demo_6a").innerHTML = myFunction(4, 3, 5);
}

// DEMO 6B-------------------------------------------
{
  function myFunction(a, b) {
    return a * b;
  }

  document.getElementById("demo_6b").innerHTML = myFunction.toString();
}

// DEMO 7A-------------------------------------------
{
  const x = (x, y) => x * y;

  document.getElementById("demo_7a").innerHTML = x(5, 5);
}
