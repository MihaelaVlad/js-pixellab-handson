// var i = 1;

// do {
//   console.log(i);

//   i++;
// } while (i < 100);

// var i = 1;

// do {
//   if (i > 50) {
//     i++;

//     break;
//   }

//   console.log(i);
//   i++;
// } while (i < 100);

// var i = 1;
// do {
//   console.log(i);

//   i++;
// } while (i < 53);

// var i = 1;
// do {
//   console.log(i);

//   i++;
// } while (i <= 51);

// Folosind keywordul break opreste bucla atunci cand numarul este egal cu 12 (dar afiseaza-l)
// var i = 1;
// do {
//   if (i > 12) {
//     i++;

//     break;
//   }

//   console.log(i);
//   i++;
// } while (i < 100);

// Folosind keywordul continue afiseaza doar numerele impare intre 8 si 32.
// var i = 8;
// do {
//   if (i % 2 === 0) {
//     i++;

//     continue;
//   }
//   console.log(i);
//   i++;
// } while (i <= 32);

// Folosind metoda prompt de trei ori cere utilizatorului un numar, o limita inferioara si o limita
// superioara apoi afiseaza toti multiplii de numar intre limita inferioara si limita superioara introduse.
var number = prompt('Introdu un numar:');
var minNumber = prompt(
  'Introdu un numar minim de la care sa inceapa afisarea:',
);
var maxNumber = prompt(
  'Introdu un numar maxim pana la care sa se sfarseasca afisarea multiplilor:',
);
var i = minNumber;
do {
  if (i % number !== 0) {
    i++;

    continue;
  }
  console.log(i);
  i++;
} while (i <= maxNumber);
