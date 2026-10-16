---
title: 'Exercice : Puits de potentiel infini et quantification des niveaux'
description: 'Problème d entraînement type concours pour MP - Physique-Chimie (Introduction à la mécanique quantique).'
---

### 🌐 Énoncé du problème / Cadre d'étude

On considère une particule de masse $m$, assimilée à un point matériel, se déplaçant selon un axe $(Ox)$ et soumise à un potentiel effectif unidimensionnel dit « puits de potentiel infini » défini par :

$$V(x) = \begin{cases} 0 & \text{si } 0 < x < L \\ +\infty & \text{sinon} \end{cases}$$

Ce modèle idéalisé permet de rendre compte, en première approximation, du comportement d'électrons libres dans un métal ou du mouvement d'un électron au sein d'une molécule conjuguée (modèle de Hückel ou des électrons $\pi$ libres).

Dans le cadre de la mécanique quantique stationnaire, l'état de la particule est décrit par une fonction d'onde $\psi(x)$, solution de l'équation de Schrödinger indépendante du temps (ESIT) :

$$-\frac{\hbar^2}{2m} \frac{\text{d}^2\psi}{\text{d}x^2} + V(x)\psi(x) = E\psi(x)$$

où $E$ représente l'énergie totale de la particule et $\hbar = \frac{h}{2\pi}$ la constante de Planck réduite.

---

### ❓ Questions progressives

1. **Conditions aux limites et équation d'onde :** À l'aide de considérations physiques sur la fonction d'onde (continuité, carré sommable), déterminer les conditions aux limites que doit satisfaire $\psi(x)$ en $x = 0$ et $x = L$. Écrire l'ESIT à l'intérieur du puits.
2. **Recherche des solutions :** En posant $k^2 = \frac{2mE}{\hbar^2}$, déterminer la forme générale de la solution de l'ESIT pour $0 < x < L$. En déduire l'expression des fonctions propres normalisées $\psi_n(x)$ associées à des énergies $E_n$, où $n$ est un entier strictement positif.
3. **Quantification de l'énergie :** Exprimer les niveaux d'énergie autorisés $E_n$ en fonction de $m$, $L$, $\hbar$ (ou $h$) et $n$. Commenter ce résultat du point de vue de la physique classique.
4. **Application numérique et ordre de grandeur :** On considère un électron ($m \approx 9{,}11 \times 10^{-31} \text{ kg}$) confiné dans un puits de dimension nanométrique $L = 1{,}0 \text{ nm}$.
   - Calculer l'énergie du fondamental $E_1$ et du premier niveau excité $E_2$ en Joules, puis en électron-volts ($\text{eV}$).
   - Déterminer la longueur d'onde $\lambda$ du photon susceptible de provoquer une transition du niveau $n=1$ vers le niveau $n=2$. Dans quel domaine du spectre électromagnétique se situe ce rayonnement ?

---

### 💡 Pistes & Indications méthodologiques

