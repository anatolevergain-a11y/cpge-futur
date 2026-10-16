---
title: 'Exercice 2 : Onduleurs et transformateurs'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Étude d'un système de conversion statique-statique (Onduleur - Transformateur)

**Filière :** PSI  
**Matière :** Physique-Chimie  
Chapitre: ** Conversion de puissance  
**Thème :** Onduleurs et transformateurs  

---

## I. Énoncé

Dans le cadre de la transition énergétique, les systèmes de conversion d'énergie par l'électronique de puissance jouent un rôle central. On s'intéresse dans ce problème à l'alimentation d'un récepteur monophasé à partir d'une source de tension continue (typiquement un parc de batteries ou des panneaux photovoltaïques) via un onduleur de tension monophasé en pont complet, suivi d'un transformateur réel destiné à adapter la tension et à assurer une isolation galvanique.

Le dispositif est modélisé de la manière suivante :
1. **Source continue :** délivre une tension continue parfaite $E = 400\text{ V}$.
2. **Onduleur en pont complet :** constitué de quatre interrupteurs parfaits (commandés à la fermeture et à l'ouverture) notés $K_1, K_2, K_3$ et $K_4$. L'onduleur est commandé par MLI (Modulation de Largeur d'Impulsion) bipolaire pour délivrer une tension alternative de valeur moyenne nulle et de fondamentale à la fréquence $f = 50\text{ Hz}$.
3. **Transformateur monophasé réel :** alimenté au primaire par la tension de sortie de l'onduleur. Le transformateur est supposé linéaire. Son rapport de transformation à vide est noté $m = \frac{N_2}{N_1} = 0{,}25$.
4. **Charge :** résistive pure de résistance $R = 10\text{ }\Omega$ placée au secondaire du transformateur.

---

## II. Questions

### Partie A : Étude de l'onduleur de tension
1. Expliquer brièvement le principe de fonctionnement d'un onduleur de tension en pont complet alimentant une charge inductive ou résistive. Préciser la structure des cellules de commutation (bi-stabilité en tension, réversibilité en courant).
2. On note $u(t)$ la tension de sortie de l'onduleur. Dans le cadre d'une commande par MLI sinusoïdale, donner l'allure temporelle de $u(t)$ sur une période $T = \frac{1}{f}$.
3. Exprimer la valeur efficace du fondamental de la tension $u(t)$, notée $U_{1,\text{eff}}$, en fonction de $E$ et du taux de modulation $m_a$ (avec $0 \le m_a \le 1$). On prendra $m_a = 0{,}8$. Calculer numériquement $U_{1,\text{eff}}$.

### Partie B : Modélisation et étude du transformateur réel
4. Rappeler le schéma équivalent du transformateur réel ramené au secondaire (modèle de Kapp). Définir les éléments de ce modèle (résistances et réactances de fuite).
5. Établir la relation vectorielle (ou complexe) entre la tension secondaire $U_2$, la tension primaire ramenée $m U_1$, et les chutes de tension dues aux impédances de fuite et de pertes Joule.
6. En négligeant les chutes de tension internes devant la tension nominale (approximation du transformateur parfait pour le calcul principal), exprimer la valeur efficace de la tension au secondaire $U_2$. Calculer sa valeur numérique.

### Partie C : Bilan de puissance et analyse critique
7. Calculer la puissance active $P_2$ consommée par la charge résistive au secondaire.
8. **Analyse critique :** Le modèle linéaire parfait utilisé néglige les pertes fer (hystéresis et courants de Foucault) dans le circuit magnétique du transformateur ainsi que les harmoniques de tension générés par l'onduleur. Discuter qualitativement et quantitativement (par un argument physique rigoureux) de l'impact de ces harmoniques de rang élevé sur les pertes par courants de Foucault dans le noyau du transformateur.

---

## III. Pistes et indications

* **Indication Q1 & Q2 :** Pensez aux états complémentaires des interrupteurs par diagonale ($K_1$ et $K_4$ fermés simultanément, puis $K_2$ et $K_3$).
* **Indication Q3 :** Pour un onduleur monophasé en pont en MLI sinusoïdale, l'amplitude du fondamental de la tension de sortie est liée à $E$ et $m_a$ par la relation $U_{1,\text{max}} = m_a E$.
* **Indication Q5 & Q6 :** Le modèle de Kapp permet d'écrire $\underline{U}_2 = m\underline{U}_1 - (\r_{s} + jX_s)\underline{I}_2$. Si le transformateur est supposé parfait pour un premier ordre, $\underline{U}_2 \approx m\underline{U}_1$.
* **Indication Q8 :** Les pertes par courants de Foucault sont proportionnelles au carré de la fréquence et au carré de l'amplitude du champ magnétique inducteur ($\propto (\omega B)^2$). L'onduleur génère des harmoniques à des fréquences bien supérieures à $50\text{ Hz}$.

---

## IV. Corrigé pas à pas

### Partie A : Étude de l'onduleur de tension
1. **Principe de l'onduleur :** L'onduleur convertit une source de tension continue en une source de tension alternative. Les interrupteurs fonctionnent par paires complémentaires (lorsque $K_1$ et $K_4$ conduisent, $u(t) = +E$ ; lorsque $K_2$ et $K_3$ conduisent, $u(t) = -E$). Les cellules de commutation doivent supporter la tension continue $E$ et laisser circuler le courant dans les deux sens (nécessité de diodes de roue libre en antipallallèle avec les interrupteurs commandés pour la réversibilité en courant).
2. **Allure de $u(t)$ :** $u(t)$ est un signal en créneaux alternés dont la largeur des impulsions varie sinusoïdalement au cours du temps (MLI).
3. **Valeur efficace du fondamental :** 
   L'amplitude du fondamental de la tension de sortie carrée modulée est donnée par :
   $$U_{1,\text{max}} = m_a E$$
   La valeur efficace du fondamental est donc :
   $$U_{1,\text{eff}} = \frac{m_a E}{\sqrt{2}}$$
   A.N. : $U_{1,\text{eff}} = \frac{0{,}8 \times 400}{\sqrt{2}} = \frac{320}{\sqrt{2}} \approx 226{,}3\text{ V}$.

### Partie B : Modélisation et étude du transformateur réel
4. **Modèle de Kapp :** Le schéma équivalent ramené au secondaire comprend une source de tension idéale $m\underline{U}_1$, en série avec la résistance ramenée du secondaire $R_s$ et la réactance de fuite ramenée $X_s = L_s \omega$.
5. **Relation complexe :**
   $$\underline{U}_2 = m\underline{U}_1 - (R_s + jX_s)\underline{I}_2$$
6. **Calcul de $U_2$ (approximation du transformateur parfait) :**
   En première approximation, on néglige la chute d'impédance interne :
   $$U_2 \approx m U_{1,\text{eff}}$$
   En considérant que le transformateur réagit principalement au fondamental de la tension de l'onduleur :
   $$U_2 \approx 0{,}25 \times 226{,}3 \approx 56{,}6\text{ V}$$

### Partie C : Bilan de puissance et analyse critique
7. **Puissance active $P_2$ :**
   La charge est purement résistive de valeur $R = 10\text{ }\Omega$ connectée au secondaire :
   $$P_2 = \frac{U_2^2}{R} = \frac{(56{,}6)^2}{10} \approx 320{,}4\text{ W}$$

8. **Analyse critique des limites du modèle :**
   * **Limites du modèle linéaire :** Le modèle de Kapp suppose un régime sinusoïdal permanent à la fréquence fondamentale ($f = 50\text{ Hz}$). Or, la tension de l'onduleur $u(t)$ est riche en harmoniques (fréquences $f_n = n \cdot f$ avec $n > 1$).
   * **Impact sur les pertes fer :** Les pertes par courants de Foucault dans le circuit magnétique du transformateur s'expriment par la relation de Pry-Pry ou la loi classique :
     $$P_{\text{Foucault}} = k \cdot f^2 \cdot B_{\text{max}}^2$$
     Pour un harmonique de rang $n$, la fréquence est $n \cdot f$ et l'amplitude du champ magnétique induit est atténuée mais non nulle (souvent en $\frac{1}{n}$). Par conséquent, les harmoniques de tension de rang élevé induisent des pertes par courants de Foucault considérablement accrues dans le noyau ferromagnétique, ce qui provoque un **échauffement anormal du transformateur** non prédit par le modèle linéaire fondamental.
   * **Conclusion critique :** L'utilisation d'un transformateur standard alimenté par un onduleur MLI nécessite un surdimensionnement ou l'ajout d'un filtre LC en sortie d'onduleur pour lisser le courant et la tension, garantissant ainsi le respect des limites thermiques du transformateur.