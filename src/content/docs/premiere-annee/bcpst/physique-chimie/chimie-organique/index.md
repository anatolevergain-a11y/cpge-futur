---
title: 'Cours : Chimie organique'
description: 'Synthèse de cours, théorèmes et démonstrations.'
---

# Fiche de Cours : Chimie Organique (CPGE BCPST 1ère année)

---

## I. Structure électronique, liaisons et effets électroniques

### 1. Définitions et polarité
La chimie organique s'intéresse aux composés du carbone. La stabilité des édifices repose sur la règle de l'octet et la formation de liaisons covalentes (partage d'électrons).
*   **Électronégativité ($\chi$) :** Capacité d'un atome à attirer les électrons d'une liaison. Par ordre croissant usuel en BCPST : $\chi(H) \approx \chi(C) < \chi(N) < \chi(O) < \chi(Halogènes)$.
*   **Moment dipolaire ($\vec{\mu}$) :** Grandeur vectorielle traduisant la polarité d'une liaison ou d'une molécule. Une liaison est polarisée si $\Delta\chi \neq 0$.

### 2. Les effets électroniques
Ces effets agissent le long de la chaîne carbonée et modifient la densité électronique locale.

*   **Effet Inductif ($I$) :** 
    *   Lié à la différence d'électronégativité et transmis par les liaisons $\sigma$ (s'atténue rapidement avec la distance, négligeable au-delà de 3 liaisons).
    *   **$-I$ (inducto-attracteur) :** Atome ou groupe plus électronégatif que le carbone (ex: $-\text{Halogène}$, $-\text{OH}$, $-\text{NO}_2$, $-\text{NR}_3^+$).
    *   **$+I$ (inducto-donneur) :** Groupes alkyles ($-\text{CH}_3$, $-\text{CH}_2\text{R}$, etc.) et les ions carboxylates $-\text{COO}^-$ (par convention).

*   **Effet Mésomère ($M$) :**
    *   Lié à la délocalisation des électrons $\pi$ ou des doublés non liants dans un système conjugué (alternance liaison double / liaison simple, ou liaison double / doublet non liant).
    *   **$-M$ (mésomère attracteur) :** Possède une double ou triple liaison polarisée vers un hétéroatome (ex: $-\text{C}=\text{O}$, $-\text{C}\equiv\text{N}$, $-\text{NO}_2$).
    *   **$+M$ (mésomère donneur) :** Possède un doublet non liant porté par un atome directement lié au système insaturé (ex: $-\text{OH}$, $-\text{OR}$, $-\text{NH}_2$, halogènes). *Note : les halogènes ont un effet $-I$ dominant et $+M$ secondaire.*

---

## II. Stéréochimie

### 1. Représentations
*   **Cram :** Traits pleins (dans le plan), hachures (vers l'arrière), triangles pleins (vers l'avant).
*   **Newman :** Vue selon un axe carbone-carbone (carbone de devant = point, carbone de derrière = cercle).
*   **Fischer :** Projections planes réservées aux molécules carbonées acycliques. Les traits horizontaux viennent vers l'avant, les verticaux vers l'arrière.

### 2. Stéréoisomérie de configuration
*   **Chiralité :** Une molécule est chirale si elle n'est pas superposable à son image miroir dans un miroir plan. Une molécule ne possédant **aucun plan ni centre de symétrie** est généralement chirale.
*   **Carbone asymétrique ($C^*$) :** Carbone lié à 4 groupements atomiques différents.
*   **Configuration absolue (Règles de Cahn-Ingold-Prelog - CIP) :**
    1. Hiérarchiser les 4 groupes liés au $C^*$ par numéro atomique $Z$ décroissant.
    2. Orienter le groupe de plus faible priorité ($4$) vers l'arrière.
    3. Regarder les groupes $1 \to 2 \to 3$ : sens horaire $\implies$ **(R)** (Rectus), sens anti-horaire $\implies$ **(S)** (Sinister).

*   **Énantiomères :** Stéréoisomères images miroirs l'un de l'autre et non superposables. Leurs propriétés physiques (hors pouvoir rotatoire) et chimiques sont identiques en milieu achiral.
*   **Diastéréoisomères :** Stéréoisomères qui ne sont pas énantiomères (inclut les diastéréoisomères $Z/E$ et les composés à plusieurs $C^*$ non images miroirs).

---

## III. Réactivité et mécanismes réactionnels

