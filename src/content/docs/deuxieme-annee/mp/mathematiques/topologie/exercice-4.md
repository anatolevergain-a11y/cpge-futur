---
title: 'Exercice 2 : Normes équivalentes en dimension finie'
description: 'Problème d entraînement type concours.'
---

# Problème Guidé : Équivalence des normes en dimension finie et aspects quantitatifs

**Filière :** MP  
**Matière :** Mathématiques  
Chapitre: ** Topologie des espaces vectoriels normés  
**Thème :** Normes équivalentes en dimension finie, constantes de compatibilité et analyse critique des estimations.

---

## 1. Énoncé

Soit $E$ un espace vectoriel sur $\mathbb{K}$ ($\mathbb{K} = \mathbb{R}$ ou $\mathbb{C}$) de dimension finie $n \ge 1$. 
On rappelle qu'en dimension finie, toutes les normes sont équivalentes. L'objectif de ce problème est d'étudier constructivement cette équivalence, d'introduire des constantes optimales mesurant "l'écart" entre deux normes, et d'analyser la sensibilité de ces constantes lorsque la dimension $n$ grandit (ordres de grandeur et limites des modèles numériques).

Soient $\|\cdot\|_A$ et $\|\cdot\|_B$ deux normes sur $E$. On cherche à déterminer les constantes optimales $c > 0$ et $C > 0$ telles que :
$$\forall x \in E, \quad c \|x\|_A \le \|x\|_B \le C \|x\|_A$$

---

## 2. Questions

### Partie I : Le cas général et la compacité
1. Soit $(e_1, \dots, e_n)$ une base de $E$. On définit la norme infinie associée par $\|xinfinity = \max_{1 \le i \le n} |x_i|$ pour $x = \sum_{i=1}^n x_i e_i$.
   Montrer que l'application $\Phi : (\mathbb{K}^n, \|\cdot\|_\infty) \to (E, \|\cdot\|_A)$ est continue.
2. En déduire, en utilisant la compacité de la sphère unité pour $\|\cdot\|_\infty$, qu'il existe $c_1 > 0$ et $C_1 > 0$ tels que :
   $$\forall x \in E, \quad c_1 \|x\|_\infty \le \|x\|_A \le C_1 \|x\|_\infty$$
3. Conclure que toutes les normes sur $E$ sont équivalentes.

### Partie II : Étude quantitative entre la norme 1, la norme 2 et la norme infinie
On se place désormais sur $E = \mathbb{K}^n$ muni de ses normes classiques :
- $\|x\|_1 = \sum_{i=1}^n |x_i|$
- $\|x\|_2 = \left( \sum_{i=1}^n |x_i|^2 \right)^{1/2}$
- $\|x\|_\infty = \max_{1 \le i \le n} |x_i|$

4. Établir pour tout $x \in \mathbb{K}^n$ les inégalités suivantes en précisant les cas d'égalité :
   a) $\|x\|_\infty \le \|x\|_2 \le \|x\|_1$
   b) $\|x\|_2 \le \sqrt{n} \|x\|_\infty$
   c) $\|x\|_1 \le n \|x\|_\infty$
   d) $\|x\|_1 \le \sqrt{n} \|x\|_2$

5. **Analyse critique des ordres de grandeur :** 
   Considérons un espace de grande dimension, par exemple $n = 10^6$ (taille typique d'un vecteur d'état en simulation numérique ou en apprentissage statistique). 
   Si l'on mesure l'erreur commise par un algorithme avec la norme $1$ et la norme $2$, quel est le facteur multiplicatif maximal $\kappa_n = \sup_{x \neq 0} \frac{\|x\|_1}{\|x\|_2}$ ? 
   Commentez la pertinence de l'utilisation aveugle de ces normes lorsque $n \to +\infty$.

---

## 3. Pistes et indications

