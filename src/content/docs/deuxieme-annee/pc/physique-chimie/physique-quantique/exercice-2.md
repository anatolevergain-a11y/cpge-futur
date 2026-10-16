---
title: 'Exercice 2 : Spin et fermions/bosons'
description: 'Problème d entraînement type concours pour PC.'
---

### 🌐 Énoncé du problème / Étude de cas

La physique statistique quantique distingue deux grandes classes de particules fondamentales en fonction de leur spin : les **bosons** (spin entier) et les **fermions** (spin demi-entier). À basse température, ces statistiques conduisent à des comportements macroscopiques radicalement différents, illustrés par le gaz d'électrons libres dans les métaux (modèle de Sommerfeld) et la condensation de Bose-Einstein dans les gaz ultracroids.

Ce problème se propose d'étudier l'impact de la nature fermionique des électrons sur les propriétés thermodynamiques d'un métal alcalin (le potassium $\text{K}$) à basse température, puis d'aborder la modélisation simplifiée d'un gaz de bosons piégés par un potentiel harmonique. 

*Données numériques et constantes physiques utiles :*
- Constante de Planck réduite : $\hbar \approx 1{,}05 \times 10^{-34} \, \text{J}\cdot\text{s}$
- Masse de l'électron : $m_e \approx 9{,}11 \times 10^{-31} \, \text{kg}$
- Constante de Boltzmann : $k_B \approx 1{,}38 \times 10^{-23} \, \text{J}\cdot\text{K}^{-1}$
- Charge élémentaire : $e \approx 1{,}60 \times 10^{-19} \, \text{C}$
- Température ambiante : $T_0 = 300 \, \text{K}$
- Masse volumique du potassium : $\rho_{\text{K}} \approx 862 \, \text{kg}\cdot\text{m}^{-3}$
- Masse molaire du potassium : $M_{\text{K}} \approx 39{,}1 \, \text{g}\cdot\text{mol}^{-1}$
- Nombre d'Avogadro : $N_A \approx 6{,}02 \times 10^{23} \, \text{mol}^{-1}$

---

### ❓ Questions progressives

#### Partie I : Gaz d'électrons libres dans un métal (Fermions)

On modélise un bloc de potassium métallique de volume $V$ comme un gaz quantique d'électrons libres indépendants confiné dans $V$. Chaque atome de potassium libère un électron dans la bande de conduction.

1. **Calcul de la densité volumique**
   Exprimer puis calculer la densité volumique $n = \frac{N}{V}$ d'électrons de conduction dans le potassium. On négligera l'effet du réseau cristallin des ions (approximation des électrons libres).

