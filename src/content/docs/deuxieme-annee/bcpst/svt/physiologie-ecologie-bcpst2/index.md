---
title: 'Cours : Physiologie, Écologie globale et Évolution'
description: 'Synthèse officielle du cours et démonstrations clés.'
---

# Fiche de Cours : Physiologie, Écologie globale et Évolution
Classe: ** BCPST 2 (Deuxième année)  
**Matière :** Sciences de la Vie et de la Terre (SVT)  

---

## Introduction

L'écologie globale et l'évolution s'articulent autour de la compréhension des interactions entre les organismes vivants et leur environnement à l'échelle macroscopique et biogéochimique. La physiologie des organismes fournit les bases mécanistiques (fonctionnelles et énergétiques) qui expliquent leur distribution écologique, leurs réponses aux pressions de sélection et, par conséquent, les trajectoires évolutives des populations et des écosystèmes.

---

## I. Énergétique et Métabolisme à l'échelle globale

### 1. Productivité des écosystèmes
La biomasse et le flux d'énergie dans la biosphère reposent initialement sur la productivité primaire. On distingue :
*   **La Productivité Brute (PPB / GPP) :** Quantité totale de carbone fixée par la photosynthèse par unité de temps et de surface.
*   **La Productivité Nette (PPN / NPP) :** Énergie (ou biomasse) restante après déduction de la respiration autotrophe ($R_a$) :
    $$\text{PPN} = \text{PPB} - R_a$$

À l'échelle globale, la PPN est fortement déterminée par des facteurs abiotiques : l'évapotranspiration réelle (couplage température-précipitations) pour les écosystèmes terrestres, et la disponibilité en nutriments limitants (nitrates, phosphates) et en lumière pour les écosystèmes aquatiques.

### 2. Efficacité trophique et flux de matière
Le long des chaînes trophiques, le transfert d'énergie est caractérisé par la **loi des 10 %** (efficacité écologique). L'énergie assimilée par un niveau trophique $n$ est convertie en biomasse pour le niveau $n+1$ avec un rendement faible, limité par :
*   La respiration cellulaire (thermodynamique : dissipation sous forme de chaleur).
*   L'eGESTION (matière fécale non assimilée).

Cela explique la structure pyramidale des biomasses et des flux énergétiques, ainsi que la vulnérabilité des grands prédateurs aux perturbations globales (fragmentation des habitats).

---

## II. Écologie fonctionnelle et Réponses physiologiques face aux changements globaux

### 1. Tolérance et plasticité phénotypique
La loi de tolérance de Shelford définit les limites des facteurs environnementaux (température, salinité, pH) au-delà desquelles un organisme ne peut survivre. 
*   **Aclimatation :** Modification physiologique réversible (ex: régulation de l'expression de protéines de choc thermique - *Hsp*, ajustement de la morphologie foliaire) permettant de faire face au stress environnemental.
*   **Adaptation :** Sélection darwinienne de variants génétiques avantageux au sein d'une population au fil des générations.

### 2. Stratégies d'adaptation thermique (Exemple du changement climatique)
Les organismes ectothermes et endothermes disposent de réponses physiologiques distinctes face à l'augmentation des températures globales :
*   **Règle de Bergmann :** À l'échelle intraspécifique, les individus des zones froides ont tendance à être plus grands (minimisation du rapport surface/volume pour limiter les pertes de chaleur).
*   **Plasticité métabolique :** Augmentation du métabolisme basal à court terme selon la température (Q10), pouvant mener à un épuisement énergétique si les ressources trophiques ne suivent pas (*mismatch* phénologique).

---

## III. Écologie des populations et Dynamique évolutive

### 1. Modélisation de la croissance démographique
La dynamique d'une population de taille $N$ au cours du temps $t$ s'exprime par le modèle logistique (prenant en compte la capacité charge $K$ de l'environnement) :
$$\frac{dN}{dt} = r N \left( 1 - \frac{N}{K} \right)$$
Où $r$ est le taux intrinsèque d'accroissement naturel. 

### 2. Sélection $r$ et Sélection $K$
L'évolution façonne des stratégies démographiques en réponse aux pressions écologiques :
*   **Sélection $r$ :** Milieux instables ou imprévisibles. Forte allocation énergétique vers la reproduction, descendance nombreuse, investissement parental faible, cycles de vie courts.
*   **Sélection $K$ :** Milieux stables à saturation. Faible taux de reproduction, forte investissement parental, longévité élevée, compétitivité forte.

### 3. Évolution et Adaptation locale
La génétique des populations étudie l'effet des forces évolutives (dérive génétique, sélection naturelle, flux de gènes, mutations) sur la structure des populations. 
*   La **sélection divergente** entre deux habitats contigus peut mener à l'isolement reproducteur et à la spéciation écologique (spéciation sympatrique ou parapatrique).

---

## IV. Cycles biogéochimiques et Rétroactions (Feedbacks)

Les processus physiologiques individuels dictent les flux globaux de matière :

1.  **Le cycle du carbone :** La photosynthèse (fixation du $CO_2$ atmosphérique en $\text{CH}_2\text{O}$) et la respiration (libération) constituent les flux majeurs. Les perturbations anthropiques (combustion d'énergies fossiles, déforestation) rompent l'équilibre de ce cycle.
2.  **Rétroactions climatiques (*Feedbacks*) :**
    *   *Exemple positif (amplificateur) :* Le réchauffement climatique induit le dégel du permafrost $\rightarrow$ décomposition microbienne accrue de la matière organique $\rightarrow$ libération de méthane ($\text{CH}_4$) et de $\text{CO}_2$ $\rightarrow$ accentuation de l'effet de serre.
    *   *Exemple négatif (régulateur) :* L'augmentation du $\text{CO}_2$ atmosphérique stimule la fertilisation carbonée des plantes (dans certaines limites) et la séquestration accrue, bien que souvent tamponnée par d'autres facteurs limitants (eau, azote).

---

## Démonstration / Analyse clé : Le modèle de l'île biogéographique (MacArthur & Wilson)

Le nombre d'espèces $S$ sur une île (ou un fragment d'habitat) résulte d'un équilibre dynamique entre le taux d'immigration ($I$) des nouvelles espèces et le taux d'extinction ($E$) des espèces déjà présentes.

À l'équilibre, le taux d'extinction croît avec le nombre d'espèces présentes (compétition accrue, populations plus petites donc plus sujettes à la dérive), tandis que le taux d'immigration diminue (les espèces arrivant ont de plus en plus de probabilité d'être déjà présentes).

$$\left. \frac{dS}{dt} = I(S) - E(S) \right|_{S=S^* \text{ où } I(S^*) = E(S^*)}$$

**Conséquences évolutives :**
*   Les îles isolées (faible $I$) favorisent l'endémisme et la spéciation par radiation adaptive.
*   La petite taille des îles augmente le taux d'extinction $E$, ce qui explique la vulnérabilité des écosystèmes insulaires ou fragmentés face aux crises écologiques actuelles (Anthropocène).