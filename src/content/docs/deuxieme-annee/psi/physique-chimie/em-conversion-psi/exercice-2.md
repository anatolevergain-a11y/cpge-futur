---
title: 'Exercice 2 : Ondes guidées et bilans'
description: 'Problème d entraînement type concours.'
---

# Concours CPGE (Filière PSI) — Physique-Chimie
## Chapitre : Électromagnétisme et Conversion de puissance
### Thème : Ondes guidées et bilans

---

### Préambule et consignes de l'examinateur

*Ce problème aborde l'étude de la propagation d'ondes électromagnétiques guidées dans une structure simple (guide plan) et le calcul des bilans énergétiques associés. En tant qu'examinateur en PSI, j'attends des candidats :*
1. *Une rigueur absolue dans l'utilisation des équations de Maxwell sous forme locale.*
2. *La capacité à traduire des conditions aux limites physiques en conditions mathématiques sur les champs.*
3. *Un esprit critique aiguisé lors de l'analyse des résultats (coupure, vecteurs de Poynting, ordres de grandeur).*

---

## Énoncé du problème

On considère un guide d'ondes plan, constitué de deux plans conducteurs parfaits infinis situés en $z = 0$ et $z = a$. L'espace entre ces plans ($0 < z < a$) est rempli par un diélectrique parfait de permittivité $\varepsilon$ et de perméabilité $\mu$. Le système est invariant selon les axes $(Ox)$ et $(Oy)$.

L'objectif est d'étudier la propagation d'une onde électromagnétique polarisée transversalement (mode TE - Transverse Électrique) et d'établir le bilan de puissance associé.

---

## Corrigé et guidage pas à pas

### Partie I : Étude des champs et équation de dispersion

**Question 1.** Rappeler les équations de Maxwell locales dans le diélectrique (sans charges ni courants libres). 

*Éléments de correction attendus :*
Dans le milieu ($0 < z < a$), les équations de Maxwell s'écrivent :
$$\text{rot}\ \vec{E} = -\frac{\partial \vec{B}}{\partial t}$$
$$\text{rot}\ \vec{B} = \mu\varepsilon \frac{\partial \vec{E}}{\partial t}$$
$$\text{div}\ \vec{E} = 0$$
$$\text{div}\ \vec{B} = 0$$

---

**Question 2.** On s'intéresse à un mode TE (Transverse Électrique) se propageant selon l'axe $(Ox)$, de pulsation $\omega$ et de vecteur d'onde $\vec{k} = k \vec{u}_x$. Par définition, la composante longitudinale du champ électrique est nulle : $E_z = 0$. De plus, on cherche des champs indépendants de $y$ ($\partial/\partial y = 0$).

En projetant l'équation de Maxwell-Faraday, exprimer les composantes $E_y$, $B_x$ et $B_z$ en fonction d'une seule composante scalaire que l'on choisira judicieusement.

*Éléments de correction attendus :*
Puisque le champ électrique est transversal et selon $(Oy)$ (par choix de polarisation TE), on pose $\vec{E} = E_y(x, z, t)\vec{u}_y$.
En régime harmonique de pulsation $\omega$, les champs s'écrivent sous la forme complexe sous-jacente ou directement avec la dépendance en $e^{j(\omega t - kx)}$.
Calculons le rotationnel de $\vec{E}$ :
$$\text{rot}\ \vec{E} = \begin{vmatrix} \vec{u}_x & \vec{u}_y & \vec{u}_z \\ \partial_x & 0 & \partial_z \\ 0 & E_y & 0 \end{vmatrix} = -\partial_z E_y \vec{u}_x + \partial_x E_y \vec{u}_z$$

D'après Maxwell-Faraday ($\text{rot}\ \vec{E} = -j\omega \vec{B}$ en régime harmonique) :
* $B_x = -\frac{1}{j\omega} \frac{\partial E_y}{\partial z}$
* $B_z = \frac{1}{j\omega} \frac{\partial E_y}{\partial x}$

Toutes les composantes des champs se déduisent donc de la connaissance unique de $E_y(x,z,t)$.

---

**Question 3.** En combinant les équations de Maxwell, établir l'équation aux dérivées partielles vérifiée par $E_y(x,z,t)$.

*Éléments de correction attendus :*
On applique l'opération $\text{rot}$ à l'équation de Maxwell-Faraday :
$$\text{rot}(\text{rot}\ \vec{E}) = \text{grad}(\text{div}\ \vec{E}) - \Delta \vec{E} = -\frac{\partial}{\partial t}(\text{rot}\ \vec{B})$$
Comme $\text{div}\ \vec{E} = 0$ et en injectant Maxwell-Ampère ($\text{rot}\ \vec{B} = \mu\varepsilon \frac{\partial \vec{E}}{\partial t}$), il vient l'équation de d'Alembert vectorielle :
$$\Delta \vec{E} - \mu\varepsilon \frac{\partial^2 \vec{E}}{\partial t^2} = \vec{0}$$

