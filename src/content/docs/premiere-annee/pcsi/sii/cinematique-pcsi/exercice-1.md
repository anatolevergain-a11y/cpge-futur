---
title: 'Exercice 1 : Torseurs cinématiques'
description: 'Problème d entraînement type concours pour PCSI.'
---

### 🌐 Énoncé du problème / Cadre d'étude

On s'intéresse à un mécanisme de levage industriel utilisé sur un chantier de BTP, modélisé par le système spatial schématisé ci-dessous. 

Le système est rattaché à un bâti fixe noté $0$. Il est composé de :
*   Un bras principal (solide $1$) en liaison pivot d'axe $(O, \vec{z}_0)$ avec le bâti $0$. On pose $\vec{OA} = L \vec{x}_1$.
*   Un vérin hydraulique modélisé par deux solides en liaison glissière : le corps du vérin (solide $2$) et la tige (solide $3$). 
    *   La liaison entre le corps $2$ et le bâti $0$ est une liaison pivot d'axe $(B, \vec{z}_0)$. On note $\vec{OB} = -h \vec{y}_0$.
    *   La liaison entre la tige $3$ et le bras $1$ est une liaison pivot d'axe $(C, \vec{z}_0)$. On pose $\vec{AC} = d \vec{x}_1$.
*   Une charge (solide $4$) en liaison pivot d'axe $(A, \vec{z}_0)$ avec le bras $1$. Dans le cadre de cette étude cinématique, on se limitera à l'étude du mécanisme de déploiement $(0 \to 1 \to 3 \to 2)$.

