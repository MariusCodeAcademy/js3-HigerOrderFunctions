"use strict";

// more on array.map();
// https://www.w3schools.com/jsref/jsref_map.asp

// array.map(function(currentValue, index, arr), thisValue)

const numbers = [2, 4, 1, -5];

const mapResult = numbers.map(add5);

function add5(num) {
  return num + 5;
}

console.log({ numbers, mapResult });

function mapToObj(num) {
  return {
    value: num,
  };
}

const mapobject = numbers.map(mapToObj);
console.log(mapobject);

// sugeneruoti li elemntu is numbers masvyo <li>sk </li>

const sugeneruotasSarasas = numbers.map(function (num) {
  return `<li>${num}</li>`;
});

console.log(sugeneruotasSarasas);

const stringSarasas = sugeneruotasSarasas.join("");

console.log({ stringSarasas });

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
