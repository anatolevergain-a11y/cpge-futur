---
title: 'Exercice 1 : Équation de Schrödinger et puits de potentiel'
description: 'Problème d entraînement type concours pour PC.'
---

### 🌐 Énoncé du problème / Étude de cas

La physique quantique s'avère indispensable pour décrire la matière à l'échelle nanométrique. Dans le cadre de l'élaboration de nouveaux nanomatériaux opto-électroniques (tels que les boîtes quantiques ou *quantum dots*), l'étude des états électroniques confinée est primordiale. 

On s'intéresse à un électron de masse $m$ et de charge $-e$ contraint de se mouvoir selon une seule dimension d'espace $x$, modélisé par un **puits de potentiel infini** défini par l'énergie potentielle $E_p(x)$ suivante :
$$
E_p(x) = \begin{cases} 
0 & \text{si } 0 < x < L \\
+\infty & \text{sinon}
\end{cases}
$$
où $L$ représente la largeur du puits, typiquement de l'ordre de quelques nanomètres ($L = 5{,}0\,\text{nm}$).

L'objectif de ce problème est de déterminer les niveaux d'énergie quantifiés de cet électron, de proposer une application aux semi-conducteurs, puis d'analyser de manière critique les limites de ce modèle unidimensionnel idéalisé face à la réalité physique.

---

### ❓ Questions progressives (incluant des questions d'analyse critique)

1. **Rappel et mise en équation :** Établir l'équation de Schrödinger indépendante du temps pour une particule de masse $m$ dans un potentiel $E_p(x)$, en régime stationnaire. Préciser l'expression mathématique de la fonction d'onde $\psi(x)$ et la condition de normalisation.
2. **Résolution à l'intérieur du puits :** Pour $0 < x < L$, montrer que l'équation se ramène à une équation différentielle harmonique. Exprimer la solution générale sous une forme trigonométrique.
3. **Conditions aux limites et quantification :** En exploitant les conditions aux limites physiques que doit satisfaire la fonction d'onde $\psi(x)$ en $x = 0$ et $x = L$, montrer que l'énergie de l'électron ne peut prendre que des valeurs discrètes $E_n$ que l'on exprimera en fonction de $n$ (entier strictement positif), $h$ (constante de Planck), $m$ et $L$.
4. **Normalisation :** Déterminer la fonction d'onde normalisée $\psi_n(x)$ associée à l'état d'énergie $E_n$.
5. **Application numérique et ordre de grandeur :** 
   - Rappeler ou utiliser la masse effective de l'électron dans l'arséniure de gallium ($\text{GaAs}$), souvent fixée à $m^* \approx 0{,}067 \, m_0$, où $m_0$ est la masse de l'électron libre ($m_0 \approx 9{,}109 \times 10^{-31}\,\text{kg}$).
   - Calculer l'énergie de transition $ \Delta E = E_2 - E_1 $ pour une boîte quantique de largeur $L = 5{,}0\,\text{nm}$.
   - En déduire la longueur d'onde $\lambda$ du photon émis lors de la désexcitation du niveau $n=2$ vers le niveau $n=1$. À quel domaine du spectre électromagnétique cela correspond-il ?
6. **Analyse critique et limites du modèle :** 
   - Le modèle du puits de potentiel *infini* suppose des barrières de potentiel impénétrables. Dans un dispositif réel en $\text{GaAs}$, le potentiel de confinement est fini (hauteur $V_0$ finie). Quel est l'impact physique qualitatif d'un puits fini sur la fonction d'onde et sur les niveaux d'énergie par rapport au modèle idéal ?
   - Discuter brièvement de la pertinence d'un modèle 1D pour décrire une boîte quantique tridimensionnelle de forme quasi-sphérique.

---

### 💡 Pistes & Indications

- **Q1 :** L'équation de Schrödinger stationnaire s'écrit $-\frac{\hbar^2}{2m} \frac{\mathrm{d}^2\psi}{\mathrm{d}x^2} + E_p(x)\psi = E\psi$. Pensez à relier $\hbar$ à la constante de Planck $h$.
- **Q2 & Q3 :** À l'extérieur du puits, la probabilité de présence doit être nulle, donc $\psi(x) = 0$. Par continuité, $\psi(0) = 0$ et $\psi(L) = 0$.
- **Q5 :** Utilisez la relation de Planck-Einstein $ \Delta E = h \nu = \frac{hc}{\lambda} $, avec $c \approx 3\cdot 10^8\,\text{m}\cdot\text{s}^{-1}$ et $h \approx 6{,}626 \times 10^{-34}\,\text{J}\cdot\text{s}$. Convertissez si besoin les Joules en électron-volts ($\text{eV}$).
- **Q6 :** Dans un puits fini, la fonction d'onde "fuit" (effet tunnel) légèrement à l'extérieur des limites $0$ et $L$, ce qui a pour conséquence d'augmenter la longueur d'onde effective du système et donc de *diminuer* l'espacement des niveaux d'énergie par rapport au puits infini.

---

### 📋 Corrigé détaillé et analyse des résultats

#### 1. Équation de Schrödinger stationnaire
Pour une particule de masse $m$ dans un potentiel unidimensionnel $E_p(x)$, l'équation de Schrödinger indépendante du temps s'écrit :
$$
-\frac{\hbar^2}{2m} \frac{\mathrm{d}^2\psi(x)}{\mathrm{d}x^2} + E_p(x)\psi(x) = E\psi(x)
$$
avec $\hbar = \frac{h}{2\pi}$. La fonction d'onde $\psi(x)$ doit être de carré sommable, ce qui se traduit par la condition de normalisation :
$$
\int_{-\infty}^{+\infty} |\psi(x)|^2 \, \mathrm{d}x = 1
$$

