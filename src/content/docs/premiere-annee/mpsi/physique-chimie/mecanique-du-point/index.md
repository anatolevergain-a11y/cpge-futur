---
title: 'Cours : Mécanique du point matériel'
description: 'Synthèse de cours, théorèmes et démonstrations fondamentales.'
---

## 📌 1. Définitions & Cadre d'étude

### A. Modèle du point matériel
Un système mécanique est modélisé par un **point matériel** lorsque ses dimensions caractéristiques sont très petites devant les distances mises en jeu dans le problème étudié, et que l'on néglige son orientation (mouvement de rotation propre). Ce point $M$ est muni d'une masse $m$ (strictement positive et constante en physique non-relativiste).

### B. Référentiel et repérage
* **Référentiel $\mathcal{R}$ :** Solide de référence auquel on associe un repère d'espace $\mathcal{R}_E (O, \vec{u}_x, \vec{u}_y, \vec{u}_z)$ et une échelle de temps absolue (repérée par une horloge).
* **Vecteur position :** $\vec{r}(t) = \vec{OM}(t)$.
* **Vecteur vitesse :** $\vec{v}(M/\mathcal{R}) = \frac{\mathrm{d}\vec{OM}}{\mathrm{d}t}\Big|_{\mathcal{R}}$.
* **Vecteur accélération :** $\vec{a}(M/\mathcal{R}) = \frac{\mathrm{d}\vec{v}(M/\mathcal{R})}{\mathrm{d}t}\Big|_{\mathcal{R}} = \frac{\mathrm{d}^2\vec{OM}}{\mathrm{d}t^2}\Big|_{\mathcal{R}}$.

### C. Systèmes de coordonnées usuels
* **Cartésiennes $(x, y, z)$ :** $\vec{r} = x\vec{u}_x + y\vec{u}_y + z\vec{u}_z$. Les vecteurs de base sont fixes dans $\mathcal{R}$.
* **Cylindriques $(\rho, \theta, z)$ :** $\vec{r} = \rho\vec{u}_\rho + z\vec{u}_z$. Dérivées des vecteurs de base :
  $$\frac{\mathrm{d}\vec{u}_\rho}{\mathrm{d}t} = \dot{\theta}\vec{u}_\theta, \quad \frac{\mathrm{d}\vec{u}_\theta}{\mathrm{d}t} = -\dot{\theta}\vec{u}_\rho, \quad \frac{\mathrm{d}\vec{u}_z}{\mathrm{d}t} = \vec{0}$$
* **Sphériques $(r, \theta, \varphi)$ :** $\vec{r} = r\vec{u}_r$. (Convention usuelle : $r$ rayon, $\theta$ colatitude, $\varphi$ longitude).

---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### A. Lois de Newton (Cadre galiléen)
Un référentiel galiléen est un référentiel dans lequel la première loi de Newton est vérifiée.

