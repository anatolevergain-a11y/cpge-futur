---
title: 'Exercice 2 : Ondes et transmission du signal'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Étude de la propagation de signaux dans une ligne de transmission dispersive

**Matière :** Physique-Chimie (Filière MPI)  
Chapitre: ** Physique quantique et Électromagnétisme — Ondes et transmission du signal  

---

## Introduction et présentation du problème

Les lignes de transmission (câbles coaxiaux, lignes bifilaires) sont indispensables pour acheminer des signaux électriques à haute fréquence. Dans le modèle idéal des lignes sans pertes, la propagation est non dispersive. Toutefois, les effets réels (résistance des conducteurs, fuites diélectriques) introduisent une atténuation et de la dispersion, altérant la forme des signaux transportés.

Ce problème étudie, à l'aide des équations des télégraphistes, la propagation d'un signal le long d'une ligne réelle modélisée par des éléments infinitésimaux. L'analogie avec la mécanique quantique (équation de Schrödinger pour une particule libre ou dans un potentiel) sera également effleurée lors de l'étude dispersive.

---

## Partie I : Établissement des équations de propagation (Les équations des télégraphistes)

On considère une ligne de transmission filaire monodimensionnelle orientée selon l'axe $(Ox)$. 
Soit $u(x,t)$ la tension électrique entre les conducteurs et $i(x,t)$ l'intensité du courant circulant dans la ligne au point $x$ et à l'instant $t$.
On modélise un tronçon élémentaire de longueur $\mathrm{d}x$ par :
* Une inductance linéique $L$ ($\text{H}\cdot\text{m}^{-1}$) ;
* Une capacité linéique $C$ ($\text{F}\cdot\text{m}^{-1}$) ;
* Une résistance linéique $R$ ($\Omega\cdot\text{m}^{-1}$) rendant compte des pertes par effet Joule dans les conducteurs ;
* Une conductance linéique de fuite $G$ ($\text{S}\cdot\text{m}^{-1}$) rendant compte des imperfections du diélectrique.

### Question 1.1
En appliquant la loi des mailles et la loi des nœuds au tronçon élémentaire compris entre $x$ et $x + \mathrm{d}x$, établir le système couplé d'équations aux dérivées partielles vérifié par $u(x,t)$ et $i(x,t)$.

> **Correction :**
> * **Loi des mailles** entre $x$ et $x+\mathrm{d}x$ :
>   $$u(x+dix,t) - R\,\mathrm{d}x\,i(x,t) - L\,\mathrm{d}x\,\frac{\partial i}{\partial t}(x,t) - u(x,t) = 0$$
>   En divisant par $\mathrm{d}x$ et en passant à la limite $\mathrm{d}x \to 0$ :
>   $$\frac{\partial u}{\partial x} = -Ri - L\frac{\partial i}{\partial t}$$
> * **Loi des nœuds** (conservation du courant) :
>   $$i(x+\mathrm{d}x,t) - G\,\mathrm{d}x\,u(x+\mathrm{d}x,t) - C\,\mathrm{d}x\,\frac{\partial u}{\partial t}(x+\mathrm{d}x,t) - i(x,t) = 0$$
>   En divisant par $\mathrm{d}x$ et en passant à la limite $\mathrm{d}x \to 0$ :
>   $$\frac{\partial i}{\partial x} = -Gu - C\frac{\partial u}{\partial t}$$

### Question 1.2
En déduire une équation aux dérivées partielles portant uniquement sur la tension $u(x,t)$.

> **Correction :**
> Dérivons l'équation de la maille par rapport à $x$ :
> $$\frac{\partial^2 u}{\partial x^2} = -R\frac{\partial i}{\partial x} - L\frac{\partial}{\otime}\left(\frac{\partial i}{\partial x}\right) \quad \text{(par inversion des dérivées partielles)}$$
> Substituons $\frac{\partial i}{\partial x}$ par l'expression issue de la loi des nœuds :
> $$\frac{\partial^2 u}{\partial x^2} = -R\left(-Gu - C\frac{\partial u}{\partial t}\right) - L\frac{\partial}{\partial t}\left(-Gu - C\frac{\partial u}{\partial t}\right)$$
> Soit l'équation générale des télégraphistes pour la tension :
> $$\frac{\partial^2 u}{\partial x^2} = LC\frac{\partial^2 u}{\partial t^2} + (RC+LG)\frac{\partial u}{\partial t} + RGU$$

