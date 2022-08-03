var person = {
  firstName: 'Mihaela',
  lastName: 'Vlad',
  birthYear: 1998,
  pets: [
    {
      name: 'Twix',
      species: 'papagal',
      age: 4,
    },
    {
      name: 'Mars',
      species: 'caine',
      age: 2,
    },
    {
      name: 'Bounty',
      species: 'hamster',
      age: 4,
    },
    {
      name: 'Lion',
      species: 'pisica',
      age: 10,
    },
  ],
};

console.warn(
  `
  Afiseaza in consola folosind metoda forEach() numele fiecarui animal.
  `,
);

Object.keys(person.pets).forEach(function (keyName) {
  var pet = person.pets[keyName];
  console.log(`${pet.name}`);
});

console.warn(
  `
  Folosind o bucla for afiseaza suma anilor animalelor.
  `,
);
var sumAge = 0;
for (var i = 0; i < person.pets.length; i++) {
  var pet = person.pets[i];

  sumAge += pet.age;
}
console.log(sumAge);

var totalAge = 0;
Object.keys(person.pets).forEach(function (keyName) {
  var pet = person.pets[keyName];
  totalAge += pet.age;
});
console.log(totalAge);

console.warn(
  `
  Folosind forEach() afiseaza cate una pe linie propozitiile:
  “Twix este papagal si are 4 ani. Mars este caine si are… etc”.
  `,
);
Object.keys(person.pets).forEach(function (keyName) {
  var pet = person.pets[keyName];

  console.log(`${pet.name} este ${pet.species} si are ${pet.age} ani.`);
});

console.warn(
  `Folosind o bucla for afiseaza cate una pe linie propozitiile:
  “Intre Mihaela si Twix este o diferenta de xx ani.
  Intre Mihaela si Mars… ” (repeta pentru toate intrarile din array).`,
);
var currentYear = 2022;
for (var i = 0; i < person.pets.length; i++) {
  var pet = person.pets[i];
  var ageDiff = Math.abs(currentYear - person.birthYear - pet.age);

  var message =
    'Intre ' +
    person.firstName +
    ' si ' +
    pet.name +
    ' este o diferenta de ' +
    ageDiff +
    ' ani.';

  console.log(message);
}

console.warn(
  `
  Folosind o bucla for afiseaza in ordine inversa numele
  animalelor din array sub forma de propozitii:
  “Animalul meu se numeste xxxx.”.
  `,
);

for (var i = person.pets.length - 1; i >= 0; i--) {
  var pet = person.pets[i];
  var message = 'Animalul meu se numeste ';
  message += pet.name;

  console.log(message);
}

console.warn(
  `
  Folosind o bucla for afla care este cel mai in varsta animal
  si afiseaza propozitia: “xxx este cel mai batran animal pe care il am,
  dar intre noi este o diferenta de xx ani.
  `,
);
var ageDiff = 0;
var petAge = 0;
var currentYear = 2022;
for (var i = 0; i < person.pets.length; i++) {
  var pet = person.pets[i];
  var myAge = currentYear - person.birthYear;

  if (petAge < pet.age) {
    petAge = pet.age;
    var ageDiff = Math.abs(myAge - petAge);
  }

  var message = `${pet.name} este cel mai batran animal pe care il am, dar intre noi este o diferenta de ${ageDiff} ani.`;
}
console.log(message);

console.warn(
  `
  Folosind o bucla forEach afiseaza propozitia:
  “Am papagal, caine, hamster si pisica.”.
  `,
);
var message = 'Am ';
Object.keys(person.pets).forEach(function (keyName, index, keys) {
  var pet = person.pets[keyName];
  var punctuation = ', ';

  if (index === keys.length - 1) {
    punctuation = '.';
  }

  if (index === keys.length - 2) {
    punctuation = ' si ';
  }

  message += `${pet.species}${punctuation}`;
});
console.log(message);
