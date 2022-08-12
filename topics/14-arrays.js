//DEMO-2 -----------------------------------------
{
  const cars = ["Saab", "Volvo", "BMW"];
  cars[1] = "KIA";
  document.getElementById("demo-2").innerHTML = cars;
}
//DEMO-2b -----------------------------------------
{
  const cars = [];
  cars[0] = "Saab";
  cars[1] = "Volvo";
  cars[2] = "BMW";
  document.getElementById("demo-2b").innerHTML = cars;
}
//DEMO-3 -----------------------------------------
{
  const person = ["John", "Doe", 46];
  document.getElementById("demo-3").innerHTML = person[0];
}
//DEMO-3b,3c -------------------------------------
{
  const person = {
    firstName: "John",
    lastName: "Doe",
    "eyes colour": "light-blue",
    age: 46,
  };
  document.getElementById("demo-3b").innerHTML = person.firstName;
  document.getElementById("demo-3c").innerHTML = person["eyes colour"];
}
//DEMO-5/1 -------------------------------------
{
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  document.getElementById("demo-5/1").innerHTML = fruits.length;
}
//DEMO-5/2--------------------------------------
{
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  document.getElementById("demo-5/2").innerHTML = fruits[0];
}

//DEMO-5/2b-------------------------------------
{
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  document.getElementById("demo-5/2b").innerHTML = fruits[fruits.length - 1];
}

//DEMO-5/3----------- LOOP - FOR() FUNCTION---------------------------------
{
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  let fLen = fruits.length;
  let text = "<ul>";
  for (let i = 0; i < fLen; i++) {
    text += "<li>" + fruits[i] + "</li>";
  }
  text += "</ul>";
  document.getElementById("demo-5/3").innerHTML = text;
}
// EXAMPLE FOR SIMPLE RENDER ARRAY ELEMENTS WITHOUT ANY FORMATING
{
  // const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
  // let fLen = fruits.length;
  // let text = '';
  // for (let i = 0; i < fLen; i++) {
  //   text += fruits[i];
  // }
  // document.getElementById('demo-5/3').innerHTML = text;
}
{
  console.log("DEMO-5/3--------------CONSOLE--------------------");

  const names = ["Marek", "Aneta", "Jadwiga", "Tadeusz"];
  let lgth = names.length;

  for (i = 0; i < lgth; i++) {
    console.log(names[i]);
  }
}
//DEMO-5/3b----------- LOOP - ARRAY.FOREACH() METHOD -----------------------
{
  const fruits = ["Banana", "Orange", "Apple", "Mango"];

  let text = "<ul>";

  fruits.forEach(myFunction);

  text += "</ul>";

  document.getElementById("demo-5/3b").innerHTML = text;

  function myFunction(item) {
    text += "<li>" + item + "</li>";
  }
}
{
  console.log("DEMO-5/3B---------------------CONSOLE ----------");
  const names = ["ZIUTA", "Viola", "Alfred"];

  names.forEach(myFunction);

  function myFunction(item) {
    console.log(item);
  }
}
//DEMO-5/4------------ ADDING ARRAY ELEMENTS -------------------------------
{
  const fruits = ["Banana", "Orange", "Apple"];
  document.getElementById("demo-5_4").innerHTML = fruits;

  function myFunPush() {
    fruits.push("Lemon");
    document.getElementById("demo-5_4").innerHTML = fruits;
  }
}
//DEMO-5/4B------------ DIFFERENCE TO OBJECT -------------------------------
{
  const myObj = {
    name: "Marek",
    age: 48,
  };
  document.getElementById("demo-5_4b").innerHTML = myObj;
}
//DEMO-5/4C------------ ADDING ELEMENTS BY ARRAY[ARRAY.LENGTH] -------------
{
  const fruits = ["Banana", "Orange", "Apple"];
  document.getElementById("demo-5_4c").innerHTML = fruits;

  function myFunLength() {
    fruits[fruits.length] = "Lemon";
    document.getElementById("demo-5_4c").innerHTML = fruits;
  }
}
