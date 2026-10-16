---
title: 'Optimisation au concours : SII PT/PT*'
description: 'Les questions incontournables aux concours, les erreurs à éviter et les rédactions modèles de jury.'
sidebar:
  badge:
    text: 'Méthode Concours'
    variant: 'caution'
---

# Guide Officiel du Président de Jury : Optimisation en Sciences Industrielles pour l'Ingénieur (Filière PT/PT*)

Mes chers candidats,

En tant que concepteur de sujets et président de jury pour les concours de la filière PT (Banque PT, ENSAM, X-ENS), je rédige ce guide pour lever le voile sur nos attentes de correction. En SII, la différence entre une note de 10/20 et une note de 18/20 ne réside pas dans le volume de calculs, mais dans la **rigueur de la modélisation**, la **maîtrise du vocabulaire normatif** et la **précision de la rédaction**.

Ce document décortique deux des questions les plus discriminantes des épreuves écrites : le dimensionnement en résistance des matériaux (RDM) sous sollicitations combinées et l'analyse de chaînes de cotes / tolérancement GPS.

---

## 🎯 Objectif du module & Exigences des Jurys

Les épreuves de SII en filière PT évaluent votre capacité à mener un raisonnement d'ingénieur de l'analyse structurelle jusqu'à la validation dimensionnelle et géométrique. 
* **Le correcteur n'est pas un devin :** Toute formule littérale doit être justifiée par son hypothèse d'application (ex: Navier-Bernoulli, matériaux homogènes, isotropes, élastiques linéaires).
* **L'application numérique (AN) est sanctionnée** si elle omet l'analyse dimensionnelle ou les unités ($[\text{Pa}]$, $[\text{N}]$, $[\text{mm}]$, etc.).

---

## 📌 Question Type 1 : Dimensionnement d'une pièce en RDM (sollicitations combinées : torsion, flexion, critère de Von Mises)

### Cadrage de la question type
*« En tout point de la section critique de l'arbre, identifier les sollicitations simples composant la sollicitation complexe. Exprimer le tenseur des contraintes, puis appliquer le critère de Von Mises pour déterminer le diamètre minimal $d$ de l'arbre garantissant un coefficient de sécurité $s$ par rapport à la limite d'élasticité $R_e$. »*

### 💡 Méthode canonique & Étapes de rédaction
1. **Bilan des actions mécaniques extérieures (AME) :** Isoler la pièce, appliquer le PFS (Principe Fondamental de la Statique) pour déterminer les torseurs de cohésion $\{\mathcal{T}_{\text{coh}}\}$ au centre de gravité de la section la plus sollicitée.
2. **Identification des contraintes élémentaires :**
   * Flexion pure (moment fléchissant $M_{fz}$) $\rightarrow$ Contrainte normale $\sigma_{xx} = \frac{M_{fz}}{I_{gz}} \cdot y$.
   * Torsion pure (moment de torsion $M_t$) $\rightarrow$ Contrainte tangentielle $\tau_{xy}$ ou $\tau_{xz}$ (formule de Bredt ou de Navier pour les sections circulaires $\tau = \frac{M_t}{I_o} \cdot r$).
