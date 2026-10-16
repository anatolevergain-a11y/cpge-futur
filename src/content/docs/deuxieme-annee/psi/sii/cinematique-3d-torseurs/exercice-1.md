---
title: 'Exercice 1 : Changement de repère et formule de Bour'
description: 'Problème corrigé type concours.'
---

### 🌐 Énoncé du problème / Cadre d'étude

On considère un système mécanique spatial étudié dans le cadre de la cinématique du solide indélicatable (filière PSI). 
Soit un repère absolu galiléen $\mathcal{R}_0 = (O, \vec{x}_0, \vec{y}_0, \vec{z}_0)$ et un repère intermédiaire $\mathcal{R}_1 = (O, \vec{x}_1, \vec{y}_1, \vec{z}_1)$ en rotation par rapport à $\mathcal{R}_0$. Soit enfin un repère $\mathcal{R}_2 = (A, \vec{x}_2, \vec{y}_2, \vec{z}_2)$ lié à un solide $S_2$ en mouvement par rapport à $\mathcal{R}_1$.

Le passage de $\mathcal{R}_0$ à $\mathcal{R}_1$ est défini par une rotation d'axe $(\mathcal{O}, \vec{z}_0 = \vec{z}_1)$ d'angle $\psi(t)$.
Le passage de $\mathcal{R}_1$ à $\mathcal{R}_2$ est défini par une rotation d'axe $(A, \vec{x}_1 = \vec{x}_2)$ d'angle $\theta(t)$.
Le point $𝐴$ a pour position dans $\mathcal{R}_1$ : $\vec{OA} = L \vec{z}_1$, où $L$ est une constante positive.

---

### ❓ Questions progressives

1. **Définition des bases et des vecteurs rotation**
   - Exprimer la matrice de passage $P_{01}$ de la base $\mathcal{B}_0 = (\vec{x}_0, \vec{y}_0, \vec{z}_0)$ à la base $\mathcal{B}_1 = (\vec{x}_1, \vec{y}_1, \vec{z}_1)$.
   - Déterminer le vecteur rotation instantanée $\vec{\Omega}_{1/0}$ du repère $\mathcal{R}_1$ par rapport à $\mathcal{R}_0$ exprimé dans la base $\mathcal{B}_1$.
   - Déterminer le vecteur rotation instantanée $\vec{\Omega}_{2/1}$ du repère $\mathcal{R}_2$ par rapport à $\mathcal{R}_1$ exprimé dans la base $\mathcal{B}_2$.

2. **Composition des vitesses de rotation et champ des vitesses**
   - En appliquant la loi de composition des vecteurs rotation, exprimer $\vec{\Omega}_{2/0}$ dans la base $\mathcal{B}_2$.
   - Énoncer et rappeler la formule de Bour pour la dérivée temporelle d'un vecteur dans un changement de repère.
   - Calculer la vitesse du point $A$ dans son mouvement par rapport à $\mathcal{R}_0$, notée $\vec{V}(A \in S_1/\mathcal{R}_0)$.

3. **Torseur cinématique et transport**
   - Écrire le torseur cinématique du mouvement de $S_2$ par rapport à $\mathcal{R}_0$ au point $A$, noté $\{\mathcal{V}_{2/0}\}$.
   - Exprimer les éléments de réduction de ce torseur au point $O$.

---

### 💡 Pistes & Indications méthodologiques

- **Passage de bases** : Utilisez les projections trigonométriques usuelles pour les rotations d'axes simples (angles d'Euler réduits).
- **Formule de Bour** : Pour un vecteur quelconque $\vec{X}$ dérivé dans $\mathcal{R}_1$ par rapport à $\mathcal{R}_0$, on a $\left( \frac{d\vec{X}}{dt} \right)_{\mathcal{R}_0} = \left( \frac{d\vec{X}}{dt} \right)_{\mathcal{R}_1} + \vec{\Omega}_{1/0} \wedge \vec{X}$.
- **Torseur cinématique** : Rappelez-vous que le torseur cinématique est un torseur antisymétrique dont le moment est la vitesse et la résultante est le vecteur rotation instantanée.

---

### 📋 Corrigé détaillé et vérification des résultats

#### 1. Définition des bases et des vecteurs rotation

* **Matrice de passage $P_{01}$** :
  Le repère $\mathcal{R}_1$ se déduit de $\mathcal{R}_0$ par une rotation d'axe $\vec{z}_0$ d'angle $\psi$. Les relations entre les vecteurs bases sont :
  $$
  \begin{cases}
  \vec{x}_1 = \cos(\psi)\vec{x}_0 + \sin(\psi)\vec{y}_0 \\
  \vec{y}_1 = -\sin(\psi)\vec{x}_0 + \cos(\psi)\vec{y}_0 \\
  \vec{z}_1 = \vec{z}_0
  \end{cases}
  $$
  La matrice de passage $P_{01}$ (qui permet d'exprimer les composantes d'un vecteur de $\mathcal{B}_1$ vers $\mathcal{B}_0$) est :
  $$
  P_{01} = \begin{pmatrix} 
  \cos(\psi) & -\sin(\psi) & 0 \\ 
  \sin(\psi) & \cos(\psi) & 0 \\ 
  0 & 0 & 1 
  \end{pmatrix}
  $$

