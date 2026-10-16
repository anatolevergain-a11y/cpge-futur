---
title: 'Exercice 2 : Liaisons mécaniques et hyperstatisme'
description: 'Problème d entraînement type concours pour PCSI.'
---

### 🌐 Énoncé du problème / Cadre d'étude

On s'intéresse à un mécanisme de levage et de positionnement industriel utilisé dans une chaîne de conditionnement. Le système mécanique, schématisé dans le plan $(O, \vec{x}, \vec{y})$, est composé de quatre solides indéformables reliés entre eux et au bâti par des liaisons parfaites :

1. **Le bâti (0)** : considéré comme fixe, muni du repère galiléen $\mathcal{R}_0(O, \vec{x}, \vec{y}, \vec{z})$.
2. **Le bras principal (1)** : de longueur $L$, en liaison pivot d'axe $(O, \vec{z})$ avec le bâti (0). On note $\theta = (\vec{x}, \vec{OA})$ l'angle de rotation.
3. **La bielle de commande (2)** : de longueur $l$, reliée au bras (1) par une liaison pivot d'axe $(A, \vec{z})$ et au coulisseau (3) par une liaison pivot d'axe $(B, \vec{z})$.
4. **Le coulisseau (3)** : en liaison glissière de direction $(\vec{x})$ par rapport au bâti (0). Le point $C$ lié au coulisseau appartient à l'axe de la glissière.

Le schéma cinématique minimal du système fait apparaître les torseurs des liaisons suivants :
* Liaison pivot en $O$ entre (0) et (1) : $\left\{ \mathcal{V}_{1/0} \right\}$.
* Liaison pivot en $A$ entre (1) et (2) : $\left\{ \mathcal{V}_{2/1} \right\}$.
* Liaison pivot en $B$ entre (2) et (3) : $\left\{ \mathcal{V}_{3/2} \right\}$.
* Liaison glissière de direction $\vec{x}$ entre (0) et (3) : $\left\{ \mathcal{V}_{3/0} \right\}$.

L'objectif de ce problème est d'analyser la cinématique de ce mécanisme, de déterminer les relations entre les vitesses et d'analyser son degré d'hyperstatisme.

---

### ❓ Questions progressives (incluant une analyse critique du modèle)

1. **Modélisation et graphe des liaisons**
   * Identifier les différents solides et lister les liaisons mécaniques en précisant leurs centres et leurs caractéristiques géométriques (torseurs cinématiques).
   * Tracer le graphe des liaisons associé au mécanisme.

2. **Analyse cinématique et fermeture cinématique**
   * Exprimer le torseur cinématique de chaque liaison dans la base $\mathcal{B}(\vec{x}, \vec{y}, \vec{z})$.
   * Écrire la relation vectorielle de fermeture cinématique traduisant la chaîne fermée du mécanisme $0 \to 1 \to 2 \to 3 \to 0$.
   * En déduire les relations entre les vitesses de sortie et d'entrée.

3. **Détermination du degré d'hyperstatisme**
   * Rappeler la formule générale permettant de calculer le degré d'hyperstatisme $h$ d'un mécanisme en fonction du nombre cyclique $γ$, de la mobilité utile $m_u$, de la mobilité interne $m_i$ et de la somme des mobilités locales ou des degrés de liberté des liaisons.
   * Calculer le nombre cyclique $γ$ du graphe des liaisons.
   * Déterminer le degré d'hyperstatisme $h$ du mécanisme étudié. Conclure quant à sa fabricabilité et sa sensibilité aux défauts géométriques.

4. **Analyse critique du modèle**
   * Le modèle des liaisons parfaites est-il rigoureusement exact pour ce type de mécanisme industriel ? Justifier l'impact d'un éventuel jeu ou d'une légère non-coaxialité des axes de pivot sur le comportement réel du système $h=0$ ou $h > 0$.

---

### 💡 Pistes & Indications méthodologiques

* **Question 1 :** Pour le graphe des liaisons, les sommets sont les solides $\{0, 1, 2, 3\}$ et les arêtes représentent les liaisons géométriques. Veillez à bien projeter les torseurs dans un repère commun.
* **Question 2 :** Utilisez la composition des vitesses angulaires et des champs de vecteurs vitesse pour la chaîne fermée : $\vec{V}(B \in 2/0) = \vec{V}(B \in 2/3) + \vec{V}(B \in 3/0)$.
* **Question 3 :** La formule de l'hyperstatisme s'écrit généralement $h = E_c - m_u - m_i$, où $E_c$ est le nombre d'équations scalaires de fermeture cinématique. Alternativement, utilisez $h = 6\gamma - \sum_{\text{j}} (6 - \text{Nv}_j)$ où $\text{Nv}_j$ est le nombre de variables cinématiques de la liaison $j$.
* **Question 4 :** Pensez aux surcontraintes générées par les boucles fermées dans l'espace ou dans le plan selon la modélisation plane choisie.

---

### 📋 Corrigé détaillé pas à pas

