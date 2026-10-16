---
title: 'Cours : Analyse et Équations différentielles'
description: 'Synthèse de cours, théorèmes et démonstrations.'
---

# Analyse et Équations Différentielles Linéaires

Dans l'ensemble de ce chapitre, $\mathbb{K}$ désigne $\mathbb{R}$ ou $\mathbb{C}$, et $I$ désigne un intervalle de $\mathbb{R}$ non vide et non réduit à un point.

---

## I. Cadre général et Notions fondamentales

### 1. Définitions générales

```{prf:definition} Équation différentielle
Soit $F: I \times \mathbb{K}^n \to \mathbb{K}$ une fonction. 
* Une **équation différentielle d'ordre $n$** est une relation de la forme :
  $$F(t, y(t), y'(t), \dots, y^{(n)}(t)) = 0 \quad (E)$$
* Une **solution** de $(E)$ sur $I$ est une fonction $y : I \to \mathbb{K}$, $n$ fois dérivable sur $I$, telle que :
  $$\forall t \in I, \quad F(t, y(t), y'(t), \dots, y^{(n)}(t)) = 0$$
* Résoudre ou **intégrer** $(E)$ sur $I$ consiste à déterminer l'ensemble $\mathcal{S}_I(E)$ de toutes les solutions définies sur $I$.
```

```{prf:definition} Problème de Cauchy
On appelle **problème de Cauchy** la donnée conjointe d'une équation différentielle d'ordre $n$ et de $n$ conditions initiales en un point $t_0 \in I$ :
$$\begin{cases} 
F(t, y(t), y'(t), \dots, y^{(n)}(t)) = 0 \\
y(t_0) = y_0 \\
y'(t_0) = y_1 \\
\quad \vdots \\
y^{(n-1)}(t_0) = y_{n-1}
\end{cases}$$
où $(t_0, y_0, \dots, y_{n-1}) \in I \times \mathbb{K}^n$.
```

---

## II. Équations différentielles linéaires du premier ordre

### 1. Position du problème et structure algébrique

On considère l'équation différentielle linéaire scalaire du premier ordre :
$$(E) : \quad a(t)y'(t) + b(t)y(t) = c(t)$$
où $a, b, c \in \mathcal{C}^0(I, \mathbb{K})$.

```{prf:definition} Forme résolue (ou normalisée)
Si la fonction $a$ ne s'annule pas sur $I$, l'équation $(E)$ peut s'écrire sous **forme normalisée** :
$$(E) : \quad y' + a_0(t)y = b_0(t)$$
où $a_0 = \frac{b}{a}$ et $b_0 = \frac{c}{a}$ sont des fonctions continues sur $I$.
L'équation homogène associée (ou équation sans second membre) est notée :
$$(E_H) : \quad y' + a_0(t)y = 0$$
```

```{prf:theorem} Structure de l'ensemble des solutions
Soient $a_0, b_0 \in \mathcal{C}^0(I, \mathbb{K})$.
1. L'ensemble $\mathcal{S}_H$ des solutions de $(E_H)$ sur $I$ est un sous-espace vectoriel de $\mathcal{C}^1(I, \mathbb{K})$ de **dimension 1** :
   $$\dim_{\mathbb{K}} \mathcal{S}_H = 1$$
2. L'ensemble $\mathcal{S}$ des solutions de $(E)$ sur $I$ est un **espace affine** de direction $\mathcal{S}_H$. Si $y_p$ est une solution particulière de $(E)$ sur $I$, alors :
   $$\mathcal{S} = \{ y_0 + y_p \mid y_0 \in \mathcal{S}_H \} = y_p + \mathcal{S}_H$$
```

