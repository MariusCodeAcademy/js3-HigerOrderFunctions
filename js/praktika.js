"use strict";
const people = [
  {
    id: "it51",
    name: "Jonas",
    surname: "Jonaitis",
    sex: "male",
    age: 26,
    income: 1200,
    married: false,
    hasCar: false,
    devices: ["laptop", "phone"],
  },
  {
    id: "it52",
    name: "Severija",
    surname: "Piktutytė",
    sex: "female",
    age: 126,
    income: 1300,
    married: false,
    hasCar: true,
    devices: ["tablet", "phone"],
  },
  {
    id: "it53",
    name: "Valdas",
    surname: "Vilktorinas",
    sex: "male",
    age: 16,
    income: 0,
    married: false,
    hasCar: false,
    devices: ["laptop", "tablet", "phone", "drone"],
  },
  {
    id: "it54",
    name: "Virginijus",
    surname: "Uostauskas",
    sex: "male",
    age: 32,
    income: 2400,
    married: true,
    hasCar: true,
    devices: ["tablet", "phone"],
  },
  {
    id: "it55",
    name: "Samanta",
    surname: "Uostauskienė",
    sex: "female",
    age: 28,
    income: 1200,
    married: true,
    hasCar: true,
    devices: ["laptop", "phone"],
  },
  {
    id: "it56",
    name: "Janina",
    surname: "Stalautinskienė",
    sex: "female",
    age: 72,
    income: 364,
    married: false,
    hasCar: false,
    devices: ["laptop", "tablet", "phone"],
  },
];

// console.log(people);

// P1 - Parasyti funkcija kuri grazina visu zmoniu pajamu vidurki.

// P1a - suskirstyti vidurki pagal lyti
// { male: 399, female: 949 }

// P2 -Parasyti funkcija kuri naudojant forEach atspausdintu varda ir zodi 'Vairuoja' arba "Nevairuoja"

// P3 Parasyti funkcija kuri naudojant forEach grazintu nauja masyva kurio objektai turetu varda ir kiek jie uzdirba. Atspausdinti tik tuos kurie uzdirba daugiau nei 1200
