---
title: 'Cours : Écologie et écosystèmes'
description: 'Synthèse de cours, théorèmes et démonstrations fondamentales.'
---

## 📌 1. Définitions & Cadre d'étude

L'écologie scientifique étudie les interactions entre les organismes vivants et leur milieu. L'analyse des écosystèmes repose sur une hiérarchie précise des niveaux d'intégration biologique.

*   **Population :** Ensemble des individus de la même espèce, occupant un même territoire géographique à un moment donné et interagissant entre eux (reproduction, compétition).
*   **Communauté (ou biocénose) :** Ensemble de toutes les populations d'espèces différentes cohabitant dans un même espace et un même temps, reliées par des interactions biotiques (prédation, mutualisme, compétition interspécifique).
*   **Écosystème :** Unité fonctionnelle fondamentale de l'écologie. C'est l'association indissociable entre une communauté d'organismes vivants ($\text{la biocénose}$) et son milieu physico-chimique inerte ($\text{le biotope}$). 
    $$\text{Écosystème} = \text{Biocénose} + \text{Biotope}$$
*   **Flux de matière et d'énergie :** Contrairement à la matière qui est recyclée au sein de la biososphère grâce aux cycles biogeochimiques, l'énergie circule à sens unique : elle pénètre dans l'écosystème sous forme lumineuse, est convertie en énergie chimique par les producteurs primaires, puis est dissipée sous forme de chaleur par la respiration de l'ensemble des organismes.
*   **Productivité primaire brute ($\text{PPB}$) et nette ($\text{PPN}$) :** 
    La $\text{PPB}$ correspond à l'énergie totale fixée par photosynthèse par unité de temps et de surface. La $\text{PPN}$ représente l'énergie réellement stockée sous forme de biomasse végétale après déduction de la respiration autotrophe ($R$) :
    $$\text{PPN} = \text{PPB} - R$$

---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### 1. Le principe d'exclusion compétitive de Gause

*   **Énoncé :** Deux espèces occupant exactement la même niche écologique (même utilisation des ressources et des conditions environnementales) ne peuvent cohabiter indéfiniment dans un même habitat si les ressources sont limitées. L'espèce la plus efficace élimine l'autre par compétition.
*   **Démonstration formelle par le modèle de Lotka-Volterra en compétition interspécifique :**
    Soit deux espèces dont les effectifs au temps $t$ sont notés $N_1$ et $N_2$. Les équations différentielles régissant leur dynamique sont :
    $$\frac{dN_1}{dt} = r_1 N_1 \left( 1 - \frac{N_1 + \alpha_{12} N_2}{K_1} \right)$$
    $$\frac{dN_2}{dt} = r_2 N_2 \left( 1 - \frac{N_2 + \alpha_{21}N_1}{K_2} \right)$$
    Où $r_i$ est le taux intrinsèque d'accroissement, $K_i$ la capacité charge du milieu pour l'espèce $i$, et $\alpha_{ij}$ le coefficient de competition interspécifique traduisant l'effet de l'espèce $j$ sur l'espèce $i$ en équivalent d'individus de l'espèce $i$.
    
    *Recherche des équilibres ($\frac{dN_1}{dt} = 0$ et $\frac{dN_2}{dt} = 0$) :*
    Les isoclines de zero-croissance ($\frac{dN_i}{dt} = 0$) sont des droites dans le plan $(N_1, N_2)$ :
    *   Pour l'espèce 1 : $N_1 + \alpha_{12} N_2 = K_1$
    *   Pour l'espèce 2 : $N_2 + \alpha_{21} N_1 = K_2$
    
    L'analyse graphique de la position relative des intercepts ($K_1$ versus $K_2/\alpha_{21}$ et $K_2$ versus $K_1/\alpha_{12}$) montre qu'il existe quatre cas de figures. Dans les cas où la compétition interspécifique est supérieure à la compétition intraspécifique pour les deux espèces ($\alpha_{12} > K_1/K_2$ et $\alpha_{21} > K_2/K_1$), un seul point d'équilibre stable existe, correspondant à l'exclusion de l'une des deux espèces, démontrant ainsi le principe de Gause.

