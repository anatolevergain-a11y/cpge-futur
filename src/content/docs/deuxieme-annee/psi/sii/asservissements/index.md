---
title: 'Cours : Systèmes asservis'
description: 'Synthèse de cours, théorèmes et démonstrations.'
---

# Fiche de Cours : Systèmes Asservis (CPGE PSI - Sciences Industrielles pour l'Ingénieur)

---

## 1. Introduction et Représentation des Systèmes Linéaires Continus Invariants (SLCI)

Un Système Asservi Linéaire Continu Invariant (SLCI) a pour objectif de faire en sorte qu'une grandeur physique de sortie $s(t)$ (ou $S(p)$) suive le plus fidèlement possible une grandeur de consigne $e(t)$ (ou $E(p)$), malgré les perturbations extérieures.

### A. Transformée de Laplace et Fonction de Transfert
La fonction de transfert $H(p)$ d'un SLCI est définie, sous des conditions initiales nulles, par le rapport de la transformée de Laplace de la sortie sur celle de l'entrée :
$$H(p) = \frac{S(p)}{E(p)}$$

### B. Schémas fonctionnels et mise en cascade / boucle
*   **Mise en cascade (série) :** $H(p) = H_1(p) \cdot H_2(p)$
*   **Mise en parallèle :** $H(p) = H_1(p) + H_2(p)$
*   **Système à retour (boucle fermée) :** 
    Considérons une chaîne directe $A(p)$ et une chaîne de retour $B(p)$. La fonction de transfert en boucle fermée (FTBF) notée $F(p)$ s'exprime par la formule de Black :
    $$F(p) = \frac{A(p)}{1 + A(p)B(p)}$$
    La fonction de transfert en boucle ouverte (FTBO) est définie par : $T(p) = A(p)B(p)$.

---

## 2. Étude des Systèmes Élémentaires

### A. Premier ordre
*   **Forme canonique :** $H(p) = \frac{K}{1 + \tau p}$
    *   $K$ : gain statique.
    *   $\tau$ : constante de temps ($\text{en s}$).
