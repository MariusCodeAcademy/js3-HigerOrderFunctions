"use strict";

console.log("reduce");

let numbers = [1, -2, 4, 8];
// (1 + -2 + 4 + 8) / 4  = avg
// 1/4 + -2/4 + 4/4 + 8/4 = avg

console.log("numbers", numbers);

// sudeti vissus skaicius

// ir padalinti is kiek ju yra
// suma su foreach =================================================================
let total = 0;
numbers.forEach((val) => {
  console.log("total:", total, "val:", val);
  total += val;
});
console.log("total", total);
let avg = total / numbers.length;
console.log("avg", avg);

// suma su reduce ================================================================
// reduce naudojamas gauti kazkokiai galutiniai reiksmei is iteruojamo masyvo
// accumulator yra pradine reiksme kuri prilyginamas antram argumentui reduce(callback,0)
// tai ka grazinam su reduze yra prilyginama i accumuliator ir ciklas tesiasi toliau iki pabaigos
let totalReduce = numbers.reduce((accumalator, currentValue) => {
  console.log("accumalator", accumalator, "currentValue", currentValue);
  return accumalator + currentValue;
}, 0);

// one line arrow
let totalReduceOneLine = numbers.reduce((acc, cur) => acc + cur, 0);

console.log("totalReduce", totalReduceOneLine);

// one line arrow
let totalReduceOneLineAvg = numbers.reduce((acc, cur) => acc + cur, 0);

// Average su reduce ================================================================
let avgReduce = numbers.reduce((accumalator, currentValue) => {
  console.log("accumalator", accumalator, "currentValue", currentValue);
  return accumalator + currentValue / numbers.length;
}, 0);

console.log("avgReduce", avgReduce);

// Sum object values su reduce ================================================================

const persons = [
  {
    name: "Bob",
    town: "Vilnius",
    age: 43,
  },
  {
    name: "Hen",
    town: "Kaunas",
    age: 33,
  },
  {
    name: "John",
    town: "Kaunas",
    age: 19,
  },
  {
    name: "Michael",
    town: "Klaipeda",
    age: 23,
  },
];

// parasyti reduce funkcija kuri susumuoja amziu
let ages = persons.reduce((accum, personObj) => {
  return accum + personObj.age;
}, 0);

console.log("ages", ages);
