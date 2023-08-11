#!/usr/bin/python3

if __name__ == "__main__":
    import sys
    
    # Initialiser la somme totale
    total_sum = 0
    
    # Itérer sur chaque argument à partir de l'index 1
    for i in range(1, len(sys.argv)):
        # Convertir l'argument en entier et l'ajouter à la somme totale
        total_sum += int(sys.argv[i])
    
    # Imprimer la somme totale
    print(total_sum)
