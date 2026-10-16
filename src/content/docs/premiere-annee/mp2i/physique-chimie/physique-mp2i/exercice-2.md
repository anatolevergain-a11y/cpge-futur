---
title: 'Exercice 2 : Mouvement dans un champ de force'
description: 'Problème d entraînement type concours.'
---

# Concours Blanc - Filière MP2I
## Physique-Chimie : Électrocinétique et Mécanique
### Thème : Mouvement dans un champ de force et analogie électromécanique

---

### Préambule et consignes de l'examinateur
*Ce problème est conçu pour tester la maîtrise des outils de mécanique du point matériel appliqués à un champ de forces centrales, ainsi que la capacité à faire le lien avec les régimes transitoires en électrocinétique. Une attention particulière sera accordée à la rigueur des notations vectorielles et à la justification des approximations.*

---

## Étude Préliminaire : Mouvement dans un champ newtonien répulsif

On considère une particule $M$ de masse $m$ et de charge $q > 0$, mobile dans un référentiel galiléen $\mathcal{R}$ muni d'un repère cartésien $(O, \vec{u}_x, \vec{u}_y, \vec{u}_z)$ et du système de coordonnées polaires $(r, \theta)$ associé dans le plan $(Oxy)$. 

La particule est soumise à une force électrostatique répulsive créée par une charge fixe $Q > 0$ placée en $O$. L'expression de la force s'écrit :
$$\vec{F} = \frac{K}{r^2} \vec{u}_r$$
où $K = \frac{qQ}{4\pi \varepsilon_0} > 0$ et $\vec{u}_r = \frac{\overrightarrow{OM}}{r}$.

---

## Partie I : Mécanique - Étudeénergétique et trajectoire

### Question 1
Exprimer l'énergie potentielle $E_p(r)$ dont dérive la force $\vec{F}$, en prenant la convention $E_p(r \to +\infty) = 0$.

> **Correction :**
> La force $\vec{F}$ est conservative car elle dérive d'un potentiel scalaire. On a par définition :
> $$\vec{F} = -\overrightarrow{\operatorname{grad}} E_p(r) = -\frac{d E_p}{dr} \vec{u}_r$$
> Par identification avec l'expression de $\vec{F}$ :
> $$\frac{d E_p}{dr} = -\frac{K}{r^2}$$
> En intégrant cette relation :
> $$E_p(r) = \frac{K}{r} + Cte$$
> En appliquant la condition aux limites $E_p(r \to +\infty) = 0$, on obtient la constante d'intégration nulle, soit :
> $$E_p(r) = \frac{K}{r}$$

---

### Question 2
On note $C = r^2 \dot{\theta}$ la constante des aires. Établir l'expression de l'énergie mécanique $E_m$ de la particule en fonction de $m$, $K$, $r$, $\dot{r}$ et $C$.

> **Correction :**
> L'énergie mécanique est la somme de l'énergie cinétique $E_c$ et de l'énergie potentielle $E_p$.
> Dans le plan polaire, la vitesse s'exprime par :
> $$\vec{v} = \dot{r} \vec{u}_r + r \dot{\theta} \vec{u}_\theta$$
> L'énergie cinétique vaut donc :
> $$E_c = \frac{1}{2} m v^2 = \frac{1}{2} m (\dot{r}^2 + r^2 \dot{\theta}^2)$$
> En utilisant la constante des aires $C = r^2 \dot{\theta}$, on a $\dot{\theta} = \frac{C}{r^2}$, d'où :
> $$E_c = \frac{1}{2} m \left(\dot{r}^2 + \frac{C^2}{r^2}\right)$$
> L'énergie mécanique s'écrit alors :
> $$E_m = E_c + E_p = \frac{1}{2} m \dot{r}^2 + \frac{1}{2} m \frac{C^2}{r^2} + \frac{K}{r}$$

---

### Question 3
En déduire l'équation différentielle du mouvement régissant l'évolution de la distance $r(t)$.

> **Correction :**
> L'énergie mécanique se conservant au cours du mouvement ($\frac{dE_m}{dt} = 0$), on dérive l'expression précédente par rapport au temps :
> $$\frac{dE_m}{dt} = m \dot{r} \ddot{r} + \left(-\frac{m C^2}{r^3} - \frac{K}{r^2}\right)\dot{r} = 0$$
> Puisque $\dot{r} \neq 0$ pour un mouvement générique, on simplifie par $\dot{r}$ :
> $$m \ddot{r} - \frac{m C^2}{r^3} - \frac{K}{r^2} = 0$$
> Soit sous forme canonique :
> $$m \ddot{r} = \frac{m C^2}{r^3} + \frac{K}{r^2}$$
> *Analyse physique :* Le terme $\frac{m C^2}{r^3}$ correspond à la force d'inertie centrifuge (effective), qui s'ajoute ici à la force répulsive $\frac{K}{r^2}$.

