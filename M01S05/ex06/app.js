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

console.warn(
  `
  Folosind accesorul afiseaza numele persoanei.
  `,
);
console.log(`${accessor('Name')}`);

console.warn(
  `
  Afiseaza varsta persoanei.
  `,
);
console.log(`${accessor('Age')}`);

console.warn(
  `
  Afiseaza anul de nastere al persoanei folosind anul curent.
  Intr-o propozitie de forma “M-am nascut in 1987.”
  `,
);
console.log(`M-am nascut in ${birthYear}.`);

console.warn(
  `
  Afiseaza propozitia “Ma numesc xxx yyy si am aa ani!”
  `,
);
console.log(`Ma numesc ${accessor('Name')} si am ${accessor('Age')} ani!`);
