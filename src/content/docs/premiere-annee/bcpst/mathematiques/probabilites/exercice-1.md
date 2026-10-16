---
title: 'Exercice 1 : Variables aléatoires discrètes'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Étude d'un modèle de renouvellement stochastique et analyse critique

Ce problème aborde l'étude d'une variable aléatoire discrète modélisant un système à états discrets, grand classique des écrits de concours en BCPST (Agro-Veto et G2E). Une attention particulière sera portée à la rigueur de la modélisation et aux limites des hypothèses formulées.

---

## Énoncé

On considère une suite de lancers indépendants d'une pièce de monnaie équilibrée. À chaque lancer, on obtient soit Pile ($\text{P}$) avec une probabilité $p = \frac{1}{2}$, soit Face ($\text{F}$) avec une probabilité $q = 1 - p = \frac{1}{2}$. 

Un joueur parie sur l'apparition pour la première fois d'un motif particulier de $k$ lancers consécutifs ($k \in \mathbb{N}^*$). Soit $N_k$ la variable aléatoire représentant le rang du dernier lancer constituant l'apparition de ce motif pour la première fois.

Dans tout ce problème, on étudie le motif $\text{PP}$ (deux Piles consécutifs), ce qui correspond à $k=2$. On cherche à déterminer la loi de $N_2$, son espérance, et à discuter de la pertinence du modèle probabiliste sous-jacent.

---

## Questions

1. **Modélisation préliminaire :** 
   Préciser l'univers $\Omega$ associé à l'expérience aléatoire et définir rigoureusement la variable aléatoire $N_2$ comme application de $\Omega$ dans $\mathbb{R}$. Quel est l'ensemble des valeurs prises par $N_2$ (noté $N_2(\Omega)$) ?

2. **Calculs de probabilités élémentaires :**
   Déterminer les probabilités des événements $\{N_2 = 2\}$ et $\{N_2 = 3\}$.

3. **Analyse par récurrence et formule générale :**
   En utilisant un système d'événements complets basé sur le résultat des premiers lancers, exprimer les probabilités conditionnelles ou établir une relation de récurrence permettant de calculer $P(N_2 = n)$ pour tout entier $n \ge 2$.

4. **Espérance mathématique :**
   Montrer que la variable aléatoire $N_2$ admet une espérance, et calculer la valeur de $\mathbb{E}(N_2)$.

5. **Analyse critique du modèle :**
   Le modèle mathématique suppose une indépendance parfaite et instantanée des lancers. Discutez de deux limites majeures de ce modèle si l'on cherchait à l'appliquer à un système physique réel (par exemple, un jeu de casino mécanique ou l'observation de mutations génétiques sur une séquence d'ADN).

---

## Pistes et indications

* **Q1 :** Pensez à définir $\Omega$ comme l'ensemble des suites infinies de $\text{P}$ et $\text{F}$, même si l'arrêt se fait à un rang fini.
* **Q2 :** Listez explicitement les configurations possibles pour les lancers de rang 1 à 3.
* **Q3 :** Conditionnez par rapport au premier lancer (Pile ou Face) et éventuellement au second. Attention aux cas particuliers pour $n=2$ et $n=3$.
* **Q4 :** Utilisez la sommation de la série $\sum n P(N_2 = n)$ ou la méthode des espérances conditionnelles.
* **Q5 :** Pour l'esprit critique (attendu aux concours X-ENS / Agro-Veto), questionnez l'hypothèse d'équiprobabilité ($p=1/2$ rigoureux dans la nature ?) et l'hypothèse d'absence de mémoire (indépendance des essais successifs).

---

## Corrigé pas à pas

### 1. Modélisation préliminaire
L'univers $\Omega$ peut être défini comme l'ensemble des suites infinies de caractères $\text{P}$ et $\text{F}$ : 
$$\Omega = \{\omega = (\omega_1, \omega_2, \dots, \omega_n, \dots) \mid \forall i \in \mathbb{N}^*, \omega_i \in \{\text{P}, \text{F}\}\}$$
La variable aléatoire $N_2$ associe à toute issue $\omega$ le plus petit entier $n \ge 2$ tel que $(\omega_{n-1}, \omega_n) = (\text{P}, \text{P})$.
L'ensemble des valeurs prises par $N_2$ est l'ensemble des entiers naturels supérieurs ou égaux à 2 :
$$N_2(\Omega) = \{2, 3, 4, \dots, n, \dots\} = \mathbb{N} \setminus \{0, 1\}$$

### 2. Calculs de probabilités élémentaires ($n=2$ et $n=3$)
* Pour $N_2 = 2$, le système s'arrête dès le deuxième lancer. L'unique issue favorable est $(\text{P}, \text{P})$. Par indépendance des lancers :
  $$P(N_2 = 2) = P(\{\text{P}\} \times \{\text{P}\}) = \left(\frac{1}{2}\right) \times \left(\frac{1}{2}\right) = \frac{1}{4}$$
