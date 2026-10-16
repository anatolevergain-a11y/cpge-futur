---
title: 'Cours : Électromagnétisme'
description: 'Synthèse de cours, théorèmes et démonstrations.'
---

# Fiche de Cours : Électromagnétisme (MP)

## I. Outils mathématiques et rappels d'analyse vectorielle

### 1. Opérateurs différentiels
Soit un champ scalaire $f$ et un champ vectoriel $\vec{A}$ dans un espace muni d'un système de coordonnées cartésiennes $(O, \vec{u}_x, \vec{u}_y, \vec{u}_z)$.
*   **Gradient** ($\vec{\text{grad}} \, f$ ou $\vec{\nabla} f$) : 
    $$\vec{\nabla} f = \frac{\partial f}{\partial x}\vec{u}_x + \frac{\partial f}{\partial y}\vec{u}_y + \frac{\partial f}{\partial z}\vec{u}_z$$
*   **Divergence** ($\text{div} \, \vec{A}$ ou $\vec{\nabla} \cdot \vec{A}$) : 
    $$\vec{\nabla} \cdot \vec{A} = \frac{\partial A_x}{\partial x} + \frac{\partial A_y}{\partial y} + \frac{\partial A_z}{\partial z}$$
*   **Rotationnel** ($\vec{\text{rot}} \, \vec{A}$ ou $\vec{\nabla} \land \vec{A}$) : 
    $$\vec{\nabla} \land \vec{A} = \left(\frac{\partial A_z}{\partial y} - \frac{\partial A_y}{\partial z}\right)\vec{u}_x + \left(\frac{\partial A_x}{\partial z} - \frac{\partial A_z}{\partial x}\right)\vec{u}_y + \left(\frac{\partial A_y}{\partial x} - \frac{\partial A_x}{\partial y}\right)\vec{u}_z$$
*   **Laplacien** : 
    *   Scalaire : $\Delta f = \vec{\nabla} \cdot (\vec{\nabla} f) = \frac{\partial^2 f}{\partial x^2} + \frac{\partial^2 f}{\partial y^2} + \frac{\partial^2 f}{\partial z^2}$
    *   Vectoriel : $\Delta \vec{A} = \Delta A_x \vec{u}_x + \Delta A_y \vec{u}_y + \Delta A_z \vec{u}_z$ (uniquement en coordonnées cartésiennes).

### 2. Théorèmes intégraux fondamentaux
*   **Théorème de Green-Ostrogradski (Divergence)** : 
    $$\iint_S \vec{A} \cdot \vec{n} \, dS = \iiint_V (\vec{\nabla} \cdot \vec{A}) \, dV$$
    où $S = \partial V$ est la surface fermée orientée par la normale sortante $\vec{n}$.
*   **Théorème de Stokes (Rotationnel)** : 
    $$\oint_{\Gamma} \vec{A} \cdot d\vec{l} = i\iint_S (\vec{\nabla} \land \vec{A}) \cdot \vec{n} \, dS$$
    où $\Gamma = \partial S$ est un contour fermé orienté, et $S$ une surface s'appuyant sur $\Gamma$ (orientation liée par la règle du bonhomme d'Ampère).

---

## II. Électrostatique et Magnétostatique (Rappels et compléments)

### 1. Électrostatique dans l'A.R.Q.S.
*   **Champ électrostatique** $\vec{E}$ et potentiel $V$ : $\vec{E} = -\vec{\nabla} V$.
*   **Équations locales** :
    *   Gauss : $\vec{\nabla} \cdot \vec{E} = \frac{\rho}{\varepsilon_0}$
    *   Conservation / Inrotationnel : $\vec{\nabla} \land \vec{E} = \vec{0} \implies V$ existe.
    *   Poisson : $\Delta V = -\frac{\rho}{\varepsilon_0}$

### 2. Magnétostatique
*   **Champ magnétique** $\vec{B}$ et potentiel vecteur $\vec{A}$ : $\vec{B} = \vec{\nabla} \land \vec{A}$ (avec $\vec{\nabla} \cdot \vec{A} = \text{constante}$, souvent jauge de Coulomb $\vec{\nabla} \cdot \vec{A} = 0$).
*   **Équations locales** :
    *   Flux conservation : $\vec{\nabla} \cdot \vec{B} = 0$
    *   Ampère : $\vec{\nabla} \land \vec{B} = \mu_0 \vec{j}$

---

## III. L'Approximation des Régimes Quasi-Stationnaires (A.R.Q.S.)

