---
title: 'Exercice 1 : Distribution de Maxwell-Boltzmann'
description: 'Problème d entraînement type concours pour MP.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Le présent problème se propose d'étudier la description statistique d'un gaz parfait monoatomique classique à l'équilibre thermodynamique à la température $T$. On s'intéresse en particulier à la distribution des vitesses des molécules et à ses conséquences macroscopiques.

On considère un gaz constitué de $N$ molécules identiques, de masse $m$, enfermées dans un volume $V$. Le gaz est supposé suffisamment dilué pour que les interactions entre molécules soient négligeables, excepté lors de collisions instantanées permettant l'établissement de l'équilibre thermique. 

L'état microscopique d'une molécule est repéré par sa position $\vec{r} = (x, y, z)$ et sa quantité de mouvement $\vec{p} = (p_x, p_y, p_z) = m\vec{v} = m(v_x, v_y, v_z)$. D'après la physique statistique classique (distribution de Maxwell-Boltzmann), la probabilité élémentaire $\mathrm{d}^6 \mathcal{P}$ de trouver une molécule dans un volume élémentaire de l'espace des phases $\mathrm{d}^3r \, \mathrm{d}^3p = \mathrm{d}x\,\mathrm{d}y\,\mathrm{d}z\,\mathrm{d}p_x\,\mathrm{d}p_y\,\mathrm{d}p_z$ est proportionnelle à $\exp\left(-\frac{E(\vec{r}, \vec{p})}{k_B T}\right)$, où $E$ est l'énergie totale de la molécule et $k_B$ la constante de Boltzmann.

### ❓ Questions progressives (incluant une analyse critique du modèle)

1. **Rappels et normalisation :**
   Exprimer l'énergie mécanique $E$ d'une molécule de masse $m$ placée dans un potentiel extérieur nul (gaz libre). En déduire, en utilisant la condition de normalisation de la probabilité, l'expression de la fonction de distribution des vitesses $f(\vec{v})$ telle que $f(\vec{v})\,\mathrm{d}^3v$ représente la probabilité de trouver la vitesse de la molécule comprise entre $\vec{v}$ et $\vec{v} + \mathrm{d}\vec{v}$.

2. **Distribution des vitesses et des normes :**
   a. Montrer que les composantes $v_x$, $v_y$ et $v_z$ sont des variables aléatoires indépendantes et de lois gaussiennes.
   b. En passant en coordonnées sphériques dans l'espace des vitesses, déterminer la fonction de distribution des normes des vitesses $F(v)$ définie par $F(v)\,\mathrm{d}v = f(\vec{v})\,\mathrm{d}^3v$.

3. **Vitesses caractéristiques :**
   Calculer explicitement :
   a. La vitesse la plus probable $v^*$ (ou vitesse modale).
   b. La vitesse moyenne $\langle v \rangle$.
   c. La vitesse quadratique moyenne $v_{\text{rms}} = \sqrt{\langle v^2 \rangle}$.
   *Rappel utile :* $\int_0^{+\infty} x^n e^{-\alpha x^2} \mathrm{d}x$ se calcule par dérivation par rapport à $\alpha$ d'intégrales gaussiennes de référence.

4. **Énergie cinétique moyenne et équipartition :**
   En déduire l'énergie cinétique moyenne d'une molécule $\langle E_c \rangle$ ainsi que l'énergie interne totale $U$ du gaz parfait. Commenter le résultat au regard du théorème d'équipartition de l'énergie.

5. **Analyse critique du modèle :**
   Discuter des limites de validité du modèle de Maxwell-Boltzmann. À quelle condition fondamentale de la mécanique quantique ce modèle classique est-il soumis ?

### 💡 Pistes & Indications méthodologiques

* **Question 1 :** Écrivez l'énergie sous forme purement cinétique. Utilisez l'intégrale gaussienne fondamentale $\int_{-\infty}^{+\infty} e^{-ax^2} \mathrm{d}x = \sqrt{\frac{\pi}{a}}$.
* **Question 2 :** L'élément de volume en coordonnées sphériques dans l'espace des vitesses s'écrit $\mathrm{d}^3v = v^2 \sin\theta \, \mathrm{d}v \, \mathrm{d}\theta \, \mathrm{d}\varphi$.
* **Question 3 :** Ne confondez pas la maximisation de $F(v)$ (vitesse la plus probable) avec la moyenne $\langle v \rangle$ et la racine de la moyenne du carré $v_{\text{rms}}$.
* **Question 5 :** Pensez à comparer la distance interparticulaire moyenne avec la longueur d'onde de de Broglie thermique.

---

### 📋 Corrigé détaillé pas à pas

#### 1. Expression de l'énergie et normalisation
L'énergie d'une molécule de masse $m$ dans un gaz parfait sans champ extérieur se réduit à son énergie cinétique :
$$E(\vec{r}, \vec{p}) = E_c = \frac{p^2}{2m} = \frac{1}{2}m(v_x^2 + v_y^2 + v_z^2)$$

