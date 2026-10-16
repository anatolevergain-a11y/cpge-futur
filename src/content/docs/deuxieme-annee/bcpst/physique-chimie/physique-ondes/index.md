---
title: 'Cours : Physique des ondes'
description: 'Synthèse de cours, théorèmes et démonstrations.'
---

# Physique des ondes — Fiche de cours (CPGE BCPST2)

---

## I. Introduction et formalismes généraux

### 1. Définitions fondamentales
*   **Perturbation :** Modification locale et temporelle d'une grandeur physique par rapport à son état d'équilibre.
*   **Onde :** Propagation d'une perturbation dans un milieu matériel ou dans le vide, s'accompagnant d'un transfert d'énergie sans transport de matière.
*   **Onde progressive à une dimension ($1D$) :** Grandeur physique $s(x,t)$ (ex: élongation, pression, champ électromagnétique) satisfaisant l'équation de propagation.

### 2. Équation d'onde (ou équation de d'Alembert)
Dans un milieu homogène, isotrope et non dispersif, toute grandeur $s(x,t)$ associée à une onde plane progressive se propageant à la célérité $c$ vérifie l'équation aux dérivées partielles (EDP) linéaire homogène :

$$\frac{\partial^2 s}{\partial x^2} - \frac{1}{c^2}\frac{\partial^2 s}{\partial t^2} = 0$$

*Démonstration (Cas de la corde vibrante idéale) :*
Considérons une corde élastique tendue de masse linéique $\mu$ soumise à une tension horizontale $T$. Pour un petit déplacement $s(x,t)$ transverse, la relation fondamentale de la dynamique appliquée à un petit élément de corde $dx$ entre $x$ et $x+dx$ donne, selon l'axe vertical :
$$T \left[ \left.\frac{\partial s}{\partial x}\right|_{x+dx} - \left.\frac{\partial s}{\partial x}\right|_x \right] = (\mu dx) \frac{\partial^2 s}{\partial t^2}$$
En effectuant un développement limité à l'ordre 1 :
$$T \frac{\partial^2 s}{\partial x^2} dx = \mu dx \frac{\partial^2 s}{\partial t^2} \implies \frac{\partial^2 s}{\partial x^2} - \frac{\mu}{T}\frac{\partial^2 s}{\partial t^2} = 0$$
On identifie la célérité $c = \sqrt{\frac{T}{\mu}}$ (exprimée en $\text{m}\cdot\text{s}^{-1}$).

### 3. Solution générale de d'Alembert
La solution générale de l'équation de d'Alembert en $1D$ s'écrit sous la forme :
$$s(x,t) = f(x - ct) + g(x + ct)$$
*   $f(x - ct)$ représente une onde progressive se propageant dans le **sens des $x$ croissants**.
*   $g(x + ct)$ représente une onde progressive se propageant dans le **sens des $x$ décroissants**.

---

## II. Ondes harmoniques (ou monochromatiques)

### 1. Définitions et notations complexes
Une onde harmonique est une perturbation sinusoïdale de pulsation $\omega$ (en $\text{rad}\cdot\text{s}^{-1}$) et de période temporelle $T = \frac{2\pi}{\omega}$ (en $\text{s}$).

*   **Périodicité spatiale (Longueur d'onde $\lambda$) :** $\lambda = c T = \frac{2\pi c}{\omega}$ (en $\text{m}$).
*   **Vecteur d'onde $k$ :** $k = \frac{2\pi}{\lambda} = \frac{\omega}{c}$ (en $\text{rad}\cdot\text{m}^{-1}$).

La notation complexe associée à une onde plane progressive harmonique (OPPH) se propageant selon les $x$ croissants est :
$$\underline{s}(x,t) = \underline{S}_0 \exp\left(j(\omega t - kx)\right)$$
où $\underline{S}_0 = S_0 e^{j\varphi}$ est l'amplitude complexe de l'onde. La grandeur physique réelle est obtenue par :
$$s(x,t) = \text{Re}\left(\underline{s}(x,t)\right)$$

### 2. Relation de dispersion
La relation de dispersion est une relation liant la pulsation $\omega$ (ou la fréquence $f$) au vecteur d'onde $k$ (ou à la longueur d'onde $\lambda$).
*   **Milieu non dispersif :** $\omega = c \cdot k$ (la célérité de phase $v_\varphi = \frac{\omega}{k} = c$ est indépendante de $\omega$).
*   **Milieu dispersif :** $\omega = \omega(k)$ (la vitesse de phase $v_\varphi$ dépend de $\omega$).

