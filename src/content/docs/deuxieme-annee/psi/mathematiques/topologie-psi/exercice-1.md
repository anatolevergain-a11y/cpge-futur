---
title: 'Exercice 1 : Compacité et connexité'
description: 'Problème d entraînement type concours pour PSI.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Soit $E = \mathcal{C}([0, 1], \mathbb{R})$ l'espace vectoriel normé des fonctions continues de $[0, 1]$ dans $\mathbb{R}$, muni de la norme infinie définie par :
$$\forall f \in E, \quad \|f\|_\infty = \sup_{t \in [0, 1]} |f(t)|$$

On s'intéresse dans ce problème à la structure topologique de certaines parties de $E$, en particulier à l'interaction entre la compacité et la connexité par arcs. 

Soit $A$ la partie de $E$ définie par :
$$A = \left\{ f \in E \mid f(0) = 0, \, f(1) = 1, \, \forall (x, y) \in [0, 1]^2, \, |f(x) - f(y)| \le |x - y| \right\}$$
Autrement dit, $A$ est l'ensemble des fonctions 1-lipschitziennes sur $[0, 1]$, s'annulant en $0$ et valant $1$ en $1$.

---

### ❓ Questions progressives

1. **Topologie et normes**
   a. Rappeler pourquoi $(E, \|\cdot\|_\infty)$ est un espace vectoriel normé complet.
   b. Soit $(f_n)_{n \in \mathbb{N}}$ une suite d'éléments de $A$. Montrer que cette suite est équicontinue.

2. **Compacité**
   a. Enoncer le théorème d'Arzelà-Ascoli.
   b. Montrer que la partie $A$ est fermée dans $(E, \|\cdot\|_\infty)$.
   c. En déduire que $A$ est une partie compacte de $(E, \|\cdot\|_\infty)$.

3. **Connexité par arcs**
   a. Définir la notion de partie connexe par arcs dans un espace vectoriel normé.
   b. Soit $f \in A$. Pour tout $\lambda \in [0, 1]$, on pose $f_\lambda(t) = (1 - \lambda)f(t) + \lambda t$. Montrer que pour tout $\lambda \in [0, 1]$, $f_\lambda \in A$.
   c. En déduire que $A$ est connexe par arcs, puis qu'il est connexe.

4. **Analyse critique du modèle et optimisation**
   a. L'ensemble $A$ est-il convexe ? Justifier rigoureusement.
   b. Déterminer $\inf_{f \in A} \int_{0}^{1} f(t) \, \text{d}t$ et préciser si cette borne inférieure est un minimum.

---

### 💡 Pistes & Indications méthodologiques

* **Q1.b** : Utiliser directement la définition de la propriété lipschitzienne commune à toutes les fonctions de $A$.
* **Q2.b** : Pour montrer qu'un ensemble est fermé, on considère une suite convergente dans cet ensemble et on montre que sa limite vérifie les propriétés caractéristiques de l'ensemble (passage à la limite dans les inégalités).
* **Q2.c** : Vérifier les hypothèses du théorème d'Arzelà-Ascoli (fermeture, bornitude, équicontinuité).
* **Q3.b** : Vérifiez les trois conditions caractérisant $A$ : $f_\lambda(0)=0$, $f_\lambda(1)=1$, et l'inégalité des accroissements finis.
* **Q4.b** : Représenter graphiquement les contraintes sur $[0, 1]$ pour deviner la fonction optimale (fonction "pente maximale").

---

### 📋 Corrigé détaillé pas à pas

#### 1. Topologie et normes
a. $(E, \|\cdot\|_\infty)$ est l'espace des fonctions continues sur un compact à valeurs dans $\mathbb{R}$. C'est un classique : la complétude résulte du théorème de la double limite (toute suite de Cauchy converge uniformément vers une fonction continue).