#### 2. Résolution à l'intérieur du puits
À l'intérieur du puits ($0 < x < L$), $E_p(x) = 0$. L'équation devient :
$$
\frac{\mathrm{d}^2\psi(x)}{\mathrm{d}x^2} + k^2 \psi(x) = 0 \quad \text{avec} \quad k = \frac{\sqrt{2mE}}{\hbar}
$$
La solution générale de cette équation différentielle linéaire à coefficients constants est de la forme :
$$
$\psi(x) = A \cos(kx) + B \sin(kx)
$$
où $A$ et $B$ sont des constantes complexes déterminées par les conditions aux limites.

#### 3. Conditions aux limites et quantification de l'énergie
- À l'extérieur du puits ($x < 0$ et $x > L$), le potentiel est infini ($E_p = +\infty$). Pour que l'énergie reste finie, la fonction d'onde doit nécessairement s'annuler : $\psi(x) = 0$ pour $x \notin ]0, L[$.
- Par continuité de la fonction d'onde partout dans l'espace, on en déduit aux frontières :
  1. $\psi(0) = 0 \implies A \cos(0) + B \sin(0) = 0 \implies A = 0$.
  2. $\psi(L) = 0 \implies B \sin(kL) = 0$.

Pour obtenir une solution non triviale ($B \neq 0$), il faut que :
$$
kL = n\pi \quad (n \in \mathbb{N}^*)
$$
En remplaçant $k$ par son expression, on obtient $k = \frac{n\pi}{L} = \frac{\sqrt{2mE}}{\hbar}$, ce qui conduit aux niveaux d'énergie quantifiés :
$$
E_n = \frac{n^2 \pi^2 \hbar^2}{2m L^2} = \frac{n^2 h^2}{8 m L^2}
$$

#### 4. Normalisation de la fonction d'onde
La fonction d'onde s'écrit $\psi_n(x) = B \sin\left(\frac{n\pi x}{L}\right)$ pour $x \in [0, L]$. Appliquons la condition de normalisation :
$$
\int_{0}^{L} |B|^2 \sin^2\left(\frac{n\pi x}{L}\right) \mathrm{d}x = 1
$$
En utilisant la relation trigonométrique $\sin^2(\theta) = \frac{1 - \cos(2\theta)}{2}$ et sachant que l'intégrale sur une période du terme en cosinus s'annule :
$$
|B|^2 \frac{L}{2} = 1 \implies B = \sqrt{\frac{2}{L}} \quad (\text{à un phase près})
$$
Ainsi :
$$
\psi_n(x) = \sqrt{\frac{2}{L}} \sin\left(\frac{n\pi x}{L}\right) \quad \text{pour } x \in [0, L]
$$

#### 5. Application numérique et ordres de grandeur
- Données : $m^* = 0{,}067 \times 9{,}109 \times 10^{-31}\,\text{kg} \approx 6{,}10 \times 10^{-32}\,\text{kg}$, $L = 5{,}0\,\text{nm} = 5{,}0 \times 10^{-9}\,\text{m}$, $h = 6{,}626 \times 10^{-34}\,\text{J}\cdot\text{s}$.
- Calcul de l'énergie du fondamental ($n=1$) et du premier état excité ($n=2$) :
  $$
  E_1 = \frac{1^2 \times (6{,}626 \times 10^{-34})^2}{8 \times (6{,}10 \times 10^{-32}) \times (5{,}0 \times 10^{-9})^2} \approx 3{,}58 \times 10^{-21}\,\text{J} \approx 0{,}0224\,\text{eV}
  $$
  $$
  E_2 = 2^2 \times E_1 = 4 \times 0{,}0224\,\text{eV} = 0{,}0896\,\text{eV}
  $$
- Énergie de transition $\Delta E = E_2 - E_1 = 3 E_1 \approx 0{,}0672\,\text{eV} \approx 1{,}08 \times 10^{-20}\,\text{J}$.
- Longueur d'onde du photon associé :
  $$
  \lambda = \frac{hc}{\Delta E} = \frac{(6{,}626 \times 10^{-34}) \times (3{,}00 \times 10^8)}{1{,}08 \times 10^{-20}} \approx 1{,}84 \times 10^{-5}\,\text{m} = 18{,}4\,\mu\text{m}
  $$
  Cette longueur d'onde se situe dans le domaine de l'**infrarouge lointain**.

#### 6. Analyse critique et limites du modèle
- **Puits de potentiel fini vs infini :** Dans un composant réel, le confinement est assuré par une différence de bande interdite entre deux matériaux semi-conducteurs (par exemple, $\text{GaAs}$ pris en sandwich dans du $\text{AlGaAs}$). Le potentiel n'est pas infini ($V_0$ fini). Physiquement, la fonction d'onde ne s'annule pas brutalement aux parois $x=0$ et $x=L$ mais décroît de façon exponentielle à l'extérieur (effet tunnel). Cette pénétration de la fonction d'onde dans les barrières élargit "effectivement" la boîte quantique, ce qui conduit à des **niveaux d'énergie réels légèrement inférieurs** à ceux prédits par le modèle du puits infini.
- **Dimensionalité (1D vs 3D) :** Modéliser une boîte quantique par un système unidimensionnel néglige le confinement orthogonal selon les axes $y$ et $z$. Si la boîte est de forme quasi-sphérique (confinement isotrope 3D), les énergies s'additionnent selon les trois dimensions ($E_{nx, ny, nz} \propto n_x^2 + n_y^2 + n_z^2$), ce qui lève partiellement la dégénérescence et modifie significativement la densité d'états optiques par rapport au modèle 1D simplificateur.