---
title: 'Exercice 1 : Torseurs cinématiques'
description: 'Problème d entraînement type concours pour MPSI.'
---

### 🌐 Énoncé du problème / Étude de cas

On s'intéresse au mécanisme d'orientation d'un panneau solaire bifacial destiné à une centrale photovoltaïque de forte puissance. Pour maximiser le rendement énergétique au cours de la journée, le panneau doit pivoter autour d'un axe horizontal orienté Est-Ouest. 

Le système étudié est modélisé par le schéma cinématique spatial ci-dessous. Il est composé de quatre solides indéformables :
*   $\text{0}$ : Le bâti fixe (ancré au sol, repère galiléen $\mathcal{R}_0(O, \vec{x}_0, \vec{y}_0, \vec{z}_0)$ où $\vec{z}_0$ est vertical ascendant, et $\vec{x}_0$ est orienté vers le Nord).
*   $\text{1}$ : Un support intermédiaire en rotation par rapport à $\text{0}$ autour de l'axe $(O, \vec{z}_0)$ d'angle $\psi$ (azimut).
*   $\text{2}$ : Le bras de support en rotation par rapport à $\text{1}$ autour de l'axe $(A, \vec{x}_1)$ (avec $\vec{x}_1 = \vec{x}_0$) d'angle $\theta$ (site).
*   $\text{3}$ : Le panneau solaire proprement dit, rigidement lié au bras $\text{2}$ pour cette phase d'étude (${\vec{V}(P \in 3/2) = \vec{0}}$ pour tout point $P$).

*Données géométriques et ordres de grandeur réalistes :*
*   Le vecteur $\vec{OA} = H \vec{z}_0$ avec $H = 2{,}5\text{ m}$.
*   Le centre de gravité du panneau $\text{3}$ est noté $G$, tel que $\vec{AG} = L \vec{y}_2$ avec $L = 1{,}5\text{ m}$ (où $\vec{y}_2$ est un vecteur lié au solide $\text{2}$).
*   Le système est soumis à des sollicitations cinématiques imposées par des motorisations à commande numérique.

---

### ❓ Questions progressives (incluant des questions d'analyse critique)

1. **Paramétrage et bases cinématiques**
   Définir les bases $\mathcal{B}_0(\vec{x}_0, \vec{y}_0, \vec{z}_0)$, $\mathcal{B}_1(\vec{x}_1, \vec{y}_1, \vec{z}_1)$ et $\mathcal{B}_2(\vec{x}_2, \vec{y}_2, \vec{z}_2)$ en précisant les angles de rotation $\psi$ et $\theta$. Exprimer les matrices de passage correspondantes.

2. **Torseurs cinématiques élémentaires**
   Exprimer le torseur cinématique du mouvement du solide $\text{1}$ par rapport au solide $\text{0}$, noté $\mathcal{V}(\text{1}/\text{0})$, au point $O$ dans la base $\mathcal{B}_0$.
   Exprimer de même le torseur cinématique du mouvement du solide $\text{2}$ par rapport au solide $\text{1}$, noté $\mathcal{V}(\text{2}/\text{1})$, au point $A$ dans la base $\mathcal{B}_1$.

3. **Composition des torseurs cinématiques**
   Par application de la loi de composition des torseurs cinématiques, déterminer l'expression du torseur cinématique du mouvement de $\text{3}$ par rapport à $\text{0}$, noté $\mathcal{V}(\text{3}/\text{0})$, exprimé au point $A$ dans la base $\mathcal{B}_2$.

4. **Champ de vitesses**
   En déduire l'expression vectorielle de la vitesse absolue du centre de gravité du panneau $G$, soit $\vec{V}(G \in \text{3}/\text{0})$, exprimée dans la base $\mathcal{B}_2$.

5. **Analyse critique et limites du modèle**
   Dans la réalité industrielle, les structures subissent des efforts de vent importants. 
   *   Si l'on considère une rafale de vent modélisée par une force aérodynamique s'exerçant en $G$, quel est l'impact de l'hypothèse de rigidité absolue des solides $\text{0}$, $\text{1}$, $\text{2}$ et $\text{3}$ sur la validité du calcul cinématique instantané ?
   *   Citer deux phénomènes physiques non pris en compte par ce modèle cinématique pur qui limitent sa précision à grande vitesse de rotation.

