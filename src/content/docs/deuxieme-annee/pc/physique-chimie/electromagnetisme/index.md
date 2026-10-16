---
title: 'Cours : Équations de Maxwell'
description: 'Synthèse de cours, théorèmes et démonstrations.'
---

# Fiche de Cours : Équations de Maxwell
**Filière :** MP/PC (Option PC) — **Niveau :** Deuxième année  
**Matière :** Physique-Chimie

---

## 1. Introduction et Outils Mathématiques Préalables

L'électromagnétisme macroscopique repose sur le formalisme vectoriel et l'analyse vectorielle. Soit un champ vectoriel $\vec{A}(\vec{r}, t)$ et un champ scalaire $V(\vec{r}, t)$.

*   **Opérateur nabla ($\vec{\nabla}$) :** En coordonnées cartésiennes, $\vec{\nabla} = \frac{\partial}{\partial x}\vec{e}_x + \frac{\partial}{\partial y}\vec{e}_y + \frac{\partial}{\partial z}\vec{e}_z$.
*   **Gradient :** $\vec{\nabla}V = \text{grad}(V) = \frac{\partial V}{\partial x}\vec{e}_x + \frac{\partial V}{\partial y}\vec{e}_y + \frac{\partial V}{\partial z}\vec{e}_z$.
*   **Divergence :** $\text{div}(\vec{A}) = \vec{\nabla} \cdot \vec{A} = \frac{\partial A_x}{\partial x} + \frac{\partial A_y}{\partial y} + \frac{\partial A_z}{\partial z}$.
*   **Rotationnel :** $\text{rot}(\vec{A}) = \vec{\nabla} \wedge \vec{A}$.

> **Théorèmes intégraux fondamentaux (Exigibles) :**
> *   **Théorème de Green-Ostrogradski (Flux-Divergence) :** Pour tout volume $V$ fermé, de frontière orientée $\partial V$ (normale sortante $\vec{n}$) :
>     $$\iint_{\partial V} \vec{A} \cdot \vec{n} \, dS = \iiint_V (\vec{\nabla} \cdot \vec{A}) \, dV$$
> *   **Théorème de Stokes (Circulation-Rotationnel) :** Pour toute surface $S$ ouverte, s'appuyant sur un contour fermé $\Gamma$ orienté :
>     $$\oint_{\Gamma} \vec{A} \cdot d\vec{l} = \iint_S (\vec{\nabla} \wedge \vec{A}) \cdot \vec{n} \, dS$$

---

## 2. Les Équations de Maxwell (Formes Locale et Integrale)

Le champ électromagnétique est décrit par le champ électrique $\vec{E}$ et le champ magnétique $\vec{B}$. Les sources sont la densité volumique de charge $\rho$ et la densité volumique de courant $\vec{j}$.

### A. Équations de Maxwell-Gauss (Structure du champ électrique)
*   **Forme locale :** 
    $$\vec{\nabla} \cdot \vec{E} = \frac{\rho}{\varepsilon_0}$$
*   **Forme intégrale :** Pour tout volume $V$ délimité par $\partial V$ :
    $$\iint_{\partial V} \vec{E} \cdot \vec{n} \, dS = \frac{Q_{\text{int}}}{\varepsilon_0}$$
    où $\varepsilon_0$ est la permittivité diélectrique du vide et $Q_{\text{int}} = \iiint_V \rho \, dV$.

### B. Équations de Maxwell-Thomson (Structure du champ magnétique)
*   **Forme locale :** 
    $$\vec{\nabla} \cdot \vec{B} = 0$$
*   **Forme intégrale :** Pour tout volume $V$ fermé :
    $$\iint_{\partial V} \vec{B} \cdot \vec{n} \, dS = 0$$
    *Interprétation :* Il n'existe pas de monopôles magnétiques isolés. Le flux du champ magnétique à travers toute surface fermée est nul.

