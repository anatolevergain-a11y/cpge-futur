---
title: 'Cours : Intégration sur un segment'
description: 'Synthèse de cours, théorèmes et démonstrations.'
---

# Fiche de Cours : Intégration sur un segment (MPSI)

---

## 1. Introduction et Intégrale des fonctions en escalier

Soit $[a, b]$ un segment de $\mathbb{R}$ avec $a < b$.

### A. Subdivisions et fonctions en escalier
*   **Définition (Subdivision) :** Une subdivision de $[a, b]$ est une finie de réels $\sigma = (x_0, x_1, \dots, x_n)$ telle que :
    $$a = x_0 < x_1 < x_2 < \dots < x_n = b$$
*   **Définition (Fonction en escalier) :** Une fonction $\varphi : [a, b] \to \mathbb{K}$ ($\mathbb{K} = \mathbb{R}$ ou $\mathbb{C}$) est dite en escalier s'il existe une subdivision $\sigma = (x_0, \dots, x_n)$ de $[a, b]$ telle que $\varphi$ est constante sur chaque intervalle ouvert $]}x_i, x_{i+1}[$.
*   On note $\mathcal{E}([a, b], \mathbb{K})$ l'ensemble des fonctions en escalier sur $[a, b]$. C'est un $\mathbb{K}$-espace vectoriel.

### B. Intégrale d'une fonction en escalier
*   **Définition :** Si $\varphi \in \mathcal{E}([a, b], \mathbb{K})$ et $\sigma = (x_0, \dots, x_n)$ est une subdivision adaptée à $\varphi$ (telle que $\varphi$ est constante égale à cste $c_i$ sur $]}x_i, x_{i+1}[$), on définit l'intégrale de $\varphi$ par :
    $$\int_a^b \varphi(t) \, dt = \sum_{i=0}^{n-1} (x_{i+1} - x_i) c_i$$
    *Propriété fondamentale :* Cette valeur ne dépend pas de la subdivision adaptée choisie.

---

## 2. Intégrale des fonctions continues par morceaux