---

### 💡 Pistes & Indications

*   *Question 1 :* Utilisez les rotations successives : $\mathcal{B}_0 \xrightarrow{(\vec{z}_0, \psi)} \mathcal{B}_1$ puis $\mathcal{B}_1 \xrightarrow{(\vec{x}_1, \theta)} \mathcal{B}_2$.
*   *Question 2 :* Rappelez-vous qu'une liaison pivot se caractérise par un torseur dont la résultante cinématique (taux de rotation) est porteur de l'axe de la liaison.
*   *Question 3 :* $\mathcal{V}(\text{3}/\text{0}) = \mathcal{V}(\text{3}/\text{2}) + \mathcal{V}(\text{2}/\text{1}) + \mathcal{V}(\text{1}/\text{0})$. Attention à bien ramener tous les torseurs au même point ($A$) et dans la même base ($\mathcal{B}_2$) avant addition.
*   *Question 5 :* Pensez aux notions de déformabilité élastique (souplesse des arbres et des structures) et aux jeux fonctionnels dans les liaisons mécaniques (guidages par roulements).

---

### 📋 Corrigé détaillé et analyse des résultats

#### 1. Paramétrage et bases cinématiques
*   Base $\mathcal{B}_0(\vec{x}_0, \vec{y}_0, \vec{z}_0)$ liée à $\text{0}$.
*   Base $\mathcal{B}_1(\vec{x}_1, \vec{y}_1, \vec{z}_1)$ liée à $\text{1}$ : $\vec{x}_1 = \vec{x}_0$, et la base $\mathcal{B}_1$ se déduit de $\mathcal{B}_0$ par une rotation d'axe $\vec{z}_0$ et d'angle $\psi$. 
    $$\vec{y}_1 = -\sin(\psi)\vec{x}_0 + \cos(\psi)\vec{y}_0 \quad (\text{selon les conventions usuelles})$$
*   Base $\mathcal{B}_2(\vec{x}_2, \vec{y}_2, \vec{z}_2)$ liée à $\text{2}$ : $\vec{x}_2 = \vec{x}_1 = \vec{x}_0$, et $\mathcal{B}_2$ se déduit de $\mathcal{B}_1$ par une rotation d'axe $\vec{x}_1$ et d'angle $\theta$.
    $$\vec{y}_2 = \cos(\theta)\vec{y}_1 + \sin(\theta)\vec{z}_1$$
    $$\vec{z}_2 = -\sin(\theta)\vec{y}_1 + \cos(\theta)\vec{z}_1$$

---

#### 2. Torseurs cinématiques élémentaires
*   Le mouvement de $\text{1}/\text{0}$ est une rotation d'axe $(O, \vec{z}_0)$ :
    $$\mathcal{V}(\text{1}/\text{0}) = \begin{cases} \vec{\Omega}(\text{1}/\text{0}) = \dot{\psi} \vec{z}_0 \\ \vec{V}(O \in \text{1}/\text{0}) = \vec{0} \end{cases}_{\text{exprimé en } O}$$
*   Le mouvement de $\text{2}/\text{1}$ est une rotation d'axe $(A, \vec{x}_1)$ :
    $$\mathcal{V}(\text{2}/\text{1}) = \begin{cases} \vec{\Omega}(\text{2}/\text{1}) = \dot{\theta} \vec{x}_1 = \dot{\theta} \vec{x}_0 \\ \vec{V}(A \in \text{2}/\text{1}) = \vec{0} \end{cases}_{\text{exprimé en } A}$$

---

#### 3. Composition des torseurs cinématiques
Par isependance des mouvements et par addition des torseurs au **même point $A$** :
$$\mathcal{V}(\text{3}/\text{0}) = \mathcal{V}(\text{3}/\text{2}) + \mathcal{V}(\text{2}/\text{1}) + \mathcal{V}(\text{1}/\text{0})$$
Étant donné que $\text{3}$ est lié rigide à $\text{2}$, $\mathcal{V}(\text{3}/\text{2}) = \mathbf{0}$.

