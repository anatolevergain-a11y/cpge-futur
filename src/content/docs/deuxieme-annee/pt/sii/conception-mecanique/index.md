---
title: 'Cours : Conception mécanique'
description: 'Synthèse de cours, théorèmes et démonstrations.'
---

# Fiche de Cours : Conception Mécanique (CPGE PT - 2ème année)

En classe préparatoire PT, l'épreuve de Sciences Industrielles de l'Ingénieur fait la part belle à la conception mécanique, à l'analyse critique des solutions constructives et au dimensionnement statique et en fatigue des composants. Cette fiche synthétise les notions indispensables pour aborder les écrits et les travaux pratiques (TIPE/Projets).

---

## 1. Liaisons et Guidages (Rappels et compléments)

### A. Classification des guidages
Le choix d'un guidage (rotation ou translation) dépend de la charge, de la vitesse, de la précision et des conditions environnementales.

*   **Guidage en rotation :**
    *   *Par contact glissant (paliers lisses / coussinets) :* Adaptés aux charges élevées, vitesses modérées, encombrement réduit. Nécessitent une lubrification adéquate (régime hydrodynamique ou mixte).
    *   *Par contact roulant (roulements) :* Faible frottement, standardisés, choix guidé par le diagramme de SKF en fonction des charges radiales $F_r$ et axiales $F_a$.
*   **Guidage en translation :**
    *   Glissières à contact direct (lisses) ou douilles à billes / patins à recirculation de billes.

### B. Montage des roulements (Roulement fixe / Roulement libre)
Pour un arbre guidé par deux roulements dans un alésage :
*   **Problème thermique :** La dilatation thermique de l'arbre par rapport au carter génère des efforts axiaux hyperstatiques destructeurs si les deux roulements sont bloqués axialement.
*   **Solution (Arturo / Flottant) :** 
    *   Un roulement est monté **bloqué** (il reprend les efforts radiaux et les deux sens d'efforts axiaux) : c'est le roulement fixe.
    *   L'autre roulement est monté **glissant** dans son logement ou sur l'arbre (il ne reprend que les efforts radiaux) : c'est le roulement libre.

---

## 2. Étanchéité et Lubrification

### A. Étanchéité
*   **Statique :** Joints toriques (écrasement maîtrisé de l'ordre de 15 à 25 %), joints plats, pâte à joint.
*   **Dynamique :**
    *   *Sans contact :* Labyrinthes, segments (pour vitesses élevées et milieux agressifs).
    *   *Avec contact :* Joints à lèvres (à contacts frottants, attention au sens de montage et à l'état de surface de l'arbre).

### B. Lubrification
*   **Rôle :** Réduire le coefficient de frottement, évacuer les calories, protéger contre la corrosion.
*   **Types :** Huile (bain, barbotage, circulation sous pression) ou Graisse (lubrification à vie, étanchéité simplifiée mais limitée en vitesse - facteur $dN$).

---

## 3. Transmission de Puissance

### A. Engrenages (Rappels PT)
Pour des engrenages cylindriques à denture droite ou toीलique :
*   **Rapport de transmission :** 
    $$\frac{\omega_{2/1}}{\omega_{1/0}} = \pm \frac{Z_1}{Z_2}$$
*   **Efforts dans un engrenage (Denture droite) :**
    *   Force tangentielle : $F_t = \frac{T}{d/2}$ (où $T$ est le couple transmis et $d$ le diamètre primitif).
    *   Force radiale : $F_r = F_t \cdot \tan(\alpha)$ (avec $\alpha = 20^\circ$ l'angle de pression standard).
*   *Piège de concours :* Ne pas oublier la composante axiale $F_a = F_t \cdot \tan(\beta)$ pour les engrenages hélicoïdaux, qui sollicite les roulements en axial.

### B. Liaisons arbre-moyeu
Permettent de transmettre un couple entre un arbre et un moyeu (poulie, roue dentée) :
*   **Par obstacle :** Clavettes parallèles (dimensionnement au cisaillement et à la pression diamétrale), goupilles, cannelures.
*   **Par adhérence :** Frettage, moyeux expansibles, vis de pression (pour faibles couples).

---

## 4. Dimensionnement Statique et Résistance des Matériaux (RDM)

### A. Critères de résistance élastique (Contraintes équivalentes)
Pour un état triaxial de contrainte, on utilise les critères de von Mises ou de Tresca pour comparer l'état réel à l'essai de traction simple.

*   **Critère de von Mises (Énergie de distorsion) :**
    $$\sigma_{eq} = \sqrt{\frac{1}{2} \left[ (\sigma_1 - \sigma_2)^2 + (\sigma_2 - \sigma_3)^2 + (\sigma_3 - \sigma_1)^2 \right]}$$
    En cas de cisaillement pur $\tau$ (torsion simple) : $\sigma_{eq} = \sqrt{3}\tau$.

*   **Condition de résistance :**
    $$\sigma_{eq} \le Rpe = \frac{Re}{s}$$
    avec $Re$ la limite d'élasticité et $s$ le coefficient de sécurité choisi selon le cahier des charges.

### B. Fatigue et endommagement (Très fréquent en PT)
Si la pièce subit des efforts cycliques, la limite d'élasticité $Re$ ne suffit plus. On utilise la limite de fatigue $R_D$.
*   **Diagramme de Wöhler** ou **courbe de Goodman-Smith** pour prendre en compte la contrainte moyenne et l'amplitude de contrainte.
*   **Facteurs de concentration de contrainte ($K_t$ ou $K_{_f}$) :** Dus aux variations de géométrie (gorges, épaulements, perçages). La contrainte maximale locale est augmentée :
    $$\sigma_{max} = K_t \cdot \sigma_{nom}$$

---

## 5. Méthodes et Savoir-faire pour les Concours

1.  **Analyse critique d'un dessin d'ensemble :**
    *   Repérer systématiquement les isostatismes (les hyperstatismes non justifiés sont des fautes de conception).
    *   Vérifier les jeux fonctionnels (chaînes de cotes).
    *   Identifier les flux de puissance et les chemins d'efforts.
2.  **Justification d'un choix technologique :**
    *   Argumenter toujours en 3 étapes : **Fonction** à assurer $\rightarrow$ **Sollicitation / Contrainte** principale $\rightarrow$ **Critère** de choix (ex: "Le montage en O des roulements est choisi ici car l'effort axial est alterné et le moment de basculement à reprendre est important").

---

## 6. Pièges à Éviter

*   **Ne pas confondre** la cote nominale d'un ajustement et les tolérances normalisées (ex: $H7/g6$ est un ajustement avec jeu, $H7/p6$ avec serrage).
*   **Oublier le sens des efforts** dans les liaisons hélicoïdales ou les engrenages inclinés lors du bilan des actions mécaniques.
*   **Négliger les rayons de raccordement** sur les arbres en rotation : une arête vive génère un facteur de concentration de contrainte $K_t$ élevé menant à la rupture en fatigue.