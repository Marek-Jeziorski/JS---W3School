//DEMO_2A ----------------------------------------------
{
  class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
  }

  const myCar = new Car("Ford", 2014);

  document.getElementById("demo_2a").innerHTML = myCar.name + " " + myCar.year;
}

//DEMO_4A ----------------------------------------------
{
  class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
    age() {
      let date = new Date();
      return date.getFullYear() - this.year;
    }
  }

  let myCar = new Car("Ford", 2014);

  document.getElementById("demo_4a").innerHTML =
    "My car is " + myCar.age() + " years old.";
}

//DEMO_4B ----------------------------------------------
{
  class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
    age(x) {
      return x - this.year;
    }
  }

  let date = new Date();
  let year = date.getFullYear();

  let myCar = new Car("Ford", 2014);

  document.getElementById("demo_4b").innerHTML =
    "My car is " + myCar.age(year) + " years old.";
}