* **Vecteurs rotation instantanée** :
  Par définition de la liaison pivot d'axe $\vec{z}_0$ :
  $$
  \vec{\Omega}_{1/0} = \dot{\psi} \vec{z}_0 = \dot{\psi} \vec{z}_1
  $$
  Par définition de la liaison pivot d'axe $\vec{x}_1$ entre $\mathcal{R}_1$ et $\mathcal{R}_2$ :
  $$
  \vec{\Omega}_{2/1} = \dot{\theta} \vec{x}_1 = \dot{\theta} \vec{x}_2
  $$

---

#### 2. Composition des vitesses de rotation et champ des vitesses

* **Vecteur $\vec{\Omega}_{2/0}$** :
  Par application de la loi de composition des vitesses de rotation :
  $$
  \vec{\Omega}_{2/0} = \vec{\Omega}_{2/1} + \vec{\Omega}_{1/0}
  $$
  Exprimons ce vecteur dans la base $\mathcal{B}_2$ sachant que $\vec{x}_2 = \vec{x}_1$ et $\vec{z}_1 = \vec{z}_2$ (avec $\vec{z}_1 = -\sin(\theta)\vec{y}_2 + \cos(\theta)\vec{z}_2$ selon la géométrie, ou simplement en conservant les bases intermédiaires). 
  Plus simplement, en base $\mathcal{B}_1$ :
  $$
  \vec{\Omega}_{2/0} = \dot{\theta} \vec{x}_1 + \dot{\psi} \vec{z}_1 = \begin{pmatrix} \dot{\theta} \\ 0 \\ \dot{\psi} \end{pmatrix}_{\mathcal{B}_1}
  $$

* **Formule de Bour appliquée à $\vec{OA}$** :
  Le point $A$ est défini par $\vec{OA} = L \vec{z}_1$ dans $\mathcal{R}_1$. Calculons sa vitesse dans $\mathcal{R}_0$ :
  $$
  \vec{V}(A \in S_1/\mathcal{R}_0) = \left( \frac{d\vec{OA}}{dt} \right)_{\mathcal{R}_0} = \left( \frac{d\vec{OA}}{dt} \right)_{\mathcal{R}_1} + \vec{\Omega}_{1/0} \wedge \vec{OA}
  $$
  Puisque $L$ est constant et $\vec{z}_1$ est fixe dans $\mathcal{R}_1$, $\left( \frac{d\vec{OA}}{dt} \right)_{\mathcal{R}_1} = \vec{0}$. Ainsi :
  $$
  \vec{V}(A \in S_1/\mathcal{R}_0) = (\dot{\psi} \vec{z}_1) \wedge (L \vec{z}_1) = \vec{0}
  $$
  *(Vérification dimensionnelle : $[L] = \text{m}$, $[\dot{\psi}] = \text{s}^{-1}$, le produit donne bien des $\text{m}\cdot\text{s}^{-1}$.)*

---

#### 3. Torseur cinématique et transport

* **Écriture du torseur au point $A$** :
  Le torseur cinématique du mouvement de $S_2$ par rapport à $\mathcal{R}_0$ s'écrit sous la forme :
  $$
  \{\mathcal{V}_{2/0}\} = \begin{Bmatrix} 
  \vec{\Omega}_{2/0} \\ 
  \vec{V}(A \in S_2/\mathcal{R}_0) 
  \end{Bmatrix}_A
  $$
  La résultante cinématique est $\vec{\Omega}_{2/0} = \dot{\theta} \vec{x}_1 + \dot{\psi} \vec{z}_1$.
  Le moment au point $A$ est $\vec{V}(A \in S_2/\mathcal{R}_0)$. Puisque $A$ appartient à l'axe fixe dans $\mathcal{R}_1$ et que $S_2$ est en liaison pivot par rapport à $\mathcal{R}_1$ d'axe passant par $A$, on a $\vec{V}(A \in S_2/\mathcal{R}_1) = \vec{0}$. Par composition :
  $$
  \vec{V}(A \in S_2/\mathcal{R}_0) = \vec{V}(A \in S_1/\mathcal{R}_0) + \vec{V}(A \in S_2/\mathcal{R}_1) = \vec{0} + \vec{0} = \vec{0}
  $$

* **Transport du torseur au point $O$** :
  Utilisons la formule de transport du moment d'un torseur cinématique :
  $$
  \vec{V}(O \in S_2/\mathcal{R}_0) = \vec{V}(A \in S_2/\mathcal{R}_0) + \vec{OA} \wedge \vec{\Omega}_{2/0}
  $$
  En remplaçant par les expressions vectorielles dans la base $\mathcal{B}_1$ :
  $$
  \vec{V}(O \in S_2/\mathcal{R}_0) = \vec{0} + (L \vec{z}_1) \wedge (\dot{\theta} \vec{x}_1 + \dot{\psi} \vec{z}_1)
  $$
  Sachant que $\vec{z}_1 \wedge \vec{z}_1 = \vec{0}$ et $\vec{z}_1 \wedge \vec{x}_1 = \vec{y}_1$, il vient :
  $$
  \vec{V}(O \in S_2/\mathcal{R}_0) = L \dot{\theta} \vec{y}_1
  $$

  Le torseur cinématique réduit au point $O$ s'exprime donc par la matrice colonne (en écriture de components dans $\mathcal{B}_1$) :
  $$
  \{\mathcal{V}_{2/0}\}_O = \begin{pmatrix} 
  \dot{\theta} \\ 
  0 \\ 
  \dot{\psi} \\ 
  0 \\ 
  L\dot{\theta} \\ 
  0 
  \end{pmatrix}_{\mathcal{B}_1}
  $$