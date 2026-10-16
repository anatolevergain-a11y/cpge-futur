---
title: 'Exercice 1 : Arbres binaires de recherche (ABR)'
description: 'Problème d entraînement type concours pour MP2I.'
---

### 🌐 Énoncé du problème / Étude de cas

Les Arbres Binaires de Recherche (ABR) constituent une structure de données fondamentale en informatique pour implémenter des dictionnaires dynamiques. Dans le cadre de ce problème, nous nous intéressons à l'utilisation d'ABR pour indexer de grands volumes de métadonnées au sein d'un système de stockage distribué. 

Soit $N$ le nombre de clés insérées dans l'ABR. Dans un contexte industriel (par exemple, l'indexation de blocs de données de taille $\approx 4\text{ Ko}$ sur des disques SSD NVMe), la profondeur de l'arbre a un impact direct sur la latence des requêtes de lecture. En effet, chaque nœud traversé lors d'une recherche correspond à une saut en mémoire ou à un accès disque si l'arbre ne tient pas entièrement en mémoire vive (RAM).

Cependant, le modèle classique de l'ABR souffre d'un écueil bien connu : si les données sont insérées de manière triée ou quasi-triée (cas fréquent pour des horodatages ou des identifiants séquentiels), l'arbre dégénère en une liste chaînée, menant à une complexité temporelle en $\mathcal{O}(N)$ pour la recherche, au lieu de $\mathcal{O}(\log_2(N))$ en moyenne.

Le problème se propose d'étudier les propriétés statistiques des ABR construits à partir de permutations aléatoires uniformes, puis d'analyser les limites de ce modèle probabiliste face à des flux de données réels, souvent corrélés.

---

### ❓ Questions progressives

#### Partie I : Définitions et invariants

1. **(1)** Rapponcer la définition inductive d'un arbre binaire de recherche étiqueté par des valeurs appartenant à un ensemble totalement ordonné.
2. **(2)** Écrire en langage OCaml un type algébrique `'a abr` représentant un ABR pouvant contenir des valeurs de type `'a`.
3. **(3)** Écrire une fonction `inserer : 'a -> 'a abr -> 'a abr` qui insère une nouvelle clé dans un ABR en préservant l'invariant de recherche. On supposera les clés deux à deux distincts pour simplifier.

#### Partie II : Analyse probabiliste de la hauteur

On considère que les $N$ clés sont insérées dans un ABR initialement vide, selon une permutation aléatoire uniforme de l'ensemble $\{1, 2, \dots, N\}$. 

4. **(4)** Soit $h$ la hauteur de l'arbre (définie comme le nombre maximal de nœuds d'un chemin de la racine à une feuille). Établir heuristiquement, en comparant avec le tri rapide (*quicksort*), l'espérance de la hauteur $\mathbb{E}[h]$ lorsque $N \to +\infty$.
5. **(5)** Dans notre système de stockage, on fixe un seuil critique de tolérance de latence : la profondeur maximale ne doit pas excéder $H_{\text{max}} = 40$ pour garantir un temps de réponse inférieur à $100\mu\text{s}$ (chaque niveau représentant un accès mémoire de $\approx 2.5\text{ ns}$). En utilisant l'approximation $\mathbb{E}[h] \approx C \ln(N)$ avec $C \approx 4.31$, estimez la taille maximale $N_{\text{max}}$ de la base de données indexée avant que le modèle probabiliste ne devienne risqué.

#### Partie III : Analyse critique et ingénierie

