---
title: 'Cours : Algorithmique du texte'
description: 'Synthèse de cours, théorèmes fondamentaux et démonstrations.'
---

## 📌 1. Définitions & Cadre d'étude

Soit $\Sigma$ un alphabet fini, c'est-à-dire un ensemble non vide de symboles dits *caractères*. Un **mot** (ou texte) sur l'alphabet $\Sigma$ est une suite finie de caractères. 
- L'ensemble de tous les mots sur $\Sigma$ est noté $\Sigma^*$.
- Le mot vide, noté $\varepsilon$, est l'unique mot de longueur $0$. La longueur d'un mot $T$ est notée $|T|$.
- Si $T = c_0 c_1 \dots c_{n-1}$ avec $c_i \in \Sigma$, un **facteur** (ou sous-chaîne) de $T$ est un sous-mot contigu $T[i..j] = c_i c_{i+1} \dots c_j$ pour $0 \le i \le j < n$.

Le problème central de l'algorithmique du texte est le **problème de la recherche de motif** (*pattern matching*) :
> Étant donnés un texte $T$ de longueur $n$ et un motif $P$ de longueur $m$ (avec $m \le n$), tous deux sur l'alphabet $\Sigma$, déterminer toutes les occurrences de $P$ dans $T$, c'est-à-dire les indices $i$ tels que $T[i..i+m-1] = P$.

---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### Théorème 1 : Complexité naive et complexité optimale
L'algorithme naïf teste toutes les positions possibles de $P$ dans $T$. Sa complexité temporelle dans le pire des cas est en $\mathcal{O}((n-m+1)m)$, soit $\mathcal{O}(nm)$. 

Il existe des algorithmes plus sophistiqués (KMP, Boyer-Moore, Rabin-Karp) ramenant la complexité dans le pire des cas à $\mathcal{O}(n + m)$ (ou $\mathcal{O}(n)$ lorsque $m \le n$).

### Démonstration / Analyse du pré-traitement de Knuth-Morris-Pratt (KMP)
Le cœur de l'algorithme de Knuth-Morris-Pratt repose sur la construction d'un tableau $\pi$ (souvent appelé tableau des *préfixes stricts* ou *pi-table*). 

Soit $P = p_0 p_1 \dots p_{m-1}$. Pour tout $i \in \{0, \dots, m-1\}$, $\pi[i]$ est défini comme la longueur du plus grand bord propre du préfixe $P[0..i]$. Un bord d'un mot est un mot qui est à la fois un préfixe et un suffixe propre de ce mot.

Formellement :
$$\pi[i] = \max \{ k \in \{0, \dots, i\} \mid P[0..k-1] = P[i-k+1..i] \text{ avec } k < i+1 \}$$
Par convention, $\pi[0] = 0$.

#### Lemme d'optimalité du calcul de $\pi$
Le tableau $\pi$ peut être calculé en temps $\mathcal{O}(m)$ et en espace $\mathcal{O}(m)$ grâce à une approche incrémentale.

**Démonstration (Esquisse) :**
Supposons que $\pi[0], \dots, \pi[i-1\}$ soient connus. Pour calculer $\pi[i]$, on pose $j = \pi[i-1]$. 
1. Si $p_i = p_j$, alors $\pi[i] = j + 1$.
2. Si $p_i \neq p_j$ et $j > 0$, on réitère la comparaison en posant $j \leftarrow \pi[j-1]$ jusqu'à ce que $p_i = p_j$ ou $j = 0$.
3. Si $p_i \neq p_j$ et $j = 0$, alors si $p_i = p_0$, $\pi[i] = 1$, sinon $\pi[i] = 0$.

L'analyse amortie (via un potentiel mesurant l'indice $j$) montre que le nombre total de décrémentations de $j$ au cours du calcul de $\pi$ est borné par le nombre d'incrémentations, soit $\mathcal{O}(m)$ opérations au total. $\blacksquare$