### A. Fonctions continues par morceaux (CPM)
*   **Définition :** Une fonction $f : [a, b] \to \mathbb{K}$ est dite continue par morceaux s'il existe une subdivision $\sigma = (x_0, \dots, x_n)$ de $[a, b]$ telle que :
    1. Pour tout $i \in \{0, \dots, n-1\}$, la restriction $f_{|]}x_i, x_{i+1}[$ se prolonge en une fonction continue sur $[x_i, x_{i+1}]$.
    2. $f$ admet des limites finies à droite en $x_i$ (pour $i < n$) et à gauche en $x_i$ (pour $i > 0$).
*   On note $\mathcal{CPM}([a, b], \mathbb{K})$ l'ensemble de ces fonctions.

### B. Définition de l'intégrale d'une fonction CPM
*   **Théorème et Définition :** Soit $f \in \mathcal{CPM}([a, b], \mathbb{R})$. Alors :
    $$\sup_{\substack{\varphi \in \mathcal{E} \\\varphi \le f}} \int_a^b \varphi = \inf_{\substack{\psi \in \mathcal{E} \\\psi \ge f}} \int_a^b \psi$$
    Cette valeur commune est l'**intégrale de $f$ sur $[a, b]$**, notée $\int_a^b f(t) \, dt$ ou $\int_a^b f$.
*   Pour $f \in \mathcal{CPM}([a, b], \mathbb{C})$, on pose $\int_a^b f = \int_a^b \text{Re}(f) + i \int_a^b \text{Im}(f)$.

---

## 3. Propriétés de l'intégrale

Soient $f, g \in \mathcal{CPM}([a, b], \mathbb{K})$ et $\alpha, \beta \in \mathbb{K}$.

### A. Propriétés algébriques
*   **Linéarité :** L'application $f \mapsto \int_a^b f$ est une forme linéaire sur $\mathcal{CPM}([a, b], \mathbb{K})$ :
    $$\int_a^b (\alpha f + \beta g) = \alpha \int_a^b f + \beta \int_a^b g$$
*   **Relation de Chasles :** Soit $c \in [a, b]$,
    $$\int_a^b f = \int_a^c f + \int_c^b f$$
*   **Conventions :** Pour $a < b$, on pose $\int_b^a f = -\int_a^b f$ et $\int_a^a f = 0$.

### B. Propriétés topologiques et d'ordre
*   **Positivité :** Si $f \ge 0$ sur $[a, b]$ et $a \le b$, alors $\int_a^b f \ge 0$.
*   **Croissance :** Si $f \le g$ sur $[a, b]$ et $a \le b$, alors $\int_a^b f \le \int_a^b g$.
*   **Inégalité triangulaire (pour les modules) :**
    $$\left| \int_a^b f(t) \, dt \right| \le \int_a^b |f(t)| \, dt$$
*   **Cas de nullité (fonction continue positive) :** Si $f : [a, b] \to \mathbb{R}$ est **continue**, positive, et $\int_a^b f = 0$, alors $f$ est identiquement nulle. *(Attention : faux si $f$ est seulement CPM).*

---

## 4. Théorèmes Fondamentaux de l'Analyse (TFA)

### A. Primitives et intégrale
*   **Théorème (Continuité de l'intégrale variable) :** Soit $f \in \mathcal{CPM}([a, b], \mathbb{K})$. La fonction $F$ définie sur $[a, b]$ par :
    $$F(x)  = \int_a^x f(t) \, dt$$
    est **lipschitizienne**, donc **uniformément continue** sur $[a, b]$.
*   **Théorème (Dérivabilité de l'intégrale variable - TFA 1) :** Si $f$ est **continue** sur $[a, b]$, alors $F$ est de classe $\mathcal{C}^1$ sur $[a, b]$ et :
    $$\forall x \in [a, b], \quad F'(x) = f(x)$$
    *Autrement dit, toute fonction continue admet des primitives.*
*   **Théorème (Calcul d'intégrale par primitive - TFA 2) :** Si $f$ est continue sur $[a, b]$ et $G$ est une primitive de $f$ sur $[a, b]$ (i.e., $G' = f$), alors :
    $$\int_a^b f(t) \, dt = G(b) - G(a) = [G(t)]_a^b$$

---

## 5. Méthodes de calcul et transformations

### A. Intégration par parties (IPP)
*   **Théorème :** Soient $u, v : [a, b] \to \mathbb{K}$ de classe $\mathcal{C}^1$. Alors :
    $$\int_a^b u(t)v'(t) \, dt = [u(t)v(t)]_a^b - \int_a^b u'(t)v(t) \, dt$$

### B. Changement de variable (CDV)
*   **Théorème :** Soit $\varphi : [\alpha, \beta] \to [a, b]$ une bijection de classe $\mathcal{C}^1$ (donc $\varphi' \neq 0$ ou monotone, avec $\varphi(\alpha)=a$ et $\varphi(\beta)=b$). Soit $f \in \mathcal{CPM}([a, b], \mathbb{K})$. Alors :
    $$\int_a^b f(x) \, dx = \int_\alpha^\beta f(\varphi(t))\varphi'(t) \, dt$$

---

## 6. Sommes de Riemann

*   **Théorème :** Soit $f \in \mathcal{CPM}([a, b], \mathbb{K})$. La suite de termes généraux :
    $$S_n = \frac{b-a}{n} \sum_{k=0}^{n-1} f\left(a + k\frac{b-a}{n}\right) \quad \text{et} \quad \tilde{S}_n = \frac{b-a}{n} \sum_{k=1}^{n} f\left(a + k\frac{b-a}{n}\right)$$
    convergent toutes deux vers $\int_a^b f(t) \, dt$ lorsque $n \to +\infty$.
*   *Formule classique ($a=0, b=1$) :*
    $$\lim_{n \to +\infty} \frac{1}{n} \sum_{k=0}^{n-1} f\left(\frac{k}{n}\right) = \int_0^1 f(t) \, dt$$

---

## 7. Inégalités classiques

*   **Inégalité de Cauchy-Schwarz (pour les intégrales) :** Soient $f, g$ continues sur $[a, b]$ à valeurs réelles ou complexes :
    $$\left| \int_a^b f(t)\overline{g(t)} \, dt \right|^2 \le \left( \int_a^b |f(t)|^2 \, dt \right) \left( \int_a^b |g(t)|^2 \, dt \right)$$
*   **Inégalité de Minkowski (Inégalité triangulaire $L^2$) :**
    $$\left( \int_a^b |f(t)+g(t)|^2 \, dt \right)^{1/2} \le \left( \int_a^b |f(t)|^2 \, dt \right)^{1/2} + \left( \int_a^b |g(t)|^2 \, dt \right)^{1/2}$$

---

## ⚠️ Pièges à éviter et erreurs classiques

1.  **Oublier la continuité pour dériver :** Si $f$ est seulement *continue par morceaux*, la fonction $F(x) = \int_a^x f(t) \, dt$ n'est pas dérivable partout (elle est dérivable seulement là où $f$ est continue). N'écrivez pas $F'(x) = f(x)$ aveuglément !
2.  **Changement de variable invalide :** Pour un CDV $x = \varphi(t)$, il faut impérativement que $\varphi$ soit **bijective** (ou au moins $\mathcal{C}^1$-difféomorphisme par morceaux) et que $\varphi'$ ne s'annule pas de manière pathologique pour garantir l'équivalence. N'oubliez pas de changer les bornes *et* la mesure $dx = \varphi'(t)dt$.
3.  **Inversion des bornes lors d'un CDV :** Si $\varphi(\alpha) = b$ et $\varphi(\beta) = a$, respectez le sens des bornes ou sortez un signe $-\text{1}$.
4.  **Confusion entre valeur nulle de l'intégrale et nullité de la fonction :** $\int_0^1 f = 0$ n'implique **pas** $f = 0$, même si $f \ge 0$, sauf si $f$ est **continue**. Contre-exemple : une fonction en escalier valant $1$ sur un point ou présentant un pic isolé modifié (mais l'intégrale d'une fonction CPM positive nulle n'implique que la nullité *partout où la fonction est continue*).