---

## Partie II : Électrocinétique - Analogie avec un circuit non linéaire

On s'intéresse maintenant à un circuit électrique modélisant un dispositif lié à cette particule. On considère un dipôle non linéaire dont la caractéristique courant-tension est liée au mouvement précédent. 

Pour simplifier, on se place dans le cas unidimensionnel où la position $x(t)$ de la particule sur un axe obéit à l'équation différentielle suivante (analogue à celle de la partie I) :
$$m \frac{d^2 x}{dt^2} + \alpha \frac{dx}{dt} + \frac{K}{x^2} = 0 \quad (\text{pour } x > 0)$$
où $\alpha > \text{0}$ représente un coefficient de frottement fluide.

### Question 4
Établir l'analogie entre cette équation mécanique et l'équation électrique d'un circuit $\text{RLC}$ série comportant un composant non linéaire, en posant $x(t) \leftrightarrow q_e(t)$ (charge du condensateur). Préciser à quoi correspondent $m$, $\alpha$ et $K$ dans le domaine électrique.

> **Correction :**
> L'équation électrique générale d'un circuit $\text{RLC}$ série pour la charge $q_e(t)$ du condensateur est :
> $$L \frac{d^2 q_e}{dt^2} + R \frac{dq_e}{dt} + u_C(q_e) = 0$$
> Par identification terme à terme avec l'équation mécanique :
> - $m \longleftrightarrow L$ (Inductance du circuit, en $\text{H}$)
> - $\alpha \longleftrightarrow R$ (Résistance du circuit, en $\Omega$)
> - La force de rappel $\frac{K}{x^2} \longleftrightarrow u_C(q_e)$ (Tension aux bornes d'un condensateur non linéaire, en $\text{V}$)

---

### Question 5
Écrire l'équation régissant l'évolution de la puissance mécanique totale fournie ou dissipée dans le système mécanique, et donner son équivalent en termes de bilan de puissance électrique.

> **Correction :**
> On multiplie l'équation différentielle mécanique par la vitesse $v = \dot{x} = \frac{dx}{dt}$ :
> $$m \ddot{x}\dot{x} + \alpha \dot{x}^2 + \frac{K}{x^2}\dot{x} = 0$$
> Ce qui se réécrit sous forme conservative/dissipative :
> $$\frac{d}{dt}\left(\frac{1}{2}m\dot{x}^2 - \frac{K}{x}\right) = -\alpha \dot{x}^2$$
> *Bilan énergétique :* $\frac{dE_m}{dt} = -P_{\text{dissipée}}$ avec $P_{\text{dissipée}} = \alpha \dot{x}^2 \ge 0$.
> 
> *Équivalent électrique :*
> En multipliant l'équation électrique par $\frac{dq_e}{dt} = i(t)$ :
> $$L i \frac{di}{dt} + R i^2 + u_C(q_e)i = 0 \implies \frac{d}{dt}\left(\frac{1}{2}Li^2 + \int u_C dq_e\right) = -R i^2$$
> Il s'agit du bilan de puissance du circuit, où $R i^2$ représente la puissance thermique dissipée par effet Joule.

---

## Partie III : Analyse critique des résultats

### Question 6
Discuter de la validité du modèle newtonien répulsif lorsque $r \to 0$, tant du point de vue mécanique que de son analogue électrique.

> **Correction :**
> - **Du point de vue mécanique :** 
>   Lorsque $r \to 0$, l'énergie potentielle $\frac{K}{r}$ et la force $\frac{K}{r^2}$ tendent vers $+\infty$. En présence d'une force répulsive, la particule ne peut de toute façon pas atteindre $r = 0$ (sauf si $C=0$ et qu'elle possède une vitesse initiale dirigée vers l'origine, ce qui est exclu par la conservation du moment cinétique si $C \neq 0$). Toutefois, à très courte distance, les effets quantiques ou relativistes viendraient invalider la mécanique classique newtonienne.
> - **Du point de vue électrique :** 
>   Dans l'analogie, $x \longleftrightarrow q_e$. Si $x \to 0$, la tension $u_C(q_e) = \frac{K}{q_e^2}$ diverge vers $+\infty$. Aucun composant réel ne supporte une tension infinie : il y aurait claquage diélectrique du condensateur, rendant le modèle caduc. De plus, les courants ou variations de charges ne peuvent être infinis en pratique en raison des limites inhérentes aux sources et aux résistances parasites des conducteurs.

---
*Fin de l'épreuve.*