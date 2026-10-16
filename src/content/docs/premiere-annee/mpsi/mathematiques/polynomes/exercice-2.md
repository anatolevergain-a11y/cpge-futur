---
title: 'Exercice 2 : Racines multiples'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Autour des racines multiples et de l'irréductibilité

**Filière :** MPSI  
**Matière :** Mathématiques  
Chapitre: ** Polynômes et fractions rationnelles  
**Thème :** Racines multiples, pgcd de polynômes et analyse critique de la modélisation algébrique.

---

## Énoncé

Soit $\mathbb{K}$ un corps commutatif (que l'on pourra supposer être $\mathbb{R}$ ou $\mathbb{C}$ selon les questions). L'objet de ce problème est d'étudier les liens entre les racines d'un polynôme et celles de ses dérivées successives, ainsi que d'explorer des méthodes algorithmiques pour la caractérisation des racines multiples. 

Une attention particulière sera portée aux limites de certains outils formels lorsque l'on quitte le cadre des corps de characteristic nulle, nous invitant à une analyse critique du modèle algébrique usuel.

---

## Questions

### Part I : Caractérisation algébrique des racines multiples

Soit $P \in \mathbb{K}[X]$ un polynôme non nul et $a \in \mathbb{K}$.

1. Rappeler la définition formelle du fait que $a$ est une racine de multiplicité $m$ (avec $m \ge 1$) de $P$.
2. Montrer que $a$ est une racine de multiplicité $m$ de $P$ si et seulement si :
   $$P(a) = P'(a) = \cdots = P^{(m-1)}(a) = 0 \quad \text{etвніш} \quad P^{(m)}(a) \neq 0$$
3. Soit $d = \gcd(P, P')$. Montrer que si $a$ est une racine de $P$ de multiplicité $m \ge 2$, alors $a$ est une racine de $d$. Quelle est la multiplicité de $a$ dans $d$ en fonction de $m$ ?
4. En déduire une condition nécessaire et suffisante portant sur $\gcd(P, P')$ pour que $P$ admette au moins une racine multiple dans $\mathbb{C}$.

### Part II : Étude d'une famille polynômiale et analyse critique

On considère la suite de polynômes $(P_n)_{n \in \mathbb{N}}$ définie par :
$$P_n(X) = \sum_{k=0}^{n} \frac{X^k}{k!}$$

5. Calculer la dérivée $P_n'$. Que peut-on dire de $\gcd(P_n, P_n')$ dans $\mathbb{R}[X]$ ?
6. En déduire que, pour tout $n \ge 1$, le polynôme $P_n$ ne possède aucune racine multiple dans $\mathbb{C}$.
7. **Analyse critique du modèle :** 
   Un étudiant affirme : *"Puisque $P_n$ n'a pas de racine multiple, le polynôme $P_n$ n'a que des facteurs irréductibles de degré 1 dans $\mathbb{C}[X]$ (ce qui est évident par d'Alembert-Gauss) mais aussi dans $\mathbb{R}[X]$ si l'on prend garde aux racines complexes conjuguées."*
   Critiquez rigoureusement cette affirmation. Quel est le piège conceptuel concernant la notion d'irréductibilité selon le corps de base $\mathbb{K}$ ?

---

## Pistes et indications

* **Q2 :** Utiliser la formule de Taylor pour les polynômes (qui est une identité algébrique valable sur tout corps de caractéristique nulle).
* **Q3 :** Écrire $P(X) = (X-a)^m Q(X)$ avec $Q(a) \neq 0$ et calculer $P'$.
* **Q5 & Q6 :** Remarquer une relation simple entre $P_n$ et $P_n'$. Évaluer $P_n$ en une racine commune éventuelle.
* **Q7 :** Distinguer soigneusement le corps de décomposition d'un polynôme et son corps de définition initial. Que dire de l'irréductibilité dans $\mathbb{R}[X]$ pour un polynôme de degré $\ge 3$ ?

---

## Corrigé pas à pas

### Part I : Caractérisation algébrique des racines multiples

1. **Définition :** Soit $m \in \mathbb{N}^*$. On dit que $a \in \mathbb{K}$ est une racine de multiplicité $m$ de $P$ si $(X-a)^m$ divise $P$ dans $\mathbb{K}[X]$, et $(X-a)^{m+1}$ ne divise pas $P$. Autrement dit, il existe un polynôme $Q \in \mathbb{K}[X]$ tel que $P(X) = (X-a)^m Q(X)$ avec $Q(a) \neq 0$.

2. **Formule des dérivées successives :**
   Si $P(X) = (X-a)^m Q(X)$ avec $Q(a) \neq 0$, alors par la formule de Leibniz (ou par récurrence), pour $1 \le k \le m$ :
   $$P^{(k)}(X) = \sum_{j=0}^{k} \binom{k}{j} \left((X-a)^m\right)^{(j)} Q^{(k-j)}(X)$$
   Comme chaque terme dérivé de $(X-a)^m$ est porteur d'une puissance $(X-a)$ pour $j < m$, on a $P^{(k)}(a) = 0$ pour $0 \le k \le m-1$. 
   Pour $k = m$, le seul terme non nul en $a$ est celui où $(X-a)^m$ est dérivé $m$ fois, ce qui donne $P^{(m)}(a) = m! Q(a) \neq 0$ (car $\text{car}(\mathbb{K}) = 0$ ou $m!$ est inversible, ce qui est implicitement supposé en contexte prépa classique). La réciproque s'obtient par la formule de Taylor polynomiale.

3. **Lien avec le PGCD :**
   Si $a$ est racine de multiplicité $m \ge 2$, alors $P(X) = (X-a)^m Q(X)$. 
   En dérivant : $P'(X) = m(X-a)^{m-1}Q(X) + (X-a)^m Q'(X) = (X-a)^{m-1} \left( mQ(X) + (X-a)Q'(X) \right)$.
   Posons $R(X) = mQ(X) + (X-a)Q'(X)$. On a $R(a) = mQ(a) \neq 0$.
   Ainsi, $(X-a)^{m-1}$ divise à la fois $P$ et $P'$. Par conséquent, $(X-a)^{m-1}$ divise $d = \gcd(P, P')$. La multiplicité de $a$ dans $d$ est donc au moins $m-1$.

4. **Caractérisation globale :**
   $P$ admet une racine multiple si et seulement si $P$ et $P'$ ont un facteur commun de degré $\ge 1$, ce qui équivaut à dire que :
   $$\deg(\gcd(P, P')) \ge 1$$

---

### Part II : Étude d'une famille polynômiale et analyse critique

5. **Calcul de la dérivée :**
   Par définition, $P_n'(X) = \sum_{k=1}^{n} \frac{k X^{k-1}}{k!} = \sum_{k=1}^{n} \frac{X^{k-1}}{(k-1)!} = \sum_{j=0}^{n-1} \frac{X^j}{j!} = P_{n-1}(X)$.
   Calculons le pgcd de $P_n$ et $P_n'$ : soit $d = \gcd(P_n, P_n') = \gcd(P_n, P_{n-1})$.
   Si $a$ est une racine commune à $P_n$ et $P_{n-1}$, alors comme $P_n(X) = P_{n-1}(X) + \frac{X^n}{n!}$, on a :
   $$P_n(a) - P_{n-1}(a) = \frac{a^n}{n!} = 0 \implies a = 0$$
   Testons $0$ : $P_n(0) = 1 \neq 0$. Donc $0$ n'est pas racine.
   Il n'y a donc **aucune** racine commune à $P_n$ et $P_n'$. Ainsi, $\gcd(P_n, P_n') = 1$.

6. **Absence de racines multiples :**
   D'après la question 4, si $P_n$ admettait une racine multiple, alors $\gcd(P_n, P_n')$ serait de degré $\ge 1$. Or, ce pgcd est constant (égal à $1$). Par conséquent, **$P_n$ n'admet aucune racine multiple dans $\mathbb{C}$**.

7. **Analyse critique du modèle :**
   L'affirmation de l'étudiant contient une confusion grave entre la *simplicité des racines* (absence de multiplicité) et la *nature de l'irréductibilité* des facteurs.
   * **Sur le plan formel :** Le théorème de d'Alembert-Gauss garantit que dans $\mathbb{C}[X]$, tout polynôme se scinde en facteurs de degré 1. L'absence de racines multiples signifie précisément que tous ces facteurs de degré 1 sont distincts ($P_n(X) = \frac{1}{n!} \prod_{k=1}^n (X - z_k)$ avec $z_i \neq z_j$).
   * **Sur le plan de l'analyse critique ($\mathbb{R}[X]$) :** L'étudiant conclut hâtivement que les facteurs irréductibles dans $\mathbb{R}[X]$ sont de degré 1. C'est faux. Un polynôme à coefficients réels sans racines multiples dans $\mathbb{C}$ possède des racines complexes conjuguées. Ses facteurs irréductibles dans $\mathbb{R}[X]$ sont soit de degré 1 (pour les racines réelles), soit de **degré 2** (pour les paires de racines complexes conjuguées, de discriminant strictement négatif). 
   * **Conclusion critique :** L'absence de racine multiple dans $\mathbb{C}$ assure seulement que le polynôme est sans facteur carré (produit de facteurs irréductibles simples), mais ne préjuge en rien de leur degré dans $\mathbb{R}$, qui dépend de la nature réelle ou non de ces racines. Le modèle algébrique exige de compartimenter strictement les propriétés selon le corps de base considéré.