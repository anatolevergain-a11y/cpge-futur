---
title: 'Exercice 1 : Combinaisons et arrangements'
description: 'Problème d entraînement type concours pour PCSI.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Dans le cadre de l'étude des modèles stochastiques discrets en première année de CPGE (filière PCSI), le dénombrement combinatoire constitue le socle fondamental de la construction des espaces probabilisés finis. Le présent problème propose d'étudier un protocole de tirages successifs avec des contraintes structurelles, inspiré des urnes de Pólya et des problèmes d'allocations de ressources en informatique.

Soit $n \in \mathbb{N}^*$ et $p \in \mathbb{N}^*$ tels que $p \le n$. On dispose d'une urne contenant $n$ boules indiscernables au toucher, numérotées de $1$ à $n$. On effectue des tirages successifs de boules selon un protocole que l'on précisera au fil des parties. L'objectif est d'analyser la complexité combinatoire des configurations possibles et de calculer les probabilités d'événements complexes associés à ces tirages.

---

### ❓ Questions progressives (incluant une analyse critique du modèle)

#### Partie I : Dénombrement fondamental et arrangements
1. **[Q1]** On effectue $k$ tirages successifs **avec remise** d'une boule dans l'urne (où $k \in \mathbb{N}^*$). Déterminer le cardinal de l'univers $\Omega_1$ des résultats possibles.
2. **[Q2]** On effectue cette fois $k$ tirages successifs **sans remise** (avec $k \le n$). 
   - Déterminer le nombre d'arrangements possibles, noté $A_n^k$. 
   - Exprimer $A_n^k$ à l'aide de factorielles.
3. **[Q3]** On tire simultanément $k$ boules de l'urne (avec $k \le n$). Quel est le nombre de tirages possibles, noté $\binom{n}{k}$ ? Rappeler la relation de symétrie et la formule de Pascal.

#### Partie II : Probabilités sur un univers fini et paradoxe de l'anniversaire généralisé
4. **[Q4]** On tire simultanément $p$ boules dans l'urne contenant $n$ boules. Quelle est la probabilité $P_1$ que les numéros tirés soient tous consécutifs dans l'ensemble $\{1, 2, \dots, n\}$ (par exemple, $\{3, 4, 5\}$ pour $p=3$) ?
5. **[Q5]** On considère $k$ personnes. Chaque personne choisit de manière équiprobable et indépendante un jour de l'année parmi $n = 365$ jours (on néglige les années bissextiles).
   - Modéliser cette expérience aléatoire par un univers $\Omega$ muni d'une probabilité uniforme $\mathbb{P}$.
   - Exprimer la probabilité $q_k$ qu'au moins deux personnes partagent la même date d'anniversaire.
   - Écrire un encadrement ou une approximation numérique permettant de trouver le plus petit entier $k_0$ pour lequel $q_{k_0} > \frac{1}{2}$.

#### Partie III : Analyse critique du modèle d'équiprobabilité
6. **[Q6]** Dans la question Q5, le modèle suppose implicitement que les naissances sont réparties uniformément sur les $365$ jours de l'année et que les choix des individus sont mutuellement indépendants. 
   - Discuter la robustesse de ce modèle mathématique au regard de la réalité démographique (saisonnalité des naissances, jumeaux). 
   - Quel impact qualitatif une distribution non uniforme des naissances aurait-elle sur la probabilité $q_k$ ?

---

### 💡 Pistes & Indications méthodologiques

- **Pour Q1 et Q2** : Utilisez le principe multiplicatif (ou principe fondamental du dénombrement). Pour les arrangements sans remise, remarquez que le choix du $i$-ième tirage dépend des résultats des tirages précédents.
- **Pour Q4** : Dénombrez d'abord le nombre de sous-ensembles de $p$ entiers consécutifs parmi $\{1, 2, \dots, n\}$. Attention aux cas aux bornes.
- **Pour Q5** : Il est souvent plus simple de calculer la probabilité de l'événement contraire ("toutes les personnes ont des dates d'anniversaire différentes"), qui se ramène directement au calcul d'un arrangement sans remise. Utilisez l'approximation $\ln(1+x) \approx x$ pour $x$ petit.

---

### 📋 Corrigé détaillé pas à pas

#### Partie I : Dénombrement fondamental et arrangements

1. **[Corrigé Q1]** 
   Puisque les tirages s'effectuent *avec remise*, à chaque tirage, il y a $n$ issues possibles. Les $k$ tirages étant indépendants, le nombre total de résultats possibles (l'univers $\Omega_1$) est donné par le produit cartésien :
   $$\text{Card}(\Omega_1) = \underbrace{n \times n \times \dots \times n}_{k \text{ fois}} = n^k$$

2. **[Corrigé Q2]** 
   Pour le premier tirage, il y a $n$ choix possibles. Pour le deuxième tirage, la boule précédente ne pouvant être remise, il reste $n-1$ choix, et ainsi de suite. Par le principe multiplicatif, le nombre d'arrangements de $k$ éléments parmi $n$ est :
   $$A_n^k = n(n-1)(n-2)\dots(n-k+1) = \prod_{i=0}^{k-1} (n-i)$$
   En multipliant et divisant par $(n-k)!$, on obtient la forme close :
   $$A_n^k = \frac{n!}{(n-k)!}$$

