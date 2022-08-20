//DEMO_3A,3B ----------------------------------------------
{
  let age = 11;
  let x = "6";
  let y = 6;

  document.getElementById("demo_3a").innerHTML =
    (x != "6" || y === "6") + "<br>" + (x < 10 && y < 1) + "<br>" + !(x == y);

  if (age < 18) {
    text = "Too young to buy alcohol";
  } else {
    text = "You can drink as much as you can ;-) ";
  }
  document.getElementById("demo_3b").innerHTML = text;
}
//DEMO_4A ----------------------------------------------
{
  function myFunction() {
    let age = document.getElementById("age").value;

    let voteable = age < 18 ? "Too young" : "Old enough";
    document.getElementById("demo_4a").innerHTML = voteable + " to vote.";
  }
}
//DEMO_5A ----------------------------------------------
{
  function myFun_2() {
    let voteable;

    let age = Number(document.getElementById("age_2").value);

    if (isNaN(age)) {
      voteable = "Input is not a number";
    } else {
      voteable = age < 18 ? "Too young ;-(" : "Old enough ;-)";
    }
    document.getElementById("demo_5a").innerHTML = voteable + " to vote";
  }
}
