---
title: 'Exercice 1 : Puits de potentiel'
description: 'Problème d entraînement type concours.'
---

# Concours Blanc - Filière MPI
## Physique-Chimie : Physique quantique et Électromagnétisme
### Problème guidé : Étude d'un puits de potentiel quantique fini et applications

---

### Préambule et notations

L'objectif de ce problème est l'étude du comportement d'une particule quantique de masse $m$ soumise à un potentiel unidimensionnel en cuvette, dit *puits de potentiel fini*. Ce modèle trouve des applications directes en physique des semiconducteurs (hétérostructures, boîtes quantiques) et en physique moléculaire.

On se place dans le cadre de la mécanique quantique non relativiste. L'état stationnaire de la particule est décrit par sa fonction d'onde $\psi(x)$, solution de l'équation de Schrödinger indépendante du temps :
$$\left( -\frac{\hbar^2}{2m} \frac{\mathrm{d}^2}{\mathrm{d}x^2} + V(x) \right) \psi(x) = E \psi(x)$$
où $E$ est l'énergie de la particule et $\hbarəs$ la constante de Planck réduite.

---

## Partie I : Modélisation et mise en équation

On considère le profil de potentiel énergétique défini par :
$$V(x) = \begin{cases} 
0 & \text{si } -a < x < a \\ 
V_0 & \text{si } |x| \ge a 
\end{cases}$$
où $V_0 > 0$ est une constante positive représentant la hauteur des barrières de potentiel, et $2a$ la largeur du puits. On s'intéresse aux états liés, c'est-à-dire d'énergie $E$ telle que $0 < E < V_0$.

### Question 1.1
Découper l'axe des $x$ en trois régions distinctes (Région I : $x < -a$, Région II : $-a < x < a$, Région III : $x > a$). Sur chaque région, écrire l'équation de Schrödinger sous une forme canonique adaptée.

*Corrigé pas à pas :*
Dans chaque région, le potentiel $V(x)$ est constant. L'équation de Schrödinger s'écrit :
- **Région I ($x < -a$) et Région III ($x > a$) :** $V(x) = V_0$. 
  $$\frac{\mathrm{d}^2\psi}{\mathrm{d}x^2} - \frac{2m(V_0 - E)}{\hbar^2} \psi = 0$$
  Puisque $E < V_0$, posons $\alpha = \frac{\sqrt{2m(V_0 - E)}}{\hbar} > 1 \text{ m}^{-1}$ (grandeur homogène à l'inverse d'une longueur). L'équation devient :
  $$\frac{\mathrm{d}^2\psi}{\mathrm{d}x^2} - \alpha^2 \psi = 0$$

