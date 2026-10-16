---
title: 'Exercice 2 : Frottement de Coulomb'
description: 'Problème d entraînement type concours.'
---

# PROBLÈME GUIDÉ : Étude d'un système freiné par adhérence et pivotement (MPSI - SII)

*En tant qu'examinateur en classes préparatoires MPSI, j'attends des candidats non seulement une maîtrise rigoureuse des outils de modélisation mécanique, mais aussi une capacité à interpréter physiquement les résultats et à identifier les limites des modèles (ici, le modèle de Coulomb).*

---

## I. Présentation du système et objectifs

On considère un dispositif industriel destiné à bloquer une charge lourde en cas de panne. Le système est modélisé par un cylindre (corps 1) de rayon $R$ et de masse $M$, posé sur un plan incliné (corps 0) faisant un angle $\alpha$ avec l'horizontale. 

L'objectif de ce problème est de déterminer la condition limite de non-glissement du cylindre sur le plan incliné en présence du frottement de Coulomb, puis d'analyser l'influence des paramètres géométriques et physiques.

---

## II. Modélisation et Paramétrage

*   **Référentiel $\mathcal{R}_0 (\ O, \vec{x}_0, \vec{y}_0, \vec{z}_0 \ )$** : lié au plan incliné 0, supposé galiléen.
    *   $\vec{x}_0$ est dirigé vers le bas de la pente.
    *   $\vec{y}_0$ est normal au plan, dirigé vers l'extérieur du plan (vers le cylindre).
    *   $\vec{z}_0$ est orthogonal au plan et au mouvement.
*   **Paramètres cinématiques et géométriques** : 
    *   Le cylindre 1 est en contact ponctuel (ou sur une ligne de contact modélisée par un point $C$) avec le plan 0.
    *   Le champ de pesanteur est $\vec{g} = -g \sin(\alpha) \vec{x}_0 - g \iso{cos}(\alpha) \vec{y}_0$.

---

## III. Résolution guidée pas à pas

### Étape 1 : Isolement et Bilan des Actions Mécaniques Extérieures (AME)

**Question 1.** Isoler le cylindre (1). Identifier et exprimer dans la base $\mathcal{R}_0$ les actions mécaniques extérieures s'exerçant sur (1).

*   **Action de la pesanteur** : 
    $$\{ \mathcal{V}_{\text{pes}} \} = \left\{ \vec{R}_{\text{pes}} = -Mg \sin(\alpha) \vec{x}_0 - Mg \cos(\alpha) \vec{y}_0 ; \vec{M}_{G, \text{pes}} = \vec{0} \right\}$$
    où $G$ est le centre de masse du cylindre.

*   **Action du plan (0) sur le cylindre (1)** au point de contact $C$ :
    L'action mécanique de contact est modélisée par une force $\vec{R}_{0 \to 1} = N \vec{y}_0 + T_x \vec{x}_0 + T_z \vec{z}_0$, où $N > 0$ est la composante normale, et $\vec{T} = T_x \vec{x}_0 + T_z \vec{z}_0$ est la composante tangentielle (effort tranchant).

---

### Étape 2 : Application du PFD / PFS

Le système est étudié à la limite du mouvement (statique limite). Le principe fondamental de la statique (PFS) s'applique.

**Question 2.** Appliquer le théorème de la résultante statique (TRS) au cylindre (1) en projection dans la base $\mathcal{R}_0$.

*   Projection sur $\vec{x}_0$ :
    $$Mg \sin(\alpha) + T_x = 0 \implies T_x = -Mg \sin(\alpha)$$

*   Projection sur $\vec{y}_0$ :
    $$-Mg \cos(\alpha) + N = 0 \implies N = Mg \cos(\alpha)$$

*   Projection sur $\vec{z}_0$ :
    $$T_z = 0$$

**Question 3.** Appliquer le théorème du moment statique (TMS) au point $C$. En déduire l'allure du problème.

En écrivant le TMS au point $C$ :
$$\vec{M}_{C, \text{ext}} = \vec{0} \implies \vec{CG} \wedge \vec{R}_{\text{pes}} = \vec{0}$$
Le moment de la force de pesanteur en $C$ est nul car la droite d'action passe par $C$ (le cylindre ne subit pas de couple moteur externe, il est en équilibre sous l'effet de son poids et du contact).

---

### Étape 3 : Loi de frottement de Coulomb

**Question 4.** Rappeler la loi de Coulomb au point de contact $C$ caractérisée par un coefficient de frottement statique $f$.

À la limite du glissement, la norme de l'effort tangentiel est liée à la composante normale par la relation de Coulomb :
$$\|\vec{T}\| = f N$$

**Question 5.** Établir l'expression de l'angle limite de frottement $\varphi$ tel que $\tan(\varphi) = f$, et déterminer la condition d'adhérence en fonction de $\alpha$ et $f$.

En injectant les expressions de $N$ et $T_x$ trouvées à l'étape 2 :
$$\|\vec{T}\| = |T_x| = Mg \sin(\alpha)$$
$$N = Mg \cos(\alpha)$$

La condition de non-glissement (loi de Coulomb) s'écrit :
$$Mg \sin(\alpha) \le f Mg \cos(\alpha)$$

Soit :
$$\tan(\alpha) \le f$$

En introduisant l'angle de frottement $\varphi$ défini par $\tan(\varphi) = f$, la condition devient :
$$\alpha \le \varphi$$

---

## IV. Analyse critique des résultats

*   **Examen de la criticité physique** : 
    Le résultat montre que la condition d'adhérence est *indépendante de la masse $M$ du cylindre* ainsi que de son rayon $R$. C'est un résultat classique mais contre-intuitif pour un non-initié, qui s'explique par le fait que la force motrice (composante du poids) et la force résistante (frottement) sont toutes deux proportionnelles à la masse $M$.

*   **Limites du modèle de Coulomb** :
    1. Le modèle suppose un contact ponctuel parfait, ce qui n'existe pas en réalité (le contact se fait sur une surface de Hertz due à la déformation élastique des corps).
    2. Le coefficient $f$ est supposé constant, or il dépend de la vitesse de glissement (transition statique/dynamique), de l'état de surface, de la température et de la présence éventuelle de lubrifiant.
    3. Si l'angle $\alpha$ dépasse $\varphi$, le cylindre se met à rouler *et* glisser simultanément, ce qui invalide le modèle purement statique et nécessite l'introduction de la dynamique de rotation (théorème du moment cinétique).