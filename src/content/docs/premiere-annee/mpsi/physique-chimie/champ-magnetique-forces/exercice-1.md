---
title: 'Exercice 1 : Mouvement d une particule chargée dans un champ B uniforme'
description: 'Problème corrigé type concours.'
---

### 🌐 Énoncé du problème / Cadre d'étude

On considère une particule de masse $m$ et de charge électrique $q$ (avec $q > 0$), injectée dans une région de l'espace où règne un champ magnétique uniforme et stationnaire $\vec{B} = B_0 \vec{e}_z$, exprimé dans un référentiel galiléen muni du repère cartésien orthonormal direct $(O, \vec{e}_x, \vec{e}_y, \vec{e}_z)$. 

On négligera l'action de la pesanteur devant la force magnétique. L'objectif de ce problème est d'analyser la cinématique et la dynamique de cette particule selon les conditions initiales, de mettre en évidence le phénomène de cyclotron, et de déterminer l'effet d'une force de frottement fluide de type $\vec{f} = -h \vec{v}$ (où $h > 0$ est une constante de frottement).

### ❓ Questions progressives

1. **Rappel de la loi fondamentale de la dynamique :** Exprimer la force de Lorentz $\vec{F}$ s'exerçant sur la particule de vitesse $\vec{v}$. Établir l'équation différentielle vectorielle régissant le mouvement de la particule dans le champ $\vec{B}$.
2. **Analyse énergétique :** En calculant la puissance de la force magnétique, déterminer la nature du mouvement de la particule quant à sa norme de vitesse et à son énergie cinétique.
3. **Projection dans le plan $(Oxy)$ sans frottement :** En posant $\omega_c = \frac{q B_0}{m}$ (pulsation cyclotron), écrire le système d'équations différentielles couplées pour les composantes $v_x(t)$ et $v_y(t)$ de la vitesse.
4. **Résolution par nombre complexe :** On introduit la vitesse complexe $V(t) = v_x(t) + i v_y(t)$. 
   - a) Établir l'équation différentielle du premier ordre satisfaite par $V(t)$.
   - b) En déduire l'expression générale de $V(t)$ en fonction de la vitesse initiale complexe $V_0 = v_{x0} + i v_{y0}$ et de $\omega_c$.
   - c) Par intégration temporelle, déterminer les coordonnées de position $x(t)$ et $y(t)$ en supposant la particule initialement en $O$ avec une vitesse $\vec{v}_0 = v_{0} \vec{e}_x$. Préciser la nature géométrique de la trajectoire projetée.
5. **Introduction d'un amortissement fluide :** On suppose désormais que la particule subit également une force de frottement $\vec{f} = -h \vec{v}$.
   - a) Réécrire l'équation différentielle pour la vitesse complexe $V(t)$ en tenant compte de ce terme de frottement. On posera $\tau = \frac{m}{h}$.
   - b) Intégrer cette équation pour obtenir $V(t)$ avec la condition initiale $V(0) = V_0$.
   - c) Discuter qualitativement de l'allure de la trajectoire dans le plan $(Oxy)$.

---

### 💡 Pistes & Indications méthodologiques

* **Question 1 :** Utilisez l'expression générale de la force de Lorentz $\vec{F} = q(\vec{E} + \vec{v} \wedge \vec{B})$ en posant $\vec{E} = \vec{0}$. Appliquez ensuite le principe fondamental de la dynamique (PFD) dans un référentiel galiléen.
* **Question 2 :** Calculez le produit scalaire $\vec{F} \cdot \vec{v}$ et rappelez le théorème de l'énergie cinétique.
* **Question 3 & 4 :** Développez le produit vectoriel $\vec{v} \wedge \vec{B}$ en coordonnées cartésiennes. L'utilisation de la variable complexe $V(t) = v_x + i v_y$ permet de découpler les équations et de se ramener à une équation différentielle linéaire à coefficients constants très simple à résoudre.
* **Question 5 :** Linéarisez l'équation avec la même méthode des nombres complexes en ajoutant le terme d'amortissement linéaire $- \frac{1}{\tau} V(t)$.

---

### 📋 Corrigé détaillé et vérification des résultats

#### 1. Équation du mouvement
La particule de charge $q$ et de vitesse $\vec{v}$ dans le champ magnétique $\vec{B} = B_0 \vec{e}_z$ est soumise à la force de Lorentz :
$$\vec{F} = q (\vec{v} \wedge \vec{B})$$

Dans le référentiel galiléen supposé, le PFD s'écrit :
$$m \frac{d\vec{v}}{dt} = q (\vec{v} \wedge \vec{B})$$

Exprimons le produit vectoriel avec $\vec{v} = v_x \vec{e}_x + v_y \vec{e}_y + v_z \vec{e}_z$ et $\vec{B} = B_0 \vec{e}_z$ :
$$\vec{v} \wedge \vec{B} = \begin{pmatrix} v_x \\ v_y \\ v_z \end{pmatrix} \wedge \begin{pmatrix} 0 \\ 0 \\ B_0 \end{pmatrix} = \begin{pmatrix} v_y B_0 \\ -v_x B_0 \\ 0 \end{pmatrix}$$

L'équation vectorielle se projette selon les trois axes cartésiens :
$$\begin{cases}
m \frac{dv_x}{dt} = q B_0 v_y \\
m \frac{dv_y}{dt} = -q B_0 v_x \\
m \frac{dv_z}{dt} = 0
\end{cases}$$

