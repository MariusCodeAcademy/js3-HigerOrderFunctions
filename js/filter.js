"use stict";

console.log("Filter is fun");

let numbers = [1, -2, 4, 8];
console.log("numbers", numbers);

// grazinti nauja masyva su teigiamom reiksmem
const filterArr = function () {
  let positive = [];
  numbers.forEach((num) => {
    if (num > 0) {
      positive.push(num);
    }
  });
  console.log("positive", positive);

  return positive;
};

filterArr();

// Js turi higher order function Array.prototyp.filter()
// array.filter(function(currentValue, index, arr), thisValue)

// daugiau info https://www.w3schools.com/jsref/jsref_filter.asp

let filtered = numbers.filter(function (num) {
  // jeigu grazinsim true tai tas el pasilieka masyve
  // jei false tai jo nelieka masyve
  return num < 4;
});

filtered = numbers.filter((num) => num < 4);

console.log("filtered", filtered);

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

// grazinti nauja masyva kuriame butu tik vilnieciai

let vilnieciai = persons.filter(function (personObj) {
  // salyga kuriai esant true mes grazinsim sita el i nauja issviltruota masyva
  return personObj.town !== "Kaunas";
});

console.log("vilnieciai", vilnieciai);

console.log("orginalas", persons);

// parasyti fn kuri grazina tik vilniecius

const vilnieciaiFn = function (town) {
  return persons.filter(function (personObj) {
    // salyga kuriai esant true mes grazinsim sita el i nauja issviltruota masyva
    return personObj.town === town;
  });
};
console.log('vilnieciaiFn("vilnius")', vilnieciaiFn("Vilnius"));
console.log('vilnieciaiFn("Kaunas")', vilnieciaiFn("Kaunas"));

// issfiltruoti asmenis kurie yra vyresni nei 23

const vyresniZmones = persons.filter(function (personObj) {
  return personObj.age > 23;
});

const vyresniZmonesA = persons.filter((personObj) => personObj.age > 23);

console.log("vyresniZmonesA", vyresniZmonesA);

// filter su atskira funkcija
function zmones23(personObj) {
  return personObj.age > 23;
}

const vyresniZmonesAtsFN = persons.filter(zmones23);

console.log("vyresniZmonesAtsFN", vyresniZmonesAtsFN);