---

## Partie II : Étude harmonique et relation de dispersion

On s'intéresse à un régime quasi-sinusoïdal (ou harmonique). On cherche des solutions complexes sous la forme :
$$u(x,t) = \underline{U}(x)e^{j\omega t} \quad \text{et} \quad i(x,t) = \underline{I}(x)e^{j\omega t}$$
où $\omega = 2\pi f$ est la pulsation du signal.

### Question 2.1
Exprimer l'équation différentielle satisfaite par l'amplitude complexe $\underline{U}(x)$ en introduisant l'impédance série linéique $\underline{z} = R + j\omega L$ et l'ad admittance parallèle linéique $\underline{y} = G + j\omega C$.

> **Correction :**
> En notation complexe, les équations des télégraphistes s'écrivent :
> $$\frac{\mathrm{d}\underline{U}}{\mathrm{d}x} = -\underline{z}\,\underline{I} \quad \text{et} \quad \frac{\mathrm{d}\underline{I}}{\mathrm{d}x} = -\underline{y}\,\underline{U}$$
> En combinant ces deux équations (en dérivant la première par rapport à $x$) :
> $$\frac{\mathrm{d}^2\underline{U}}{\mathrm{d}x^2} = \underline{z}\,\underline{y}\,\underline{U}$$

### Question 2.2
Définir le nombre d'onde complexe $\underline{k}$ (ou exposant de propagation $\underline{\gamma} = \alpha + j\beta$) tel que $\underline{k}^2 = -\underline{z}\,\underline{y}$ (ou $\underline{\gamma}^2 = \underline{z}\,\underline{y}$). Exprimer l'atténuation linéique $\alpha$ et le déphasage linéique $\beta$ en fonction de $R, L, G, C$ et $\omega$.

> **Correction :**
> On pose $\underline{\gamma} = \alpha + j\beta$ (avec $\alpha > 0$ l'atténuation en $\text{Np}\cdot\text{m}^{-1}$ et $\beta$ le nombre d'onde en $\text{rad}\cdot\text{m}^{-1}$).
> On a :
> $$\underline{\gamma}^2 = (R + j\omega L)(G + j\omega C) = (RG - \omega^2 LC) + j\omega(RC + LG)$$
> En identifiant $\underline{\gamma}^2 = \alpha^2 - \beta^2 + 2j\alpha\beta$, on obtient le système :
> 1. $\alpha^2 - \beta^2 = RG - \omega^2 LC$
> 2. $4\alpha^2\beta^2 = \omega^2(RC + LG)^2$
> 3. $\alpha^2 + \beta^2 = |\underline{z}\underline{y}| = \sqrt{(R^2 + \omega^2 L^2)(G^2 + \omega^2 C^2)}$
> 
> Par addition et soustraction entre (3) et la première équation :
> $$\alpha = \sqrt{\frac{1}{2} \left[ \sqrt{(R^2 + \omega^2 L^2)(G^2 + \omega^2 C^2)} + (RG - \omega^2 LC) \right]}$$
> $$\beta = \sqrt{\frac{1}{2} \left[ \sqrt{(R^2 + \omega^2 L^2)(G^2 + \omega^2 C^2)} - (RG - \omega^2 LC) \right]}$$

---

## Partie III : Approximation des faibles pertes et dispersion

Dans la plupart des lignes de télécommunication à haute fréquence, les pertes sont faibles devant les termes réactifs : $\frac{R}{\omega L} \ll 1$ et $\frac{G}{\omega C} \ll 1$.

### Question 3.1
À l'aide d'un développement limité, exprimer l'expression simplifiée de $\beta(\omega)$ au premier ordre non nul en $\frac{R}{\omega L}$ et $\frac{G}{\omega C}$.

