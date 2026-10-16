---
title: 'Exercice 2 : Transformée en Z'
description: 'Problème d entraînement type concours.'
---

# CONCOURS COMMUN PSI — SCIENCES DE L'INGÉNIEUR
## Session d'entraînement : Automatique et Systèmes Échantillonnés — Transformée en $Z$

*Le sujet comporte 3 parties indépendantes guidées pas à pas. L'usage de la calculatrice n'est pas autorisé. Une attention particulière sera portée à la rigueur de la rédaction et à l'analyse critique des résultats.*

---

## Préambule et Rappels

Soit $x(n)$ une suite causale de nombres réels définie pour $n \in \mathbb{N}$. Sa transformée en $Z$, notée $X(z)$, est définie par :
$$X(z) = \mathcal{Z}\{x(n)\} = \sum_{n=0}^{+\infty} x(n) z^{-n}$$
où $z$ est une variable complexe.

Rappels de quelques propriétés fondamentales :
1. **Linéarité** : $\mathcal{Z}\{\alpha x(n) + \beta y(n)\} = \alpha X(z) + \beta Y(z)$
2. **Retard temporel** : $\mathcal{Z}\{x(n-1)\} = z^{-1}X(z) + x(-1)$ (pour des conditions initiales nulles, $\mathcal{Z}\{x(n-1)\} = z^{-1}X(z)$)
3. **Thorème de la valeur finale** : $\lim_{n \to +\infty} x(n) = \lim_{z \to 1} (1 - z^{-1})X(z)$ (si les pôles de $(1 - z^{-1})X(z)$ sont strictement à l'intérieur du cercle unité).

---

## Partie I : Étude d'un filtre numérique correcteur d'axe

On considère un système numérique échantillonné à la période $T_e$. Le correcteur numérique est décrit par l'équation aux différences suivante, liant l'entrée $e(n)$ et la sortie $s(n)$ :

$$s(n) - 0.5 s(n-1) = e(n) + 2 e(n-1)$$

On suppose les conditions initiales nulles ($s(n) = 0$ et $e(n) = 0$ pour $n < 0$).

### Question 1.1
Déterminer la fonction de transfert en $Z$ du correcteur, notée $H(z) = \frac{S(z)}{E(z)}$.
Correction: **
En appliquant la transformée en $Z$ à l'équation aux différences avec des conditions initiales nulles :
$$\mathcal{Z}\{s(n)\} - 0.5 \mathcal{Z}\{s(n-1)\} = \mathcal{Z}\{e(n)\} + 2 \mathcal{Z}\{e(n-1)\}$$
$$S(z) - 0.5 z^{-1} S(z) = E(z) + 2 z^{-1} E(z)$$

En factorisant :
$$S(z) \left(1 - 0.5 z^{-1}\right) = E(z) \left(1 + 2 z^{-1}\right)$$

La fonction de transfert $H(z)$ est donc :
$$H(z) = \frac{S(z)}{E(z)} = \frac{1 + 2 z^{-1}}{1 - 0.5 z^{-1}}$$

En remplaçant par des puissances positives de $z$ pour faciliter l'analyse :
$$H(z) = \frac{z + 2}{z - 0.5}$$

---

### Question 1.2
Préciser la position des pôles et des zéros de $H(z)$ dans le plan complexe. Le système est-il stable ? Justifier.
Correction: **
*   **Zéros** : Annulateurs du numérateur, soit $z + 2 = 0 \implies z_0 = -2$.
*   **Pôles** : Annulateurs du dénominateur, soit $z - 0.5 = 0 \implies p_1 = 0.5$.

**Stabilité :**
Un système discret linéaire invariant est stable si et seulement si tous ses pôles sont strictement à l'intérieur du cercle unité du plan complexe ($|p_i| < 1$).
Ici, le pôle unique est $p_1 = 0.5$, et $|0.5| = 0.5 < 1$. 
Conclusion: ** Le système est **stable**.

---

## Partie II : Réponse impulsionnelle et régime permanent

On soumet ce même correcteur à une impulsion de Kronecker, c'est-à-dire $e(n) = \delta(n)$ avec $\delta(0) = 1$ et $\delta(n) = 0$ pour $n \neq 0$.

### Question 2.1
Exprimer la transformée en $Z$ de la sortie $S(z)$ lorsque l'entrée est un échelon unitaire $e(n) = \Gamma(n)$ (avec $\Gamma(n) = 1$ pour $n \ge 0$).
Correction: **
La transformée en $Z$ de l'échelon unitaire est $\mathcal{Z}\{\Gamma(n)\} = \frac{1}{1 - z^{-1}} = \frac{z}{z - 1}$.
On a donc :
$$S(z) = H(z) \cdot E(z) = \frac{z + 2}{z - 0.5} \cdot \frac{z}{z - 1}$$

---

### Question 2.2
Décomposer $S(z)/z$ en éléments simples, puis déterminer l'expression temporelle de la sortie $s(n)$ pour $n \ge 0$.
Correction: **
Considérons l'expression :
$$\frac{S(z)}{z} = \frac{z + 2}{(z - 0.5)(z - 1)}$$

On cherche une décomposition sous la forme :
$$\frac{S(z)}{z} = \frac{A}{z - 0.5} + \frac{B}{z - 1}$$

Par la méthode des résidus ou par identification :
*   Pour $A$ (en multipliant par $z - 0.5$ et en évaluant en $z = 0.5$) :
    $$A = \left[ \frac{z + 2}{z - 1} \right]_{z = 0.5} = \frac{0.5 + 2}{0.5 - 1} = \frac{2.5}{-0.5} = -5$$

*   Pour $B$ (en multipliant par $z - 1$ et en évaluant en $z = 1$) :
    $$B = \left[ \frac{z + 2}{z - 0.5} \right]_{z = 1} = \frac{1 + 2}{1 - 0.5} = \frac{3}{0.5} = 6$$

Ainsi :
$$\frac{S(z)}{z} = \frac{-5}{z - 0.5} + \frac{6}{z - 1}$$
$$S(z) = \frac{-5z}{z - 0.5} + \frac{6z}{z - 1}$$

En effectuant la transformée en $Z$ inverse, sachant que $\mathcal{Z}^{-1}\left\{\frac{z}{z - a}\right\} = a^n \Gamma(n)$ :
$$s(n) = \left( -5 (0.5)^n + 6 \right) \Gamma(n)$$

---

### Question 2.3
Vérifier le résultat précédent en utilisant le théorème de la valeur finale, puis analyser le comportement temporel du système.
Correction: **
*   **Vérification par le théorème de la valeur finale :**
    $$\lim_{n \to +\infty} s(n) = \lim_{z \to 1} (1 - z^{-1}) S(z) = \lim_{z \to 1} \left(\frac{z-1}{z}\right) \left[ \frac{z+2}{z-0.5} \frac{z}{z-1} \right]$$
    $$\lim_{n \to +\infty} s(n) = \lim_{z \to 1} \frac{z+2}{z-0.5} = \frac{1+2}{1-0.5} = \frac{3}{0.5} = 6$$
    Si l'on calcule $\lim_{n \to +\infty} \left( -5 (0.5)^n + 6 \right)$, comme $|0.5| < 1$, $\lim_{n \to +\infty} (0.5)^n = 0$, on trouve bien $6$. Les deux méthodes concordent.

*   **Analyse critique :**
    Le terme $-5(0.5)^n$ représente le **régime transitoire**. Il s'annule rapidement grâce à la faible valeur du pôle ($0.5$). La constante $6$ représente le **régime permanent**. Le gain statique du système soumis à un échelon est donc de $6$.

---

## Partie III : Application à l'asservissement d'un axe motorisé

On considère maintenant une boucle fermée comprenant le correcteur précédent et un système échantillonné de fonction de transfert en $Z$ :
$$G(z) = \frac{K}{z - 1}$$
La commande est un retour unitaire négatif.

### Question 3.1
Exprimer la fonction de transfert en boucle fermée $FTBF(z) = \frac{S(z)}{E(z)}$ en fonction de $K$.
Correction: **
Le correcteur est $H(z) = \frac{z+2}{z-0.5}$ et la chaîne ouverte a pour fonction de transfert $BO(z) = H(z)G(z) = \frac{(z+2)K}{(z-0.5)(z-1)}$.

La fonction de transfert en boucle fermée s'exprime par :
$$FTBF(z) = \frac{BO(z)}{1 + BO(z)} = \frac{\frac{K(z+2)}{(z-0.5)(z-1)}}{1 + \frac{K(z+2)}{(z-0.5)(z-1)}}$$

En réduisant au même dénominateur :
$$FTBF(z) = \frac{K(z+2)}{(z-0.5)(z-1) + K(z+2)}$$
$$FTBF(z) = \frac{K(z+2)}{z^2 - 1.5z + 0.5 + Kz + 2K} = \frac{K(z+2)}{z^2 + (K - 1.5)z + (2K + 0.5)}$$

---

### Question 3.2
Déterminer la condition sur le gain $K$ pour que le système bouclé soit stable. *(On pourra utiliser une condition nécessaire simple).*
Correction: **
Pour qu'un système discret d'ordre 2 de dénominateur $D(z) = z^2 + az + b$ soit stable, ses pôles (racines de $D(z)$) doivent être de module strictement inférieur à $1$. Cela se traduit par le critère de Jury, dont les conditions nécessaires et suffisantes pour l'ordre 2 sont :
1. $D(1) > 0$
2. $D(-1) > 0$
3. $|b| < 1$

Appliquons ces conditions au polynôme caractéristique $D(z) = z^2 + (K - 1.5)z + (2K + 0.5)$ :

*   **Condition 1 ($D(1) > 0$) :**
    $$1^2 + (K - 1.5)(1) + (2K + 0.5) > 1 - 1.5 + 0.5 + 3K > 0 \implies 3K > 0 \implies K > 0$$

*   **Condition 2 ($D(-1) > 0$) :**
    $$(-1)^2 + (K - 1.5)(-1) + (2K + 0.5) > 0$$
    $$1 - K + 1.5 + 2K + 0.5 > 0 \implies K + 3 > 0 \implies K > -3$$

*   **Condition 3 ($|b| < 1$, soit $-1 < 2K + 0.5 < 1$) :**
    *   $2K + 0.5 > -1 \implies 2K > -1.5 \implies K > -0.75$
    *   $2K + 0.5 < 1 \implies 2K < 0.5 \implies K < 0.25$
    Soit $-0.75 < K < 0.25$.

**Synthèse :**
L'intersection de toutes les conditions ($K > 0$, $K > -3$, et $-0.75 < K < 0.25$) conduit à l'intervalle de stabilité :
$$0 < K < 0.25$$

---

### Question 3.3
Analyse critique : Quel est l'impact d'un choix de $K = 0.5$ sur le système ?
Correction: **
Si $K = 0.5$, la condition de stabilité $K < 0.25$ n'est pas respectée. 
*   **Conséquence physique :** Le système en boucle fermée devient **instable**. Les pôles de la $FTBF$ sortent du cercle unité. 
*   **En pratique industrielle :** La sortie $s(n)$ va diverger vers l'infini (en pratique, saturation des actionneurs), ce qui peut détruire le matériel. L'ingénieur doit impérativement brider le gain $K$ dans l'intervalle $]0, 0.25[$ (ou utiliser un correcteur plus élaboré, type PID numérique) pour garantir à la fois la stabilité et les performances dynamiques souhaitées.