---
title: 'Exercice 1 : Modèle quantique de l atome'
description: 'Problème d entraînement type concours pour PCSI.'
---

### 🌐 Énoncé du problème / Étude de cas

L'objectif de ce problème est d'étudier l'atome d'hydrogène et les ions hydrogénoïdes (systèmes à un seul électron) dans le cadre du modèle quantique, puis de discuter des limites de ce modèle face à la réalité expérimentale et aux interactions plus complexes (effet Zeeman, structure fine). 

En classe de PCSI, l'approche de Schrödinger stationnaire se traduit par la résolution radiale et l'utilisation des nombres quantiques. Nous nous intéresserons ici en particulier à l'état fondamental de l'atome d'hydrogène, à la distribution de probabilité radiale et à l'effet d'un champ magnétique faible sur les niveaux d'énergie (levée partielle de dégénérescence).

**Données physiques et constantes universelles :**
- Charge élémentaire : $e \approx 1,602 \times 10^{-19} \, \text{C}$
- Masse de l'électron : $m_e \approx 9,109 \times 10^{-31} \, \text{kg}$
- Constante de permittivity du vide : $\varepsilon_0 \approx 8,854 \times 10^{-12} \, \text{F}\cdot\text{m}^{-1}$
- Constante de Planck réduite : $\hbar = \frac{h}{2\pi} \approx 1,054 \times 10^{-34} \, \text{J}\cdot\text{s}$
- Rayon de Bohr : $a_0 = \frac{4\pi \varepsilon_0 \hbar^2}{m_e e^2} \approx 5,29 \times 10^{-11} \, \text{m}$
- Énergie de Rydberg : $E_0 = \frac{m_e e^4}{(4\pi \varepsilon_0)^2 2\hbar^2} \approx 13,6 \, \text{eV}$

---

### ❓ Questions progressives

1. **Rappels de cours et nombres quantiques**
   Donner l'expression de l'énergie potentielle électrostatique $E_p(r)$ d'un électron situé à une distance $r$ du noyau d'un ion hydrogénoïde de numéro atomique $Z$. Préciser l'expression des énergies des états stationnaires $E_n$ en fonction de l'énergie de Rydberg $E_0$, de $Z$ et du nombre quantique principal $n$.

2. **Fonction d'onde de l'état fondamental**
   Pour l'état fondamental ($n=1$, $l=0$, $m_l=0$) de l'atome d'hydrogène ($Z=1$), la fonction d'onde spatiale s'écrit sous la forme :
   $$\psi_{100}(r) = A \exp\left(-\frac{r}{a_0}\right)$$
   où $A$ est une constante de normalisation. 
   Exprimer la condition de normalisation de cette fonction d'onde en coordonnées sphériques (en précisant l'élément de volume $\mathrm{d}\tau$). En déduire l'expression de la constante $A$ en fonction de $a_0$.

3. **Distribution radiale de probabilité**
   On définit la probabilité $\mathcal{P}(r)\mathrm{d}r$ de trouver l'électron dans une coquille sphérique comprise entre $r$ et $r + \mathrm{d}r$. 
   Exprimer $\mathcal{P}(r)$ en fonction de $r$, $a_0$ et de la constante normalisée. Déterminer la distance la plus probable $r_{\text{max}}$ (ou rayon le plus probable) pour trouver l'électron dans l'état fondamental. Comparer numériquement $r_{\text{max}}$ au rayon de Bohr $a_0$ et commenter.

4. **Analyse critique du modèle quantique simple**
   *a)* Selon ce modèle, quelle est l'espérance mathématique de la vitesse de l'électron dans l'état fondamental ? Ce résultat est-il compatible avec le principe d'incertitude de Heisenberg $\Delta x \cdot \Delta p_x \ge \frac{\hbar}{2}$ ? Justifier qualitativement.
   *b)* Citer deux phénomènes physiques réels (non pris en compte dans le modèle de Schrödinger non-relativiste standard) qui modifient les niveaux d'énergie de l'hydrogène. Quel est l'ordre de grandeur relatif de ces corrections énergétiques par rapport à $E_0$ ?

---

### 💡 Pistes & Indications

- **Q2 :** Pensez à intégrer sur tout l'espace ($r \in [0, +\infty[$, $\theta \in [0, \pi]$, $\varphi \in [0, 2\pi]$). L'élément de volume en coordonnées sphériques est $\mathrm{d}\tau = r^2 \sin\theta \, \mathrm{d}r \, \mathrm{d}\theta \, \mathrm{d}\varphi$. Rappel mathématique utile : $\int_{0}^{+\infty} x^2 e^{-\alpha x} \mathrm{d}x = \frac{2}{\alpha^3}$.
- **Q3 :** La probabilité de présence dans l'intervalle $[r, r+\mathrm{d}r]$ s'obtient en intégrant la densité de probabilité $|\psi|^2$ sur les angles $\theta$ et $\varphi$. On a $\mathcal{P}(r)\mathrm{d}r = \left(\int_{0}^{\pi}\int_{0}^{2\pi} |\psi|^2 r^2 \sin\theta \, \mathrm{d}\theta \, \mathrm{d}\varphi\right) \mathrm{d}r$.
- **Q4 :** Pour Heisenberg, évaluez l'incertitude sur la position (qui est de l'ordre de $a_0$) et déduisez-en l'ordre de grandeur minimal de l'incertitude sur la quantité de mouvement.

---

