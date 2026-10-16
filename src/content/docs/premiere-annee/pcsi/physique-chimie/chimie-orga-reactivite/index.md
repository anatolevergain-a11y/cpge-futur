---
title: 'Cours : Réactivité en chimie organique'
description: 'Synthèse de cours, théorèmes et démonstrations.'
---

# Fiche de Cours : Réactivité en chimie organique
Niveau: ** Première année PCSI  
**Matière :** Physique-Chimie  
Enseignant: ** Professeur de CPGE  

---

## 1. Introduction et effets électroniques

La réactivité en chimie organique est régie par la recherche de stabilité thermodynamique et par des aspects cinétiques. Pour l'étudier, il est indispensable de comprendre la distribution électronique au sein des molécules, dictée par les liaisons $\sigma$ et $\pi$.

### Définitions

*   **Effet Inductif ($\text{I}$) :** Polarisation d'une liaison $\sigma$ due à la différence d'électronégativité entre les deux atomes liés. Cet effet se propage le long du squelette carboné par polarisation successive et s'atténue rapidement (négligeable au-delà de 3 liaisons).
    *   $\text{I}<0$ : Groupement attracteur par effet inductif (plus électronégatif que le carbone, ex : $-\text{F}$, $-\text{Cl}$, $-\text{OH}$, $-\text{NO}_2$, $-\text{NR}_3^+$).
    *   $\text{I}>0$ : Groupement donneur par effet inductif (moins électronégatif ou chargé négativement, ex : groupements alkyles $-\text{R}$).
*   **Effet Mésomère ($\text{M}$) :** Délocalisation d'électrons $\pi$ ou de paires libres au sein d'un système conjugué (alternance liaisons doubles/simples ou double/périphérie avec doublet non liant/lacune).
    *   $\text{M}<0$ : Groupement attracteur par effet mésomère (possède une double/triple liaison polarisée vers un hétéroatome, ex : $-\text{CHO}$, $-\text{COR}$, $-\text{CN}$, $-\text{NO}_2$).
    *   $\text{M}>0$ : Groupement donneur par effet mésomère (possède un doublet non liant sur un atome directement lié au système conjugué, ex : $-\text{OH}$, $-\text{OR}$, $-\text{NH}_2$, halogènes $-\text{X}$).

> **Règle fondamentale :** Les halogènes ($\text{F}, \text{Cl}, \text{Br}, \text{I}$) possèdent un effet inductif attracteur ($\text{I}<0$) prépondérant devant leur effet mésomère donneur ($\text{M}>0$), sauf dans le cas des réactions de substitution aromatique où la mésomérie oriente la réactivité.

---

## 2. Outils de description de la réactivité : Lieux et mécanismes

### Définitions

