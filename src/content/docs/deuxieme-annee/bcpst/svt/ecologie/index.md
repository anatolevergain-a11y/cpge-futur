---
title: 'Cours : Écologie'
description: 'Synthèse de cours, théorèmes et démonstrations.'
---

# Fiche de Cours : Écologie (BCPST 2)

> **Avertissement du professeur :** En BCPST, l'écologie n'est pas une science descriptive mais une discipline quantitative et causale. Vos copies doivent mobiliser un vocabulaire précis, des modèles mathématiques rigoureux et une distinction claire entre les niveaux d'organisation (individus, populations, communautés, écosystèmes).

---

## I. Écologie des populations

### A. Définitions et démographie

*   **Population :** Ensemble d'individus de la même espèce, occupant une même aire géographique au même moment et interagissant de manière effective (reproduction).
*   **Structure d'une population :** Décrite par sa taille ($N$), sa densité ($d = N/\text{surface}$ ou $N/\text{volume}$), sa structure spatiale et sa structure démographique (classes d'âge et de sexe).
*   **Tableau de survie :** Outil actuariel décrivant la probabilité de survie en fonction de l'âge.
    *   $x$ : classe d'âge.
    *   $n_x$ : nombre d'individus survivants à l'âge $x$.
    *   $l_x = n_x / n_0$ : taux de survie standardisé ($l_0 = 1$).
    *   $d_x = n_x - n_{x+1}$ : nombre de morts entre $x$ et $x+1$.
    *   $q_x = d_x / n_x$ : taux de mortalité spécifique à l'âge $x$.

### B. Modèles de croissance démographique

