---
title: 'Cours : Optique ondulatoire et interférences'
description: 'Fiche de synthèse officielle et démonstrations du programme CPGE PSI.'
---

## 📌 1. Définitions & Cadre d'étude

L'optique ondulatoire modélise la lumière par un champ électromagnétique. Dans le cadre du programme de PSI, on se limite le plus souvent à l'étude d'une composante scalaire du champ électrique, dite vibration lumineuse, notée $s(M,t)$.

### 1.1. Onde plane monochromatique (OPM)
Une onde plane monochromatique de pulsation $\omega$ et de vecteur d'onde $\vec{k}$ (avec $k = \|\vec{k}\| = \frac{\omega}{c} = \frac{2\pi}{\lambda}$) est représentée sous forme complexe par :
$$\underline{s}(M,t) = \underline{S}_0 \exp\left(j(\omega t - \vec{k}\cdot\vec{OM})\right)$$
où $\underline{S}_0 = S_0 \exp(j\varphi_0)$ est l'amplitude complexe.

### 1.2. État de polarisation et approximation scalaire
La polarisation décrit l'évolution temporelle de l'extrémité du vecteur champ électrique $\vec{E}(M,t)$ dans un plan perpendiculaire à la direction de propagation.
- **Lumière polarisée rectilignement** : $\vec{E}(M,t)$ garde une direction fixe.
- **Lumière non polarisée (naturelle)** : Le vecteur $\vec{E}(M,t)$ change de direction de manière aléatoire et rapide.

> **Condition d'interférence scalaire (Fresnel et Arago)** : Deux sources lumineuses ne produisent des interférences observables que si elles sont **synchromes** (même pulsation $\omega$) et possèdent **la même direction de polarisation** rectiligne (ou des composantes cohérentes selon la même direction).

### 1.3. Intensité lumineuse
L'œil et les récepteurs photodétecteurs mesurent une grandeur temporelle moyennée sur un temps $T$ grand devant la période optique $\frac{2\pi}{\omega}$, mais petit devant le temps de réponse du récepteur :
$$I(M) = \langle s^2(M,t) \rangle_T = \frac{1}{2} \varepsilon_0 c \, |\underline{s}(M)|_{\text{eff}}^2$$
L'intensité est proportionnelle au carré du module de l'amplitude complexe de la vibration lumineuse.

---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### 2.1. Superposition linéaire et formule de Fresnel
Soit un point $M$ éclairé par deux sources cohérentes $\Sigma_1$ et $\Sigma_2$ émettant les vibrations $\underline{s}_1(M,t)$ et $\underline{s}_2(M,t)$. Par superposition linéaire, la vibration totale est :
$$\underline{s}(M,t) = \underline{s}_1(M,t) + \underline{s}_2(M,t)$$

L'intensité résultante s'écrit :
$$I(M) = \langle (\text{Re}[\underline{s}_1 + \underline{s}_2])^2 \rangle_T$$
En développant ce produit scalaire temporel, on obtient la **formule de Fresnel des interférences** :
$$I(M) = I_1 + I_2 + 2\sqrt{I_1 I_2} \cos(\Delta \varphi)$$

Où :
- $I_1 = \langle s_1^2 \rangle$ et $I_2 = \langle s_2^2 \rangle$ sont les intensités propres des sources.
- $\Delta \varphi = \varphi_2(M) - \varphi_1(M)$ est la **différence de phase** (ou déphasage) entre les deux ondes au point $M$.

### 2.2. Lien entre différence de marche et déphasage ($\Delta \varphi$)
Soit $L_1 = (S_1 M)$ et $L_2 = (S_2 M)$ les chemins optiques parcourus par les ondes depuis les sources secondaires jusqu'au point $M$. Le déphasage s'exprime par :
$$\Delta \varphi = \frac{2\pi}{\lambda_0} (L_2 - L_1) = \frac{2\pi}{\lambda_0} \delta$$
où $\delta = L_2 - L_1$ est la **différence de marche** et $\lambda_0$ la longueur d'onde dans le vide.

### 2.3. Interférences à deux onde (Interféromètre à division du front d'onde ou d'amplitude)
Dans le cas usuel où $I_1 \approx I_2 = I_0$, l'intensité lumineuse se simplifie en :
$$I(M) = 2I_0 \left( 1 + \cos(\Delta \varphi) \right) = 4I_0 \cos^2\left(\frac{\Delta \varphi}{2}\right)$$
- **Interférences constructives** (maximums d'intensité) : $\Delta \varphi = 2k\pi \iff \delta = k\lambda_0$ avec $k \in \mathbb{Z}$.
- **Interférences destructives** (minimums d'intensité) : $\Delta \varphi = (2k+1)\pi \iff \delta = (2k+1)\frac{\lambda_0}{2}$ avec $k \in \mathbb{Z}$.

---

## 💡 3. Méthodes de calcul & Algorithmes

Pour traiter un problème d'interférences aux concours (fentes d'Young, miroir de Fresnel, interféromètre de Michelson), la démarche méthodique est la suivante :

1. **Identifier les sources secondaires** $\Sigma_1$ et $\Sigma_2$ et vérifier leur cohérence (même source primaire).
2. **Calculer les chemins optiques** $L_1(M)$ et $L_2(M)$ dans le milieu considéré (prendre en compte les indices optiques $n$ et les éventuels déphasages par réflexion, comme le $\pi$ de passage de $\text{milieu 1}$ vers $\text{milieu 2}$ avec $n_2 > n_1$).
3. **Exprimer la différence de marche** $\delta$ en fonction des coordonnées spatiales (le plus souvent l'abscisse $x$ sur l'écran).
4. **Calculer l'interfrange $i$** : distance séparant deux franges de même nature (deux maxima consécutifs).
   - Par définition : $x_{k+1} - x_k = i \implies \delta(x_{k+1}) - \delta(x_k) = \lambda_0$.
5. **Évaluer le contraste** $C$ (ou visibilité des franges) défini par :
   $$C = \frac{I_{\text{max}} - I_{\text{min}}}{I_{\text{max}} + I_{\text{min}}}$$

---

## ⚠️ 4. Pièges classiques aux Concours

- **Confondre chemin géométrique et chemin optique** : Le chemin optique est $L = \int n(s) ds$. Dans le vide ou l'air ($n \approx 1$), $L$ se réduit à la distance géométrique, mais un milieu d'indice $n$ retarde l'onde.
- **Oublier le saut de phase par réflexion** : Une onde lumineuse réfléchie sur un dioptre en incidence normale subit un déphasage de $\pi$ (soit une modification de la différence de marche de $\frac{\lambda_0}{2}$) si elle passe d'un milieu moins réfringent à un milieu plus réfringent ($n_1 < n_2$).
- **Conditions de Gauss et approximation parabolique** : Ne pas oublier de développer les expressions en $\sqrt{D^2 + (x \pm a)^2}$ au premier ordre pertinent pour obtenir une différence de marche linéaire en $x$ (ex: $\delta \approx \frac{ax}{D}$).
- **Sources étendues et cohérence spatiale** : Une source large détruit les interférences par brouillage si sa taille angulaire dépasse la limite de coherence spatiale $\theta_c \approx \frac{\lambda_0}{a}$. Aux concours, vérifiez toujours si la source est ponctuelle ou si l'on doit intégrer les intensités (et non les amplitudes) des différentes parties de la source.