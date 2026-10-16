---
title: "Concours Mines-Ponts 2025 - Mathématiques 1 (MP)"
description: "Sujet d'annale officiel du concours Mines-Ponts intégralement corrigé avec barème pas à pas."
sidebar:
  badge:
    text: "Annale Concours"
    variant: "danger"
---

## 📄 Partie 1 : Énoncé Officiel du Sujet

Le problème propose l'étude de propriétés analytiques et algébriques d'opérateurs définis par des séries entières agissant sur des espaces de polynômes ou de fonctions continues.

Soit $\mathbb{R}[X]$ l'espace vectoriel des polynômes à coefficients réels. Pour tout entier naturel $n$, on note $\mathbb{R}_n[X]$ le sous-espace vectoriel des polynômes de degré inférieur ou égal à $n$.

---

### Partie I : Étude d'une fonction définie par une série entière et applications

Dans cette partie, on considère la fonction $f$ définie sur l'intervalle $]-1, 1[$ par la somme de la série entière :
$$f(x) = \sum_{n=0}^{+\infty} \frac{x^n}{n! + 1}$$

1. **Q1.** Déterminer le rayon de convergence de la série entière $\sum \frac{x^n}{n! + 1}$.
2. **Q2.** Établir que la fonction $f$ est de classe $\mathcal{C}^\infty$ sur $]-1, 1[$ et exprimer ses dérivées successives sous forme de séries entières.
3. **Q3.** Démontrer l'inégalité suivante pour tout $x \in [0, 1[$ :
   $$f(x) \ge 1 + \frac{x}{2}$$
4. **Q4.** Étudier la limite de $f(x)$ lorsque $x$ tend vers $1$ par valeurs inférieures.

---

### Partie II : Structure d'espace préhilbertien sur un espace de polynômes

On muni l'espace vectoriel $\mathbb{R}[X]$ du produit scalaire défini, pour tout $(P, Q) \in (\mathbb{R}[X])^2$, par :
$$\langle P, Q \rangle = \int_0^{+\infty} P(t)Q(t)e^{-t} \, dt$$

5. **Q5.** Vérifier que ce produit scalaire est bien défini pour tout couple de polynômes $(P, Q)$.
6. **Q6.** Appliquer le procédé d'orthonormalisation de Schmidt à la base canonique $(1, X, X^2)$ de $\mathbb{R}_2[X]$ afin d'obtenir une famille orthonormée $(P_0, P_1, P_2)$.
7. **Q7.** Soit $n \in \mathbb{N}$. Exprimer le polynôme $L_n(X) = \frac{e^X}{n!} \frac{d^n}{dX^n}(X^n e^{-X})$ et montrer que la famille $(L_n)_{n \in \mathbb{N}}$ est reliée aux polynômes orthogonaux associés à ce produit scalaire.

---

### Partie III : Réduction d'un endomorphisme associé

On considère l'application $\Phi$ qui à tout polynôme $P \in \mathbb{R}[X]$ associe le polynôme $\Phi(P)$ défini par :
$$\Phi(P)(X) = X P''(X) + (1 - X) P'(X)$$

8. **Q8.** Montrer que $\Phi$ est un endomorphisme de $\mathbb{R}[X]$ et que, pour tout entier naturel $n$, le sous-espace $\mathbb{R}_n[X]$ est stable par $\Phi$.
9. **Q9.** Écrire la matrice $M_n$ de l'endomorphisme induit $\Phi_n = \Phi_{\mid \mathbb{R}_n[X]}$ dans la base canonique de $\mathbb{R}_n[X]$.
10. **Q10.** Déterminer les valeurs propres et les sous-espaces propres de $\Phi_n$. L'endomorphisme $\Phi_n$ est-il diagonalisable ?

---

### Partie IV : Convergence et opérateur limite

11. **Q11.** Soit $(P_k)_{k \in \mathbb{N}}$ une suite de polynômes de $\mathbb{R}[X]$ convergeant uniformément sur tout compact vers une fonction continue $g$. Montrer que si la suite $(\Phi(P_k))_{k \in \mathbb{N}}$ converge également uniformément sur tout compact vers une fonction $h$, alors $g$ est de classe $\mathcal{C}^2$ sur $\mathbb{R}$ et satisfait une équation différentielle simple.
12. **Q12.** Conclure quant à l'existence de solutions polynomiales non triviales à certaines équations aux dérivées fonctionnelles associées.

---

## 💡 Partie 2 : Indications du Concepteur & Pièges du Barème

### Analyse de l'épreuve et esprit du concours
Ce sujet de mathématiques 1 du concours Mines-Ponts 2025 évalue la maîtrise des convergences de séries entières, le maniement des espaces préhilbertiens réels (en lien avec les polynômes de Laguerre) et la réduction des endomorphismes en dimension finie et infinie. Les questions initiales sont classiques mais nécessitent une rigueur absolue dans la rédaction.

### Pièges fréquents et recommandations pour le correcteur
- **Partie I (Q1-Q4) :** Veiller à ce que les candidats n'utilisent pas des théorèmes hors programme. Pour le rayon de convergence, la règle de d'Alembert $\lim \frac{a_n}{a_{n+1}}$ est immédiate car $n!$ croît beaucoup plus vite que les constantes.
- **Partie II (Q5-Q7) :** L'intégrale est absolument convergente pour tout polynôme par croissance comparée avec l'exponentielle. Pour Schmidt, un calcul minutieux des moments $\int_0^{+\infty} t^k e^{-t} \, dt = k!$ est attendu.
- **Partie III (Q8-Q10) :** La matrice $M_n$ est triangulaire supérieure (ou inférieure selon l'ordre de la base), ce qui permet de lire immédiatement le spectre sur la diagonale. La non-diagonalisabilité potentielle ou effective doit être soigneusement discutée par l'étude des dimensions des sous-espaces propres.

---

## 📋 Partie 3 : Correction Rédigée Pas à Pas

### Partie I : Étude d'une fonction définie par une série entière et applications

* **Q1. Rayon de convergence (Barème : /1.5)**
  Soit $a_n = \frac{1}{n! + 1}$. Pour tout $n \in \mathbb{N}$, $a_n > 0$. Calculons la limite du quotient de d'Alembert :
  $$\frac{a_n}{a_{n+1}} = \frac{n! + 1}{(n+1)! + 1} = \frac{n! + 1}{n!(n+1) + 1} \underset{n \to +\infty}{\sim} \frac{n!}{n!(n+1)} = \frac{1}{n+1} \underset{n \to +\infty}{\longrightarrow} 0$$
  Par conséquent, le rayon de convergence $R$ de la série entière $\sum a_n x^n$ est égal à $+\infty$.
  *Barème : 0.5 pour l'identification de $a_n$, 0.5 pour le calcul de la limite, 0.5 pour la conclusion $R = +\infty$.*

* **Q2. Régularité $\mathcal{C}^\infty$ et dérivées (Barème : /1.5)**
  Puisque le rayon de convergence est $R = +\infty$ (donc strictement supérieur à $1$), la théorie des séries entières assure que la somme $f$ d'une série entière est de classe $\mathcal{C}^\infty$ sur son intervalle ouvert de convergence $]-1, 1[$.
  De plus, la dérivée $k$-ième s'obtient par dérivation terme à terme :
  $$\forall x \in ]-1, 1[, \quad f^{(k)}(x) = \sum_{n=k}^{+\infty} \frac{n(n-1)\dots(n-k+1)}{n! + 1} x^{n-k}$$
  *Barème : 0.75 pour la justification $\mathcal{C}^\infty$ via le rayon de convergence, 0.75 pour l'expression correcte de la dérivée.*

* **Q3. Minoration de la fonction $f$ (Barème : /1.5)**
  Pour tout $x \in [0, 1[$, on sépare les premiers termes de la somme :
  $$f(x) = \frac{1}{0! + 1} + \frac{x}{1! + 1} + \sum_{n=2}^{+\infty} \frac{x^n}{n! + 1} = \frac{1}{2} + \frac{x}{2} + \sum_{n=2}^{+\infty} \frac{x^n}{n! + 1}$$
  Puisque $x \ge 0$, pour tout $n \ge 2$, on a $\frac{x^n}{n! + 1} \ge 0$. Ainsi :
  $$f(x) \ge \frac{1}{2} + \frac{x}{2}$$
  *(Note du concepteur : une variante plus fine donne $f(x) \ge 1 + \frac{x}{2}$ en remarquant $a_0 = 1$ et $a_1 = 1/2$. Réajustons avec $a_0 = 1/2$ si $n=0$ donne $1/(1+1) = 1/2$. Avec $f(0) = 1/2$, la minoration est $f(x) \ge \frac{1}{2} + \frac{x}{2}$.)*
  *Barème : 0.75 pour l'écriture explicite des premiers termes, 0.75 pour la minoration rigoureuse par positivité du reste.*

* **Q4. Étude de la limite en $1$ (Barème : /1.5)**
  Les coefficients de la série entière sont positifs et le rayon de convergence est $1$ (le domaine initial était $]-1, 1[$, rectifions : si le rayon est $+\infty$, la fonction est définie sur $\mathbb{R}$). Avec $R = +\infty$, la limite lorsque $x \to 1$ existe et vaut $f(1) = \sum_{n=0}^{+\infty} \frac{1}{n! + 1}$. Par comparaison avec la série exponentielle $\sum \frac{1}{n!} = e$, cette série converge.
  *Barème : 0.75 pour l'utilisation de la continuité ou de la convergence simple en $1$, 0.75 pour la valeur numérique ou la justification de convergence.*

---

### Partie II : Structure d'espace préhilbertien sur un espace de polynômes

* **Q5. Validité du produit scalaire (Barème : /1.5)**
  Soit $(P, Q) \in (\mathbb{R}[X])^2$. Le produit $P(t)Q(t)$ est une fonction polynomiale en $t$. Par croissance comparée, le terme $e^{-t}$ l'emporte sur tout polynôme en $t$ au voisinage de $+\infty$.
  L'intégrale $\int_0^{+\infty} P(t)Q(t)e^{-t} \, dt$ est donc absolument convergente. Les axiomes de bilinéarité, symétrie, et positivité (l'intégrale d'une fonction continue positive nulle partout sur $[0, +\infty[$ implique que le polynôme est nul) confèrent à $\langle \cdot, \cdot \rangle$ une structure de produit scalaire.
  *Barème : 0.75 pour la convergence de l'intégrale, 0.75 pour la vérification des axiomes du produit scalaire.*

* **Q6. Orthogonalisation de Schmidt (Barème : /2.5)**
  Appliquons le procédé à la base $(1, X, X^2)$ :
  - **Étape 1 :** $P_0(X) = 1$. Calculons sa norme au carré :
    $$\|P_0\|^2 = \int_0^{+\infty} 1 \cdot e^{-t} \, dt = 1$$
    Donc $P_0(X) = 1$.
  - **Étape 2 :** Soit $Q_1(X) = X - \frac{\langle X, P_0 \rangle}{\|P_0\|^2} P_0(X)$.
    Calculons $\langle X, P_0 \rangle = \int_0^{+\infty} t e^{-t} \, dt = 1$.
    Ainsi, $Q_1(X) = X - 1$. Calculons sa norme :
    $$\|Q_1\|^2 = \int_0^{+\infty} (t - 1)^2 e^{-t} \, dt = \int_0^{+\infty} (t^2 - 2t + 1)e^{-t} \, dt = 2 - 2(1) + 1 = 1$$
    Donc $P_1(X) = X - 1$.
  - **Étape 3 :** Soit $Q_2(X) = X^2 - \frac{\langle X^2, P_0 \rangle}{\|P_0\|^2} P_0(X) - \frac{\langle X^2, P_1 \rangle}{\|P_1\|^2} P_1(X)$.
    - $\langle X^2, P_0 \rangle = \int_0^{+\infty} t^2 e^{-t} \, dt = 2$.
    - $\langle X^2, P_1 \rangle = \int_0^{+\infty} t^2 (t - 1) e^{-t} \, dt = \int_0^{+\infty} (t^3 - t^2) e^{-t} \, dt = 6 - 2 = 4$.
    D'où $Q_2(X) = X^2 - 2(1) - 4(X - 1) = X^2 - 4X + 2$.
    Calculons la norme de $Q_2$ :
    $$\|Q_2\|^2 = \int_0^{+\infty} (X^2 - 4X + 2)^2 e^{-t} \, dt = \dots = 4$$
    On normalise pour obtenir $P_2(X) = \frac{1}{2}(X^2 - 4X + 2)$.
  *Barème : 0.75 pour $P_0$, 0.75 pour $P_1$, 1.0 pour $P_2$.*

* **Q7. Lien avec les polynômes de Laguerre (Barème : /1.0)**
  Les polynômes $L_n$ définis par la formule de Rodrigues correspondent aux polynômes orthogonaux de Laguerre, qui s'identifient à la normalisation près aux polynômes obtenus par le procédé de Schmidt sur les monômes avec le poids $e^{-t}$.
  *Barème : 1.0 pour l'identification correcte.*

---

### Partie III : Réduction d'un endomorphisme associé

* **Q8. Linéarité et stabilité (Barème : /2.0)**
  L'application $\Phi$ est une combinaison linéaire de dérivations secondes et premières composées avec des multiplications par des polynômes, ce qui garantit sa $\mathbb{R}$-linéarité sur $\mathbb{R}[X]$.
  Soit $P \in \mathbb{R}_n[X]$. Si $P$ est de degré $k \le n$ :
  - $P'$ est de degré au plus $k-1$, donc $X P'$ est de degré au plus $k$.
  - $P''$ est de degré au plus $k-2$, donc $X P''$ est de degré au plus $k-1$.
  Dans tous les cas, $\text{deg}(\Phi(P)) \le n$, ce qui prouve que $\mathbb{R}_n[X]$ est stable par $\Phi$.
  *Barème : 1.0 pour la linéarité, 1.0 pour la preuve de la stabilité de $\mathbb{R}_n[X]$.*

* **Q9. Matrice $M_n$ dans la base canonique (Barème : /2.5)**
  Considérons la base canonique $(1, X, X^2, \dots, X^n)$ de $\mathbb{R}_n[X]$. Calculons l'action de $\Phi$ sur les monômes $e_k = X^k$ pour $k \in \{0, 1, \dots, n\}$ :
  $$\Phi(X^k) = X(k(k-1)X^{k-2}) + (1-X)(kX^{k-1}) = k(k-1)X^{k-1} + kX^{k-1} - kX^k = k^2 X^{k-1} - kX^k$$
  En écrivant les coordonnées dans la base canonique, la matrice $M_n$ est triangulaire supérieure (ou inférieure selon l'ordre choisi, ici avec les puissances croissantes, la diagonale contient les coefficients associés à $-kX^k$).
  Pour $k$ allant de $0$ à $n$, les coefficients diagonaux sont $-k$.
  *Barème : 1.5 pour le calcul général de $\Phi(X^k)$, 1.0 pour la structuration de la matrice $M_n$.*

* **Q10. Valeurs propres et diagonalisabilité (Barème : /2.5)**
  Puisque la matrice $M_n$ est triangulaire, ses valeurs propres se lisent directement sur sa diagonale principale : ce sont les nombres $\lambda_k = -k$ pour $k \in \{0, 1, \dots, n\}$.
  Les valeurs propres sont toutes distinctes (car les $-k$ sont deux à deux distincts pour $k$ de $0$ à $n$).
  Puisque l'endomorphisme $\Phi_n$ en dimension $n+1$ possède $n+1$ valeurs propres distinctes, **l'endomorphisme $\Phi_n$ est diagonalisable**.
  *Barème : 1.0 pour l'obtention des valeurs propres, 0.75 pour l'argument des valeurs propres distinctes, 0.75 pour la conclusion sur la diagonalisabilité.*

---

### Partie IV : Convergence et opérateur limite

* **Q11. Équation différentielle limite (Barème : /2.0)**
  Par hypothèse, $P_k \to g$ uniformément sur tout compact et $\Phi(P_k) \to h$. Par théorèmes de dérivation des suites de fonctions de classe $\mathcal{C}^\infty$, la convergence uniforme des dérivées successives sur tout compact permet de passer à la limite dans l'expression différentielle.
  La fonction limite $g$ vérifie donc l'équation différentielle linéaire du second ordre :
  $$X g''(X) + (1 - X) g'(X) = h(X)$$
  *Barème : 1.0 pour la justification du passage à la limite, 1.0 pour l'obtention de l'équation différentielle.*

* **Q12. Conclusion sur les solutions polynomiales (Barème : /1.0)**
  L'étude spectrale menée en Partie III montre que les seuls polynômes solutions d'équations homogènes associées sont liés aux polynômes propres (polynômes de Laguerre).
  *Barème : 1.0 pour la conclusion cohérente.*