---
title: 'Exercice 2 : Invariants de boucle'
description: 'Problème d entraînement type concours.'
---

# Concours MP2I - Informatique
## Correction détaillée : Invariants de boucle et Logique de Hoare

---

### Introduction et Rappels de Cours

Dans le cadre de la vérification de programmes impératifs, la méthode de Hoare repose sur l'utilisation de **triplets de Hoare** notés $\{P\} C \{Q\}$, où $P$ est la précondition, $C$ un bloc de code et $Q$ la postcondition. 

Pour une boucle `while B do C`, la preuve de correction partielle et totale repose sur la notion d'**invariant de boucle** $I$ :
1. **Initialisation** : L'invariant doit être vrai avant d'entrer dans la boucle ($P \implies I$).
2. **Conservation** : Si l'invariant est vrai et que la condition de boucle est vérifiée, l'exécution du corps de la boucle maintient l'invariant ($\{I \land B\} C \{I\}$).
3. **Terminaison** : À la sortie de la boucle, si l'invariant est vrai et la condition fausse, la postcondition est établie ($(I \land \neg B) \implies Q$), et une fonction de variant $v$ (à valeurs dans un ensemble bien fondé, typiquement $\mathbb{N}$) doit strictement décroître à chaque itération.

---

### Partie I : Étude d'un algorithme de calcul arithmétique

On considère la fonction suivante, écrite en syntaxe algorithmique proche de OCaml/C, qui calcule le produit de deux entiers naturels $a$ et $b$ en utilisant uniquement des additions, des décalages de bits (divisions par 2) et des tests de parité. Cet algorithme est connu sous le nom de multiplication russe (ou éthiopienne).

```c
// Precondition : a >= 0 et b >= 0
// Postcondition : ret = a * b
int multiplication_russe(int a, int b) {
    int x = a;
    int y = b;
    int res = 0;
    while (x > 0) {
        if (x % 2 == 1) {
            res = res + y;
        }
        x = x / 2;
        y = y * 2;
    }
    return res;
}
```

#### Question 1
*Formaliser l'invariant de boucle $I$ permettant de prouver la correction partielle de cet algorithme.*
Correction: **
L'invariant doit lier les variables locales de la boucle (`x`, `y`, `res`) aux paramètres d'entrée (`a`, `b`). Intuitivement, au cours des divisions successives de `x` par 2 et des multiplications de `y` par 2, la valeur totale $x \times y + \text{res}$ reste invariante et égale au produit initial $a \times b$.

Proposons l'invariant $I$ :
$$I(x, y, \text{res}, a, b) \equiv (a \times b = x \times y + \text{res}) \land (x \ge 0) \land (y \ge 0)$$

---

#### Question 2
*Démontrer que cet invariant est inductif, c'est-à-dire qu'il est vérifié avant d'entrer dans la boucle et qu'il est préservé par une itération.*
Correction: **
- **Initialisation :**
  Juste avant la boucle, $x = a$, $y = b$ et $\text{res} = 0$. 
  On a bien :
  $$x \times y + \text{res} = a \times b + 0 = a \times b$$
  De plus, les préconditions garantissent $a \ge 0$ et $b \ge 0$, donc $x \ge 0$ et $y \ge 0$. L'invariant $I$ est donc vérifié.

- **Conservation :**
  Supposons $I$ vrai au début d'une itération, et la condition de boucle $x > 0$ vérifiée.
  Notons $x, y, \text{res}$ les valeurs avant l'itération, et $x', y', \text{res}'$ les valeurs après l'itération du corps de la boucle.
  
  Le corps de la boucle effectue :
  - Si $x$ est impair ($x \equiv 1 \pmod 2$) : $\text{res}' = \text{res} + y$ et $x$ impair $\implies x = 2k + 1$.
  - Si $x$ est pair ($x \equiv 0 \pmod 2$) : $\text{res}' = \text{res}$ et $x$ pair $\implies x = 2k$.
  
  Dans les deux cas, la division entière par 2 donne $x' = \lfloor x / 2 \rfloor = x / 2$ (en division entière).
  Parallèlement, $y' = 2y$.
  
  Regardons la quantité $x' \times y' + \text{res}'$ :
  - Si $x$ est pair : 
    $$x' \times y' + \text{res}' = \left(\frac{x}{2}\right) \times (2y) + \text{res} = x \times y + \text{res} = a \times b$$
  - Si $x$ est impair :
    $$x' \times y' + \text{res}' = \left(\frac{x-1}{2}\right) \times (2y) + (\text{res} + y) = (x-1)y + \text{res} + y = xy - y + \text{res} + y = x \times y + \text{res} = a \times b$$
    
  Dans tous les cas, $a \times b = x' \times y' + \text{res}'$. 
  De plus, comme $x > 0$ et $x$ est entier, $x' = \lfloor x/2 \rfloor \ge 0$, et $y' = 2y \ge 0$ puisque $y \ge 0$.
  L'invariant $I$ est donc préservé. $\blacksquare$

