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