- **Question 1 :** Rappelez-vous qu'une probabilité de présence infinie n'a pas de sens physique. La fonction d'onde doit donc être nulle là où le potentiel est infini. La continuité de $\psi(x)$ sur tout l'axe réel est également une exigence fondamentale.
- **Question 2 :** L'équation différentielle obtenue est linéaire homogène du second ordre à coefficients constants. Pensez aux solutions sous forme de sinus et cosinus. Utilisez la condition en $x = 0$ pour éliminer l'un des termes.
- **Question 3 :** La condition en $x = L$ va contraindre le paramètre $k$ (et donc l'énergie) à ne prendre que des valeurs discrètes. C'est l'origine de la *quantification*.
- **Question 4 :** Utilisez la relation de Planck-Einstein $\Delta E = h \nu = \frac{hc}{\lambda}$ pour relier la différence d'énergie à la longueur d'onde du photon absorbé.

---

### 📋 Corrigé détaillé pas à pas

#### 1. Conditions aux limites et équation d'onde

* **À l'extérieur du puits ($x \le 0$ et $x \ge L$) :** Le potentiel est infini ($V(x) = +\infty$). Si l'énergie $E$ de la particule est finie, l'ESIT impose que $\psi(x) = 0$ presque partout dans ces zones, sans quoi le terme potentiel $(V\psi)$ divergerait. 
* **Continuité :** Par continuité de la fonction d'onde $\psi(x)$ sur tout l'axe réel (exigence liée à la densité de probabilité de présence qui doit être continue), on en déduit immédiatement les conditions aux limites :
  $$\psi(0) = 0 \quad \text{et} \quad \psi(L) = 0$$

* **À l'intérieur du puits ($0 < x < L$) :** Le potentiel $V(x)$ est nul. L'ESIT se simplifie sous la forme :
  $$-\frac{\hbar^2}{2m} \frac{\text{d}^2\psi}{\text{d}x^2} = E\psi(x) \implies \frac{\text{d}^2\psi}{\text{d}x^2} + \frac{2mE}{\hbar^2}\psi(x) = 0$$

---

#### 2. Recherche des solutions et fonctions propres

En posant $k^2 = \frac{2mE}{\hbar^2}$ (avec $k > 0$ car $E > 0$ pour un état lié dans ce puits), l'équation différentielle devient :
$$\frac{\text{d}^2\psi}{\text{d}x^2} + k^2\psi(x) = 0$$

La solution générale de cette équation linéaire s'écrit sous la forme :
$$\psi(x) = A \cos(kx) + B \sin(kx)$$
où $A$ et $B$ sont des constantes complexes déterminées par les conditions aux limites et la condition de normalisation.

* Utilisons la première condition $\psi(0) = 0$ :
  $$\psi(0) = A \cos(0) + B \sin(0) = A = 0$$
  La solution se réduit donc à : $\psi(x) = B \sin(kx)$.

* Utilisons la seconde condition $\psi(L) = 0$ :
  $$\psi(L) = B \sin(kL) = 0$$
  Pour obtenir une solution non triviale ($B \neq 0$, faute de quoi la particule ne serait nulle part), il faut que :
  $$kL = n\pi \quad (n \in \mathbb{Z})$$
  Les valeurs négatives de $n$ ne donnent pas de nouvelles fonctions indépendantes (le sinus est impair), et $n = 0$ conduit à la solution nulle. On retient donc les entiers strictement positifs : **$n \in \mathbb{N}^*$**.

  On a ainsi : $k_n = \frac{n\pi}{L}$.

* **Normalisation :** La fonction d'onde doit satisfaire la condition de normalisation $\int_{-\infty}^{+\infty} |\psi(x)|^2 \text{d}x = 1$, soit ici :
  $$\int_{0}^{L} |B|^2 \sin^2\left(\frac{n\pi x}{L}\right) \text{d}x = 1$$
  En utilisant la formule $\sin^2(\theta) = \frac{1 - \cos(2\theta)}{2}$ :
  $$|B|^2 \left[ \frac{x}{2} - \frac{L}{4n\pi} \sin\left(\frac{2n\pi x}{L}\right)\right]_0^L = |B|^2 \frac{L}{2} = 1$$
  On choisit par convention une phase nulle pour $B$, soit $B = \sqrt{\frac{2}{L}}$.

  Les **fonctions propres normalisées** sont donc :
  $$\boxed{\psi_n(x) = \sqrt{\frac{2}{L}} \sin\left(\frac{n\pi x}{L}\right)} \quad (\text{pour } 0 < x < L)$$

---

#### 3. Quantification de l'énergie

Puisque $k_n^2 = \frac{2mE_n}{\hbar^2}$ et que $k_n = \frac{n\pi}{L}$, on en déduit les niveaux d'énergie autorisés :
$$\frac{2mE_n}{\hbar^2} = \frac{n^2\pi^2}{L^2} \implies E_n = \frac{n^2 \pi^2 \hbar^2}{2m L^2}$$

Sachant que $\hbar = \frac{h}{2\pi}$, on obtient l'expression finale usuelle :
$$\boxed{E_n = \frac{n^2 h^2}{8m L^2}}$$

* **Commentaire physique :** Contrairement à la mécanique classique où l'énergie d'une particule dans un tel système peut prendre n'importe quelle valeur continue, la mécanique quantique (via l'équation de Schrödinger et les conditions aux limites) impose que l'énergie ne puisse prendre que des valeurs *discrètes* : c'est le phénomène de **quantification des niveaux d'énergie**. De plus, l'énergie du fondamental ($n=1$) n'est pas nulle ($E_1 > 0$), ce qui est une illustration directe du principe d'incertitude de Heisenberg (une localisation spatiale exacte dans un intervalle $L$ implique une incertitude sur la quantité de mouvement, donc une énergie cinétique minimale non nulle).

---

#### 4. Application numérique

* **Données du problème :**
  - $m = 9{,}11 \times 10^{-31} \text{ kg}$
  - $L = 1{,}0 \text{ nm} = 1{,}0 \times 10^{-9} \text{ m}$
  - $h = 6{,}626 \times 10^{-34} \text{ J}\cdot\text{s}$

* **Calcul de $E_1$ :**
  $$E_1 = \frac{1^2 \times (6{,}626 \times 10^{-34})^2}{8 \times (9{,}11 \times 10^{-31}) \times (1{,}0 \times 10^{-9})^2}$$
  $$E_1 = \frac{4{,}390 \times 10^{-67}}{7{,}288 \times 10^{-48}} \approx 6{,}02 \times 10^{-20} \text{ J}$$

  Conversion en électron-volts ($\text{1 eV} = 1{,}602 \times 10^{-19} \text{ J}$) :
  $$E_1 = \frac{6{,}02 \times 10^{-20}}{1{,}602 \times 10^{-19}} \approx \boxed{0{,}38 \text{ eV}}$$

* **Calcul de $E_2$ :**
  Puisque $E_n \propto n^2$, on a $E_2 = 2^2 \times E_1 = 4 \times E_1$ :
  $$E_2 = 4 \times 0{,}38 \text{ eV} \approx \boxed{1{,}52 \text{ eV}}$$

* **Longueur d'onde de la transition $n=1 \to n=2$ :**
  La variation d'énergie est $\Delta E = E_2 - E_1 = 3 E_1$. 
  Par la relation de Planck-Einstein :
  $$\Delta E = \frac{hc}{\lambda} \implies \lambda = \frac{hc}{\Delta E}$$
  A.N. :
  $$\lambda = \frac{(6{,}626 \times 10^{-34} \text{ J}\cdot\text{s}) \times (3{,}00 \times 10^8 \text{ m}\cdot\text{s}^{-1})}{3 \times (6{,}02 \times 10^{-20} \text{ J})} = \frac{1{,}988 \times 10^{-25}}{1{,}806 \times 10^{-19}} \approx 1{,}10 \times 10^{-6} \text{ m} = \mathbf{1{,}10 \text{ }\mu\text{m}}$$

* **Domaine spectral :** Cette longueur d'onde ($\lambda \approx 1100 \text{ nm}$) se situe dans le domaine de l'**infrarouge** (proche infrarouge).