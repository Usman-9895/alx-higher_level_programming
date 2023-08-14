#!/usr/bin/python3

"""def print_matrix_integer(matrix=[[]]):
    for row in matrix:
        for col in range(len(row)):
            print("{:d}".format(row[col]),
                  end=' ' if col < len(row) - 1 else '')
        print()"""

def print_matrix_integer(matrix=[[]]):
    for row in matrix:
        for col in row:
            print(col, end=' ')
        print()  # Pour passer à la ligne suivante après chaque ligne