*   **Réponse indicielle (pour un échelon d'amplitude $E_0$) :**
    $$s(t) = K E_0 \left(1 - e^{-\frac{t}{\tau}}\right)u(t)$$
*   **Caractéristiques remarquables :**
    *   À $t = \tau$, $s(\tau) \approx 0{,}63 \cdot K E_0$
    *   Temps de réponse à 5 % : $t_{r5\%} \approx 3\tau$

### B. Second ordre
*   **Forme canonique :** $H(p) = \frac{K}{1 + \frac{2z}{\omega_0}p + \frac{p^2}{\omega_0^2}}$
    *   $\omega_0$ : pulsation propre non amortie ($\text{en rad}\cdot\text{s}^{-1}$).
    *   $z$ : coefficient d'amortissement (sans dimension).
*   **Cas selon la valeur de $z$ :**
    *   Si $z > 1$ : Régime apériodique (deux pôles réels négatifs).
    *   Si $z = 1$ : Régime critique.
    *   Si $0 < z < 1$ : Régime pseudo-périodique. Les pôles sont complexes conjugués : $p_1, p_2 = -\sigma \pm j\omega_d$.
        *   Pulsation propre amortie : $\omega_d = \omega_0 \sqrt{1 - z^2}$
        *   Dépassement maximal (pour un échelon) : $D_1 = e^{-\frac{\pi z}{\sqrt{1 - z^2}}}$

---

## 3. Stabilité des Systèmes Linéaires

> **Définition (Stabilité):** Un système est dit stable si, pour toute entrée bornée, la sortie est bornée (critère BIBO). En pratique, pour un SLCI, la stabilité ne dépend que des pôles de la FTBF.

### A. Théorème fondamental de la stabilité
Un SLCI est stable si et seulement si **tous les pôles de sa fonction de transfert en boucle fermée ont leur partie réelle strictement négative** (ils sont situés dans le demi-plan gauche du plan complexe de Laplace).

### B. Critère algébrique de Routh (pour les polynômes)
Soit le dénominateur de la FTBF sous forme polynomiale :
$$D(p) = a_n p^n + a_{n-1} p^{n-1} + \dots + a_1 p + a_0 \quad (\text{avec } a_n > 0)$$

1.  **Condition nécessaire (mais non suffisante) :** Tous les coefficients $a_i$ doivent être de même signe et non nuls.
2.  **Construction du tableau de Routh :** On construit les lignes à partir des coefficients.
    *   Si tous les termes de la première colonne du tableau de Routh sont de **même signe**, le système est **stable**.
    *   Le nombre de changements de signe dans la première colonne donne le nombre de pôles à partie réelle strictement positive (instabilité).

---

## 4. Performances d'un Système Asservi

Les performances d'un asservissement se jugent selon trois critères : la stabilité (marge), la précision (erreur) et la rapidité.

### A. Précision (Erreur statique et dynamique)
On définit l'erreur epsilon par $e_{rr}(t) = consigne(t) - sortie(t)$. En régime permanent, on utilise le théorème de la valeur finale :
$$\varepsilon_{+\infty} = \lim_{p \to 0} p \cdot (E(p) - S(p)) = \limits_{t \to +\infty} \varepsilon_{rr}(t)$$

*   **Classe d'un système :** C'est l'ordre de la multiplicité de l'origine dans la FTBO, c'est-à-dire le nombre d'intégrateurs purs $p$ au dénominateur de $T(p)$ :
    $$T(p) = \frac{N(p)}{p^\alpha \cdot D_0(p)} \quad (\text{avec } D_0(0) \neq 0)$$
    $\alpha$ est la **classe** du système.

*   **Tableau récapitulatif des erreurs (écarts) :**

| Entrée \ Classe | Classe 0 | Classe 1 | Classe 2 ou plus |
| :--- | :--- | :--- | :--- |
| **Échelon** ($E_0 / p$) | $\frac{E_0}{1 + K_0}$ (fini) | $0$ | $0$ |
| **Rampe** ($E_0 / p^2$) | $+\infty$ | $\frac{E_0}{K_v}$ (fini) | $0$ |
| **Parabole** ($E_0 / p^3$) | $+\infty$ | $+\infty$ | $\frac{E_0}{K_a}$ (fini) |

*(avec $K_0, K_v, K_a$ respectivement les facteurs de gain de position, vitesse et accélération).*

### B. Rapidité
*   **Temps de réponse à 5 % ($t_{r5\%}$) :** Temps au bout duquel la sortie reste définitivement dans la bande de $\pm 5\%$ de sa valeur finale.
*   Pour un système du 1er ordre : $t_{r5\%} \approx 3\tau$.
*   Pour un second ordre (avec $z < 0.7$), on retient souvent l'approximation : $t_{r5\%} \approx \frac{3}{z\omega_0}$.

### C. Stabilité relative : Marges de stabilié (Diagrammes de Bode)
On étudie la FTBO $T(j\omega)$.

1.  **Marge de gain ($MG$) :** C'est l'opposé du gain du système (exprimé en dB) lorsque la phase vaut $-180^\circ$.
    $$MG(\text{en dB}) = -20 \log_{10}(|T(j\omega_{180})|) \quad \text{avec } \arg(T(j\omega_{180})) = -180^\circ$$
2.  **Marge de phase ($MP$) :** C'est l'écart à $-180^\circ$ de la phase lorsque le gain vaut $0\text{ dB}$ (pulsation de coupure à 0 dB, $\omega_c$).
    $$MP = 180^\circ + \arg(T(j\omega_c)) \quad \text{avec } |T(j\omega_c)| = 1 \text{ (soit } 0\text{ dB)}$$

> **Critère du revers / Stabilité relative :** Pour qu'un système rebouclé soit stable, il faut généralement :
> *   $MG > 6\text{ dB}$
> *   $MP > 45^\circ$

---

## 5. Correction des Systèmes

Pour améliorer simultanément la précision, la rapidité et la stabilité, on insère un **correcteur** $C(p)$ dans la chaîne directe.

*   **Correcteur Proportionnel ($P$) : $C(p) = K_p$**
    *   *Effet :* Améliore la rapidité et réduit l'erreur statique (augmente le gain $K_0$), mais dégrade la marge de phase (risque d'instabilité).
*   **Correcteur Proportionnel Intégrateur ($PI$) : $C(p) = K_p \left(1 + \frac{1}{T_i p}\right)$**
    *   *Effet :* **Annule l'erreur statique** (augmente la classe du système de 1) sans modifier le comportement à haute fréquence, mais apporte un déphasage négatif (diminue la marge de phase).
*   **Correcteur Proportionnel Dérivé ($PD$) : $C(p) = K_p (1 + T_d p)$**
    *   *Effet :* Apporte un déphasage positif (améliore la stabilité et la marge de phase) et accélère le système. Amplifie cependant le bruit de mesure à haute fréquence.

---

## 6. Méthodes et Pièges à Éviter (Spéco PSI)

> **⚠️ PIÈGES CLASSIQUES / ERREURS À NE PAS COMMETTRE :**
> 1. **Attention aux conditions initiales :** La formule $H(p) = S(p)/E(p)$ n'est valable **que** si les conditions initiales sont nulles ($s(0^+) = 0$, $\dot{s}(0^+) = 0$, etc.). Ne jamais l'écrire directement avec des dérivées non nulles en $t=0$.
> 2. **Inversion FTBF / FTBO :** Dans le calcul des marges de stabilité, on trace le diagramme de Bode de la **FTBO** $T(j\omega) = A(p)B(p)$ et non de la FTBF ! C'est une erreur éliminatoire fréquente aux concours.
> 3. **Unités en Logarithméc (Bode) :** Le gain s'exprime en décibels ($20 \log_{10}$), la pulsation en $\text{rad}\cdot\text{s}^{-1}$ sur une échelle logarithmique, et la phase en degrés. Ne mélangez pas radians et degrés.
> 4. **Ordre de grandeur du dépassement :** Un système sans dépassement ($z \ge 1$) est souvent trop lent. Un bon compromis en ingénierie (type placement de pôles) consiste à viser un coefficient d'amortissement $z \approx 0{,}7$ (soit un dépassement d'environ $5\%$ à $10\%$).