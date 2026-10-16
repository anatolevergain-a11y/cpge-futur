---
title: 'Exercice 1 : Lois de Newton et moment cinétique'
description: 'Problème d entraînement type concours pour MPSI.'
---

### 🌐 Énoncé du problème / Étude de cas

On s'intéresse à la modélisation dynamique d'un système mécanique inspiré de dispositifs utilisés en génie civil et en robotique : un bras manipulateur simplifié. Le système est constitué d'une tige rigide $OA$, de masse négligeable, de longueur $L$, mobile dans le plan vertical $(O, \vec{u}_x, \vec{u}_z)$ (où $\vec{u}_z$ est dirigé vers le haut). 

À l'extrémité $A$ de la tige est fixé un solide ponctuel $S$ de masse $m$. Le mouvement de rotation de la tige autour de l'axe fixe $(O, \vec{u}_y)$ est commandé par un moteur qui exerce un couple moteur de moment $\mathcal{M}_m \vec{u}_y$. 

L'angle $\theta$ entre l'axe vertical ascendant $(O, \vec{u}_z)$ et la tige $OA$ repère la position du système. On note $\vec{u}_r$ le vecteur unitaires dirigé de $O$ vers $A$ et $\vec{u}_\theta$ le vecteur orthogonal tel que $(\vec{u}_r, \vec{u}_\theta, \vec{u}_y)$ forme une base orthonormée directe.

Dans un souci d'écoconception et d'optimisation énergétique, on cherche à analyser le comportement dynamique de ce bras pour des mouvements rapides, tout en évaluant les limites du modèle de corps ponctuel et de la tige rigide sans masse face à des phénomènes réels tels que les frottements et la déformabilité des matériaux.

---

### ❓ Questions progressives

1. **Cinématique du point $S$**
   Exprimer le vecteur position $\vec{OA}$, le vecteur vitesse $\vec{v}(S/\text{R})$ et le vecteur accélération $\vec{a}(S/\text{R})$ dans la base locale $(\vec{u}_r, \vec{u}_theta, \vec{u}_y)$, par rapport au référentiel terrestre $\text{R}$, supposé galiléen.

2. **Application du Théorème du Moment Cinétique (TMC)**
   Déterminer le moment cinétique $\vec{L}_O(S)$ du point $S$ par rapport au point fixe $O$ dans son mouvement par rapport à $\text{R}$. 
   En appliquant le théorème du moment cinétique scalaire par rapport à l'axe $(O, \vec{u}_y)$, établir l'équation différentielle du mouvement régissant l'évolution de $\theta(t)$, en tenant compte de la pesanteur (champ de pesanteur $\vec{g} = -g \vec{u}_z$) et du moment du couple moteur $\mathcal{M}_m$.

3. **Analyse énergétique et conservation**
   Dans le cas particulier où le couple moteur est nul ($\mathcal{M}_m = 0$) et en l'absence de frottements, exprimer l'énergie mécanique $E_m$ du système. Vérifier sa conservation à partir de l'équation différentielle précédente.

4. **Modélisation d'un frottement visqueux et analyse critique**
   Dans la réalité, les liaisons mécaniques au niveau de l'axe $O$ engendrent un couple de frottement fluide modélisé par $\mathcal{M}_f = -f \dot{\theta}$ (avec $f > 0$).
   - Établir la nouvelle équation différentielle.
   - **Analyse critique :** Si l'on applique ce modèle pour des vitesses angulaires très élevées ($\dot{\theta} \gg 1$), ce modèle linéaire est-il valide ? Justifier en citant des phénomènes physiques négligés et proposer une modélisation plus réaliste.

---

### 💡 Pistes & Indications

- **Q1 :** Rappelez les relations de derivation vectorielle dans la base polaire/cylindrique : $\frac{d\vec{u}_r}{dt} = \dot{\theta}\vec{u}_\theta$ et $\frac{d\vec{u}_\theta}{dt} = -\dot{\theta}\vec{u}_r$.
- **Q2 :** Le théorème du moment cinétique s'écrit $\frac{d\vec{L}_O}{dt} = \sum \vec{\mathcal{M}}_O(\text{ext})$. Pensez à identifier toutes les forces s'exerçant sur $S$ (poids et action de la tige, dont le moment en $O$ doit être évalué soigneusement).
- **Q3 :** Multiplier l'équation différentielle par $\dot{\theta}$ fait souvent apparaître la dérivée temporelle d'une fonction d'énergie.
- **Q4 :** Pour l'analyse critique, pensez aux régimes d'écoulement des lubrifiants (transition vers des frottements turbulents ou non-linéaires) et aux limites de la rigidité de la structure (phénomènes vibratoires).

---

### 📋 Corrigé détaillé et analyse des résultats

#### 1. Cinématique du point $S$
Le vecteur position du point $S$ est :
$$\vec{OA} = L \vec{u}_r$$

Dans le triangle de repérage, la base locale $(\vec{u}_r, \vec{u}_\theta)$ est liée à l'angle $\theta$ défini par rapport à $-\vec{u}_z$. Exprimons $\vec{u}_r$ et $\vec{u}_\theta$ en fonction des coordonnées cartésiennes :
$$\vec{u}_r = \sin\theta \, \vec{u}_x - \cos\theta \, \vec{u}_z$$
$$\vec{u}_\theta = \cos\theta \, \vec{u}_x + \sin\theta \, \vec{u}_z$$

