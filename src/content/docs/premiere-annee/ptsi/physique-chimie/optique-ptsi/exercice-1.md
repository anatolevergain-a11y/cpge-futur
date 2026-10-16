---
title: 'Exercice 1 : Réfraction et miroirs'
description: 'Problème d entraînement type concours pour PTSI.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Le présent problème s'intéresse à l'étude d'un dispositif optique combinant dioptres plans et miroirs sphériques, modélisant de manière simplifiée un système d'imagerie catadioptrique (utilisé notamment en astronomie et dans certains capteurs de vision panoramique). 

On se place dans le cadre de l'approximation de Gauss (stigmatisme approché et aplanétisme) et on étudie le comportement d'un système optique constitué d'un dioptre plan séparant deux milieux transparents d'indices différents, associé à un miroir sphérique convergent.

### ❓ Questions progressives (incluant une analyse critique du modèle)

1. **Réfraction sur un dioptre plan**
   1. Énoncer les lois de Descartes pour la réfraction en un point $I$ d'un dioptre plan séparant deux milieux d'indices optiques $n_1$ et $n_2$.
   2. Établir la relation de conjugaison avec origine au sommet $S$ pour un dioptre plan dans l'approximation de Gauss, reliant l'abscisse algébrique du point objet $\overline{SA}$ et celle du point image $\overline{SA'}$.
   3. Définir le grandissement transversal $γ_t$ du dioptre plan et exprimer sa valeur en fonction des indices $n_1$ et $n_2$. Conclure quant au stigmatisme rigoureux pour tout point de l'espace objet.

2. **Association avec un miroir sphérique**
   1. On associe au dioptre plan précédent un miroir sphérique convergent de sommet $S'$ et de centre $C$, de rayon de courbure $R = \overline{S'C} < 0$. Rappeler la définition d'un miroir sphérique et sa relation de conjugaison avec origine au sommet dans l'approximation de Gauss.
   2. Un objet lumineux plan $AB$ de petite taille est placé perpendiculairement à l'axe optique dans le premier milieu d'indice $n_1$. Déterminer l'expression de la position de l'image finale $A'B'$ après traversée du dioptre puis réflexion sur le miroir.

3. **Analyse critique du modèle et condition de retournement**
   1. Dans quelle condition expérimentale l'approximation de Gauss cesse-t-elle d'être valide ? Préciser les conséquences sur la qualité de l'image (aberrations géométriques).
   2. Si l'on inverse le sens de propagation de la lumière (principe du retour inverse de la lumière), le système est-il isochrone et réversible ? Justifier brièvement.

---

### 💡 Pistes & Indications méthodologiques

* **Question 1.2 :** Utiliser la trigonométrie dans les triangles formés par les rayons incidents et réfractés, puis effectuer un développement limité à l'ordre 1 (approximation de Gauss : angles petits $\sin(\theta) \approx \tan(\theta) \approx \theta$).
* **Question 1.3 :** Le grandissement transversal se déduit par un rapport de longueurs géométriques perpendiculaires à l'axe optique. Si ce grandissement ne dépend pas de la position de l'objet, le stigmatisme est rigoureux.
* **Question 2.2 :** Procéder par étapes : l'image intermédiaire produite par le premier système (dioptre) sert d'objet virtuel ou réel pour le second système (miroir).

---

### 📋 Corrigé détaillé pas à pas

#### 1. Réfraction sur un dioptre plan

1. **Lois de Descartes :**
   Soit i l'angle d'incidence et $r$ l'angle de réfraction mesurés par rapport à la normale au dioptre au point d'incidence $I$. Les lois de Snell-Descartes s'écrivent :
   $$n_1 \sin(i) = n_2 \sin(r)$$
   Le rayon incident, la normale et le rayon réfracté sont coplanaires.