Pour la composante $E_y$, cela se traduit par l'équation scalaire :
$$\frac{\partial^2 E_y}{\partial x^2} + \frac{\partial^2 E_y}{\partial z^2} - \mu\varepsilon \frac{\partial^2 E_y}{\partial t^2} = 0$$

---

**Question 4.** On cherche une solution sous la forme d'une onde progressive harmonique se propageant selon $(Ox)$ :
$$E_y(x, z, t) = Y(z) e^{j(\omega t - kx)}$$
Montrer que $Y(z)$ vérifie une équation différentielle simple que l'on mettra sous la forme :
$$\frac{\mathrm{d}^2 Y}{\mathrm{d}z^2} + K^2 Y = 0$$
en exprimant $K^2$ en fonction de $\omega$, $k$ et de la celerité des ondes dans le diélectrique $c = 1/\sqrt{\mu\varepsilon}$.

*Éléments de correction attendus :*
On injecte la forme recherchée dans l'équation de d'Alembert :
$$\frac{\partial^2}{\partial x^2}\left[Y(z)e^{j(\omega t - kx)}\right] + \frac{\partial^2}{\partial z^2}\left[Y(z)e^{j(\omega t - kx)}\right] - \mu\varepsilon \frac{\partial^2}{\partial t^2}\left[Y(z)e^{j(\omega t - kx)}\right] = 0$$
$$\implies (-k^2) Y(z) + \frac{\mathrm{d}^2 Y}{\mathrm{d}z^2} - \mu\varepsilon (-\omega^2) Y(z) = 0$$
$$\implies \frac{\mathrm{d}^2 Y}{\mathrm{d}z^2} + \left(\omega^2 \mu\varepsilon - k^2\right) Y(z) = 0$$

En posant $K^2 = \omega^2 \mu\varepsilon - k^2 = \frac{\omega^2}{c^2} - k^2$, on obtient bien :
$$\frac{\mathrm{d}^2 Y}{\mathrm{d}z^2} + K^2 Y = 0$$

---

**Question 5.** Énoncer les conditions aux limites pour le champ électrique tangentiel à la surface des conducteurs parfaits ($z = 0$ et $z = a$). En déduire l'expression générale de $Y(z)$ et la quantification de $K$ (modes du guide).

*Éléments de correction attendus :*
Le champ électrique tangentiel à la surface d'un conducteur parfait doit être nul. Les plans étant situés à $z = 0$ et $z = a$ et le champ tangentiel étant $E_y$, on a :
* $E_y(x, 0, t) = 0 \implies Y(0) = 0$
* $E_y(x, a, t) = 0 \implies Y(a) = 0$

La solution générale de l'équation différentielle (avec $K^2 > 0$ pour avoir une variation transversale oscillante) est :
$$Y(z) = A \cos(Kz) + B \sin(Kz)$$
* $Y(0) = 0 \implies A = 0$
* $Y(a) = 0 \implies B \sin(Ka) = 0$

Pour une solution non triviale ($B \neq 0$), il faut que :
$$Ka = n\pi \quad \text{avec} \quad n \in \mathbb{N}^*$$

Ainsi, la constante transversale est quantifiée : $K_n = \frac{n\pi}{a}$.

---

**Question 6.** En déduire l'**relation de dispersion** du guide d'ondes pour un mode $n$ donné. Définir la pulsation de coupure $\omega_c$ du mode $n$.

*Éléments de correction attendus :*
En remplaçant $K_n$ dans l'expression de $K^2$:
$$K_n^2 = \left(\frac{n\pi}{a}\right)^2 = \frac{\omega^2}{c^2} - k_n^2$$
$$\implies k_n^2 = \frac{\omega^2}{c^2} - \left(\frac{n\pi}{a}\right)^2$$
$$\implies k_n(\omega) = \sqrt{\frac{\omega^2}{c^2} - \left(\frac{n\pi}{a}\right)^2}$$

La **pulsation de coupure** $\omega_c$ correspond à la limite où le vecteur d'onde longitudinal $k_nateur$ s'annule ($k_n \to 0$) :
$$\omega_c = \frac{n\pi c}{a}$$

L'relation de dispersion s'écrit alors sous la forme canonique :
$$k_n(\omega) = \frac{n\pi}{a} \sqrt{\left(\frac{\omega}{\omega_c}\right)^2 - 1}$$

