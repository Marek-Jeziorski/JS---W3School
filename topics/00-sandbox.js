//DEMO-1a -------------------------------------
"use strict";

{
  try {
    x = 3.14; // This will cause an error (x is not defined).
  } catch (err) {
    document.getElementById("demo_1a").innerHTML = err;
  }
}

//DEMO-2a -------------------------------------

{
  let x = 15 * 5;
  /*   debugger; */
  document.getElementById("demo_2a").innerHTML = x;
}

//DEMO-3a -------------------------------------

{
  const x7 = function (x) {
    return 2 * x;
  };

  document.getElementById("demo_3a").innerHTML = x7(16);
}

{
  let day;

  switch (/* new Date().getDay() */ 8) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    default:
      day = "unknown";
  }
  document.getElementById("demo_4a").innerHTML = "Today is " + day;
}
