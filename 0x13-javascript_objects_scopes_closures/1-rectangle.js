#!/usr/bin/node

/*
Écrivez une classe Rectangle qui définit un rectangle:

Vous devez utiliser la notation de classe pour définir votre classe
Le constructeur doit prendre 2 arguments w et h
Initialisez la largeur de l'attribut d'instance avec la valeur de w
Initialisez la hauteur de l'attribut d'instance avec la valeur de h
*/
class Rectangle {
  constructor (w, h) {
    this.width = w;
    this.height = h;
  }
}
module.exports = Rectangle;
