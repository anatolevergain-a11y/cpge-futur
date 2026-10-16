---
title: 'Cours : Physique quantique et dualité onde-corpuscule'
description: 'Synthèse officielle du cours et démonstrations pour CPGE MPI.'
---

## 📌 1. Définitions & Cadre d'étude

Le passage de la physique classique à la physique quantique s'impose pour rendre compte des phénomènes à l'échelle microscopique, où les grandeurs corpusculaires et ondulatoires se rejoignent.

*   **Dualité onde-corpuscule :** Tout objet physique possède simultanément des aspects corpusculaires (énergie $E$, impulsion $\vec{p}$) et ondulatoires (fréquence $\nu$, vecteur d'onde $\vec{k}$).
*   **Relations de de Broglie :** Pour une particule libre de pulsation $\omega$ et de vecteur d'onde $\vec{k}$, associées à une onde de matière :
    $$\begin{cases} E = \hbar \omega \\ \vec{p} = \hbar \vec{k} \end{cases}$$
    avec $\hbar = \frac{h}{2\pi}$ (constante de Planck réduite). La longueur d'onde associée est $\lambda = \frac{h}{\|\vec{p}\|}$.
*   **Vecteur d'état et espace de Hilbert :** L'état d'un système quantique à un instant $t$ est décrit par un vecteur $|\psi(t)\rangle$ appartenant à un espace de Hilbert complexe $\mathcal{H}$ muni d'un produit scalaire.
*   **Fonction d'onde :** Représentation dans la base des positions $\vec{r}$, notée $\psi(\vec{r}, t) = \langle \vec{r} | \psi(t) \rangle$. La probabilité de trouver la particule dans un volume $d\mathcal{V}$ autour de $\vec{r}$ à l'instant $t$ est donnée par :
    $$\mathcal{P}(\vec{r}, t) d\mathcal{V} = |\psi(\vec{r}, t)|^2 d\mathcal{V}$$
    La condition de normalisation impose :
    $$\int_{\mathbb{R}^3} |\psi(\vec{r}, t)|^3 d\mathcal{V} = 1$$
*   **Observables et Opérateurs :** Toute grandeur physique mesurable est représentée par un opérateur linéaire hermitien $\hat{A}$ agissant sur $\mathcal{H}$.

---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### Postulat d'association des opérateurs (Quantification canonique)
Aux coordonnées cartésiennes de position $\hat{x}$ et d'impulsion $\hat{p}_x$, on associe les opérateurs agissant sur les fonctions d'onde $\psi(x)$ :
$$\hat{x} \psi(x) = x \psi(x), \quad \hat{p}_x \psi(x) = -i \hbar \frac{\partial}{\partial x} \psi(x)$$

### Démonstration : Relation de commutation canonique $[\hat{x}, \hat{p}_x]$
Objectif: Établir le commutateur fondamental de la mécanique quantique.*

Soit une fonction test $\psi(x)$ suffisamment régulières. Calculons l'action du commutateur $[\hat{x}, \hat{p}_x] = \hat{x}\hat{p}_x - \hat{p}_x\hat{x}$ sur $\psi(x)$ :

$$[\hat{x}, \hat{p}_x] \psi(x) = \hat{x} \left( -i \hbar \frac{\partial \psi}{\partial x} \right) - \left( -i \hbar \frac{\partial}{\partial x} (\hat{x} \psi) \right)$$

En appliquant la règle de Leibniz pour la dérivation du produit :
$$-i \hbar x \frac{\partial \psi}{\partial x} + i \hbar \left( 1 \cdot \psi + x \frac{\partial \psi}{\partial x} \right) = -i \hbar x \frac{\partial \psi}{\partial x} + i \hbar \psi + i \hbar x \frac{\partial \psi}{\partial x}$$

En simplifiant les termes opposés :
$$[\hat{x}, \hat{p}_x] \psi(x) = i \hbar \psi(x)$$

Puisque cette relation est vraie pour toute fonction test $\psi(x)$, on en déduit l'égalité d'opérateurs :
$$\boxed{[\hat{x}, \hat{p}_x] = i \hbar \hat{id}}$$

### Équation de Schrödinger dépendante du temps
L'évolution temporelle du vecteur d'état $|\psi(t)\rangle$ est régie par l'équation fondamentale :
$$i \hbar \frac{\partial}{\partial t} |\psi(t)\rangle = \hat{H} |\psi(t)\rangle$$
où $\hat{H}$ est l'opérateur hamiltonien du système, représentant l'énergie totale.

---

## 💡 3. Méthodes de calcul & Algorithmes

Pour résoudre un problème de physique quantique en dimension 1 (coordonnée $x$), la méthode standard se décompose ainsi :

1.  **Établissement du Hamiltonien :** 
    Exprimer l'énergie classique du système $H(x, p) = \frac{p^2}{2m} + V(x)$, puis substituer les grandeurs par leurs opérateurs associés pour obtenir $\hat{H} = -\frac{\hbar^2}{2m}\frac{\partial^2}{\partial x^2} + V(x)\hat{id}$.
2.  **Recherche des états stationnaires :** 
    Poser $\psi(x, t) = \varphi(x) e^{-i \frac{E}{\hbar} t}$. L'équation de Schrödinger se ramène à une équation aux valeurs propres (équation de Schrödinger indépendante du temps) :
    $$\hat{H} \varphi(x) = E \varphi(x) \iff -\frac{\hbar^2}{2m} \frac{d^2 \varphi}{dx^2} + V(x)\varphi(x) = E\varphi(x)$$
3.  **Résolution mathématique :** 
    *   Identifier les zones de l'espace selon le signe de $E - V(x)$.
    *   Résoudre l'équation différentielle linéaire du second ordre.
4.  **Application des conditions aux limites :** 
    *   Continuité de la fonction d'onde $\varphi(x)$ et de sa dérivée $\frac{d\varphi}{dx}$ (si le potentiel $V(x)$ ne présente pas de singularité infinie).
    *   Condition de carré-intégrabilité (normalisation $\int |\varphi(x)|^2 dx = 1$).

---

## ⚠️ 4. Pièges classiques aux Concours

*   **Oubli de la normalisation :** Ne jamais oublier de normaliser la fonction d'onde initiale. Une probabilité totale doit impérativement valoir $1$.
*   **Confusion entre $\psi(x,t)$ et $\varphi(x)$ :** L'équation de Schrödinger indépendante du temps ne s'applique **que** pour des états stationnaires (énergies bien définies). Pour une superposition d'états propres d'énergie, l'évolution temporelle générale est $\psi(x,t) = \sum_n c_n \varphi_n(x) e^{-i \frac{E_n}{\hbar} t}$.
*   **Mauvaise manipulation des unités en calcul littéral :** Vérifier systématiquement l'homogénéité des expressions en utilisant $[ \hat{H} ] = \text{J}$, $[ \hbar ] = \text{J}\cdot\text{s}$, et $[ x ] = \text{m}$.
*   **Conditions aux limites sur la dérivée :** Si le potentiel $V(x)$ contient un terme en $\delta$ de Dirac (puits ou barrière de Dirac), la fonction d'onde reste continue, mais sa dérivée présente une **discontinuité** qu'il faut calculer en intégrant l'équation de Schrödinger au voisinage du point de discontinuité.