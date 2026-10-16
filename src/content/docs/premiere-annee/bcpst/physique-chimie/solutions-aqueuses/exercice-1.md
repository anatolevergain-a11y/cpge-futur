---
title: 'Exercice 1 : Équilibres acido-basiques'
description: 'Problème d entraînement type concours.'
---

# PROBLÈME GUIDÉ : Étude thermodynamique et pH-métrique d'un système polybasique

*Ce problème s'inspire des épreuves écrites des concours Mines-Ponts et Agro-Veto (filière BCPST). Il aborde la rigueur du raisonnement thermodynamique, l'utilisation des approximations légitimes et l'esprit critique indispensable face aux limites des modèles chimiques en solution aqueuse.*

---

## Énoncé

Les acides aminés et leurs dérivés jouent un rôle fondamental en biochimie. L'acide 3-aminopropanoïque, plus communément appelé $\beta$-alanine, est un constituant de peptides naturels importants (comme la carnosine). 

L'objectif de ce problème est de déterminer la composition d'une solution aqueuse de $\beta$-alanine à différentes concentrations, d'étudier son comportement acido-basique, puis d'analyser les limites du modèle thermodynamique utilisé.

### Données à $25\ \text{°C}$ :
* Produit ionique de l'eau : $K_e = 10^{-14,0}$
* La $\beta$-alanine est une molécule ampholyte (ou zwitterionique en solution) que l'on modélisera par un diacide faible fictif noté $AH_2^+$, dont les formes acido-basiques conjuguées sont $AH^\pm$ (forme neutre zwitterionique) et $A^-$ (forme basique).
* Les pKa associés sont :
  * $pK_{a1} = 3,6$ (couple $AH_2^+ / AH^\pm$)
  * $pK_{a2} = 10,2$ (couple $AH^\pm / A^-$)
* Masses molaires : $M(\beta\text{-alanine}) = 89,1\ \text{g}\cdot\text{mol}^{-1}$.

---

## Questions

### Partie I : Étude théorique et approximations

1. Écrire les équations des deux réactions acido-basiques successives de la $\beta$-alanine dans l'eau et exprimer les constantes d'acidité $K_{a1}$ et $K_{a2}$ correspondantes.
2. On dissout une masse $m = 0,89\ \text{g}$ de $\beta$-alanine dans de l'eau pure pour obtenir un volume $V = 100\ \text{mL}$ de solution (solution $S$). Calculer la concentration analytique $C$ de la solution en soluté apporté.
3. Écrire l'équation bilant réactionnelle de mise en solution de la $\beta$-alanine. Quelle est la forme prédominante de l'espèce dans la solution $S$ ? Justifier qualitativement sans calculs complexes.
4. En écrivant l'équation de conservation de la matière et l'équation de l'électroneutralité, établir l'expression exacte de la concentration en ions oxonium $[\text{H}_3\text{O}^+]$ dans la solution $S$.
5. En effectuant des approximations légitimes fondées sur les valeurs des constantes d'acidité et de $C$, simplifier l'expression précédente et calculer la valeur approchée du pH de la solution $S$. Vérifier a posteriori la valadité des approximations.

### Partie II : Titrage pH-métrique et analyse critique

On prélève un volume $V_0 = 20,0\ \text{mL}$ de la solution $S$ que l'on titre par une solution d'acide chlorhydrique $(\text{H}_3\text{O}^+ + \text{Cl}^-)$ de concentration $C_a = 0,10\ \text{mol}\cdot\text{L}^{-1}$.

6. Identifier la réaction support du titrage. Calculer sa constante d'équilibre $K$ et conclure quant à sa validité pour un titrage.
7. Déterminer le volume équivalent $V_{eq}$.
8. **Analyse critique des limites du modèle :** 
   * Lors de l'ajout d'acide fort, le pH mesuré expérimentalement s'écarte de la courbe théorique calculée avec les $pK_a$ thermodynamiques lorsque la force ionique de la solution augmente fortement. Expliquer qualitativement ce phénomène.
   * Quel autre facteur cinétique ou thermodynamique (souvent négligé dans ces modèles idéaux) pourrait intervenir si l'on étudiait des solutions extrêmement dilouées ou au contraire saturées ?

---

## Pistes et indications

* **Q3 :** Pensez à la position du pH isoélectrique d'un ampholyte par rapport aux deux $pK_a$.
* **Q4 & Q5 :** Pour un ampholyte de type $AH^\pm$, le pH se calcule souvent par la formule classique $\text{pH} \approx \frac{pK_{a1} + pK_{a2}}{2}$, à condition de vérifier que les réactions de dismutation (autoprotolyse croisée) sont les sources majoritaires de $\text{H}_3\text{O}^+$ et $\text{OH}^-$.
* **Q6 :** Exprimez la constante d'équilibre à partir de $K_{a1}$ et $K_e$.

---

## Corrigé pas à pas

### Partie I : Étude théorique et approximations

**1. Équations et constantes d'acidité :**
* 1er couple ($AH_2^+ / AH^\pm$) : 
  $$AH_2^+ + \text{H}_2\text{O} \rightleftharpoons AH^\pm + \text{H}_3\text{O}^+ \quad \text{avec} \quad K_{a1} = \frac{[AH^\pm][\text{H}_3\text{O}^+]}{[AH_2^+]}$$
* 2ème couple ($AH^\pm / A^-$) : 
  $$AH^\pm + \text{H}_2\text{O} \rightleftharpoons A^- + \text{H}_3\text{O}^+ \quad \text{avec} \quad K_{a2} = \frac{[A^-][\text{H}_3\text{O}^+]}{[AH^\pm]}$$

