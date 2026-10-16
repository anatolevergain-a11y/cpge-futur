---
title: 'Exercice 2 : Gamme d usinage'
description: 'Problème d entraînement type concours.'
---

# Concours Mines-Ponts / CCINP (Filière PT)
## Sciences Industrielles de l'Ingénieur - Étude d'un processus d'industrialisation

---

## Énoncé et Mise en Situation

On s'intéresse à l'élaboration de la gamme d'usinage d'un corps de réducteur en alliage d'aluminium (EN AW-2017A - $\text{AlCu4MgSi}$). La pièce brute est obtenue par forgeage. L'étude se focalise sur l'usinage d'un alésage de précision guidant un arbre de transmission et du plan de joint associé.

### Données géométriques et tolérances (Extrait du dessin de définition) :
*   Diamètre de l'alésage fini : $\Phi 50^{+\0,025}_{+0,009}\text{ mm}$ (Tolérance ISO : $50\text{ H7/p6}$ selon l'ajustement, ici ajustement serré avec l'arbre).
*   Rugosité visée sur l'alésage : $Ra \le 0,8\text{ }\mu\text{m}$.
*   Planéité du plan de joint supérieur : $0,05\text{ mm}$.
*   Surépaisseur brute prévue pour l'alésage : $2\text{ mm au rayon}$.
*   Surépaisseur brute sur le plan de joint : $2,5\text{ mm}$.

---

## Questions

1.  **Analyse du besoin et choix des phases**
    *   **Q1.1.** Justifier la nécessité de décomposer le processus d'usinage en plusieurs phases (Ébauche, Demi-finition, Finition).
    *   **Q1.2.** Rappeler la définition et le rôle d'une surface de référence (isostatisme) lors de la première phase d'usinage (phase 10 : usinage du plan de joint).

2.  **Élaboration de la gamme d'usinage (Contrat de phases)**
    *   **Q2.1.** Proposer un avant-projet de gamme chronologique pour l'usinage du plan de joint et de l'alésage.
    *   **Q2.2.** Pour l'opération de finissage de l'alésage (réalisée par aléser-finir ou alésage fin), calculer la vitesse de rotation de la broche $N$ en $\text{tr/min}$ sachant que le diamètre est de $50\text{ mm}$ et que la vitesse de coupe recommandée pour l'alliage d'aluminium avec un outil carbure est $V_c = 250\text{ m/min}$.

3.  **Analyse critique et limites du modèle de coupe**
    *   **Q3.1.** Calculer le débit de copeau $Q$ (en $\text{cm}^3/\text{min}$) lors de la phase d'ébauche de l'alésage, sachant que la profondeur de passe est $a_p = 1,8\text{ mm}$ et l'avance par tour $f = 0,25\text{ mm/tr}$ (vitesse de coupe d'ébauche $V_{c,\text{ébauche}} = 300\text{ m/min}$).
    *   **Q3.2.** *Nuance et rigueur :* Le modèle linéaire de Taylor ou les efforts de coupe théoriques suffisent-ils à garantir la conformité géométrique finale de la pièce ? Citer au moins deux phénomènes physiques non modélisés simplement qui influencent la cote $\Phi 50\text{ H7}$.

---

## Pistes et Indications

*   **Q1.1 & Q1.2 :** Pensez aux efforts de coupe, aux déformations élastiques de la pièce brute et à la levée d'indéterminations géométriques (loi des 6 points de Lodge).
*   **Q2.2 :** Utiliser la formule cinématique fondamentale : $V_c = \frac{\pi \cdot D \cdot N}{1000}$.
*   **Q3.1 :** Le débit de copeau s'exprime généralement par $Q = V_c \cdot f \cdot a_p \times 1000$ (en $\text{mm}^3/\text{min}$) ou via $Q = S \cdot V_c$ selon les formulations du cours.
*   **Q3.2 :** Considérez l'échauffement thermique (dilatation de l'aluminium : $\alpha \approx 23 \cdot 10^{-6}\text{ K}^{-1}$) et l'usure progressive de l'arête de coupe.

---

## Corrigé Pas à Pas

