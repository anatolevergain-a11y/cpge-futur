---
title: 'Exercice 1 : Théorème de Bézout et nombres premiers'
description: 'Problème d entraînement type concours pour MPSI.'
---

### 🌐 Énoncé du problème / Étude de cas

Dans le cadre de l'optimisation des protocoles de transmission de données cryptographiques (type RSA), l'ingénieur en sécurité informatique doit manipuler des clés constituées de grands nombres entiers. Pour garantir une sécurité optimale, ces protocoles s'appuient sur l'intractabilité de la factorisation en nombres premiers et sur l'efficacité des algorithmes de recherche de PGCD (comme l'algorithme d'Euclide étendu).

Ce problème propose d'étudier l'interaction entre les polynômes à coefficients dans $\mathbb{Q}$ ou $\mathbb{R}$ et l'arithmétique des entiers, en faisant le pont à travers le théorème de Bézout. 

*Modélisation et limites physiques :* En cryptographie réelle, les entiers manipulés possèdent souvent plusieurs centaines de chiffres (par exemple des clés de $2048$ bits). Cependant, les processeurs informatiques ont une précision limitée par la taille des registres (par exemple $64$ bits). Le traitement de grands nombres nécessite l'utilisation de structures de données dynamiques (arithmétique arbitraire), introduisant un coût temporel et spatial non négligeable. L'étudiant devra garder à l'esprit que la complexité algorithmique prime sur la simple existence mathématique des solutions.

---

### ❓ Questions progressives

1. **Rappels préliminaires sur les polynômes et Bézout**
   Soit $P \in \mathbb{R}[X]$. Montrer que si $a$ est une racine simple de $P$, alors $a$ est une racine de ordre $0$ de $P'$ (c'est-à-dire $P'(a) \neq 0$). Que peut-on dire du PGCD de $P$ et $P'$ lorsque $P$ possède une racine multiple ?

2. **Application arithmétique du théorème de Bézout**
   Soient $a$ et $b$ deux entiers naturels non nuls. Énoncer le théorème de Bézout pour $a$ et $b$. En déduire l'existence de couples $(u, v) \in \mathbb{Z}^2$ tels que $au + bv = 1$ si et seulement si $a$ et $b$ sont premiers entre eux.

3. **Généralisation aux polynômes irréductibles**
   Soit $K$ un corps (par exemple $\mathbb{Q}$ ou $\mathbb{R}$). Soient $A, B, C \in K[X]$ tels que $A$ divise le produit $BC$ et que $A$ et $B$ soient premiers $Entre$ eux (au sens de l'existence d'une relation de Bézout dans $K[X]$). Montrer que $A$ divise $C$.

4. **Étude d'un polynôme particulier**
   On considère le polynôme $P_n(X) = \sum_{k=0}^{n} \frac{X^k}{k!}$ pour $n \in \mathbb{N}^*$.
   * a) Calculer la dérivée $P_n'$.
   * b) En étudiant les racines de $P_n$ et de son polynôme dérivé, montrer que $P_n$ ne possède pas de racine multiple dans $\mathbb{C}$.

5. **Analyse critique et limites du modèle algorithmique**
   * a) Soit $N$ un entier représenté en mémoire. Si l'on souhaite tester si $N$ est premier en utilisant des approches algébriques issues des polynômes cyclotomiques, expliquer en quoi la représentation en mémoire de nombres de l'ordre de $10^{1000}$ invalide l'hypothèse d'un coût en temps constant $\mathcal{O}(1)$ pour les opérations élémentaires (addition, multiplication).
   * b) Proposer une critique de la modélisation mathématique pure face aux contraintes d'implémentation matérielle (temps de calcul, consommation énergétique des processeurs lors des divisions euclidiennes successives).

---

### 💡 Pistes & Indications

- **Question 1 :** Écrire $P(X) = (X-a)Q(X)$ avec $Q(a) \neq 0$ pour la racine simple. Pour les racines multiples, penser au lien entre les facteurs irréductibles communs à $P$ et $P'$.
- **Question 2 :** C'est un résultat du cours. Utilisez l'ensemble des combinaisons linéaires positives $a\mathbb{Z} + b\mathbb{Z}$ et son plus petit élément strictement positif.
- **Question 3 :** Utilisez l'identité de Bézout dans l'anneau euclidien $K[X]$. Multiplier la relation par $C$.
- **Question 4 :** Pour la partie b), remarquez que $P_n'(X) = P_{n-1}(X)$. Utilisez un raisonnement par récurrence ou une équation différentielle simple vérifiée par $P_n$.
- **Question 5 :** Sondez la complexité de l'algorithme d'Euclide étendu en fonction du nombre de chiffres de l'entrée.

