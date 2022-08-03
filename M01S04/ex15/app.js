var person = {
  name: 'Mihaela',
  surname: 'Vlad',
  age: 24,
  petOwner: true,
  skills: [
    'html',
    'javascript',
    'css',
    'java',
    'c++',
    'nodejs',
    'jquery',
    'node',
  ],
  friends: [
    {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },
    {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31,
    },
    {
      name: 'Carol',
      surname: 'Carolson',
      age: 29,
    },
  ],
};

console.warn(
  `
  Folosind fisierele de la exercitiul 06, si doua bucle for imbricate
  (nested) afiseaza diferenta de varsta dintre fiecare membru al arrayului
  friends si ceilalti membri.

  Intre Larry si Steven este o diferenta de x ani.
  Intre Larry si Carol este o diferenta de x ani.
  Intre Steven si Larry este o diferenta de y ani.
  `,
);

for (var i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];

  for (var j = 0; j < person.friends.length; j++) {
    var anotherFriend = person.friends[j];
    var ageDiff = Math.abs(friend.age - anotherFriend.age);

    if (friend.name === anotherFriend.name) {
      continue;
    }

    var message =
      'Intre ' +
      friend.name +
      ' si ' +
      anotherFriend.name +
      ' este o diferenta de ' +
      ageDiff +
      ' ani.';

    console.log(message);
  }
}