- **Région II ($-a < x < a$) :** $V(x) = 0$.
  $$\frac{\mathrm{d}^2\psi}{\mathrm{d}x^2} + \frac{2mE}{\hbar^2} \psi = 0$$
  Posons $k = \frac{\sqrt{2mE}}{\hbar} > 0$ (nombre d'onde). L'équation devient :
  $$\frac{\mathrm{d}^2\psi}{\mathrm{d}x^2} + k^2 \psi = 0$$

---

## Partie II : Résolution générale et parité

### Question 2.1
Donner la solution générale de l'équation de Schrödinger dans les trois régions en tenant compte de la condition physique impérative de normalisation (ou de finitude) de la fonction d'onde lorsque $|x| \to +\infty$.

*Corrigé pas à pas :*
- En $x \to -\infty$ (Région I), la solution générale est de la forme $\psi_I(x) = A e^{\alpha x} + B e^{-\alpha x}$. Pour que $\psi$ reste finie (et donc de carré sommable, condition de normalisation), il faut impérativement que $B = 0$. Ainsi :
  $$\psi_I(x) = A e^{\alpha x} \quad (\text{avec } A \in \mathbb{C})$$
- En $x \to +\infty$ (Région III), par symétrie physique, la solution générale est :
  $$\psi_{III}(x) = C e^{-\alpha x} \quad (\text{avec } C \in \mathbb{C})$$
- Dans la région centrale II ($-a < x < a$), la solution générale est une combinaison linéaire de fonctions sinusoïdales :
  $$\psi_{II}(x) = D \cos(kx) + F \sin(kx) \quad (\text{avec } (D,F) \in \mathbb{C}^2)$$

### Question 2.2
Le potentiel $V(x)$ étant une fonction paire de $x$ ($V(-x) = V(x)$), les solutions de l'équation de Schrödinger peuvent être choisies de parité déterminée (paires ou impaires). Justifier ce résultat, puis exprimer les relations entre les constantes pour les états pairs, puis pour les états impairs.

*Corrigé pas à pas :*
Puisque l'opérateur hamiltonien $\hat{H} = -\frac{\hbar^2}{2m}\frac{\mathrm{d}^2}{\mathrm{d}x^2} + V(x)$ commute avec l'opérateur de parité $\hat{\Pi}$ ($\hat{\Pi}\psi(x) = \psi(-x)$), on peut chercher des états propres communs à $\hat{H}$ et $\hat{\Pi}$. Les fonctions d'onde propres sont donc soit paires ($\psi(-x) = \psi(x)$), soit impaires ($\psi(-x) = -\psi(x)$).

- **Cas des états pairs :** 
  On doit avoir $\psi_I(-x) = \psi_{III}(x)$, soit $A e^{-\alpha x} = C e^{-\alpha x}$, ce qui implique $A = C$. 
  De plus, $\psi_{II}(x)$ ne doit contenir que des termes pairs, donc $F = 0$.
  En résumé pour les états pairs :
  $$\psi(x) = \begin{cases} 
  A e^{\alpha x} & \text{si } x < -a \\ 
  D \cos(kx) & \text{si } -a \le x \le a \\ 
  A e^{-\alpha x} & \text{si } x > a 
  \end{cases}$$

- **Cas des états impairs :**
  On a $\psi_I(-x) = -\psi_{III}(x)$, soit $A e^{-\alpha x} = -C e^{-\alpha x}$, ce qui implique $A = -C$.
  De plus, $\psi_{II}(x)$ ne contient que des termes impairs, donc $D = 0$.
  En résumé pour les états impairs :
  $$\psi(x) = \begin{cases} 
  A e^{\alpha x} & \text{si } x < -a \\ 
  F \sin(kx) & \text{si } -a \le x \le a \\ 
  -A e^{-\alpha x} & \text{si } x > a 
  \end{cases}$$

---

## Partie III : Conditions aux limites et équation de theorie spectrale

Concentrons-nous sur la recherche des états liés **pairs**.

### Question 3.1
Rappeler les conditions aux limites requises pour la fonction d'onde $\psi(x)$ et sa dérivée première $\psi'(x)$ aux interfaces $x = -a$ et $x = a$. En déduire un système d'équations pour les états pairs.

*Corrigé pas à pas :*
Puisque le potentiel $V(x)$ est borné partout (pas de fonction de Dirac), la fonction d'onde $\psi(x)$ et sa dérivée première $\psi'(x)$ doivent être continues partout, en particulier aux frontières $x = a$ et $x = -a$.
Par symétrie, il suffit d'écrire la continuité en $x = a$ :
1. Continuité de la fonction d'onde en $x = a$ :
   $$D \cos(ka) = A e^{-\alpha a}$$
2. Continuité de la dérivée en $x = a$ :
   La dérivée est :
   $$\psi'(x) = \begin{cases} 
   \alpha A e^{\alpha x} & \text{si } x < -a \\ 
   -k D \sin(kx) & \text{si } -a < x < a \\ 
   -\alpha A e^{-\alpha x} & \text{si } x > a 
   \end{cases}$$
   En $x = a$ :
   $$-k D \sin(ka) = -\alpha A e^{-\alpha a}$$

### Question 3.2
En éliminant les amplitudes $A$ et $D$ du système précédent, montrer que l'énergie des états liés pairs est solution d'une équation transcendantale de la forme :
$$k \tan(ka) = \alpha$$

*Corrigé pas à pas :*
En faisant le rapport des deux conditions aux limites (continuité de la dérivée divisée par continuité de la fonction d'onde en $x = a$), on obtient :
$$\frac{-k D \sin(ka)}{D \cos(ka)} = \frac{-\alpha A e^{-\alpha a}}{A e^{-\alpha a}}$$
Soit, en simplifiant les signes négatifs et les amplitudes :
$$k \tan(ka) = \alpha$$
C'est bien l'équation recherchée.

---

## Partie IV : Résolution graphique et analyse physique

### Question 4.1
Afin de rendre l'équation adimensionnée, introduisons les variables muettes suivantes :
Soit $\xi = ka$ et $\eta = \alpha a$. 
1. Exprimer la relation liant $\xi$ et $\eta$ issue de la définition de $k$ et $\alpha$. En déduire l'équation d'un cercle dans le plan $(\xi, \eta)$.
2. Réécrire l'équation transcendantale sous une forme liant $\xi$ et $\eta$.
3. Expliquer brièvement comment déterminer graphiquement les énergies possibles (niveaux d'énergie quantifiés).

*Corrigé pas à pas :*
1. Par définition :
   $$\xi^2 + \eta^2 = (ka)^2 + (\alpha a)^2 = a^2 \left( \frac{2mE}{\hbar^2} + \frac{2m(V_0 - E)}{\hbar^2} \right) = \frac{2m V_0 a^2}{\hbar^2}$$
   Posons $R^2 = \frac{2m V_0 a^2}{\hbar^2}$ (paramètre sans dimension caractéristique du puits). On obtient l'équation d'un cercle de rayon $R$ :
   $$\xi^2 + \eta^2 = R^2$$
2. L'équation transcendantale devient :
   $$\xi \tan(\xi) = \eta$$
3. **Méthode graphique :** 
   Les valeurs admissibles de $\xi$ (et donc les énergies $E = \frac{\hbar^2 \xi^2}{2m a^2}$) correspondent aux abscisses des points d'intersection entre la courbe de la fonction $\eta(\xi) = \xi \tan(\xi)$ et le cercle de rayon $R$ dans le quadrant $\xi > 0, \eta > 0$.

### Question 4.2 : Analyse critique et limite physique
1. Que se passe-t-il si le puits est peu profond ou très étroit, c'est-à-dire si $R < \frac{\pi}{2}$ ? Conclure quant à l'existence d'au moins un état lié pair.
2. Discuter qualitativement du comportement de la particule si $V_0 \to +\infty$ (puits de potentiel infini).

*Corrigé pas à plaindre (Analyse critique) :*
1. Si le rayon du cercle $R = \frac{\sqrt{2mV_0}a}{\hbar}$ est inférieur à $\frac{\pi}{2}$, le cercle intersecte la première branche de la fonction $\xi \tan(\xi)$ (qui part de 0 et tend vers $+\infty$ en $\xi = \frac{\pi}{2}$). 
   **Cependant**, si $R$ est très petit (puits très peu profond ou très étroit), le cercle peut ne pas couper la courbe si $R$ est trop faible, ce qui signifierait l'absence d'état lié pair. En revanche, pour un puits fini symétrique unidimensionnel, il existe *toujours* au moins un état lié (impair) quel que soit $R > 0$, mais pour les états pairs, il existe un seuil $R_{\text{min}}$ en deçà duquel aucun état lié pair n'existe. C'est une différence fondamentale remarquable par rapport au puits infini.
2. Si $V_0 \to +\infty$, alors $R \to +\infty$. Le cercle devient infiniment grand, et la condition $\xi \tan(\xi) = \eta$ avec $\xi^2 + \eta^2 \approx R^2$ impose que $\xi \to n \frac{\pi}{2}$. On retombe exactement sur les niveaux d'énergie du **puits de potentiel infini** bien connus :
   $$E_n = \frac{n^2 \pi^2 \hbar^2}{8 m a^2}$$
   où la fonction d'onde s'annule strictement aux parois $x = \pm a$, ce qui correspond à un "muret" infranchissable (probabilité de présence nulle à l'extérieur).

---
*Fin du problème.*