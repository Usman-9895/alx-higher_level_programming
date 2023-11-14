#!/usr/bin/node

/*
Écrivez une fonction qui imprime le nombre d'arguments déjà imprimés et la nouvelle valeur de l'argument. (voir exemple ci-dessous)

Prototype : exports.logMe = fonction (élément)
Format de sortie : <nombre d'arguments déjà imprimés> : <valeur actuelle de l'argument>
*/

let count = 0;
exports.logMe = function (item) {
  console.log(count + ': ' + item);
  count++;
};
