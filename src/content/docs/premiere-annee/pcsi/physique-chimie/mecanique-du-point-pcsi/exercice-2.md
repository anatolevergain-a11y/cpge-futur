---
title: 'Exercice 2 : Oscillateurs harmoniques et amortis'
description: 'Problème d entraînement type concours pour PCSI.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Le présent problème s'intéresse à la modélisation et à l'étude dynamique d'un dispositif mécanique amorti, configuration classique rencontrée dans les systèmes d'suspension et les capteurs inertiels.

On considère un point matériel $M$ de masse $m$, astreint à se déplacer sur un axe horizontal $(\text{O}, \vec{u}_x)$ muni d'un repère galiléen $\mathcal{R}(\text{O}, \vec{u}_x, \vec{u}_y, \vec{u}_z)$. Ce point est attaché à l'extrémité d'un ressort idéal de raideur $k$ et de longueur à vide $l_0$. L'autre extrémité du ressort est fixée à une paroi rigide. 

Le système est en outre soumis à une force de frottement fluide de type aérodynamique, modélisée par $\vec{f} = -h \vec{v}$, où $\vec{v}$ est le vecteur vitesse de $M$ dans $\mathcal{R}$ et $h > 0$ une constante positive. Enfin, une force extérieure de commande, notée $\vec{F}_{\text{ext}}(t) = F_0 \cos(\omega t) \vec{u}_x$ (avec $F_0$ et $\omega$ des constantes positives), s'exerce sur le point $M$.

---

### ❓ Questions progressives (incluant une analyse critique du modèle)

