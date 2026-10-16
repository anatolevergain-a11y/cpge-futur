---
title: 'Exercice 2 : Vérification automatique et correction partielle/totale'
description: 'Problème d entraînement type concours.'
---

### 🌐 Énoncé du problème / Cadre d'étude

La vérification formelle de programmes est une technique rigoureuse permettant de prouver mathématiquement qu'un programme informatique satisfait ses spécifications. Dans ce problème, nous formalisons un sous-ensemble d'un langage impératif simple et nous étudions les mécanismes de la **logique de Hoare** pour établir la correction partielle et la correction totale de programmes.

Un triplet de Hoare est noté sous la forme :
$$\{P\} \, C \, \{Q\}$$
où :
- $P$ est la **précondition** (assertion vraie avant l'exécution de la commande $C$),
- $C$ est une **commande** (instruction, affectation, boucle, conditionnelle),
- $Q$ est la **postcondition** (assertion vraie après l'exécution réussie de $C$).

On distingue deux notions fondamentales :
1. **La correction partielle** : Si la précondition $P$ est satisfaite et que l'exécution de $C$ se termine, alors la postcondition $Q$ est satisfaite.
2. **La correction totale** : La correction partielle est assurée **et** l'exécution de $C$ se termine obligatoirement (pas de boucle infinie).

Nous formaliserons ici les règles de calcul des plus faibles préconditions ($\text{WDP}$ pour *Weakest Precondition*) pour automatiser la génération de conditions de vérification.

---

### ❓ Questions progressives (incluant une analyse critique du modèle)

1. **Règles de base de la logique de Hoare**
   - Rappeler ou établir la règle d'affectation (axiomatique de l'affectation) : $\{P[x \leftarrow e]\} \, x := e \, \{P\}$.
   - Étudier la règle de composition séquentielle : si $\{P\} \, C_1 \, \{R\}$ et $\{R\} \, C_2 \, \{Q\}$, que peut-on déduire pour $\{P\} \, C_1 ; C_2 \, \{Q\}$ ?

2. **Application à un algorithme itératif simple**
   - On considère le programme $C_{\text{mult}}$ calculant le produit de deux entiers $a \in \mathbb{N}$ et $b \in \mathbb{N}$ par additions successives :
     ```text
     x := 0;
     y := 0;
     while y < b do
         x := x + a;
         y := y + 1;
     done
     ```
   - Proposer un invariant de boucle $I$ adéquat pour prouver que ce programme calcule bien $x = a \times b$ à la fin, avec la précondition $P \equiv (a \ge 0 \land b \ge 0)$.

3. **Correction totale et variants**
   - Pour la boucle $\text{while } B \text{ do } C \text{ done}$, définir formellement la notion de **variant de boucle** (ou fonction de termination) permettant d'établir la correction totale.
   - Appliquer cette notion au programme $C_{\text{mult}}$ pour prouver sa terminaison.

4. **Analyse critique du modèle et limites de la vérification formelle**
   - Le système de Hoare présenté ici suppose un modèle d'arithmétique idéal où les entiers ont une capacité infinie. Discuter brièvement des failles que cela engendre lors du passage à un langage réel (comme le C ou l'Ocaml avec des entiers machine à taille fixe, type `int64`).

---

### 💡 Pistes & Indications méthodologiques

- **Question 1** : Pour l'affectation, pensez à substituer toute occurrence de la variable modifiée par l'expression qui lui est affectée dans la postcondition.
- **Question 2** : L'invariant $I$ doit être vrai avant l'entrée dans la boucle, conservé par une itération, et permettre d'établir la postcondition lorsque la condition de la boucle devient fausse. Testez l'invariant $I \equiv (x = y \times a \land 0 \le y \le b)$.
- **Question 3** : Un variant $V$ doit être à valeurs dans un ensemble bien fondé (souvent $\mathbb{N}$) et strictement décroître à chaque itération.
- **Question 4** : Pensez aux dépassements de capacité (*overflows*) qui violent l'hypothèse mathématique de la logique de Hoare classique.

---

### 📋 Corrigé détaillé pas à pas

#### 1. Règles de base de la logique de Hoare

* **Règle d'affectation** :
  $$\{P[x \leftarrow e]\} \, x := e \, \{P\}$$
  *Démonstration/Justification intuitive* : Pour que $P$ soit vraie pour la variable $x$ après l'affectation $x := e$, il faut que $P$ soit déjà vraie en remplaçant $x$ par l'expression $e$ avant l'affectation.

