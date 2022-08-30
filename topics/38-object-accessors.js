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

  document.getElementById("demo_1a+").innerHTML = person.lang;

  person.language = "polski";

  // Display data from the object using a getter:
  document.getElementById("demo_1a").innerHTML = JSON.stringify(person);
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
  person.lang = "czech";

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

// DEMO_6A -----------------------------------------
{
  // Define an object
  const obj = { counter: 0 };

  // Define Setters and Getters
  Object.defineProperty(obj, "reset", {
    get: function () {
      this.counter = 0;
    },
  });
  Object.defineProperty(obj, "increment", {
    get: function () {
      this.counter++;
    },
  });
  Object.defineProperty(obj, "decrement", {
    get: function () {
      this.counter--;
    },
  });
  Object.defineProperty(obj, "add", {
    set: function (value) {
      this.counter += value;
    },
  });
  Object.defineProperty(obj, "subtract", {
    set: function (value) {
      this.counter -= value;
    },
  });

  // Play with counter:
  obj.reset;
  obj.add = 8;
  obj.subtract = 111;
  obj.increment;
  obj.decrement;
  document.getElementById("demo_6a").innerHTML = obj.counter;
  document.getElementById("demo_6b").innerHTML = JSON.stringify(obj);
}
