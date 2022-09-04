// DEMO 3A-------------------------------------------
{
  function myFunction(x, y) {
    if (y === undefined) {
      y = 2;
    }
    return x * y;
  }
  document.getElementById("demo_3a").innerHTML = myFunction(4);
}

// DEMO 3B-------------------------------------------
{
  function myFunction(x, y = 2) {
    return x * y;
  }
  document.getElementById("demo_3b").innerHTML = myFunction(4);
}

// DEMO 4A-------------------------------------------
{
  function findMax() {
    let max = -Infinity;

    for (let i = 0; i < arguments.length; i++) {
      if (arguments[i] > max) {
        max = arguments[i];
      }
    }
    return max;
  }

  document.getElementById("demo_4a").innerHTML = findMax(4, 5, 6);
}

// DEMO 4B-------------------------------------------
{
  function sumAll() {
    let sum = 0;

    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    return sum;
  }

  document.getElementById("demo_4b").innerHTML = sumAll(
    1,
    123,
    500,
    115,
    44,
    88
  );
}
