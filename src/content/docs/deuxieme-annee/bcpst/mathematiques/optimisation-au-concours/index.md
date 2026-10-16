---
title: "Optimisation au concours : Mathématiques BCPST"
description: "Les questions incontournables aux concours, les erreurs à éviter et les rédactions modèles de jury."
sidebar:
  badge:
    text: "Méthode Concours"
    variant: "caution"
---

## 🎯 Objectif du module & Exigences des Jurys

En tant que concepteur de sujets et président de jury pour les concours de la filière BCPST (Agro-Véto, G2E), je ne le répéterai jamais assez : **la différence entre une note de 10/20 et une note de 16/20 ne réside pas dans la quantité de questions traitées, mais dans la rigueur absolue de la rédaction et la maîtrise des méthodes canoniques.**

En mathématiques appliquées aux sciences du vivant (statistiques inférentielles, probabilités discrètes et algèbre linéaire), les correcteurs recherchent trois critères fondamentaux :
1. **Le respect du cadre probabiliste ou algébrique :** Nommer les variables aléatoires, préciser leur loi, vérifier les hypothèses d'application d'un théorème (ex: conditions de validité d'une approximation normale, dimensions des espaces, stochasticité d'une matrice).
2. **La structuration de l'argumentation :** Un calcul numérique sans formule littérale préalable est sanctionné. Une conclusion statistique sans retour au contexte biologique ou concret perd tous ses points qualitatifs.
3. **La propreté de la rédaction :** L'utilisation correcte des quantificateurs, l'absence de notations ambiguës et le respect des normes typographiques LaTeX (notamment l'utilisation de `\text{...}` pour les unités et textes dans les expressions mathématiques).

Ce guide détaille deux thématiques majeures qui tombent quasi-systématiquement aux concours Agro-Véto et G2E.

---

## 📌 Question Type 1 : Intervalle de confiance et test d'hypothèse (test Z, test t de Student, test de comparaison de moyennes)

### 💡 Méthode canonique & Étapes de rédaction

Les questions d'inférence statistique se divisent en deux catégories : l'estimation par intervalle de confiance et les tests de décision. 

#### 1. Pour un intervalle de confiance (moyenne ou proportion) :
- **Étape 1 :** Définir rigoureusement la variable aléatoire modélisant l'échantillon $(X_1, X_2, \dots, X_n)$ et préciser son espérance $\mu$ et sa variance $\sigma^2$ (ou la proportion $p$).
- **Étape 2 :** Identifier la statistique pivotale (ex: la moyenne empirique $M_n = \frac{1}{n} \sum_{i=1}^n X_i$).
- **Étape 3 :** Appliquer le théorème adéquat (Théorème Central Limite si $n \ge 30$, ou loi normale exacte si la population est gaussienne).
- **Étape 4 :** Poser l'inéquation de probabilité $1 - \alpha$ et inverser pour isoler le paramètre inconnu.

#### 2. Pour un test d'hypothèse (ex: test de Student pour un échantillon ou comparaison de deux moyennes) :
- **Étape 1 :** Poser clairement l'hypothèse nulle $H_0$ et l'hypothèse alternative $H_1$ (unilatérale ou bilatérale).
- **Étape 2 :** Construire la statistique de test $T$ sous l'hypothèse $H_0$ et rappeler sa loi de probabilité théorique.
- **Étape 3 :** Fixer le risque de première espèce $\alpha$ (seuil de significativité, souvent $5\%$ ou $1\%$) et déterminer la région critique $W_\alpha$ (ou calculer la $p$-valeur si demandée).
- **Étape 4 :** Calculer la valeur numérique observée $t_{\text{obs}}$ à partir des données de l'échantillon.
- **Étape 5 :** Conclure en explicitant le rejet ou le non-rejet de $H_0$ **dans le contexte de l'énoncé** (biologie, agronomie, écologie).

---

### 📋 Exemple de sujet & Rédaction modèle type Concours

**Énoncé type :**
> On étudie le rendement (en $\text{q/ha}$) d'une variété de blé. Sur un échantillon indépendant de $n = 50$ parcelles, on observe une moyenne empirique $\bar{x} = 65,2 \text{ q/ha}$ et un écart-type empirique corrigé $s = 4,5 \text{ q/ha}$. 
> 1. Déterminer un intervalle de confiance de la moyenne au niveau de confiance de $95\%$.
> 2. On souhaite tester si le rendement moyen de cette variété diffère de la valeur historique $\mu_0 = 64,0 \text{ q/ha}$. Conclure au seuil $\alpha = 5\%$.

---

**Rédaction modèle type /20 :**

**1. Intervalle de confiance :**
Soit $(X_1, X_2, \dots, X_{50})$ l'échantillon i.i.d. représentant le rendement des parcelles. La taille de l'échantillon étant $n = 50 \ge 30$, nous pouvons invoquer le Théorème Central Limite. 
La variable aléatoire centrée réduite associée à la moyenne empirique $\bar{X}_n$ converge en loi vers une loi normale centrée réduite $\mathcal{N}(0, 1)$ :
$$Z = \frac{\bar{X}_n - \mu}{\frac{S_n}{\sqrt{n}}} \xrightarrow{\text{loi}} \mathcal{N}(0, 1)$$
Pour un niveau de confiance $1 - \alpha = 0,95$, la valeur critique associée lue dans la table de la loi normale est $u_{1 - \alpha/2} = 1,96$.
L'intervalle de confiance asymptotique au niveau $95\%$ est donné par :
$$\text{IC}_{0,95} = \left[ \bar{x} - 1,96 \frac{s}{\sqrt{n}} \,;\, \bar{x} + 1,96 \frac{s}{\sqrt{n}} \right]$$
A.N. : $\frac{s}{\sqrt{n}} = \frac{4,5}{\sqrt{50}} \approx 0,636$.
$$\text{IC}_{0,95} = [65,2 - 1,96 \times 0,636 \,;\, 65,2 + 1,96 \times 0,636] = [63,95 \,;\, 66,45] \text{ q/ha}$$

**2. Test d'hypothèse :**
- **Hypothèses :** On teste $H_0 : \mu = 64,0$ contre $H_1 : \mu \neq 64,0$ (test bilatéral).
- **Statistique de test :** Sous $H_0$, la variable $T = \frac{\bar{X}_n - \mu_0}{\frac{S_n}{\sqrt{n}}}$ suit approximativement la loi $\mathcal{N}(0, 1)$.
- **Région critique :** Pour $\alpha = 5\%$, la région de rejet est $W_{0,05} = ]-\infty, -1,96] \cup [1,96, +\infty[$.
- **Valeur observée :** 
$$t_{\text{obs}} = \frac{65,2 - 64,0}{\frac{4,5}{\sqrt{50}}} = \frac{1,2}{0,636} \approx 1,886$$
- **Conclusion :** Puisque $t_{\text{obs}} = 1,886 \notin W_{0,05}$ (car $1,886 < 1,96$), **on ne rejette pas l'hypothèse nulle $H_0$** au seuil de $5\%$. Les données ne permettent pas de mettre en évidence une différence significative entre le rendement moyen observé et la valeur historique de $64,0 \text{ q/ha}$.

---

### ⚠️ Les pièges majeurs soulignés dans les rapports de jury

- **Oubli du TCL ou confusion des lois :** Utiliser la loi de Student sans préciser que la population parente est supposée gaussienne, alors que $n \ge 30$ impose d'utiliser l'approximation normale via le Théorème Central Limite.
- **Confusion entre écart-type empirique $s$ et écart-type théorique $\sigma$ :** Dans les cas pratiques, $\sigma$ est inconnu. Utiliser $s$ (corrigé du facteur $\frac{n}{n-1}$) est impératif.
- **Absence de conclusion contextuelle :** S'arrêter à "on rejette $H_0$" sans expliciter ce que cela signifie biologiquement ou agronomiquement coûte systématiquement les points de conclusion.

---

## 📌 Question Type 2 : Réduction de matrices stochastiques et étude d'états d'équilibre en chaîne de Markov

### 💡 Méthode canonique & Étapes de rédaction

Les chaînes de Markov à temps discret et espace d'états fini sont omniprésentes en génétique des populations, en écologie (dynamique des métapopulations) et en épidémiologie.

- **Étape 1 : Caractérisation de la matrice stochastique.** 
  Vérifier que la matrice $P = (p_{ij})$ est carrée d'ordre $n$, à coefficients réels positifs ou nuls, et que **la somme de chaque ligne vaut $1$** ($\sum_{j=1}^n p_{ij} = 1$).
- **Étape 2 : Recherche des valeurs propres.**
  Résoudre l'équation caractéristique $\det(P - \lambda I_n) = 0$. 
  *Propriété clé exigée par le jury :* Toute matrice stochastique admet toujours $\lambda = 1$ comme valeur propres (car la somme des lignes de $P - I_n$ vaut zéro, donc la somme des colonnes de $P^T - I_n$ est nulle, ce qui annule le déterminant). De plus, le rayon spectral vérifie $\rho(P) \le 1$.
- **Étape 3 : Détermination des sous-espaces propres.**
  - Pour $\lambda = 1$, résoudre le système linéaire $(P - I_n)X = 0$ pour trouver l'espace des vecteurs stationnaires (ou états d'équilibre).
  - Normaliser le vecteur stationnaire $\pi$ tel que $\sum \pi_i = 1$ (si l'on cherche une distribution de probabilité stationnaire).
- **Étape 4 : Diagonalisation ou étude de la limite (si demandé).**
  Utiliser les projecteurs spectraux ou la diagonalisation $P = P D P^{-1}$ pour calculer $P^k$ lorsque $k \to +\infty$, en s'appuyant sur le fait que les valeurs propres de module strictement inférieur à $1$ s'annulant à la limite (si la chaîne est régulière/ergodique).

---

### 📋 Exemple de sujet & Rédaction modèle type Concours

**Énoncé type :**
> On considère une population d'animaux répartie en deux états : $A$ (sain) et $B$ (porteur sain). D'une année sur l'autre, la dynamique est modélisée par la matrice de transition :
> $$P = \begin{pmatrix} 0,8 & 0,2 \\ 0,4 & 0,6 \end{pmatrix}$$
> 1. Justifier que $P$ est une matrice stochastique. Déterminer ses valeurs propres.
> 2. Déterminer l'état d'équilibre stationnaire $\pi = (\pi_A, \pi_B)$ de la chaîne.
> 3. Calculer $\lim_{k \to +\infty} P^k$ et interpréter.

---

**Rédaction modèle type /20 :**

**1. Nature de la matrice et valeurs propres :**
- La matrice $P$ est de taille $2 \times 2$ à coefficients réels. Ses coefficients sont tous positifs ou nuls. De plus, la somme des éléments de chaque ligne vaut $1$ :
  - Ligne 1 : $0,8 + 0,2 = 1$
  - Ligne 2 : $0,4 + 0,6 = 1$
  Par conséquent, **$P$ est une matrice stochastique**.
- Recherche des valeurs propres : on calcule le polynôme caractéristique $\chi_P(\lambda) = \det(P - \lambda I_2)$.
  $$\chi_P(\lambda) = \begin{vmatrix} 0,8 - \lambda & 0,2 \\ 0,4 & 0,6 - \lambda \end{vmatrix} = (0,8 - \lambda)(0,6 - \lambda) - (0,2 \times 0,4)$$
  $$\chi_P(\lambda) = \lambda^2 - 1,4\lambda + 0,48 - 0,08 = \lambda^2 - 1,4\lambda + 0,40$$
  Le discriminant vaut $\Delta = (-1,4)^2 - 4(1)(0,40) = 1,96 - 1,60 = 0,36 = (0,6)^2$.
  Les racines sont :
  $$\lambda_1 = \frac{1,4 + 0,6}{2} = 1 \quad \text{et} \quad \lambda_2 = \frac{1,4 - 0,6}{2} = 0,4$$
  Les valeurs propres de $P$ sont donc **$\lambda_1 = 1$ et $\lambda_2 = 0,4$**.

**2. État d'équilibre stationnaire :**
Un vecteur stationnaire $\pi = (\pi_A, \pi_B)$ vèrifie l'équation matricielle $\pi P = \pi$ avec la condition de normalization $\pi_A + \pi_B = 1$.
Cela se traduit par le système :
$$\begin{cases} 0,8\pi_A + 0,4\pi_B = \pi_A \\ 0,2\pi_A + 0,6\pi_B = \pi_B \\ \pi_A + \pi_B = 1 \end{cases} \iff \begin{cases} -0,2\pi_A + 0,4\pi_B = 0 \\ 0,2\pi_A - 0,4\pi_B = 0 \\ \pi_A + \pi_B = 1 \end{cases}$$
La première équation donne $\pi_A = 2\pi_B$. En injectant dans la condition de normalisation :
$$2\pi_B + \pi_B = 1 \implies 3\pi_B = 1 \implies \pi_B = \frac{1}{3}$$
On en déduit $\pi_A = \frac{2}{3}$.
L'unique état stationnaire est donc le vecteur **$\pi = \begin{pmatrix} \frac{2}{3} & \frac{1}{3} \end{pmatrix}$**.

**3. Étude de la limite lorsque $k \to +\infty$ :**
Puisque $P$ est diagonalisable (deux valeurs propres distinctes $\lambda_1 = 1$ et $\lambda_2 = 0,4$ avec $|\lambda_2| < 1$), il existe une matrice de passage $Q$ telle que $P = Q D Q^{-1}$ avec $D = \text{diag}(1, 0,4)$.
Par conséquent, $P^k = Q D^k Q^{-1}$.
Lorsque $k \to +\infty$, $0,4^k \to 0$, de sorte que :
$$\lim_{k \to +\infty} D^k = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}$$
Toutes les lignes de la matrice limite $P^\infty = \lim_{k \to +\infty} P^k$ convergent vers le même vecteur stationnaire $\pi$ :
$$P^\infty = \begin{pmatrix} \frac{2}{3} & \frac{1}{3} \\ \frac{2}{3} & \frac{1}{3} \end{pmatrix}$$
**Interprétation biologique :** À long terme, indépendamment de la répartition initiale des animaux, la proportion d'individus sains dans la population se stabilisera autour de $66,7\%$ et celle des porteurs sains autour de $33,3\%$.

---

### ⚠️ Les pièges majeurs soulignés dans les rapports de jury

- **Confusions dans l'équation d'équilibre :** Écrire $P \pi = \pi$ (multiplication à gauche par une matrice colonne) au lieu de $\pi P = \pi$ (vecteur ligne) lorsque l'on manipule des distributions en lignes, ou inversement. Restez cohérent avec le choix de notation du sujet.
- **Oubli de la condition de normalisation :** Trouver le sous-espace propre associé à $\lambda = 1$ sous forme vectorielle (ex: $(2t, t)$) et oublier d'imposer $\sum \pi_i = 1$, ce qui empêche d'obtenir une distribution de probabilité unique.
- **Absence de justification de la limite :** Écrire brutalement $\lim P^k$ sans mentionner le fait que les valeurs propres subordonnées ont un module strictement inférieur à $1$ (propriété d'ergodicité/régularité de la chaîne).