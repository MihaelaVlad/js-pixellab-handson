var number = prompt('Introdu un numar:');
var maxNumber = prompt(
  'Introdu un numar pana la care sa numere bucla si sa afiseze multiplii:',
);

for (var i = 1; i <= maxNumber; i++) {
  console.log(i);

  if (i % number !== 0) {
    continue;
  }

  console.log(`Acest numar este multiplu de ${number}.`);
}
