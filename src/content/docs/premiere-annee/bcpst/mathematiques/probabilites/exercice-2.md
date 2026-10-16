---
title: 'Exercice 2 : Lois usuelles'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Modélisation stochastique et limites d'un système de file d'attente

## Énoncé

Dans le cadre de l'étude d'un système automatisé de traitement de données (type serveur informatique ou station biologique automatisée), on s'intéresse au nombre de requêtes reçues et traitées au cours du temps. 

Soit $\lambda > 0$ le taux moyen d'arrivée des requêtes par unité de temps. On suppose que le nombre de requêtes arrivant dans un intervalle de temps de longueur $t$ suit une loi de Poisson de paramètre $\lambda t$. 

Pour fiabiliser l'analyse, on modélise l'activité du système sur une période normalisée $[0, 1]$. On découpe cet intervalle en $n$ sous-intervalles de même longueur $\frac{1}{n}$, où $n$ est un entier strictement positif grand.

On définit, pour tout $k \in \{1, \dots, n\}$, la variable aléatoire $X_{k,n}$ égale au nombre de requêtes reçues pendant le $k$-ième intervalle $\left] \frac{k-1}{n}, \frac{k}{n} \right]$.

---

## Questions

1. **Rappels de cours :** Quelle est la loi de la variable aléatoire $X_{k,n}$ ? Préciser son espérance et sa variance.
2. On suppose que les arrivées de requêtes sur des intervalles disjoints sont des événements indépendants. Quelle est la loi du nombre total $S_n$ de requêtes reçues sur l'intervalle $[0, 1]$ ? Justifier.
3. Calculer la probabilité qu'aucune requête ne soit reçue sur l'intervalle $[0, 1]$ en fonction de $\lambda$. Que se passe-t-il si $\lambda \to +\infty$ ?
4. On s'intéresse au temps d'attente $T_1$ (exprimé en unités de temps) jusqu'à l'arrivée de la *première* requête. En utilisant l'événement $\{T_1 > t\}$ pour $t \geq 0$, déterminer la fonction de répartition de $T_1$, puis reconnaître sa loi et donner sa densité.
5. **Analyse critique et limites du modèle :** 
   * En pratique, un système informatique possède une capacité de traitement maximale instantanée et les requêtes peuvent saturer les buffers. Le modèle de Poisson est-il inconditionnellement valide pour tout $\lambda$ grand ? 
   * Discuter de l'hypothèse d'indépendance des incréments $X_{k,n}$ dans un contexte réel (par exemple, des connexions internet ou des afflux massifs suite à un événement médiatique).

---

## Pistes

* **Q1 & Q2 :** Pensez à la définition du processus de Poisson et aux propriétés de stabilité de la loi de Poisson par somme de variables indépendantes.
* **Q3 :** Utilisez la relation entre l'événement "zéro requête sur $[0, 1]$" et la somme des $X_{k,n}$.
* **Q4 :** Traduire l'événement $\{T_1 > t\}$ à l'aide du nombre de requêtes arrivées sur l'intervalle $[0, t]$.
* **Q5 :** Pour la critique, pensez aux notions de mémoire, d'embouteillage (saturation) et aux limites physiques du matériel informatique par rapport à l'hypothèse d'additivité infinie.

---

## Corrigé pas à pas

### 1. Loi de $X_{k,n}$
Par définition de l'énoncé, le nombre de requêtes arrivant dans un intervalle de longueur $t = \frac{1}{n}$ suit une loi de Poisson de paramètre $\lambda \times \frac{1}{n} = \frac{\lambda}{n}$.
Ainsi, $X_{k,n} \mathcal{P}\left(\frac{\lambda}{n}\right)$.
* **Espérance :** $\mathbb{E}(X_{k,n}) = \frac{\lambda}{n}$
* **Variance :** $V(X_{k,n}) = \frac{\lambda}{n}$

