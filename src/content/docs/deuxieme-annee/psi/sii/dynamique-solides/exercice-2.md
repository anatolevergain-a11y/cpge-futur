---
title: 'Exercice 2 : Matrice d inertie et théorèmes énergétiques'
description: 'Problème d entraînement type concours pour PSI.'
---

### 🌐 Énoncé du problème / Étude de cas

On s'intéresse à l'architecture cinématique et dynamique d'un bras manipulateur industriel léger utilisé pour des tâches de pick-and-place à haute cadence. Le système étudié est un mécanisme à deux degrés de liberté constituant le plan vertical de travail.

Le système est modélisé par :
- Un bâti fixe $\mathcal{R}_0$ muni du repère orthonormé direct $\mathcal{R}_0(O, \vec{x}_0, \vec{y}_0, \vec{z}_0)$.
- Un premier bras $\mathcal{S}_1$ de masse $m_1$, de longueur $L_1$, assimilé à un cylindre homogène mince de révolution d'axe $(O, \vec{z}_1)$. Le mouvement de $\mathcal{S}_1$ par rapport à $\mathcal{R}_0$ est une rotation d'axe $(O, \vec{z}_0)$ et d'angle $\theta_1(t)$. On définit le repère lié $\mathcal{R}_1(O, \vec{x}_1, \vec{y}_1, \vec{z}_0)$ tel que $\vec{x}_1$ est porté par l'axe du bras $\mathcal{S}_1$.
- Un second bras $\mathcal{S}_2$ de masse $m_2$, de longueur $L_2$, assimilé à une tige rigide homogène. Le mouvement de $\mathcal{S}_2$ par rapport à $\mathcal{S}_1$ est une rotation d'axe $(A, \vec{z}_0)$ (avec $\vec{OA} = L_1 \vec{x}_1$) et d'angle $\theta_2(t)$. On définit le repère lié $\mathcal{R}_2(A, \vec{x}_2, \vec{y}_2, \vec{z}_0)$ tel que $\vec{x}_2$ est porté par l'axe du bras $\mathcal{S}_2$.

**Données numériques et ordres de grandeur :**
- $L_1 = 0,6\ \text{m}$, $m_1 = 5\ \text{kg}$
- $L_2 = 0,5\ \text{m}$, $m_2 = 2\ \text{kg}$
- Accélération de la pesanteur : $g = 9,81\ \text{m}\cdot\text{s}^{-2}$

L'objectif de l'étude est d'évaluer le comportement énergétique du système soumis à son propre poids et commandé par des couples moteurs par l'application des théorèmes énergétiques, tout en menant un regard critique sur la modélisation géométrique et inertielle retenue.

---

### ❓ Questions progressives

1. **Paramétrage et cinématique**
   Exprimer les vecteurs vitesse $\vec{V}(G_1 / \mathcal{R}_0)$ et $\vec{V}(G_2 / \mathcal{R}_0)$, où $G_1$ et $G_2$ désignent les centres de gravité respectifs des solides $\mathcal{S}_1$ et $\mathcal{S}_2$ (situés aux milieux de chaque segment).

2. **Matrice d'inertie**
   Déterminer la matrice d'inertie du solide $\mathcal{S}_1$ exprimée au point $O$ dans la base $\mathcal{B}_1 = (\vec{x}_1, \vec{y}_1, \vec{z}_0)$. On rappelle que pour un cylindre plein ou une barre mince de révolution de longueur $L_1$ et de masse $m_1$ d'axe $(O, \vec{z}_0)$, le moment d'inertie longitudinal est négligeable et les moments transversaux en $G_1$ valent $\frac{1}{12}m_1 L_1^2$.

