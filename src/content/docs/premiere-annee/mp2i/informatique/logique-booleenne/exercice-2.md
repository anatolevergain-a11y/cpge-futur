---
title: 'Exercice 2 : Circuits combinatoires et séquentiels'
description: 'Problème d entraînement type concours.'
---

# Problème : Analyse, synthèse et limitations physiques d'un processeur arithmétique synchrone

**Mots-clés :** Algèbre de Boole, tables de vérité, portes logiques, délais de propagation, aléas (glitches), bascules D, circuits séquentiels synchrones, métastabilité.

---

## I. Énoncé et contexte industriel

Dans le cadre de la conception d'un microcontrôleur embarqué destiné à des applications aéronautiques critiques (ex. : calculateur de vol redondant), on s'intéresse à la réalisation d'une unité de traitement arithmétique élémentaire. Le cahier des charges impose une architecture synchrone cadencée par une horloge principale $CLK$. 

L'objectif de ce problème est de concevoir un circuit combinatoire effectuant une opération logique et arithmétique sur des mots de $2$ bits, puis de l'insérer dans un pipeline synchrone à l'aide de bascules. Enfin, une étude critique des performances temporelles et des limitations physiques (délais, consommation, métastabilité) sera menée, conformément aux exigences de fiabilité des systèmes temps réel.

---

## II. Questions

### Partie A : Synthèse et optimisation d'un circuit combinatoire

On considère une unité arithmétique qui prend en entrée deux mots de $2$ bits $A = (A_1, A_0)_2$ et $B = (B_1, B_0)_2$ (où $A_1$ et $B_1$ sont les bits de poids fort), ainsi qu'un signal de commande $C \in \{0, 1\}$. 
Le circuit génère un signal de sortie sur $2$ bits $S = (S_1, S_0)_2$ et un indicateur de dépassement $V \in \{0, 1\}$ (Overflow).

La fonction réalisée dépend de $C$ :
* Si $C = 0$ : Le circuit réalise l'addition non signée $S = A + B$ (avec $V = 1$ en cas de retenue sortante de la position $1$).
* Si $C = 1$ : Le circuit réalise la soustraction $S = A - B$ (arithmétique modulo $4$, avec $V = 1$ si le résultat nécessite un emprunt non gérable par le format, modélisé ici par $A < B$).

1. **[Rappel de cours]** Exprimer la table de vérité complète du bit de poids faible $S_0$ en fonction de $A_0$, $B_0$ et $C$. En déduire une expression algébrique simplifiée de $S_0$ en logique standard.
2. **[Manipulation booléenne]** Établir la table de vérité du signal de dépassement $V$ en fonction de $A_1, A_0, B_1, B_0$ et $C$. 
3. Utiliser un tableau de Karnaugh pour simplifier l'expression de $V$ dans le cas où $C = 0$ (addition). Donner l'expression irréductible sous forme disjonctive (Somme de Produits).
4. **[Analyse critique]** Les portes logiques utilisées (technologie CMOS) présentent un temps de propagation unitaire noté $\tau_p = 100\text{ ps}$. En déduire le chemin critique (délai maximal de propagation) du bloc combinatoire calculant $V$ dans le pire des cas, et discuter de l'impact de ce délai sur la fréquence maximale d'horloge du système.

---

### Partie B : Intégration séquentielle et registres

On souhaite mémoriser les résultats pour stabiliser les entrées d'un bus aval. On insère des bascules D déclenchées sur le flront montant de l'horloge $CLK$.

5. **[Architecture séquentielle]** Rappeler la table caractéristique d'une bascule D et son équation d'état $Q_{n+1} = f(D, Q_n)$.
6. Schématiser l'interconnexion entre le bloc combinatoire précédent et un registre de sortie constitué de $3$ bascules D (pour mémoriser $S_1, S_0$ et $V$). Préciser le rôle fondamental du signal d'horloge $CLK$.
7. **[Contraintes temporelles]** Soit $T_{CLK}$ la période de l'horloge. Le constructeur des bascules D fournit les caractéristiques temporelles suivantes :
   * Temps de setup (pré-positionnement) : $t_{\text{setup}} = 50\text{ ps}$
   * Temps de hold (maintien) : $t_{\text{hold}} = 20\text{ ps}$
   * Temps de propagation interne de la bascule : $t_{\text{co}} = 80\text{ ps}$
   
   En notant $t_{\text{comb}}$ le délai de propagation combinatoire maximal de l'ensemble du circuit, établir l'inéquation fondamentale garantissant l'absence de violation temporelle (violation de setup) dans le circuit synchrone.

