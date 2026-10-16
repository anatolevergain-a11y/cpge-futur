---
title: 'Cours : Complexation et équilibres de précipitation'
description: 'Synthèse de cours, théorèmes fondamentaux et démonstrations.'
---

## 📌 1. Définitions & Cadre d'étude

### A. Réactions de complexation
Un complexe est un édifice polyatomique constitué d'un ion métallique central (acide de Lewis, souvent un cation de transition $M^{n+}$) lié à des molécules ou des ions appelés ligands ou coordinents (bases de Lewis, ex : $\text{H}_2\text{O}$, $\text{NH}_3$, $\text{Cl}^-$, $\text{CN}^-$).

*   **Nombre de coordination (NC) :** Nombre de liaisons coordinatives formées par l'ion central.
*   **Constante globale de formation (ou de stabilité) $\beta_n$ :** Soit la réaction de formation successive d'un complexe $ML_n$ à partir de l'ion central $M$ et de $n$ ligands $L$ :
    $$M + nL \rightleftarrows ML_n$$
    La constante d'équilibre associée est la constante globale $\beta_n$ (sans dimension) :
    $$\beta_n = \frac{[ML_n]}{\text{c}^\circ{}^n [M][L]^n}$$
    *(Par convention, les activités sont remplacées par les concentrations rapportées à la concentration standard $c^\circ = 1\text{ mol}\cdot\text{L}^{-1}$, omises par la suite pour alléger l'écriture).*
*   On définit aussi les constantes de formation successives $K_i$ telles que $\beta_n = \prod_{i=1}^{n} K_i$.

### B. Équilibres de précipitation
Un précipité est un composé ionique peu soluble qui se forme lorsque le produit des concentrations ioniques dépasse la solubilité du composé.

*   **Produit de solubilité $K_{s}$ :** Pour un sel solide $M_\alpha A_\beta$ en équilibre avec ses ions en solution :
    $$M_\alpha A_\beta \text{(s)} \rightleftarrows \alpha M^{n+} + \beta A^{p-}$$
    La constante thermodynamique d'équilibre est le produit de solubilité :
    $$K_s = [M^{n+}]^\alpha [A^{p-}]^\beta$$
    $K_s$ dépend uniquement de la température. Plus $K_s$ est petit, moins le sel est soluble.
*   **Solubilité $s$ :** Notée $s$, c'est la quantité maximale de soluté que l'on peut dissoudre par litre de solution pour obtenir une solution saturée (exprimée en $\text{mol}\cdot\text{L}^{-1}$).

---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### A. Relation entre solubilité $s$ et produit de solubilité $K_s$
*   **Cas simple : $MX\text{(s)} \rightleftarrows M^{n+} + X^{n-}$**
    À l'équilibre dans l'eau pure, $[M^{n+}] = [X^{n-}] = s$.
    $$K_s = s^2 \implies s = \sqrt{K_s}$$

*   **Cas général : $M_\alpha A_\beta\text{(s)} \rightleftarrows \alpha M^{n+} + \beta A^{p-}$**
    Dans l'eau pure, si l'on néglige les réactions secondaires (comme la protolyse) :
    $[M^{n+}] = \alpha s$ et $[A^{p-}] = \beta s$
    $$K_s = (\alpha s)^\alpha (\beta s)^\beta = \alpha^\alpha \beta^\beta s^{\alpha+\beta}$$
    $$\implies s = \left( \frac{K_s}{\alpha^\alpha \beta^\beta} \right)^{\frac{1}{\alpha+\beta}}$$

### B. Effet d'ion commun et influence du pH
*   **Effet d'ion commun :** La solubilité d'un sel peu soluble diminue fortement si l'on introduit dans la solution l'un de ses ions constitutifs.
*   **Influence du pH :** Si l'anion $A^{p-}$ est une base faible (provenant d'un acide faible $HA$), la réaction de précipitation est couplée à une réaction acido-basique :
    $$A^{p-} + H_3\text{O}^+ \rightleftarrows HA + H_2\text{O}$$
    La présence d'ions $\text{H}_3\text{O}^+$ (milieu acide) consomme $A^{p-}$, ce qui déplace l'équilibre de dissolution vers la droite : **la solubilité d'un sel basique augmente lorsque le pH diminue**.

