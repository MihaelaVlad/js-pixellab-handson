function paragraphLog(message) {
  const logContainerClass = 'logs';
  let logContainer = document.querySelector(`.${logContainerClass}`);

  if (logContainer === null) {
    logContainer = document.createElement('div');
    logContainer.classList.add(logContainerClass);

    document.body.append(logContainer);
  }

  const paragraphElement = document.createElement('p');
  paragraphElement.innerText = message;

  logContainer.append(paragraphElement);
}

console.domLog = paragraphLog;

console.domLog('pauza');

// Modifica exercitiul 06 astfel incat functia sa primeasca un numar
//  nedeterminat de parametrii, similar cu console.log(). Foloseste
//  variabila arguments a functiei pentru a rula o bucla prin parametri.

function display() {
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}

display('Hello!', 'Hi!', 'Buna!', 'Konichiwa!');
