---
title: 'Exercice 2 : Transferts thermiques par conduction'
description: 'Problème d entraînement type concours pour MPI.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Le problème s'intéresse à la modélisation thermique d'un barreau cylindrique métallique (ou gaine de combustible nucléaire simplifiée), de rayon $R$, de longueur $L$ (avec $L \gg R$, ce qui permet de négliger les effets de bords selon l'axe) et de conductivité thermique $\lambda$ supposée constante. Ce barreau est le siège d'une source volumique de chaleur uniforme $\mathcal{P}_0$ (en $\text{W}\cdot\text{m}^{-3}$) due à des réactions de désintégration ou à l'effet Joule.

Le système est en régime permanent. La surface extérieure du cylindre (en $r = R$) est maintenue à une température constante $T_0$ par un fluide thermostaté. 

L'objectif de ce problème est de déterminer le profil de température au sein du barreau, d'analyser le flux thermique échangé avec l'extérieur, et d'évaluer les limites du modèle stationnaire face à une variation temporelle de la puissance interne.

---

### ❓ Questions progressives (incluant une analyse critique du modèle)

1. **Bilan thermique et équation locale**
   À l'aide d'un bilan d'énergie sur une coquille cylindrique élémentaire comprise entre $r$ et $r + \text{d}r$, ou par application directe de la loi de Fourier et du premier principe, établir l'équation différentielle régissant la température $T(r)$ en régime permanent. On exprimera cette équation en coordonnées cylindriques, en exploitant les symétries du problème.

2. **Résolution du profil de température**
   Intégrer cette équation différentielle en tenant compte des conditions aux limites physiques adaptées. Exprimer la température $T(r)$ en fonction de $r$, $R$, $T_0$, $\lambda$ et $\mathcal{P}_0$.
   *Application numérique :* Calculer la température maximale au centre du barreau $T(0)$ pour $\mathcal{P}_0 = 1,0 \times 10^7\text{ W}\cdot\text{m}^{-3}$, $R = 1,0\text{ cm}$, $\lambda = 20\text{ W}\cdot\text{m}^{-1}\cdot\text{K}^{-1}$ et $T_0 = 300\text{ K}$.

3. **Flux thermique et résistance thermique équivalente**
   Déterminer l'expression du vecteur densité de courant thermique $\vec{j}_{\text{th}}(r)$ dans le barreau. En déduire le flux thermique total $\Phi_{\text{th}}$ traversant la surface de la gaine ($r = R$) par unité de longueur. Définir une résistance thermique linéique $R_{\text{th, lin}}$ du cylindre.

4. **Analyse critique et régime transitoire (amorce)**
   On suppose à présent que la source de puissance subit une modulation temporelle sinusoïdale autour de sa valeur moyenne : $\mathcal{P}(t) = \mathcal{P}_0 + \Delta \mathcal{P} \cos(\omega t)$.
   * a) Établir l'équation aux dérivées partielles régissant $T(r,t)$ en tenant compte de la capacité thermique volumique $C_{\text{p}} = \rho c$ du matériau ($\rho$ étant la masse volumique et $c$ la capacité thermique massique).
   * b) Introduire une grandeur caractéristique de temps de diffusion thermique $\tau_{\text{diff}}$ à travers le rayon $R$. Proposer un critère qualitatif permettant de justifier l'approximation du régime stationnaire étudiée aux questions précédentes.

---

### 💡 Pistes & Indications méthodologiques

