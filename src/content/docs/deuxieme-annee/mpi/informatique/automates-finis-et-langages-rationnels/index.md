---
title: "Automates Finis, Langages Rationnels & Lemme de l'Étoile"
description: "Fiche méthode et exercices corrigés sur les points les plus sélectifs du concours X-ENS / Mines-Ponts / Centrale."
sidebar:
  badge:
    text: "Point Clé Concours"
    variant: "danger"
---

## 🎯 Pourquoi cette notion est-elle décisive au concours ?

Dans les épreuves d'informatique des concours X-ENS, Mines-Ponts et Centrale (filière MPI), la théorie des langages et des automates constitue un socle fondamental souvent abordé dès la première partie des épreuves écrites. Pour le jury, ce chapitre est un double test :
1. **La rigueur formelle :** Capacité à manipuler des définitions ensemblistes complexes, à formaliser des récurrences et à mener des raisonnements par l'absurde irréprochables.
2. **L'efficacité algorithmique :** Maîtrise des complexités temporelles et spatiales des algorithmes de transformation d'automates (déterminisation, minimisation, construction de Thompson).

Une approximation dans la gestion des $\varepsilon$-transitions ou une mauvaise quantification lors de l'application du lemme de l'étoile est immédiatement sanctionnée par la perte de la totalité des points de la question.

---

## 📐 Rappels théoriques & Formules incontournables

Soit $\Sigma$ un alphabet fini. Un langage $L$ sur $\Sigma$ est un sous-ensemble de $\Sigma^*$.

* **Automate fini non déterministe avec $\varepsilon$-transitions (AFNE) :** Un 5-uple $\mathcal{A} = (Q, \Sigma, \delta, I, F)$ où $Q$ est un ensemble fini d'états, $\Sigma$ l'alphabet, $\delta : Q \times (\Sigma \cup \{\varepsilon\}) \to \mathcal{P}(Q)$ la fonction de transition, $I \subseteq Q$ l'ensemble des états initiaux, et $F \subseteq Q$ l'ensemble des états finis.
* **Théorème de Kleene :** Un langage est reconnaissable par un automate fini si et seulement s'il est rationnel (exprimable par une expression régulière).
* **Lemme de l'étoile (Pumping Lemma) :** Si $L$ est un langage rationnel, alors il existe un entier $n \in \mathbb{N}^*$ (la constante de pumping) tel que pour tout mot $w \in L$ tel que $|w| \ge n$, il existe une décomposition $w = xyz$ vérifiant :
  $$\forall k \in \mathbb{N}, \quad xy^kz \in L$$
  $$\text{et } |xy| \le n$$
  $$\text{et } |y| \ge 1$$

---

### 📌 Point d'obstacle 1 : Déterminisation et minimisation d'automates (algorithme de Hopcroft)

#### 💡 Méthode de rédaction attendue par le jury
Pour la déterminisation (construction par sous-ensembles) :
1. Partir de l'ensemble des états initiaux accessibles par $\varepsilon$-clôture : $I' = \text{Cl}_{\varepsilon}(I)$.
2. Pour chaque nouvel état généré (qui est un sous-ensemble $S \subseteq Q$) et pour chaque lettre $a \in \Sigma$, calculer l'état cible $\delta'(S, a) = \text{Cl}_{\varepsilon}\left(\bigcup_{q \in S} \delta(q, a)\right)$.
3. Un état du nouvel automate est terminal si et seulement s'il contient au moins un état terminal de l'automate initial.

Pour la minimisation (Hopcroft) :
1. Éliminer préalablement les états non accessibles depuis les initiaux et les états ne permettant pas d'atteindre un état final (états morts).
2. Initialiser la partition avec deux blocs : $P_0 = \{F, Q \setminus F\}$.
3. Raffiner itérativement la partition en séparant les états dont les successeurs par une lettre $a$ appartiennent à des blocs différents.