### 2. Efficacité écologique et loi de Lindeman (10 %)

*   **Énoncé :** Lors du transfert d'énergie d'un niveau trophique $n$ vers le niveau trophique supérieur $n+1$, seule une fraction de l'énergie (estimée empiriquement à environ $10\%$) est convertie en biomasse consommable.
*   **Démonstration thermodynamique (Bilan énergétique d'un niveau trophique) :**
    Soit $I_n$ l'énergie ingérée par le niveau trophique $n$. Cette énergie se répartit selon le bilan massique :
    $$I_n = F_n + R_n + P_n$$
    Avec :
    *   $F_n$ : Énergie rejetée sous forme de fèces et d'urine (non assimilée $A_n = I_n - F_n$).
    *   $R_n$ : Énergie dissipée par la respiration cellulaire et le métabolisme.
    *   $P_n$ : Énergie convertie en production nette (biomasse disponible pour le niveau supérieur).
    
    L'efficacité d'exploitation, d'assimilation et de production nette conduisent globalement à une décroissance exponentielle de l'énergie disponible le long des chaînes trophiques, ce qui limite mathématiquement le nombre de maillons trophiques d'un écosystème (rarement supérieur à 5).

---

## 💡 3. Méthodes classiques de résolution

1.  **Étude des pyramides écologiques (niveaux trophiques) :**
    *   *Méthode :* Toujours vérifier s'il s'agit d'une pyramide de nombres, de biomasses ou d'énergies.
    *   *Attention :* Une pyramide de biomasse peut être inversée (ex. : milieu marin ouvert où le phytoplancton, à très forte productivité mais faible biomasse instantanée, soutient une biomasse importante de zooplancton). En revanche, la pyramide des flux énergétiques est *toujours* droite (loi de la thermodynamique).
2.  **Modélisation de la dynamique des populations (Capture-Marquage-Recaptage / Méthode de Lincoln-Petersen) :**
    *   *Formule fondamentale :* Si on capture $M$ individus lors d'une première session, qu'on les marque et les relâche, puis que lors d'une seconde session on capture un échantillon de taille $n$ contenant $m$ individus marqués :
        $$\frac{N_{total}}{M} \approx \frac{n}{m} \implies N_{total} = \frac{M \times n}{m}$$
    *   *Conditions d'application rigoureuses à mentionner aux concours :* Population fermée (pas d'immigration, émigration, naissance ou mort entre les deux sessions), marquage inaltérable et n'altérant pas la survie ou la catchabilité des individus, mélange homogène de la population.

---

## ⚠️ 4. Pièges classiques aux Concours

*   **Confondre flux de matière et flux d'énergie :** Dire que "l'énergie est recyclée" constitue une faute scientifique éliminatoire. L'énergie est dégradée sous forme de chaleur (entropie croissante, second principe de la thermodynamique) et doit être constamment apportée par le rayonnement solaire.
*   **Oublier les hypothèses restrictives des modèles de Lotka-Volterra :** Les modèles de dynamique des populations sont déterministes et continus. Ne jamais affirmer qu'ils prédisent la réalité exacte d'un écosystème naturel, qui est soumis à des perturbations stochastiques (aléatoires) et à des hétérogénéités spatiales.
*   **Interprétation abusive de la diversité spécifique :** Un indice de diversité de Shannon-Weaver élevé ne garantit pas à lui seul la "bonne santé" ou la stabilité d'un écosystème. Il convient de croiser cette mesure avec l'équitabilité (répartition des effectifs) et la composition fonctionnelle des espèces.
*   **Mauvais emploi du terme "Niche écologique" :** La niche ne désigne pas *l'habitat* (l'adresse de l'espèce, ou biotope), mais *la fonction* de l'espèce dans l'écosystème (son "métier", incluant son régime alimentaire, ses rythmes d'activité, ses tolérances physiologiques).