2. **États quantiques et place de spin**
   Rappeler la valeur du spin $s$ de l'électron et la multiplicité $g$ des états de spin associés. Dans l'espace des phases (ou espace des vecteurs d'onde $\vec{k}$), quel est le volume élémentaire associé à un état quantique dans une boîte de volume $V$ ?

3. **Énergie de Fermi**
   En déduire l'expression de la sphère de Fermi dans l'espace des $\vec{k}$ à $T = 0 \, \text{K}$ et relier le nombre total d'électrons $N$ au module du vecteur d'onde de Fermi $k_F$. En déduire l'expression de l'énergie de Fermi $E_F = \frac{\hbar^2 k_F^2}{2 m_e}$ en fonction de $n$. Calculer sa valeur numérique en joules puis en électronvolts ($\text{eV}$).

4. **Température de Fermi et analyse critique du modèle**
   On définit la température de Fermi $T_F$ par $k_B T_F = E_F$. Calculer $T_F$ pour le potassium. 
   En comparant $T_F$ à la température ambiante $T_0 = 300 \, \text{K}$, justifiez pourquoi l'approximation de gaz d'électrons à $T = 0 \, \text{K}$ (ou $T \ll T_F$) est pertinente pour étudier les propriétés électroniques des métaux à température ambiante. Discutez brièvement des limites de l'approximation des électrons libres (interactions électron-électron et potentiel du réseau).

---

#### Partie II : Approche macroscopique des bosons et condensation

On s'intéresse désormais à un gaz parfait de $N$ bosons (par exemple des atomes de rubidium ${}^{87}\text{Rb}$, qui possèdent un spin total entier) de masse $m$, piégé dans un potentiel harmonique tridimensionnel isotrope :
$$E_n = \left(n_x + n_y + n_z + \frac{3}{2}\right)\hbar \omega$$
où $n_x, n_y, n_z \in \mathbb{N}$ et $\omega$ est la pulsation du piège.

5. **Niveau fondamental et occupation**
   Écrire l'énergie du niveau fondamental du piège. À très basse température, les bosons ont tendance à s'accumuler massivement dans ce niveau fondamental : c'est la condensation de Bose-Einstein. Expliquer qualitativement pourquoi ce comportement est strictement interdit pour les électrons (fermions) en vertu du principe d'exclusion de Pauli.

---

### 💡 Pistes & Indications

- **Q1 :** Utilisez la masse molaire et la masse volumique pour obtenir le nombre d'atomes par unité de volume, puis reliez-le à la valence du potassium.
- **Q2 :** Le spin de l'électron est $s = 1/2$. La dégénérescence de spin est $g = 2s + 1 = 2$. Dans l'espace des $k$, un état occupe un volume $\left(\frac{2\pi}{L}\right)^3$ avec $V = L^3$.
- **Q3 :** Intégrez la densité d'états dans l'espace des phases pour $k \in [0, k_F]$. Attention au facteur de spin $2$.
- **Q4 :** Calculez $T_F = E_F / k_B$. Comparez avec $300 \, \text{K}$. Pour l'analyse critique, pensez au fait que les électrons réels subissent le potentiel périodique des ions (bandes d'énergie) et des forces coulombiennes.
- **Q5 :** Le principe de Pauli interdit à deux fermions identiques d'occuper le même état quantique, contrairement aux bosons qui n'ont aucune restriction de cohabitation macroscopique.

---

### 📋 Corrigé détaillé et analyse des résultats

#### Partie I : Gaz d'électrons libres dans un métal (Fermions)

1. **Densité volumique $n$ :**
   Le nombre d'moles par unité de volume (concentration molaire) est :
   $$c_m = \frac{\rho_{\text{K}}}{M_{\text{K}}}$$
   Le nombre d'électrons par unité de volume est $n = N_A \cdot c_m = \frac{N_A \rho_{\text{K}}}{M_{\text{K}}}$.
   A.N. :
   $$n = \frac{6{,}02 \times 10^{23} \times 862}{39{,}1 \times 10^{-3}} \approx 1{,}33 \times 10^{28} \, \text{m}^{-3}$$

2. **Dégénérescence de spin et volume élémentaire :**
   L'électron est un fermion de spin $s = 1/2$. Le nombre d'états de spin possibles est $g = 2s + 1 = 2$ (états "spin up" et "spin down").
   Dans une boîte cubique de volume $V = L^3$, les composantes du vecteur d'onde $\vec{k} = (k_x, k_y, k_z)$ sont quantifiées par les conditions aux limites périodiques :
   $$k_x = \frac{2\pi n_x}{L}, \quad k_y = \frac{2\pi n_y}{L}, \quad k_z = \frac{2\pi n_z}{L} \quad (n_i \in \mathbb{Z})$$
   Le volume élémentaire associé à un état dans l'espace des $\vec{k}$ est donc $\Delta k_x \Delta k_y \Delta k_z = \left(\frac{2\pi}{L}\right)^3 = \frac{(2\pi)^3}{V}$.