### Définition
L'A.R.Q.S. consiste à négliger les temps de propagation des signaux électromagnétiques à l'échelle du système. Si $L$ est la dimension caractéristique du système et $\tau$ le temps caractéristique d'évolution (ou $f$ la fréquence), l'A.R.Q.S. est valide si :
$$\tau \gg \frac{L}{c} \quad \text{soit} \quad d \ll \lambda = \frac{c}{f}$$

### Conséquences
*   En électrocinétique, les lois de l'électricité (loi des nœuds, des mailles) restent valables instantanément.
*   Les équations locales de Maxwell se découplent partiellement selon l'ARQS choisi (magnétique ou électrique).

---

## IV. Les Équations de Maxwell (Bilan et Formulaire)

Dans le vide (ou en milieu macroscopique sans polarisation ni aimantation macroscopiques explicites, exprimées avec $\rho$ et $\vec{j}$ totaux), les équations de Maxwell s'écrivent :

| Nom | Équation Locale | Équation Integrale |
| :--- | :--- | :--- |
| **Maxwell-Gauss** | $\vec{\nabla} \cdot \vec{E} = \frac{\rho}{\varepsilon_0}$ | $\iiint_V \vec{E} \cdot \vec{n} \, dS = \frac{Q_{\text{int}}}{\varepsilon_0}$ |
| **Maxwell-Thomson** | $\vec{\nabla} \cdot \vec{B} = 0$ | $\iiint_V \vec{B} \cdot \vec{n} \, dS = 0$ |
| **Maxwell-Faraday** | $\vec{\nabla} \land \vec{E} = -\frac{\partial \vec{B}}{\partial t}$ | $\oint_{\Gamma} \vec{E} \cdot d\vec{l} = -\frac{d}{dt} \iint_S \vec{B} \cdot \vec{n} \, dS$ |
| **Maxwell-Ampère** | $\vec{\nabla} \land \vec{B} = \mu_0 \vec{j} + \mu_0 \varepsilon_0 \frac{\partial \vec{E}}{\partial t}$ | $\oint_{\Gamma} \vec{B} \cdot d\vec{l} = \mu_0 I_{\text{treaff}} + \mu_0 \varepsilon_0 \frac{d}{dt} \iint_S \vec{E} \cdot \vec{n} \, dS$ |

*Note fondamentale* : Le terme $\mu_0 \varepsilon_0 \frac{\partial \vec{E}}{\partial t}$ (courant de déplacement de Maxwell) a été ajouté par Maxwell pour assurer la compatibilité avec l'équation de conservation de la charge : 
$$\vec{\nabla} \cdot \vec{j} + \frac{\partial \rho}{\partial t} = 0$$

---

## V. Énergétique du Champ Électromagnétique

### 1. Théorème de Poynting (Bilan local d'énergie)
Soit $\mathcal{u} = \mathcal{u}_E + \mathcal{u}_B$ la densité volumique d'énergie électromagnétique avec :
$$\mathcal{u}_E = \frac{1}{2}\varepsilon_0 E^2 \quad \text{et} \quad \mathcal{u}_B = \frac{1}{2\mu_0} B^2$$

On définit le **vecteur de Poynting** $\vec{R}$ (ou $\vec{\Pi}$) représentant le flux d'énergie électromagnétique :
$$\vec{R} = \frac{1}{\mu_0} \vec{E} \land \vec{B}$$

**Forme locale du théorème de Poynting** :
$$\frac{\partial \mathcal{u}}{\partial t} + \vec{\nabla} \cdot \vec{R} = -\vec{j} \cdot \vec{E}$$
*Interprétation* : 
*   $\frac{\partial \mathcal{u}}{\partial t}$ : Variation temporelle de l'énergie stockée.
*   $\vec{\nabla} \cdot \vec{R}$ : Énergie transportée par le champ à l'extérieur du volume élémentaire.
*   $-\vec{j} \cdot \vec{E}$ : Puissance volumique cédée par le champ aux charges (effet Joule si $\vec{j} = \gamma \vec{E}$, soit $\gamma E^2$).

### 2. Forme intégrale
En intégrant sur un volume $V$ délimité par une surface fermée $S$ :
$$\frac{d}{dt} \iiint_V \left(\frac{1}{2}\varepsilon_0 E^2 + \frac{1}{2\mu_0} B^2\right) dV + \iint_S \left(\frac{1}{\mu_0}\vec{E}\land\vec{B}\right)\cdot\vec{n} \, dS = -\iiint_V \vec{j}\cdot\vec{E} \, dV$$

---

## VI. Ondes Électromagnétiques dans le Vide (OEMV)

