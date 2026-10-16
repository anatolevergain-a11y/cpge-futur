---
title: 'Exercice 2 : Séries à termes positifs et séries comparées'
description: 'Problème d entraînement type concours pour PTSI.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Dans le cadre de l'étude des séries numériques à termes réels, la comparaison avec des séries de référence (telles que les séries géométriques ou les séries de Riemann) est un outil fondamental. 

Soit $(u_n)_{n \in \mathbb{N}^*}$ une suite de nombres réels strictement positifs. On considère la série $\sum u_n$. 
L'objectif de ce problème est d'étudier la nature de $\sum u_n$ à partir de l'étude de la suite quotient $v_n = \frac{u_{n+1}}{u_n}$ ou d'autres critères de comparaison, et d'appliquer ces résultats à des cas concrets rencontrés aux concours.

---

### ❓ Questions progressives

1. **Rappel préliminaire :** Soit $\sum a_n$ et $\sum b_n$ deux séries à termes strictement positifs telles qu'il existe un rang $N \in \mathbb{N}$ et un réel $k > 0$ tels que, pour tout $n \ge N$, $a_n \le k b_n$.
   Rappeler le théorème de comparaison des séries à termes positifs associé (sous-entendu : que peut-on dire de la convergence de $\sum a_n$ si $\sum b_n$ converge ? Et de la divergence de $\sum b_n$ si $\sum a_n$ diverge ?).

2. **Application au critère de d'Alembert :** On suppose que la suite $\left(\frac{u_{n+1}}{u_n}\right)_{n \in \mathbb{N}^*}$ converge vers un réel $\ell$.
   - **a)** On suppose $\ell < 1$. Soit $r \in ]\ell, 1[$. Justifier qu'il existe un rang $N$ tel que pour tout $n \ge N$, $u_{n+1} \le r u_n$. En déduire la convergence de la série $\sum u_n$.
   - **b)** On suppose $\ell > 1$. Que peut-on dire de la nature de la série $\sum u_n$ ? Justifier rapidement.
   - **c)** Que se passe-t-il si $\ell = 1$ ? On donnera deux exemples simples de séries vérifiant $\lim \frac{u_{n+1}}{u_n} = 1$, l'une étant convergente, l'autre divergente.

3. **Étude d'une série paramétrique :** 
   Pour tout réel $\alpha$, on définit le terme général $u_n(\alpha) = \frac{n!}{n^n}$ pour $\alpha \in \mathbb{R}$ (attention, ici $u_n = \frac{n!}{n^n}$, étudier le cas général avec un paramètre $\alpha$ en considérant $w_n = \frac{(n!)^\alpha}{n^n}$ ou plus simplement la série de terme général $u_n = \frac{a^n n!}{n^n}$ où $a > 0$).
   *Redéfinition propre de la question 3 :* 
   Soit $a > 0$ un paramètre réel. On étudie la série de terme général $u_n = \frac{a^n n!}{n^n}$ pour $n \ge 1$.
   À l'aide du critère de d'Alembert établi à la question 2, déterminer, selon les valeurs de $a$, la nature de la série $\sum u_n$.

4. **Cas limite du critère de d'Alembert (Règle de Duhamel / Raabe-Duhamel - Version simplifiée) :**
   Soit $\sum u_n$ une série à termes strictement positifs telle que :
   $$\frac{u_{n+1}}{u_n} = 1 - \frac{\alpha}{n} + o\left(\frac{1}{n}\right)$$
   où $\alpha \in \mathbb{R}$.
   En comparant $\ln\left(\frac{u_n}{u_{n+1}}\right)$ ou en utilisant une série de Riemann, montrer (ou admets-on selon le cours) que la série converge si $\alpha > 1$ et diverge si $\alpha < 1$.
Application: * Nature de la série de terme général $u_n = \frac{(2n)!}{2^{2n} (n!)^2}$. (Indication : calculer $\frac{u_{n+1}}{u_n}$ et utiliser un développement limité).

---

### 💡 Pistes & Indications méthodologiques

- **Q1 :** Pensez aux inégalités cumulées par transitivité. Si $a_n \le k b_n$ à partir d'un certain rang, les sommes partielles de $\sum a_n$ sont majorées par une constante multipliée par les sommes partielles de $\sum b_n$.
- **Q2 :** Utilisez la définition de la limite avec $\varepsilon = r - \ell > 0$. Pour le cas $\ell = 1$, pensez aux séries de Riemann $\sum \frac{1}{n^a}$.
- **Q3 :** Formez le rapport $\frac{u_{n+1}}{u_n}$ et simplifiez l'expression en utilisant $\left(1 + \frac{1}{n}\right)^n \to e$ lorsque $n \to +\infty$.
- **Q4 :** Pour l'application, écrivez explicitement $\frac{u_{n+1}}{u_n}$ et utilisez le développement limité usuel de $\ln(1+x)$ ou $(1+x)^\beta$ en $0$.

---

### 📋 Corrigé détaillé pas à pas

