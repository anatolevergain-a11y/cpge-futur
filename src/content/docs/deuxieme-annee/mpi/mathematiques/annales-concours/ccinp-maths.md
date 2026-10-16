---
title: 'CCINP - Mathématiques'
description: 'Sujet type concours corrigé pas à pas pour la filière MPI.'
sidebar:
  badge:
    text: 'Annale Concours'
    variant: 'caution'
---

## 📄 Partie 1 : Énoncé du Problème

Dans le cadre de l'étude des régimes transitoires de systèmes dynamiques complexes à retards répartis, on est conduit à analyser des opérateurs différentiels agissant sur des espaces fonctionnels de dimension infinie. Plus particulièrement, l'analyse de la stabilité asymptotique d'un tel système régis par des équations intégro-différentielles amène à étudier la nature topologique de certains ensembles de fonctions holomorphes et à évaluer des sommes de séries de fonctions dépendant d'un paramètre complexe.

Le présent problème se propose d'étudier, à l'aide d'outils topologiques avancés (compacité dans les espaces vectoriels normés, théorème de Weierstrass-Borel) et de l'analyse complexe (rayons de convergence, développements en séries entières, interversion de limites), une famille d'applications définies par des intégrales à paramètre.

Soit $\mathcal{E} = \mathcal{C}([0, 1], \mathbb{R})$ l'espace vectoriel normé des fonctions continues de $[0, 1]$ dans $\mathbb{R}$, muni de la norme de la convergence uniforme notée $\|\cdot\|_{\infty}$. 
Pour tout entier $n \in \mathbb{N}$, on définit la fonction polynomiale $P_n$ sur $\mathbb{R}$ par :
$$P_n(x) = \frac{1}{n!} \int_0^1 t^n e^{xt} \, dt$$
L'objectif est d'analyser la convergence de la série de fonctions $\sum_{n \ge 0} P_n(x)$ sur divers domaines de $\mathbb{R}$ ou de $\mathbb{C}$, ainsi que d'étudier les propriétés topologiques de l'ensemble des fonctions constructibles par cette démarche.

---

## ❓ Partie 2 : Questions

### Partie A : Étude d'une suite de fonctions et rayon de convergence

1. **(Calcul explicite)** Calculer explicitement l'expression de $P_n(x)$ pour tout $x \in \mathbb{R} \setminus \{0\}$ et pour $x = 0$. Montrer que $P_n$ prolonge par continuité une fonction entière sur $\mathbb{C}$.
2. **(Estimation asymptotique)** Établir un encadrement ou un équivalent simple de $|P_n(x)|$ lorsque $n \to +\infty$, pour un réel $x$ fixé.
3. **(Série entière associée)** On pose, pour $z \in \mathbb{C}$, $f(z) = \sum_{n=0}^{+\infty} P_n(z) z^n$. Déterminer le rayon de convergence de cette série entière.
4. **(Expression intégrale de la somme)** Pour $z$ dans le disque ouvert de convergence, exprimer $f(z)$ sous forme d'une intégrale simple à l'aide d'une interversion justifiée entre somme et intégrale.

### Partie B : Topologie et propriétés fonctionnelles

5. **(Continuité et bornitude)** Soit $\mathcal{F} = \{P_n \mid n \in \mathbb{N}\}$. L'ensemble $\mathcal{F}$ est-il un partie bornée de $(\mathcal{E}, \|\cdot\|_{\infty})$ ? Est-il relativement compact dans $(\mathcal{E}, \|\cdot\|_{\infty})$ ? On justifiera avec rigueur en invoquant le théorème d'Arzelà-Ascoli.
6. **(Opérateur de translation)** On définit l'opérateur $\Phi : \mathcal{E} \to \mathcal{E}$ par :
   $$\forall u \in \mathcal{E}, \quad \forall x \in [0, 1], \quad (\Phi(u))(x) = \int_0^x e^{t-x} u(t) \, dt$$
   Montrer que $\Phi$ est un endomorphisme continu de $(\mathcal{E}, \|\cdot\|_{\infty})$ et calculer sa norme subie $\|\Phi\|_L$.
7. **(Étude spectrale discrète)** Déterminer l'ensemble des valeurs propres de l'opérateur $\Phi$.

---

