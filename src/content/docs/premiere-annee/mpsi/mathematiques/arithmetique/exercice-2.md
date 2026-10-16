---
title: 'Exercice 2 : Congruences et petit théorème de Fermat'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Propriétés arithmétiques et dynamiques des suites de puissances modulo $p$

Ce problème propose d'explorer des aspects fondamentaux de l'arithmétique modulaire, allant de l'utilisation classique du Petit Théorème de Fermat à l'étude des structures cycliques des puissances dans $\mathbb{Z}/p\mathbb{Z}$. Une attention particulière sera portée aux limites d'applicabilité des modèles arithmétiques face à des généralisations naïves.

---

## Énoncé

Soit $p$ un nombre premier impair. On s'intéresse aux propriétés de congruences des entiers de la forme $a^n$ modulo $p$, où $a \in \mathbb{Z}$ et $n \in \mathbb{N}$.

On rappelle le **Petit Théorème de Fermat** : pour tout nombre premier $p$ et pour tout entier $a$ non divisible par $p$ ($a \not\equiv 0 \pmod p$), on a :
$$a^{p-1} \equiv 1 \pmod p$$

L'objectif est d'étudier la résolution d'équations modulaires et d'analyser le comportement asymptotique de suites arithmétiques induites par l'exponentiation modulaire, tout en critiquant la portée de certains raisonnements par analogie avec le cas réel.

---

## Questions

1. **Application directe :** Calculer le reste de la division euclidienne de $3^{2024}$ par $7$.
2. **Génération d'un sous-groupe :** Soit $a \in \mathbb{Z}$ tel que $a \not\equiv 0 \pmod p$. On définit l'ensemble $E_a = \{ a^k \pmod p \mid k \in \mathbb{N}^* \}._{\text{min}}$ Montrer que $E_a$ est muni d'une structure cyclique et que le plus petit entier strictement positif $d$ tel que $a^d \equiv 1 \pmod p$ (appelé ordre de $a$ modulo $p$) divise $p-1$.
3. **Équation polynomiale modulaire :** Déterminer l'ensemble des solutions dans $\mathbb{Z}/13\mathbb{Z}$ de l'équation $x^{12} + 5x^6 + 4 \equiv 0 \pmod{13}$.
4. **Analyse critique et limites du modèle :** 
   Un étudiant affirme : *« Par récurrence, si une propriété polynomiale est vraie pour une infinité de valeurs modulo $p$ grâce à Fermat, elle s'étend aux fonctions continues sur $\mathbb{R}$ en remplaçant la congruence par l'égalité réelle. »*
   Analyser la rigueur de cette affirmation, identifier les confusions conceptuelles (notamment entre structure discrète finie et structure continue) et donner un contre-exemple mathématique mettant en échec cette intuition.

---

## Pistes

* **Question 1 :** Penser à utiliser le Petit Théorème de Fermat avec $p=7$. Quel est le lien entre l'exposant $2024$ et $p-1$ ?
* **Question 2 :** Utiliser la division euclidienne de l'exposant $k$ par l'ordre $d$. La finitude de l'anneau $\mathbb{Z}/p\mathbb{Z}$ est un argument clé.
* **Question 3 :** Poser un changement de variable $X = x^6$, résoudre une équation du second degré dans $\mathbb{Z}/13\mathbb{Z}$, puis examiner l'existence de racines 6-ièmes.
* **Question 4 :** Pour critiquer l'affirmation, se rappeler que $\mathbb{Z}/p\mathbb{Z}$ est un corps fini de caractéristique $p$, alors que $\mathbb{R}$ est un corps archimédien infini. La notion de « dérivée » ou de « limite » n'a pas de sens topologique usuel dans $\mathbb{Z}/p\mathbb{Z}$.

---

## Corrigé pas à pas