6. **(6)** **Esprit critique :** Dans un scénario réel de journalisation (*logs* applicatifs), les clés insérées sont des horodatages (timestamps) à la milliseconde près, générés de manière croissante. Expliquez pourquoi l'hypothèse d'une permutation aléatoire uniforme tombe en défaut dans ce cas précis. Quel est l'impact concret sur la complexité spatiale et temporelle de l'ABR ?
7. **(7)** Proposez une modification structurelle ou une alternative algorithmique standard étudiée en prépa (que l'on ne demande pas de coder) permettant de pallier cette limite industrielle, en justifiant brièvement son compromis espace/temps.

---

### 💡 Pistes & Indications

- **Q2 & Q3 :** Pensez aux constructeurs du type `Vide` et `Noeud(gauche, valeur, droit)`. L'insertion se fait par récursion structurelle en comparant la valeur à insérer avec la racine du nœud courant.
- **Q4 :** Faites le parallèle entre le choix du pivot dans le *quicksort* et la racine de l'arbre ainsi que ses sous-arbres. Le nombre de comparaisons pour trier $N$ éléments par *quicksort* est lié à la profondeur moyenne des nœuds dans l'arbre de récursion.
- **Q6 :** Analysez la forme géométrique de l'arbre lorsque les données arrivent déjà triées. Quid de la pile d'exécution en cas de récursion sur un arbre dégénéré ?

---

### 📋 Corrigé détaillé et analyse des résultats

#### Partie I : Définitions et invariants

1. **(1)** Un ABR est soit un arbre vide, soit un nœud contenant une valeur $v$, un sous-arbre gauche $g$ et un sous-arbre droit $d$ tels que :
   - Toutes les clés présentes dans $g$ sont strictement inférieures à $v$.
   - Toutes les clés présentes dans $d$ sont strictement supérieures à $v$.
   - Les sous-arbres $g$ et $d$ sont eux-mêmes des ABR.

2. **(2)** En OCaml :
```ocaml
type 'a abr =
  | Vide
  | Noeud of 'a abr * 'a * 'a abr
```

3. **(3)** Fonction d'insertion :
```ocaml
let rec inserer x = function
  | Vide -> Noeud (Vide, x, Vide)
  | Noeud (g, v, d) ->
      if x < v then Noeud (inserer x g, v, d)
      else if x > v then Noeud (g, v, inserer x d)
      else Noeud (g, v, d) (* Si x = v, on peut choisir de ne rien faire ou de l'ajouter à gauche/droite *)
```

#### Partie II : Analyse probabiliste de la hauteur

4. **(4)** L'insertion successive de $N$ éléments selon une permutation aléatoire induit une structure isomorphe à l'arbre des choix de pivots successifs lors d'un *quicksort*. La hauteur de l'ABR correspond au nombre de partitions emboîtées. On démontre mathématiquement que l'espérance de la hauteur est de l'ordre de $\mathcal{O}(\log N)$, plus précisément $\mathbb{E}[h] \sim c \ln(N)$ avec $c \approx 4.31$.

5. **(5)** On résout l'inéquation :
   $$4.31 \ln(N_{\text{max}}) \le 40 \implies \ln(N_{\text{max}}) \le \frac{40}{4.31} \approx 9.28$$
   $$N_{\text{max}} = e^{9.28} \approx 10720 \text{ clés}$$
   *Analyse critique :* Ce résultat montre que pour de faibles volumes ($10^4$ éléments), un ABR aléatoire reste très performant. Cependant, à l'échelle industrielle où $N \ge 10^8$, $\mathbb{E}[h]$ atteindrait $\approx 85$ niveaux, violant drastiquement le contrat de latence de $100\mu\text{s}$.

#### Partie III : Analyse critique et ingénierie

6. **(6)** **Analyse critique du modèle :** 
   - *Limite du modèle :* Les horodatages sont monotones croissants. L'hypothèse de "permutation aléatoire uniforme" est totalement fausse. 
   - *Conséquence géométrique :* Chaque nouvel élément est supérieur à tous les précédents. Il est systématiquement inséré dans le sous-arbre droit. L'ABR dégénère en une liste chaînée linéaire de hauteur $N$.
   - *Impact système :* La complexité temporelle de recherche passe de $\mathcal{O}(\log N)$ à $\mathcal{O}(N)$. Pire, pour de grands $N$, la récursion profonde (ou même l'utilisation de la pile système) conduit à une erreur de type *Stack Overflow* (dépilement mémoire), entraînant une rupture de service de l'application.

7. **(7)** Pour garantir des performances déterministes quelles que soient les données d'entrée, on a recours à des **arbres auto-équilibrés** (comme les arbres AVL ou les arbres Rouge-Noir). Ces structures appliquent des rotations locales (complexité $\mathcal{O}(1)$) lors des insertions/suppressions pour maintenir la hauteur de l'arbre strictement bornée à $O(\log_2 N)$. 
Compromis: * On accepte une surcharge mémoire minime par nœud (stockage d'un bit de couleur ou d'un facteur d'équilibre) et un surcoût cpu infime lors des rééquilibrages, en échange d'une garantie absolue sur la borne supérieure de la latence.