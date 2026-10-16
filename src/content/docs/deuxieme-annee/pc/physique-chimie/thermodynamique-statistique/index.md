---
title: 'Cours : Introduction à la thermodynamique statistique'
description: 'Synthèse de cours, théorèmes et démonstrations.'
---

# Introduction à la thermodynamique statistique — CPGE PC

Ce chapitre jette les ponts entre le monde microscopique (mécanique quantique et statistique) et le monde macroscopique (thermodynamique classique). L'objectif est de comprendre l'origine moléculaire des grandeurs macroscopiques comme la température, la pression ou l'entropie.

---

## 1. Description microscopique d'un système

### Définitions fondamentales
* **Système isolé :** Système ne échangeant ni matière ni énergie (thermique ou mécanique) avec l'extérieur. Son énergie totale $E$, son volume $V$ et le nombre de particules $N$ sont constants.
* **État macroscopique :** Défini par les variables d'état macroscopiques ($P, V, T, N$).
* **État microscopique (ou micro-état) :** Spécification complète de l'état de chaque particule du système (positions et impulsions en mécanique classique, ou occupation des niveaux d'énergie quantiques).
* **Postulat fondamental de la physique statistique (ergodicité) :** Pour un système isolé à l'équilibre macroscopique, tous les micro-états accessibles compatibles avec les contraintes macroscopiques ($E, V, N$) ont **la même probabilité d'apparaître**.

---

## 2. Le nombre de micro-états et l'entropie statistique

### Définition
Soit $\Omega(E, V, N)$ le nombre de micro-états accessibles à un système isolé caractérisé par les macro-variables $E, V, N$.

### Théorème : Formule de Boltzmann
L'entropie statistique $S$ d'un système à l'équilibre est reliée au nombre de micro-états $\Omega$ par la relation universelle :
$$S = k_B \ln \Omega$$
où $k_B \approx 1{,}38 \times 10^{-23} \, \text{J}\cdot\text{K}^{-1}$ est la constante de Boltzmann.

> **Propriétés de l'entropie :**
> * $S$ est une grandeur **extensive**. Si l'on considère deux sous-systèmes indépendants 1 et 2, $\Omega = \Omega_1 \times \Omega_2$, ce qui implique $S = S_1 + S_2$ (additivité de l'entropie).
> * $S \ge 0$ (car $\Omega \ge 1$).

---

## 3. Température et pression statistiques

### Définition statistique de la température
Considérons deux systèmes en contact thermique (échange d'énergie possible, $E = E_1 + E_2 = \text{cst}$). À l'équilibre, le nombre de micro-états accessibles du système global $\Omega_{\text{total}} = \Omega_1(E_1) \times \Omega_2(E - E_1)$ est maximal.
Cela conduit à la condition d'équilibre $\frac{\partial \ln \Omega_1}{\partial E_1} = \frac{\partial \ln \Omega_2}{\partial E_2}$.

On définit la température absolue $T$ par :
$$\frac{1}{k_B T} = \left(\frac{\partial \ln \Omega}{\partial E}\right)_{V,N}$$

### Définition statistique de la pression
De même, lors d'un échange de volume à énergie et nombre de particules constants, la condition d'équilibre mécanique permet de définir la pression $P$ :
$$\frac{P}{k_B T} = \left(\frac{\partial \ln \Omega}{\partial V}\right)_{E,N}$$

---

## 4. Distribution de Boltzmann (Système en contact thermique)

### Théorème : Facteur de Boltzmann
Considérons un système (ou une particule) en contact thermique avec un thermostat à la température $T$. La probabilité $P_i$ que le système se trouve dans un micro-état d'énergie $E_i$ est proportionnelle au **facteur de Boltzmann** :
$$P_i = \frac{e^{-\frac{E_i}{k_B T}}}{Z}$$

Où $Z$ est la **fonction de partition** (ou somme sur les états), définie par :
$$Z = \sum_{\text{i}} e^{-\frac{E_i}{k_B T}}$$

### Lien avec l'énergie interne
L'énergie interne macroscopique $U$ est la valeur moyenne de l'énergie microscopique :
$$U = \langle E \rangle = \sum_i P_i E_i = \frac{1}{Z} \sum_i E_i e^{-\frac{E_i}{k_B T}}$$
On démontre élégamment la relation fondamentale :
$$U = k_B T^2 \frac{\partial \ln Z}{\partial T}$$

---

## 5. Application au gaz parfait monatomic

Pour un gaz parfait monatomique de $N$ particules de masse $m$ dans un volume $V$, la résolution de l'équation de Schrödinger (particule dans une boîte) permet de dénombrer les états et d'exprimer la fonction de partition. On aboutit aux résultats macroscopiques bien connus :

1. **Énergie interne :**
   $$U = \frac{3}{2} N k_B T = \frac{3}{2} n R T$$
   *(Interprétation : chaque degré de liberté translationnel quadratique apporte $\frac{1}{2} k_B T$ par particule, soit $3 \times \frac{1}{2} k_B T$ au total).*

2. **Équation d'état :**
   $$P V = N k_B T = n R T$$

---

## Méthodes et Savoir-Faire

* **Calculer une fonction de partition $Z$ :** 
  1. Identifier les niveaux d'énergie $E_i$ accessibles et leur dégénérescence éventuelle $g_i$.
  2. Écrire la somme $Z = \sum_i g_i e^{-\frac{E_i}{k_B T}}$.
  3. Reconnaître le cas échéant des séries usuelles (géométriques).
* **Déduire les grandeurs thermodynamiques :** 
  * $U$ via $\frac{\partial \ln Z}{\partial T}$
  * $S$ via $U$ et l'énergie libre $F = -k_B T \ln Z = U - TS$.

---

## Pièges à éviter (Attention aux concours)

1. **Confusion micro-état / macro-état :** $\Omega$ compte le nombre de *micro-états*, pas les macro-états.
2. **Unités de l'énergie :** Dans le facteur de Boltzmann $\exp(-E_i / k_B T)$, le rapport $\frac{E_i}{k_B T}$ doit impérativement être sans dimension. Veillez à exprimer $E_i$ en Joules (J) et non en électron-volts (eV) ou en ergs, sauf si $k_B$ est converti en conséquence.
3. **Extensivité :** L'entropie $S$ et l'énergie interne $U$ sont extensives (proportionnelles à $N$ ou $n$), tandis que la température $T$ et la pression $P$ sont intensives. La fonction de partition d'un système de $N$ particules indépendantes est $Z_N = (Z_1)^N$, ce qui donne $S = N k_B \ln Z_1 + \dots$ (grandeur extensive).