#### 📋 Exercice type concours résolu pas à pas
**Énoncé :** Soit $\mathcal{A}$ l'AFNE défini sur $\Sigma = \{a, b\}$ par $Q = \{1, 2, 3\}$, $I = \{1\}$, $F = \{3\}$, et les transitions : $\delta(1, a) = \{1, 2\}$, $\delta(1, \varepsilon) = \{2\}$, $\delta(2, b) = \{3\}$, $\delta(3, a) = \{3\}$. Déterminiser cet automate.

**Correction rédigée :**
1. Calcul de l' $\varepsilon$-clôture de l'état initial :
   $$\text{Cl}_{\varepsilon}(\{1\}) = \{1, 2\}$$
   Notons cet état $S_0 = \{1, 2\}$. Il est initial. Comme il contient $2$ (non, $3$ est final, mais $1$ et $2$ ne le sont pas), $S_0$ n'est pas final.
2. Calcul des transitions depuis $S_0 = \{1, 2\}$ :
   - Pour $a$ : $\delta(1, a) \cup \delta(2, a) = \{1, 2\} \cup \emptyset = \{1, 2\}$. Son $\varepsilon$-clôture est $\{1, 2\} = S_0$.
   - Pour $b$ : $\delta(1, b) \cup \delta(2, b) = \emptyset \cup \{3\} = \{3\}$. Son $\varepsilon$-clôture est $\text{Cl}_{\varepsilon}(\{3\}) = \{3\}$. Notons $S_1 = \{3\}$.
3. Examen du nouvel état $S_1 = \{3\}$. Il contient l'état final $3$, donc $S_1 \in F'$.
   - Pour $a$ : $\delta(3, a) = \{3\}$, $\varepsilon$-clôture : $\{3\} = S_1$.
   - Pour $b$ : $\delta(3, b) = \emptyset$, $\varepsilon$-clôture : $\emptyset$. Notons $S_2 = \emptyset$ (état puits).
4. L'automate déterminisé possède l'ensemble d'états $Q' = \{S_0, S_1, S_2\}$, l'unique état initial $S_0$, l'ensemble final $F' = \{S_1\}$, et les transitions formelles ci-dessus.

#### ⚠️ Les erreurs à bannir absolument
* Oublier d'appliquer l' $\varepsilon$-clôture après chaque transition lors de la déterminisation.
* Omettre de créer un état puits (ou poubelle) pour rendre l'automate complet si nécessaire.
* Confondre l'accessibilité amont et l'accessibilité aval lors de l'élimination préalable des états inutiles pour la minimisation.

---

### 📌 Point d'obstacle 2 : Passage des expressions régulières aux automates (Thompson)

#### 💡 Méthode de rédaction attendue par le jury
La construction de Thompson permet de transformer inductivement une expression régulière en un AFNE possédant un unique état initial et un unique état final, sans transition entrante sur l'initial ni sortante sur le final.
- **Base ($a \in \Sigma$) :** Un état initial $i$, un état final $f$, et une transition $i \xrightarrow{a} f$.
- **Union ($E_1 + E_2$) :** Création d'un nouvel initial et d'un nouvel final reliés par des $\varepsilon$-transitions aux sous-automates.
- **Concaténation ($E_1 \cdot E_2$) :** Fusion de l'état final du premier automate avec l'état initial du second.
- **Étoile ($E^*$) :** Ajout d'un nouvel initial et d'un nouvel final, avec des $\varepsilon$-transitions de bouclage.

#### 📋 Exercice type concours résolu pas à pas
**Énoncé :** Appliquer la construction de Thompson pour obtenir l'AFNE associé à l'expression régulière $E = (a + b)^* a$.

**Correction rédigée :**
1. Construction pour la lettre $a$ : automate $\mathcal{A}_a$ avec $i_1 \xrightarrow{a} f_1$.
2. Construction pour la lettre $b$ : automate $\mathcal{A}_b$ avec $i_2 \xrightarrow{b} f_2$.
3. Pour l'union $a + b$ : on introduit un nouvel état initial $I_{ab}$ et un nouvel état final $F_{ab}$. On ajoute des $\varepsilon$-transitions :
   $$I_{ab} \xrightarrow{\varepsilon} i_1, \quad I_{ab} \xrightarrow{\varepsilon} i_2, \quad f_1 \xrightarrow{\varepsilon} F_{ab}, \quad f_2 \xrightarrow{\varepsilon} F_{ab}$$
