---
title: 'Exercice 2 : Constantes d acidité et pH'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Étude physico-chimique d'un ampholyte et titration

*Ce problème s'inspire des épreuves de chimie des concours BCPST (Agro-Veto / G2E), mettant l'accent sur la rigueur du raisonnement, la manipulation des équilibres en solution aqueuse et l'esprit critique vis-à-vis des approximations.*

---

## Énoncé

On s'intéresse à l'acide oxalique $\text{H}_2\text{C}_2\text{O}_4$, un diacide faible présent dans de nombreuses plantes (comme l'oseille). Ses deux constantes d'acidité associées aux couples $\text{H}_2\text{C}_2\text{O}_4\text{(aq)} / \text{HC}_2\text{O}_4^-\text{(aq)}$ et $\text{HC}_2\text{O}_4^-\text{(aq)} / \text{C}_2\text{O}_4^{2-}\text{(aq)}$ sont notées respectivement $K_{a1}$ et $K_{a2}$.

L'objectif de ce problème est de déterminer théoriquement le pH de différentes solutions de dérivés oxaliques, puis de valider ces modèles par une étude critique.

**Données numériques à $25\ \text{°C}$ :**
*   $\text{p}K_{a1} = 1,2$
*   $\text{p}K_{a2} = 4,2$
*   Produit ionique de l'eau : $K_e = 10^{-14}$

---

## Questions

### Partie I : Étude d'une solution d'un monoacide faible
1. Écrire la réaction de mise en solution d'un acide faible $AH$ de concentration $C$ dans l'eau pure. Exprimer la constante d'équilibre associée en fonction de $K_a$.
2. Établir l'équation bilan traduisant l'électroneutralité de la solution.
3. En déduire, sous les approximations usuelles que l'on précisera et justifiera rigoureusement, l'expression du pH en fonction de $\text{p}K_a$ et de $C$.
4. Calculer le pH d'une solution d'acide oxalique $\text{H}_2\text{C}_2\text{O}_4$ à $C_1 = 1,0 \times 10^{-2}\ \text{mol}\cdot\text{L}^{-1}$, en considérant pour cette question que seule la première acidité intervient de manière prépondérante.

### Partie II : Cas d'un ampholyte (l'ion hydrogénooxalate)
5. On considère une solution de monohydrogénooxalate de sodium ($\text{Na}^+ + \text{HC}_2\text{O}_4^-$) de concentration $C_2 = 1,0 \times 10^{-2}\ \text{mol}\cdot\text{L}^{-1}$. 
   Écrire les deux réactions susceptibles de se produire dans l'eau impliquant l'ion $\text{HC}_2\text{O}_4^-$.
6. Établir l'expression littérale du pH d'une solution d'ampholyte en faisant l'approximation de la réaction prépondérante et en négligeant l'autoprotolyse de l'eau devant les autres sources d'ions oxonium et hydroxÿde.
7. Calculer la valeur numérique du pH de cette solution et discuter la validité des approximations.

---

## Pistes et méthodes

*   **Piste 1 (Approximations) :** Pour un acide faible, pensez à comparer l'acide initial et sa forme dissociée pour valider l'hypothèse de la faible dissociation ($\alpha \ll 1$).
*   **Piste 2 (Ampholyte) :** Pour l'ion $\text{HC}_2\text{O}_4^-$, écrivez la conservation de la matière, l'électroneutralité, et combinez les expressions des $K_a$ pour exprimer $[\text{H}_3\text{O}^+]$.
*   **Piste 3 (Limites du modèle) :** Soyez vigilants aux concentrations très diluées où l'autoprotolyse de l'eau ne peut plus être négligée, ainsi qu'aux solutions très concentrées où l'activité se différencie de la concentration molaire.

---

## Corrigé pas à pas

### Partie I : Étude d'une solution d'un monoacide faible

1. **Réaction et constante :**
   $$\text{AH}\text{(aq)} + \text{H}_2\text{O}\text{(l)} \rightleftharpoons \text{A}^-\text{(aq)} + \text{H}_3\text{O}^+\text{(aq)}$$
   La constante associée est la constante d'acidité $K_a = \frac{[\text{A}^-][\text{H}_3\text{O}^+]}{[\text{AH}]}$.

2. **Électroneutralité :**
   $$\sum z_i [X_i] = 0 \implies [\text{H}_3\text{O}^+] = [\text{A}^-] + [\text{HO}^-]$$

3. **Expression du pH :**
   *   *Approximation 1 (milieu acide) :* $[\text{H}_3\text{O}^+] \gg [\text{HO}^-]$, donc $[\text{H}_3\text{O}^+] \approx [\text{A}^-]$.
   *   *Approximation 2 (acide faible peu dissocié) :* $[\text{AH}] \approx C - [\text{H}_3\text{O}^+] \approx C$ (valide si pH < $\text{p}K_a - 1$).
   
   En injectant dans $K_a$ :
   $$K_a \approx \frac{[\text{H}_3\text{O}^+]^2}{C} \implies [\text{H}_3\text{O}^+] = \sqrt{K_a C}$$
   D'où :
   $$\text{pH} = \frac{1}{2} (\text{p}K_a - \log C)$$

4. **Application numérique :**
   Pour $\text{H}_2\text{C}_2\text{O}_4$ avec $C_1 = 1,0 \times 10^{-2}\ \text{mol}\cdot\text{L}^{-1}$ et $\text{p}K_{a1} = 1,2$ :
   $$\text{pH} = \frac{1}{2} (1,2 - (-2)) = \frac{3,2}{2} = 1,6$$
   *Vérification des approximations :* $[\text{H}_3\text{O}^+] = 10^{-1,6} \approx 0,025\ \text{mol}\cdot\text{L}^{-1}$. On remarque que $[\text{H}_3\text{O}^+]$ est supérieur à $C_1$, ce qui invalide l'approximation de la faible dissociation ($\alpha > 1$ mathématiquement absurde ici). L'acide oxalique est un diacide moyennement fort pour sa première acidité. Il faudrait résoudre une équation du second degré rigoureuse.

---

### Partie II : Cas d'un ampholyte

5. **Réactions impliquant l'ion $\text{HC}_2\text{O}_4^-$ :**
   *   Acide : $\text{HC}_2\text{O}_4^- + \text{H}_2\text{O} \rightleftharpoons \text{C}_2\text{O}_4^{2-} + \text{H}_3\text{O}^+$ (constante $K_{a2}$)
   *   Base : $\text{HC}_2\text{O}_4^- + \text{H}_2\text{O} \rightleftharpoons \text{H}_2\text{C}_2\text{O}_4 + \text{HO}^-$ (constante $K_b = \frac{K_e}{K_{a1}}$)

6. **Expression littérale du pH :**
   En combinant l'électroneutralité ($[\text{H}_3\text{O}^+] + [\text{Na}^+] = [\text{HC}_2\text{O}_4^-] + 2[\text{C}_2\text{O}_4^{2-}] + [\text{HO}^-]$ avec $[\text{Na}^+] = C_2$) et les expressions de $K_{a1}$ et $K_{a2}$, et en faisant l'hypothèse classique pour un ampholyte :
   $$[\text{H}_3\text{O}^+] = \sqrt{\frac{K_{a1} K_{a2} C_2 + K_{a1} K_e}{K_{a1} + C_2}} \approx \sqrt{K_{a1} K_{a2}}$$
   Ce qui donne :
   $$\text{pH} = \frac{1}{2} (\text{p}K_{a1} + \text{p}K_{a2})$$

7. **Application numérique et analyse critique :**
   $$\text{pH} = \frac{1}{2} (1,2 + 4,2) = 2,7$$

   *   **Analyse critique et limites du modèle :**
       *   L'expression montre que le pH d'une solution d'ampholyte est **indépendant de la concentration** $C_2$ au premier ordre.
       *   *Limites :* Si la solution est extrêmement diluée, le terme d'autoprotolyse de l'eau devient prépondérant (le pH tend vers 7). Si elle est très concentrée, les effets de force ionique modifient les activités des ions, rendant les $\text{p}K_a$ apparents et non constants. De plus, l'hypothèse $\text{p}K_{a2} - \text{p}K_{a1} > 2$ (ici $4,2 - 1,2 = 3$) est tout juste vérifiée, ce qui garantit de justesse l'indépendance des deux équilibres acido-basiques.