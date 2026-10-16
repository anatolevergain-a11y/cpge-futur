---
title: 'Exercice 2 : Densités et théorème limite central'
description: 'Problème d entraînement type concours.'
---

# Concours Blanc - Correction détaillée : Densités et Théorème Limite Central

*En tant qu'examinateur de CPGE (filière MP), j'attends des candidats non seulement une maîtrise technique des calculs d'intégrales et de sommations, mais aussi une rigueur absolue dans la manipulation des densités, la justification des hypothèses de convergence et une analyse critique des résultats obtenus.*

---

## Préambule et notations

Soit $(\Omega, \mathcal{A}, P)$ un espace probabilisé. 
On considère une suite $(X_n)_{n \ge 1}$ de variables aléatoires indépendantes et de même loi (i.i.d.).
Pour tout $n \ge 1$, on pose $S_n = \sum_{k=1}^n X_k$.

---

## Partie I : Étude d'une loi à densité de référence

On considère la variable aléatoire $X_1$ dont la densité $f$ est définie par :
$$f(x) = \begin{cases} \lambda e^{-\lambda x} & \text{si } x \ge 0 \\ 0 & \text{si } x < 0 \end{cases}$$
où $\lambda > est un paramètre réel strictement positif.

### Q1. Vérification de la condition de densité et calculs d'espérance et de variance
Question: ** Montrer que $f$ est bien une densité de probabilité. Calculer l'espérance $E(X_1)$ et la variance $V(X_1)$ de $X_1$.

**Correction de l'examinateur :**
Pour qu'une fonction $f$ soit une densité de probabilité, elle doit satisfaire deux conditions :
1. $f$ est positive ou nulle sur $\mathbb{R}$.
2. $f$ est continue par morceaux sur $\mathbb{R}$ et son intégrale sur $\mathbb{R}$ vaut $1$.

*Vérification :* 
Par définition, pour $x < 0$, $f(x) = 0$ et pour $x \ge 0$, $\lambda > 0$ et $e^{-\lambda x} > 0$, donc $f(x) \ge 0$ pour tout $x \in \mathbb{R}$.

*Calcul de l'intégrale :*
$$\int_{-\infty}^{+\infty} f(x) \, dx = \int_0^{+\infty} \lambda e^{-\lambda x} \, dx$$
Cette intégrale impropre est convergente. Soit $A > 0$ :
$$\int_0^A \lambda e^{-\lambda x} \, dx = \left[ -e^{-\lambda x} \right]_0^A = 1 - e^{-\lambda A}$$
En passant à la limite lorsque $A \to +\infty$, on obtient :
$$\int_{-\infty}^{+\infty} f(x) \, dx = \lim_{A \to +\infty} (1 - e^{-\lambda A}) = 1$$
La fonction $f$ est donc bien une densité de probabilité (loi exponentielle de paramètre $\lambda$).

*Calcul de l'espérance $E(X_1)$ :*
L'espérance existe si et seulement si l'intégrale $\int_{-\infty}^{+\infty} x f(x) \, dx$ converge absolument.
$$\int_0^{+\infty} x \lambda e^{-\lambda x} \, dx$$
À l'aide d'une intégration par parties (licite car les fonctions sont de classe $\mathcal{C}^1$) en posant $u = x$ et $v' = \lambda e^{-\lambda x}$ :
$$\int_0^A x \lambda e^{-\lambda x} \, dx = \left[ -x e^{-\lambda x} \right]_0^A + \int_0^A e^{-\lambda x} \, dx = -A e^{-\lambda A} + \left[ -\frac{1}{\lambda} e^{-\lambda x} \right]_0^A$$
Par croissance comparée, $\lim_{A \to +\infty} A e^{-\lambda A} = 0$. Ainsi :
$$E(X_1) = \frac{1}{\lambda}$$

*Calcul de la variance $V(X_1)$ :*
On calcule d'abord le moment d'ordre 2, $E(X_1^2)$, par intégration par parties :
$$\int_0^{+\infty} x^2 \lambda e^{-\lambda x} \, dx = \left[ -x^2 e^{-\lambda x} \right]_0^{+\infty} + \int_0^A 2x e^{-\lambda x} \, dx = \frac{2}{\lambda} E(X_1) = \frac{2}{\lambda^2}$$
D'après la formule de König-Huygens :
$$V(X_1) = E(X_1^2) - (E(X_1))^2 = \frac{2}{\lambda^2} - \left(\frac{1}{\lambda}\right)^2 = \frac{1}{\lambda^2}$$

---

### Q2. Densité de la somme de deux variables indépendantes
Question: ** Soit $X_1$ et $X_2$ deux variables aléatoires indépendantes suivant la même loi exponentielle de paramètre $\lambda$. Déterminer la densité de la variable $S_2 = X_1 + X_2$.

**Correction de l'examinateur :**
Puisque $X_1$ et $X_2$ sont indépendantes et à densités, la densité de leur somme $S_2$ s'obtient par le produit de convolution de leurs densités :
$$f_{S_2}(x) = \int_{-\infty}^{+\infty} f_{X_1}(t) f_{X_2}(x - t) \, dt$$
Les densités étant nulles sur $\'&] -\infty, 0 [$, le produit $f_{X_1}(t) f_{X_2}(x - t)$ est non nul si et seulement si $t \ge 0$ et $x - t \ge 0$, c'est-à-dire $0 \le t \le x$ (pour $x \ge 0$). Si $x < 0$, $f_{S_2}(x) = 0$.

