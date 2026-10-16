---
title: 'Optimisation au concours : SII PSI/PSI*'
description: 'Les questions incontournables aux concours, les erreurs à éviter et les rédactions modèles de jury.'
sidebar:
  badge:
    text: 'Méthode Concours'
    variant: 'caution'
---

## 🎯 Objectif du module & Exigences des Jurys

En tant que concepteur de sujets et président de jury pour les concours (Mines-Ponts, Centrale-Supélec, CCINP), je le répète chaque année lors des commissions de correction : **la différence entre une note de passage (10-12) et une note d'admissibilité prestigieuse (16-20) ne réside pas dans la quantité de calculs, mais dans la rigueur de la modélisation et la propreté de la rédaction.**

En filière PSI/PSI*, les Sciences Industrielles pour l'Ingénieur (SII) exigent une maîtrise parfaite de trois piliers fondamentaux :
1. **L'asservissement et l'analyse fréquentielle** (maîtrise de la stabilité et des performances).
2. **La modélisation multiphysique et dynamique 3D** (application propre des torseurs et du PFD).
3. **La cinématique des mécanismes et l'analyse structurale** (calcul d'hyperstatisme sans erreur de dénombrement).

Ce guide a été rédigé pour vous imposer les standards exacts attendus par les correcteurs. Apprenez ces méthodes canoniques, respectez les notations et chassez les pièges signalés.

---

## 📌 Question Type 1 : Détermination de la fonction de transfert en boucle fermée et étude des marges de phase/gain sur diagramme de Bode

### 💡 Méthode canonique & Étapes de rédaction

