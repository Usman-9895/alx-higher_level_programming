#!/usr/bin/node

/*
Écrivez une classe Square qui définit un carré et hérite de Square de 5-square.js:

Vous devez utiliser la notation de classe pour définir votre classe et étend
Créez une méthode d'instance appelée charPrint(c) qui imprime le rectangle en utilisant le caractère c
Si c n'est pas défini, utilisez le caractère X

*/

const squareBase = require('./5-square');

class Square extends squareBase {
  charPrint (c) {
    if (c === undefined) {
      c = 'X';
    }

    for (let i = 0; i < this.height; i++) {
      console.log(c.repeat(this.height));
    }
  }
}

module.exports = Square;
