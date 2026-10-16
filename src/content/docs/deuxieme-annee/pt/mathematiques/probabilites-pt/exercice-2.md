---
title: 'Exercice 2 : Loi binomiale et Poisson'
description: 'Problème d entraînement type concours pour PT.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Dans le cadre de l'étude de la fiabilité des composants micro-électroniques produits par une chaîne d'assemblage industrielle, on s'intéresse à l'apparition de défauts de soudure. Soit $n \in \mathbb{N}^*$ le nombre de composants testés. On suppose que les composants sont testés de manière indépendante les uns des autres. 

Pour un composant donné, la probabilité qu'il présente un défaut de soudure est notée $p \in ]0, 1[$. 
On introduit la variable aléatoire $X_n$ représentant le nombre total de composants défectueux parmi les $n$ testés.

L'objectif de ce problème est d'étudier le comportement de la loi de $X_n$ lorsque $n$ devient grand et que la probabilité de défaut $p_n$ dépend de $n$ de telle sorte que le nombre moyen de défauts $\lambda = n p_n$ reste constant. Ce passage à la limite formalise l'approximation de la loi binomiale par la loi de Poisson, fondamentale en théorie de la fiabilité et en contrôle qualité.

---

### ❓ Questions progressives (incluant une analyse critique du modèle)

1. **Rappels sur le modèle de base :**
   Quelle est la loi suivie par la variable aléatoire $X_n$ ? Préciser son espace d'état, son espérance $\mathbb{E}(X_n)$ et sa variance $\nabla(X_n)$ (ou $\text{Var}(X_n)$).

2. **Calcul de probabilités exactes :**
   Expliciter l'expression de la probabilité $\mathbb{P}(X_n = k)$ pour tout $k \in [[0, n]]$. 
   Calculer explicitement la limite de $\mathbb{P}(X_n = 0)$ lorsque $n$ tend vers $+\infty$, dans le cas où $p_n = \frac{\lambda}{n}$ avec $\lambda > 0$ fixé.

3. **Approximation asymptotique (Théorème de Poisson) :**
   Toujours dans le cas où $p_n = \frac{\lambda}{n}$ (où $\lambda > 0$ est un réel fixé), déterminer la limite de $\mathbb{P}(X_n = k)$ lorsque $n \to +\infty$, pour un entier $k \in \mathbb{N}$ fixé. 
   Reconnaître la loi de probabilité ainsi obtenue.