> **Correction :**
> Factorisons les termes sous la racine de $|\underline{z}\underline{y}|$ :
> $$\sqrt{(R^2 + \omega^2 L^2)(G^2 + \omega^2 C^2)} = \omega^2 LC \sqrt{1 + \frac{R^2}{\omega^2 L^2}}\sqrt{1 + \frac{G^2}{\omega^2 C^2}}$$
> En utilisant le développement limité $\sqrt{1+\epsilon} \approx 1 + \frac{\epsilon}{2}$ pour $\epsilon \ll 1$ :
> $$\sqrt{(R^2 + \omega^2 L^2)(G^2 + \omega^2 C^2)} \approx \omega^2 LC \left(1 + \frac{R^2}{2\omega^2 L^2}\right)\left(1 + \frac{G^2}{2\omega^2 C^2}\right)$$
> En ne conservant que les termes pertinents :
> $$\approx \omega^2 LC \left(1 + \frac{R^2}{2\omega^2 L^2} + \frac{G^2}{2\omega^2 C^2}\right) = \omega^2 LC + \frac{R^2 C}{2L} + \frac{G^2 L}{2C}$$
> Reportons dans l'expression de $\beta$ :
> $$\beta^2 \approx \frac{1}{2} \left[ \omega^2 LC + \frac{R^2 C}{2L} + \frac{G^2 L}{2C} + RG - \omega^2 LC \right] = \frac{1}{2} \left[ \frac{R^2 C}{2L} + \frac{G^2 L}{2C} + RG \right] = \frac{1}{4} \left( \frac{R\sqrt{C}}{\sqrt{L}} + \frac{G\sqrt{L}}{\sqrt{C}} \right)^2 \quad \text{(ce terme est indépendant de }\omega\text{!)}$$
> Attendez, reprenons plus rigoureusement le terme $RG - \omega^2 LC$ :
> $$\beta^2 \approx \omega^2 LC + \frac{R^2 C}{2L} + \frac{G^2 L}{2C} - RG \dots$$
> En fait, faisons le DL directement sur $\beta = \omega\sqrt{LC} \sqrt{1 + \frac{\text{termes de pertes}}{\omega^2}}$ :
> $$\beta(\omega) \approx \omega\sqrt{LC} \left[ 1 + \frac{1}{8\omega^2}\left(\frac{R}{L} - \frac{G}{C}\right)^2 + \dots \right]$$
> Plus simplement, au premier ordre des faibles pertes :
> $$\beta(\omega) \approx \omega\sqrt{LC}$$

### Question 3.2
En déduire la vitesse de phase $v_\phi$ et la vitesse de groupe $v_g$ des signaux. La ligne est-elle dispersive à cet ordre d'approximation ?

> **Correction :**
> * **Vitesse de phase** :
>   $$v_\phi = \frac{\omega}{\beta} \approx \frac{\omega}{\omega\sqrt{LC}} = \frac{1}{\sqrt{LC}}$$
> * **Vitesse de groupe** :
>   $$v_g = \frac{\mathrm{d}\omega}{\mathrm{d}\beta} \approx \frac{1}{\sqrt{LC}}$$
> Puisque $v_\phi = v_g = \text{constante}$ (indépendant de $\omega$), la ligne **n'est pas dispersive** à cet ordre d'approximation. Les signaux se propagent sans déformation.

---

## Partie IV : Analyse critique des résultats

### Question 4.1
Discutez des limites du modèle des faibles pertes lorsque la fréquence $\omega$ tend vers $0$ (régime continûment variable ou très basses fréquences).

> **Correction :**
> L'approximation des faibles pertes repose sur les hypothèses $\frac{R}{\omega L} \ll 1$ et $\frac{G}{\omega C} \ll 1$. 
> Lorsque $\omega \to 0$, ces conditions ne sont plus du tout vérifiées, car les termes réactifs $\omega L$ et $\omega C$ deviennent négligeables devant les termes résistifs $R$ et conductifs $G$.
> À très basse fréquence, la ligne se comporte donc comme un simple réseau de résistances et de condensateurs (diffusion thermique/électrique), et l'équation des télégraphistes se réduit à une équation de type diffusion (parabolique) et non plus de type d'onde (hyperbolique). Le signal subit alors une forte atténuation et une dispersion très prononcée, rendant impossible la transmission fidèle d'informations.

---
*Fin du problème.*