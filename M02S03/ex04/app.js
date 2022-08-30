const image = document.getElementsByClassName('image')[0];
const loaderP = document.getElementById('loader');

const showMessage = (htmlId, message) => {
  let p = document.getElementById(htmlId);

  if (p === null) {
    p = document.createElement('p');
    p.id = htmlId;
    document.body.append(p);
  }

  p.innerText = message;
};

image.addEventListener('load', () => {
  const message = 'Imaginea s-a incarcat';

  showMessage('message', message);
  loaderP.innerText = message;

  const image = event.currentTarget;

  image.addEventListener('click', () => {
    alert(`Imaginea cu urlul ${image.src} s-a incarcat`);
  });
});
