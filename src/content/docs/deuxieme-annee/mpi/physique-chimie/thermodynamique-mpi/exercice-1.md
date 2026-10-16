---
title: 'Exercice 1 : Bilans d entropie'
description: 'Problème d entraînement type concours pour MPI.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Le présent problème se propose d'étudier la thermodynamique des processus irréversibles à travers l'exemple canonique d'un système cylindrique siège d'un transfert thermique et d'une conversion d'énergie. Ce type de modèle intervient dans l'étude des réacteurs chimiques tubulaires, de la dissipation thermique dans les composants électroniques ou encore de la géothermie.

On considère un cylindre infini de rayon $R$, de conductivité thermique $\lambda$ supposée constante. Ce milieu est le siège d'une source volumique de puissance thermique (par exemple par effet Joule ou réaction chimique) homogène notée $p_V > \text{W}\cdot\text{m}^{-3}$. Le système est en régime stationnaire. La surface externe du cylindre, située à $r = R$, est maintenue à une température constante $T_0$.

On se place dans le cadre de la thermodynamique des milieux continus locaux. L'objectif est d'établir le profil de température, de calculer la production d'entropie au sein du système et d'analyser le bilan entropique global avec l'extérieur, en discutant les limites du modèle linéaire de Fourier.

---

### ❓ Questions progressives

1. **Établissement du profil thermique**
   À l'aide d'un bilan thermique macroscopique ou local, établir l'équation différentielle vérifiée par la température $T(r)$ dans le cylindre en coordonnées cylindriques, en supposant le régime permanent et une symétrie radiale ($T = T(r)$). Intégrer cette équation pour déterminer $T(r)$ en sachant que le flux thermique est régulier en $r = 0$ et que $T(R) = T_0$.

2. **Expression du flux thermique**
   En déduire l'expression du vecteur densité de courant thermique $\vec{j}_q(r)$ dans le cylindre en utilisant la loi de Fourier.

3. **Bilan entropique local et production d'entropie**
   Rappeler l'expression locale du second principe de la thermodynamique (équation de conservation/production de l'entropie) pour un milieu continu. En déduire l'expression de la densité volumique de taux de production d'entropie $\sigma$ en tout point du cylindre. Exprimer $\sigma$ en fonction de $r$, $p_V$, $\lambda$ et $T(r)$.

4. **Production d'entropie totale**
   Calculer la production d'entropie totale $S_{\text{prod}}$ par unité de longueur du cylindre sur un intervalle de temps $\Delta t$.

5. **Analyse critique du modèle**
   La loi de Fourier est une approximation linéaire reliant le flux thermique au gradient de température. Discuter l'hypothèse de constance de la conductivité thermique $\lambda(T)$. Si $\lambda(T) = \lambda_0 (1 + \alpha T)$ avec $\alpha > 0$, qualitativement, le profil de température est-il plus resserré ou plus aplati au centre par rapport au cas isotherme ? Quel impact sur le bilan d'entropie ?

---

### 💡 Pistes & Indications méthodologiques

- **Question 1 :** Penser à exprimer la conservation de l'énergie en régime stationnaire sous la forme $\text{div}(\vec{j}_q) = p_V$. En coordonnées cylindriques, le laplacien ou la divergence s'expriment simplement pour une symétrie radiale : $\operatorname{div}(\vec{j}_q) = \frac{1}{r} \frac{d}{dr}(r j_{qr})$.
- **Question 3 :** Pour le bilan d'entropie, l'expression locale s'écrit $\frac{\partial s}{\partial t} + \operatorname{div}(\vec{j}_s) = \sigma$, où $\vec{j}_s = \frac{\vec{j}_q}{T}$. En régime stationnaire, la variation temporelle de l'entropie volumique $s$ est nulle.
- **Question 4 :** Pour obtenir la production d'entropie par unité de longueur, il faut intégrer la densité volumique $\sigma$ sur une section droite du cylindre de longueur unité.

---

### 📋 Corrigé détaillé pas à pas

#### 1. Établissement du profil thermique
En régime stationnaire, le premier principe de la thermodynamique appliqué à une portion de cylindre de rayon $r$ et de longueur $h$ (ou par unité de longueur) s'exprime localement par la conservation de l'énergie :
$$\operatorname{div}(\vec{j}_q) = p_V$$
Par symétrie radiale, la température ne dépend que de la distance $r$ à l'axe. Le vecteur densité de courant thermique est radial : $\vec{j}_q = j_{qr}(r) \vec{u}_r$.
L'opérateur divergence en coordonnées cylindriques pour une telle symétrie donne :
$$\frac{1}{r} \frac{d}{dr} \left( r j_{qr}(r) \right) = p_V$$
En intégrant cette équation entre $0$ et $r$ :
$$r j_{qr}(r) = \int_0^r p_V r' \, dr' = \frac{p_V r^2}{2} \implies j_{qr}(r) = \frac{p_V r}{2}$$
(La constante d'intégration est nulle car le flux doit rester fini, voire nul, sur l'axe $r=0$).

