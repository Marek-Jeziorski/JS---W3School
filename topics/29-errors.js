//DEMO_1A ----------------------------------------------
{
  try {
    adddlert("Welcome guest!");
  } catch (err) {
    document.getElementById("demo_1a").innerHTML = err.message;
  }
}
//DEMO_3A ----------------------------------------------
function myFunction() {
  const message = document.getElementById("p01");
  message.innerHTML = "";

  let x = document.getElementById("demo_3a").value;

  try {
    if (x == "") throw "empty";
    if (isNaN(x)) throw "not a number";
    x = Number(x);
    if (x < 5) throw "too low";
    if (x > 10) throw "too high";
  } catch (err) {
    message.innerHTML = "Input is " + err;
  }
}
//DEMO_4A ----------------------------------------------
{
  function myFunction_2() {
    const message = document.getElementById("p02");
    message.innerHTML = "";
    let x = document.getElementById("demo_4a").value;
    try {
      if (x == "") throw "is empty";
      if (isNaN(x)) throw "is not a number";
      x = Number(x);
      if (x > 10) throw "is too high";
      if (x < 5) throw "is too low";
    } catch (err) {
      message.innerHTML = "Input " + err;
    } finally {
      document.getElementById("demo_4a").value = "";
    }
  }
}
