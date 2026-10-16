---
title: 'Cours : Statique des fluides'
description: 'Synthèse de cours, théorèmes et démonstrations.'
---

# Statique des fluides — Fiche de cours MPSI

**Cadre et objectifs :** La statique des fluides étudie les fluides (liquides ou gaz) au repos dans un référentiel galiléen. L'objectif est de déterminer le champ de pression au sein du fluide et les actions mécaniques exercées sur les solides immergés ou sur les parois.

---

## I. Introduction et description macroscopique d'un fluide

### 1. Définitions fondamentales
* **Fluide :** Milieu matériel continu, déformable, qui n'a pas de forme propre et qui épouse la forme de son contenant. Un gaz est compressible, un liquide est (en première approximation) incompressible.
* **Hypothèse Continuum :** On suppose que le milieu peut être décrit par des fonctions continues de l'espace et du temps. Le Knudsen $\text{Kn} = \frac{l_{libre\_moyen}}{L_{caracteristique}} \ll 1$ justifie cette approche.
* **Pression $P$ :** Grandeur intensive scalaire. Exprimée en Pascals ($\text{Pa}$) ou en bars ($1\text{ bar} = 10^5\text{ Pa}$).

### 2. Force pressante élémentaire
Soit une surface élémentaire $dSO$ de vecteur normal unitaire $\vec{n}$ orienté de l'intérieur vers l'extérieur du fluide (ou de l'intérieur de la surface vers l'extérieur). La force pressante exercée par le fluide sur cette surface est :
$$\vec{dF} = -P \, dS \, \vec{n}$$
Remarque: * La force est toujours **orthogonale** à la surface et est dirigée **vers** la surface (le fluide "pousse").

---

## II. Équation fondamentale de la statique des fluides

### Théorème (Forme locale)
Dans un référentiel galiléen, pour un fluide au repos soumis à des forces massiques de densité volumique $\vec{f}$ (typiquement le poids $\vec{f} = \rho \vec{g}$), l'équation locale de la statique des fluides s'écrit :
$$\boxed{\vec{\text{grad}} P = \vec{f}}$$

> **Démonstration :**
> Appliquons le principe fondamental de la dynamique à une portion élémentaire de fluide de volume $dV = dx \, dy \, dz$ et de masse $dm = \rho \, dV$.
> Le fluide est au repos, donc la somme des forces s'appliquant sur ce volume élémentaire est nulle :
> $\sum \vec{F} = \vec{F}_{pressions} + \vec{F}_{massiques} = \vec{0}$.
> Projetons sur l'axe $(Ox)$ :
> La force pressante nette sur les faces perpendiculaires à $Ox$ s'écrit :
> $(P(x) - P(x+dx)) dy \, dz \vec{u}_x = -\frac{\partial P}{\partial x} dx \, dy \, dz \vec{u}_x = -\frac{\partial P}{\partial x} dV \vec{u}_x$.
> En procédant de même selon $Oy$ et $Oz$, et en ajoutant la force massique $\vec{f} dV$, on obtient :
> $\left( -\vec{\text{grad}} P + \vec{f} \right) dV = \vec{0} \implies \vec{\text{grad}} P = \vec{f}$. $\blacksquare$

---

## III. Cas particuliers importants

### 1. Théorème de Pascal (Fluide incompressible au repos dans le champ de pesanteur)
On suppose $\rho = \text{constante}$ et $\vec{g} = -g \vec{u}_z$ (avec $z$ orienté verticalement vers le haut).
L'équation locale devient :
$$\frac{\partial P}{\partial x} = 0, \quad \frac{\partial P}{\partial y} = 0, \quad \frac{\partial P}{\partial z} = -\rho g$$
Par intégration entre un point $z_1$ et un point $z_2$ :
$$\boxed{P(z_2) - P(z_1) = -\rho g (z_2 - z_1)}$$
Sous une autre forme, si on note $h$ la profondeur mesurée positivement vers le bas à partir d'une surface libre où règne la pression $P_0$ :
$$\boxed{P(h) = P_0 + \rho g h}$$

### 2. Cas de l'atmosphère isotherme (Gaz parfait)
Pour un gaz parfait de masse molaire $M$, à température $T$ constante, la loi des gaz parfaits s'écrit $P = \frac{\rho}{M} R T$.
L'équation locale selon l'axe vertical ascendant $z$ donne :
$$\frac{dP}{dz} = -\rho g = -\frac{M g}{R T} P$$
En posant $H = \frac{RT}{Mg}$ (hauteur d'échelle, de l'ordre de $8\text{ km}$ pour l'atmosphère terrestre) :
$$\boxed{P(z) = P_0 \exp\left(-\frac{z}{H}\right)}$$

---

## IV. Poussée d'Archimède

### Théorème
Tout corps plongé en totalité ou en partie dans un fluide au repos, soumis à un champ de pesanteur uniforme $\vec{g}$, subit de la part du fluide une force globale appelée **poussée d'Archimède**, égale et opposée au poids du volume de fluide déplacé.
$$\boxed{\vec{F}_{\text{Archimède}} = -\rho_{\text{fluide}} V_{\text{immerge}} \vec{g}}$$

> **Démonstration :**
> La force de pression exercée sur un volume immergé $V$ délimité par une surface fermée $\Sigma$ est :
> $\vec{F} = \iint_{\Sigma} -P \vec{n} \, dS$
> D'après le théorème de Ostrogradski (formule de divergence) :
> $\vec{F} = \iint_{\Sigma} -P \vec{n} \, dS = \iiint_{V} -\vec{\text{grad}} P \, dV$
> Or, d'après l'équation de la statique des fluides, $\vec{\text{grad}} P = \rho_{\text{fluide}} \vec{g}$. Donc :
> $\vec{F} = \iiint_{V} -\rho_{\text{fluide}} \vec{g} \, dV = -\rho_{\text{fluide}} V \vec{g}$ (si $\rho_{\text{fluide}}$ est homogène). $\blacksquare$

---

## V. Méthodes et Savoir-faire

* **Calculer une force de pression sur une paroi plane :**
  1. Exprimer la pression $P(z)$ en tout point de la paroi.
  2. Définir un élément de surface $dS$ (ex: $dy \, dz$).
  3. Intégrer la force élémentaire $\vec{dF} = -P \vec{n} dS$ sur toute la surface de la paroi.
* **Résoudre un problème de statique avec des fluides non miscibles :**
  Utiliser la continuité de la pression à l'interface entre deux fluides (la pression ne subit pas de saut, sauf en présence d'une interface tendue – loi de Laplace, hors programme en statique pure standard).

---

## VI. Pièges et erreurs classiques à éviter

1. **Sens de la normale :** Le vecteur $\vec{n}$ dans l'expression de $\vec{dF}$ est orienté *vers l'extérieur* du fluide. Pour une force sur une paroi, le fluide pousse *vers* la paroi, le signe moins $(-)$ est donc capital.
2. **Unités de pression :** Ne pas oublier de convertir les bars ou les atmosphères en Pascals ($\text{Pa}$) lors des calculs numériques ($1\text{ atm} = 101325\text{ Pa}$).
3. **Origine des axes :** Bien définir le sens de l'axe vertical (souvent $Oz$ vers le haut, d'où le $-\rho g$, ou vers le bas, d'où le $+\rho g$).
4. **Validité de la formule $P = P_0 + \rho g h$ :** Elle n'est valable **que** pour un fluide incompressible au repos dans un champ de pesanteur uniforme. Ne l'appliquez jamais directement à l'atmosphère terrestre sur de grandes hauteurs.