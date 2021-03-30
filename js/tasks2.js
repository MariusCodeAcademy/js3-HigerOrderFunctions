const students = [
  {
    name: "Panatėja",
    surname: "Sulindytė",
    faculty: "Informatikos fakultetas",
    course: 3,
    modules: [
      {
        title: "Operacinės sistemos",
        credits: 6,
        marks: [10, 7, 7, 6, 9],
      },
      {
        title: "Algoritmų analizė",
        credits: 9,
        marks: [8, 8, 6, 4, 6],
      },
      {
        title: "Tikimybės ir Statistika",
        credits: 6,
        marks: [9, 7, 8, 9, 6],
      },
      {
        title: "Inžinerinis projektas",
        credits: 3,
        marks: [10, 8, 9, 8],
      },
      {
        title: "Kompiuterių architektūra",
        credits: 6,
        marks: [6, 8, 7, 8, 8],
      },
    ],
  },
  {
    name: "Serbentautas",
    surname: "Bordiūras",
    faculty: "Informatikos fakultetas",
    course: 4,
    modules: [
      {
        title: "Matematika",
        credits: 6,
        marks: [7, 6, 9, 10, 8],
      },
      {
        title: "Duomenų struktūros",
        credits: 6,
        marks: [7, 8, 9, 4, 8],
      },
      {
        title: "Skaitmeninė logika",
        credits: 6,
        marks: [6, 8, 10, 9, 9],
      },
      {
        title: "Objektinis programavimas",
        credits: 6,
        marks: [10, 8, 9, 8, 8],
      },
      {
        title: "Fizika",
        credits: 6,
        marks: [6, 7, 8, 8, 8],
      },
    ],
  },
  {
    name: "Laptokas",
    surname: "Klavianskas",
    faculty: "Informatikos fakultetas",
    course: 1,
    modules: [
      {
        title: "Matematika",
        credits: 6,
        marks: [9, 8, 10, 9, 10],
      },
      {
        title: "Duomenų struktūros",
        credits: 6,
        marks: [9, 9, 10, 10, 8],
      },
      {
        title: "Skaitmeninė logika",
        credits: 6,
        marks: [10, 10, 10, 9, 10],
      },
      {
        title: "Objektinis programavimas",
        credits: 6,
        marks: [9, 8, 9, 10, 10],
      },
      {
        title: "Fizika",
        credits: 6,
        marks: [8, 9, 8, 10, 8],
      },
    ],
  },
  {
    name: "Skaistė",
    surname: "Kolbaitė",
    faculty: "Chemijos fakultetas",
    course: 2,
    modules: [
      {
        title: "Organinė chemija",
        credits: 6,
        marks: [9, 9, 10, 9, 8],
      },
      {
        title: "Inžinerinės medžiagos",
        credits: 3,
        marks: [10, 10, 10, 9, 9],
      },
      {
        title: "Entalpija ir Entropija",
        credits: 6,
        marks: [9, 9, 9, 9],
      },
      {
        title: "Polimerų atmainos ir produktai",
        credits: 9,
        marks: [10, 9, 8, 10, 7],
      },
      {
        title: "Pramoninė chemija",
        credits: 6,
        marks: [9, 10, 10, 10, 9],
      },
    ],
  },
  {
    name: "Cilindras",
    surname: "Katalizatorius",
    faculty: "Chemijos fakultetas",
    course: 2,
    modules: [
      {
        title: "Organinė chemija",
        credits: 6,
        marks: [6, 8, 9, 4, 8],
      },
      {
        title: "Inžinerinės medžiagos",
        credits: 3,
        marks: [9, 8, 7, 8, 10],
      },
      {
        title: "Entalpija ir Entropija",
        credits: 6,
        marks: [7, 8, 9, 10, 6],
      },
      {
        title: "Polimerų atmainos ir produktai",
        credits: 9,
        marks: [8, 9, 6, 4],
      },
      {
        title: "Pramoninė chemija",
        credits: 6,
        marks: [8, 7, 9, 5, 9],
      },
    ],
  },
  {
    name: "Grandinius",
    surname: "Varžauskas",
    faculty: "Elektros ir elektronikos fakultetas",
    course: 1,
    modules: [
      {
        title: "Matematika",
        credits: 6,
        marks: [8, 9, 9, 9, 9],
      },
      {
        title: "Elektos grandinės",
        credits: 6,
        marks: [8, 7, 9, 9, 10],
      },
      {
        title: "Elektros tinklai",
        credits: 6,
        marks: [9, 9, 8, 8, 10],
      },
      {
        title: "Braižyba",
        credits: 6,
        marks: [6, 8, 9, 8, 7],
      },
      {
        title: "Fizika",
        credits: 6,
        marks: [9, 9, 9, 10, 8],
      },
    ],
  },
];
console.groupCollapsed("pradinis Studentu masyvas");
console.table(students);
console.groupEnd();
console.log("");

