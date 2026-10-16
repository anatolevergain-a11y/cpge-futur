---
title: 'Cours : Dénombrement et probabilités'
description: 'Fiche de synthèse officielle et démonstrations du programme CPGE PTSI.'
---

## 📌 1. Définitions & Cadre d'étude

Le cadre d'etude de la theorie des probabilites en classe de premiere annee de CPGE repose sur la formalisation de Kolmogorov, introduisant la notion d'espace probabilise.

Soit $\Omega$ un ensemble non vide, appele **univers** ou ensemble des elements (ou resultats) elementaires. Les sous-ensembles de $\Omega$ sont appeles des **evenements**.

### Definition : Tribu (ou $\sigma$-algebre)
Une partie $\mathcal{A}$ de l'ensemble des parties $\mathcal{P}(\Omega)$ est appelee une **tribu** sur $\Omega$ si elle verifie les proprietes suivantes :
1. $\Omega \in \mathcal{A}$.
2. **Stabilite par passage au complementaire** : $\forall A \in \mathcal{A}, \ \bar{A} = \Omega \setminus A \in \mathcal{A}$.
3. **Stabilite par union denombrable** : $\forall (A_n)_{n \in \mathbb{N}} \in \mathcal{A}^{\mathbb{N}}, \ \bigcup_{n=0}^{+\infty} A_n \in \mathcal{A}$.

Dans le cadre du programme de PTSI, l'univers $\Omega$ est le plus souvent fini ou denombrable, et la tribu consideree est systematiquement $\mathcal{A} = \mathcal{P}(\Omega)$.

### Definition : Espace probabilise
Un **espace probabilise** est un couple $(\Omega, \mathcal{A})$ ou $\Omega$ est un univers et $\mathcal{A}$ une tribu sur $\Omega$, muni d'une application $\mathbb{P} : \mathcal{A} \to [0, 1]$, appelee **probabilite**, verifiant :
1. $\mathbb{P}(\Omega) = 1$.
2. **$\sigma$-additivite** : Pour toute suite d'evenements $(A_n)_{n \in \mathbb{N}}$ deux a deux incompatibles (c'est-a-dire $\forall i \neq j, \ A_i \cap A_j = \emptyset$), on a :
$$\mathbb{P}\left(\bigcup_{n=0}^{+\infty} A_n\right) = \sum_{n=0}^{+\infty} \mathbb{P}(A_n)$$

### Elements de denombrement fini
Soit $E$ un ensemble fini a $n$ elements (avec $n \in \mathbb{N}$).
- **Nombre de parties de $E$** : $|\mathcal{P}(E)| = 2^n$.
- **Nombre de p-uples d'elements de $E$** ($p \in \mathbb{N}^*$) : $n^p$.
- **Nombre de p-uples d'elements deux a deux distincts** (arrangements sans repetition) : 
$$A_n^p = \frac{n!}{(n-p)!} \quad (\text{pour } p \le n)$$
- **Nombre de parties a $p$ elements** (combinaisons) : 
$$\binom{n}{p} = \frac{n!}{p!(n-p)!} \quad (\text{pour } 0 \le p \le n)$$

---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### Theoreme : Formule du crible de Poincaré
Soit $(\Omega, \mathbb{P})$ un espace probabilise et $(A_1, A_2, \dots, A_n)$ une famille d'evenements de $\mathcal{A}$ ($n \ge 2$). Alors :
$$\mathbb{P}\left(\bigcup_{i=1}^n A_i\right) = \sum_{i=1}^n \mathbb{P}(A_i) - \sum_{1 \le i < j \le n} \mathbb{P}(A_i \cap A_j) + \dots + (-1)^{n-1} \mathbb{P}\left(\bigcap_{i=1}^n A_i\right)$$
Plus generalement, sous forme compacte :
$$\mathbb{P}\left(\bigcup_{i=1}^n A_i\right) = \sum_{k=1}^n (-1)^{k-1} \sum_{1 \le i_1 < i_2 < \dots < i_k \le n} \mathbb{P}\left(\bigcap_{j=1}^k A_{i_j}\right)$$

#### Demonstration (par recurrence sur $n \ge 2$)
- **Initialisation ($n = 2$)** : 
Montrons que $\mathbb{P}(A_1 \cup A_2) = \mathbb{P}(A_1) + \mathbb{P}(A_2) - \mathbb{P}(A_1 \cap A_2)$.
Remarquons la decomposition disjointe suivante :
$$A_1 \cup A_2 = A_1 \cup (\bar{A_1} \cap A_2)$$
Par additivite de la probabilite :
$$\mathbb{P}(A_1 \cup A_2) = \mathbb{P}(A_1) + \mathbb{P}(\bar{A_1} \cap A_2)$$
De plus, l'evenement $A_2$ se decompose en :
$$A_2 = (A_1 \cap A_2) \cup (\bar{A_1} \cap A_2) \quad (\text{union disjointe})$$
Donc $\mathbb{P}(\bar{A_1} \cap A_2) = \mathbb{P}(A_2) - \mathbb{P}(A_1 \cap A_2)$.
En injectant cette relation dans la precedente, on obtient l'egalite voulue.

