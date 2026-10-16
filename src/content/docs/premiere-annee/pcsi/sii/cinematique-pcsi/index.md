---
title: 'Cours : Cinématique du solide'
description: 'Fiche de synthèse officielle et démonstrations du programme CPGE PCSI.'
---

## 📌 1. Définitions & Cadre d'étude

La cinématique du solide indéformable a pour objet l'étude du mouvement des solides sans se préoccuper des causes qui les produisent (les forces). Le cadre de travail est celui de la mécanique du point et du solide dans l'espace euclidien orienté à trois dimensions $\mathcal{E}_3$, rapporté à un repère galiléen ou non, muni d'une base orthonormée directe $\mathcal{B} = (\vec{x}, \vec{y}, \vec{z})$.

### 1.1. Solide indéformable
Un solide $S$ est un ensemble de points matériels $M$ tel que la distance entre deux points quelconques $M$ et $N$ de $S$ reste constante au cours du temps :
$$\forall (M, N) \in S^2, \quad \frac{d}{dt} (MN^2) = 0 \iff \forall t, \, ||\overrightarrow{MN}(t)|| = \text{constante}$$

### 1.2. Référentiel et Base cinématique
*   **Référentiel $\mathcal{R}$ :** Associé à un solide indéformable de référence $S_0$, noté $\mathcal{R}_0(O_0, \vec{x}_0, \vec{y}_0, \vec{z}_0)$.
*   **Vecteur rotation instantanée :** Soit un repère $\mathcal{R}_1(O_1, \vec{x}_1, \vec{y}_1, \vec{z}_1)$ en mouvement par rapport à $\mathcal{R}_0$. Le vecteur rotation instantanée de $\mathcal{R}_1$ par rapport à $\mathcal{R}_0$, noté $\vec{\Omega}_{\mathcal{R}_1/\mathcal{R}_0}$, est unique et caractérise la variation temporelle de la base $(\vec{x}_1, \vec{y}_1, \vec{z}_1)$ :
    $$\left(\frac{d\vec{u}}{dt}\right)_{\mathcal{R}_0} = \left(\frac{d\vec{u}}{dt}\right)_{\mathcal{R}_1} + \vec{\Omega}_{\mathcal{R}_1/\mathcal{R}_0} \wedge \vec{u}$$
    pour tout vecteur $\vec{u}$.

### 1.3. Champ des vitesses d'un solide
Le champ des vitesses d'un solide $S$ en mouvement dans un repère $\mathcal{R}_0$ est un **champ équiprojectif**. Pour tous points $P$ et $M$ appartenant au solide $S$ :
$$\vec{V}(M \in S/\mathcal{R}_0) = \vec{V}(P \in S/\mathcal{R}_0) + \vec{\Omega}_{S/\mathcal{R}_0} \wedge \overrightarrow{PM}$$

---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### 2.1. Torseur cinématique
Le champ des vitesses d'un solide indéformable est antisymétrique. Il se modélise par un torseur, appelé **torseur cinématique** du mouvement du solide $S$ par rapport au repère $\mathcal{R}_0$, noté $\mathcal{V}_{S/\mathcal{R}_0}$ :

$$\mathcal{V}_{S/\mathcal{R}_0} = \left\{ \begin{cmatrix} \vec{\Omega}_{S/\mathcal{R}_0} \\ \vec{V}(P \in S/\mathcal{R}_0) \end{cmatrix} \right\}_{\! P}$$

La matrice colonne associée au torseur en $P$ dans $\mathcal{B} \in \mathcal{M}_{6,1}(\mathbb{R})$ est :
$$[\mathcal{V}_{S/\mathcal{R}_0}]_P = \begin{pmatrix} \Omega_x \\ \Omega_y \\ \Omega_z \\ V_x(P) \\ V_y(P) \\ V_z(P) \end{pmatrix}_{\mathcal{B}}$$

### 2.2. Démonstration : Propriété d'équiprojectivité du champ des vitesses
*   **Énoncé :** Pour tous points $A$ et $B$ d'un solide $S$ en mouvement dans $\mathcal{R}_0$, la projection de leur différence de vitesse sur la droite $(AB)$ est nulle :
    $$(\vec{V}(B \in S/\mathcal{R}_0) - \vec{V}(A \in S/\mathcal{R}_0)) \cdot \overrightarrow{AB} = 0$$

*   **Démonstration rigoureuse :**
    Puisque le solide est indéformable, la distance entre $A$ et $B$ est constante :
    $$||\overrightarrow{AB}||^2 = \overrightarrow{AB} \cdot \overrightarrow{AB} = cste$$
    Dérivons cette relation par rapport au temps dans le repère $\mathcal{R}_0$ :
    $$\frac{d}{dt} (\overrightarrow{AB} \cdot \overrightarrow{AB}) = 2 \, \left(\frac{d\overrightarrow{AB}}{dt}\right)_{\mathcal{R}_0} \cdot \overrightarrow{AB} = 0$$
    Or, par définition de la dérivation vectorielle :
    $$\left(\frac{d\overrightarrow{AB}}{dt}\right)_{\mathcal{R}_0} = \left(\frac{d\vec{OB}}{dt}\right)_{\mathcal{R}_0} - \left(\frac{d\vec{OA}}{dt}\right)_{\mathcal{R}_0} = \vec{V}(B \in S/\mathcal{R}_0) - \vec{V}(A \in S/\mathcal{R}_0)$$
    En injectant ce résultat :
    $$(\vec{V}(B \in S/\mathcal{R}_0) - \vec{V}(A \in S/\mathcal{R}_0)) \cdot \overrightarrow{AB} = 0$$
    *C.Q.F.D.*

