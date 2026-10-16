---
title: 'Exercice 1 : Théorème de l énergie cinétique'
description: 'Problème d entraînement type concours pour PTSI.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Le problème s'intéresse à la modélisation du mouvement d'un projectile autopropulsé (ou d'une nacelle de test) sur une piste de lancement inclinée, avant de quitter celle-ci pour effectuer un saut dans le champ de pesanteur uniforme. Ce type d'étude est classique en sciences industrielles pour la préparation des concours (type Centrale-Supélec ou CCINP) car il combine la dynamique du point matériel, la modélisation des actions mécaniques de contact avec frottements, et des bilans énergétiques rigoureux.

On se place dans un référentiel terrestre $R_0$ supposé galiléen, muni d'un repère orthonormé direct $(O, \vec{u}_x, \vec{u}_y, \vec{u}_z)$, où l'axe $(O, \vec{u}_z)$ est vertical ascendant. Le champ de pesanteur est $\vec{g} = -g \vec{u}_z$ avec $g = 9{,}81 \, \text{m}\cdot\text{s}^{-2}$.

Le système étudié est un solide modélisé par un point matériel $M$ de masse $m$. 
La trajectoire se décompose en deux phases :
1. **Phase 1 (sur la piste) :** Le point $M$ glisse sur une portion de plan incliné d'un angle $\alpha$ par rapport à l'horizontale. La longueur de la piste est $L$. Le contact entre le solide et la piste est caractérisé par un coefficient de frottement dynamique f. Une force motrice constante $\vec{F}_m = F_m \vec{u}_x$ s'exerce sur le mobile (où $\vec{u}_x$ est porté par la ligne de plus grande pente vers le haut).
2. **Phase 2 (en vol) :** À l'instant où le mobile quitte la piste en un point $A$, la propulsion cesse et le mobile est soumis uniquement à son poids (on néglige l'action de l'air).

---

### ❓ Questions progressives (incluant une analyse critique du modèle)

1. **Bilan des forces et paramétrage (Phase 1)**
   Faire l'inventaire des forces s'exerçant sur le point $M$ lors de son mouvement sur la piste inclinée. Exprimer analytiquement chacune de ces forces dans la base adaptée au plan incliné.

2. **Application du Théorème de l'Énergie Cinétique (Phase 1)**
   À l'aide du Théorème de l'Énergie Cinétique (TEC) appliqué entre le point de départ $O$ (vitesse nulle) et un point courant de la piste repéré par son abscisse curviligne $s$ (avec $s \in [0, L]$), établir l'expression de la vitesse $v(s)$ du mobile.

3. **Vitesse de décollage et analyse critique**
   En déduire la vitesse $v_A$ du mobile lorsqu'il quitte la piste en $A$ (pour $s = L$). 
   *Analyse critique :* Discuter de la condition nécessaire sur la force motrice $F_m$ pour que le mobile puisse effectivement quitter la piste. Quel phénomène physique limite la validité de ce modèle si $F_m$ est trop faible ou si le coefficient de frottement $f$ est trop élevé ?

4. **Phase de vol et portée maximale**
   En utilisant à nouveau une approche énergétique ou par intégration du PFD lors de la phase de vol (Phase 2), déterminer l'altitude maximale atteinte par le projectile, puis la distance horizontale parcourue depuis le point $A$ jusqu'à l'impact avec le sol (situé à la même altitude que $O$).

---

### 💡 Pistes & Indications méthodologiques

- **Pour la Q1 :** Définissez une base locale $( \vec{u}_t, \vec{u}_n )$ où $\vec{u}_t$ est dirigé vers le haut de la pente et $\vec{u}_n$ est normal à la piste vers l'extérieur. Attention à bien projeter la force motrice $\vec{F}_m$ et le poids $\vec{mg}$ dans cette base.
- **Pour la Q2 :** Rappelez l'expression mathématique du TEC sous forme intégrale entre deux états. Identifiez le travail de chaque force. N'oubliez pas que la force de frottement s'oppose toujours au mouvement et que son travail est nécessairement négatif.
- **Pour la Q3 :** Pour la discussion critique, pensez à examiner la composante normale de la réaction du support $\vec{N}$. Si cette composante s'annule ou change de signe, le contact est rompu.
- **Pour la Q4 :** L'énergie mécanique se conserve lors de la phase de vol (seul le poids travaille). Exprimez l'énergie mécanique totale au point $A$ et utilisez-la à l'apogée ou à l'impact.

---

### 📋 Corrigé détaillé pas à pas