---

### 📋 Corrigé détaillé et analyse des résultats

1. **Racines et polynôme dérivé :**
   Si $a$ est une racine simple de $P$, on peut écrire $P(X) = (X-a)Q(X)$ avec $Q(a) \neq 0$. 
   En dérivant, $P'(X) = Q(X) + (X-a)Q'(X)$, d'où $P'(a) = Q(a) \neq 0$. 
   Si $P$ possède une racine multiple $a$ d'ordre $m \ge 2$, alors $(X-a)^2$ divise $P$, ce qui implique que $X-a$ divise à la fois $P$ et $P'$. Ainsi, le PGCD de $P$ et $P'$ n'est pas constant (il est de degré supérieur ou égal à $1$).

2. **Théorème de Bézout (Arithmétique) :**
   Le théorème de Bézout énonce que deux entiers $a$ et $b$ sont premiers entre eux ($\text{PGCD}(a,b) = 1$) si et seulement s'il existe un couple d'entiers $(u,v) \in \mathbb{Z}^2$ tel que :
   $$au + bv = 1$$
   *Preuve succincte :* L'idéal $I = a\mathbb{Z} + b\mathbb{Z}$ est un idéal de $\mathbb{Z}$, donc principal de la forme $d\mathbb{Z}$ avec $d > 0$. Par définition, $d = \text{PGCD}(a,b)$. Si $d=1$, $1 \in I$, d'où l'existence de $u$ et $v$. Réciproquement, si $au+bv=1$ et si $d$ divise $a$ et $b$, alors $d$ divise $1$, donc $d=1$.

3. **Lemme de Gauss dans $K[X]$ :**
   Puisque $A$ et $B$ sont premiers entre eux dans l'anneau euclidien $K[X]$, il existe $U, V \in K[X]$ tels que :
   $$AU + BV = 1$$
   Multiplions cette relation par $C$ :
   $$ACU + BCV = C$$
   Puisque $A$ divise $BC$, il existe $Q \in K[X]$ tel que $BC = AQ$. En substituant :
   $$ACU + (AQ)V = C \implies A(CU + QV) = C$$
   Ainsi, $A$ divise $C$.

4. **Étude du polynôme $P_n$ :**
   * a) Par dérivation terme à terme :
   $$P_n'(X) = \sum_{k=1}^{n} \frac{kX^{k-1}}{k!} = \sum_{k=1}^{n} \frac{X^{k-1}}{(k-1)!} = \sum_{j=0}^{n-1} \frac{X^j}{j!} = P_{n-1}(X)$$
   * b) Supposons par l'absurde que $P_n$ possède une racine multiple $a \in \mathbb{C}$. Alors $P_n(a) = 0$ et $P_n'(a) = P_{n-1}(a) = 0$. Par récurrence immédiate, toutes les dérivées successives de $P_n$ s'annuleraient en $a$. Or, la $n$-ième dérivée de $P_n$ est $P_0(X) = 1$, qui ne s'annule jamais. C'est une contradiction. Donc $P_n$ ne possède que des racines simples.

5. **Analyse critique et limites du modèle algorithmique :**
   * a) Dans un modèle informatique bas niveau, les opérations sur des entiers de taille standard (machine words) s'effectuent en temps $\mathcal{O}(1)$. Cependant, pour des entiers de taille arbitraire $L$ (ex: $L \approx 1000$ bits), la multiplication de deux entiers par l'algorithme naïf demande $\mathcal{O}(L^2$ opérations (et $\mathcal{O}(L \ln L \ln \ln L)$ avec l'algorithme de Schönhage-Strassen). L'hypothèse d'un coût constant est donc totalement invalidée, et la complexité réelle de l'algorithme d'Euclide devient quadratique en la taille des entrées.
   * b) *Limites physiques et énergétiques :* La modélisation mathématique abstraite néglige la dissipation thermique et le temps de propagation des signaux électriques dans les transistors. Lorsque la taille des clés cryptographiques augmente pour garantir la sécurité face aux progrès de la cryptanalyse, le coût énergétique de la division euclidienne grandit, posant un problème critique pour les systèmes embarqués à basse consommation (cartes à puce, objets connectés IoT). Un bon ingénieur doit ainsi constamment arbitrer entre la sécurité théorique (liée à la taille des nombres premiers) et la faisabilité matérielle.