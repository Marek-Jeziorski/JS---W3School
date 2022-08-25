//DEMO-1a -------------------------------------
"use strict";

{
  try {
    x = 3.14; // This will cause an error (x is not defined).
  } catch (err) {
    document.getElementById("demo_1a").innerHTML = err;
  }
}
