"use strict";

const numbers = [2, 4, 1, -5];

// funkcija kuria mes paduosim argumentu
const add5 = function (value) {
  console.log(value + 5);
};

numbers.forEach(add5);

numbers.forEach(function (number, index, arr) {
  console.log(`index ${index} - value ${number * 5}`);
  // kai reiksme yra neigiama padaryti teigiama
});
