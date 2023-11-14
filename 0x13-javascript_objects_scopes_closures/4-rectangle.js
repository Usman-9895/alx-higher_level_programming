#!/usr/bin/node

/*
Écrivez une classe Rectangle qui définit un rectangle:

Vous devez utiliser la notation de classe pour définir votre classe
Le constructeur doit prendre 2 arguments : w et h
Initialisez la largeur de l'attribut d'instance avec la valeur de w
Initialisez la hauteur de l'attribut d'instance avec la valeur de h
Si w ou h est égal à 0 ou n'est pas un entier positif, créez un objet vide
Créez une méthode d'instance appelée print() qui imprime le rectangle en utilisant le caractèreX
Créez une méthode d'instance appelée rotate() qui échange la largeur et la hauteur du rectangle
Créez une méthode d'instance appelée double() qui multiplie la largeur et la hauteur du rectangle par2
*/

module.exports = class Rectangle {
  constructor (w, h) {
    if (w > 0 && h > 0) {
      this.width = w;
      this.height = h;
    }
  }

  print () {
    for (let i = 0; i < this.height; i++) {
      console.log('X'.repeat(this.width));
    }
  }

  rotate () {
    [this.width, this.height] = [this.height, this.width];
  }

  double () {
    this.width *= 2;
    this.height *= 2;
  }
};
