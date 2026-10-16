---
title: 'Exercice 1 : Preuve de programmes : triplets de Hoare, invariants et variants'
description: 'Problème d entraînement type concours.'
---

### 🌐 Énoncé du problème / Cadre d'étude

La vérification formelle de programmes est une discipline essentielle pour garantir la sûreté et la correction de systèmes critiques (aéronautique, ferroviaire, médical). Formalisée par C.A.R. Hoare, la logique des assertions permet de prouver mathématiquement qu'un programme satisfait des spécifications données sous forme de préconditions et de postconditions.

Dans ce problème, on s'intéresse à l'établissement formel de la correction partielle et totale de programmes impératifs simples manipulables en langage pivot de type OCaml/Python, en se basant sur le formalisme des triplets de Hoare :
$$\{P\} \, C \, \{Q\}$$
où $P$ est la précondition, $C$ la commande (le programme) et $Q$ la postcondition. 

On rappelle les règles de base de la logique de Hoare :
1. **Règle d'affectation :** $\{P[x \leftarrow e]\} \ x := e \ \{P\}$
2. **Règle de composition :** $\frac{\{P\} \, C_1 \, \{R\} \quad \{R\} \, C_2 \, \{Q\}}{\{P\} \, C_1; C_2 \, \{Q\}}$
3. **Règle de la conséquence :** $\frac{P \implies P' \quad \{P'\} \, C \, \{Q'\} \quad Q' \implies Q}{\{P\} \, C \, \{Q\}}$
4. **Règle de l'itération (boucle `while`) :** $\frac{\{I \land B\} \, C \, \{I\}}{\{I\} \ \text{while } B \text{ do } C \text{ done} \ \{I \land \neg B\}}$

L'objectif de ce problème est de concevoir, annoter et prouver la correction totale (correction partielle + terminaison) d'un algorithme de calcul de division entière par soustractions successives optimisées, puis d'analyser les limites théoriques de ces méthodes automatiques.

---

### ❓ Questions progressives (incluant une analyse critique du modèle)

1. **Règle d'affectation multiple et conditions de Floyd-Hoare**
   Soit le bloc d'affectations simultanées suivant : 
   $$(x, y) := (x + y, x - y)$$
   En utilisant la règle de substitution arrière (calcul de la plus faible précondition $\text{wp}$), déterminer la formule logique $P$ la plus générale telle que le triplet $\{P\} \ (x, y) := (x + y, x - y) \ \{x^2 + y^2 = 50\}$ soit valide.

2. **Correction partielle d'une boucle**
   On considère la fonction qui calcule le produit de deux entiers naturels $a$ et $b$ par additions itérées. 
   Voici le code annoté :
   ```python
   # Précondition : a >= 0 et b >= 0
   res = 0
   i = 0
   while i < a:
       res = res + b
       i = i + 1
   # Postcondition : res == a * b
   ```
   Proposer un invariant de boucle $I$ permettant de prouver la correction partielle de ce programme. Démontrer l'étape d'initialisation, la conservation de l'invariant, et l'assertion finale.

3. **Terminaison et Variant**
   Pour le programme de la question 2, définir un variant de boucle $v$ (ou fonction de rang) à valeurs dans un ensemble bien fondé. Démontrer que ce variant décroit strictement à chaque itération et qu'il est minoré, garantissant ainsi la terminaison de la boucle.

4. **Synthèse d'un algorithme de division entière**
   On souhaite concevoir un algorithme calculant le quotient $q$ et le reste $r$ de la division euclidienne d'un entier $A \ge 0$ par un entier $B > 0$, c'est-à-dire vérifiant $A = q \times B + r$ et $0 \le r < B$, en n'utilisant que des additions et soustractions.
   Rédiger le code complet avec ses assertions (précondition, invariant, variant, postcondition) et expliciter la preuve de correction totale.

5. **Analyse critique du modèle et indécidabilité**
   Dans le cadre de la vérification formelle automatisée (par exemple via des solveurs SMT ou des assistants de preuve comme Coq), on cherche à concevoir un vérificateur de programmes parfait $\mathcal{V}$ qui prend en entrée un code source annoté et renvoie `True` si et seulement si le programme est totalement correct.
   En utilisant une réduction depuis le problème de l'arrêt (*Halting Problem*), démontrer qu'un tel vérificateur automatique général (capable de trouver des invariants arbitraires sans aide humaine) ne peut pas exister.

