---
title: 'Cours : Suites et séries numériques'
description: 'Synthèse officielle du cours et démonstrations pour CPGE PTSI.'
---

## 📌 1. Définitions & Cadre d'étude

Le programme de mathématiques de première année de la filière PTSI impose l'étude approfondie des suites et des séries de nombres réels ou complexes. Soit $\mathbb{K}$ le corps $\mathbb{R}$ ou $\mathbb{C}$.

*   **Suite numérique :** Une suite $(u_n)_{n \in \mathbb{N}}$ est une application de $\mathbb{N}$ (ou d'une partie de $\mathbb{N}$) dans $\mathbb{K}$.
*   **Série numérique :** Soit $(u_n)_{n \in \mathbb{N}}$ une suite. On appelle série numérique, notée $\sum u_n$, la suite $(S_n)_{n \in \mathbb{N}}$ des sommes partielles définie par :
    $$S_n = \sum_{k=0}^{n} u_k = u_0 + u_1 + \dots + u_n$$
*   **Convergence et divergence :** 
    *   La série $\sum u_n$ est dite **convergente** si la suite de ses sommes partielles $(S_n)_{n \in \mathbb{N}}$ admet une limite finie $S$ dans $\mathbb{K}$. On note alors $\sum_{n=0}^{+\infty} u_n = S$.
    *   Si $(S_n)$ diverge (vers l'infini ou sans limite), la série est dite **divergente**.
*   **Reste d'une série convergente :** Pour une série convergente de somme $S$, le reste d'ordre $n$, noté $R_n$, est défini par $R_n = S - S_n = \sum_{k=n+1}^{+\infty} u_k$. On a $\lim_{n \to +\infty} R_n = 0$.

---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### A. Théorèmes généraux sur les suites

*   **Convergence des suites monotones :** Toute suite réelle croissante et majorée est convergente. Toute suite réelle décroissante et minorée est convergente.
*   **Suites adjacentes :** Deux suites $(u_n)$ et $(v_n)$ sont dites adjacentes si l'une est croissante, l'autre est décroissante, et $\lim_{n \to +\infty} (v_n - u_n) = 0$.
    *   *Théorème :* Deux suites adjacentes convergent vers la même limite.

### B. Propriétés fondamentales des séries

*   **Condition nécessaire de convergence :** 
    *   *Théorème :* Si la série $\sum u_n$ converge, alors la suite $(u_n)$ tend vers $0$ lorsque $n$ tend vers $+\infty$.
    *   *Piège classique :* La réciproque est **fausse** (exemple de la série harmonique $\sum \frac{1}{n}$).
*   **Linéarité des séries convergentes :** Si $\sum u_n$ et $\sum v_n$ convergent, alors pour tous $\lambda, \mu \in \mathbb{K}$, la série $\sum (\lambda u_n + \mu v_n)$ converge et :
    $$\sum_{n=0}^{+\infty} (\lambda u_n + \mu v_n) = \lambda \sum_{n=0}^{+\infty} u_n + \mu \sum_{n=0}^{+\infty} v_n$$

### C. Démonstration clé : Divergence de la série harmonique

*   **Énoncé :** La série $\sum_{n \ge 1} \frac{1}{n}$ diverge vers $+\infty$.
*   **Démonstration (par minoration des sommes partielles) :**
    Considérons les sommes partielles d'indices $2^p$ pour $p \in \mathbb{N}$. 
    Soit $S_n = \sum_{k=1}^n \frac{1}{k}$. Regroupons les termes par paquets de taille $2$ :
    $$S_{2^p} = 1 + \frac{1}{2} + \left(\frac{1}{3} + \frac{1}{4}\right) + \left(\frac{1}{5} + \frac{1}{6} + \frac{1}{7} + \frac{1}{8}\right) + \dots + \left(\frac{1}{2^{p-1}+1} + \dots + \frac{1}{2^p}\right)$$
    Chaque paquet de la forme $\sum_{k=2^{m}+1}^{2^{m+1}} \frac{1}{k}$ comporte $2^m$ termes, et le plus petit terme de ce paquet est $\frac{1}{2^{m+1}}$. Ainsi, chaque paquet est minoré par :
    $$2^m \times \frac{1}{2^{m+1}} = \frac{1}{2}$$
    Par conséquent, pour tout $p \in \mathbb{N}$, on a la minoration :
    $$S_{2^p} \ge 1 + \frac{p}{2}$$
    Par passage à la limite lorsque $p$ tend vers $+\infty$, la suite $(S_{2^p})$ diverge vers $+\infty$. La suite des sommes partielles $(S_n)$ étant croissante et non majorée, elle diverge vers $+\infty$. $\blacksquare$

---

## 💡 3. Méthodes de calcul & Algorithmes

### A. Étude et calcul des séries de référence

1.  **Séries géométriques :** Pour $q \in \mathbb{K}$ tel que $|q| < 1$, la série $\sum q^n$ converge et sa somme vaut :
    $$\sum_{n=0}^{+\infty} q^n = \frac{1}{1-q}$$
    Si $|q| \ge 1$ (avec $q \neq 1$), la condition nécessaire n'est pas vérifiée, la série diverge.
2.  **Séries de Riemann :** Pour $\alpha \in \mathbb{R}$, la série $\sum \frac{1}{n^\alpha}$ converge si et seulement si $\alpha > 1$.
3.  **Séries télescopiques :** Soit $(u_n)$ une suite telle que $u_n = v_{n+1} - v_n$. La série $\sum u_n$ converge si et seulement si la suite $(v_n)$ admet une limite finie. Dans ce cas :
    $$\sum_{n=0}^{+\infty} u_n = \lim_{n \to +\infty} v_{n+1} - v_0$$

### B. Séries à termes positifs ($\forall n, u_n \ge 0$)
Pour ces séries, la suite des sommes partielles $(S_n)$ est croissante. La convergence équivaut donc à la **majoration** de $(S_n)$.

*   **Règle des équivalents :** Si $u_n \sim v_n$ avec $u_n \ge 0$ et $v_n \ge 0$, alors les séries $\sum u_n$ et $\sum v_n$ ont **la même nature**.
*   **Règle des majorations (comparaison) :** 
    *   Si $0 \le u_n \le v_n$ et si $\sum v_n$ converge, alors $\sum u_n$ converge.
    *   Si $0 \le v_n \le u_n$ et si $\sum v_n$ diverge, alors $\sum u_n$ diverge.

### C. Cas des séries à termes quelconques
*   **Convergence absolue :** Une série $\sum u_n$ est dite **absolument convergente** si la série des valeurs (ou modules) absolues $\sum |u_n|$ converge.
*   *Théorème fondamental :* Toute série absolument convergente est convergente.
    $$\text{Si } \sum |u_n| \text{ converge, alors } \sum u_n \text{ converge.} \quad \left( \left| \sum_{n=0}^{+\infty} u_n \right| \le \sum_{n=0}^{+\infty} |u_n| \right)$$

---

## ⚠️ 4. Pièges classiques aux Concours

1.  **Confondre suite et série :** Écrire $\lim u_n = 0$ pour conclure à la *convergence* de la série $\sum u_n$. C'est une condition *nécessaire* mais non suffisante (contre-exemple : $\sum \frac{1}{n}$).
2.  **Utilisation abusive des équivalents :** Appliquer la règle des équivalents sur des séries à termes de signes quelconques. Les théorèmes de comparaison par équivalence ou par majoration/minoration exigent que les termes soient **de signe constant** (au moins à partir d'un certain rang).
3.  **Erreur d'indice dans les sommes télescopiques :** Oublier d'écrire explicitement la somme partielle $S_n$ avant de passer à la limite, ce qui conduit à des erreurs de décalage d'indices sur les termes extrêmes.
4.  **Mauvaise manipulation des séries divergentes :** Effectuer des opérations algébriques (comme soustraire deux séries divergentes terme à terme) en oubliant que les règles de calcul des limites finies ne s'appliquent pas aux formes indéterminées.