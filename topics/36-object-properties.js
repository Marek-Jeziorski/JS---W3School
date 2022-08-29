// DEMO_1A -----------------------------------------
{
  const person = {
    fname: "John",
    lname: "Doe",
    age: 25,
  };

  let txt = "";

  for (let x in person) {
    txt += person[x] + " ";
  }

  document.getElementById("demo_1a").innerHTML = txt;
}

// DEMO_4A -----------------------------------------
{
  let x = "";

  const myObj = {
    name: "John",
    age: 30,
    cars: [
      { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
      { name: "BMW", models: ["320", "X3", "X5"] },
      { name: "Fiat", models: ["500", "Panda"] },
    ],
  };

  for (let i in myObj.cars) {
    x += "<h4>" + myObj.cars[i].name + "</h4>";

    for (let j in myObj.cars[i].models) {
      x += myObj.cars[i].models[j] + "<br>";
    }
  }

  document.getElementById("demo_4a").innerHTML = x;
}
