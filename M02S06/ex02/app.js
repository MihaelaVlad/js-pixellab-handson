const arguments = process.argv;
const [, , ...restOfArguments] = arguments;
const side = restOfArguments[0];

console.log(`Suprafata patratuluieste de ${side ** 2}`);
