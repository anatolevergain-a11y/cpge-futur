---
title: 'Cours : Équations de Maxwell et propagation'
description: 'Fiche de synthèse officielle et démonstrations du programme CPGE MPI.'
---

## 📌 1. Définitions & Cadre d'étude

Le cadre d'etude est celui de la mecanique des fluides et de l'electromagnetisme continus dans le referentiel galileen $R$. Les champs macroscopiques $\vec{E}(M, t)$ (champ electrique) et $\vec{B}(M, t)$ (champ magnetique) sont des fonctions de classe $C^1$ sur l'espace-temps $\mathbb{R}^4$.

Les sources du champ electromagnetique sont la densite volumique de charge $\rho(M, t)$ et la densite volumique de courant $\vec{j}(M, t)$.

Les equations de Maxwell locales s'ecrivent :
- **Maxwell-Gauss (MG) :** $\text{div}(\vec{E}) = \frac{\rho}{\varepsilon_0}$
- **Maxwell-Thomson (MT) :** $\text{div}(\vec{B}) = 0$
- **Maxwell-Faraday (MF) :** $\text{rot}(\vec{E}) = -\frac{\partial \vec{B}}{\partial t}$
- **Maxwell-Ampre (MA) :** $\text{rot}(\vec{B}) = \mu_0 \vec{j} + \mu_0 \varepsilon_0 \frac{\partial \vec{E}}{\partial t}$

Avec les constantes universelles $\varepsilon_0$ (permittivite dielectrique du vide) et $\mu_0$ (permeabilite magnetique du vide), liees a la celerite de la lumiere $c$ par la relation :
$$c = \frac{1}{\sqrt{\mu_0 \varepsilon_0}}$$

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### Conservation de la charge (Equation de continuite)
L'application de l'operateur divergence a l'equation de Maxwell-Ampre, combinee a Maxwell-Gauss, conduit a l'equation de conservation de la charge :
$$\text{div}(\vec{j}) + \frac{\partial \rho}{\partial t} = 0$$

### Equations d'onde dans le vide ($\rho = 0$, $\vec{j} = \vec{0}$)
Demontrons que le champ $\vec{E}$ verifie une equation de d'alembertienne.
En prenant le rotationnel de l'equation de Maxwell-Faraday :
$$\text{rot}(\text{rot}(\vec{E})) = \text{rot}\left(-\frac{\partial \vec{B}}{\partial t}\right)$$

En utilisant l'identite vectorielle $\text{rot}(\text{rot}(\vec{E})) = \text{grad}(\text{div}(\vec{E})) - \Delta \vec{E}$, et en inversant les derivees spatiale et temporelle dans le membre de droite :
$$\text{grad}(\text{div}(\vec{E})) - \Delta \vec{E} = -\frac{\partial}{\partial t}(\text{rot}(\vec{B}))$$

Dans le vide, $\text{div}(\vec{E}) = 0$ (Maxwell-Gauss) et $\text{rot}(\vec{B}) = \mu_0 \varepsilon_0 \frac{\partial \vec{E}}{\partial t}$ (Maxwell-Ampre). On obtient l'equation d'onde de d'Alembert :
$$\Delta \vec{E} - \mu_0 \varepsilon_0 \frac{\partial^2 \vec{E}}{\partial t^2} = \vec{0}$$
Soit :
$$\Delta \vec{E} - \frac{1}{c^2} \frac{\partial^2 \vec{E}}{\partial t^2} = \vec{0}$$

Une demarche strictement identique conduit a l'equation d'onde pour le champ magnetique :
$$\Delta \vec{B} - \frac{1}{c^2} \frac{\partial^2 \vec{B}}{\partial t^2} = \vec{0}$$

### Structure de l'onde plane progressive harmonique (OPPH)
On considere une onde se propageant selon la direction $\vec{u}_x$. Les champs dependent uniquement de $(x, t)$.
Les equations de Maxwell imposent la structure suivante pour le triad $(\vec{E}, \vec{B}, \vec{u}_x)$ :
1. $\vec{E}$ et $\vec{B}$ sont orthogonaux a la direction de propagation $\vec{u}_x$ (ondes transverses).
2. $\vec{B} = \frac{1}{c} \vec{u}_x \land \vec{E}$ (structure plane progressive).

## 💡 3. Méthodes de calcul & Algorithmes

- **Utilisation du formalisme complexe :** Pour l'etude des OPPH, on pose $\underline{\vec{E}}(M, t) = \underline{\vec{E}}_0 \exp(j(\omega t - \vec{k}\cdot\vec{M}))$. Les operateurs se traduisent ainsi :
  - $\frac{\partial}{\partial t} \leftrightarrow j\omega$
  - $\text{grad} \leftrightarrow -j\vec{k}$
  - $\text{div} \leftrightarrow -j\vec{k}\cdot$
  - $\text{rot} \leftrightarrow -j\vec{k}\land$

- **Resolution des equations de propagation :**
  1. Ecrire les equations de Maxwell dans le milieu considere (vide, conducteur, dielectrique).
  2. Decoupler les champs $\vec{E}$ et $\vec{B}$ via l'application successive d'un rotationnel ou par le formalisme complexe.
  3. Identifier la vitesse de phase $v_\phi = \frac{\omega}{k}$ et eventuellement le coefficient d'attenuation si le milieu est conducteur.
  4. Appliquer les conditions aux limites (continuité des composantes tangentielles de $\vec{E}$ et $\vec{B}$).

## ⚠️ 4. Pièges classiques aux Concours

- **Oubli de la validite des regimes :** Ne jamais appliquer les equations de l'approximation des régimes quasi-permanents (ARQP) ($\text{rot}(\vec{B}) \approx \mu_0 \vec{j}$) lorsqu'on etudie la propagation d'ondes a haute frequence. Le terme de courant de deplacement $\varepsilon_0 \frac{\partial \vec{E}}{\partial t}$ est preponderant en propagation.
- **Homogeneite des relations :** Verifier systematiquement les dimensions lors des manipulations vectorielles. Par exemple, $\text{rot}$ ajoute un ordre de derivee spatiale (dimension $L^{-1}$).
- **Confusion sur la polarisation :** Une onde rectiligne n'est pas necessairement circulaire. Bien verifier la nature de la phase entre les composantes selon $\vec{u}_y$ et $\vec{u}_z$.
- **Sens de propagation :** Dans $\exp(j(\omega t \pm kx))$, le signe $-$ associe a $kx$ correspond a une propagation dans le sens des $x$ croissants, et vice-versa.