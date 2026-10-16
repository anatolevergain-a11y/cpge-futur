---
title: 'Exercice 2 : Petit théorème de Fermat et applications cryptographiques'
description: 'Problème d entraînement type concours pour MP2I.'
---

### 🌐 Énoncé du problème / Cadre d'étude

L'arithmétique modulaire est l'un des piliers fondamentaux de la cryptographie moderne, notamment pour la sécurisation des échanges sur Internet via le système de chiffrement RSA. Le présent problème propose d'étudier le **Petit théorème de Fermat**, de le démontrer par une approche combinatoire, puis d'explorer son application dans la mise en œuvre et l'analyse d'un protocole de chiffrement asymétrique.

On note $\mathbb{Z}$ l'anneau des entiers relatifs, et pour tout entier $n \ge 1$, $\mathbb{Z}/n\mathbb{Z}$ l'anneau des classes d'entiers modulo $n$. On note $(\mathbb{Z}/n\mathbb{Z})^\times$ le groupe des éléments inversibles de cet anneau.

---

### ❓ Questions progressives (incluant une analyse critique du modèle)

1. **Préliminaires sur les coefficients binomiaux et les anneaux quotients**
   * **a)** Soit $p$ un nombre premier. Démontrer que pour tout entier $k$ tel que $1 \le k \le p-1$, le coefficient binomial $\binom{p}{k}$ est divisible par $p$.
   * **b)** En déduire, en considérant l'expansion de $(a+b)^p$ dans un anneau commutatif de caractéristique $p$, ou par récurrence, que pour tout entier $a \in \mathbb{Z}$ et tout nombre premier $p$, on a :
     $$a^p \equiv a \pmod p$$

2. **Démonstration combinatoire alternative**
   * **a)** Soit $p$ un nombre premier et $A$ un alphabet muni de $a$ éléments ($a \ge 1$). On considère l'ensemble $\mathcal{E}$ des mots de longueur $p$ formés avec les lettres de $A$. Quel est le cardinal de $\mathcal{E}$ ?
   * **b)** On définit une action du groupe cyclique $\mathbb{Z}/p\mathbb{Z}$ sur $\mathcal{E}$ par décalage cyclique (rotation vers la droite). Décrire les orbites de cette action. En déduire que $p$ divise $a^p - a$. Retrouver ainsi le Petit théorème de Fermat sous la forme : si $\text{pgcd}(a,p) = 1$, alors $a^{p-1} \equiv 1 \pmod p$.

3. **Application au chiffrement RSA et analyse critique**
   * **a)** Soient $p$ et $q$ deux nombres premiers distincts, et $n = pq$. Soit $e$ un entier premier avec $\varphi(n) = (p-1)(q-1)$. Justifier l'existence d'un entier $d$ tel que $ed \equiv 1 \pmod{\varphi(n)}$.
   * **b)** Soit $M \in \mathbb{Z}/n\mathbb{Z}$ un message (représenté par un entier). On définit le chiffré $C \equiv M^e \pmod n$. Démontrer que $C^d \equiv M \pmod n$.
   * **c)** *Analyse critique du modèle* : Supposons qu'un utilisateur choisisse un module $n$ produit de deux nombres premiers trop proches l'un de l'autre (par exemple, $p$ et $q$ de même taille en bits). Expliquer brièvement comment un attaquant peut factoriser $n$ efficacement (méthode de factorisation de Fermat) et ainsi compromettre la sécurité du système.

---

### 💡 Pistes & Indications méthodologiques

* **Question 1.a)** Exprimez le coefficient binomial à l'aide de factorielles et utilisez le lemme de Gauss sachant que $p$ est premier.
* **Question 1.b)** Pensez à la formule du binôme de Newton dans $\mathbb{Z}/p\mathbb{Z}$ où la caractéristique est $p$, ou raisonnez par récurrence sur $a \ge 0$ en étendant ensuite aux entiers négatifs.
* **Question 2.b)** Utilisez la formule des classes d'orbites. Les orbites ont pour cardinal soit $1$ (mots constants), soit $p$.
* **Question 3.b)** Écrivez $ed = 1 + k(p-1)(q-1)$ pour un certain entier $k$. Appliquez ensuite le Petit théorème de Fermat modulo $p$ et modulo $q$, puis utilisez le théorème des restes chinois (ou l'argument de divisibilité par $pq$).
* **Question 3.c)** Posez $n = x^2 - y^2 = (x-y)(x+y)$ si $p$ et $q$ sont proches, ce qui permet de tester rapidement des carrés parfaits.

---

### 📋 Corrigé détaillé pas à pas

#### 1. Préliminaires sur les coefficients binomiaux et les anneaux quotients

* **a)** Par définition, pour $1 \le k \le p-1$ :
  $$\binom{p}{k} = \frac{p!}{k!(p-k)!} \implies k!\binom{p}{k} = p \frac{(p-1)!}{k!(p-k)!} \times k! \quad (\text{ce qui donne } p\binom{p-1}{k-1} = k\binom{p}{k})$$
  Plus rigoureusement, on a la relation $p \text{divise} \binom{p}{k} k!$. Comme $p$ est premier et que $k < p$, $p$ ne divise aucun des facteurs de $k!$ (car tous sont strictement inférieurs à $p$). Par le lemme de Gauss, $p$ divise le coefficient binomial $\binom{p}{k}$.