3. **Énergie cinétique**
   En déduire l'expression littérale de l'énergie cinétique galiléenne totale du système $\{\mathcal{S}_1 \cup \mathcal{S}_2\}$, notée $T_{(\mathcal{S}_1 \cup \mathcal{S}_2/\mathcal{R}_0)}$. On exprimera le résultat en fonction de $m_1, m_2, L_1, L_2, \theta_1, \dot{\theta}_1, \dot{\theta}_2$ et du produit scalaire $\vec{x}_1 \cdot \vec{x}_2 = \cos(\theta_2)$.

4. **Énergie potentielle et Théorème de l'énergie cinétique**
   Exprimer l'énergie potentielle de pesanteur $V(\theta_1, \theta_2)$ du système. À l'aide du théorème de l'énergie cinétique (ou de l'équation de Lagrange), établir l'équation du mouvement associée à la première articulation ($\theta_1$) en présence d'un couple moteur $C_1$ exercé par la liaison pivot entre $\mathcal{R}_0$ et $\mathcal{S}_1$ (on négligera les frottements).

5. **Analyse critique et limites du modèle**
   Dans une optique de conception mécatronique avancée, discutez la pertinence des hypothèses suivantes :
   - Assimilation de $\mathcal{S}_1$ et $\mathcal{S}_2$ à des barres géométriques parfaites sans section transverse significative.
   - Négligence des déformations élastiques (flexion des poutres) à haute cadence ($> 5\ \text{Hz}$).
   Quels impacts cela aurait-il sur la matrice d'inertie et le bilan énergétique réel ?

---

### 💡 Pistes & Indications

- **Q1 :** Utilisez la relation de transport des vitesses ou dérivez directement les vecteurs position vectoriels exprimés dans $\mathcal{R}_0$ en projetant dans les bases intermédiaires.
- **Q2 :** Appliquez le théorème de Huygens-Koeing pour transporter la matrice d'inertie du centre de gravité $G_1$ au point $O$.
- **Q3 :** Séparez l'énergie cinétique en deux termes : $T_1 = \frac{1}{2} \vec{V}(G_1/\mathcal{R}_0)^2 + \frac{1}{2} \vec{\Omega}(\mathcal{S}_1/\mathcal{R}_0) \cdot \overline{\overline{I}}_{O}(\mathcal{S}_1) \vec{\Omega}(\mathcal{S}_1/\mathcal{R}_0)$ et procédez de même pour $\mathcal{S}_2$ en son point d'ancrage ou centre de masse.
- **Q5 :** Pensez à l'inertie de rotor des moteurs embarqués et à l'effet de la fréquence propre de résonance structurale par rapport à la bande passante de la commande.

---

### 📋 Corrigé détaillé et analyse des résultats

#### 1. Cinématique des centres de gravité
Le centre de gravité $G_1$ de $\mathcal{S}_1$ est situé à $OG_1 = \frac{L_1}{2}\vec{x}_1$.
La vitesse de $G_1$ par rapport à $\mathcal{R}_0$ s'obtient par dérivation :
$$\vec{V}(G_1 / \mathcal{R}_0) = \frac{d}{dt}( \frac{L_1}{2}\vec{x}_1 )_{\mathcal{R}_0} = \frac{L_1}{2} \dot{\theta}_1 \vec{y}_1$$

Pour le solide $\mathcal{S}_2$, le point $A$ a pour position $\vec{OA} = L_1 \vec{x}_1$. Le centre de gravité $G_2$ est tel que $\vec{AG_2} = \frac{L_2}{2}\vec{x}_2$.
La position de $G_2$ par rapport à $O$ est donc :
$$\vec{OG_2} = L_1 \vec{x}_1 + \frac{L_2}{2}\vec{x}_2$$
Par dérivation dans $\mathcal{R}_0$ (en sachant que $\vec{\Omega}(\mathcal{R}_1/\mathcal{R}_0) = \dot{\theta}_1\vec{z}_0$ et $\vec{\Omega}(\mathcal{R}_2/\mathcal{R}_0) = (\dot{\theta}_1 + \dot{\theta}_2)\vec{z}_0$) :
$$\vec{V}(G_2 / \mathcal{R}_0) = L_1 \dot{\theta}_1 \vec{y}_1 + \frac{L_2}{2} (\dot{\theta}_1 + \dot{\theta}_2) \vec{y}_2$$