* **Règle de composition séquentielle** :
  Si l'on a $\{P\} \, C_1 \, \{R\}$ et $\{R\} \, C_2 \, \{Q\}$, alors par la règle d'affaiblissement/composition :
  $$\frac{\{P\} \, C_1 \, \{R\} \quad \{R\} \, C_2 \, \{Q\}}{\{P\} \, C_1 ; C_2 \, \{Q\}}$$
  Cette règle permet de chaîner les instructions de manière inductive.

---

#### 2. Application à $C_{\text{mult}}$ et invariant de boucle

Soit le programme $C$ :
```text
x := 0;
y := 0;
while y < b do
    x := x + a;
    y := y + 1;
done
```
Postcondition souhaitée : $Q \equiv (x = a \times b)$.
Précondition initiale : $P \equiv (a \ge 0 \land b \ge 0)$.

* **Choix de l'invariant** :
  On pose $I \equiv (x = y \times a \land 0 \le y \le b)$.

* **Vérification des conditions de Hoare pour la boucle** :
  1. **Initialisation** : Juste avant la boucle, après $x := 0 ; y := 0$, on a $x = 0$ et $y = 0$. Comme $0 = 0 \times a$ et $0 \le b$ (car $b \ge 0$), l'invariant $I$ est bien vérifié.
  2. **Conservation** : Supposons $I$ vrai et la condition de boucle $B \equiv (y < b)$ vraie.
     Après le corps de boucle $C_{\text{corps}} \equiv (x := x + a ; y := y + 1)$, la postcondition doit être l'invariant $I$ au tour suivant.
     En appliquant la règle d'affectation en sens inverse :
     $I[y \leftarrow y+1][x \leftarrow x+a] \equiv (x + a = (y + 1) \times a \land 0 \le y + 1 \le b)$.
     Or, l'hypothèse $x = y \times a$ implique directement $x + a = y \times a + a = (y + 1) \times a$. De plus, $y < b$ et $y \in \mathbb{N}$ impliquent $y + 1 \le b$. L'invariant est donc conservé.
  3. **Terminaison et Postcondition** : Lorsque la boucle s'arrête, on a $\neg B \land I$, c'est-à-dire $y \ge b \land y \le b \land x = y \times a$.
     Cela implique $y = b$, et par conséquent $x = b \times a = a \times b$, ce qui correspond exactement à la postcondition $Q$.

---

#### 3. Correction totale et variants

Pour établir la correction totale d'une boucle $\text{while } B \text{ do } C \text{ done}$, on associe à la boucle un **variant** $V$ (fonction des variables du programme à valeurs dans $\mathbb{N}$) tel que :
1. $V$ est strictement décroissant à chaque exécution du corps $C$ (si $B$ est vrai).
2. Lorsque $V$ atteint $0$ (ou une borne minimale), si la boucle continue, cela mène à une contradiction, ou l'atteinte de cette borne force la sortie.

* **Application au programme $C_{\text{mult}}$** :
  On choisit le variant $V = b - y$.
  - **Justification** : 
    - Tant que la boucle tourne, $y < b$, donc $V = b - y > 0$.
    - À chaque itération, $y$ est incrémenté de $1$ ($y := y + 1$), donc le variant $V' = b - (y + 1) = (b - y) - 1 = V - 1$ diminue strictement de $1$.
  Puisque le variant est à valeurs dans $\mathbb{N}$ et décroît strictement à chaque étape, la boucle ne peut pas tourner infiniment. La **correction totale** est ainsi établie.

---

#### 4. Analyse critique du modèle

* **Limites de l'arithmétique idéale** :
  Le système de Hoare classique modélise les entiers $\mathbb{Z}$ ou $\mathbb{N}$ de l'arithmétique usuelle. En informatique, les types entiers natifs (par exemple les `int` sur 32 ou 64 bits en C/C++ ou Java) possèdent des bornes strictes (ex. $[-2^{63}, 2^{63}-1]$ pour un `int64`).
* **Conséquences** :
  Si $a$ et $b$ sont grands, le calcul $x := x + a$ ou $y := y + 1$ peut provoquer un **dépassement de capacité** (*overflow*). L'invariant mathématique $x = y \times a$ peut alors devenir faux au niveau machine en raison d'un isomorphisme modulo $2^{64}$, invalidant de fait la preuve formelle réalisée sur le papier.
* **Remède** : Utiliser des outils de vérification par SMT-solvers (comme Why3 ou Frama-C) qui intègrent explicitement la sémantique exacte des types machines (bits de poids fort, dépassements, arrondis pour les flotteurs).