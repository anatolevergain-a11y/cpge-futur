---
title: "📌 1. Définitions & Cadre d'étude"
description: "Fiche de cours et d'exercice CPGE."
---

## 📌 1. Définitions & Cadre d'étude

La diffusion thermique (ou conduction thermique) est un mode de transfert thermique sans déplacement macroscopic de matière, résultant de l'agitation thermique microscopique au sein des milieux condensés (solides et liquides) ou des gaz au repos.

### 1.1. Grandeurs scalaires et vectorielles fondamentales
* **Température $T(\vec{r}, t)$** : Champ scalaire représentant l'agitation thermique locale ($\text{K}$ ou $^{\circ}\text{C}$).
* **Flux thermique $\vec{j}_{\text{th}}$** : Vecteur représentant la puissance thermique traversant par unité de surface une facette orientée par sa normale $\vec{n}$ ($\text{W}\cdot\text{m}^{-2}$).
* **Puissance thermique $P_{\text{th}}$** : Flux traversant une surface $\Sigma$ :
  $$P_{\text{th}} = \iint_{\Sigma} \vec{j}_{\text{th}} \cdot \vec{n} \, dS$$

### 1.2. Lois phénoménologiques constitutives
* **Loi de Fourier (conduction)** : Exprime la proportionnalité entre le gradient de température et le flux thermique dans un milieu isotrope :
  $$\vec{j}_{\text{th}} = -\lambda \vec{\text{grad}}(T)$$
  où $\lambda$ est la **conductivité thermique** du matériau ($\text{W}\cdot\text{m}^{-1}\cdot\text{K}^{-1}$). Le signe moins traduit le fait que la chaleur spontanément des zones chaudes vers les zones froides.
* **Capacité thermique volumique $C_v$** : Énergie nécessaire pour élever d'un kelvin l'unité de volume du matériau à volume constant ($\text{J}\cdot\text{m}^{-3}\cdot\text{K}^{-1}$). On pose souvent $C_v = \rho c$ ($\rho$ étant la masse volumique et $c$ la capacité thermique massique).
---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### 2.1. Établissement de l'équation de la chaleur
**Démonstration (exigible aux concours) :**
Considérons un domaine fixe $\mathcal{V}$ délimité par une surface fermée $\mathcal{S}$ de normale sortante $\vec{n}$. 
La conservation de l'énergie interne dans le système (en l'absence de travail des forces pressantes ou visqueuses, et en régime non nécessairement stationnaire) s'écrit :
$$\frac{dE_{\text{th}}}{dt} = -\iint_{\mathcal{S}} \vec{j}_{\text{th}} \cdot \vec{n} \, dS + \iiint_{\mathcal{V}} p_{\text{vol}} \, dV$$
Où $E_{\text{th}} = \iiint_{\mathcal{V}} \rho c T \, dV$ et $p_{\text{vol}}$ représente la puissance volumique des sources internes (effet Joule, réactions chimiques...).

1. Par définition, $E_{\text{th}} = \iiint_{\mathcal{V}} C_v T \, dV$, donc sa dérivée temporelle (pour un domaine fixe) est :
   $$\frac{dE_{\text{th}}}{dt} = \iiint_{\mathcal{V}} C_v \frac{\partial T}{\partial t} \, dV$$
2. En appliquant le théorème de Green-Ostrogradski au flux thermique à travers $\mathcal{S}$ :
   $$\iint_{\mathcal{S}} \vec{j}_{\text{th}} \cdot \vec{n} \, dS = \iiint_{\mathcal{V}} \text{div}(\vec{j}_{\text{th}}) \, dV$$
3. En injectant la loi de Fourier $\vec{j}_{\text{th}} = -\lambda \vec{\text{grad}}(T)$ (avec $\lambda$ supposé homogène et isotrope) :
   $$\text{div}(\vec{j}_{\text{th}}) = -\text{div}(\lambda \vec{\text{grad}}(T)) = -\lambda \Delta T$$
4. En rassemblant tous les termes sous une même intégrale volumique (vraie pour tout volume $\mathcal{V}$ arbitraire, d'où l'égalité ponctuelle des intégrants) :
   $$C_v \frac{\partial T}{\partial t} = \lambda \Delta T + p_{\text{vol}}$$

### 2.2. L'équation de la diffusion thermique
En posant **$\text{D} = \frac{\lambda}{C_v} = \frac{\lambda}{\rho c}$** (la **diffusivité thermique**, en $\text{m}^2\cdot\text{s}^{-1}$), on obtient l'équation aux dérivées partielles (EDP) fondamentale :

$$\frac{\partial T}{\partial t} - D \Delta T = \frac{p_{\text{vol}}}{C_v}$$

