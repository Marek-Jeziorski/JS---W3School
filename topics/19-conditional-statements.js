//DEMO_1A ----------------------------------------------
{
  if (new Date().getHours() < 18) {
    document.getElementById("demo_1a").innerHTML = "Good day!";
  } else {
    document.getElementById("demo_1a").innerHTML = "Good evening!";
  }
}

//DEMO_2A ----------------------------------------------

{
  const time = new Date().getHours();
  let greeting;

  if (time < 10) {
    greeting = "Good morning";
  } else if (time < 20) {
    greeting = "Good day";
  } else {
    greeting = "Good evening";
  }
  document.getElementById("demo_2a").innerHTML = greeting;
}
//DEMO_3A ----------------------------------------------
{
  let day;
  switch (new Date().getDay()) {
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
  }
  document.getElementById("demo_3a").innerHTML = "Today is " + day;
}
//DEMO_3B ----------------------------------------------

{
  let text;
  switch (new Date().getDay()) {
    case 6:
      text = "Today is Saturday";
      break;
    case 0:
      text = "Today is Sunday";
      break;
    default:
      text = "Looking forward to the Weekend";
  }
  document.getElementById("demo_3b").innerHTML = text;
}
//DEMO_4B ----------------------------------------------
{
  let text;
  switch (new Date().getDay()) {
    case 4:
    case 5:
      text = "Soon it is Weekend";
      break;
    case 0:
    case 6:
      text = "It is Weekend";
      break;
    default:
      text = "Looking forward to the Weekend";
  }
  document.getElementById("demo_4a").innerHTML = text;
}
//DEMO_4B ----------------------------------------------
{
  let x = "0";

  switch (x) {
    case 0:
      text = "Off";
      break;
    case 1:
      text = "On";
      break;
    default:
      text = "No value found";
  }
  document.getElementById("demo_5a").innerHTML = text;
}
