---
title: 'Exercice 2 : Complexité temporelle'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Analyse fine de la complexité temporelle et limites du modèle RAM en Python

## Énoncé

Le présent problème s'intéresse à l'évaluation rigoureuse de la complexité temporelle d'algorithmes écrits en Python. En classe préparatoire, l'analyse algorithmique repose généralement sur le modèle de la machine à accès aléatoire (RAM - *Random Access Machine*), où chaque opération élémentaire (affectation, addition, comparaison, accès à un indice de tableau) s'effectue en temps constant $\mathcal{O}(1)$. 

Cependant, la mise en œuvre pratique de ces algorithmes en Python confronte le scientifique à des subtilités d'implémentation (gestion dynamique de la mémoire, représentation des entiers de taille arbitraire, surcoût lié à l'interpréteur) qui invalident parfois les prédictions théoriques naïves.

L'objectif de ce problème est de formaliser l'analyse de complexité de plusieurs fonctions de manipulation de listes et de chaînes de caractères, puis de proposer une **analyse critique des limites du modèle RAM** face à la réalité de la machine physique et du langage Python.

---

## Questions

### Partie I : Analyse théorique (Modèle RAM)

1. **(Échauffement)** Soit la fonction suivante :
   ```python
   def somme_carres(n):
       s = 0
       for i in range(n):
           s += i * i
       return s
   ```
   Déterminer la complexité temporelle au pire des cas de `somme_carres(n)` en fonction de $n$, exprimée sous forme de grand $\mathcal{O}$.

2. **(Concaténation naïve)** On considère la fonction suivante censée construire une chaîne de caractères par répétition :
   ```python
   def repete_chaine(c, n):
       res = ""
       for i in range(n):
           res += c
       return res
   ```
   En supposant naïvement que l'opération de concaténation de chaînes de longueur $L_1$ et $L_2$ s'exécute en temps $\mathcal{O}(L_1 + L_2)$, déterminer la complexité théorique de `repete_chaine(c, n)` dans le modèle RAM.

3. **(Recherche et filtrage)** Soit $L$ une liste de $n$ entiers distincts et $T$ un tableau de hachage (ou `set` en Python) contenant $m$ éléments. On considère la fonction :
   ```python
   def filtre_communs(L, S):
       resultat = []
       for x in L:
           if x in S:
               resultat.append(x)
       return resultat
   ```
   Exprimer la complexité temporelle au pire des cas de cette fonction en fonction de $n$ et $m$, en justifiant le coût des opérations sur le type `set` et sur la liste.

---

### Partie II : Analyse critique et limites du modèle RAM

4. **(Le coût de la représentation des données)** 
   Dans la Partie I, question 1, on a implicitement supposé que l'addition `s += i * i` s'effectue en $\mathcal{O}(1)$. 
   * Rappeler comment Python gère les entiers de grande taille (au-delà de $2^{63}-1$).
   * Quel est le véritable coût temporel d'une addition de deux entiers de taille $b$ (en nombre de bits) ? En déduire une limite du modèle RAM pour des valeurs de $n$ très grandes.

5. **(Immuabilité et allocation dynamique)**
   Dans la question 2, la fonction utilise l'opérateur `+=` sur les chaînes de caractères (qui sont immuables en Python). 
   * Expliquer ce que fait réellement l'interpréteur Python lors de l'exécution de `res += c`.
   * En déduire la véritable complexité temporelle de la fonction `repete_chaine` et proposer une alternative optimale en $\mathcal{O}(n)$.

6. **(Effets de seuil et mémoire cache)**
   On mesure expérimentalement le temps d'exécution d'un accès aléatoire dans une liste Python de taille $N$. Pour $N = 10^3$, le temps moyen par accès est de l'ordre de $10\text{ ns}$. Pour $N = 10^8$, ce temps passe à $150\text{ ns}$.
   * Le modèle RAM permet-il d'expliquer cette variation ? 
   * Quel phénomène matériel majeur (absent du modèle RAM) permet d'expliquer cet écart ?

---

## Pistes et indications

* **Q2 :** Pensez à sommer les longueurs intermédiaires des chaînes de caractères à chaque itération de la boucle.
* **Q3 :** Rappelez la complexité amortie d'un ajout dans une liste (`append`) et la complexité moyenne d'une recherche dans un `set` en Python (table de hachage).
* **Q5 :** L'immuabilité implique qu'aucune modification en place n'est possible. Une nouvelle zone mémoire doit donc être allouée et le contenu recopié.
* **Q6 :** Songez à la hiérarchie mémoire des ordinateurs modernes (registres, caches L1/L2/L3, mémoire vive RAM).

---

## Corrigé pas à pas

### Partie I : Analyse théorique (Modèle RAM)

1. **Complexité de `somme_carres(n)` :**
   * L'initialisation `s = 0` prend un temps $\mathcal{O}(1)$.
   * La boucle `for i in range(n)` s'exécute $n$ fois.
   * À chaque itération, l'évaluation de `i * i` (multiplication) et l'opération `+=` (addition et affectation) coûtent des opérations élémentaires, soit $\mathcal{O}(1)$ dans le modèle RAM.
   * La complexité totale est donc $\mathcal{O}(n)$.

