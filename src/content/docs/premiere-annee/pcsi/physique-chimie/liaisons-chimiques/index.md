---
title: 'Cours : Liaisons chimiques et géométrie'
description: 'Synthèse de cours, théorèmes et démonstrations.'
---

# FICHE DE COURS : Liaisons chimiques et géométrie
**Filière :** MPSI/PCSI (Première année)  
**Matière :** Physique-Chimie  

---

## 1. Introduction et formalismes fondamentaux

### A. Configuration électronique et valence
Pour décrire les liaisons chimiques, on se place dans le cadre de l'approximation de Slater et on considère les électrons de valence (couche externe).

*   **Règle de l'octet et du duornet :** Les éléments tendent à acquérir une structure électronique stable semblable à celle d'un gaz rare ($s^2$ pour He, $s^2 p^6$ pour les autres).
*   **Électronégativité ($\chi$) :** Aptitude d'un atome à attirer les électrons engagés dans une liaison. 
    *   *Échelle de Pauling :* Augmente de gauche à droite dans une période et du bas vers le haut dans une colonne. Le fluor est l'élément le plus électronégatif.

### B. Schéma de Lewis
Le schéma de Lewis représente les électrons de valence sous forme de points (électrons célibataires) ou de tirets (doublets non liants).

*   **Liaison covalente :** Mise en commun de deux électrons célibataires provenant de deux atomes différents.
*   **Liaison dative (ou de coordination) :** Liaison covalente où les deux électrons proviennent du même atome (donneur vers accepteur).
*   **Charge formelle ($CF$) :** Pour un atome dans une structure de Lewis :
    $$CF = V - L - \frac{1}{2} \text{Li}$$
    où $V$ est le nombre d'électrons de valence de l'atome isolé, $L$ le nombre d'électrons non liants et $\text{Li}$ le nombre d'électrons liants (dans les liaisons). *La somme des charges formelles est égale à la charge globale de l'entité.*

---

## 2. Modèle VSEPR (ou Théorie de Gillespie)

### A. Principe fondamental
Le modèle **VSEPR** (*Valence Shell Electron Pair Repulsion*) permet de prédire la géométrie des molécules basées sur la répulsion électrostatique des paires d'électrons de la couche de valence autour d'un atome central $A$.

On note la formule VSEPR : $\mathbf{AX_nE_m}$
*   $A$ : Atome central.
*   $X$ : Ligand (atome lié à $A$), comptant pour 1 site (liaison simple, double ou triple comptent pour **un seul** site répulsif).
*   $E$ : Doublet non liant porté par $A$.

### B. Géométries de base (Nombre steric $NS = n + m$)

| $NS = n+m$ | Type VSEPR | Géométrie de l'atome central | Angles théoriques | Exemples |
| :---: | :---: | :--- | :---: | :--- |
| **2** | $AX_2$ | Linéaire | $180^\circ$ | $CO_2$ |
| **3** | $AX_3$ | Trigonale plane | $120^\circ$ | $BF_3$ |
| **3** | $AX_2E$ | Coudée | $< 120^\circ$ | $SO_2$ |
| **4** | $AX_4$ | Tétraédrique | $109,5^\circ$ | $CH_4$ |
| **4** | $AX_3E$ | Pyramidale trigonale | $\approx 107^\circ$ | $NH_3$ |
| **4** | $AX_2E_2$ | Coudée | $\approx 104,5^\circ$ | $H_2O$ |
| **5** | $AX_5$ | Bipyramidale trigonale | $90^\circ$ et $120^\circ$ | $PCl_5$ |
| **6** | $AX_6$ | Octaédrique | $90^\circ$ | $SF_6$ |

> **Règle empirique de répulsion :** 
> $\text{Répulsion (E-E)} > \text{Répulsion (E-X)} > \text{Répulsion (X-X)}$
> Un doublet non liant, plus étalé dans l'espace, comprime l'angle entre les liaisons $A-X$.

---

## 3. Polarité des molécules

*   **Moments dipolaires de liaison ($\vec{\mu}$ liée) :** Dirigé de l'atome le moins électronégatif vers le plus électronégatif. Norme $\mu = q \cdot d$ (en Debye $\text{D}$).
*   **Moment dipolaire global ($\vec{\mu}_{mol}$) :** Somme vectorielle des moments dipolaires de toutes les liaisons et des doublets non liants :
    $$\vec{\mu}_{mol} = \sum \vec{\mu}_{\text{liaisons}} + \sum \vec{\mu}_{\text{doublets}}$$
