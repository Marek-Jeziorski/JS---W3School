//DEMO_1A ----------------------------------------------
{
  document.getElementById("demo_1a").innerHTML = typeof {
    name: "John",
    age: 34,
  };
  console.log(typeof { name: "John", age: 34 });
}
//DEMO_1B ----------------------------------------------
{
  const symulakr = {
    sex: "female",
    age: 8,
    name: "Anna",
  };
  document.getElementById("demo_1b").innerHTML = symulakr;
  console.log(symulakr);
}
//DEMO_4A ----------------------------------------------

{
  document.getElementById("demo_4a").innerHTML =
    "john".constructor +
    "<br>" +
    (3.14).constructor +
    "<br>" +
    false.constructor +
    "<br>" +
    [1, 2, 3, 4].constructor +
    "<br>" +
    { name: "john", age: 34 }.constructor +
    "<br>" +
    new Date().constructor +
    "<br>" +
    function () {}.constructor;
}
//DEMO_4B ----------------------------------------------
{
  const symulakr = {
    sex: "female",
    age: 8,
    name: "Anna",
  };
  const symulakr_2 = ["John", 34, 234];
  document.getElementById("demo_4b").innerHTML =
    symulakr.constructor + "<br>" + symulakr_2.constructor;
}
//DEMO_4C ----------------------------------------------
{
  const fruits = ["Banana", "Orange", "Apple"];

  document.getElementById("demo_4c").innerHTML =
    "Is it array ? <br>" + isArray(fruits);

  function isArray(myArray) {
    return myArray.constructor.toString().indexOf("Array") > -1;
  }
}
//DEMO_4D ----------------------------------------------

{
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  document.getElementById("demo_4d").innerHTML = isArray(fruits);

  function isArray(myArray) {
    return myArray.constructor === Array;
  }
}
