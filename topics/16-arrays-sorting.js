//DEMO_1A,1b ----------------------------------------------

{
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  document.getElementById("demo_1a").innerHTML = fruits;

  fruits.sort();
  document.getElementById("demo_1b").innerHTML = fruits;
}
//DEMO_1c,1d ----------------------------------------------
{
  // Create and display an array:
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  document.getElementById("demo_1c").innerHTML = fruits;

  // First sort the array
  fruits.sort();

  // Then reverse it:
  fruits.reverse();

  document.getElementById("demo_1d").innerHTML = fruits;
}
//DEMO_2a ----------------------------------------------
{
  const points = [40, 100, 1, 5, 25, 10];
  document.getElementById("demo_2a").innerHTML = points;

  function myFunction1() {
    points.sort();
    document.getElementById("demo_2a").innerHTML = points;
  }
  function myFunction2() {
    points.sort(function (a, b) {
      return b - a;
    });
    document.getElementById("demo_2a").innerHTML = points;
  }
}