---

### 💡 Pistes & Indications méthodologiques

* **Question 1 :** Procédez par substitution simultanée. Remplacez $x$ par $x+y$ et $y$ par $x-y$ dans l'expression de la postcondition. Développez et simplifiez algébriquement.
* **Question 2 :** L'invariant doit lier les variables modifiées ($res$, $i$) aux variables d'entrée ($a$, $b$) en exprimant l'état d'avancement du calcul. Pensez à l'analogie avec la récurrence mathématique.
* **Question 3 :** Le variant est souvent une expression de type $\text{borne} - \text{compteur}$. Vérifiez que sa valeur entière diminue strictement et qu'elle ne peut pas descendre en dessous d'un seuil sans provoquer la sortie de boucle.
* **Question 4 :** Pour l'invariant de la division, maintenez la relation fondamentale $A = q \times B + r$ tout au long de la décroissance de $r$ ou de la croissance de $q$.
* **Question 5 :** Réfléchissez à la possibilité d'encoder l'arrêt d'une machine de Turing arbitraire sous la forme de la correction totale d'un programme annoté.

---

### 📋 Corrigé détaillé pas à pas

#### Correction 1 : Règle d'affectation multiple
La règle d'affectation pour $n$ variables $(x_1, \dots, x_n) := (e_1, \dots, e_n)$ et une postcondition $Q$ s'écrit par la plus faible précondition :
$$\text{wp}((x_1, \dots, x_n) := (e_1, \dots, e_n), Q) = Q[x_1 \leftarrow e_1, \dots, x_n \leftarrow e_n]$$

Ici, la postcondition est $Q(x,y) \equiv x^2 + y^2 = 50$.
On substitue $x$ par $x + y$ et $y$ par $x - y$ :
$$P(x,y) = (x + y)^2 + (x - y)^2 = 50$$

Développons l'expression :
$$(x^2 + 2xy + y^2) + (x^2 - 2xy + y^2) = 50$$
$$2x^2 + 2y^2 = 50$$
$$x^2 + y^2 = 25$$

La formule logique la plus générale est donc **$P \equiv x^2 + y^2 = 25$**.

---

#### Correction 2 : Correction partielle de la multiplication itérée
Soit l'invariant de boucle :
$$I \equiv (0 \le i \le a) \land (\text{res} = i \times b)$$