1. **Cinématique et bilan des forces :** Déterminer la position d'équilibre statique du système, notée $x_{\text{eq}}$, en l'absence de force extérieure et de frottement. Établir l'expression vectorielle et algébrique des forces s'exerçant sur $M$ pour une position quelconque $x(t)$.
2. **Établissement de l'équation différentielle :** En appliquant le Principe Fondamental de la Dynamique (PFD) au point $M$ dans le référentiel galiléen $\mathcal{R}$, montrer que l'écart $X(t) = x(t) - x_{\text{eq}}$ vérifie une équation différentielle linéaire du second ordre à coefficients constants de la forme :
   $$\frac{\text{d}^2 X}{\text{d}t^2} + 2\lambda \frac{\text{d}X}{\text{d}t} + \omega_0^2 X = \frac{F_0}{m} \cos(\omega t)$$
   Exprimer les grandeurs caractéristiques $\omega_0$ (pulsation propre) et $\lambda$ (coefficient d'amortissement) en fonction de $m$, $k$ et $h$. Préciser leurs dimensions et unités légales.
3. **Étude du régime libre (amorti) :** On suppose dans cette question que la force extérieure est nulle ($F_0 = 0$). Le système est lâché sans vitesse initiale depuis une position initiale $X(0) = X_0 > 0$. 
   - Établir l'équation caractéristique associée.
   - On se place dans le régime pseudo-périodique, caractérisé par une condition portant sur $\lambda$ et $\omega_0$ que l'on précisera. Déterminer l'expression de $X(t)$ dans ce régime.
   - Définir la pseudo-période $T$ du mouvement et exprimer le décrément logarithmique $\delta$ défini par $\delta = \ln\left(\frac{X(t)}{X(t+T)}\right)$.
4. **Réponse harmonique forcée et résonance :** On réactive la force extérieure ($F_0 \neq 0$) et l'on étudie le régime permanent établi. Par une méthode complexe, déterminer l'amplitude complexe $\underline{X}_m$ de l'élongation $X(t)$, puis son module $X_m$ et sa phase $\phi$ par rapport à l'excitation.
5. **Analyse critique du modèle :** 
   - Déterminer la pulsation de résonance en amplitude $\omega_r$ (pulsation pour laquelle l'amplitude $X_m$ est maximale) et exprimer la condition d'existence de cette résonance.
   - Discuter les limites physiques du modèle choisi pour de très grandes amplitudes ou de très grandes vitesses (validité de la loi de Hooke et du frottement linéaire).

---

### 💡 Pistes & Indications méthodologiques

- **Question 1 :** Pour la force de rappel élastique, projetez soigneusement le vecteur position $\vec{OM} = x \vec{u}_x$ et rappelez que la force s'exerce toujours dans le sens tendant à ramener le ressort à sa longueur à vide.
- **Question 2 :** L'utilisation de la variable centrée $X(t) = x(t) - x_{\text{eq}}$ permet d'éliminer le terme constant issu de la tension du ressort à l'équilibre.
- **Question 3 :** Résolvez l'équation différentielle homogène en posant $\underline{X}(t) = A e^{rt}$. Discutez le signe du discriminant pour identifier le régime pseudo-périodique.
- **Question 4 :** Utilisez la notation complexe $\underline{X}(t) = \underline{X}_m e^{j\omega t}$ et $\underline{F}_{\text{ext}}(t) = \frac{F_0}{m} e^{j\omega t}$. Identifiez l'analogie avec un filtre linéaire de fonction de transfert.
- **Question 5 :** Dérivez l'expression de $X_m(\omega)$ par rapport à $\omega$ ou étudiez le carré de l'amplitude pour trouver $\omega_r$. Pour l'analyse critique, pensez aux domaines de validité des lois phénoménologiques en physique macroscopique.

---

### 📋 Corrigé détaillé pas à pas

#### 1. Cinématique et bilan des forces
Le point $M$ est repéré par sa position $\vec{OM}(t) = x(t) \vec{u}_x$. 
Le ressort a une longueur à vide $l_0$ et son point d'attache fixe est situé à l'origine $\text{O}$. La force de rappel élastique exercée par le ressort sur $M$ s'écrit :
$$\vec{F}_{\text{el}} = -k (x - l_0) \vec{u}_x$$
La force de frottement fluide est :
$$\vec{f} = -h \vec{v} = -h \frac{\text{d}x}{\text{d}t} \vec{u}_x$$
La force extérieure est :
$$\vec{F}_{\text{ext}} = F_0 \cos(\omega t) \vec{u}_x$$
Le poids $\vec{P} = m\vec{g}$ et la réaction normale du support $\vec{N}$ se compensent exactement ($\vec{P} + \vec{N} = \vec{0}$) puisque le mouvement est strictement horizontal.

À l'équilibre statique ($\frac{\text{d}x}{\text{d}t} = 0$, $\frac{\text{d}^2x}{\text{d}t^2} = 0$, $\vec{F}_{\text{ext}} = \vec{0}$), la résultante des forces est nulle :
$-k (x_{\text{eq}} - l_0) \vec{u}_x = \vec{0} \implies x_{\text{eq}} = l_0$

---

#### 2. Établissement de l'équation différentielle
Appliquons le PFD à $M$ dans le référentiel galiléen $\mathcal{R}$ :
$$m \frac{\text{d}^2x}{\text{d}t^2} \vec{u}_x = \vec{F}_{\text{el}} + \vec{f} + \vec{F}_{\text{ext}}$$
En projetant sur l'axe $(\text{O}, \vec{u}_x)$ :
$$m \frac{\text{d}^2x}{\text{d}t^2} = -k(x - l_0) - h \frac{\text{d}x}{\text{d}t} + F_0 \cos(\omega t)$$
Introduisons la variable $X(t) = x(t) - x_{\text{eq}} = x(t) - l_0$. Comme $l_0$ est une constante, on a $\frac{\text{d}X}{\text{d}t} = \frac{\text{d}x}{\text{d}t}$ et $\frac{\text{d}^2X}{\text{d}t^2} = \frac{\text{d}^2x}{\text{d}t^2}$. L'équation devient :
$$m \frac{\text{d}^2X}{\text{d}t^2} + h \frac{\text{d}X}{\text{d}t} + kX = F_0 \cos(\omega t)$$
En divisant par $m$ :
$$\frac{\text{d}^2 X}{\text{d}t^2} + \frac{h}{m} \frac{\text{d}X}{\text{d}t} + \frac{k}{m} X = \frac{F_0}{m} \cos(\omega t)$$
Par identification, on pose :
- $\omega_0 = \sqrt{\frac{k}{m}}$ : pulsation propre, homogène à du $(\text{s})^{-1}$.
- $2\lambda = \frac{h}{m} \implies \lambda = \frac{h}{2m}$ : coefficient d'amortissement, homogène à du $(\text{s})^{-1}$.

L'équation s'écrit bien :
$$\frac{\text{d}^2 X}{\text{d}t^2} + 2\lambda \frac{\text{d}X}{\text{d}t} + \omega_0^2 X = \frac{F_0}{m} \cos(\omega t)$$

---

#### 3. Étude du régime libre (amorti)
Avec $F_0 = 0$, l'équation homogène associée est :
$$\frac{\text{d}^2 X}{\text{d}t^2} + 2\lambda \frac{\text{d}X}{\text{d}t} + \omega_0^2 X = 0$$
L'équation caractéristique associée est :
$$r^2 + 2\lambda r + \omega_0^2 = 0$$
Le discriminant réduit est $\Delta' = \lambda^2 - \omega_0^2$. 
Le régime est **pseudo-périodique** si les racines sont complexes conjuguées, ce qui correspond à un amortissement faible devant la raideur, soit $\Delta' < 0 \iff \lambda < \omega_0$.

Les racines sont alors :
$$r_1, r_2 = -\lambda \pm j \omega_p$$
où $\omega_p = \sqrt{\omega_0^2 - \lambda^2}$ est la **pulsation propre amortie**.

La solution générale s'écrit sous la forme réelle :
$$X(t) = e^{-\lambda t} \left( A \cos(\omega_p t) + B \sin(\omega_p t) \right)$$
où $A$ et $B$ sont des constantes déterminées par les conditions initiales :
1. $X(0) = X_0 \implies A = X_0$
2. $\left.\frac{\text{d}X}{\text{d}t}\right|_{t=0} = 0 \implies -\lambda A + \omega_p B = 0 \implies B = \frac{\lambda}{\omega_p} X_0$

La solution complète est donc :
$$X(t) = X_0 e^{-\lambda t} \left( \cos(\omega_p t) + \frac{\lambda}{\omega_p} \sin(\omega_p t) \right)$$

La pseudo-période est $T = \frac{2\pi}{\omega_p}$. 
Le décrément logarithmique $\delta$ vaut :
$$\delta = \ln\left(\frac{X(t)}{X(t+T)}\right) = \ln\left(\frac{e^{-\lambda t}}{e^{-\lambda(t+T)}}\right) = \ln(e^{\lambda T}) = \lambda T = \frac{2\pi \lambda}{\omega_p}$$

---

#### 4. Réponse harmonique forcée et résonance
On cherche la solution particulière en notation complexe en associant à l'excitation $\frac{F_0}{m} \cos(\omega t)$ la grandeur complexe $\underline{f}(t) = \frac{F_0}{m} e^{j\omega t}$. L'équation devient :
$$\frac{\text{d}^2 \underline{X}}{\text{d}t^2} + 2\lambda \frac{\text{d}\underline{X}}{\text{d}t} + \omega_0^2 \underline{X}  = \frac{F_0}{m} e^{j\omega t}$$
En cherchant une solution sous la forme $\underline{X}(t) = \underline{X}_m e^{j\omega t}$, les dérivées successives amènent :
$$\left( -\omega^2 + 2j\lambda\omega + \omega_0^2 \right) \underline{X}_m = \frac{F_0}{m}$$
L'amplitude complexe est donc :
$$\underline{X}_m = \frac{F_0 / m}{\omega_0^2 - \omega^2 + 2j\lambda\omega}$$
Le module de cette amplitude (amplitude réelle du mouvement permanent) est :
$$X_m = |\underline{X}_m| = \frac{F_0 / m}{\sqrt{(\omega_0^2 - \omega^2)^2 + (2\lambda\omega)^2}}$$
La phase $\phi = \arg(\underline{X}_m)$ est donnée par :
$$\tan \phi = \frac{-2\lambda\omega}{\omega_0^2 - \omega^2}$$

---

#### 5. Analyse critique du modèle
- **Recherche de la pulsation de résonance en amplitude $\omega_r$ :**
  L'amplitude $X_m(\omega)$ est maximale lorsque le dénominateur est minimal. Posons $g(\omega) = (\omega_0^2 - \omega^2)^2 + 4\lambda^2\omega^2$. 
  Dérivons $g(\omega)$ par rapport à $\omega$ :
  $$g'(\omega) = 2(-2\omega)(\omega_0^2 - \omega^2) + 8\lambda^2\omega = 4\omega \left[ \omega^2 - \omega_0^2 + 2\lambda^2 \right]$$
  L'annulation de la dérivée pour une pulsation non nulle donne :
  $$\omega_r^2 = \omega_0^2 - 2\lambda^2$$
  Cette résonance en amplitude existe si et seulement si $\omega_r^2 > 0$, soit **$\lambda < \frac{\omega_0}{\sqrt{2}}$** (condition d'amortissement suffisamment faible). Si cette condition n'est pas remplie, l'amplitude est maximale pour $\omega = 0$ (pas de résonance).

- **Analyse critique du modèle physique :**
  1. *L'élasticité linéaire (loi de Hooke)* : Le terme $-k(x-l_0)$ suppose un ressort idéal valable uniquement pour des déformations modérées. Si l'amplitude $X_m$ devient très grande, on sort du domaine de validité élastique (limite d'élasticité, non-linéarités géométriques et matérielles).
  2. *Le frottement fluide linéaire* : Le terme $-h\vec{v}$ modélise correctement les écoulements à bas nombre de Reynolds (régime linéaire de Stokes). Pour des vitesses élevées ($\vec{v}$ grand), les forces aérodynamiques deviennent quadratiques (régime de Newton, en $-\gamma \|\vec{v}\|\vec{v}$), ce qui invalide l'équation linéaire et nécessite des méthodes de résolution non-linéaires (perturbations ou intégration numérique).