var person = {
  name: 'Mihaela',
  surname: 'Vlad',
  age: 24,
  petOwner: true,
  skills: [
    'html',
    'javascript',
    'css',
    'java',
    'c++',
    'nodejs',
    'jquery',
    'node',
  ],
  friends: [
    {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },
    {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31,
    },
    {
      name: 'Carol',
      surname: 'Carolson',
      age: 29,
    },
  ],
};

console.warn(
  `Folosind obiectul person si un for, afiseaza in consola skillurile de pe pozitiile pare ale arrayului.`,
);
for (var i = 0; i < person.skills.length; i++) {
  var skill = person.skills[i];

  if (i % 2 === 0) {
    console.log(skill);
  }
}

console.warn(`In mod similar, afiseaza skillurile care NU incep cu j.`);
for (var i = 0; i < person.skills.length; i++) {
  var skill = person.skills[i];

  if (skill[0] !== 'j') {
    console.log(skill);
  }
}

console.warn(
  ` Folosind un for afiseaza propozitia: "Prietenii mei se numesc xxx yyy, xxx yyy, xxx yyy.`,
);
var message = 'Prietenii mei se numesc: ';
for (var i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];
  var punctuation = ', ';

  if (i === person.friends.length - 1) {
    punctuation = '.';
  }
  message = message + friend.name + ' ' + friend.surname + punctuation;
}
console.log(message);

console.warn(
  `
  Folosind un for, afiseaza numarul total de ani pe care il au persoanele din arrayul
  friends, doar daca varsta este mai mare sau egala cu 30 de ani.
  `,
);
var sumAge = 0;
for (var i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];

  if (friend.age >= 30) {
    sumAge = sumAge + friend.age;
  }
}
console.log(sumAge.toString());

console.warn(
  `
  Folosind un for, afiseaza suma anilor de nastere ale persoanelor.
  `,
);
var currentYear = 2022;
var sumYears = 0;
for (var i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];

  sumYears = sumYears + currentYear - friend.age;
}
console.log(sumYears.toString());

console.warn(
  `
  Afiseaza diferenta de varsta dintre persoana si prietenii din arrayul
  friends doar daca aceasta este mai mare de 2 ani.
  `,
);
for (var i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];
  var ageDiff = Math.abs(person.age - friend.age);

  if (ageDiff > 2) {
    console.log(Math.abs(person.age - friend.age));
  }
}

console.warn(
  `
  Afiseaza fraza: "Intre Mihaela si Larry este o diferenta de xx ani. Intre Mihaela si Steven... ".
  Repeta pentru tot arrayul friends.
  `,
);
var message = '';
for (var i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];
  var ageDiff = Math.abs(person.age - friend.age);

  message +=
    'Intre ' +
    person.name +
    ' si ' +
    friend.name +
    ' este o diferenta de ' +
    ageDiff +
    ' ani. ';
}
console.log(message.trim());

console.warn(
  `
    Afiseaza fraza “Prietenii mei sunt: xxx yyy, xxx yyy, xxx yyy.”
    in ordine inversa a arrayului de prieteni. (Numarand de la length la 0).
  `,
);
var message = 'Prietenii mei sunt: ';
for (var i = person.friends.length - 1; i >= 0; i--) {
  var friend = person.friends[i];
  var punctuation = ', ';

  if (i === 0) {
    punctuation = '.';
  }

  message += friend.name + ' ' + friend.surname + punctuation;
}
console.log(message);

console.warn(
  `
  Afiseaza fraza: "Intre Mihaela si Larry este o diferenta de xx ani.
  Intre Mihaela si Steven... ", doar daca varsta prietenului este impara.
  `,
);
var message = '';
for (var i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];
  var ageDiff = Math.abs(person.age - friend.age);

  if (friend.age % 2 !== 0) {
    message =
      'Intre ' +
      person.name +
      ' si ' +
      friend.name +
      ' este o diferenta de ' +
      ageDiff +
      ' ani.';

    console.log(message);
  }
}

console.warn(
  `
  Folosind proprietatea length a arrayului skills si o bucla for, afiseaza in ordine inversa elementele
  arrayului skills. Atentie, va trebui sa numeri invers, de la length la 0.
  `,
);
for (var i = person.skills.length - 1; i >= 0; i--) {
  var skills = person.skills[i];

  console.log(skills);
}

console.warn(
  `
  Folosind obiectul person si un for, afiseaza in consola skillurile pe care le are persoana
  `,
);
for (var i = 0; i < person.skills.length; i++) {
  var skills = person.skills[i];

  console.log(skills);
}

console.warn(
  `
  In mod similar, afiseaza skillurile care incep cu c
  `,
);
for (var i = 0; i < person.skills.length; i++) {
  var skills = person.skills[i];

  if (skills[0] === 'c') {
    console.log(skills);
  }
}