1. **Initialisation (avant l'entrée dans la boucle) :**
   Avant la boucle, $\text{res} = 0$ et $i = 0$.
   * $0 \le 0 \le a$ est vrai puisque la précondition garantit $a \ge 0$.
   * $\text{res} = 0 = 0 \times b$ est vrai.
   L'invariant $I$ est donc vérifié au démarrage.

2. **Conservation (corps de boucle) :**
   On suppose l'invariant $I$ vrai ainsi que la condition de boucle $B \equiv i < a$. 
   Montrons que l'invariant est préservé après l'exécution de :
   $$\text{res} := \text{res} + b ; \quad i := i + 1$$
   Notons $\text{res}'$ et $i'$ les nouvelles valeurs :
   * $\text{res}' = \text{res} + b = i \times b + b = (i + 1) \times b = i' \times b$.
   * Comme $i < a$ et que $i$ est un entier, $i + 1 \le a$. De plus, $i \ge 0 \implies i+1 > 0$, donc $0 \le i' \le a$.
   L'invariant $I$ est donc conservé.

3. **Assertion finale :**
   À la sortie de la boucle, on a $I \land \neg B$, c'est-à-dire :
   $$(0 \le i \le a) \land (\text{res} = i \times b) \land \neg(i < a)$$
   Puisque $i \le a$ et $i \not< a$ (dans $\mathbb{Z}$), on a nécessairement $i = a$.
   En injectant dans l'égalité de l'invariant :
   $$\text{res} = a \times b$$
   La postcondition est bien établie. $\blacksquare$

---

#### Correction 3 : Terminaison de la multiplication itérée
On associe à la boucle le variant (ou fonction de rang) :
$$v = a - i$$
Vérifions les deux propriétés requises pour un variant dans $\mathbb{N}$ (ensemble bien fondé) :
1. **Minoration :** Dans la boucle, la condition de continuation est $i < a$, ce qui implique $i \le a - 1$, soit $a - i \ge 1 > 0$ (ou $a - i \ge 0$ selon la borne exacte). Plus précisément, tant que la boucle tourne, $v = a - i > 0$.
2. **Décroissance stricte :** À chaque itération, la variable $i$ est incrémentée de $1$ ($i' = i + 1$), tandis que $a$ reste invariant. La nouvelle valeur du variant est :
   $$v' = a - i' = a - (i + 1) = (a - i) - 1 = v - 1$$
   On a bien $v' < v$.

Le variant décroit strictement à chaque étape tout en étant minoré par $0$, ce qui garantit la **terminaison** du programme. $\blacksquare$

---

#### Correction 4 : Algorithme de division entière par soustractions
Voici l'algorithme annoté calculant le quotient $q$ et le reste $r$ de $A$ par $B$ ($A \ge 0$, $B > 0$) :

```python
# Précondition : A >= 0 et B > 0
q = 0
r = A

# Invariant : I ≡ A == q * B + r and r >= 0
# Variant : v = r
while r >= B:
    r = r - B
    q = q + 1

# Postcondition : A == q * B + r and 0 <= r < B
```

**Démonstration de la correction totale :**
1. **Initialisation :** Avant la boucle, $q = 0$ et $r = A$. 
   * $q \times B + r = 0 \times B + A = A$. L'invariant $I$ est vérifié.
   * $r = A \ge 0$ (par précondition).
2. **Conservation :** Supposons $I$ et la condition de boucle $r \ge B$.
   Soit $r' = r - B$ et $q' = q + 1$.
   * $q' \times B + r' = (q + 1)B + (r - B) = qB + B + r - B = qB + r = A$ (par invariant). L'invariant est conservé.
   * De plus, $r \ge B \implies r - B \ge 0$, donc $r' \ge 0$.
3. **Terminaison :** Le variant $v = r$ est un entier. À chaque itération, $r' = r - B$ avec $B > 0$, donc $v' = v - B < v$. Le variant décroît strictement. Comme la boucle ne s'exécute que si $r \ge B$, le variant reste positif ou nul à l'intérieur de la boucle et décroît vers une valeur strictement inférieure à $B$, assurant la sortie.
4. **Postcondition :** À la sortie de la boucle, on a $I \land \neg(r \ge B)$, soit :
   $$(A = q \times B + r) \land (r \ge 0) \land (r < B)$$
   Ce qui correspond exactement à la spécification de la division euclidienne. $\blacksquare$

---

#### Correction 5 : Analyse critique du modèle et indécidabilité
Supposons par l'absurde qu'il existe un algorithme (ou un vérificateur automatique total) $\mathcal{V}$ capable de prendre n'importe quel code source annoté avec ses pré/postconditions, invariants et variants, et de décider en temps fini si le programme est totalement correct.

Considérons un problème insoluble bien connu : le **problème de l'arrêt** (*Halting Problem*). Soit une machine de Turing (ou un programme arbitraire) $M$ et une entrée $x$. On souhaite savoir si $M(x)$ s'arrête.

On peut construire un programme source $P_{M,x}$ qui simule l'exécution de $M$ sur $x$. 
On associe à ce programme une postcondition triviale (par exemple, $\text{True}$) et on cherche à prouver la correction totale de $\{\text{True}\} \ P_{M,x} \ \{\text{True}\}$. 
Pour réussir cette preuve de terminaison de manière automatique, le vérificateur $\mathcal{V}$ devrait être capable de déterminer si $P_{M,x}$ se termine, ce qui résoudrait le problème de l'arrêt pour une machine arbitraire $M$.

Or, d'après le théorème de Turing, le problème de l'arrêt est indécidable. 
Par conséquent, **il ne peut pas exister de vérificateur automatique universel** capable de prouver la correction totale de tous les programmes sans intervention humaine. C'est pourquoi les assistants de preuve modernes (comme Coq ou Why3) nécessitent des annotations interactives (fourniture manuelle d'invariants complexes, de traits de récurrence ou de preuves de lemmes auxiliaires par le ou la programmeuse). $\blacksquare$