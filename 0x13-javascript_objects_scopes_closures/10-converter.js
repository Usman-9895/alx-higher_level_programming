#!/usr/bin/node

/*
Écrivez une fonction qui convertit un nombre de base 10 vers une autre base passée en argument :

Prototype : exports.converter = fonction (base)
Vous n'êtes pas autorisé à importer un fichier
Vous n'êtes pas autorisé à déclarer une nouvelle variable (var, let, etc.)
*/

exports.converter = function (base) {
  return function (n) {
    return n.toString(base);
  };
};