**2. Concentration analytique $C$ :**
$$C = \frac{n}{V} = \frac{m / M}{V} = \frac{0,89}{89,1 \times 0,100} \approx 0,10\ \text{mol}\cdot\text{L}^{-1}$$

**3. Espèce majoritaire :**
La mise en solution correspond à l'introduction de la forme zwitterionique $AH^\pm$. 
Puisque le pH d'une telle solution d'ampholyte est voisin de $\frac{pK_{a1} + pK_{a2}}{2} = \frac{3,6 + 10,2}{2} = 6,9$, et que ce pH est compris entre les deux $pK_a$, la forme prédominante est bien la forme ampholyte $AH^\pm$.

**4. Établissement de l'expression exacte de $[\text{H}_3\text{O}^+]$ :**
* Conservation de la matière : $C = [AH_2^+] + [AH^\pm] + [A^-]$
* Électroneutralité : $[\text{H}_3\text{O}^+] + [AH_2^+] = [\text{OH}^-] + [A^-]$

En exprimant $[AH_2^+]$ et $[A^-]$ en fonction de $[AH^\pm]$, $[\text{H}_3\text{O}^+]$, $K_{a1}$ et $K_{a2}$ :
$$[AH_2^+] = \frac{[AH^\pm][\text{H}_3\text{O}^+]}{K_{a1}} \quad \text{et} \quad [A^-] = \frac{K_{a2}[AH^\pm]}{[\text{H}_3\text{O}^+]}$$

L'équation d'électroneutralité devient :
$$[\text{H}_3\text{O}^+] + \frac{[AH^\pm][\text{H}_3\text{O}^+]}{K_{a1}} = [\text{OH}^-] + \frac{K_{a2}[AH^\pm]}{[\text{H}_3\text{O}^+]}$$
$$[AH^\pm] = \frac{[\text{H}_3\text{O}^+] - [\text{OH}^-]}{\frac{K_{a2}}{[\text{H}_3\text{O}^+]} - \frac{[\text{H}_3\text{O}^+]}{K_{a1}}}$$

En injectant dans la conservation de la matière, après factorisation, on obtient l'expression rigoureuse (classique pour un ampholyte).

**5. Approximations et calcul du pH :**
Puisque $C = 0,10\ \text{mol}\cdot\text{L}^{-1}$ est grand devant $K_e / C$ et que les $pK_a$ sont bien séparés ($\Delta pK_a = 6,6 > 4$), on peut utiliser la formule approchée des ampholites :
$$\text{pH} \approx \frac{pK_{a1} + pK_{a2}}{2} = \frac{3,6 + 10,2}{2} = 6,9$$
*Vérification des approximations :* 
* $[\text{H}_3\text{O}^+] = 10^{-6,9} \ll C$ et $[\text{OH}^-] = 10^{-7,1} \resss$ (négligeables devant $C$).
* L'approximation est donc **très largement validée**.

---

### Partie II : Titrage pH-métrique et analyse critique

**6. Réaction de titrage et constante :**
Le titrage de la forme basique $AH^\pm$ par l'acide fort $(\text{H}_3\text{O}^+ + \text{Cl}^-)$ a pour équation :
$$AH^\pm + \text{H}_3\text{O}^+ \rightleftharpoons AH_2^+ + \text{H}_2\text{O}$$
La constante associée est $K = \frac{[AH_2^+]}{[AH^\pm][\text{H}_3\text{O}^+]} = \frac{1}{K_{a1}} = 10^{3,6} \approx 4 \times 10^3$.
Conclusion: * $K > 10^3$, la réaction est quantitative, le titrage est tout à fait réalisable et rigoureusement exploitable.

**7. Volume équivalent :**
À l'équivalence, les moles d'acide versées égalent les moles de $\beta$-alanine initiales :
$$n(\text{H}_3\text{O}^+)_{\text{versé}} = n(\beta\text{-alanine})_0 \implies C_a \cdot V_{eq} = C \cdot V_0$$
$$V_{eq} = \frac{C \cdot V_0}{C_a} = \frac{0,10 \times 20,0}{0,10} = 20,0\ \text{mL}$$

**8. Analyse critique des limites du modèle :**
* **Effet de la force ionique :** Le modèle utilise les concentrations (ou activités égales à 1 dans l'idéalité) au lieu des **activités** ($a_i = \gamma_i \cdot C_i$). Lorsque l'on ajoute de l'acide chlorhydrique, la concentration en ions spectateurs ($\text{Cl}^-$, $\text{Na}^+$ éventuellement) augmente, ce qui élève la force ionique $I = \frac{1}{2}\sum C_i z_i^2$. Les coefficients d'activité $\gamma_i$ s'écartent de 1 (loi limite de Debye-Hückel), modifiant les constantes d'acidité apparentes (les $pK_a$ thermodynamiques "glissent"). Le pH réel diffère donc du pH calculé par le modèle idéal.
* **Limites fondamentales du modèle de solution aqueuse diluée :** 
  * Aux très fortes concentrations, les interactions électrostatiques à courte portée et la diminution de l'eau "libre" (solvatation des ions) rendent caduques les lois des équilibres chimiques basées sur les concentrations.
  * Le modèle suppose implicitement que les équilibres acido-basiques sont instantanés et que les réactions secondaires (comme la polymérisation ou la précipitation) sont absentes, ce qui doit toujours être validé par l'expérience.