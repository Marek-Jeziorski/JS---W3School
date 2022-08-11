//DEMO-2 -----------------------------------------
{
  let str = "Please locate where 'locate' occurs!";
  document.getElementById('demo-2').innerHTML = str.indexOf('locate');

  // DEMO-2B
  document.getElementById('demo-2b').innerHTML = str.lastIndexOf('locate');
}

//DEMO-3 -----------------------------------------
{
  let str = "Please locate where 'locate' occurs!";
  document.getElementById('demo-3').innerHTML = str.search('locate');
}

//DEMO-4 -----------------------------------------
{
  let text = 'The rain in SPAIN stays mainly in the plain';
  document.getElementById('demo-4').innerHTML = text.match(/ain/g);
}

//DEMO-4B -----------------------------------------
let text = 'The rain in SPAIN stays mainly in the plain';
document.getElementById('demo-4b').innerHTML = text.match(/ain/gi);

//DEMO-5 -----------------------------------------
{
  let text = 'Hello world, welcome to the universe.';
  document.getElementById('demo-5').innerHTML = text.includes('world', 10);
}

//DEMO-6 -----------------------------------------
{
  let text = 'Hello world, welcome to the universe.';
  document.getElementById('demo-6').innerHTML = text.startsWith('world', 6);
}
