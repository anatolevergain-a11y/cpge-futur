---
title: 'Cours : Optique et Électrocinétique'
description: 'Synthèse officielle du cours et démonstrations clés.'
---

# Fiche de Cours : Optique et Électrocinétique
Niveau: ** Première année (PCSI)  
**Matière :** Physique-Chimie  
Chapitre: ** Optique et Électrocinétique  

---

## Introduction et Objectifs

Ce chapitre fait le lien entre deux piliers de la physique de première année en CPGE : l'optique géométrique (propagation de la lumière, stigmatisme, lentilles) et l'électrocinétique (régimes transitoires et permanents, analyse fréquentielle). En PCSI, l'étude conjointe de ces domaines prépare notamment à la compréhension des systèmes de mesure, des filtres optoélectroniques et des méthodes de caractérisation.

---

## I. Rappels d'Électrocinétique : Régimes et Analyse Complexe

### 1. Composants idéaux et lois générales
En électrocinétique, les dipôles usuels sont caractérisés par leur relation courant-tension :
- **Résistance $R$** : $u(t) = R \, i(t)$
- **Condensateur $C$** : $i(t) = C \frac{\mathrm{d}u_C}{\mathrm{d}t}$
- **Bobine idéale $L$** : $u(t) = L \frac{\mathrm{d}i_L}{\mathrm{d}t}$

### 2. Étude des régimes transitoires (Ordre 1 et 2)
Pour un circuit RLC série soumis à un échelon de tension, l'équation différentielle portant sur la tension aux bornes du condensateur $u_C(t)$ s'écrit sous la forme canonique :

$$\frac{\mathrm{d}^2 u_C}{\mathrm{d}t^2} + \frac{\omega_0}{Q} \frac{\mathrm{d}u_C}{\mathrm{d}t} + \omega_0^2 u_C = E \omega_0^2$$

où :
- $\omega_0 = \frac{1}{\sqrt{LC}}$ est la **pulsation propre** ($\text{rad}\cdot\text{s}^{-1}$).
- $Q$ est le **facteur de qualité**, avec $Q = \frac{1}{R}\sqrt{\frac{L}{C}}$ pour un circuit série.

Selon la valeur de $Q$ (ou du coefficient d'amortissement $\xi = \frac{1}{2Q}$), on distingue :
- Le régime **pseudo-périodique** ($Q > 1/2$)
- Le régime **critique** ($Q = 1/2$)
- Le régime **apériodique** ($Q < 1/2$)

### 3. Régime sinusoïdal forcé et représentation complexe
En régime sinusoïdal permanent de pulsation $\omega$, on associe à chaque grandeur temporelle $s(t) = S_{\max} \cos(\omega t + \varphi)$ une amplitude complexe $\underline{s} = S_{\max} e^{j\varphi}$.

Les impédances complexes $\underline{Z}$ des dipôles fondamentaux sont :
- $\underline{Z}_R = R$
- $\underline{Z}_C = \frac{1}{j \mathcal{C} \omega} = - \frac{j}{C \omega}$
- $\underline{Z}_L = j L \omega$

---

## II. Optique Géométrique : Approximation et Lois de Snell-Descartes

### 1. Conditions de Gauss
L'optique géométrique est valide lorsque les dimensions des obstacles et des ouvertures traversés par la lumière sont très grandes devant la longueur d'onde $\lambda$ ($\text{a} \gg \lambda$). 

L'**approximation de Gauss** (ou des stigmatismes approchés) suppose en outre :
1. Des rayons lumineux peu inclinés par rapport à l'axe optique.
2. Des rayons peu éloignés de cet axe.

Dans ces conditions, on utilise les approximations usuelles : $\sin(\alpha) \approx \tan(\alpha) \approx \alpha$ et $\cos(\alpha) \approx 1$.

### 2. Lois de Snell-Descartes pour la réfraction
Soit un dioptre séparant deux milieux d'indices optiques respectifs $n_1$ et $n_2$ (avec $n = \frac{c}{v}$). Les angles d'incidence $\theta_1$ et de réfraction $\theta_2$ sont liés par :

$$n_1 \sin(\theta_1) = n_2 \sin(\theta_2)$$

*Phénomène limite :* Si $n_1 > n_2$, il existe un angle limite d'incidence $\theta_{\text{lim}} = \arcsin\left(\frac{n_2}{n_1}\right)$ au-delà duquel il y a **réflexion totale**.

---

## III. Systèmes Centrés et Lentilles Minces

### 1. Définitions et invariants optiques
Un système centré possède un axe de symétrie de révolution, l'axe optique. 
- Les foyers principaux objet $F$ et image $F'$ vérifient la relation de conjugaison avec origine au centre optique $O$ (pour une lentille mince) :

$$\frac{1}{\overline{OA'}} - \frac{1}{\overline{OA}} = \frac{1}{\overline{OF'}} = \mathcal{C}$$

où $\mathcal{C}$ est la **vergence** de la lentille, exprimée en dioptries ($\delta$ ou $\text{m}^{-1}$).

### 2. Formules de conjugaison fondamentales
- **Formule de Descartes (origine au centre $O$) :**
  $$\frac{1}{\overline{OA'}} - \frac{1}{\overline{OA}} = \frac{1}{f'}$$
  avec $f' = \overline{OF'}$.

- **Formule de Newton (origine aux foyers $F$ et $F'$) :**
  $$\overline{FA} \cdot \overline{F'A'} = -f^{\prime\,2}$$

### 3. Grandissement transversal
Le grandissement transversal $\gamma$ d'un système optique est défini par le rapport de la taille de l'image $\overline{A'B'}$ sur celle de l'objet $\overline{AB}$ (perpendiculaires à l'axe optique) :

$$\gamma = \frac{\overline{A'B'}}{\overline{AB}} = \frac{\overline{OA'}}{\overline{OA}}$$

---

## IV. Couplage Optique-Électrocinétique : Exemples et Applications

### 1. Détection optoélectronique (Photodiode)
Une photodiode fonctionnant en régime de photoconductivité ou de photovoltage convertit un flux lumineux incident (caractérisé par sa puissance optique $\Phi$) en un signal électrique.
- Dans le modèle linéaire idéal, le courant de photocurrent $I_{\text{ph}}$ est proportionnel au flux lumineux :
  $$I_{\text{ph}} = R_{\lambda} \, \Phi$$
  où $R_{\lambda}$ est la **responsivité** de la photodiode ($\text{A}\cdot\text{W}^{-1}$).

### 2. Filtrage associé aux capteurs
Le signal issu d'un capteur optique subit souvent un traitement analogique via un filtre électronique actif ou passif (par exemple, un filtre passe-bas du premier ordre pour éliminer le bruit haute fréquence). La fonction de transfert complexe $\underline{H}(j\omega) = \frac{\underline{s}_{\text{sortie}}}{\underline{s}_{\text{entrée}}}$ permet de caractériser l'atténuation et le déphasage du signal optoélectronique selon la modulation temporelle du flux lumineux.