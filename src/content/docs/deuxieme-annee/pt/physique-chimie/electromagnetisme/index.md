---
title: 'Cours : Électromagnétisme et équations de Maxwell'
description: 'Synthèse officielle du cours et démonstrations pour CPGE PT.'
---

## 📌 1. Définitions & Cadre d'étude

Le programme de physique de seconde année de la filière PT aborde l'électromagnétisme macroscopique à travers le modèle du milieu continu. Le champ électromagnétique est décrit par deux champs vectoriels eulériens :
* Le champ électrique $\vec{E}(M, t)$ exprimé en $\text{V}\cdot\text{m}^{-1}$.
* Le champ magnétique $\vec{B}(M, t)$ exprimé en teslas ($\text{T}$).

Ces champs sont créés par des sources macroscopiques :
* La volumique de charge $\rho(M, t)$ en $\text{C}\cdot\text{m}^{-3}$.
* La densité volumique de courant $\vec{j}(M, t)$ en $\text{A}\cdot\text{m}^{-2}$.

Le cadre d'étude fondamental repose sur les **équations de Maxwell**, postulats locaux de l'électromagnétisme :
1. **Maxwell-Gauss (MG) :** $\text{div}(\vec{E}) = \frac{\rho}{\varepsilon_0}$
2. **Maxwell-Thomson (MT) :** $\text{div}(\vec{B}) = 0$
3. **Maxwell-Faraday (MF) :** $\text{rot}(\vec{E}) = -\frac{\partial \vec{B}}{\partial t}$
4. **Maxwell-Ampère (MA) :** $\text{rot}(\vec{B}) = \mu_0 \vec{j} + \mu_0 \varepsilon_0 \frac{\partial \vec{E}}{\partial t}$

Avec $\varepsilon_0$ la permittivité diélectrique du vide et $\mu_0$ la perméabilité magnétique du vide ($\cfrac{1}{\sqrt{\mu_0 \varepsilon_0}} = c$, célérité de la lumière dans le vide).

---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### Conservation de la charge (Équation de continuité)
La confrontation des équations de Maxwell-Ampère et de Maxwell-Gauss permet d'établir l'équation de conservation de la charge.

**Démonstration :**
Partons de l'opérateur divergence appliqué à l'équation de Maxwell-Ampère. La divergence d'un rotationnel étant identiquement nulle pour tout champ vectoriel $\vec{V}$ ($\text{div}(\text{rot}(\vec{V})) = 0$) :
$$\text{div}(\text{rot}(\vec{B})) = 0 = \mu_0 \text{div}(\vec{j}) + \mu_0 \varepsilon_0 \frac{\partial}{\partial t}(\text{div}(\vec{E}))$$

En injectant l'équation de Maxwell-Gauss $\text{div}(\vec{E}) = \cfrac{\rho}{\varepsilon_0}$ :
$$\mu_0 \text{div}(\vec{j}) + \mu_0 \varepsilon_0 \frac{\partial}{\partial t}\left(\frac{\rho}{\varepsilon_0}\right) = 0$$

On obtient l'**équation de continuité** :
$$\text{div}(\vec{j}) + \frac{\partial \rho}{\partial t} = 0$$

### Équations d'onde (Propagation dans le vide)
Dans le vide de charges et de courants ($\rho = 0$ et $\vec{j} = \vec{0}$), les champs $\vec{E}$ et $\vec{B}$ se propagent sous forme d'ondes.

**Démonstration (pour le champ $\vec{E}$) :**
Appliquons l'opérateur rotationnel à l'équation de Maxwell-Faraday :
$$\text{rot}(\text{rot}(\vec{E})) = \text{rot}\left(-\frac{\partial \vec{B}}{\partial t}\right)$$

En utilisant l'identité vectorielle $\text{rot}(\text{rot}(\vec{E})) = \text{grad}(\text{div}(\vec{E})) - \Delta \vec{E}$, et en permutant les dérivées spatiale et temporelle :
$$\text{grad}(\text{div}(\vec{E})) - \Delta \vec{E} = -\frac{\partial}{\partial t}(\text{rot}(\vec{B}))$$

Dans le vide, $\text{div}(\vec{E}) = 0$ (Maxwell-Gauss) et $\text{rot}(\vec{B}) = \mu_0 \varepsilon_0 \frac{\partial \vec{E}}{\partial t}$ (Maxwell-Ampère). Il vient :
$$-\Delta \vec{E} = -\frac{\partial}{\partial t}\left(\mu_0 \varepsilon_0 \frac{\partial \vec{E}}{\partial t}\right)$$
$$\Delta \vec{E} - \mu_0 \varepsilon_0 \frac{\partial^2 \vec{E}}{\partial t^2} = \vec{0}$$

C'est l'**équation d'Alembert** (ou équation d'onde) vérifiée par le champ $\vec{E}$, avec une vitesse de phase $v = \frac{1}{\sqrt{\mu_0 \varepsilon_0}} = c$.

---

## 💡 3. Méthodes de calcul & Algorithmes

### Résolution d'un problème d'électrostatique ou de magnétostatique par symétries et invariances
1. **Recensement des invariances :** Si le système est invariant par translation selon $\vec{e}_z$ ou rotation autour d'un axe, les champs ne dépendent pas des coordonnées associées.
2. **Recherche des plans/axes de symétrie et d'antisymétrie :**
   * Si $M$ appartient à un plan de symétrie (resp. antisymétrie) des sources, $\vec{E}(M)$ appartient à ce plan (resp. est orthogonal à ce plan).
   * Pour $\vec{B}$, c'est l'inverse (le champ magnétique est un vecteur axial / pseudovecteur).
3. **Choix du théorème associé :**
   * Électrostatique : Théorème de Gauss sous forme intégrale $\iint_S \vec{E} \cdot d\vec{S} = \frac{Q_{\text{int}}}{\varepsilon_0}$.
   * Magnétostatique : Théorème d'Ampère sous forme intégrale $\oint_{\Gamma} \vec{B} \cdot d\vec{l} = \mu_0 I_{\text{enl}}$.
4. **Calcul effectif :** Exploiter le produit scalaire pour simplifier l'intégrale en extrayant le champ normé de la surface ou du contour de Ampère/Gauss bien choisi.

---

## ⚠️ 4. Pièges classiques aux Concours

* **Oubli du caractère normé des unités :** Ne jamais oublier de préciser les unités ($\text{V}\cdot\text{m}^{-1}$, $\text{T}$, $\text{A}\cdot\text{m}^{-2}$) lors des applications numériques.
* **Confusion entre vecteur polaire et pseudovecteur :** $\vec{E}$ est un vecteur polaire (change de signe par symétrie par rapport à un plan), tandis que $\vec{B}$ est un pseudovecteur (axial, invariant par symétrie par rapport à un plan). Une erreur sur la parité des champs invalide immédiatement l'argumentation de symétrie.
* **Mauvaise utilisation du théorème d'Ampère :** Le contour $\Gamma$ doit être orienté, et le courant enlacé $I_{\text{enl}}$ doit être compté algébricamente selon la règle du tire-bouchon par rapport à l'orientation du contour.
* **Négligence du courant de déplacement :** En régime quasi-permanent (ARQS), le terme $\frac{\partial \vec{E}}{\partial t}$ est négligeable dans Maxwell-Ampère, mais il est **fondamental** en régime dynamique rapide pour obtenir la propagation des ondes électromagnétiques. Ne jamais l'appliquer sans vérifier les hypothèses de l'ARQS.