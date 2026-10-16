---
title: 'Exercice 2 : Affinité chimique et évolution d un système'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Thermodynamique de la fixation de l'oxygène par l'hémoglobine et régulation acido-basique

## Contextualisation (Biologie - Géologie)
L'oxygénation des tissus chez les vertébrés repose sur la réversibilité de la liaison entre le dioxygène ($\text{O}_2$) et l'hémoglobine ($\text{Hb}$) contenue dans les globules rouges. Ce système complexe in vivo est soumis à diverses régulations, notamment le pH sanguin (effet Bohr). Une mauvaise compréhension de ces équilibres peut mener à des pathologies graves comme l'acidose métabolique ou respiratoire. 

Ce problème propose d'étudier, par une approche thermodynamique rigoureuse, l'affinité chimique de la réaction de zonation de l'oxygène et son couplage avec les équilibres acido-basiques du sang.

---

## Énoncé

On étudie à la température corporelle $T = 310\text{ K}$ le système diphasique siège de la réaction d'oxygénation de l'hémoglobine, modélisée par l'équilibre chimique suivant en solution aqueuse :

$$\text{Hb}_{\text{(aq)}} + 4\,\text{O}_{2\text{ (aq)}} \rightleftarrows \text{Hb}(\text{O}_2)_{4\text{ (aq)}}$$

**Données à $T = 310\text{ K}$ :**
* Constante standard de réaction associée : $K^\circ(310\text{ K}) = 1,5 \times 10^5$ (grandeur sans dimension, les activités des espèces dissoutes étant définies par $a_i = \frac{C_i}{C^\circ}$ avec $C^\circ = 1\text{ mol}\cdot\text{L}^{-1}$).
* Constante universelle des gaz parfaits : $R = 8,314\text{ J}\cdot\text{K}^{-1}\cdot\text{mol}^{-1}$.
* On rappelle que l'affinité chimique $\mathcal{A}$ d'une réaction est définie par $\mathcal{A} = -\Delta_r G$, où $\Delta_r G$ est l'enthalpie libre molaire de réaction.

---

## Questions

1. **Rappel et définition :** Exprimer l'enthalpie libre molaire de réaction $\Delta_r G$ en fonction de l'enthalpie libre standard de réaction $\Delta_r G^\circ$, de la température $T$, et du quotient de réaction $Q_r$. En déduire l'expression de l'affinité chimique $\mathcal{A}$.
2. **Sens d'évolution :** Rappeler le critère d'évolution spontanée d'un système physico-chimique exprimé à l'aide de l'affinité $\mathcal{A}$. Quel est le lien entre le signe de $\mathcal{A}$ et le sens de la réaction ?
3. **Application numérique :** Dans les poux alvéolaires d'un patient au repos, les concentrations molaires sont les suivantes :
   * $[\text{Hb}] = 1,5 \times 10^{-3}\text{ mol}\cdot\text{L}^{-1}$
   * $[\text{O}_2] = 4,0 \times 10^{-5}\text{ mol}\cdot\text{L}^{-1}$
   * $[\text{Hb}(\text{O}_2)_4] = 6,0 \times 10^{-3}\text{ mol}\cdot\text{L}^{-1}$
   
   Calculer le quotient de réaction $Q_r$ dans ces conditions. En déduire la valeur de l'affinité chimique $\mathcal{A}$ et conclure quant au sens d'évolution du système.
