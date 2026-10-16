---
title: 'Exercice 1 : Résolution de systèmes linéaires'
description: 'Problème d entraînement type concours.'
---

## Contexte biologique : Modélisation des flux d'azote dans un agro-écosystème

Dans le cadre de la gestion durable des sols agricoles et de la limitation des pollutions nitriques des nappes phréatiques, on s'intéresse à la dynamique de transfert de l'azote entre trois compartiments majeurs de la couche arable d'une parcelle cultivée :
1. **Compartiment 1 ($x_1$)** : Azote minéral du sol ($\text{NH}_4^+$ et $\text{NO}_3^-$), exprimé en $\text{kg}\cdot\text{ha}^{-1}$.
2. **Compartiment 2 ($x_2$)** : Azote contenu dans la biomasse microbienne du sol, exprimé en $\text{kg}\cdot\text{ha}^{-1}$.
3. **Compartiment 3 ($x_3$)** : Azote mobilisé par le peuplement végétal cultivé, exprimé en $\text{kg}\cdot\text{ha}^{-1}$.

À l'échelle de la saison culturale, on modélise les échanges entre ces compartiments à l'aide d'un système à compartiments interconnectés. Les transferts d'azote (minéralisation, immobilisation, absorption racinaire, restitution par exsudats) dépendent d'un paramètre biologique sans dimension noté $\alpha$ ($\alpha > 0$), qui caractérise l'intensité de l'activité rhizosphérique et mycorhizienne stimulant les échanges sol-plante-microorganismes.

On applique sur la parcelle des forçages externes constants (apports nets après prise en compte des pertes par volatilisation ou lessivage immédiat) notés $I_1$, $I_2$ et $I_3$ (en $\text{kg}\cdot\text{ha}^{-1}\cdot\text{an}^{-1}$) :
* $I_1$ : apport d'engrais minéraux de synthèse ;
* $I_2$ : amendement organique (compost, fumier stimulant la microflore) ;
* $I_3$ : fixation symbiotique atmosphérique ou retombées atmosphériques directement captées par le couvert végétal.

À l'état stationnaire (où les variations nettes de stock sont nulles), le bilan de masse sur chaque compartiment se traduit par le système linéaire $(\mathcal{S}_\alpha)$ suivant :

$$
(\mathcal{S}_\alpha) : \begin{cases}
(1 + \alpha)\, x_1 - x_2 - \alpha\, x_3 &= I_1 \\
-x_1 + 3\, x_2 - x_3 &= I_2 \\
-\alpha\, x_1 - x_2 + (2 + \alpha)\, x_3 &= I_3
\end{cases}
$$

---

## Énoncé et Questions

### Partie I : Résolution algébrique du système

1. **Mise sous forme matricielle**  
   Écrire le système sous la forme matricielle $A_\alpha X = B$, où $X = \begin{pmatrix} x_1 \\ x_2 \\ x_3 \end{pmatrix}$ et $B = \begin{pmatrix} I_1 \\ I_2 \\ I_3 \end{pmatrix}$.

2. **Échelonnement et inversibilité**  
   À l'aide de l'algorithme du pivot de Gauss appliqué à la matrice augmentée $[A_\alpha \mid B]$, montrer que le système $(\mathcal{S}_\alpha)$ admet une solution unique pour tout $\alpha \in \mathbb{R}_+^*$. Préciser le rang de $A_\alpha$.

3. **Expression de la solution**  
   Résoudre complètement le système et donner l'expression analytique de $x_1$, $x_2$ et $x_3$ en fonction de $I_1, I_2, I_3$ et $\alpha$.

4. **Détermination de la matrice inverse**  
   En déduire la matrice inverse $A_\alpha^{-1}$.

### Partie II : Interprétation agronomique et analyse des limites

5. **Validité biologique des solutions**  
   On suppose que les forçages $I_1$, $I_2$ et $I_3$ sont strictement positifs. Justifier que les stocks d'azote à l'équilibre $x_1$, $x_2$ et $x_3$ sont strictement positifs.

