---
title: 'Cours : Introduction à la physique statistique'
description: 'Synthèse de cours, théorèmes et démonstrations.'
---

# Introduction à la physique statistique — Fiche de Cours (PC)

La physique statistique fait le pont entre la description microscopique d'un système (à l'échelle des atomes et des molécules) et sa description macroscopique (thermodynamique). L'objectif est de relier les grandeurs macroscopiques mesurables ($P, V, T, S$) aux propriétés microscopiques par des méthodes probabilistes.

---

## 1. Description microscopique d'un système

### A. Espace des phases
*   **Définition :** Pour un système de $N$ particules ponctuelles dans l'espace à trois dimensions, l'**espace des phases** est l'espace mathématique à $6N$ dimensions formé par l'ensemble des coordonnées de position $\vec{r}_i$ et de quantité de mouvement $\vec{p}_i$ de toutes les particules ($i \in \{1, \dots, N\}$).
*   Un état microscopique (ou **micro-état**) est représenté par un point unique dans cet espace des phases.

### B. Postulat fondamental de la physique statistique (ergodicité)
*   **Théorème (Postulat d'égal a priori) :** Pour un système isolé macroscopiquement (énergie totale comprise entre $E$ et $E+\delta E$), tous les micro-états accessibles compatibles avec les contraintes macroscopiques ont la **même probabilité** d'être occupés.
*   **Remarque :** Le temps passé par le système dans une région de l'espace des phases est proportionnel au volume de cette région (hypothèse ergodique).

---

## 2. Le Micro-canonique et l'Entropie statistique (Boltzmann)

### A. Définition de l'entropie
*   **Définition :** Soit $\Omega(E, V, N)$ le nombre de micro-états accessibles à un système isolé d'énergie $E$, de volume $V$ et contenant $N$ particules. L'**entropie statistique** de Boltzmann est définie par :
    $$\boxed{S = k_B \ln \Omega}$$
    où $k_B \approx 1{,}38 \times 10^{-23} \text{ J}\cdot\text{K}^{-1}$ est la constante de Boltzmann.
*   **Propriétés :** 
    *   $S$ est une grandeur **additive** (si deux systèmes indépendants 1 et 2 sont accolés, $\Omega = \Omega_1 \Omega_2$, donc $S = S_1 + S_2$).
    *   $S$ est une grandeur extensive.

### B. Température statistique
*   La température thermodynamique $T$ est définie à partir de l'entropie par la relation fondamentale :
    $$\boxed{\frac{1}{T} = \left(\frac{\partial S}{\partial E}\right)_{V,N}}$$

---

## 3. Le Canonique : Système en contact avec un thermostat

### A. Définition du thermostat et facteur de Boltzmann
*   **Définition :** Un **thermostat** est un système macroscopique de grande taille à température $T$ fixée, avec lequel notre système d'étude peut échanger de l'énergie thermique.
*   **Théorème (Facteur de Boltzmann) :** La probabilité $P_i$ pour que le système se trouve dans un micro-état $i$ d'énergie $E_i$ est proportionnelle à :
    $$\boxed{P_i \propto \exp\left(-\frac{E_i}{k_B T}\right)}$$

### B. Fonction de partition
*   **Définition :** La **fonction de partition** $Z$ (ou somme sur les états) est la somme des facteurs de Boltzmann sur tous les micro-états accessibles :
    $$\boxed{Z = \sum_{\text{i}} \exp\left(-\frac{E_i}{k_B T}\right)}$$
*   **Normalisation :** La probabilité exacte du micro-état $i$ s'écrit :
    $$P_i = \frac{1}{Z} \exp\left(-\frac{E_i}{k_B T}\right)$$

### C. Lien entre physique statistique et thermodynamique macroscopique
Toutes les grandeurs thermodynamiques se déduisent de la fonction de partition $Z$ :
1.  **Énergie interne $U$ :** 
    $$U = \langle E \rangle = \sum_i P_i E_i = - \frac{\partial \ln Z}{\partial \beta} \quad \text{avec } \beta = \frac{1}{k_B T}$$
2.  **Énergie libre de Helmholtz $F = U - TS$ :**
    $$\boxed{F = -k_B T \ln Z}$$
3.  **Entropie $S$ :**
    $$S = \frac{U - F}{T}$$
4.  **Pression $P$ :**
    $$P = -\left(\frac{\partial F}{\partial V}\right)_{T,N} = k_B T \left(\frac{\partial \ln Z}{\partial V}\right)_{T,N}$$

---

## 4. Théorème d'équipartition de l'énergie

*   **Théorème :** À l'équilibre thermique à la température $T$, chaque terme quadratique (en position ou en quantité de mouvement) intervenant dans l'énergie microscopique (hamiltonien) d'un système possède une énergie moyenne égale à :
    $$\langle E_{\text{quadratique}} \rangle = \frac{1}{2} k_B T$$
*   *Exemples :*
    *   Pour une particule massive de translation à 3 dimensions, l'énergie cinétique est $E_c = \frac{p_x^2}{2m} + \frac{p_y^2}{2m} + \frac{p_z^2}{2m}$ (3 termes quadratiques). Ainsi :
        $$\langle E_c \rangle = 3 \times \left(\frac{1}{2} k_B T\right) = \frac{3}{2} k_B T$$
    *   C'est la justification statistique de la loi de Joule pour un gaz parfait monoatomique ($U = \frac{3}{2} n R T$).

---

## 5. Méthodes et Savoir-faire

*   **Comment calculer une fonction de partition $Z$ :**
    1.  Identifier les micro-états $i$ et leurs énergies $E_i$.
    2.  Écrire la somme $Z = \sum_i e^{-\beta E_i}$.
    3.  Calculer explicitement la somme (souvent une série géométrique).
*   **Systèmes de particules sans interaction :**
    Si les particules sont indépendantes, la fonction de partition totale $Z_N$ d'un système de $N$ particules se factorise :
    $$Z_N = \frac{(Z_1)^N}{N!}$$
    (le terme $N!$ intervient pour des particules indiscernables, comme les atomes d'un gaz).

---

## 6. Pièges classiques à éviter

*   **Oubli du facteur $N!$ pour les gaz :** Pour un gaz de particules identiques, les micro-états ne doivent pas compter double par simple permutation de deux particules. Ne pas diviser par $N!$ conduit à un paradoxe (paradoxe de Gibbs sur l'entropie de mélange).
*   **Confusion entre micro-état et macro-état :** Un macro-état est défini par des variables globales ($P, V, T$). Il peut correspondre à un très grand nombre $\Omega$ de micro-états différents.
*   **Homogénéité des exponentielles :** L'argument d'une exponentielle (comme $\frac{E_i}{k_B T}$) doit impérativement être **sans dimension**. Vérifiez toujours vos unités lors des calculs d'énergie et de température.