La probabilité élémentaire est donnée par la loi de Boltzmann :
$$\mathrm{d}^6 \mathcal{P} = A \exp\left(-\frac{m(v_x^2 + v_y^2 + v_z^2)}{2k_B T}\right) \mathrm{d}x\,\mathrm{d}y\,\mathrm{d}z\,\mathrm{d}v_x\,\mathrm{d}v_y\,\mathrm{d}v_z$$
où $A$ est une constante de normalisation. En intégrant sur tout l'espace physique (volume $V$) et sur toutes les vitesses possibles ($\mathbb{R}^3$), la probabilité totale doit être égale à $1$ :
$$\iiint_{\text{espace}} \mathrm{d}^3r \iiint_{\mathbb{R}^3} f(\vec{v})\,\mathrm{d}^3v = 1 \implies V \iiint_{\mathbb{R}^3} f(\vec{v})\,\mathrm{d}^3v = 1$$

La densité de probabilité des vitesses $f(\vec{v})$ vérifie donc :
$$f(\vec{v}) = A' \exp\left(-\frac{m v^2}{2k_B T}\right)$$
avec $\int_{\mathbb{R}^3} f(\vec{v})\,\mathrm{d}^3v = 1$. L'intégrale se sépare en un produit de trois intégrales indépendantes (selon $v_x$, $v_y$, $v_z$) :
$$\int_{-\infty}^{+\infty} \exp\left(-\frac{m v_x^2}{2k_B T}\right) \mathrm{d}v_x = \sqrt{\frac{2\pi k_B T}{m}}$$
Ainsi, par produit des trois composantes :
$$A' \left(\frac{2\pi k_B T}{m}\right)^{3/2} = 1 \implies A' = \left(\frac{m}{2\pi k_B T}\right)^{3/2}$$
Finalement :
$$\boxed{f(\vec{v}) = \left(\frac{m}{2\pi k_B T}\right)^{3/2} \exp\left(-\frac{m v^2}{2k_B T}\right)}$$

---

#### 2. Indépendance des composantes et distribution des normes
a. La fonction de densité de probabilité $f(\vec{v})$ s'écrit comme le produit de trois fonctions ne dépendant chacune que d'une seule composante :
$$f(\vec{v}) = \left[ \left(\frac{m}{2\pi k_B T}\right)^{1/2} e^{-\frac{m v_x^2}{2k_B T}} \right] \times \left[ \left(\frac{m}{2\pi k_B T}\right)^{1/2} e^{-\frac{m v_y^2}{2k_B T}} \right] \times \left[ \left(\frac{m}{2\pi k_B T}\right)^{1/2} e^{-\frac{m v_z^2}{2k_B T}} \right]$$
Par conséquent, $v_x$, $v_y$ et $v_z$ sont des variables aléatoires indépendantes, suivant toutes une **loi normale (gaussienne)** centree d'écart-type $\sigma = \sqrt{\frac{k_B T}{m}}$.

b. En coordonnées sphériques dans l'espace des vitesses, l'élément de volume s'écrit $\mathrm{d}^3v = v^2 \sin\theta \, \mathrm{d}v \, \mathrm{d}\theta \, \mathrm{d}\varphi$. La probabilité que la norme de la vitesse soit comprise entre $v$ et $v + \mathrm{d}v$ s'obtient en intégrant $f(\vec{v})$ sur toutes les orientations angulaires ($\theta \in [0, \pi]$, $\varphi \in [0, 2\pi]$) :
$$F(v)\,\mathrm{d}v = \left( \int_{0}^{\pi} \sin\theta\,\mathrm{d}\theta \int_{0}^{2\pi} \mathrm{d}\varphi \right) f(v) v^2 \mathrm{d}v = 4\pi v^2 f(v)\,\mathrm{d}v$$
En remplaçant $f(v)$ par son expression :
$$\boxed{F(v) = 4\pi \left(\frac{m}{2\pi k_B T}\right)^{3/2} v^2 \exp\left(-\frac{m v^2}{2k_B T}\right)}$$

---

#### 3. Vitesses caractéristiques
Pour les calculs, posons $\alpha = \frac{m}{2\pi k_B T}$ et rappelons les intégrales utiles (obtenues par dérivation sous le signe somme par rapport à $\beta$ avec $\beta = \frac{m}{2k_B T}$) :
* $\int_0^{+\infty} e^{-\beta v^2} \mathrm{d}v = \frac{1}{2}\sqrt{\frac{\pi}{\beta}}$
* $\int_0^{+\infty} v e^{-\beta v^2} \mathrm{d}v = \frac{1}{2\beta}$
* $\int_0^{+\infty} v^2 e^{-\beta v^2} \mathrm{d}v = \frac{1}{4}\sqrt{\frac{\pi}{\beta^3}}$
* $\int_0^{+\infty} v^3 e^{-\beta v^2} \mathrm{d}v = \frac{1}{2\beta^2}$
* $\int_0^{+\infty} v^4 e^{-\beta v^2} \mathrm{d}v = \frac{3}{8}\sqrt{\frac{\pi}{\beta^5}}$

