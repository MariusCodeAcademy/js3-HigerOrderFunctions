"use strict";
console.log("What functions does");

// parasyti funckija kuri grazina argumentu paduota reiksme =============================

// funciton declaration
function return5(value) {
  // function body
  // galim tureti visokius matematinius ar kitoksiu duomenu apdorojimus
  // ir tiko po visko grazinti galutine reikme
  return value;
}

// function expression
const return5e = function (value) {
  return value;
};

// function expression arrow
const return5eA = (value) => {
  return value;
};

// function expression arrow one line
// kai musu grazinama dalis gali buti vienoje eiluteje
const return5eAO = (value) => value;

// iskviesti funkcija kad ivyktu funkcijos body dalis
// taip iskvieciam funkcija bet neissaugom rezultato ir negalim juo pasinaudoti
// return5();
// issaugom tai ka grazino retur5 funkcija i res kintamaji
// let res = return5();
// pasiziureti kas yra resultate
// console.log(res);
// kad pasiziureti iskarto ka grazina funkcija
console.log(return5(100));

console.clear();
// parasyti funckija kuri atspausdina argumentu paduota reiksme padauginnta is 5 =============================

// function expression
const returnl5e = function (value) {
  console.log(value * 5);
};

// function expression arrow
const returnl5eA = (value) => {
  console.log(value * 5);
};

returnl5e(10);
returnl5eA(20);
console.log("returnl5e(10)", returnl5e(10));
// ================================================================================
// indx          0   1  2  3
const numbers = [1, -2, 1, 4];

// parasyti funcija kuri grazina 3 masyvo el

const getThird = function () {
  return numbers[2];
};

const getMeIndexValue = function (index) {
  return numbers[index - 1];
};

console.log(getThird());

console.log("getMeIndexValue(3)", getMeIndexValue(3));

// grazinti masyva kuriame butu tik teigiamos reiksmes
const positives = function () {
  let pos = [];
  numbers.forEach(function (number) {
    if (number > 0) {
      pos.push(number);
    }
  });
  return pos;
};

console.log("positives()", positives());

// grazinti masyva kuriame butu tik teigiamos reiksmes ARROW budu
const positivesArrrow = () => {
  let pos = [];
  numbers.forEach((number) => (number > 0 ? pos.push(number) : null));
  return pos;
};

console.log("positivesArrrow()", positivesArrrow());

// grazinti masyva kuriame butu tik teigiamos reiksmes ARROW budu MAP
const positivesArrrowMap = () => {
  const mapResult = numbers.map((number) => {
    return number > 0 ? `positive ${number}` : "negative";
  });
  return mapResult.join("  *  ");
};

console.log("positivesArrrowMap()", positivesArrrowMap());

// Kuo skiriasi anoninme funkcija sukurta iskart nuo tos kuria naudojam aprasyta atskirai
const doubleValues = function () {
  // funkcija sukurta galioti tik sioje funkcijoje
  function makeDouble(val) {
    return val * 2;
  }
  // anonimine funkcija sukurta funcijos argumento vietoje
  // return numbers.map(function (val) {
  //   return val * 2;
  // });

  // map funkcijai paduosim is anksto aprasyta funkcija
  // kai perduodam is ankso aprasyta funkcija tai nerasom () nes perduodame nuoroda i funkcija
  return numbers.map(makeDouble);
};
console.log("doubleValues()", doubleValues());
console.log("doubleValues", doubleValues);