## 💡 Partie 3 : Rapport du Jury (Pièges et attentes)

Le jury tient à souligner plusieurs points fondamentaux observés lors de la correction de cette épreuve :
- **Intégration par parties / récurrence :** Pour la question 1, de nombreux candidats se bloquent dans le calcul intégral de $P_n(x)$ en n'utilisant pas judicieusement des intégrations par parties successives ou une récurrence bien posée.
- **Interversion $\sum$ et $\int$ :** À la question 4, l'utilisation du théorème de convergence normale sur tout compact est indispensable. Justifier simplement « par isomorphisme » ou sans citer explicitement le théorème adéquat est sanctionné.
- **Arzelà-Ascoli :** À la question 5, la confusion entre « fermé et borné » et « compact » en dimension infinie persiste. L'application correcte d'Arzelà-Ascoli nécessite de vérifier l'équicontinuité de la famille $\mathcal{F}$, ce qui demande de manipuler proprement le théorème des accroissements finis ou une borne uniforme sur les dérivées.
- **Norme d'opérateur :** Pour la question 6, le calcul de $\|\Phi\|_L$ exige de démontrer à la fois une majoration par un réel $M$ et l'atteinte ou l'approximation de ce sup par une suite de fonctions bien choisies.

---

## 📋 Partie 4 : Corrigé Détaillé et Analyse

### Partie A : Étude d'une suite de fonctions et rayon de convergence

#### Question 1 :
Pour $x = 0$, on a immédiatement :
$$P_n(0) = \frac{1}{n!} \int_0^1 t^n \, dt = \frac{1}{n!(n+1)}$$

Pour $x \neq 0$, on procède par intégration par parties. Posons $u(t) = e^{xt}$ et $v'(t) = t^n$, de sorte que $u'(t) = x e^{xt}$ et $v(t) = \frac{t^{n+1}}{n+1}$. Il vient :
$$P_n(x) = \frac{1}{n!} \left( \left[ \frac{t^{n+1}}{n+1} e^{xt} \right]_0^1 - \int_0^1 \frac{t^{n+1}}{n+1} x e^{xt} \, dt \right) = \frac{e^x}{(n+1)!} - \frac{x}{(n+1)!} \int_0^1 t^{n+1} e^{xt} \, dt$$

En itérant ou en reconnaissant le développement en série, on peut aussi utiliser directement l'expression de l'exponentielle :
$$P_n(x) = \frac{1}{n!} \int_0^1 t^n \sum_{k=0}^{+\infty} \frac{x^k t^k}{k!} \, dt$$
Par convergence normale de la série sur le segment $[0, 1]$ (pour tout $x$ fixé), on peut permuter somme et intégrale :
$$P_n(x) = \frac{1}{n!} \sum_{k=0}^{+\infty} \frac{x^k}{k!} \int_0^1 t^{n+k} \, dt = \sum_{k=0}^{+\infty} \frac{x^k}{n! k! (n+k+1)}$$
Cette expression montre que $P_n$ est développable en série entière sur $\mathbb{C}$ tout entier, c'est donc une fonction entière.

#### Question 2 :
Pour $x \in \mathbb{R}$ fixé, la fonction $t \mapsto e^{xt}$ est continue sur $[0, 1]$, donc bornée par $M_x = \max(1, e^x)$. Ainsi :
$$|P_n(x)| \le \frac{1}{n!} \int_0^1 t^n |e^{xt}| \, dt \le \frac{M_x}{n!} \int_0^1 t^n \, dt = \frac{M_x}{n!(n+1)}$$
On en déduit que $|P_n(x)| = O\left(\frac{1}{(n+1)!}\right)$ lorsque $n \to +\infty$.

#### Question 3 :
La série entière associée est $\sum_{n \ge 0} P_n(z) z^n$. 
D'après l'estimation précédente, pour $z \in \mathbb{C}$, on a :
$$|P_n(z) z^n| \le \frac{M_{|z|}}{n!(n+1)} |z|^n$$
Considérons le terme général $a_n(z) = \frac{|z|^n}{n!(n+1)}$. On applique la règle de d'Alembert (ou le critère du quotient) :
$$\frac{a_{n+1}(z)}{a_n(z)} = \frac{|z|^{n+1}}{(n+1)!(n+2)} \times \frac{n!(n+1)}{|z|^n} = \frac{|z|}{n+2} \underset{n \to +\infty}{\longrightarrow} 0 < 1$$
Par conséquent, pour tout $z \in \mathbb{C}$, la série converge absolument. Le rayon de convergence de la série entière est donc **$R = +\infty$**.

