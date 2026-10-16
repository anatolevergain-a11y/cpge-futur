---
title: 'Exercice 1 : Lois de Snell-Descartes et réflexion totale'
description: 'Problème d entraînement type concours pour MPSI.'
---

### 🌐 Énoncé du problème / Étude de cas

Les fibres optiques en verre de silice constituent la colonne vertébrale des réseaux de télécommunications mondiaux à haut débit. Le principe de guidage de la lumière repose sur le confinement des rayons lumineux au cœur de la fibre grâce au phénomène de réflexion totale. 

Dans ce problème, on s'intéresse à une fibre optique dite à saut d'indice, modélisée par un cylindre d'axe $(Oz)$, constitué :
- d'un cœur central cylindrique d'indice de réfraction $n_1$ et de rayon $a$ ;
- d'une gaine optique environnante d'indice de réfraction $n_2$.

Pour assurer le guidage, la condition indispensable est que $n_1 > n_2$. La lumière est injectée dans le cœur depuis l'air (d'indice $n_0 \approx 1$) sous un angle d'incidence $\theta_i$ mesuré par rapport à l'axe de la fibre.

**Objectifs du problème :**
1. Etablir les conditions de guidage d'un rayon méridien (coplanaire avec l'axe de la fibre).
2. Définir et calculer l'ouverture numérique de la fibre, grandeur clé pour les ingénieurs en télécommunications.
3. Analyser les limites de ce modèle géométrique simple face à la réalité physique des transmissions (atténuation, dispersion intermodale).

---

### ❓ Questions progressives (incluant des questions d'analyse critique)

1. **Modélisation et lois de Snell-Descartes**
   Un rayon lumineux pénètre dans la face d'entrée de la fibre (plane, perpendiculaire à l'axe de la fibre) avec un angle d'incidence $\theta_i$ par rapport à la normale (qui est l'axe $(Oz)$). Il pénètre dans le cœur en faisant un angle $\theta_1$ avec cette même normale.
   Exprimer $\sin(\theta_1)$ en fonction de $n_0$, $n_1$ et $\theta_i$.

2. **Condition de réflexion totale**
   Le rayon atteint le dioptre cylindrique séparant le cœur ($\text{indice } n_1$) et la gaine ($\text{indice } n_2$) avec un angle d'incidence $\theta_2$ mesuré par rapport à la normale locale au dioptre.
   Établir la relation géométrique simple entre $\theta_1$ et $\theta_2$ dans le cas d'un rayon méridien.
   En déduire la condition sur l'angle $\theta_1$ pour que le rayon subisse une réflexion totale sur la paroi du cœur.

3. **Ouverture numérique**
   En combinant les questions précédentes, déterminer la condition maximale sur l'angle d'incidence $\theta_{i,\text{max}}$ dans l'air pour que le rayon soit guidé sans fuite dans la gaine. 
   On définit l'**Ouverture Numérique** ($\text{ON}$) de la fibre par la relation $\text{ON} = \sin(\theta_{i,\text{max}})$. Exprimer $\text{ON}$ en fonction de $n_1$ et $n_2$.
   *A.N. : Calculer $\text{ON}$ et $\theta_{i,\text{max}}$ pour $n_1 = 1{,}458$ et $n_2 = 1{,}405$.*

4. **Analyse critique et limites du modèle de l'optique géométrique**
   * a) Le modèle de l'optique géométrique néglige la nature ondulatoire de la lumière. Pour une fibre standard, le diamètre du cœur est de l'ordre de $2a = 50\,\mu\text{m}$ (fibres multimodes) ou de l'ordre de $10\,\mu\text{m}$ (fibres monomodes) pour une longueur d'onde visible ou proche infrarouge ($\lambda_0 \approx 1310\,\text{nm}$). Discutez qualitativement de la validité de l'approximation de l'optique géométrique dans le cas d'une fibre monomode.
   * b) Dans une fibre multimode, les rayons lumineux effectuent des chemins optiques de longueurs différentes. Quel phénomène physique limite alors le débit de transmission des informations sur de grandes distances ?

---

### 💡 Pistes & Indications

