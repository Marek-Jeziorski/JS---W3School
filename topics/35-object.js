// DEMO_6A -----------------------------------------
{
  const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
  };

  const x = person; // niech x będzie obiektem {person} (przekazujemy odniesienie do obiektu)
  x.age = 10;

  document.getElementById("demo_6a").innerHTML =
    person.firstName + " is " + person.age + " years old.";
}

// DEMO_6B -----------------------------------------
{
  let person = "marek";

  let x = person; // niech x będzie miał wartość 'person' (pekazujemy wartość zmiennej person)

  x = "Anna";

  document.getElementById("demo_6b").innerHTML =
    " person = : " + person + "<br> x = : " + x;
}
