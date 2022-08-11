//-----------------------------------------
/*
 1 - Real Life Objects, Properties, and Methods
*/

// Create an object:
const personM = { firstName: 'John', lastName: 'Doe', age: 50, eyeColor: 'blue' };

//TODO: Display some data from the object by OBJECT-NAME !!!:
document.getElementById('demo').innerHTML = personM.firstName + ' is ' + personM.age + ' years old.';

/*
2 - Object Methods - THIS -
*/

const personW = {
  firstName: 'Anna',
  lastName: 'Pretty',
  id: 1000,
  age: 4,
  fullName: function () {
    return this.firstName + ' ' + this.lastName;
  },
};

//TODO: Display some data from the object by THIS keyword !!!:
document.getElementById('demo-2').innerHTML = personW.fullName();
document.getElementById('demo-3').innerHTML = personW.firstName + ' is ' + personW.age + ' years old.';
