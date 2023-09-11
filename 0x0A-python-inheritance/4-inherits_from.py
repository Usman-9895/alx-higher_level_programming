#!/usr/bin/python3
"""inherits_from module.

Contains function that compares an object with an instance.
"""


def inherits_from(obj, a_class):
    """
    Renvoie True si l'objet est une instance d'un
    classe qui a hérité (directement ou indirectement)
    de la classe spécifiée ; sinon Faux.
    """
    return issubclass(type(obj), a_class) and type(obj) is not a_class
