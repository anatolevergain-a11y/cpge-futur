---
title: 'Exercice 2 : Espérance et variance'
description: 'Problème d entraînement type concours pour PSI.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Dans le cadre de l'étude des réseaux de télécommunication et des protocoles d'accès aléatoire au canal, on s'intéresse à la modélisation d'une file d'attente simplifiée ou d'un processus de transmission de paquets. 

Soit $p \in ]0, 1[$, que l'on associe à la probabilité de succès d'une transmission élémentaire. On pose $q = 1 - p$. 
Soit $N$ une variable aléatoire définie sur un espace probabilisé $(\Omega, \mathcal{A}, P)$, représentant un nombre aléatoire d'essais, ou le rang d'une première réussite dans une suite d'expériences de Bernoulli indépendantes. Plus précisément, on suppose que $N suit la loi géométrique de paramètre $p$, notée $\mathcal{G}(p)$, de sorte que :
$$\forall k \in \mathbb{N}^*, \quad P(N = k) = q^{k-1}p$$

L'objectif de ce problème est d'étudier l'existence et le calcul de moments d'ordres supérieurs de $N$ (espérance et variance) ainsi que de s'intéresser à une variable aléatoire transformée $X = f(N)$ pour analyser un coût de transmission.

---

### ❓ Questions progressives (incluant une analyse critique du modèle)

1. **Rappels et convergence :** Vérifier que la famille $\sum_{k=1}^{+\infty} P(N = k) = 1$ et rappeler sans démonstration (ou par un calcul rapide) l'expression de l'espérance $E(N)$ et de la variance $V(N)$ de la variable aléatoire $N$.
2. **Sommation par paquet et moments d'ordre 2 :** En étudiant la série $\sum_{k=1}^{+\infty} k^2 q^{k-1} p$, démontrer que $N$ admet un moment d'ordre 2 et exprimer $E(N^2)$ en fonction de $p$. En déduire l'expression exacte de $V(N)$.
3. **Application aux coûts de transmission :** On suppose qu'un protocole impose un coût de transmission pour $k$ essais modélisé par $X = 2^N$. 
   - Montrer que la variable aléatoire $X$ admet une espérance si et seulement si $2q < 1$.
   - Dans le cas où cette condition est réalisée, calculer explicitement $E(X)$.
4. **Analyse critique du modèle géométrique :** 
   - Commenter l'hypothèse d'indépendance des essais successifs dans un réseau informatique réel (collisions, saturation du canal).
   - Si la probabilité de succès $p_k$ dépendait du nombre d'essais déjà effectués (vieillissement du système), la loi de $N$ serait-elle toujours géométrique ? Justifier brièvement.

---

### 💡 Pistes & Indications méthodologiques

* **Indication pour la Q2 :** Pour calculer des sommes du type $\sum k^2 q^{k-1}$, partez de l'identité géométrique $\sum_{k=0}^{+\infty} x^k = \frac{1}{1-x}$ pour $|x| < 1$ et dérivez deux fois successives par rapport à $x$, ou utilisez la relation $k^2 = k(k-1) + k$.
* **Indication pour la Q3 :** Pour l'existence de $E(X)$, revenez à la définition de l'espérance d'une variable aléatoire à valeurs dans $\mathbb{N}^*$ : la série $\sum P(X = x_i) x_i$ doit être absolument convergente (donc convergente à termes positifs).
* **Indication pour la Q4 :** Pensez aux notions de mémoire de la loi géométrique (seule loi sans mémoire sur $\mathbb{N}^*$) et à l'impact physique d'un canal encombré.

---

### 📋 Corrigé détaillé pas à pas

#### **Correction de la Question 1**
Par définition, la variable $N$ suit la loi $\mathcal{G}(p)$ sur $\mathbb{N}^*$. 
La somme des probabilités donne :
$$\sum_{k=1}^{+\infty} P(N = k) = \sum_{k=1}^{+\infty} p q^{k-1} = p \sum_{j=0}^{+\infty} q^j = p \times \frac{1}{1-q} = \frac{p}{p} = 1$$
La définition est cohérente. 
Il est bien connu (et exigible) que :
$$E(N) = \frac{1}{p} \quad \text{et} \quad V(N) = \frac{q}{p^2}$$

#### **Correction de la Question 2**
Calculons l'espérance de $N^2$ par application du théorème de transfert (la série doit converger absolument, ce qui est assuré ici par les croissances comparées) :
$$E(N^2) = \sum_{k=1}^{+\infty} k^2 p q^{k-1}$$
Utilisons l'astuce de factorisation factorielle $k^2 = k(k-1) + k$ :
$$E(N^2) = p \sum_{k=1}^{+\infty} \left[ k(k-1) q^{k-1} + k q^{k-1} \right]$$
Par linérarité (les séries convergeant absolument) :
$$E(N^2) = p \left[ \sum_{k=2}^{+\infty} k(k-1) q^{k-1} + \sum_{k=1}^{+\infty} k q^{k-1} \right]$$
On factorise par $q$ dans la première somme :
$$\sum_{k=2}^{+\infty} k(k-1) q^{k-1} = q \sum_{k=2}^{+\infty} k(k-1) q^{k-2}$$
Or, on sait que pour $|q| < 1$, $\sum_{k=2}^{+\infty} k(k-1) q^{k-2} = \frac{d^2}{dq^2}\left(\sum_{k=0}^{+\infty} q^k\right) = \frac{d^2}{dq^2}\left(\frac{1}{1-q}\right) = \frac{2}{(1-q)^3} = \frac{2}{p^3}$.
De même, $\sum_{k=1}^{+\infty} k q^{k-1} = \frac{1}{(1-q)^2} = \frac{1}{p^2}$.
En remplaçant :
$$E(N^2) = p \left( q \times \frac{2}{p^3} + \frac{1}{p^2} \right) = \frac{2q}{p^2} + \frac{1}{p} = \frac{2(1-p) + p}{p^2} = \frac{2 - p}{p^2}$$
Calculons ensuite la variance par la formule de König-Huygens :
$$V(N) = E(N^2) - (E(N))^2 = \frac{2-p}{p^2} - \left(\frac{1}{p}\right)^2 = \frac{2 - p - 1}{p^2} = \frac{1-p}{p^2} = \frac{q}{p^2}$$
Le résultat est cohérent avec le cours.

#### **Correction de la Question 3**
La variable aléatoire $X = 2^N$ prend ses valeurs dans l'ensemble $\{2^k \mid k \in \mathbb{N}^*\}$. 
$X$ admet une espérance si et seulement si la série numérique $\sum_{k=1}^{+\infty} 2^k P(N = k)$ est absolument convergente (donc convergente car ses termes sont positifs).
Évaluons le terme général de cette série, que l'on note $u_k$ :
$$u_k = 2^k p q^{k-1} = p \cdot 2 \cdot 2^{k-1} q^{k-1} = 2p (2q)^{k-1}$$
La série $\sum u_k$ est une série géométrique de raison $2q$. Elle converge si et seulement si :
$$|2q| < 1$$
Puisque $q \in [0, 1[$, cela équivaut à $2q < 1$, soit $q < \frac{1}{2}$, ce qui se réécrit $1 - p < \frac{1}{2}$, c'est-à-dire **$p > \frac{1}{2}$**.

Dans le cas où cette condition est réalisée ($p > \frac{1}{2}$), calculons l'espérance :
$$E(X) = \sum_{k=1}^{+\infty} 2^k p q^{k-1} = 2p \sum_{k=1}^{+\infty} (2q)^{k-1} = 2p \sum_{j=0}^{+\infty} (2q)^j = 2p \times \frac{1}{1 - 2q}$$
Puisque $1 - 2q = 1 - 2(1-p) = 2p - 1$, on obtient finalement :
$$E(X) = \frac{2p}{2p - 1}$$

#### **Correction de la Question 4**
* **Analyse de l'indépendance :** Dans un réseau réel (type Ethernet/Wi-Fi), les essais successifs ne sont généralement *pas* indépendants. Si un paquet subit une collision, cela indique souvent une forte charge sur le réseau. Les protocoles introduisent alors un temps d'attente croissant (backoff exponentiel), ce qui contredit l'hypothèse d'une probabilité de succès $p$ constante et stationnaire.
* **Modification de la loi :** Si la probabilité de succès $p_k$ dépend du rang $n$, la propriété d'absence de mémoire de la loi géométrique est perdue. La loi de $N$ n'est plus géométrique $\mathcal{G}(p)$, mais s'exprime via une loi générale de variable de dénombrement d'un événement non stationnaire : 
  $$P(N = k) = p_k \prod_{j=1}^{k-1} (1 - p_j)$$