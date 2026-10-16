---
title: 'Cours : Ondes mécaniques et acoustiques'
description: 'Synthèse de cours, théorèmes et démonstrations.'
---

# Fiche de Cours : Ondes mécaniques et acoustiques (PC)

---

## 1. Introduction et Cinématique des ondes

### Définitions fondamentales
* **Perturbation :** Modification locale et temporaire d'une grandeur physique par rapport à son état d'équilibre.
* **Onde mécanique :** Propagation d'une perturbation dans un milieu matériel, sans transport global de matière, mais avec transport d'énergie.
* **Onde progressive :** Onde qui se propage sans déformation (en l'absence de dispersion et d'atténuation) à partir de sa source.
* **Onde à une dimension (1D) :** Une onde est dite à 1D si la grandeur physique caractéristique ne dépend que d'une seule variable d'espace $x$ et du temps $t$ : $\psi(x,t)$.

### Équation de propagation (Équation d'onde)
Sous certaines hypothèses (milieu linéaire, homogène, isotrope, et pour de faibles perturbations), toute grandeur $\psi(x,t)$ vérifie l'équation aux dérivées partielles d'une onde idéale :
$$\frac{\partial^2 \psi}{\partial x^2} - \frac{1}{c^2} \frac{\partial^2 \psi}{\partial t^2} = 0$$
Où $c$ représente la **célérité** de l'onde dans le milieu (\text{m}\cdot\text{s}^{-1}).

> **Théorème (Forme de d'Alembert) :**
> Toute solution générale de l'équation d'onde 1D s'écrit sous la forme :
> $$\psi(x,t) = f(x - ct) + g(x + ct)$$
> où $f$ représente une onde se propageant dans le sens des $x$ croissants, et $g$ dans le sens des $x$ décroissants.

---

## 2. Ondes harmoniques (ou sinusoïdales)

### Définitions
Une onde harmonique est associée à une source sinusoïdale de pulsation $\omega = 2\pi f$. 
La grandeur s'écrit sous forme complexe :
$$\underline{\psi}(x,t) = \underline{\Psi}_0 \exp\left(j(\omega t \mp kx)\right)$$
* **Vecteur d'onde (ou nombre d'onde) :** $k = \frac{\omega}{c} = \frac{2\pi}{\lambda}$ (\text{rad}\cdot\text{m}^{-1}).
* **Longueur d'onde ($\lambda$) :** Plus petite distance séparant deux points du milieu en phase (\text{m}).
* **Relation de dispersion :** Relation unissant $\omega$ et $k$. Pour un milieu non dispersif, $\omega = c k$.

### Double périodicité
* **Périodicité temporelle :** $T = \frac{2\pi}{\omega}$ (\text{s}).
* **Périodicité spatiale :** $\lambda = \frac{2\pi}{k} = c T$ (\text{m}).

---

## 3. Acoustique dans les fluides (Aproche unidimensionnelle)