---

## III. Phénomènes ondulatoires fondamentaux

### 1. Interférences
*   **Principe de superposition :** Si deux ondes $\underline{s}_1$ et $\underline{s}_2$ se superposent en un point $M$, l'onde résultante est $\underline{s} = \underline{s}_1 + \underline{s}_2$.
*   **Interférences constructives :** L'intensité est maximale, $\Delta \Phi = 2k\pi$ ($k \in \mathbb{Z}$).
*   **Interférences destructives :** L'intensité est minimale (voire nulle si les amplitudes sont égales), $\Delta \Phi = (2k+1)\pi$ ($k \in \mathbb{Z}$).

### 2. Diffraction
Phénomène par lequel une onde est modifiée lorsqu'elle rencontre un obstable ou une ouverture de dimension comparable à sa longueur d'onde $\lambda$. Il n'y a pas modification de la fréquence.
*   *Exemple (Ouverture de largeur $a$) :* Demi-angle de diffraction $\theta \approx \frac{\lambda}{a}$.

### 3. Ondes stationnaires
Résultent de la superposition de deux ondes progressives de même amplitude et de même fréquence se propageant en sens contraires.
$$\underline{s}(x,t) = 2 S_0 \sin(kx) \sin(\omega t + \varphi')$$
*   **Nœuds de vibration :** Points où l'amplitude est constamment nulle ($\sin(kx) = 0 \implies x = n \frac{\lambda}{2}$).
*   **Ventres de vibration :** Points où l'amplitude est maximale ($\sin(kx) = \pm 1$).

---

## IV. Application en biologie et géosciences (Contexte BCPST)

*   **Acoustique / Ondes sonores dans les fluides :** Les ondes acoustiques sont des ondes longitudinales de surpression $\delta P(x,t)$. La célérité du son dans un fluide est donnée par $c = \frac{1}{\sqrt{\chi_s \rho_0}}$ (avec $\chi_s$ la compressibilité isentropique et $\rho_0$ la masse volumique au repos).
*   **Ondes sismiques (Géologie) :** Propagation d'ondes élastiques dans la Terre.
    *   *Ondes P (Primaires) :* Ondes de compression (longitudinales), les plus rapides.
    *   *Ondes S (Secondaires) :* Ondes de cisaillement (transverses), ne se propagent pas dans les fluides.

---

## V. Méthodes et Savoir-faire

1.  **Vérifier qu'une fonction est solution de l'équation d'onde :**
    *   Calculer les dérivées partielles secondes $\frac{\partial^2 s}{\partial x^2}$ et $\frac{\partial^2 s}{\partial t^2}$.
    *   Remplacer dans l'équation de d'Alembert et vérifier l'égalité à zéro.
2.  **Passer du réel au complexe et inversement :**
    *   Toujours effectuer les calculs (atténuation, superposition, impédance) en notation complexe, puis extraire la partie réelle à la fin pour l'interprétation physique.

---

## VI. Pièges à éviter (Attention !)

*   **Attention aux dimensions :** Dans l'expression $\cos(\omega t - kx)$, l'argument du cosinus doit impérativement être sans dimension. Vérifiez que $[\omega] = T^{-1}$, $[t] = T$, $[k] = L^{-1}$, $[x] = L$.
*   **Confondre vitesse de phase et vitesse de groupe :** En BCPST, bien retenir que la célérité $c$ dans l'équation de d'Alembert est la vitesse de phase $v_\varphi = \frac{\omega}{k}$. Dans un milieu dispersif, l'énergie se propage à la vitesse de groupe $v_g = \frac{d\omega}{dk}$, ce qui n'est pas $c$.
*   **Oubli de la nature du milieu :** Une onde électromagnétique se propage dans le vide à $c \approx 3 \cdot 10^8 \, \text{m}\cdot\text{s}^{-1}$, mais sa vitesse diminue dans un milieu diélectrique d'indice optique $n > 1$ ($v = \frac{c}{n}$).