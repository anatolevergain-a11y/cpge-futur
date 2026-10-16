---
title: 'Exercice 1 : Loi de Fourier et bilan d énergie thermique'
description: 'Problème d entraînement type concours pour CPGE MP.'
---

### 🌐 Énoncé du problème / Cadre d'étude

On s'intéresse à la modélisation thermique d'un mur plane infini, assimilé à un milieu homogène, isotrope, de conductivité thermique $\lambda$ constante, de masse volumique $\rho$ et de capacité thermique massique $c$ également constantes. Ce mur occupe la région de l'espace définie par $-E/2 \le x \le E/2$, où $E$ représente l'épaisseur du mur.

Le système est placé dans l'air ambiant et l'on se place dans le cadre d'un régime thermique stationnaire ou quasi-stationnaire. On note $\vec{j}_{\text{th}}$ le vecteur densité de flux thermique au sein du matériau.

L'objectif de cet exercice, typique des écrits de concours (Mines-Ponts / CCINP), est d'établir l'équation de la chaleur à partir d'un bilan d'énergie macroscopique, puis d'étudier l'influence d'une source volumique interne de chaleur (effet Joule ou réaction chimique exothermique) sur le profil de température dans le mur.

---

### ❓ Questions progressives

1. **Rappel de cours :** Énoncer la loi phénoménologique de Fourier en précisant la signification physique de chaque terme et son domaine de validité. Préciser l'unité internationale de $\lambda$ et de $\vec{j}_{\text{th}}$.
2. **Bilan thermique élémentaire :** En considérant une tranche de mur comprise entre $x$ et $x+\mathrm{d}x$ d'aire de section $S$, établir par un bilan d'énergie thermique en régime stationnaire, en présence d'une puissance thermique volumique générée $p(x)$ (en $\text{W}\cdot\text{m}^{-3}$), l'équation différentielle régissant la température $T(x)$.
3. **Résolution sans source :** On suppose $p(x) = 0$. Les faces du mur situées en $x = -E/2$ et $x = E/2$ sont maintenues à des températures imposées $T_1$ et $T_2$ respectivement (avec $T_1 > T_2$). Déterminer l'expression du profil de température $T(x)$ et calculer la densité de flux thermique traversant le mur.
4. **Résolution avec source uniforme :** On suppose désormais que le mur est le siège d'une source volumique de chaleur uniforme $p(x) = p_0 > 0$. Les deux faces du mur en $x = \pm E/2$ sont maintenues à la même température $T_0$.
   - Établir l'équation différentielle vérifiée par $T(x)$ et préciser les conditions aux limites associées.
   - Intégrer cette équation pour trouver le profil de température $T(x)$.
   - Déterminer la température maximale atteinte au sein du mur et exprimer l'écart thermique maximal $\Delta T_{\max} = T(0) - T_0$.
5. **Application numérique et analyse critique :** 
   - Calculer $\Delta T_{\max}$ pour un mur de béton d'épaisseur $E = 30\text{ cm}$, de conductivité thermique $\lambda = 1.5\text{ W}\cdot\text{m}^{-1}\cdot\text{K}^{-1}$, soumis à une puissance volumique $p_0 = 500\text{ W}\cdot\text{m}^{-3}$.
   - Conclure sur l'ordre de grandeur obtenu.

---

### 💡 Pistes & Indications méthodologiques

* **Question 1 :** Pensez au signe moins dans la loi de Fourier : la chaleur s'isotherme des zones chaudes vers les zones froides.
* **Question 2 :** Méthode classique du "bilan d'énergie" sur une tranche d'épaisseur $\mathrm{d}x$. Identifiez les flux entrants, sortants et le terme source. Utilisez un développement de Taylor à l'ordre 1 pour exprimer le flux sortant en fonction du flux entrant.
* **Question 3 & 4 :** Ce sont des équations différentielles linéaires d'ordre 2 à coefficients constants. Pensez à exploiter les symétries du problème (si les conditions aux limites sont symétriques par rapport à $x=0$, le profil de température doit l'être aussi).

---

### 📋 Corrigé détaillé pas à pas

#### 1. Loi de Fourier et unités
La loi de Fourier s'exprime sous la forme vectorielle suivante :
$$\vec{j}_{\text{th}} = -\lambda \operatorname{grad} T$$
* $\vec{j}_{\text{th}}$ : vecteur densité de flux thermique, en $\text{W}\cdot\text{m}^{-2}$.
* $\lambda$ : conductivité thermique du matériau, en $\text{W}\cdot\text{m}^{-1}\cdot\text{K}^{-1}$.
* $T$ : température, en $\text{K}$ (ou $\text{°C}$).
* Le signe « $-$ » traduit le fait spontané que la chaleur s'écoule des hautes températures vers les basses températures (le flux est opposé au gradient de température).

