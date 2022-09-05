// DEMO 2A-------------------------------------------
{
  let x = myFunction();

  function myFunction() {
    return this;
  }

  document.getElementById("demo_2a").innerHTML = x;
}

// DEMO 2B-------------------------------------------
{
  const person = {
    myFunction: function () {
      return this;
    },
  };

  let x = person.myFunction();

  document.getElementById("demo_2b").innerHTML = x;
}

// DEMO 4A-------------------------------------------
{
  function myFunction(arg1, arg2) {
    this.firstName = arg1;
    this.lastName = arg2;
  }

  const myObj = new myFunction("John", "Doe");

  document.getElementById("demo_4a").innerHTML = myObj.firstName;
}