/*
    1. Peržvelgti students masyvą, jeigu patogu susibraižyti ant lapo duoenų struktūras, kad būtų aiškiau kas kam priklauso.
    2. Peržiūrėti duomenis naršyklės konsolėje, jie pateikti naudojant console.table
    3. Pagal funkcijų aprašus implementuoti logiką ir pavaizduoti korektiška funkcijų veikimą.
      3.1 Naudoti Array.prototype metodus:
        3.1.1 - forEach
        3.1.2 - map
        3.1.3 - filter
        3.1.4 - reduce
        3.1.5 - sort
        3.1.6 - slice
  
    Užduotims atlikti galima patiems susigalvoti papildomas funkcijas, jas pasivadinti ir panaudoti.
    Taip pat galima ir labai skatintina naudoti jau aprašytas funkcijas kitų užduočių sprendimui. (Code reuse)
  */

//  / ----------- Pagalbines funkcijos --------------------------------------------
/**
 * calculates and returns average of given module
 * @param {object} module
 *
 * @return {number} - average of module
 */
function getModuleAverage(module) {
  let sum = 0;
  // console.log(module.marks);

  module.marks.forEach((mark) => {
    sum += mark;
  });
  let avg = sum / module.marks.length;
  return avg;
}
// console.log("getModuleAverage", students[0]);

/**
 * this returns all modules average of one student given as argument
 *
 * @param {obj} student
 *
 * @return {number} - average of module
 */
function getStudentModulesAverage(student) {
  let total = 0;
  // debugger;
  student.modules.forEach(function (module) {
    total += getModuleAverage(module);
  });
  let avg = total / student.modules.length;
  // Math.round(num * 100) / 100
  return Math.round(avg * 100) / 100;
}
function getStudentModulesAverageReduce(student) {
  // debugger;
  let avg = student.modules.reduce(
    (avg, currentVal) =>
      avg + getModuleAverage(currentVal) / student.modules.length,
    0
  );
  // Math.round(num * 100) / 100
  return Math.round(avg * 100) / 100;
}
console.log("getStudentModulesAverage", getStudentModulesAverage(students[0]));
console.log(
  "getStudentModulesAverageReduce",
  getStudentModulesAverageReduce(students[0])
);

// console.log("getStudentModulesAverage", students[0].modules);
// getStudentModulesAverage(students[0]);

/**
 * Returns array of students that are in given @facultyName faculty
 *
 * @param {string} facultyName
 * @returns {array} array of filtered students
 */
function selectSutudensOfGivenFaculty(facultyName) {
  return students.filter(function (studentObj) {
    return studentObj.faculty === facultyName;
  });
}

/**
 * Selects faculty students defined by @param course
 *
 * @param {number} course
 * @param {array} studensArr
 * @returns {array} selected students
 */
function selectStudentsByCourse(course, studensArr) {
  // pasitikrinti ar course yra 1-4
  if (course > 4 || course < 1) {
    console.error("Kurso reiksme turetu buti 1-4");
    // nutraukiam tolimesti funkcijos vygdyma
    return;
  }

  let antroKursStud = studensArr.filter(function (student) {
    // reikia grazinti true kai studentas yra 2 kurso
    if (student.course === course) {
      return true;
    } else {
    }
  });
  return antroKursStud;
}