1. **Extraction du schéma-blocs :** Identifier clairement la chaîne directe $H(p)$ (ou $C(p)H(p)$ en présence d'un correcteur) et la chaîne de retour $F(p)$ (souvent un capteur, parfois unitaire $F(p) = 1$).
2. **Calcul de la FTFB (Fonction de Transfert en Boucle Fermée) :** 
   $$FTFB(p) = \frac{S(p)}{E(p)} = \frac{C(p)H(p)}{1 + C(p)H(p)F(p)}$$
   *Attention aux erreurs de signe lors du rebouclage.*
3. **Tracé asymptotique et réel (Bode) :** Identifier la classe du système (ordre de multiplicité du pôle en $p=0$), le gain global et les pulsations caractéristiques (pôles et zéros).
4. **Lecture de la Marge de Gain ($MG$) et de la Marge de Phase ($MP$) :**
   - **Pulsation de coupure à gain unité $\omega_{cg}$ :** Définie par $|\text{FTBO}(j\omega_{cg})| = 1$ soit $0 \text{ dB}$.
   - **Marge de Phase :** $MP = 180^\circ + \arg(\text{FTBO}(j\omega_{cg}))$. Elle doit être strictement positive (typiquement $> 45^\circ$) pour garantir la stabilité et un amortissement correct.
   - **Pulsation critique $\omega_{\pi}$ :** Définie par $\arg(\text{FTBO}(j\omega_{\pi})) = -180^\circ$.
   - **Marge de Gain :** $MG(\text{en dB}) = -20 \log_{10}(|\text{FTBO}(j\omega_{\pi})|)$.

### 📋 Exemple de sujet & Rédaction modèle type Concours

**Énoncé type :** Soit un système asservi d'entrée $E(p)$ et de sortie $S(p)$ dont la fonction de transfert en boucle ouverte est :
$$\text{FTBO}(p) = \frac{K}{p(1 + \tau p)(1 + \frac{2\zeta}{\omega_0}p + \frac{p^2}{\omega_0^2})}$$
Avec $K = 10 \text{ s}^{-1}$, $\tau = 0.1 \text{ s}$, $\zeta = 0.5$ et $\omega_0 = 10 \text{ rad/s}$. Déterminer la marge de phase.

**Rédaction modèle (Copie type /20) :**
> **1. Expression de la FTBO et passage en harmonique :**
> La fonction de transfert en boucle ouverte s'écrit sous forme canonique :
> $$\text{FTBO}(p) = \frac{10}{p(1 + 0.1p)(1 + 0.1p + 0.01p^2)}$$
> En régime harmonique ($p = j\omega$) :
> $$\text{FTBO}(j\omega) = \frac{10}{j\omega(1 + 0.1j\omega)(1 - 0.01\omega^2 + 0.1j\omega)}$$
> 
> **2. Détermination de la pulsation de coupure à 0 dB ($\omega_{cg}$) :**
> Par définition, $|\text{FTBO}(j\omega_{cg})| = 1 \implies 20 \log_{10}(|\text{FTBO}(j\omega_{cg})|) = 0 \text{ dB}$.
> Graphiquement ou par résolution numérique approchée, on trouve :
> $$\omega_{cg} \approx 2.5 \text{ rad/s}$$
> 
> **3. Calcul de la Marge de Phase :**
> La phase de la FTBO à la pulsation $\omega_{cg}$ vaut :
> $$\arg(\text{FTBO}(j\omega_{cg})) = -90^\circ - \arctan(0.1 \times 2.5) - \arctan\left(\frac{0.1 \times 2.5}{1 - 0.01 \times (2.5)^2}\right)$$
> AN : $\arg(\text{FTBO}(j\omega_{cg})) \approx -90^\circ - 14.0^\circ - 14.9^\circ = -118.9^\circ$.
> 
> La Marge de Phase $MP$ est définie par :
> $$MP = 180^\circ + \arg(\text{FTBO}(j\omega_{cg})) = 180^\circ - 118.9^\circ = 61.1^\circ$$
> Le système est donc stable et présente un amortissement satisfaisant ($MP > 45^\circ$).

### ⚠️ Les pièges majeurs soulignés dans les rapports de jury
- **Confondre FTBO et FTBF :** Calculer les marges de stabilité sur la FTBF est éliminatoire. Les marges se lisent **toujours** sur la Fonction de Transfert en Boucle Ouverte ($\text{FTBO}$).
- **Oublier les unités :** Ne jamais oublier d'indiquer les degrés pour les phases et les rad/s pour les pulsations.
- **Erreur de signe sur la Marge de Phase :** Écrire $MP = \arg(...) - 180^\circ$ conduit à une valeur négative aberrante.

---

## 📌 Question Type 2 : Modélisation dynamique 3D par Principe Fondamental de la Dynamique et torseurs d'inertie

### 💡 Méthode canonique & Étapes de rédaction

1. **Isolage et Bilan des Actions Mécaniques Extérieures (BAME) :**
   - Définir clairement le système isolé (ex: solide $\{S\}$ ou ensemble $\{S_1 \cup S_2\}$).
   - Recenser toutes les actions mécaniques : liaisons (avec leurs composantes inconnues selon le graphe de liaisons), pesanteur, efforts extérieurs.
2. **Paramétrage cinématique :** 
   - Définir les repères liés à chaque solide et les parametres angulaires (angles d'Euler si 3D complet).
   - Exprimer les vecteurs vitesse et accélération du centre d'inertie $G$ et le vecteur rotation $\vec{\Omega}(S/R_0)$.
3. **Application du PFD en un point (souvent $G$ ou un point fixe $O$) :**
   - **Théorème de la résultante dynamique (TRD) :**
     $$\vec{R}_{\text{ext}\to S} = m \vec{\gamma}(G \in S/R_0)$$
   - **Théorème du moment dynamique (TMD) :**
     $$\vec{M}_{\text{ext}\to S}(P) = \left[ \frac{d\vec{\sigma}(P, S/R_0)}{dt} \right]_{R_0} + \vec{v}(P/R_0) \wedge m \vec{v}(G/R_0)$$
4. **Projection judicieuse :** Projeter les équations vectorielles sur des axes judicieux pour éliminer les inconnues de liaison inutiles (isoler une équation scalaire directe).

### 📋 Exemple de sujet & Rédaction modèle type Concours

**Énoncé type :** Soit un bras manipulateur modélisé par un solide $\{S\}$ de masse $m$, de centre d'inertie $G$, en rotation autour d'un axe fixe $(O, \vec{z}_0)$ à la vitesse angulaire $\dot{\theta}(t)$. Le torseur d'inertie en $G$ est donné dans la base $( \vec{x}, \vec{y}, \vec{z}_0)$ par sa matrice d'inertie diagonale : $I_G = \text{Diag}(A, B, C)$. Déterminer le couple moteur nécessaire en $O$ pour imposer un mouvement $\theta(t)$.

**Rédaction modèle (Copie type /20) :**
> **1. Système isolé et BAME :**
> On isole le solide $\{S\}$. Les actions mécaniques extérieures agissant sur $\{S\}$ sont :
> - L'action de la liaison pivot en $O$ : $\{ \mathcal{T}_{\text{pivot}\to S} \} = \left\{ \begin{array}{c} \vec{R}_{O} = X_O \vec{x} + Y_O \vec{y} + Z_O \vec{z}_0 \\ \vec{M}_{O} = C_m \vec{z}_0 + M_x \vec{x} + M_y \vec{y} \end{array} \right\}_O$
> - L'action de la pesanteur : $\{ \mathcal{T}_{\text{pes}} \} = \left\{ \begin{array}{c} -mg \vec{z}_0 \\ \vec{0} \end{array} \right\}_G$
> 
> **2. Cinématique du solide :**
> Le mouvement est une rotation autour de l'axe fixe $(O, \vec{z}_0)$.
> - Vecteur rotation : $\vec{\Omega}(S/R_0) = \dot{\theta} \vec{z}_0$
> - Vecteur accélération du centre d'inertie $G$ (situé à une distance $L$ selon $\vec{x}$) :
>   $$\vec{\gamma}(G/R_0) = -L\dot{\theta}^2 \vec{x} + L\ddot{\theta} \bar{y}$$
> 
> **3. Application du Théorème du Moment Dynamique en $O$ :**
> On applique le TMD en $O$ (point fixe dans $R_0$) selon l'axe $\vec{z}_0$ :
> $$\vec{M}_{\text{ext}\to S}(O) \cdot \vec{z}_0 = \left[ \frac{d\vec{\sigma}(O, S/R_0)}{dt} \right]_{R_0} \cdot \vec{z}_0$$
> 
> Le moment dynamique en $O$ projeté sur $\vec{z}_0$ fait intervenir le terme d'inertie $C$ (car l'axe est fixe et principal en $O$) :
> $$\left[ \frac{d\vec{\sigma}(O, S/R_0)}{dt} \right]_{R_0} \cdot \vec{z}_0 = C \ddot{\theta}$$
> 
> Le moment des actions extérieures en $O$ projeté sur $\vec{z}_0$ donne :
> $$\vec{M}_{\text{ext}\to S}(O) \cdot \vec{z}_0 = C_m + (\vec{OG} \wedge (-mg \vec{z}_0)) \cdot \vec{z}_0 = C_m - m g L \sin(\theta)$$
> 
> **4. Bilan et Équation finale :**
> En égalant action et dynamique :
> $$C_m - mgL\sin(\theta) = C\ddot{\theta} \implies C_m(t) = C\ddot{\theta} + mgL\sin(\theta)$$

### ⚠️ Les pièges majeurs soulignés dans les rapports de jury
- **Erreur de transport du torseur cinétique :** Appliquer le TMD en un point $P$ quelconque sans inclure le terme cinématique $\vec{v}(P/R_0) \wedge m\vec{v}(G/R_0)$ lorsque $P$ n'est ni fixe ni confondu avec $G$.
- **Matrice d'inertie hors axes principaux :** Utiliser $I_G \vec{\Omega}$ sans vérifier si la base choisie est bien la base des axes principaux d'inertie (attention aux produits d'inertie $F, G, H$ non nuls).

---

## 📌 Question Type 3 : Calcul du degré d'hyperstatisme d'un mécanisme et définition des liaisons équivalentes

### 💡 Méthode canonique & Étapes de rédaction

1. **Recensement structurel :**
   - $E$ : Nombre de pièces (solides) mobiles dans le mécanisme (hors bâti, donc $n_{solides} = E + 1$ en comptant le bâti).
   - $L$ : Nombre de liaisons cinématiques.
2. **Calcul de la Mobilité Utile ($Mu$) et Mobilité Interne ($Mi$) :**
   - $Mu$ : Nombre de degrés de liberté commandés ou utiles pour la fonction du service (ex: 1 pour une translation actionnée).
   - $Mi$ : Mobilités locales ou internes cinématiques (mouvements autonomes de sous-parties qui n'affectent pas la fonction globale, ex: rotation d'une bague de roulement sans effet).
3. **Application de la formule cinématique de l'hyperstatisme ($h$) :**
   $$h = 6 - E_c + Mu + Mi$$
   *(Ou via la formule statique $h = 6E - \sum_{\text{i}} \text{Inconnues}_i - Mu$ selon les données du sujet).*
   Où $E_c$ est le nombre d'équations scalaires indépendantes apportées par les liaisons ($E_c = \sum_{\text{l}} (6 - \text{dr}_l)$ où $\text{dr}_l$ est le nombre de degrés de liberté de la liaison).
4. **Détermination de la liaison équivalente (méthode des torseurs) :**
   - Écrire les torseurs des actions mécaniques transmissibles par chaque liaison d'une chaîne de solides.
   - Effectuer la somme (composition série ou parallèle) pour identifier le torseur résultant et en déduire la liaison équivalente.

### 📋 Exemple de sujet & Rédaction modèle type Concours

**Énoncé type :** Soit un mécanisme plan (ou spatial) composé de $E = 4$ pièces mobiles, reliées par 5 liaisons pivots (d'axe $\vec{z}$, soit 1 dof par liaison) et 1 liaison glissière (1 dof). Le système possède 1 mobilité utile ($Mu = 1$) et aucune mobilité interne ($Mi = 0$). Calculer le degré d'hyperstatisme $h$.

**Rédaction modèle (Copie type /20) :**
> **1. Dénombrement des éléments cinématiques :**
> - Nombre de pièces mobiles : $E = 4$
> - Nombre de liaisons : 
>   - 5 liaisons pivots $\implies 5 \times (6 - 1) = 25$ contraintes cinématiques.
>   - 1 liaison glissière $\implies 1 \times (6 - 1) = 5$ contraintes cinématiques.
> - Nombre total d'équations scalaires cinématiques indépendantes $E_c$ :
>   $$E_c = 25 + 5 = 30$$
> 
> **2. Application de la formule de l'hyperstatisme :**
> Le mécanisme étant spatial (par défaut en PSI si non spécifié "plan"), le nombre d'inconnues ou d'équations de référence par pièce est de 6.
> La formule générale de l'hyperstatisme cinématique est :
> $$h = 6E - E_c + Mu + Mi$$
> 
> AN : 
> $$h = 6(4) - 30 + 1 + 0$$
> $$h = 24 - 30 + 1 = -5$$
> 
> *Correction / Interprétation :* $h = -5$. Le mécanisme est donc **hypostatique** de degré 5. Il manque 5 conditions cinématiques (ou liaisons) pour que le mouvement soit guidé sans degré de liberté non maîtrisé, ce qui est logique pour un mécanisme comportant des mobilités non contraintes ou nécessitant des actionneurs supplémentaires. *(Note: Si $h > 0$, le système est hyperstatique; si $h = 0$, il est isostatique).*

### ⚠️ Les pièges majeurs soulignés dans les rapports de jury
- **Oublier de compter le bâti :** Le bâti fait partie de l'étude structurale mais ne compte pas dans les $E$ pièces *mobiles* (attention à ne pas l'ajouter deux fois ou l'omettre dans le graphe de liaisons).
- **Confondre Mobilité Interne et Mobilité Utile :** Une mobilité interne ($Mi$) s'ajoute au calcul de $h$ (car elle libère des équations sans service mécanique utile externe), tandis qu'une liaison redondante augmente l'hyperstatisme.
- **Erreur de dimension (Plan vs Spatial) :** Utiliser les formules en dimension 3 (base 6) pour un mécanisme strictement plan (base 3) sans l'avoir explicitement mentionné et justifié. En plan, $h = 3E - E_c + Mu + Mi$.