### 2.3. Composition des mouvements
Soient trois repères $\mathcal{R}_0$, $\mathcal{R}_1$ et $\mathcal{R}_2$. 
*   **Composition des vitesses :**
    $$\vec{V}(M \in \mathcal{R}_2/\mathcal{R}_0) = \vec{V}(M \in \mathcal{R}_2/\mathcal{R}_1) + \vec{V}(M \in \mathcal{R}_1/\mathcal{R}_0)$$
*   **Composition des vecteurs rotations (loi de cinématique de Poinsot) :**
    $$\vec{\Omega}_{\mathcal{R}_2/\mathcal{R}_0} = \vec{\Omega}_{\mathcal{R}_2/\mathcal{R}_1} + \vec{\Omega}_{\mathcal{R}_1/\mathcal{R}_0}$$
*   **Relation de composition des torseurs cinématiques :**
    $$\{\mathcal{V}_{\mathcal{R}_2/\mathcal{R}_0}\} = \{\mathcal{V}_{\mathcal{R}_2/\mathcal{R}_1}\} + \{\mathcal{V}_{\mathcal{R}_1/\mathcal{R}_0}\}$$

---

## 💡 3. Méthodes de calcul & Algorithmes

### 3.1. Analyse d'une liaison cinématique
Pour déterminer le torseur cinématique d'une liaison idéale entre deux solides $S_1$ and $S_2$, on identifie les degrés de liberté géométriques :
1.  **Liaison Pivot (axe $(O, \vec{z})$) :** 1 rotation permise $\dot{\theta}$.
    $$\mathcal{V}_{S_2/S_1} = \left\{ \begin{cmatrix} \dot{\theta} \vec{z} \\ \vec{0} \end{cmatrix} \right\}_{\! O}$$
2.  **Liaison Glissière (axe $(O, \vec{x})$) :** 1 translation permise $\dot{x}$.
    $$\mathcal{V}_{S_2/S_1} = \left\{ \begin{cmatrix} \vec{0} \\ \dot{x} \vec{x} \end{cmatrix} \right\}_{\! O}$$
3.  **Liaison Pivot-glissant (axe $(O, \vec{z})$) :** 1 rotation et 1 translation.
    $$\mathcal{V}_{S_2/S_1} = \left\{ \begin{cmatrix} \dot{\theta} \vec{z} \\ \dot{z} \vec{z} \end{cmatrix} \right\}_{\! O}$$

### 3.2. Méthode de dérivation vectorielle (Calcul de vitesse)
Pour calculer la vitesse d'un point $M$ appartenant à un solide $S$ en mouvement par rapport à $\mathcal{R}_0$ :
1.  Identifier un point $A$ du solide dont la trajectoire dans $\mathcal{R}_0$ est connue (souvent un point fixe ou appartenant à un axe de rotation).
2.  Appliquer la formule de transport du champ des vitesses :
    $$\vec{V}(M \in S/\mathcal{R}_0) = \vec{V}(A \in S/\mathcal{R}_0) + \vec{\Omega}_{S/\mathcal{R}_0} \wedge \overrightarrow{AM}$$
3.  Développer le produit vectoriel dans la base adaptée.

---

## ⚠️ 4. Pièges classiques aux Concours

*   **Attention au point de réduction du torseur :** Ne jamais additionner ou transporter des vitesses sans préciser le point de réduction. L'écriture $\mathcal{V} = (\vec{\Omega}, \vec{V})$ est ambigüe si le point $P$ n'est pas explicitement mentionné.
*   **Erreur de référentiel dans la dérivation :** Lorsque l'on dérive un vecteur $\vec{u}(t)$ dans $\mathcal{R}_0$, il est impératif d'utiliser la formule de change de base si la base associée n'est pas fixe dans $\mathcal{R}_0$. Oublier le terme $\vec{\Omega} \wedge \vec{u}$ est l'erreur éliminatoire classique en colle et aux concours.
*   **Confusion entre vitesse d'un point matériel et vitesse du point géométrique coïncident :** Bien distinguer $\vec{V}(M \in S_2/\mathcal{R}_0)$ (vitesse du point physique $M$ appartenant au solide $S_2$) et la vitesse d'entraînement lors de l'application de la loi de composition des mouvements.
*   **Caractère non holonome :** Ne pas intégrer hâtivement des relations cinématiques portant sur les vitesses en relations géométriques si le système comporte des conditions de roulement sans glissement (ex: disque sur un plan), qui constituent des équations différentielles non intégrables directement (*non holonomes*).