//  / ------------------------ Užduočių atlikimas ---------------------------------------
//
// 1. Suskaičiuojame ir atrenkame į naują masyvą, visų studentų vidurkius
function getAllAverages(masyvasKurioVidurkiSkaiciuojam) {
  // gauti vieno modulio vidurki
  // gauta visu moduliu vidurki sudeti i masyva
  return masyvasKurioVidurkiSkaiciuojam.map(function (student) {
    // gauti visu moduliu vidurki
    return getStudentModulesAverage(student);
  });
}
let allAverages = getAllAverages(students);

// 2. Atrenkame visus Informatikos fakulteto studentus // filter

// funkcija
// filtruojam studentu masyva
// ir jei studentas yra Informatikos fakulteto studentas mes norim grazinti kaip reiksme
// jei ne tai ne

let infoFacultyStudents = selectSutudensOfGivenFaculty(
  "Informatikos fakultetas"
);

// 3. Atrenkame visus Chemijos fakulteto studentus

let chemFacultyStudents = selectSutudensOfGivenFaculty("Chemijos fakultetas");

// 4. Atrenkame visus Elektros ir elektronikos fakulteto studentus

let electroFacultyStudents = selectSutudensOfGivenFaculty(
  "Elektros ir elektronikos fakultetas"
);

// 5. Atrenkame visų Informatikos fakulteto studentų vidurkius
function getInfoFakAvg() {
  // pirma issviltruoti kad gauti tik Inf fak studentus
  let infoStudents = selectSutudensOfGivenFaculty("Informatikos fakultetas");
  // paskaiciuoti issfiltruoto masyvo studentu vidurkius
  let averagesInfoFak = getAllAverages(infoStudents);
  return averagesInfoFak;
}
let infoFakAvgArr = getInfoFakAvg();

// 6. Atrenkame visų Chemijos fakulteto studentų vidurkius
function getChemFakAvg() {
  // atrinkti studentus
  let chemStudents = selectSutudensOfGivenFaculty("Chemijos fakultetas");
  // console.log("chemStudents", chemStudents);
  // paskaiciuojam vidurkius
  let avgArr = getAllAverages(chemStudents);
  return avgArr;
}
let chemStudAvg = getChemFakAvg();

// 7. Atrenkame visų Elektros ir elektronikos fakulteto studentų vidurkius
function getStudentAveragesByFak(faculty) {
  let fakStudents = selectSutudensOfGivenFaculty(faculty);
  return getAllAverages(fakStudents);
}
let elecFakStudentsAvg = getStudentAveragesByFak(
  "Elektros ir elektronikos fakultetas"
);

// 8 grazinti objektu masyva kuriame butu vardas ir vidurkis
// { name: 'james', avg: 7.8}

function studNameAndAvg() {
  let res = students.map(function (studObj) {
    // console.log(
    //   "vardas",
    //   studObj.name,
    //   "vidurkis:",
    //   getStudentModulesAverage(studObj)
    // );
    return {
      name: studObj.name,
      avg: getStudentModulesAverage(studObj),
    };
  });
  return res;
}
let studNameAndAvgResult = studNameAndAvg();

// 9 grazinti tik studentus kuriu vidurkiai yra aukstesni uz 8
// grazinti varda fakulteta ir vidurki
function getAllGoodStudens() {
  // isviltruoti studentus kuriu vidurkiai didesni ux 8
  let goodStudArr = students.filter(
    (studObj) => getStudentModulesAverage(studObj) > 8
  );
  console.log("goodStudArr", goodStudArr);

  // per isfiltruota masyva sukam map ir grazinam farda fakulteta ir vidurki
  let above8stud = goodStudArr.map((studObj) => {
    return `${studObj.name} ${studObj.faculty}, ${getStudentModulesAverage(
      studObj
    )}`;
  });
  return above8stud;
}
let above8 = getAllGoodStudens();

