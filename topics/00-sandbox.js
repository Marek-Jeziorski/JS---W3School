//DEMO-1a -------------------------------------
"use strict";

{
  try {
    x = 3.14; // This will cause an error (x is not defined).
  } catch (err) {
    document.getElementById("demo_1a").innerHTML = err;
  }
}

//DEMO-1a -------------------------------------

{
  let x = 15 * 5;
  debugger;
  document.getElementById("demo_2a").innerHTML = x;
}
