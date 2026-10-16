---
title: 'X-ENS - Physique (Mécanique & Électromagnétisme)'
description: 'Sujet type concours corrigé pas à pas pour la filière MP.'
sidebar:
  badge:
    text: 'Annale Concours'
    variant: 'caution'
---

## 📄 Partie 1 : Énoncé du Problème

### Dynamique quantique d'un électron relativiste en champ électromagnétique intense et effets radiatifs

Le présent problème se propose d'étudier le comportement d'un électron de masse $m$ et de charge $-e$ ($e > 0$) soumis à un champ électromagnétique extérieur intense, en s'affranchissant progressivement du cadre de la mécanique classique pour aborder la formulation quantique et l'interaction avec le rayonnement du vide (électrodynamique quantique de non-équilibre).

Dans un premier temps (Partie A), on s'intéresse à la mise en équation Lagrangienne et Hamiltonienne du mouvement d'une particule chargée dans un potentiel vecteur $\vec{A}$ et un potentiel scalaire $V$, puis à sa description semi-classique par l'équation de Schrödinger-Pauli tenant compte du spin. 

Dans un second temps (Partie B), on modélise l'interaction d'un système à deux états (représentant une transition électronique du sodium ou d'un atome piégé) avec un champ électromagnétique stationnaire intense, en utilisant l'approximation des ondes tournantes et le formalisme de la matrice densité pour inclure les effets de relaxation par émission spontanée.

---

## ❓ Partie 3 : Questions

### Partie A : Formulation canonique et Mécanique Quantique du Spin en champ électromagnétique

1. Établir le lagrangien $L$ d'une particule non-relativiste de masse $m$ et de charge $q = -e$ dans un champ électromagnétique décrit par le potentiel scalaire $V(\vec{r}, t)$ et le potentiel vecteur $\vec{A}(\vec{r}, t)$. En déduire l'impulsion canonique $\vec{p}$ et l'hamiltonien du système $H(\vec{r}, \vec{p}, t)$.
2. Par quantification canonique, en posant $\hat{\vec{r}} = \vec{r}$ et $\hat{\vec{p}} = -i\hbar \vec{\nabla}$, écrire l'opérateur hamiltonien $\hat{H}$. Démontrer l'apparition explicite du terme d'interaction magnétique du spin avec le champ magnétique $\vec{B} = \vec{\nabla} \times \vec{A}$ lorsque l'on considère l'équation de Pauli (en introduisant les matrices de Pauli $\vec{\sigma}$).
3. On considère un champ magnétique uniforme et stationnaire $\vec{B} = B_0 \vec{e}_z$. Déterminer les niveaux d'énergie du système (niveaux de Landau) pour un mouvement restreint au plan $(x,y)$. On exprimera ces niveaux en fonction de la fréquence cyclotron $\omega_c = \frac{e B_0}{m}$.

### Partie B : Interaction atome-champ et Relaxation Radiative

On modélise un électron lié par un potentiel harmonique de pulsation propre $\omega_0$ (atome à un électron éthéré) soumis à une onde électromagnétique plane monochromatique polarisée rectilignement : $\vec{E}(t) = E_0 \cos(\omega t) \vec{e}_x$.

4. Écrire l'équation différentielle régissant le déplacement $x(t)$ de l'oscillateur en tenant compte d'une force de frottement liée à l'amortissement radiatif (force d'Abraham-Lorentz non-relativiste : $\vec{F}_{\text{rad}} = \tau_0 \frac{d\vec{a}}{dt}$). Exprimer la constante $\tau_0$ en fonction de $e$, $m$, $c$ et $\varepsilon_0$.
5. Résoudre l'équation du mouvement en régime permanent sous la forme $x(t) = \text{Re}\left[ \underline{X} e^{i\omega t} \right]$. Déterminer la polarisabilité complexe $\alpha(\omega)$ définie par le moment dipolaire induit $\underline{p} = -e \underline{X} = \varepsilon_0 \alpha(\omega) E_0 \vec{e}_x$.
6. Analyser le comportement de $\alpha(\omega)$ au voisinage de la résonance ($\omega \approx \omega_0$). Discuter de la largeur à mi-hauteur de la résonance d'absorption en lien direct avec le coefficient $\tau_0$.

---

## 💡 Partie 3 : Rapport du Jury

- **Erreurs classiques** : Confondre l'impulsion cinétique $\vec{\pi} = m\vec{v} = \vec{p} + e\vec{A}$ et l'impulsion canonique $\vec{p}$ dans l'expression de l'hamiltonien. C'est une faute rédhibitoire pour l'ENS.
- **Manipulation vectorielle** : Les identités vectorielles (notamment $\vec{\nabla} \times (\vec{\nabla} \times \vec{A})$ ou le développement de $(\vec{\hat{p}} + e\vec{A})^2$) doivent être menées sans erreur de signe.
- **Rigueur mathématique** : Pour l'étude des niveaux de Landau, l'utilisation de l'analogie avec l'oscillateur harmonique via la création/annihilation est fortement valorisée par rapport à une résolution bourrine des équations différentielles partielles.

---

## 📋 Partie 4 : Corrigé Détaillé et Analyse

### Partie A : Formulation canonique et Mécanique Quantique du Spin

1. **Lagrangien et Hamiltonien classique :**
   Le lagrangien d'une particule chargée dans un champ électromagnétique est donné par :
   $$L = \frac{1}{2} m \vec{v}^2 - q V + q \vec{v} \cdot \vec{A}$$
   Avec $q = -e$, il vient :
   $$L = \frac{1}{2} m \vec{v}^2 + e V - e \vec{v} \cdot \vec{A}$$
   L'impulsion canonique $\vec{p}$ associée est définie par :
   $$\vec{p} = \frac{\partial L}{\partial \vec{v}} = m \vec{v} - e \vec{A} \implies \vec{\pi} = m\vec{v} = \vec{p} + e\vec{A}$$
   L'hamiltonien s'obtient par la transformation de Legendre :
   $$H = \vec{p} \cdot \vec{v} - L = \vec{p} \cdot \left( \frac{\vec{p} + e\vec{A}}{m} \right) - \left[ \frac{1}{2} \frac{(\vec{p} + e\vec{A})^2}{m} + e V - e \left(\frac{\vec{p} + e\vec{A}}{m}\right) \cdot \vec{A} \right]$$
   En simplifiant, on obtient :
   $$H = \frac{1}{2m} (\vec{p} + e\vec{A})^2 - e V$$

2. **Quantification et Équation de Pauli :**
   Par quantification canonique ($\vec{p} \to \hat{\vec{p}} = -i\hbar\vec{\nabla}$), l'opérateur hamiltonien s'écrit :
   $$\hat{H} = \frac{1}{2m} (\hat{\vec{p}} + e\vec{A})^2 - e V$$
   Pour faire apparaître le spin, partons du carré de l'opérateur vectoriel $(\vec{\sigma} \cdot (\hat{\vec{p}} + e\vec{A}))^2$. En utilisant l'identité de Pauli $\sigma_i \sigma_j = \delta_{ij} + i \sum_k \varepsilon_{ijk} \sigma_k$, on développe :
   $$(\vec{\sigma} \cdot \vec{\pi})^2 = \sum_i \pi_i^2 + i \sum_{i,j,k} \varepsilon_{ijk} \sigma_k \pi_i \pi_j = \vec{\pi}^2 + i \sum_k \sigma_k \left( \sum_{i,j} \varepsilon_{ijk} \pi_i \pi_j \right)$$
   Or, le commutateur de deux composantes de l'impulsion cinétique donne :
   $$[\pi_i, \pi_j] = [p_i + eA_i, p_j + eA_j] = e([p_i, A_j] - [p_j, A_i]) = -i\hbar e \left(\frac{\partial A_j}{\partial x_i} - \frac{\partial A_i}{\partial x_j}\right)$$
   En introduisant le champ magnétique $\vec{B} = \vec{\nabla} \times \vec{A}$ (soit $B_k = \sum_{i,j} \varepsilon_{ijk} \frac{\partial A_j}{\partial x_i}$), on obtient :
   $$[\pi_i, \pi_j] = -i\hbar e \sum_k \varepsilon_{ijk} B_k$$
   D'où :
   $$(\vec{\sigma} \cdot \vec{\pi})^2 = \vec{\pi}^2 - \frac{\hbar e}{2} \vec{\sigma} \cdot \vec{B} \implies \vec{\pi}^2 = (\vec{\sigma} \cdot \vec{\pi})^2 + e\hbar \vec{\sigma} \cdot \vec{B}$$
   L'hamiltonien de Pauli complet est donc :
   $$\hat{H}_{\text{Pauli}} = \frac{1}{2m} (\vec{\sigma} \cdot (\hat{\vec{p}} + e\vec{A}))^2 - e V = \frac{1}{2m} (\hat{\vec{p}} + e\vec{A})^2 - \frac{e\hbar}{2m} \vec{\sigma} \cdot \vec{B} - e V$$
   Le terme $-\frac{e\hbar}{2m} \vec{\sigma} \cdot \vec{B}$ est précisément l'énergie d'interaction magnétique du moment cinétique de spin avec le champ (avec un facteur de Landé $g_s = 2$).

3. **Niveaux de Landau :**
   En choisissant la jauge de Landau $\vec{A} = (0, B_0 x, 0)$, on a $\vec{B} = B_0 \vec{e}_z$. L'hamiltonien orbital (en négligeant le spin pour l'instant) est :
   $$H = \frac{1}{2m} \left( p_x^2 + (p_y + e B_0 x)^2 \right)$$
   Comme $\hat{H}$ ne dépend pas explicitement de $y$, l'opérateur $\hat{p}_y$ commute avec $\hat{H}$ et sa valeur propre est $hk_y$. L'hamiltonien se réécrit :
   $$H = \frac{1}{2m} p_x^2 + \frac{1}{2} m \omega_c^2 \left( x + \frac{\hbar k_y}{e B_0} \right)^2$$
   avec $\omega_c = \frac{e B_0}{m}$. C'est exactement l'hamiltonien d'un oscillateur harmonique quantique de pulsation $\omega_c$ dont le minimum du potentiel est centré en $x_0 = -\frac{\hbar k_y}{e B_0}$.
   Les niveaux d'énergie (niveaux de Landau) sont donc :
   $$E_n = \left( n + \frac{1}{2} \right) \hbar \omega_c \quad \text{avec} \quad n \in \mathbb{N}$$

---

### Partie B : Interaction atome-champ et Relaxation Radiative

4. **Équation du mouvement avec amortissement radiatif :**
   L'oscillateur subit la force de rappel élastique $-m \omega_0^2 x \vec{e}_x$, la force extérieure due au champ électrique $-e E_0 \cos(\omega t) \vec{e}_x$, et la force d'Abraham-Lorentz $\vec{F}_{\text{rad}} = m \tau_0 \frac{d\vec{a}}{dt} = m \tau_0 \frac{d^3 x}{dt^3} \vec{e}_x$.
   L'application du PFD selon l'axe $x$ donne :
   $$m \frac{d^2 x}{dt^2} = -m \omega_0^2 x - e E_0 \cos(\omega t) + m \tau_0 \frac{d^3 x}{dt^3}$$
   Soit sous forme canonique :
   $$\frac{d^2 x}{dt^2} - \tau_0 \frac{d^3 x}{dt^3} + \omega_0^2 x = -\frac{e}{m} E_0 \cos(\omega t)$$
   Par identification avec l'expression classique de la puissance rayonnée (formule de Larmor), on établit que $\tau_0 = \frac{e^2}{6 \pi \varepsilon_0 m c^3}$.

5. **Polarisabilité complexe :**
   En notation complexe, avec $\underline{x}(t) = \underline{X} e^{i\omega t}$ et $\underline{E}(t) = E_0 e^{i\omega t}$, l'équation différentielle devient :
   $$(-\omega^2 + i \tau_0 \omega^3 + \omega_0^2) \underline{X} = -\frac{e}{m} E_0$$
   $$\underline{X} = -\frac{e}{m} \frac{E_0}{\omega_0^2 - \omega^2 + i \tau_0 \omega^3}$$
   Le moment dipolaire induit est $\underline{p} = -e \underline{X} = \frac{e^2}{m} \frac{E_0}{\omega_0^2 - \omega^2 + i \tau_0 \omega^3}$.
   Par définition, $\underline{p} = \varepsilon_0 \alpha(\omega) E_0$, d'où la polarisabilité complexe :
   $$\alpha(\omega) = \frac{e^2}{m \varepsilon_0} \frac{1}{\omega_0^2 - \omega^2 + i \tau_0 \omega^3}$$

6. **Analyse au voisinage de la résonance :**
   Au voisinage de la résonance, on pose $\omega = \omega_0 + \Delta \omega$ avec $|\Delta \omega| \ll \omega_0$. On approxime le dénominateur :
   $$\omega_0^2 - \omega^2 = (\omega_0 - \omega)(\omega_0 + \omega) \approx -2\omega_0 \Delta\omega$$
   Le terme d'amortissement s'écrit $i \tau_0 \omega^3 \approx i \tau_0 \omega_0^3$. La polarisabilité devient :
   $$\alpha(\omega) \approx \frac{e^2}{m \varepsilon_0} \frac{1}{-2\omega_0 \Delta\omega + i \tau_0 \omega_0^3} = -\frac{e^2}{m \varepsilon_0 \omega_0^2} \frac{1}{2 \frac{\Delta\omega}{\omega_0} - i \tau_0 \omega_0}$$
   La partie imaginaire de $\alpha(\omega)$, responsable de l'absorption, présente un profil lorentzien. La largeur à mi-hauteur $\Delta \omega_{1/2}$ en pulsation est dictée par le terme imaginaire du dénominateur, soit :
   $$\Delta \omega_{1/2} = \tau_0 \omega_0^2 = \frac{e^2 \omega_0^2}{6 \pi \varepsilon_0 m c^3}$$
   Ce résultat montre que l'amortissement radiatif naturel (indispensable en Électrodynamique Quantique) lève la singularité classique de l'oscillateur non amorti à la résonance et fixe la largeur intrinsèque des raies spectrales atomiques.