#### 2. Matrice d'inertie de $\mathcal{S}_1$ en $O$
Puisque $\mathcal{S}_1$ est un cylindre de révolution d'axe $(O, \vec{z}_0)$, sa matrice d'inertie en son centre de masse $G_1$ dans la base $\mathcal{B}_1$ est de la forme :
$$\overline{\overline{I}}_{G_1}(\mathcal{S}_1) = \begin{pmatrix} A_1 & 0 & 0 \\ 0 & B_1 & 0 \\ 0 & 0 & C_1 \end{pmatrix}_{\mathcal{B}_1}$$
Avec $A_1 = C_1 = \frac{1}{12} m_1 L_1^2$ et $B_1 \approx 0$ (filiformité).
En appliquant le théorème de Huygens-Koeing au point $O$ (sachant que $\vec{OG_1} = X_{G_1}\vec{x}_1 = \frac{L_1}{2}\vec{x}_1$) :
$$\overline{\overline{I}}_{O}(\mathcal{S}_1) = \overline{\overline{I}}_{G_1}(\mathcal{S}_1) + m_1 \begin{pmatrix} Y_{G_1}^2 + Z_{G_1}^2 & -X_{G_1}Y_{G_1} & -X_{G_1}Z_{G_1} \\ -X_{G_1}Y_{G_1} & X_{G_1}^2 + Z_{G_1}^2 & -Y_{G_1}Z_{G_1} \\ -X_{G_1}Z_{G_1} & -Y_{G_1}Z_{G_1} & X_{G_1}^2 + Y_{G_1}^2 \end{pmatrix}$$
Comme $Y_{G_1} = 0$ et $Z_{G_1} = 0$ :
$$\overline{\overline{I}}_{O}(\mathcal{S}_1) = \begin{pmatrix} \frac{1}{12} m_1 L_1^2 & 0 & 0 \\ 0 & \frac{1}{12} m_1 L_1^2 + m_1 \left(\frac{L_1}{2}\right)^2 & 0 \\ 0 & 0 & \frac{1}{12} m_1 L_1^2 + m_1 \left(\frac{L_1}{2}\right)^2 \end{pmatrix} = \begin{pmatrix} \frac{1}{12} m_1 L_1^2 & 0 & 0 \\ 0 & \frac{1}{3} m_1 L_1^2 & 0 \\ 0 & 0 & \frac{1}{3} m_1 L_1^2 \end{pmatrix}$$

#### 3. Énergie cinétique totale
- Pour $\mathcal{S}_1$ :
$$T_1 = \frac{1}{2} m_1 \|\vec{V}(G_1/\mathcal{R}_0)\|^2 + \frac{1}{2} \vec{\Omega}(\mathcal{S}_1/\mathcal{R}_0) \cdot \overline{\overline{I}}_O(\mathcal{S}_1) \vec{\Omega}(\mathcal{S}_1/\mathcal{R}_0)$$
$$T_1 = \frac{1}{2} m_1 \left(\frac{L_1}{2} \dot{\theta}_1\right)^2 + \frac{1}{2} \left(\frac{1}{3} m_1 L_1^2\right) \dot{\theta}_1^2 = \left(\frac{1}{8} + \frac{1}{6}\right) m_1 L_1^2 \dot{\theta}_1^2 = \frac{7}{24} m_1 L_1^2 \dot{\theta}_1^2$$
*(Alternative via Koenig : $T_1 = \frac{1}{2} m_1 V(G_1)^2 + \frac{1}{2} C_1 \dot{\theta}_1^2 = \frac{1}{8} m_1 L_1^2 \dot{\theta}_1^2 + \frac{1}{2}(\frac{1}{12}m_1 L_1^2)\dot{\theta}_1^2 = \frac{5}{24}m_1 L_1^2 \dot{\theta}_1^2$ - attention au transport exact, le moment en $O$ est bien $\frac{1}{3}m_1 L_1^2$).*