3. **Construction du tenseur des contraintes :** Dans la base locale $(x, y, z)$, écrire la matrice $\Sigma(M)$ au point le plus défavorable de la périphérie de la section ($y = d/2$).
4. **Calcul de la contrainte équivalente de Von Mises ($\sigma_{\text{vm}}$) :** 
   $$\sigma_{\text{vm}} = \sqrt{\sigma_{xx}^3 + 3\tau^2}$$ (dans le cas simple d'une flexion combinée à la torsion).
5. **Condition de résistance :** $\sigma_{\text{vm}} \le \frac{R_e}{s}$, ce qui permet d'isoler l'inconnue géométrique (diamètre $d$).

### 📋 Exemple de sujet & Rédaction modèle type Concours

**Énoncé court :** Soit un arbre de transmission circulaire de diamètre $d$, soumis en sa section critique à un moment fléchissant $M_{fz} = 150 \text{ N}\cdot\text{m}$ et à un moment de torsion $M_t = 200 \text{ N}\cdot\text{m}$. Le matériau choisi a une limite d'élasticité $R_e = 300 \text{ MPa}$. On impose un coefficient de sécurité $s = 2$. Déterminer $d$.

**Rédaction modèle :**

* **1. Expression des contraintes maximales dans la section :**
  Pour une section circulaire de diamètre $d$, le moment quadratique est $I_{gz} = \frac{\pi d^4}{64}$ et le moment polaire est $I_o = \frac{\pi d^4}{32}$.
  La contrainte normale maximale due à la flexion s'exprime à la fibre externe ($y = \frac{d}{2}$) :
  $$\sigma_{xx,\max} = \frac{M_{fz}}{\frac{I_{gz}}{d/2}} = \frac{M_{fz}}{\frac{\pi d^3}{32}} = \frac{32 M_{fz}}{\pi d^3}$$
  
  La contrainte tangentielle maximale due à la torsion s'exprime à la périphérie ($r = \frac{d}{2}$) :
  $$\tau_{\max} = \frac{M_t}{\frac{I_o}{d/2}} = \frac{M_t}{\frac{\pi d^3}{16}} = \frac{16 M_t}{\pi d^3}$$

* **2. Application du critère de Von Mises :**
  Le tenseur des contraintes au point critique s'écrit sous la forme :
  $$\Sigma = \begin{pmatrix} \sigma_{xx,\max} & 0 & 0 \\ 0 & 0 & \tau_{\max} \\ 0 & \tau_{\max} & 0 \end{pmatrix}$$
  La contrainte équivalente de Von Mises est donnée par :
  $$\sigma_{\text{vm}} = \sqrt{\sigma_{xx,\max}^2 + 3\tau_{\max}^2}$$
  En injectant les expressions littérales :
  $$\sigma_{\text{vm}} = \sqrt{\left(\frac{32 M_{fz}}{\pi d^3}\right)^2 + 3\left(\frac{16 M_t}{\pi d^3}\right)^2} = \frac{16}{\pi d^3} \sqrt{4 M_{fz}^2 + 3 M_t^2}$$

* **3. Dimensionnement :**
  La condition de résistance s'écrit :
  $$\sigma_{\text{vm}} \le \frac{R_e}{s} \implies \frac{16}{\pi d^3} \sqrt{4 M_{fz}^2 + 3 M_t^2} \le \frac{R_e}{s}$$
  On isole le diamètre $d$ :
  $$d \ge \left( \frac{16 s}{\pi R_e} \sqrt{4 M_{fz}^2 + 3 M_t^2} \right)^{1/3}$$

* **4. Application numérique :**
  $$\sqrt{4 (150)^2 + 3 (200)^2} = \sqrt{4(22500) + 3(40000)} = \sqrt{90000 + 120000} = \sqrt{210000} \approx 458.26 \text{ N}\cdot\text{m}$$
  $$d \ge \left( \frac{16 \times 2}{\pi \times 300 \cdot 10^6} \times 458.26 \right)^{1/3}$$
  $$d \ge \left( \frac{32 \times 458.26}{3.14159 \times 300 \cdot 10^6} \right)^{1/3} = \left( 1.556 \cdot 10^{-5} \right)^{1/3} \approx 0.02495 \text{ m}$$
Conclusion: ** $d \ge 24.95 \text{ mm}$. On retiendra $d = 25 \text{ mm}$ (ou valeur normalisée supérieure).

### ⚠️ Les pièges majeurs soulignés dans les rapports de jury
* **Oubli du facteur 3** dans la formule de Von Mises appliquée à la cisaillement ($\tau$).
* **Confusion entre moment polaire $I_o$ et moment quadratique $I_{gz}$** lors du calcul de la torsion.
* **Homogénéisation des unités omise :** Utiliser des $[\text{N}]$ et des $[\text{mm}]$ sans convertir en $[\text{Pa}]$ ou $[\text{m}]$, ce qui fausse totalement l'application numérique finale.

---

## 📌 Question Type 2 : Analyse de chaîne de cotes et spécifications géométriques GPS

### Cadrage de la question type
*« À partir du dessin de définition fourni et de la gamme d'usinage, tracer le graphe des jeux et des cotes. Écrire la relation vectorielle ou algébrique liant la cote-condition aux cotes composantes. En déduire la cote moyenne et l'intervalle de tolérance (IT) de la cote condition (ou d'une cote fabrication). »*

### 💡 Méthode canonique & Étapes de rédaction
1. **Identification de la cote-condition ($J$) :** Repérer la exigence fonctionnelle (jeu, dépassement, entrefer) sur le dessin d'ensemble.
2. **Traçage du graphe des liaisons/cotes :** Identifier les surfaces d'appui et de contact. Tracer la chaîne de cotes de manière fermée en partant d'une extremité de la cote-condition pour arriver à l'autre.
3. **Écriture de l'équation vectorielle :** Projeter la chaîne sur l'axe de la cote-condition : 
   $$J = \sum C_i \text{ (sens positif)} - \sum C_j \text{ (sens négatif)}$$
4. **Calculs statistiques ou arithmétiques :**
   * *Valeur nominale :* $J_0 = \sum \text{Cotes nominales}_(+) - \sum \text{Cotes nominales}_{(-)}$
   * *Intervalle de tolérance (IT) :* $\text{IT}(J) = \sum \text{IT}_i$ (les intervalles s'ajoutent toujours, qu'ils soient de sens direct ou indirect).
5. **Interprétation GPS si requise :** Lier le tolérancement dimensionnel aux spécifications géométriques (ex: maximisation du fait de l'exigence de battement ou de localistion).

### 📋 Exemple de sujet & Rédaction modèle type Concours

**Énoncé court :** Soit un montage comprenant un carter (cote $A$), un roulement (cote $B$) et un couvercle (cote $C$). Le jeu axial fonctionnel est noté $J$. On donne : 
* $A = 50 \pm 0.2 \text{ mm}$
* $B = 20 \pm 0.1 \text{ mm}$
* $C = 30 \pm 0.15 \text{ mm}$
Établir l'expression littérale du jeu $J$, calculer sa valeur nominale ainsi que son intervalle de tolérance.

**Rédaction modèle :**

* **1. Établissement de la chaîne de cotes :**
  La cote condition est le jeu $J$. 
  D'après le tracé de la chaîne de cotes orientée de la surface d'appui du carter vers la butée du couvercle :
  * Sens direct (+) : Cote $A$
  * Sens indirect (-) : Cotes $B$ et $C$
  
  L'équation algébrique de la chaîne de cotes s'écrit :
  $$J = A - B - C$$

* **2. Calcul de la cote nominale (moyenne) :**
  $$J_{\text{nom}} = A_{\text{nom}} - B_{\text{nom}} - C_{\text{nom}}$$
  $$J_{\text{nom}} = 50 - 20 - 30 = 0 \text{ mm}$$

* **3. Calcul de l'intervalle de tolérance (IT) :**
  Propriété fondamentale : Les intervalles de tolérance s'additionnent toujours, indépendamment du sens algébrique dans la chaîne.
  $$\text{IT}(J) = \text{IT}(A) + \text{IT}(B) + \text{IT}(C)$$
  $$\text{IT}(J) = 0.2 + 0.1 + 0.15 = 0.45 \text{ mm}$$

* **4. Déduction des limites du jeu :**
  * $J_{\max} = J_{\text{nom}} + \frac{\text{IT}(J)}{2} = 0 + \frac{0.45}{2} = +0.225 \text{ mm}$
  * $J_{\min} = J_{\text{nom}} - \frac{\text{IT}(J)}{2} = 0 - \frac{0.45}{2} = -0.225 \text{ mm}$
  *(Note : Un jeu négatif signifierait un montage avec serrage, nécessitant une analyse complémentaire).*

### ⚠️ Les pièges majeurs soulignés dans les rapports de jury
* **Soustractions des IT :** Erreur fatale consistant à soustraire les intervalles de tolérance des cotes de sens indirect (ex: $\text{IT}(A) - \text{IT}(B)$). **Rappel : les tolérances se cumulent toujours pour aggraver le risque de non-conformité.**
* **Inversion des sens de projection** des vecteurs cotes lors de la rédaction de l'équation algébrique.
* **Oubli des normes GPS** : Confondre une tolérance dimensionnelle linéaire simple avec une spécification géométrique (cylindricité, coaxialité) mentionnée dans le cadre de référence du dessin de définition.

---
*Bon courage aux candidats de la filière PT. La rigueur paie toujours aux concours !*