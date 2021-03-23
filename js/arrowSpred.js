"use strict";

console.log("Arrow");

const numbers = [1, 2, 3];

// funkcijos deklaracija
function test1() {}

// funkcijos expresija, anonimine funkcija
const test2 = function () {};

// funkcijos expresija, anonimine arrow funkcija
const test3 = () => console.log("test2");

// full function
const rez = numbers.map(function (val) {
  return val + 3;
});

// arrow funcion
const rez2 = numbers.map((val) => {
  return val + 3;
});

// arrow funcion
const rez3 = numbers.map((val) => val + 3);

console.log(rez);
console.log(rez2);
console.log(rez2);

// Spred operator
// ...

// prideti dar keleta reiksmiu i numbers masyva
// spread on Arrays =============================================

let added = [...numbers, 5, 6, 7];

added = [65, 45, ...numbers, 5, 6, 7];

console.log({ added, numbers });

// spread on Objects =============================================

const simplePerson = {
  name: "James",
  age: 33,
};

simplePerson.hasCar = true;

let localPersonCopy = {
  height: 150,
  ...simplePerson,
};

// localPersonCopy.height = 150;

console.log(simplePerson);
console.log(localPersonCopy);
