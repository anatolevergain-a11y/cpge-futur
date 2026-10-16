---
title: 'Exercice 1 : Fonction d onde et équation de Schrödinger'
description: 'Problème d entraînement type concours pour MP.'
---

### 🌐 Énoncé du problème / Cadre d'étude

On s'intéresse à la modélisation quantique d'un électron de masse $m$ et de charge $-e$ ($e > 0$), contraint de se déplacer sur l'axe $(Ox)$. Dans tout le problème, la dynamique de cet électron est décrite par une fonction d'onde $\psi(x,t)$, solution de l'équation de Schrödinger unidimensionnelle :

$$-\frac{\hbar^2}{2m} \frac{\partial^2 \psi}{\partial x^2} + V(x)\psi(x,t) = i\hbar \frac{\partial \psi}{\partial t}$$

où $V(x)$ représente l'énergie potentielle à laquelle est soumis l'électron.

L'objectif de ce problème est d'étudier les états stationnaires de ce système dans le cas particulier d'un **puits de potentiel infini**, puis d'analyser l'évolution temporelle d'une superposition de ces états.

Données et constantes utiles : $\hbar = \frac{h}{2\pi}$ (constante de Planck réduite), masse de l'électron $m \approx 9,11 \times 10^{-31} \text{ kg}$.

---

### ❓ Questions progressives

1. **Rappel et conditions aux limites :** Rappeler la condition de normalisation de la fonction d'onde $\psi(x,t)$. Qu'exprime physiquement la quantité $|\psi(x,t)|^2$ ?
2. **États stationnaires :** Définir la forme générale d'un état stationnaire $\psi(x,t) = \varphi(x)\phi(t)$ associé à une énergie $E$. Montrer que la fonction d'onde spatiale $\varphi(x)$ vérifie une équation différentielle linéaire du second ordre que l'on précisera.
3. **Modélisation du puits de potentiel :** On considère le puits de potentiel infini défini par :
   $$V(x) = 0 \text{ pour } x \in ]0, L[$$
   $$V(x) = +\infty \text{ pour } x \le 0 \text{ ou } x \ge L$$
   Justifier physiquement que $\varphi(0) = 0$ et $\varphi(L) = 0$.
4. **Résolution et quantification :** Résoudre l'équation différentielle pour $x \in ]0, L[$. En déduire l'existence d'une quantification de l'énergie, notée $E_n$, et donner l'expression des fonctions d'onde normalisées $\varphi_n(x)$ associées.
5. **Superposition d'états :** À l'instant $t = 0$, la fonction d'onde du système est un mélange des deux premiers états stationnaires :
   $$\psi(x, 0) = A \left[ \varphi_1(x) + 2\varphi_2(x) \right]$$
   Déterminer la constante $A$ (réelle positive) assurant la normalisation de $\psi(x,0)$.
6. **Évolution temporelle et valeur moyenne :** Écrire la fonction d'onde $\psi(x,t)$ pour $t > 0$. Calculer la valeur moyenne de l'énergie mesurée dans cet état à un instant $t$ quelconque. Le résultat dépend-il du temps ? Conclure.

---

### 💡 Pistes & Indications méthodologiques

* **Q1 & Q2 :** Pensez à l'analogie avec les ondes classiques et à l'interprétation probabiliste de Born. Pour les états stationnaires, la séparation des variables est la méthode standard.
* **Q3 :** La fonction d'onde doit rester continue partout, y compris là où le potentiel est infini (où la probabilité de présence doit s'annuler strictement).
* **Q4 :** Posez $k^2 = \frac{2mE}{\hbar^2}$. Attention à bien éliminer les solutions triviales en exploitant les conditions aux limites.
* **Q5 :** Utilisez l'orthonormalisation des fonctions propres de l'énergie pour calculer l'intégrale de normalisation sans effort.
* **Q6 :** L'opérateur hamiltonien $\hat{H}$ est indépendant du temps pour ce système. Pensez au théorème d'Ehrenfest ou à la décomposition sur la base des états propres.