En dérivant par rapport au temps (en remarquant que $\dot{\vec{u}}_r = \dot{\theta}\vec{u}_\theta$ et $\dot{\vec{u}}_\theta = -\dot{\theta}\vec{u}_r$) :
$$\vec{v}(S/\text{R}) = \frac{d\vec{OA}}{dt} = L \dot{\theta} \vec{u}_\theta$$

En dérivant une seconde fois :
$$\vec{a}(S/\text{R}) = \frac{d\vec{v}}{dt} = L \ddot{\theta} \vec{u}_\theta + L \dot{\theta} \dot{\vec{u}}_\theta = -L \dot{\theta}^2 \vec{u}_r + L \ddot{\theta} \vec{u}_\theta$$

#### 2. Théorème du Moment Cinétique
Par définition, le moment cinétique en $O$ du point $S$ est :
$$\vec{L}_O(S) = \vec{OA} \land \vec{p} = m (\vec{OA} \land \vec{v}) = m (L \vec{u}_r) \land (L \dot{\theta} \vec{u}_\theta) = m L^2 \dot{\theta} \vec{u}_y$$

Appliquons le Théorème du Moment Cinétique galiléen en $O$ :
$$\frac{d\vec{L}_O}{dt} = \sum \vec{\mathcal{M}}_O(\text{ext})$$

Les forces extérieures s'exerçant sur $S$ sont :
1. Le poids $\vec{P} = m\vec{g} = -mg\vec{u}_z = mg(\cos\theta \vec{u}_r - \sin\theta \vec{u}_\theta)$.
2. L'action de la tige $\vec{R}$ (qui, la tige étant sans masse et idéale, s'exerce selon $\vec{u}_r$).
3. Le couple moteur fourni par l'axe : $\vec{\mathcal{M}}_m = \mathcal{M}_m \vec{u}_y$.

Calculons les moments en $O$ :
- $\vec{\mathcal{M}}_O(\vec{P}) = \vec{OA} \land (mg\cos\theta \vec{u}_r - sin\theta \vec{u}_\theta) = m g L \sin\theta \, \vec{u}_y$
- $\vec{\mathcal{M}}_O(\vec{R}) = \vec{OA} \land (R_r \vec{u}_r) = \vec{0}$
- $\vec{\mathcal{M}}_O(\text{moteur}) = \mathcal{M}_m \vec{u}_y$

En projetant le TMC sur l'axe $\vec{u}_y$ :
$$m L^2 \ddot{\theta} = -mg L \sin\theta + \mathcal{M}_m$$

Soit l'équation différentielle :
$$\ddot{\theta} + \frac{g}{L} \sin\theta = \frac{\mathcal{M}_m}{m L^2}$$

#### 3. Analyse énergétique et conservation
Si $\mathcal{M}_m = 0$, l'équation devient :
$$\ddot{\theta} + \frac{g}{L} \sin\theta = 0$$

Multiplions cette équation par $\dot{\theta}$ :
$$\dot{\theta} \ddot{\theta} + \frac{g}{L} \sin\theta \dot{\theta} = 0$$
$$\frac{d}{dt} \left[ \frac{1}{2} m L^2 \dot{\theta}^2 - m g L \cos\theta \right] = 0$$

L'expression entre crochets est l'énergie mécanique du système $E_m = E_c + Ep$ avec $E_c = \frac{1}{2} m L^2 \dot{\theta}^2$ et $E_p = -mgL\cos\theta$ (en choisissant l'origine de l'énergie potentielle en $O$). $E_m$ est donc une constante du mouvement.

#### 4. Modélisation d'un frottement visqueux et analyse critique
- **Nouvelle équation différentielle :**
  En ajoutant le moment de frottement $\mathcal{M}_f = -f \dot{\theta}$, le TMC projeté sur $\vec{u}_y$ s'écrit :
  $$m L^2 \ddot{\theta} = -mg L \sin\theta - f \dot{\theta} + \mathcal{M}_m$$
  $$\ddot{\theta} + \frac{f}{mL^2} \dot{\theta} + \frac{g}{L} \sin\theta = \frac{\mathcal{M}_m}{mL^2}$$

- **Analyse critique des limites du modèle :**
  1. *Validité du frottement visqueux linéaire ($f\dot{\theta}$) :* Ce modèle n'est valable qu'à *faibles vitesses* (régime laminaire du lubrifiant dans les paliers). Pour des vitesses angulaires élevées ($\dot{\theta} \gg 1$), les forces de frottement aérodynamique sur la masse $S$ ou les régimes turbulents dans les paliers induisent des termes de frottement en $\dot{\theta}|\dot{\theta}|$ (frottement quadratique).
  2. *Hypothèse de la tige rigide et indéformable :* En réalité, aucun matériau n'est infiniment rigide. Pour des accélérations angulaires $\ddot{\theta}$ importantes (mouvements brusques), la tige subit des flexions (oscillations élastiques couplées). Le modèle ponctuel rigide sous-estime les risques de résonance structurelle et de fatigue des matériaux.