### 1. Application directe
Le nombre $7$ est un nombre premier. D'après le Petit Théorème de Fermat, pour tout entier $a$ non divisible par $7$ :
$$a^6 \equiv 1 \pmod 7$$
Ici, $a = 3$, qui n'est pas divisible par $7$. Divisons l'exposant $2024$ par $p-1 = 6$ :
$$2024 = 6 \times 337 + 2$$
Ainsi, en utilisant les propriétés des congruences :
$$3^{2024} = 3^{6 \times 337 + 2} = (3^6)^{337} \times 3^2 \equiv 1^{337} \times 9 \equiv 9 \equiv 2 \pmod 7$$
Le reste de la division euclidienne de $3^{2024}$ par $7$ est donc **$2$**.

### 2. Génération d'un sous-groupe
Considérons l'application de $\mathbb{N}^*$ dans $\mathbb{Z}/p\mathbb{Z}$ définie par $k \mapsto a^k \pmod p$. Comme l'ensemble d'arrivée $(\mathbb{Z}/p\mathbb{Z})^*$ est fini (il contient $p-1$ éléments inversibles), la suite des puissances $(a^k)_{k \ge 1}$ ne peut pas prendre une infinité de valeurs distinctes ; elle est nécessairement périodique.
Soit $d$ le plus petit entier strictement positif tel que $a^d \equiv 1 \pmod p$ (l'ordre de $a$ modulo $p$, qui existe bien par bon ordre dans $\mathbb{N}$).
Soit $k \in \mathbb{N}^*$. Par division euclidienne de $k$ par $d$, il existe $(q, r) \in \mathbb{N} \times \mathbb{N}$ tels que $k = qd + r$ avec $0 \le r < d$.
On a alors :
$$a^k = a^{qd+r} = (a^d)^q \cdot a^r \equiv 1^q \cdot a^r \equiv a^r \pmod p$$
Si $r > 0$, alors $a^r \equiv a^k \pmod p$ avec $0 < r < d$, ce qui contredit la minimalité de $d$. Par conséquent, $r = 0$, ce qui signifie que $d$ divise $k$. 
En particulier, en appliquant ce résultat à $k = p-1$ (sachant que $a^{p-1} \equiv 1 \pmod p$ par Fermat), on conclut que **$d$ divise $p-1$**.

### 3. Équation polynomiale modulaire
Soit l'équation :
$$x^{12} + 5x^6 + 4 \equiv 0 \pmod{13}$$
Posons $X = x^6$. L'équation devient une équation du second degré dans le corps $\mathbb{Z}/13\mathbb{Z}$ :
$$X^2 + 5X + 4 \equiv 0 \pmod{13}$$
Calculons le discriminant $\Delta$ dans $\mathbb{Z}/13\mathbb{Z}$ :
$$\Delta = 5^2 - 4(1)(4) = 25 - 16 = 9$$
Dans $\mathbb{Z}/13\mathbb{Z}$, on a $9 \equiv 3^2 \pmod{13}$ (et $(-3)^2 \equiv 10^2 \equiv 9$). Les racines pour $X$ sont donc :
$$X_1 = \frac{-5 + 3}{2} = \frac{-2}{2} = -1 \equiv 12 \pmod{13}$$
$$X_2 = \frac{-5 - 3}{2} = \frac{-8}{2} = -4 \equiv 9 \pmod{13}$$
Il faut maintenant résoudre $x^6 \equiv 12 \pmod{13}$ et $x^6 \equiv 9 \pmod{13}$.
* **Cas 1 : $x^6 \equiv 12 \pmod{13}$**
  D'après le Petit Théorème de Fermat, $x^{12} \equiv 1 \pmod{13}$. Si $x^6 \equiv 12 \pmod{13}$, alors :
  $$x^{12} = (x^6)^2 \equiv 12^2 = 144 \equiv 1 \pmod{13}$$
  ce qui est cohérent. Cependant, d'après la théorie des générateurs (ou par test direct des 13 résidus), $-1$ (c'est-à-dire $12$) n'est pas un carré modulo $13$ (car $12^{(13-1)/2} = 12^6 \equiv -1 \pmod{13}$ par le critère d'Euler). L'équation $x^6 \equiv 12$ impose que $x^2$ soit une racine carrée de $-1$, ce qui est impossible dans $\mathbb{Z}/13\mathbb{Z}$ car $-1$ n'y a pas de racine carrée ($-1$ n'est pas un résidu quadratique modulo $13$). Ainsi, **ce cas ne fournit aucune solution**.
* **Cas 2 : $x^6 \equiv 9 \pmod{13}$**
  Puisque $9 = 3^2$, cela équivaut à $x^6 \equiv 3^2 \pmod{13}$. 
  Testons les valeurs de $\mathbb{Z}/13\mathbb{Z}^*$ : les éléments dont la puissance 6-ième vaut $9$. 
  On remarque que $2^6 = 64 \equiv -1 \neq 9$, etc. En testant les classes, ou par analyse de l'ordre, on trouve que les solutions de $x^6 \equiv 9 \pmod{13}$ sont les éléments $x$ tels que $x^3 \equiv \pm 3 \pmod{13}$. 
  Plus précisément, par l'étude des racines primitives modulo 13 (2 est une racine primitive), on trouve que les solutions sont $x \equiv 4, 9 \pmod{13}$ (car $4^6 = 4096 \equiv 9$ et $9^6 = 531441 \equiv 9$).

L'ensemble des solutions de l'équation initiale est donc **$\{4, 9\} \pmod{13}$** (ainsi que leurs opposés ou équivalents selon la parité, modulo 13).

---

### 4. Analyse critique et limites du modèle

L'affirmation de l'étudiant comporte de graves **confusions épistémologiques et topologiques** :

1. **Confusion entre structure discrète finie et corps continu :**
   Le Petit Théorème de Fermat repose fondamentalement sur la structure d'un *corps fini* $\mathbb{Z}/p\mathbb{Z}$. Les congruences modulo $p$ n'ont pas de notion de « distance » ou de « voisinage » continu compatible avec la topologie usuelle de $\mathbb{R}$.
2. **Absence de continuité dans $\mathbb{Z}/p\mathbb{Z}$ :**
   Dans un ensemble discret, la notion de fonction dérivable ou de prolongement analytique n'a pas d'existence intrinsèque. Dire qu'une propriété « s'étend aux fonctions continues sur $\mathbb{R}$ » par simple analogie formelle nie le fait que l'arithmétique discrète est régie par des structures algébriques rigides (idéaux, anneaux quotients) qui s'annulent dans le passage à la limite vers $\mathbb{R}$.
3. **Contre-exemple formel :**
   Considérons l'identité polynomiale valable pour tout entier $a$ par le petit théorème de Fermat : $a^p - a \equiv 0 \pmod p$. 
   Si l'étudiant tentait d'appliquer son principe pour construire une fonction réelle continue $f(x) = x^p - x$ telle que $f(x) = 0$ pour « une infinité de valeurs » (ici, tous les entiers par le théorème de Fermat généralisé de Lagrange), cela n'implique nullement que la fonction est identiquement nulle sur $\mathbb{R}$ (ce qui est faux puisque $f(x) = 0$ n'a que $2$ ou $3$ racines réelles selon la parité de $p$, alors qu'il y a une infinité de congruences satisfaites dans $\mathbb{Z}$). 
   Plus simplement, la fonction $g(x) = \sin(\pi x)$ s'annule sur tous les entiers $\mathbb{Z}$ (une infinité dénombrable de points), ce qui ressemble à une propriété arithmétique de congruence ($x \equiv 0 \pmod 1$), mais $g$ n'est en rien un polynôme de Fermat et possède un comportement analytique global radicalement différent des structures finies.

**Conclusion critique :** Les outils de l'arithmétique modulaire (Fermat, congruences) sont taillés pour des structures discrètes. Toute tentative de transfert direct vers l'analyse réelle sans passer par des théorèmes de plongement rigoureux (comme l'analyse p-adique, hors programme en MPSI) constitue un sophisme mathématique.