#### 1. Bilan des forces et paramétrage (Phase 1)
Soit le plan incliné d'angle $\alpha$ par rapport à l'horizontale. On introduit la base locale $(O, \vec{u}_t, \vec{u}_n)$ liée au mouvement, avec $\vec{u}_t$ le vecteur unitaires tangentiel orienté vers le haut de la pente, et $\vec{u}_n$ le vecteur normal dirigé vers l'extérieur du plan.
Les forces s'exerçant sur $M$ sont :
* Le poids : $\vec{P} = m\vec{g} = -mg \sin(\alpha) \vec{u}_t - mg \cos(\alpha) \vec{u}_n$.
* La force motrice : $\vec{F}_m = F_m \cos(\alpha) \vec{u}_t - F_m \sin(\alpha) \vec{u}_n$ (en supposant la force horizontale, ou simplement $\vec{F}_m = F_m \vec{u}_x = F_m (\cos\alpha \vec{u}_t - \sin\alpha \vec{u}_n)$).
* La réaction du support $\vec{R} = \vec{N} + \vec{T}$, avec $\vec{N} = N \vec{u}_n$ (réaction normale, $N > 0$) et $\vec{T} = -f N \vec{u}_t$ (réaction tangentielle de frottement dynamique, s'opposant au mouvement avec $v > 0$).

#### 2. Application du Théorème de l'Énergie Cinétique (Phase 1)
Le Théorème de l'Énergie Cinétique entre la position initiale $s=0$ (où $v(0)=0$) et la position $s$ s'écrit :
$$\Delta E_c = E_c(s) - E_c(0) = \frac{1}{2} m v(s)^2 - 0 = W_{0 \to s}(\text{Forcesext})$$

Calculons le travail de chaque force le long du déplacement de longueur $s$ :
* Travail du poids : $W(\vec{P}) = \int_{0}^{s} \vec{P} \cdot d\vec{OM} = -mg \sin(\alpha) s$
* Travail de la force motrice : $W(\vec{F}_m) = \int_{0}^{s} \vec{F}_m \cdot d\vec{OM} = F_m \cos(\alpha) s$ (si $\vec{F}_m$ est horizontale) ou $F_m s$ si elle est colinéaire à la pente. Supposons $\vec{F}_m$ colinéaire à la pente par la suite pour simplifier l'application numérique, soit $W(\vec{F}_m) = F_m s$.
* Travail de la réaction normale : $W(\vec{N}) = 0$ car $\vec{N} \perp d\vec{OM}$.
* Travail de la force de frottement : $W(\vec{T}) = \int_{0}^{s} (-f N \vec{u}_t) \cdot (\mathrm{d}s \, \vec{u}_t) = -f \int_{0}^{s} N \, \mathrm{d}s$.

Déterminons $N$ en appliquant le PFD selon la direction normale $\vec{u}_n$ (mouvement rectiligne, donc accélération normale nulle) :
$$m \vec{a} \cdot \vec{u}_n = 0 \implies N - mg \cos(\alpha) - F_m \sin(\alpha) (\text{si } \vec{F}_m \text{ est horizontale}) = 0$$
Si $\vec{F}_m$ est strictement colinéaire à la pente ($\vec{F}_m = F_m \vec{u}_t$), alors :
$$N = mg \cos(\alpha)$$
Le travail des frottements devient alors :
$$W(\vec{T}) = -f m g \cos(\alpha) s$$

En regroupant les termes dans le TEC :
$$\frac{1}{2} m v(s)^2 = \left( F_m - mg \sin(\alpha) - f mg \cos(\alpha) \right) s$$

On en déduit l'expression de la vitesse $v(s)$ :
$$v(s) = \sqrt{\frac{2}{m} \left( F_m - mg (\sin(\alpha) + f \cos(\alpha)) \right) s}$$

#### 3. Vitesse de décollage et analyse critique
La vitesse au point $A$ (pour $s = L$) s'obtient immédiatement :
$$v_A = \sqrt{\frac{2L}{m} \left( F_m - mg (\sin(\alpha) + f \cos(\alpha)) \right)}$$

*Analyse critique du modèle :*
Pour que $v_A$ soit mathématiquement et physiquement définie, il est impératif que le terme sous la racine soit strictement positif, c'est-à-dire :
$$F_m > mg (\sin(\alpha) + f \cos(\alpha))$$
Si cette condition n'est pas remplie, la force motrice est insuffisante pour surmonter la composante du poids parallèle au plan et les forces de frottement cumulées : le mobile ne bouge pas ou s'arrête avant d'atteindre le point $A$. 
De plus, le modèle suppose un contact permanent ($N > 0$). Si la force motrice possédait une composante normale soulevant le mobile, le modèle de frottement de Coulomb ne s'appliquerait plus.

#### 4. Phase de vol et portée maximale
À partir du point $A$ (coordonnées $(x_A, z_A) = (L \cos\alpha, L \sin\alpha)$), le système est en chute libre dans le champ de pesanteur. L'énergie mécanique $E_m = E_c + E_p$ se conserve :
$$E_m(t) = \frac{1}{2} m v(t)^2 + mg z(t) = \text{constante} = E_m(t_A) = \frac{1}{2} m v_A^2 + mg z_A$$

Pour trouver l'altitude maximale $z_{\text{max}}$, on exprime que la composante verticale de la vitesse s'annule ($v_z = 0$). Connaissant l'angle de tir $\alpha$ par rapport à l'horizontale, la vitesse initiale vectorielle au point $A$ est :
$$\vec{v}_A = v_A \cos(\alpha) \vec{u}_x + v_A \sin(\alpha) \u_z \quad (\text{dans le repère cartésien})$$
À l'apogée, la vitesse verticale s'annule, l'énergie cinétique se réduit à sa composante horizontale $E_c(\text{apogée}) = \frac{1}{2} m (v_A \cos\alpha)^2$. Par conservation de $E_m$ :
$$\frac{1}{2} m v_A^2 + mg z_A = \frac{1}{2} m (v_A \cos\alpha)^2 + mg z_{\text{max}}$$
Soit :
$$mg (z_{\text{max}} - z_A) = \frac{1}{2} m v_A^2 \sin^2(\alpha)$$
$$\implies z_{\text{max}} = L \sin(\alpha) + \frac{v_A^2 \sin^2(\alpha)}{2g}$$

Ce résultat, obtenu rapidement par la méthode énergétique, illustre l'efficacité du TEC et des conservations d'énergie par rapport à l'intégration directe des équations différentielles du PFD pour des grandeurs globales (altitudes maximales).