- Pour $\mathcal{S}_2$ :
En utilisant le théorème de Koenig par rapport au point $A$ ou directement :
$$T_2 = \frac{1}{2} m_2 \|\vec{V}(G_2/\mathcal{R}_0)\|^2 + \frac{1}{2} C_2 \dot{\theta}_{2/1}^2 \quad (\text{avec } C_2 = \frac{1}{12}m_2 L_2^2 \text{ et } \dot{\theta}_{2/1} = \dot{\theta}_1 + \dot{\theta}_2)$$
En développant $\|\vec{V}(G_2/\mathcal{R}_0)\|^2$ :
$$\vec{V}(G_2 / \mathcal{R}_0) = L_1 \dot{\theta}_1 \vec{y}_1 + \frac{L_2}{2} (\dot{\theta}_1 + \dot{\theta}_2) \vec{y}_2$$
Le carré de la norme donne :
$$\|\vec{V}(G_2 / \mathcal{R}_0)\|^2 = L_1^2 \dot{\theta}_1^2 + \frac{L_2^2}{4}(\dot{\theta}_1 + \dot{\theta}_2)^2 + L_1 L_2 \dot{\theta}_1 (\dot{\theta}_1 + \dot{\theta}_2) \underbrace{(\vec{y}_1 \cdot \vec{y}_2)}_{=\cos(\theta_2)}$$

#### 4. Énergie potentielle et Équation du mouvement
L'altitude des centres de gravité par rapport à l'horizontale (axe $(O, \vec{x}_0)$) est :
- $z_{G_1} = \frac{L_1}{2} \sin(\theta_1)$
- $z_{G_2} = L_1 \sin(\theta_1) + \frac{L_2}{2} \sin(\theta_1 + \theta_2)$

L'énergie potentielle totale est :
$$V = m_1 g \frac{L_1}{2} \sin(\theta_1) + m_2 g \left( L_1 \sin(\theta_1) + \frac{L_2}{2} \sin(\theta_1 + \theta_2) \right)$$

Par application de l'équation de Lagrange associée à la coordonnée généralisée $\theta_1$ :
$$\frac{d}{dt}\left(\frac{\partial T}{\partial \dot{\theta}_1}\right) - \frac{\partial T}{\partial \theta_1} + \frac{\partial V}{\partial \theta_1} = C_1$$
Cette démarche analytique permet d'obtenir rigoureusement le couple de commande $C_1$ nécessaire sans passer par l'isolement fastidieux de chaque sous-système et la projection des torseurs de liaison.

#### 5. Analyse critique et limites du modèle
- **Hypothèse de rigidité des profilés :** À haute cadence, les accélérations angulaires $\ddot{\theta}$ importantes génèrent des forces d'inertie colossales. Les bras $\mathcal{S}_1$ et $\mathcal{S}_2$ subissent des flexions (effet mast). Le modèle rigide surestime la bande passante réelle et conduit à des erreurs de positionnement de l'ordre du millimètre, inacceptables en micro-assemblage.
- **Matrice d'inertie et masses embarquées :** Le modèle néglige la masse des actionneurs (moteurs et réducteurs) souvent situés aux articulations. Par exemple, le moteur entraînant $\mathcal{S}_2$ est généralement placé en $O$ (via une transmission par courroie/câble) ou en $A$ (alourdissant directement $\mathcal{S}_1$). Placer le moteur en $A$ augmente considérablement $m_1$ équivalent et modifie profondément les termes croisés de la matrice d'inertie, rendant caduque l'hypothèse d'une barre homogène simple.