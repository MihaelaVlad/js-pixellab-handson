const paragraphElement = document.createElement('p');
const userAgentString = navigator.userAgent;
let message = '';
let nameBrowser = '';

// let browserName = function () {
//   switch (userAgentString) {
//     case 'Chrome':
//       nameBrowser = 'Chrome';
//       message = 'Navighezi folosind Chrome';
//       break;
//     case 'Firefox':
//       nameBrowser = 'Firefox';
//       message = 'Navighezi folosind Firefox';
//       break;
//     case 'Internet Explorer':
//       nameBrowser = 'Internet Explorer';
//       message = 'Navighezi folosind Internet Explorer';
//       break;
//     default:
//       message = 'Nu stim ce browser folosesti';
//   }
// };

function chromeUser() {
  if (userAgentString.includes('Chrome')) {
    nameBrowser = 'Chrome';
    message = 'Navighezi folosind Chrome';

    setTimeout(function () {
      const username = prompt(`${nameBrowser} vrea sa stie cum te cheama.`);

      const headingElement = document.createElement('h1');
      const heading = `Salut ${username} !`;
      headingElement.innerText = heading;

      document.body.append(headingElement);
      setTimeout(function () {
        paragraphElement.remove();
      }, 3000);
    }, 3000);
  }

  paragraphElement.innerText = message;
  document.body.append(paragraphElement);
}
chromeUser();

function firefoxUser() {
  if (userAgentString.includes('Firefox')) {
    nameBrowser = 'Firefox';
    message = 'Navighezi folosind Firefox';

    setTimeout(function () {
      const username = prompt(`${nameBrowser} vrea sa stie cum te cheama.`);

      const headingElement = document.createElement('h1');
      const heading = `Salut ${username} !`;
      headingElement.innerText = heading;

      document.body.append(headingElement);

      setTimeout(function () {
        paragraphElement.remove();
      }, 3000);
    }, 3000);
  }

  paragraphElement.innerText = message;
  document.body.append(paragraphElement);
}
firefoxUser();

function explorerUser() {
  if (userAgentString.includes('Internet Explorer')) {
    nameBrowser = 'Internet Explorer';
    message = 'Navighezi folosind Internet Explorer';

    setTimeout(function () {
      const username = prompt(`${nameBrowser} vrea sa stie cum te cheama.`);

      const headingElement = document.createElement('h1');
      const heading = `Salut ${username} !`;
      headingElement.innerText = heading;

      document.body.append(headingElement);

      setTimeout(function () {
        paragraphElement.remove();
      }, 3000);
    }, 3000);
  }

  paragraphElement.innerText = message;
  document.body.append(paragraphElement);
}

// Dupa ce apare elementul h1, asteapta inca 3 secunde si elimina paragraful initial din DOM folosind metoda .remove()
// https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/remove
