---
title: 'Cours : Dynamique des solides'
description: 'Synthèse de cours, théorèmes et démonstrations fondamentales.'
---

## 📌 1. Définitions & Cadre d'étude

Le module de la dynamique des solides indéformables en PSI vise à relier les actions mécaniques (forces et moments) exercées sur un système matériel à son mouvement (cinématique).

### 1.1. Modèle du solide indéformable
Un solide $S$ est un ensemble indéformable de points matériels $P$. La distance entre deux points quelconques $P_1$ et $P_2$ de $S$ est constante au cours du temps :
$$\forall (P_1, P_2) \in S^2, \quad \frac{d}{dt} \| \overrightarrow{P_1P_2} \| = 0$$

### 1.2. Torseurs cinématique et cinétique
* **Torseur cinématique** du solide $S$ par rapport au repère galiléen $\mathcal{R}_0$ :
  $$\{\mathcal{V}(S/\mathcal{R}_0)\} = \left\{ \begin{array}{c} \vec{\Omega}(S/\mathcal{R}_0) \\ \vec{V}(P \in S/\mathcal{R}_0) \end{array} \right\}_P$$
  où $\vec{\Omega}(S/\mathcal{R}_0)$ est le vecteur taux de rotation et $\vec{V}(P \in S/\mathcal{R}_0)$ la vitesse du point $P$.

* **Torseur cinétique** du solide $S$ par rapport à $\mathcal{R}_0$ au point $P$ :
  $$\{\mathcal{C}_P(S/\mathcal{R}_0)\} = \left\{ \begin{array}{c} \vec{R}_c(S/\mathcal{R}_0) = m \vec{V}(G/\mathcal{R}_0) \\ \vec{\sigma}_P(S/\mathcal{R}_0) \end{array} \right\}_P$$
  avec $m$ la masse totale du solide, $G$ son centre d'inertie, et $\vec{\sigma}_P$ le moment cinétique au point $P$.

### 1.3. Torseur dynamique
Le torseur dynamique du solide $S$ par rapport au repère galiléen $\mathcal{R}_0$ au point $P$ est défini par :
$$\{\mathcal{D}_P(S/\mathcal{R}_0)\} = \left\{ \begin{array}{c} \vec{R}_d(S/\mathcal{R}_0) = \frac{d}{dt}\left(\vec{R}_c(S/\mathcal{R}_0)\right)_{\mathcal{R}_0} = m \vec{\gamma}(G/\mathcal{R}_0) \\ \vec{\delta}_P(S/\mathcal{R}_0) = \frac{d}{dt}\left(\vec{\sigma}_P(S/\mathcal{R}_0)\right)_{\mathcal{R}_0} + \vec{V}(P/\mathcal{R}_0) \wedge m\vec{V}(G/\mathcal{R}_0) \end{array} \right\}_P$$

---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### 2.1. Principe Fondamental de la Dynamique (PFD)
Dans un repère $\mathcal{R}_0$ **galiléen**, le torseur dynamique du solide est égal au torseur des actions mécaniques extérieures exercées sur le solide :
$$\{\mathcal{D}_P(S/\mathcal{R}_0)\} = \{\mathcal{F}_{\text{ext} \to S}\}_P$$

Ce torseur se décompose en deux équations vectorielles fondamentales :
1. **Théorème de la Résultante Dynamique (TRD) :**
   $$\vec{R}_{\text{ext}} = m \vec{\gamma}(G/\mathcal{R}_0)$$
2. **Théorème du Moment Dynamique (TMD) en un point $P$ fixe dans $\mathcal{R}_0$ ou confondu avec $G$ :**
   $$\vec{M}_P(\text{ext} \to S) = \left( \frac{d\vec{\sigma}_P(S/\mathcal{R}_0)}{dt} \right)_{\mathcal{R}_0}$$

---

### 2.2. Démonstration : Théorème du moment cinétique par rapport à un point fixe ou au centre d'inertie
Objectif: Établir l'expression de $\vec{\delta}_P$ lorsque $P$ est fixe dans $\mathcal{R}_0$ ou lorsque $P = G$.*

Par définition, le moment dynamique au point $P$ est :
$$\vec{\delta}_P(S/\mathcal{R}_0) = \left( \frac{d\vec{\sigma}_P(S/\mathcal{R}_0)}{dt} \right)_{\mathcal{R}_0} + \vec{V}(P/\mathcal{R}_0) \wedge m\vec{V}(G/\mathcal{R}_0)$$

