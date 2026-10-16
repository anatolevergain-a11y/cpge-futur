---
title: 'Exercice 2 : Dosages potentiométriques et conductimétriques'
description: 'Problème d entraînement type concours pour PCSI.'
---

### 🌐 Énoncé du problème / Étude de cas

Dans le cadre du contrôle de qualité d'un bain de trempe utilisé en industrie métallurgique, on s'intéresse à une solution aqueuse S contenant un mélange d'acide chlorhydrique ($\text{HCl}$) et d'acide éthanoïque ($\text{CH}_3\text{COOH}$). Ce bain sert à décaper les surfaces métalliques avant traitement. Un suivi rigoureux de la concentration en acidité libre est crucial pour éviter la corrosion excessive du métal ou, à l'inverse, un traitement inefficace.

L'objectif de ce problème est de concevoir et d'analyser un double dosage (conductimétrique et potentiométrique) d'un échantillon de ce bain par une solution de soude ($\text{Na}^+_{(aq)} + \text{HO}^-_{(aq)}$) de concentration molaire $C_b = 1,00 \times 10^{-1} \, \text{mol}\cdot\text{L}^{-1}$.

Données à $25 \, ^\circ\text{C}$ :
* Produit ionique de l'eau : $K_e = 10^{-14,0}$
* Constante d'acidité du couple $\text{CH}_3\text{COOH}/\text{CH}_3\text{COO}^-$ : $pK_a = 4,8$
* Conductivités molaires ioniques $\lambda_i$ en $\text{S}\cdot\text{m}^2\cdot\text{mol}^{-1}$ :
  * $\lambda(\text{H}^+) = 35,0 \times 10^{-3}$
  * $\lambda(\text{HO}^-) = 19,9 \times 10^{-3}$
  * $\lambda(\text{Na}^+) = 5,0 \times 10^{-3}$
  * $\lambda(\text{Cl}^-) = 7,6 \times 10^{-3}$
  * $\lambda(\text{CH}_3\text{COO}^-) = 4,1 \times 10^{-3}$

---

### ❓ Questions progressives

#### I. Étude préliminaire et modélisation thermodynamique
1. Écrire les équations des réactions chimiques susceptibles de se produire lors de l'introduction de $\text{HCl}$ et $\text{CH}_3\text{COOH}$ dans l'eau. Justifier le caractère fort ou faible de ces acides.
2. On prélève un volume $V_0 = 20,0 \, \text{mL}$ de la solution S que l'on dilue pour obtenir un volume $V = 100,0 \, \text{mL}$ de solution $S'$. Écrire l'équation de la réaction support du dosage de $S'$ par la solution de soude. Calculer sa constante d'équilibre $K^\circ$. Que peut-on en conclure quant à la totacité de la réaction ?

