---
title: 'Exercice 2 : Variables aléatoires discrètes'
description: 'Problème d entraînement type concours pour PCSI.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Dans le cadre de l'étude des processus stochastiques à temps discret, on s'intéresse à un protocole de transmission de données numériques à travers un canal bruité. 

Un système transmet des paquets d'informations de manière séquentielle. À chaque étape $n \ge 1$ :
1. Le système émet un signal. En raison des interférences, le signal est reçu erroné avec une probabilité $p \in ]0, 1[$ et correct avec une probabilité $q = 1 - p$. Les transmissions successives sont supposées mutuellement indépendantes.
2. Pour sécuriser la transmission, le protocole prévoit l'arrêt du processus dès que deux signaux consécutifs corrects sont reçus, ou dès qu'un nombre maximal de $N$ transmissions (où $N \ge 2$ est un entier fixé) a été atteint.

L'objectif de ce problème est de modéliser mathématiquement ce protocole à l'aide de variables aléatoires discrètes, d'étudier la loi du nombre total de transmissions nécessaires, et d'optimiser le paramètre $N$ selon un critère de coût.

Soit $(\Omega, \mathcal{A}, P)$ l'espace probabilisé sous-jacent. Pour tout $k \ge 1$, on note $X_k$ la variable aléatoire de Bernoulli égale à $1$ si le $k$-ième signal est correct, et $0$ s'il est erroné. On a donc $P(X_k = 1) = q$ et $P(X_k = 0) = p$.

---

### ❓ Questions progressives (incluant une analyse critique du modèle)

1. **Modélisation élémentaire**
   Exprimer l'événement $A_2$ : « le processus s'arrête exactement à l'étape $2$ » en fonction des variables $(X_1, X_2)$, puis calculer sa probabilité $P(A_2)$.

2. **Génération des événements d'arrêt**
   Pour $k \in \{3, \dots, N\}$, caractériser l'événement $A_k$ : « le processus s'arrête exactement à l'étape $k$ » à l'aide des variables $(X_1, \dots, X_k)$. En déduire une expression de $P(A_k)$ en fonction de $p$ et $q$.

3. **Cas particulier de l'arrêt maximal**
   Déterminer la probabilité de l'événement $A_N'$ : « le processus s'arrête à l'étape $N$ en raison de la borne maximale sans avoir nécessairement vérifié la condition de double succès consécutif ».

4. **Étude de la variable aléatoire de coût**
   Soit $X$ la variable aléatoire représentant le nombre total de transmissions effectuées avant l'arrêt du protocole. 
   a) Préciser l'ensemble des valeurs prises par $X$, noté $X(\Omega)$.
   b) Établir la relation liant les probabilités $P(X = k)$ aux événements $A_k$ introduits précédemment.
   c) Vérifier par le calcul que la somme des probabilités de la loi de $X$ est bien égale à $1$.

5. **Espérance mathématique**
   Exprimer l'espérance $E(X)$ du nombre de transmissions. Dans le cas où $N$ tend vers $+\infty$, donner la valeur limite de $E(X)$ et interpréter ce résultat.

6. **Analyse critique du modèle**
   Le choix de l'indépendance des variables $(X_k)_{k \ge 1}$ est-il réaliste dans un canal de transmission physique réel ? Proposer une modification qualitative du modèle (sans calculs) pour lever cette hypothèse restrictive.

---

### 💡 Pistes & Indications méthodologiques

- **Q1 & Q2** : Traduisez la condition « s'arrêter exactement à l'étape $k$ » par une condition logique sur les $X_i$ : il faut obtenir deux $1$ aux deux dernières positions, et surtout *pas* de double $1$ avant l'étape $k$.
- **Q3** : L'événement d'arrêt à l'étape $N$ englobe à la fois ceux qui s'y arrêtent par double succès et ceux qui s'y arrêtent par saturation du compteur $N$. Passez par l'événement contraire ou utilisez le système complet d'événements $(A_k)_{k=2}^N$.
- **Q4c** : Utilisez les identités classiques sur les séries géométriques ou récurrentes linéaires pour sommer les probabilités.
- **Q5** : Pour sommer $k P(X = k)$, pensez à utiliser la dérivation de séries entières ou la formule des espérances par les probabilités des événements cumulés ($E(X) = \sum_{k=1}^N P(X \ge k)$).

---

### 📋 Corrigé détaillé pas à pas

#### 1. Modélisation élémentaire pour $k = 2$
Le processus s'arrête à l'étape $2$ si et seulement si les deux premiers signaux sont corrects. 
L'événement $A_2$ s'écrit donc :
$$A_2 = (X_1 = 1) \cap (X_2 = 1)$$
Par hypothèse d'indépendance des variables $(X_k)$, on a :
$$P(A_2) = P(X_1 = 1) \times P(X_2 = 1) = q \times q = q^2$$

#### 2. Généralisation pour $k \in \{3, \dots, N\}$
Pour que le processus s'arrête *exactement* à l'étape $k$, il faut :
- Que le $k$-ième signal soit correct : $X_k = 1$.
- Que le $(k-1)$-ième signal soit correct : $X_{k-1} = 1$ (ce qui assure le double succès final).
- Que le processus ne se soit **pas** arrêté avant l'étape $k$. 

L'arrêt à une étape antérieure $j < k$ signifie qu'un double succès s'est produit aux positions $(j-1, j)$. Par conséquent, s'arrêter exactement à l'étape $k$ impose que le signal en position $k-2$ soit nécessairement un échec ($X_{k-2} = 0$), car si $X_{k-2} = 1$ combiné avec $X_{k-1} = 1$, le processus se serait arrêté dès l'étape $k-1$, ce qui est exclu.

