#!/usr/bin/node

/*
Écrivez une classe Square qui définit un carré et hérite de Rectangle de 4-rectangle.js :

Vous devez utiliser la notation de classe pour définir votre classe et étend
Le constructeur doit prendre 1 argument : taille
Le constructeur de Rectangle doit être appelé (en utilisant super())
*/

const Rectangle = require('./4-rectangle');

class Square extends Rectangle {
  constructor (size) {
    super(size, size);
  }
}

module.exports = Square;
