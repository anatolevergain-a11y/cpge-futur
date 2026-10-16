---
title: 'Exercice 2 : Centres instantanés de rotation (CIR)'
description: 'Problème d entraînement type concours officiel.'
---

# Problème guidé : Étude cinématique d'un mécanisme de transmission par la méthode des Centres Instantanés de Rotation (CIR)

**Filière :** PTSI  
**Matière :** Sciences Industrielles de l'Ingénieur (SII)  
Chapitre: ** Cinématique du solide rigide  
**Thème :** Centres instantanés de rotation ($\text{CIR}$) et champs de vitesses  

---

## 1. Énoncé du problème

On s'intéresse à un mécanisme plan, relevant de la modélisation des compresseurs alternatifs ou des systèmes bielle-manivelle modifiés utilisés dans l'industrie. Le plan d'étude est noté $(O, \vec{x}, \{y})$. Le problème est supposé plan dans ce repère.

Le mécanisme est composé des solides suivants par rapport au bâti (ou repère de référence $R_0 = (O, \vec{x}, \vec{y}, \vec{z})$) :
*   **Solide 1 (Manivelle) :** en liaison pivot d'axe $(O, \vec{z})$ avec le bâti 0. Il est défini par le segment $OA$ de longueur $R$. Sa position est repérée par l'angle $\theta = (\vec{x}, \overrightarrow{OA})$.
*   **Solide 2 (Bielle) :** représenté par le segment $AB$ de longueur $L$. Le point $A$ appartient au solide 1 et le point $B$ est en liaison glissière rectiligne d'axe $(O, \vec{x})$ avec le bâti 0.
*   **Solide 3 (Coulisseau) :** assimilé au point $B$, en liaison glissière avec le bâti et pivot d'axe joignant $A$ et $B$ (la bielle). Pour simplifier, le mouvement de $B$ est contraint sur l'axe horizontal $(O, \vec{x})$.

L'objectif de l'étude est de déterminer la vitesse du coulisseau $B$ et la vitesse de rotation de la bielle 2 par rapport au bâti 0, en utilisant exclusivement les propriétés des Centres Instantanés de Rotation ($\text{CIR}$).

---

## 2. Questions

1.  **Détermination des CIR évidents :** Identifier et justifier la position des CIR des mouvements suivants :
    *   Mouvement de 1 par rapport à 0 : noté $I_{10}$.
    *   Mouvement de 3 (ou du coulisseau $B$) par rapport à 0 : noté $I_{30}$.
2.  **Application du théorème des trois centres (théorème de Kennedy-Fabricius) :** En déduire la droite géométrique sur laquelle se trouve le CIR $I_{20}$ (mouvement de la bielle 2 par rapport au bâti 0).
3.  **Localisation complète de $I_{20}$ :** 
    *   En considérant le mouvement de 2 par rapport à 1, déterminer le CIR $I_{21}$.
    *   En appliquant à nouveau le théorème de Kennedy-Fabricius aux solides {0, 1, 2}, déterminer précisément la position géométrique de $I_{20}$. Faire un schéma qualitatif.
4.  **Exploitation métrique :** Exprimer la position du CIR $I_{20}$ dans le repère $(O, \vec{x}, \vec{y})$ en fonction de $R$, $\theta$ et des caractéristiques géométriques du système.
5.  **Calcul de vitesses :** 
    *   Exprimer la vitesse $\vec{V}(A \in 1/0)$ en fonction de $R$ et de la vitesse angulaire $\omega_{10} = \dot{\theta}$.
    *   En écrivant le champ des vitesses du solide 2 en son $\text{CIR}$ $I_{20}$, exprimer la relation entre la vitesse de $A$ (ou de $B$) et la vitesse de rotation de la bielle $\omega_{20}$.
    *   En déduire l'expression de $\omega_{20}$ et la vitesse du coulisseau $\vec{V}(B \in 3/0)$ en fonction de $R, L, \theta$ et $\omega_{10}$.