*   **Conséquence :** Une molécule est **polaire** si $\vec{\mu}_{mol} \neq \vec{0}$ (ce qui implique une dissymétrie géométrique ou des différences d'électronégativité marquées). Elle est **apolaire** si $\vec{\mu}_{mol} = \vec{0}$ (ex: $CO_2$ linéaire, $CH_4$ tétraédrique parfait).

---

## 4. Introduction à la théorie des orbitales moléculaires (LCAO)

### A. Principe de la combinaison linéaire (CLOA)
La théorie des orbitales moléculaires (OM) décrit les électrons délocalisés sur toute la molécule.
Une orbitale moléculaire $\psi$ est obtenue par combinaison linéaire d'orbitales atomiques ($\phi_A, \phi_B$) :
$$\psi = c_A \phi_A + c_B \phi_B$$

*   **OM Liante ($\psi_L$) :** In phase ($\phi_A + \phi_B$). Densité électronique augmentée entre les noyaux. Énergie inférieure à celle des OAs isolées (stabilisation).
*   **OM Antiliante ($\psi^*$) :** En opposition de phase ($\phi_A - \phi_B$). Présence d'un plan nodal (nulle part de présence électronique entre les noyaux). Énergie supérieure (déstabilisation).
*   **OM Non liante :** Pas de recouvrement significatif, l'énergie reste inchangée.

### B. Diagramme d'énergie (cas diatomiques homonucléaires $A_2$ de la 2ème période)
Pour $O_2$ et $F_2$, l'ordre de remplissage des OM issues des orbitales $2p$ est :
$$\sigma_{2p} < (\pi_{2px} = \pi_{2py}) < (\pi^*_{2px} = \pi^*_{2py}) < \sigma^*_{2p}$$
*(Note : Pour $B_2, C_2, N_2$, il y a un couplage $2s-2p$ qui inverse $\sigma_{2p}$ et les $\pi_{2p}$).*

*   **Indice de liaison ($L$) :** 
    $$L = \frac{N_{liants} - N_{antiliants}}{2}$$
    Plus $L$ est grand, plus la liaison est forte et courte. (Ex : $L=3$ pour $N \equiv N$).
*   **Propriétés magnétiques :** Si tous les électrons des OM sont appariés, la molécule est **diamagnétique** (faiblement repoussée par un champ magnétique). S'il y a des électrons célibataires (ex : $O_2$ possède 2 électrons célibataires dans $\pi^*$), elle est **paramagnétique** (attirée par un aimant).

---

## 5. Méthodes et Savoir-faire

1.  **Établir un schéma de Lewis valide :**
    *   Compter le nombre total d'électrons de valence $N_v$.
    *   Placer l'atome le moins électronégatif au centre (sauf H).
    *   Relier les ligands par des liaisons simples.
    *   Compléter les octets des ligands, puis de l'atome central.
    *   Vérifier les charges formelles (minimiser les charges et placer la charge négative sur l'atome le plus électronégatif).
2.  **Prédire la géométrie :**
    *   Faire le Lewis.
    *   Compter $NS = n + m$.
    *   Conclure sur la géométrie VSEPR.

---

## 6. Pièges classiques à éviter

*   **Piège 1 :** Oublier de compter les doublets non liants de l'atome central lors du calcul du nombre stérique $NS$ (le modèle VSEPR prend en compte *tous* les sites électroniques, liants et non liants).
*   **Piège 2 :** Confondre géométrie de la molécule et géométrie du squelette électronique. (Exemple : $H_2O$ a un squelette *tétraédrique* ($NS=4$), mais une géométrie moléculaire *coudée*).
*   **Piège 3 :** Croire qu'une liaison double compte pour 2 sites dans le modèle VSEPR. Elle ne compte que pour **1** direction de répulsion (1 site).
*   **Piège 4 :** Violation de l'octet pour les éléments de la 2ème période (C, N, O, F ne peuvent **jamais** expandre leur octet, ils ont au maximum 4 orbitales de valence $2s$ et $2p$). L'expansion de l'octet n'est possible qu'à partir de la 3ème période (présence d'orbitales $d$ vacantes, ex : $PCl_5$, $SF_6$).