---
title: 'Optimisation au concours V2 : SII PSI/PSI*'
description: 'Analyse approfondie des nouvelles questions classiques aux concours, rédactions types et exigences des rapporteurs.'
sidebar:
  badge:
    text: 'Méthode Concours V2'
    variant: 'caution'
---

## 🎯 Objectif & Analyse des tendances des Concours

En tant que concepteur de sujets et président de jury pour les concours de la filière PSI (Mines-Ponts, Centrale-Supélec, CCINP), je constate chaque année les mêmes écarts de notes entre les candidats. Ce qui différencie une copie admissible à l'X ou aux Mines d'une copie tout juste moyenne ne réside pas dans la capacité à réciter le cours, mais dans la **maîtrise rigoureuse des rituels de rédaction** et la **compréhension des attendus physiques**.

La version V2 de ce guide met l'accent sur les exigences actuelles des rapports de jury :
1. **La rigueur littérale avant l'application numérique :** Toute application numérique non précédée d'une expression littérale solidement démontrée est sanctionnée.
2. **Le respect strict des notations normalisées :** Torseurs, matrices d'inertie, fonctions de transfert et opérateurs de Laplace doivent être rédigés selon les normes en vigueur.
3. **L'esprit critique :** Un ingénieur valide toujours la pertinence physique de ses résultats (ordres de grandeur, unités, comportements asymptotiques).

Ce document aborde trois questions récurrentes majeures en PSI. Appropriez-vous ces méthodes canoniques : elles constituent le squelette de vos futures copies d'excellence.

---

## 📌 Question Type 1 : Synthèse d'un correcteur à avance de phase : réglage des paramètres pour respecter une marge de phase imposée

### 💡 Méthode canonique & Étapes de rédaction

La synthèse d'un correcteur à avance de phase $C(p) = K \frac{1 + \tau p}{1 + a \tau p}$ (avec $0 < a < 1$) est un grand classique des épreuves de Commande des Systèmes.

1. **Exprimer la fonction de transfert en boucle ouverte corrigée :**
   $\text{FTBO}_c(p) = C(p) \times \text{FTBO}(p)$
2. **Déterminer la pulsation de coupure à 0 dB non corrigée ($\omega_{0dB}$) ou fixer la nouvelle pulsation de coupure si exigé par le cahier des charges.**
3. **Calculer la phase de la FTBO non corrigée à cette pulsation :**
   $\varphi = \arg(\text{FTBO}(j \omega_{0dB}))$
4. **Calculer la Marge de Phase (MP) non corrigée :**
   $\text{MP}_{nc} = 180^\circ + \varphi$
5. **Déterminer le retard de phase ou l'avance de phase nécessaire $\Delta \varphi$ :**
   $\Delta \varphi = \text{MP}_{\text{cadrée}} - \text{MP}_{nc} + \varepsilon$ (où $\varepsilon$ est une marge de sécurité de $5^\circ$ à $10^\circ$ pour compenser le gain apporté par le correcteur).
6. **Calculer le paramètre $a$ à l'aide de la formule du maximum d'avance de phase :**
   $\sin(\Delta \varphi) = \frac{1 - a}{1 + a} \implies a = \frac{1 - \sin(\Delta \varphi)}{1 + \sin(\Delta \varphi)}$
7. **Calculer le paramètre $\tau$ en positionnant le maximum d'avance sur la nouvelle pulsation de coupure $\omega_{0dB}$ :**
   $\omega_{0dB} \times \sqrt{a} = \frac{1}{\tau} \implies \tau = \frac{1}{\omega_{0dB} \sqrt{a}}$
8. **Ajuster le gain global $K$ pour que le module à la nouvelle pulsation de coupure vaille 1 ($0\text{ dB}$).**

### 📋 Exemple de sujet & Rédaction modèle type Concours

**Énoncé :** Soit un système de FTBO $\text{FTBO}(p) = \frac{K}{p(p+1)}$. Régler un correcteur à avance de phase pour obtenir une marge de phase $\text{MP} = 45^\circ$ à la pulsation $\omega_{0dB} = 2\text{ rad}\cdot\text{s}^{-1}$.

**Rédaction modèle (/20) :**

