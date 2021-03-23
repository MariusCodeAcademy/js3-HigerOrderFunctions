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

// 2. Naudojant Array.prototype.forEach atspausdinti visas moteris jaunesnes nei 35 metai.

// 3. Naudojant Array.prototype.forEach atspausdinti visus žmones kurie turi mašinas.

// 4. Naudojant Array.prototype.forEach atspausdinti visus susituokusius žmones.

// 5. Naudojant Array.prototype.forEach atspausdinti visų vairuojančių žmonių lytį.

// 6. Naudojant Array.prototype.forEach ir globalius kintamuosius,
//    suskaičiuoti vairuojančių moterų ir vyrų kiekius, bei juos atspausdinti.
