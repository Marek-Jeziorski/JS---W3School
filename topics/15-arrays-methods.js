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
//DEMO_3A ----------------------------------------------
{
  const myGirls = ["Cecilie", "Lone"];
  const myBoys = ["Emil", "Tobias", "Linus"];
  const myChildren = myGirls.concat(myBoys);

  document.getElementById("demo_3a").innerHTML = myChildren;
}
//DEMO_3B ----------------------------------------------
{
  const array1 = ["Cecilie", "Lone"];
  const array2 = ["Emil", "Tobias", "Linus"];
  const array3 = ["Robin", "Morgan"];

  const myChildren = array1.concat(array2, array3);

  document.getElementById("demo_3b").innerHTML = myChildren;
}
//DEMO_4A,4B ----------------------------------------------
{
  const fruits = ["Bannana", "Orange", "Apple", "Mango"];
  document.getElementById("demo_4a").innerHTML = fruits;
  fruits.splice(2, 0, "Marek", "Skwarek", "Kiwi");
  document.getElementById("demo_4b").innerHTML = fruits;
}
//DEMO_4C,4D,4E ----------------------------------------------
{
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  document.getElementById("demo_4c").innerHTML =
    "Original Array:<br> " + fruits;
  let removed = fruits.splice(2, 2, "Lemon", "Kiwi");
  document.getElementById("demo_4d").innerHTML = "New Array:<br>" + fruits;
  document.getElementById("demo_4e").innerHTML =
    "Removed Items:<br> " + removed;
}
//DEMO_4F ----------------------------------------------
{
  const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
  const citrus = fruits.slice(1);
  document.getElementById("demo_4f").innerHTML = fruits + "<br><br>" + citrus;
}
//DEMO_4G ----------------------------------------------
{
  const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
  const citrus = fruits.slice(3);
  document.getElementById("demo_4g").innerHTML = fruits + "<br><br>" + citrus;
}
//DEMO_5A,5b ----------------------------------------------

{
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  document.getElementById("demo_5a").innerHTML = fruits;

  fruits.sort();
  document.getElementById("demo_5b").innerHTML = fruits;
}
