---
title: 'Exercice 1 : Analyse fonctionnelle des systèmes'
description: 'Problème d entraînement type concours pour PTSI.'
---

### 🌐 Énoncé du problème / Étude de cas

Dans le cadre de la modernisation des lignes de production logistique à haute cadence, on s'intéresse à un système de tri automatique de colis par basculement de convoyeur (système dit de type *cross-belt* ou bras basculant). Le mécanisme étudié permet d'orienter un colis de masse $M$ variable vers une goulotte spécifique.

L'étude se focalise sur le sous-système d'orientation du plateau récepteur, animé par un moto-réducteur électrique associé à un mécanisme pignon-crémaillère et un guide linéaire. 

**Données et hypothèses de modélisation :**
- Masse maximale du colis : $M_{\text{max}} = \text{35 kg}$.
- Masse du plateau mobile : $m_{\text{plateau}} = \text{12 kg}$.
- Accélération de la pesanteur : $g = \text{9,81 m}\cdot\text{s}^{-2}$.
- Vitesse maximale de déplacement du plateau : $V_{\text{max}} = \text{1,5 m}\cdot\text{s}^{-1}$.
- Course utile du plateau : $L_{\text{course}} = \text{0,8 m}$.
- Le milieu industriel environnant est tempéré ($T \in [10^\circ\text{C}, 40^\circ\text{C}]$), mais soumis à des vibrations importantes et à de la poussière de carton.

---

### ❓ Questions progressives

1. **Identification du besoin et contexte (Bête à cornes)**
   À partir de l'étude de cas, définir le besoin auquel répond le sous-système de tri en répondant aux trois questions fondamentales de l'outil "Bête à cornes".

2. **Diagramme des interactions (Pieuvre)**
   Recenser les éléments du milieu extérieur interagissant avec le sous-système de guidage et d'entraînement du plateau. Établir le diagramme des interactions en distinguant les fonctions principales (FP) et les fonctions contraintes (FC).

3. **Caractérisation et critères d'appréciation**
   Pour la fonction principale « *Transférer le colis vers la goulotte assignée* » et la contrainte liée à l'environnement « *Résister à la pollution ambiante (poussière)* », proposer un critère d'appréciation et un niveau associé avec sa flexibilité.

4. **Analyse critique des hypothèses de modélisation**
   Le bureau d'études modélise initialement le contact entre le colis et le plateau par une liaison parfaite (sans frottement), et suppose que l'accélération du système est infiniment rapide (modèle impulsionnel). 
   Discuter la valider de ces hypothèses d'un point de vue physique et énergétique. Quel risque présente l'hypothèse d'accélération infinie pour le dimensionnement du moto-réducteur ?

---

### 💡 Pistes & Indications

- **Q1 :** Pour la bête à cornes, posez-vous la question : *À qui rend-il service ? Sur quoi agit-il ? Dans quel but ?*
- **Q2 :** Pensez à l'énergie électrique, à l'information (automate), au milieu extérieur (poussière, opérateur, châssis de la machine) et au colis lui-même.
- **Q3 :** Un critère doit être mesurable (ex: temps, position, IP...). La flexibilité s'exprime généralement de F0 (non négociable) à F3 (très négociable).
- **Q4 :** Intégrez les notions de force de frottement (loi de Coulomb), de puissance instantanée $P = F \cdot v$ et d'inertie des masses en mouvement.

---

### 📋 Corrigé détaillé et analyse des résultats

#### 1. Expression du besoin (Bête à cornes)
Le diagramme de la "bête à cornes" pour le système de tri s'articule ainsi :
- **À qui rend-il service ?** À l'opérateur / au système logistique global (centre de tri).
- **Sur quoi agit-il ?** Sur le colis de masse $M$ ($\le \text{35 kg}$).
- **Dans quel but ?** Orienter et transférer le colis du convoyeur principal vers la goulotte de sortie avec une vitesse $V_{\text{max}} = \text{1,5 m}\cdot\text{s}^{-1}$.

*Énoncé du besoin :* « Permettre au système logistique de trier les colis vers les goulottes de destination. »

#### 2. Diagramme des interactions (Pieuvre)
Recensement des éléments extérieurs : Colis, Énergie électrique, Ordres commande (API), Châssis (bâti), Milieu ambiant (poussière/température).

- **FP1 :** Transférer le colis vers la goulotte assignée.
- **FC1 :** S'adapter à l'énergie électrique disponible ($230\text{V}/\text{400}\text{V}$).
- **FC2 :** Communiquer avec l'automate de commande (ordres/comptes-rendus).
- **FC3 :** Résister au milieu environnant (poussières de carton, vibrations).
- **FC4 :** Être fixé sur le châssis de la machine.
- **FC5 :** Respecter les exigences de sécurité des biens et des personnes.

#### 3. Critères d'appréciation et niveaux
- **Pour FP1 (*Transférer le colis*) :**
  - *Critère :* Temps de transfert pour la course $L_{\text{course}} = \text{0,8 m}$.
  - *Niveau :* $t_{\text{transfert}} \le \text{0,7 s}$ (compatible avec $V_{\text{max}}$).
  - *Flexibilité :* F1 (peu négociable pour le débit global de la ligne).
- **Pour FC3 (*Résister à la poussière*) :**
  - *Critère :* Indice de protection (IP) du moto-réducteur et des guidages.
  - *Niveau :* IP 54 minimum (protégé contre les poussières et les projections d'eau).
  - *Flexibilité :* F0 (impératif pour éviter le grippage prématuré).

#### 4. Analyse critique des hypothèses de modélisation
* **Hypothèse de la liaison parfaite (sans frottement colis/plateau) :** 
  * *Critique :* En réalité, le coefficient d'adhérence $\mu$ entre un carton et un plateau métallique n'est pas nul (typiquement $\mu \approx \text{0,3 à 0,5}$). Si l'accélération $γ$ du plateau est trop élevée telle que $γ > \mu \cdot g$, il y a glissement du colis, ce qui invalide le positionnement précis. Le modèle sans frottement sous-estime les efforts à transmettre si l'on cherche à retenir le colis en phase de décélération.
* **Hypothèse d'une accélération infinie :**
  * *Critique :* Physiquement impossible. Une accélération infinie ($\Delta t \to 0$) impliquerait une puissance et un couple moteur infinis ($P = \frac{dE_c}{dt}$, et $\vec{F} = m\vec{\gamma}$). 
  * *Conséquence pour le dimensionnement :* Modéliser un profil de vitesse trapézoïdal ou en "S" (avec des accélérations finies) est obligatoire. Ignorer cette transition dynamique conduit à un sous-dimensionnement catastrophique du variateur de vitesse et des éléments de transmission (cisaillement de la crémaillère).