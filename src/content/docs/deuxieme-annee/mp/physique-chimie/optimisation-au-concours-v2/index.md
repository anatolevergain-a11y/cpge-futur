---
title: 'Optimisation au concours V2 : Physique MP'
description: 'Analyse approfondie des nouvelles questions classiques aux concours, rédactions types et exigences des rapporteurs.'
sidebar:
  badge:
    text: 'Méthode Concours V2'
    variant: 'caution'
---

## 🎯 Objectif & Analyse des tendances des Concours

En tant que président de jury et concepteur de sujets pour les concours de la filière MP (Mines-Ponts, Centrale-Supélec, X-ENS, CCINP), je constate chaque année les mêmes écueils : des candidats qui connaissent leur cours mais peinent à structurer une démonstration rigoureuse, manquent de rigueur dans l'analyse dimensionnelle, ou oublient de mentionner les hypothèses physiques fondamentales.

Ce guide **"OPTIMISATION AU CONCOURS - QUESTIONS RECURRENTES V2"** a pour unique but de vous donner les standards exacts de correction. Une copie qui maximise ses points est une copie qui respecte scrupuleusement la chronologie suivante : 
1. **Poser le cadre et les hypothèses** (référentiel, stationnarité, approximation des régimes quasi-permanents, etc.).
2. **Établir la loi générale** issue des grands principes (Maxwell, premier/second principe, Navier-Stokes/Euler).
3. **Appliquer les approximations** demandées par le texte.
4. **Conclure par une analyse physique** (ordre de grandeur, dimension, comportement limite).

---

## 📌 Question Type 1 : Ondes électromagnétiques dans un milieu conducteur : équation de propagation, effet de peau et épaisseur de pénétration

### 💡 Méthode canonique & Étapes de rédaction
1. **Traduire le milieu :** Utiliser les équations de Maxwell locales dans un milieu linéaire, homogène, isotrope, neutre ($\rho_e = 0$), non magnétique ($\mu = \mu_0$) et ohmique ($\vec{j} = \gamma \vec{E}$).
2. **Combiner les équations de Maxwell :** Partir de $\text{rot}(\vec{E}) = -\frac{\partial \partial \vec{B}}{\partial t}$ et $\text{rot}(\vec{B}) = \mu_0 \gamma \vec{E} + \mu_0 \varepsilon_0 \frac{\partial \vec{E}}{\partial t}$. Appliquer l'opérateur rotationnel à $\vec{E}$ et utiliser l'identité $\text{rot}(\text{rot}(\vec{E})) = \text{grad}(\text{div}(\vec{E})) - \Delta \vec{E}$.
3. **Justifier l'ARQS (ou approximation des milieux conducteurs) :** Comparer le terme de courant de conduction $\gamma \|\vec{E}\|$ devant le courant de déplacement $\varepsilon_0 \|\frac{\partial \vec{E}}{\partial t}\|$ (souvent de l'ordre de $\gamma / (\varepsilon_0 \omega)$).
4. **Établir l'équation de diffusion-propagation :** Obtenir $\Delta \vec{E} - \mu_0 \gamma \frac{\partial \vec{E}}{\partial t} = 0$ (ou avec le terme de propagation si non négligeable).
5. **Rechercher une solution plane progressive monochromatique (PPM) polarisée rectilignement :** $\vec{E}(z,t) = E_0 \exp(j(\omega t - \underline{k}z)) \vec{u}_x$ avec un vecteur d'onde complexe $\underline{k}$. Injecter pour trouver $\underline{k}^2 = -j \mu_0 \gamma \omega$, d'où la longueur caractéristique : **l'épaisseur de peau** $\delta = \sqrt{\frac{2}{\mu_0 \gamma \omega}}$.

### 📋 Exemple de sujet & Rédaction modèle type Concours
* **Énoncé type :** "Établir l'équation de propagation d'une onde électromagnétique plane sinusoïdale dans un métal de conductivité $\gamma$. Définir l'épaisseur de pénétration et commenter son ordre de grandeur pour le cuivre à $f = 1\text{ GHz}$."

