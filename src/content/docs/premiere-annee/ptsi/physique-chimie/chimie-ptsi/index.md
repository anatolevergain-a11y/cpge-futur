---
title: 'Cours : Chimie des matériaux et solutions'
description: 'Synthèse officielle du cours et démonstrations clés.'
---

# Physique-Chimie - PTSI
## Chapitre : Chimie des matériaux et solutions

---

Ce chapitre fait le lien entre la structure microscopique de la matière (solides cristallins, espèces en solution) et ses propriétés macroscopiques (cohésion, solubilité, équilibres acido-basiques et de précipitation). En classe préparatoire PTSI, l'accent est mis sur la modélisation thermodynamique et cristallographique.

---

## I. Cristallographie et description des solides cristallins

Un **solide cristallin** est constitué d'un empilement ordonné et périodique d'entités (atomes, ions, molécules). L'entité géométrique de base qui, par translation, permet de reconstituer tout le cristal est la **maille élémentaire**.

### 1. Caractéristiques géométriques d'une maille
* **Paramètres de maille** : dimensions des arêtes ($a, b, c$) et angles $(\alpha, \beta, \gamma)$.
* **Multiplicité ($Z$)** : nombre d'entités propres appartenant à la maille.
* **Compacité ($C$)** : fraction du volume de la maille occupée par les entités, modélisées comme des sphères dures de rayon $R$.

$$C = \frac{V_{\text{occupé}}}{V_{\text{maille}}} = \frac{Z \times \frac{4}{3}\pi R^3}{V_{\text{maille}}}$$

* **Masse volumique ($\rho$)** :

$$\rho = \frac{M \cdot Z}{N_A \cdot V_{\text{maille}}}$$

où $M$ est la masse molaire et $N_A$ la constante d'Avogadro.

### 2. Principaux types d'empilements compacts
Dans un empilement compact, les sphères maximisent leur compacité ($C \approx 0{,}74$).
* **Empilement cubique faces centrées (CFC ou ccp)** : séquence $ABCABC...$
* **Empilement hexagonal compact (hc)** : séquence $ABABAB...$

Le nombre de plus proches voisins d'une entité est appelé **coordination ($p$)**. Pour les structures compactes, $p = 12$.

### 3. Structures ioniques de référence
Les cristaux ioniques sont constitués d'anions (souvent volumineux formant un réseau hôte) et de cations (plus petits, insérés dans les **sites interstitiels** : tétraédriques ou octaédriques).

* **Structure du chlorure de sodium ($\text{NaCl}$)** :
  * Les ions $\text{Cl}^-$ forment un réseau CFC.
  * Les ions $\text{Na}^+$ occupent tous les sites octaédriques.
  * $Z(\text{NaCl}) = 4$, coordinations : $p(\text{Na}^+) = p(\text{Cl}^-) = 6$.

* **Structure du chlorure de césium ($\text{CsCl}$)** :
  * Les ions $\text{Cl}^-$ occupent les sommets d'un cube (réseau cubique simple).
  * L'ion $\text{Cs}^+$ occupe le centre du cube.
  * $Z(\text{CsCl}) = 1$, coordinations : $p(\text{Cs}^+) = p(\text{Cl}^-) = 8$.

---

## II. Solutions aqueuses : thermodynamique des équilibres

### 1. Rappels sur l'activité chimique
Pour une espèce $X$ en solution aqueuse (diluée), son activité $a(X)$ est définie par :
* En solution : $a(X) \approx \frac{[X]}{c^\circ}$ avec $c^\circ = 1\text{ mol}\cdot\text{L}^{-1}$.
* Pour un solvant (eau) ou un solide pur : $a(\text{solvant/solide}) = 1$.

### 2. Équilibres acido-basiques
Soit un couple acido-basique $\text{AH/A}^-$. L'équilibre de dissociation dans l'eau s'écrit :

$$\text{AH}_{(aq)} + \text{H}_2\text{O}_{(l)} \rightleftharpoons \text{A}^-_{(aq)} + \text{H}_3\text{O}^+_{(aq)}$$

* **Constante d'acidité ($K_a$)** :

$$K_a = \frac{a(\text{A}^-)\cdot a(\text{H}_3\text{O}^+)}{a(\text{AH})\cdot c^\circ} = \frac{[\text{A}^-][\text{H}_3\text{O}^+]}{c^\circ [\text{AH}]}$$

* **$\text{p}K_a$** : $\text{p}K_a = -\log_{10}(K_a)$.
* **Relation de Henderson** :