---

### 📋 Corrigé détaillé pas à pas

#### 1. Normalisation et interprétation physique
La condition de normalisation de la fonction d'onde s'écrit :
$$\int_{-\infty}^{+\infty} |\psi(x,t)|^2 \, \text{dx} = 1$$
Physiquement, selon l'interprétation probabiliste de Max Born, la quantité $|\psi(x,t)|^2$ représente la **densité de probabilité de présence** de l'électron au point $x$ à l'instant $t$.

#### 2. Séparation des variables et équation stationnaire
Recherchons une solution sous la forme $\psi(x,t) = \varphi(x)\phi(t)$. En injectant cette forme dans l'équation de Schrödinger :
$$-\frac{\hbar^2}{2m} \frac{\mathrm{d}^2\varphi}{\mathrm{d}x^2} \phi(t) + V(x)\varphi(x)\phi(t) = i\hbar \varphi(x) \frac{\mathrm{d}\phi}{\mathrm{d}t}$$
En divisant par $\psi(x,t) = \varphi(x)\phi(t)$, il vient :
$$\frac{1}{\varphi(x)} \left[ -\frac{\hbar^2}{2m} \frac{\mathrm{d}^2\varphi}{\mathrm{d}x^2} + V(x)\varphi(x) \right] = \frac{i\hbar}{\phi(t)} \frac{\mathrm{d}\phi}{\mathrm{d}t}$$
Le membre de gauche ne dépend que de $x$ et celui de droite que de $t$. Cette égalité n'est possible pour tout $x$ et tout $t$ que si les deux membres sont égaux à une même constante, notée $E$ (qui a la dimension d'une énergie). 
On en déduit l'équation d'évolution pour $\phi(t)$ :
$$\frac{\mathrm{d}\phi}{\mathrm{d}t} = -\frac{iE}{\hbar} \phi(t) \implies \phi(t) = e^{-i\frac{E}{\hbar}t}$$
Et pour la partie spatiale, l'**équation de Schrödinger indépendante du temps** :
$$-\frac{\hbar^2}{2m} \frac{\mathrm{d}^2\varphi}{\mathrm{d}x^2} + V(x)\varphi(x) = E\varphi(x)$$

#### 3. Conditions aux limites
À l'extérieur du puits ($x \le 0$ et $x \ge L$), le potentiel $V(x) = +\infty$. Pour que l'énergie moyenne du système reste finie, la fonction d'onde $\varphi(x)$ doit nécessairement s'annuler strictement dans ces zones. 
Par ailleurs, la fonction d'onde $\varphi(x)$ doit être continue sur tout l'axe $(Ox)$. Par conséquent, aux frontières du puits, on doit avoir :
$$\varphi(0) = 0 \quad \text{et} \quad \varphi(L) = 0$$

#### 4. Résolution et quantification de l'énergie
À l'intérieur du puits ($x \in ]0, L[$), le potentiel est nul ($V(x) = 0$). L'équation stationnaire se réécrit :
$$\frac{\mathrm{d}^2\varphi}{\mathrm{d}x^2} + k^2 \varphi(x) = 0 \quad \text{avec} \quad k^2 = \frac{2mE}{\hbar^2}$$
La solution générale est de la forme :
$$\varphi(x) = A' \cos(kx) + B' \sin(kx)$$
* Application de la condition en $x = 0$ : $\varphi(0) = A' = 0$.
* Application de la condition en $x = L$ : $\varphi(L) = B' \sin(kL) = 0$.

