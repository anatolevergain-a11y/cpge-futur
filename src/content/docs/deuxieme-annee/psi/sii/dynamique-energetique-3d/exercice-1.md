---
title: 'Exercice 1 : Matrice d inertie et PFD 3D'
description: 'Problème d entraînement type concours.'
---

# Problème Guidé : Étude dynamique 3D d'un système articulé (Filière PSI - SII)

## Enoncé du problème

On considère un mécanisme spatial dont le mouvement est étudié dans le cadre de la préparation aux concours CPGE (filière PSI). 

Soit un solide $S$, de masse $M$, dont on souhaite déterminer la dynamique spatiale. Le repère lié au solide est noté $\mathcal{R}_s = (O, \vec{x}_s, \vec{y}_s, \vec{z}_s)$, où $O$ est le centre de masse du solide $S$. Le repère galiléen de référence est noté $\mathcal{R}_0 = (O, \vec{x}_0, \vec{y}_0, \vec{z}_0)$.

### Données et hypothèses :
1. La matrice d'inertie du solide $S$ exprimée au point $O$ dans la base $\mathcal{B}_s = (\vec{x}_s, \vec{y}_s, \vec{z}_s)$ est donnée par :
   $$[I(O, S)]_{\mathcal{B}_s} = \begin{pmatrix} A & -D & 0 \\ -D & B & 0 \\ 0 & 0 & C \end{pmatrix} \quad (\text{en } \text{kg}\cdot\text{m}^2)$$
2. Le solide $S$ est en mouvement de rotation autour de l'axe fixe $(O, \vec{z}_0)$ avec un angle $\theta(t)$, tel que $\vec{z}_s = \vec{z}_0$. 
3. Les vecteurs de la base $\mathcal{B}_s$ sont déduits de $\mathcal{B}_0 = (\vec{x}_0, \vec{y}_0, \vec{z}_0)$ par une rotation d'angle $\theta$ autour de $\vec{z}_0$. On a donc :
   $$\vec{\omega}(S/\mathcal{R}_0) = \dot{\theta} \vec{z}_0 = \dot{\theta} \vec{z}_s$$
4. Le système est soumis à un couple moteur de moment $\vec{C}_m = C_m \vec{z}_0$ et à un couple résistant de frottement visqueux de moment $\vec{C}_f = -f \dot{\theta} \vec{z}_0$ (avec $f > 0$).

---

## Partie 1 : Cinématique du solide

### Question 1.1
Exprimer le vecteur vitesse de rotation $\vec{\Omega}(S/\mathcal{R}_0)$ du solide $S$ par rapport au repère galiléen $\mathcal{R}_0$ dans la base $\mathcal{B}_s$.
Correction: **
Le mouvement de $S$ par rapport à $\mathcal{R}_0$ est une rotation pure autour de l'axe $(O, \vec{z}_0)$. Par définition :
$$\vec{\Omega}(S/\mathcal{R}_0) = \dot{\theta} \vec{z}_0$$
Puisque $\vec{z}_s = \vec{z}_0$, on a immédiatement dans la base $\mathcal{B}_s$ :
$$\vec{\Omega}(S/\mathcal{R}_0) = \dot{\theta} \vec{z}_s \quad (\text{en } \text{rad}\cdot\text{s}^{-1})$$

### Question 1.2
Déterminer le vecteur accélération angulaire $\vec{\delta}(S/\mathcal{R}_0)$ de $S$ par rapport à $\mathcal{R}_0$.
Correction: **
L'accélération angulaire est la dérivée temporelle du vecteur rotation dans le repère de référence $\mathcal{R}_0$ :
$$\vec{\delta}(S/\mathcal{R}_0) = \left( \frac{d\vec{\Omega}(S/\mathcal{R}_0)}{dt} \right)_{\mathcal{R}_0} = \ddot{\theta} \vec{z}_0 + \dot{\theta} \left( \frac{d\vec{z}_0}{dt} \right)_{\mathcal{R}_0}$$
Le vecteur $\vec{z}_0$ étant fixe dans $\mathcal{R}_0$, sa dérivée est nulle. Ainsi :
$$\vec{\delta}(S/\mathcal{R}_0) = \ddot{\theta} \vec{z}_s \quad (\text{en } \text{rad}\cdot\text{s}^{-2})$$

---

## Partie 2 : Application du Théorème du Moment Cinétique (TMC)

