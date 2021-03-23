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

console.table(people, ["name", "income"]);

// P1 - Parasyti funkcija kuri grazina visu zmoniu pajamu vidurki.

function getAverages() {
  let totalIncome = 0;
  // paimti kiekvieno piliecio pajamas ir sudeti jas
  // susikuri bendrai sumai kintamaji ir prideti kiekvienas pajamas sukant cikla

  people.forEach(function (person) {
    // viskas vyks tiek kartu kiek yra people nariu
    // kiekvienas asmuo bus issaugotas person pavadinimu
    // console.log(person.income);
    totalIncome += person.income;
  });

  //   people.forEach((person) => (totalIncome += person.income));

  // total bus visu income suma
  let average = totalIncome / people.length;
  // padalini is zmoniu skaiciaus
  console.log({ average });
  return average;
}
getAverages();

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// P1a - suskirstyti vidurki pagal lyti
// { male: 399, female: 949 }

function getMeMaleAverageIncome() {
  //   debugger;
  // nusistato kintamuosius
  let totlaMaleIncome = 0;
  let menCount = 0;
  let menAverage;

  // sukam cikla ir atliekam reikiamus veiksmus
  people.forEach(function (person) {
    // patikrinti ar person yra vyras
    if (person.sex === "male") {
      totlaMaleIncome = totlaMaleIncome + person.income;
      // kai radom vyra didinam ju skaitliuka
      menCount = menCount + 1;
    }
  });
  console.log(totlaMaleIncome, menCount);
  menAverage = totlaMaleIncome / menCount;

  // grazinam rezultata
  return { male: menAverage };
}
getMeMaleAverageIncome();
console.log(getMeMaleAverageIncome());

// P2 -Parasyti funkcija kuri naudojant forEach atspausdintu varda ir zodi 'Vairuoja' arba "Nevairuoja"

// P3 Parasyti funkcija kuri naudojant forEach grazintu nauja masyva kurio objektai turetu varda ir kiek jie uzdirba. Atspausdinti tik tuos kurie uzdirba daugiau nei 1200

// P4 atlikti P3 bet su map()

// P5 atspausdinti zmoniu sarasa kurie turi bent du daiktus

// P6 grazinti nauja objektu masyva kuriame butu vardas ir turimi prietaisai

// P7 Suskaiciuoti kiek zmoniu turi Tabletus?

// P8 Parasyti funkicja kuri grazina prietaisu paduotu argumentu skaiciu visame people masyve.
// pvz howManyDevices('laptop') // grazina kiek zmoniu turi laptopus

// P9 parasyti funkcija kuri grazina objekta padavus jai id reiksme.

// P10 parasyti funkcija kuri grazina nauja masyva sulietuvinus name, surname, ir age dalis.

// P11 Parasyti funkcija kuri grazina sarasa zmoniu kurie turi daugiau negu 2 prietaisus.