*   **Nucléophile ($\text{Nu}^-$ ou $\text{Nu}$ dans l'idéal) :** Entité riche en électrons (possédant un doublet non liant ou une liaison $\pi$) capable de céder un doublet électronique pour former une liaison covalente. Ce sont des *bases de Lewis*.
*   **Électrophile ($\text{E}^+$) :** Entité pauvre en électrons (possédant une lacune électronique ou un site de basse densité électronique) capable d'accepter un doublet électronique. Ce sont des *acides de Lewis*.
*   **Intermédiaire réactionnel :** Espèce chimique transitoire, formée au cours d'une étape élémentaire, ayant une durée de vie très courte mais un bilan de charges ou d'octets précis (carbocation, carbanion, radical libre).

---

## 3. Les grands types de réactions

### A. Les Substitutions Nucléophiles sur le carbone saturé ($\text{S}_\text{N}$)

Une substitution nucléophile consiste au remplacement d'un groupe partant (souvent un halogénure ou un tosylate, bon groupe partant car basique faible) par un nucléophile.

#### Théorèmes et Mécanismes

*   **Mécanisme $\text{S}_\text{N}1$ (Substitution Nucléophile d'ordre 1) :**
    *   Cinétique : $v = k[\text{R}-\text{X}]$ (monomoléculaire dans l'étape cinétiquement déterminante).
    *   En deux étapes :
        1.  Rupture hétérolytique lente de la liaison $\text{C}-\text{X}$ $\rightarrow$ formation d'un **carbocation plan** (intermédiaire réactionnel).
        2.  Attaque rapide et équiprobable du nucléophile de part et d'autre du plan du carbocation.
    *   **Stéréochimie :** Conduit à un **mélange racémique** (perte d'information stéréochimique).

*   **Mécanisme $\text{S}_\text{N}2$ (Substitution Nucléophile d'ordre 2) :**
    *   Cinétique : $v = k[\text{R}-\text{X}][\text{Nu}^-]$ (bimoléculaire).
    *   En une seule étape concertée : Attaque du nucléophile du côté opposé au groupe partant (reflux par l'arrière).
    *   **Stéréochimie :** Conduit à une **inversion de configuration** (inversion de Walden).

| Caractéristiques | $\text{S}_\text{N}1$ | $\text{S}_\text{N}2$ |
| :--- | :--- | :--- |
| **Substrat favorisé** | Carbone tertiaire (stabilisation du carbocation par $\text{I}>0$) | Carbone primaire ou secondaire (encombrement stérique faible) |
| **Nucléophile** | Faible (souvent le solvant : solvolyse) | Fort ($\text{HO}^-, \text{RO}^-, \text{CN}^-$, etc.) |
| **Solvant** | Polaire protique (stabilise les ions par liaisons hydrogène) | Polaire aprotique (exacerbe la nucléophilie) |

---

### B. Les Éliminations ($\text{E}1$ et $\text{E}2$)

Concurrentes des réactions de $\text{S}_\text{N}$, les éliminations conduisent à la formation d'une liaison $\pi$ (alcène).

*   **Règle de Zaitsev :** Lors d'une élimination, l'alcène majoritairement formé est le plus substitué (donc le plus stable thermodynamiquement, par hyperconjugaison).

---

### C. Les Additions sur les liaisons multiples ($\text{C}=\text{C}$ et $\text{C}=\text{O}$)

#### 1. Addition électrophile sur les alcènes ($\text{Ad}_\text{E}$)
La liaison $\pi$ de l'alcène, riche en électrons, se comporte comme un nucléophile vis-à-vis d'un électrophile.
*   **Règle de Markovnikov :** Lors de l'addition d'un acide protique $\text{H}-\text{X}$ sur un alcène non symétrique, l'hydrogène se fixe sur le carbone de la double liaison qui porte le plus d'hydrogènes (ce qui revient à passer par l'intermédiaire du carbocation le plus stable).

#### 2. Addition nucléophile sur les composés carbonylés ($\text{C}=\text{O}$)
Le carbone fonctionnel est fortement électrophile ($\delta^+$) en raison de l'effet $-\text{I}$ et $-\text{M}$ de l'oxygène.
*   **Mécanisme général :** Attaque du nucléophile sur le carbone du carbonyle, entraînant le report du doublet de la liaison $\pi$ sur l'oxygène, puis protonation de l'alcoxyde formé.

---

## 4. Méthodes et Stratégies de Résolution

1.  **Analyser le substrat :**
    *   Quel est le site réactionnel ? (Carbone saturé ? Carbone insaturé ? Présence d'un groupe partant ?)
    *   Quel est l'effet inductif/mésomère des substituants sur la stabilité des intermédiaires (carbocations, carbanions, carbanions stabilisés) ?
2.  **Identifier les réactifs (conditions opératoires) :**
    *   Présence d'un métal, d'un acide fort, d'une base forte, d'un nucléophile fort ?
3.  **Écrire le mécanisme pas à pas :**
    *   Utiliser rigoureusement les **flèches courbes** : la queue de la flèche part du doublet électronique (liaison ou doublet non liant) et la tête pointe vers le site électrophile ou la lacune. *Rappel : Un mouvement de flèche représente le déplacement d'un doublet d'électrons ($\text{2 e}^-$).*
4.  **Discuter la régiosélectivité et la stéréosélectivité :**
    *   Toujours préciser si le produit est majoritaire, unique, ou s'il s'agit d'un mélange diastéréoisomérique / racémique.

---

## 5. Pièges à Éviter en PCSI

*   **Piège 1 (Mécanistique) :** Oublier de conserver la charge globale lors de l'écriture d'une étape élémentaire. Le nombre de charges doit se conserver de part et d'autre de la flèche de réaction.
*   **Piège 2 ($\text{S}_\text{N}1$ vs $\text{S}_\text{N}2$) :** Invoquer un mécanisme $\text{S}_\text{N}1$ sur un halogénoalcane primaire. *Un carbocation primaire est beaucoup trop instable pour se former.* La réaction sera obligatoirement $\text{S}_\text{N}2$ (voire impossible si l'encombrement est maximal).
*   **Piège 3 (Stéréochimie) :** Oublier que l'attaque d'un nucléophile sur un plan trigonal (carbocation ou carbone carbonylé) se fait par les **deux faces** (sauf si une gêne stérique induite par le reste de la molécule l'interdit). Cela conduit à un mélange racémique ou à des proportions inégales de diastéréoisomères (dans le cas d'une face déjà porteuse d'un centre chiral).
*   **Piège 4 (Flèches courbes) :** Tracer une flèche qui part d'un atome pauvre en électrons. Une flèche symbolise le mouvement d'un *doublet d'électrons*, elle part donc **toujours** d'une zone riche (doublet non liant ou liaison).