* **Régime stationnaire** ($\frac{\partial T}{\partial t} = 0$) : $\Delta T = -\frac{p_{\text{vol}}}{\lambda}$ (Équation de Poisson). Si $p_{\text{vol}} = 0$, on obtient l'équation de Laplace : $\Delta T = 0$.
* **Régime transitoire sans source** : $\frac{\partial T}{\partial t} = D \Delta T$.

---

## 💡 3. Méthodes de calcul & Algorithmes

### 3.1. Analogies et régimes stationnaires unidirectionnels
En géométrie cartésienne (mur plan d'épaisseur $e$), l'équation stationnaire sans source se réduit à :
$$\frac{d^2 T}{dx^2} = 0 \implies T(x) = Ax + B$$
* **Analogie thermo-électrique** :
  * Flux thermique $P_{\text{th}}$ (analogue à l'intensité $I$)
  * Différence de température $\Delta T$ (analogue à la tension $U$)
  * **Résistance thermique thermique** $R_{\text{th}} = \frac{\Delta T}{P_{\text{th}}} = \frac{e}{\lambda S}$ ($\text{K}\cdot\text{W}^{-1}$).

### 3.2. Analyse dimensionnelle et temps caractéristique de diffusion
Soit un système de dimension caractéristique $L$ (épaisseur d'un mur, rayon d'un cylindre). Par analyse dimensionnelle de l'équation de la chaleur :
$$\frac{T}{\tau_{\text{diff}}} \sim D \frac{T}{L^2}$$
On définit le **temps caractéristique de diffusion thermique** :
$$\tau_{\text{diff}} = \frac{L^2}{D}$$
* **Interprétation** : C'est le temps nécessaire pour qu'une perturbation thermique s'isole ou diffuse à travers l'échelle $L$ du système. Si le temps d'observation $\tau_{\text{obs}} \ll \tau_{\text{diff}}$, le système est en régime transitoire local ; si $\tau_{\text{obs}} \gg \tau_{\text{diff}}$, le régime stationnaire est atteint.

### 3.3. Ondes thermiques (Régime sinusoïdal forcé)
Si la température d'une face d'un milieu semi-infini subit une variation sinusoïdale $T(0,t) = T_0 + \Delta T_0 \cos(\omega t)$, on cherche une solution sous forme complexe :
$$\underline{T}(x,t) = T_0 + \underline{T}_x e^{j\omega t}$$
En injectant dans l'équation de la diffusion :
$$j\omega \underline{T}_x = D \frac{d^2 \underline{T}_x}{dx^2} \implies \underline{T}_x(x) = \Delta T_0 e^{-\frac{x}{\delta}} e^{-j\frac{x}{\delta}}$$
Où l'on introduit la **longueur de pénétration thermique (ou épaisseur de peau)** $\delta$ :
$$\delta = \sqrt{\frac{2D}{\omega}}$$
* **Conséquences physiques majeures** :
  1. Amortissement exponentiel de l'onde thermique (atténuation par un facteur $e^{-2\pi} \approx 0.0018$ à une profondeur de $2\pi \delta$).
  2. Déphasage croissant avec la profondeur. Application géophysique : inertie thermique de la Terre (les caves souterraines gardent une température constante car les variations diurnes et saisonnières sont totalement atténuées).

---

## ⚠️ 4. Pièges classiques aux Concours

1. **Oublier le signe de la loi de Fourier** : Le vecteur flux thermique est dirigé des hautes vers les basses températures. Le signe "$-$" est impératif.
2. **Confondre conductivité et diffusivité** : 
   * $\lambda$ ($\text{W}\cdot\text{m}^{-1}\cdot\text{K}^{-1}$) caractérise l'aptitude d'un matériau à **conduire** la chaleur.
   * $D$ ($\text{m}^2\cdot\text{s}^{-1}$) caractérise la **rapidité** avec laquelle le champ de température s'homogénéise. Un bon conducteur n'a pas nécessairement une grande diffusivité si sa capacité thermique volumique est très élevée.
3. **Erreurs d'unités et homogénéité** : Vérifier systématiquement l'homogénéité des équations aux dérivées partielles, notamment lors du passage en coordonnées cylindriques ou sphériques (attention aux expressions des opérateurs $\text{div}$ et $\Delta$ hors du système cartésien, par exemple $\Delta T = \frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial T}{\partial r}\right)$ en symétrie cylindrique radiale).
4. **Conditions aux limites** : Ne pas oublier de préciser les conditions de raccordement aux interfaces (continuité de la température $T$ et continuité du flux thermique normal $\vec{j}_{\text{th}}\cdot\vec{n}$ en l'absence de source surfacique).