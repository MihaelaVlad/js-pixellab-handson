const calculateRectangleArea = (width, height) => {
  return width * height;
};

console.warn(
  `
  Calculeaza suprafata de tapet necesara pentru o camera
  de 6 pe 4 m cu tavan inalt de 2.5m, stiind ca exista
  o usa de 2.2 pe 1.5 si o suprafata de ferestre de 2 pe 1.5.
  “Suprafata de tapet necesara este: xxx metri patrati.”
  `,
);
const longWallSurface = calculateRectangleArea(6, 2.5);
const shortWallSurface = calculateRectangleArea(4, 2.5);
const totalWallSurface = (longWallSurface + shortWallSurface) * 2;
const doorSurface = calculateRectangleArea(1.5, 2.2);
const widowSurface = calculateRectangleArea(2, 1.5);
const requireSurface = totalWallSurface - doorSurface - widowSurface;

console.log(`Suprafata de tapet este: ${requireSurface} metri patrati.`);

console.warn(
  `
  Creaza o functie wrapper numita calculateSquareArea()
  pentru calculateRectangleArea() care sa primeasca ca
  parametru latura unui patrat si sa calculeze suprafata acestuia.
  O functie wrapper este o functie care “imbraca” o
  functie existenta pentru a-i aduce imbunatatiri, extra cod
  sau pentru a-i limita in mod intentionat capacitatile.
  `,
);
const calculateSquareArea = (length) => {
  return calculateRectangleArea(length, length);
};

console.warn(
  `
  Calculeaza suprafata de tapet necesara pentru o camera
  de 12 pe 9 m cu tavan inalt de 2.5m, stiind ca exista
  o usa de 3 pe 2 si o suprafata de ferestre de 3 pe 2.
  “Suprafata de tapet necesara este xxx metri patrati.”
  `,
);
const longWall2Surface = calculateRectangleArea(12, 2.5);
const shortWall2Surface = calculateRectangleArea(9, 2.5);
const totalWall2Surface = (longWall2Surface + shortWall2Surface) * 2;
const door2Surface = calculateRectangleArea(2, 3);
const window2Surface = calculateRectangleArea(3, 2);
const require2Surface = totalWall2Surface - door2Surface - window2Surface;

console.log(
  `Suprafata de tapet necesara este: ${require2Surface} metri patrati.`,
);

console.warn(
  `
  Creaza o functie wrapper pentru calculateRectangleArea()
  care sa primeasca 4 parametrii: latimea si lungimea unui
  dreptunghi initial, apoi latimea si lungimea altui dreptunghi.
  Functia se va numi aggregateSurfaceArea().
  `,
);
const aggregateSurfaceArea = (
  rectangle1length,
  rectangle1width,
  rectangle2length,
  rectangle2width,
) => {
  const rectangle1 = calculateRectangleArea(rectangle1length, rectangle1width);
  const rectangle2 = calculateRectangleArea(rectangle2length, rectangle2width);
  return rectangle1 + rectangle2;
};

console.warn(
  `
  Folosind aceasta noua functie calculeaza suprafata totala
  a doua dreptunghiuri de 48 pe 92 si 51 pe 102.
  `,
);
const totalRectangleSurface = aggregateSurfaceArea(48, 92, 51, 102);
console.log(totalRectangleSurface);