$$\text{pH} = \text{p}K_a + \log\left(\frac{[\text{A}^-]}{[\text{AH}]}\right)$$

### 3. Équilibres de précipitation et solubilité

#### Définition
La **solubilité $s$** d'un composé ionique peu soluble dans l'eau est la concentration molaire maximale de soluté que l'on peut dissoudre en solution (exprimée en $\text{mol}\cdot\text{L}^{-1}$).

#### Produit de solubilité ($K_s$)
Pour un sel $\text{M}_\nu\text{A}_\mu$ peu soluble, l'équilibre de dissolution est :

$$\text{M}_\nu\text{A}_{\mu(s)} \rightleftharpoons \nu \text{M}^{\mu+}_{(aq)} + \mu \text{A}^{\nu-}_{(aq)}$$

Le produit de solubilité est la constante thermodynamique associée :

$$K_s = \left(\frac{[\text{M}^{\mu+}]}{c^\circ}\right)^\nu \left(\frac{[\text{A}^{\nu-}]}{c^\circ}\right)^\mu$$

* **Condition d'évolution (Critère de Spontanéité)** :
  * Quotient de réaction $Q_r = [\text{M}^{\mu+}]^\nu [\text{A}^{\nu-]^\mu}$.
  * Si $Q_r < K_s$ : pas de précipité, le système évolue vers la dissolution.
  * Si $Q_r > K_s$ : précipitation (le système évolue dans le sens rétrograde jusqu'à ce que $Q_r = K_s$).

#### Influence du pH et complexation
La solubilité d'un sel dont l'anion est basique (ex: $\text{HO}^-, \text{CH}_3\text{COO}^-, \text{CO}_3^{2-}$) dépend fortement du pH. Une acidification de la solution consomme les ions basiques, déplace l'équilibre de dissolution vers la droite et **augmente la solubilité**.

---

## III. Diagrammes de prédominance et de distribution

### 1. Diagrammes de prédominance (Acido-basique)
Pour un couple $\text{AH/A}^-$ de $\text{p}K_a$ donné :
* Si $\text{pH} < \text{p}K_a$ : l'espèce prédominante est l'acide $\text{AH}$.
* Si $\text{pH} > \text{p}K_a$ : l'espèce prédominante est la base $\text{A}^-$.

### 2. Diagrammes de solubilité (Précipitation)
Pour un hydroxyde métallique $\text{M}(\text{OH})_n(s)$, le domaine d'existence du précipité est délimité par la condition limite où $Q_r = K_s$, soit :

$$[\text{M}^{n+}][\text{OH}^-]^n = K_s$$

En passant au $-\log$ (fonction $\text{pM} = -\log[\text{M}^{n+}]$ et $\text{pH}$), on obtient une droite frontières séparant le domaine de l'ion en solution et celui du solide.

---

## IV. Méthodes et Démonstrations Clés (À Savoir Refaire)

> **Démonstration type : Expression de la compacité d'un réseau CFC**
> 
> *Objectif : Démontrer que la compacité d'un réseau cubique faces centrées est $C = \frac{\pi\sqrt{2}}{6} \approx 0{,}74$.*
> 
> 1. **Maille CFC** : Les atomes sont en contact selon la diagonale d'une face du cube. 
> 2. Soit $a$ le paramètre de la maille et $R$ le rayon de la sphère. La longueur de la diagonale de la face vaut $a\sqrt{2}$.
> 3. Géométriquement, le long de cette diagonale, les sphères se touchent : $4R = a\sqrt{2} \implies a = \frac{4R}{\sqrt{2}} = 2\sqrt{2}R$.
> 4. **Volume de la maille** : $V_{\text{maille}} = a^3 = (2\sqrt{2}R)^3 = 16\sqrt{2}R^3$.
> 5. **Multiplicité $Z$** : 
>    * 8 sommets $\times \frac{1}{8} = 1$
>    * 6 faces $\times \frac{1}{2} = 3$
>    * Donc $Z = 1 + 3 = 4$.
> 6. **Volume occupé** : $V_{\text{occ}} = 4 \times \left(\frac{4}{3}\pi R^3\right) = \frac{16}{3}\pi R^3$.
> 7. **Calcul de la compacité** :
>    $$C = \frac{\frac{16}{3}\pi R^3}{16\sqrt{2}R^3} = \frac{\pi}{3\sqrt{2}} = \frac{\pi\sqrt{2}}{6} \approx 0{,}74$$