//DEMO-1 -----------------------------------------
{
  let myNumber = 16;
  document.getElementById('demo-1').innerHTML = 'Decimal: ' + ' ' + myNumber + ' <br><br>' + 'Hexatrigesimal (base 36): ' + myNumber.toString(36) + '<br>' + 'Duotrigesimal (base 32): ' + myNumber.toString(32) + '<br>' + 'Hexadecimal (base 16): ' + myNumber.toString(16) + '<br>' + 'Duodesimal (base 12): ' + myNumber.toString(12) + '<br>' + 'Desimal (base 10): ' + myNumber.toString(10) + '<br>' + 'Octal (base 8): ' + myNumber.toString(8) + '<br>' + 'Binary (base 2): ' + myNumber.toString(2);
}

// TODO: see console
{
  let z = 36;
  console.log(z.toString(2));
}

//DEMO-2 -----------------------------------------
document.getElementById('demo-2').innerHTML = 100 / 'Apple';

//DEMO-3 -----------------------------------------
{
  let myNumber = 2;
  let txt = '';

  while (myNumber != Infinity) {
    myNumber = myNumber * myNumber;
    txt = txt + myNumber + '<br>';
  }

  document.getElementById('demo-3').innerHTML = txt;
}
