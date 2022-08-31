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

// DEMO_1B -------------------------------------------
{
  // Constructor function for Person objects
  function Person(firstName, lastName, age, eyeColor) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.eyeColor = eyeColor;
    this.changeName = function (name) {
      this.lastName = name;
    };
  }
  // Create a Person object
  const myMother = new Person("Sally", "Rally", 48, "green");

  // Change last name
  myMother.changeName("Doe");

  // Display last name
  document.getElementById("demo_1b").innerHTML =
    "My mother's last name is " + myMother.lastName;
}

// DEMO_1B -------------------------------------------
{
  const x1 = new String(); // A new String object
  const x2 = new Number(); // A new Number object
  const x3 = new Boolean(); // A new Boolean object
  const x4 = new Object(); // A new Object object
  const x5 = new Array(); // A new Array object
  const x6 = new RegExp(); // A new RegExp object
  const x7 = new Function(); // A new Function object
  const x8 = new Date(); // A new Date object

  // Display the type of all objects
  document.getElementById("demo_2a").innerHTML =
    "x1: " +
    typeof x1 +
    "<br>" +
    "x2: " +
    typeof x2 +
    "<br>" +
    "x3: " +
    typeof x3 +
    "<br>" +
    "x4: " +
    typeof x4 +
    "<br>" +
    "x5: " +
    typeof x5 +
    "<br>" +
    "x6: " +
    typeof x6 +
    "<br>" +
    "x7: " +
    typeof x7 +
    "<br>" +
    "x8: " +
    typeof x8 +
    "<br>";
}