* **b)** Soit $a \in \mathbb{N}$ (le cas des entiers négatifs se traite par parité ou congruence). Démontrons par récurrence sur $a$ la proposition $\mathcal{P}(a) : a^p \equiv a \pmod p$.
  * *Initialisation* : Pour $a = 0$, $0^p \equiv 0 \pmod p$, c'est immédiat.
  * *Hérédité* : Supposons $\mathcal{P}(a)$ vraie pour un certain $a \ge 0$. D'après la formule du binôme de Newton :
    $$(a+1)^p = \sum_{k=0}^{p} \binom{p}{k} a^k = a^p + 1 + \sum_{k=1}^{p-1} \binom{p}{k} a^k$$
    Modulo $p$, tous les termes intermédiaires s'annulent puisque $p$ divise $\binom{p}{k}$ pour $1 \le k \le p-1$. Ainsi :
    $$(a+1)^p \equiv a^p + 1 \pmod p$$
    Par hypothèse de récurrence, $a^p \equiv a \pmod p$, donc :
    $$_\text{(mod } p\text{)} \quad (a+1)^p \equiv a + 1$$
    La propriété est donc démontrée pour tout $a \in \mathbb{N}$.

---

#### 2. Démonstration combinatoire alternative

* **a)** L'alphabet $A$ contient $a$ éléments. Un mot de longueur $p$ est un p-uplet d'éléments de $A$. Le nombre de tels mots est donc :
  $$|\mathcal{E}| = a^p$$

* **b)** Le groupe cyclique $\mathbb{Z}/p\mathbb{Z}$ agit sur $\mathcal{E}$ par décalage circulaire. 
  D'après la formule des classes (orbite-stabilisateur), le cardinal de $\mathcal{E}$ est la somme des cardinalités des orbites. 
  Pour chaque mot, la taille de son orbite divise l'ordre du groupe, c'est-à-dire $p$. Comme $p$ est premier, la taille de chaque orbite est soit $1$, soit $p$.
  * Les orbites de taille $1$ correspondent aux mots invariants par toute rotation, c'est-à-dire les mots constitués d'une seule lettre répétée $p$ fois. Il y a exactement $a$ tels mots (un par lettre de l'alphabet).
  * Les autres orbites ont toutes une taille égale à $p$.
  
  Par conséquent, si on note $k$ le nombre d'orbites de taille $p$, on obtient l'équation des classes :
  $$a^p = a + kp$$
  ce qui montre immédiatement que :
  $$a^p \equiv a \pmod p$$
  Si de plus $\text{pgcd}(a, p) = 1$, alors $a$ est inversible modulo $p$. En divisant l'égalité $a^p \equiv a \pmod p$ par $a$ dans $\mathbb{Z}/p\mathbb{Z}$, on obtient :
  $$a^{p-1} \equiv 1 \pmod p$$
  C'est le **Petit théorème de Fermat**.

---

#### 3. Application au chiffrement RSA et analyse critique

* **a)** On a $\text{pgcd}(e, \varphi(n)) = 1$. D'après le théorème de Bézout, il existe des entiers $d$ et $k$ tels que :
  $$ed + k\varphi(n) = 1$$
  Par conséquent, $ed \equiv 1 \pmod{\varphi(n)}$, ce qui assure l'existence de l'exposant de déchiffrement $d$ (souvent calculé via l'algorithme d'Euclide étendu).

* **b)** Soit $C \equiv M^e \pmod n$. On cherche à montrer que $C^d \equiv M^e^d \equiv M \pmod n$.
  On sait que $ed = 1 + t(p-1)(q-1)$ pour un certain $t \in \mathbb{Z}$.
  Regardons modulo $p$ :
  Si $\text{pgcd}(M, p) = 1$, alors par le Petit théorème de Fermat :
  $$M^{p-1} \equiv 1 \pmod p$$
  Dès lors :
  $$M^{ed} = M^{1 + t(p-1)(q-1)} = M \times (M^{p-1})^{t(q-1)} \equiv M \times 1^{t(q-1)} \equiv M \pmod p$$
  Si $\text{pgcd}(M, p) \neq 0$, comme $p$ est premier, $p$ divise $M$, donc $M \equiv 0 \pmod p$, ce qui implique immédiatement $M^{ed} \equiv 0 \equiv M \pmod p$.
  Ainsi, pour tout entier $M$, $M^{ed} \equiv M \pmod p$.
  De même, par symétrie, $M^{ed} \equiv M \pmod q$.
  Puisque $p$ et $q$ sont des nombres premiers distincts et que $n = pq$, $p$ et $q$ divisent $M^{ed} - M$. Leur produit $n$ divise donc également $M^{ed} - M$, c'est-à-dire :
  $$M^{ed} \equiv M \pmod n$$
  Le message initial est parfaitement restitué.

* **c)** *Analyse critique du modèle (Méthode de Fermat)* : 
  Si $p$ et $q$ sont proches, posons $u = \frac{p+q}{2}$ et $v = \frac{p-q}{2}$. Alors $n = pq = u^2 - v^2$, soit :
  $$u^2 - n = v^2$$
  Puisque $p$ et $q$ sont proches, $v$ est petit, ce qui signifie que $u^2$ est un entier très légèrement supérieur à $n$. Un attaquant peut simplement tester les valeurs successives de $x = \lceil \sqrt{n} \rceil, \lceil \sqrt{n} \rceil + 1, \dots$ jusqu'à ce que $x^2 - n$ soit un carré parfait $v^2$. 
  Il en déduit immédiatement $u = x$ et $v = \sqrt{x^2 - n}$, ce qui lui donne les facteurs premiers $p = u + v$ et $q = u - v$, brisant ainsi la sécurité du système RSA. C'est pourquoi, dans la pratique, $p$ et $q$ doivent être choisis rigoureusement de même taille en bits mais suffisamment éloignés pour contrer cette attaque.