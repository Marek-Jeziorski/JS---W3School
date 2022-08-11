//DEMO-1 -----------------------------------------
{
  let firstName = 'John';
  let lastName = 'Doe';

  let text = `Welcome ${firstName}, ${lastName}!`; //VARIABLE substit

  document.getElementById('demo-1').innerHTML = text;

  //DEMO-1b -----------------------------------------
  let price = 10;
  let VAT = 0.25;
  let total = `Total: ${(price * (1 + VAT)).toFixed(4)}`; //EXPRESSION substit.

  document.getElementById('demo-1b').innerHTML = total;
}

//DEMO-2 -----------------------------------------
{
  let header = 'Templates Literals';
  let tags = ['template literals', 'javascript', 'es6', 'MAREK'];

  let html = `<h2>${header}</h2><ul>`;

  for (const x of tags) {
    html += `<li class='att'>${x}</li>`;
  }

  html += `</ul>`;
  console.log(html); //TODO:
  document.getElementById('demo-2').innerHTML = html;
}
