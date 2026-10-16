---
title: 'Cours : Physique quantique et Électromagnétisme'
description: 'Synthèse officielle du cours et démonstrations clés.'
---

# Fiche de Cours : Physique quantique et Électromagnétisme
Niveau: ** Mathématiques, Physique et Informatique (MPI) - 2ème année  
**Matière :** Physique-Chimie  

---

## Introduction et motivations
Ce chapitre fait la jonction entre l'électromagnétisme macoroscopique (équations de Maxwell) et la description microscopique quantique. Il s'agit d'étudier le comportement d'une particule chargée soumise à un champ électromagnétique dans le cadre de la mécanique quantique non relativiste (équation de Schrödinger).

---

## 1. Rappels d'électromagnétisme et potentiels

Dans un référentiel galiléen, le champ électrique $\vec{E}$ et le champ magnétique $\vec{B}$ dérivent de potentiels scalaire $V$ et vecteur $\vec{A}$ par les relations de jauge :
$$\vec{B} = \vec{\text{rot}}\,\vec{A}$$
$$\vec{E} = -\vec{\text{grad}}\,V - \frac{\partial \vec{A}}{\partial t}$$

Ces grandeurs sont indissociables en physique quantique, comme le met en évidence l'effet Aharonov-Bohm.

---

## 2. Hamiltonien d'une particule chargée en champ électromagnétique

### 2.1. Approche classique (Lagrangienne / Hamiltonienne)
Pour une particule de masse $m$ et de charge $q$ (avec $q = -e$ pour l'électron), la fonction de Lagrange s'écrit :
$$L(\vec{r}, \dot{\vec{r}}, t) = \frac{1}{2}m\dot{\vec{r}}^{\,2} - qV(\vec{r}, t) + q\dot{\vec{r}} \cdot \vec{A}(\vec{r}, t)$$

Le moment canonique $\vec{p}$ associé à la position $\vec{r}$ est défini par :
$$\vec{p} = \frac{\partial L}{\partial \dot{\vec{r}}} = m\dot{\vec{r}} + q\vec{A}$$

On en déduit la vitesse :
$$\dot{\vec{r}} = \frac{\vec{p} - q\vec{A}}{m}$$

L'hamiltonien $H = \vec{p} \cdot \dot{\vec{r}} - L$ s'exprime alors en fonction du moment canonique $\vec{p}$ :
$$H(\vec{r}, \vec{p}, t) = \frac{1}{2m} \left( \vec{p} - q\vec{A}(\vec{r}, t) \right)^2 + qV(\vec{r}, t)$$

### 2.2. Passage à la mécanique quantique (Principe de correspondance)
Par quantification canonique, les observables position $\hat{\vec{r}}$ et moment canonique $\hat{\vec{p}}$ vérifient les relations de commutation canonique :
$$[\hat{r}_i, \hat{p}_j] = i\hbar \delta_{ij} \hat{I}$$

Dans la représentation position, l'opérateur moment canonique est $\hat{\vec{p}} = -i\hbar \vec{\text{grad}}$. L'hamiltonien quantique de la particule est l'opérateur :
$$\hat{H} = \frac{1}{2m} \left( -i\hbar \vec{\text{grad}} - q\vec{A}(\hat{\vec{r}}, t) \right)^2 + qV(\hat{\vec{r}}, t)$$

---

## 3. Équation de Schrödinger en présence de champ électromagnétique

L'évolution de la fonction d'onde $\psi(\vec{r}, t)$ de la particule est régie par l'équation de Schrödinger dépendant du temps :
$$i\hbar \frac{\partial \psi}{\partial t} = \hat{H}\psi = \left[ \frac{1}{2m} \left( -i\hbar \vec{\text{grad}} - q\vec{A} \right)^2 + qV \right] \psi$$

### 3.1. Développement du carré de l'opérateur
Il est crucial de tenir compte de la non-commutativité entre $\vec{\text{grad}}$ et $\vec{A}$. En effet, $\vec{A}$ dépend de la position. Développons le terme cinétique :
$$\left( -i\hbar \vec{\text{grad}} - q\vec{A} \right)^2 \psi = \left( -i\hbar \vec{\text{grad}} - q\vec{A} \right) \cdot \left( -i\hbar \vec{\text{grad}}\psi - q\vec{A}\psi \right)$$

En appliquant les opérateurs et en remarquant que $\vec{\text{div}}(\vec{A}\psi) = (\vec{\text{div}}\,\vec{A})\psi + \vec{A} \cdot \vec{\text{grad}}\psi$, on obtient (en choisissant la jauge de Coulomb $\vec{\text{div}}\,\vec{A} = 0$) :
$$\hat{H}\psi = \left( -\frac{\hbar^2}{2m} \Delta - \frac{q}{m}\vec{A} \cdot (-i\hbar \vec{\text{grad}}) + \frac{q^2}{2m}\vec{A}^2 + qV \right) \psi$$

---

## 4. Effet Zeeman et moment magnétostatique

Considérons un électron ($q = -e$) placé dans un champ magnétique uniforme constant $\vec{B} = B_0 \vec{e}_z$. 
On choisit la jauge de Coulomb avec le potentiel vecteur :
$$\vec{A} = \frac{1}{2} \vec{B} \wedge \vec{r}$$

L'hamiltonien s'écrit :
$$\hat{H} = \frac{\hat{\vec{p}}^{\,2}}{2m} + \frac{e}{2m} \vec{B} \cdot (\hat{\vec{r}} \wedge \hat{\vec{p}}) + \frac{e^2}{8m} (\vec{B} \wedge \hat{\vec{r}})^2 + V(\hat{r})$$

En reconnaissant l'opérateur moment cinétique orbital $\hat{\vec{L}} = \hat{\vec{r}} \wedge \hat{\vec{p}}$, le terme linéaire en $\vec{B}$ s'écrit :
$$\hat{H}_M = \frac{e}{2m} \vec{B} \cdot \hat{\vec{L}} = -\hat{\vec{\mu}}_L \cdot \vec{B}$$

Où $\hat{\vec{mu}}_L = -\frac{e}{2m}\hat{\vec{L}}$ est le **moment magnétique orbital** associé à la particule chargée.

*   Le terme linéaire en $\vec{B}$ est responsable de l'**effet Zeeman normal** (levée de dégénérescence des niveaux d'énergie en présence de champ magnétique).
*   Le terme en $B^2$ (quadratique) correspond au diamagnétisme, souvent négligeable devant le terme paramagnétisme linéaire pour des champs de laboratoire usuels.

---

## 5. Le courant de probabilité en présence de champ

La conservation de la probabilité locale est assurée par l'équation de continuité :
$$\frac{\partial \rho}{\partial t} + \vec{\text{div}}\,\vec{j} = 0$$

Avec la densité de probabilité $\rho = |\psi|^2$ et le **vecteur densité de courant de probabilité** $\vec{j}$ modifié par la présence du champ électromagnétique :
$$\vec{j} = \frac{1}{m} \text{Re} \left[ \psi^* \left( -i\hbar \vec{\text{grad}} - q\vec{A} \right) \psi \right]$$

Cette expression montre clairement que le courant de probabilité est couplé au potentiel vecteur $\vec{A}$, ce qui traduit l'invariant de jauge global de la théorie quantique.