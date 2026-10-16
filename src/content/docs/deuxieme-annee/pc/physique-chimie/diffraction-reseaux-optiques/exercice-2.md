---
title: 'Exercice 2 : Réseaux par réflexion et transmission, pouvoir de résolution'
description: 'Problème d entraînement type concours.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Les réseaux de diffraction sont des composants optiques incontournables en spectroscopie, en astronomie et dans l'industrie pour séparer les différentes longueurs d'onde constituant un rayonnement polychromatique. On s'intéresse dans ce problème à l'étude comparative de deux types de réseaux plans (par transmission et par réflexion) sous incidence normale ou oblique, puis à l'évaluation de leur performance dispersive caractérisée par leur **pouvoir de résolution**.

On considère un réseau plan infini constitué de fentes (pour le réseau par transmission) ou de traits réfléchissants (pour le réseau par réflexion) périodiques de pas $a$. Le nombre total de traits illuminés est noté $N$. La source lumineuse utilisée émet une radiation monochromatique de longueur d'onde $\lambda$ dans le vide (célérité de la lumière $c$). L'indice du milieu extérieur est pris égal à $1$.

---

### ❓ Questions progressives (incluant une analyse critique du modèle)

1. **Étude cinématique d'un réseau par transmission**
   Un faisceau lumineux plan, quasi-monochromatique de longueur d'onde $\lambda$, arrive sous une incidence normale sur un réseau par transmission de pas $a$.
   Établir la relation fondamentale des réseaux donnant les angles de diffraction $\theta_p$ correspondant aux directions d'interférences constructives pour l'ordre $p$ (où $p \in \mathbb{Z}$).

2. **Dispersion spectrale et analyse critique**
   En déduire l'expression de la dispersion angulaire $\frac{\mathrm{d}\theta_p}{\mathrm{d}\lambda}$. Comment cette grandeur évolue-t-elle lorsque l'ordre $p$ augmente ? Quelles sont les limites pratiques de cette augmentation dans un dispositif réel ?

3. **Pouvoir de résolution d'un réseau**
   On rappelle que le critère de Rayleigh permet de définir la limite de résolution $\delta\lambda$ de deux radiations $\lambda$ et $\lambda + \delta\lambda$ comme le fait que le maximum principal de l'une coïncide avec le premier minimum d'intensité de l'autre.
   Montrer que l'intensité diffractée par $N$ traits s'annule pour la première fois au voisinage d'un ordre $p$ lorsque la différence de marche entre le premier et le dernier trait est voisine de $\frac{\lambda}{N}$ par rapport à la condition d'interférence constructive.
   En déduire l'expression du pouvoir de résolution théorique $R = \frac{\lambda}{\delta\lambda}$ en fonction du nombre de traits illuminés $N$ et de l'ordre $p$.

4. **Extension au réseau par réflexion**
   On considère désormais un réseau par réflexion, éclairé sous une incidence $\theta_i$ (angle mesuré par rapport à la normale au plan moyen du réseau). Les traits réfléchissants sont séparés par un pas $a$. Établir la formule générale des réseaux par réflexion sous incidence quelconque en fonction de $\theta_i$, $\theta_p$, $a$, $\lambda$ et $p$.

---

### 💡 Pistes & Indications méthodologiques

- **Question 1 :** Utiliser le principe de Fermat ou la différence de chemin optique entre deux rayons consécutifs issus de deux fentes adjacentes séparées de la distance $a$.
- **Question 2 :** Dériver la relation obtenue à la question 1 par rapport à $\lambda$ en considérant l'angle $\theta_p$ comme une fonction de $\lambda$.
- **Question 3 :** Écrire l'intensité sous la forme d'un produit ou utiliser le déphasage global $\Delta \varphi = N \frac{2\pi}{\lambda} a (\sin\theta_p - \sin\theta_i)$. Le premier minimum s'obtient lorsque le déphasage global varie de $\frac{2\pi}{N}$ par rapport au maximum principal.
- **Question 4 :** Tracer un schéma clair en faisant apparaître la projection des chemins optiques avant et après réflexion sur le plan du réseau.

---

### 📋 Corrigé détaillé pas à pas

