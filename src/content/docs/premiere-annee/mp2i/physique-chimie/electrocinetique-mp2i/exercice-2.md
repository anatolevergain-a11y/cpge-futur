---
title: 'Exercice : Filtrage linéaire et diagrammes de Bode'
description: 'Problème d entraînement type concours pour MP2I (Mines-Ponts / Centrale-Supélec).'
---

### 🌐 Énoncé du problème / Cadre d'étude

On considère le circuit électrique alimenté par une source de tension sinusoïdale de f.e.m. $e(t) = E_0 \cos(\omega t)$. Le montage est composé de deux cellules élémentaires couplées. 

Le circuit est constitué de :
- Une résistance $R$ et une capacité $C$ montées en parallèle, formant une impédance équivalente $Z_1$.
- Une inductance $L$ et une résistance de perte $r$ montées en série, formant une impédance équivalente $Z_2$.
- L'ensemble est disposé en un pont diviseur de tension : la tension d'entrée est $e(t)$ aux bornes de l'association en série de $Z_1$ et $Z_2$, et la tension de sortie $s(t)$ est prélevée aux bornes de l'impédance $Z_2$.

Pour simplifier l'étude analytique, on pose les grandeurs caractéristiques suivantes :
- La pulsation propre du système : $\omega_0 = \frac{1}{\sqrt{LC}}$
- Le facteur de qualité : $Q = \frac{R}{L\omega_0}$ (on négligera la résistance $r$ devant $R$ pour les calculs principaux, soit $r \approx 0$).

L'objectif de ce problème est d'établir la fonction de transfert complexe de ce filtre, d'analyser son comportement asymptotique à l'aide des diagrammes de Bode, et d'étudier sa sélectivité en vue d'une application de filtrage.

---

### ❓ Questions progressives

