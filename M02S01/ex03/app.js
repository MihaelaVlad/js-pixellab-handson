var Car = {
  make: '',
  color: '',
  wheels: 4,
  speed: 0,
  topSpeed: 160,
  topReverseSpeed: -50,
  areLightsOn: false,

  displaySpeed: function () {
    console.log(`Viteza curenta este: ${this.speed}.`);
  },

  accelerate: function () {
    this.speed = this.speed + 1;

    this.displaySpeed();
  },

  decelerate: function () {
    this.speed = this.speed - 1;

    this.displaySpeed();
  },

  setSpeed: function (speed) {
    if (speed > this.topSpeed) {
      this.speed = this.topSpeed;

      return;
    }

    if (speed < this.topSpeedReversed) {
      this.speed = this.topSpeedReversed;

      return;
    }

    this.speed = speed;
  },

  turnLightsOn: function () {
    this.areLightsOn = true;
  },

  turnLightsOff: function () {
    this.areLightsOn = false;
  },

  flashLights: function () {
    this.turnLightsOn();
    const self = this;

    setTimeout(function () {
      self.turnLightsOff();
    }, 4000);
  },
};

const audi = Object.create(Car);
audi.make = 'Audi';
audi.color = 'black';
audi.speed = 0;