---

## 💡 3. Méthodes de calcul & Algorithmes

### Algorithme de Knuth-Morris-Pratt (KMP)
L'algorithme utilise le tableau $\pi$ pour éviter de revenir en arrière dans le texte $T$ lors d'une non-concordance.

```ocaml
(* Recherche KMP en O(n + m) *)
let kmp_search (p : string) (t : string) : int list =
  let m = String.length p in
  let n = String.length t in
  if m = 0 then [] else
  let pi = Array.make m 0 in
  (* Calcul du tableau pi *)
  let () =
    let j = ref 0 in
    for i = 1 to m - 1 do
      while !j > 0 && p.[i] <> p.[!j] do
        j := pi.[!j - 1]
      done;
      if p.[i] = p.[!j] then incr j;
      pi.[!i] <- !j
    done
  in
  (* Recherche proprement dite *)
  let results = ref [] in
  let j = ref 0 in
  for i = 0 to n - 1 do
    while !j > 0 && t.[i] <> p.[!j] do
      j := pi.[!j - 1]
    done;
    if t.[i] = p.[!j] then incr j;
    if !j = m then begin
      results := (i - m + 1) :: !results;
      j := pi.[m - 1]
    end
  done;
  List.rev !results
```

### Algorithme de Rabin-Karp (Hachage glissant)
L'algorithme de Rabin-Karp utilise une fonction de hachage glissante (*rolling hash*) pour calculer l'empreinte polynomiale de chaque facteur de longueur $m$ de $T$ en temps $\mathcal{O}(1)$ amorti après un calcul initial en $\mathcal{O}(m)$.

Soit un alphabet dont les caractères sont identifiés à des entiers. Le hash d'un mot $S$ de longueur $m$ est défini par :
$$H(S) = \sum_{k=0}^{m-1} S[m-1-k] \cdot d^k \pmod q$$
où $d$ est la base (par exemple la taille de l'alphabet) et $q$ un nombre premier suffisamment grand.

Le passage du hash de $T[i..i+m-1]$ au hash de $T[i+1..i+m]$ se fait via la relation de récurrence en $\mathcal{O}(1)$ :
$$H(T[i+1..i+m]) = \left( (H(T[i..i+m-1]) - T[i] \cdot d^{m-1}) \cdot d + T[i+m] \right) \pmod q$$

---

## ⚠️ 4. Pièges classiques aux Concours

1. **Confusion indices 0-based et 1-based :** 
   Les formules de récurrence (notamment pour $\pi$ dans KMP ou les indices de fenêtres) varient selon que l'on manipule des tableaux indicés à partir de $0$ ou de $1$. En entretien ou sur copie, explicitez toujours votre convention.

2. **Dépassements entiers avec le hachage (Rabin-Karp) :**
   En OCaml, les entiers standards (`int`) sont signés sur 63 bits (en 64 bits). Lors du calcul de polynômes de hachage, des dépassements de capacité (*overflows*) non gérés mènent à des bugs silencieux. Il est impératif d'utiliser des calculs modulaires explicites ou le type `Int64`.

3. **Complexité amortie vs Pire cas :**
   Ne pas confondre la complexité dans le pire des cas (KMP : $\mathcal{O}(n+m)$ garanti) et la complexité probabiliste ou moyenne (Rabin-Karp : $\mathcal{O}(n+m)$ en moyenne, mais $\mathcal{O}(nm)$ dans le pire des cas à cause des collisions de hachage si le nombre premier $q$ est mal choisi ou en présence d'un adversaire).

4. **Invariants de boucle dans KMP :**
   Oublier de maintenir l'invariant sur l'indice $j$ (le nombre de caractères déjà matchés) lors de la phase de rattrapage (`while !j > 0 && ...`) conduit à des boucles infinies ou des indices hors limites (`Invalid_argument`). Veillez à bien écrire la mise à jour $j \leftarrow \pi[j-1]$.