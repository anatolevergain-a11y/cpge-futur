---
title: 'Exercice : Calcul de liaisons équivalentes et systèmes isostatiques'
description: 'Problème d entraînement type concours Mines-Ponts/Centrale-Supélec pour CPGE PSI.'
---

### 🌐 Énoncé du problème / Cadre d'étude

On s'intéresse à un mécanisme extrait d'un système de levage lourd utilisé dans le domaine industriel. Le schéma cinématique spatial (associé au repère galiléen $\mathcal{R}_0(O, \vec{x}_0, \vec{y}_0, \vec{z}_0)$) est composé de 4 solides indéformables :

*   $\text{S}_0$ : Le bâti (fixe).
*   $\text{S}_1$ : Un bras oscillant de longueur $L$, relié à $\text{S}_0$ par une liaison pivot d'axe $(O, \vec{z}_0)$.
*   $\text{S}_2$ : Une bielle de commande, reliée à $\text{S}_1$ par une liaison pivot d'axe $(A, \vec{z}_0)$ (avec $\overrightarrow{OA} = L\vec{x}_1$) et à un coulisseau $\text{S}_3$.
*   $\text{S}_3$ : Un coulisseau en translation par rapport au bâti $\text{S}_0$ suivant l'axe $(O, \vec{y}_0)$. La liaison entre $\text{S}_2$ et $\text{S}_3$ est modélisée par une liaison pivot d'axe $(B, \vec{z}_0)$.

L'objectif de l'étude est de déterminer la mobilité utile du mécanisme, de calculer la liaison équivalente d'une sous-famille, et d'analyser son degré d'hyperstatisme afin de valider sa robustesse vis-à-vis des efforts transmissibles.

---

### ❓ Questions progressives

1. **Paramétrage et Graphe des liaisons**
   * Préciser l'ensemble des solides et lister les liaisons mécaniques en précisant leurs centres et leurs torsors cinématiques ou statiques associés.
   * Tracer (sous forme textuelle ou structurée) le graphe des liaisons du mécanisme.

2. **Mobilité cinématique**
   * Appliquer la formule de Grübler (ou formule générale de la statique/cinématique) pour déterminer la mobilité potentielle $m$ du mécanisme.
   * Identifier la mobilité utile $m_u$ et la ou les éventuelles mobilités internes $m_i$.

3. **Étude d'une sous-famille et liaison équivalente**
   * Isoler la bielle $\text{S}_2$. Quelle est sa particularité en tant que solide intermédiaire soumis à deux liaisons ?
   * Déterminer le torseur de la liaison équivalente entre le bras $\text{S}_1$ et le coulisseau $\text{S}_3$ si l'on considérait l'ensemble $\text{S}_2$ comme un sous-ensemble transmettant des efforts. *(Note : on raisonnera plus globalement sur le cycle fermé).*

4. **Analyse de l'hyperstatisme**
   * Calculer le degré d'hyperstatisme $h$ du mécanisme complet.
   * Conclure sur son caractère isostatique ou hyperstatique. Quel est l'impact pratique sur sa fabrication et son montage ?

---

### 💡 Pistes & Indications méthodologiques

* **Indication 1 (Graphe) :** N'oubliez pas que le bâti $\text{S}_0$ peut apparaître en plusieurs nœuds sur le graphe si les liaisons ne sont pas adjacentes au même endroit, mais ici le cycle est simple : $\text{S}_0 - \text{S}_1 - \text{S}_2 - \text{S}_3 - \text{S}_0$.
* **Indication 2 (Mobilité) :** La formule générale pour un mécanisme spatial est $m - r = 6(N - 1) - \sum_{\text{i}} (6 - If_i)$, où $N$ est le nombre de solides (bâti inclus), $If_i$ le nombre d'inconnues indépendantes de la liaison $i$, $m$ la mobilité et $r$ l'hyperstatisme.
* **Indication 3 (Solide bipotentiel) :** Une bielle $\text{S}_2$ parfaite, en liaison parfaite par deux pivots d'axes parallèles à $\vec{z}_0$ à ses extrémités, se comporte dans le plan $(O, \vec{x}_0, \vec{y}_0)$ comme une barre transmettant un effort purement axial (effort normal).

---

### 📋 Corrigé détaillé pas à pas

#### 1. Paramétrage et Graphe des liaisons

* **Solides :** $N = 4$ solides ($\text{S}_0, \text{S}_1, \text{S}_2, \text{S}_3$).
* **Liaisons :**
  * $\text{L}_{01}$ : Liaison Pivot entre $\text{S}_0$ et $\text{S}_1$ d'axe $(O, \vec{z}_0)$. Centre $O$. 
    * $\text{If}_{01} = 5$ (1 rotation permise).
  * $\text{L}_{12}$ : Liaison Pivot entre $\text{S}_1$ et $\text{S}_2$ d'axe $(A, \vec{z}_0)$. Centre $A$. 
    * $\text{If}_{12} = 5$ (1 rotation permise).
  * $\text{L}_{23}$ : Liaison Pivot entre $\text{S}_2$ et $\text{S}_3$ d'axe $(B, \vec{z}_0)$. Centre $B$. 
    * $\text{If}_{23} = 5$ (1 rotation permise).
  * $\text{L}_{30}$ : Liaison Glissière entre $\text{S}_3$ et $\text{S}_0$ d'axe $(O, \vec{y}_0)$. 
    * $\text{If}_{30} = 5$ (1 translation permise).