* **Rédaction modèle (/20) :**
  > **1. Hypothèses et cadre (3 pts) :** Le milieu est supposé conducteur ohmique de conductivité $\gamma$, non magnétique ($\mu = \mu_0$), diélectrique de perméabilité $\varepsilon_0$. Les charges libres macroscopiques sont nulles ($\rho_e = 0$). 
  > 
  > **2. Équations de Maxwell (5 pts) :** Dans ce milieu, l'ARQS s'applique pour des fréquences usuelles devant la fréquence plasma. Les équations de Maxwell s'écrivent :
  > $$\text{rot}(\vec{E}) = -\frac{\partial \vec{B}}{\partial t}, \quad \text{rot}(\vec{B}) = \mu_0 \gamma \vec{E}$$
  > En appliquant le rotationnel à la première équation :
  > $$\text{grad}(\text{div}(\vec{E})) - \Delta \vec{E} = -\frac{\partial}{\partial t}(\text{rot}(\vec{B}))$$
  > Comme $\text{div}(\vec{E}) = \frac{\rho_e}{\varepsilon_0} = 0$, il vient :
  > $$\Delta \vec{E} = \mu_0 \gamma \frac{\partial \vec{E}}{\partial t}$$
  > 
  > **3. Recherche de solution et épaisseur de peau (8 pts) :** Pour une onde polarisée selon $\vec{u}_x$ se propageant selon $\vec{u}_z$ sous forme $\underline{E} = E_0 e^{j(\omega t - \underline{k}z)}\vec{u}_x$, l'injection dans l'équation donne :
  > $$-\underline{k}^2 = -j \mu_0 \gamma \omega \implies \underline{k} = \pm \sqrt{j \mu_0 \gamma \omega} = \pm (1+j)\sqrt{\frac{\mu_0 \gamma \omega}{2}}$$
  > En posant $\delta = \sqrt{\frac{2}{\mu_0 \gamma \omega}}$, le champ s'atténue en $e^{-z/\delta}$. $\delta$ est l'épaisseur de peau. (4 pts attribués pour la clarté de la résolution et l'expression finale).
  > 
  > **4. Application numérique (4 pts) :** Pour le cuivre ($\gamma \approx 6 \times 10^7 \text{ S}\cdot\text{m}^{-1}$) à $f = 1\text{ GHz}$ ($\omega = 2\pi f$), on trouve $\delta \approx 2\ \mu\text{m}$. Le champ ne pénètre pas dans le métal : c'est l'effet de peau.

### ⚠️ Les pièges majeurs soulignés dans les rapports de jury
- Oublier de justifier $\text{div}(\vec{E}) = 0$ (confusion avec $\rho_e \neq 0$ dans les diélectriques polarisés).
- Se tromper dans la détermination de la racine carrée complexe (oublier que $\sqrt{j} = \frac{1+j}{\sqrt{2}}$).
- Ne pas préciser l'unité de $\delta$ (mètres) et omettre de commenter l'ordre de grandeur physique.

---

## 📌 Question Type 2 : Thermodynamique des systèmes ouverts en écoulement : bilan d'enthalpie et d'entropie dans une tuyère ou un compresseur

### 💡 Méthode canonique & Étapes de rédaction
1. **Définir le système ouvert :** Préciser le volume de contrôle délimité par une section d'entrée (1) et une section de sortie (2), en régime permanent (les variables d'état ne dépendent plus du temps dans le volume).
2. **Premier principe pour un système ouvert (Bilan d'énergie) :** 
   $$\Delta H_{\text{global}} = Q_{\text{cycle}} + W_{\text{ut}}$$
   Sous forme massique et stationnaire pour une entrée et une sortie :
   $$h_1 + \frac{1}{2}v_1^2 + g z_1 + q = h_2 + \frac{1}{2}v_2^2 + g z_2 + w_{\text{tech}}$$
3. **Second principe (Bilan d'entropie) :**
   $$S_{\text{ech}} + S_{\text{cree}} = \Delta S_{\text{sys}} \implies S_{\text{cree}} = \dot{m} (s_2 - s_1) - \int \frac{\delta \dot{Q}}{T_{\text{ext}}} \ge 0$$
4. **Simplifications spécifiques :**
   - *Tuyère / Diffuseur :* $w_{\text{tech}} = 0$ (pas de travail fourni), souvent adiabatique ($q = 0$).
   - *Compresseur / Turbine :* adiabatique ($q = 0$), variations d'énergie cinétique et potentielle souvent négligeables devant les variations d'enthalpie.

### 📋 Exemple de sujet & Rédaction modèle type Concours
* **Énoncé type :** "On considère une tuyère adiabatique alimentée par de l'air (assimilé à un gaz parfait de coefficients $\gamma, C_p$) à l'état $(P_1, T_1)$ avec une vitesse négligeable. La pression de sortie est $P_2$. Exprimer la vitesse de sortie $v_2$ en supposant l'écoulement isentropique."

* **Rédaction modèle (/20) :**
  > **1. Bilan énergétique (6 pts) :** Le système est ouvert, en régime permanent, traversé par un débit massique $\dot{m}$. La tuyère est adiabatique ($q = 0$) et ne fournit aucun travail transmissible ($w_{\text{tech}} = 0$). Le premier principe s'écrit sous forme massique entre l'entrée (1) et la sortie (2) :
  > $$h_1 + \frac{1}{2}v_1^2 + g z_1 = h_2 + \frac{1}{2}v_2^2 + g z_2$$
  > Les variations d'altitude sont négligeables ($z_1 \approx z_2$) et la vitesse d'entrée est supposée nulle ($v_1 \approx 0$). Il vient :
  > $$h_1 = h_2 + \frac{1}{2}v_2^2 \implies v_2 = \sqrt{2(h_1 - h_2)} = \sqrt{2 C_p (T_1 - T_2)}$$
  > 
  > **2. Utilisation du second principe / Loi de Laplace (8 pts) :** L'écoulement est supposé isentropique (adiabatique réversible, $S_{\text{cree}} = 0$). Pour un gaz parfait, la loi de Laplace relie $T$ et $P$ :
  > $$\frac{T_2}{T_1} = \left(\frac{P_2}{P_1}\right)^{\frac{\gamma-1}{\gamma}}$$
  > 
  > **3. Expression finale de la vitesse (6 pts) :** En injectant l'expression de $T_2$ dans celle de $v_2$ et en sachant que $C_p = \frac{\gamma R}{\gamma - 1}$ :
  > $$v_2 = \sqrt{2 \frac{\gamma R}{\gamma - 1} T_1 \left[ 1 - \left(\frac{P_2}{P_1}\right)^{\frac{\gamma-1}{\gamma}} \right]}$$
  > La cohérence dimensionnelle est vérifiée ($[RT] = \text{m}^2\cdot\text{s}^{-2}$).

### ⚠️ Les pièges majeurs soulignés dans les rapports de jury
- Confondre système fermé et système ouvert (oublier le terme d'enthalpie $h = u + Pv$ au profit de l'énergie interne $u$ seule).
- Oublier de préciser les hypothèses "stationnaire", "adiabatique" ou "réversible" pour justifier l'utilisation de la loi de Laplace.
- Erreur de signe dans le travail technique $w_{\text{tech}}$ (reçu ou fourni par le système).

---

## 📌 Question Type 3 : Mécanique des fluides : écoulement potentiel d'un fluide parfait incompressible et théorème de Bernoulli instationnaire

### 💡 Méthode canonique & Étapes de rédaction
1. **Définition du fluide parfait et incompressible :** $\text{div}(\vec{v}) = 0$ (masse volumique $\rho = \text{cste}$) et viscosité nulle $\mu = 0$.
2. **Caractère potentiel de l'écoulement :** Si le tourbillon $\vec{\Omega} = \frac{1}{2}\text{rot}(\vec{v}) = \vec{0}$ (souvent initialement vrai pour un fluide au repos mis en mouvement), alors le champ de vitesse dérive d'un potentiel des vitesses $\vec{v} = \text{grad}(\phi)$.
3. **Équation régissant $\phi$ :** Par conservation de la masse, $\Delta \phi = 0$ (équation de Laplace).
4. **Intégration d'Euler (Bernoulli instationnaire) :** Partir de l'équation d'Euler pour un fluide parfait : 
   $$\rho \left( \frac{\partial \vec{v}}{\partial t} + (\vec{v}\cdot\nabla)\vec{v} \right) = -\text{grad}(P) + \rho \vec{g}$$
   Utiliser l'identité vectorielle $(\vec{v}\cdot\nabla)\vec{v} = \frac{1}{2}\text{grad}(v^2) - \vec{v} \wedge \text{rot}(\vec{v})$.
   Si l'écoulement est irrotationnel ($\text{rot}(\vec{v}) = \vec{0}$) et que $\vec{v} = \text{grad}(\phi)$, remplacer $\vec{v}$ par $\nabla \phi$ et projeter pour intégrer le gradient spatial :
   $$\rho \frac{\partial \phi}{\partial t} + P + \frac{1}{2}\rho v^2 + \rho gz = C(t)$$

### 📋 Exemple de sujet & Rédaction modèle type Concours
* **Énoncé type :** "Établir le théorème de Bernoulli instationnaire pour un écoulement irrotationnel d'un fluide parfait incompressible. En déduire l'équation différentielle régissant les oscillations d'une colonne de liquide dans un tube en U de section constante."

* **Rédaction modèle (/20) :**
  > **1. Démonstration de Bernoulli instationnaire (10 pts) :** 
  > L'équation d'Euler pour un fluide parfait soumis à la pesanteur $\vec{g} = -g\vec{u}_z$ s'écrit :
  > $$\rho \left( \frac{\partial \vec{v}}{\partial t} + \frac{1}{2}\text{grad}(v^2) - \vec{v} \wedge \text{rot}(\vec{v}) \right) = -\text{grad}(P) - \rho g \vec{u}_z$$
  > L'écoulement étant irrotationnel ($\text{rot}(\vec{v}) = \vec{0}$), et en introduisant le potentiel des vitesses $\vec{v} = \text{grad}(\phi)$, il vient :
  > $$\text{grad}\left( \rho \frac{\partial \phi}{\partial t} + P + \frac{1}{2}\rho v^2 + \rho gz \right) = \vec{0}$$
  > En intégrant le long d'une ligne de courant (ou dans tout le domaine connexe si irrotationnel), la quantité entre parenthèses ne dépend que du temps $t$ :
  > $$\rho \frac{\partial \phi}{\partial t} + P + \frac{1}{2}\rho v^2 + \rho gz = f(t)$$
  > 
  > **2. Application au tube en U (10 pts) :** Soit $z$ la position de la surface libre dans une des branches du tube de longueur totale $L$ et de section $S$. La vitesse du fluide est uniforme dans la section : $v(t) = \dot{z}$. 
  > Le potentiel des vitesses vérifie $\phi = v \cdot s = \dot{z} \cdot s$ le long de l'axe du tube. Le terme instationnaire donne $\rho \int \frac{\partial v}{\partial t} ds = \rho L \ddot{z}$.
  > En appliquant Bernoulli entre les deux surfaces libres soumises à la pression atmosphérique $P_0$ :
  > $$(P_0 + \rho L \ddot{z} + \rho gz) - (P_0 + \rho g(-z)) = 0 \implies \ddot{z} + \frac{2g}{L}z = 0$$
  > C'est l'équation d'un oscillateur harmoniques de pulsation $\omega_0 = \sqrt{\frac{2g}{L}}$.

### ⚠️ Les pièges majeurs soulignés dans les rapports de jury
- Oublier que la constante d'intégration $C(t)$ dans Bernoulli instationnaire dépend du temps $t$ (contrairement au cas stationnaire où c'est une constante pure le long d'une ligne de courant).
- Oublier de mentionner l'hypothèse d'irrotationnalité ($\text{rot}(\vec{v}) = \vec{0}$) indispensable pour éliminer le terme $\vec{v} \wedge \text{rot}(\vec{v})$ et passer d'une intégration le long d'une ligne de courant à une intégration globale dans tout l'espace.
- Erreur de signe sur le terme d'altitude $gz$ selon l'orientation de l'axe vertical.