1. **Cas où $P$ est fixe dans $\mathcal{R}_0$ :**
   La vitesse de $P$ par rapport à $\mathcal{R}_0$ est nulle : $\vec{V}(P/\mathcal{R}_0) = \vec{0}$.
   Le terme additionnel s'annule, d'où :
   $$\vec{\delta}_P(S/\mathcal{R}_0) = \left( \frac{d\vec{\sigma}_P(S/\mathcal{R}_0)}{dt} \right)_{\mathcal{R}_0}$$

2. **Cas où $P = G$ (Centre d'inertie) :**
   Par définition de $G$, on a $\vec{PG} = \vec{0}$, donc $\vec{V}(G/\mathcal{R}_0) = \vec{V}(G/\mathcal{R}_0)$. Le terme additionnel devient $\vec{V}(G/\mathcal{R}_0) \wedge m\vec{V}(G/\mathcal{R}_0) = \vec{0}$.
   Par conséquent :
   $$\vec{\delta}_G(S/\mathcal{R}_0) = \left( \frac{d\vec{\sigma}_G(S/\mathcal{R}_0)}{dt} \right)_{\mathcal{R}_0}$$
   *(Remarque : Cette relation reste vraie si $P$ est un point quelconque du solide en mouvement dont la vitesse instantanée est colinéaire à $\vec{V}(G/\mathcal{R}_0)$).*

---

### 2.3. Théorèmes énergétiques
* **Puissance des actions extérieures ($\mathcal{P}_{\text{ext}}$) :**
  $$\mathcal{P}_{\text{ext}} = \{\mathcal{F}_{\text{ext} \to S}\} \otimes \{\mathcal{V}(S/\mathcal{R}_0)\} = \vec{R}_{\text{ext}} \cdot \vec{V}(A \in S/\mathcal{R}_0) + \vec{M}_A(\text{ext} \to S) \cdot \vec{\Omega}(S/\mathcal{R}_0)$$
* **Théorème de l'Énergie Cinetique (TEC) :**
  La dérivée temporelle de l'énergie cinétique $E_c(S/\mathcal{R}_0)$ est égale à la puissance totale des actions extérieures et intérieures :
  $$\frac{dE_c(S/\mathcal{R}_0)}{dt} = \mathcal{P}_{\text{ext}} + \mathcal{P}_{\text{int}}$$
  *(Pour un solide indéformable, la puissance des efforts intérieurs $\mathcal{P}_{\text{int}}$ est nulle).*

---

## 💡 3. Méthodes classiques de résolution

Pour résoudre un problème de dynamique en PSI, la méthodologie rigoureuse suivante doit être appliquée :

1. **Isolement du système :** Définir précisément le solide $S$ ou l'ensemble de solides étudié.
2. **Bilan des actions mécaniques extérieures (BAME) :** Recenser toutes les forces et couples exercés sur $S$ en précisant leur nature (liaison, pesanteur, action à distance).
3. **Choix du référentiel :** S'assurer que le repère d'étude $\mathcal{R}_0$ est galiléen (ou appliquer les lois de Newton modifiées en repère non galiléen si explicitement demandé).
4. **Choix du théorème :**
   * *Méthode vectorielle (TRD/TMD) :* Privilégiée si l'on cherche des efforts de liaison. Attention à projeter judicieusement les équations pour éliminer les inconnues inutiles.
   * *Méthode énergétique (TEC) :* Privilégiée si l'on cherche une relation unique entre une position (ou un angle) et une vitesse, sans faire intervenir les efforts de liaison parfaits.

---

## ⚠️ 4. Pièges classiques aux Concours

* **Oubli du caractère galiléen :** Appliquer le PFD dans un repère lié à la Terre sans justifier son approximation galiléenne (ou sans ajouter les forces d'inertie si l'on travaille dans un repère non galiléen).
* **Erreur d'application du TMD :** Appliquer l'égalité $\vec{M}_P(\text{ext}) = \frac{d\vec{\sigma}_P}{dt}$ en un point $P$ qui **n'est ni fixe dans $\mathcal{R}_0$, ni le centre d'inertie $G$**. C'est une erreur éliminatoire fréquente.
* **Matrice d'inertie variable :** Dans le calcul de $\vec{\sigma}_P(S/\mathcal{R}_0) = \mathbf{I}_P(S) \vec{\Omega}(S/\mathcal{R}_0)$, la matrice d'inertie $\mathbf{I}_P(S)$ est constante **uniquement** si elle est exprimée dans une base liée au solide. Si l'on dérive dans $\mathcal{R}_0$ alors que la base d'expression tourne, il faut dériver la matrice elle-même (ou utiliser judicieusement un théorème de transport ou une base fixe si le solide a une géométrie simple).
* **Puissance des liaisons parfaites :** Ne pas oublier que pour une liaison parfaite (sans frottement), la puissance développée par les efforts de liaison est nulle, ce qui simplifie grandement le TEC.