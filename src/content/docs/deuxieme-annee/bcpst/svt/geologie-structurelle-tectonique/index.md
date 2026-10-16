---
title: "📌 1. Définitions & Cadre d'étude"
description: "Fiche de cours et d'exercice CPGE."
---

## 📌 1. Définitions & Cadre d'étude

La géologie structurelle et la tectonique des plaques constituent le cadre unificateur des sciences de la Terre en CPGE BCPST. Ce domaine étudie la déformation des roches à différentes échelles et la cinétique globale de la lithosphère.

*   **Lithosphère et Asthénosphère :** La lithosphère est la couche enveloppante rigide de la Terre, comprenant la croûte (continentale ou océanique) et la partie supérieure du manteau lithosphérique. Elle repose sur l'asthénosphère, enveloppe ductile (thermiquement animée par la convection mantellique).
*   **Déformation (cinématique et dynamique) :** 
    *   La **déformation élastique** est réversible (loi de Hooke).
    *   La **déformation plastique** (ou ductile) est irréversible et non cassante, caractérisée par un écoulement à l'état solide sans perte de cohésion.
    *   La **déformation cassante** implique une rupture de la roche avec discontinuité macroscopique (failles, diaclases).
*   **Structures géologiques majeures :**
Failles: plans de discontinuité le long desquels il y a eu déplacement relatif des blocs. On distingue les failles normales (extension, $\sigma_1$ vertical), les failles inverses (compression, $\sigma_3$ vertical) et les décrochements (cisaillement, $\sigma_2$ vertical).
Plis: ondes de déformation ductile. Un anticlinal est généralement convexe vers le haut (cœurs plus anciens), un synclinal est concave vers le haut (cœurs plus récents).
*   **Limites de plaques :**
    *   Divergences (dorsales, rifts).
    *   Convergences (zones de subduction, collision continentale).
    *   Coulissages (failles transformantes).
---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### 2.1. Analyse cinématique de la surface sphérique : Le théorème d'Euler
Le mouvement relatif de deux plaques rigides $A$ et $B$ sur une sphère (la Terre) est une rotation instantanée autour d'un axe passant par le centre de la Terre $O$.

*   **Énoncé :** Tout mouvement relatif entre deux plaques tectoniques rigides se décrivant à la surface de la Terre peut être exprimé comme une rotation rigide autour d'un pôle d'Euler, défini par ses coordonnées géographiques $(\theta, \varphi)$ et une vitesse angulaire $\omega$ (en $\text{rad}\cdot\text{Ma}^{-1}$).
*   **Relation fondamentale de vitesse linéaire $V$ :**
    Soit $R_T$ le rayon terrestre, $\Delta$ la distance angulaire (en radians) d'un point de la plaque au pôle d'Euler. La vitesse linéaire $V$ du mouvement relatif s'exprime par :
    $$V = R_T \cdot \omega \cdot \sin(\Delta)$$

### 2.2. Quantification du taux d'extension ou de raccourcissement (Taux de déformation $\varepsilon$)
Soit une longueur initiale $L_0$ mesurée perpendiculairement aux structures (ex: avant une phase tectonique) et une longueur finale $L$.
*   **Allongement relatif :**
    $$\varepsilon = \frac{L - L_0}{L_0} = \frac{\Delta L}{L_0}$$
    *   Si $\varepsilon > 0$ : régime en extension (ex : marge passive, rift).
    *   Si $\varepsilon < 0$ : régime en raccourcissement (ex : chaîne de collision, prisme d'accrétion).

---

## 💡 3. Méthodes de calcul & Algorithmes

### 3.1. Calcul de la vitesse d'expansion océanique (Accrétion)
Pour déterminer la vitesse d'expansion $V_{\text{exp}}$ d'une dorsale à partir de l'âge des anomalies magnétiques symétriques :

1.  **Identification des données :** Soit une anomalie magnétique d'âge $t$ (en $\text{Ma}$) située à une distance $d$ (en $\text{km}$) de l'axe de la dorsale.
2.  **Calcul de la demi-vitesse d'écartement ($v$) :**
    $$v = \frac{d}{t}$$
3.  **Calcul de la vitesse d'expansion totale ($V_{\text{exp}}$) :**
    $$V_{\text{exp}} = 2 \times v = \frac{2d}{t}$$
    *Note d'unité usuelle :* Exprimer $d$ en $\text{cm}$ et $t$ en $\text{an}$, ou $d$ en $\text{km}$ et $t$ en $\text{Ma}$ ($1\,\text{km}\cdot\text{Ma}^{-1} = 0,1\,\text{cm}\cdot\text{an}^{-1}$).

### 3.2. Étude stéréographique des plans de failles et axes de contraintes
L'utilisation du stéréogramme (projection stéréographique de Wulff, hémisphère inférieur) permet de représenter des plans de failles et des stries :
*   Le plan de faille est représenté par un grand cercle.
*   Le pôle du plan de faille est un point situé à $90^\circ$ du grand cercle.
*   La strie glissant sur le plan indique le vecteur cinématique local.
*   La construction des dièdres droits permet de séparer les quadrants en compression (pression maximale $\sigma_1$) et en extension (pression minimale $\sigma_3$).

---

## ⚠️ 4. Pièges classiques aux Concours

1.  **Confondre vitesse relative et vitesse absolue :**
    La vitesse d'une plaque par rapport au manteau profond (points chauds fixes) est une vitesse *absolue*. La vitesse entre deux plaques adjacentes est une vitesse *relative*. Ne jamais sommer des vitesses absolues de manière scalaire sans tenir compte des vecteurs.
2.  **Inverser pendage et direction d'une faille/couche :**
    *   La *direction* est l'angle du plan avec le Nord géographique (horizontal).
    *   Le *pendage* est l'angle de plus grande pente par rapport à l'horizontale ($0^\circ$ à $90^\circ$). Une faille verticale a un pendage de $90^\circ$, pas de $0^\circ$.
3.  **Interprétation abusive des marqueurs cinématiques :**
    Observer des stries de faille ne suffit pas à conclure sur l'histoire tectonique globale : il faut distinguer les phases tectoniques polyphasées (plusieurs générations de stries sur un même miroir de faille).
4.  **Erreurs de raisonnement géométrique en cartographie :**
    Ne pas oublier la **règle des V de Hurtû** : les affleurements de couches géologiques traversant une vallée dessinent un "V" dont la pointe indique la direction du pendage pour les couches inclinées (le V pointe dans le sens du pendage si la rivière est encaissée, sauf inversion de relief).