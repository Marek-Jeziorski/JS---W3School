// DEMO_4A -----------------------------------------
{
  const person = {
    name: "John",
    cars: ["fiat", "polonez", "ford", "opel", "skoda"],
    age: function () {
      return 30;
    },
  };

  // to diplay function you have to stringigy it first
  person.age = person.age.toString();

  document.getElementById("demo_4a").innerHTML = JSON.stringify(person);
}
