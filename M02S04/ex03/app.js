const heroElement = document.querySelector('.hero');
const stage = document.querySelector('.stage');
const controls = document.querySelector('.controls');
const step = 30;
const heroData = {
  x: 350,
  y: 60,
  width: heroElement.clientWidth,
  height: heroElement.clientHeight,
};

// define all properties on each line of motion, including
// the axis and the direction
// to go north (up) use y: 'back'
// to go north east (up and right) use y: 'back' and x: 'front'
// then use Object.keys (values is a better choice)
// axis' now have coeffiecients that can be multiplied
// by the step in order to reduce ifs
const axisMotionMap = {
  NW: {
    x: -1,
    y: -1,
  },
  N: {
    y: -1,
  },
  NE: {
    x: 1,
    y: -1,
  },
  E: {
    x: 1,
  },
  SE: {
    x: 1,
    y: 1,
  },
  S: { y: 1 },
  SW: { x: -1, y: 1 },
  W: { x: -1 },
};

// copy over the south, north, etc keys
// note that they are copied by REFERENCE
const keysMap = {
  ArrowDown: axisMotionMap.S,
  ArrowUp: axisMotionMap.N,
  ArrowLeft: axisMotionMap.W,
  ArrowRight: axisMotionMap.E,
};

renderHero();

// event delegation at div.controls level
controls.addEventListener('click', (event) => {
  // pt delegation, target
  const button = event.target;

  // event delegation codnition
  if (button.nodeName !== 'BUTTON' || button.dataset.direction.length <= 0) {
    return;
  }
  const value = button.dataset.direction;
  const motionData = axisMotionMap[value];

  updateHeroPosition(motionData);

  renderHero();
});

document.addEventListener('keydown', (event) => {
  const { code } = event;
  const motionData = keysMap[code];

  updateHeroPosition(motionData);
  renderHero();
});

// function hoisting
function renderHero() {
  const { x, y } = heroData;
  const cssText = `left: ${x}px; top: ${y}px;`;

  heroElement.setAttribute('style', cssText);
}

function updateHeroPosition(motionData) {
  // axisArray will have
  // either a position called x, or y or both
  // a generic loop must be called
  const axisArray = Object.keys(motionData);

  axisArray.forEach((axis) => {
    // since the coeficient could be negatively signed
    // + will turn to minus
    heroData[axis] = heroData[axis] + motionData[axis] * step;
  });

  if (heroData.x <= 0) {
    heroData.x = 0;
  }

  if (heroData.y <= 0) {
    heroData.y = 0;
  }

  if (heroData.x >= stage.clientWidth - heroData.width) {
    heroData.x = stage.clientWidth - heroData.width;
  }

  if (heroData.y >= stage.clientHeight - heroData.height) {
    heroData.y = stage.clientHeight - heroData.height;
  }
}