6.  **Analyse critique :** Discuter des limites du modèle cinématique rigide, en particulier pour des configurations géométriques particulières (singularités) et vis-à-vis des hypothèses de modélisation (jeux, élasticité, frottements).

---

## 3. Pistes et indications

*   *Indication Q1 :* Pensez aux liaisons élémentaires (pivot et glissière). Le CIR d'un solide en rotation fixe est le centre de la pivot. Pour une translation rectiligne, le CIR est rejeté à l'infini dans la direction perpendiculaire au mouvement.
*   *Indication Q2 & Q3 :* Le théorème de Kennedy-Fabricius énonce que pour trois solides en mouvement relatif plan, les trois CIR sont alignés. Appliquez-le aux triplets {0, 1, 2} et {0, 2, 3}.
*   *Indication Q6 :* Que se passe-t-il mathématiquement et physiquement si $\sin(\theta) = 0$ ? Les formules de cinématique pure explosent-elles ? Qu'oublie-t-on en considérant les solides rigides indéformables ?

---

## 4. Corrigé détaillé pas à pas

### Corrigé Q1 : CIR évidents
*   **Pour le mouvement de 1/0 :** Le solide 1 est en liaison pivot d'axe $(O, \vec{z})$ par rapport au bâti 0. Tous les points de l'axe sont fixes, le $\text{CIR}$ $I_{10}$ est donc confondu géométriquement avec le point **$O$**.
*   **Pour le mouvement de 3/0 :** Le coulisseau 3 est en translation rectiligne de direction $\vec{x}$ par rapport au bâti 0. Par définition, le $\text{CIR}$ d'un mouvement de translation pure est rejeté à l'infini dans la direction orthogonale au mouvement. Ainsi, $I_{30}$ est **à l'infini sur la direction $\vec{y}$** (noté $I_{30} \in (\Delta_\infty \perp \vec{x})$).

### Corrigé Q2 & Q3 : Application du théorème de Kennedy-Fabricius
Le théorème de Kennedy-Fabricius stipule que pour trois solides $1, 2, 3$ en mouvement plan, leurs trois $\text{CIR}$ respectifs $I_{12}, I_{23}, I_{31}$ sont alignés sur une même droite.

1.  Considérons le triplet de solides **{0, 1, 2}** : les CIR sont $I_{10}$ ($O$), $I_{21}$ et $I_{20}$. 
    *   Le solide 2 est en liaison pivot avec le solide 1 au point $A$. Par conséquent, le $\text{CIR}$ du mouvement de 2 par rapport à 1 est $I_{21} = A$.
    *   D'après le théorème, $I_{20}$ appartient à la droite $(OA)$ (qui passe par $I_{10}$ et $I_{21}$).
2.  Considérons le triplet de solides **{0, 2, 3}** : les CIR sont $I_{20}$, $I_{32}$ et $I_{30}$.
    *   Le solide 2 est en liaison pivot avec le solide 3 (le coulisseau $B$) au point $B$. Donc $I_{32} = B$.
    *   On sait que $I_{30}$ est rejeté à l'infini dans la direction $\vec{y}$. La droite joignant $I_{32}$ ($B$) et $I_{30}$ est donc la **droite perpendiculaire à l'axe du glissement passant par $B$**, c'est-à-dire la droite $(B, \vec{y})$.
3.  **Conclusion géométrique pour $I_{20}$ :** 
    *   $I_{20} \in (OA)$
    *   $I_{20} \in$ Droite verticale passant par $B$ (orthogonale à $(O, \vec{x})$ en $B$).
    *   $I_{20}$ est donc l'intersection de la droite $(OA)$ et de la perpendiculaire à $(O, \vec{x})$ érigée en $B$.