console.warn(
  `
  Folosind un for afiseaza propozitia: "Numele de familie ale prietenilor mei sunt: xxx, xxx, xxx."
  `,
);
var message = 'Numele de familie ale prietenilor mei sunt: ';
for (var i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];
  var punctuation = ', ';

  if (i === person.friends.length - 1) {
    punctuation = '.';
  }

  message = message + friend.surname + punctuation;
}
console.log(message);

console.warn(
  `
  Folosind un for, afiseaza numarul total de ani pe care il au persoanele din arrayul friends
  `,
);
var sumAge = 0;
for (var i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];

  sumAge += friend.age;
}
console.log(sumAge.toString());

console.warn(
  `
  Afiseaza diferenta de varsta dintre persoana si prietenii din arrayul friends.
  `,
);
var ageDiff = 0;
for (var i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];
  var ageDiff = Math.abs(person.age - friend.age);

  console.log(ageDiff.toString());
}

console.warn(
  `
  Afiseaza diferenta de varsta dintre persoana si Carol.
  `,
);
var ageDiff = 0;
var friend = person.friends[2];
var ageDiff = Math.abs(person.age - friend.age);

console.log(`Diferenta de varsta este: ${ageDiff.toString()}.`);

console.log(`${person.skills[0]} se afla pe indexul 0 al arrayului.`);

console.log(`${person.skills[2]} se afla pe indexul 2 al arrayului.`);

console.log(`${person.skills[4]} se afla pe indexul 4 al arrayului.`);

console.log(`${person.skills[6]} se afla pe indexul 6 al arrayului.`);

console.log(`Tehnologia ${person.skills[0]} nu incepe cu j!`);

console.log(`Tehnologia ${person.skills[2]} nu incepe cu j!`);

console.log(`Tehnologia ${person.skills[4]} nu incepe cu j!`);

console.log(`Tehnologia ${person.skills[5]} nu incepe cu j!`);

console.log(`Tehnologia ${person.skills[7]} nu incepe cu j!`);

var sumAge = 0;
for (var i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];

  if (friend.age >= 30) {
    sumAge = sumAge + friend.age;
  }
}
console.log(
  `Suma varstelor persoanelor peste 30 de ani este: ${sumAge.toString()}.`,
);

var currentYear = 2023;
var sumYears = 0;
for (var i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];

  sumYears = sumYears + currentYear - friend.age;
}
console.log(`Suma anilor de nastere este: ${sumYears.toString()}.`);

console.warn(
  `
  Afiseaza fraza: "Intre Mihaela si Larry este o diferenta de xx ani. Intre Mihaela si Steven... ".
  Repeta pentru tot arrayul friends.
  `,
);
var message = '';
var friend = person.friends[0];
var ageDiff = Math.abs(person.age - friend.age);
message = 'Diferenta de varsta mai mare de 2 ani este ' + ageDiff + '.';
console.log(message);

var friend = person.friends[1];
var ageDiff = Math.abs(person.age - friend.age);
message = 'Diferenta de varsta mai mare de 2 ani este ' + ageDiff + '.';
console.log(message);

var friend = person.friends[2];
var ageDiff = Math.abs(person.age - friend.age);
message = 'Diferenta de varsta mai mare de 2 ani este ' + ageDiff + '.';
console.log(message);

var message = '';
for (var i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];
  var ageDiff = Math.abs(person.age - friend.age);

  if (ageDiff === 7 || ageDiff <= 5) {
    message +=
      'Intre ' +
      person.name +
      ' si ' +
      friend.name +
      ' este o diferenta de ' +
      ageDiff +
      ' ani. ';
  }
}
console.log(message.trim());

console.log(
  `Tehnologia ${person.skills[0]} are ${person.skills[0].length} caractere.`,
);

console.log(
  `Tehnologia ${person.skills[1]} are ${person.skills[1].length} caractere.`,
);

console.log(
  `Tehnologia ${person.skills[2]} are ${person.skills[2].length} caractere.`,
);

console.log(
  `Tehnologia ${person.skills[3]} are ${person.skills[3].length} caractere.`,
);

console.log(
  `Tehnologia ${person.skills[4]} are ${person.skills[4].length} caractere.`,
);

console.log(
  `Tehnologia ${person.skills[5]} are ${person.skills[5].length} caractere.`,
);

console.log(
  `Tehnologia ${person.skills[6]} are ${person.skills[6].length} caractere.`,
);

console.log(
  `Tehnologia ${person.skills[7]} are ${person.skills[7].length} caractere.`,
);

console.log(
  `Tehnologia ${person.skills[2]} incepe cu litera "${person.skills[2].slice(
    0,
    1,
  )}".`,
);

console.log(
  `Tehnologia ${person.skills[4]} incepe cu litera "${person.skills[4].slice(
    0,
    1,
  )}".`,
);

var message = '';
var friend = person.friends[0];
var ageDiff = Math.abs(person.age - friend.age);
message = 'Diferenta de varsta este: ' + ageDiff + '.';
console.log(message);

var friend = person.friends[1];
var ageDiff = Math.abs(person.age - friend.age);
message = 'Diferenta de varsta este: ' + ageDiff + '.';
console.log(message);
