---
title: 'Cours : Mécanique du point et bilans'
description: 'Fiche de synthèse officielle et démonstrations du programme CPGE PTSI.'
---

## 📌 1. Définitions & Cadre d'étude

La mécanique du point matériel a pour objet l'étude du mouvement d'un système idéalisé, dit point matériel, dont toute la masse est concentrée en un point géométrique $M$.

### Espace de configuration et référentiel
Un **référentiel** $\mathcal{R}$ est associé à un solide indéformable de référence muni d'un repère d'espace cartésien $\mathcal{B} = (\vec{u}_x, \vec{u}_y, \vec{u}_z)$ et d'une échelle de temps universelle (en physique classique non relativiste).
La position du point $M$ à l'instant $t$ est repérée par son vecteur position $\vec{r}(t) = \overrightarrow{OM}(t) \in \mathcal{E}_3$.

### Cinématique du point
* **Vecteur vitesse** $\vec{v}(M/\mathcal{R})$ : Dérivée temporelle du vecteur position dans le référentiel $\mathcal{R}$.
  $$\vec{v}(M/\mathcal{R}) = \frac{d\vec{r}}{dt}\Big|_{\mathcal{R}}$$
* **Vecteur accélération** $\vec{a}(M/\mathcal{R})$ : Dérivée temporelle du vecteur vitesse dans le référentiel $\mathcal{R}$.
  $$\vec{a}(M/\mathcal{R}) = \frac{d\vec{v}(M/\mathcal{R})}{dt}\Big|_{\mathcal{R}} = \frac{d^2\vec{r}}{dt^2}\Big|_{\mathcal{R}}$$

### Systèmes de coordonnées usuels en PTSI
1. **Coordonnées cartésiennes** $(x, y, z)$ : 
   $$\vec{r} = x\vec{u}_x + y\vec{u}_y + z\vec{u}_z \quad \text{avec} \quad \frac{d\vec{u}_x}{dt} = \vec{0} \ (\text{base fixe})$$
2. **Coordonnées cylindriques** $(r, \theta, z)$ :
   $$\vec{r} = r\vec{u}_r + z\vec{u}_z$$
   Les dérivées des vecteurs de base s'expriment par :
   $$\frac{d\vec{u}_r}{dt} = \dot{\theta}\vec{u}_\theta, \quad \frac{d\vec{u}_\theta}{dt} = -\dot{\theta}\vec{u}_r, \quad \frac{d\vec{u}_z}{dt} = \vec{0}$$
   L'accélération s'écrit alors :
   $$\vec{a}(M/\mathcal{R}) = (\ddot{r} - r\dot{\theta}^2)\vec{u}_r + (r\ddot{\theta} + 2\dot{r}\dot{\theta})\vec{u}_\theta + \ddot{z}\vec{u}_z$$

---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### Principe Fondamental de la Dynamique (PFD)
Dans un référentiel **galiléen** $\mathcal{R}_{\text{gal}}$, pour un point matériel $M$ de masse $m$ constante, la relation fondamentale de la dynamique s'écrit :
$$\sum \vec{F}_{\text{ext}} = m \vec{a}(M/\mathcal{R}_{\text{gal}})$$
où $\sum \vec{F}_{\text{ext}}$ désigne la résultante des forces extérieures s'exerçant sur le point $M$.

### Théorème de l'énergie cinétique (TEC)
Le travail d'une force $\vec{F}$ le long d'un chemin $\mathcal{C}$ reliant $A$ à $B$ est défini par :
$$W_{A \to B}(\vec{F}) = \int_{A}^{B} \vec{F} \cdot d\vec{OM}$$

