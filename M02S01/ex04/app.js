class Car {
  areHazardsOn = false;
  intervalID = 0;

  constructor(
    positionX,
    positionY,
    color,
    wheelFrontColor,
    wheelBackColor,
    hubCapBack,
    hubCapFront,
    areHazardsOn,
  ) {
    this.positionX = positionX;
    this.positionY = positionY;
    this.color = color;
    this.wheelFrontColor = wheelFrontColor;
    this.wheelBackColor = wheelBackColor;
    this.hubCapBack = hubCapBack;
    this.hubCapFront = hubCapFront;
    this.areHazardsOn = areHazardsOn;

    this.frame = this.e('div');
    this.frame.classList.add('frame');
    this.frame.style.left = `${this.positionX}px`;
    this.frame.style.top = `${this.positionY}px`;

    this.car = this.e('div');
    this.car.classList.add('car');
    this.frame.append(this.car);

    this.carTop = this.e('div');
    this.carTop.classList.add('car__top');
    this.car.append(this.carTop);
    this.carTop.style.backgroundColor = this.color;

    this.carBody = this.e('div');
    this.carBody.classList.add('car__body');
    this.car.append(this.carBody);
    this.carBody.style.backgroundColor = this.color;

    this.ligthBack = this.e('div');
    this.ligthBack.classList.add('light', 'light--back');
    this.carBody.append(this.ligthBack);

    this.lightFront = this.e('div');
    this.lightFront.classList.add('light', 'light--front');
    this.carBody.append(this.lightFront);

    this.wheelBack = this.e('div');
    this.wheelBack.classList.add('wheel', 'car__wheel', 'car__wheel--back');
    this.carBody.append(this.wheelBack);
    this.hubCapBack = this.e('div');
    this.hubCapBack.classList.add('wheel__cap');
    this.wheelBack.append(this.hubCapBack);

    this.wheelFront = this.e('div');
    this.wheelFront.classList.add('wheel', 'car__wheel', 'car__wheel--front');
    this.carBody.append(this.wheelFront);
    this.hubCapFront = this.e('div');
    this.hubCapFront.classList.add('wheel__cap');
    this.wheelFront.append(this.hubCapFront);
  }

  render() {
    document.body.append(this.frame);

    return this;
  }

  turnLightOn() {
    this.lightFront.classList.add('light--on');

    return this;
  }

  turnLightOff() {
    this.lightFront.classList.remove('light--on');

    return this;
  }

  changeTireColor(wheelBackColor, wheelFrontColor) {
    this.wheelBack.style.backgroundColor = wheelBackColor;

    this.wheelFront.style.backgroundColor = wheelFrontColor;

    return this;
  }

  changeCapColor(hubCapBack, hubCapFront) {
    this.hubCapBack.style.backgroundColor = hubCapBack;

    this.hubCapFront.style.backgroundColor = hubCapFront;

    return this;
  }

  engageBreak() {
    this.ligthBack.style.backgroundColor = 'red';

    return this;
  }

  disenagageBreak() {
    this.ligthBack.style.backgroundColor = 'white';

    return this;
  }

  moveTo(positionX, positionY) {
    this.positionX = positionX;
    this.positionY = positionY;

    this.frame.style.left = `${positionX}px`;
    this.frame.style.top = `${positionY}px`;

    return this;
  }

  toggleHazards() {
    const self = this;

    setInterval(function () {
      if (self.intervalID !== 0) {
        self.turnLightOn();
      } else {
        self.turnLightOff();
      }
    }, 3000);

    return;
  }

  e(elementName) {
    // wrapper
    return document.createElement(elementName);
  }
}

const car01 = new Car(250, 16, 'blue');
car01.render().toggleHazards();
const car02 = new Car(16, 250, 'red');
car02.render();
const car03 = new Car(16, 16, 'green').render().engageBreak();
car01.changeTireColor('purple', 'orange');
car01.changeCapColor('orange', 'purple');
car02.changeTireColor('green', 'yellow');
car02.changeCapColor('yellow', 'green');

car01.moveTo(1000, 400);
