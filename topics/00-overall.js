//DEMO-1 -------------------------------------

{
  let a1 = 1;
  let a2 = 4;

  add(a1, a2);

  function add(a, b) {
    return (result = a + b);
  }
  document.getElementById('demo-1').innerHTML = result;
}

//DEMO-2,2b -------------------------------------
const human = {
  name: 'Marek',
  height: 175,
  weight: 'fat',
  age: 42,
  friends: ['Osia', 'Astram', 'Daniel'],
};

document.getElementById('demo-2').innerHTML = human;
document.getElementById('demo-2b').innerHTML = JSON.stringify(human, null, '</br>');
