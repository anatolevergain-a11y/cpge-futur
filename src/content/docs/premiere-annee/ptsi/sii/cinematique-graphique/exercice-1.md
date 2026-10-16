---
title: 'Exercice 1 : Composition des mouvements'
description: 'Problème d entraînement type concours officiel.'
---

# Problème de Sciences de l'Ingénieur - Filière PTSI
## Cinématique du solide rigide : Composition des mouvements

---

## I. Énoncé du problème

On s'intéresse à un mécanisme de levage industriel utilisé sur un chantier de BTP, modélisé par le système plan $(O, \vec{x}_0, \vec{y}_0)$ représenté schématiquement ci-dessous. 

Le système est composé de trois solides principaux :
*   Le bâti $0$, repéré par le repère galiléen $\mathcal{R}_0 = (O, \vec{x}_0, \vec{y}_0, \vec{z}_0)$.
*   Un bras télescopique $1$, articulé en $O$ au bâti $0$. Sa position est repérée par l'angle $\theta(t) = (\vec{x}_0, \vec{x}_1)$. Le repère lié au bras est $\mathcal{R}_1 = (O, \vec{x}_1, \vec{y}_1, \vec{z}_0)$, avec $\vec{x}_1$ porté par l'axe du bras. La longueur du bras est variable : $\vec{OM} = r(t)\vec{x}_1$, où $M$ est l'extrémité du bras.
*   Une charge $2$, modélisée par un solide ponctuel (ou dont l'orientation est maintenue fixe par rapport au sol par un mécanisme non étudié ici) en $M$.

Le mouvement est supposé plan dans le plan $(O, \vec{x}_0, \vec{y}_0)$. Les lois horaires du mouvement sont supposées connues : 
*   $\theta(t) = \omega_0 t$ (vitesse de rotation constante $\omega_0$).
*   $r(t) = r_0 + V_0 t$ (vitesse d'allongement constante $V_0$).

---

## II. Questions

1. **Paramétrage et cinématique du bras (Solide 1 / Solide 0)**
   * Exprimer le vecteur rotation $\vec{\Omega}_{1/0}$ du repère $\mathcal{R}_1$ par rapport au repère $\mathcal{R}_0$.
   * Déterminer par derivation vectorielle directe la vitesse du point $M$ dans son mouvement par rapport à $\mathcal{R}_0$, notée $\vec{V}(M \in 1/\mathcal{0})$.

2. **Application de la loi de composition des vitesses**
   * Rappeler la formule de composition des vitesses pour un point $M$ appartenant au solide $1$ en mouvement par rapport au repère $\mathcal{R}_0$, en faisant intervenir le repère intermédiaire $\mathcal{R}_1$. Identifier chaque terme.
   * Retrouver par cette méthode l'expression de $\vec{V}(M \in 1/\mathcal{0})$.

3. **Accélération du point $M$**
   * Déterminer l'accélération d'entraînement $\vec{\Gamma}_e(M)$ du point $M$ dans le mouvement de $\mathcal{R}_1$ par rapport à $\mathcal{R}_0$.
   * Déterminer l'accélération relative $\vec{\Gamma}_r(M)$ du point $M$ dans son mouvement dans $\mathcal{R}_1$.
   * Déterminer l'accélération de Coriolis $\vec{\Gamma}_c(M)$.
   * En déduire l'accélération absolue $\vec{\Gamma}(M \in 1/\mathcal{0})$.

4. **Analyse critique et limites du modèle**
   * Discuter des hypothèses cinématiques formulées (notamment sur $\omega_0$ et $V_0$). 
   * Quelles seraient les conséquences physiques sur le comportement du mécanisme si l'on tenait compte des jeux mécaniques dans les liaisons pivot et glissière ?

---

## III. Pistes et indications

*   **Piste 1 :** Pour les dérivées vectorielles, utiliser la base locale $(\vec{x}_1, \vec{y}_1)$ et se rappeler que $\frac{d\vec{x}_1}{dt} = \dot{\theta}\vec{y}_1$ et $\frac{d\vec{y}_1}{dt} = -\dot{\theta}\vec{x}_1$.
*   **Piste 2 :** L'accélération de Coriolis fait intervenir le produit vectoriel entre le vecteur rotation du repère et la vitesse relative. Ne l'oubliez pas !
*   **Piste 3 :** Pour la dernière question, pensez aux efforts non modélisés et aux phénomènes vibratoires ou de flexion des structures élancées.

---

## IV. Corrigé détaillé pas à pas

### 1. Paramétrage et cinématique du bras
Le repère $\mathcal{R}_1$ est en rotation autour de l'axe $(O, \vec{z}_0)$ par rapport au repère $\mathcal{R}_0$. Le vecteur rotation s'écrit donc :
$$\vec{\Omega}_{1/0} = \dot{\theta}(t)\vec{z}_0 = \omega_0 \vec{z}_0$$

La position du point $M$ est définie par $\vec{OM} = r(t)\vec{x}_1$. 
Calculons la vitesse par dérivation par rapport au temps dans $\mathcal{R}_0$ :
$$\vec{V}(M \in 1/\mathcal{0}) = \left(\frac{d\vec{OM}}{dt}\right)_{\mathcal{R}_0} = \frac{dr}{dt}\vec{x}_1 + r(t)\left(\frac{d\vec{x}_1}{dt}\right)_{\mathcal{R}_0}$$
En sachant que $\left(\frac{d\vec{x}_1}{dt}\right)_{\mathcal{R}_0} = \vec{\Omega}_{1/0} \wedge \vec{x}_1 = \dot{\theta}\vec{z}_0 \wedge \vec{x}_1 = \dot{\theta}\vec{y}_1$, on obtient :
$$\vec{V}(M \in 1/\mathcal{0}) = \dot{r}(t)\vec{x}_1 + r(t)\dot{\theta}(t)\vec{y}_1$$
Avec les applications numériques littérales : $\vec{V}(M \in 1/\mathcal{0}) = V_0 \vec{x}_1 + (r_0 + V_0 t)\omega_0 \vec{y}_1$.

### 2. Application de la loi de composition des vitesses
La formule de composition des vitesses du point $M$ dans son mouvement par rapport à $\mathcal{R}_0$ en utilisant le repère intermédiaire $\mathcal{R}_1$ s'écrit :
$$\vec{V}(M \in 1/\mathcal{0}) = \vec{V}(M \in 1/\mathcal{1}) + \vec{V}_e(M)$$
*   $\vec{V}(M \in 1/\mathcal{1}) = \dot{r}(t)\vec{x}_1 = V_0 \vec{x}_1$ : **Vitesse relative** (mouvement du point $M$ le long du bras).
*   $\vec{V}_e(M) = \vec{V}(O \in \mathcal{1}/\mathcal{0}) + \vec{\Omega}_{1/0} \wedge \vec{OM}$ : **Vitesse d'entraînement**. Le point $O$ étant fixe, $\vec{V}(O \in \mathcal{1}/\mathcal{0}) = \vec{0}$.
    Il vient : $\vec{V}_e(M) = \omega_0 \vec{z}_0 \wedge (r\vec{x}_1) = r\omega_0 \vec{y}_1$.

En sommant les deux termes :
$$\vec{V}(M \in 1/\mathcal{0}) = V_0 \vec{x}_1 + r(t)\omega_0 \vec{y}_1$$
*On retombe bien sur le même résultat.*

### 3. Calcul des accélérations
L'accélération absolue s'obtient par la loi de composition des accélérations :
$$\vec{\Gamma}(M \in 1/\mathcal{0}) = \vec{\Gamma}_r(M) + \vec{\Gamma}_e(M) + \vec{\Gamma}_c(M)$$

*   **Accélération relative $\vec{\Gamma}_r(M)$** (mouvement dans $\mathcal{R}_1$) :
    $$\vec{\Gamma}_r(M) = \left(\frac{d^2\vec{OM}}{dt^2}\right)_{\mathcal{R}_1} = \ddot{r}(t)\vec{x}_1 = \vec{0} \quad (\text{car } V_0 \text{ est constante})$$

*   **Accélération d'entraînement $\vec{\Gamma}_e(M)$** :
    $$\vec{\Gamma}_e(M) = \vec{\Gamma}(O \in \mathcal{1}/\mathcal{0}) + \frac{d\vec{\Omega}_{1/0}}{dt}\wedge \vec{OM} + \vec{\Omega}_{1/0} \wedge (\vec{\Omega}_{1/0} \wedge \vec{OM})$$
    Puisque $\omega_0$ est constante, $\frac{d\vec{\Omega}_{1/0}}{dt} = \vec{0}$. Ainsi :
    $$\vec{\Gamma}_e(M) = \omega_0 \vec{z}_0 \wedge (\omega_0 \vec{z}_0 \wedge r\vec{x}_1) = \omega_0 \vec{z}_0 \wedge (r\omega_0 \vec{y}_1) = -r\omega_0^2 \vec{x}_1$$

*   **Accélération de Coriolis $\vec{\Gamma}_c(M)$** :
    $$\vec{\Gamma}_c(M) = 2 \vec{\Omega}_{1/0} \wedge \vec{V}(M \in 1/\mathcal{1})$$
    $$\vec{\Gamma}_c(M) = 2 (\omega_0 \vec{z}_0) \wedge (V_0 \vec{x}_1) = 2 \omega_0 V_0 \vec{y}_1$$

*   **Accélération absolue totale $\vec{\Gamma}(M \in 1/\mathcal{0})$** :
    $$\vec{\Gamma}(M \in 1/\mathcal{0}) = -r(t)\omega_0^2 \vec{x}_1 + 2 \omega_0 V_0 \vec{y}_1$$

### 4. Analyse critique et limites du modèle

*   **Critique des hypothèses cinématiques :** 
    Le modèle suppose des lois horaires parfaites ($\omega_0$ et $V_0$ constantes), ce qui implique des dérivées discontinues aux instants de démarrage et d'arrêt (à $t=0$ par exemple), générant théoriquement des impulsions de Dirac sur les accélérations et donc des efforts infinis (unicité du choc). En réalité, les profils de vitesse doivent être lissés (ex. : rampes de vitesse trapézoïdales ou en S).
*   **Limites physiques et géométriques :** 
    Le modèle cinématique suppose des solides rigides parfaits. Or, un bras télescopique de chantier subit de la **flexion** sous l'effet de sa propre masse et de la charge $2$. De plus, les liaisons glissière et pivot possèdent nécessairement des **jeux mécaniques**, provoquant des vibrations, des défauts de rectitude de trajectoire et invalide partiellement l'hypothèse d'un mouvement strictement plan.