---
title: 'Cours : Physique quantique'
description: 'Synthèse de cours, théorèmes et démonstrations fondamentales.'
---

## 📌 1. Définitions & Cadre d'étude

Le passage de la physique classique à la physique quantique s'impose pour rendre compte des phénomènes à l'échelle microscopique (atomes, molécules, électrons). Le cadre formel de la mécanique quantique non relativiste repose sur l'espace d'état et les postulats fondamentaux.

### 1.1. Vecteur d'état et espace de Hilbert
L'état d'un système physique à un instant $t$ est décrit par un vecteur $\vert \psi(t) \rangle$ appartenant à un espace de Hilbert $\mathcal{E}$ complexe, séparable, muni d'un produit scalaire hermitien noté $\langle \phi \vert \psi \rangle$.
* **Norme et probabilité :** Le vecteur d'état est normé à l'unité : 
$$\langle \psi(t) \vert \psi(t) \rangle = 1$$
* **Principe de superposition :** Si $\vert \psi_1 \rangle$ et $\vert \psi_2 \rangle$ sont deux états possibles du système, alors toute combinaison linéaire $\alpha \vert \psi_1 \rangle + \beta \vert \psi_2 \rangle$ (avec $\alpha, \beta \in \mathbb{C}$) est un état possible.

### 1.2. Observables et opérateurs
Une grandeur physique observable $A$ est représentée par un opérateur linéaire hermitien $\hat{A}$ agissant sur $\mathcal{E}$.
* **Hermiticité :** Pour tout couple de vecteurs $\vert \phi \rangle, \vert \psi \rangle \in \mathcal{E}$ :
$$\langle \phi \vert \hat{A} \vert \psi \rangle = \langle \hat{A}\phi \vert \psi \rangle$$
* **Spectre :** Les valeurs mesurables de l'observable $A$ sont nécessairement les valeurs propres de l'opérateur $\hat{A}$.

### 1.3. Représentation position et fonction d'onde
Dans la représentation position, un état $\vert \psi \rangle$ est caractérisé par sa fonction d'onde $\psi(x,t) = \langle x \vert \psi(t) \rangle$. 
* La densité de probabilité de présence de la particule à la position $x$ et à l'instant $t$ est :
$$\mathcal{P}(x,t) = |\psi(x,t)|^2$$
* La condition de normalisation s'écrit :
$$\int_{-\infty}^{+\infty} |\psi(x,t)|^2 \, \text{d}x = 1$$

---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### 2.1. Équation de Schrödinger dépendante du temps
L'évolution temporelle du vecteur d'état $\vert \psi(t) \rangle$ est régie par l'équation de Schrödinger :
$$i\hbar \frac{\partial}{\partial t} \vert \psi(t) \rangle = \hat{H} \vert \psi(t) \rangle$$
où $\hat{H}$ est l'opérateur hamiltonien du système, représentant son énergie totale.

### 2.2. Équation de Schrödinger stationnaire
Dans le cas où le hamiltonien $\hat{H}$ ne dépend pas explicitement du temps, on cherche des solutions sous la forme de variables séparées :
$$\psi(x,t) = \varphi(x)\chi(t)$$
En injectant cette forme dans l'équation de Schrödinger, on obtient l'équation aux valeurs propres pour la partie spatiale (équation de Schrödinger stationnaire) :
$$\hat{H} \varphi(x) = E \varphi(x)$$
où $E$ est l'énergie propre associée à l'état stationnaire $\varphi(x)$. L'évolution temporelle associée est alors :
$$\chi(t) = \exp\left(-i \frac{E}{\hbar} t\right)$$

### 2.3. Démonstration : Conservation de la norme (Équation de continuité)
* **Objectif :** Démontrer que si $\vert \psi(t) \rangle$ évolue selon l'équation de Schrödinger, la probabilité totale est conservée au cours du temps ($\frac{\partial}{\partial t} \int |\psi(x,t)|^2 \text{d}x = 0$).

1. Partons de l'équation de Schrödinger et de son adjointe :
$$i\hbar \frac{\partial \psi}{\partial t} = -\frac{\hbar^2}{2m} \frac{\partial^2 \psi}{\partial x^2} + V(x)\psi$$
$$-i\hbar \frac{\partial \psi^*}{\partial t} = -\frac{\hbar^2}{2m} \frac{\partial^2 \psi^*}{\partial x^2} + V(x)\psi^*$$
*(en considérant un hamiltonien standard $\hat{H} = -\frac{\hbar^2}{2m}\frac{\partial^2}{\partial x^2} + V(x)$)*.

2. Calculons la dérivée temporelle de la densité de probabilité $\rho(x,t) = \psi^* \psi$ :
$$\frac{\partial}{\partial t}(\psi^* \psi) = \frac{\partial \psi^*}{\partial t} \psi + \psi^* \frac{\partial \psi}{\partial t}$$

