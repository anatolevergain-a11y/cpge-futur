---
title: 'Exercice 1 : Expressions rationnelles'
description: 'Problème d entraînement type concours pour MPI.'
---

### 🌐 Énoncé du problème / Étude de cas

Dans le cadre de la conception d'un système embarqué de supervision pour un réseau de capteurs industriels, on s'intéresse à l'analyseur lexical (lexer) chargé de valider des trames de télémesure. Ces trames sont représentées sous forme de chaînes de caractères sur un alphabet fini $\Sigma$. 

Pour des raisons de bande passante et de consommation énergétique, les capteurs émettent des messages compressés dont la structure syntaxique est modélisée par des langages réguliers. On cherche à manipuler, normaliser et optimiser les expressions rationnelles décrivant ces protocoles de communication. L'alphabet de travail est $\Sigma = \{0, 1, \text{a}\}$.

Dans ce problème, on étudie les propriétés algébriques des expressions rationnelles, leur traduction sous forme d'automates finis non déterministes (AFN), ainsi que l'impact de la taille des représentations sur les ressources mémoires limitées des microcontrôleurs cibles (hypothèse de mémoire vive disponible : $\text{RAM} \le 64\text{ Ko}$).

---

### ❓ Questions progressives

1. **Définitions et manipulation syntaxique**
   Soit $\Sigma$ un alphabet. Rappeler la définition inductive de l'ensemble $\text{Exp}(\Sigma)$ des expressions rationnelles sur $\Sigma$ et le langage associé $\mathcal{L}(e)$ pour chaque expression $e \in \text{Exp}(\Sigma)$.

2. **Élimination de l'ambiguïté et normalisation**
   On considère l'expression rationnelle $e = (0 + 1)^* \cdot \text{a} \cdot (0 + 1)^*$. Décrire précisément le langage $\mathcal{L}(e)$ en français. Proposer une expression rationnelle équivalente décrivant le complémentaire de $\mathcal{L}(e)$ sur l'alphabet $\Sigma = \{0, 1, \text{a}\}$.

3. **Construction de Thompson et complexité spatiale**
   Rappeler le principe de la construction de Thompson pour transformer une expression rationnelle $e$ en un automate fini non déterministe avec $\varepsilon$-transitions (AFN-$\varepsilon$). 
   Évaluer majoritairement le nombre d'états et de transitions de l'automate obtenu en fonction de la longueur $|e$| de l'expression (nombre de symboles de l'alphabet et d'opérateurs).

4. **Analyse critique et limites du modèle pour les systèmes embarqués**
   Supposons que l'on souhaite convertir l'AFN-$\varepsilon$ précédent en un automate fini déterministe (AFD) minimal pour l'embarquer sur un microcontrôleur disposant de $64\text{ Ko}$ de RAM. Si l'expression rationnelle a une longueur $|e| = 100$, donner un ordre de grandeur théorique du nombre d'états de l'AFD issu de la construction par sous-ensembles. Discuter des limites de cette approche pour des protocoles industriels complexes et proposer une contre-mesure logicielle.

5. **Implémentation en Python**
   Écrire une fonction Python `contiene_a(e: str) -> bool` (ou fonction récursive similaire) qui prend une structure représentant une expression rationnelle et détermine si le langage associé contient au moins un mot contenant le caractère $\text{a}$.

---

### 💡 Pistes & Indications