#### II. Dosage conductimétrique
3. On réalise le suivi conductimétrique de l'addition de la solution de soude de concentration $C_b$ dans un bécher contenant $V_{S'} = 50,0 \, \text{mL}$ de la solution $S'$.
   * 3.1. Exprimer qualitativement l'évolution de la conductivité $\sigma$ de la solution au cours du premier équivalent (neutralisation de l'acide fort), en expliquant le rôle des ions $\text{H}^+$ et $\text{Na}^+$.
   * 3.2. Même question pour le deuxième équivalent (neutralisation de l'acide faible).
4. **Analyse critique :** Dans la pratique industrielle, pourquoi privilégie-t-on souvent la conductimétrie pour ce type de mélange par rapport à un indicateur coloré classique (comme la phénolphtaléine) ? Discutez des limites de la modélisation linéaire de la conductivité $\sigma = \sum_i \lambda_i [X_i]$ lorsque le volume versé augmente fortement.

#### III. Dosage potentiométrique
5. On réalise un second dosage potentiométrique en plongeant une électrode de pH dans un nouveau prélèvement de $V_0 = 20,0 \, \text{mL}$ de la solution S (sans dilution préalable, complété par de l'eau distillée pour immerger l'électrode). 
   * 5.1. Allure de la courbe : combien de sauts de pH anticipe-t-on ? Justifier.
   * 5.2. Le premier saut de pH est difficilement exploitable avec précision sur la courbe expérimentale $pH = f(V_b)$. Pourquoi ? 
   * 5.3. Proposer une méthode graphique ou mathématique (dérivée) pour exploiter rigoureusement les points d'équivalence.

---

### 💡 Pistes & Indications

* **Q1 & Q2 :** Pensez à relier la constante $K^\circ$ au produit ionique $K_e$ et à la constante d'acidité $K_a$. Une valeur de $K^\circ > 10^4$ valide l'hypothèse d'une réaction quantitative.
* **Q3 :** La conductivité dépend de la concentration et de la mobilité des ions. L'ion oxonium $\text{H}^+$ a une mobilité exceptionnellement élevée (mécanisme de Grotthuss). Sa disparition s'accompagne d'une chute de conductivité.
* **Q4 :** Pensez à l'effet de dilution et à la variation de force ionique qui modifie les coefficients d'activité (loi de Debye-Hückel non strictement respectée si la concentration augmente).
* **Q5 :** Pour un acide fort et un acide faible mélangés, le pH initial est imposé principalement par l'acide fort si les concentrations sont du même ordre de grandeur. Le premier saut (acide fort) est gommé si le $\Delta pK$ ou les concentrations relatives ne sont pas favorables.

---

### 📋 Corrigé détaillé et analyse des résultats

#### I. Étude préliminaire et modélisation thermodynamique
1. **Nature des espèces :**
   * Le chlorure d'hydrogène $\text{HCl}$ réagit totalement avec l'eau : $\text{HCl}_{(g)} + \text{H}_2\text{O}_{(l)} \rightarrow \text{H}_3\text{O}^+_{(aq)} + \text{Cl}^-_{(aq)}$. C'est un **acide fort**.
   * L'acide éthanoïque $\text{CH}_3\text{COOH}$ réagit partiellement : $\text{CH}_3\text{COOH}_{(aq)} + \text{H}_2\text{O}_{(l)} \rightleftharpoons \text{CH}_3\text{COO}^-_{(aq)} + \text{H}_3\text{O}^+_{(aq)}$. C'est un **acide faible** ($pK_a = 4,8$).

2. **Réaction de dosage :**
   La base forte $\text{HO}^-$ réagit successivement (ou simultanément de façon quasi-totale) avec les deux acides présents. La réaction globale de neutralisation s'écrit :
   $\text{H}_3\text{O}^+_{(aq)} + \text{HO}^-_{(aq)} \rightarrow 2\text{H}_2\text{O}_{(l)}$ (pour l'acide chlorhydrique)
   Et pour l'acide éthanoïque : $\text{CH}_3\text{COOH}_{(aq)} + \text{HO}^-_{(aq)} \rightarrow \text{CH}_3\text{COO}^-_{(aq)} + \text{H}_2\text{O}_{(l)}$
   
   La constante d'équilibre pour la neutralisation de l'acide faible est $K^\circ = \frac{1}{K_a} = \frac{[CH_3COO^-]}{[CH_3COOH][HO^-]} = \frac{K_e}{K_a}$.
   Application numérique : $\log(K^\circ) = 14,0 - 4,8 = 9,2 \implies K^\circ \approx 1,58 \times 10^9$.
   Puisque $K^\circ \gg 10^4$, les réactions de dosage sont **totales et quantitatives**, ce qui valide l'utilisation de ces réactions comme supports de titrage.

---

#### II. Dosage conductimétrique
3. **Évolution de la conductivité $\sigma$ :**
   * **3.1. Premier équivalent ($V_b < V_{E1}$) :** On ajoute $\text{Na}^+$ et $\text{HO}^-$. Les ions $\text{HO}^-$ consomment les ions $\text{H}^+$ selon une réaction rapide. Les ions $\text{H}^$ (très conducteurs, $\lambda_{\text{H}^+} \approx 35 \text{ mS}\cdot\text{m}^2\cdot\text{mol}^{-1}$) sont remplacés par des ions $\text{Na}^+$ (peu conducteurs, $\lambda_{\text{Na}^+} \approx 5 \text{ mS}\cdot\text{m}^2\cdot\text{mol}^{-1}$). **La conductivité diminue** fortement.
   * **3.2. Deuxième équivalent ($V_{E1} < V_b < V_{E2}$) :** Les ions $\text{HO}^-$ réagissent cette fois avec l'acide faible $\text{CH}_3\text{COOH}$ pour donner $\text{CH}_3\text{COO}^-$. On ajoute des ions $\text{Na}^+$ et on crée des ions $\text{CH}_3\text{COO}^-$. Les deux espèces ont des conductivités molaires faibles. **La conductivité augmente** modérément. Au-delà de $V_{E2}$, l'ajout d'ions $\text{Na}^+$ et $\text{HO}^-$ (excès de soude) provoque une augmentation plus rapide de $\sigma$.

4. **Analyse critique :**
   * *Avantage de la conductimétrie :* Elle s'affranchit des problèmes de choix d'indicateur coloré, souvent délicat dans les mélanges à plusieurs points d'équivalence où les zones de virements se chevauchent.
   * *Limites du modèle :* L'expression $\sigma = \sum \lambda_i [X_i]$ suppose des solutions infiniment diluées $(\lambda_i = \lambda_i^\circ)$. Or, lors d'un titrage, le volume total $V_{S'} + V_b$ augmente (effet de dilution non négligeable qu'il faut corriger par le facteur $\frac{V_{S'}+V_b}{V_{S'}}$) et la force ionique varie, modifiant les coefficients d'activité et les mobilités ioniques. Les ruptures de pente expérimentales ne sont donc pas des droites parfaites, mais présentent des arrondis au voisinage des équivalences.

---

#### III. Dosage potentiométrique
5. **Courbe de pH :**
   * **5.1. Sauts de pH :** On anticipe **deux sauts de pH** si les forces des acides sont suffisamment distinctes. Le premier correspond à l'équivalence de l'acide fort, le second à celle de l'acide faible.
   * **5.2. Problème du premier saut :** Si la concentration en acide fort est faible devant celle de l'acide faible, ou si le volume est faible, le premier saut peut être imperceptible ou noyé dans la variation initiale du pH, car le tamponnage par l'acide éthanoïque et ses dérivés atténue la variation de pH.
   * **5.3. Exploitation rigoureuse :** On utilise la méthode des tangentes parallèles ou, de manière plus précise informatiquement, la **dérivée $\frac{dpH}{dV_b}$** dont les maxima correspondent aux volumes équivalents $V_{E1}$ et $V_{E2}$.