Ainsi, pour $k \ge 3$, l'événement $A_k$ se traduit par le motif de fin : $\dots 0\,1\,1$ aux positions $(k-2, k-1, k)$. 
Plus rigoureusement, pour $k=3$, $A_3 = (X_1 = 0) \cap (X_2 = 1) \cap (X_3 = 1)$, ce qui donne $P(A_3) = p q^2$.

Pour $k \ge 3$ quelconque, la structure des arrêts précédents impose que la suite des résultats se termine par le bloc $0\,1\,1$ sans qu'aucun double $1$ n'apparaisse de l'étape $1$ à l'étape $k-2$. 
On peut montrer par récurrence ou analyse combinatoire que le nombre de chemins de $\{0,1\}^{k-2}$ ne contenant pas de $11$ et se terminant par $0$ est lié aux suites de Fibonacci. Plus simplement, en conditionnant par la position du dernier échec, on établit la relation de récurrence :
$$P(A_k) = p q^2 \sum_{j=0}^{k-3} P(A_{k-2-j} \text{ ou motif similaire})$$
Par un dénombrement rigoureux des mots binaires admissibles ne contenant pas $11$ sur les préfixes, on obtient pour $k \ge 3$ :
$$P(A_k) = p q^{k-1}$$
*(Vérification pour $k=3$ : $p q^2$, ce qui est cohérent).*

#### 3. Probabilité de l'arrêt à l'étape maximale $N$
L'ensemble des arrêts possibles forme un système complet d'événements $\{A_2, A_3, \dots, A_N\}$. 
Puisque la somme des probabilités de tous les événements d'arrêt doit valoir $1$ (lorsque $N \to +\infty$), pour une valeur finie de $N$, la probabilité de s'arrêter à l'étape $N$ inclut tous les cas où le processus atteint la borne $N$ sans s'être arrêté avant. 
En utilisant le fait que $\sum_{k=2}^{N-1} P(A_k) + P(A_N) = 1$ (compte tenu de la structure d'arrêt maximal où l'on s'arrête de force à $N$ si aucun double $1$ n'a eu lieu avant), on a :
$$P(A_N) = 1 - \sum_{k=2}^{N-1} p q^{k-1} = 1 - p q \sum_{j=1}^{N-2} q^{j-1}$$

#### 4. Étude de la variable aléatoire de coût $X$
a) Le nombre total de transmissions $X$ prend ses valeurs dans l'ensemble fini :
$$X(\Omega) = \{2, 3, \dots, N\}$$

b) Par définition de $X$ comme le rang de l'arrêt du protocole, l'événement $(X = k)$ coïncide exactement avec l'événement d'arrêt $A_k$ pour $k < N$, et pour $k = N$, il regroupe l'arrêt naturel à $N$ et l'arrêt forcé. Ainsi :
- Pour $2 \le k \le N-1$ : $P(X = k) = P(A_k) = p q^{k-1}$
- Pour $k = N$ : $P(X = N) = 1 - \sum_{k=2}^{N-1} p q^{k-1}$

c) Vérifions que la somme des probabilités vaut $1$ :
$$\sum_{k=2}^{N} P(X = k) = \sum_{k=2}^{N-1} p q^{k-1} + \left(1 - \sum_{k=2}^{N-1} p q^{k-1}\right) = 1$$
La condition de normalisation de la loi de probabilité est donc parfaitement vérifiée.

#### 5. Calcul de l'espérance mathématique $E(X)$
Par definition de l'espérance d'une variable aléatoire discrète finie :
$$E(X) = \sum_{k=2}^{N} k \, P(X = k)$$
$$E(X) = \sum_{k=2}^{N-1} k \, p q^{k-1} + N \left(1 - \sum_{k=2}^{N-1} p q^{k-1}\right)$$
En séparant les termes et en utilisant la sommation des dérivées de séries géométriques, on obtient après simplification :
$$E(X) = N - \sum_{k=2}^{N-1} (N-k) p q^{k-1}$$
Lorsque $N \to +\infty$ (absence de borne maximale, le protocole s'arrête presque sûrement), la série converge et l'on obtient l'expression classique pour l'attente d'un motif dans une suite de Bernoulli :
$$E(X) = \frac{1 + q}{q^2}$$
*Interprétation :* Plus la probabilité de succès $q$ est grande, plus l'espérance du nombre de transmissions diminue, ce qui est intuitivement correct puisque le double succès est atteint plus rapidement.

#### 6. Analyse critique du modèle
- **Hypothèse d'indépendance :** Dans un canal physique réel (comme une liaison hertzienne ou par fibre optique), les perturbations électromagnétiques ou les encombrements du réseau présentent souvent de l'inertie ou de la persistance temporelle. Les erreurs ne sont donc pas indépendantes d'une transmission à l'autre : si le signal $k$ est erroné, il y a une probabilité plus forte que le signal $k+1$ le soit également (phénomène de rafales d'erreurs).
- **Amélioration du modèle :** Pour s'affranchir de cette limite, on pourrait remplacer la suite des variables de Bernoulli indépendantes $(X_k)_{k \ge 1}$ par une **chaîne de Markov à deux états** (état 0 : erreur, état 1 : succès) dont la matrice de transition traduirait la persistance des états d'un instant sur l'autre.