2. **Complexité naïve de `repete_chaine(c, n)` :**
   * Soit $L_i$ la longueur de la chaîne `res` à l'itération $i$. Au départ, $L_0 = 0$. À l'itération $i$, $L_i = i$.
   * L'opération `res += c` crée une nouvelle chaîne de longueur $i + 1$. Si l'on suppose que le coût de la concaténation de deux chaînes de longueurs $a$ et $b$ est proportionnel à $a + b$, le coût de la $i$-ième étape est $\mathcal{O}(i + 1)$.
   * Le coût total $T(n)$ est la somme des coûts de chaque itération :
     $$T(n) = \sum_{i=0}^{n-1} \mathcal{O}(i+1) = \mathcal{O}\left(\sum_{i=1}^{n} i\right) = \mathcal{O}\left(\frac{n(n+1)}{2}\right) = \mathcal{O}(n^2)$$
   * **Attention :** Une analyse superficielle aurait pu conclure à $\mathcal{O}(n)$ en comptant $n$ opérations de concaténation. La prise en compte de la taille croissante des données élève la complexité à $\mathcal{O}(n^2)$.

3. **Complexité de `filtre_communs(L, S)` :**
   * La liste $L$ contient $n$ éléments. La boucle `for x in L` effectue $n$ tours.
   * À chaque tour, le test d'appartenance `x in S` s'effectue sur un `set` (table de hachage). En moyenne, le coût d'une recherche dans un `set` est en $\mathcal{O}(1)$.
   * Si l'élément est présent, l'opération `resultat.append(x)` est exécutée. En Python, la méthode `append` sur une liste possède une complexité amortie en $\mathcal{O}(1)$.
   * La complexité totale moyenne est donc de $\mathcal{O}(n)$. (Au pire, en cas de collisions massives dans la table de hachage, le test d'appartenance peut dégénérer en $\mathcal{O}(m)$, menant à $\mathcal{O}(n \cdot m)$, mais le cas moyen est bien $\mathcal{O}(n)$).

---

### Partie II : Analyse critique et limites du modèle RAM

4. **Le coût de la représentation des entiers :**
   * En Python, les entiers ne sont pas limités à $64$ bits ; le langage gère automatiquement les entiers à précision arbitraire (*bignums*). Lorsque la valeur dépasse la taille native de la machine, Python utilise un tableau de blocs mémoire.
   * L'addition de deux entiers de taille $b$ bits (exprimée en nombre de mots mémoire) ne se fait plus en temps unitaire $\mathcal{O}(1)$, mais en temps proportionnel au nombre de bits, soit $\mathcal{O}(b)$ (voire $\mathcal{O}(b \log b$ avec des algorithmes sophistiqués).
   * **Limite du modèle RAM :** Lorsque $n$ devient très grand (par exemple $n > 2^{63}$), la variable `i` ne tient plus dans un mot machine. L'hypothèse que l'arithmétique élémentaire coûte $\mathcal{O}(1)$ est mise en défaut.

5. **Immuabilité et allocation dynamique :**
   * Les chaînes de caractères en Python sont **immuables**. Il est impossible de modifier un caractère "en place".
   * L'instruction `res += c` oblige l'interpréteur à allouer un nouvel espace mémoire d'une taille égale à la longueur actuelle plus un, à y copier l'ancien contenu de `res`, puis à y ajouter le caractère `c`. C'est cette copie séquentielle qui induit le coût en $\mathcal{O}(n^2)$ démontré à la question 2.
   * **Alternative optimale :** Pour obtenir une complexité en $\mathcal{O}(n)$, il convient de stocker les caractères dans une liste (structure mutable permettant des ajouts en temps amorti constant), puis d'utiliser la méthode `"".join(liste_c)` qui effectue une unique allocation mémoire globale :
     ```python
     def repete_chaine_optimal(c, n):
         res = [c for _ in range(n)]
         return "".join(res)
     ```

6. **Effets de seuil et mémoire cache :**
   * **Inadéquation du modèle RAM :** Le modèle RAM postule que l'accès à n'importe quelle case mémoire se fait avec le même coût constant $\mathcal{O}(1)$, qu'il s'agisse de la première ou de la milliardième.
   * **Réalité matérielle :** La hiérarchie des caches processeur (L1, L2, L3) et la RAM physique violent cette hypothèse. 
     * Pour $N = 10^3$, la structure de données tient entièrement dans les caches rapides du processeur (accès très rapide $\approx 10\text{ ns}$).
     * Pour $N = 10^8$, la structure dépasse la capacité du cache. Le processeur subit des *défauts de cache* (*cache misses*), l'obligeant à aller chercher l'information dans la mémoire vive principale (RAM physique), ce qui multiplie le temps d'accès par un facteur significatif ($\approx 150\text{ ns}$).
   * **Conclusion critique :** Le modèle RAM fournit une borne asymptotique purement théorique qui ignore la localité des données et l'architecture matérielle. En pratique, un algorithme théoriquement optimal en $\mathcal{O}(n)$ peut s'avérer plus lent qu'un algorithme en $\mathcal{O}(n \log n)$ s'il génère de nombreux défauts de cache (ce qui est fréquent en Python en raison de l'indirection des pointeurs dans les listes, qui ne stockent que des références d'objets et non les données brutes de manière contiguë).