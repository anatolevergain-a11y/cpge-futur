---
title: 'Cours : Réactions en solution aqueuse'
description: 'Synthèse de cours, théorèmes et démonstrations fondamentales.'
---

## 📌 1. Définitions & Cadre d'étude

Le cadre d'étude est celui des solutions aqueuses diluées à l'équilibre thermodynamique. La solvatation par l'eau $\text{H}_2\text{O}$ (solvant polaire, fort moment dipolaire) permet la mise en solution d'espèces ioniques ou polaires.

### Activité chimique
Pour une espèce $i$ en solution, l'activité $a_i$ est une grandeur sans dimension définie par :
- Pour un soluté (espèce dissoute $A$) en solution diluée : 
  $$a_A = \frac{C_A}{C^\circ}$$
  avec $C^\circ = 1\,\text{mol}\cdot\text{L}^{-1}$ la concentration standard.
- Pour le solvant ($\text{H}_2\text{O}$) : 
  $$a_{\text{H}_2\text{O}} \approx 1$$
  en raison de la dilution (le solvant est en grand excès).
- Pour un solide pur ou un liquide pur : 
  $$a = 1$$

### Constante d'équilibre
Pour une réaction chimique modélisée par l'équation stœchiométrique :
$$\sum_{\text{reactifs}} \nu_i A_i \rightleftharpoons \sum_{\text{produits}} \nu_i A_i$$
L'affinité chimique nulle à l'équilibre conduit à la relation liant les activités à l'équilibre :
$$K^\circ(T) = \prod_{i} (a_i)^{\nu_i}$$
avec $\nu_i < 0$ pour les réactifs et $\nu_i > 0$ pour les produits.

---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### 2.1. Auto-protolyse de l'eau et échelle de pH
L'eau subit une réaction d'auto-protolyse :
$$2\,\text{H}_2\text{O}_{(l)} \rightleftharpoons \text{H}_3\text{O}^+_{(aq)} + \text{OH}^-_{(aq)}$$
La constante d'équilibre associée est le produit ionique de l'eau, noté $K_e$ :
$$K_e = a(\text{H}_3\text{O}^+) \cdot a(\text{OH}^-) = \frac{[\text{H}_3\text{O}^+] [\text{OH}^-]}{(C^\circ)^2}$$
À $25\,^\circ\text{C}$ ($298{,}15\,\text{K}$), $pK_e = -\log_{10}(K_e) = 14{,}0$.

Par définition, le potentiel hydrogène $\text{pH}$ est défini par :
$$\text{pH} = -\log_{10}\left(\frac{[\text{H}_3\text{O}^+]}{C^\circ}\right)$$

### 2.2. Domaines de prédominance et de légitimité (Diagrammes $\log C - \text{pH}$)
Soit un couple acide/base $\text{AH} / \text{A}^-$ caractérisé par son acidité $pK_a$ :
$$\text{AH}_{(aq)} + \text{H}_2\text{O}_{(l)} \rightleftharpoons \text{A}^-_{(aq)} + \text{H}_3\text{O}^+_{(aq)}, \quad K_a = \frac{[\text{A}^-][\text{H}_3\text{O}^+]}{[\text{AH}] C^\circ}$$

En appliquant le logarithme décimal :
$$\text{pH} = pK_a + \log\left(\frac{[\text{A}^-]}{[\text{AH}]}\right)$$

- **Prédominance** : 
  - Si $\text{pH} > pK_a$, alors $[\text{A}^-] > [\text{AH}]$ (l'espèce basique prédomine).
  - Si $\text{pH} < pK_a$, alors $[\text{AH}] > [\text{A}^-]$ (l'espèce acide prédomine).
- **Frontière de prédominance** : Fixée conventionnellement à $\text{pH} = pK_a$ où $[\text{AH}] = [\text{A}^-]$.

---

## 💡 3. Méthodes classiques de résolution

### 3.1. Méthode générale de résolution d'un système acido-basique
Pour déterminer la composition chimique d'une solution aqueuse, la démarche rigoureuse en PCSI impose l'écriture de quatre types d'équations :

1. **Inventaire des espèces** introduites et créées par autoprotolyse (et négligeabilité éventuelle).
2. **Lois d'action de masse** (LAM) : $K_a$, $K_e$, etc.
3. **Bilan de matière** (conservation des éléments en solution).
4. **Électroneutralité de la solution** (EN) :
   $$\sum z_i [X_i] = 0$$
   Exemple pour une solution d'acide faible $\text{AH}$ dans l'eau :
   $$[\text{H}_3\text{O}^+] = [\text{A}^-] + [\text{OH}^-]$$

### 3.2. Approximations légitimes
Résoudre le système polynomial exact étant souvent complexe, on recourt à des approximations valables sous conditions :
- **Solution peu dissociée** : si l'acide est faiblement dissocié, $[\text{AH}] \approx C$ (concentration initiale).
- **Milieu fortement acide** : $[\text{H}_3\text{O}^+] \gg [\text{OH}^-]$, ce qui permet de négliger $[\text{OH}^-]$ dans l'équation d'électroneutralité.

*Validation indispensable a posteriori* : Il faut systématiquement vérifier les hypothèses formulées (ex: vérifier que le taux de dissociation $\alpha \ll 1$ ou que $[\text{OH}^-] < 0{,}1 [\text{H}_3\text{O}^+]$).

---

## ⚠️ 4. Pièges classiques aux Concours

1. **Oubli de l'activité du solvant** : Ne jamais intégrer $[\text{H}_2\text{O}]$ dans l'expression d'une constante d'équilibre en solution aqueuse diluée ($a_{\text{H}_2\text{O}} = 1$).
2. **Confusion entre pH et concentration brute** : Le pH est une grandeur liée à l'activité des ions oxonium. Pour les solutions très concentrées, l'identification $-\log[\text{H}_3\text{O}^+]$ est fausse car les coefficients d'activité s'écartent de $1$.
3. **Négligence de l'autoprotolyse de l'eau** : Dans les solutions très diluées d'acides ou de bases fortes, l'ionisation propre de l'eau ne peut être négligée sous peine d'obtenir un pH absurde (ex: $\text{pH} > 7$ pour un acide fort dilué).
4. **Absence de vérification des approximations** : Utiliser la formule approchée d'un acide faible $\left(\text{pH} = \frac{1}{2}(pK_a - \log C)\right)$ sans vérifier que l'acide est effectivement faiblement dissocié ($\alpha < 5\,\%$) est une faute de raisonnement éliminatoire.