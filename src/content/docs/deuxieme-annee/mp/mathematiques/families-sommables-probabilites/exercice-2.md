---
title: 'Exercice 2 : Variables aléatoires sur un univers dénombrable et chaînes de Markov'
description: 'Problème d entraînement type concours.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Soit $\Omega$ un univers muni d'une tribu $\mathcal{A}$ et d'une probabilité $\mathbb{P}$. On s'intéresse à une suite de variables aléatoires $(X_n)_{n \in \mathbb{N}}$ à valeurs dans un ensemble dénombrable $E$, que l'on identifiera le plus souvent à $\mathbb{N}$ ou à une partie finie de $\mathbb{N}$.

Dans tout le problème, on rappelle qu'une famille de réels $(u_{i})_{i \in I}$ indexée par un ensemble dénombrable $I$ est dite **sommable** si la suite des sommes partielles sur les parties finies de $I$ est majorée, ou de manière équivalente pour des termes positifs, si la série $\sum_{\sigma(n)} u_{\sigma(n)}$ converge pour toute bijection $\sigma : \mathbb{N} \to I$.

Le but de ce problème est d'étudier le comportement de chaînes de Markov homogènes à temps discret sur un espace d'états dénombrable, en lien direct avec la convergence des séries et la théorie des familles sommables.

---

### ❓ Questions progressives (incluant une analyse critique du modèle)

1. **Préalable sur les familles sommables :** 
   Soit $(p_{i})_{i \in I}$ une famille de réels positifs ou nuls indexée par un ensemble dénombrable $I$ telle que $\sum_{i \in I} p_i = 1$. Soit $(A_j)_{j \in J}$ une partition de $I$ en sous-ensembles dénombrables ou finis. Montrer que la famille $(q_j)_{j \in J}$ définie par $q_j = \sum_{i \in A_j} p_i$ est sommable et que $\sum_{j \in J} q_j = 1$.

2. **Espérance sur un univers dénombrable :** 
   Soit $X$ une variable aléatoire à valeurs dans $\mathbb{N}$. On suppose que $X$ admet une espérance, c'est-à-dire que la série $\sum_{n \ge 0} n \mathbb{P}(X=n)$ converge absolument. 
   Démontrer l'égalité classique :
   $$\mathbb{E}(X) = \sum_{n=1}^{+\infty} \mathbb{P}(X \ge n)$$

3. **Définition d'une chaîne de Markov homogène :** 
   Soit $(X_n)_{n \in \mathbb{N}}$ une suite de variables aléatoires sur $(\Omega, \mathcal{A}, \mathbb{P})$ à valeurs dans $E = \mathbb{N}$. On suppose que pour tout $n \in \mathbb{N}$ et pour tous $(i_0, i_1, \dots, i_n, j) \in E^{n+2}$ tels que $\mathbb{P}(X_0=i_0, \dots, X_n=i_n) > 0$ :
   $$\mathbb{P}(X_{n+1}=j \mid X_0=i_0, \dots, X_n=i_n) = \mathbb{P}(X_{n+1}=j \mid X_n=i_n)$$
   On suppose en outre que la chaîne est *homogène*, c'est-à-dire que la probabilité de transition $p_{i,j} = \mathbb{P}(X_{n+1}=j \mid X_n=i)$ ne dépend pas de $n$.
   Vérifier que pour tout $i \in E$, la famille $(p_{i,j})_{j \in E}$ est une loi de probabilité sur $E$.

4. **Équations de Chapman-Kolmogorov :** 
   Établir pour tout $(i, j) \in E^2$ et pour tous entiers $m, n \in \mathbb{N}$ la relation :
   $$\mathbb{P}(X_{m+n} = j \mid X_0 = i) = \sum_{k \in E} \mathbb{P}(X_{m+n} = j \mid X_m = k, X_0 = i)\mathbb{P}(X_m = k \mid X_0 = i)$$
   En déduire l'écriture matricielle des probabilités de transition en $n$ étapes, notées $P^{(n)} = (p_{i,j}^{(n)})_{i,j \in E}$.