Pour obtenir une solution non triviale ($B' \neq 0$), il faut que :
$$kL = n\pi \quad (n \in \mathbb{N}^{*})$$
On en déduit la quantification du nombre d'onde $k_n = \frac{n\pi}{L}$, ce qui implique la **quantification de l'énergie** :
$$E_n = \frac{\hbar^2 k_n^2}{2m} = \frac{n^2 \pi^2 \hbar^2}{2mL^2}$$

Déterminons la constante de normalisation $B'$ pour chaque état $\varphi_n(x) = B' \sin\left(\frac{n\pi x}{L}\right)$ :
$$\int_0^L |\varphi_n(x)|^2 \, \text{dx} = |B'|^2 \int_0^L \sin^2\left(\frac{n\pi x}{L}\right) \text{dx} = |B'|^2 \frac{L}{2} = 1 \implies B' = \sqrt{\frac{2}{L}}$$
Les fonctions d'onde propres normalisées sont donc :
$$\varphi_n(x) = \sqrt{\frac{2}{L}} \sin\left(\frac{n\pi x}{L}\right)$$

#### 5. Normalisation de la superposition d'états
La fonction d'onde initiale est $\psi(x,0) = A \left[ \varphi_1(x) + 2\varphi_2(x) \right]$. 
Exprimons la condition de normalisation à $t = 0$ en utilisant l'orthonormalisation de la famille $(\varphi_n)$ :
$$\int_0^L |\psi(x,0)|^2 \, \text{dx} = |A|^2 \int_0^L \left[ \varphi_1(x) + 2\varphi_2(x) \right]^2 \text{dx} = 1$$
En développant et en tenant compte du fait que $\int \varphi_i \varphi_j \, \text{dx} = \delta_{ij}$ :
$$\int_0^L \left( \varphi_1^2 + 4\varphi_2^2 + 4\varphi_1\varphi_2 \right) \text{dx} = \int_0^L \varphi_1^2 \text{dx} + 4\int_0^L \varphi_2^2 \text{dx} + 0 = 1 + 4 = 5$$
Ainsi :
$$|A|^2 \times 5 = 1 \implies A = \frac{1}{\sqrt{5}}$$
(en choisissant $A$ réel positif).

#### 6. Évolution temporelle et valeur moyenne de l'énergie
Chaque composante stationnaire évolue avec son propre facteur phase $\phi_n(t) = e^{-i\frac{E_n}{\hbar}t}$. Par superposition linéaire (principe de superposition), la fonction d'onde à l'instant $t$ est :
$$\psi(x,t) = \frac{1}{\msqrt{5}} \left[ \varphi_1(x) e^{-i\frac{E_1}{\hbar}t} + 2\varphi_2(x) e^{-i\frac{E_2}{\hbar}t} \right]$$

La valeur moyenne de l'énergie $\langle E \rangle$ dans cet état s'obtient par la formule générale :
$$\langle E \rangle = \int_0^L \psi^*(x,t) \hat{H} \psi(x,t) \, \text{dx}$$
Puisque $\hat{H}\varphi_n(x) = E_n\varphi_n(x)$, on a directement :
$$\langle E \rangle = |c_1|^2 E_1 + |c_2|^2 E_2$$
où $c_1 = \frac{1}{\sqrt{5}}$ et $c_2 = \frac{2}{\sqrt{5}}$ sont les coefficients de la superposition normalisée.
$$\langle E \rangle = \left(\frac{1}{\sqrt{5}}\right)^2 E_1 + \left(\frac{2}{\sqrt{5}}\right)^2 E_2 = \frac{1}{5}E_1 + \frac{4}{5}E_2 = \frac{1}{5}E_1 + \frac{4}{5}(4E_1) = \frac{17}{5}E_1$$

* **Dépendance temporelle :** Le calcul ci-dessus montre que les termes temporels de type $e^{\pm i \omega t}$ se simplifient lors du calcul de la norme au carré des coefficients $|c_n|^2$. Par conséquent, **la valeur moyenne de l'énergie ne dépend pas du temps** ($\langle E \5angle = \text{constante}$). C'est une illustration directe de la conservation de l'énergie pour un système conservatif isolé.