### Équations régissant l'acoustique linéaire
On étudie les perturbations autour d'un état de référence au repos (pression $P_0$, masse volumique $\rho_0$, vitesse $\vec{v} = \vec{0}$).
Soit $p(x,t) = P_0 + p'(x,t)$ la pression totale, avec $p'$ la surpression acoustique ($|p'| \ll P_0$).
Soit $v(x,t)$ la vitesse particulaire (faible).

1. **Équation d'Euler linéarisée (conservation de la quantité de mouvement) :**
   $$\rho_0 \frac{\partial v}{\partial t} = -\frac{\partial p'}{\partial x}$$
2. **Équation de conservation de la masse (linéarisée) :**
   $$\frac{\partial \rho'}{\partial t} + \rho_0 \frac{\partial v}{\partial x} = 0$$
3. **Équation d'état (transformation isentropique / adiabatique réversible) :**
   $$p' = c^2 \rho' \quad \text{avec} \quad c = \sqrt{\left(\frac{\partial P}{\partial \rho}\right)_S} = \sqrt{\frac{\gamma P_0}{\rho_0}}$$
   *(Où $\gamma$ est le coefficient adiabatique du gaz, $\gamma = C_p/C_v$).*

### Équation d'onde acoustique
En combinant ces équations, on établit l'équation d'onde pour la surpression $p'$ et la vitesse $v$ :
$$\frac{\partial^2 p'}{\partial x^2} - \frac{1}{c^2} \frac{\partial^2 p'}{\partial t^2} = 0$$

> **Définition (Impédance acoustique caractéristique) :**
> Pour une onde plane progressive se propageant dans un fluide, le rapport de la surpression acoustique sur la vitesse particulaire locale est une constante du milieu, appelée impédance acoustique caractéristique :
> $$Z_c = \frac{p'}{v} = \rho_0 c$$
> *Unités :* \text{Pa}\cdot\text{s}\cdot\text{m}^{-1} ou \text{Rayleigh} (\text{kg}\cdot\text{m}^{-2}\cdot\text{s}^{-1}).

---

## 4. Énergétique des ondes

### Puissance et Intensité acoustique
* **Vecteur de Poynting acoustique (Puissance surfacique) :** $\vec{\Pi} = p' \vec{v}$ (\text{W}\cdot\text{m}^{-2}).
* **Intensité acoustique ($I$) :** Moyenne temporelle de la puissance surfacique :
  $$I = \langle p' v \rangle_t$$
  Pour une onde progressive sinusoïdale 1D :
  $$I = \frac{{p'}_{\text{eff}}^2}{Z_c} = \frac{1}{2} \frac{{p'}_{0}^2}{Z_c}$$

### Niveau d'intensité acoustique
Exprimé en décibels ($\text{dB}$) par rapport à une intensité de référence $I_0 = 10^{-12} \text{ W}\cdot\text{m}^{-2}$ (seuil d'audibilité) :
$$L = 10 \log_{10}\left(\frac{I}{I_0}\right)$$

---

## 5. Réflexion, Transmission et Ondes stationnaires

### Continuité aux interfaces
À l'interface entre deux milieux d'impédances $Z_1$ et $Z_2$ (en $x=0$), il y a continuité de la pression $p'$ et de la vitesse $v$ (donc de $\frac{\partial p'}{\partial x}$).

### Coefficients de réflexion et de transmission en amplitude
* **Coefficient de réflexion en pression ($r$) :**
  $$\underline{r} = \frac{\underline{p}'_r}{\underline{p}'_i} = \frac{Z_2 - Z_1}{Z_2 + Z_1}$$
* **Coefficient de transmission en pression ($t$) :**
  $$\underline{t} = \frac{\underline{p}'_t}{\underline{p}'_i} = \frac{2Z_2}{Z_1 + Z_2}$$

### Ondes stationnaires
Si une onde rencontre une paroi parfaite ($Z_2 \to \infty$, ex: mur rigide), $r = 1$. L'interférence entre l'onde incidente et l'onde réfléchie donne une **onde stationnaire** :
$$\psi(x,t) = 2 A \cos(kx) \cos(\omega t)$$
* **Nœuds d'onde :** points où l'amplitude est constamment nulle ($\cos(kx) = 0$).
* **Ventres d'onde :** points où l'amplitude est maximale ($\cos(kx) = \pm 1$).

---

## 6. Méthodes et Savoir-faire

1. **Établir une équation d'onde :** 
   * Isoler une portion élémentaire de milieu (ex: une tranche de fluide $[x, x+dx]$, ou une corde).
   * Appliquer le PFD (ou les lois de conservation).
   * Linéariser en négligeant les termes d'ordre supérieur (petites perturbations).
   * Identifier le coefficient $c$ sous la forme $\frac{1}{c^2} = \text{terme inertiel} \times \text{terme de rappel}$.
2. **Utiliser la notation complexe :** 
   * Toujours l'utiliser pour les ondes harmoniques afin de simplifier les dérivations spatiales et temporelles ($\partial_t \to j\omega$, $\partial_x \to \mp jk$). Revenir à la partie réelle (ou physique) en fin de calcul si nécessaire.

---

## 7. Pièges à éviter

* **Confusion célérité / vitesse particulaire :** La célérité $c$ est la vitesse de propagation de la *perturbation* (caractéristique du milieu). La vitesse particulaire $v(x,t)$ est la vitesse réelle de déplacement des particules du milieu autour de leur position d'équilibre (souvent très faible devant $c$).
* **Oubli de la référence dans le calcul en décibels :** Ne jamais additionner des décibels directement ($L_1 + L_2 \neq 10 \log(I_1+I_2)$). Il faut toujours repasser par les intensités, additionner les intensités, puis recalculer le niveau global.
* **Conditions aux limites :** Bien identifier si l'on s'intéresse à la pression ou à la vitesse. Un nœud de pression correspond à un ventre de vitesse, et réciproquement.