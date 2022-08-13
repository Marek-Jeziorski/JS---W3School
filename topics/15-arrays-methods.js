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

//DEMO_2a,2b,2c -----------------------------------------
{
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  document.getElementById("demo_2a").innerHTML = fruits;
  fruits.pop();
  document.getElementById("demo_2b").innerHTML = fruits.pop();
  document.getElementById("demo_2c").innerHTML = fruits;
}
//DEMO_2d,2e,2f -----------------------------------------
{
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  document.getElementById("demo_2d").innerHTML = fruits;
  fruits.push("Kiwi");
  document.getElementById("demo_2e").innerHTML = fruits;
  document.getElementById("demo_2f").innerHTML = fruits.push();
}
//DEMO_3a ----------------------------------------------
{
  const myGirls = ["Cecilie", "Lone"];
  const myBoys = ["Emil", "Tobias", "Linus"];
  const myChildren = myGirls.concat(myBoys);

  document.getElementById("demo_3a").innerHTML = myChildren;
}
//DEMO_3b ----------------------------------------------

{
  const array1 = ["Cecilie", "Lone"];
  const array2 = ["Emil", "Tobias", "Linus"];
  const array3 = ["Robin", "Morgan"];

  const myChildren = array1.concat(array2, array3);

  document.getElementById("demo_3b").innerHTML = myChildren;
}