b. Soit $(f_n)_{n \in \mathbb{N}}$ une suite d'éléments de $A$. Par définition de $A$, pour tout $n \in \mathbb{N}$ et pour tout $(x, y) \in [0, 1]^2$, on a :
$$|f_n(x) - f_n(y)| \le |x - y|$$
Cette majoration ne dépend ni de $n$ ni de $x, y$. Ainsi, pour tout $\varepsilon > 0$, en choisissant $\delta = \varepsilon$, on a :
$$\forall n \in \mathbb{N}, \forall (x, y) \in [0, 1]^2, \quad |x - y| \le \delta \implies |f_n(x) - f_n(y)| \le \varepsilon$$
La suite $(f_n)_{n \in \mathbb{N}}$ est donc **équicontinue**.

---

#### 2. Compacité
a. **Théorème d'Arzelà-Ascoli** : Soit $F \subset \mathcal{C}(K, \mathbb{R})$ où $K$ est un compact. $F$ est relativement compact si et seulement si :
1. $F$ est borné.
2. $F$ est équicontinu.

b. Montrons que $A$ est fermé. Soit $(f_n)$ une suite d'éléments de $A$ convergeant vers une fonction $f \in E$ pour la norme $\|\cdot\|_\infty$.
* Pour tout $n$, $f_n(0) = 0$. Par convergence uniforme, $f_n(0) \to f(0)$, donc $f(0) = 0$.
* De même, $f_n(1) \to f(1)$, donc $f(1) = 1$.
* Pour tous $x, y \in [0, 1]$ et pour tout $n \in \mathbb{N}$, $|f_n(x) - f_n(y)| \le |x - y|$. En passant à la limite lorsque $n \to +\infty$ (par continuité de la valeur absolue et convergence simple), on obtient :
  $$|f(x) - f(y)| \le |x - y|$$
Ainsi, $f \in A$. L'ensemble $A$ est donc **fermé**.

c. Montrons que $A$ est borné : pour tout $f \in A$ et tout $t \in [0, 1]$, en utilisant $f(0) = 0$ :
$$|f(t)| = |f(t) - f(0)| \le |t - 0| \le 1$$
Donc $\|f\|_\infty \le 1$, ce qui prouve que $A$ est borné. D'après la question 1.b, $A$ est équicontinu. Par le théorème d'Arzelà-Ascoli, $A$ est relativement compact. Étant fermé (Q2.b), $A$ est **compact**.

---

#### 3. Connexité par arcs
a. Une partie $X$ d'un EVN est dite connexe par arcs si pour tous $x, y \in X$, il existe un chemin continu $\gamma : [0, 1] \to X$ tel que $\gamma(0) = x$ et $\gamma(1) = y$.

b. Soit $f \in A$ et $\lambda \in [0, 1]$. Posons $f_\application(t) = f_\lambda(t) = (1 - \lambda)f(t) + \lambda t$.
* $f_\lambda(0) = (1 - \lambda)f(0) + \lambda(0) = 0$.
* $f_\lambda(1) = (1 - \lambda)f(1) + \lambda(1) = (1 - \lambda) + \lambda = 1$.
* Pour tous $x, y \in [0, 1]$ :
  $$|f_\lambda(x) - f_\lambda(y)| = |(1 - \lambda)(f(x) - f(y)) + \lambda(x - y)|$$
  En utilisant l'inégalité triangulaire et le fait que $f \in A$ :
  $$|f_\lambda(x) - f_\lambda(y)| \le (1 - \lambda)|f(x) - f(y)| + \lambda|x - y| \le (1 - \lambda)|x - y| + \lambda|x - y| = |x - y|$$
Ainsi, $f_\lambda \in A$.

c. Soit $Id$ la fonction identité $t \mapsto t$ (qui appartient clairement à $A$). Pour toute fonction $f \in A$, l'application $\Phi : [0, 1] \to A$ définie par $\Phi(\lambda) = f_\lambda$ est continue (car $\|\Phi(\lambda) - \Phi(\mu)\|\infty = |\lambda - \mu| \|f - Id\|_\infty$). 
De plus, $\Phi(0) = f$ et $\Phi(1) = Id$. Ainsi, tout élément de $A$ peut être relié à $Id$ par un arc continu tracé dans $A$. $A$ est donc **connexe par arcs** (et par conséquent **connexe**, la connexité par arcs impliquant la connexité).