4. **Étude de l'erreur d'approximation :**
   On pose $\mathcal{P}(\lambda)$ la loi de Poisson de paramètre $\lambda$. Pour $n \ge \lambda$, on définit la distance en variation totale (ou l'écart maximal) entre la loi exacte et la loi limite. 
   Évaluer le comportement de $\left| \mathbb{P}(X_n = k) - e^{-\lambda}\frac{\lambda^k}{k!} \itude \right|$ pour $n$ grand en effectuant un développement limité d'ordre $1$ en $\frac{1}{n}$ du terme général.

5. **Analyse critique du modèle industriel :**
   Dans une usine réelle, l'hypothèse d'indépendance des pannes entre composants est-elle toujours réaliste ? Citer un phénomène physique ou organisationnel qui pourrait vicier cette hypothèse et modifier la loi de $X_n$.

---

### 💡 Pistes & Indications méthodologiques

* **Question 1 :** Pensez à identifier le schéma de Bernoulli élémentaire répété $n$ fois de manière identique et indépendante.
* **Question 2 & 3 :** Transformez le produit factoriel et les puissances en passant par le logarithme népérien ou en écrivant explicitement les quotients de factorielles (simplification des $\frac{n!}{(n-k)!}$). Utilisez le résultat classique $\lim_{n\to +\infty} \left(1 - \frac{\lambda}{n}\right)^n = e^{-\lambda}$.
* **Question 4 :** Utilisez les équivalents et les développements limités usuels, notamment $\ln(1 - x) = -x - \frac{x^2}{2} + o(x)$ au voisinage de $0$.
* **Question 5 :** Réfléchissez aux conditions de fabrication en série (panne d'une machine entière affectant un lot continu de composants).

---

### 📋 Corrigé détaillé pas à pas

#### Corrigé de la question 1
Puisque chaque composant est testé de manière indépendante avec la même probabilité de succès (ici, "être défectueux") égale à $p$, la variable aléatoire $X_n$ comptant le nombre de succès dans une suite de $n$ épreuves de Bernoulli indépendantes suit une **loi binomiale** de paramètres $n$ et $p$.
On note :
$$X_n \sim \mathcal{B}(n, p)$$
* **Espace d'état :** $X_n(\Omega) = [[0, n]] = \{0, 1, 2, \dots, n\}$.
* **Espérance :** $\mathbb{E}(X_n) = n p$.
* **Variance :** $\text{Var}(X_n) = n p (1 - p)$.

---

#### Corrigé de la question 2
Par définition de la loi binomiale, pour tout $k \in [[0, n]]$ :
$$\mathbb{P}(X_n = k) = \binom{n}{k} p^k (1 - p)^{n-k}$$

Dans le cadre où $p = p_n = \frac{\lambda}{n}$ :
$$\mathbb{P}(X_n = 0) = \binom{n}{0} \left(\frac{\lambda}{n}\right)^0 \left(1 - \frac{\lambda}{n}\right)^{n-0} = \left(1 - \frac{\lambda}{n}\right)^n$$
Par composition de limites (ou en passant par l'exponentielle du log), on sait que :
$$\lim_{n \to +\infty} \mathbb{P}(X_n = 0) = \lim_{n \to +\infty} \left(1 - \frac{\lambda}{n}\right)^n = e^{-\lambda}$$

---

#### Corrigé de la question 3
Soit $k \in \mathbb{N}$ fixé. Pour $n \ge k$, explicitons $\mathbb{P}(X_n = k)$ avec $p_n = \frac{\lambda}{n}$ :
$$\mathbb{P}(X_n = k) = \frac{n!}{k!(n-k)!} \left(\frac{\lambda}{n}\right)^k \left(1 - \frac{\lambda}{n}\right)^{n-k}$$
Réécrivons le terme polynomial en $n$ :
$$\mathbb{P}(X_n = k) = \frac{\lambda^k}{k!} \cdot \frac{n(n-1)(n-2)\dots(n-k+1)}{n^k} \cdot \left(1 - \frac{\lambda}{n}\right)^n \cdot \left(1 - \frac{\lambda}{n}\right)^{-k}$$
Analysons chaque facteur lorsque $n \to +\infty$ (avec $k$ fixé) :
1. $\frac{\lambda^k}{k!} \to \frac{\lambda^k}{k!}$
2. $\frac{n(n-1)\dots(n-k+1)}{n^k} = 1 \cdot \left(1 - \frac{1}{n}\right)\left(1 - \frac{2}{n}\right)\dots\left(1 - \frac{k-1}{n}\right) \xrightarrow[n\to +\infty]{} 1$
3. $\left(1 - \frac{\lambda}{n}\sainte\right)^n \xrightarrow[n\to +\infty]{} e^{-\lambda}$
4. $\left(1 - \frac{\lambda}{n}\right)^{-k} \xrightarrow[n\to +\infty]{} 1^{-k} = 1$

Par produit de limites, on obtient :
$$\lim_{n \to +\infty} \mathbb{P}(X_n = k) = e^{-\lambda} \frac{\lambda^k}{k!}$$

Cette limite est la probabilité d'une variable aléatoire suivant une **loi de Poisson de paramètre $\lambda$**, notée $\mathcal{P}(\lambda)$. C'est le théorème de Poisson (ou loi des événements rares).

---

#### Corrigé de la question 4
Pour estimer la vitesse de convergence, évaluons le terme général via son logarithme. Soit $u_n = \ln\left(\mathbb{P}(X_n = k)\right)$ pour $n$ grand :
$$\ln\left(\mathbb{P}(X_n = k)\right) = \ln\left(\frac{n!}{k!(n-k)!}\right) + k \ln\left(\frac{\lambda}{n}\right) + (n-k)\ln\left(1 - \frac{\lambda}{n}\right)$$
Utilisons la formule de Stirling pour $\ln(n!)$ ou un développement asymptotique :
$$\ln(n!) = n \ln(n) - n + \frac{1}{2}\ln(n) + \frac{1}{2}\ln(2\pi) + o(1)$$
Plus simplement, concentrons-nous sur le terme dominant de l'erreur commise par l'approximation de $\left(1 - \frac{\lambda}{n}\right)^{n-k}$ et du produit factoriel. 
En développant $\ln\left(1 - \frac{\lambda}{n}\right) = -\frac{\lambda}{n} - \frac{\lambda^2}{2n^2} + o\left(\frac{1}{n^2}\right)$, on obtient :
$$(n-k)\ln\left(1 - \frac{\lambda}{n}\right) = (n-k) \left(-\frac{\lambda}{n} - \frac{\lambda^2}{2n^2} + o\left(\frac{1}{n^2}\right)\right)$$
$$= -\lambda + \frac{k\lambda}{n} - \frac{\lambda^2}{2n} + o\left(\frac{1}{n}\right)$$
De même, pour le terme factoriel $\ln\left(\frac{n!}{(n-k)! n^k}\right)$ :
$$\ln\left(\prod_{j=0}^{k-1} \left(1 - \frac{j}{n}\right)\right) = \sum_{j=0}^{k-1} \ln\left(1 - \frac{j}{n}\right) = \sum_{j=0}^{k-1} \left(-\frac{j}{n} + O\left(\frac{1}{n^2}\right)\right) = -\frac{k(k-1)}{2n} + O\left(\frac{1}{n^2}\right)$$
En sommant ces contributions dans l'expression logarithmique :
$$\ln\left(\mathbb{P}(X_n = k)\right) = \ln\left(e^{-\lambda} \frac{\lambda^k}{k!}\right) - \frac{\lambda^2 + k(k-1)}{2n} + o\left(\frac{1}{n}\right)$$
Par exponentiation, il vient :
$$\mathbb{P}(X_n = k) = e^{-\lambda} \frac{\lambda^k}{k!} \exp\left( -\frac{\lambda^2 + k(k-1)}{2n} + o\left(\frac{1}{n}\right) \right)$$
En utilisant le développement $\exp(x) = 1 + x + o(x)$, l'écart est en $\mathcal{O}\left(\frac{1}{n}\right)$ :
$$\mathbb{P}(X_n = k) = e^{-\lambda} \frac{\lambda^k}{k!} \left( 1 - \frac{\lambda^2 + k(k-1)}{2n} + o\left(\frac{1}{n}\right) \right)$$
L'erreur d'approximation est donc de l'ordre de $\frac{1}{n}$.

---

#### Corrigé de la question 5
Dans un contexte industriel réel, **l'hypothèse d'indépendance des pannes est souvent mise en défaut**. 
* **Causes de non-indépendance :** 
  1. *Effet de lot (Machine déréglée) :* Si un outil de soudure sur la chaîne se dérègle, il va défectueusement souder une série continue de composants. Les pannes ne sont plus indépendantes mais corrélées temporellement.
  2. *Variabilité des matières premières :* Un lot entier de composants reçu d'un fournisseur peut être de moins bonne qualité, augmentant localement la probabilité de défaut $p$ pour ce sous-ensemble.
* **Conséquence mathématique :** 
  Si les variables de Bernoulli ne sont plus indépendantes, $X_n$ ne suit plus une loi binomiale $\mathcal{B}(n, p)$. On observe généralement une **surdispersion** (la variance de $X_n$ devient supérieure à $n p(1-p)$), nécessitant des modèles plus complexes (comme les lois beta-binomiales ou l'introduction de chaînes de Markov cachées).