---
title: 'Cours : Conception et CAO'
description: 'Synthèse de cours, théorèmes et démonstrations fondamentales.'
---

## 📌 1. Définitions & Cadre d'étude

La Conception Assistée par Ordinateur (CAO) s'inscrit dans le processus global de conception des systèmes pluritechniques. En classe de PTSI, l'étude de la conception vise à modéliser géométriquement et structurellement un mécanisme afin d'en valider les exigences fonctionnelles, cinématiques et statiques avant sa réalisation physique.

### 1.1. Modélisation géométrique et topologique
Un système mécanique est modélisé par un ensemble de pièces en liaison. 
* **Pièce :** Objet matériel indéformable en première approximation (cadre de la statique et de la cinématique du solide).
* **Classe d'équivalence cinématique (CEC) :** Ensemble des pièces d'un mécanisme reliées entre elles par des liaisons rigides (sans mouvement relatif). On note $\mathcal{C}_i$ la $i$-ième classe d'équivalence.
* **Graphe des liaisons :** Graphe non orienté dont les sommets représentent les classes d'équivalence et les arêtes les liaisons cinématiques élémentaires entre ces classes.

### 1.2. Représentation numérique et paramétrique
La CAO moderne repose sur la modélisation paramétrique volumique (constructive solid geometry et balayage de profil). Les données fondamentales associées à un modèle numérique 3D sont :
* La **topologie** : relations d'adjacence entre les faces, arêtes et sommets.
* La **géométrie** : équations mathématiques des surfaces (plans, cylindres, cônes, surfaces libres).
* L'**historique de construction** : arbre de création caractérisant l'intention de conception (_design intent_).

---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### 2.1. Théorème de la liaison équivalente
Soit un mécanisme modélisé par un graphe de liaisons. La recherche de la liaison équivalente entre deux classes d'équivalence $\mathcal{C}_A$ et $\mathcal{C}_B$ reliées par plusieurs chaînes cinématiques en parallèle repose sur l'intersection des torseurs cinématiques.

**Énoncé :** 
Soit $\{V_{B/A}\}_1$ et $\{V_{B/A}\}_2$ les torseurs cinématiques de deux chaînes cinématiques indépendantes reliant $\mathcal{C}_A$ à $\mathcal{C}_B$. Le mouvement instantané possible du solide $B$ par rapport au solide $A$ est l'intersection des deux ensembles de mouvements autorisés par chaque chaîne.

**Démonstration (analyse des mobilités et torseurs) :**
Exprimons les torseurs cinématiques au point $M$ dans une base $\mathcal{R} = (\vec{x}, \vec{y}, \vec{z})$ :
$$\{V_{B/A}\}_1 = \left\{ \begin{matrix} \vec{\Omega}_{1} \\ \vec{V}(M)_{1} \end{matrix} \right\}_M \quad \text{et} \quad \{V_{B/A}\}_2 = \left\{ \begin{matrix} \vec{\Omega}_{2} \\ \vec{V}(M)_{2} \end{matrix} \right\}_M$$

