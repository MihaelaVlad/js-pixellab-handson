function calculateSurface(width, length) {
  if (arguments.length === 2) {
    return width * length;
  } else {
    return width ** 2;
  }
}

console.warn(
  `
  Creeaza un wrapper numit calculateSquareSurface()
  pentru calculateSurface() care sa primeasca un singur
  parametru si sa calculeze suprafata unui patrat.
  `,
);
function calculateSquareSurface(width) {
  return calculateSurface(width);
}

console.warn(
  `
  Cu metoda noua calculeaza suprafata unui patrat de 4 pe 4.
  `,
);
console.log(calculateSquareSurface(4));

console.warn(
  `
  Creeaza un wrapper numit calculateRectangleSurface()
  pentru calculateSurface() care sa primeasca doi parametrii
  si sa calculeze suprafata unui dreptunghi.
  `,
);
function calculateRectangleSurface(width, length) {
  return calculateSurface(width, length);
}

console.warn(
  `
  Cu metoda noua calculeaza suprafata unui dreptunghi de 8 pe 9.
  `,
);
let rectangleSurface = calculateRectangleSurface(8, 9);
console.log(rectangleSurface);