### Corrigé Q4 : Expression métrique de $I_{20}$
Dans le triangle $OBI_{20}$ (rectangle en $B$ si l'on se place dans la configuration géométrique standard, ou par projection) :
*   La position de $A$ est $(R\cos\theta, R\sin\theta)$.
*   La droite $(OA)$ a pour pente $\tan\theta$. L'abscisse du point $B$ est notée $x_B$.
*   La droite verticale passant par $B$ a pour équation $X = x_B$.
*   Par conséquent, les coordonnées de $I_{20}$ dans $(O, \vec{x}, \vec{y})$ sont :
    $$\overrightarrow{OI_{20}} = x_B \vec{x} + x_B \tan\theta \vec{y}$$

### Corrigé Q5 : Calcul des vitesses par les CIR
1.  **Vitesse du point $A$ :**
    $$\vec{V}(A \in 1/0) = \vec{\omega}_{10} \land \overrightarrow{OA} = (\dot{\theta}\vec{z}) \land (R\cos\theta\vec{x} + R\sin\theta\vec{y}) = R\dot{\theta}(-\sin\theta\vec{x} + \cos\theta\vec{y})$$
2.  **Champ des vitesses du solide 2 et utilisation de $I_{20}$ :**
    Puisque $I_{20}$ est le $\text{CIR}$ du mouvement de 2/0, la vitesse de tout point $M$ du solide 2 s'exprime par :
    $$\vec{V}(M \in 2/0) = \vec{\omega}_{20} \land \overrightarrow{I_{20}M}$$
    En particulier pour le point $A$ et le point $B$ :
    $$\vec{V}(A \in 2/0) = \vec{\omega}_{20} \land \overrightarrow{I_{20}A} \quad \text{et} \quad \vec{V}(B \in 2/0) = \vec{\omega}_{20} \land \overrightarrow{I_{20}B}$$
    Comme $A \in 1$ et $A \in 2$ (liaison pivot), $\vec{V}(A \in 1/0) = \vec{V}(A \in 2/0)$. De même, $B \in 3$ et $B \in 2$, donc $\vec{V}(B \in 3/0) = \vec{V}(B \in 2/0)$.
3.  **Extraction de $\omega_{20}$ et de $\vec{V}(B)$ :**
    Le module de la vitesse s'exprime via le rayon de rotation autour du CIR :
    $$V(A \in 2/0) = |\omega_{20}| \cdot AI_{20}$$
    Cela permet d'obtenir directement la vitesse de rotation de la bielle $\omega_{20}$ dès lors que la géométrie est résolue, puis d'en déduire $V(B \in 3/0) = |\omega_{20}| \cdot BI_{20}$.

---

## 5. Analyse critique des limites du modèle (Exigence Concours)

Bien que la méthode des CIR soit élégante et rapide pour l'analyse cinématique graphique ou analytique plane, elle présente plusieurs limites fondamentales qu'un ingénieur se doit de critiquer :

1.  **Limites cinématiques (Singularités géométriques) :**
    *   Lorsque $\theta = 0$ ou $\theta = \pi$ (points morts haut et bas du système bielle-manivelle), la droite $(OA)$ devient horizontale, confondues avec l'axe $(O, \vec{x})$. La droite verticale passant par $B$ est alors strictement parallèle à $(OA)$ (ou le point $A$ intersecte la ligne des centres). 
    *   *Conséquence :* Les deux droites définissant $I_{20}$ deviennent **parallèles**. Le $\text{CIR}$ $I_{20}$ est rejeté à l'infini. Les relations projectives basées sur la distance au CIR divergent mathématiquement (division par zéro ou indétermination de type $\infty / \infty$). Le modèle cinématique rigide pur est mis en défaut pour prédire les efforts ou les transmissions de mouvement à ces instants précis (nécessité d'introduire la dynamique ou les lois d'intermodulation).
2.  **Limites technologiques (Hypothèse du solide rigide) :**
    *   Le modèle suppose des solides rigides indéformables et des liaisons parfaites (sans **jeu** ni **frottement**). 
    *   En réalité, les efforts de contact au niveau des liaisons pivot ($A$, $B$) et glissière génèrent des déformations élastiques locales (hertziennes) et des jeux fonctionnels. Ces jeux provoquent des *battements* et des erreurs de position non modélisées par les CIR.
    *   À haute vitesse, les effets inertiels couplés aux jeux font perdre toute pertinence au modèle purement géométrique des CIR.