```{prf:proof}
1. Soit $A$ une primitive de $a_0$ sur $I$ ($A \in \mathcal{C}^1(I, \mathbb{K})$, qui existe car $a_0$ est continue sur l'intervalle $I$).
Considérons l'application :
$$\Phi : \begin{cases} \mathcal{S}_H \to \mathbb{K} \\ y \mapsto y(t_0) \end{cases} \quad \text{pour un } t_0 \in I \text{ fixé.}$$
$\Phi$ est clairement linéaire. Montrons qu'elle est bijective.
* **Injectivité :** Soit $y \in \mathcal{S}_H$ telle que $y(t_0) = 0$.
Posons $z(t) = y(t)e^{A(t)}$. La fonction $z$ est dérivable sur $I$ et :
$$z'(t) = y'(t)e^{A(t)} + a_0(t)y(t)e^{A(t)} = \underbrace{(y'(t) + a_0(t)y(t))}_{= 0} e^{A(t)} = 0$$
Puisque $I$ est un intervalle, $z$ est constante : $\forall t \in I, z(t) = z(t_0) = y(t_0)e^{A(t_0)} = 0$.
Comme $e^{A(t)} \neq 0$, on en déduit $\forall t \in I, y(t) = 0$, soit $y = 0$. Donc $\ker(\Phi) = \{0\}$.
* **Surjectivité :** Soit $\alpha \in \mathbb{K}$. La fonction $y(t) = \alpha e^{-(A(t)-A(t_0))}$ est de classe $\mathcal{C}^1$, vérifie $y' + a_0 y = 0$ et $y(t_0) = \alpha$.
Ainsi, $\Phi$ est un isomorphisme d'espaces vectoriels, d'où $\dim \mathcal{S}_H = \dim \mathbb{K} = 1$.
2. Si $y_p$ est solution de $(E)$, alors pour toute fonction $y \in \mathcal{C}^1(I, \mathbb{K})$ :
$$(y - y_p)' + a_0(y - y_p) = (y' + a_0 y) - (y_p' + a_0 y_p) = b_0 - b_0 = 0 \iff y - y_p \in \mathcal{S}_H$$
```

### 2. Théorème de Cauchy-Lipschitz linéaire d'ordre 1

```{prf:theorem} Existence et unicité de Cauchy
Soient $a_0, b_0 \in \mathcal{C}^0(I, \mathbb{K})$, $t_0 \in I$ et $y_0 \in \mathbb{K}$.
Il existe une **unique** solution $y \in \mathcal{C}^1(I, \mathbb{K})$ au problème de Cauchy :
$$\begin{cases} y' + a_0(t)y = b_0(t) \\ y(t_0) = y_0 \end{cases}$$
```

### 3. Méthodes de résolution

#### A. Résolution de l'équation homogène
Soit $A$ une primitive de $a_0$ sur $I$. Les solutions de $(E_H)$ sont de la forme :
$$y_H(t) = C e^{-A(t)}, \quad C \in \mathbb{K}$$

#### B. Recherche d'une solution particulière
* **Méthode de variation de la constante (Lagrange) :**
  On cherche une solution sous la forme $y_p(t) = \lambda(t)e^{-A(t)}$ avec $\lambda \in \mathcal{C}^1(I, \mathbb{K})$.
  En injectant dans $(E)$ :
  $$y_p'(t) + a_0(t)y_p(t) = \lambda'(t)e^{-A(t)} - a_0(t)\lambda(t)e^{-A(t)} + a_0(t)\lambda(t)e^{-A(t)} = b_0(t)$$
  Soit :
  $$\lambda'(t) = b_0(t)e^{A(t)}$$
  Puisque $t \mapsto b_0(t)e^{A(t)}$ est continue sur $I$, elle admet une primitive $\Lambda$ sur $I$.
  Une solution particulière est donc :
  $$y_p(t) = \Lambda(t)e^{-A(t)}$$

* **Principe de superposition :**
  Si le second membre s'écrit $b_0(t) = \beta_1 b_1(t) + \beta_2 b_2(t)$, et si $y_{p,1}$ et $y_{p,2}$ sont des solutions particulières respectives associées aux seconds membres $b_1$ et $b_2$, alors $y_p = \beta_1 y_{p,1} + \beta_2 y_{p,2}$ est solution particulière associée à $b_0$.

---

## III. Équations différentielles linéaires du second ordre à coefficients constants

On étudie l'équation :
$$(E_2) : \quad a y''(t) + b y'(t) + c y(t) = f(t)$$
où $a, b, c \in \mathbb{K}$ avec $a \neq 0$, et $f \in \mathcal{C}^0(I, \mathbb{K})$.
L'équation homogène associée est :
$$(E_{2,H}) : \quad a y''(t) + b y'(t) + c y(t) = 0$$

### 1. Théorème de Cauchy d'ordre 2

```{prf:theorem} Cauchy linéaire d'ordre 2
Pour tout $t_0 \in I$ et pour tout couple $(y_0, y_1) \in \mathbb{K}^2$, il existe une **unique** solution $y \in \mathcal{C}^2(I, \mathbb{K})$ du problème :
$$\begin{cases} a y'' + b y' + c y = f(t) \\ y(t_0) = y_0 \\ y'(t_0) = y_1 \end{cases}$$
Corollaire : L'ensemble des solutions de l'équation homogène $\mathcal{S}_H$ est un $\mathbb{K}$-espace vectoriel de **dimension 2**.
```