* **Question 1 :** Pensez à identifier les invariances du système (par rapport à l'angle $\theta$ et à la hauteur $z$) pour simplifier l'opérateur laplacien ou pour poser correctement le bilan sur un volume élémentaire $\text{d}\tau = 2\pi r L \text{d}r$.
* **Question 2 :** Une double integration successive est nécessaire. La régularité de la température au centre ($r=0$) fournit une condition limite incontournable.
* **Question 3 :** Le flux thermique à travers une surface cylindrique de rayon $r$ et de longueur $L$ s'exprime par le flux du vecteur $\vec{j}_{\text{th}}$.
* **Question 4 :** Pour l'analyse dimensionnelle, relier la longueur caractéristique $R$, la conductivité $\lambda$ et la capacité thermique volumique $C_{\text{p}}$ pour former un temps caractéristique.

---

### 📋 Corrigé détaillé pas à pas

#### 1. Bilan thermique et équation locale
Par symétrie cylindrique et en raison du caractère infiniment long du barreau ($L \gg R$), le champ de température ne dépend que de la distance radiale $r$ : $T = T(r)$.

Considérons une coquille cylindrique de rayon $r$, d'épaisseur $\text{d}r$ et de longueur $L$. Le premier principe de la thermodynamique appliqué à ce système en régime permanent s'écrit :
$$\Phi_{\text{th}}(r) - \Phi_{\text{th}}(r+\text{d}r) + \mathcal{P}_0 \cdot (\mathcal{V}_{\text{coquille}}) = 0$$
avec $\mathcal{V}_{\text{coquille}} = 2\pi r L \text{d}r$.

Par définition, le flux thermique s'exprime via la loi de Fourier $\vec{j}_{\text{th}} = -\lambda \vec{\text{grad}} T$, soit selon la direction radiale :
$$j_{\text{th}}(r) = -\lambda \frac{\text{d}T}{\text{d}r}$$
Le flux traversant la surface cylindrique de rayon $r$ et de longueur $L$ est :
$$\Phi_{\text{th}}(r) = j_{\text{th}}(r) \times 2\pi r L = -2\pi r L \lambda \frac{\text{d}T}{\text{d}r}$$

En effectuant un développement limité au premier ordre :
$$\Phi_{\text{th}}(r+\text{d}r) = \Phi_{\text{th}}(r) + \frac{\text{d}\Phi_{\text{th}}}{\text{d}r} \text{d}r$$
L'équation de bilan devient :
$$-\frac{\text{d}\Phi_{\text{th}}}{\text{d}r} \text{d}r + \mathcal{P}_0 (2\pi r L \text{d}r) = 0 \implies \frac{1}{r} \frac{\text{d}}{\text{d}r}\left( r \frac{\text{d}T}{\text{d}r} \right) + \frac{\mathcal{P}_0}{\lambda} = 0$$
C'est l'équation différentielle recherchée (qui correspond à l'équation de la chaleur stationnaire avec source $\Delta T + \frac{\mathcal{P}_0}{\lambda} = 0$ en coordonnées cylindriques).

---

#### 2. Résolution du profil de température
Intégrons une première fois l'équation par rapport à $r$ :
$$r \frac{\text{d}T}{\text{d}r} = -\frac{\mathcal{P}_0}{2\lambda} r^2 + A$$
où $A$ est une constante d'intégration. En divisant par $r$ (pour $r \neq 0$) :
$$\frac{\text{d}T}{\text{d}r} = -\frac{\mathcal{P}_0}{2\lambda} r + \frac{A}{r}$$
La température physique au centre du cylindre ($r=0$) doit être finie (pas de singularité de type puits ou source infinie de température). Or, le terme $\frac{A}{r}$ diverge en $0$ si $A \neq 0$. Par conséquent, **$A = 0$**.

Intégrons une seconde fois :
$$T(r) = -\frac{\mathcal{P}_0}{4\lambda} r^2 + B$$
où $B$ est une nouvelle constante d'intégration. Utilisons la condition aux limites à la surface $r = R$ : $T(R) = T_0$.
$$T_0 = -\frac{\mathcal{P}_0}{4\lambda} R^2 + B \implies B = T_0 + \frac{\mathcal{P}_0 R^2}{4\lambda}$$

Finalement, le profil de température est :
$$T(r) = T_0 + \frac{\mathcal{P}_0 R^2}{4\lambda} \left( 1 - \frac{r^2}{R^2} \right)$$

*Application numérique :*
La température maximale est atteinte au centre ($r=0$) :
$$T_{\text{max}} = T(0) = T_0 + \frac{\mathcal{P}_0 R^2}{4\lambda}$$
A.N. : 
$$T_{\text{max}} = 300 + \frac{1,0 \times 10^7 \times (1,0 \times 10^{-2})^2}{4 \times 20} = 300 + \frac{10^3}{80} = 300 + 12,5 = 312,5\text{ K}$$

---

#### 3. Flux thermique et résistance thermique équivalente
La densité de courant thermique s'obtient par dérivation du profil de température :
$$\vec{j}_{\text{th}}(r) = -\lambda \frac{\text{d}T}{\text{d}r} \vec{u}_r = -\lambda \left( -\frac{\mathcal{P}_0 r}{2\lambda} \right) \vec{u}_r = \frac{\mathcal{P}_0 r}{2} \vec{u}_r$$

Le flux thermique total $\Phi_{\text{th}}$ traversant la surface de la gaine de rayon $R$ pour une longueur $L$ est :
$$\Phi_{\text{th}} = \iint_{\text{surface}} \vec{j}_{\text{th}}(R) \cdot \vec{u}_r \, dS = \left( \frac{\mathcal{P}_0 R}{2} \right) \times (2\pi R L) = \pi R^2 L \mathcal{P}_0$$
*Remarque physique :* Ce résultat correspond exactement à la puissance totale générée dans le volume du cylindre ($P_{\text{tot}} = \mathcal{P}_0 \times (\pi R^2 L)$), ce qui valide le théorème de conservation global.

La résistance thermique linéique $R_{\text{th, lin}}$ est définie par analogie avec la loi d'Ohm thermique entre la température maximale (ou un écart moyen) et la température extérieure rapportée au flux linéique $\Phi_{\text{lin}} = \frac{\Phi_{\text{th}}}{L}$ :
$$\Delta T = T(0) - T(R) = \frac{\mathcal{P}_0 R^2}{4\lambda} = \frac{\Phi_{\text{lin}}}{4\pi \lambda}$$
On définit ainsi la résistance thermique linéique :
$$R_{\text{th, lin}} = \frac{T(0) - T_0}{\Phi_{\text{lin}}} = \frac{1}{4\pi \lambda}$$
exprimée en $\text{K}\cdot\text{m}\cdot\text{W}^{-1}$.

---

#### 4. Analyse critique et régime transitoire (amorce)
* a) L'équation locale de la chaleur en présence d'une source volumique variable s'écrit :
$$C_{\text{p}} \frac{\partial T}{\partial t} = \text{div}(\lambda \vec{\text{grad}} T) + \mathcal{P}(r, t)$$
En coordonnées cylindriques, avec $\lambda$ et $C_{\text{p}}$ uniformes :
$$C_{\text{p}} \frac{\partial T}{\partial t} = \lambda \left( \frac{\partial^2 T}{\partial r^2} + \frac{1}{r} \frac{\partial T}{\partial r} \right) + \mathcal{P}_0 + \Delta \mathcal{P} \cos(\omega t)$$

* b) Par analyse dimensionnelle de l'équation homogène associée (ou par le rapport des termes caractéristiques de conduction et d'accumulation), le temps caractéristique de diffusion thermique $\tau_{\text{diff}}$ à l'échelle du rayon $R$ est :
$$\tau_{\text{diff}} = \frac{R^2}{D_{\text{th}}} \quad \text{avec} \quad D_{\text{th}} = \frac{\lambda}{C_{\text{p}}} \quad (\text{diffusivité thermique})$$

L'approximation du régime stationnaire est valide si le système réagit "instantanément" aux fluctuations de la source de puissance, c'est-à-dire si la période des fluctuations $T_{\text{osc}} = \frac{2\pi}{\omega}$ est très grande devant le temps de diffusion thermique :
$$\frac{2\pi}{\omega} \gg \tau_{\text{diff}} \iff \omega \ll \frac{D_{\text{th}}}{R^2}$$
Si cette condition est vérifiée, le terme $\frac{\partial T}{\otor{\partial t}}$ devient négligeable devant les termes spatiaux, ramenant l'équation au cas stationnaire résolu aux questions précédentes à chaque instant quasi-statique.