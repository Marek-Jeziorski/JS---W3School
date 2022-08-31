// DEMO 2a-------------------------------------------

{
  function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }

  // Add Method
  Person.prototype.name = function () {
    return this.firstName + " " + this.lastName;
  };

  // Add property
  Person.prototype.nationality = "English";

  const myFather = new Person("John", "Doe", 50, "blue");

  document.getElementById("demo_2a").innerHTML =
    "My father is : " +
    myFather.name() +
    "<br> And he is : " +
    myFather.nationality;
}