- **Q1 :** Penser aux cas de base (mot vide $\varepsilon$, mot vide $\emptyset$, lettres de l'alphabet) et aux trois opérations fondamentales (union, concaténation, étoile de Kleene).
- **Q2 :** Le langage $\mathcal{L}(e)$ représente l'ensemble des mots de $\Sigma^*$ contenant **au moins** une occurrence de la lettre $\text{a}$. Le complémentaire correspond donc aux mots ne contenant *aucune* occurrence de $\text{a}$.
- **Q3 :** Pour chaque opérateur de l'induction, dessinez les fragments d'automates avec un unique état initial et un unique état acceptant pour éviter l'explosion combinatoire des transitions.
- **Q4 :** Rappelez-vous que le passage d'un AFN à un AFD peut induire une explosion exponentielle du nombre d'états ($2^n$ dans le pire des cas). Mettez cela en regard avec la contrainte des $64\text{ Ko}$.
- **Q5 :** Utilisez le typage algébrique de données (ou des classes en Python) pour représenter l'arbre syntaxique de l'expression rationnelle, puis procédez par induction structurelle.

---

### 📋 Corrigé détaillé et analyse des résultats

#### Corrigé de la question 1
L'ensemble des expressions rationnelles $\text{Exp}(\Sigma)$ sur l'alphabet $\Sigma$ est défini inductivement par :
1. $\emptyset \in \text{Exp}(\Sigma)$ et $\varepsilon \in \text{Exp}(\Sigma)$.
2. $\forall a \in \Sigma, a \in \text{Exp}(\Sigma)$.
3. Si $e_1, e_2 \in \text{Exp}(\Sigma)$, alors $(e_1 + e_2), (e_1 \cdot e_2)$ et $(e_1^*)$ sont dans $\text{Exp}(\Sigma)$.

Les langages associés $\mathcal{L} : \text{Exp}(\Sigma) \to \mathcal{P}(\Sigma^*)$ sont définis par :
- $\mathcal{L}(\emptyset) = \emptyset$
- $\mathcal{L}(\varepsilon) = \{\varepsilon\}$
- $\mathcal{L}(a) = \{a\}$ pour tout $a \in \Sigma$
- $\mathcal{L}(e_1 + e_2) = \mathcal{L}(e_1) \cup \mathcal{L}(e_2)$
- $\mathcal{L}(e_1 \cdot e_2) = \{uv \mid u \in \mathcal{L}(e_1) \text{ et } v \in \mathcal{L}(e_2)\}$
- $\mathcal{L}(e^*) = (\mathcal{L}(e))^* = \bigcup_{n \in \mathbb{N}} (\mathcal{L}(e))^n$

#### Corrigé de la question 2
- Le langage $\mathcal{L}(e)$ avec $e = (0 + 1)^* \cdot \text{a} \cdot (0 + 1)^*$ correspond à l'ensemble de tous les mots de $\{0, 1, \text{a}\}^*$ qui comportent **au moins une** lettre $\text{a}$.
- Le complémentaire de ce langage sur l'alphabet $\Sigma = \{0, 1, \text{a}\}$ est l'ensemble des mots ne contenant **aucune** occurrence de $\text{a}$, c'est-à-dire les mots formés exclusivement de $0$ et de $1$. Une expression rationnelle simple pour ce complémentaire est :
  $$\tilde{e} = (0 + 1)^*$$
  *(Note : si l'on exclut le mot vide, ou selon la définition exacte du complémentaire par rapport à $\Sigma^*$, on peut aussi l'écrire rigoureusement, mais $(0 + 1)^*$ englobe tous les mots sur $\{0, 1\}$.)*

#### Corrigé de la question 3
La construction de Thompson associe à toute expression de longueur $|e|$ un AFN-$\varepsilon$ possédant :
- Un nombre d'états borné par $O(|e|)$ (généralement au plus $2|e|$ états).
- Un nombre de transitions également borné par $O(|e|)$.
Cette linéarité fait de la construction de Thompson un outil très efficace en termes d'allocation mémoire initiale.

#### Corrigé de la question 4 : Analyse critique et limites du modèle
Si $|e| = 100$, l'AFN de Thompson possède au maximum $n \approx 200$ états. 
Lors de la déterminisation (construction par sous-ensembles), l'AFD obtenu peut théoriquement contenir jusqu'à $2^n = 2^{200}$ états dans le pire des cas. Même si les structures de protocoles réels n'atteignent pas ce pire cas pathologique, le nombre d'états peut facilement dépasser plusieurs dizaines de milliers.

**Analyse des limites et ordres de grandeur :**
Un automate sous forme de table de transition stockée en mémoire (par exemple une matrice `etat x symbole -> etat`) représentant $10^4$ états sur un alphabet de taille $3$ (avec des entiers sur 16 bits) consommerait :
$$\text{Mémoire} \approx 10^4 \text{ états} \times 3 \text{ transitions} \times 2 \text{ octets} \approx 60\text{ Ko}$$
Cette valeur s'approche dangereusement de la limite stricte des $64\text{ Ko}$ du microcontrôleur, sans compter la pile d'exécution du système d'exploitation et le code applicatif. 

**Contre-mesure logicielle :** 
Plutôt que de stocker un AFD pré-calculé complet, on privilégie l'évaluation à la volée (Lazy DFA) ou l'interprétation directe de l'AFN-$\varepsilon$ par un algorithme de type Thompson simulé (glouton sur les ensembles d'états actifs), dont l'empreinte mémoire reste bornée et proportionnelle à $|e|$, garantissant le respect de la contrainte matérielle.

#### Corrigé de la question 5
Voici une implémentation élégante en Python utilisant le typage algébrique (via des classes ou des dataclasses) pour représenter et analyser l'expression rationnelle :

```python
from dataclasses import dataclass
from typing import Union

@dataclass
class Epsilon: pass

@dataclass
class Symbol:
    char: str

@dataclass
class Concat:
    left: 'Expr'
    right: 'Expr'

@dataclass
class UnionExpr:
    left: 'Expr'
    right: 'Expr'

@dataclass
class Star:
    expr: 'Expr'

Expr = Union[Epsilon, Symbol, Concat, UnionExpr, Star]

def contient_a(e: Expr) -> bool:
    """Détermine si l'expression rationnelle peut générer un mot contenant 'a'."""
    match e:
        case Epsilon():
            return False
        case Symbol(char=c):
            return c == 'a'
        case Concat(left=l, right=r):
            return contient_a(l) or contient_a(r)
        case UnionExpr(left=l, right=r):
            return contient_a(l) or contient_a(r)
        case Star(expr=sub):
            return contient_a(sub)
    return False