* **Q1 & Q2 :** Utiliser l'inégalité triangulaire et l'inégalité de Cauchy-Schwarz (ou une majoration simple) pour lier $\|\sum x_i e_i\|_A$ à $\sum |x_i| \|e_i\|_A$. Le théorème de Heine (image d'un compact par une application continue) est central.
* **Q4 :** Pour l'inégalité $\|x\|_2 \le \sqrt{n} \|x\|_\infty$, utiliser le fait que chaque $|x_i| \le \|x\|_\infty$ et sommer $n$ fois. Pour $\|x\|_1 \le \sqrt{n} \|x\|_2$, utiliser l'inégalité de Cauchy-Schwarz sur le vecteur $(1, 1, \dots, 1)$ et $(|x_1|, \dots, |x_n|)$.
* **Q5 :** Calculer $\kappa_n$ explicitement grâce aux questions précédentes et évaluer numériquement pour $n = 10^6$. Discuter de la "malédiction de la dimension".

---

## 4. Corrigé pas à pas

### Partie I_1. Soit $x = \sum_{i=1}^n x_i e_i$. Par l'inégalité triangulaire :
   $$\|x\|_A = \left\| \sum_{i=1}^n x_i e_i \right\|_A \le \sum_{i=1}^n |x_i| \|e_i\|_A \le \|x\|_\infty \sum_{i=1}^n \|e_i\|_A$$
   En posant $M = \sum_{i=1}^n \|e_i\|_A$, on a $\|x\|_A \le M \|x\|_\infty$, ce qui prouve la continuité de $\Phi$.

2. La sphère unité $S_\infty = \{x \in \mathbb{K}^n \mid \|x\|_\infty = 1\}$ est fermée et bornée dans $\mathbb{K}^n$ de dimension finie, elle est donc **compacte** par le théorème de Borel-Heine.
   L'application $x \mapsto \|x\|_A$ étant continue, elle atteint ses bornes sur $S_\infty$. Il existe donc $x_1, x_2 \in S_\infty$ tels que :
   $$c_1 = \|x_1\|_A = \min_{x \in S_\infty} \|x\|_A \quad \text{et} \quad C_1 = \|x_2\|_A = \max_{x \in S_\infty} \|x\|_A$$
   Comme $0 \notin S_\infty$ et $\|\cdot\|_A$ est une norme, $c_1 > 0$. Ainsi, pour tout $x \neq 0$, en posant $u = \frac{x}{\|x\|_\infty} \in S_\infty$, on a $c_1 \le \|u\|_A \le C_1$, soit :
   $$c_1 \|x\|_\infty \le \|x\|_A \le C_1 \|x\|_\infty$$
   (L'inégalité restant triviale pour $x=0$).

3. Si $\|\cdot\|_A$ et $\|\cdot\|_B$ sont deux normes sur $E$, on peut les comparer toutes deux à la norme $\|\cdot\|_\infty$. Il existe des constantes $c_A, C_A, c_B, C_B > 0$ telles que :
   $$c_A \|x\|_\infty \le \|x\|_A \le C_A \|x\|_\infty \quad \text{et} \quad c_B \|x\|_\infty \le \|x\|_B \le C_B \|x\|_\infty$$
   Par transitivité, on obtient :
   $$\frac{c_B}{C_A} \|x\|_A \le \|x\|_B \le \frac{C_B}{c_A} \|x\|_A$$
   Les normes sont donc équivalentes.

### Partie II
4. 
   - a) Pour $\|x\|_\infty \le \|x\|_2$ : 
     $\|x\|_\infty^2 = \max_i |x_i|^2 \le \sum_{i=1}^n |x_i|^2 = \|x\|_2^2$. En prenant la racine carrée, on obtient l'inégalité.
     Pour $\|x\|_2 \le \|x\|_1$ : 
     $\|x\|_2^2 = \sum |x_i|^2 \le \left(\sum |x_i|\right)^2 = \|x\|_1^2$ (car tous les termes sont positifs).
     *Cas d'égalité :* Pour $\|x\|_\infty = \|x\|_2$, un seul composant est non nul. Pour $\|x\|_2 = \|x\|_1$, de même, un seul composant est non nul.
   
   - b) Chaque terme $|x_i| \le \|x\|_\infty$, donc :
     $$\|x\|_2^2 = \sum_{i=1}^n |x_i|^2 \le \sum_{i=1}^n \|x\|_\infty^2 = n \|x\|_\infty^2 \implies \|x\|_2 \le \sqrt{n} \|x\|_\infty$$
     *Cas d'égalité :* $|x_1| = |x_2| = \dots = |x_n|$.
   
   - c) $\|x\|_1 = \sum_{i=1}^n |x_i| \le \sum_{i=1}^n \|x\|_\infty = n \|x\|_\infty$.
     *Cas d'égalité :* Même condition que précédente.
   
   - d) D'après l'inégalité de Cauchy-Schwarz dans $\mathbb{R}^n$ entre le vecteur $(1, 1, \dots, 1)$ et $(|x_1|, \dots, |x_n|)$ :
     $$\sum_{i=1}^n 1 \cdot |x_i| \le \left(\sum_{i=1}^n 1^2\right)^{1/2} \left(\sum_{i=1}^n |x_i|^2\right)^{1/2} \implies \|x\|_1 \le \sqrt{n} \|x\|_2$$
     *Cas d'égalité :* $|x_1| = |x_2| = \dots = |x_n|$.

5. **Analyse critique des ordres de grandeur :**
   D'après la question 4-d, on a $\frac{\|x\|_1}{\|x\|_2} \le \{\sqrt{n}}$. Le supremum est atteint pour le vecteur $x = (1, 1, \dots, 1)$, pour lequel :
   $$\|x\|_1 = n \quad \text{et} \quad \|x\|_2 = \sqrt{n} \implies \frac{\|x\|_1}{\|x\|_2} = \sqrt{n}$$
   Ainsi, $\kappa_n = \sqrt{n}$.
   
   *Application numérique pour $n = 10^6$ :*  
   $\kappa_n = \sqrt{10^6} = 10^3 = 1000$.

   *Analyse critique et limites du modèle :*  
   Bien que mathématiquement toutes les normes soient équivalentes en dimension finie, les constantes d'équivalence dépendent fortement de la dimension $n$. Pour $n = 10^6$, un résidu ou une erreur mesurée à $10^{-5}$ en norme $2$ peut atteindre $10^{-2}$ en norme $1$. 
   * **Conséquence pratique :** Dans les grands systèmes (apprentissage automatique, résolution numérique d'EDP), négliger la dépendance en $\sqrt{n}$ ou $n$ des constantes d'équivalence conduit à des catastrophes numériques (erreurs d'arrondi sous-estimées, instabilité d'algorithmes d'optimisation). Le choix de la norme doit être dicté par la physique du problème et non par de simples considérations topologiques abstraites.