### 📋 Corrigé détaillé et analyse des résultats

#### 1. Niveaux d'énergie
L'énergie potentielle électrostatique entre le noyau (de charge $+Ze$) et l'électron (de charge $-e$) distant de $r$ est :
$$E_p(r) = -\frac{Ze^2}{4\pi \varepsilon_0 r}$$

La résolution de l'équation de Schrödinger stationnaire conduit aux niveaux d'énergie quantifiés :
$$E_n = - \frac{Z^2 E_0}{n^2} \quad \text{avec } n \in \mathbb{N}^*$$
Pour l'hydrogène ($Z=1$), l'énergie de l'état fondamental ($n=1$) vaut $E_1 = -13,6 \, \text{eV}$.

#### 2. Normalisation de la fonction d'onde
La condition de normalisation s'écrit :
$$\iiint_{\text{tout l'espace}} |\psi_{100}(r, \theta, \varphi)|^2 \mathrm{d}\tau = 1$$
En coordonnées sphériques, $\mathrm{d}\tau = r^2 \sin\theta \, \mathrm{d}r \, \mathrm{d}\theta \, \mathrm{d}\varphi$. Puisque $\psi_{100}$ ne dépend ni de $\theta$ ni de $\varphi$ (état s, $l=0$), l'intégrale angulaire donne $4\pi$. Il reste :
$$\int_{0}^{+\infty} |A|^2 e^{-\frac{2r}{a_0}} r^2 \cdot (4\pi) \, \mathrm{d}r = 1$$
$$4\pi |A|^2 \int_{0}^{+\infty} r^2 e^{-\frac{2r}{a_0}} \mathrm{d}r = 1$$
En posant $\alpha = \frac{2}{a_0}$, l'intégrale vaut $\frac{2}{\alpha^3} = \frac{2}{(2/a_0)^3} = \frac{a_0^3}{4}$. Ainsi :
$$4\pi |A|^2 \frac{a_0^3}{4} = 1 \implies \pi |A|^2 a_0^3 = 1 \implies A = \frac{1}{\sqrt{\pi a_0^3}}$$
(en choisissant la phase nulle pour la constante réelle).

#### 3. Distribution radiale de probabilité
La probabilité de trouver l'électron entre $r$ et $r+\mathrm{d}r$ est :
$$\mathcal{P}(r)\mathrm{d}r = |\psi_{100}(r)|^2 \cdot 4\pi r^2 \mathrm{d}r = \frac{4\pi}{\pi a_0^3} r^2 e^{-\frac{2r}{a_0}} \mathrm{d}r = \frac{4}{a_0^3} r^2 e^{-\frac{2r}{a_0}} \mathrm{d}r$$
Donc :
$$\mathcal{P}(r) = \frac{4}{a_0^3} r^2 e^{-\frac{2r}{a_0}}$$

Pour trouver le rayon le plus probable $r_{\text{max}}$, on cherche le maximum de $\mathcal{P}(r)$ en annulant sa dérivée par rapport à $r$ :
$$\frac{\mathrm{d}\mathcal{P}}{\mathrm{d}r} = \frac{4}{a_0^3} \left( 2r e^{-\frac{2r}{a_0}} + r^2 \left(-\frac{2}{a_0}\right) e^{-\frac{2r}{a_0}} \right) = \frac{4}{a_0^3} r e^{-\frac{2r}{a_0}} \left( 2 - \frac{2r}{a_0} \right) = 0$$
Le maximum est atteint pour $2 - \frac{2r}{a_0} = 0$, soit :
$$r_{\text{max}} = a_0$$
*Analyse critique :* Le rayon le plus probable coïncide exactement avec le rayon de Bohr $a_0$ issu du modèle semi-classique de Bohr ($52,9 \, \text{pm}$). Toutefois, contrairement au modèle de Bohr où l'électron décrivait une orbite circulaire fixe, le modèle quantique indique qu'il existe une *densité de probabilité* de trouver l'électron à d'autres distances du noyau.

#### 4. Analyse critique et limites du modèle
*a)* Par symétrie de la fonction d'onde de l'état fondamental (réelle, sphériquement symétrique), l'espérance de la quantité de mouvement $\langle \vec{p} \rangle$ est nulle, ce qui implique $\langle v_x \rangle = 0$. Cependant, l'incertitude sur la position est de l'ordre de $\Delta x \sim a_0$. D'après le principe de Heisenberg :
$$\Delta p_x \ge \frac{\hbar}{2 \Delta x} \sim \frac{\hbar}{2 a_0}$$
L'électron possède donc des fluctuations de vitesse non nulles, ce qui évite qu'il ne s'écrase sur le noyau (stabilisation quantique de l'atome).

*b)* Le modèle de Schrödinger non-relativiste néglige :
1. **Les effets relativistes** (correction cinétique d'ordre supérieur et couplage spin-orbite), d'un ordre de grandeur relatif $\alpha^2 \approx 5,3 \times 10^{-5}$ (où $\alpha$ est la constante de structure fine).
2. **L'électrodynamique quantique (QED)** comme le déplacement de Lamb (interaction de l'électron avec les fluctuations du vide quantique), d'un ordre encore plus faible ($\sim 10^{-7} E_0$).

Ces corrections conduisent à la *structure fine* et *hyperfine* des spectres, montrant que le modèle de Schrödinger simple est une approximation excellente mais non rigoureusement exacte de la réalité spectroscopique.