6. **Étude asymptotique**  
   Calculer les limites des stocks d'azote $x_1, x_2, x_3$ lorsque le paramètre de couplage rhizosphérique $\alpha$ devient très grand ($\alpha \to +\infty$). Interpréter biologiquement le comportement du système dans ce régime d'hyper-activité biologique du sol.

7. **Analyse critique des limites du modèle**  
   Discuter de manière argumentée au moins trois limites écologiques et physiques de cette modélisation linéaire en régime permanent.

---

## Pistes de résolution

* **Pour la question 2 :** Pour faciliter les opérations élémentaires et éviter de diviser immédiatement par $(1+\alpha)$, il est astucieux d'échanger la première et la deuxième ligne ($L_1 \leftrightarrow L_2$) pour placer un coefficient $-1$ ou $1$ en pivot. Surveillez l'apparition du facteur $3 + 5\alpha$.
* **Pour la question 4 :** Rappelez-vous que la $j$-ème colonne de la matrice inverse $A_\alpha^{-1}$ s'obtient en évaluant la solution $X$ avec un vecteur $B$ valant le $j$-ème vecteur de la base canonique ($E_1, E_2, E_3$).
* **Pour la question 7 :** Pensez aux hypothèses implicites du modèle : cinétiques linéaires (ordre 1) sans seuil ni saturation (contrairement aux cinétiques enzymatiques de type Michaelis-Menten), absence de dépendance spatiale (hétérogénéité des horizons du sol), et hypothèse de stationnarité dans un milieu soumis à de fortes variations climatiques et phénologiques saisonnières.

---

## Corrigé détaillé

### Partie I : Résolution algébrique du système

#### 1. Forme matricielle

Le système s'écrit sous la forme $A_\alpha X = B$ avec :
$$
A_\alpha = \begin{pmatrix}
1 + \alpha & -1 & -\alpha \\
-1 & 3 & -1 \\
-\alpha & -1 & 2 + \alpha
\end{pmatrix}, \quad 
X = \begin{pmatrix} x_1 \\ x_2 \\ x_3 \end{pmatrix}, \quad 
B = \begin{pmatrix} I_1 \\ I_2 \\ I_3 \end{pmatrix}
$$

#### 2. Échelonnement du système par le pivot de Gauss

Considérons la matrice augmentée du système :
$$
[A_\alpha \mid B] = \begin{pmatrix}
1 + \alpha & -1 & -\alpha & \bigm| & I_1 \\
-1 & 3 & -1 & \bigm| & I_2 \\
-\alpha & -1 & 2 + \alpha & \bigm| & I_3
\end{pmatrix}
$$

Pour simplifier les calculs, effectuons la permutation $L_1 \leftrightarrow L_2$ afin de disposer d'un pivot simple égal à $-1$ :
$$
\begin{pmatrix}
-1 & 3 & -1 & \bigm| & I_2 \\
1 + \alpha & -1 & -\alpha & \bigm| & I_1 \\
-\alpha & -1 & 2 + \alpha & \bigm| & I_3
\end{pmatrix}
$$

Éliminons les termes de la première colonne sous le pivot :
* $L_2 \leftarrow L_2 + (1+\alpha)L_1$ :
  * Pivot col 1 : $(1+\alpha) + (1+\alpha)(-1) = 0$
  * Col 2 : $-1 + 3(1+\alpha) = 2 + 3\alpha$
  * Col 3 : $-\alpha - (1+\alpha) = -1 - 2\alpha$
  * Second membre : $I_1 + (1+\alpha)I_2$
* $L_3 \leftarrow L_3 - \alpha L_1$ :
  * Pivot col 1 : $-\alpha - \alpha(-1) = 0$
  * Col 2 : $-1 - 3\alpha$
  * Col 3 : $(2+\alpha) + \alpha = 2 + 2\alpha$
  * Second membre : $I_3 - \alpha I_2$

La matrice devient :
$$
\begin{pmatrix}
-1 & 3 & -1 & \bigm| & I_2 \\
0 & 2 + 3\alpha & -1 - 2\alpha & \bigm| & I_1 + (1+\alpha)I_2 \\
0 & -1 - 3\alpha & 2 + 2\alpha & \bigm| & I_3 - \alpha I_2
\end{pmatrix}
$$