D'après la loi de Fourier, $\vec{j}_q = -\lambda \operatorname{grad} T$, soit en coordonnées cylindriques :
$$j_{qr} = -\lambda \frac{dT}{dr}$$
On en déduit l'équation différentielle pour $T(r)$ :
$$-\lambda \frac{dT}{dr} = \frac{p_V r}{2} \implies \frac{dT}{dr} = -\frac{p_V}{2\lambda} r$$
En intégrant entre $r$ et $R$ :
$$T(R) - T(r) = -\frac{p_V}{2\lambda} \int_r^R r' \, dr' = -\frac{p_V}{4\lambda} (R^2 - r^2)$$
Soit le profil de température :
$$T(r) = T_0 + \frac{p_V}{4\lambda} (R^2 - r^2)$$

#### 2. Expression du flux thermique
Le vecteur densité de courant thermique s'écrit directement :
$$\vec{j}_q(r) = \frac{p_V r}{2} \vec{u}_r$$

#### 3. Bilan entropique local et production d'entropie
L'équation de conservation de l'entropie locale s'écrit :
$$\frac{\partial s}{\partial t} + \operatorname{div}(\vec{j}_s) = \sigma$$
En régime stationnaire, $\frac{\partial s}{\partial t} = 0$. Le flux entropique est défini par $\vec{j}_s = \frac{\vec{j}_q}{T}$. 
La divergence du flux entropique vaut :
$$\operatorname{div}(\vec{j}_s) = \operatorname{div}\left(\frac{\vec{j}_q}{T}\right) = \vec{j}_q \cdot \operatorname{grad}\left(\frac{1}{T}\right) + \frac{1}{T} \operatorname{div}(\vec{j}_q)$$
En utilisant $\operatorname{grad}\left(\frac{1}{T}\right) = -\frac{1}{T^2} \operatorname{grad} T$ et $\operatorname{div}(\vec{j}_q) = p_V$, on obtient :
$$\sigma = -\vec{j}_q \cdot \frac{\operatorname{grad} T}{T^2} = -\left(-\lambda \operatorname{grad} T\right) \cdot \frac{\operatorname{grad} T}{T^2} = \frac{\lambda}{T^2} \|\operatorname{grad} T\|^2$$
Application numérique/littérale avec $\|\operatorname{grad} T\| = \frac{p_V r}{2\lambda}$ :
$$\sigma(r) = \frac{\lambda}{T(r)^2} \left( \frac{p_V r}{2\lambda} \thermoright \right)^2 = \frac{p_V^2 r^2}{4 \lambda T(r)^2}$$
où $T(r) = T_0 + \frac{p_V}{4\lambda} (R^2 - r^2)$.

#### 4. Production d'entropie totale
La production d'entropie totale par unité de longueur du cylindre et par unité de temps (taux de création d'entropie $\frac{dS_{\text{prod}}}{dt}$ par unité de longueur) s'obtient en intégrant $\sigma(r)$ sur une section transversale de longueur unité :
$$\frac{dS_{\text{prod}}}{dt} = \int_0^R \sigma(r) \cdot 2\pi r \, dr = \int_0^R \frac{p_V^2 r^2}{4 \lambda T(r)^2} 2\pi r \, dr$$
Cette expression montre que la production d'entropie est strictement positive partout (sauf en $r=0$ où elle est nulle), ce qui est conforme au second principe de la thermodynamique (inégalité de Clausius).

#### 5. Analyse critique du modèle
* **Variation de $\lambda(T)$ :** Si $\lambda(T) = \lambda_0(1 + \alpha T)$ avec $\alpha > 0$, la conductivité augmente avec la température. Au centre ($r=0$), la température est maximale, donc $\lambda$ est plus grande qu'au bord. La capacité du milieu à évacuer la chaleur est donc meilleure au centre que dans le modèle isotherme.
* **Conséquence sur le profil :** Le gradient de température au centre doit être plus faible pour assurer le même flux thermique, ce qui conduit à un profil de température **plus aplati** au centre par rapport à la parabole du modèle $\lambda = \text{cte}$.
* **Impact sur l'entropie :** Comme $\sigma \propto \frac{\lambda}{\lambda^2} \propto \frac{1}{\lambda}$, une conductivité plus élevée au centre réduit localement la densité de production d'entropie $\sigma$, diminuant ainsi la dissipation totale par irréversibilité thermique.