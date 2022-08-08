//  siaf - iife
(function () {
  document.addEventListener('DOMContentLoaded', function () {
    const stage = document.querySelector('.stage');

    stage.addEventListener('mouseover', function () {
      console.log('Mouseul este pe scena');
      const p = document.createElement('p');
      p.innerText = 'Mouseul este pe scena';

      document.body.append(p);
    });

    stage.addEventListener('mouseout', function () {
      console.log('Mouseul nu este pe scena');
      const p = document.createElement('p');
      p.innerText = 'Mouseul nu este pe scena';

      document.body.append(p);
    });
  });
})();
