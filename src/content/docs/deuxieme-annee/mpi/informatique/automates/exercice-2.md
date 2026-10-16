---
title: 'Exercice 2 : Expressions régulières'
description: 'Problème d entraînement type concours.'
---

# Problème : Analyse, compilation et limites des expressions régulières à grande échelle

**Filière :** MPI  
**Matière :** Informatique  
**Thème :** Automates et langages, Expressions régulières  

---

## Énoncé

Les expressions régulières (regex) sont omniprésentes dans l'industrie logicielle pour la validation de données, le filtrage de flux textuels ou l'analyse lexicale. Cependant, leur sémantique apparente de « boîte noire » masque des complexités algorithmiques redoutables, notamment face à des volumes de données massifs ou à des structures malicieusement conçues (attaques de type ReDoS - *Regular Expression Denial of Service*).

Ce problème se propose d'étudier la traduction formelle d'un sous-ensemble d'expressions régulières en automates finis déterministes (AFD), d'analyser la complexité spatiale et temporelle de cette transformation, et d'évaluer de manière critique les limites pratiques du modèle face à des contraintes industrielles réalistes (par exemple, le traitement de fichiers journaux de $\text{Go}$ à $\text{To}$).

On considère un alphabet fini $\Sigma$. L'ensemble des expressions régulières sur $\Sigma$, noté $\mathcal{R}$, est défini inductivement par :
1. $\emptyset$ (langage vide)
2. $\varepsilon$ (mot vide)
3. Pour tout $a \in \Sigma$, $a$ (caractère unique)
4. $(E_1 \cdot E_2)$ (concaténation)
5. $(E_1 | E_2)$ (alternance)
6. $(E^*)$ (étoile de Kleene)

---

## Questions

### Partie I : Représentation et arbres de syntaxe abstraite