* Pour $N_2 = 3$, le motif $\text{PP}$ apparaît pour la première fois au rang 3. Les issues favorables à $\{N_2 = 3\}$ sont les suites commençant par $\text{FPP}$ (car si la suite commençait par $\text{PPP}$, le motif $\text{PP}$ serait apparu dès le rang 2, ce qui contredit $N_2 = 3$). 
  L'unique issue est donc $(\text{F}, \text{P}, \text{P})$. Ainsi :
  $$P(N_2 = 3) = \left(\frac{1}{2}\right)^3 = \frac{1}{8}$$

### 3. Relation générale pour $P(N_2 = n)$
Soit $n \ge 3$. Conditionnait par rapport au premier lancer :
* Si le premier lancer est $\text{F}$ (probabilité $1/2$), le compteur est "remis à zéro" d'une certaine manière, et il reste $n-1$ lancers pour voir apparaître $\text{PP}$ pour la première fois. La probabilité conditionnelle est $P(N_2 = n-1)$.
* Si le premier lancer est $\text{P}$ (probabilité $1/2$), on regarde le deuxième lancer :
  * S'il est $\text{P}$ (probabilité $1/2$), le motif $\text{PP}$ est réalisé au rang 2. Donc pour $n \ge 3$, la probabilité est nulle.
  * S'il est $\text{F}$ (probabilité $1/2$), le système obtient $\text{PF}$ au début. Le premier $\text{P}$ est "brûlé", et il reste $n-2$ lancers. Par indépendance, la probabilité est $P(N_2 = n-2)$.

Plus rigoureusement, en utilisant la formule des probabilités totales avec le système d'événements $(\text{F}_1, \text{PP}_2, \text{PF}_2)$ :
Pour $n \ge 3$ :
$$P(N_2 = n) = \frac{1}{2} P(N_2 = n-1 \mid \text{F}_1) + \frac{1}{2} P(N_2 = n-2 \mid \text{P}_1 \cap \text{F}_2)$$
Par indépendance des lancers :
$$P(N_2 = n) = \frac{1}{2} P(N_2 = n-1) + \frac{1}{4} P(N_2 = n-2)$$
On obtient une relation de récurrence linéaire d'ordre 2 :
$$\forall n \ge 4, \quad P(N_2 = n) = \frac{1}{2} P(N_2 = n-1) + \frac{1}{4} P(N_2 = n-2)$$
*(Avec les conditions initiales $P(N_2=2) = 1/4$ et $P(N_2=3) = 1/8$, cette récurrence permet de déterminer explicitement la loi de $N_2$ via l'équation caractéristique associée $r^2 - \frac{1}{2}r - \frac{1}{4} = 0$).*

### 4. Calcul de l'espérance mathématique
Par définition, l'espérance de $N_2$ existe si et seulement si la série $\sum_{n=2}^{+\infty} n P(N_2 = n)$ converge absolument (ce qui est vrai ici car les termes sont positifs et la somme des probabilités vaut 1, la loi étant géométriquement dominée).
En utilisant la méthode des états absorbants ou la sommation directe via la relation de récurrence, on a :
$$\mathbb{E}(N_2) = \sum_{n=2}^{+\infty} n P(N_2 = n) = 2 \left(\frac{1}{4}\right) + 3 \left(\frac{1}{8}\right) + \sum_{n=4}^{+\infty} n \left(\frac{1}{2} P(N_2 = n-1) + \frac{1}{4} P(N_2 = n-2)\right)$$
En effectuant un changement d'indice et en regroupant les termes avec $\sum P(N_2 = n) = 1$ :
$$\mathbb{E}(N_2) = 6$$
*(Interprétation : il faut en moyenne 6 lancers pour voir apparaître deux Piles consécutifs).*

### 5. Analyse critique des limites du modèle
L'application de ce modèle mathématique à un système concret (physique ou biologique) souffre de plusieurs limites qu'un esprit rigoureux se doit de souligner :

1. **L'hypothèse d'indépendance (absence de mémoire) :** 
   Le modèle suppose que $P(\text{P}_{n} \mid \text{P}_{n-1}) = P(\text{P}_n) = 1/2$. Dans un système physique réel (comme une pièce réelle lancée par un humain ou une machine), des biais mécaniques peuvent introduire une dépendance (fatigue du lanceur, usure de la pièce, température, asymétrie de masse). En biologie (génétique), les mutations sur une chaîne d'ADN ne sont absolument pas indépendantes en raison de la structure des gènes, des phases de lecture ou des mécanismes de réparation de l'ADN.
2. **L'hypothèse d'équiprobabilité ($p = q = 1/2$) :** 
   Dans la réalité, une pièce parfaite n'existe pas strictement (l'épaisseur de la pièce et les gravures rendent une face très légérement plus lourde). Fixer $p = 1/2$ est une idéalisation mathématique. Une étude de sensibilité (variation de $p$ autour de $1/2$) serait nécessaire pour valider la robustesse du modèle face à une incertitude expérimentale.