5. **Analyse critique et limites du modèle markovien :** 
   *Question ouverte / Réflexion type entretien ou épreuve orale :* 
   En quoi l'hypothèse d'absence de mémoire (propriété de Markov) est-elle restrictive pour modéliser des phénomènes réels de file d'attente ou de dynamique des populations ? Proposer une modification mathématique simple pour s'affranchir de cette restriction tout en restant dans un cadre dénombrable.

---

### 💡 Pistes & Indications méthodologiques

- **Q1 :** Utiliser la caractérisation de la sommabilité par les sommes finies (théorème de Fubini discret ou sommation par blocs).
- **Q2 :** Écrire $n = \sum_{k=1}^n 1$ et permuter les sommations (interversion de séries doublement sommables à termes positifs).
- **Q3 & Q4 :** Appliquer la définition de la probabilité conditionnelle et utiliser le théorème des probabilités totales avec l'univers dénombrable $E$.
- **Q5 :** Pour l'analyse critique, penser à la dépendance temporelle passée (processus d'ordre $k > 1$ ou semi-markovien).

---

### 📋 Corrigé détaillé pas à pas

#### Corrigé de la Question 1
Puisque $(p_i)_{i \in I}$ est une famille sommable à termes positifs, toute sous-famille et toute sommation par partition est valide (théorème de Fubini pour les séries à termes positifs). 
Pour tout $j \in J$, la série $\sum_{i \in A_j} p_i$ converge car $A_j \subset I$ et $p_i \ge 0$. Notons $q_j = \sum_{i \in A_j} p_i$. 
Soit $J_{\text{fin}}$ une partie finie de $J$. Pour tout $j \in J_{\text{fin}}$, soit $A_{j, \text{fin}}$ une partie finie de $A_j$. La réunion de ces parties finies est une partie finie $I_{\text{fin}}$ de $I$. 
On a :
$$\sum_{j \in J_{\text{fin}}} q_j = \sum_{j \in J_{\text{fin}}} \sum_{i \in A_j} p_i = \sum_{i \in \bigcup_{j \in J_{\text{fin}}} A_j} p_i \le \sum_{i \in I} p_i = 1$$
La somme partielle est donc majorée par $1$. Par conséquent, la famille $(q_j)_{j \in J}$ est sommable. De plus, par convergence monotone, la sommation sur la partition reconstitue la somme totale :
$$\sum_{j \in J} q_j = \sum_{j \in J} \left( \sum_{i \in A_j} p_i \right) = \sum_{i \in I} p_i = 1$$

#### Corrigé de la Question 2
Par définition de l'espérance d'une variable aléatoire à valeurs dans $\mathbb{N}$ :
$$\mathbb{E}(X) = \sum_{n=0}^{+\infty} n \mathbb{P}(X=n) = \sum_{n=1}^{+\infty} n \mathbb{P}(X=n)$$
On écrit $n = \sum_{k=1}^n 1$. On obtient une série double :
$$\mathbb{E}(X) = \sum_{n=1}^{+\infty} \left( \sum_{k=1}^{n} 1 \right) \mathbb{P}(X=n) = \sum_{n=1}^{+\infty} \sum_{k=1}^{n} \mathbb{P}(X=n)$$
Les termes étant positifs, on peut appliquer le théorème de Fubini-Tonelli pour intervertir les sommatons :
$$\mathbb{E}(X) = \sum_{k=1}^{+\infty} \left( \sum_{n=k}^{+\infty} \mathbb{P}(X=n) \right)$$
Or, par la relation de Chasles sur les probabilités (ou par décroissance de la fonction de répartition complémentaire), on a $\sum_{n=k}^{+\infty} \mathbb{P}(X=n) = \mathbb{P}(X \ge k)$. 
Ainsi :
$$\mathbb{E}(X) = \sum_{k=1}^{+\infty} \mathbb{P}(X \ge k)$$

