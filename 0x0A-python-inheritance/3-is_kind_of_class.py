#!/usr/bin/python3
"""is_kind_of_class module.

Contains function that compares an object with an instance.
"""


def is_kind_of_class(obj, a_class):
    """
    Renvoie True si l'objet est une instance de, ou si
    l'objet est une instance d'une classe qui a hérité
    de, la classe spécifiée ; sinon Faux.
    """
    return isinstance(obj, a_class)
