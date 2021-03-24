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

console.table(people, ["name", "devices", "age"]);

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
// [ {
// name: vardas
// alga: 39393
//} ]
function giveMeNameAndIncomeArr() {
  // forEach negrazina reiksmes bet galim dirbti su isoriniai arba globaliais kintamaisiais
  const atrinktuReiksmiuMasyvas = [];
  let naujasVienasObjektas = {};

  // susikurti tuscia masyva
  people.forEach((person) => {
    // jei alga maziau uz 1200 mes nepridedam sitos reiksmes
    if (person.income > 1200) {
      naujasVienasObjektas = {
        name: person.name,
        alga: person.income,
      };
      // console.log(naujasVienasObjektas);

      // prideti objekta i savo atrinka masyva
      atrinktuReiksmiuMasyvas.push(naujasVienasObjektas);
    }
  });
  // ir i ji atrinkti tik tai ko mums reikia { name: asda, alga: 34423 }
  console.log({ atrinktuReiksmiuMasyvas });
  return atrinktuReiksmiuMasyvas;
}
giveMeNameAndIncomeArr();

// P4 atlikti P3 bet su map()
function giveMeNameAndIncomeArrMap() {
  const atrinktuReiksmiuMasyvas = [];

  return people
    .map((person) => {
      return person.income > 1200
        ? { name: person.name, alga: person.income }
        : null;
      // return { name: person.name, alga: person.income };
    })
    .filter((newObj) => newObj !== null);
  // return atrinktuReiksmiuMasyvas;
}
giveMeNameAndIncomeArrMap();
console.log(giveMeNameAndIncomeArrMap());

// P5 atspausdinti zmoniu sarasa kurie turi bent tris daiktus

// sukurti funkcija
function printMePepople3D() {
  let kiekDaiktuTuriAsmuo;
  // sukti cikla
  people.forEach(function (personObj) {
    kiekDaiktuTuriAsmuo = personObj.devices.length;
    // ar asmuo turi 3 ir daugiau daiktu
    if (kiekDaiktuTuriAsmuo >= 3) {
      console.log(personObj.name + " " + personObj.surname);
    }
  });

  // atspausdinti zmogu jei jis turi 3 ir daugiau daiktu
  // array.legth - kiek yra el masyve
}
// console.clear();
printMePepople3D();

//
//
//
//
//
//
//
// P6 grazinti nauja objektu masyva kuriame butu vardas ir turimi prietaisai

// P7 Suskaiciuoti kiek zmoniu turi Tabletus?
// array.indexOf('koIeskom') grazina index jei rado
// grazina -1 jei nerado
// array.includes('koIeskom') grazina true jei rado ir false jei ne

// sukuriam funkcija
const countDevices = function (whatToFind) {
  let totalDevicesFound = 0;
  // sukam cikla
  people.forEach((personObj) => {
    // ciklo metu ziurim ar einamas asmens objektas turi 'tablet'
    // jei zmogus turi tablet mes pridedam 1 prie bendros tablet sumos
    personObj.devices.includes(whatToFind) ? (totalDevicesFound += 1) : null;
  });
  if (totalDevicesFound === 0) {
    console.log(`${whatToFind} prietaisu mes neradom`);
  } else {
    console.log(`radom ${whatToFind}:`, totalDevicesFound);
  }
};
countDevices("laptop");

// P8 Parasyti funkicja kuri grazina prietaisu paduotu argumentu skaiciu visame people masyve.
// pvz howManyDevices('laptop') // grazina kiek zmoniu turi laptopus

// P9 parasyti funkcija kuri grazina objekta padavus jai id reiksme.

// P10 parasyti funkcija kuri grazina nauja masyva sulietuvinus name, surname, ir age dalis.

// P11 Parasyti funkcija kuri grazina sarasa masyvo pavidalu zmoniu kurie turi daugiau negu 2 prietaisus.