#### 2. Analyse énergétique
Calculons la puissance $P$ de la force magnétique :
$$P = \vec{F} \cdot \vec{v} = q (\vec{v} \wedge \vec{B}) \cdot \vec{v} = 0$$
(car le vecteur $\vec{v} \wedge \vec{B}$ est orthogonal à $\vec{v}$).

D'après le théorème de l'énergie cinétique :
$$\frac{dE_c}{dt} = P = 0 \implies E_c = \text{cte} \implies \|\vec{v}\| = \text{cte}$$
La norme de la vitesse est constante au cours du temps.

#### 3. Système d'équations dans le plan $(Oxy)$
En posant la pulsation cyclotron $\omega_c = \frac{q B_0}{m}$, le système se réduit à :
$$\begin{cases}
\frac{dv_x}{dt} = \omega_c v_y \\
\frac{dv_y}{dt} = -\omega_c v_x \\
\frac{dv_z}{dt} = 0 \implies v_z(t) = v_{z0} = \text{cte}
\end{cases}$$
*(Vérification dimensionnelle : $[\omega_c] = \frac{[q][B_0]}{[m]} = \frac{\text{C} \cdot \text{T}}{\text{kg}} = \frac{\text{A}\cdot\text{s} \cdot (\text{kg}\cdot\text{s}^{-2}\cdot\text{A}^{-1})}{\text{kg}} = \text{s}^{-1}$. Homogène à une pulsation.)*

#### 4. Résolution par la méthode complexe
* **a) Équation différentielle pour $V(t)$ :**
  Posons $V(t) = v_x(t) + i v_y(t)$.
  $$\frac{dV}{dt} = \frac{dv_x}{dt} + i \frac{dv_y}{dt} = \omega_c v_y + i (-\omega_c v_x) = -i \omega_c (v_x + i v_y) = -i \omega_c V(t)$$
  Soit l'équation différentielle :
  $$\frac{dV}{dt} + i \omega_c V = 0$$

* **b) Expression générale de $V(t)$ :**
  La solution générale de cette équation linéaire du premier ordre est :
  $$V(t) = V_0 e^{-i \omega_c t}$$
  où $V_0 = v_{x0} + i v_{y0}$ est la vitesse complexe initiale.

* **c) Coordonnées de position et trajectoire :**
  Avec les conditions initiales $\vec{v}(0) = v_0 \vec{e}_x$, on a $V_0 = v_0$. Par conséquent :
  $$V(t) = v_0 e^{-i \omega_c t} = v_0 \cos(\omega_c t) - i v_0 \sin(\omega_c t)$$
  Par identification :
  $$\begin{cases}
  v_x(t) = v_0 \cos(\omega_c t) \\
  v_y(t) = -v_0 \sin(\omega_c t)
  \end{cases}$$

  En intégrant par rapport au temps en supposant la particule initialement en $O(0,0,0)$ :
  $$x(t) = \int_0^t v_x(u) du = \frac{v_0}{\omega_c} \sin(\omega_c t)$$
  $$y(t) = \int_0^t v_y(u) du = \frac{v_0}{\omega_c} (\cos(\omega_c t) - 1)$$
  
  Mettons ces équations sous une forme géométrique cartésienne pour le plan $(Oxy)$ :
  $$x^2 + \left(y + \frac{v_0}{\omega_c}\right)^2 = \frac{v_0^2}{\omega_c^2} \left[\sin^2(\omega_c t) + \cos^2(\omega_c t)\right] = \frac{v_0^2}{\omega_c^2}$$
  Il s'agit de l'équation d'un cercle de rayon $R = \frac{v_0}{\omega_c}$ (rayon de Larmor) et de centre de coordonnées $\left(0, -\frac{v_0}{\omega_c}\right)$. La trajectoire est donc hélicoïdale (cercle dans le plan $(Oxy)$ combiné à un mouvement rectiligne uniforme selon $z$).

#### 5. Prise en compte du frottement fluide
* **a) Équation différentielle avec frottement :**
  Le PFD s'écrit désormais :
  $$m \frac{d\vec{v}}{dt} = q (\vec{v} \wedge \vec{B}) - h \vec{v}$$
  En projetant et en passant à la variable complexe $V(t) = v_x(t) + i v_y(t)$ avec $\tau = \frac{m}{h}$ :
  $$\frac{dV}{dt} = -i \omega_c V - \frac{1}{\tau} V \implies \frac{dV}{dt} + \left(\frac{1}{\tau} + i \omega_c\right) V = 0$$

* **b) Intégration de l'équation :**
  La solution de cette équation avec la condition initiale $V(0) = V_0$ est :
  $$V(t) = V_0 \exp\left(-\left(\frac{1}{\tau} + i \omega_c\right)t\right) = V_0 e^{-t/\tau} e^{-i \omega_c t}$$

* **c) Discussion qualitative :**
  Le terme $e^{-t/\tau}$ représente un facteur d'amortissement exponentiel en amplitude. La vitesse de la particule décroît vers zéro en raison de la dissipation d'énergie due au frottement fluide. La trajectoire dans le plan $(Oxy)$ est une **spirale** dont le rayon diminue au cours du temps pour tendre asymptotiquement vers un point d'arrêt.