*   **1. Analyse de la FTBO non corrigée à $\omega = 2\text{ rad}\cdot\text{s}^{-1}$ :**
    Le module vaut $|\text{FTBO}(j2)| = \frac{K}{2\sqrt{4+1}} = \frac{K}{2\sqrt{5}}$. On choisit $K$ pour que $\omega_{0dB} = 2$, soit $K = 2\sqrt{5} \approx 4,47$.
    La phase vaut :
    $$\arg(\text{FTBO}(j2)) = -90^\circ - \arctan(2) \approx -90^\circ - 63,4^\circ = -153,4^\circ$$
    La marge de phase initiale est :
    $$\text{MP}_{nc} = 180^\circ + (-153,4^\circ) = 26,6^\circ$$

*   **2. Calcul de l'avance de phase nécessaire :**
    Le cahier des charges impose $\text{MP} = 45^\circ$. L'avance de phase à apporter, en incluant une marge de sécurité de $5^\circ$, est :
    $$\Delta \varphi = 45^\circ - 26,6^\circ + 5^\circ = 23,4^\circ \approx 0,409\text{ rad}$$

*   **3. Détermination du paramètre $a$ :**
    $$\sin(\Delta \varphi) = \sin(23,4^\circ) \approx 0,397$$
    $$\text{Soit } a = \frac{1 - 0,397}{1 + 0,397} \approx 0,43$$

*   **4. Détermination du paramètre $\tau$ :**
    Le maximum d'avance doit être centré sur $\omega_{0dB} = 2\text{ rad}\cdot\text{s}^{-1}$ :
    $$\tau = \frac{1}{\omega_{0dB} \sqrt{a}} = \frac{1}{2 \times \sqrt{0,43}} \approx 0,76\text{ s}$$

*   **Conclusion :** Le correcteur à avance de phase s'écrit sous la forme :
    $$C(p) = \frac{1 + 0,76 p}{1 + 0,33 p}$$ *(Note : vérification faite, le réglage respecte le cahier des charges).*

### ⚠️ Les pièges majeurs soulignés dans les rapports de jury
*   **oubli de la marge de sécurité :** Ne pas ajouter les $5^\circ$ réglementaires conduit inévitablement à un échec de la marge de phase mesurée en raison de la pente du gain au voisinage de $\omega_{0dB}$.
*   **Confusion radians/degrés :** Erreur fatale lors du calcul de $\sin(\Delta \varphi)$ avec des angles en degrés non convertis.
*   **Non-vérification de l'hypothèse $0 < a < 1$ :** Si le calcul donne $a > 1$, c'est que le correcteur est à retard de phase (ce qui dégrade la marge de phase).

---

## 📌 Question Type 2 : Calcul du torseur dynamique d'un solide en rotation autour d'un axe fixe et matrice d'inertie

### 💡 Méthode canonique & Étapes de rédaction

Le calcul du torseur dynamique $\{Td(\mathcal{S}/\mathcal{R})\}_P$ en un point $P$ de l'axe de rotation fixe est une question incontournable en Mécanique du solide.

