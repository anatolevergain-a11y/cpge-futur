---
title: 'Exercice 2 : Oscillateurs mécaniques'
description: 'Problème d entraînement type concours pour PTSI.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Les systèmes oscillants amortis couplés à des dispositifs de dissipation d'énergie sont au cœur de nombreuses applications industrielles, allant de la suspension automobile aux sismographes. 

On s'intéresse dans ce problème à un dispositif original d'oscillateur mécanique vertical composé d'un solide ponctuel $S$ de masse $m$, suspendu à un ressort idéal de raideur $k$ et de longueur à vide $L_0$. Le solide est immergé dans un fluide visqueux qui exerce sur lui une force de frottement fluide linéaire de la forme $\vec{f} = -h \vec{v}$, où $h > 0$ est le coefficient de frottement et $\vec{v}$ la vitesse du solide dans le référentiel terrestre $\mathcal{R}$, supposé galiléen.

L'objectif du problème est d'établir l'équation différentielle du mouvement, d'étudier l'influence de l'amortissement sur le régime transitoire, puis d'analyser la réponse du système soumis à une excitation sinusoïdale extérieure (régime stationnaire forcé).

Données numériques et littérales :
- Masse : $m = 250\text{ g}$
- Constante de raideur du ressort : $k = 40\text{ N}\cdot\text{m}^{-1}$
- Intensité de la pesanteur : $g = 9{,}81\text{ m}\cdot\text{s}^{-2}$
- Le mouvement est restreint à la verticale $(O\vec{z})$ orientée vers le bas.

---

### ❓ Questions progressives

1. **Étude statique**
   1.1. Définir le référentiel d'étude et préciser les hypothèses permettant de le supposer galiléen.
   1.2. Déterminer l'expression de l'allongement statique $\Delta l_0$ du ressort à l'équilibre, en fonction de $m$, $g$ et $k$. Calculer sa valeur numérique.

2. **Établissement du modèle dynamique**
   2.1. On repère la position du centre de masse $G$ du solide à l'instant $t$ par sa coordonnée $z(t)$ sur l'axe $(O\vec{z})$, l'origine $O$ étant choisie au position d'équilibre stable du système. Exprimer la position du ressort à l'instant $t$ en fonction de $L_0$, $\Delta l_0$ et $z(t)$.
   2.2. Appliquer le Principe Fondamental de la Dynamique (PFD) à $S$ dans le référentiel $\mathcal{R}$. En déduire l'équation différentielle régissant le mouvement de $z(t)$ sous la forme canonique :
   $$\frac{\text{d}^2 z}{\text{d}t^2} + 2\lambda \frac{\text{d} z}{\text{d}t} + \omega_0^2 z = 0$$
   Exprimer la pulsation propre $\omega_0$ et le coefficient d'amortissement $\lambda$ (ou le facteur de qualité $Q$) en fonction des paramètres du système.

3. **Analyse énergétique et régimes transitoires**
   3.1. Établir l'expression de l'énergie mécanique $E_m$ du système (ressort + masse + pesanteur).
   3.2. En déduire la puissance des forces non conservatives et montrer que la variation temporelle de l'énergie mécanique s'écrit $\frac{\text{d}E_m}{\text{d}t} = -h \dot{z}^2$. Interpréter physiquement ce signe.
   3.3. Pour une valeur du coefficient de frottement $h = 2{,}0\text{ kg}\cdot\text{s}^{-1}$, calculer la valeur de $\lambda$, de la pulsation propre $\omega_0$, et préciser le régime d'amortissement correspondant.

4. **Excitation harmonique et analyse critique du modèle**
   4.1. On soumet maintenant le point d'attraction supérieur du ressort à un mouvement vertical sinusoïdal d'équation $z_p(t) = Z_m \cos(\Omega t)$. Établir la nouvelle équation différentielle pour l'élongation $z(t)$.
   4.2. Établir l'expression de l'amplitude du régime permanent $Z_{\text{perm}}(\Omega)$ et de la phase $\phi$ par rapport à l'excitation.
   4.3. **Analyse critique du modèle :** Le modèle linéaire de frottement fluide $\vec{f} = -h \vec{v}$ est-il toujours valide pour de grandes amplitudes d'oscillation ? Justifier en citant un phénomène physique négligé ici.

---

### 💡 Pistes & Indications méthodologiques

- **Q1.2 :** Penser à projeter la condition d'équilibre statique $\sum \vec{F}_{\text{ext}} = \vec{0}$ sur l'axe vertical.
- **Q2.2 :** Veillez à bien exprimer la force de rappel élastique en fonction de la position $z$ et de $\Delta l_0$. La simplification par la condition d'équilibre statique est une étape clé.
- **Q3.2 :** Dériver l'énergie mécanique par rapport au temps et utiliser l'équation différentielle établie à la question 2.2.
- **Q4.2 :** L'utilisation de la notation complexe (representation phasorielle) simplifie grandement la recherche de la solution stationnaire pour l'équation différentielle linéaire avec second membre sinusoïdal.

---

### 📋 Corrigé détaillé pas à pas

#### 1. Étude statique
1.1. Le référentiel d'étude est le **référentiel terrestre**, supposé galiléen pour une durée d'expérience courte devant les effets de la rotation terrestre (approximation valide par le théorème de Coriolis/entraînement).
1.2. À l'équilibre statique, la somme des forces agissant sur $S$ est nulle :
$$\vec{P} + \vec{T}_{\text{st}} = \vec{0}$$
En projection sur l'axe $(O\vec{z})$ orienté vers le bas :
$$mg - k \Delta l_0 = 0 \implies \Delta l_0 = \frac{mg}{k}$$
*A.N. :* $\Delta l_0 = \frac{0{,}250 \times 9{,}81}{40} \approx 6{,}13 \times 10^{-2}\text{ m} = 6{,}13\text{ cm}$.

