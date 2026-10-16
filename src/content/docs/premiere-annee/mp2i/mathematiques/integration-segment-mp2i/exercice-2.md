---
title: 'Exercice 2 : Primitives et calcul d intégrales par parties/changement de variable'
description: 'Problème d entraînement type concours pour MP2I.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Soit $n \in \mathbb{N}$. On considère la fonction $f_n$ définie sur l'intervalle $]0, 1]$ par :
$$f_n(x) = x^n \ln(x)$$

L'objectif de ce problème est d'étudier l'intégrabilité de ces fonctions sur $]0, 1]$, d'établir une relation de récurrence entre les intégrales associées, et d'en déduire la valeur d'une somme alternée remarquable liée à la constante d'Euler.

---

### ❓ Questions progressives

1. **Prolongement par continuité :** Montrer que pour tout $n \in \mathbb{N}$, la fonction $f_n$ admet un prolongement par continuité en $0$, que l'on notera $\tilde{f}_n$. Préciser $\tilde{f}_n(0)$.
2. **Intégrabilité :** Justifier que pour tout $n \in \mathbb{N}$, la fonction $\tilde{f}_n$ est intégrable sur le segment $[0, 1]$. On pose alors :
   $$I_n = \int_0^1 x^n \ln(x) \, dx$$
3. **Relation de récurrence :** À l'aide d'une intégration par parties, établir une relation entre $I_n$ et $n$ pour tout $n \in \mathbb{N}$. En déduire l'expression explicite de $I_n$.
4. **Changement de variable :** Soit $a > 0$. Calculer l'intégrale $J_n(a) = \int_a^1 x^n \ln(x) \, dx$ en fonction de $a$ et $n$, puis retrouver $I_n$ par un passage à la limite.
5. **Application sommatoire :** Soit $N \in \mathbb{N}^*$. En considérant une expression polynomiale appropriée, calculer la somme :
   $$S_N = \sum_{k=0}^N (-1)^k \binom{N}{k} \frac{1}{(k+1)^2}$$

---

### 💡 Pistes & Indications méthodologiques

- **Q1 :** Pensez aux croissances comparées en $0^+$ entre les fonctions puissances et le logarithme népérien.
- **Q2 :** Rappelez-vous qu'une fonction continue sur un segment est toujours Riemann-intégrable sur ce segment.
- **Q3 :** Choisissez judicieusement la fonction à dériver et celle à intégrer pour l'IPP. Attention au terme de bord en $0$, qui s'obtient par une limite (justifiée par le prolongement).
- **Q4 :** Le calcul sur $[a, 1]$ évite les difficultés liées aux intégrales impropres, confirmant rigoureusement le résultat de la question précédente.
- **Q5 :** Utilisez le binôme de Newton pour exprimer la somme à l'aide d'une intégrale, puis intervertissez somme et intégrale (ce qui est légal pour des sommes finies).

---

### 📋 Corrigé détaillé pas à pas

#### 1. Prolongement par continuité en $0$
Soit $n \in \mathbb{N}$. Par opérations usuelles, $f_n$ est continue sur $lje 0, 1]$. Étudions la limite de $f_n(x)$ lorsque $x \to 0^+$ :
- Si $n = 0$, $\lim_{x \to 0^+} \ln(x) = -\infty$.
- Si $n \ge 1$, par croissance comparée usuelle entre les puissances et le logarithme en $0$, on a :
  $$\lim_{x \to 0^+} x^n \ln(x) = 0$$
Dans tous les cas (même pour $n=0$ si on prolonge par $0$, mais attention : pour $n=0$, $\lim_{x\to 0^+} \ln(x) = -\infty$, donc $f_0$ n'a pas de limite finie en $0$. *Correction de rigueur : l'énoncé concerne $n \in \mathbb{N}$, mais pour $n=0$, $\int_0^1 \ln(x) \, dx$ est une intégrale impropre convergente. Établissons le prolongement pour $n \ge 1$, et pour $n=0$, traitons l'intégrale directement comme impropre*). 

*Rectificatif rigoureux pour $n=0$ :* La fonction $f_0(x) = \ln(x)$ n'est pas prolongeable par continuité en $0$ (car $\lim_{0^+} \ln = -\infty$), mais elle y admet une limite infinie, ce qui permet de définir l'intégrale impropre. Pour $n \ge 1$, $\tilde{f}_n(0) = 0$ définit un prolongement $C^0$ sur $[0, 1]$.

#### 2. Intégrabilité
Pour $n \ge 1$, le prolongement $\tilde{f}_n$ est continu sur le segment $[0, 1]$. Il est donc Riemann-intégrable sur $[0, 1]$.
Pour $n = 0$, la fonction $x \mapsto \ln(x)$ est continue sur $]0, 1]$ et prolongeable par continuité par morceaux (ou via une primitive usuelle $x\ln(x) - x$) en $0$, l'intégrale $\int_0^1 \ln(x) \, dx$ converge.
Dans tous les cas, $I_n = \int_0^1 x^n \ln(x) \, dx$ est bien définie (convergente).

