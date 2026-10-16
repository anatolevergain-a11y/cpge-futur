---
title: 'Cours : Langages réguliers et automates'
description: 'Synthèse de cours, théorèmes et démonstrations fondamentales.'
---

## 📌 1. Définitions & Cadre d'étude

Soit $\Sigma$ un alphabet fini, c'est-à-dire un ensemble non vide de symboles. 
* Un **mot** sur $\Sigma$ est une suite finie de symboles de $\Sigma$. L'ensemble de tous les mots sur $\Sigma$ est noté $\Sigma^*$. Le mot vide est noté $\varepsilon$.
* Un **langage** sur $\Sigma$ est une partie de $\Sigma^*$.

### A. Opérations sur les langages
Soient $L, L_1, L_2 \subset \Sigma^*$ des langages :
* **Concaténation** : $L_1 L_2 = \{u_1 u_2 \mid u_1 \in L_1 \text{ et } u_2 \in L_2\}$.
* **Puissances** : $L^0 = \{\varepsilon\}$, $L^{n+1} = L^n L$.
* **Étoile de Kleene** : $L^* = \bigcup_{n \in \mathbb{N}} L^n$.

### B. Langages réguliers (ou rationnels)
L'ensemble des langages réguliers sur $\Sigma$ est le plus petit ensemble de langages contenant les langages finis et stable par union, concaténation et étoile de Kleene.

### C. Automates finis déterministes (AFD)
Un AFD est un quintuplé $\mathcal{A} = (Q, \Sigma, \delta, q_0, F)$ où :
* $Q$ est un ensemble fini d'états.
* $\Sigma$ est l'alphabet d'entrée.
* $\delta : Q \times \Sigma \to Q$ est la fonction de transition.
* $q_0 \in Q$ est l'état initial.
* $F \subset Q$ est l'ensemble des états acceptants (ou finis).

La fonction de transition s'étend naturellement en $\delta^* : Q \times \Sigma^* \to Q$ par :
* $\delta^*(q, \varepsilon) = q$
* $\delta^*(q, ua) = \delta(\delta^*(q, u), a)$ pour tout $u \in \Sigma^*$ et $a \in \Sigma$.

Un mot $u \in \Sigma^*$ est **accepté** par $\mathcal{A}$ si $\delta^*(q_0, u) \in F$. Le langage reconnu par $\mathcal{A}$, noté $L(\mathcal{A})$, est l'ensemble des mots acceptés par $\mathcal{A}$.

### D. Automates finis non déterministes (AFN et AFN-$\varepsilon$)
Un AFN est défini de la même manière, mais sa fonction de transition est $\delta : Q \times \Sigma \to \mathcal{P}(Q)$. 
Dans le cas d'un AFN-$\varepsilon$, les transitions spontanées sont autorisées : $\delta : Q \times (\Sigma \cup \{\varepsilon\}) \to \mathcal{P}(Q)$.

---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### A. Théorème de Kleene (Équivalence automates / expressions régulières)
**Énoncé :** Un langage est reconnu par un automate fini si et seulement s'il est décrit par une expression régulière.

#### Démonstration (Sens $\Leftarrow$ : Expression $\implies$ Automate via Thompson)
Par induction structurelle sur la construction de l'expression régulière :
1. **Cas de base ($\emptyset$, $\varepsilon$, $a \in \Sigma$)** : Construction immédiate d'un AFN-$\varepsilon$ avec un état initial et un état acceptant.
2. **Union ($E_1 + E_2$)** : Soient $\mathcal{A}_1$ et $\mathcal{A}_2$ deux AFN-$\varepsilon$ reconnaissant respectivement $L(E_1)$ et $L(E_2)$. On crée un nouvel état initial $q_0$ avec des $\varepsilon$-transitions vers les états initiaux de $\mathcal{A}_1$ et $\mathcal{A}_2$.
3. **Concaténation ($E_1 E_2$)** : On relie les états acceptants de $\mathcal{A}_1$ aux états initiaux de $\mathcal{A}_2$ par des $\varepsilon$-transitions.
4. **Étoile ($E^*$)** : On ajoute un nouvel état initial acceptant (par $\varepsilon$-transition) et des boucles $\varepsilon$ des états acceptants vers l'état initial.

#### Démonstration (Sens $\Rightarrow$ : Automate $\implies$ Expression via le lemme d'Arden)
Soit $\mathcal{A} = (Q, \Sigma, \delta, q_1, F)$ avec $Q = \{q_1, \dots, q_n\}$. Pour tout $i$, on associe le langage $L_i$ reconnu en partant de l'état $q_i$. On obtient un système d'équations langagières de la forme :
$$L_i = \sum_{a \in \Sigma, \delta(q_i, a) = q_j} a L_j + (\varepsilon \text{ si } q_i \in F \text{ sinon } \emptyset)$$
*Lemme d'Arden :* Soit $A, B$ deux langages tels que $\varepsilon \notin A$. L'équation $X = AX + B$ admet une unique solution qui est $X = A^* B$.
Par substitution et application successive du lemme d'Arden, on isole $L_1$, qui correspond à l'expression régulière cherchée. $\blacksquare$

