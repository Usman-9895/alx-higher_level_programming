#!/usr/bin/python3
"""Lookup module

Contient une fonction qui renvoie la liste des
attributs et méthodes disponibles d'un objet
"""


def lookup(obj):
    """Renvoie la liste des attributs et méthodes disponibles d'un objet"""
    return dir(obj)