#### Corrigé de la Question 3
Soit $i \in E$. Par définition, $p_{i,j} = \mathbb{P}(X_{n+1}=j \mid X_n=i) = \frac{\mathbb{P}(X_{n+1}=j, X_n=i)}{\mathbb{P}(X_n=i)}$ (en supposant $\mathbb{P}(X_n=i) > 0$).
Les événements $(X_{n+1}=j)_{j \in E}$ forment un système complet d'événements de l'univers (car la variable $X_{n+1}$ prend ses valeurs dans $E$). 
D'après le théorème des probabilités totales :
$$\sum_{j \in E} \mathbb{P}(X_{n+1}=j, X_n=i) = \mathbb{P}(X_n=i)$$
En divisant par $\mathbb{P}(X_n=i)$ (supposé non nul), on obtient :
$$\sum_{j \in E} p_{i,j} = \sum_{j \in E} \mathbb{P}(X_{n+1}=j \mid X_n=i) = 1$$
De plus, comme $p_{i,j} \ge 0$, la famille $(p_{i,j})_{j \in E}$ définit bien une loi de probabilité sur $E$.

#### Corrigé de la Question 4
Soit $(i, j) \in E^2$ et $m, n \in \mathbb{N}$. Par définition des probabilités conditionnelles et du théorème des probabilités totales appliqué au système complet d'événements $(X_m = k)_{k \in E}$ :
$$\mathbb{P}(X_{m+n} = j \mid X_0 = i) = \sum_{k \in E} \mathbb{P}(X_{m+n} = j, X_m = k \mid X_0 = i)$$
En utilisant la relation de multiplicativité des probabilités conditionnelles :
$$\mathbb{P}(X_{m+n} = j, X_m = k \mid X_0 = i) = \mathbb{P}(X_{m+n} = j \mid X_m = k, X_0 = i)\mathbb{P}(X_m = k \mid X_0 = i)$$
Par la propriété de Markov homogène, le futur à l'instant $m+n$ sachant le présent à l'instant $m$ ne dépend pas du passé à l'instant $0$ :
$$\mathbb{P}(X_{m+n} = j \mid X_m = k, X_0 = i) = \mathbb{P}(X_{m+n} = j \mid X_m = k) = p_{k,j}^{(n)}$$
En posant $p_{i,k}^{(m)} = \mathbb{P}(X_m = k \mid X_0 = i)$, on obtient la relation de Chapman-Kolmogorov :
$$p_{i,j}^{(m+n)} = \sum_{k \in E} p_{i,k}^{(m)} p_{k,j}^{(n)}$$
Matriciellement, si $P = (p_{i,j})_{i,j \in E}$ est la matrice de transition à une étape, cette relation se traduit par le produit matriciel (ou produit de matrices infini) :
$$P^{(m+n)} = P^{(m)} P^{(n)} \implies P^{(n)} = P^n$$

#### Corrigé de la Question 5 (Analyse critique du modèle)
* **Limite du modèle :** L'hypothèse de Markov suppose que l'état futur de la chaîne dépend *uniquement* de l'état présent, et en aucun cas de la manière dont cet état a été atteint (absence totale de mémoire). Dans de nombreux systèmes réels (par exemple, une file d'attente où le temps de service dépend du temps déjà écoulé, ou une population dont la natalité dépend de l'historique des générations passées), cette approximation est trop forte et fausse la dynamique à long terme.
* **Extension simple :** Pour s'affranchir de cette restriction tout en conservant un cadre rigoureux, on peut définir une **chaîne de Markov d'ordre $r$** ($r \in \mathbb{N}^*$), où l'état à l'instant $n+1$ dépend des $r$ derniers états $(X_n, X_{n-1}, \dots, X_{n-r+1})$. Mathématiquement, on se ramène à une chaîne de Markov usuelle d'ordre 1 en augmentant l'espace d'états par l'utilisation de vecteurs de dimension $r$, c'est-à-dire en posant $Y_n = (X_n, X_{n-1}, \dots, X_{n-r+1})$ qui prend ses valeurs dans l'ensemble dénombrable $E^r$.