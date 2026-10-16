---
title: "📌 1. Définitions & Cadre d'étude"
description: "Fiche de cours et d'exercice CPGE."
---

## 📌 1. Définitions & Cadre d'étude

Le cadre d'étude de l'électromagnétisme macroscopique repose sur l'hypothèse de l'Continuum spatial et temporel. Les champs fondamentaux sont le champ électrique $\vec{E}(M, t)$ (exprimé en $\text{V}\cdot\text{m}^{-1}$) et le champ magnétique $\vec{B}(M, t)$ (exprimé en $\text{T}$).

Les sources de ces champs sont la densité volumique de charge $\rho(M, t)$ (en $\text{C}\cdot\text{m}^{-3}$) et la densité volumique de courant $\vec{j}(M, t)$ (en $\text{A}\cdot\text{m}^{-2}$).

Les équations de Maxwell, postulats fondamentaux de l'électromagnétisme, s'écrivent sous forme locale :
1. **Équation de Maxwell-Gauss (MG) :**
   $$\text{div}(\vec{E}) = \frac{\rho}{\varepsilon_0}$$
2. **Équation de Maxwell-Thomson (MT) :**
   $$\text{div}(\vec{B}) = 0$$
3. **Équation de Maxwell-Faraday (MF) :**
   $$\vec{\text{rot}}(\vec{E}) = -\frac{\partial \vec{B}}{\partial t}$$
4. **Équation de Maxwell-Ampère (MA) :**
   $$\vec{\text{rot}}(\vec{B}) = \mu_0 \vec{j} + \mu_0 \varepsilon_0 \frac{\partial \vec{E}}{\partial t}$$

Où $\varepsilon_0$ désigne la permittivité diélectrique du vide (en $\text{F}\cdot\text{m}^{-1}$) et $\mu_0$ la perméabilité magnétique du vide (en $\text{H}\cdot\text{m}^{-1}$), reliées à la vitesse de la lumière dans le vide $c$ par la relation :
$$c = \frac{1}{\sqrt{\mu_0 \varepsilon_0}}$$
---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### Démonstration : Établissement de l'équation d'onde dans le vide
Dans le vide (milieu diélectrique parfait), les sources sont nulles : $\rho = 0$ et $\vec{j} = \vec{0}$. Les équations de Maxwell deviennent :
1. $\text{div}(\vec{E}) = 0$
2. $\text{div}(\vec{B}) = 0$
3. $\vec{\text{rot}}(\vec{E}) = -\frac{\partial \vec{B}}{\partial t}$
4. $\vec{\text{rot}}(\vec{B}) = \mu_0 \varepsilon_0 \frac{\partial \vec{E}}{\partial t}$
Objectif: ** Obtenir l'équation de propagation pour le champ $\vec{E}$.

*Étape 1 :* Appliquer l'opérateur rotationnel à l'équation de Maxwell-Faraday :
$$\vec{\text{rot}}\left(\vec{\text{rot}}(\vec{E})\right) = \vec{\text{rot}}\left(-\frac{\partial \vec{B}}{\partial t}\right)$$

*Étape 2 :* Utiliser l'identité vectorielle valable pour tout champ de vecteur $\vec{V}$ de classe $\mathcal{C}^2$ :
$$\vec{\text{rot}}\left(\vec{\text{rot}}(\vec{V})\right) = \vec{\text{grad}}\left(\text{div}(\vec{V})\right) - \Delta \vec{V}$$

*Étape 3 :* Appliquer cette identité à $\vec{E}$ en tenant compte de $\text{div}(\vec{E}) = 0$ (Maxwell-Gauss dans le vide) :
$$\vec{\text{rot}}\left(\vec{\text{rot}}(\vec{E})\right) = \vec{0} - \Delta \vec{E} = -\Delta \vec{E}$$

*Étape 4 :* Permuter les dérivations spatiale et temporelle dans le membre de droite de l'équation de Maxwell-Faraday injectée :
$$\vec{\text{rot}}\left(-\frac{\partial \vec{B}}{\partial t}\right) = -\frac{\partial}{\partial t}\left(\vec{\text{rot}}(\vec{B})\right)$$