### 2. Équation caractéristique et résolution de $(E_{2,H})$

On introduit l'**équation caractéristique** associée à $(E_{2,H})$ :
$$(EC) : \quad a r^2 + b r + c = 0, \quad \text{d'inconnue } r \in \mathbb{C}$$
Le discriminant est noté $\Delta = b^2 - 4ac$.

#### Cas complexe : $y : I \to \mathbb{C}$ ($a, b, c \in \mathbb{C}$)

1. **Si $\Delta \neq 0$** : $(EC)$ admet deux racines distinctes $r_1, r_2 \in \mathbb{C}$.
   $$\mathcal{S}_H = \left\{ t \mapsto C_1 e^{r_1 t} + C_2 e^{r_2 t} \;\middle|\; (C_1, C_2) \in \mathbb{C}^2 \right\}$$
2. **Si $\Delta = 0$** : $(EC)$ admet une racine double $r_0 = -\frac{b}{2a}$.
   $$\mathcal{S}_H = \left\{ t \mapsto (C_1 t + C_2) e^{r_0 t} \;\middle|\; (C_1, C_2) \in \mathbb{C}^2 \right\}$$

#### Cas réel : $y : I \to \mathbb{R}$ ($a, b, c \in \mathbb{R}$)

```{prf:theorem} Solutions réelles de l'équation homogène
1. **Si $\Delta > 0$** : Deux racines réelles distinctes $r_1 = \frac{-b-\sqrt{\Delta}}{2a}$, $r_2 = \frac{-b+\sqrt{\Delta}}{2a}$.
   $$\mathcal{S}_H = \left\{ t \mapsto C_1 e^{r_1 t} + C_2 e^{r_2 t} \;\middle|\; (C_1, C_2) \in \mathbb{R}^2 \right\}$$
2. **Si $\Delta = 0$** : Une racine réelle double $r_0 = -\frac{b}{2a}$.
   $$\mathcal{S}_H = \left\{ t \mapsto (C_1 t + C_2) e^{r_0 t} \;\middle|\; (C_1, C_2) \in \mathbb{R}^2 \right\}$$
3. **Si $\Delta < 0$** : Deux racines complexes conjuguées $r_{1,2} = \alpha \pm i\omega$, avec $\alpha = -\frac{b}{2a}$ et $\omega = \frac{\sqrt{-\Delta}}{2a}$.
   Une base de solutions réelles est $(t \mapsto e^{\alpha t}\cos(\omega t), \, t \mapsto e^{\alpha t}\sin(\omega t))$.
   $$\mathcal{S}_H = \left\{ t \mapsto e^{\alpha t}\big(C_1 \cos(\omega t) + C_2 \sin(\omega t)\big) \;\middle|\; (C_1, C_2) \in \mathbb{R}^2 \right\}$$
   *Forme amplitude-phase équivalente :*
   $$\mathcal{S}_H = \left\{ t \mapsto A e^{\alpha t}\cos(\omega t - \phi) \;\middle|\; A \in \mathbb{R}^+, \, \phi \in [-\pi, \pi[ \right\}$$
```

```{prf:proof} Cas $\Delta < 0$
Les solutions complexes sont engendrées par $f_1(t) = e^{(\alpha + i\omega)t}$ et $f_2(t) = e^{(\alpha - i\omega)t}$.
Posons :
$$u(t) = \frac{f_1(t) + f_2(t)}{2} = e^{\alpha t}\cos(\omega t) \quad \text{et} \quad v(t) = \frac{f_1(t) - f_2(t)}{2i} = e^{\alpha t}\sin(\omega t)$$
$u$ et $v$ sont des solutions réelles car combinaisons linéaires des solutions $f_1, f_2$.
Montrons qu'elles forment une famille libre dans $\mathcal{C}^2(\mathbb{R}, \mathbb{R})$ :
Soient $\lambda, \mu \in \mathbb{R}$ tels que $\forall t \in \mathbb{R}, \; e^{\alpha t}(\lambda \cos(\omega t) + \mu \sin(\omega t)) = 0$.
Comme $e^{\alpha t} \neq 0$ :
* Pour $t = 0$ : $\lambda \cdot 1 + \mu \cdot 0 = 0 \implies \lambda = 0$.
* Pour $t = \frac{\pi}{2\omega}$ : $\mu \cdot 1 = 0 \implies \mu = 0$.
La famille $(u, v)$ est libre et de cardinal 2 dans un espace de dimension 2, c'est donc une base de $\mathcal{S}_H$.
```

### 3. Recherche de solutions particulières pour des seconds membres usuels

On considère $a y'' + b y' + c y = f(t)$.

#### A. Second membre du type $P(t)e^{mt}$ avec $P \in \mathbb{K}[X]$ et $m \in \mathbb{K}$
On cherche une solution sous la forme :
$$y_p(t) = Q(t) e^{mt}$$
où $Q \in \mathbb{K}[X]$ avec :
* $\deg(Q) = \deg(P)$ si $m$ n'est pas racine de $(EC)$ ($a m^2 + b m + c \neq 0$).
* $\deg(Q) = \deg(P) + 1$ si $m$ est racine simple de $(EC)$ ($a m^2 + b m + c = 0$ et $2am + b \neq 0$).
* $\deg(Q) = \deg(P) + 2$ si $m$ est racine double de $(EC)$ ($a m^2 + b m + c = 0$ et $2am + b = 0$).

#### B. Second membre trigonométrique : $e^{\alpha t}(P(t)\cos(\omega t) + Q(t)\sin(\omega t))$
On utilise la **méthode de passage au complexe** :
1. On pose $m = \alpha + i\omega \in \mathbb{C}$.
2. On résout l'équation complexe auxiliaire :
   $$a z'' + b z' + c z = R(t)e^{m t}$$
   dont la partie réelle (ou imaginaire) correspond au second membre réel.
3. Si $z_p$ est solution de l'équation complexe, alors $y_p = \text{Re}(z_p)$ (ou $\text{Im}(z_p)$) est solution particulière réelle de l'équation initiale.

---

## IV. Équations différentielles non linéaires usuelles en BCPST

### 1. Équations à variables séparables

Une équation de la forme :
$$y'(t) = g(t) \cdot h(y(t))$$
se résout par séparation formelle des variables :
$$\frac{\mathrm{d}y}{h(y)} = g(t)\mathrm{d}t \implies \int \frac{\mathrm{d}y}{h(y)} = \int g(t)\mathrm{d}t$$

```{prf:remark} Rigueur mathématique
1. Chercher d'abord les **solutions stationnaires** (constantes) : $y(t) = y^*$ telles que $h(y^*) = 0$.
2. Sur les intervalles où $h(y) \neq 0$, poser $H$ une primitive de $\frac{1}{h}$. L'équation devient :
   $$\frac{\mathrm{d}}{\mathrm{d}t}[H(y(t))] = g(t) \implies H(y(t)) = G(t) + C$$
   puis inverser la bijection $H$ localement.
```

### 2. Équation logistique de Verhulst (Modélisation de population)

L'équation s'écrit :
$$(E_{log}) : \quad y' = r y \left(1 - \frac{y}{K}\right), \quad r > 0, \; K > 0$$
* Solutions stationnaires : $y \equiv 0$ et $y \equiv K$.
* Pour $y > 0$ et $y \neq K$, on pose le changement d'inconnue : $z(t) = \frac{1}{y(t)}$.
  $$z'(t) = -\frac{y'(t)}{(y(t))^2} = -\frac{r y(t) (1 - y(t)/K)}{(y(t))^2} = -r\left(\frac{1}{y(t)} - \frac{1}{K}\right) = -r z(t) + \frac{r}{K}$$
  Il s'agit d'une équation linéaire du 1er ordre en $z$ :
  $$z' + r z = \frac{r}{K}$$
  Solution homogène : $z_H(t) = C e^{-rt}$. Solution particulière : $z_p = \frac{1}{K}$.
  D'où :
  $$z(t) = \frac{1}{K} + C e^{-rt} \implies y(t) = \frac{K}{1 + K C e^{-rt}}$$
  En posant $y(0) = y_0 > 0$, la constante vaut $C = \frac{1}{y_0} - \frac{1}{K}$, d'où :
  $$y(t) = \frac{K}{1 + \left(\frac{K - y_0}{y_0}\right)e^{-rt}}$$