**Paramétrage et bases associées :**
*   Base $\mathcal{R}_0 = (\vec{x}_0, \vec{y}_0, associée au bâti $0$.
*   Base $\mathcal{R}_1 = (\vec{x}_1, \vec{y}_1, \vec{z}_0)$ associée au solide $1$, avec $(\vec{x}_0, \vec{x}_1) = \theta \vec{z}_0$. On a $\vec{x}_1 = \cos\theta \vec{x}_0 + \sin\theta \vec{y}_0$ et $\vec{y}_1 = -\sin\theta \vec{x}_0 + \cos\theta \vec{y}_0$.
*   Le paramètre cinématique d'entrée est la vitesse de rotation $\dot{\theta} = \frac{\text{d}\theta}{\text{d}t}$.
*   Le paramètre de longueur du vérin est noté $L_v = \|\vec{BC}\|$.

---

### ❓ Questions progressives

1.  **Paramétrage et fermeture géométrique**
    *   Exprimer le vecteur position $\vec{BC}$ dans la base $\mathcal{R}_0$ en fonction de $L$, $h$, $d$ et $\theta$.
    *   En déduire l'expression de la longueur $L_v(t)$ du vérin en fonction de ces mêmes paramètres.

2.  **Champs des vitesses et torseurs cinématiques élémentaires**
    *   Définir et écrire le torseur cinématique de la liaison pivot entre le solide $1$ et le bâti $0$ au point $O$, noté $\{V_{1/0}\}$.
    *   Définir et écrire le torseur cinématique de la liaison pivot entre le corps $2$ et le bâti $0$ au point $B$, noté $\{V_{2/0}\}$.

3.  **Composition des vitesses et cinématique du vérin**
    *   Écrire la relation de composition des vitesses angulaires pour le mouvement de la tige $3$ par rapport au corps $2$ à travers le bras $1$. Plus simplement, exprimer la fermeture cinématique via l'égalité des vitesses au point $C$ : $\vec{V}(C \in 3/0) = \vec{V}(C \in 3/2) + \vec{V}(C \in 2/0)$.
    *   En déduire la vitesse de coulissement de la tige $\dot{L}_v = \vec{V}(C \in 3/2) \cdot \vec{u}_{23}$ (où $\vec{u}_{23}$ est le vecteur unitaires dirigé de $B$ vers $C$) en fonction de $\dot{\theta}$ et de la géométrie du système.

4.  **Analyse critique du modèle**
    *   Le modèle de liaison glissière entre $2$ et $3$ suppose des pièces parfaitement rigides. Citer un phénomène physique réel non modélisé ici qui pourrait modifier la loi entrée-sortie cinématique. Quel est l'impact sur le torseur cinématique de la liaison glissière ?

---

### 💡 Pistes & Indications méthodologiques

*   **Q1 :** Utiliser la relation de Chasles vectorielle : $\vec{BC} = \vec{BO} + \vec{OA} + \vec{AC}$. Projeter habilement sur $(\vec{x}_0, \vec{y}_0)$.
*   **Q2 :** Rappeler qu'une liaison pivot d'axe $(A, \vec{z}_0)$ impose une vitesse de rotation orientée selon $\vec{z}_0$ et une vitesse nulle au point $A$.
*   **Q3 :** Utiliser la dérivation vectorielle dans les différentes bases pour exprimer $\vec{V}(C \in 1/0)$ et $\vec{V}(C \in 2/0)$.
*   **Q4 :** Penser aux imperfections géométriques, aux jeux dans les liaisons et aux déformations élastiques (flexion/compression) des corps de vérin sous charge.

---

### 📋 Corrigé détaillé pas à pas

#### 1. Paramétrage et fermeture géométrique
Par application de la relation de Chasles dans le triangle des positionnements :
$$\vec{BC} = \vec{BO} + \vec{OA} + \vec{AC}$$
D'après l'énoncé : $\vec{OB} = -h \vec{y}_0 \implies \vec{BO} = h \vec{y}_0$. 
De plus, $\vec{OA} = L \vec{x}_1$ et $\vec{AC} = d \vec{x}_1$. Donc $\vec{OA} + \vec{AC} = (L+d)\vec{x}_1$.
En remplaçant $\vec{x}_1$ dans $\mathcal{R}_0$ :
$$\vec{BC} = h \vec{y}_0 + (L+d)(\cos\theta \vec{x}_0 + \sin\theta \vec{y}_0)$$
$$\vec{BC} = (L+d)\cos\theta \, \vec{x}_0 + (h + (L+d)\sin\theta) \, \vec{y}_0$$

La longueur du vérin $L_v = \|\vec{BC}\|$ s'obtient par la norme du vecteur :
$$L_v^2 = ((L+d)\cos\theta)^2 + (h + (L+d)\sin\theta)^2$$
$$L_v(t) = \sqrt{(L+d)^2 \cos^2\theta + h^2 + (L+d)^2 \sin^2\theta + 2h(L+d)\sin\theta}$$
En utilisant $\cos^2\theta + \sin^2\theta = 1$ :
$$L_v(t) = \sqrt{(L+d)^2 + h^2 + 2h(L+d)\sin\theta}$$

---

#### 2. Champs des vitesses et torseurs cinématiques élémentaires

*   **Mouvement de $1$ par rapport à $0$ ($\{V_{1/0}\}$ au point $O$) :**
    Le solide $1$ est en liaison pivot d'axe $(O, \vec{z}_0)$ avec $0$. Le vecteur taux de rotation est $\vec{\Omega}_{1/0} = \dot{\theta} \vec{z}_0$. Le point $O$ appartient à l'axe de rotation, donc sa vitesse est nulle : $\vec{V}(O \in 1/0) = \vec{0}$.
    Le torseur s'écrit :
    $$\{V_{1/0}\} = \begin{Bmatrix} \vec{\Omega}_{1/0} = \dot{\theta} \vec{z}_0 \\ \vec{V}(O \in 1/0) = \vec{0} \end{Bmatrix}_O$$

*   **Mouvement de $2$ par rapport à $0$ ($\{V_{2/0}\}$ au point $B$) :**
    Le corps du vérin $2$ est en liaison pivot d'axe $(B, \vec{z}_0)$ avec $0$. Soit $\dot{\psi}$ sa vitesse de rotation propre (attention, cette rotation est liée à la géométrie et n'est pas un degré de liberté indépendant si le système est isostatique, mais formalisons-la). 
    $$\{V_{2/0}\} = \begin{Bmatrix} \vec{\Omega}_{2/0} = \dot{\psi} \vec{z}_0 \\ \vec{V}(B \in 2/0) = \vec{0} \end{Bmatrix}_B$$

---

#### 3. Composition des vitesses et cinématique du vérin