Remarquons que la somme des lignes $L_2 + L_3$ simplifie considérablement les coefficients :
$$
(2 + 3\alpha) + (-1 - 3\alpha) = 1 \quad \text{et} \quad (-1 - 2\alpha) + (2 + 2\alpha) = 1
$$
Effectuons donc l'opération élémentaire $L_3 \leftarrow L_3 + L_2$ :
* Col 2 : $1$
* Col 3 : $1$
* Second membre : $(I_3 - \alpha I_2) + (I_1 + (1+\alpha)I_2) = I_1 + I_2 + I_3$

La matrice s'écrit :
$$
\begin{pmatrix}
-1 & 3 & -1 & \bigm| & I_2 \\
0 & 2 + 3\alpha & -1 - 2\alpha & \bigm| & I_1 + (1+\alpha)I_2 \\
0 & 1 & 1 & \bigm| & I_1 + I_2 + I_3
\end{pmatrix}
$$

Échangeons $L_2$ et $L_3$ ($L_2 \leftrightarrow L_3$) :
$$
\begin{pmatrix}
-1 & 3 & -1 & \bigm| & I_2 \\
0 & 1 & 1 & \bigm| & I_1 + I_2 + I_3 \\
0 & 2 + 3\alpha & -1 - 2\alpha & \bigm| & I_1 + (1+\alpha)I_2
\end{pmatrix}
$$

Éliminons le coefficient en position $(3,2)$ via $L_3 \leftarrow L_3 - (2+3\alpha)L_2$ :
* Col 2 : $(2+3\alpha) - (2+3\alpha)(1) = 0$
* Col 3 : $(-1 - 2\alpha) - (2+3\alpha)(1) = -3 - 5\alpha$
* Second membre :
  $$
  \begin{aligned}
  & I_1 + (1+\alpha)I_2 - (2+3\alpha)(I_1 + I_2 + I_3) \\
  &= I_1(1 - 2 - 3\alpha) + I_2(1+\alpha - 2 - 3\alpha) - (2+3\alpha)I_3 \\
  &= -(1+3\alpha)I_1 - (1+2\alpha)I_2 - (2+3\alpha)I_3
  \end{aligned}
  $$

Le système échelonné triangulaire supérieur est :
$$
\begin{pmatrix}
-1 & 3 & -1 & \bigm| & I_2 \\
0 & 1 & 1 & \bigm| & I_1 + I_2 + I_3 \\
0 & 0 & -(3+5\alpha) & \bigm| & -(1+3\alpha)I_1 - (1+2\alpha)I_2 - (2+3\alpha)I_3
\end{pmatrix}
$$

Les pivots diagonaux sont :
* $p_1 = -1 \neq 0$
* $p_2 = 1 \neq 0$
* $p_3 = -(3+5\alpha)$

Puisque $\alpha > 0$, on a $3 + 5\alpha > 3 > 0$, donc $p_3 \neq 0$.  
La matrice présente 3 pivots non nuls : son rang est donc $\text{rg}(A_\alpha) = 3$.  
La matrice $A_\alpha \in \mathcal{M}_3(\mathbb{R})$ est de rang maximal : **elle est inversible et le système admet une solution unique pour tout $\alpha > 0$.**

---

#### 3. Expression de la solution

Procédons par remontée :

* **Calcul de $x_3$ :**
  $$
  -(3+5\alpha) x_3 = -\big((1+3\alpha)I_1 + (1+2\alpha)I_2 + (2+3\alpha)I_3\big)
  $$
  D'où :
  $$
  x_3 = \frac{(1+3\alpha)I_1 + (1+2\alpha)I_2 + (2+3\alpha)I_3}{3+5\alpha}
  $$

* **Calcul de $x_2$ :**
  D'après la ligne 2 : $x_2 + x_3 = I_1 + I_2 + I_3$, soit $x_2 = (I_1 + I_2 + I_3) - x_3$.
  $$
  \begin{aligned}
  x_2 &= \frac{(3+5\alpha)(I_1 + I_2 + I_3) - \big((1+3\alpha)I_1 + (1+2\alpha)I_2 + (2+3\alpha)I_3\big)}{3+5\alpha} \\
  &= \frac{(3+5\alpha - 1 - 3\alpha)I_1 + (3+5\alpha - 1 - 2\alpha)I_2 + (3+5\alpha - 2 - 3\alpha)I_3}{3+5\alpha} \\
  &= \frac{(2+2\alpha)I_1 + (2+3\alpha)I_2 + (1+2\alpha)I_3}{3+5\alpha}
  \end{aligned}
  $$