#### 1. Modélisation et graphe des liaisons

* **Solides :** 
  * $0$ : Bâti
  * $1$ : Bras principal
  * $2$ : Bielle
  * $3$ : Coulisseau
* **Liaisons :**
  * Entre $0$ et $1$ : Liaison pivot d'axe $(O, \vec{z})$. Torseur cinématique (de centre $O$) :
    $$\left\{ \mathcal{V}_{1/0} \right\} = \begin{Bmatrix} \dot{\theta} \vec{z} \\ \vec{0} \end{Bmatrix}_O$$
    Soit un nombre d'inconnues cinématiques de $1$ (rotation $\dot{\theta}$).
  * Entre $1$ et $2$ : Liaison pivot d'axe $(A, \vec{z})$. Torseur cinématique (de centre $A$) :
    $$\left\{ \mathcal{V}_{2/1} \right\} = \begin{Bmatrix} \dot{\alpha} \vec{z} \\ \vec{0} \end{Bmatrix}_A$$
    avec $\dot{\alpha}$ la vitesse de rotation relative.
  * Entre $2$ et $3$ : Liaison pivot d'axe $(B, \vec{z})$. Torseur cinématique (de centre $B$) :
    $$\left\{ \mathcal{V}_{3/2} \right\} = \begin{Bmatrix} \dot{\beta} \vec{z} \\ \vec{0} \end{Bmatrix}_B$$
  * Entre $3$ et $0$ : Liaison glissière de direction $(\vec{x})$. Torseur cinématique (de centre $C$ ou tout point de l'axe) :
    $$\left\{ \mathcal{V}_{3/0} \right\} = \begin{Bmatrix} \vec{0} \\ \dot{x}_C \vec{x} \end{Bmatrix}$$
    avec $\dot{x}_C$ la vitesse de translation du coulisseau.

* **Graphe des liaisons :**
  Le graphe est formé de 4 sommets et de 4 arêtes formant une boucle fermée (un cycle) :
  $$0 \underset{\text{Pivot } O}{\longleftrightarrow} 1 \underset{\text{Pivot } A}{\longleftrightarrow} 2 \underset{\text{Pivot } B}{\longleftrightarrow} 3 \underset{\text{Glissière } \vec{x}}{\longleftrightarrow} 0$$
  Le nombre cyclique est donc $\gamma = \text{Nombre d'arêtes} - \text{Nombre de sommets} + 1 = 4 - 4 + 1 = 1$.

---

#### 2. Analyse cinématique et fermeture cinématique

La chaîne cinématique fermée s'écrit par la composition des vitesses au point $B$ :
$$\vec{V}(B \in 2/0) = \vec{V}(B \in 2/3) + \vec{V}(B \in 3/0)$$

Exprimons la vitesse du point $B$ en considérant la chaîne $0 \to 1 \to 2 \to B$ :
$$\vec{V}(B \in 2/0) = \vec{V}(A \in 1/0) + \vec{ω}_{1/0} \wedge \overrightarrow{AB} + \vec{V}(B \in 2/1) + \vec{ω}_{2/1} \wedge \overrightarrow{AB}$$

Puisque $A$ est sur l'axe de la pivot en $O$ ($\vec{V}(A \in 1/0) = \vec{0}$) et que la liaison en $A$ est une pivot ($\vec{V}(B \in 2/1) = \vec{ω}_{2/1} \wedge \overrightarrow{AB}$ car le mouvement de 2 par rapport à 1 est une rotation autour de $A$), on a :
$$\vec{V}(B \in 2/0) = \dot{\theta}\vec{z} \wedge \overrightarrow{OA} + \dot{\alpha}\vec{z} \wedge \overrightarrow{AB}$$

Par ailleurs, le solide $3$ est en liaison glissière de direction $\vec{x}$ par rapport à $0$, donc :
$$\vec{V}(B \in 3/0) = \dot{x}_3 \vec{x}$$

Et la liaison pivot en $B$ entre $2$ et $3$ implique que $\vec{V}(B \in 2/3) = \vec{0}$.
La relation de fermeture vectorielle devient donc :
$$\dot{\theta}\vec{z} \wedge \overrightarrow{OA} + \dot{\alpha}\vec{z} \wedge \overrightarrow{AB} = \dot{x}_3 \vec{x}$$

En projetant cette relation vectorielle dans la base $\mathcal{B}(\vec{x}, \vec{y}, \vec{z})$, on obtient un système de 2 équations scalaires (le mouvement étant plan) permettant de lier la vitesse d'entrée $\dot{\theta}$ à la vitesse de sortie $\dot{x}_3$.

---

#### 3. Détermination du degré d'hyperstatisme

Le problème est posé dans le plan (ou ramené à une étude plane équivalente). Pour un mécanisme plan, les relations s'analysent avec les mobilités et le nombre d'inconnues.
Le degré d'hyperstatisme $h$ se calcule par la formule générale :
$$h = E_c - \text{Mc}$$
Où :
* $E_c$ est le nombre total d'équations scalaires de fermeture cinématique. Dans le plan, chaque liaison apporte 3 équations cinématiques (ou le torseur cinématique de dimension 3 : 1 rotation selon $\vec{z}$ et 2 translations selon $\vec{x}$ et $\vec{y}$).
  Plus précisément, pour un système plan, le nombre d'équations de liaison cumulées est la somme des mobilités supprimées par les liaisons.
  * Pivot : supprime 2 translations $\implies 2$ contraintes.
  * Glissière : supprime 1 rotation et 1 translation $\implies 2$ contraintes.
  Total des contraintes cinématiques $E_c = 3 \times \text{nombre de liaisons} - \text{mobilités internes} \dots$
  Utilisons plus simplement la relation par les torseurs (formulations des degrés de liberté) :
  $$h = 3\gamma - \sum_{j=1}^{4} (\text{Id}_{j})$$
  Où $\text{Id}_j$ est le nombre d'inconnues cinématiques indépendantes de la liaison $j$ (ou degré de liberté de la liaison dans le plan) :
  * Pivot $O$ : 1 ddl ($\theta$)
  * Pivot $A$ : 1 ddl ($\alpha$)
  * Pivot $B$ : 1 ddl ($\beta$)
  * Glissière $3/0$ : 1 ddl ($x_3$)

  Soit $\sum \text{Id}_j = 1 + 1 + 1 + 1 = 4$ mobilités cinématiques locales/brutes des liaisons.
  Le nombre cyclique est $\gamma = 1$.
  Le nombre d'équations scalaires utiles dans le plan pour un cycle est $3\gamma = 3 \times 1 = 3$.
  Le nombre de mobilités utiles $m_u = 1$ (le système est commandé par un seul paramètre $\theta$).

  Calculons l'hyperstatisme $h$ :
  $$h = 3\gamma - (\text{Nombre d'inconnues cinématiques utiles du mécanisme})$$
  Plus rigoureusement, via la relation générale :
  $$h = \sum \text{Inconnues Statiques} - \text{Équations Statiques Utiles}$$
  Chaque liaison transmet des efforts. Dans le plan :
  * Pivot $O$ : 2 comp. de force $\implies 2$ inconnues statiques.
  * Pivot $A$ : 2 comp. de force $\implies 2$ inconnues statiques.
  * Pivot $B$ : 2 comp. de force $\implies 2$ inconnues statiques.
  * Glissière $3/0$ : 2 comp. (1 force normale, 1 moment selon $\vec{z}$ ou 2 forces selon le modèle d'effort transverse) $\implies 2$ inconnues statiques.
  Total des inconnues statiques $I_s = 2 + 2 + 2 + 2 = 8$.
  Nombre d'équations d'équilibre statique pour les 3 solides mobiles ($1, 2, 3$) dans le plan : $3 \text{ solides} \times 3 \text{ équations par solide} = 9$ équations.
  Attachement : Le calcul direct donne :
  $$h = I_s - E_s = 8 - (3 \times \text{nb de solides mobiles}) = 8 - (3 \times 3) = 8 - 9 = -1 \dots \text{ (Attention aux mobilités)}$$

  Reprenons par la formule cinématique exacte en plane :
  $$h = 3\gamma - m_u - m_i + \dots$$
  En géométrie plane, le nombre d'équations de fermeture est $3\gamma = 3 \times 1 = 3$.
  Le nombre de mobilités cinématiques totales offertes par les liaisons est $\sum d_i = 1 + 1 + 1 + 1 = 4$.
  Le nombre de mobilités utiles est $m_u = 1$.
  $$h = (\sum d_i) - 3\gamma - m_u = 4 - 3(1) - 1 = 4 - 3 - 1 = 0$$
Conclusion: ** Le mécanisme est **isostatique** ($h = 0$). Il ne présente ni redondance d'équations, ni jeu impossible à monter : il est isostatique, ce qui garantit un montage sans contrainte excessive due aux tolérances dimensionnelles.

---

#### 4. Analyse critique du modèle

* **Validité du modèle parfait :** 
  Le calcul conduit à $h = 0$ (isostatique). Dans la réalité industrielle, les liaisons pivot et glissière ne sont jamais rigoureusement parfaites : il existe des jeux fonctionnels, des frottements sec (loi de Coulomb), et des défauts de coaxialité ou de parallélisme des axes de pivotement (par exemple, un défaut d'orthogonalité de l'axe de la glissière par rapport à l'axe $O$).
* **Conséquences sur le comportement réel :**
  Puisque $h = 0$, le système supporte bien les petits défauts géométriques de fabrication sans arc-boutement majeur, contrairement aux systèmes hyperstatiques ($h > 0$) qui nécessitent des usinages extrêmement précis ou des éléments élastiques pour éviter le blocage. Cependant, la présence de jeux dans les liaisons pivot ($A$ et $B$) se traduira par des vibrations et des bruits lors de l'inversion du sens de mouvement (phénomène de battement).