Exprimons la vitesse du point $C$ (qui appartient à la tige $3$, liée elle-même au bras $1$ en $C$) par rapport au bâti $0$ :
Puisque $C \in 1$ et $C \in 3$ (liaison pivot en $C$ entre $1$ et $3$), on a $\vec{V}(C \in 3/0) = \vec{V}(C \in 1/0)$.
Calculons cette vitesse via le champ des moments du torseur $\{V_{1/0}\}$ :
$$\vec{V}(C \in 1/0) = \vec{V}(O \in 1/0) + \vec{CO} \wedge \vec{\Omega}_{1/0}$$
Avec $\vec{CO} = -\vec{OA} - \vec{AC} = -(L+d)\vec{x}_1$.
$$\vec{V}(C \in 1/0) = -(L+d)\vec{x}_1 \wedge \dot{\theta}\vec{z}_0 = (L+d)\dot{\theta} \vec{y}_1$$

Par ailleurs, par composition des mouvements du point $C$ (considéré appartenant à $3$, mouvement par rapport à $2$, corps du vérin) :
$$\vec{V}(C \in 3/0) = \vec{V}(C \in 3/2) + \vec{V}(C \in 2/0)$$
*   La vitesse de glissement est portée par l'axe du vérin $\vec{u}_{23} = \frac{\vec{BC}}{L_v}$. Donc $\vec{V}(C \in 3/2) = \dot{L}_v \vec{u}_{23}$.
*   La vitesse d'entraînement due à la rotation du corps $2$ autour de $B$ s'exprime par :
    $$\vec{V}(C \in 2/0) = \vec{V}(B \in 2/0) + \vec{BC} \wedge \vec{\Omega}_{2/0} = \vec{0} + L_v \vec{u}_{23} \wedge \dot{\psi}\vec{z}_0$$

En projetant judicieusement ou en dérivant directement la relation scalaire $L_v^2 = \vec{BC} \cdot \vec{BC}$, on obtient par dérivation temporelle :
$$2 L_v \dot{L}_v = 2 \vec{BC} \cdot \frac{\text{d}\vec{BC}}{\text{d}t}$$
Or, $\frac{\text{d}\vec{BC}}{\text{d}t} = \frac{\text{d}}{\text{d}t}\left((L+d)\vec{x}_1\right) = (L+d)\dot{\theta}\vec{y}_1$.
Donc :
$$L_v \dot{L}_v = \vec{BC} \cdot \left( (L+d)\dot{\theta}\vec{y}_1 \right)$$
En remplaçant $\vec{BC} = h\vec{y}_0 + (L+d)\vec{x}_1$ et en sachant que $\vec{y}_0 = \sin\theta \vec{x}_1 + \cos\theta \vec{y}_1$ (à vérifier selon orientation, restons cartésiens ou scalaires) :
$$\vec{BC} \cdot \vec{y}_1 = \left( (L+d)\cos\theta \vec{x}_0 + (h + (L+d)\sin\theta)\vec{y}_0 \right) \cdot (-\sin\theta \vec{x}_0 + \cos\theta \vec{y}_0)$$
$$= -(L+d)\cos\theta\sin\theta + h\cos\theta + (L+d)\sin\theta\cos\theta = h\cos\theta$$
On en déduit la vitesse de déploiement du vérin :
$$\dot{L}_v = \frac{h(L+d)\cos\theta}{L_v} \dot{\theta}$$

---

#### 4. Analyse critique du modèle

*   **Phénomène physique non modélisé :** La **flexion du corps du vérin** (solide $2$) et de la tige (solide $3$) sous l'effet des efforts de transmission, ainsi que les **jeux mécaniques** inévitables dans les liaisons pivots (qui ne sont jamais parfaits).
*   **Impact sur le torseur cinématique :** 
    Dans une liaison glissière idéale entre $2$ et $3$, le torseur cinématique ne comporte qu'une seule composante non nulle (la translation suivant $\vec{u}_{23}$). 
    La prise en compte des défauts géométriques et des flexions engendre des **parasites cinématiques** : de petits mouvements parasites de rotation selon les axes transversaux (roulis et lacet) ainsi que des translations induites non désirées, modifiant légèrement la loi entrée-sortie $\dot{L}_v = f(\dot{\theta})$ établie théoriquement.