* **Calcul de $x_1$ :**
  D'après la ligne 1 : $-x_1 + 3x_2 - x_3 = I_2 \implies x_1 = 3x_2 - x_3 - I_2$.  
  Exprimons le numérateur noté $N_1$ tel que $x_1 = \frac{N_1}{3+5\alpha}$ :
  $$
  \begin{aligned}
  N_1 = & 3\big[(2+2\alpha)I_1 + (2+3\alpha)I_2 + (1+2\alpha)I_3\big] \\
  & - \big[(1+3\alpha)I_1 + (1+2\alpha)I_2 + (2+3\alpha)I_3\big] - (3+5\alpha)I_2
  \end{aligned}
  $$
  Regroupons par terme :
  * Pour $I_1$ : $3(2+2\alpha) - (1+3\alpha) = 6 + 6\alpha - 1 - 3\alpha = 5 + 3\alpha$.
  * Pour $I_2$ : $3(2+3\alpha) - (1+2\alpha) - (3+5\alpha) = (6+9\alpha) - (4+7\alpha) = 2 + 2\alpha$.
  * Pour $I_3$ : $3(1+2\alpha) - (2+3\alpha) = 3 + 6\alpha - 2 - 3\alpha = 1 + 3\alpha$.

  On obtient ainsi :
  $$
  x_1 = \frac{(5+3\alpha)I_1 + (2+2\alpha)I_2 + (1+3\alpha)I_3}{3+5\alpha}
  $$

---

#### 4. Détermination de la matrice inverse $A_\alpha^{-1}$

Comme $X = A_\alpha^{-1} B$, les colonnes de $A_\alpha^{-1}$ correspondent respectivement aux vecteurs de coefficients associés à $I_1, I_2$ et $I_3$ :

$$
A_\alpha^{-1} = \frac{1}{3+5\alpha} \begin{pmatrix}
5+3\alpha & 2+2\alpha & 1+3\alpha \\
2+2\alpha & 2+3\alpha & 1+2\alpha \\
1+3\alpha & 1+2\alpha & 2+3\alpha
\end{pmatrix}
$$

*Remarque de vérification :* Tous les coefficients diagonaux et extradiagonaux sont symétriques par rapport à la diagonale principale car $A_\alpha$ est elle-même une matrice symétrique.

---

### Partie II : Interprétation agronomique et analyse des limites

#### 5. Validité biologique des grandeurs à l'équilibre

Les quantités $x_1, x_2, x_3$ représentent des densités surfaciques de biomasse ou d'éléments minéraux dans le sol ; elles doivent impérativement être positives pour être biologiquement admissibles.

* Comme $\alpha > 0$, le dénominateur $3 + 5\alpha$ est strictement positif.
* Pour chaque composante, tous les coefficients pondérant $I_1, I_2, I_3$ sont strictement positifs :
  * $5+3\alpha > 0, \quad 2+2\alpha > 0, \quad 1+3\alpha > 0$
  * $2+3\alpha > 0, \quad 1+2\alpha > 0$
* Les forçages $I_1, I_2, I_3$ étant supposés strictement positifs, chaque $x_i$ ($i \in \{1, 2, 3\}$) est une combinaison linéaire à coefficients strictement positifs de réels strictement positifs.

On a donc :
$$
\forall i \in \{1, 2, 3\}, \quad x_i > 0
$$
Le modèle est consistant : aucun compartiment ne présente un stock négatif ou nul à l'équilibre.

---

#### 6. Étude asymptotique ($\alpha \to +\infty$)

Lorsque $\alpha \to +\infty$, le couplage rhizosphérique domine l'ensemble des autres processus. Calculons les limites des coefficients en factorisant par $\alpha$ au numérateur et au dénominateur :

