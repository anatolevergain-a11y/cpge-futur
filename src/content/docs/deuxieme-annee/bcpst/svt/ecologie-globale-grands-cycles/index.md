---
title: 'Cours : Écologie globale et cycles biogéochimiques'
description: 'Synthèse de cours, théorèmes fondamentaux et démonstrations.'
---

## 📌 1. Définitions & Cadre d'étude

L'écologie globale étudie les flux de matière et d'énergie à l'échelle de la planète (la biosphère), en intégrant les interactions entre les grands compartiments terrestres : l'atmosphère, l'hydrosphère, la lithosphère et la biosphère.

### 1.1. Les compartiments biogéochimiques et flux
*   **Réservoir (ou compartiment) :** Volume ou masse d'un élément chimique présent dans un état physique, chimique ou biologique donné (ex. : $CO_2$ atmosphérique, ions $NO_3^-$ dissous dans l'océan, carbone organique des sols).
*   **Flux :** Quantité de matière transférée d'un réservoir à un autre par unité de temps ($\text{mol}\cdot\text{an}^{-1}$ ou $\text{Tg}\cdot\text{an}^{-1}$).
*   **Temps de résidence ($\tau$) :** Rapport entre la masse $M$ d'un élément dans un réservoir et le flux total sortant (ou entrant) $F$ du système à l'état stationnaire :
    $$\tau = \frac{M}{F}$$

### 1.2. Cycles biogéochimiques
On distingue deux grands types de cycles selon la nature du réservoir le plus important :
*   **Cycles gazeux :** Le réservoir principal est l'atmosphère ou l'hydrosphère (ex. : cycle du carbone, de l'azote). Ce sont des cycles rapidement autorégulés à l'échelle globale.
*   **Cycles sédimentaires :** Le réservoir principal est la lithosphère (roches, sols) (ex. : cycle du phosphore). Leurs temps de résidence sont très longs et les flux limités par l'altération des roches.

---

## ## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### 2.1. Principe de stationnabilité et bilan massique
**Définition :** Un système est dit en état stationnaire (ou équilibre dynamique) si la quantité totale de matière dans chaque compartiment reste constante au cours du temps, ce qui implique que la somme des flux entrants est égale à la somme des flux sortants.

Soit $M_i$ la masse du compartiment $i$. Le bilan s'écrit :
$$\frac{dM_i}{dt} = \sum F_{\text{entrants}} - \sum F_{\text{sortants}}$$

À l'état stationnaire : 
$$\frac{dM_i}{dt} = 0 \implies \sum F_{\text{entrants}} = \sum F_{\text{sortants}}$$

### 2.2. Le cycle du Carbone : Anthropisation et déséquilibre
Le cycle biogéochimique du carbone relie la biosphère, l'océan et l'atmosphère. 
*   **Puits de carbone :** Réservoir qui absorbe davantage de carbone qu'il n'en émet (ex. : Océan, forêts matures).
*   **Source de carbone :** Réservoir qui libère du carbone (ex. : combustion d'énergies fossiles, déforestation, respiration).

**Démonstration du déséquilibre actuel (Bilan global) :**
Soit $F_{\text{ant}}$ le flux anthropique (émissions de $CO_2$ par les combustibles fossiles et changements d'usage des sols). 
Le bilan atmosphérique s'exprime par :
$$\frac{dM_{\text{atm}}}{dt} = F_{\text{ant}} + F_{\text{naturels, nets}}$$
Les observations montrent que $\frac{dM_{\text{atm}}}{dt} \approx +4.3 \text{ GtC}\cdot\text{an}^{-1}$ alors que $F_{\text{ant}} \approx +9.5 \text{ GtC}\cdot\text{an}^{-1}$. 
On en déduit que les puits naturels (océanique et terrestre) absorbent environ la moitié des émissions anthropiques (environ $5.2 \text{ GtC}\cdot\text{an}^{-1}$), jouant un rôle tampon fondamental mais soumis à saturation.

---

## 💡 3. Méthodes de calcul & Algorithmes

### 3.1. Calcul du temps de résidence d'un élément
**Problème type :** Soit un lac contenant $M = 1,2 \times 10^7 \text{ t}$ de phosphore, alimenté par un flux d'entrée de $F = 4,0 \times 10^5 \text{ t}\cdot\text{an}^{-1}$ (égal au flux de sortie en régime stationnaire). Calculer le temps de résidence $\tau$.

*   **Algorithme de calcul :**
    1. Identifier clairement le réservoir cible et relever $M$.
    2. Identifier le flux total sortant (ou entrant en régime stationnaire) $F$.
    3. Appliquer la formule $\tau = \frac{M}{F}$ en vérifiant l'homogénéité des unités.
    4. Application numérique : 
       $$\tau = \frac{1,2 \times 10^7 \text{ t}}{4,0 \times 10^5 \text{ t}\cdot\text{an}^{-1}} = 30 \text{ ans}$$

### 3.2. Analyse stœchiométrique des écosystèmes (Redfield et au-delà)
Les proportions atomiques des éléments majeurs dans la matière organique marine (notamment le plancton) suivent le **ratio de Redfield** :
$$C : N : P = 106 : 16 : 1$$
Ce rapport permet de calculer la quantité d'un nutriment limitant consommée ou libérée lors de la production primaire ou de la minéralisation.

---

## ⚠️ 4. Pièges classiques aux Concours

1.  **Confondre "flux" et "stock" (ou "réservoir") :** Un stock s'exprime en unité de masse (ex. : $\text{GtC}$), tandis qu'un flux s'exprime en masse par unité de temps (ex. : $\text{GtC}\cdot\text{an}^{-1}$). Ne jamais sommer des stocks et des flux.
2.  **Oublier l'effet tampon des océans :** La solubilité du $CO_2$ dépend de la température (loi de Henry). Un réchauffement climatique diminue la solubilité du $CO_2$ océanique, réduisant son temps de résidence et transformant potentiellement un puits en source. Ne pas négliger la rétroaction positive (feedback positif) associée.
3.  **Négliger le caractère limitant du cycle du Phosphore :** Contrairement à l'azote, il n'existe pas de réservoir atmosphérique gazeux pour le phosphore. Le cycle est exclusivement sédimentaire, ce qui rend le phosphore rapidement limitant pour la production primaire en milieu terrestre et aquatique (facteur limitant de Liebig).
4.  **Erreur d'homogénéité dans le calcul de $\tau$ :** Toujours vérifier que $M$ et $F$ partagent la même unité temporelle et massique avant d'effectuer la division.