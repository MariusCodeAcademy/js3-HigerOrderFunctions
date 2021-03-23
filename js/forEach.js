"use strict";

const numbers = [2, 4, 1, -5];

// funkcija kuria mes paduosim argumentu
const add5 = function (value) {
  console.log(value + 5);
};

//https://www.w3schools.com/jsref/jsref_foreach.asp
numbers.forEach(add5);
//                        reiksme,   nebutini
numbers.forEach(function (number, index, arr) {
  // kai reiksme yra neigiama padaryti teigiama
  if (number < 0) {
    // reiksme maziau uz 0
    console.log(`index ${index} - value ${number * 5 * -1}`);
    arr[index] = arr[index] * -1;
  } else {
    console.log(`index ${index} - value ${number * 5}`);
  }
});

const simplePeople = [
  {
    name: "James",
    age: 33,
  },
  {
    name: "Jane",
    age: 23,
  },
  {
    name: "Bob",
    age: 45,
  },
];

// atspausdinti su console varda ir metus
function printNameAge(person) {
  console.log(person.name + "-" + person.age);
}

simplePeople.forEach(printNameAge);
