---
title: 'Exercice 2 : Lentilles minces et miroirs sphériques'
description: 'Problème d entraînement type concours pour MPSI.'
---

### 🌐 Énoncé du problème / Étude de cas

On s'intéresse à la modélisation optique d'un dispositif d'imagerie hybride compact, souvent rencontré dans les systèmes de visée embarqués ou les endoscopes médicaux miniatures. Ce dispositif associe un miroir sphérique concave et une lentille mince convergente pour former l'image d'un objet réel sur un capteur plan.

L'objectif de ce problème est d'étudier le stigmatisme, le centrage, les conditions de Gauss, ainsi que les limites pratiques d'un tel système optique face à des contraintes d'encombrement et de flux lumineux.

On se place dans le cadre de l'approximation de Gauss. L'axe optique du système est noté $(\Delta)$, orienté dans le sens de propagation de la lumière (de gauche à droite).

---

### ❓ Questions progressives (incluant des questions d'analyse critique)

1. **Rappels et conditions de Gauss**
   Définir brièvement ce qu'est le stigmatisme rigoureux pour un système optique. Pourquoi l'approximation de Gauss est-elle indispensable en optique géométrique instrumentale ? Préciser les deux conditions géométriques qui caractérisent cette approximation.

2. **Étude du miroir sphérique seul**
   On considère un miroir sphérique concave $M$ de sommet $S$ et de centre de courbure $C$, tel que $\overline{SC} = -R$ avec $R > 0$. 
   Établir la relation de conjugaison avec origine au sommet pour un point $A$ de l'axe optique et son image $A'$ par le miroir. En déduire la position du foyer principal image $F$.

3. **Association miroir-lentille**
   On associe le miroir $M$ précédent à une lentille mince convergente $\mathcal{L}$ de distance focale image $f' > 0$, de centre optique $O$. Les deux systèmes ont le même axe optique. La distance entre le sommet $S$ du miroir et le centre optique $O$ de la lentille est notée $e = \overline{SO}$.
   Un objet lumineux plan $AB$, perpendiculaire à l'axe optique (avec $A$ sur l'axe), est placé à une distance $d$ en amont du miroir ($A$ est du côté où la lumière pénètre).
   Donner l'expression littérale de la position du foyer principal image du miroir en fonction de $R$.

4. **Analyse critique des ordres de grandeur et modélisation**
   Dans le cadre d'une application biomédicale (micro-endoscopie), on choisit $R = 10,0\text{ mm}$ et $f' = 15,0\text{ mm}$. La distance entre le miroir et la lentille est fixée à $e = 25,0\text{ mm}$. 
   * a) Un objet réel $AB$ de hauteur $h = 1,0\text{ mm}$ est placé à une distance $d = 30,0\text{ mm}$ en avant du miroir. Déterminer la position et la taille de l'image intermédiaire formée par le miroir.
   * b) **Esprit critique :** L'ouverture circulaire du miroir a un diamètre $D = 8,0\text{ mm}$. Calculer l'angle maximal d'incidence des rayons par rapport à l'axe optique pour les bords du miroir. L'approximation de Gauss (où $\sin\theta \approx \theta$ et $\tan\theta \theta$) commet une erreur relative supérieure à $5\%$ au-delà de $\theta \approx 0,3\text{ rad}$. Le modèle de Gauss est-il valide ici ? Conclure sur les aberrations géométriques prévisibles.

---

### 💡 Pistes & Indications

- **Question 1 :** Penser aux rayons paraxiaux et au fait que les angles par rapport à l'axe optique et aux normales doivent être petits.
- **Question 2 :** Utiliser les lois de Descartes-Snell pour la réflexion au point d'incidence, puis appliquer des relations trigonométriques dans les triangles formés par le centre du miroir $C$.
- **Question 3 :** Attention au sens des axes orientés. Posez clairement le repère d'origine $S$ pour le miroir et d'origine $O$ pour la lentille.
- **Question 4 :** Procédez par étapes. Traitez d'abord la réflexion par le miroir pour trouver l'image intermédiaire $A_1B_1$, qui servira ensuite d'objet pour la lentille $\mathcal{L}$. Pour l'analyse critique, calculez $\theta \approx \frac{D/2}{R}$ et comparez avec le seuil critique donné.

---

### 📋 Corrigé détaillé et analyse des résultats