---

## V. Méthodes types de résolution

```{prf:method} Résoudre $y' + a(t)y = b(t)$ avec raccordement
Lorsque le coefficient $a(t)$ s'annule ou n'est pas défini partout (ex: $t y' - 2y = t^3$ sur $\mathbb{R}$) :
1. **Résoudre sur chaque intervalle** où le coefficient dominant ne s'annule pas ($I_1 = ]-\infty, 0[$ et $\left.I_2 = \right]0, +\infty[$).
2. Obtenir l'expression générale :
   $$y_1(t) = C_1 t^2 + t^3 \quad (\text{sur } I_1), \qquad y_2(t) = C_2 t^2 + t^3 \quad (\text{sur } I_2)$$
3. **Étudier le raccordement en $t = 0$** :
   * Condition de continuité : $\lim_{t \to 0^-} y_1(t) = \lim_{t \to 0^+} y_2(t) = y(0)$.
   * Condition de dérivabilité : existence et égalité de $\lim_{t \to 0^-} \frac{y_1(t)-y(0)}{t}$ et $\lim_{t \to 0^+} \frac{y_2(t)-y(0)}{t}$.
4. **Vérifier** que la fonction prolongée est bien solution de l'équation au point de raccordement.
```

```{prf:method} Détermination des constantes d'intégration
Les constantes ($C \in \mathbb{K}$ ou $(C_1, C_2) \in \mathbb{K}^2$) doivent **toujours** être déterminées à la **toute fin** de l'analyse, en appliquant les conditions initiales à la **solution générale complète** :
$$y(t) = y_H(t) + y_p(t)$$
*Ne jamais appliquer les conditions initiales uniquement à $y_H$.*
```