---

#### 2. Établissement du modèle dynamique
2.1. La longueur du ressort à l'instant $t$ est $L(t) = L_0 + \Delta l_0 + z(t)$.
2.2. Le PFD appliqué au solide $S$ dans $\mathcal{R}$ donne :
$$m \vec{a} = \vec{P} + \vec{T} + \vec{f}$$
En projection sur $(O\vec{z})$ :
$$m \ddot{z} = mg - k(\Delta l_0 + z) - h \dot{z}$$
Puisque $mg = k \Delta l_0$, l'équation devient :
$$m \ddot{z} + h \dot{z} + kz = 0 \implies \frac{\text{d}^2 z}{\text{d}t^2} + \frac{h}{m}\frac{\text{d} z}{\text{d}t} + \frac{k}{m}z = 0$$
Par identification avec la forme canonique, on obtient :
- **Pulsation propre :** $\omega_0 = \sqrt{\frac{k}{m}}$
- **Coefficient d'amortissement :** $\lambda = \frac{h}{2m}$ (ou facteur de qualité $Q = \frac{m \omega_0}{h} = \frac{\sqrt{mk}}{h}$)

---

#### 3. Analyse énergétique et régimes transitoires
3.1. L'énergie mécanique $E_m$ est la somme de l'énergie cinétique $E_c$, de l'énergie potentielle élastique $E_{pe}$ et de l'énergie potentielle de pesanteur $E_{pp}$ :
$$E_m = \frac{1}{2}m\dot{z}^2 + \frac{1}{2}k(\Delta l_0 + z)^2 - mgz + \text{cte}$$
3.2. En dérivant $E_m$ par rapport au temps :
$$\frac{\text{d}E_m}{\text{d}t} = m\dot{z}\ddot{z} + k(\Delta l_0 + z)\dot{z} - mg\dot{z} = \dot{z}\left[ m\ddot{z} + k\Delta l_0 + kz - mg \right]$$
Or, d'après l'équation du mouvement, $m\ddot{z} + kz = -h\dot{z}$ et $mg = k\Delta l_0$. Donc :
$$\frac{\text{d}E_m}{\text{d}t} = \dot{z}(-h\dot{z}) = -h \dot{z}^2$$
*Interprétation :* Le terme $-h\dot{z}^2$ est strictement négatif (ou nul si $\dot{z}=0$). Il représente la **puissance des forces de frottement**, qui sont non conservatives. L'énergie mécanique du système décroît au cours du temps : le système dissipe de l'énergie sous forme thermique.

3.3. Application numérique avec $h = 2{,}0\text{ kg}\cdot\text{s}^{-1}$ :
- $\omega_0 = \sqrt{\frac{40}{0{,}250}} = \sqrt{160} \approx 12{,}65\text{ rad}\cdot\text{s}^{-1}$
- $\lambda = \frac{2{,}0}{2 \times 0{,}250} = 4{,}0\text{ s}^{-1}$

Comparaison : $\lambda < \omega_0$ ($\lambda = 4{,}0$ et $\omega_0 \approx 12{,}65$). 
Le système se trouve donc dans le **régime pseudo-périodique** (ou amorti).

---

#### 4. Excitation harmonique et analyse critique du modèle
4.1. Si le point d'attache bouge, la longueur du ressort devient $L(t) = L_0 + \Delta l_0 + z(t) - z_p(t)$. Le PFD conduit à :
$$m \ddot{z} + h \dot{z} + k z = k z_p(t)$$
Soit :
$$\frac{\text{d}^2 z}{\text{d}t^2} + 2\lambda \frac{\text{d} z}{\text{d}t} + \omega_0^2 z = \omega_0^2 Z_m \cos(\Omega t)$$

4.2. En utilisant la représentation complexe $\underline{z}(t) = \underline{Z} e^{j\Omega t}$ avec l'excitation $\underline{z}_p(t) = Z_m e^{j\Omega t}$, l'équation devient :
$$(-\Omega^2 + 2j\lambda\Omega + \omega_0^2)\underline{Z} = \omega_0^2 Z_m \implies \underline{Z} = \frac{\omega_0^2 Z_m}{\omega_0^2 - \Omega^2 + 2j\lambda\Omega}$$
L'amplitude réelle en régime permanent est :
$$Z_{\text{perm}}(\Omega) = |\underline{Z}| = \frac{\omega_0^2 Z_m}{\sqrt{(\omega_0^2 - \Omega^2)^2 + 4\lambda^2\Omega^2}}$$
Et la phase $\phi = \arg(\underline{Z})$ est donnée par :
$$\tan \phi = \frac{-2\lambda\Omega}{\omega_0^2 - \Omega^2}$$

4.3. **Analyse critique du modèle :** 
Le modèle linéaire de frottement fluide ($\vec{f} = -h\vec{v}$) est une approximation valable uniquement pour les **faibles vitesses** (régime laminaire, nombre de Reynolds faible). Pour de grandes amplitudes d'oscillation, les vitesses augmentent et les effets inertiels du fluide deviennent prépondérants (régime turbulent). La force de frottement s'écrit alors plutôt $\vec{f}' = -\frac{1}{2} \rho C_x S \|\vec{v}\| \vec{v}$, ce qui rend l'équation différentielle **non linéaire** et inintelligible par les méthodes analytiques simples de superposition. Le modèle linéaire n'est donc qu'une idéalisation locale.