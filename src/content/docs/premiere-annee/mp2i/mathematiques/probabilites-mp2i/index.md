---
title: 'Cours : Probabilités sur un univers fini'
description: 'Fiche de synthèse officielle et démonstrations du programme CPGE MP2I.'
---

## 📌 1. Définitions & Cadre d'étude

Soit $\Omega$ un ensemble non vide, fini. Les éléments de $\Omega$ sont appelés des \text{issues} ou \text{événements élémentaires}. L'ensemble des parties de $\Omega$, noté $\mathcal{P}(\Omega)$, est l'ensemble des \text{événements}.

### Définition : Espace probabilisé fini
Une \text{probabilité} sur $\Omega$ est une application $P : \mathcal{P}(\Omega) \to [0, 1]$ telle que :
1. $P(\Omega) = 1$.
2. Pour toute famille finie $(A_i)_{1 \le i \le n}$ d'événements deux à deux disjoints (i.e. $\forall i \neq j, \, A_i \cap A_j = \emptyset$), on a :
   $$P\left(\bigcup_{i=1}^n A_i\right) = \sum_{i=1}^n P(A_i)$$

Le couple $(\Omega, P)$ est appelé un \text{espace probabilisé fini}.

### Propriétés immédiates
* Pour tout événement $A$, $P(\bar{A}) = 1 - P(A)$.
* $P(\emptyset) = 0$.
* Si $A \subset B$, alors $P(A) \le P(B)$ et $P(B \setminus A) = P(B) - P(A)$.
* \text{Formule du crible de Poincaré (cas $n=2$)} : 
  $$P(A \cup B) = P(A) + P(B) - P(A \cap B)$$

### Équiprobabilité
Lorsque $\Omega$ est muni de l'équiprobabilité, tous les événements élémentaires ont la même probabilité. Si $|\Omega| = n$ et $|A| = k$, alors :
$$P(A) = \frac{|A|}{|\Omega|} = \frac{k}{n}$$
Le calcul de probabilités se ram এইভাবেère alors à du dénombrement rigoureux ($\text{arrangements}$, $\text{combinaisons}$, $\text{permutations}$).

---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### Conditionnement et Indépendance

#### Définition : Probabilité conditionnelle
Soit $B$ un événement tel que $P(B) > 0$. Pour tout événement $A$, la probabilité de $A$ sachant $B$ est définie par :
$$P_B(A) = P(A \mid B) = \frac{P(A \cap B)}{P(B)}$$

#### Théorème : Formule des probabilités totales
Soit $(A_i)_{1 \le i \le n}$ un système complet d'événements de $(\Omega, P)$ (i.e. les $A_i$ sont deux à deux disjoints, leur réunion est $\Omega$, et $\forall i, \, P(A_i) > 0$). Alors, pour tout événement $B$ :
$$P(B) = \sum_{i=1}^n P(B \cap A_i) = \sum_{i=1}^n P(A_i) P_{A_i}(B)$$

#### Théorème : Formule de Bayes
Sous les mêmes hypothèses, si de plus $P(B) > 0$, alors pour tout index $j$ :
$$P_{B}(A_j) = \frac{P(A_j) P_{A_j}(B)}{P(B)} = \frac{P(A_j) P_{A_j}(B)}{\sum_{i=1}^n P(A_i) P_{A_i}(B)}$$

#### Définition : Indépendance de deux événements
Deux événements $A$ et $B$ sont dits \text{indépendants} si :
$$P(A \cap B) = P(A)P(B)$$
*Démonstration de compatibilité* : Si $P(B) > 0$ et $P(A) > 0$, $A$ et $B$ sont indépendants si et seulement si $P_B(A) = P(A)$.

---

### Variables aléatoires discrètes sur un univers fini

#### Définition
Une \text{variable aleatoire} $X$ sur $(\Omega, P)$ est une application $X : \Omega \to \mathbb{R}$. 
L'ensemble des valeurs prises par $X$ est noté $X(\Omega) = \{x_1, x_2, \dots, x_r\}$ (fini).
La \text{loi de probabilité} de $X$ est caractérisée par l'ensemble des valeurs $\{P(X = x_i)\}_{1 \le i \le r}$.

#### Définition : Espérance mathématique
L'espérance d'une variable aléatoire $X$ est définie par :
$$E(X) = \sum_{x \in X(\Omega)} x \cdot P(X = x) = \sum_{i=1}^r x_i P(X = x_i)$$

#### Théorème : Linéarité de l'espérance
Pour toutes variables aléatoires $X$ et $Y$ sur $(\Omega, P)$ et tous réels $\alpha, \beta \in \mathbb{R}$ :
$$E(\alpha X + \beta Y) = \alpha E(X) + \beta E(Y)$$
*Démonstration* : 
$$E(\alpha X + \beta Y) = \sum_{\omega \in \Omega} (\alpha X(\omega) + \beta Y(\omega)) P(\{\omega\})$$
Par distributivité et associativité de la sommation dans $\mathbb{R}$ :
$$= \alpha \sum_{\omega \in \Omega} X(\omega)P(\{\omega\}) + \beta \sum_{\omega \in \Omega} Y(\omega)P(\{\omega\}) = \alpha E(X) + \beta E(Y) \quad \blacksquare$$

#### Définition : Variance et Écart-type
La \text{variance} d'une variable aléatoire $X$ est définie (si elle existe) par :
$$V(X) = E\left((X - E(X))^2\right)$$
\text{Théorème de König-Huygens} : 
$$V(X) = E(X^2) - (E(X))^2$$
L'\text{écart-type} est $\sigma(X) = \sqrt{V(X)}$.

---

## 💡 3. Méthodes de calcul & Algorithmes

### Méthode 1 : Utilisation des systèmes complets d'événements
Pour calculer la probabilité d'un événement complexe $B$, recherchez systématiquement une partition naturelle de l'univers $\Omega$ (par exemple, selon les résultats d'une première expérience) pour appliquer la formule des probabilités totales.

### Méthode 2 : Calcul de l'espérance par l'indicateur d'événements
Pour calculer l'espérance d'une variable comptant un nombre d'occurrences (ex: nombre de points fixes, nombre de paires), exprimez $X$ comme une somme de variables indicatrices :
$$X = \sum_{i=1}^n \mathbf{1}_{A_i}$$
Par linéarité de l'espérance :
$$E(X) = \sum_{i=1}^n E(\mathbf{1}_{A_i}) = \sum_{i=1}^n P(A_i)$$
Cette méthode contourne la détermination explicite de la loi de $X$.

---

## ⚠️ 4. Pièges classiques aux Concours

1. **Oubli de vérifier les conditions de non-nullité** : Utiliser $P_B(A)$ sans avoir vérifié au préalable que $P(B) >0$ est une faute éliminatoire de rigueur.
2. **Confusion entre incompatibilité et indépendance** : Deux événements de probabilités non nulles et incompatibles ($A \cap B = \emptyset$) ne sont **jamais** indépendants (car $P(A \cap B) = 0 \neq P(A)P(B)$).
3. **Indépendance mutuelle vs indépendance deux à deux** : Pour une famille $(A_i)_{1 \le i \le n}$ de variables ou d'événements, l'indépendance deux à deux n'implique **jamais** l'indépendance mutuelle. Veillez à utiliser la définition générale portant sur toutes les sous-familles.
4. **Mauvaise manipulation de l'univers** : Ne pas définir clairement l'ensemble $\Omega$ au début d'un problème conduit à des erreurs d'indexation ou de dénombrement. Spécifiez toujours $(\Omega, P)$.