---
title: 'Exercice 1 : Algèbre de Boole'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Analyse formelle et optimisation d'un circuit combinatoire à contraintes industrielles

**Filière :** MP2I  
**Matière :** Informatique — Logique et circuits  
**Thème :** Algèbre de Boole, formes canoniques et complexité matérielle  

---

## Énoncé

Dans le cadre de la conception d'un système critique de commande pour une unité de traitement chimique, on cherche à implémenter une fonction logique de sécurité à $4$ entrées booléennes $E = \{a, b, c, d\}$, notée $f$. 

Le cahier des charges impose que la sortie $f(a, b, c, d)$ soit à $1$ si et seulement si le nombre d'entrées positionnées à $1$ est **impair**, ou si les entrées satisfont une condition critique particulière : $(a \land b) \lor (\neg c \land d)$.

Cependant, le circuit physique final sera implémenté sur un réseau logique programmable (FPGA) bas de gamme ou en logique redondante à diodes, où chaque porte logique (ET, OU, NON) engendre un délai de propagation non négligeable et une consommation énergétique proportionnelle au nombre de transistors. Une analyse critique des ordres de grandeur s'avère donc indispensable avant la phase de synthèse matérielle.

---

## Questions

### I. Formalisation mathématique et tables de vérité
1. Exprimer la condition « le nombre d'entrées à $1$ est impair » à l'aide d'opérations booléennes usuelles. En déduire l'expression analytique non simplifiée de $f(a, b, c, d)$.
2. Donner la première forme canonique (Somme de Mintermes) de la fonction $f$.

### II. Simplification algébrique et Karnaugh
3. À l'aide d'un tableau de Karnaugh, déterminer une forme disjonctive minimale (somme de produits) pour la fonction $f$.
4. Proposer une factorisation de cette expression visant à minimiser le nombre total d'opérateurs (portes logiques).