---

## VI. Pièges classiques à éviter

```{warning}
1. **Oubli de l'intervalle d'étude :** Une équation différentielle n'a de sens que sur un *intervalle*. Écrire les solutions sur $\mathbb{R}^*$ sans séparer $\mathbb{R}_+^*$ et $\mathbb{R}_-^*$ est une faute conceptuelle grave (les constantes d'intégration sont a priori indépendantes sur chaque composante connexe).
2. **Division par une quantité variable :** Diviser par $a(t)$ sans vérifier que $a(t) \neq 0$ conduit à l'omission des points singuliers et des problèmes de raccordement.
3. **Cas de résonance oublié :** Dans $a y'' + b y' + c y = P(t)e^{mt}$, oublier d'augmenter le degré du polynôme $Q(t)$ d'un ordre égal à la multiplicité de $m$ comme racine de l'équation caractéristique (ex: pour $y'' + \omega^2 y = \cos(\omega t)$, chercher $y_p$ en $t(A\cos(\omega t) + B\sin(\omega t))$ et non en $A\cos(\omega t) + B\sin(\omega t)$).
4. **Erreur de signe dans l'exponentielle de l'ordre 1 :** 
   $$y' + a_0(t)y = 0 \implies y(t) = C \exp\left(-\int a_0(t)\,\mathrm{d}t\right) \quad \text{(et non } +\int a_0\text{)}$$
5. **Solutions réelles vs complexes :** Pour une équation différentielle à coefficients réels dont on cherche les solutions réelles, exprimer le résultat final avec des complexes ($e^{i\omega t}$) sans passer aux fonctions trigonométriques $(\cos, \sin)$ est pénalisé.
```

---

## VII. Formulaire de synthèse

| Type d'équation | Forme normalisée / Caractéristique | Base ou forme des solutions homogènes |
| :--- | :--- | :--- |
| **Ordre 1** | $y' + a_0(t)y = 0$ | $y_H(t) = C \exp(-A(t))$ avec $A' = a_0$ |
| **Ordre 2 ($\Delta > 0$)** | $a r^2 + b r + c = 0 \implies r_1 \neq r_2 \in \mathbb{R}$ | $y_H(t) = C_1 e^{r_1 t} + C_2 e^{r_2 t}$ |
| **Ordre 2 ($\Delta = 0$)** | $a r^2 + b r + c = 0 \implies r_0 \in \mathbb{R}$ | $y_H(t) = (C_1 t + C_2) e^{r_0 t}$ |
| **Ordre 2 ($\Delta < 0$)** | $r = \alpha \pm i\omega \in \mathbb{C}$ | $y_H(t) = e^{\alpha t}(C_1 \cos(\omega t) + C_2 \sin(\omega t))$ |
| **Second membre** $P(t)e^{mt}$ | $m$ racine de multiplicité $k \in \{0, 1, 2\}$ | $y_p(t) = t^k Q(t) e^{mt}$ avec $\deg(Q) = \deg(P)$ |