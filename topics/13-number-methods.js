//DEMO-2 -----------------------------------------
{
  let x = 123;
  document.getElementById('demo-1').innerHTML = x.toString() + '<br>' + (123).toString() + '<br>' + (100 + 23).toString();
}

//DEMO-3 -----------------------------------------
{
  let x = 9.656;
  document.getElementById('demo-3').innerHTML = x.toFixed(0) + '<br>' + x.toFixed(2) + '<br>' + x.toFixed(4) + '<br>' + x.toFixed(6);
}

//DEMO-4 -----------------------------------------

{
  document.getElementById('demo-4').innerHTML = Number(true) + '<br>' + Number(false) + '<br>' + Number('10') + '<br>' + Number('  10') + '<br>' + Number('10  ') + '<br>' + Number(' 10  ') + '<br>' + Number('10.33') + '<br>' + Number('10,33') + '<br>' + Number('10 33') + '<br>' + Number('John');
}
