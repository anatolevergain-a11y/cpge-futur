---
title: 'Cours : Mécanique du point matériel'
description: 'Fiche de synthèse officielle et démonstrations du programme CPGE PCSI.'
---

## 📌 1. Définitions & Cadre d'étude

Le point matériel est un modèle idéalisé en mécanique classique. Il consiste à supposer que toute la masse $m$ du système étudié est concentrée en un point géométrique $M$. Ce modèle est valide tant que les dimensions caractéristiques du système sont très petites devant les échelles de longueur du mouvement et que les degrés de liberté internes (rotation, déformation) n'interviennent pas dans la dynamique du centre d'inertie.

### Espace et Temps
Le cadre d'étude est l'espace affine euclidien tridimensionnel $\mathcal{E}_3$, associé à son espace vectoriel vectoriel $\vec{E}_3$. Le temps $t$ est absolu et universel, modélisé par l'intervalle $\mathbb{R}$.

### Référentiel et Repérage
Un référentiel $\mathcal{R}$ est défini par la donnée d'un solide de référence et d'une horloge. Pour y effectuer des mesures, on y associe un repère d'espace $\mathcal{R}(O, \vec{u}_x, \vec{u}_y, \vec{u}_z)$ où $O$ est l'origine et $(\vec{u}_x, \vec{u}_y, \vec{u}_z)$ une base orthonormée directe de $\vec{E}_3$.

La position du point matériel $M$ à l'instant $t$ est repérée par son vecteur position :
$$\vec{OM}(t) = x(t)\vec{u}_x + y(t)\vec{u}_y + z(t)\vec{u}_z$$

### Cinématique du point
- **Vecteur vitesse** $\vec{v}(M/\mathcal{R})$ : C'est la dérivée temporelle du vecteur position dans le référentiel $\mathcal{R}$ :
  $$\vec{v}(M/\mathcal{R}) = \frac{d\vec{OM}}{dt}\Big|_{\mathcal{R}}$$
- **Vecteur accélération** $\vec{a}(M/\mathcal{R})$ : C'est la dérivée temporelle du vecteur vitesse dans le référentiel $\mathcal{R}$ :
  $$\vec{a}(M/\mathcal{R}) = \frac{d\vec{v}(M/\mathcal{R})}{dt}\Big|_{\mathcal{R}} = \frac{d^2\vec{OM}}{dt^2}\Big|_{\mathcal{R}}$$

---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### Principe Fondamental de la Dynamique (PFD)
Le PFD (ou deuxième loi de Newton) est postulé dans tout référentiel galiléen. 

Soit un point matériel $M$ de masse $m$ (constante) soumis à la résultante des forces extérieures $\vec{F}_{\text{ext}} = \sum \vec{F}_i$. Dans un référentiel galiléen $\mathcal{R}_{\text{gal}}$ :
$$m\vec{a}(M/\mathcal{R}_{\text{gal}}) = \vec{F}_{\text{ext}}$$

### Théorème de la quantité de mouvement
La quantité de mouvement du point matériel est le vecteur $\vec{p} = m\vec{v}(M/\mathcal{R})$. 
Le PFD se récrit sous la forme :
$$\frac{d\vec{p}}{dt}\Big|_{\mathcal{R}_{\text{gal}}} = \vec{F}_{\text{ext}}$$

### Théorème de l'énergie cinétique (TEC)
**Énoncé :** Dans un référentiel galiléen, la variation de l'énergie cinétique $E_c$ d'un point matériel entre deux instants $t_1$ et $t_2$ est égale à la somme des travaux des forces extérieures s'exerçant sur le point au cours de ce déplacement.

**Démonstration :**
L'énergie cinétique est définie par $E_c = \frac{1}{2}mv^2$. Calculons sa dérivée temporelle par rapport au temps dans le référentiel galiléen :
$$\frac{dE_c}{dt} = \frac{d}{dt}\left( \frac{1}{2} m \vec{v} \cdot \vec{v} \right) = m \frac{d\vec{v}}{dt} \cdot \vec{v} = m \vec{a} \cdot \vec{v}$$
En appliquant le PFD ($m\vec{a} = \vec{F}_{\text{ext}}$) :
$$\frac{dE_c}{dt} = \vec{F}_{\text{ext}} \cdot \vec{v} = \vec{F}_{\text{ext}} \cdot \frac{d\vec{OM}}{dt}$$
En intégrant cette relation entre l'instant $t_1$ (position $M_1$) et l'instant $t_2$ (position $M_2$) :
$$\Delta E_c = E_c(t_2) - E_c(t_1) = \int_{t_1}^{t_2} \vec{F}_{\text{ext}} \cdot \vec{v} \, dt = \int_{M_1}^{M_2} \vec{F}_{\text{ext}} \cdot d\vec{OM} = W_{1\to 2}(\vec{F}_{\text{ext}})$$
*CQFD.*

---

## 💡 3. Méthodes de calcul & Algorithmes

### Algorithme de résolution d'un problème de mécanique
1. **Identifier le système** : Définir clairement le point matériel $M$ et préciser sa masse $m$.
2. **Choisir le référentiel** : Préciser le référentiel d'étude et justifier (ou supposer) son caractère galiléen.
3. **Bilan des forces** : Recenser toutes les forces extérieures s'exerçant sur $M$ (poids, tensions, forces de contact, forces élastiques). Faire un schéma clair.
4. **Adapter le système de coordonnées** : Choisir la base d'espace la mieux adaptée à la symétrie du problème :
   - Cartésiennes $(x, y, z)$ : mouvements rectilignes ou champs uniformes (ex: chute libre).
   - Cylindriques $(\rho, \theta, z)$ ou Polaires $(r, \theta)$ : mouvements plans avec contraintes angulaires ou forces centrales.
5. **Appliquer le PFD** : Projeter vectoriellement la relation fondamentale sur les axes du repère choisi.
6. **Résoudre les équations différentielles** : Obtenir la cinématique par intégrations successives en tenant compte des conditions initiales à $t = 0$ : $\vec{OM}(0)$ et $\vec{v}(0)$.

---

## ⚠️ 4. Pièges classiques aux Concours

- **Oubli du caractère galiléen** : Appliquer aveuglément le PFD dans un référentiel non galiléen (comme un manège ou un véhicule en accélération) sans ajouter les forces d'inertie fictives est une faute éliminatoire. En PCSI, on veillera à bien préciser l'hypothèse galiléenne.
- **Confusion entre dérivation vectorielle et scalaire** : Lors du calcul de la vitesse ou de l'accélération en coordonnées polaires ou cylindriques, les vecteurs de base $\vec{u}_r$ et $\vec{u}_\theta$ dépendent du temps. Leur dérivée n'est pas nulle :
  $$\frac{d\vec{u}_r}{dt} = \dot{\theta}\vec{u}_\theta \quad \text{et} \quad \frac{d\vec{u}_\theta}{dt} = -\dot{\theta}\vec{u}_r$$
- **Erreurs de signe dans les projections** : Toujours vérifier le sens des axes de coordonnées par rapport aux vecteurs forces lors du bilan des forces.
- **Homogénéité des expressions** : Ne jamais omettre de vérifier l'homogénéité (par analyse dimensionnelle) de chaque terme d'une équation différentielle ou d'une solution trouvée avant de conclure.