#### 1. Rappel préliminaire
Si $\sum b_n$ converge et que $a_n \le k b_n$ pour $n \ge N$, alors par comparaison de séries à termes positifs, la série $\sum a_n$ **converge**.
Rréciproquement, si $\sum a_n$ diverge et que $a_n \le k b_n$ (ce qui s'écrit aussi $b_n \ge \frac{1}{k} a_n$), alors la série $\sum b_n$ **diverge**.

#### 2. Application au critère de d'Alembert
- **a)** Puisque $\lim_{n \to +\infty} \frac{u_{n+1}}{u_n} = \ell < 1$, pour tout $\varepsilon > 0$, il existe un rang $N \in \mathbb{N}$ tel que pour tout $n \ge N$, 
  $$\left| \frac{u_{n+1}}{u_n} - \ell \right| \le \varepsilon \implies \frac{u_{n+1}}{u_n} \le \ell + \varepsilon$$
  En choisissant $\varepsilon = r - \ell > 0$ (avec $r \in ]\ell, 1[$), on obtient $\frac{u_{n+1}}{u_n} \le r$ pour tout $n \ge N$, soit $u_{n+1} \le r u_n$.
  Par une récurrence immédiate, pour tout $n \ge N$ :
  $$0 < u_n \le u_N r^{n-N} = \left(\frac{u_N}{r^N}\right) r^n$$
  La série géométrique $\sum r^n$ converge (car $0 < r < 1$). Par majoration, la série $\sum u_n$ **converge**.

- **b)** Si $\ell > 1$, alors il existe un rang $N$ tel que pour tout $n \ge N$, $\frac{u_{n+1}}{u_n} \ge 1$. 
  La suite $(u_n)_{n \ge N}$ est donc croissante à partir du rang $N$ et ne tend pas vers $0$ (elle est minorée par $u_N > 0$). Le terme général ne tendant pas vers $0$, la série **diverge grossièrement**.

- **c)** Si $\ell = 1$, le critère ne permet de rien conclure. 
Exemples: *
  - Pour $u_n = \frac{1}{n^2}$ (série de Riemann convergente), $\frac{u_{n+1}}{u_n} = \frac{n^2}{(n+1)^2} \xrightarrow[n \to +\infty]{} 1$.
  - Pour $u_n = \frac{1}{n}$ (série harmonique divergente), $\frac{u_{n+1}}{u_n} = \frac{n}{n+1} \xrightarrow[n \to +\infty]{} 1$.

#### 3. Étude de la série de terme général $u_n = \frac{a^n n!}{n^n}$ ($a > 0$)
Formons le quotient de d'Alembert :
$$\frac{u_{n+1}}{u_n} = \frac{a^{n+1}(n+1)!}{(n+1)^{n+1}} \times \frac{n^n}{a^n n!} = a \times \frac{(n+1)n!}{(n+1)(n+1)^n} \times \frac{n^n}{n!} = a \times \frac{n^n}{(n+1)^n} = a \left(\frac{n}{n+1}\right)^n$$
Réécrivons ce quotient :
$$\frac{u_{n+1}}{u_n} = a \left(\frac{1}{1 + \frac{1}{n}}\right)^n = \frac{a}{\left(1 + \frac{1}{n}\right)^n}$$
Or, on sait que $\lim_{n \to +\infty} \left(1 + \frac{1}{n}\right)^n = e$. Par conséquent :
$$\lim_{n \to +\infty} \frac{u_{n+1}}{u_n} = \frac{a}{e}$$
D'après le critère de d'Alembert :
- Si $\frac{a}{e} < 1$, c'est-à-dire ** $0 < a < e$ **, la série **converge**.
- Si $\frac{a}{e} > 1$, c'est-à-dire ** $a > e$ **, la série **diverge** (grossièrement car le terme général tend vers $+\infty$).
- Si $a = e$, $\frac{u_{n+1}}{u_n} = \frac{e}{\left(1 + \frac{1}{n}\right)^n}$. Le critère usuel ne conclut pas directement (on peut aller plus loin avec la formule de Stirling, ce qui montrerait une divergence).

#### 4. Application (Série de Wallis / coefficients binomiaux)
Soit $u_n = \frac{(2n)!}{2^{2n} (n!)^2}$. Calculons le rapport $\frac{u_{n+1}}{u_n}$ :
$$\frac{u_{n+1}}{u_n} = \frac{(2(n+1))!}{2^{2(n+1)} ((n+1)!)^2} \times \frac{2^{2n} (n!)^2}{(2n)!} = \frac{(2n+2)(2n+1)(2n)!}{2^2 \cdot 2^{2n} (n+1)^2 (n!)^2} \times \frac{2^{2n} (n!)^2}{(2n)!}$$
En simplifiant :
$$\frac{u_{n+1}}{u_n} = \frac{(2n+2)(2n+1)}{4(n+1)^2} = \frac{2(n+1)(2n+1)}{4(n+1)^2} = \frac{2n+1}{2n+2}$$
Mettons cette expression sous la forme $1 - \frac{\alpha}{n} + o\left(\frac{1}{n}\right)$ :
$$\frac{u_{n+1}}{u_n} = \frac{2n + 1}{2n + 2} = \frac{2n + 2 - 1}{2n + 2} = 1 - \frac{1}{2n + 2} = 1 - \frac{1}{2n\left(1 + \frac{1}{n}\right)}$$
À l'aide du développement limité de $\frac{1}{1+x} = 1 - x + o(x)$ en $0$ :
$$\frac{u_{n+1}}{u_n} = 1 - \frac{1}{2n} \left(1 - \frac{1}{n} + o\left(\frac{1}{n}\right)\right) = 1 - \frac{1}{2n} + o\left(\frac{1}{n}\right)$$
Par identification avec le cours (règle de Duhamel avec $\alpha = \frac{1}{2}$) :
Puisque $\alpha = \frac{1}{2} < 1$, la série **diverge**. 
*(Remarque : Cette série est liée aux intégrales de Wallis et diverge, bien que son terme général tende vers $0$ car $u_n \sim \frac{1}{\sqrt{\pi n}}$ par la formule de Stirling).*