3. **Énergie de Fermi $E_F$ :**
   À $T = 0 \, \text{K}$, les électrons remplissent tous les états d'énergie croissante jusqu'à une énergie maximale, l'énergie de Fermi $E_F$, ce qui correspond dans l'espace des $\vec{k}$ à une sphère de rayon $k_F$ (sphère de Fermi).
   Le nombre total d'électrons $N$ s'obtient en intégrant le nombre d'états disponibles en tenant compte de la dégénérescence de spin :
   $$N = 2 \times \frac{V}{(2\pi)^3} \times \iiint_{\text{sphère de rayon } k_F} d^3\vec{k} = 2 \times \frac{V}{(2\pi)^3} \times \frac{4\pi}{3} k_F^3$$
   $$N = \frac{V}{3\pi^2} k_F^3 \implies k_F = (3\pi^2 n)^{1/3}$$
   L'énergie de Fermi vaut :
   $$E_F = \frac{\hbar^2 k_F^2}{2 m_e} = \frac{\hbar^2}{2 m_e} (3\pi^2 n)^{2/3}$$
   A.N. :
   - Calcul de $k_F$ : 
     $$k_F = \left(3 \times \pi^2 \times 1{,}33 \times 10^{28}\right)^{1/3} \approx 1{,}34 \times 10^{10} \, \text{m}^{-1}$$
   - Calcul de $E_F$ en Joules :
     $$E_F = \frac{(1{,}05 \times 10^{-34})^2 \times (1{,}34 \times 10^{10})^2}{2 \times 9{,}11 \times 10^{-31}} \approx 3{,}38 \times 10^{-19} \, \text{J}$$
   - Conversion en $\text{eV}$ :
     $$E_F = \frac{3{,}38 \times 10^{-19}}{1{,}60 \times 10^{-19}} \approx 2{,}11 \, \text{eV}$$

4. **Température de Fermi et analyse critique :**
   La température de Fermi est :
   $$T_F = \frac{E_F}{k_B} = \frac{3{,}38 \times 10^{-19}}{1{,}38 \times 10^{-23}} \approx 2{,}45 \times 10^4 \, \text{K}$$
   *Analyse critique :* On constate que $T_0 = 300 \, \text{K} \ll T_F \approx 24500 \, \text{K}$. Le rapport $\frac{T_0}{T_F} \approx 0{,}012$ est très petit. Cela valide rigoureusement l'hypothèse selon laquelle le gaz d'électrons se comporte, à température ambiante, comme s'il était à une température voisine du zéro absolu (les excitations thermiques ne concernent qu'une infime fraction des électrons situés au voisinage immédiat de la surface de Fermi).
   *Limites du modèle :* L'approximation des électrons libres néglige les interactions électrostatiques entre les électrons (répulsion coulombienne) et l'influence du potentiel périodique créé par les noyaux ioniques du réseau cristallin. Pour aller plus loin (modèle des électrons presqu'libres, bandes d'énergie), il conviendrait d'introduire le théorème de Bloch, qui explique notamment la distinction physique entre métaux, isolants et semi-conducteurs.

---

#### Partie II : Approche macroscopique des bosons et condensation

5. **Niveau fondamental et principe de Pauli :**
   L'énergie du niveau fondamental du piège harmonique 3D est :
   $$E_0 = \frac{3}{2} \hbar \omega$$
   Les bosons obéissent à la statistique de Bose-Einstein : ils n'ont **aucune restriction** sur le nombre de particules pouvant occuper un même état quantique. Lorsque la température décroît en deçà d'une température critique, une fraction macroscopique du nombre total de bosons $N$ s'accumule directement dans cet unique état fondamental d'énergie $\frac{3}{2}\hbar\omega$.
   
   En revanche, les électrons sont des **fermions** et obéissent au **principe d'exclusion de Pauli** : deux électrons (ou plus) ne peuvent pas se trouver simultanément dans le même état quantique (caractérisé par les mêmes nombres quantiques spatiaux et de spin). Par conséquent, même à $T = 0 \, \text{K}$, les électrons sont contraints de remplir progressivement tous les niveaux d'énergie disponibles un à un, formant la mer de Fermi décrite en Partie I, interdisant toute condensation massive dans l'état fondamental unique.