#### Question 4 :
Pour tout $z \in \mathbb{C}$, la somme $f(z) = \sum_{n=0}^{+\infty} P_n(z) z^n$ s'écrit, en remplaçant $P_n(z)$ par son expression intégrale :
$$f(z) = \sum_{n=0}^{+\infty} \left( \frac{1}{n!} \int_0^1 t^n e^{zt} \, dt \right) z^n = \sum_{n=0}^{+\ins} \int_0^1 \frac{(zt)^n}{n!} e^{zt} \, dt$$
Sur tout compact de $\mathbb{C}$, la série de fonctions $\sum \frac{(zt)^n}{n!} e^{zt}$ converge uniformément par application du critère de Weierstrass (car $|zt| \le K$ et $|e^{zt}| \le e^K$). On peut donc intervertir sommation et intégration :
$$f(z) = \int_0^1 \left( \sum_{n=0}^{+\infty} \frac{(zt)^n}{n!} \right) e^{zt} \, dt = \int_0^1 e^{zt} e^{zt} \, dt = \int_0^1 e^{2zt} \, dt$$
Si $z = 0$, $f(0) = \int_0^1 1 \, dt = 1$.
Si $z \neq 0$, 
$$f(0) = \left[ \frac{e^{2zt}}{2z} \right]_0^1 = \frac{e^{2z} - 1}{2z}$$

---

### Partie B : Topologie et propriétés fonctionnelles

#### Question 5 :
Étudions la famille $\mathcal{F} = \{P_n \mid n \in \mathbb{N}\}$ dans $(\mathcal{E}, \|\cdot\|_{\infty})$ avec $\mathcal{E} = \mathcal{C}([0, 1], \mathbb{R})$.
- **Caractère borné :** Pour $x \in [0, 1]$, on a $|P_n(x)| \le \frac{e^1}{n!(n+1)} \le e$. Ainsi, pour tout $n \in \mathbb{N}$, $\|P_n\|_{\infty} \le e$. La famille $\mathcal{F}$ est donc **bornée**.
- **Compacité (Arzelà-Ascoli) :** Pour appliquer le théorème d'Arzelà-Ascoli, il faut vérifier l'équicontinuité de la famille $\mathcal{F}$ sur $[0, 1]$. 
  Calculons la dérivée de $P_n$ :
  $$P_n'(x) = \frac{1}{n!} \int_0^1 t^{n+1} e^{xt} \, dt$$
  Pour tout $x \in [0, 1]$ et tout $n \in \mathbb{N}$ :
  $$|P_n'(x)| \le \frac{1}{n!} \int_0^1 t^{n+1} e^t \, dt \le \frac{e}{(n+1)!} \le e$$
  La famille des dérivées est bornée uniformément par $M = e$. Par le théorème des accroissements finis, pour tous $x, y \in [0, 1]$ et tout $n \in \mathbb{N}$ :
  $$|P_n(x) - P_n(y)| \le e |x - y|$$
  Cette majoration est indépendante de $n$, ce qui prouve que $\mathcal{F}$ est **équicontinue**.
  De plus, $\mathcal{F}$ est bornée. D'après le théorème d'Arzelà-Ascoli, **$\mathcal{F}$ est relativement compacte** dans $(\mathcal{E}, \|\cdot\|_{\infty})$.