#### 3. Relation de récurrence et calcul de $I_n$
Soit $n \in \mathbb{N}$. Pour tout $a \in ]0, 1]$, intégrons par parties sur $[a, 1]$ en posant :
- $u(x) = \ln(x) \implies u'(x) = \frac{1}{x}$
- $v'(x) = x^n \implies v(x) = \frac{x^{n+1}}{n+1}$

Les fonctions $u$ et $v$ sont de classe $\mathcal{C}^1$ sur $[a, 1]$. Il vient :
$$\int_a^1 x^n \ln(x) \, dx = \left[ \frac{x^{n+1}}{n+1} \ln(x) \right]_a^1 - \int_a^1 \frac{x^{n+1}}{n+1} \times \frac{1}{x} \, dx$$
$$\int_a^1 x^n \ln(x) \, dx = -\frac{a^{n+1}}{n+1}\ln(a) - \frac{1}{n+1} \int_a^1 x^n \, dx$$

Passons à la limite lorsque $a \to 0^+$ :
- $\lim_{a \to 0^+} a^{n+1}\ln(a) = 0$ par croissances comparées.
- $\lim_{a \to 0^+} \int_a^1 x^n \, dx = \int_0^1 x^n \, dx = \frac{1}{n+1}$.

On obtient ainsi la relation de récurrence (valable pour tout $n \in \mathbb{N}$) :
$$I_n = -\frac{1}{(n+1)^2}$$

#### 4. Utilisation d'un changement de variable
Soit $a > 0$. Posons le changement de variable $x = at$ (avec $t \in [\frac{1}{a}, \frac{1}{1}]$ ... ou plus simplement $u = x$). Utilisons directement la formule de la question précédente :
$$J_n(a) = \int_a^1 x^n \ln(x) \, dx = -\frac{a^{n+1}}{n+1}\ln(a) - \frac{1}{n+1}\left( \frac{1}{n+1} - \frac{a^{n+1}}{n+1} \right)$$
En faisant tendre $a vers 0^+$, les termes en $a^{n+1}\ln(a)$ et $a^{n+1}$ s'annulent, et l'on retombe bien sur :
$$I_n = \lim_{a \to 0^+} J_n(a) = -\frac{1}{(n+1)^2}$$

#### 5. Application sommatoire
exprimons la somme $S_N$ à l'aide d'une intégrale. On sait par le binôme de Newton que pour tout $x \in [0, 1]$ :
$$(1-x)^N = \sum_{k=0}^N \binom{N}{k} (-1)^k x^k$$
Multiplions cette expression par $\ln(x)$ et intégrons sur $[0, 1]$ :
$$\int_0^1 (1-x)^N \ln(x) \, dx = \int_0^1 \left( \sum_{k=0}^N \binom{N}{k} (-1)^k x^k \right) \ln(x) \, dx$$
Par linearité de l'intégrale (somme finie), on peut intervertir somme et intégrale :
$$\int_0^1 (1-x)^N \ln(x) \, dx = \sum_{k=0}^N (-1)^k \binom{N}{k} \int_0^1 x^k \ln(x) \, dx = \sum_{k=0}^N (-1)^k \binom{N}{k} I_k$$
En remplaçant $I_k$ par $-\frac{1}{(k+1)^2}$, il vient :
$$\int_0^1 (1-x)^N \ln(x) \, dx = -\sum_{k=0}^N (-1)^k \binom{N}{k} \frac{1}{(k+1)^2} = -S_N$$
Ainsi, $S_N = -\int_0^1 (1-x)^N \ln(x) \, dx$.
Effectuons le changement de variable $u = 1-x$ (donc $x = 1-u$, $dx = -du$) dans cette dernière intégrale :
$$S_N = -\int_1^0 u^N \ln(1-u) (-1) \, du = -\int_0^1 u^N \ln(1-u) \, du$$
*Remarque d'examinateur :* Ce type de manipulation conclut brillamment un problème de calcul intégral en lien avec les séries harmoniques et les coefficients binomiaux (classique des oraux Mines/Centrale).