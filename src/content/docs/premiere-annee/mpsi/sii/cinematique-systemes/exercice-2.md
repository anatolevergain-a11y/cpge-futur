---
title: 'Exercice 2 : Liaisons mécaniques et hyperstatisme'
description: 'Problème d entraînement type concours pour MPSI.'
---

### 🌐 Énoncé du problème / Étude de cas

On s'intéresse à un mécanisme de précision utilisé dans le bras manipulateur d'un système automatisé de prélèvement en milieu hostile. Afin de garantir une transmission de mouvement sans jeu ni souplesse excessive, la structure intègre un module d'articulation plan complexe que l'on se propose d'étudier.

Le mécanisme est modélisé par un système de solides interconnectés dans le plan $(O, \vec{x}, \vec{y})$ (étude en cinématique plane, mouvements de translation dans le plan et de rotation autour de l'axe $\vec{z}$). 

Le système est composé de :
*   **0** : Le bâti (fixe, repère $\mathcal{R}_0(O, \vec{x}, \vec{y}, \vec{z})$).
*   **1** : Un levier d'entrée, en liaison pivot d'axe $(O, \vec{z})$ avec le bâti **0**.
*   **2** : Une bielle de transmission intermédiaire.
*   **3** : Un coulisseau de sortie guidé en translation par rapport au bâti **0** selon l'axe $(O, \vec{x})$.

Les liaisons entre les solides sont idéales (sans jeu, sans frottement) :
*   Liaison entre **0** et **1** : Pivot d'axe $(O, \vec{z})$.
*   Liaison entre **1** et **2** : Pivot d'axe $(A, \vec{z})$ où $A$ appartient au solide **1**.
*   Liaison entre **2** et **3** : Pivot d'axe $(B, \vec{z})$ où $B$ appartient au solide **3** et au solide **2**.
*   Liaison entre **0** et **3** : Glissière de direction $\vec{x}$.

Afin d'améliorer la raideur de l'ensemble face aux charges dynamiques, un bureau d'études envisage de rajouter une seconde bielle rigide **4** rigoureusement identique à la bielle **2**, connectant le solide **1** (en un point $C$) au solide **3** (en un point $D$).

*Hypothèses de modélisation et ordres de grandeur :* Les dimensions caractéristiques de la bielle sont de l'ordre de $L = 200\text{ mm}$, pour des vitesses de rotation maximales de l'actionneur de l'ordre de $\Omega_{1/0} = 10\text{ rad}\cdot\text{s}^{-1}$. Les déformations élastiques des pièces sont négligées dans un premier temps (modèle des corps rigides indéformables).

---

### ❓ Questions progressives

1.  **Modélisation initiale (sans la bielle 4)**
    *   1.1. Définir le graphe des liaisons du mécanisme initial (composé des solides 0, 1, 2 et 3).
    *   1.2. Calculer la mobilité utile $m$ et la mobilité interne $m_i$ du mécanisme initial.
    *   1.3. Déterminer le degré d'hyperstatisme $h$ de ce mécanisme initial en explicitant la méthode (formule de Grübler-Kutzbach ou torseur cinématique). Conclure sur sa capacité à être assemblé sans contrainte géométrique excessive.

2.  **Modification structurelle et analyse de l'hyperstatisme**
    *   2.1. On rajoute la bielle **4** (liaisons pivot en $C$ avec le solide **1** et en $D$ avec le solide **3**). Dessiner ou schématiser le nouveau graphe des liaisons.
    *   2.2. Déterminer le nouveau degré d'hyperstatisme $h'$ de ce mécanisme modifié.
    *   2.3. *Analyse critique du modèle :* Le bureau d'études néglige les tolérances de fabrication. Expliquer qualitativement ce qu'il advient du mécanisme réel si les entraxes théoriques diffèrent de quelques micromètres lors de l'assemblage. Quel est l'impact énergétique et thermique d'un tel choix technologique ?

3.  **Étude cinématique du mécanisme initial**
    *   3.1. Exprimer la fermeture cinématique du cycle $0 - 1 - 2 - 3 - 0$ sous forme vectorielle.
    *   3.2. En déduire la relation liant la vitesse de translation du coulisseau $\vec{V}(B \in 3/0) = \dot{x}(t)\vec{x}$ à la vitesse de rotation du levier $\vec{\Omega}_{1/0} = \omega(t)\vec{z}$, sachant que le vecteur $\vec{AB} = L \cos(\theta)\vec{x} + L \sin(\theta)\vec{y}$ (avec $\theta$ angle de la bielle 2 par rapport à l'horizontale, et le levier 1 faisant un angle $\alpha$ avec $\vec{x}$).

---

### 💡 Pistes & Indications

*   *Pour l'hyperstatisme :* Rappeler la relation liant le degré d'hyperstatisme $h$, la mobilité utile $m$, la mobilité interne $m_i$, le nombre d'inconnues cinématiques (ou torseurs d'effort) et le nombre de fermetures de cycles indépendants. Pour un mécanisme plan, le nombre d'équations scalaires par liaison est directement lié à sa mobilité locale.
*   *Pour la cinématique :* Utiliser la composition des vitesses vectorielles sur les différents points géométriques en fermant la chaîne de solides par l'écriture des vecteurs position.

---

### 📋 Corrigé détaillé et analyse des résultats

#### 1. Modélisation initiale (sans la bielle 4)
*   **1.1. Graphe des liaisons :**
    Le graphe des liaisons est une chaîne fermée : $0$ est relié à $1$ (pivot), $1$ à $2$ (pivot), $2$ à $3$ (pivot) et $3$ à $0$ (glissière). Le solide $0$ est le bati (référence).
    Cycle unique : $0 - 1 - 2 - 3 - 0$.

*   **1.2. Mobilités :**
    *   Mobilité utile $m = 1$ (le mouvement d'entrée est piloté par l'actionneur sur le solide 1, le mouvement de sortie est la translation du coulisseau 3).
    *   Mobilité interne $m_i = 0$ (aucune pièce ne possède de liberté superflue sans effet sur la sortie, comme une rotation propre de la bielle 2 qui n'est pas un degré de liberté cinématique indépendant utile, mais attention : la bielle 2 peut tourner sur elle-même si elle n'était pas guidée par deux pivots, mais ici les liaisons pivots en extrémités bloquent sa rotation propre dans le plan, donc $m_i = 0$).

*   **1.3. Degré d'hyperstatisme :**
    Formule générale pour un mécanisme spatial ou plan. En cinématique plane :
    $$h = E_c - I_c$$
    Où $E_c$ est le nombre d'équations scalaires indépendantes (pour un problème plan, $3$ équations par liaison ou par chaîne fermée) et $I_c$ le nombre d'inconnues cinématiques totales.
    Plus simplement, via la formule de Grübler plane :
    $$h = 3(\text{nombre de cycles indépendants}) - \sum \text{(mobilités locales et utiles)} + \text{correction...}$$
    Utilisons la méthode des mobilités :
    $h = 3(\text{nb de cycles}) - (\text{somme des mobilités des liaisons dans le mécanisme}) + \text{effectif}$
    Plus rigoureusement avec les torseurs cinématiques (ou nombre d'inconnues de liaisons $I_s$ et nombre d'équations $E_s = 3$ pour le plan) :
    *   Nombre de solides $N_s = 4$ (0, 1, 2, 3).
    *   Liaisons : Pivot (2 inconnues cinématiques planes : 0 translation, 1 rotation bloquée ? Non, en plan, une liaison pivot possède 0 mobilité utile, elle bloque 2 mouvements : les 2 translations).
        Recensons les mobilités cinématiques des liaisons $L_c$ :
        *   Pivot (0-1) : $s_c = 0$ (mobilité)
        *   Pivot (1-2) : $s_c = 1$ (rotation relative)
        *   Pivot (2-3) : $s_c = 1$
        *   Glissière (3-0) : $s_c = 1$ (translation)
        Somme des mobilités des liaisons $\sum s_c = 0 + 1 + 1 + 1 = 3$.
    *   Nombre de cycles $g = 1$.
    *   Formule : $h = 3 \cdot g - (\text{mobilités cinématiques brutes de la chaîne}) \dots$ 
    Appliquons la relation classique d'hyperstatisme $h = E - \text{rang}(1)$ ou par les mobilités :
    $$h = 3(N_s - 1) - \sum \text{(inconnues statiques des liaisons)} - m$$
    Nombre de solides mobiles : $N_s - 1 = 3$ (1, 2, 3).
    Nombre d'équations scalaires dans le plan par solide : $3$. Total équations = $3 \times 3 = 9$.
    Inconnues statiques :
    *   Pivot (0-1) : 2 composantes de force (bloque 2 translations).
    *   Pivot (1-2) : 2 composantes de force.
    *   Pivot (2-3) : 2 composantes de force.
    *   Glissière (3-0) : 2 composantes (1 force normale, 1 moment ou 2 forces équivalentes bloquant translation selon $\vec{y}$ et rotation). Précisons : une glissière plane bloque 1 translation et 2 rotations (ou en plan : 1 translation selon $\vec{y}$ et 1 rotation autour de $\vec{z}$). Elle apporte donc 2 contraintes (2 inconnues statiques).
    Total des inconnues statiques $I_s = 2 + 2 + 2 + 2 = 8$.
    Nombre d'équations disponibles $E = 3 \times (\text{nb de solides mobiles}) = 3 \times 3 = 9$. 
    Attention, le nombre d'équations du mécanisme est $3 \times (\text{nb de solides}) = 3 \times 3 = 9$.
    On a $h = I_s - E + m$ ? Vérifions l'homogénéité :
    $h = \text{Inconnues} - \text{Équations} = 8 - 9 + 1 \text{ (mobilité)} = 0$.
Conclusion: ** Le mécanisme initial est **isostatique** ($h = 0$). Il est montrable sans contrainte géométrique.

---

#### 2. Modification structurelle et analyse de l'hyperstatisme
*   **2.1. Graphe des liaisons modifié :**
    On ajoute la bielle **4**. Un second cycle apparaît ($0 - 1 - 4 - 3 - 0$). Le graphe comporte désormais deux boucles indépendantes.

*   **2.2. Degré d'hyperstatisme $h'$ :**
    *   Nombre de solides : $N_s = 5$ (0, 1, 2, 3, 4). Solides mobiles = 4 (1, 2, 3, 4).
    *   Équations globales disponibles dans le plan : $3 \times 4 = 12$ équations.
    *   Inconnues statiques des liaisons :
        *   Pivot (0-1) : 2
        *   Pivot (1-2) et Pivot (2-3) : $2 + 2 = 4$
        *   Glissière (3-0) : 2
        *   Pivot (1-4) et Pivot (4-3) : $2 + 2 = 4$
        Total des inconnues statiques $I_s = 2 + 4 + 2 + 4 = 12$.
    *   Mobilité utile $m = 1$.
    *   Calcul de $h'$ :
        $$h' = I_s - (3 \times \text{nb de solides mobiles}) + m = 12 - 12 + 1 = 1 \text{ (ou calcul via les cycles)}$$
        Vérifions par les cycles : $h' = 3 \times (\text{nb de cycles } g = 2) - \text{mobilités} \dots$ 
        Plus directement, l'addition de la bielle 4 rajoute un solide (donc 3 équations scalaires en plus) mais apporte deux liaisons pivots (soit $2 + 2 = 4$ inconnues statiques). Le bilan s'accroît de $+1$ en hyperstatisme.
Conclusion: ** Le mécanisme modifié est **hyperstatique de degré 1** ($h' = 1$).

*   **2.3. Analyse critique du modèle et limites :**
    *   *Hypothèse de rigidité vs réalité :* Le modèle considère les solides rigides. Avec $h'=1$, si la cote entre les axes $A$ et $C$ sur le solide 1, ou $B$ et $D$ sur le solide 3, présente une erreur de fabrication supérieure à la deformabilité élastique des pièces (quelques micromètres), un serrage excessif apparaît lors du montage.
    *   *Conséquences énergétiques et thermiques :* Ce hyperstatisme génère des efforts intérieurs parasites (contraintes résiduelles élevées). Cela entraîne :
        1. Une augmentation des frottements au niveau des paliers (usure prématurée, risque de grippage).
        2. Une élasticité locale non désirée transformée en pertes thermiques par frottement sec ou visqueux.
        3. Une surconsommation du moteur d'entraînement pour vaincre ces efforts internes redondants.
    *   *Limite du modèle :* Le modèle rigide est mis en défaut ; il faudrait passer à un modèle élastostatique (mécanique des milieux continus) pour quantifier les efforts de battement ou de précontrainte.

---

#### 3. Étude cinématique du mécanisme initial
*   **3.1. Fermeture cinématique :**
    La chaîne vectorielle fermée s'écrit :
    $$\vec{OA} + \vec{AB} + \vec{BO} = \vec{0}$$
    Soit en projetant dans le repère $(O, \vec{x}, \vec{y})$ :
    *   Position de $A$ : $\vec{OA} = R \cos(\alpha)\vec{x} + R \sin(\alpha)\vec{y}$ (avec $R = OA$).
    *   Position de $B$ : $\vec{OB} = x_B(t)\vec{x}$ (car glissière sur l'axe $\vec{x}$).
    *   Bielle $\vec{AB} = L \cos(\theta)\vec{x} + L \sin(\theta)\vec{y}$.

    L'équation vectorielle de fermeture est :
    $$R \cos(\alpha)\vec{x} + R \sin(\alpha)\vec{y} + L \cos(\theta)\vec{x} + L \sin(\theta)\vec{y} - x_B(t)\vec{x} = \vec{0}$$

*   **3.2. Relation cinématique :**
    Par projection sur les axes $\vec{x}$ et $\vec{y}$ :
    1. Selon $\vec{x}$ : $R \cos(\alpha) + L \cos(\theta) - x_B = 0$
    2. Selon $\vec{y}$ : $R \sin(\alpha) + L \sin(\theta) = 0 \implies \sin(\theta) = -\frac{R}{L}\sin(\alpha)$

    Dérivons ces expressions par rapport au temps $t$ pour relier la vitesse d'entrée $\dot{\alpha} = \omega$ à la vitesse de sortie $\dot{x}_B$ :
    En dérivant l'équation selon $\vec{y}$ :
    $$R \dot{\alpha} \cos(\alpha) + L \dot{\theta} \cos(\theta) = 0 \implies \dot{\theta} = -\frac{R \cos(\alpha)}{L \cos(\theta)} \omega$$

    En dérivant l'équation selon $\vec{x}$ :
    $$\dot{x}_B = -R \dot{\alpha} \sin(\alpha) - L \dot{\theta} \sin(\theta)$$
    En injectant $\dot{\theta}$ :
    $$\dot{x}_B = -R \omega \sin(\alpha) - L \left( -\frac{R \cos(\alpha)}{L \cos(\theta)} \omega \right) \sin(\theta)$$
    $$\dot{x}_B = R \omega \left( -\sin(\alpha) + \frac{\cos(\alpha)\sin(\theta)}{\cos(\theta)} \right) = R \omega \left( -\sin(\alpha) + \cos(\alpha)\tan(\theta) \right)$$
    En remplaçant $\sin(\theta)$ et $\cos(\theta) = \pm\sqrt{1 - \sin^2(\theta)} = \pm\sqrt{1 - \left(\frac{R}{L}\sin(\alpha)\right)^2}$, on obtient la loi de vitesse recherchée du mécanisme sous forme analytique explicite.