### III. Analyse critique et limites du modèle physique
5. **Ordres de grandeur et propagation :** On suppose que chaque porte NON a un délai de propagation $\tau_{\text{NOT}} = 1\text{ ns}$, chaque porte ET à 2 entrées $\tau_{\text{AND}} = 2\text{ ns}$, et chaque porte OU $\tau_{\text{OR}} = 2\text{ ns}$. Calculer le délai critique du circuit non optimisé (Q1) versus le circuit optimisé (Q4). Conclure sur l'intérêt de la réduction algébrique.
6. **Analyse critique des limites :** En pratique industrielle, le modèle booléen syn idéal omet certains phénomènes physiques. Citer deux de ces limites majeures (par exemple liées au timing ou à l'électricité) qui pourraient faire faillir le circuit sur silicium malgré une correction mathématique parfaite, et proposer une piste pour y remédier.

---

## Pistes et indications

* **Indication 1 :** Pour la parité, pensez à l'opérateur XOR ($\oplus$) ou à l'analyse par combinaisons.
* **Indication 2 :** Un tableau de Karnaugh à 4 variables se représente sous forme d'une grille $4 \times 4$ respectant le code de Gray sur les lignes et les colonnes.
* **Indication 3 :** Pour le calcul du délai critique, déterminez le chemin logique le plus long (en nombre de niveaux de portes) de l'entrée vers la sortie.

---

## Corrigé pas à pas

### I. Formalisation mathématique et tables de vérité

1. **Expression initiale :**
   Le nombre d'entrées à $1$ est impair si la somme modulo 2 des variables est égale à 1, ce qui correspond mathématiquement à $a \oplus b \oplus c \oplus d$. 
   La condition globale est donc :
   $$f(a, b, c, d) = (a \oplus b \oplus c \oplus d) \lor ((a \land b) \lor (\neg c \land d))$$

2. **Première forme canonique (Somme de Mintermes) :**
   Listons les configurations où $f = 1$. L'analyse des deux sous-partie mène à dresser l'ensemble des mintermes $m_i$ pour $i \in \{0, 1, \dots, 15\}$. 
   En évaluant $f$ pour chaque combinaison, on obtient la première forme canonique sous la forme d'un sommation de mintermes :
   $$f(a, b, c, d) = \sum m(1, 2, 4, 7, 8, 11, 13, 14, 15)$$
   *(Vérification par les bits : par exemple, pour $7$ (0111), le nombre de 1 est 3 (impair), donc $f(7)=1$. Pour $15$ (1111), le nombre de 1 est 4 (pair), mais $(a \land b) = (1 \land 1) = 1$, donc $f(15)=1$.)*

---

### II. Simplification algébrique et Karnaugh

3. **Tableau de Karnaugh :**
   Traçons le tableau pour $ab$ en lignes et $cd$ en colonnes (codes de Gray : 00, 01, 11, 10) :

| $ab \setminus cd$ | 00 | 01 | 11 | 10 |
| :---: | :---: | :---: | :---: | :---: |
| **00** | 0 | 1 | 0 | 1 |
| **01** | 1 | 0 | 1 | 0 |
| **11** | 0 | 1 | 1 | 1 |
| **10** | 1 | 0 | 1 | 1 |

   *Regroupements optimaux (cases à 1) :*
   - Le minterme isolé ou les adjacences permettent d'extraire les implicants premiers. 
   - On obtient après regroupement des blocs de taille 1, 2 ou 4 l'expression minimale :
   $$f(a, b, c, d) = (a \land \neg c) \lor (\neg a \land c) \lor (b \land d) \lor (\neg b \land \neg d) \lor (a \land b \land d) \lor \dots$$
   *(Plus rigoureusement via l'algèbre de Boole ou les implicants primordiaux minimisés)* :
   $$f(a, b, c, d) = (a \oplus c) \lor (b \iff d) \lor (a \land b \land d)$$
   *(Note : $b \iff d$ équivaut à $\neg(b \oplus d)$ ou $(b \land d) \lor (\neg b \land \neg d)$).*

4. **Factorisation pour minimisation matérielle :**
   En réorganisant l'expression pour mutualiser les portes :
   $$f(a, b, c, d) = (a \oplus c) \lor (\neg(b \oplus d)) \lor (a \land b \land d)$$

---

### III. Analyse critique et limites du modèle physique

5. **Analyse des ordres de grandeur (Délais de propagation) :**
   - **Circuit non optimisé (Q1 brut) :** L'implémentation naïve de $a \oplus b \oplus c \oplus d$ nécessite des portes XOR en cascade (ou décomposition en ET/OU/NOT), menant à un chemin critique profond. Avec des portes basiques, on atteint aisément un chemin critique de l'ordre de **$\tau_{\text{crit, naïf}} \approx 12\text{ ns à } 16\text{ ns}$**.
   - **Circuit optimisé (Q4) :** L'utilisation de portes XOR/XNOR optimisées et d'une structure à 2 niveaux logiques majeurs réduit le chemin critique à :
     $$\tau_{\text{crit, opt}} = \max(\tau_{\text{XOR}}, \tau_{\text{XNOR}}, \tau_{\text{AND3}}) + \tau_{\text{OR}} \approx 2\text{ ns} + 2\text{ ns} = 4\text{ ns}$$
Conclusion: * La réduction algébrique divise par un facteur 3 à 4 le délai de propagation, ce qui permet de multiplier par autant la fréquence maximale d'horloge du système de sécurité.

6. **Analyse critique des limites du modèle booléen :**
   Le modèle de l'algèbre de Boole est purement combinatoire et synchrone idéal. Sur silicium, deux limites majeures apparaissent :
   * **Les aléas statiques (glitches / hazards) :** Lors de transitions d'entrées (par exemple de $0111$ à $1111$), les délais différentiels de propagation à travers les portes NON et ET peuvent provoquer des micro-coupures ou des impulsions parasites transitoires (passage fugitif de $1$ à $0$ puis $1$). Dans un système chimique critique, une telle impulsion parasite peut être interprétée à tort comme un ordre d'arrêt d'urgence.
   * **La charge capacitive et la fan-out (facteur de charge) :** Si une variable (ex: $a$) est connectée à un trop grand nombre de portes, le courant de charge des capacités parasites de grille augmente, augmentant $\tau$ et invalidant l'hypothèse de temps de propagation constants.
   * *Remède :* Utilisation de registres synchrones (bascules D) en sortie pour échantillonner le signal à un instant où les régimes transitoires sont éteints, et ajout de termes de redondance (implicants consensus) pour éliminer les aléas statiques par construction.