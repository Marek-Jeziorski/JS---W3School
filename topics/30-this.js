//DEMO_1A ----------------------------------------------
{
  // Create an object:
  const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
      return this.firstName + " " + this.lastName;
    },
  };

  // Display data from the object:
  document.getElementById("demo_1a").innerHTML = person.fullName();
}
//DEMO 3A 3B ----------------------------------------------
{
  let x = this;
  document.getElementById("demo_3a").innerHTML = x;
}

//DEMO 4A -------------------------------------------------
{
  document.getElementById("demo_4a").innerHTML = myFunction();

  function myFunction() {
    return this;
  }
}
//DEMO 5A -------------------------------------------------

{
  ("use strict");
  document.getElementById("demo_5a").innerHTML = myFunction();

  function myFunction() {
    return this;
  }
}

//DEMO 7A -------------------------------------------------
{
  // Create an object:
  const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    myFunction: function () {
      return this;
    },
  };

  // Display data from the object:
  document.getElementById("demo_7a").innerHTML = person.myFunction();
}

{
  // Create an object:
  const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
      return this.firstName + " " + this.lastName;
    },
  };

  // Display data from the object:
  document.getElementById("demo_7b").innerHTML = person.fullName();
}

//DEMO 8A -------------------------------------------------
{
  const person1 = {
    fullName: function () {
      return this.firstName + " " + this.lastName;
    },
  };

  const person2 = {
    firstName: "John",
    lastName: "Doe",
  };

  let x = person1.fullName.call(person2);
  document.getElementById("demo_8a").innerHTML = x;
}
//DEMO 9A -------------------------------------------------
{
  const person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    },
  };

  const member = {
    firstName: "Hege",
    lastName: "Nilsen",
  };

  let fullName = person.fullName.bind(member);

  document.getElementById("demo_9a").innerHTML = fullName();
}