#### 1. Modèle exponentiel (Malthusien)
*   **Hypothèses :** Milieu illimité, ressources infinis, taux de natalité ($b$) et de mortalité ($d$) constants.
*   **Équation différentielle :** 
    $$\frac{dN}{dt} = (b - d)N = rN$$
    *(avec $r$ le taux intrinsèque d'accroissement naturel).*
*   **Solution analytique :**
    $$N(t) = N_0 e^{rt}$$

#### 2. Modèle logistique (Verhulst)
*   **Hypothèses :** Prise en compte de la raréfaction des ressources et de la capacité limite du milieu ($K$).
*   **Équation différentielle :**
    $$\frac{dN}{dt} = rN \left(1 - \frac{N}{K}\right)$$
*   **Étude qualitative :**
    *   Si $N \ll K$, $\frac{dN}{dt} \approx rN$ (croissance quasi-exponentielle).
    *   Si $N \to K$, $\frac{dN}{dt} \to 0$ (le point d'équilibre $N^* = K$ est un attractor stable).
    *   Point d'inflexion à $N = K/2$ (vitesse maximale d'accroissement de la population).

---

## II. Écologie des communautés (Biocénose)

### A. Interactions interspécifiques

Soit une interaction entre deux espèces $1$ et $2$ caractérisée par l'effet de l'une sur l'autre ($+$ : positif, $-$ : négatif, $0$ : neutre).

| Interaction | Espèce 1 | Espèce 2 | Modélisation canonique (Lotka-Volterra) |
| :--- | :---: | :---: | :--- |
| **Compétition** | $-$ | $-$ | $\frac{dN_1}{dt} = r_1 N_1 \left(1 - \frac{N_1 + \alpha_{12}N_2}{K_1}\right)$ |
| **Prédation / Parasitisme** | $+$ | $-$ | $\frac{dN_1}{dt} = r_1 N_1 - a N_1 N_2$ (Proie) <br> $\frac{dN_2}{dt} = fa N_1 N_2 - d_2 N_2$ (Prédateur) |
| **Mutualisme / Symbiose**| $+$ | $+$ | Termes d'interaction positifs croisés |
| **Commensalisme** | $+$ | $0$ | $\frac{dN_1}{dt} = r_1 N_1 (1 - N_1/K_1) + \beta N_1 N_2$ |
| **Amensalisme** | $-$ | $0$ | Ex : Allélopathie (exsudats racinaires inhibiteurs) |

### B. Théorèmes fondamentaux

*   **Théorème de Gause (Principe d'exclusion compétitive) :** 
    > Deux espèces occupant exactement la même niche écologique (compétiteurs complets) ne peuvent coexister durablement dans un milieu homogène ; l'une finira par éliminer l'autre.
*   **Concept de Niche écologique (Hutchinson) :**
    *   *Niche fondamentale* : Hypervolume multidimensionnel défini par les tolérances abiotiques de l'espèce en l'absence de toute interaction.
    *   *Niche réalisée* : Portion de la niche fondamentale réellement occupée par l'espèce après prise en compte des interactions biotiques (compétition, prédation).

---

## III. Écologie des écosystèmes

### A. Flux d'énergie

*   **Productivité Primaire Brute (PPB) :** Quantité totale d'énergie fixée par la photosynthèse (ou chimiosynthèse) par unité de temps et de surface.
*   **Productivité Primaire Nette (PPN) :** Énergie réellement stockée sous forme de biomasse végétale après déduction de la respiration cellulaire ($R$) :
    $$\text{PPN} = \text{PPB} - R$$
*   **Rendement écologique (Loi de Lindeman) :** 
    Le transfert d'énergie d'un niveau trophique $n$ vers le niveau supérieur $n+1$ est inefficace. Seuls **10% environ** (loi des 10%) de l'énergie sont convertis en biomasse au niveau supérieur (pertes par respiration, excretion, non-consommation).

### B. Cycles biogéochimiques

*   **Cycle du Carbone :** Réservoirs majeurs (lithosphère, océans, biosphère, atmosphère). Flux anthropiques (combustion d'énergies fossiles, déforestation) perturbant l'équilibre climatique.
*   **Cycle de l'Azote ($\text{N}_2$) :** 
    *   *Fixation* : Conversion de $\text{N}_2$ atmosphérique en $\text{NH}_4^+$ par des bactéries fixatrices (ex: *Rhizobium* en symbiorne avec les Fabacées).
    *   *Nitrification* : Oxydation de $\text{NH}_4^+$ en $\text{NO}_2^-$ (nitritation par *Nitrosomonas*) puis en $\text{NO}_3^-$ (nitratation par *Nitrobacter*).
    *   *Dénitrification* : Réduction des $\text{NO}_3^-$ en $\text{N}_2$ gazeux par des bactéries anaérobies.

---

## IV. Méthodes et Savoir-faire

1.  **Estimation d'effectifs (Méthode de capture-marquage-recapture ou CMR) :**
    *   Session 1 : Capture de $M$ individus, marquage et relâché.
    *   Session 2 : Capture de $n$ individus, dont $m$ sont marqués.
    *   Estimation de la taille totale de la population $N$ par proportionnalité (hypothèse d'une population fermée et équiprobabilité de capture) :
        $$\frac{m}{n} = \frac{M}{N} \implies N = \frac{M \times n}{m}$$

2.  **Indice de diversité (ex: Indice de Shannon-Weaver $H'$ ou de Simpson) :**
    *   Permet de quantifier la biodiversité spécifique d'une communauté.
    *   $H' = -\sum_{i=1}^{S} p_i \log_2(p_i)$ avec $p_i = \frac{n_i}{N}$ (proportion de l'espèce $i$, $S$ étant le nombre total d'espèces).

---

## V. Pièges à éviter (Attention aux erreurs classiques en colles et concours)

*   **Piège 1 :** Confondre *Biomasse* et *Productivité*. Une forêt tropicale a une biomasse énorme, mais une PPN parfois équivalente à un écosystème plus jeune en phase de colonisation rapide, car $R$ est très élevé.
*   **Piège 2 :** Oublier que la capacité limite $K$ n'est pas une constante absolue. Elle dépend des conditions abiotiques du milieu et peut varier dans le temps.
*   **Piège 3 :** Dans le modèle de Lotka-Volterra de prédation, les courbes $N_1(t)$ et $N_2(t)$ sont déphasées (le pic de proies précède toujours le pic de prédateurs). Ne jamais dessiner les deux pics en même temps !
*   **Piège 4 :** Parler d'"adaptation" d'un individu au cours de sa vie dans un sens lamarckien en écologie évolutive. L'écologie étudie la sélection de traits phénotypiques préexistants par le filtre environnemental.