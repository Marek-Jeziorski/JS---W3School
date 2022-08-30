// DEMO -------------------------------------------
{
  // Constructor function for Person objects

  function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }

  // Create a Person object
  const myFather = new Person("John", "Doe", 50, "blue");

  // Display age
  document.getElementById("demo").innerHTML =
    "My father is " + myFather.age + ".";
}

// DEMO_1A -------------------------------------------
{
  // Constructor function for Person objects
  function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }

  // Create two Person objects
  const myFather = new Person("John", "Doe", 50, "blue");
  const myMother = new Person("Sally", "Rally", 48, "green");

  // Display age
  document.getElementById("demo_1a").innerHTML =
    "My father is " + myFather.age + ". My mother is " + myMother.age + ".";
}