- **Q1 & Q2** : Appliquez rigoureusement la deuxième loi de Descartes pour la réfraction. Faites un schéma clair du trajet du rayon pour relier l'angle de réfraction dans le cœur $\theta_1$ et l'angle d'incidence sur le dioptre cœur-gaine $\theta_2$. Pensez à la trigonométrie dans un triangle rectangle.
- **Q3** : La condition de réflexion totale s'exprime via un angle limite $\theta_{lim} = \arcsin(n_2/n_1)$. Injectez cette condition dans la relation d'entrée.
- **Q4** : Pensez aux critères de diffraction en optique physique (comparaison entre la taille caractéristique du système, ici $a$, et la longueur d'onde $\lambda$).

---

### 📋 Corrigé détaillé et analyse des résultats

#### 1. Réfraction à l'entrée de la fibre
À l'entrée, le rayon passe de l'air ($n_0 \approx 1$) au cœur de la fibre ($n_1$). D'après la première loi de Snell-Descartes pour la réfraction :
$$n_0 \sin(\theta_i) = n_1 \sin(\theta_1)$$
Soit, avec $n_0 = 1$ :
$$\sin(\theta_1) = \frac{\sin(\theta_i)}{n_1}$$

#### 2. Condition de réflexion totale
Considérons le triangle formé par le point d'impact sur la paroi, le centre de la section droite et le point d'impact précédent (ou l'axe). Par construction géométrique (angles alternes-internes ou trigonométrie dans le triangle rectangle formé par la normale au dioptre, le rayon et l'axe de la fibre), l'angle d'incidence $\theta_2$ sur la gaine est complémentaire de l'angle $\theta_1$ :
$$\theta_2 = \frac{\pi}{2} - \theta_1$$
Pour qu'il y ait réflexion totale sans transmission de lumière dans la gaine, il faut que l'angle d'incidence $\theta_2$ soit supérieur ou égal à l'angle limite de réflexion totale $\theta_{\text{lim}}$ défini par $\sin(\theta_{\text{lim}}) = \frac{n_2}{n_1}$ (puisque $n_1 > n_2$).

On a :
$$\sin(\theta_2) = \sin\left(\frac{\pi}{2} - \theta_1\right) = \cos(\theta_1)$$
La condition de réflexion totale s'écrit donc :
$$\cos(\theta_1) \ge \frac{n_2}{n_1}$$

#### 3. Ouverture Numérique
Puisque $\cos(\theta_1) = \sqrt{1 - \sin^2(\theta_1)}$, la condition devient :
$$\sqrt{1 - \frac{\sin^2(\theta_{i,\text{max}})}{n_1^2}} \ge \frac{n_2}{n_1}$$
En élevant au carré (les termes étant positifs) :
$$1 - \frac{\sin^2(\theta_{i,\text{max}})}{n_1^2} \ge \frac{n_2^2}{n_1^2}$$
$$\sin^2(\theta_{i,\text{max}}) \le n_1^2 - n_2^2$$
L'angle d'incidence maximal pour lequel le guidage est assuré correspond à l'égalité. L'Ouverture Numérique ($\text{ON}$) est par définition :
$$\text{ON} = \sin(\theta_{i,\text{max}}) = \sqrt{n_1^2 - n_2^2}$$

*Application numérique :*
$$\text{ON} = \sqrt{1{,}458^2 - 1{,}405^2} = \sqrt{2{,}1257 - 1{,}9740} = \sqrt{0{,}1517} \approx 0{,}389$$
L'angle d'incidence maximal vaut :
$$\theta_{i,\text{max}} = \arcsin(0{,}389) \approx 0{,}399\,\text{rad} \approx 22{,}9^\circ$$
Tout rayon incident entrant dans la fibre avec un cône d'半-angle $\theta \le 22{,}9^\circ$ sera guidé.

#### 4. Analyse critique et limites du modèle
* **a) Validité de l'optique géométrique :** 
  L'optique géométrique est rigoureusement valide lorsque les dimensions caractéristiques du système (ici le rayon du cœur $a$) sont très grandes devant la longueur d'onde de la lumière $\lambda_0$ dans le vide ($\lambda_0 \ll a$). 
  Pour une fibre monomode, le diamètre du cœur est $2a \approx 10\,\mu\text{m}$, soit $a \approx 5\,\mu\text{m}$. Avec $\lambda_0 \approx 1{,}3\,\mu\text{m}$, on a $a \approx 4\lambda_0$. Le rapport n'est pas "très grand devant 1". Par conséquent, **l'optique géométrique atteint ses limites** : elle ne permet pas de décrire correctement la structure détaillée du champ électromagnétique guidé. Il est impératif de recourir à l'optique ondulatoire en résolvant les équations de Maxwell avec les conditions aux limites appropriées pour décrire les "modes" propres de propagation de la fibre.
* **b) Limitation du débit dans les fibres multimodes :** 
  Dans une fibre multimode, les différents rayons acceptés empruntent des chemins géométriques de longueurs différentes (certains se propagent quasi axialement, d'autres subissent de multiples réflexions sous de grands angles). Par conséquent, les photons injectés simultanément à l'entrée n'arrivent pas tous au même instant à la sortie, ce qui provoque un **élargissement temporel des impulsions** lumineuses (dispersion intermodale). Si cet élargissement devient supérieur à la durée séparant deux impulsions, les signaux se superposent, limitant drastiquement le débit binaire et la portée de la liaison. C'est pourquoi les réseaux longue distance utilisent exclusivement des fibres monomodes.