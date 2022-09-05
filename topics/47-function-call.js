// DEMO 1A-------------------------------------------
{
  const person = {
    fullName: function () {
      return this.firstName + " " + this.lastName;
    },
  };
  const person1 = {
    firstName: "John",
    lastName: "Doe",
  };
  const person2 = {
    firstName: "Mary",
    lastName: "Doe",
  };
  document.getElementById("demo_1a").innerHTML = person.fullName.call(person2);
}

// DEMO 2A-------------------------------------------
{
  const person = {
    fullName: function (city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    },
  };

  const person1 = {
    firstName: "John",
    lastName: "Doe",
  };

  const person2 = {
    firstName: "Mary",
    lastName: "Doe",
  };

  document.getElementById("demo_2a").innerHTML = person.fullName.call(
    person1,
    "Oslo",
    "Norway"
  );
}
