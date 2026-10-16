---
title: 'Exercice 1 : Manipulation de listes et dictionnaires'
description: 'Problème d entraînement type concours.'
---

# Problème : Modélisation épidémiologique et suivi phylogénétique d'une population virale en milieu insulaire

**Mots-clés :** Dictionnaires, listes de listes, complexité algorithmique, modélisation stochastique, épidémiologie moléculaire.

---

## 1. Contexte scientifique et biologique

L'étude de la propagation des virus au sein de populations animales insulaires (par exemple, le virus de la maladie de Carré chez les carnivores de Marion Island) nécessite de croiser des données de terrain (suivi des individus) et des données de séquençage génétique. 

Lors d'une épidémie, le génome viral accumule des mutations au cours du temps. On modélise le génome viral par une chaîne de caractères (ou une liste de nucléotides) et l'état de santé d'un hôte par un statut sanitaire. L'objectif de ce problème est d'utiliser les structures de données fondamentales de Python (listes et dictionnaires) pour simuler la transmission virale et identifier les souches dominantes.

---

## 2. Énoncé et Questions

### Partie I : Représentation des données et initialisation

On souhaite représenter une population de $N$ hôtes. Chaque hôte est caractérisé par un identifiant unique (un entier de $0$ à $N-1$), un statut sanitaire (chaîne de caractères parmi `"S"` pour Sain, `"I"` pour Infecté, `"R"` pour Rétabli) et la séquence du virus qu'ilporte (si infecté, sinon `None`).

1. **Question 1 (Application directe)** : 
   Écrire une fonction Python `creer_population(N)` qui prend en argument un entier $N$ et renvoie une liste de dictionnaires représentant la population initiale. Initialement, tous les individus sont sains (`"S"`), sauf l'individu $0$ qui est infecté (`"I"`) par la souche virale initiale `"ATCG"`.

2. **Question 2 (Complexité)** : 
   Quelle est la complexité en temps et en espace de la fonction `creer_population` ? Justifier brièvement.

### Partie II : Propagation et mutations

À chaque pas de temps (génération), un individu infecté entre en contact avec d'autres individus. On modélise l'infection par la transmission du virus avec une probabilité de mutation. Une mutation consiste à remplacer un nucléotide par un autre de manière aléatoire.

3. **Question 3** : 
   Écrire une fonction `muter_sequence(sequence)` qui prend en argument une chaîne de caractères (ex: `"ATCG"`) et renvoie une nouvelle chaîne où exactement un nucléotide choisi aléatoirement a été remplacé par un autre nucléotide distinct choisi parmi $\text{\{A, T, C, G\}}$. On pourra utiliser le module `random`.

4. **Question 4** : 
   Écrire une fonction `propagation_etape(population, matrice_contacts)` où `population` est la liste de dictionnaires précédente, et `matrice_contacts` est une liste de listes d'adjacence (où `matrice_contacts[i]` contient la liste des indices des individus en contact avec l'individu $i$). 
   *Règles de transition :*
   * Si un individu $sain$ (`"S"`) est en contact avec au moins un individu infecté (`"I"`), il devient infecté (`"I"`) au tour suivant, et son virus est une copie mutée (`muter_sequence`) du virus de l'infecté le plus proche (le premier de la liste des contacts).
   * Les individus infectés deviennent rétablis (`"R"`) avec une probabilité fixe $p_R = 0.2$.
   * Les rétablis le restent.

### Partie III : Analyse épidémiologique et analyse critique du modèle

Pour analyser la diversité génétique du virus au cours du temps, on souhaite compter le nombre d'occurrences de chaque souche virale présente dans la population.

5. **Question 5** : 
   Écrire une fonction `frequence_souches(population)` qui parcourt la population et renvoie un **dictionnaire** dont les clés sont les séquences virales présentes et les valeurs sont le nombre d'individus infectés portant cette souche.

6. **Question 6 (Analyse critique)** : 
   Discuter des limites biologiques de ce modèle informatique. On attend une réflexion sur :
   * La modélisation des contacts par une matrice fixe.
   * La nature de la mutation génétique implémentée.

---

## 3. Pistes et Indications