---

### Partie C : Analyse critique et limites physiques

8. **[Phénomène transitoire]** Lors d'un changement simultané des entrées $A$ et $B$, des aléas logiques (ou *glitches*) peuvent apparaître sur les sorties combinatoires avant l'établissement du régime permanent. Expliquer pourquoi ces aléas ne corrompent pas le système synchrone si la période d'horloge est respectée, mais préciser le danger majeur qu'ils représentent si les signaux de commande ou d'horloge sont mal routés.
9. **[Fiabilité - Métastabilité]** Le signal de commande $C$ provient d'un circuit asynchrone externe. 
   * Expliquer brièvement le phénomène de métastabilité au sein d'une bascule D.
   * Proposer une solution architecturale standard (utilisée dans les systèmes industriels critiques) pour mitiger ce risque avant d'exploiter le signal $C$ dans le cœur synchrone.

---

## III. Pistes et indications

* **Q1-Q3 :** Pour l'addition, $S_0$ correspond à un ou exclusif (XOR) entre $A_0$ et $B_0$ (le signal $C$ n'intervient pas pour $S_0$ car $A_0 + B_0$ ou $A_0 - B_0$ modulo $2$ donne le même résultat XOR). Pour $V$, séparez l'analyse selon la valeur de $C$.
* **Q4 :** Comptez le nombre maximal de niveaux de portes logiques traversés par un signal de la pire entrée jusqu'à $V$.
* **Q7 :** L'inéquation de setup s'écrit : $t_{\text{co}} + t_{\text{comb}} + t_{\text{setup}} \le T_{CLK}$.
* **Q9 :** Pensez aux chaînes de synchronisation (synchronizer chains) à deux ou trois étages de bascules en cascade.

---

## IV. Corrigé détaillé

### Partie A : Synthèse et optimisation d'un circuit combinatoire

1. **Calcul de $S_0$ :**
   Que l'on effectue une addition ou une soustraction sur des nombres de 2 bits, le bit de poids faible $S_0$ est la somme modulo 2 de $A_0$ et $B_0$ (en arithmétique binaire, $+1$ et $-1$ mod 2 reviennent au même, l'emprunt ou la retenue n'impactant que le poids supérieur).
   Table de vérité :
   $S_0 = A_0 \oplus B_0$.
   En logique de base : $S_0 = (\overline{A_0} \cdot B_0) + (A_0 \cdot \overline{B_0})$.

2. **Table de vérité de $V$ :**
   * Si $C = 0$ ($S = A + B$), $V = 1$ si $A+B \ge 4$, c'est-à-dire si $A_1 = 1$ et $B_1 = 1$ (ou dans certains cas de propagation de retenue, mais ici avec $2$ bits, $1+1+1$ max n'existe pas, $1+1 = 2 < 4$, donc $V=1$ si $A_1 B_1 = 1$ ? Attention : $1_2 + 3_2 = 4_{10} = 100_2$, donc $A=(01)_2, B=(11)_2 \implies 01+11 = 100$ ($V=1$). Plus rigoureusement, l'addition maximale est $(11)_2 + (11)_2 = (110)_2$, le bit de poids 2 est le dépassement $V$.
   * Si $C = 1$ ($S = A - B$), $V = 1$ si $A < B$.