- **Hérédité** : Supposons la propriete vraie au rang $n \ge 2$. Soit $(A_1, \dots, A_{n+1})$ une famille de $n+1$ evenements.
Posons $B = \bigcup_{i=1}^n A_i$. On a :
$$\bigcup_{i=1}^{n+1} A_i = B \cup A_{n+1}$$
Par application de la formule au rang 2 :
$$\mathbb{P}\left(\bigcup_{i=1}^{n+1} A_i\right) = \mathbb{P}(B) + \mathbb{P}(A_{n+1}) - \mathbb{P}(B \cap A_{n+1})$$
En appliquant l'hypothese de recurrence a $\mathbb{P}(B)$ et en remarquant que $B \cap A_{n+1} = \bigcup_{i=1}^n (A_i \cap A_{n+1})$, on etablit par developpement algebrique la formule au rang $n+1$. $\blacksquare$

### Theoreme : Formule des probabilités totales
Soit $(\Omega, \mathbb{P})$ un espace probabilise. Soit $(A_n)_{n \in I}$ (ou $I$ est fini ou denombrable) un systeme complet d'evenements, c'est-a-dire une famille d'evenements verifiant :
1. $\forall n \in I, \ \mathbb{P}(A_n) > 0$ (si l'on souhaite conditionner, ou simplement $\mathbb{P}(A_n)$ quelconque si l'on evite les cas nuls).
2. $\forall (i, j) \in I^2, \ i \neq j \implies A_i \cap A_j = \emptyset$ (deux a deux incompatibles).
3. $\bigcup_{n \in I} A_n = \Omega$ (recouvrement de l'univers).

Alors, pour tout evenement $B \in \mathcal{A}$ :
$$\mathbb{P}(B) = \sum_{n \in I} \mathbb{P}(B \cap A_n)$$
Si de plus $\mathbb{P}(A_n) > 0$ pour tout $n$, alors :
$$\mathbb{P}(B) = \sum_{n \in I} \mathbb{P}(A_n) \mathbb{P}_{A_n}(B)$$

---

## 💡 3. Méthodes de calcul & Algorithmes

### Methode 1 : Le dénombrement par modélisation combinatoire
Face a une situation aleatoire equipouvantable (cas d'une urne, tirages, etc.), le calcul de la probabilite d'un evenement $A$ se ramene a :
$$\mathbb{P}(A) = \frac{|A|}{|\Omega|}$$
**Algorithme de choix de modelisation :**
1. **L'ordre importe-t-il ?** 
   - Oui $\to$ Utiliser des arrangements ou des $p$-uples.
   - Non $\to$ Utiliser des combinaisons.
2. **Y a-t-il remise ?**
   - Avec remise $\to$ $p$-uples d'elements de $E$ (cardinal $n^p$).
   - Sans remise $\to$ Arrangements $A_n^p$ ou combinaisons $\binom{n}{p}$.

### Methode 2 : Exploitation des arbres de probabilités
Pour des experiences aleatoires composees d'un nombre fini d'etapes :
- **Les branches issues d'un meme nœud** representent un systeme complet d'evenements. La somme des probabilites de ces branches vaut $1$.
- **La probabilite d'un chemin** (intersection des evenements le composant) s'obtient par le produit des probabilites le long de ce chemin (probabilites conditionnelles successives).
- **La probabilite d'un evenement terminal** s'obtient en sommant les probabilites de tous les chemins menant a cet evenement (application directe de la formule des probabilites totales).

---

## ⚠️ 4. Pièges classiques aux Concours

1. **Oubli de verifier le systeme complet d'evenements** : 
   Avant d'appliquer la formule des probabilites totales ou la formule de Bayes, il est imperatif de rediger explicitement que la famille $(A_i)$ forme une partition de $\Omega$ (compatibles deux a deux, union egale a $\Omega$ et non-vacuite des evenements si l'on divise par leur probabilite).
2. **Confusion entre incompatibilité et indépendance** :
   - Deux evenements $A$ et $B$ sont **incompatibles** si $A \cap B = \emptyset$. Si de surcroit $\mathbb{P}(A) > 0$ et $\mathbb{P}(B) > 0$, ils ne peuvent **jamais** etre independants car $\mathbb{P}(A \cap B) = 0 \neq \mathbb{P}(A)\mathbb{P}(B)$.
3. **Mauvaise interpretation du "sans remise" vs "avec remise"** :
   Dans les problemes de tirages simultanes, l'ordre n'intervient pas (combinaisons $\binom{n}{p}$). S'il y a des tirages successifs sans remise, l'ordre importe generalement (arrangements $A_n^p$), bien qu'il soit parfois possible de diviser par $p!$ pour revenir a des combinaisons. Veillez a conserver la **meme modelisation** du debut a la fin de l'exercice pour le calcul du cardinal de $\Omega$ et de $|A|$.
4. **Indépendance mutuelle vs indépendance deux à deux** :
   Pour une famille d'evenements $(A_1, A_2, \dots, A_n)$, l'independance deux a deux ($\forall i \neq j, \ \mathbb{P}(A_i \cap A_j) = \mathbb{P}(A_i)\mathbb{P}(A_j)$) n'implique **en aucun cas** l'independance mutuelle. Cette derniere requiert la verification de l'egalite multiplicative pour **toutes** les sous-familles de $\{1, \dots, n\}$.