### B. Déterminisation (Construction par sous-ensembles)
**Énoncé :** Pour tout AFN (ou AFN-$\varepsilon$), il existe un AFD reconnaissant le même langage.

**Démonstration :** Soit $\mathcal{A} = (Q, \Sigma, \delta, I, F)$ un AFN. On construit l'AFD $\mathcal{D} = (P(\Sigma), \Sigma, \delta_D, I_D, F_D)$ tel que :
* $I_D = \text{Cl}_{\varepsilon}(I)$ (clôture par $\varepsilon$-transitions des états initiaux).
* $\delta_D(S, a) = \bigcup_{s \in S} \text{Cl}_{\varepsilon}(\delta(s, a))$ pour tout $S \in P(Q)$ et $a \in \Sigma$.
* $F_D = \{S \in \mathcal{P}(Q) \mid S \cap F \neq \emptyset\}$.

La récurrence sur la longueur du mot montre que $\delta_D^*(I_D, u) = \text{Cl}_{\varepsilon}(\delta^*(I, u))$, ce qui garantit l'égalité des langages reconnus. $\blacksquare$

### C. Le lemme de l'itération (Pumping Lemma)
**Énoncé :** Soit $L$ un langage régulier. Il existe un entier $n \ge 1$ (la constante de pumping, souvent liée au nombre d'états de l'AFD minimal) tel que pour tout mot $z \in L$ tel que $|z| \ge n$, il existe une décomposition $z = uvw$ vérifiant :
1. $|uv| \le n$
2. $|v| \ge 1$
3. $\forall i \in \mathbb{N}, \quad u v^i w \in L$

**Démonstration :** Soit $\mathcal{A}$ un AFD reconnaissant $L$ possédant $n$ états. Soit $z = a_1 a_2 \dots a_m$ un mot de $L$ avec $m \ge n$. 
Considérons la suite des $n+1$ états visités lors de la lecture des $n$ premiers symboles de $z$ : $(q_0, q_1, \dots, q_n)$. Par le principe des tiroirs de Dirichlet, deux de ces états doivent être identiques : soit $q_i = q_j$ avec $0 \le i < j \le n$. 
On pose :
* $u = a_1 \dots a_i$
* $v = a_{i+1} \dots a_j$
* $w = a_{j+1} \dots a_m$
La boucle sur l'état $q_i = q_j$ peut être répétée $i$ fois sans modifier l'acceptation du mot, ce qui conclut. $\blacksquare$

---

## 💡 3. Méthodes classiques de résolution

### A. Algorithme de Brzozowski (Minimisation par double inversion)
Pour minimiser un AFD :
1. Inverser le sens des transitions et échanger états initiaux et finaux (on obtient un AFN).
2. Déterminiser cet AFN (on obtient un AFD).
3. Répéter l'opération (inversion + déterminisation).
Le résultat est l'AFD minimal et canonique (à isomorphisme près) reconnaissant le langage miroir du langage initial inversé.

### B. Algorithme de Moore (Raffinement de partitions)
Pour minimiser un AFD $\mathcal{A} = (Q, \Sigma, \delta, q_0, F)$ :
1. Initialiser une partition $\Pi_0 = \{F, Q \setminus F\}$.
2. À l'étape $k+1$, raffiner $\Pi_k$ en séparant les états $p$ et $q$ si pour un symbole $a \in \Sigma$, $\delta(p, a)$ et $\delta(q, a)$ n'appartiennent pas au même bloc de $\Pi_k$.
3. Stopper lorsque $\Pi_{k+1} = \Pi_k$. Les blocs de la partition finale constituent les états de l'automate minimal.

---

## ⚠️ 4. Pièges classiques aux Concours

1. **Confusion entre AFN et AFD lors de la minoration** : Appliquer l'algorithme de Moore ou de Hopcroft sur un automate non déterministe. La minimisation n'est définie et algorithmiquement correcte *que* pour les AFD émondés (sans états inaccessible).
2. **Mauvaise application du Lemme de l'itération** : Le lemme est une condition **nécessaire** mais non suffisante. Prouver qu'un langage vérifie le Pumping Lemma ne garantit en rien qu'il est régulier.
3. **Oubli des $\varepsilon$-transitions dans la déterminisation** : Ne pas calculer la clôture par $\varepsilon$-transitions ($\text{Cl}_{\varepsilon}$) avant d'appliquer la fonction de transition globale conduit à des automates erronés.
4. **Non-unicité de l'expression régulière** : Une expression régulière minimale n'est pas unique, contrairement à l'AFD minimal. Ne cherchez pas à démontrer l'unicité d'une expression par des méthodes automatiques sans passer par les automates.