*Étape 5 :* Utiliser l'équation de Maxwell-Ampère dans le vide pour remplacer $\vec{\text{rot}}(\vec{B})$ :
$$-\frac{\partial}{\partial t}\left(\mu_0 \varepsilon_0 \frac{\partial \vec{E}}{\partial t}\right) = -\mu_0 \varepsilon_0 \frac{\partial^2 \vec{E}}{\partial t^2}$$
Conclusion: * En égalant les deux expressions du rotationnel du rotationnel, on obtient l'équation de d'Alembert (ou équation d'onde) pour le champ électrique :
$$\Delta \vec{E} - \mu_0 \varepsilon_0 \frac{\partial^2 \vec{E}}{\partial t^2} = \vec{0} \quad \text{soit} \quad \Delta \vec{E} - \frac{1}{c^2}\frac{\partial^2 \vec{E}}{\partial t^2} = \vec{0}$$

Une démarche rigoureusement identique (en partant du rotationnel de Maxwell-Ampère) conduit à la même équation pour le champ magnétique $\vec{B}$ :
$$\Delta \vec{B} - \frac{1}{c^2}\frac{\partial^2 \vec{B}}{\partial t^2} = \vec{0}$$

---

## 💡 3. Méthodes de calcul & Algorithmes

### Étude d'une Onde Electromagnétique Plane Progressive Sinusoïdale (OEMPPS)
Une OEMPPS se propageant selon la direction $\vec{u}_z$ s'écrit sous forme complexe (notation phasorielle) :
$$\underline{\vec{E}}(z, t) = \underline{\vec{E}}_0 \exp\left(j(\omega t - k z)\right)$$
où $\underline{\vec{E}}_0$ est un vecteur amplitude complexe orthogonal à $\vec{u}_z$ (transversalité), $\omega$ la pulsation (en $\text{rad}\cdot\text{s}^{-1}$) et $k$ le vecteur d'onde lié à la vitesse de phase $v_\phi$ par $k = \frac{\omega}{v_\phi}$.

#### Algorithme de résolution pour relier $\vec{E}$ et $\vec{B}$ :
1. **Utiliser Maxwell-Faraday sous forme locale :** 
   $$\vec{\text{rot}}(\vec{E}) = -\frac{\partial \vec{B}}{\partial t}$$
2. **Traduire en notation complexe (pour une dépendance en $\exp(j(\omega t - kz))$) :**
   $$\vec{\text{grad}}(-kz) \wedge \underline{\vec{E}} = -j\omega \underline{\vec{B}} \quad \implies \quad -j k \vec{u}_z \wedge \underline{\vec{E}} = -j\omega \underline{\vec{B}}$$
3. **Isoler le champ magnétique complexe :**
   $$\underline{\vec{B}} = \frac{k}{\omega} \vec{u}_z \wedge \underline{\vec{E}} = \frac{1}{c} \vec{u}_z \wedge \underline{\vec{E}}$$
4. **En déduire la structure du champ :** Le trièdre $(\vec{E}, \vec{B}, \vec{u}_z)$ forme un repère orthogonal direct (structure dite "plane"). L'amplitude vérifie $B = \frac{E}{c}$.

---

## ⚠️ 4. Pièges classiques aux Concours

1. **Oubli du courant de déplacement :** En régime variable, le terme de courant de déplacement $\varepsilon_0 \frac{\partial \vec{E}}{\partial t}$ dans Maxwell-Ampère est **fondamental**. Sans lui, aucune propagation d'onde n'est mathématiquement possible (pas d'équation d'onde).
2. **Confusion entre opérateur nabla et multiplication :** Le produit vectoriel $\vec{\text{rot}}(\vec{V})$ ne se traite pas avec les règles algébriques usuelles d'un produit vectoriel classique sans précaution (bien appliquer $\vec{\text{grad}}(\text{div}) - \Delta$).
3. **Conditions de transversalité :** Pour une onde plane, les champs $\vec{E}$ et $\vec{B}$ sont **strictement orthogonaux à la direction de propagation** $\vec{u}_z$ dans le vide. Ne jamais l'oublier lors de la projection des équations.
4. **Homogénéité des équations :** Vérifier systématiquement l'homogénéité des expressions littérales (par exemple, un terme en $\mu_0 \varepsilon_0 \frac{\partial^2}{\partial t^2}$ est homogène à l'inverse d'une vitesse au carré $\frac{1}{v^2}$, soit $\text{s}^2\cdot\text{m}^{-2}$).