La compatibilité géométrique impose l'égalité des torseurs cinématiques pour que le mécanisme ne soit pas bloqué (sauf cas particulier d'isostatisme contrarié) :
$$\{V_{B/A}\}_1 = \{V_{B/A}\}_2 \implies \left\{ \begin{matrix} \vec{\Omega}_{1} = \vec{\Omega}_{2} \\ \vec{V}(M)_{1} = \vec{V}(M)_{2} \end{matrix} \right.^{\mathcal{R}}$$

Le torseur cinématique équivalent $\{V_{B/A}\}_{\text{eq}}$ est donc l'intersection des sous-espaces vectoriels des torseurs cinématiques compatibles.

### 2.2. Condition d'isostatisme d'un mécanisme
Soit un mécanisme comportant $E$ pièces (classes d'équivalence mobiles), $L$ liaisons cinématiques caractérisées par leurs nombres d'inconnues cinématiques $I_{c,k}$ (ou mobilités utiles $m_k = 5 - I_{c,k}$ pour une liaison de type sphérique-cylindrique par exemple, ou de manière générale $I_{c,k}$ le nombre de degrés de liberté interdits).

La formule générale de la mobilité utile $Mc$ du mécanisme est :
$$Mc = \sum_{k=1}^{L} m_k - \text{Id}(1)$$
*(où $\text{Id}(1)$ représente les mobilités internes ou redondances cinématiques).*

Le degré d'hyperstatisme $h$ d'un mécanisme s'obtient par la relation fondamentale :
$$h = E_s - Mc$$
*(avec $E_s$ l'excès de mobilité ou nombre d'équations scalaires indépendantes du système, souvent égal à $6$ en spatial et $3$ en plan).*

Un mécanisme est dit **isostatique** si et seulement si :
$$h = 0 \quad \text{et} \quad Mc = \text{mobilité géométrique utile}$$

---

## 💡 3. Méthodes classiques de résolution

### 3.1. Analyse d'un dessin d'ensemble et cotation fonctionnelle
La lecture et la conception d'un mécanisme imposent le respect de la chaîne des cotes pour garantir l'interchangeabilité et le bon fonctionnement des jeux.

1. **Identification des surfaces terminales :** Repérer les surfaces de contact assurant la fonction (ex: appui plan, centrage court).
2. **Tracé de la chaîne de cotes :** 
   * Isoler la condition (jeu $J$ ou cote condition $A_0$).
   * Parcourir le graphe des liaisons de la surface d'une pièce à la surface de l'autre pièce constituant la condition.
   * Écrire la relation vectorielle ou algébrique : 
     $$A_0 = \sum_{\text{i}} A_i \quad (\text{avec prise en compte des sens})_$$
3. **Calcul statistique ou probabiliste (méthode des moments / RMS) :**
   $$\text{Moyenne } m(A_0) = \sum m(A_i) \quad \text{et} \quad \text{Variance } \sigma^2(A_0) = \sum \sigma^2(A_i)$$

### 3.2. Méthodologie de modélisation 3D en CAO
Pour concevoir une pièce prismatique ou de révolution sous un logiciel de CAO :
* **Principe de l'esquisse isostatique :** Toute esquisse 2D doit être pleinement contrainte géométriquement (coïncidence, tangence, parallélisme) et dimensionnellement avant d'effectuer une opération volumique (extrusion, révolution).
* **Gestion de l'arbre de construction :** Privilégier les fonctions mères et filles. Utiliser les plans de symétrie du repère origine $\mathcal{O}(\vec{x}, \vec{y}, \vec{z})$ pour garantir le design intent.
* **Assemblage :** Placer la première pièce (châssis) en position fixe (*ancrage*), puis appliquer des contraintes d'assemblage cinématiques (coïncidence, concentricité, contact) en évitant les sur-contraintes numériques.

---

## ⚠️ 4. Pièges classiques aux Concours

1. **Confondre liaison technologique et liaison cinématique équivalente :**
   * *Exemple :* Un guidage par deux roulements à billes à contact radial modélisé hâtivement par un encastrement. En réalité, un montage "en O" ou "en X" modifie radicalement le torseur des actions mécaniques transmissibles et le centre de réduction des liaisons équivalentes.
2. **Oublier les conditions d'isostatisme dans l'assemblage CAO :**
   * Appliquer des contraintes redondantes dans l'outil d'assemblage de la CAO (ex: contraindre deux faces parallèles ET l'axe de symétrie alors que l'axe impose déjà le parallélisme). Cela génère des erreurs de résolution géométrique du solveur cinématique.
3. **Erreur de signe dans la chaîne de cotes :**
   * Ne pas projeter correctement les vecteurs de cotes sur l'axe de la condition $A_0$. Une cote orientée dans le sens opposé au parcours de la chaîne doit impérativement être affectée d'un signe négatif dans l'équation algébrique.
4. **Négliger les rayons de raccordement et dépouilles en conception :**
   * Oublier que les pièces obtenues par fonderie ou forge nécessitent des dépouilles, et que les pièces usinées requièrent des rayons de racinement (rayons de raccordement) pour éviter les concentrations de contraintes (facteur de concentration de contrainte $K_t$).