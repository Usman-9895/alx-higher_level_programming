#!/usr/bin/node

/*
Écrivez une fonction qui renvoie le nombre d'occurrences dans une liste:

Prototype : exports.nbOccurences = fonction (liste, searchElement)
*/

exports.nbOccurences = function (list, searchElement) {
  let count = 0;
  for (let i = 0; i < list.length; i++) {
    if (searchElement === list[i]) {
      count++;
    }
  }

  return count;
};