$$
x_1 = \frac{\alpha\left(\frac{5}{\alpha} + 3\right)I_1 + \alpha\left(\frac{2}{\alpha} + 2\right)I_2 + \alpha\left(\frac{1}{\alpha} + 3\right)I_3}{\alpha\left(\frac{3}{\alpha} + 5\right)} \xrightarrow[\alpha \to +\infty]{} \frac{3I_1 + 2I_2 + 3I_3}{5}
$$

$$
x_2 = \frac{\alpha\left(\frac{2}{\alpha} + 2\right)I_1 + \alpha\left(\frac{2}{\alpha} + 3\right)I_2 + \alpha\left(\frac{1}{\alpha} + 2\right)I_3}{\alpha\left(\frac{3}{\alpha} + 5\right)} \xrightarrow[\alpha \to +\infty]{} \frac{2I_1 + 3I_2 + 2I_3}{5}
$$

$$
x_3 = \frac{\alpha\left(\frac{1}{\alpha} + 3\right)I_1 + \alpha\left(\frac{1}{\alpha} + 2\right)I_2 + \alpha\left(\frac{2}{\alpha} + 3\right)I_3}{\alpha\left(\frac{3}{\alpha} + 5\right)} \xrightarrow[\alpha \to +\infty]{} \frac{3I_1 + 2I_2 + 3I_3}{5}
$$

**Interprétation biologique :**
1. **Équipartition sol-plante :** On constate que $\lim_{\alpha \to +\infty} x_1 = \lim_{\alpha \to +\infty} x_3$. Un couplage rhizosphérique infini annule le gradient effectif entre l'azote minéral du sol et l'azote incorporé par le végétal : l'absorption racinaire devient si efficace qu'elle s'équilibre instantanément avec la mise à disposition minérale.
2. **Saturation des transferts :** Les stocks ne divergent pas vers l'infini : ils atteignent un plateau asymptotique fini entièrement gouverné par le vecteur des apports externes $(I_1, I_2, I_3)$. Même avec une symbiose ou une activité biologique maximale, le stock d'azote végétal $x_3$ reste borné par les flux entrants totaux dans le système.

---

#### 7. Analyse critique des limites du modèle

Bien que ce système linéaire permette de quantifier des ordres de grandeur stationnaires, il présente des simplifications majeures qu'un agronome ou écologue doit identifier :

1. **Hypothèse de cinétique linéaire d'ordre 1 (absence de saturation) :**  
   Les flux entre compartiments sont supposés strictement proportionnels aux stocks ($k \cdot x_i$). Or, l'absorption de l'azote par les transporteurs membranaires racinaires (tels que NRT1/NRT2 pour les nitrates) suit une cinétique enzymatique saturable de type **Michaelis-Menten** :
   $$
   v = \frac{V_{\max} [x_1]}{K_m + [x_1]}
   $$
   En cas de fertilisation massive ($I_1 \gg 1$), le système linéaire prédit une augmentation indéfinie de la vitesse d'assimilation, alors que les capacités physiologiques de la plante saturent, conduisant en réalité à un engorgement du sol et à un lessivage accru.

2. **Hypothèse de régime permanent (stationnarité) :**  
   L'état stationnaire néglige la **phénologie végétale** et le **climat**. Les besoins en azote d'une culture sont quasi nuls au stade levée, maximaux en montaison/floraison, puis diminuent lors de la maturation. De plus, la température et l'humidité du sol régulent fortement la minéralisation microbienne via la loi de van 't Hoff / $Q_{10}$. Résoudre un système statique sans dynamique temporelle empêche d'anticiper les pics de lessivage hivernaux.

3. **Homogénéité spatiale (modèle zéro-dimensionnel ou "boîtes bien mélangées") :**  
   Le modèle agrège l'ensemble du profil pédologique en une seule valeur. Or, le sol est structuré en horizons verticaux (horizon humifère de surface, horizon éluvial, horizon de profondeur). Les nitrates $\text{NO}_3^-$, anions mobiles non retenus par le complexe argilo-humique, migrent verticalement par advection et dispersion sous l'effet du drainage, une dimension spatiale non prise en compte par le modèle.