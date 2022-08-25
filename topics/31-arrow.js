//DEMO_1A ----------------------------------------------
{
  let myFunction = (a, b) => a * b;
  document.getElementById("demo_1a").innerHTML = myFunction(4, 5);
}
//DEMO_1B ----------------------------------------------
{
  var hello;

  hello = function () {
    return "Hello World!";
  };

  document.getElementById("demo_1b").innerHTML = hello();
}
//DEMO_1C ----------------------------------------------
{
  let hey;

  hey = () => "Hey! World!";

  document.getElementById("demo_1c").innerHTML = hey();
}
//DEMO_2A ----------------------------------------------
{
  let hello;

  hello = (val) => "Hello " + val;

  document.getElementById("demo_2a").innerHTML = hello("Universe!");
}
//DEMO_2B ----------------------------------------------
{
  let hello;

  hello = (val) => "Hello " + val;

  document.getElementById("demo_2b").innerHTML = hello("Universe!");
}

//DEMO_3A ----------------------------------------------
{
  var hello;

  hello = function () {
    document.getElementById("demo_3a").innerHTML += this;
  };

  //The window object calls the function:
  window.addEventListener("load", hello);

  //A button object calls the function:
  document.getElementById("btn").addEventListener("click", hello);
}

//DEMO_3B ----------------------------------------------
{
  hello = () => {
    document.getElementById("demo_3b").innerHTML += this;
  };

  //The window object calls the function:
  window.addEventListener("load", hello);

  //A button object calls the function:
  document.getElementById("btn_2").addEventListener("click", hello);
}