#### 1. Rappels et conditions de Gauss
* **Stigmatisme rigoureux :** Un système optique est rigoureusement stigmatique pour un point source $A$ si tous les rayons issus de $A$, après traversée ou réflexion par le système, concourent en un même point unique $A'$ (image).
* **Nécessité de l'approximation de Gauss :** À l'exception du miroir plan et du miroir parabolique (pour un objet à l'infini), aucun système dioptrique ou catadioptrique simple n'est rigoureusement stigmatique pour des points quelconques. L'approximation de Gauss permet d'obtenir un stigmatisme approché exploitable pour former des images nettes.
* **Conditions de Gauss :**
  1. Les rayons incidents font un angle faible avec l'axe optique du système (rayons paraxiaux).
  2. Les objets et les images sont situés à proximité immédiate de l'axe optique.

---

#### 2. Étude du miroir sphérique seul
Soit $I$ le point d'incidence d'un rayon issu de $A$ sur le miroir. La normale au miroir en $I$ est la droite $(CI)$. 
La loi de la réflexion s'écrit $\hat{i} = \hat{r}$. Par géométrie dans le triangle $AA'C$, on établit la relation de conjugaison avec origine au sommet :
$$\frac{1}{\overline{SA'}} + \frac{1}{\overline{SA}} = \frac{2}{\overline{SC}} = -\frac{2}{R}$$

Par définition, le foyer principal image $F$ est tel que $\overline{SA} \to +\infty$ et $\overline{SA'} = f'$. On en déduit :
$$\frac{1}{f'} = -\frac{2}{R} \implies f' = -\frac{R}{2}$$
Pour un miroir concave ($R > 0$), le foyer image $F$ est réel et situé à mi-chemin entre le sommet $S$ et le centre $C$ : $\overline{SF} = -\frac{R}{2}$.

---

#### 3. Expression du foyer image du miroir
Déjà établie à la question précédente :
$$\overline{SF} = -\frac{R}{2}$$
*(Note : Dans le cas du miroir, le foyer objet $F$ et le foyer image $F'$ sont confondu au même point spatial).*

---

#### 4. Application numérique et analyse critique
* **a) Position et taille de l'image intermédiaire $A_1B_1$ par le miroir :**
  L'objet $AB$ est placé à $d = 30,0\text{ mm}$ en avant du miroir, donc $\overline{SA} = -d = -30,0\text{ mm}$.
  Le rayon de courbure est $R = 10,0\text{ mm}$.
  Appliquons la relation de conjugaison du miroir :
  $$\frac{1}{\overline{SA_1}} = -\frac{2}{R} - \frac{1}{\overline{SA}} = -\frac{2}{10,0} - \frac{1}{-30,0} = -0,200 + 0,0333 = -0,1667\text{ mm}^{-1}$$
  $$\overline{SA_1} = -\frac{1}{0,1667} = -6,00\text{ mm}$$
  L'image intermédiaire $A_1$ est réelle (située devant le miroir).
  
  Le grandissement transversal $\gamma_1$ du miroir s'exprime par :
  $$\gamma_1 = \frac{\overline{A_1B_1}}{\overline{AB}} = -\frac{\overline{SA_1}}{\overline{SA}} = -\frac{-6,00}{-30,0} = -0,200$$
  La taille de l'image intermédiaire est donc :
  $$\overline{A_1B_1} = \gamma_1 \times \overline{AB} = -0,200 \times 1,0\text{ mm} = -0,20\text{ mm}$$
  L'image est inversée et a une hauteur de $0,20\text{ mm}$.

* **b) Analyse critique de la modélisation :**
  Calculons l'angle maximal d'incidence $\theta_{\max}$ des rayons sur le miroir. Le rayon du miroir est $r_m = \frac{D}{2} = 4,0\text{ mm}$.
  La distance du bord du miroir à l'axe, comparée à son rayon de courbure $R = 10,0\text{ mm}$, donne un angle d'ouverture :
  $$\theta_{\max} \approx \tan(\theta_{\max}) = \frac{r_m}{R} = \frac{4,0}{10,0} = 0,40\text{ rad}$$
  L'énoncé indique que l'approximation de Gauss génère une erreur supérieure à $5\%$ dès que $\theta > 0,3\text{ rad}$. 
  Ici, $\theta_{\max} = 0,40\text{ rad} > 0,3\text{ rad}$.
  
  **Conclusion critique :** Le modèle de Gauss est **mis en défaut** pour ce miroir de grande ouverture relative ($D/R = 8/10 = 0,8$). En pratique, le système présentera des **aberrations géométriques** notables, en particulier l'aberration de sphéricité : les rayons marginaux (qui frappent les bords du miroir) ne convergent pas au même point focal $A_1$ que les rayons paraxiaux, ce qui entraînera une nette diminution de la résolution de l'image sur le capteur final. Une correction par une surface asphérique ou l'utilisation d'un diaphragme de stop s'avérerait nécessaire dans un prototype industriel réel.