---

#### 4. Analyse critique du modèle et optimisation
a. $A$ est **convexe**. En effet, soient $f, g \in A$ et $t \in [0, 1]$. La combinaison convexe $h = \alpha f + \beta g$ (avec $\alpha, \beta \ge 0$ et $\alpha + \beta = 1$) vérifie trivialement $h(0) = 0$, $h(1) = 1$ et l'inégalité des accroissements finis par convexité de la valeur absolue et linéarité.

b. Cherchons $\inf_{f \in A} \int_{0}^{1} f(t) \, \text{d}t$. 
Pour tout $f \in A$, comme $f(0) = 0$ et $f$ est 1-lipschitzienne, on a $f(t) \ge -t$ (et aussi $f(t) \le t$). Plus précisément, la contrainte $f(1) = 1$ combinée avec $|f(t) - f(1)| \le 1 - t$ impose que :
$$f(t) \ge 2t - 1 \quad \text{et} \quad f(t) \ge 0 \quad (\text{selon les zones})$$
Rigoureusement, traçons l'enveloppe minimale : $f(t) \ge \max(0, 2t-1)$ n'est pas forcément minimal partout, mais l'intégrale est minorée par l'aire sous la plus petite fonction 1-lipschitzienne joignant $(0,0)$ à $(1,1)$. 
Considérons la fonction $f_0(t) = t$. Sautorise-t-on mieux ? 
Testons $f_{min}(t) = \begin{cases} 0 & \text{si } t \in [0, 1/2] \\ 2t - 1 & \text{si } t \in [1/2, 1] \end{cases}$ — *attention, cette fonction n'est pas $C^0$ ou pas 1-lipschitzienne partout.*
La fonction $f$ vérifie $f(t) \ge \max(0, 2t-1)$ ? Non, prenons $f(t) = t$, $\int_0^1 t \, dt = 1/2$.
En réalité, la plus petite fonction possible graphiquement sous la contrainte est celle qui reste le plus bas possible, soit $f(t) = t$ ? Non, $f(t) = \max(0, 2t-1)$ a une pente de $2$ (interdit). 
La pente maximale est $1$. Pour minimiser l'aire sous la courbe tout en partant de $0$ et en arrivant à $1$, la stratégie optimale est de rester à $0$ le plus longtemps possible, soit $f(t) = 0$ sur $[0, a]$, puis de monter avec une pente de $1$ jusqu'en $1$. Puisque $f(1) = 1$ et que la pente est au plus $1$, on doit avoir $a = 0$ ? 
Si $f(0)=0$ et $f(1)=1$ avec pente $\le 1$, la fonction minimale est nécessairement $f(t) = t$ pour tout $t \in [0, 1]$ car $f(t) - f(0) \le t - 0 \implies f(t) \le t$ ? Non, $f(t) - f(0) \le t \implies f(t) \le t$ est faux, c'est $|f(t)| \le t$. 
Puisque $f(1)=1$ et $|f(1)-f(t)| \le 1-t$, on a $f(t) \ge t$. 
En effet : $1 - f(t) \le 1 - t \implies f(t) \ge t$.
Puisque $f(t) \ge t$ pour tout $t \in [0, 1]$ et pour tout $f \in A$, on a :
$$\int_{0}^{1} f(t) \, \text{d}t \ge \int_{0}^{1} t \, \text{d}t = \frac{1}{2}$$
De plus, la fonction $f^*(t) = t$ appartient à $A$ et atteint cette valeur. 
Par conséquent :
$$\min_{f \in A} \int_{0}^{1} f(t) \, \text{d}t = \frac{1}{2}$$