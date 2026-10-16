---
title: "📌 1. Définitions & Cadre d'étude"
description: "Fiche de cours et d'exercice CPGE."
---

## 📌 1. Définitions & Cadre d'étude

Le chapitre de calculabilité et complexité formalise la notion intuitive de "problème soluble par ordinateur" et classifie ces problèmes selon les ressources nécessaires (temps, espace) pour les résoudre.

### Modèles de calcul
* **Machine de Turing (MT) :** Modèle standard de référence. Un ruban infini, une tête de lecture/écriture, et un nombre fini d'états. Une fonction est dite **itérable** ou **calculable** (au sens de Turing) s'il existe une machine de Turing qui s'arrête en donnant le résultat attendu pour toute entrée valide.
* **Langages décidables :** Un sous-ensemble $L \subseteq \Sigma^*$ est décidable (ou récursif) s'il existe une machine de Turing qui s'arrête sur *toutes* les entrées en décidant si le mot appartient ou non à $L$.
* **Langages semi-décidables (ou récursivement énumérables) :** Un langage $L$ est semi-décidable s'il existe une MT qui s'arrête et accepte si $w \in L$, mais peut boucler indéfiniment si $w \notin L$.

### Classes de complexité temporelle
Soit $t : \mathbb{N} \to \mathbb{N}$ une fonction mesurable.
* **$\text{DTIME}(t(n))$ :** La classe des langages décidables par une MT déterministe en temps $O(t(n))$.
* **$\text{P}$ (ou $\text{PTIME}$) :** $\bigcup_{k \in \mathbb{N}} \text{DTIME}(n^k)$. Ensemble des problèmes décidables en temps polynomial par une machine déterministe.
* **$\text{NP}$ :** Ensemble des problèmes décidables par une MT non déterministe en temps polynomial, ou de manière équivalente, dont les solutions peuvent être **vérifiées** en temps polynomial par une MT déterministe.
* **$\text{NP-complétude}$ :** Un langage $L$ est $\text{NP}$-complet s'il est dans $\text{NP}$ et si tout langage de $\text{NP}$ se réduit en temps polynomial à $L$ ($L$-difficile).
---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### Indécidabilité du problème de l'arrêt (Halting Problem)

**Théorème :** Le langage $H_{ATM} = \{ \langle M, w \rangle \mid M \text{ est une MT qui s'arrête sur l'entree } w \}$ est indécidable.

**Démonstration par l'absurde (Diagonalisation de Turing) :**
Supposons par l'absurde qu'il existe une MT décidable $H$ qui prend en entrée $\langle M, w \rangle$ et renvoie "Accepte" si $M$ s'arrête sur $w$, et "Refuse" sinon.

Construisons une nouvelle MT $D$ qui prend en entrée le code d'une MT $\langle M \rangle$ :
1. $D$ simule $H$ sur l'entrée $\langle M, \langle M \rangle \rangle$.
2. Si $H$ accepte, $D$ entre dans une boucle infinie.
3. Si $H$ refuse, $D$ s'arrête (et accepte).

Analysons le comportement de $D$ lorsqu'on lui fournit sa propre description $\langle D \rangle$ :
* Si $D$ s'arrête sur $\langle D \rangle$, alors $H$ renvoie "Accepte" sur $\langle D, \langle D \rangle \rangle$. Par construction, $D$ entre alors en boucle infinie. Contradiction.
* Si $D$ ne s'arrête pas sur $\langle D \rangle$, alors $H$ renvoie "Refuse". Par construction, $D$ s'arrête. Contradiction.

L'hypothèse selon laquelle $H$ existe est donc fausse. $H_{ATM}$ est indécidable. $\blacksquare$

### Théorème de Cook-Levin
* **Énoncé :** Le problème $\text{SAT}$ (satisfiabilité d'une formule logique propositionnelle) est $\text{NP}$-complet. C'est la pierre angulaire de la théorie de la complexité.

---

## 💡 3. Méthodes de calcul & Algorithmes

### Réduction polynomiale
Pour prouver qu'un problème $B$ est $\text{NP}$-difficile :
1. On choisit un problème $A$ connu pour être $\text{NP}$-complet (ex: $\text{SAT}$, $\text{3-SAT}$, $\text{CLIQUE}$).
2. On construit une fonction $f$ calculable en temps polynomial ($\text{FP}$) telle que pour tout mot $w$ :
   $$w \in A \iff f(w) \in B$$
3. On démontre la correction de la réduction (équivalence) et sa complexité polynomiale.

### Arbres de décision et bornes inférieures
* Pour prouver qu'un problème (comme le tri par comparaison) requiert $\Omega(n \log n)$ opérations dans le pire des cas, on modélise l'algorithme par un **arbre de décision**.
* Si un problème admet $N$ outputs possibles valides, l'arbre de décision binaire associé doit avoir au moins $N$ feuilles, ce qui implique une hauteur minimale de $\log_2(N)$.

---

## ⚠️ 4. Pièges classiques aux Concours

1. **Confondre indécidabilité et complexité élevée :** Un problème indécidable (ex: problème de l'arrêt) ne peut *jamais* être résolu par un algorithme qui se termine toujours. Un problème $\text{EXPSPACE}$ ou $\text{2-EXPTIME}$ est *décidable*, mais impraticable en temps/espace. Ne dites jamais qu'un problème indécidable est "en temps exponentiel".
2. **Erreur classique dans les réductions $\text{NP}$ :** Pour montrer $A \le_p B$, il faut réduire un problème *connu* $\text{NP}$-difficile $A$ *vers* le nouveau problème $B$. Faire l'inverse (réduire $B$ vers $A$) prouve seulement que $B$ est plus facile (ou équivalent), mais ne montre en rien la $\text{NP}$-difficulté de $B$.
3. **Le piège du complémentaire :** Si un langage $L$ est dans $\text{NP}$, son complémentaire $\overline{L}$ n'est pas nécessairement dans $\text{NP}$ (il est dans $\text{co-NP}$). Évitez d'affirmer hâtivement l'égalité $\text{NP} = \text{co-NP}$, qui reste l'un des plus grands problèmes ouverts en informatique théorique.
4. **Attention à la définition de $\text{P} = \text{NP}$ :** En entretien ou à l'écrit, rappelez rigoureusement que la question est de savoir s'il existe un algorithme déterministe polynomial pour des problèmes de vérification, et non de prouver qu'aucun algorithme exponentiel n'existe.