#### 2. Établissement de l'équation différentielle par bilan
Considérons une tranche de mur comprise entre $x$ et $x+\mathrm{d}x$, de section $S$. En régime stationnaire, l'énergie thermique emmagasinée dans cette tranche est constante. Le bilan d'énergie s'écrit :
$$\Phi_{\text{entrant}} + \Phi_{\text{générée}} - \Phi_{\text{sortant}} = 0$$
* Puissance thermique entrante en $x$ : $\Phi(x) = j_{\text{th}}(x) \cdot S$
* Puissance thermique sortante en $x+\mathrm{d}x$ : $\Phi(x+\mathrm{d}x) = j_{\text{th}}(x+\mathrm{d}x) \cdot S \approx \left[ j_{\text{th}}(x) + \frac{\partial j_{\text{th}}}{\partial x}\mathrm{d}x \right] S$
* Puissance thermique générée par la source volumique : $\Phi_{\text{générée}} = p(x) \cdot S \, \mathrm{d}x$

En injectant ces expressions dans le bilan :
$$j_{\text{th}}(x)S + p(x)S\mathrm{d}x - \left( j_{\text{th}}(x) + \frac{\partial j_{\text{th}}}{\partial x}\mathrm{d}x \right)S = 0$$
$$\implies -\frac{\partial j_{\text{th}}}{\partial x} + p(x) = 0 \implies \frac{\partial j_{\text{th}}}{\partial x} = p(x)$$

En combinant avec la loi de Fourier $j_{\text{th}} = -\lambda \frac{\mathrm{d}T}{\mathrm{d}x}$ (en géométrie cartésienne 1D) :
$$\frac{\mathrm{d}}{\mathrm{d}x}\left(-\lambda \frac{\mathrm{d}T}{\mathrm{d}x}\right) + p(x) = 0 \implies \frac{\mathrm{d}^2 T}{\mathrm{d}x^2} = -\frac{p(x)}{\lambda}$$
*(C'est l'équation de Poisson thermique en régime stationnaire).*

#### 3. Cas sans source ($p(x) = 0$)
L'équation se simplifie en :
$$\frac{\mathrm{d}^2 T}{\mathrm{d}x^2} = 0$$
Par double integration :
$$T(x) = A x + B$$
Les conditions aux limites sont :
* $T(-E/2) = T_1 \implies -A\frac{E}{2} + B = T_1$
* $T(E/2) = T_2 \implies A\frac{E}{2} + B = T_2$

En additionnant et soustrayant ces deux équations :
$$B = \frac{T_1 + T_2}{2} \quad \text{et} \quad A = \frac{T_2 - T_1}{E}$$
Le profil de température est donc linéaire :
$$T(x) = \frac{T_1 + T_2}{2} - (T_1 - T_2)\frac{x}{E}$$

La densité de flux thermique associée est uniforme :
$$j_{\text{th}} = -\lambda \frac{\mathrm{d}T}{\mathrm{d}x} = \lambda \frac{T_1 - T_2}{E}$$

#### 4. Cas avec source uniforme ($p(x) = p_0$)
* **Équation et conditions aux limites :**
  L'équation devient :
  $$\frac{\mathrm{d}^2 T}{\mathrm{d}x^2} = -\frac{p_0}{\lambda}$$
  Conditions aux limites symétriques : $T(-E/2) = T_0$ et $T(E/2) = T_0$.
* **Résolution :**
  Une intégration directe donne :
  $$\frac{\mathrm{d}T}{\mathrm{d}x} = -\frac{p_0}{\lambda} x + C_1$$
  Par symétrie du problème par rapport au plan $x=0$, on a nécessairement $\left.\frac{\mathrm{d}T}{\mathrm{d}x}\right|_{x=0} = 0$, donc $C_1 = 0$.
  
  En intégrant une seconde fois :
  $$T(x) = -\frac{p_0}{2\lambda} x^2 + C_2$$
  En utilisant la condition aux limites en $x = E/2$ :
  $$T\left(\frac{E}{2}\right) = -\frac{p_0}{2\lambda} \left(\frac{E}{2}\right)^2 + C_2 = T_0 \implies C_2 = T_0 + \frac{p_0 E^2}{8\lambda}$$
  Le profil de température est donc parabolique :
  $$T(x) = T_0 + \frac{p_0 E^2}{8\lambda} \left( 1 - \frac{4x^2}{E^2} \right)$$
* **Température maximale :**
  Le maximum est atteint au centre du mur ($x=0$) en raison de la symétrie et de la convexité de la parabole :
  $$T_{\max} = T(0) = T_0 + \frac{p_0 E^2}{8\lambda}$$
  L'écart thermique maximal est :
  $$\Delta T_{\max} = T_{\max} - T_0 = \frac{p_0 E^2}{8\lambda}$$

#### 5. Application numérique et analyse critique
* **A.N. :**
  * $p_0 = 500\text{ W}\cdot\text{m}^{-3}$
  * $E = 0.3\text{ m}$
  * $\lambda = 1.5\text{ W}\cdot\text{m}^{-1}\cdot\text{K}^{-1}$

$$\Delta T_{\max} = \frac{500 \times (0.3)^2}{8 \times 1.5} = \frac{500 \times 0.09}{12} = \frac{45}{12} = 3.75\text{ K}$$

* **Conclusion :** 
  L'échauffement au cœur du mur induit par la source volumique est de l'ordre de $3.8\text{ K}$ (ou $3.8\text{ °C}$). Cette valeur est relativement faible, ce qui montre que pour un matériau de construction usuel comme le béton, une source thermique modérée ne provoque pas de surchauffe interne critique en régime stationnaire.