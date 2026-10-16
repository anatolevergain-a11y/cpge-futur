---
title: 'Cours : Espaces probabilisés finis'
description: 'Synthèse de cours, théorèmes fondamentaux et démonstrations.'
---

## 📌 1. Définitions & Cadre d'étude

Soit $\Omega$ un ensemble non vide. Dans le cadre du programme de MPSI, on s'intéresse exclusivement aux **univers finis**.

### Définitions fondamentales
- **Univers ($\Omega$) :** Ensemble des résultats possibles d'une expérience aléatoire, avec $\Omega = \{\omega_1, \omega_2, \dots, \omega_n\}$ où $n \in \mathbb{N}^*$.
- **Événement :** Élément de l'ensemble des parties de $\Omega$, noté $\mathcal{P}(\Omega)$. Tout sous-ensemble $A \in \mathcal{P}(\Omega)$ est un événement.
- **Événement élémentaire :** Singleton $\{\omega\}$ pour $\omega \in \Omega$.
- **Système complet d'événements (SCE) :** Une famille $(A_i)_{i \in I}$ d'événements de $\Omega$ forme un système complet d'événements si :
  1. $\forall i \in I, \; A_i \neq \emptyset$
  2. $\forall (i, j) \in I^2, \; i \neq j \implies A_i \cap A_j = \emptyset$ (incompatibilité deux à deux)
  3. $\bigcup_{i \in I} A_i = \Omega$ (couvre l'univers)

### Espace probabilisé fini
Une **probabilité** sur $\Omega$ est une application $P : \mathcal{P}(\Omega) \to [0, 1]$ vérifiant les axiomes de Kolmogorov :
1. $P(\Omega) = 1$.
2. **Additivité finie :** Pour tous événements $A$ et $B$ disjoints ($A \cap B = \emptyset$), $P(A \cup B) = P(A) + P(B)$.
Par récurrence, pour toute famille finie d'événements $(A_i)_{1 \le i \le n}$ deux à deux disjoints :
$$P\left(\bigcup_{i=1}^{n} A_i\right) = \sum_{i=1}^{n} P(A_i)$$

Le couple $(\Omega, P)$ est appelé un **espace probabilisé fini**.

### Conséquences immédiates
- $P(\emptyset) = 0$.
- Pour tout événement $A$, $P(A^c) = 1 - P(A)$.
- Pour tous événements $A$ et $B$, $P(A \cup B) = P(A) + P(B) - P(A \cap B)$.
- **Équiprobabilité :** Si $\Omega$ est muni d'une probabilité uniforme (cas où tous les événements élémentaires ont la même probabilité), alors pour tout événement $A$ :
  $$P(A) = \frac{\text{card}(A)}{\text{card}(\Omega)}$$

---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### Théorème : Probabilité conditionnelle
Soit $(\Omega, P)$ un espace probabilisé fini et $B$ un événement tel que $P(B) > 0$.

**Définition :** Pour tout événement $A$, la probabilité de $A$ sachant $B$ est définie par :
$$P_B(A) = P(A \mid B) = \frac{P(A \cap B)}{P(B)}$$
Proposition: ** L'application $A \mapsto P(A \mid B)$ définit une probabilité sur $(\Omega, P)$.

### Théorème des probabilités composées
Soient $A_1, A_2, \dots, A_n$ des événements de $\Omega$ tels que $P(A_1 \cap A_2 \cap \dots \cap A_{n-1}) > 0$. Alors :
$$P(A_1 \cap A_2 \cap \dots \cap A_n) = P(A_1) P(A_2 \mid A_1) P(A_3 \mid A_1 \cap A_2) \dots P(A_n \mid A_1 \cap \dots \cap A_{n-1})$$

### Théorème des probabilités totales
Soit $(A_i)_{i \in I}$ un système complet d'événements de $\Omega$ tel que pour tout $i \in I$, $P(A_i) > 0$. Alors, pour tout événement $B$ :
$$P(B) = \sum_{i \in I} P(B \cap A_i) = \sum_{i \in I} P(B \mid A_i) P(A_i)$$

> **Démonstration :**
> On remarque que l'univers $\Omega = \bigcup_{i \in I} A_i$ est une union disjointe.
> Par conséquent, l'événement $B$ peut se décomposer en une union disjointe :
> $$B = B \cap \Omega = B \cap \left(\bigcup_{i \in I} A_i\right) = \bigcup_{i \in I} (B \cap A_i)$$
> Les événements $(B \cap A_i)_{i \in I}$ étant deux à deux disjoints (car les $A_i$ le sont), l'axiome d'additivité finie permet d'écrire :
> $$P(B) = \sum_{i \in I} P(B \cap A_i)$$
> Enfin, par définition de la probabilité conditionnelle (puisque $P(A_i) > 0$), on a $P(B \cap A_i) = P(B \mid A_i)P(A_i)$, ce qui conclut :
> $$P(B) = \sum_{i \in I} P(B \mid A_i) P(A_i) \quad \blacksquare$$

### Formule de Bayes
Soit $(A_i)_{i \in I}$ un système complet d'événements tel que $\forall i \in I, \; P(A_i) > 0$. Soit $B$ un événement tel que $P(B) > 0$. Alors, pour tout index $j \in I$ :
$$P(A_j \mid B) = \frac{P(B \mid A_j)P(A_j)}{\sum_{i \in I} P(B \mid A_i)P(A_i)}$$

### Indépendance d'événements
- **Deux événements :** $A$ et $B$ sont indépendants si $P(A \cap B) = P(A)P(B)$.
- **Famille d'événements :** Une famille $(A_i)_{i \in I}$ est dite indépendante si pour tout sous-ensemble fini $J \subset I$ avec $\text{card}(J) \ge 2$ :
  $$P\left(\bigcap_{j \in J} A_j\right) = \prod_{j \in J} P(A_j)$$
- **Remarque :** L'indépendance deux à deux n'implique pas l'indépendance mutuelle.

---

## 💡 3. Méthodes de calcul & Algorithmes

### Méthode 1 : Modélisation rigoureuse d'une expérience aléatoire
1. **Identifier l'univers $\Omega$ :** Décrire $\Omega$ clairement, souvent comme un produit cartésien (tirages successifs, avec ou sans remise, ordonnés ou non).
2. **Choisir la tribu :** C'est systématiquement $\mathcal{P}(\Omega)$ en univers fini.
3. **Définir la probabilité $P$ :** Le plus souvent, l'équiprobabilité est justifiée par des expressions du type "au hasard", "indiscernables au toucher", "dé bien équilibré".

### Méthode 2 : Dénombrement (Analyse combinatoire)
Dans le cadre de l'équiprobabilité, le calcul de $P(A)$ se ramène au calcul de card($A$) et card($\Omega$) :
- **Listes (avec remise, ordonnées) :** $n^p$ (pour un tirage de $p$ éléments parmi $n$).
- **Arrangements (sans remise, ordonnés) :** $A_n^p = \frac{n!}{(n-p)!}$.
- **Combinaisons (sans remise, non ordonnés) :** $\binom{n}{p} = \frac{n!}{p!(n-p)!}$.

### Méthode 3 : Utilisation des arbres de probabilités
Pour les expériences composées (enchaînement de tirages, épreuves de Bernoulli successives) :
- Les **probabilités des branches de premier niveau** correspondent aux lois marginales.
- Les **branches issues d'un nœud** portent des probabilités conditionnelles.
- La probabilité d'un chemin (intersection) est le **produit** des probabilités le long de ce chemin.
- La probabilité d'un événement correspondant à plusieurs chemins est la **somme** des probabilités de ces chemins (probabilités totales).

---

## ⚠️ 4. Pièges classiques aux Concours

1. **Confondre incompatibilité et indépendance :**
   - Si $A$ et $B$ sont incompatibles ($A \cap B = \emptyset$) avec $P(A)>0$ et $P(B)>0$, alors $P(A \cap B) = 0 \neq P(A)P(B)$. **Ils ne sont jamais indépendants**.
2. **Oublier de vérifier les conditions de validité d'une formule :**
   - Utiliser $P(A \mid B)$ sans avoir préalablement vérifié ou démontré que $P(B) > 0$.
   - Appliquer la formule des probabilités totales avec une famille $(A_i)$ qui ne forme pas un véritable système complet d'événements (omission d'un cas ou intersection non vide).
3. **Mauvaise interprétation du vocabulaire combinatoire :**
   - "Tirer simultanément" $\implies$ Combinaisons.
   - "Tirer successives avec remise" $\implies$ $n$-uplets.
   - "Tirer successives sans remise" $\implies$ Arrangements.
4. **Généralisation abusive de l'indépendance :**
   - Croire que si $P(A \cap B \cap C) = P(A)P(B)P(C)$, alors les événements sont nécessairement indépendants deux à deux (et réciproquement). Les notions sont mathématiquement distinctes.