* **Principe d'inertie (1ère loi) :** Il existe une classe de référentiels, dits galiléens, dans lesquels tout point matériel isolé (ou pseudo-isolé) est soit au repos, soit en mouvement rectiligne uniforme.
* **Fondamental de la Statique (GFS) :** $\sum \vec{F}_{\text{ext}} = \vec{0}$ (en régime stationnaire ou d'équilibre).
* **Principe Fondamental de la Dynamique (PFD - 2nde loi) :** Dans un référentiel galiléen $\mathcal{R}_g$, pour un point matériel de masse $m$ constante :
  $$\sum \vec{F}_{\text{ext}} = m\vec{a}(M/\mathcal{R}_g)$$
* **Principe des actions réciproques (3ème loi) :** Soit deux points $M_1$ et $M_2$ exerçant des forces l'un sur l'autre : $\vec{F}_{1\to 2} = -\vec{F}_{2\to 1}$.

### B. Théorème de la quantité de mouvement
**Démonstration :** 
Par définition, la quantité de mouvement du point matériel est $\vec{p} = m\vec{v}$.
En dérivant par rapport au temps dans un référentiel galiléen (si $m$ est constante) :
$$\frac{\mathrm{d}\vec{p}}{\mathrm{d}t} = m\frac{\mathrm{d}\vec{v}}{\mathrm{d}t} = m\vec{a} = \sum \vec{F}_{\text{ext}}$$
C'est la formulation équivalente du PFD.

### C. Théorème du moment cinétique (TMC)
Le moment cinétique du point $M$ par rapport à un point fixe $A$ du référentiel galiléen est :
$$\vec{L}_A(M) = \vec{AM} \wedge \vec{p} = m \vec{AM} \wedge \vec{v}$$
**Démonstration du TMC par rapport à un point fixe $A$ :**
$$\frac{\mathrm{d}\vec{L}_A}{\mathrm{d}t} = \frac{\mathrm{d}\vec{AM}}{\mathrm{d}t} \wedge (m\vec{v}) + \vec{AM} \wedge \frac{\mathrm{d}(m\vec{v})}{\mathrm{d}t}$$
Or, $\frac{\mathrm{d}\vec{AM}}{\mathrm{d}t} = \vec{v}(M) - \vec{v}(A)$. Si $A$ est fixe dans $\mathcal{R}_g$, $\vec{v}(A) = \vec{0}$, donc $\frac{\mathrm{d}\vec{AM}}{\mathrm{d}t} \wedge (m\vec{v}) = \vec{v} \wedge m\vec{v} = \vec{0}$.
De plus, $\frac{\mathrm{d}(m\vec{v})}{\mathrm{d}t} = \sum \vec{F}_{\text{ext}}$. Il vient :
$$\frac{\mathrm{d}\vec{L}_A}{\mathrm{d}t} = \vec{AM} \wedge \sum \vec{F}_{\text{ext}} = \sum \vec{\mathcal{M}}_A(\vec{F}_{\text{ext}})$$

### D. Théorème de l'énergie cinétique (TEC)
L'énergie cinétique du point matériel est $E_c = \frac{1}{2}mv^2$.
**Démonstration :**
Calculons la dérivée temporelle de $E_c$ dans $\mathcal{R}_g$ :
$$\frac{\mathrm{d}E_c}{\mathrm{d}t} = \frac{\mathrm{d}}{\mathrm{d}t}\left(\frac{1}{2}m \vec{v}\cdot\vec{v}\right) = m \vec{v} \cdot \frac{\mathrm{d}\vec{v}}{\mathrm{d}t} = \vec{v} \cdot (m\vec{a})$$
En appliquant le PFD :
$$\frac{\mathrm{d}E_c}{\mathrm{d}t} = \vec{v} \cdot \sum \vec{F}_{\text{ext}}$$
Par intégration entre un état initial $A$ et un état final $B$ le long d'une trajectoire $\mathcal{C}$ :
$$E_c(B) - E_c(A) = \int_{\mathcal{C}} \sum \vec{F}_{\text{ext}} \cdot \mathrm{d}\vec{OM}$$
Le terme de droite est le **travail** des forces extérieures $\sum W_{A\to B}(\vec{F}_{\text{ext}})$.

---

## 💡 3. Méthodes classiques de résolution

### A. Méthodologie générale pour appliquer le PFD
1. **Définir le système** étudié (le point $M$ de masse $m$).
2. **Préciser le référentiel** d'étude et affirmer son caractère galiléen (en justifiant si nécessaire).
3. **Faire le bilan des forces** extérieures s'exerçant sur le système (poids, forces de contact, forces élastiques, etc.).
4. **Appliquer le PFD** sous forme vectorielle, puis projeter la relation vectorielle sur les axes d'un repère adapté à la géométrie du problème (cartésiens, cylindriques ou de Frenet).
5. **Résoudre les équations différentielles** obtenues en tenant compte des conditions initiales (positions et vitesses à $t=0$).

### B. Utilisation des intégrales premiers du mouvement
* **Forces conservatives :** Si une force dérive d'une énergie potentielle $E_p$, alors $\vec{F} = -\vec{\nabla}E_p$. Si toutes les forces appliquées (ou le bilan des forces) sont conservatives, l'**énergie mécanique** $E_m = E_c +E_p$ se conserve :
  $$\frac{\mathrm{d}E_m}{\mathrm{d}t} = 0$$
* **Cas des forces non conservatives (ex: frottements fluides $\vec{f} = -\alpha \vec{v}$) :**
  $$\frac{\mathrm{d}E_m}{\mathrm{d}t} = \sum \vec{F}_{\text{non conservatives}} \cdot \vec{v} = -\alpha v^2 \le 0$$
  L'énergie mécanique décroît au cours du temps.

---

## ⚠️ 4. Pièges classiques aux Concours

1. **Oublier de justifier le caractère galiléen du référentiel :** C'est une faute éliminatoire. Il faut expliciter l'hypothèse (ex: référentiel terrestre supposé galiléen pour une durée d'expérience courte devant la période de rotation terrestre).
2. **Confondre dérivation vectorielle et scalaire dans les bases mobiles :** En coordonnées cylindriques ou de Frenet, les vecteurs de base $\vec{u}_\rho$, $\vec{u}_\theta$, $\vec{u}_t$, $\vec{u}_n$ dépendent du temps. Oublier de les dériver lors du calcul de la vitesse ou de l'accélération conduit à des erreurs grossières.
3. **Mauvaise orientation des forces :** Erreur fréquente sur le sens de la force de frottement (toujours opposée au vecteur vitesse $\vec{v}$) ou de la force de rappel élastique.
4. **Incompatibilité des unités :** Négliger de convertir les masses en kilogrammes ($\text{kg}$), les distances en mètres ($\text{m}$) et le temps en secondes ($\text{s}$) avant d'intégrer les équations différentielles.
5. **Utilisation abusive du théorème de l'énergie mécanique :** Appliquer la conservation de $E_m$ en présence de forces non conservatives (frottements solides ou fluides, forces motrices non potentielles).