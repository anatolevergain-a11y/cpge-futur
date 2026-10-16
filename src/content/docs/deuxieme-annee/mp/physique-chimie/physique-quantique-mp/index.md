---
title: "📌 1. Définitions & Cadre d'étude"
description: "Fiche de cours et d'exercice CPGE."
---

## 📌 1. Définitions & Cadre d'étude

Le passage de la physique classique à la physique quantique s'impose pour décrire la matière à l'échelle microscopique, où la constante de Planck $h$ (ou $\hbar = \frac{h}{2\pi}$) ne peut plus être négligée.

*   **Vecteur d'état (ket) :** L'état d'un système quantique à un instant $t$ est représenté par un vecteur $|\psi(t)\rangle$ appartenant à un espace de Hilbert complexe et séparable $\mathcal{E}$.
*   **Représentation spatiale (Fonction d'onde) :** Dans la représentation position, un état pur est décrit par une fonction d'onde $\psi(\vec{r}, t) \in L^2(\mathbb{R}^3, \mathbb{C})$. 
*   **Interprétation probabiliste de Born :** La quantité $|\psi(\vec{r}, t)|^2$ représente la densité de probabilité de présence de la particule à la position $\vec{r}$ et à l'instant $t$. La condition de normalisation s'écrit :
    $$\iiint_{\mathbb{R}^3} |\psi(\vec{r}, t)|^2 \, d^3r = 1$$
Observables: Toute grandeur physique mesurable est représentée par un opérateur linéaire hermitien (ou auto-adjoint) agissant sur $\mathcal{E}$.
*   **Équation de Schrödinger :** 
    *   *Forme générale :* $\hat{H}(t) |\psi(t)\rangle = i\hbar \frac{\partial}{\partial t} |\psi(t)\rangle$, où $\hat{H}$ est l'opérateur hamiltonien (énergie totale).
Stationnaire: Pour un hamiltonien indépendant du temps, $|\psi(t)\rangle = |\psi_E\rangle e^{-i\frac{E}{\hbar}t}$, où $\hat{H} |\psi_E\rangle = E |\psi_E\rangle$.
---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### Théorème : Conservation de la norme de la fonction d'onde
**Énoncé :** Si $|\psi(t)\rangle$ évolue selon l'équation de Schrödinger avec un hamiltonien $\hat{H}$ hermitien, alors la norme $\langle \psi(t) | \psi(t) \rangle$ est indépendante du temps.

**Démonstration :**
1. On considère la dérivée temporelle de la norme carrée :
   $$\frac{d}{dt} \langle \psi(t) | \psi(t) \rangle = \left(\frac{d}{dt}\langle \psi(t)| \right) |\psi(t)\rangle + \langle \psi(t)| \left(\frac{d}{dt}|\psi(t)\rangle\right)$$
2. D'après l'équation de Schrödinger $i\hbar \frac{\partial}{\partial t} |\psi\rangle = \hat{H}|\psi\rangle$, on a :
   $$\frac{\partial}{\partial t} |\psi(t)\rangle = \frac{1}{i\hbar} \hat{H} |\psi(t)\rangle$$
3. Par passage au bra (conjugué hermitien, en se rappelant que $(i\hbar)^* = -i\hbar$ et que $\hat{H}^\dagger = \hat{H}$ car l'hamiltonien est hermitien) :
   $$\frac{\partial}{\partial t} \langle \psi(t) | = -\frac{1}{i\hbar} \langle \psi(t) | \hat{H}^\dagger = -\frac{1}{i\hbar} \langle \psi(t) | \hat{H}$$
4. En reportant dans la dérivée :
   $$\frac{d}{dt} \langle \psi(t) | \psi(t) \rangle = \left( -\frac{1}{i\hbar} \langle \psi(t) | \hat{H} \right) |\psi(t)\rangle + \langle \psi(t) | \left( \frac{1}{i\hbar} \hat{H} |\psi(t)\rangle \right)$$
5. Par factorisation des constantes :
   $$\frac{d}{dt} \langle \psi(t) | \psi(t) \rangle = \frac{1}{i\hbar} \left( -\langle \psi(t) | \hat{H} | \psi(t) \rangle + \langle \psi(t) | \hat{H} | \psi(t) \rangle \right) = 0$$
La norme est donc une constante du mouvement, ce qui est indispensable pour préserver l'interprétation probabiliste (somme des probabilités égale à $1$). $\blacksquare$

---

## 💡 3. Méthodes de calcul & Algorithmes

*   **Recherche des états stationnaires (Puits de potentiel infini 1D) :**
    1. Écrire l'équation de Schrödinger indépendante du temps sur l'intervalle où le potentiel $V(x)$ est nul (ex: $x \in [0, L]$) :
       $$-\frac{\hbar^2}{2m} \frac{d^2\psi}{dx^2} = E\psi$$
    2. Poser $k^2 = \frac{2mE}{\hbar^2}$ pour réécrire l'équation sous la forme d'une équation différentielle linéaire d'ordre 2 :
       $$\frac{d^2\psi}{dx^2} + k^2\psi = 0$$
    3. Injecter les conditions aux limites (continuité de $\psi$ : $\psi(0) = 0$ et $\psi(L) = 0$) pour éliminer la solution en cosinus et quantifier le vecteur d'onde : $k_n = \frac{n\pi}{L}$ avec $n \in \mathbb{N}^*$.
    4. En déduire le spectre des énergies :
       $$E_n = \frac{n^2 \pi^2 \hbar^2}{2mL^2}$$

*   **Calcul d'une valeur moyenne et d'un écart-type :**
    *   Valeur moyenne d'une observable $\hat{A}$ dans l'état $\psi$ : 
        $$\langle A \rangle = \int_{-\infty}^{+\infty} \psi^*(x) \hat{A} \psi(x) \, dx$$
    *   Incertitude (écart-type) : 
        $$\Delta A = \sqrt{\langle \hat{A}^2 \rangle - \langle \hat{A} \rangle^2}$$

---

## ⚠️ 4. Pièges classiques aux Concours

1.  **Oubli de la normalisation :** Ne jamais intégrer ou exploiter une fonction d'onde sans s'assurer au préalable qu'elle est normée ($\langle\psi|\psi\rangle = 1$). C'est une cause fréquente d'élimination ou de perte de points.
2.  **Confusion entre $\psi(x,t)$ et $|\psi(x,t)|^2$ :** La fonction d'onde $\psi$ peut être complexe, mais une grandeur physique mesurable ou une densité de probabilité doit être réelle. Le terme correct est $|\psi|^2 = \psi^* \psi$.
3.  **Mauvaise manipulation des commutateurs :** Deux observables ne commutent pas en general ($[\hat{A}, \hat{B}] = \hat{A}\hat{B} - \hat{B}\hat{A} \neq 0$), ce qui interdit leur mesure simultanée précise (relations de Heisenberg). Ne jamais permuter imprudemment position $\hat{x}$ et impulsion $\hat{p}_x = -i\hbar \frac{\partial}{\partial x}$.
4.  **Conditions aux limites incorrectes :** Pour une fonction d'onde physique, $\psi$ doit être impérativement continue, de carré sommable, et sa dérivée spatiale doit également être continue (sauf aux points où le potentiel présente une discontinuité infinie).