1. **Modélisation complexe :** Établir les expressions des impédances complexes $Z_1(j\omega)$ (parallèle $R-C$) et $Z_2(j\omega)$ (série $L-r$ avec $r=0$).
2. **Fonction de transfert :** En déduire l'expression de la fonction de transfert harmonique $H(j\omega) = \frac{\underline{S}(j\omega)}{\underline{E}(j\omega)}$ sous la forme canonique :
   $$H(j\omega) = \frac{H_0}{1 + j Q \left( \frac{\omega}{\omega_0} - \frac{\omega_0}{\omega} \mathcal{F}(\dots) \right)}$$
   *(Préciser l'expression exacte de $H_0$ et mettre $H(j\omega)$ sous une forme polynomiale en $x = \frac{\omega}{\omega_0}$).*
3. **Analyse spectrale (Bode) :** 
   - Déterminer le type de filtre (passe-bas, passe-haut, passe-bande, coupe-bande).
   - Tracer l'allure du diagramme de Bode en gain $G_{dB}(\omega) = 20 \log_{10}(|H(j\omega)|)$ en précisant les comportements aux basses et hautes fréquences, ainsi qu'à la résonance.
4. **Étude de la sélectivité :** Calculer la largeur de la bande passante à $-3\text{ dB}$ en fonction de $\omega_0$ et $Q$. Déduire l'expression de la surtension et la valeur de la pulsation de résonance en amplitude $\omega_r$.

---

### 💡 Pistes & Indications méthodologiques

- **Réflexe MP2I :** Pour l'association en parallèle de $R$ et $C$, travaillez de préférence avec les admittances complexes $\underline{Y} = \frac{1}{Z}$ pour additionner les conductances et susceptances.
- **Forme canonique :** Ne vous précipitez pas dans le calcul algébrique. Identifiez bien le rôle de chaque composant : $L$ et $C$ fixent la pulsation caractéristique $\omega_0$, tandis que le rapport $R/L$ module l'amortissement.
- **Asymptotes :** Pour les diagrammes de Bode, déterminez toujours les équations des tangentes lorsque $\omega \to 0$ et $\omega \to +\infty$ en effectuant des développements limités (DL) de $\ln(|H|)$ ou en étudiant les pentes en décades.

---

### 📋 Corrigé détaillé pas à pas

#### 1. Expression des impédances complexes
- **Pour l'impédance $Z_1$ ($R$ et $C$ en parallèle) :**
  Il est plus simple d'utiliser l'admittance complexe $\underline{Y}_1 = \frac{1}{Z_1} = \frac{1}{R} + j\omega C$.
  On en déduit :
  $$\underline{Z}_1(j\omega) = \frac{R}{1 + j R C \omega}$$

- **Pour l'impédance $Z_2$ ($L$ et $r=0$ en série) :**
  $$\underline{Z}_2(j\omega) = j\omega L$$

---

#### 2. Fonction de transfert harmonique
Le montage forme un pont diviseur de tension :
$$\underline{H}(j\omega) = \frac{\underline{S}(j\omega)}{\underline{E}(j\omega)} = \frac{\underline{Z}_2}{\underline{Z}_1 + \underline{Z}_2}$$

En substituant les expressions :
$$\underline{H}(j\omega) = \frac{j\omega L}{\frac{R}{1 + j R C \omega} + j\omega L}$$

Mettons cette expression sous une forme canonique en multipliant numérateur et dénominateur par $(1 + j R C \omega)$ :
$$\underline{H}(j\omega) = \frac{j\omega L (1 + j R C \omega)}{R + j\omega L (1 + j R C \omega)} = \frac{j\omega L - \omega^2 R L C}{R + j\omega L - \omega^2 R L C}$$

Introduisons $\omega_0 = \frac{1}{\sqrt{LC}}$ et $Q = \frac{R}{L\omega_0}$ (ce qui implique $RC = \frac{R}{L\omega_0^2} = \frac{Q}{\omega_0}$).
Le numérateur et le dénominateur peuvent être divisés par $R$ ou réécrits avec $x = \frac{\omega}{\omega_0}$ :
$$\underline{H}(j\omega) = \frac{j Q x}{1 - x^2 + j Q x}$$
où l'on a posé $x = \frac{\omega}{\omega_0}$.

---

#### 3. Analyse spectrale et Diagramme de Bode

- **Nature du filtre :** 
  L'expression de $\underline{H}(j\omega)$ est de la forme :
  $$\underline{H}(x) = \frac{j Q x}{1 - x^2 + j Q x}$$
  - Si $x \to 0$ ($\omega \ll \omega_0$) : $\underline{H}(x) \sim j Q x \to 0$ (Atténuation en $20\text{ dB/décade}$).
  - Si $x \to +\infty$ ($\omega \gg \omega_0$) : $\underline{H}(x) \sim \frac{j Q x}{-x^2} = -\frac{j Q}{x} \to 0$ (Atténuation en $-20\text{ dB/décade}$).
  - Si $x = 1$ ($\omega = \omega_0$) : $\underline{H}(1) = 1$. Le gain vaut $0\text{ dB}$.
  
  Il s'agit d'un **filtre passe-bande**.

- **Diagramme de Bode en gain :**
  Le gain en décibels est donné par :
  $$G_{dB}(x) = 20 \log_{10}(|\underline{H}(x)|) = 20 \log_{10}\left(\frac{Qx}{\sqrt{(1-x^2)^2 + Q^2 x^2}}\right)$$
  - **Basses fréquences ($x \ll 1$) :** $G_{dB} \approx 20 \log_{10}(Qx) = 20 \log_{10}(Q) + 20 \log_{10}(x)$. Pente de $+20\text{ dB/décade}$.
  - **Hautes fréquences ($x \gg 1$) :** $G_{dB} \approx 20 \log_{10}\left(\frac{Q}{x}\right) = 20 \log_{10}(Q) - 20 \log_{10}(x)$. Pente de $-20\text{ dB/décade}$.
  - **À la résonance ($x = 1$) :** $G_{dB}(1) = 0\text{ dB}$.

---

#### 4. Étude de la sélectivité

Le gain maximal est atteint pour $x = 1$ ($\omega_r = \omega_0$), et vaut $G_{\max} = 1$ ($0\text{ dB}$).

Les pulsations de coupure à $-3\text{ dB}$ correspondent aux fréquences pour lesquelles le gain est divisé par $\sqrt{2}$, soit $|\underline{H}(x)|^2 = \frac{1}{2}$:
$$\frac{Q^2 x^2}{(1-x^2)^2 + Q^2 x^2} = \frac{1}{2} \implies (1-x^2)^2 = Q^2 x^2$$

Cette équation se scinde en deux cas (physiquement acceptables pour $x > 0$) :
1. $1 - x^2 = Qx \implies x^2 + Qx - 1 = 0$
2. $1 - x^2 = -Qx \implies x^2 - Qx - 1 = 0$

En résolvant ces équations du second degré pour $x > 0$ :
- Pour la première : $x_1 = \frac{-Q + \sqrt{Q^2 + 4}}{2}$
- Pour la seconde : $x_2 = \frac{Q + \sqrt{Q^2 + 4}}{2}$

La **bande passante** $\Delta \omega = \omega_2 - \omega_1$ s'obtient par :
$$\Delta \omega = \omega_0 (x_2 - x_1) = \omega_0 \left( \frac{Q + \sqrt{Q^2 + 4}}{2} - \frac{-Q + \sqrt{Q^2 + 4}}{2} \right) = \frac{\omega_0}{Q}$$
Conclusion: ** Plus le facteur de qualité $Q$ est grand, plus la bande passante $\Delta \omega = \frac{\omega_0}{Q}$ est étroite, ce qui caractérise un filtre sélectif de haute performance en régime sinusoïdal.