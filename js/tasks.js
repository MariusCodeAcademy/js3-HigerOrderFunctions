"use strict";
const people = [
  {
    name: "Jonas",
    surname: "Jonaitis",
    sex: "male",
    age: 26,
    income: 1200,
    married: false,
    hasCar: false,
  },
  {
    name: "Severija",
    surname: "Piktutytė",
    sex: "female",
    age: 26,
    income: 1300,
    married: false,
    hasCar: true,
  },
  {
    name: "Valdas",
    surname: "Vilktorinas",
    sex: "male",
    age: 16,
    income: 0,
    married: false,
    hasCar: false,
  },
  {
    name: "Virginijus",
    surname: "Uostauskas",
    sex: "male",
    age: 32,
    income: 2400,
    married: true,
    hasCar: true,
  },
  {
    name: "Samanta",
    surname: "Uostauskienė",
    sex: "female",
    age: 28,
    income: 1200,
    married: true,
    hasCar: true,
  },
  {
    name: "Janina",
    surname: "Stalautinskienė",
    sex: "female",
    age: 72,
    income: 364,
    married: false,
    hasCar: false,
  },
];

// console.log(people);

// 1. Naudojant Array.prototype.forEach atspausdinti visus vyrus.
const printMalesOnly = function (person) {
  // jei lytis === male tai vyras, kiti atvejai moteris
  if (person.sex === "male") console.log(person);
  //   person.sex === "male" ? console.log(person) : null;
};
console.log("1. Naudojant Array.prototype.forEach atspausdinti visus vyrus.");

// panaudoti printMalesOnly su foreach ant people masyvo
// masyvo pavadinimas . forEach( funkcija 'callback' )
people.forEach(printMalesOnly);
console.log(
  "==================================================================="
);
console.log("");

// 2. Naudojant Array.prototype.forEach atspausdinti visas moteris jaunesnes nei 35 metai.
const printYoungFemales = function (person) {
  if (person.sex === "female" && person.age < 35) console.log(person);
};
console.log(
  "2. Naudojant Array.prototype.forEach atspausdinti visas moteris jaunesnes nei 35 metai."
);
people.forEach(printYoungFemales);

// 3. Naudojant Array.prototype.forEach atspausdinti visus žmones kurie turi mašinas.

// 4. Naudojant Array.prototype.forEach atspausdinti visus susituokusius žmones.
console.clear();
console.log(
  "4. Naudojant Array.prototype.forEach atspausdinti visus susituokusius žmones."
);

people.forEach(function (person) {
  if (person.married) console.log(person);
});

// 5. Naudojant Array.prototype.forEach atspausdinti visų vairuojančių žmonių lytį.
function printSexIfHasCar(person) {
  if (person.hasCar) console.log(person.sex);
}
console.clear();
console.log(
  "5. Naudojant Array.prototype.forEach atspausdinti visų vairuojančių žmonių lytį."
);
people.forEach(printSexIfHasCar);

// 6. Naudojant Array.prototype.forEach ir globalius kintamuosius,
//    suskaičiuoti vairuojančių moterų ir vyrų kiekius, bei juos atspausdinti.

// globalus kintamais
let drivingMaleCount = 0;
let drivingFemaleCount = 0;

const countDrivers = function (person) {
  if (person.hasCar) {
    // visi kurie turi automobilius
    // terenary operator
    person.sex === "male" ? drivingMaleCount++ : drivingFemaleCount++;
  }
};
people.forEach(countDrivers);

console.log("drivingMaleCount", drivingMaleCount);
console.log("drivingFemaleCount", drivingFemaleCount);
// for primitive values galim taip isloginti.
console.log({ drivingMaleCount, drivingFemaleCount });