a. **Vitesse la plus probable $v^*$ :**
Elle correspond au maximum de la fonction $F(v)$. Annulons sa dérivée par rapport à $v$ :
$$\frac{\mathrm{d}F}{\mathrm{d}v} \propto \frac{\mathrm{d}}{\mathrm{d}v} \left( v^2 e^{-\beta v^2} \right) = \left( 2v - 2\beta v^3 \right) e^{-\beta v^2} = 0$$
Puisque $v \neq 0$, on en déduit $2 - 2\beta (v^*)^2 = 0$, soit $v^* = \frac{1}{\sqrt{\beta}}$.
$$\boxed{v^* = \sqrt{\frac{2k_B T}{m}}} \quad (\text{en }\text{m}\cdot\text{s}^{-1})$$

b. **Vitesse moyenne $\langle v \rangle$ :**
$$\langle v \rangle = \int_0^{+\infty} v F(v)\,\mathrm{d}v = 4\pi \left(\frac{m}{2\pi k_B T}\right)^{3/2} \int_0^{+\infty} v^3 e^{-\beta v^2} \mathrm{d}v$$
En injectant la valeur de l'intégrale $\frac{1}{2\beta^2}$ :
$$\langle v \rangle = 4\pi \left(\frac{m}{2\pi k_B T}\right)^{3/2} \times \frac{1}{2} \left(\frac{2k_B T}{m}\right)^2 = 4\pi \left(\frac{m}{2\pi k_B T}\right)^{3/2} \times \frac{2 k_B^2 T^2}{m^2}$$
Après simplification :
$$\boxed{\langle v \rangle = \sqrt{\frac{8 k_B T}{\pi m}}} = \sqrt{\frac{8}{\pi}} v^* \approx 1{,}13 \, v^*$$

c. **Vitesse quadratique moyenne $v_{\text{rms}}$ :**
$$v_{\text{rms}}^2 = \langle v^2 \rangle = \int_0^{+\infty} v^2 F(v)\,\mathrm{d}v = 4\pi \left(\frac{m}{2\pi k_B T}\right)^{3/2} \int_0^{+\infty} v^4 e^{-\beta v^2} \mathrm{d}v$$
En utilisant l'intégrale $\frac{3}{8}\sqrt{\frac{\pi}{\beta^3}}$ :
$$\langle v^2 \rangle = 4\pi \left(\frac{m}{2\pi k_B T}\right)^{3/2} \times \frac{3}{8} \sqrt{\pi} \left(\frac{2k_B T}{m}\right)^{3/2} = 4\pi \times \frac{3}{8} \sqrt{\pi} \times \frac{1}{(2\pi)^{3/2}} \left(\frac{2k_B T}{m}\right)^0 = \frac{3 k_B T}{m}$$
D'où :
$$\boxed{v_{\text{rms}} = \sqrt{\frac{3 k_B T}{m}}}$$

---

#### 4. Énergie cinétique moyenne et équipartition
L'énergie cinétique moyenne d'une molécule est :
$$\langle E_c \rangle = \left\langle \frac{1}{2} m v^2 \right\rangle = \frac{1}{2} m \langle v^2 \rangle = \frac{1}{2} m \left(\frac{3 k_B T}{m}\right)$$
$$\boxed{\langle E_c \rangle = \frac{3}{2} k_B T}$$

Pour un ensemble de $N$ molécules indépendantes, l'énergie interne totale $U$ du gaz parfait est :
$$\boxed{U = N \langle E_c \rangle = \frac{3}{2} N k_B T = \frac{3}{2} n R T}$$
Commentaire: * Chaque degré de liberté translationnel (selon $x$, $y$ et $z$, soit $3$ degrés de liberté au total) contribue pour $\frac{1}{2} k_B T$ à l'énergie cinétique moyenne de la molécule. Ce résultat illustre parfaitement le **théorème d'équipartition de l'énergie**.

---

#### 5. Analyse critique du modèle
Le modèle de Maxwell-Boltzmann repose sur la mécanique classique (newtonienne) et l'indépendance statistique des particules. Ses limites de validité sont de deux ordres :
1. **Limite quantique :** La description classique n'est valide que si les fonctions d'onde des particules ne se recouvrent pas significativement. Cela impose que la distance interparticulaire moyenne (d'ordre $n^{-1/3}$ où $n = N/V$) soit très grande devant la **longueur d'onde thermique de de Broglie** $\lambda_{\text{th}} = \frac{h}{\sqrt{2\pi m k_B T}}$. Le critère de validité s'écrit :
   $$n \lambda_{\text{th}}^3 \ll 1$$
   Si cette condition n'est plus vérifiée (faibles températures, fortes pressions), les effets quantiques prédominent et il faut recourir à la statistique quantique (Bose-Einstein ou Fermi-Dirac).
2. **Limite relativiste :** Le modèle utilise l'expression classique de l'énergie cinétique $E_c = \frac{p^2}{2m}$. Si la température est telle que $k_B T$ devient du même ordre de grandeur que l'énergie de masse au repos $mc^2$, les effets de la relativité restreinte doivent être pris en compte.