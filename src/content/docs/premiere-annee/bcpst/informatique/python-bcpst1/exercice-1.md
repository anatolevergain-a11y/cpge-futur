---
title: 'Exercice 1 : Traitement de données'
description: 'Problème d entraînement type concours.'
---

# Concours BCPST — Informatique
## Traitement de données en Python : Analyse épidémiologique

*Ce problème guidé propose une étude de données épidémiologiques simplifiées, simulant la propagation d'une pathologie au sein d'une population. Il mobilise des compétences fondamentales exigées aux concours : manipulation de structures de données imbriquées, programmation impérative, complexité et visualisation numérique.*

---

## Préambule et Rapports aux exigences du jury

Les candidats de la filière BCPST doivent faire preuve de rigueur dans l'écriture du code Python, l'utilisation des bibliothèques scientifiques usuelles (`numpy`, `matplotlib`) et l'analyse critique des résultats obtenus (ordres de grandeur, unités, limites des modèles).

On importe par la suite les modules nécessaires :
```python
import matplotlib.pyplot as plt
import numpy as np
```

---

## Partie I : Modélisation et représentation des données

On dispose d'un suivi journalier de l'état de santé d'une population de $N$ individus sur une période de $J$ jours. Chaque individu est représenté par un identifiant entier de $0$ à $N-1$. 

À chaque jour $j$ (avec $0 \le j < J$), l'état d'un individu est caractérisé par un entier :
* `0` pour **Sain** (susceptible)
* `1` pour **Infecté** (malade et contagieux)
* `2` pour **Rétabli** (immunisé)

Les données de l'épidémie sont modélisées en Python par une matrice (liste de listes) `donnees` de dimensions $J \times N$, où `donnees[j][i]` représente l'état de l'individu $i$ au jour $j$.

### Question 1
Écrire une fonction Python `charger_donnees(nom_fichier)` qui prend en argument une chaîne de caractères représentant un fichier CSV où chaque ligne correspond à un jour et les colonnes (séparées par des virgules) aux états des individus. La fonction renverra la matrice sous forme de liste de listes d'entiers.
Correction: *
```python
def charger_donnees(nom_fichier):
    """Charge un fichier CSV d'états épidémiologiques en matrice d'entiers."""
    matrice = []
    with open(nom_fichier, 'r', encoding='utf-8') as f:
        for ligne in f:
            # Nettoyage et conversion de chaque élément de la ligne
            elements = [int(val.strip()) for val in ligne.split(',') if val.strip() != '']
            if elements:
                matrice.append(elements)
    return matrice
```

---

## Partie II : Analyse statistique journalière

Afin de suivre la dynamique de l'épidémie, on souhaite calculer pour chaque jour le nombre d'individus dans chacun des trois états.

### Question 2
Écrire une fonction `compter_etats(donnees)` qui prend en argument la matrice des données et renvoie trois listes distinctes (ou un tuple de trois listes) : `sains`, `infectes`, et `retablis`, contenant respectivement le nombre d'individus sains, infectés et rétablis pour chaque jour.

Préciser la complexité en temps de cette fonction en fonction du nombre de jours $J$ et de la taille de la population $N$.
Correction: *
```python
def compter_etats(donnees):
    J = len(donnees)
    if J == 0:
        return [], [], []
    N = len(donnees[0])
    
    sains = []
    infectes = []
    retablis = []
    
    for j in range(J):
        nb_sains = 0
        nb_infectes = 0
        nb_retablis = 0
        for i in range(N):
            etat = donnees[j][i]
            if etat == 0:
                nb_sains += 1
            elif etat == 1:
                nb_infectes += 1
            elif etat == 2:
                nb_retablis += 1
        sains.append(nb_sains)
        infectes.append(nb_infectes)
        retablis.append(nb_retablis)
        
    return sains, infectes, retablis
```

**Analyse de complexité :**
La fonction parcourt l'intégralité de la matrice de dimensions $J \times N$. Chaque accès et incrémentation s'effectue en temps constant $\mathcal{O}(1)$. La complexité temporelle globale est donc de **$\mathcal{O}(J \times N)$**, ce qui est optimal puisque l'on doit lire chaque donnée au moins une fois.

---

## Partie III : Visualisation graphique

Les biologistes et statisticiens ont besoin d'une représentation visuelle pour interpréter la propagation de la maladie.

### Question 3
Écrire une fonction `tracer_epidemie(donnees)` qui trace l'évolution temporelle des trois compartiments (Sains, Infectés, Rétabli) à l'aide de la bibliothèque `matplotlib`. 

On veillera à inclure :
* Un titre explicite.
* Des légendes pour chaque courbe.
* Des libellés d'axes avec les unités explicites ($\text{Jours}$ en abscisse, $\text{Nombre d'individus}$ en ordonnée).
Correction: *
```python
def tracer_epidemie(donnees):
    sains, infectes, retablis = compter_etats(donnees)
    J = len(donnees)
    jours = list(range(J))
    
    plt.figure(figsize=(10, 6))
    plt.plot(jours, sains, label=r"Sains (\text{S})", color="blue", linestyle="-")
    plt.plot(jours, infectes, label=r"Infectés (\text{I})", color="red", linestyle="--")
    plt.plot(jours, retablis, label=r"Rétablis (\text{R})", color="green", linestyle="-.")
    
    plt.title("Évolution temporelle de l'épidémie (Modèle SIR)")
    plt.xlabel(r"Temps $\text{, } j \text{ (\text{jours})}$")
    plt.ylabel(r"Effectif $\text{, } N \text{ (\text{individus})}$")
    plt.legend()
    plt.grid(True)
    plt.show()
```

---

## Partie IV : Analyse critique des résultats

### Question 4
À partir des courbes obtenues par ce type de modèle (souvent apparenté au modèle SIR déterministe ou stochastique), un examinateur vous demande d'analyser les points suivants :
1. Quel est le comportement asymptotique (lorsque $j \to +\infty$) de la courbe des *Infectés* ? Justifier biologiquement.
2. Citer une limite majeure de ce modèle matriciel discret simple par rapport à une modélisation spatiale ou par réseaux de contact en biologie.

*Correction et Analyse critique :*

1. **Comportement asymptotique des infectés :**
   Mathématiquement et biologiquement, la courbe des infectés tend vers $0$ lorsque $J$ devient grand. En effet, dans un modèle fermé sans naissances ni entrées de nouveaux individus sains, la maladie finit par s'épuiser : soit tous les individus susceptibles ont été infectés puis guéris (immunité de groupe), soit le nombre d'infectés descend en dessous du seuil critique permettant la transmission avant d'avoir touché tout le monde.

2. **Limites du modèle :**
   Le modèle présenté ici suppose une **mixité homogène** (chaque individu a la même probabilité d'interagir avec n'importe quel autre individu de la population, indépendamment de sa position géographique ou de son cercle social). 
   * *Critique :* En écologie des populations ou en épidémiologie humaine/animale, les contacts se font via un réseau spatial ou social restreint (proximité géographique, foyers familiaux, transport). Ignorer cette structure spatiale tend à surendetter la vitesse de propagation globale et néglige l'effet des barrières géographiques ou des mesures de confinement localisées.