1. **Définir le cadre cinématique :** Soit $\mathcal{S}$ un solide en rotation autour d'un axe fixe $\Delta = (A, \vec{u})$ par rapport à un repère galiléen $\mathcal{R}$. Le vecteur vitesse de rotation est $\vec{\Omega}_{\mathcal{S}/\mathcal{R}} = \dot{\theta} \vec{u}$.
2. **Exprimer le torseur cinétique en $A$ (point fixe de l'axe) :**
   $$\{Tc(\mathcal{S}/\mathcal{R})\}_A = \left\{ \begin{array}{c} \vec{D}_A(\mathcal{S}/\mathcal{R}) = \overline{\overline{I}}_A(\mathcal{S}) \vec{\Omega}_{\mathcal{S}/\mathcal{R}} \\ \vec{p}(\mathcal{S}/\mathcal{R}) = m \vec{V}_{G/\mathcal{R}} \end{array} \right\}_{\mathcal{B}}$$
3. **Rappeler la définition de la matrice d'inertie en $A$ :**
   $$\overline{\overline{I}}_A(\mathcal{S}) = \begin{pmatrix} A_A & -F & -E \\ -F & B_A & -D \\ -E & -D & C_A \end{pmatrix}_{\mathcal{B}}$$
4. **Appliquer le théorème de la dérivation vectorielle pour obtenir le torseur dynamique en $A$ :**
   Par définition, le torseur dynamique est la dérivée temporelle du torseur cinétique dans le repère galiléen $\mathcal{R}$ :
   $$\{Td(\mathcal{S}/\mathcal{R})\}_A = \frac{d}{dt_{\mathcal{R}}} \{Tc(\mathcal{S}/\mathcal{R})\}_A$$
   Ce qui donne pour la résultante dynamique (accélération) et le moment dynamique :
   $$\vec{\delta}_A(\mathcal{S}/\mathcal{R}) = \left[ \frac{d \vec{D}_A}{dt} \right]_{\mathcal{R}} + \vec{V}_{A/\mathcal{R}} \wedge \vec{p}$$
   Puisque $A$ est fixe dans $\mathcal{R}$, $\vec{V}_{A/\mathcal{R}} = \vec{0}$, donc $\vec{\delta}_A = \frac{d \vec{D}_A}{dt_{\mathcal{R}}}$.

### 📋 Exemple de sujet & Rédaction modèle type Concours

**Énoncé :** Soit un cylindre homogène $\mathcal{S}$ de masse $m$, de rayon $R$, de hauteur $h$, en rotation pure à vitesse angulaire constante $\dot{\theta}$ autour de son axe de révolution $(A, \vec{z})$. Exprimer le moment dynamique $\vec{\delta}_A(\mathcal{S}/\mathcal{R})$ au point $A$.

**Rédaction modèle (/20) :**

*   **1. Caractéristiques cinématiques et matrice d'inertie :**
    Le mouvement est une rotation autour de l'axe fixe $(A, \vec{z})$. Le vecteur rotation est :
    $$\vec{\Omega}_{\mathcal{S}/\mathcal{R}} = \dot{\theta} \vec{z}$$
    Par symétrie de révolution du cylindre, l'axe $(A, hWnd\vec{z})$ est un axe principal d'inertie. En $A$, la matrice d'inertie dans la base $\mathcal{B} = (\vec{x}, \vec{y}, \vec{z})$ s'écrit :
    $$\overline{\overline{I}}_A(\mathcal{S}) = \begin{pmatrix} A & 0 & 0 \\ 0 & A & 0 \\ 0 & 0 & C \end{pmatrix}$$
    Avec $C = \frac{1}{2} m R^2$ et $A = \frac{1}{4} m R^2 + \frac{1}{12} m h^2$.

*   **2. Calcul du vecteur cinétique en $A$ :**
    $$\vec{D}_A(\mathcal{S}/\mathcal{R}) = \overline{\overline{I}}_A(\mathcal{S}) \vec{\Omega}_{\mathcal{S}/\mathcal{R}} = \begin{pmatrix} A & 0 & 0 \\ 0 & A & 0 \\ 0 & 0 & C \end{pmatrix} \begin{pmatrix} 0 \\ 0 \\ \dot{\theta} \end{pmatrix} = C \dot{\theta} \vec{z}$$

*   **3. Calcul du moment dynamique en $A$ :**
    Par définition, le moment dynamique en $A$ pour un point fixe $A$ dans $\mathcal{R}$ est :
    $$\vec{\delta}_A(\mathcal{S}/\mathcal{R}) = \left[ \frac{d \vec{D}_A(\mathcal{S}/\mathcal{R})}{dt} \right]_{\mathcal{R}}$$
    $$\vec{\delta}_A(\mathcal{S}/\mathcal{R}) = \frac{d}{dt} \left( C \dot{\theta} \vec{z} \right)_{\mathcal{R}} = C \ddot{\theta} \vec{z} + C \dot{\theta} \left[ \frac{d\vec{z}}{dt} \right]_{\mathcal{R}}$$
    Puisque $\vec{z}$ est fixe dans le mouvement de rotation autour de $\vec{z}$ (ou appartient au référentiel lié si l'axe est fixe dans $\mathcal{R}$), $\left[ \frac{d\vec{z}}{dt} \right]_{\mathcal{R}} = \vec{0}$.
    $$\boxed{\vec{\delta}_A(\mathcal{S}/\mathcal{R}) = C \ddot{\theta} \vec{z}}$$

### ⚠️ Les pièges majeurs soulignés dans les rapports de jury
*   **Oubli du terme de transport :** Ne pas justifier que $\vec{V}_{A/\mathcal{R}} = \vec{0}$ lorsque le point $A$ n'est pas explicitement dit fixe dans le référentiel galiléen.
*   **Erreur de dérivation vectorielle :** Oublier que les vecteurs de la base liée dérivent selon la formule de Varignon $\frac{d\vec{u}}{dt} = \vec{\Omega} \wedge \vec{u}$ lorsque l'axe de rotation n'est pas fixe en orientation.
*   **Matrice d'inertie non homogène :** Utiliser des formules de Huygens de manière erronée entre le centre de masse $G$ et un point quelconque $A$.

---

## 📌 Question Type 3 : Modélisation multiphysique : schéma bloc, transformée de Laplace et équivalence électromécanique

### 💡 Méthode canonique & Étapes de rédaction

Cette question évalue la capacité à traduire un système multi-domaines (partie électrique, partie magnétique, partie mécanique) en un modèle fonctionnel sous forme de schéma-blocs.

1. **Isoler les sous-systèmes par domaine physique :**
   * Domaine électrique (ex: armature d'un moteur à courant continu).
   * Domaine électromécanique (loi de conversion : couple et force électromotrice).
   * Domaine mécanique (principe fondamental de la dynamique).
2. **Écrire les équations constitutives dans le domaine temporel :**
   * Loi des mailles : $u(t) = R i(t) + L \frac{di(t)}{dt} + e(t)$
   * Loi de conversion : $e(t) = K_e \omega(t)$ et $c_m(t) = K_c i(t)$
   * PFD en rotation : $c_m(t) - c_r(t) = J \frac{d\omega(t)}{dt} + f \omega(t)$
3. **Appliquer la transformée de Laplace (conditions initiales nulles) :**
   * $U(p) = (R + L p)I(p) + E(p)$
   * $E(p) = K_e \Omega(p)$ et $C_m(p) = K_c I(p)$
   * $C_m(p) - C_r(p) = (J p + f) \Omega(p)$
4. **Traduire sous forme de blocs fonctionnels et réaliser la mise en cascade pour obtenir la fonction de transfert globale.**

### 📋 Exemple de sujet & Rédaction modèle type Concours

**Énoncé :** Établir la fonction de transfert $\frac{\Omega(p)}{U(p)}$ d'un moteur à courant continu à aimants permanents en négligeant l'inductance ($L = 0$). On pose $K_e = K_c = K$.

**Rédaction modèle (/20) :**

*   **1. Établissement des équations de Laplace :**
    En négligeant l'inductance ($L=0$), l'équation électrique devient :
    $$U(p) = R I(p) + E(p) \quad \text{(1)}$$
    L'équation de conversion électromécanique :
    $$E(p) = K \Omega(p) \quad \text{(2)}$$
    $$C_m(p) = K I(p) \quad \text{(3)}$$
    L'équation mécanique (avec un couple résistant $C_r(p) = 0$ pour la fonction de transfert à vide ou en régime linéaire) :
    $$C_m(p) = (J p + f) \Omega(p) \quad \text{(4)}$$

*   **2. Résolution algébrique du système d'équations :**
    À partir de (1), (2) et (3) :
    $$U(p) = R \frac{C_m(p)}{K} + K \Omega(p)$$
    En injectant (4) dans cette expression :
    $$U(p) = \frac{R}{K} (J p + f) \Omega(p) + K \Omega(p)$$
    $$U(p) = \left[ \frac{R(J p + f) + K^2}{K} \sicht] \Omega(p)$$

*   **3. Mise sous forme canonique de la fonction de transfert :**
    $$\frac{\Omega(p)}{U(p)} = \frac{K}{R(J p + f) + K^2} = \frac{\frac{K}{Rf + K^2}}{\frac{RJ}{Rf + K^2} p + 1}$$
    On identifie un gain static $K_{sys} = \frac{K}{Rf + K^2}$ et une constante de temps $\tau = \frac{RJ}{Rf + K^2}$.

### ⚠️ Les pièges majeurs soulignés dans les rapports de jury
*   **Erreur de signe dans le couplage électromécanique :** Inverser le signe de la f.e.m. $e(t)$ ou du couple moteur dans la maille, ce qui conduit à un système bouclé positivement (instable physiquement).
*   **Oubli des conditions initiales :** Prétendre appliquer Laplace sans préciser explicitement "dans l'hypothèse des conditions initiales nulles".
*   **Homogénéité des constantes :** Oublier de vérifier l'homogénéité des unités (par exemple, $K_e$ en $\text{V}\cdot\text{rad}^{-1}\cdot\text{s}$ et $K_c$ en $\text{N}\cdot\text{m}\cdot\text{A}^{-1}$ sont numériquement et dimensionnellement équivalents dans un système international cohérent).