---

#### Question 3
*Prouver la terminaison de la boucle en définissant un variant de boucle $v$ adéquat.*
Correction: **
Soit le variant $v = x$. 
1. D'après l'invariant, $x \ge 0$ à chaque entrée dans le corps de la boucle.
2. La condition de boucle est $x > 0$.
3. À chaque itération, $x$ est remplacé par $x' = \lfloor x / 2 \rfloor$. Puisque $x > 0$, on a nécessairement $x' < x$.

Le variant $v$ est un entier strictement positif qui décroit strictement à chaque itération et est minoré par 0. Par conséquent, la boucle termine en un nombre fini d'itérations (au maximum $\lfloor \log_2(a) \rfloor + 1$). $\blacksquare$

---

#### Question 4
*En déduire la correction totale du programme et donner sa complexité temporelle dans le pire des cas en fonction de $a$.*
Correction: **
À la sortie de la boucle, la condition de boucle est fausse, donc $x \le 0$. Combiné avec l'invariant $x \ge 0$, on en déduit $x = 0$.
En injectant $x = 0$ dans l'invariant $I$ :
$$a \times b = 0 \times y + \text{res} \implies \text{res} = a \times b$$
La postcondition est bien établie.

**Complexité :**
À chaque étape, la variable $x$ est divisée par 2. Le nombre d'itérations est donc de l'ordre de $\mathcal{O}(\log(a))$. Les opérations à l'intérieur de la boucle (test de parité, division par 2, multiplication par 2, addition) s'effectuent en temps constant $\mathcal{O}(1)$ en arithmétique machine standard.
La complexité temporelle totale est donc en **$\mathcal{O}(\log(a))$**.

---

### Partie II : Analyse critique des résultats et limites

On souhaite implémenter cet algorithme en langage C pour des types entiers à taille fixe (`int` sur 32 bits signés, représentant des entiers dans l'intervalle $[-2^{31}, 2^{31}-1]$).

#### Question 5
*Que se passe-t-il si la précondition $b \ge 0$ n'est plus respectée, ou si les valeurs manipulées dépassent les bornes de représentation de la machine ? Discuter de la validité de l'invariant dans ce contexte.*
Correction: **
1. **Extension aux négatifs :** Si $b < 0$, la preuve algébrique de l'invariant $a \times b = x \times y + \text{res}$ reste mathématiquement vraie dans $\mathbb{Z}$. Toutefois, les conditions de positivité ($x \ge 0$ et $y \ge 0$) doivent être adaptées car $y$ peut devenir négatif ($y' = 2y$). 
2. **Dépassement de capacité (Overflow) :** En informatique, les entiers ont une taille fixe. Si $a \times b$ dépasse $2^{31}-1$, l'opération $y = y * 2$ ou $\text{res} = \text{res} + y$ provoquera un dépassement de capacité (*overflow*). En C, le comportement des entiers signés en cas d'overflow est indéfini (*undefined behavior*). L'invariant algébrique $a \times b = x \times y + \text{res}$ est alors mis en défaut dans l'arithmétique modulo $2^{32}$ de la machine, invalidant de fait la correction du programme.

---

### Bilan de l'examinateur

> **Note de correction :** Les candidats devront veiller à bien dissocier la **correction partielle** (validité de l'invariant) de la **terminaison** (monotonie et minoration du variant). La rigueur dans la manipulation des assertions logiques (implications, conjonctions) est particulièrement attendue en MP2I.