2. **Relation de conjugaison du dioptre plan :**
   Dans l'approximation de Gauss (rayons paraxiaux), les angles $i$ et $r$ sont petits, ce qui permet l'approximation $\sin(\theta) \approx \tan(\theta) \approx \theta$.
   D'après la géométrie de la réfraction :
   $$i \approx \tan(i) = \frac{h}{\overline{SA}} \quad \text{et} \quad r \approx \tan(r) = \frac{h}{\overline{SA'}}$$
   où $h$ est la hauteur du point d'incidence par rapport à l'axe optique.
   La loi de Descartes devient :
   $$n_1 i = n_2 r \implies n_1 \frac{h}{\overline{SA}} = n_2 \frac{h}{\overline{SA'}}$$
   En simplifiant par $h$, on obtient la relation de conjugaison avec origine au sommet :
   $$\frac{n_2}{\overline{SA'}} = \frac{n_1}{\overline{SA}}$$

3. **Grandissement transversal et stigmatisme :**
   Le grandissement transversal est donné par le rapport :
   $$\gamma_t = \frac{\overline{A'B'}}{\overline{AB}}$$
   Par des considérations géométriques dans les triangles paraxiaux, on montre que :
   $$\gamma_t = \frac{n_1}{n_2} \frac{\overline{SA'}}{\overline{SA}}$$
   En utilisant la relation de conjugaison $\frac{\overline{SA'}}{\overline{SA}} = \frac{n_2}{n_1}$, on obtient :
   $$\gamma_t = 1$$
Conclusion: ** Le grandissement transversal est constant et égal à 1 pour tout couple $(A, A')$. Le dioptre plan est donc **rigoureusement stigmatique** pour tout point de l'espace (et non seulement dans l'approximation de Gauss), ce qui constitue une propriété remarquable du dioptre plan.

---

#### 2. Association avec un miroir sphérique

1. **Relation de conjugaison du miroir sphérique :**
   Un miroir sphérique de sommet $S'$ et de centre $C$ est défini par une surface réfléchissante sphérique. Dans l'approximation de Gauss, la relation de conjugaison avec origine au sommet s'écrit :
   $$\frac{1}{\overline{S'A_2'}} + \frac{1}{\overline{S'A_2}} = \frac{2}{\overline{S'C}} = \frac{2}{R}$$
   où $\overline{S'A_2}$ est l'abscisse de l'objet pour le miroir et $\overline{S'A_2'}$ celle de l'image finale.

2. **Enchaînement des systèmes optiques :**
   Soit $e = \overline{SS'}$ la distance séparant le sommet du dioptre plan de celui du miroir sphérique.
   * L'objet initial $AB$ à la distance $\overline{SA_1}$ donne une image intermédiaire $A_1B_1$ via le dioptre plan, telle que :
     $$\overline{SA_1'} = \frac{n_2}{n_1} \overline{SA_1}$$
   * Cette image intermédiaire $A_1B_1$ joue le rôle d'objet pour le miroir sphérique. Sa position par rapport au sommet $S'$ du miroir est :
     $$\overline{S'A_2} = \overline{S'S} + \overline{SA_1'} = -e + \frac{n_2}{n_1} \overline{SA_1}$$
   * En appliquant la relation de conjugaison du miroir sphérique, on obtient la position de l'image finale $A_2'B_2'$ :
     $$\frac{1}{\overline{S'A_2'}} = \frac{2}{R} - \frac{1}{-e + \frac{n_2}{n_1} \overline{SA_1}}$$
   Le grandissement total du système centré est le produit des grandissements intermédiaires :
   $$\gamma_{\text{total}} = \gamma_{\text{dioptre}} \times \gamma_{\text{miroir}} = 1 \times \left( -\frac{\overline{S'A_2'}}{\overline{S'A_2}} \right) = -\frac{\overline{S'A_2'}}{\overline{S'A_2}}$$

---

#### 3. Analyse critique du modèle et condition de retournement

1. **Limites de l'approximation de Gauss :**
   L'approximation de Gauss suppose que les rayons lumineux font des angles petits avec l'axe optique et sont peu écatés de celui-ci ($h \ll |R|$ et $|i| \ll 1\text{ rad}$). 
   * *Conséquence :* Si l'ouverture du système est grande (rayons marginaux), les approximations $\sin(i) \approx i$ ne sont plus valides. Il apparaît alors des **aberrations géométriques** (notamment l'aberration sphérique : les rayons marginaux ne convergent pas au même point focal que les rayons paraxiaux), ce qui détériore la netteté de l'image (tache de diffusion au lieu d'un point).

2. **Principe du retour inverse de la lumière :**
   Le trajet de la lumière est régi par le principe de Fermat (chemin optique stationnaire), qui est invariant par renversement du sens de parcours (inversion du temps et de la direction de propagation). Par conséquent, **le système est rigoureusement réversible et isochrone** : si un rayon lumineux suit un trajet de $A$ vers $A'$, il peut emprunter exactement le même chemin en sens inverse de $A'$ vers $A$, à condition de respecter les conditions de validité des milieux traversés.