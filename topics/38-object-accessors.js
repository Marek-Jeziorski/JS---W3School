// DEMO_1A -----------------------------------------
{
  // Create an object:
  const person = {
    firstName: "John",
    lastName: "Doe",
    language: "en",
    get lang() {
      return this.language;
    },
  };

  // Display data from the object using a getter:
  person.language = "polski";
  document.getElementById("demo_1a").innerHTML = person.lang;
}

// DEMO_1B -----------------------------------------
{
  // Create an object:
  const person = {
    firstName: "John",
    lastName: "Doe",
    language: "NO",
    set lang(value) {
      this.language = value;
    },
  };

  // Set a property using set:
  person.lang = "pl";

  // Display data from the object:
  document.getElementById("demo_1b").innerHTML = person.language;
}

// DEMO_3A -----------------------------------------

{
  // Create an object:
  const person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    },
  };

  // Display data from the object using a method:
  document.getElementById("demo_3a").innerHTML = person.fullName();
}

// DEMO_3B -----------------------------------------
{
  // Create an object:
  const person = {
    firstName: "John",
    lastName: "Doe",
    get fullName() {
      return this.firstName + " " + this.lastName;
    },
  };
  // Display data from the object using a getter:
  document.getElementById("demo_3b").innerHTML = person.fullName;
}
