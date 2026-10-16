---
title: 'Exercice 1 : Rayon de convergence'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Étude fine et comportement aux bornes d'une série entière à coefficients arithmétiques

**Filière :** PC  
**Matière :** Mathématiques  
Chapitre: ** Séries entières  
**Thème :** Rayon de convergence et analyse asymptotique des coefficients  

---

## Énoncé

Dans tout le problème, on s'intéresse à la série entière de la variable complexe $z$ définie par :
$$f(z) = \sum_{n=1}^{+\infty} a_n z^n$$
où la suite de coefficients $(a_n)_{n \ge 1}$ est donnée par :
$$a_n = \frac{1}{n^\alpha \ln(n+1)}$$
avec $\alpha$ un paramètre réel fixé. 

L'objectif de ce problème est de déterminer le rayon de convergence $R$ de cette série entière, d'étudier son comportement sur le cercle de convergence, et enfin d'analyser les limites de ce modèle mathématique dans le cadre de la modélisation de signaux physiques amortis.

---

## Questions

1. **Détermination préliminaire :** Rappeler la définition du rayon de convergence d'une série entière et énoncer le critère de d'Alembert (version limite) ainsi que la règle de Cauchy.
2. **Calcul du rayon de convergence :** À l'aide d'une règle adaptée, déterminer le rayon de convergence $R$ de la série entière définissant $f(z)$, en fonction de la valeur de $\alpha$.
3. **Étude sur le bord (Cas $\alpha > 1$) :** On suppose dans cette question que $\alpha > 1$. 
   * a) Étudier la convergence de la série numérique sur le cercle ouvert de convergence $|z| = R$.
   * b) Préciser la nature de la convergence (simple, uniforme) sur le disque fermé $\overline{D}(0, R)$.
4. **Comportement aux limites et critique du modèle :** 
   * a) Que se passe-t-il lorsque $\alpha \le 1$ sur le bord du domaine de convergence ?
   * b) **Analyse critique :** Supposons que ces coefficients $a_n$ modèlent l'amplitude des modes spectraux d'un système physique transitoire. Discutez des limites physiques et mathématiques de ce modèle lorsque $n$ tend vers $+\infty$ et lorsque $z$ s'approche de la frontière du disque de convergence.

---

## Pistes et Indications

* **Question 2 :** L'expression avec un $\ln(n+1)$ se prête bien à l'utilisation du critère de Cauchy ou du critère de d'Alembert discret. Pensez à utiliser des équivalents classiques pour lever les indéterminations.
* **Question 3 :** Utilisez les critères de comparaison des séries à termes réels positifs ou le critère de Bertrand pour les séries de Riemann généralisées.
* **Question 4 :** Pour l'analyse critique, examinez la régularité de la fonction somme au voisinage de $z=R$ et questionnez la validité de l'hypothèse de continuité des flux d'énergie.

---

## Corrigé pas à pas

### 1. Détermination préliminaire
Le rayon de convergence $R \in [0, +\infty]$ d'une série entière $\sum a_n z^n$ est le sup (éventuellement infini) des $r \ge 0$ tels que la suite $(|a_n|r^n)$ soit bornée. 
* *Règle de d'Alembert :* Si $\lim_{n\to\infty} \left|\frac{a_{n+1}}{a_n}\right| = L$, alors $R = \frac{1}{L}$ (avec la convention $1/0 = +\infty$ et $1/\infty = 0$).
* *Règle de Cauchy :* Si $\lim_{n\to\infty} \sqrt[n]{|a_n|} = L$, alors $R = \frac{1}{L}$.

### 2. Calcul du rayon de convergence
Appliquons la règle de d'Alembert (ou de Cauchy). Calculons le quotient $|a_{n+1}/a_n|$ :
$$\left|\frac{a_{n+1}}{a_n}\right| = \frac{n^\alpha \ln(n+1)}{(n+1)^\alpha \ln(n+2)} = \left(\frac{n}{n+1}\right)^\alpha \frac{\ln(n+1)}{\ln(n+2)}$$

Analysons la limite lorsque $n \to +\infty$ :
* $\left(\frac{n}{n+1}\right)^\alpha = \left(1 - \frac{1}{n+1}\right)^\alpha \to 1$
* $\frac{\ln(n+1)}{\ln(n+2)} = \frac{\ln(n) + \ln(1 + 1/n)}{\ln(n) + \ln(1 + 2/n)} = \frac{1 + o(1)}{1 + o(1)} \to 1$

Ainsi, $\lim_{n\to\infty} \left|\frac{a_{n+1}}{a_n}\right| = 1$. 
Par conséquent, **le rayon de convergence de la série entière est $R = 1$**, et ce, *quelles que soient les valeurs du paramètre réel $\alpha$*.

### 3. Étude sur le bord (Cas $\alpha > 1$)
* **a) Convergence sur le cercle $|z| = 1$ :**
Soit $z = e^{i\theta}$. Le terme général de la série numérique est le module $|a_n z^n| = |a_n| = \frac{1}{n^\alpha \ln(n+1)}$.
Puisque $\ln(n+1) \underset{n\to\infty}{\sim} \ln(n)$, on a :
$$|a_n| \underset{n\to\infty}{\sim} \frac{1}{n^\alpha \ln(n)}$$
Par le critère de Bertrand (ou comparaison avec une intégrale de type $\int^+\frac{dt}{t^\alpha (\ln t)^\beta}$), la série $\sum |a_n|$ converge si et seulement si $\alpha > 1$ (ou si $\alpha = 1$ et $\beta > 1$, ici $\beta = 1$ donc diverge pour $\alpha=1$).
Donc, pour **$\alpha > 1$**, la série converge **normalement** (donc absolument et uniformément) sur le disque fermé $\overline{D}(0, 1)$.

* **b) Nature de la convergence :**
La convergence est normale sur $\overline{D}(0, 1)$ car $\sup_{|z|\le 1} |a_n z^n| = a_n$ et $\sum a_n$ converge. La somme $f$ est donc continue sur $\overline{D}(0, 1)$.

### 4. Comportement aux limites et critique du modèle
* **a) Cas $\alpha \le 1$ :**
Pour $\alpha \le 1$, le terme général ne tend pas assez vite vers 0 (ou la minoration par les séries de Bertrand échoue), la série diverge grossièrement ou diverge par non-absolue convergence sur le cercle unité.

* **b) Analyse critique des limites du modèle :**
Dans une modélisation physique (par exemple en électromagnétisme ou en mécanique des fluides dissipative), les coefficients $a_n$ représentent l'énergie ou l'amplitude portée par le mode $n$. 
1. **Limites mathématiques :** Le modèle présuppose une transition brutale de comportement en $z=1$ dictée uniquement par l'asymptotique de $n$. En réalité, les systèmes physiques réels lissent ces singularités par des termes dissipatifs non négligeables aux hautes fréquences ($n$ grand).
2. **Limites physiques du modèle discret :** Lorsque $z \to 1^-$ avec $\alpha \le 1$, la fonction $f(z)$ diverge vers $+\infty$. Physiquement, cela impliquerait une énergie infinie stockée dans le système, ce qui viole le principe de conservation de l'énergie. Le modèle mathématique de la série entière montre ici sa limite : il néglige les effets non-linéaires de saturation qui, dans la réalité physique, borneraient l'amplitude des modes.