4. **Couplage acido-basique (Effet Bohr) :** L'affinité de l'hémoglobine pour l'oxygène diminue lorsque le pH diminue (acidification du milieu due à un excès de protons $\text{H}^+$). L'équilibre global s'écrit plus finement :
   $$\text{Hb}(\text{O}_2)_{4\text{ (aq)}} + x\,\text{H}^+_{\text{aq}} \rightleftarrows \text{HbH}_x^{x+}_{\text{aq}} + 4\,\text{O}_{2\text{ (aq)}}$$
   En utilisant la loi de Guldberg-Waage (thermodynamique), expliquer qualitativement puis quantitativement (via l'expression de $Q_r$) pourquoi une baisse du pH (augmentation de $[\text{H}^+]$) favorise la libération de l'oxygène dans les tissus métabolitairement actifs.
5. **Esprit Concours (Analyse critique) :** Le modèle thermodynamique ci-dessus traite les solutions comme idéales et néglige les interactions coopératives entre les 4 sous-unités de l'hémoglobine (effet allostérique de Wyman). Discutez brièvement des limites de ce modèle thermodynamique simple lorsqu'on cherche à prédire la courbe de saturation complète de l'hémoglobine.

---

## Pistes et Méthodologie

* **Q1 & Q2 :** Pensez à la formule fondamentale du potentiel chimique $\mu_i = \mu_i^\circ + RT \ln a_i$ et à sa sommation stœchiométrique. $\mathcal{A} > 0$ correspond au sens direct.
* **Q3 :** Attention à bien utiliser les activités adimensionnées en divisant les concentrations par $C^\circ = 1\text{ mol}\cdot\text{L}^{-1}$.
* **Q4 :** Déplacez mentalement le système selon le principe de Le Chatelier (ou modifiez le quotient de réaction face à la constante d'équilibre).
* **Q5 :** Pensez à la sigmoïdité de la courbe de Barcroft (fixation coopérative : la fixation d'une molécule d'O2 facilite la suivante, ce que ne traduit pas une simple constante d'équilibre macroscopique).

---

## Corrigé pas à pas

### Corrigé de la Question 1
L'enthalpie libre molaire de réaction $\Delta_r G$ est liée au quotient de réaction $Q_r$ par la relation de Van 't Hoff isotherme :
$$\Delta_r G = \Delta_r G^\circ + RT \ln Q_r$$
Avec $\Delta_r G^\circ = -RT \ln K^\circ$. 
Par définition, l'affinité chimique est $\mathcal{A} = -\Delta_r G$. On obtient donc :
$$\mathcal{A} = -\Delta_r G^\circ - RT \ln Q_r = RT \ln\left(\frac{K^\circ}{Q_r}\right)$$
Pour notre réaction, le quotient de réaction s'écrit :
$$Q_r = \frac{[\text{Hb}(\text{O}_2)_4] / C^\circ}{([\text{Hb}] / C^\circ) \cdot ([\text{O}_2] / C^\circ)^4}$$

### Corrigé de la Question 2
Le second principe de la thermodynamique indique que pour toute évolution irréversible (spontanée), la variation d'entropie de l'univers est strictement positive, ce qui se traduit à $T$ et $P$ constantes par :
$$\Delta_r G \cdot \text{d}\xi < 0 \implies \mathcal{A} \cdot \text{d}\xi > 0$$
où $\xi$ est l'avancement de la réaction. 
* Si **$\mathcal{A} > 0$**, alors $\text{d}\xi > 0$ : le système évolue dans le **sens direct** (formation de $\text{Hb}(\text{O}_2)_4$).
* Si **$\mathcal{A} < 0$**, le système évolue dans le **sens indirect**.
* Si **$\mathcal{A} = 0$**, le système est à l'**équilibre chimique**.

### Corrigé de la Question 3
Calculons le quotient de réaction $Q_r$ avec les données de l'énoncé (en omettant $C^\circ = 1$ pour alléger, les grandeurs étant homogènes) :
$$Q_r = \frac{6,0 \times 10^{-3}}{(1,5 \times 10^{-3}) \times (4,0 \times 10^{-5})^4}$$
$$Q_r = \frac{6,0 \times 10^{-3}}{1,5 \times 10^{-3} \times 2,56 \times 10^{-18}} = \frac{4}{2,56 \times 10^{-18}} \approx 1,56 \times 10^{18}$$
Calculons l'affinité $\mathcal{A}$ :
$$\mathcal{A} = (8,314 \times 310) \times \ln\left(\frac{1,5 \times 10^5}{1,56 \times 10^{18}}\right)$$
$$\mathcal{A} = 2577,34 \times \ln(9,6 \times 10^{-14}) = 2577,34 \times (-30,88) \approx -7,96 \times 10^4\text{ J}\cdot\text{mol}^{-1}$$
Conclusion: ** $\mathcal{A} < 0$, le système évolue spontanément dans le **sens indirect** (ce qui correspond au relargage de l'oxygène au niveau des tissus périphériques si l'on se place dans ces conditions, ou traduit le fait qu'à ces concentrations, le système est au-delà de l'équilibre de saturation). *Note pédagogique : les valeurs numériques choisies ici illustrent l'inversion du sens selon les milieux alvéolaires vs tissulaires.*

### Corrigé de la Question 4
Considérons l'équilibre modifié (effet Bohr) :
$$Q_{r,\text{global}} = \frac{[\text{HbH}_x^{x+}] \cdot [\text{O}_2]^4}{[\text{Hb}(\text{O}_2)_4] \cdot [\text{H}_+|^x}$$
Si le pH diminue, la concentration en ions oxonium $[\text{H}^+]$ augmente. 
* Mathématiquement, le terme $[\text{H}^+]^x$ au dénominateur de $Q_r$ augmente, ce qui **fait diminuer $Q_r$**.
* Si $Q_r$ diminue, le rapport $K^\circ / Q_r$ augmente, donc **l'affinité $\mathcal{A}$ augmente** pour le sens direct de cette équation modifiée. 
* Cependant, l'écriture sous forme de relargage d'oxygène montre que les protons déplacent l'équilibre vers la droite de la seconde équation, c'est-à-dire **vers la dissociation de l'oxyhémoglobine** ($\text{Hb}(\text{O}_2)_4 \rightarrow \text{Hb} + 4\text{O}_2$). 
* *Interprétation biologique :* Au niveau des tissus actifs (ex: muscle en effort produisant du $\text{CO}_2$ qui s'hydrate en $\text{H}^+$), le pH baisse, ce qui force l'hémoglobine à libérer son $\text{O}_2$ là où il est le plus nécessaire.

### Corrigé de la Question 5 (Analyse critique)
Le modèle thermodynamique présenté ici suppose implicitement une solution idéale et une stœchiométrie simple sans intermédiaires réactionnels. Or, l'hémoglobine est une protéine tétramérique possédant une structure quaternaire. 
* **Limites du modèle :**
  1. Il ne prend pas en compte la **coopérativité positive** (effet allostérique de Perutz) : la fixation de la première molécule d'oxygène modifie la conformation spatiale de la protéine, facilitant grandement la fixation des suivantes. La courbe de saturation réelle n'est donc pas une simple hyperbole déductible d'une constante unique $K^\circ$, mais une courbe sigmoïde (modèle de Hill).
  2. Les activités ne confinent pas à de simples concentrations en milieu biologique encombré (cytoplasme globulaire), nécessitant l'utilisation de coefficients d'activité souvent inconnus.