### C. Équations de Maxwell-Faraday (Induction électromagnétique)
*   **Forme locale :** 
    $$\vec{\nabla} \wedge \vec{E} = -\frac{\partial \vec{B}}{\partial t}$$
*   **Forme intégrale :** Pour un contour $\Gamma$ s'appuyant sur une surface $S$ fixe (ou indéformable) :
    $$\oint_{\Gamma} \vec{E} \cdot d\vec{l} = -\frac{d}{dt} \iint_S \vec{B} \cdot \vec{n} \, dS$$
    *Interprétation :* Un champ magnétique variable temporellement crée un champ électrique non conservative (origine des forces électromotrices d'induction).

### D. Équations de Maxwell-Ampère (Effet magnétique des courants et des variations de $\vec{E}$)
*   **Forme locale :** 
    $$\vec{\nabla} \wedge \vec{B} = \mu_0 \vec{j} + \mu_0 \varepsilon_0 \frac{\partial \vec{E}}{\partial t}$$
    *(Le terme $\mu_0 \varepsilon_0 \frac{\partial \vec{E}}{\partial t}$ est le **courant de déplacement de Maxwell**).*
*   **Forme intégrale :** Pour un contour $\Gamma$ s'appuyant sur $S$ :
    $$\oint_{\Gamma} \vec{B} \cdot d\vec{l} = \mu_0 \left( I_{\text{tressé}} + \iint_S \varepsilon_0 \frac{\partial \vec{E}}{\partial t} \cdot \vec{n} \, dS \right)$$

---

## 3. Conservation de la Charge et Cohérence du Modèle

> **Théorème (Équation de continuité) :**
> La charge électrique se conserve localement :
> $$\vec{\nabla} \cdot \vec{j} + \frac{\partial \rho}{\partial t} = 0$$

*Démonstration (Rigueur exigée en concourt) :*  
Appliquons la divergence à l'équation de Maxwell-Ampère :
$$\vec{\nabla} \cdot (\vec{\nabla} \wedge \vec{B}) = \mu_0 \vec{\nabla} \cdot \vec{j} + \mu_0 \varepsilon_0 \frac{\partial}{\partial t}(\vec{\nabla} \cdot \vec{E})$$
Or, mathématiquement, la divergence d'un rotationnel est toujours nulle : $\vec{\nabla} \cdot (\vec{\nabla} \wedge \vec{B}) = 0$.  
De plus, d'après Maxwell-Gauss, $\vec{\nabla} \cdot \vec{E} = \frac{\rho}{\varepsilon_0}$. Donc :
$$0 = \mu_0 \vec{\nabla} \cdot \vec{j} + \mu_0 \varepsilon_0 \frac{\partial}{\partial t}\left(\frac{\rho}{\varepsilon_0}\right) \implies \vec{\nabla} \cdot \vec{j} + \frac{\partial \rho}{\partial t} = 0$$
*Remarque historique :* C'est l'ajout du terme de courant de déplacement par Maxwell qui a permis de rendre l'équation d'Ampère compatible avec la conservation de la charge.

---

## 4. Équations de Propagation (Dans le Vide)

Dans le vide, les sources sont nulles : $\rho = 0$ et $\vec{j} = \vec{0}$.

> **Théorème (Équations de d'Alembert) :**
> Dans le vide, $\vec{E}$ et $\{B}$ vérifient les équations de propagation d'onde :
> $$\Delta \vec{E} - \mu_0 \varepsilon_0 \frac{\partial^2 \vec{E}}{\partial t^2} = \vec{0}$$
> $$\Delta \vec{B} - \mu_0 \varepsilon_0 \frac{\partial^2 \vec{B}}{\partial t^2} = \vec{0}$$
> Avec la célérité des ondes électromagnétiques : $c = \frac{1}{\sqrt{\mu_0 \varepsilon_0}}$.

*Démonstration (pour $\vec{E}$) :*  
1. On calcule le rotationnel du rotationnel de $\vec{E}$ : $\vec{\nabla} \wedge (\vec{\nabla} \wedge \vec{E}) = \vec{\nabla}(\vec{\nabla} \cdot \vec{E}) - \Delta \vec{E}$.
2. D'après Maxwell-Gauss (vide), $\vec{\nabla} \cdot \vec{E} = 0$, donc $\vec{\nabla} \wedge (\vec{\nabla} \wedge \vec{E}) = -\Delta \vec{E}$.
3. D'autre part, en utilisant Maxwell-Faraday :
   $$\vec{\nabla} \wedge (\vec{\nabla} \wedge \vec{E}) = \vec{\nabla} \wedge \left(-\frac{\partial \vec{B}}{\partial t}\right) = -\frac{\partial}{\partial t}(\vec{\nabla} \wedge \vec{B})$$
4. En injectant Maxwell-Ampère (dans le vide, $\vec{j} = \vec{0}$) :
   $$\vec{\nabla} \wedge \vec{B} = \mu_0 \varepsilon_0 \frac{\partial \vec{E}}{\partial t} \implies -\frac{\partial}{\partial t}(\vec{\nabla} \wedge \vec{B}) = -\mu_0 \varepsilon_0 \frac{\partial^2 \vec{E}}{\partial t^2}$$
5. Par identification : $-\Delta \vec{E} = -\mu_0 \varepsilon_0 \frac{\partial^2 \vec{E}}{\partial t^2} \implies \Delta \vec{E} - \mu_0 \varepsilon_0 \frac{\partial^2 \vec{E}}{\partial t^2} = \vec{0}$.

---

## 5. Méthodes et Savoir-Faire

*   **Exploiter les invariances et symétries :** Avant d'appliquer les équations locales, utilisez les symétries de la distribution de charges/courants pour simplifier les dépendances spatiales des champs ($\vec{E}$ et $\vec{B}$).
*   **Passage Local $\leftrightarrow$ Intégral :** 
    *   Pour calculer un champ global à partir de sources hautement symétriques $\rightarrow$ Forme intégrale (Théorème de Gauss / Ampère généralisé).
    *   Pour résoudre des problèmes de propagation ou en présence de milieux continus $\rightarrow$ Forme locale.
*   **Conditions de passage (Raccordement) :** À l'interface entre deux milieux (ou en présence d'une nappe de courant/charge surfacique), utilisez les relations de passage déduites des formes intégrales de Maxwell :
    *   Discontinuité de la composante normale de $\vec{E}$ liée à $\sigma$ (densité surfacique de charge).
    *   Continuité de la composante normale de $\vec{B}$.
    *   Discontinuité de la composante tangentielle de $\vec{B}$ liée à $\vec{j}_s$ (densité surfacique de courant).

---

## 6. Pièges et Erreurs Classiques à Éviter

1.  **Oublier le courant de déplacement :** En régime variable, $\vec{\nabla} \wedge \vec{B} \neq \mu_0 \vec{j}$. Le terme $\mu_0 \varepsilon_0 \frac{\partial \vec{E}}{\partial t}$ est indispensable, même s'il n'y a pas de matière ($\vec{j} = \vec{0}$).
2.  **Confusion sur les dérivées temporelles dans Stokes :** Pour Maxwell-Faraday sous forme intégrale, la surface $S$ doit être **fixe** dans le référentiel d'étude pour pouvoir permuter dérivation temporelle et intégrale ($\frac{d}{dt} \iint_S \dots = \iint_S \frac{\partial}{\partial t} \dots$). Si le contour est mobile, il faut utiliser le formalisme de l'ARQS et du flux coupé (loi de Faraday-Lenz).
3.  **Mauvaise orientation du contour $\Gamma$ :** Lors de l'application du théorème de Stokes ou de la forme intégrale de Maxwell-Ampère/Faraday, le sens de parcours du contour $\Gamma$ et l'orientation de la normale $\vec_n$ à la surface $S$ doivent impérativement respecter la **règle du bonhomme d'Ampère** (ou de la main droite).