### 2. Loi de $S_n$
Le nombre total de requêtes sur $[0, 1]$ est la somme des requêtes sur chaque sous-intervalle disjoint :
$$S_n = \sum_{k=1}^n X_{k,n}$$
Puisque les sous-intervalles sont disjoints et que les arrivées sur des intervalles disjoints sont indépendantes, les variables $(X_{k,n})_{1 \leq k \leq n}$ sont indépendantes. 
D'après le théorème de stabilité de la loi de Poisson par somme, la somme de variables de Poisson indépendantes suit une loi de Poisson dont le paramètre est la somme des paramètres :
$$S_n \sim \mathcal{P}\left( \sum_{k=1}^n \frac{\lambda}{n} \right) = \mathcal{P}\left( n \times \frac{\lambda}{n} \right) = \mathcal{P}(\lambda)$$
Remarque: * La loi de $S_n$ ne dépend curieusement pas de $n$, ce qui est cohérent puisque $S_n$ représente toujours le nombre total de requêtes sur l'intervalle fixe $[0, 1]$.

### 3. Probabilité d'absence de requête
L'événement "aucune requête sur $[0, 1]$" s'écrit $(S_n = 0)$, ou plus directement $(S = 0)$ avec $S \sim \mathcal{P}(\lambda)$.
Par la formule de la loi de Poisson :
$$\mathbb{P}(S = 0) = \frac{\lambda^0 e^{-\lambda}}{0!} = e^{-\lambda}$$
Si $\lambda \to +\infty$ (le flux de requêtes devient extrêmement dense), $\lim_{\lambda \to +\infty} e^{-\lambda} = 0$. La probabilité qu'aucune requête ne se présente tend logiquement vers $0$.

### 4. Loi du temps d'attente de la première requête $T_1$
Soit $t \ge 0$. L'événement $\{T_1 > t\}$ signifie qu'aucune requête n'est arrivée entre l'instant $0$ et l'instant $t$. 
Le nombre de requêtes sur un intervalle de longueur $t$ suit une loi de Poisson de paramètre $\lambda t$. Par conséquent :
$$\mathbb{P}(T_1 > t) = e^{-\lambda t}$$
La fonction de répartition $F_{T_1}$ de $T_1$ est définie par $F_{T_1}(t) = \mathbb{P}(T_1 \le t)$. Pour $t < 0$, $F_{T_1}(t) = 0$. Pour $t \ge 0$ :
$$F_{T_1}(t) = 1 - \mathbb{P}(T_1 > t) = 1 - e^{-\lambda t}$$
On reconnait la fonction de répartition d'une **loi exponentielle de paramètre $\lambda$** (notée $\mathcal{E}(\lambda)$).
La densité de probabilité $f_{T_1}$ s'obtient par dérivation de $F_{T_1}$ pour $t \ge 0$ :
$$f_{T_1}(t) = \lambda e^{-\lambda t} \mathbf{1}_{[0, +\infty[}(t)$$

### 5. Analyse critique et limites du modèle

* **Limites de la charge ($\lambda$ grand) et saturation :** 
  Le modèle de Poisson suppose qu'il n'y a aucune limite supérieure au nombre de requêtes pouvant arriver simultanément (la variable peut prendre n'importe quelle valeur entière dans $\mathbb{N}$). En réalité, un serveur possède une bande passante finie. Lorsque $\lambda$ devient très grand, le système sature : les requêtes ne sont plus simplement "reçues", elles sont rejetées ou mises en attente dans une file saturée. Le modèle poissonien sous-estime les effets de congestion non-linéaires.

* **Limite de l'hypothèse d'indépendance (Non-stationnarité et mémoire) :** 
  L'hypothèse selon laquelle les incréments $X_{k,n}$ sont indépendants implique une absence totale de mémoire et un taux $\lambda$ rigoureusement constant. Dans la réalité, le trafic web présente des *corrications temporelles* (effet de bourrasque ou *burstiness*) : par exemple, suite à une actualité majeure, des milliers d'utilisateurs se connectent en même temps, créant une dépendance forte entre les arrivées (processus auto-excitants de type Hawkes). L'indépendance des accroissements vole alors en éclats, rendant la loi de Poisson inadéquate au profit de modèles plus complexes (processus à mémoire longue).