---

### Partie II : Bilan énergétique et vecteur de Poynting

**Question 7.** Exprimer le vecteur de Poynting $\vec{\Pi}$ du champ électromagnétique dans le guide. Calculer sa composante moyenne selon l'axe de propagation $(Ox)$, notée $\langle \Pi_x \rangle$, pour un mode $n$ réel (c'est-à-dire $\omega > \omega_c$).

*Rappel utile :* Pour deux grands $A$ et $B$ complexes associés à des grandeurs réelles $\underline{A}e^{j\omega t}$ et $\underline{B}e^{j\omega t}$, la moyenne temporelle du produit est $\frac{1}{2}\text{Re}(\underline{A}\ \underline{B}^*)$.

*Éléments de correction attendus :*
Le vecteur de Poynting est défini par $\vec{\Pi} = \frac{1}{\mu} \vec{E} \land \vec{B}$.
La composante selon $Ox$ est $\Pi_x = \frac{1}{\mu} (E_y B_z - E_z B_y)$. Comme $E_z = 0$ :
$$\Pi_x = \frac{1}{\mu} E_y B_z$$

Exprimons les amplitudes complexes associées :
* $\underline{E}_y(x,z) = E_0 \sin\left(\frac{n\pi z}{a}\right) e^{-j k_n x}$
* D'après la question 2, $\underline{B}_z = \frac{1}{j\omega} \frac{\partial \underline{E}_y}{\partial x} = \frac{-j k_n}{j\omega} \underline{E}_y = -\frac{k_n}{\omega} \underline{E}_y$

La moyenne temporelle de $\Pi_x$ est donc :
$$\langle \Pi_x \rangle = \frac{1}{2} \text{Re}\left( \frac{1}{\mu} \underline{E}_y \underline{B}_z^* \right)$$
$$\langle \Pi_x \rangle = \frac{1}{2\mu} \text{Re}\left( \underline{E}_y \left( -\frac{k_n}{\omega} \underline{E}_y^* \right) \right) = \frac{k_n}{2\mu\omega} |\underline{E}_y|^2$$

En remplaçant $|\underline{E}_y|^2$ :
$$\langle \Pi_x \rangle = \frac{k_n E_0^2}{2\mu\omega} \sin^2\left(\frac{n\pi z}{a}\right)$$

---

**Question 8.** Calculer la puissance moyenne totale $\langle P \rangle$ transportée par le guide par unité de longueur selon l'axe $(Oy)$. 

*Éléments de correction attendus :*
La puissance moyenne traversant une section transversale du guide (de $z = 0$ à $z = a$, et de longueur unité selon $y$) s'obtient en intégrant la composante $\langle \Pi_x \rangle$ sur la section :
$$\langle P \rangle = \int_{0}^{a} \langle \Pi_x \rangle \mathrm{d}z = \frac{k_n E_0^2}{2\mu\omega} \int_{0}^{a} \sin^2\left(\frac{n\pi z}{a}\right) \mathrm{d}z$$

On sait que $\int_{0}^{a} \sin^2\left(\frac{n\pi z}{a}\right) \mathrm{d}z = \frac{a}{2}$. D'où :
$$\langle P \rangle = \frac{a k_n E_0^2}{4\mu\omega}$$

---

### Analyse critique et synthèse de l'examinateur

* **Comportement aux limites :** Le fait que $E_y$ s'annule en $z=0$ et $z=a$ traduit parfaitement la condition aux limites d'un conducteur parfait (pas de champ électrique tangentiel). C'est la brique fondamentale qui quantifie l'espace transversal et donne naissance aux modes discrets.
* **Fréquence de coupure :** Si $\omega < \omega_c$, alors $k_n$ devient imaginaire pur ($k_n = j \alpha$). Le terme d'onde $e^{-j k_n x}$ se transforme en $e^{\alpha x}$ ou $e^{-\alpha x}$ : l'onde est évanescente, elle ne se propage pas. C'est un résultat physique crucial en télécommunications et hyperfréquences (le guide agit comme un filtre passe-haut).
* **Vitesse de groupe vs Vitesse de phase :** 
  * La vitesse de phase est $v_\phi = \frac{\omega}{k_n} = \frac{c}{\sqrt{1 - (\omega_c/\omega)^2}} > c$. Cela ne contredit pas la relativité car l'information est transportée par la **vitesse de groupe** $v_g = \frac{\partial \omega}{\partial k_n} = c \sqrt{1 - (\omega_c/\omega)^2} < c$. 
  * On vérifie élégamment que $v_\phi v_g = c^2$, une relation classique des milieux dispersifs guidés.