### 1. Analyse du besoin et choix des phases
*   **Q1.1.** La décomposition en phases (Ébauche $\rightarrow$ Demi-finition $\rightarrow$ Finition) est impérative pour :
    *   Éliminer rapidement le volume important de matière brute (ébauche avec des forts débits, efforts de coupe importants).
    *   Détendre les contraintes résiduelles induites par le forgeage.
    *   Garantir les états de surface ($Ra \le 0,8\text{ }\mu\text{m}$) et les tolérances serrées ($H7$) en ne laissant qu'une faible surépaisseur pour la finition, minimisant ainsi les efforts de coupe et les risques de vibrations (brouteux).
*   **Q1.2.** La surface de référence (ou isostatisme de base) permet d'assurer la position relative de la pièce par rapport à la machine-outil. Pour la phase 10, on utilise généralement un appui plan (3 points) sur une face brute ou légèrement préparée, complété par un centrage court (2 points) et un linéaire annulaire (1 point) pour bloquer les 6 degrés de liberté selon la règle de Lodge.

### 2. Élaboration de la gamme d'usinage
*   **Q2.1.** Avant-projet de gamme :
    *   **Phase 10 :** Surfaçage du plan de joint (Ébauche + Finition) $\rightarrow$ Sert de référence d'usinage (Plan $z$) pour la suite.
    *   **Phase 20 :** Perçage / Pré-alésage et surfaçage des faces secondaires.
    *   **Phase 30 :** Usinage de l'alésage $\Phi 50$ (Ébauche $\rightarrow$ Demi-finition $\rightarrow$ Finition par outil carbure ou alésoir).
*   **Q2.2.** Calcul de la fréquence de rotation $N$ pour l'alésage de finition :
    $$\text{Données : } V_c = 250\text{ m/min}, \quad D = 50\text{ mm}$$
    $$N = \frac{1000 \cdot V_c}{\pi \cdot D} = \frac{1000 \cdot 250}{\pi \cdot 50} = \frac{5000}{\pi} \approx 1591,5\text{ tr/min}$$
    *Ordre de grandeur réaliste pour de l'usinage à grande vitesse (UGV) d'un alliage léger.*

### 3. Analyse critique et limites du modèle de coupe
*   **Q3.1.** Calcul du débit de copeau $Q$ en ébauche :
    $$V_{c,\text{ébauche}} = 300\text{ m/min} \implies N = \frac{1000 \cdot 300}{\pi \cdot 46} \approx 2076\text{ tr/min} \quad (\text{avec } D_{\text{ébauche}} \approx 46\text{ mm})$$
    Le débit volumique de matière coupé est :
    $$Q = V_c \cdot f \cdot a_p \cdot 1000 = 300 \times 10^3 \times 0,25 \times 1,8 = 135\,000\text{ mm}^3/\text{min} = 135\text{ cm}^3/\text{min}$$
*   **Q3.2.** *Analyse critique et limites :*
    Le modèle mécanique classique (effort proportionnel à la section du copeau) est insuffisant pour garantir la classe de tolérance $\text{H7}$ ($25\text{ }\mu\text{m}$ de tolérance totale sur un diamètre de $50\text{ mm}$, soit un intervalle extrêmement étroit de $0,0125\text{ mm}$ au rayon). Deux limites majeures apparaissent :
    1.  **L'effet thermique :** L'usinage à grande vitesse dissipe une énergie considérable sous forme de chaleur. L'alliage d'aluminium ayant un coefficient de dilatation thermique élevé ($\alpha \approx 23 \cdot 10^{-6}\text{ K}^{-1}$), une pièce mesurée chaude sortira de l'intervalle de tolérance une fois revenue à température ambiante (20 °C).
    2.  **L'usure de l'outil et le phénomène de "recul élastique" (Springback) :** L'usure en dépouille modifie le rayon effectif de l'outil et accroît le frottement, générant des efforts radiaux qui repoussent la matière élastiquement. À l'échelle micrométrique, la déformation élastique de la broche et de la structure de la machine elle-même invalide l'hypothèse de rigidité infinie du modèle géométrique pur.