var person = {
  firstName: 'Mihaela',
  lastName: 'Vlad',
  email: 'mihaela.c.vlad@gmail.com',
  birthYear: 1998,
  pets: [
    { name: 'Ozz', species: 'dragon', age: 177 },
    { name: 'Azazel', species: 'demon', age: 777 },
    { name: 'Sparkle', species: 'butterfly', age: 8 },
  ],
  zipCode: '292929',
};
var difference = -152;
var petName = 'Ozz';

// Afiseaza propozitia “ firstName, pet1, pet2, pet3 locuiesc toti in aceeasi casa”
// (folosind bracket notation pe arrayul pets)
var li01 = document.getElementById('prop01');
li01.innerText =
  person.firstName +
  ', ' +
  person.pets[0].name +
  ', ' +
  person.pets[1].name +
  ', ' +
  person.pets[2].name +
  ' locuiesc in aceeasi casa';

// Calculeaza si afiseaza diferenta de varsta dintre animalul de pe pozitia 0 si cel de pe pozitia 2.
var li02 = document.getElementById('prop02');
li02.innerText = person.pets[0].age - person.pets[2].age;

// Afiseaza propozitia: “Ma numesc xxx yyy, m-am nascut in birthYear si codul meu postal este: zipCode”
var li03 = document.getElementById('prop03');
li03.innerText =
  'Ma numesc ' +
  person.firstName +
  ' ' +
  person.lastName +
  ', m-am nascut in ' +
  person.birthYear +
  ' si codul meu postal este: ' +
  person.zipCode;

// Afiseaza propozitia: “Animalele mele s-au nascut in xxxx, xxx, respectiv xxx.”
// Foloseste anul curent pentru a efectua scaderea.
var li04 = document.getElementById('prop04');
li04.innerText =
  'Animalele mele s-au nascut in ' +
  (2022 - person.pets[0].age) +
  ', ' +
  (2022 - person.pets[1].age) +
  ', respectiv ' +
  (2022 - person.pets[2].age) +
  '.';

console.warn(
  `Afiseaza propozitia: “Numele meu este: xxx yyy si am x animale.”. Nu uita de proprietatea length a arrayului pets.`,
);
console.log(
  'Numele meu este: ' +
    person.firstName +
    ' ' +
    person.lastName +
    ' si am ' +
    person.pets.length +
    ' animale.',
);

console.warn(`Afiseaza propozitia: “Am acelasi email din copilarie: xxx.”.`);
console.log('Am acelasi email din copilarie: ' + person.email + '.');

console.warn(
  `Afiseaza propozitia: “Unul din cele x animale ale mele este species si are age ani.”`,
);
console.log(
  'Unul din cele ' +
    person.pets.length +
    ' animale ale mele este ' +
    person.pets[1].species +
    ' si are ' +
    person.pets[1].age +
    ' ani.',
);

console.warn(
  `Calculeaza si afiseaza (folosind anul curent) anul de nastere al animalului de pe pozitia 2.`,
);
console.log((2022 - person.pets[2].age).toString());

console.warn(
  `Calculeaza si salveaza in variabila difference diferenta de ani dintre persoana si animalul de pe pozitia
  0 si afiseaza aceasta diferenta. Foloseste anul curent.`,
);
console.log((2022 - person.birthYear - person.pets[0].age).toString());

console.warn(
  `Afiseaza propozitia: “Intre firstName si petName este o diferenta de difference ani.”`,
);
console.log(
  'Intre ' +
    person.firstName +
    ' si ' +
    petName +
    ' este o diferenta de ' +
    difference +
    ' ani.',
);

console.warn(
  `Afiseaza propozitia: “Intre Mihaela si Ozz este o diferenta de 152 ani”`,
);
console.log(
  'Intre ' +
    person.firstName +
    ' si ' +
    petName +
    ' este o diferenta de ' +
    difference +
    ' ani.',
);

console.warn(`Afiseaza 152 diferenta de varsta dintre Mihaela si Ozz`);
console.log(difference.toString());

console.warn(`Sparkle age`);
console.log((`${new Date().getFullYear()}` - person.pets[2].age).toString());
