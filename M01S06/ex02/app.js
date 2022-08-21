const paragraphElement = document.createElement('p');
const userAgentString = navigator.userAgent;
let message = '';
let nameBrowser = '';

function checkBrowser() {
  if (userAgentString.includes('Chrome')) {
    nameBrowser = 'Chrome';
    message = 'Navighezi folosind Chrome';
  }

  if (userAgentString.includes('Firefox')) {
    nameBrowser = 'Firefox';
    message = 'Navighezi folosind Firefox';
  }
  if (userAgentString.includes('Internet Explorer')) {
    nameBrowser = 'Internet Explorer';
    message = 'Navighezi folosind Internet Explorer';
  }

  paragraphElement.innerText = message;
  document.body.append(paragraphElement);
}
checkBrowser();

function displayUsername() {
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

  paragraphElement.innerText = message;
  document.body.append(paragraphElement);
}
displayUsername();
