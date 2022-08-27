//DEMO_3A ----------------------------------------------
{
  // First, create a JavaScript string containing JSON syntax:
  let text =
    '{"employees":[' +
    '{"firstName":"John","lastName":"Doe" },' +
    '{"firstName":"Anna","lastName":"Smith" },' +
    '{"firstName":"Peter","lastName":"Jones" }]}';

  // Then, use the JavaScript built-in function JSON.parse() to convert the string into a JavaScript object:

  const obj = JSON.parse(text);

  // Finally, use the new JavaScript object in your page:

  document.getElementById("demo_3a").innerHTML =
    obj.employees[1].firstName + " " + obj.employees[1].lastName;
}