### 1. Équations de propagation (Démonstration type concours)
Dans le vide ($ \rho = 0, \vec{j} = \vec{0} $), en prenant le rotationnel de Maxwell-Faraday :
$$\vec{\nabla} \land (\vec{\nabla} \land \vec{E}) = \vec{\nabla} (\vec{\nabla} \cdot \vec{E}) - \Delta \vec{E} = -\frac{\partial}{\partial t} (\vec{\nabla} \land \vec{B})$$
Comme $\vec{\nabla} \cdot \vec{E} = 0$ (pas de charges) et $\vec{\nabla} \land \vec{B} = \mu_0 \varepsilon_0 \frac{\partial \vec{E}}{\partial t}$ (Maxwell-Ampère) :
$$\Delta \vec{E} - \mu_0 \varepsilon_0 \frac{\partial^2 \vec{E}}{\partial t^2} = \vec{0}$$
On obtient l'**équation de d'Alembert** avec la vitesse de phase $c = \frac{1}{\sqrt{\mu_0 \varepsilon_0}}$ :
$$\Delta \vec{E} - \frac{1}{c^2}\frac{\partial^2 \vec{E}}{\partial t^2} = \vec{0}$$
De même pour $\vec{\B}$ : $\Delta \vec{B} - \frac{1}{c^2}\frac{\partial^2 \vec{B}}{\partial t^2} = \vec{0}$.

### 2. Structure des Ondes Planes Progressives Harmoniques (OPPH)
Une OPPH se propageant selon la direction du vecteur d'onde $\vec{k}$ (avec $k = \frac{\omega}{c}$) s'écrit sous forme complexe :
$$\vec{E}(M, t) = \underline{\vec{E}}_0 \exp(j(\omega t - \vec{k}\cdot\vec{OM}))$$

Propriétés fondamentales :
1.  **Transversalité** : Le champ $\vec{E}$, le champ $\vec{B}$ et le vecteur d'onde $\vec{k}$ forment un trièdre direct.
    $$\vec{k} \cdot \underline{\vec{E}}_0 = 0 \quad \text{et} \quad \vec{k} \cdot \underline{\vec{B}}_0 = 0$$
2.  **Structure plane** : $\underline{\vec{B}}_0 = \frac{\vec{k}}{\omega} \land \underline{\vec{E}}_0$ ce qui donne en norme $B = \frac{E}{c}$.
3.  **Énergie** : $\mathcal{u}_E = \mathcal{u}_B$ en moyenne pour une OPPH. Le vecteur de Poynting moyen vaut :
    $$\langle \vec{R} \rangle = \frac{E_{\text{eff}} B_{\text{eff}}}{\mu_0} \vec{u}_{ex} = \frac{E_0^2}{2\mu_0 c} \vec{u}_k$$

---

## VII. Méthodes et Savoir-Faire

*   **Exploiter les symétries et invariances** : Toujours chercher les invariances du système par translation ou rotation pour simplifier la dépendance des champs en coordonnées cylindriques, sphériques ou cartésiennes.
*   **Utiliser les complexes pour les OPPH** : Toujours travailler avec les amplitudes complexes $\underline{\vec{E}}_0$ et $\underline{\vec{B}}_0$ lors des études de propagation ou d'incidence sur les milieux.
*   **Conditions de passage (Interface)** : Savoir raccorder les champs de part et d'autre d'une surface chargée ou parcourue par un courant surfacique (relations de continuité / discontinuité).

---

## VIII. Pièges à Éviter (Alerte Colles / Concours)

1.  **Confusion ARQS et régime permanent** : Dans l'ARQS, les équations spatiales locales de la statique s'appliquent *instantanément* à chaque instant $t$, mais les grandeurs varient au cours du temps. Ne pas oublier les termes en $\frac{\partial}{\partial t}$ lorsqu'ils sont exigés par les lois de Maxwell complètes (ex : induction).
2.  **Oubli du courant de déplacement** : En MP, oublier $\varepsilon_0 \mu_0 \frac{\partial \vec{E}}{\partial t}$ dans le théorème d'Ampère généralisé est éliminatoire (c'est ce terme qui permet l'existence des ondes électromagnétiques).
3.  **Sens du vecteur de Poynting** : Attention au produit vectoriel $\vec{E} \land \vec{B}$. Le sens du flux d'énergie suit la règle de la main droite.
4.  **Homogénéité** : Vérifiez toujours l'homogénéité de vos résultats intermédiaires (par exemple, un champ électrique s'exprime en $\text{V}\cdot\text{m}^{-1}$ ou $\text{N}\cdot\text{C}^{-1}$, un champ magnétique en $\text{T}$).