Exprimons les éléments de réduction en $A$ :
*   Résultante cinématique :
    $$\vec{\Omega}(\text{3}/\text{0}) = \vec{\Omega}(\text{3}/\text{2}) + \vec{\Omega}(\text{2}/\text{1}) + \vec{\Omega}(\text{1}/\text{0}) = \mathbf{0} + \dot{\theta} \vec{x}_0 + \dot{\psi} \vec{z}_0$$
*   Champ de vitesse en $A$ :
    $$\vec{V}(A \in \text{3}/\text{0}) = \vec{V}(A \in \text{3}/\text{2}) + \vec{V}(A \in \text{2}/\text{1}) + \vec{V}(A \in \text{1}/\text{0})$$
    *   $\vec{V}(A \in \text{3}/\text{2}) = \vec{0}$ ($3$ lié à $2$)
    *   $\vec{V}(A \in \text{2}/\text{1}) = \vec{0}$ ($A$ appartient à l'axe de rotation)
    *   $\vec{V}(A \in \text{1}/\text{0}) = \vec{V}(O \in \text{1}/\text{0}) + \vec{OA} \wedge \vec{\Omega}(\text{1}/\text{0}) = \vec{0} + (H \vec{z}_0) \wedge (\dot{\psi} \vec{z}_0) = \vec{0}$

Finalement, au point $A$ :
$$\mathcal{V}(\text{3}/\text{0})_A = \begin{cases} \vec{\Omega}(\text{3}/\text{0}) = \dot{\theta} \vec{x}_0 + \vphantom{\dot{\psi}}\dot{\psi} \vec{z}_0 \\ \vec{V}(A \in \text{3}/\text{0}) = \vec{0} \end{cases}$$

---

#### 4. Champ de vitesses
Calculons la vitesse absolue du centre de gravité $G$ par application de la formule du champ des moments (ou champ de vitesses) pour le solide $\text{3}$ en mouvement par rapport à $\text{0}$ :
$$\vec{V}(G \in \text{3}/\text{0}) = \vec{V}(A \in \text{3}/\text{0}) + \overrightarrow{GA} \wedge \vec{\Omega}(\text{3}/\text{0})$$

On sait que $\vec{AG} = L \vec{y}_2$, donc $\overrightarrow{GA} = -L \vec{y}_2$.
$$\vec{V}(G \in \text{3}/\text{0}) = (-L \vec{y}_2) \wedge (\dot{\theta} \vec{x}_0 + \dot{\psi} \vec{z}_0)$$

En projetant dans la base $\mathcal{B}_2$ (sachant que $\vec{x}_0 = \vec{x}_2$) :
$$\vec{V}(G \in \text{3}/\text{0}) = -L \vec{y}_2 \wedge (\dot{\theta} \vec{x}_2) - L \vec{y}_2 \wedge (\dot{\psi} \vec{z}_0)$$
Or, $\vec{z}_0 = -\sin(\theta)\vec{y}_2 + \cos(\theta)\vec{z}_2$ (par inversion des relations de passage).
Donc :
$$\vec{V}(G \in \text{3}/\text{0}) = L\dot{\theta}\vec{z}_2 - L\dot{\psi}\left( \vec{y}_2 \wedge (-\sin(\theta)\vec{y}_2 + \cos(\theta)\vec{z}_2) \right)$$
$$\vec{V}(G \in \text{3}/\text{0}) = L\dot{\theta}\vec{z}_2 - L\dot{\psi}\cos(\theta)\vec{x}_2$$

---

#### 5. Analyse critique et limites du modèle
*   **Impact de l'hypothèse de rigidité :** L'hypothèse de solides indéformables pose problème sous l'effet d'une rafale de vent. En réalité, le mât ($H = 2{,}5\text{ m}$) et le bras subissent des fléchissements élastiques. Le champ cinématique réel intègre des termes de déformation (champ des déplacements élastiques $\vec{u}(M) \neq \vec{0}$), ce qui modifie légèrement la position réelle de $G$ et induit des erreurs de pointage du panneau solaire que le modèle cinématique pur ne peut détecter.
*   **Phénomènes non pris en compte :** 
    1. *Les jeux mécaniques* dans les réducteurs et les guidages (contacts non parfaits, hystérésis cinématique).
    2. *Les effets dynamiques transitoires* (vibrations propres de la structure sous l'effet de lâchers tourbillonnaires ou de rafales, couplage elasto-cinématique).