**Démonstration :**
Partons du PFD en projetant scalairement par le vecteur vitesse instantané $\vec{v} = \frac{d\vec{OM}}{dt}$ :
$$\sum \vec{F}_{\text{ext}} \cdot \vec{v} = m \frac{d\vec{v}}{dt} \cdot \vec{v}$$
Or, par dérivation d'un produit scalaire :
$$m \frac{d\vec{v}}{dt} \cdot \vec{v} = \frac{m}{2} \frac{d}{dt}(\vec{v} \cdot \vec{v}) = \frac{d}{dt}\left(\frac{1}{2} m v^2\right) = \frac{dE_c}{dt}$$
En intégrant cette relation temporelle entre les instants $t_1$ (position $A$) et $t_2$ (position $B$) :
$$\int_{t_1}^{t_2} \left(\sum \vec{F}_{\text{ext}}\right) \cdot \vec{v} \, dt = \int_{t_1}^{t_2} \frac{dE_c}{dt} \, dt$$
$$\int_{A}^{B} \sum \vec{F}_{\text{ext}} \cdot d\vec{OM} = E_c(B) - E_c(A)$$
C'est le **Théorème de l'énergie cinétique** : la variation de l'énergie cinétique entre deux points est égale à la somme des travaux des forces extérieures s'exerçant sur le système.

### Théorème du moment cinétique (TMC)
Le moment cinétique du point $M$ par rapport à un point fixe $O$ du référentiel galiléen est $\vec{L}_O(M) = \overrightarrow{OM} \wedge m\vec{v}(M/\mathcal{R}_{\text{gal}})$.
Le moment des forces en $O$ est $\vec{\mathcal{M}}_O(\vec{F}) = \overrightarrow{OM} \wedge \vec{F}$.

Le théorème s'écrit :
$$\frac{d\vec{L}_O}{dt}\Big|_{\mathcal{R}_{\text{gal}}} = \sum \vec{\mathcal{M}}_O(\vec{F}_{\text{ext}})$$

---

## 💡 3. Méthodes de calcul & Algorithmes

Pour résoudre un problème de mécanique du point en PTSI, la démarche méthodique suivante doit être rigoureusement appliquée :

1. **Isolation et Bilan :**
   * Définir le système étudié (le point matériel $M$).
   * Préciser le référentiel d'étude et justifier son caractère galiléen.
   * Recenser exhaustivement toutes les forces extérieures s'exerçant sur le système ($\vec{P}, \vec{R}, \vec{T}, \vec{f}$, etc.). Réaliser un schéma clair.

2. **Choix du système de coordonnées :**
   * Adapter le système de coordonnées aux symétries ou contraintes géométriques du problème (cartésiennes pour un plan incliné, cylindriques pour un mouvement circulaire ou hélicoïdal).

3. **Application de l'outil adapté :**
   * *Dynamique vectorielle (PFD)* : Si l'on cherche des expressions vectorielles, des accélérations instantanées ou des réactions de liaison normales/tangentielles.
   * *Approche énergétique (TEC)* : Si l'on cherche une relation entre des vitesses et des positions, et que le travail des forces non conservatrices est nul ou facilement calculable (conservation de l'énergie mécanique $E_m = E_c + E_p$).

---

## ⚠️ 4. Pièges classiques aux Concours

* **Oubli de la nature galiléenne du référentiel :** Appliquer le PFD dans un référentiel non galiléen (comme un référentiel terrestre en mouvement accéléré ou en rotation) sans ajouter les forces d'inertie (programme de MP/PC mais source de confusion majeure en PTSI).
* **Confusion entre dérivation vectorielle et scalaire :** Oublier que les vecteurs de base des coordonnées cylindriques ($\vec{u}_r, \vec{u}_theta$) dépendent du temps et possèdent donc des dérivées non nulles.
* **Erreur de signe dans le travail ou l'énergie potentielle :** Ne pas respecter la convention fondamentale liant force conservative et énergie potentielle : $\delta W = -\,dE_p$, soit $\vec{F} = -\overrightarrow{\text{grad}}(E_p)$.
* **Homogénéité des expressions :** Négliger de vérifier systématiquement l'homogénéité (par analyse dimensionnelle) des équations différentielles obtenues avant de les intégrer.