### Question 2.1
Exprimer le moment cinétique $\vec{\sigma}(O, S/\mathcal{R}_0)$ du solide $S$ au point $O$ dans la base $\mathcal{B}_s$.
Correction: **
Par définition, le moment cinétique au point $O$ (qui est le centre de masse) s'exprime par le produit de la matrice d'inertie par le vecteur rotation :
$$\vec{\sigma}(O, S/\mathcal{R}_0) = [I(O, S)] \cdot \vec{\Omega}(S/\mathcal{R}_0)$$
En écriture matricielle dans la base $\mathcal{B}_s$ :
$$[\vec{\sigma}(O, S/\mathcal{R}_0)]_{\mathcal{B}_s} = \begin{pmatrix} A & -D & 0 \\ -D & B & 0 \\ 0 & 0 & C \end{pmatrix} \begin{pmatrix} 0 \\ 0 \\ \dot{\theta} \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ C \dot{\theta} \end{pmatrix}$$
On en déduit l'expression vectorielle :
$$\vec{\sigma}(O, S/\mathcal{R}_0) = C \dot{\theta} \vec{z}_s \quad (\text{en } \text{kg}\cdot\text{m}^2\cdot\text{s}^{-1})$$
Remarque: * Bien que la matrice d'inertie possède des produits d'inertie non nuls (terme $-D$), seuls les éléments de la troisième colonne interviennent ici car la rotation se fait autour de l'axe $\vec{z}_s$.

### Question 2.2
Appliquer le Théorème du Moment Cinétique au point $O$ en projection sur l'axe $\vec{z}_0$ pour établir l'équation du mouvement (équation différentielle régissant $\theta(t)$).
Correction: **
Le TMC appliqué au point $O$ (centre de masse ou point fixe) s'écrit :
$$\vec{\mathcal{D}}(O, S/\mathcal{R}_0) = \vec{M}_O(\text{ext})$$
où $\vec{\mathcal{D}}(O, S/\mathcal{R}_0) = \left( \frac{d\vec{\sigma}(O, S/\mathcal{R}_0)}{dt} \right)_{\mathcal{R}_0}$ est le moment dynamique.

Calculons la dérivée du moment cinétique :
$$\vec{\mathcal{D}}(O, S/\mathcal{R}_0) = \frac{d}{dt}(C \dot{\theta}) \vec{z}_s + C \dot{\theta} \left( \frac{d\vec{z}_s}{dt} \right)_{\mathcal{R}_0}$$
Puisque $\left( \frac{d\vec{z}_s}{dt} \right)_{\mathcal{R}_0} = \vec{\Omega}(S/\mathcal{R}_0) \wedge \vec{z}_s = \dot{\theta} \vec{z}_s \wedge \vec{z}_s = \vec{0}$, il vient :
$$\vec{\mathcal{D}}(O, S/\mathcal{R}_0) = C \ddot{\theta} \vec{z}_s$$

Le bilan des moments extérieurs au point $O$ se résume aux actions motrices et résistantes :
$$\vec{M}_O(\text{ext}) = \vec{C}_m + \vec{C}_f = (C_m - f \dot{\theta}) \vec{z}_0$$

En projetant l'égalité $\vec{\mathcal{D}}(O, S/\mathcal{R}_0) = \vec{M}_O(\text{ext})$ sur l'axe $\vec{z}_0$ (ou $\vec{z}_s$), on obtient l'équation différentielle :
$$C \ddot{\theta} + f \dot{\theta} = C_m \quad (\text{en } \text{N}\cdot\text{m})$$

---

## Analyse critique des résultats

1. **Validation par rapport aux produits d'inertie :** 
   On observe que les termes $A$, $B$ et $D$ de la matrice d'inertie n'apparaissent pas dans l'équation finale du mouvement. Cela s'explique par le fait que l'axe de rotation $\vec{z}_0$ est colinéaire à l'axe principal $\vec{z}_s$ ($C$ étant le moment d'inertie par rapport à cet axe). Les déséquilibres massiques représentés par $-D$ n'influencent pas le mouvement de rotation autour de cet axe fixe unique, mais ils se manifesteraient dans les efforts de liaison au niveau des paliers (efforts dynamiques radiaux).
2. **Cohérence physique :** 
   L'équation obtenue est du premier ordre en $\dot{\theta}$ (ou du second ordre en $\theta$). Le terme $C \ddot{\theta}$ représente l'inertie dynamique, $f \dot{\theta}$ représente le couple dissipatif (visqueux), et $C_m$ est l'effort moteur. C'est l'équation classique d'un système asservi ou entraîné en rotation pure.