// 11 uzduotis parasyti funkcija kuri grazina tik 2 kurso studentus
function getSecondCouresStudArr() {
  let antroKursStud = students.filter(function (student) {
    // reikia grazinti true kai studentas yra 2 kurso
    if (student.course === 2) {
      return true;
    }
    // return student.course === 2;
  });

  return antroKursStud;
}
let secondCouresStudArr = getSecondCouresStudArr();

// 11a funkcija kuria grazina argumentu paduoto kurso studentus ir argumentu pasiima stud masyva
let firstCouseStudens = selectStudentsByCourse(1, students);

// 11b apriboti argumento reiksme kad galimos yra tik 1-4 jei paduodama reksme uz situ reziu
// console.error pranesame kad tokia reiksme negalima
let fithCouseStudens = selectStudentsByCourse(4, students);

// 10 isrikiuoti 8 puntu gauna masyva pagal varda, ir pagal vidurki

//  ========================= Rezultatai ==============================
/**
 * Checks if given @param data has any values
 * if data is null, undefined, [], {} then we consider it empty
 *
 * @param {mixed} data
 *
 * @returns {boolean} true / false
 */
function isEmpty(data) {
  if (data === null || data === undefined || data.length === 0) return true;
  // patikrinti ar tai yra objektas
  // Objeck.keys({}) grazina masyva su objekto raktu reiksmem
  // galima naudoti JSON.stringify({})
  if (data.constructor === Object && Object.keys(data).length === 0)
    return true;
  return false;
}

// printType default reiksme kuri naudojamas jei nepaduota isskviecian funkcija
function printMe(header, data, printType = "log") {
  console.group(header);
  // patikrinti ar data turi duomenu
  if (!isEmpty(data)) {
    // apriboti kad printType galetu buti tik 'log', 'table', 'warn'
    if (["log", "table", "warn"].includes(printType)) console[printType](data);
    else console.error(printType + " tokio spausdinimo tipo nepalaikome");
  } else {
    console.warn("Duomenu nera");
  }
  console.groupEnd();
  console.log("");
}

console.warn(allAverages);
allAverages = {};

printMe(
  "1. Suskaičiuojame ir atrenkame į naują masyvą, visų studentų vidurkius",
  allAverages
);

printMe(
  " 2. Atrenkame visus Informatikos fakulteto studentus // filter",
  infoFacultyStudents,
  "table"
);

printMe(
  "3. Atrenkame visus Chemijos fakulteto studentus // filter",
  chemFacultyStudents,
  "table"
);

printMe(
  " 4. Atrenkame visus Elektros ir elektronikos fakulteto studentus // filter",
  electroFacultyStudents,
  "table"
);

printMe(
  "5. Atrenkame visų Informatikos fakulteto studentų vidurkius",
  infoFakAvgArr
);

printMe("6. Atrenkame visų Chemijos studentų vidurkius", chemStudAvg);

printMe(
  "7. Atrenkame visų Elektronikos studentų vidurkius",
  elecFakStudentsAvg
);

printMe("8. vardas ir vidurkis", studNameAndAvgResult);

printMe("9. Geri studentai", above8);

printMe("11. Antro kurso studentai", secondCouresStudArr);

printMe("11a. Pirmo kurso studentai", firstCouseStudens);

printMe("11b. Negalimo kurso studentai", fithCouseStudens);

console.group(
  "10 isrikiuoti 8 puntu gauna masyva pagal varda, ir pagal vidurki"
);
console.table(studNameAndAvgResult);
studNameAndAvgResult.sort((a, b) => b.avg - a.avg);
console.table(studNameAndAvgResult);
// rikiuoja pagal varda
studNameAndAvgResult.sort((a, b) => {
  return a.name > b.name ? -1 : 1;
});
console.table(studNameAndAvgResult);

console.groupEnd();
console.log("");