### 1. Notions fondamentales
*   **Nucléophile ($\text{Nu}^-$ ou $\text{Nu}^{\delta-}$) :** Espèce riche en électrons (possédant un doublet non liant ou une liaison $\pi$), qui cherche un site pauvre en électrons. (Ex : $\text{HO}^^{-}$, $\text{H}_2\text{O}$, $\text{NH}_3$).
*   **Électrophile ($E^+$ ou $E^{\delta+}$) :** Espèce pauvre en électrons (lacune électronique ou site positivement polarisé), qui cherche un site riche en électrons. (Ex : $\text{H}^+$, $\text{carbocation}$, $\text{R}-\text{X}$).
*   **Intermédiaires réactionnels :** 
    *   *Carbocation* : trivalent, lacune électronique, plan ($sp^2$).
    *   *Carbanion* : trivalent, doublet non liant, pyramidal ($sp^3$).
    *   *Radical libre* : monovalent, électron célibataire.

### 2. Les grandes réactions en chimie organique

#### A. Substitution Nucléophile Aliphatique ($SN$)
Remplacement d'un groupe partant (souvent un halogénure $\text{X}^-$) par un nucléophile.
*   **$SN_2$ (Substitution Nucléophile Bimoléculaire) :**
    *   *Mécanisme* : Concerté en une seule étape. Attaque du nucléophile du côté opposé au groupe partant ($\text{dos}$).
    *   *Cinétique* : $v = k[\text{Dérivé halogéné}][\text{Nucléophile}]$.
    *   *Stéréochimie* : **Inversion de configuration** (Inversion de Walden).
    *   *Substrat* : Favorisée pour les dérivés primaires (encombrement stérique faible).

*   **$SN_1$ (Substitution Nucléophile Unimoléculaire) :**
    *   *Mécanisme* : En deux étapes. 1) Départ du groupe partant (étape lente, formant un **carbocation** plan). 2) Attaque du nucléophile (rapide) de part et d'autre du plan.
    *   *Cinétique* : $v = k[\text{Dérivé halogéné}]$ (ordre 1).
    *   *Stéréochimie* : Racémisation (mélange racémique 50% R / 50% S).
    *   *Substrat* : Favorisée pour les dérivés tertiaires (stabilisation du carbocation par effet $+I$ et $+M$).

#### B. Élimination ($E_1$ et $E_2$)
Création d'une double liaison par départ d'un groupe partant et d'un proton $\beta$.
*   **Règle de Zaitsev :** Lors d'une élimination, le produit majoritaire est l'alcène le plus substitué (donc le plus stable thermodynamiquement).

#### C. Additions sur les alcènes
La double liaison $\pi$, riche en électrons, agit comme un nucléophile.
*   **Addition electrophile ($\text{AE}$)** : Addition d'un réactif asymétrique ($\text{H}-\text{X}$) sur un alcène.
    *   **Règle de Markovnikov :** Lors de l'addition d'un protide $\text{HX}$ sur un alcène non symétrique, l'hydrogène se fixe sur le carbone de la double liaison qui porte le **déjà le plus d'hydrogènes** (le plus substitué forme le carbocation intermédiaire le plus stable).

---

## IV. Méthodes et Pièges (À retenir pour les colles et écrits)

### 1. Méthode pour déterminer le mécanisme ($SN_1$ vs $SN_2$ / $E_1$ vs $E_2$)
1.  **Regarder le substrat :**
    *   Carbone primaire $\implies$ $SN_2$ ou $E_2$ (jamais $SN_1/E_1$ car le carbocation primaire est trop instable).
    *   Carbone tertiaire $\implies$ $SN_1$ ou $E_1$ (parfois $E_2$ si base forte).
2.  **Regarder le réactif :**
    *   Base forte / Nucléophile fort ($\text{HO}^-$, $\text{RO}^-$) $\implies$ $SN_2$ ou $E_2$.
    *   Nucléophile faible / Solvant protique ($\text{H}_2\text{O}$, $\text{ROH}$) $\implies$ $SN_1$ ou $E_1$.

### 2. Pièges classiques en BCPST
*   **Oubli de la stéréochimie :** Ne jamais oublier de préciser la stéréochimie (R/S, Z/E) dans les bilans réactionnels, en particulier lors d'une $SN_2$ (inversion obligatoire) ou d'une $SN_1$ (mélange racémique).
*   **Stabilité des carbocations :** Penser systématiquement à un éventuel **réarrangement de carbocation** (transposition 1,2 par déplacement d'un hydrure $\text{H}^-$ ou d'un groupe alkyle) si cela permet d'obtenir un carbocation plus stable (tertiaire > secondaire > primaire).
*   **Flèches courbes :** Les flèches partagent toujours **des doublets d'électrons** (d'une zone riche vers une zone pauvre) et non des noyaux atomiques. Une flèche commence *toujours* sur un doublet non liant ou une liaison $\sigma/\pi$ et s'arrête sur un atome ou au milieu d'une liaison.