* **Q1** : Utiliser une boucle `for` pour construire la liste. Chaque dictionnaire aura les clés `"id"`, `"statut"`, et `"virus"`.
* **Q3** : Convertir la chaîne en liste de caractères pour la modifier, ou utiliser du découpage de chaînes (*slicing*), puis `random.choice`.
* **Q4** : Attention à ne pas modifier l'état de la population "sur place" pendant le parcours au risque de propager l'infection trop vite au même tour de boucle (utiliser une copie ou un tableau temporaire des nouveaux états).
* **Q5** : Utiliser la méthode `.get(cle, valeur_par_défaut)` des dictionnaires pour compter efficacement.

---

## 4. Corrigé Pas à Pas

### Corrigé de la Partie I

#### Question 1
```python
import random

def creer_population(N):
    population = []
    for i in range(N):
        individu = {
            "id": i,
            "statut": "I" if i == 0 else "S",
            "virus": "ATCG" if i == 0 else None
        }
        population.append(individu)
    return population
```

#### Question 2
* **Temps :** $\mathcal{O}(N)$ car on effectue une boucle de taille $N$ avec des opérations élémentaires en $\mathcal{O}(1)$.
* **Espace :** $\mathcal{O}(N)$ pour stocker la liste des $N$ dictionnaires en mémoire.

---

### Corrigé de la Partie II

#### Question 3
```python
def muter_sequence(sequence):
    # Conversion en liste pour modification
    seq_liste = list(sequence)
    n = len(seq_liste)
    if n == 0:
        return sequence
    
    # Choix de l'indice à muter
    idx = random.randint(0, n - 1)
    
    # Nucléotides possibles
    nucleotides = ['A', 'T', 'C', 'G']
    # Retirer le nucléotide actuel pour garantir une mutation effective
    if seq_liste[idx] in nucleotides:
        nucleotides.remove(seq_liste[idx])
        
    seq_liste[idx] = random.choice(nucleotides)
    return "".join(seq_liste)
```

#### Question 4
```python
def propagation_etape(population, matrice_contacts):
    N = len(population)
    # Stockage des modifications pour application synchrone
    nouveaux_statuts = [ind["statut"] for ind in population]
    nouveaux_virus = [ind["virus"] for ind in population]
    
    for i in range(N):
        # Gestion des rétablissements
        if population[i]["statut"] == "I":
            if random.random() < 0.2:
                nouveaux_statuts[i] = "R"
                nouveaux_virus[i] = None
                
        # Gestion des infections
        elif population[i]["statut"] == "S":
            # Vérifier les contacts
            for contact in matrice_contacts[i]:
                if population[contact]["statut"] == "I":
                    nouveaux_statuts[i] = "I"
                    # Mutation du virus de l'infecté
                    virus_parent = population[contact]["virus"]
                    nouveaux_virus[i] = muter_sequence(virus_parent)
                    break # Une seule source suffit pour infecter
                    
    # Mise à jour effective de la population
    for i in range(N):
        population[i]["statut"] = nouveaux_statuts[i]
        population[i]["virus"] = nouveaux_virus[i]
```

---

### Corrigé de la Partie III

#### Question 5
```python
def frequence_souches(population):
    comptage = {}
    for individu in population:
        if individu["statut"] == "I":
            souche = individu["virus"]
            # Utilisation de .get(souche, 0) pour incrémenter proprement
            comptage[souche] = comptage.get(souche, 0) + 1
    return comptage
```

#### Question 6 : Analyse critique du modèle
* **Limites de la matrice de contacts fixe :** En écologie et épidémiologie de terrain, les contacts entre animaux (surtout insulaires) sont dynamiques, stochastiques et dépendent de la densité locale, du territoire et de la saisonnalité. Une matrice fixe ne reflète pas le comportement migratoire ou social réel.
* **Limites du modèle mutationnel :** Le modèle suppose des mutations ponctuelles indépendantes et équiprobables sur une séquence de taille fixe. En réalité, les virus à ARN (souvent responsables de telles épizooties) ont un taux de mutation très élevé (erreurs de la RNA-polymérase) et subissent des évènements de recombinaison ou de délétion que ce modèle simple ne capture pas. De plus, la sélection naturelle (pression immunitaire) n'est pas modélisée ici (toutes les souches mutées ont la même fitness).