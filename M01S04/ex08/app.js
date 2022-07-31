// var i = 1;

// while (i < 100) {
//   console.log(i);

//   i++;
// }

// Folosind keywordul break opreste bucla
// atunci cand numarul este egal cu 50 (dar afiseaza-l).
// var i = 1;

// while (i < 100) {
//   if (i > 50) {
//     i++; // <- important

//     break;
//   }

//   console.log(i);

//   i++;
// }

// var i = 1;

// while (i < 68) {
//   console.log(i);

//   i++;
// }

// var i = 1;

// while (i < 67) {
//   console.log(i);

//   i++;
// }

// Folosind keywordul break opreste bucla atunci cand numarul
// este egal cu 12 (dar afiseaza-l).
// var i = 1;

// while (i < 100) {
//   if (i === 12) {
//     i++;
//     break;
//   }

//   console.log(i);

//   i++;
// }

// Folosind keywordul continue afiseaza doar numerele pare intre 1 si 32 (inclusiv).
// var i = 1;

// while (i <= 32) {
//   if (i % 2 !== 0) {
//     i++;

//     continue;
//   }

//   console.log(i);

//   i++;
// }

// Folosind metoda prompt de doua ori cere utilizatorului un numar si o limita superioara
//  apoi afiseaza toti multiplii de numar intre 5 si limita superioara introduse.

var number = prompt('Introdu un numar:');
var maxNumber = prompt(
  'Introdu un numar pana la care sa se afiseze multiplii:',
);
var i = 5;
while (i <= maxNumber) {
  if (i % number !== 0) {
    i++;

    continue;
  }

  console.log(i);

  i++;
}