3. **[Corrigé Q3]** 
   Un tirage simultané de $k$ boules correspond à un sous-ensemble de $\lbrace 1, 2, \dots, n \rbrace$ de cardinal $k$ (l'ordre n'importe pas). Comme un arrangement de $k$ boules ordonne un sous-ensemble de $k$ boules de $k!$ manières différentes, on a la relation :
   $$A_n^k = k! \binom{n}{k} \implies \binom{n}{k} = \frac{A_n^k}{k!} = \frac{n!}{k!(n-k)!}$$
   - **Relation de symétrie** : $\binom{n}{k} = \binom{n}{n-k}$ (choisir $k$ boules à inclure revient à choisir $n-k$ boules à exclure).
   - **Formule de Pascal** : Pour $1 \le k \le n-1$, 
     $$\binom{n}{k} = \binom{n-1}{k-1} + \binom{n-1}{k}$$

---

#### Partie II : Probabilités sur un univers fini et paradoxe de l'anniversaire généralisé

4. **[Corrigé Q4]** 
   L'univers $\Omega$ est l'ensemble des parties de cardinal $p$ prises parmi les $n$ boules. Le nombre total de tirages possibles est $\text{Card}(\Omega) = \binom{n}{p}$.
   Soit $A$ l'événement "les numéros tirés sont tous consécutifs". Un ensemble de $p$ entiers consécutifs est entièrement déterminé par son plus petit élément $m$. 
   Si le plus petit élément est $m$, les $p$ boules sont $\{m, m+1, \dots, m+p-1\}$. 
   Pour que cet ensemble soit inclus dans $\{1, 2, \dots, n\}$, il faut et il suffit que le plus grand élément $m+p-1 \le n$, soit $m \le n-p+1$.
   Puisque $m$ peut varier de $1$ à $n-p+1$, il y a exactement $n-p+1$ choix possibles pour le plus petit élément.
   Ainsi, $\text{Card}(A) = n-p+1$.
   La probabilité recherchée est donc :
   $$P_1 = \frac{\text{Card}(A)}{\text{Card}(\Omega)} = \frac{n - p + 1}{\binom{n}{p}}$$

5. **[Corrigé Q5]** 
   - **Modélisation** : L'univers est $\Omega = \{1, 2, \dots, 365\}^k$. Chaque element de $\Omega$ représente un $k$-uplet des dates d'anniversaire. L'hypothèse d'équiprobabilité attribue à chaque issue la probabilité $\frac{1}{365^k}$.
   - **Événement contraire** : Soit $E$ l'événement "au moins deux personnes partagent la même date d'anniversaire". L'événement contraire $\overline{E}$ est "toutes les $k$ personnes ont des dates d'anniversaire différentes".
   La réalisation de $\overline{E}$ signifie que l'on choisit $k$ jours distincts parmi $365$, ce qui correspond à un arrangement sans remise. On a donc :
   $$\text{Card}(\overline{E}) = A_{365}^k = \frac{365!}{(365-k)!}$$
   Par conséquent, la probabilité de l'événement contraire est :
   $$\mathbb{P}(\overline{E}) = \frac{A_{365}^k}{365^k} = \frac{365!}{365^k (365-k)!} = \prod_{i=0}^{k-1} \left(1 - \frac{i}{365}\right)$$
   La probabilité recherchée est $q_k = 1 - \mathbb{P}(\overline{E}) = 1 - \prod_{i=0}^{k-1} \left(1 - \frac{i}{365}\right)$.
   - **Recherche de $k_0$** : On cherche le plus petit entier $k$ tel que $q_k > \frac{1}{2}$, soit $\mathbb{P}(\overline{E}) < \frac{1}{2}$.
   En utilisant l'approximation $\ln(1+x) \approx x$ pour $x$ petit, on a :
   $$\ln(\mathbb{P}(\overline{E})) = \sum_{i=0}^{k-1} \ln\left(1 - \frac{i}{365}\right) \approx -\sum_{i=0}^{k-1} \frac{i}{365} = -\frac{k(k-1)}{2 \times 365}$$
   On résout l'inéquation :
   $$-\frac{k^2}{730} < \ln\left(\frac{1}{2}\right) \approx -0.693 \implies k^2 > 0.693 \times 730 \approx 506 \implies k > \sqrt{506} \approx 22.5$$
   Le calcul exact donne $k_0 = 23$. Dès $23$ personnes, il y a plus d'une chance sur deux pour que deux personnes partagent la même date d'anniversaire.

---

#### Partie III : Analyse critique du modèle d'équiprobabilité

6. **[Corrigé Q6]** 
   - **Robustesse du modèle** : L'hypothèse d'une distribution uniforme des naissances sur l'année est un **biais statistique fort**. En réalité, les naissances ne sont pas uniformément réparties (on observe des variations saisonnières, un creux les weekends ou certains jours fériés, et des pics particuliers). De plus, la présence de jumeaux introduit une dépendance directe entre individus qui contredit l'hypothèse d'indépendance des choix.
   - **Impact qualitatif** : Si la distribution des naissances n'est pas uniforme (c'est-à-dire si certains jours ont une probabilité d'occurrence plus élevée que d'autres), **l'entropie globale du système diminue**. Par l'inégalité de réarrangement ou via le principe de concentration, une distribution non uniforme **augmente la collision de paires**. Par conséquent, la probabilité réelle $q_k$ d'avoir au moins une coïncidence pour un nombre $k$ donné de personnes sera **strictement supérieure** à celle prédite par le modèle uniforme. Le seuil $k_0 = 23$ serait donc potentiellement abaissé dans une population réelle.