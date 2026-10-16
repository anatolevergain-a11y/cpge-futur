---
title: 'Cours : Interférométrie et réseaux optiques'
description: 'Synthèse officielle du cours et démonstrations clés.'
---

# Interférométrie et réseaux optiques

## 1. Introduction et rappels sur la cohérence

L'optique ondulatoire repose sur la superposition des champs électriques. Soit deux ondes lumineuses monochromatiques de même pulsation $\omega$, modélisées par leurs champs complexes $\underline{E}_1$ et $\underline{E}_2$. 
L'intensité lumineuse observée est proportionnelle à la moyenne temporelle du carré du champ électrique total :
$$I = \langle |\underline{E}_1 + \underline{E}_2|^2 \rangle = I_1 + I_2 + 2 \text{Re}(\langle \underline{E}_1 \cdot \underline{E}_2^* \rangle)$$

Le terme d'interférence est défini par :
$$I_{12} = 2 \text{Re}(\langle \underline{E}_1 \cdot \underline{E}_2^* \rangle)$$

### Conditions d'interférence
Pour obtenir des interférences stables et visibles, les sources doivent être :
1. **Synchrones** : même fréquence $\nu$ (donc même pulsation $\omega$).
2. **Cohérentes** : la différence de phase $\Delta \varphi(t)$ doit être, sinon constante, du moins à fluctuations lentes devant le temps de réponse du récepteur.
3. **Même état de polarisation** (pour obtenir un contraste optimal).

---

## 2. Interféromètres à division d'amplitude

Ces dispositifs séparent l'onde incidente en deux ondes par réflexion et transmission sur une lame semi-réfléchissante.

### A. L'interféromètre de Michelson
Le Michelson est constitué de deux miroirs $M_1$ et $M_2$ perpendiculaires et d'une sémi-lame séparatrice $S$ (compensatrice incluse pour égaliser les chemins optiques dans le verre).

* **Configuration lame d'air** : Miroirs rigoureusement perpendiculaires ($\alpha = 0$). Les franges d'égale inclinaison (anneaux d'Haidinger) sont observées à l'infini.
* **Configuration coin d'air** : Miroirs formant un angle $\alpha$ faible. Les franges d'égale épaisseur (rectilignes) sont localisées au voisinage des miroirs.

#### Différence de marche pour le coin d'air
Soit $e(x)$ l'épaisseur de la lame d'air à la distance $x$. La différence de marche entre les deux rayons interfere est :
$$\delta(x) = 2 e(x) + \lambda / 2$$
*(Le terme $\lambda/2$ provient du déphasage par réflexion sur une face traitée ou non, selon le modèle exact de la séparatrice).*

### B. Interfrange et Contraste (Visibilité)
L'intensité lumineuse s'écrit sous la forme classique de Fresnel :
$$I = I_0 \left[ 1 + \mathcal{V} \cos\left(\frac{2\pi \delta}{\lambda}\right) \right]$$

* **Interfrange $i$** : distance séparant deux maxima d'intensité consécutifs.
  $$i = \frac{\lambda}{\Delta (\sin i)} \approx \frac{\lambda}{2\alpha} \quad (\text{pour un coin d'air d'angle } \alpha)$$
* **Contraste (ou visibilité) $\mathcal{V}$** :
  $$\mathcal{V} = \frac{I_{\max} - I_{\min}}{I_{\max} + I_{\min}}$$

---

## 3. Les réseaux de diffraction

### A. Définition et description
Un réseau par transmission (ou par réflexion) est un système périodique constitué de $N$ fentes (ou traits) de période spatiale $a$ (le pas du réseau). 

### B. Formule des réseaux
Considérons une onde plane monochromatique de longueur d'onde $\lambda$ arrivant sous l'incidence $i$ et diffractée sous l'angle $θ$. 
La différence de marche $\delta$ entre deux rayons diffusés par deux fentes consécutives distantes de $a$ est :
$$\delta = a (\sin i + \sin \theta)$$

Des interférences constructives (principales) s'observent lorsque cette différence de marche est un multiple entier de la longueur d'onde :
$$a (\sin i + \sin \theta) = p \lambda \quad \text{avec} \quad p \in \mathbb{Z}$$
où $p$ désigne l'**ordre de diffraction**.

### C. Structure de la figure d'interférence
Pour un réseau à $N$ motifs :
* L'intensité s'exprime à l'aide de la fonction *cardinal sine* (sinus cardinal) :
  $$I(\theta) = I_0 \left( \frac{\sin(N \beta)}{\sin \beta} \right)^2 \times \left( \frac{\sin \alpha}{\alpha} \right)^2$$
  avec $\beta = \frac{\pi a}{\lambda}(\sin i + \sin \theta)$ et le second terme lié à la diffraction par une fente unique de largeur $b$.
* **Maxima principaux** : Ils vérifient $a(\sin i + \sin \theta) = p\lambda$. Leur intensité est proportionnelle à $N^2$.
* **Minima secondaires** : Il y a $N-1$ minima entre deux maxima principaux, délimitant des pics de plus en plus fins lorsque $N$ augmente.

### D. Propriétés métrologiques d'un réseau

1. **Dispersion angulaire** : Elle caractérise la capacité du réseau à séparer spatialement les différentes longueurs d'onde. En différenciant la formule du réseau à incidence $i$ fixée :
   $$\frac{d\theta}{d\lambda} = \frac{p}{a \cos \theta}$$

2. **Pouvoir de résolution** : Noté $R = \frac{\lambda}{\Delta \lambda_{\min}}$, il quantifie la capacité à séparer deux raies spectrales proches de longueurs d'onde $\lambda$ et $\lambda + \Delta \lambda$. 
   Selon le critère de Rayleigh, deux raies sont résolues si le maximum de l'une coïncide avec le premier minimum de l'autre, ce qui conduit à :
   $$R = \frac{\lambda}{\Delta \lambda} = p \cdot N$$
   *(où $N$ est le nombre total de traits éclairés).*

---

## 4. Synthèse et méthodes à maîtriser en CPGE

* **Savoir mener un calcul de $\delta$** par la méthode géométrique (tracé des plans d'onde) ou par le formalisme des chemins optiques $[S_1 S_2]$.
* **Analyser l'effet d'une source étendue** (élargissement, brouillage des franges si la source n'est plus ponctuelle, notion de cohérence spatiale).
* **Calculer le pouvoir de résolution** d'un instrument dispersif (prisme vs réseau). Le réseau offre généralement un pouvoir de résolution indépendant de la longueur d'onde à ordre $p$ fixé et proportionnel au nombre de traits éclairés.