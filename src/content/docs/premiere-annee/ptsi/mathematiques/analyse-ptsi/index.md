---
title: 'Cours : Analyse réelle et intégration'
description: 'Synthèse officielle du cours et démonstrations clés.'
---

# Fiche de Cours : Analyse Réelle et Intégration
**Filière :** CPGE - PTSI  
**Matière :** Mathématiques  

---

## 1. Topologie de la droite réelle

### Définitions fondamentales
Soit $A \subset \mathbb{R}$.
*   **Majorant, minorant :** $M \in \mathbb{R}$ est un majorant de $A$ si $\forall x \in A, x \le M$. $A$ est dit majoré s'il existe un tel $M$.
*   **Borne supérieure :** Si $A$ est non vide et majoré, sa **borne supérieure** (notée $\sup A$) est le plus petit des majorants de $A$. 
    $$\sup A = s \iff \begin{cases} \forall x \in A, x \le s \\ \forall \epsilon > 0, \exists x \in A, x > s - \epsilon \end{cases}$$
*   **Propriété de la borne supérieure :** Toute partie non vide et majorée de $\mathbb{R}$ admet une borne supérieure dans $\mathbb{R}$ (axiome de la borne supérieure).

### Intervalles et Voisinages
*   **Intervalles :** Les seuls sous-ensembles convexes de $\mathbb{R}$ sont les intervalles.
*   **Voisinage :** Un sous-ensemble $V \subset \mathbb{R}$ est un voisinage d'un point $x_0 \in \mathbb{R}$ s'il existe $\alpha > \0$ tel que $]x_0-\alpha, x_0+\alpha[ \subset V$.

---

## 2. Limites et Continuité

### Limite d'une fonction en un point
Soit $f : I \to \mathbb{R}$ et $x_0 \in \bar{I}$.
**Définition (avec les $\epsilon$) :** 
$$\lim_{x \to x_0} f(x) = L \iff \forall \epsilon > 0, \exists \alpha > 0, \forall x \in I, (0 < |x-x_0| < \alpha \implies |f(x)-L| < \epsilon)$$

### Théorèmes fondamentaux sur les fonctions continues
*   **Théorème des Valeurs Intermédiaires (TVI) :** Si $f : [a,b] \to \mathbb{R}$ est continue, alors pour tout $y$ compris entre $f(a)$ et $f(b)$, il existe $c \in [a,b]$ tel que $f(c) = y$.
*   **Corollaire (Fonctions strictement monotones) :** Si $f : [a,b] \to \mathbb{R}$ est continue et strictement monotone, elle réalise une bijection de $[a,b]$ sur $f([a,b])$.
*   **Théorème des bornes atteintes (Weierstrass) :** Toute fonction continue sur un segment $[a,b]$ est bornée et atteint ses bornes. Autrement dit, $\exists (c,d) \in [a,b]^2, f(c) = \inf_{[a,b]} f$ et $f(d) = \sup_{[a,b]} f$.

---

## 3. Dérivabilité et Théorèmes de Rolle et des Accroissements Finis

### Dérivée et classe $\mathcal{C}^k$
*   Une fonction $f : I \to \mathbb{R}$ est dérivable en $x_0 \in I$ si $\lim_{x \to x_0} \frac{f(x)-f(x_0)}{x-x_0}$ existe et est finie.
*   $\mathcal{C}^0(I, \mathbb{R})$ : fonctions continues.
*   $\mathcal{C}^k(I, \mathbb{R})$ : fonctions $k$ fois continûment dérivables sur $I$.

### Théorèmes centraux de l'analyse
*   **Théorème de Rolle :** Soit $f \in \mathcal{C}^0([a,b], \mathbb{R})$ dérivable sur $തീa,b[$. Si $f(a) = f(b)$, alors il existe $c \in ]a,b[$ tel que $f'(c) = 0$.
*   **Accroissements Finis (TAF) :** Soit $f \in \mathcal{C}^0([a,b], \mathbb{R})$ dérivable sur $തീa,b[$. Il existe $c \in ]a,b[$ tel que :
    $$f(b) - f(a) = f'(c)(b-a)$$
*   **Inégalité des Accroissements Finis (IAF) :** Si $\forall x \in ]a,b[, |f'(x)| \le K$, alors :
    $$|f(b) - f(a)| \le K |b-a|$$

---

## 4. Calcul Intégral

### Intégrale d'une fonction continue
Pour $f \in \mathcal{C}^0([a,b], \mathbb{R})$, on définit l'intégrale $\int_a^b f(t)\,\mathrm{d}t$ via les sommes de Riemann ou l'intégrale de Darboux.

### Primitives et Théorème Fondamental de l'Analyse
*   **Définition :** Une primitive de $f$ sur $I$ est une fonction $F$ dérivable sur $I$ telle que $F' = f$.
*   **Théorème Fondamental :** Si $f \in \mathcal{C}^0([a,b], \mathbb{R})$ et si $x_0 \in [a,b]$, la fonction $F$ définie par :
    $$F(x) = \int_{x_0}^x f(t)\,\mathrm{d}t$$
    est l'unique primitive de $f$ sur $[a,b$] qui s'annule en $x_0$. De plus, $F \in \mathcal{C}^1([a,b], \mathbb{R})$.

### Techniques de calcul d'intégrales
*   **Relation de Chasles :** $\int_a^b f = \int_a^c f + \int_c^b f$
*   **Linéarité et Positivité** (ainsi que Croissance de l'intégrale).
*   **Intégration par parties (IPP) :** Si $u, v \in \mathcal{C}^1([a,b], \mathbb{R})$ :
    $$\int_a^b u(t)v'(t)\,\mathrm{d}t = [u(t)v(t)]_a^b - \int_a^b u'(t)v(t)\,\mathrm{d}t$$
*   **Changement de variable :** Soit $\phi : [\alpha, \beta] \to [a,b]$ de classe $\mathcal{C}^1$ bijective. Alors :
    $$\int_a^b f(t)\,\mathrm{d}t = \int_\alpha^\beta f(\phi(u))\phi'(u)\,\mathrm{d}u$$

---

## 5. Démonstrations Clés Exigibles en PTSI

> **Démonstration : Théorème de Rolle**
> 1. *Cas général :* Si $f$ est constante, sa dérivée est nulle partout, le résultat est trivial.
> 2. *Cas non constant :* Puisque $f$ est continue sur le segment $[a,b]$, d'après le théorème de Weierstrass, $f$ atteint son maximum $M$ et son minimum $m$ sur $[a,b]$.
> 3. Puisque $f$ n'est pas constante, $m \neq M$. Comme $f(a) = f(b)$, l'une au moins de ces deux bornes est atteinte en un point $c$ strictement à l'intérieur de l'intervalle, c'est-à-dire $c \in ]a,b[$.
> 4. Supposons par exemple que $f(c) = M$ (avec $c \in ]a,b[)$. Étudions le taux de variation en $c$ :
>    * Pour $h > 0$ tel que $c+h \in [a,b]$ : $\frac{f(c+h) - f(c)}{h} \le 0$ (car $f(c)$ est un maximum). En passant à la limite $h \to 0^+$, on obtient $f'_+(c) \le 0$.
>    * Pour $h < 0$ tel que $c+h \in [a,b]$ : $\frac{f(c+h) - f(c)}{h} \ge 0$. En passant à la limite $h \to 0^-$, on obtient $f'_-(c) \ge 0$.
> 5. $f$ étant dérivable en $c$, on a $f'_+(c) = f'_-(c) = f'(c)$, d'où $f'(c) = 0$. $\blacksquare$