3. **Tableau de Karnaugh pour $V$ ($C=0$) :**
   Pour $C=0$, $V = 1$ si $A+B \ge 4$. 
   Les configurations avec $V=1$ pour $A+B \ge 4$ :
   * $(10)_2 + (10)_2 = 4 \implies V=1$
   * $(10)_2 + (11)_2 = 5 \implies V=1$
   * $(11)_2 + (10)_2 = 5 \implies V=1$
   * $(11)_2 + (11)_2 = 6 \implies V=1$
   L'expression simplifiée par Karnaugh donne : $V_{C=0} = A_1 \cdot B_1 + A_1 \cdot B_0 \cdot A_0$ (simplifiable en $A_1 \cdot B_1$ selon la définition exacte du dépassement sur 2 bits non signés, puisque $1+3=4$ (retenue), $2+2=4$ (retenue)). Plus précisément, $V = A_1 B_1 + A_1 B_0 + B_1 A_0$ (vérification : si $A=(10)$ et $B=(10)$, $A_1B_1=1$; si $A=(01)$ et $B=(11)$, $01+11=100$, ici $A_1=0$, mais $A < B$ ? Non, $C=0$ donc addition : $01+11 = 4$, dépassement ! Donc $V=1$ pour $A=(01)$ et $B=(11)$. L'expression exacte par Karnaugh est : $V = A_1 B_1 + A_1 B_0 + A_0 B_1$ (pour $A+B \ge 4$).

4. **Analyse du chemin critique :**
   L'expression $V = A_1 B_1 + A_1 B_0 + A_0 B_1$ nécessite un niveau de portes ET (produits) suivi d'un niveau de portes OU (somme). Soit $2$ niveaux logiques.
   Délai maximal : $t_{\text{comb}} = 2 \times \tau_p = 2 \times 100\text{ ps} = 200\text{ ps}$.
   Ce délai fixe la limite inférieure de la période d'horloge. Avec une telle rapidité, le circuit peut théoriquement tourner à des fréquences très élevées ($f_{\max} > 4\text{ GHz}$ si l'on néglige les temps des bascules), ce qui est parfaitement compatible avec des processeurs modernes.

---

### Partie B : Intégration séquentielle et registres

5. **Bascule D :**
   La table caractéristique est $Q_{n+1} = D$. Au flanc montant de l'horloge, la valeur présente sur l'entrée $D$ est capturée et transférée sur la sortie $Q$.

6. **Architecture synchrone :**
   Les entrées $A$, $B$ et $C$ entrent dans le bloc combinatoire. Les sorties de ce bloc ($S_1, S_0, V$) sont connectées aux entrées $D$ de trois bascules D. Le signal $CLK$ est relié en commun à l'entrée d'horloge de ces bascules pour assurer le cadencement simultané.

7. **Contrainte temporelle (Setup) :**
   L'inéquation fondamentale de synchronisation est :
   $$t_{\text{co}} + t_{\text{comb}} + t_{\text{setup}} \le T_{CLK}$$
   A.N. : $80\text{ ps} + 200\text{ ps} + 50\text{ ps} = 330\text{ ps}$.
   La période d'horloge minimale est donc $T_{CLK,\min} = 330\text{ ps}$, soit une fréquence maximale de $f_{\max} \approx 3,03\text{ GHz}$.

---

### Partie C : Analyse critique et limites physiques

8. **Aléas logiques (*glitches*) :**
   Les retards de propagation variables dans les portes du circuit combinatoire font que certaines combinaisons transitoires non désirées apparaissent brièvement (ex: $0 \to 1 \to 0$). 
   * *Impact dans un système synchrone :* Tant que les glitches se résorbent avant la fin de la période et le respect du temps de setup, les bascules échantillonnent la sortie en régime permanent. Le glitch est filtré.
   * *Danger :* Si un glitch se produit sur la ligne d'horloge ou sur un signal de réinitialisation (Reset), il peut provoquer un déclenchement intempestif de la bascule, corrompant l'état interne de la machine.

9. **Métastabilité :**
   * *Phénomène :* Si un signal asynchrone (comme $C$) change d'état juste au moment du flanc d'horloge (violation des temps de setup/hold), la sortie de la bascule peut se retrouver dans un état intermédiaire indéterminé ($V_{DD}/2$) et y demeurer un temps aléatoire avant de retomber à 0 ou 1.
   * *Solution industrielle :* On utilise un **synchroniseur à double étage** (*two-flop synchronizer*), consistant à placer deux bascules D en cascade sur le signal asynchrone, cadencées par la même horloge. La probabilité qu'un état métastable persiste au-delà d'un cycle d'horloge devient alors négligeable pour la fiabilité du système.