4. Pour l'étoile $(a + b)^*$ : on introduit un état initial $I_{star}$ et un final $F_{star}$. On ajoute des $\varepsilon$-transitions de $I_{star}$ vers $I_{ab}$, de $F_{ab}$ vers $F_{star}$, de $F_{ab}$ vers $I_{ab}$ (pour la répétition), et une liaison directe de $I_{star}$ vers $F_{star}$ (pour le mot vide).
5. Pour la concaténation finale avec $a$ : on fusionne l'état final $F_{star}$ avec l'état initial de l'automate de la lettre $a$ terminale.

#### ⚠️ Les erreurs à bannir absolument
* Créer des automates avec plusieurs états finaux non fusionnés lors des opérations inductives.
* Mal orienter les $\varepsilon$-transitions dans l'opérateur étoile, ce qui fausse la reconnaissance du mot vide $\varepsilon$.

---

### 📌 Point d'obstacle 3 : Preuve de non-rationalité par le lemme de l'étoile (Pumping Lemma)

#### 💡 Méthode de rédaction attendue par le jury
La preuve s'articule toujours sous la forme d'un jeu contradictoire (type Skolem-Gödel ou démonstration par l'absurde) :
1. Supposer par l'absurde que le langage $L$ est rationnel.
2. D'après le lemme de l'étoile, il existe une constante $n \ge 1$.
3. **Choisir intelligemment un mot $w \in L$** de longueur $|w| dépendante de $n$ (souvent $n$ ou $2n$).
4. Considérer une décomposition arbitraire $w = xyz$ telle que $|xy| \le n$ et $|y| \ge 1$.
5. Expliciter la longueur de $y$ (souvent $|y| \le n$) et sa position (dans le préfixe de longueur $n$).
6. **Trouver un entier $k \in \mathbb{N}$** (souvent $k = 0$ ou $k = 2$) tel que le mot pompé $xy^kz \notin L$, ce qui contredit l'hypothèse de rationalité.

#### 📋 Exercice type concours résolu pas à pas
**Énoncé :** Démontrer que le langage $L = \{a^k b^k \mid k \in \mathbb{N}\}$ n'est pas rationnel.

**Correction rédigée :**
1. Raisonnons par l'absurde en supposant que $L$ est rationnel.
2. Soit $n$ la constante du lemme de l'étoile associée à $L$.
3. Choisissons le mot $w = a^n b^n$. On a bien $w \in L$ et $|w| = 2n \ge n$.
4. D'après le lemme de l'étoile, il existe une décomposition $w = xyz$ telle que :
   $$|xy| \le n \quad \text{et} \quad |y| \ge 1$$
5. Puisque $|xy| \le n$ et que le mot $w$ commence par $n$ lettres $a$, le sous-mot $y$ ne contient que des lettres $a$. Posons $|y| = m \ge 1$. Le mot $x$ est de la forme $a^p$ avec $p + m \le n$.
6. Considérons le mot pompé avec $k = 0$ :
   $$xy^0z = xz = a^{n-m}b^n$$
7. Comme $m \ge 1$, on a $n - m < n$. Le nombre de lettres $a$ est strictement inférieur au nombre de lettres $b$. Par conséquent, $xz \notin L$.
8. Ceci contredit le lemme de l'étoile. Le langage $L$ n'est donc **pas rationnel**. CQFD.

#### ⚠️ Les erreurs à bannir absolument
* Oublier de vérifier la condition fondamentale $|xy| \le n$ (beaucoup d'étudiants choisissent $y$ au milieu du mot, ce qui invalide la démonstration).
* Confondre la quantification : c'est l'adversaire (le lemme) qui choisit la décomposition $xyz$, et c'est à vous de construire un contre-exemple valable pour *toutes* les décompositions possibles respectant les contraintes.
* Oublier de préciser que $|y| \ge 1$.