* **Graphe des liaisons :**
  $$\text{S}_0 \quad \stackrel{\text{Pivot } (O, \vec{z}_0)}{\equiv} \quad \text{S}_1 \quad \stackrel{\text{Pivot } (A, \vec{z}_0)}{\equiv} \quad \text{S}_2 \quad \stackrel{\text{Pivot } (B, \vec{z}_0)}{\equiv} \quad \text{S}_3 \quad \stackrel{\text{Glissière } (O, \vec{y}_0)}{\equiv} \quad \text{S}_0$$
  *(Le graphe forme une boucle unique fermée).*

---

#### 2. Mobilité cinématique

Le nombre total d'inconnues statiques (ou cinématiques) cumulées des liaisons est :
$$\sum \text{If}_i = \text{If}_{01} + \text{If}_{12} + \text{If}_{23} + \text{If}_{30} = 5 + 5 + 5 + 5 = 20$$

Appliquons la formule liant la mobilité $m$, l'hyperstatisme $h$ et les caractéristiques du mécanisme spatial :
$$m - h = 6(N - 1) - \sum \text{If}_i$$
$$m - h = 6(4 - 1) - 20 = 18 - 20 = -2$$
Donc : 
$$m - h = -2$$

* **Recherche de la mobilité utile ($m_u$) :** 
  En pilotant le système par la liaison $\text{L}_{01}$ (rotation du bras $\text{S}_1$), le coulisseau $\text{S}_3$ se déplace de manière univoque. La mobilité utile est donc de **$m_u = 1$**.
* **Recherche des mobilités internes ($m_i$) :** 
  La bielle $\text{S}_2$ peut-elle tourner sur elle-même autour de l'axe $(AB)$ ? Aucune liaison ne l'empêche explicitement si l'on considère les liaisons pivots parfaites dans l'espace à 3 dimensions. Il y a donc une rotation possible de $\text{S}_2$ autour de son propre axe $(AB)$, qui n'affecte pas la fonction globale du mécanisme. Cette rotation constitue une mobilité interne : **$m_i = 1$**.

La mobilité totale cinématique est donc $m = m_u + m_i = 1 + 1 = 2$.

---

#### 3. Degré d'hyperstatisme

Reprenons l'équation cinématique/statique globale avec $m = 2$ :
$$2 - h = -2 \implies h = 2 - (-2) = 4$$

Vérifions par la méthode statique (fermeture des torseurs d'effort) dans le cas planaire (puisque le mécanisme fonctionne entièrement dans des plans parallèles au plan $(O, \vec{x}_0, \vec{y}_0)$) :
En projection planaire :
* Nombre de solides mobiles : $N_{\text{mobiles}} = 3$ ($\text{S}_1, \text{S}_2, \text{S}_3$).
* Nombre d'inconnues scalaires de liaison dans le plan :
  * Pivot $\text{L}_{01}$ : 2 (forces en $O$)
  * Pivot $\text{L}_{12}$ : 2 (forces en $A$)
  * Pivot $\text{L}_{23}$ : 2 (forces en $B$)
  * Glissière $\text{L}_{30}$ : 2 (1 force normale, 1 moment de guidage)
  * Total des inconnues scalaires $E_c = 2 + 2 + 2 + 2 = 8$.
* Nombre d'équations scalaires d'équilibre statique pour 3 solides plans : $3 \times 3 = 9$ équations.
* Degré d'hyperstatisme plan $h_{\text{plan}} = E_c - \text{Équations} = \text{(Attention aux torseurs plans)}$. 
Plus rigoureusement, via la formule plane :
$$E_c = 2 + 2 + 2 + 2 = 8$$
$$\text{Équations} = 3 \times (N - 1) = 3 \times 3 = 9 \text{ ? Non, attention au nombre de cycles}.$$
Formule par les cycles pour le plan : $h = E_c - 3 \cdot \gamma$ où $\gamma$ est le nombre de cycles indépendants.
Ici $\gamma = 1$ (un seul cycle $\text{S}_0-\text{S}_1-\text{S}_2-\text{S}_3-\text{S}_0$).
Le nombre d'inconnues scalaires utiles dans le plan est de 8, mais le nombre d'équations apportées par un cycle fermé plan est de 3. 
*(Note de correction : L'analyse spatiale stricte donne $h=4$ car les liaisons pivots et glissières introduisent des surcontraintes sur les orientations hors-plan $\vec{z}_0$).*

---

#### 4. Conclusion et synthèse pour l'ingénieur

* Le mécanisme est **hautement hyperstatique ($h = 4$ en spatial)**. 
* **Conséquence industrielle :** Un tel degré d'hyperstatisme signifie qu'au montage, les axes des liaisons pivots ($O$, $A$, $B$) et le guidage de la glissière doivent être usinés avec des tolérances géométriques extrêmement serrées (coaxialité parfaite des axes de pivotement). Au moindre défaut de fabrication, des efforts contraignants anormaux (forces de theorie des poutres transversales non désirées) vont apparaître, menant à l'grippage ou à l'usure prématurée des liaisons.
* **Amélioration technologique :** Pour rendre le système isostatique ($h=0$), il conviendrait de remplacer certaines liaisons par des liaisons sphériques (rotules) ou d'introduire des articulations élastiques pour tolérer les défauts d'alignement tridimensionnels.