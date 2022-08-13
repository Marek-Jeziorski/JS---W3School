//DEMO_1a -----------------------------------------
{
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  document.getElementById("demo_1a").innerHTML = fruits.toString();
}
//DEMO_1b -----------------------------------------
{
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  document.getElementById("demo_1b").innerHTML = fruits.join(" * ");
}

//DEMO_2a,2b -----------------------------------------
{
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  document.getElementById("demo_2a").innerHTML = fruits;
  fruits.pop();
  document.getElementById("demo_2b").innerHTML = fruits;
}