3. Remplaçons les dérivées temporelles par les expressions issues de Schrödinger :
$$\frac{\partial (\psi^* \psi)}{\partial t} = \left( \frac{i\hbar}{2m} \frac{\partial^2 \psi^*}{\partial x^2} - \frac{i}{\hbar}V\psi^* \right)\psi + \psi^* \left( -\frac{i\hbar}{2m} \frac{\partial^2 \psi}{\partial x^2} + \frac{i}{\hbar}V\psi \right)$$
Les termes potentiels s'annulent. Il vient :
$$\frac{\partial (\psi^* \psi)}{\partial t} = \frac{i\hbar}{2m} \left( \psi \frac{\partial^2 \psi^*}{\partial x^2} - \psi^* \frac{\partial^2 \psi}{\partial x^2} \right) = \frac{\partial}{\partial x} \left[ \frac{\bar{h}}{2mi} \left( \psi^* \frac{\partial \psi}{\partial x} - \frac{\partial \psi^*}{\partial x} \psi \right) \right]$$

4. On introduit le vecteur densité de courant de probabilité $j(x,t)$ :
$$j(x,t) = \frac{\hbar}{2mi} \left( \psi^* \frac{\partial \psi}{\partial x} - \psi \frac{\partial \psi^*}{\partial x} \right)$$
L'équation locale de conservation de la probabilité s'écrit alors :
$$\frac{\partial \rho}{\partial t} + \frac{\partial j}{\partial x} = 0$$

5. En intégrant sur tout l'espace (et en supposant $\psi$ de carré sommable tendant vers $0$ en $\pm \infty$) :
$$\frac{\mathrm{d}}{\mathrm{d}t} \int_{-\infty}^{+\infty} |\psi(x,t)|^2 \, \text{d}x = \left[ j(x,t) \right]_{-\infty}^{+\infty} = 0$$
La norme $\langle \psi(t) \vert \psi(t) \rangle$ est donc constante au cours du temps. $\blacksquare$

---

## 💡 3. Méthodes classiques de résolution

### 3.1. Résolution d'un puits de potentiel infini 1D
Considérons une particule de masse $m$ confinée dans le domaine $[0, L]$ tel que :
$$V(x) = 0 \text{ si } x \in ]0, L[ \quad \text{et} \quad V(x) = +\infty \text{ sinon}$$

1. **Conditions aux limites :** Par continuité de la fonction d'onde, $\varphi(0) = 0$ et $\varphi(L) = 0$.
2. **Équation différentielle :** À l'intérieur du puits ($V=0$), l'équation stationnaire s'écrit :
$$\frac{\mathrm{d}^2 \varphi}{\mathrm{d}x^2} + k^2 \varphi = 0 \quad \text{avec} \quad k = \frac{\sqrt{2mE}}{\hbar}$$
3. **Solution générale :** $\varphi(x) = A \sin(kx) + B \cos(kx)$.
4. **Application des conditions aux limites :**
   * $\varphi(0) = 0 \implies B = 0$.
   * $\varphi(L) = 0 \implies A \sin(kL) = 0$ (avec $A \neq 0$ pour éviter la solution triviale).
   * D'où $kL = n\pi$ avec $n \in \mathbb{N}^*$.
5. **Niveaux d'énergie quantifiés :**
$$E_n = \frac{n^2 \pi^2 \hbar^2}{2mL^2}$$
6. **Normalisation :** $\int_0^L |\varphi_n(x)|^2 \text{d}x = 1 \implies A = \sqrt{\frac{2}{L}}$.
Les fonctions propres normalisées sont :
$$\varphi_n(x) = \sqrt{\frac{2}{L}} \sin\left(\frac{n\pi x}{L}\right)$$

### 3.2. Étude de l'effet tunnel
Face à une barrière de potentiel de hauteur $V_0$ et de largeur $a$ (avec $E < V_0$), la fonction d'onde ne s'annule pas immédiatement. Elle décroît exponentiellement dans la barrière mais possède une amplitude non nulle de l'autre côté, traduisant une probabilité non nulle de traverser la barrière (coefficient de transmission $T \neq 0$).

---

## ⚠️ 4. Pièges classiques aux Concours

1. **Oubli de la normalisation :** Ne jamais utiliser une fonction d'onde brute $\psi(x)$ sans s'être assuré qu'elle est normée $\int |\psi|^2 \text{d}x = 1$, en particulier lors du calcul de valeurs moyennes $\langle A \rangle = \langle \psi \vert \hat{A} \vert \psi \rangle$.
2. **Confusion entre opérateur et valeur propre :** $\hat{A} \psi = a \psi$ (où $a$ est un nombre réel ou complexe) et non un opérateur. Écrire des expressions aberrantes du type $\hat{H} = E$ est éliminatoire.
3. **Conditions aux limites de la fonction d'onde :** 
   * $\psi(x,t)$ doit être **continue** partout.
   * Sa dérivée spatiale $\frac{\partial \psi}{\partial x}$ est continue partout **sauf** aux points où le potentiel présente une discontinuité infinie (type "mur de potentiel" ou "delta de Dirac").
4. **Niveaux d'énergie pour $n=0$ :** Dans le cas du puits de potentiel infini, $n=0$ donne $\varphi(x) = 0$ partout (pas de particule). Le fondamental correspond impérativement à ** $n=1$ **.
5. **Incompatibilité des observables :** Deux observables dont les opérateurs ne commutent pas ( $[\hat{A}, \hat{B}] = \hat{A}\hat{B} - \hat{B}\hat{A} \neq 0$ ) ne peuvent pas être mesurées simultanément avec une précision infinie (relations de Heisenberg).