#### 1. Étude cinématique d'un réseau par transmission
Considérons deux fentes consécutives du réseau, notées $F_1$ et $F_2$, séparées par la distance $a$. Sous une incidence normale, le front d'onde incident est parallèle au plan du réseau. 
La différence de marche $\delta$ entre deux rayons diffractés sous un angle $\theta_p$ par ces deux fentes consécutives s'exprime géométriquement par :
$$\delta = a \sin\theta_p$$
Des interférences constructives (maxima principaux d'intensité) sont obtenues si cette différence de marche est un multiple entier de la longueur d'onde $\lambda$ :
$$\delta = p\lambda \quad \text{avec} \quad p \in \mathbb{Z}$$
On obtient ainsi la **formule des réseaux par transmission sous incidence normale** :
$$a \sin\theta_p = p\lambda$$

#### 2. Dispersion spectrale et analyse critique
Pour analyser la sensibilité du réseau aux variations de longueur d'onde, on différencie la relation précédente par rapport à $\lambda$ (à $a$ et $p$ fixés) :
$$a \cos\theta_p \, \mathrm{d}\theta_p = p \, \mathrm{d}\lambda$$
On en déduit la **dispersion angulaire** :
$$\frac{\mathrm{d}\theta_p}{\mathrm{d}\lambda} = \frac{p}{a \cos\theta_p}$$
* **Analyse critique :** La dispersion angulaire est directement proportionnelle à l'ordre d'interférence $p$. Pour séparer finement deux radiations proches, il est donc avantageux de travailler à des ordres $p$ élevés. 
* **Limites pratiques :** 
  1. Lorsque $p$ augmente, l'angle $\theta_p$ augmente, ce qui accroît les aberrations géométriques du système optique de focalisation.
  2. L'intensité lumineuse se répartit sur un nombre croissant d'ordres, diminuant le rapport signal sur bruit (problème résolu par l'utilisation de réseaux blazes).
  3. La condition $|\sin\theta_p| \le 1$ impose une limite physique au nombre d'ordres accessibles : $|p| \le \frac{a}{\lambda}$.

#### 3. Pouvoir de résolution d'un réseau
L'intensité lumineuse transmise ou réfléchie par $N$ motifs périodiques est proportionnelle au facteur d'interférence à $N$ondes :
$$I(\theta) \propto \left(\frac{\sin(N X)}{\sin X}\right)^2 \quad \text{avec} \quad X = \frac{\pi a \sin\theta}{\lambda}$$
Les maxima principaux ont lieu pour $X = p\pi$. Le premier minimum d'intensité voisin du maximum d'ordre $p$ correspond à une annulation du numérateur sans annulation du dénominateur, soit :
$$N X = N p \pi + \pi \implies X = p\pi + \frac{\pi}{N}$$
La variation d'angle $\delta\theta$ entre le maximum principal d'ordre $p$ et ce premier minimum vérifie :
$$a \cos\theta_p \, \delta\theta = \frac{\lambda}{N}$$
Selon le critère de Rayleigh, deux radiations de longueurs d'onde $\lambda$ et $\lambda + \delta\lambda$ sont résolues si le maximum de l'une coïcantide avec le premier minimum de l'autre. La variation de longueur d'onde $\delta\lambda$ correspondante vérifie :
$$a \cos\theta_p \left(\frac{\mathrm{d}\theta_p}{\mathrm{d}\lambda}\right) \delta\lambda = \frac{\lambda}{N}$$
En injectant l'expression de la dispersion angulaire obtenue à la question 2 :
$$p \, \delta\lambda = \frac{\lambda}{N}$$
Le **pouvoir de résolution théorique** $R$ s'écrit donc :
$$R = \frac{\lambda}{\delta\lambda} = N \cdot p$$
*Interprétation :* Le pouvoir de résolution ne dépend ni du pas $a$ ni de la longueur d'onde $\lambda$ explicitement, mais uniquement du nombre total de traits illuminés $N$ et de l'ordre d'interférence $p$. Plus le réseau est large (grand $N$) et plus on travaille à un ordre élevé, plus le réseau est performant pour séparer les raies spectrales proches.

#### 4. Extension au réseau par réflexion
Pour un réseau par réflexion, un faisceau arrive sous l'angle d'incidence $\theta_i$ (compté positivement dans le sens trigonométrique par rapport à la normale au plan moyen du réseau). Après réflexion sur deux traits consécutifs, la différence de marche globale $\delta_{\text{réfl}}$ est la somme de la différence de chemin avant et après réflexion :
$$\delta_{\text{réfl}} = a (\sin\theta_i + \sin\theta_p)$$
En écrivant la condition d'interférence constructive pour l'ordre $p$, on obtient la **formule générale des réseaux par réflexion** :
$$a (\sin\theta_i + \sin\theta_p) = p\lambda$$
*(Note de convention : selon le signe algébrique choisi pour les angles par rapport à la normale, cette formule s'adapte aux montages d'Autocollimation ou de Littrow où $\theta_i = \theta_p$)*.