#### Question 6 :
Soit $u \in \mathcal{E}$. L'application $\Phi(u)$ est définie par :
$$(\Phi(u))(x) = \int_0^x e^{t-x} u(t) \, dt = e^{-x} \int_0^x e^t u(t) \, dt$$
La continuité de $u$ assure celle de $x \mapsto (\Phi(u))(x)$ sur $[0, 1]$. De plus, pour tout $x \in [0, 1]$ :
$$|(\Phi(u))(x)| \le e^{-x} \int_0^x e^t |u(t)| \, dt \le \|u\|_{\infty} e^{-x} \int_0^x e^t \, dt = \|u\|_{\infty} e^{-x} [e^t]_0^x = \|u\|_{\infty} e^{-x} (e^x - 1) = \|u\|_{\infty} (1 - e^{-x})$$
Puisque $1 - e^{-x} \le 1 - e^{-1} < 1$ pour $x \in [0, 1]$ (et atteint 1 en $x=1$), on a :
$$\|\Phi(u)\|_{\infty} \le (1 - e^{-1}) \|u\|_{\infty}$$
L'opérateur $\Phi$ est donc continu (ou borné) et $\|\Phi\|_L \le 1 - e^{-1}$. 
En considérant la fonction constante $u(t) = 1$, on a $(\Phi(1))(x) = 1 - e^{-x}$, dont la norme infinie sur $[0, 1]$ est exactement $1 - e^{-1}$. Par conséquent :
$$\|\Phi\|_L = 1 - e^{-1}$$

#### Question 7 :
Cherchons les valeurs propres de $\Phi$, c'est-à-dire les scalaires $\lambda \in \mathbb{R}$ (ou $\mathbb{C}$) tels qu'il existe $u \in \mathcal{E} \setminus \{0\}$ vérifiant $\Phi(u) = \lambda u$.
Supposons qu'il existe un tel couple $(\lambda, u)$. Pour $x = 0$, on a :
$$(\Phi(u))(0) = \int_0^0 e^{-t} u(t) \, dt = 0$$
D'où $\lambda u(0) = 0$. 
Réécrivons l'équation sous forme différentielle. L'expression de $(\Phi(u))(x)$ est :
$$e^x (\Phi(u))(x) = \int_0^x e^t u(t) \, dt$$
En dérivant cette expression par rapport à $x$ (puisque $u$ est continue, l'intégrale définit une fonction de classe $\mathcal{C}^1$) :
$$e^x (\Phi(u))(x) + e^x (\Phi(u))'(x) = e^x u(x)$$
En simplifiant par $e^x$ (qui est non nul) :
$$(\Phi(u))(x) + (\Phi(u))'(x) = u(x)$$
Puisque $\Phi(u) = \lambda u$, cela se réécrit :
$$\lambda u(x) + \lambda u'(x) = u(x) \implies \lambda u'(x) = (1 - \lambda) u(x)$$
- Si $\lambda = 0$, l'équation devient $u(x) = 0$ pour tout $x \in [0, 1]$, soit $u = 0$, ce qui est exclu pour un vecteur propre. Ainsi, **$0$ n'est pas valeur propre**.
- Si $\lambda \neq 0$, on obtient une équation différentielle linéaire du premier ordre :
  $$u'(x) = \frac{1 - \lambda}{\lambda} u(x)$$
  Les solutions sont de la forme :
  $$u(x) = C \exp\left( \frac{1 - \lambda}{\lambda} x \right), \quad C \in \mathbb{R}$$
  Testons cette solution dans l'équation initiale $\Phi(u) = \lambda u$. 
  D'une part, pour $u(x) = C e^{kx}$ avec $k = \frac{1 - \lambda}{\lambda}$ :
  $$(\Phi(u))(x) = e^{-x} \int_0^x e^t C e^{kt} \, dt = C e^{-x} \int_0^x e^{(k+1)t} \, dt$$
  Si $k + 1 \neq 0$ (c'est-à-dire $1/\lambda \neq 0$, ce qui est toujours vrai ici) :
  $$(\Phi(u))(x) = C e^{-x} \left[ \frac{e^{(k+1)t}}{k+1} \right]_0^x = C e^{-x} \frac{e^{(k+1)x} - 1}{k+1} = C \frac{e^{kx} - e^{-x}}{k+1}$$
  Or, on souhaite que $(\Phi(u))(x) = \lambda u(x) = \lambda C e^{kx}$. Par identification des termes en $e^{-x}$ (qui doit être nul car absent de $\lambda C e^{kx}$ pour $C \neq 0$), on doit avoir un coefficient nul pour $e^{-x}$, ce qui impose $C = 0$ (solution triviale).
  
Par conséquent, l'opérateur $\Phi$ **ne possède aucune valeur propre** (son spectre ponctuel est vide : $\sigma_p(\Phi) = \emptyset$).