Pour $x \ge 0$ :
$$f_{S_2}(x) = \int_0^x (\lambda e^{-\lambda t}) (\lambda e^{-\lambda (x - t)}) \, dt = \lambda^2 e^{-\lambda x} \int_0^x 1 \, dt = \lambda^2 x e^{-\lambda x}$$
Ainsi :
$$f_{S_2}(x) = \begin{cases} \lambda^2 x e^{-\lambda x} & \text{si } x \ge 0 \\ 0 & \text{si } x < 0 \end{cases}$$
*(Note de correction : On reconnait ici une loi gamma $\mathcal{G}(2, \lambda)$).*

---

## Partie II : Convergence et Théorème Limite Central (TLC)

On se place à nouveau dans le cas général où les $(X_n)_{n \ge 1}$ sont i.i.d., d'espérance $\mu = E(X_1)$ finie et de variance $\sigma^2 = V(X_1) > 0$ finie.

### Q3. Normalisation et application du TLC
Question: ** Énoncer précisément le Théorème Limite Central pour la suite $(X_n)_{n \ge 1}$. On posera une variable centrée et réduite notée $T_n$.

**Correction de l'examinateur :**
C'est un classique absolu de concours. La rédaction doit être chirurgicale.

*Définition de la variable centrée et réduite :*
Pour tout $n \ge 1$, $E(S_n) = n\mu$ et $V(S_n) = n\sigma^2$ (par indépendance). On pose :
$$T_n = \frac{S_n - E(S_n)}{\sqrt{V(S_n)}} = \frac{S_n - n\mu}{\sigma \sqrt{n}} = \frac{1}{\sigma \sqrt{n}} \sum_{k=1}^n (X_k - \mu)$$

*Énoncé du Théorème Limite Central (TLC) :*
La suite des variables aléatoires $(T_n)_{n \ge 1}$ converge en loi vers une variable aléatoire $Z$ suivant la loi normale centrée réduite $\mathcal{N}(0, 1)$. 
C'est-à-dire que pour tout $x \in \mathbb{R}$ :
$$\lim_{n \to +\infty} P(T_n \le x) = \Phi(x) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^x e^{-t^2/2} \, dt$$

---

### Q4. Application numérique et approximation
Question: ** On prend $\lambda = 1$ pour la loi exponentielle de la Partie I. Soit $n = 100$. En utilisant le TLC, donner une approximation numérique de la probabilité $P(S_{100} > 110)$. *(On pourra exprimer le résultat à l'aide de la fonction de répartition $\Phi$ de la loi $\mathcal{N}(0,1)$)*.

**Correction de l'examinateur :**
D'après la Partie I, pour $\lambda = 1$ :
- $\mu = E(X_1) = \frac{1}{\lambda} = 1$
- $\sigma^2 = V(X_1) = \frac{1}{\lambda^2} = 1$, donc $\sigma = 1$.

Pour $n = 100$ :
$$E(S_{100}) = 100 \times 1 = 100$$
$$\sigma \sqrt{n} = 1 \times \sqrt{100} = 10$$

On cherche à évaluer $P(S_{100} > 110)$. Transformons l'inégalité pour faire apparaître $T_{100}$ :
$$P(S_{100} > 110) = P\left(\frac{S_{100} - 100}{10} > \frac{110 - 100}{10}\right) = P(T_{100} > 1)$$

Par passage à la limite grâce au TLC ($n = 100$ étant grand, l'approximation est usuellement admise) :
$$P(T_{100} > 1) \approx P(Z > 1) = 1 - P(Z \le 1) = 1 - \Phi(1)$$
En sachant que $\Phi(1) \approx 0{,}8413$ :
$$P(S_{100} > 110) \approx 1 - 0{,}8413 = 0{,}1587$$

---

## Partie III : Analyse critique des résultats
Question: ** Discuter la pertinence de l'approximation obtenue à la question Q4. Que se passerait-il si $n = 2$ au lieu de $n = 100$ ?

**Analyse de l'examinateur (Points clés attendus dans la copie) :**

1. **Sur la taille de l'échantillon ($n = 100$) :**
   Le Théorème Limite Central est un résultat asymptotique ($n \to +\infty$). Pour $n = 100$, l'approximation gaussienne est généralement très bonne, en particulier pour une loi exponentielle dont la distribution, bien que dissymétrique, possède des moments de tous ordres finis. L'erreur commise est de l'ordre de $\mathcal{O}\left(\frac{1}{\sqrt{n}}\right)$ (théorème de Berry-Esseen), soit ici environ $10\%$, ce qui valide l'utilisation pratique de l'approximation.

2. **Sur le cas de petites valeurs de $n$ ($n = 2$) :**
   Si l'on posait $n = 2$, l'approximation par le TLC serait **aberrante et mathématiquement non rigoureuse**. 
   * Justification : D'après la Partie I (Q2), la somme $S_2$ possède une densité explicite $f_{S_2}(x) = x e^{-x} \mathbf{1}_{[0, +\infty[}(x)$, qui est fortement asymétrique (dissymétrique vers la gauche). La loi de $T_2$ est donc très éloignée d'une loi normale $\mathcal{N}(0,1)$ (qui est symétrique). Appliquer le TLC pour $n=2$ ignorerait l'asymétrie prononcée de la loi sous-jacente. Il conviendrait alors d'utiliser directement la densité exacte $f_{S_2}$ pour calculer la probabilité recherchée par intégration.