#!/usr/bin/node

/*
Écrivez une fonction qui renvoie la version inversée d'une liste:

Prototype : exports.esrever = fonction (liste)
Vous n'êtes pas autorisé à utiliser la méthode intégrée inversée
*/

exports.esrever = function (list) {
  const output = [];

  while (list.length) {
    output.push(list.pop());
  }

  return output;
};