### C. Influence de la complexation sur la solubilité
La formation d'un complexe soluble avec l'ion métallique $M^{n+}$ permet de consommer cet ion et donc de dissoudre une plus grande quantité de précipité.

*   **Démonstration (Dissolution d'un précipité par complexation) :**
    Considérons le sel $MX\text{(s)} \rightleftarrows M^{n+} + X^{-}$ ($K_s$) en présence d'un ligand $L$ formant le complexe $ML^+$ ($K_1$).
    Réaction globale :
    $$MX\text{(s)} + L \rightleftarrows ML^+ + X^{-}$$
    La constante de cette réaction globale est :
    $$K^\circ = \frac{[ML^+][X^-]}{[L]} = \frac{[M^{n+}][X^-] \times [ML^+]}{[M^{n+}][L]} = K_s \times K_1$$
    Puisque $K^\circ$ est souvent nettement supérieur à $K_s$, la réaction de dissolution est considérablement déplacée vers la droite.

---

## 💡 3. Méthodes de calcul & Algorithmes

### A. Algorithme de calcul de la composition d'une solution avec précipité
1.  **Identifier les espèces en présence** et écrire toutes les équilibres possibles (précipitation, acido-basique, complexation).
2.  **Calculer les constantes thermodynamiques** des différentes réactions envisagées pour déterminer le sens d'évolution (via le quotient de réaction $Q_r$ et les constantes $K$).
3.  **Faire l'hypothèse d'apparition ou non du précipité :**
    *   *Hypothèse 1 : Pas de précipité.* On calcule les concentrations des ions. Si le produit des concentrations $Q_{s,i} \le K_s$, l'hypothèse est validée.
    *   *Hypothèse 2 : Précipitation totale.* Si $Q_{s,i} > K_s$, le précipité se forme. On utilise un tableau d'avancement en moles (ou en concentrations) en considérant la réaction quasi-totale dans le sens de la précipitation, puis on ajuste avec le $K_s$ pour trouver la concentration résiduelle de l'ion limitant.
4.  **Vérifier la validité des approximations** (notamment l'autoprotolyse de l'eau ou la dissociation négligeable).

### B. Traçage des diagrammes de prédominance et d'existence
*   **Domaine d'existence** (pour les solides / précipités) : borné par la concentration limite de saturation. Le tracé de $\log[M] = f(\text{pH})$ ou $\log[M] = f(\log[L])$ délimite la frontière entre la zone de sursaturation (précipité présent) et la zone de subsaturation (solution claire).

---

## ⚠️ 4. Pièges classiques aux Concours

1.  **Confondre solubilité ($s$) et produit de solubilité ($K_s$) :** $K_s$ est une constante thermodynamique sans dimension (liée aux activités), tandis que $s$ est une concentration molaire effective ($\text{mol}\cdot\text{L}^{-1}$) qui dépend de la composition de la solution (effet d'ion commun, pH, complexation).
2.  **Oublier les coefficients stœchiométriques dans l'expression de $K_s$ :** Pour $Al(OH)_3\text{(s)}$, $K_s = [Al^{3+}][OH^-]^3$. Ne pas oublier de mettre la puissance 3 sur la concentration des ions hydroxyde.
3.  **Raisonner à tort avec des concentrations initiales et non effectives** lors de l'utilisation du quotient réactionnel $Q_{s} = [M^{n+}]^\alpha [A^{p-}]^\beta$ pour tester l'apparition d'un précipité au mélange de deux solutions (ne pas oublier le phénomène de **dilution** des volumes lors du mélange).
4.  **Négliger les équilibres simultanés :** En concours, un cation métallique subit souvent à la fois des réactions de complexation et des réactions acido-basiques ($\text{M(OH)}_n$). Il est impératif de recenser tous les équilibres pour écrire la conservation de la matière.