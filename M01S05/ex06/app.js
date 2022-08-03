const person = {
  getName: function () {
    return 'Mihaela Vlad';
  },
  getAge: function () {
    return 24;
  },
};

function accessor(methodSuffix) {
  const methodName = `get${methodSuffix}`;

  return person[methodName]();
}

console.log(accessor('Name'));

console.warn(
  `
  Folosind accesorul salveaza numele mic al persoanei
  intr-o variabila si foloseste-l in propozitia: “Eu sunt xxx.”
`,
);
const fullName = accessor('Name');
console.log(`Eu sunt ${fullName}.`);

console.warn(
  `
  Afiseaza anul de nastere al persoanei folosind anul curent.
  `,
);
const currentYear = new Date().getFullYear();
const birthYear = currentYear - accessor('Age');
console.log(birthYear.toString());

console.warn(
  `
  Afiseaza propozitia “Ma numesc xxx yyy, am aa ani si m-am nascut in anul aaaa.”
  `,
);
console.log(
  `Ma numesc ${accessor('Name')}, am ${accessor(
    'Age',
  )} ani si m-am nascut in anul ${birthYear}.`,
);
