// Adauga o proprietate booleana numita isTrunkOpen
// si asigneaza-i valoarea false.
// Adauga metode numite openTrunk() si closeTrunk()
// care sa seteze proprietatea isTrunkOpen pe true, respectiv false.
// Adauga o proprietate booleana numita areLightsOn si
// asigneaza-i valoarea false.
// Adauga metode numite turnLightsOn() si turnLightsOff()
// care sa manipuleze valoarea.
// Adauga o metoda numita flashLights() care sa apeleze cele
// doua metode in succesiune, folosind metoda window.setTimeout().

const car = {
  make: 'Audi',
  color: 'black',
  wheels: 4,
  speed: 50,
  topSpeed: 160,
  topReverseSpeed: -50,
  isTrunkOpen: false,
  areLightsOn: false,

  accelerate: function () {
    this.speed++;
  },
  decelerate: function () {
    this.speed--;
  },

  openTrunk: function () {
    this.isTrunkOpen = true;
  },
  closeTrunk: function () {
    this.isTrunkOpen = false;
  },

  turnLightsOn: function () {
    this.areLightsOn = true;
  },
  turnLightsOff: function () {
    this.areLightsOn = false;
  },

  setSpeed: function (speed) {
    if (speed > this.topSpeed) {
      this.speed = this.topSpeed;

      return;
    }

    if (speed < this.topReverseSpeed) {
      this.speed = this.topReverseSpeed;

      return;
    }

    this.speed = speed;
  },

  stop: function () {
    this.speed = 0;
  },

  flashLights: function () {
    this.turnLightsOn();
    //handling 'this' keyword lost reference
    // oldschool
    const self = this;

    setTimeout(function () {
      self.turnLightsOff();
    }, 5000);
  },
};

// Adauga  o metoda numita setSpeed() care sa poata primi un parametru fix pentru viteza.
// Metoda trebuie sa verifice ca nu se depasesc limitele inferioare si superioare, caz in
// care se folosesc proprietatile topSpeed si topReverseSpeed

console.warn(
  `
  Afiseaza propozitia: "Masina era marca make si se deplasa cu speed km/h.".
  `,
);
console.log(
  `Masina era marca ${car.make} si se deplaseaza cu ${car.speed} km/h.`,
);

console.warn(
  `
  Decelereaza masina cu 5 unitati apoi afiseaza propozitia: "Viteza noua este speed km/h".
  `,
);
for (i = 0; i < 5; i++) {
  car.decelerate();
}

console.log(`Viteza noua este de ${car.speed} km/h.`);

console.warn(
  `
  Adauga o metoda numita stop() care sa faca proprietatea speed 0, apoi afiseaza viteza.
  `,
);
console.log(`${car.stop()} km/h`);
