---
title: 'Cours : Analyse des systèmes mécaniques'
description: 'Synthèse officielle du cours et démonstrations clés.'
---

# Analyse des Systèmes Mécaniques — Fiche de Cours PCSI

## Introduction et Objectifs
L'analyse des systèmes mécaniques en Sciences Industrielles de l'Ingénieur (SII) vise à modéliser le comportement des mécanismes pour concevoir, valider ou optimiser leur architecture. Cette fiche synthétise les outils fondamentaux de la cinématique et de la statique du solide indéformable, indispensables en classe préparatoire.

---

## 1. Modélisation géométrique et cinématique des mécanismes

### 1.1. Notion de Solide Indéformable
Un solide $S$ est dit indéformable si la distance entre deux points $M$ et $N$ quelconques de $S$ reste constante au cours du temps :
$$\forall (M, N) \in S^2, \quad \frac{d}{dt} (MN^2) = 0$$

### 1.2. Champ des vitesses dans un solide
Le champ des vitesses d'un solide $S$ en mouvement par rapport à un repère galiléen $\mathcal{R}_0$ est un champ équiprojectif. Il existe un vecteur rotation $\vec{\Omega}_{S/\mathcal{R}_0}$ tel que pour tout point $M$ et $P$ appartenant à $S$ :
$$\vec{V}(M \in S/\mathcal{R}_0) = \vec{V}(P \in S/\mathcal{R}_0) + \vec{OM} \wedge \vec{\Omega}_{S/\mathcal{R}_0}$$

### 1.3. Torseur cinématique
Le caractère équiprojectif du champ des vitesses permet de l'associer à un torseur, noté $\mathcal{V}_{S/\mathcal{R}_0}$ :
$$\{\mathcal{V}_{S/\mathcal{R}_0}\} = \begin{cases} 
\vec{\Omega}_{S/\mathcal{R}_0} \quad \text{(vecteur rotation)} \\ 
\vec{V}(P \in S/\mathcal{R}_0) \quad \text{(vecteur vitesse au point } P\text{)}
\end{cases}_{\text{point } P}$$

### 1.4. Liaisons mécaniques usuelles (Rappel)
| Liaison | Représentation / Mobilité | Torseur cinématique $\mathcal{V}$ en $O$ |
| :--- | :--- | :--- |
| **Pivot** (axe $\vec{x}$) | Rotation d'axe $\vec{x}$ | $\begin{cases} \dot{\theta} \vec{x} \\ \vec{0} \end{cases}$ |
| **Glissière** (axe $\vec{x}$) | Translation suivant $\vec{x}$ | $\begin{cases} \vec{0} \\ \dot{x} \vec{x} \end{cases}$ |
| **Pivot glissant** (axe $\vec{x}$) | 1 rotation, 1 translation | $\begin{cases} \dot{\theta} \vec{x} \\ \dot{x} \vec{x} \end{cases}$ |
| **Rotule** (centre $O$) | 3 rotations | $\begin{cases} \vec{\Omega} = p\vec{x} + q\vec{y} + r\vec{z} \\ \vec{0} \end{cases}$ |
| **Appui plan** (normale $\vec{z}$) | 1 translation, 2 rotations | $\begin{cases} p\vec{x} + q\vec{y} \\ \dot{x}\vec{x} + \dot{y}\vec{y} \end{cases}$ |

---

## 2. Paramétrage et Graphe de liaison

### 2.1. Graphe des liaisons
Le graphe des liaisons est un graphe non orienté dont les sommets représentent les solides du mécanisme et les arêtes matérialisent les liaisons mécaniques entre ces solides. Il permet d'identifier les boucles cinématiques et d'évaluer l'hyperstatisme.

### 2.2. Fermeture géométrique
Dans un mécanisme comprenant une boucle fermée de solides $S_1 - S_2 - \dots - S_n - S_1$, la composition des vecteurs position (ou des matrices de passage) conduit à une équation vectorielle de fermeture :
$$\sum_{i=1}^{n} \vec{O_i O_{i+1}} = \vec{0}$$
Par projection dans une base adaptée, on obtient $Scalar$ équations scalaires permettant de lier les paramètres géométriques et cinématiques.

---

## 3. Statique des systèmes mécaniques

### 3.1. Torseur des actions mécaniques (TAM)
Une action mécanique extérieure exercée par un milieu $Ext$ sur un solide $S$ se modélise par un torseur d'action mécanique :
$$\{\mathcal{T}_{Ext \to S}\} = \begin{cases} 
\vec{R}_{Ext \to S} \quad \text{(résultante)} \\ 
\vec{M}_{P}(Ext \to S) \quad \text{(moment en } P\text{)}
\end{cases}_{\text{point } P}$$

### 3.2. Principe Fundamental de la Statique (PFS)
Un solide $S$ (ou un ensemble de solides) est en équilibre par rapport à un repère galiléen $\mathcal{R}_0$ si et seulement si la somme des torseurs des actions mécaniques extérieures est nulle :
$$\sum \{\mathcal{T}_{\text{ext} \to S}\} = \{\mathcal{0}\}$$
Soit en tout point $P$ :
$$\begin{cases} 
\sum \vec{R}_{\text{ext} \to S} = \vec{0} \quad \text{(Théorème de la résultante)} \\ 
\sum \vec{M}_{P}(\text{ext} \to S) = \vec{0} \quad \text{(Théorème du moment cinétique / statique)}
\end{cases}$$

### 3.3. Torseurs d'actions mécaniques transmissibles (Liaisons parfaites)
En statique, on utilise les torseurs transmissibles duals de ceux de la cinématique (en l'absence de frottement) :
*   **Liaison Pivot d'axe $(O, \vec{x})$ :** 
    $$\{\mathcal{T}\} = \begin{cases} X\vec{x} + Y\vec{y} + Z\vec{z} \\ 0\vec{x} + M_y\vec{y} + M_z\vec{z} \end{cases}_{\text{point } O}$$

---

## 4. Méthodologie de résolution en PCSI

Pour mener à bien l'analyse d'un système mécanique en CPGE, la démarche rigoureuse suivante doit être appliquée :

1.  **Isoler** un solide ou un sous-ensemble de solides de manière explicite (bilan des solides isolés).
2.  Faire le **bilan des actions mécaniques extérieures (BAME)** s'exerçant sur l'isolé (en précisant la nature des liaisons et les actions à distance comme la pesanteur).
3.  Écrire le **PFS** en choisissant judicieusement le point $P$ pour annuler le moment de certaines inconnues de liaison (par exemple, sur l'axe d'une liaison pivot).
4.  Exploiter les propriétés géométriques (fermeture cinématique) si le nombre d'équations scalaires est insuffisant par rapport au nombre d'inconnues (notion d'hyperstatisme).