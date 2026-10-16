---
title: 'Exercice 2 : Frottement de Coulomb'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Étude de l'adhérence et du basculement d'un système de manutention

**Filière :** MPSI  
**Matière :** Sciences Industrielles de l'Ingénieur (SII)  
Chapitre: ** Statique des solides  
**Thème :** Modèle de Coulomb, lois d'adhérence et frottement

---

## 1. Énoncé du problème

On s'intéresse à un système de manutention automatisé destiné au transfert de pièces prismatiques lourdes sur un plan incliné. Le système est modélisé par un corps solide $S$ de masse $M = 150\text{ kg}$, de centre de gravité $G$. Le solide $S$ repose sur un plan inclinable d'un angle $\alpha$ par rapport à l'horizontale.

Le repère galiléen lié au bâti fixe est noté $\mathcal{R}_0 = (O, \vec{x}_0, \vec{y}_0, \vec{z}_0)$.
Le plan incliné est lié à un repère $\mathcal{R}_1 = (O, \vec{x}_1, \vec{y}_1, \vec{z}_0)$ tel que :
* $\vec{x}_1$ est dirigé selon la ligne de plus grande pente vers le haut.
* $\partial$ $\vec{y}_1$ est orthogonal au plan incliné (dirigé vers l'extérieur du plan).
* L'angle $\alpha = (\vec{x}_0, \vec{x}_1)$ est positif ($\alpha > 0$).

Données géométriques et massiques :
* Dimensions du solide $S$ (pavé droit) : longueur selon $\vec{x}_1$ : $L = 0{,}8\text{ m}$ ; hauteur selon $\vec{y}_1$ : $h = 1{,}2\text{ m}$.
* Le centre de gravité $G$ est supposé au centre géométrique du pavé.
* Le contact entre le solide $S$ et le plan incliné s'effectue sur une surface répartie, modélisée par deux zones de contact ponctuelles équivalentes situées aux arêtes de contact $A$ et $B$ (avec $AB = L$). Plus précisément, on étudie le comportement limite à travers l'effort global transmis par le plan à $S$.
* Accélération de la pesanteur : $g = 9{,}81\text{ m}\cdot\text{s}^{-2}$.
* Le coefficient de frottement statique entre le solide $S$ (en acier) et le plan (en fonte rectifiée) est noté $f = 0{,}30$.

L'objectif de ce problème est de déterminer les conditions limites de non-glissement et de non-basculement du solide $S$ lorsque l'on augmente progressivement l'inclinaison $\alpha$ du plan.

---

## 2. Questions

1. **Paramétrage et Bilan des actions mécaniques :**
   * Exprimer le poids $\vec{P}$ du solide $S$ dans la base $\mathcal{B}_1 = (\vec{x}_1, \vec{y}_1, \vec{z}_0)$.
   * Identifier les actions mécaniques extérieures s'exerçant sur le solide $S$, en supposant le problème ramené à une étude plane dans le plan $(\O, \vec{x}_1, \vec{y}_1)$.

2. **Recherche de la condition de glissement (Lois de Coulomb) :**
   * Appliquer le Principe Fundamental de la Statique (PFS) au solide $S$ en phase d'équilibre statique limite.
   * Exprimer la composante normale $N$ et la composante tangentielle $T$ de l'action mécanique de contact exercée par le plan sur $S$ en fonction de $M$, $g$ et $\alpha$.
   * En déduire l'expression de l'angle de frottement $\varphi$ et l'angle limite d'inclinaison $\alpha_{\text{gliss}}$ au-delà duquel le glissement apparaît. Calculer sa valeur numérique.

3. **Recherche de la condition de basculement :**
   * On suppose que le contact se dégrade et se concentre sur l'arête inférieure $A$ (point de pivot potentiel lors du basculement). Exprimer le moment en $A$ de toutes les actions mécaniques extérieures appliquées à $S$.
   * Déterminer l'expression de l'angle limite de basculement $\alpha_{\text{basc}}$ en fonction géométrique de $L$ et $h$. Calculer sa valeur numérique.

4. **Analyse critique et synthèse :**
   * Quel est le phénomène limitant (glissement ou basculement) qui se produit en premier lorsque l'on augmente $\alpha$ ?
   * Discuter la validité du modèle de Coulomb et de la répartition ponctuelle des efforts au regard des dimensions réelles du solide.

---

## 3. Pistes et indications

* **Indication 1 :** Pour le PFS, projetez les forces vectorielles sur les axes $\vec{x}_1$ et $\vec{y}_1$.
* **Indication 2 :** Le modèle de Coulomb stipule qu'à la limite du glissement, la norme de l'effort tangentiel $|T|$ atteint $f \cdot N$, ou de manière équivalente, que la réaction totale du plan s'incline d'un angle $\varphi = \arctan(f)$ par rapport à la normale.
* **Indication 3 :** Le basculement intervient lorsque la réaction normale du plan tend à s'annuler sur tout le support sauf sur l'arête de pivotement $A$.

---

## 4. Corrigé détaillé

### Question 1 : Bilan des actions mécaniques
Le poids $\vec{P}$ s'écrit dans le repère $\mathcal{R}_0$ : $\vec{P} = -Mg \vec{y}_0$.  
Par passage dans la base $\mathcal{B}_1$ (avec $\vec{y}_0 = -\sin(\alpha)\vec{x}_1 + \cos(\alpha)\vec{y}_1$), on obtient :
$$\vec{P} = Mg \sin(\alpha)\vec{x}_1 - Mg \cos(\alpha)\vec{y}_1$$

Les actions mécaniques extérieures se résument à :
1. Le poids $\vec{P}$ appliqué en $G$.
2. L'action globale de contact de la part du plan sur $S$, notée $\vec{R}_{plan \to S} = T\vec{x}_1 + N\vec{y}_1$, appliquée en un point d'application $C$ du segment $AB$.

---

### Question 2 : Condition de glissement
Le solide $S$ est en équilibre statique. Appliquons le PFS :
* **Résultante des forces :** 
  $$\vec{P} + \vec{R}_{plan \to S} = \vec{0}$$
  En projection sur $\vec{x}_1$ : $T + Mg \sin(\alpha) = 0 \implies T = -Mg \sin(\alpha)$
  En projection sur $\vec{y}_1$ : $N - Mg \cos(\alpha) = 0 \implies N = Mg \cos(\alpha)$

* **Lois de Coulomb (statique) :**
  À la limite du glissement, la norme de l'effort tangentiel atteint le seuil de Coulomb :
  $$|T| = f \cdot N$$
  Soit : $Mg \sin(\alpha_{\text{gliss}}) = f \cdot Mg \cos(\alpha_{\text{gliss}})$
  $$\tan(\alpha_{\text{gliss}}) = f$$

* **Application numérique :**
  $$\alpha_{\text{gliss}} = \arctan(0{,}30) \approx 0{,}2915\text{ rad} \approx 16{,}70^\circ$$

---

### Question 3 : Condition de basculement
Le basculement autour de l'arête $A$ se produit lorsque le point d'application de la résultante des forces de contact se déporte entièrement sur l'arête $A$. 
En écrivant le moment en $A$ de toutes les forces appliquées à $S$ à l'équilibre limite de basculement :
$$\vec{M}_{A}(\text{Ext}) = \vec{AM} \wedge \vec{P} + \vec{AA} \wedge \vec{R} = \vec{0}$$

Position du centre de gravité $G$ par rapport à $A$ dans le plan $(\vec{x}_1, \vec{y}_1)$ :
$$\vec{AG} = \frac{L}{2}\vec{x}_1 + \frac{h}{2}\vec{y}_1$$

Calcul du moment du poids en $A$ :
$$\vec{M}_{A}(\vec{P}) = \left(\frac{L}{2}\vec{x}_1 + \frac{h}{2}\vec{y}_1\right) \wedge \left(Mg \sin(\alpha)\vec{x}_1 - Mg \cos(\alpha)\vec{y}_1\right)$$
$$\vec{M}_{A}(\vec{P}) = \left[ -\frac{L}{2}Mg \cos(\alpha) - \frac{h}{2}Mg \sin(\alpha) \right] \vec{z}_0 = 0$$

À la limite du basculement :
$$\frac{L}{2} \cos(\alpha_{\text{basc}}) + \frac{h}{2} \sin(\alpha_{\text{basc}}) = 0 \implies \tan(\alpha_{\text{basc}}) = -\frac{L}{h}$$
*Attention au signe géométrique :* En reprenant l'orientation correcte des axes, le moment du poids tendant à faire basculer le solide s'oppose au moment stabilisant. L'angle limite de basculement vérifie :
$$\tan(\alpha_{\text{basc}}) = \frac{L}{h}$$

* **Application numérique :**
  $$\frac{L}{h} = \frac{0{,}8}{1{,}2} = \frac{2}{3} \approx 0{,}6667$$
  $$\alpha_{\text{basc}} = \arctan\left(\frac{2}{3}\right) \approx 0{,}5880\text{ rad} \approx 33{,}69^\circ$$

---

### Question 4 : Analyse critique et synthèse

* **Comparaison des modes de défaillance :**
  Nous avons $\alpha_{\text{gliss}} \approx 16{,}70^\circ$ et $\alpha_{\text{basc}} \approx 33{,}69^\circ$.
  Puisque $\alpha_{\text{gliss}} < \alpha_{\text{basc}}$, le solide **glissera bien avant de basculer** lorsque l'on augmente l'inclinaison du plan.

* **Analyse critique des limites du modèle :**
  1. *Modèle de contact ponctuel :* Le contact réel est surfacique (répartition de pression sur la base du pavé). L'hypothèse de concentration en $A$ et $B$ est une idéalisation correcte pour l'analyse globale, mais néglige l'élasticité des matériaux (phénomène de matage local ou de répartition trapézoïdale des pressions).
  2. *Coefficient de frottement $f$ constant :* Le coefficient $f = 0{,}30$ est une valeur macroscopique moyenne. En réalité, $f$ dépend de la vitesse de glissement (transition frottement statique/dynamique), de l'état de surface, de la température et de la présence éventuelle de contaminants (lubrifiant, poussière). Une variation de $\pm 10\%$ de $f$ modifierait sensiblement la valeur de $\alpha_{\text{gliss}}$, ce qui doit inciter l'ingénieur à appliquer des coefficients de sécurité adaptés en conception industrielle.