1. **(Q1)** Définir un type algébrique en OCaml permettant de représenter les expressions régulières de $\mathcal{R}$.
2. **(Q2)** Écrire une fonction OCaml `anullable : regex -> bool` qui détermine si le langage engendré par une expression régulière contient le mot vide $\varepsilon$.
3. **(Q3)** Pour une expression $E \in \mathcal{R}$, on définit l'ensemble des *premiers* (FIRST) comme l'ensemble des premiers caractères possibles des mots engendrés par $E$. Formaliser mathématiquement cet ensemble, puis proposer une fonction OCaml calculant cet ensemble pour une expression donnée (on pourra utiliser des modules d'ensembles).

### Partie II : Construction de Thompson et Déterministisation

4. **(Q4)** Rappeler brièvement le principe de la construction de Thompson permettant de transformer une expression régulière en un automate fini non déterministe avec $\varepsilon$-transitions (AFN-$\varepsilon$). Quel est l'ordre de grandeur du nombre d'états de l'automate obtenu pour une expression de taille $n$ (mesurée par le nombre de symboles) ?
5. **(Q5)** On dispose d'un AFN-$\varepsilon$ à $N$ états. Décrire l'algorithme de construction par sous-ensembles (construction de Rabin-Scott) permettant d'obtenir un AFD équivalent. Quelle est la borne supérieure théorique du nombre d'états de l'AFD ainsi obtenu ? Commenter cette borne d'un point de vue réaliste.
6. **(Q6)** Soit l'expression régulière $R_n = (a|b)^* a (a|b)^n$ sur l'alphabet $\Sigma = \{a, b\}$. Évaluer le nombre d'états de l'AFD minimal reconnaissant le langage associé lorsque $n = 30$ (ordre de grandeur d'une clé de hachage ou d'un préfixe réseau). Conclure quant à la faisabilité naïve de cette approche pour des $n$ grands (ex. $n = 1024$).

### Partie III : Analyse critique et limites industrielles

7. **(Q7)** En pratique, de nombreux moteurs de regex (comme PCRE en C ou le moteur de Java) n'utilisent pas la conversion en AFD mais un parcours par backtracking. Expliquer pourquoi certaines expressions, telles que $E = (a^*)^* b$ évaluées sur une chaîne composée de 40 caractères $a$ suivis d'un $c$, conduisent à une explosion combinatoire du temps de calcul (comportement en $\mathcal{O}(2^n)$).
8. **(Q8)** On cherche à analyser un flux de données réseau à un débit $D = 10\text{ Gbps}$ ($\text{Gigabits par seconde}$) à l'aide d'un AFD stocké en mémoire vive (RAM). Sachant qu'un état de l'automate nécessite une table de transition de taille $|\Sigma| \times \text{sizeof(pointeur)}$ (avec $|\Sigma| = 256$ pour l'ASCII étendu et des pointeurs sur 64 bits), estimer la taille maximale $N_{\max}$ d'un AFD pour que sa table de transition tienne entièrement dans un cache L3 ultra-rapide de $32\text{ Mio}$. Quelle est la conséquence pour des expressions régulières industrielles complexes ?

---

## Pistes et Indications

* **Q2 :** Penser à une récurrence structurelle. Le langage d'une étoile $E^*$ contient toujours $\varepsilon$.
* **Q5 :** La construction par sous-ensembles peut théoriquement mener à $2^N$ états. Relier cela au théorème de Myhill-Nerode.
* **Q6 :** Pour $R_n$, le langage correspond aux mots dont le $n$-ième caractère en partant de la fin est un $a$. Combien de contextes suffixes distincts cela génère-t-il ?
* **Q8 :** Convertir le débit en octets par seconde, puis évaluer la contrainte matérielle d'accès mémoire en cycles d'horloge CPU.

---

## Corrigé pas à pas

### Partie I
Q1: ** En OCaml, le type algébrique se traduit naturellement ainsi :
```ocaml
type regex =
  | Empty
  | Epsilon
  | Char of char
  | Concat of regex * regex
  | Alt of regex * regex
  | Star of regex
```
Q2: ** La fonction `anullable` teste si $\varepsilon \in L(E)$ :
```ocaml
let rec anullable (e : regex) : bool =
  match e with
  | Empty -> false
  | Epsilon -> true
  | Char _ -> false
  | Concat (e1, e2) -> anullable e1 && anullable e2
  | Alt (e1, e2) -> anullable e1 || anullable e2
  | Star _ -> true
```
Q3: ** Mathématiquement, $\text{FIRST}(E) = \{ c \in \Sigma \mid \exists w \in \Sigma^*, cw \in L(E) \}$.
- $\text{FIRST}(\emptyset) = \emptyset$
- $\text{FIRST}(\varepsilon) = \emptyset$
- $\text{FIRST}(a) = \{a\}$
- $\text{FIRST}(E_1 \cdot E_2) = \text{FIRST}(E_1) \cup (\text{if }\text{anullable}(E_1)\text{ then }\text{FIRST}(E_2)\text{ else }\emptyset)$
- $\text{FIRST}(E_1 | E_2) = \text{FIRST}(E_1) \cup \text{FIRST}(E_2)$
- $\text{FIRST}(E^*) = \text{FIRST}(E)$

### Partie II
Q4: ** La construction de Thompson associe à chaque opérateur des gadgets à $\varepsilon$-transitions. Pour une expression de taille $n$, l'AFN-$\varepsilon$ produit possède au plus $\mathcal{O}(n)$ états et $\mathcal{O}(n)$ transitions.
Q5: ** La construction par sous-ensembles (Rabin-Scott) produit un AFD dont l'ensemble des états est un sous-ensemble de l'ensemble des parties de l'AFN-$\varepsilon$. La borne supérieure est donc de **$2^N$ états** (où $N$ est le nombre d'états de l'AFN). 
*Analyse critique :* Cette explosion exponentielle rend la méthode naïve impraticable pour de grandes expressions, car la table de transition devient trop vaste pour la mémoire (phénomène de *state explosion*).
Q6: ** Pour $R_n = (a|b)^* a (a|b)^n$, le test porte sur la présence d'un $a$ à la $n$-ième position en partant de la fin. Pour s'en souvenir, l'automate doit mémoriser les $n$ derniers caractères lus. Comme l'alphabet est binaire de taille 2, il y a $2^n$ histoires possibles pour les $n$ derniers caractères. L'AFD minimal possède donc exactement **$2^n$ états**.
Pour $n = 30$, $2^{30} \approx 1,07 \times 10^9$ états. La construction d'un tel AFD est totalement infaisable en pratique (plusieurs dizaines de gigaoctets de mémoire rien que pour l'automate), démontrant la limite théorique de la déterministisation directe.

### Partie III
Q7: ** Le backtracking évalue l'expression en testant récursivement les branches (notamment avec les fermetures de Kleene imbriquées comme $(a^*)^*$). Avec $E = (a^*)^* b$ et une chaîne de $40$ caractères $a$ suivis de $c$, le moteur tente toutes les partitions possibles des $40$ caractères $a$ dans les étoiles imbriquées, conduisant à $2^{40}$ chemins d'exploration. C'est la cause des vulnérabilités **ReDoS**, exploitables pour saturer un serveur web par déni de service.
Q8: ** 
1. *Débit :* $D = 10\text{ Gbps} = \frac{10 \times 10^9}{8}\text{ o/s} = 1,25\text{ Go/s}$. Pour traiter ce flux en temps réel, le processeur dispose de $\sim 1\text{ nanoseconde}$ par octet.
2. *Contrainte mémoire :* Un cache L3 de $32\text{ Mio}$ doit contenir la table de transition. Chaque état possède 256 transitions (pour $|\Sigma| = 256$). Si une transition est un pointeur ou un indice sur 4 octets, un état occupe $256 \times 4 = 1024\text{ octets} = 1\text{ Kio}$.
3. Le nombre maximal d'états $N_{\max}$ logeant dans le cache L3 est donc :
   $$N_{\max} = \frac{32 \times 1024 \text{ Kio}}{1 \text{ Kio/état}} = 32\,768 \text{ états}.$$

*Conclusion critique :* Dès que l'expression régulière est complexe (générant un AFD de plus de $\sim 33\,000$ états), la table ne tient plus dans le cache L3 du processeur. Les accès répétés à la RAM principale (dont la latence est de l'ordre de $50 à 100\text{ ns}$) provoquent des défauts de cache massifs. **Il devient physiquement impossible de traiter un trafic réseau à $10\text{ Gbps}$ avec un AFD pur de grande taille**, obligeant les ingénieurs réseau à utiliser des architectures matérielles spécialisées (FPGA) ou des heuristiques d'évaluation partielle.