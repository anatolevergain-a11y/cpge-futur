---
title: 'Exercice 1 : Développements limités'
description: 'Problème d entraînement type concours.'
---

# Problème GUIDÉ : Étude asymptotique et recherche d'un équivalent

En tant qu'examinateur en classes préparatoires (filière PCSI), j'attends des candidats non seulement une maîtrise rigoureuse des formules de Taylor-Young et des opérations algébriques sur les développements limités (DL), mais aussi une capacité à mener des calculs de restes avec méthode et à interpréter géométriquement ou analytiquement les résultats obtenus.

Le problème proposé ci-dessous est conçu pour baliser les difficultés classiques rencontrées aux concours : composition de DL, gestion des formes indéterminées et recherche d'un équivalent fin au voisinage d'un point.

---

## Énoncé du problème

On considère la fonction $f$ définie sur l'intervalle $]0, +\infty[$ par :
$$f(x) = \ln\left(\frac{\sin x}{x}\right)$$

1. Justifier que la fonction $f$ admet un prolongement par continuité en $0$, que l'on précisera (on posera $f(0) = 0$).
2. Déterminer le développement limité de $f$ à l'ordre $4$ au voisinage de $0$.
3. En déduire la nature de la courbe représentative de $f$ au voisinage de son point d'abscisse $0$ (tangente et position par rapport à la tangente).
4. Déterminer un équivalent simple de $f(x)$ lorsque $x$ tend vers $0$ par valeurs strictement positives.

---

## Corrigé et Guide de Résolution

### Question 1 : Prolongement par continuité en $0$
Objectif: ** Lever l'indétermination en $0$ pour la fonction $x \mapsto \frac{\sin x}{x}$.

*Analyse de l'examinateur :* C'est un classique absolu. On rappelle le développement limité usuel de $\sin x$ en $0$ à l'ordre $3$ (ou $1$).

Au voisinage de $0$, on a le développement limité :
$$\sin x = x - \frac{x^3}{6} + o(x^3)$$

Par conséquent, pour $x \neq 0$ :
$$\frac{\sin x}{x} = \frac{x - \frac{x^3}{6} + o(x^3)}{x} = 1 - \frac{x^2}{6} + o(x^2)$$

Lorsque $x \to 0$, $\frac{\sin x}{x} tend vers $1$. 
Puisque la fonction $\ln$ est continue en $1$, on a :
$$\lim_{x \to 0^+} f(x) = \lim_{X \to 1} \ln(X) = \ln(1) = 0$$

La fonction $f$ admet donc une limite finie en $0$. En posant $f(0) = 0$, **$f$ est prolongeable par continuité en $0$**.

---

### Question 2 : Développement limité de $f$ à l'ordre $4$ en $0$
Objectif: ** Utiliser la composition de développements limités.

*Analyse de l'examinateur :* Soit on pousse le DL de $\frac{\sin x}{x}$ à un ordre suffisant pour obtenir l'ordre $4$ pour le $\ln$, soit on utilise directement le DL de $\ln(1+u)$.

Reprenons le terme $\frac{\sin x}{x}$. Pour obtenir un DL à l'ordre $4$ de $f(x) = \ln\left(1 + \left(\frac{\sin x}{x} - 1\right)\right)$, il nous faut un DL de $\frac{\sin x}{x} - 1$ à l'ordre $4$.
Écrivons le DL de $\sin x$ à l'ordre $5$ :
$$\sin x = x - \frac{x^3}{6} + \frac{x^5}{120} + o(x^5)$$

On en déduit :
$$\frac{\sin x}{x} = 1 - \frac{x^2}{6} + \frac{x^4}{120} + o(x^4)$$

Posons $u(x) = -\frac{x^2}{6} + \frac{x^4}{120} + o(x^4)$. On remarque que $u(x) \to 0$ lorsque $x \to 0$. 
On utilise le développement limités de $\ln(1+u)$ au voisinage de $0$ :
$$\ln(1+u) = u - \frac{u^2}{2} + o(u^2)$$

Substituons $u(x)$ dans cette expression en ne conservant que les termes de degré inférieur ou égal à $4$ :
1. Calcul de $u(x)$ :
   $$u(x) = -\frac{x^2}{6} + \frac{x^4}{120} + o(x^4)$$
2. Calcul de $u(x)^2$ (les termes de degré strictement supérieur à $4$ seront intégrés dans le $o(x^4)$) :
   $$u^2(x) = \left(-\frac{x^2}{6} + o(x^2)\right)^2 = \frac{x^4}{36} + o(x^4)$$

Assemblons les morceaux via la formule de composition :
$$f(x) = \left(-\frac{x^2}{6} + \frac{x^4}{120}\right) - \frac{1}{2}\left(\frac{x^4}{36}\right) + o(x^4)$$
$$f(x) = -\frac{x^2}{6} + x^4 \left(\frac{1}{120} - \frac{1}{72}\right) + o(x^4)$$

Mettons $\frac{1}{120}$ et $\frac{1}{72}$ au même dénominateur ($360$) :
* $\frac{1}{120} = \frac{3}{360}$
* $\frac{1}{72} = \frac{5}{360}$
* $\frac{3}{360} - \frac{5}{360} = -\frac{2}{360} = -\frac{1}{180}$

Finalement, le DL de $f$ à l'ordre $4$ en $0$ est :
$$\mathbf{f(x) = -\frac{x^2}{6} - \frac{x^4}{180} + o(x^4)}$$

---

### Question 3 : Étude locale de la courbe (Tangente et Position)
Objectif: ** Exploiter les coefficients du DL pour conclure géométriquement.

D'après la formule de Taylor-Young et le DL obtenu à l'ordre $4$ (qui fournit a fortiori un DL à l'ordre $1$ et $2$) :
$$f(x) = -\frac{x^2}{6} + o(x^2)$$

* **Tangente en $0$ :** 
  Puisque $f(x) = 0 \cdot x + o(x)$, la courbe représentative $\mathcal{C}_f$ admet au point $(0,0)$ une **tangente horizontale** d'équation $y = 0$ (l'axe des abscisses).

* **Position relative :** 
  Pour déterminer si la courbe est au-dessus ou en dessous de sa tangente, on étudie le signe de la différence $f(x) - y_{\text{tangente}} = f(x) - 0 = f(x)$.
  Au voisinage de $0$, le comportement de $f(x)$ est dicté par son premier terme non nul :
  $$f(x) \sim -\frac{x^2}{6}$$
  Puisque $-\frac{x^2}{6} < 0$ pour tout $x \neq 0$ au voisinage de $0$, on en conclut que **la courbe $\mathcal{C}_f$ est située strictement en dessous de sa tangente** au voisinage de $0$.

---

### Question 4 : Équivalent de $f(x)$ en $0$
Objectif: ** Extraire le terme prépondérant.

Par définition d'un développement limité dont le premier coefficient non nul est en $x^2$, on a immédiatement :
$$\mathbf{f(x) \underset{0}{\sim} -\frac{x^2}{6}}$$

---

## Analyse critique et Bilan de l'examinateur

1. **Piège classique évité :** Certains candidats imprudents développent $\ln\left(\frac{\sin x}{x}\right)$ en écrivant $\ln(\sin x) - \ln(x)$. C'est une **erreur magistrale** car $\ln(x)$ diverge vers $-\infty$ en $0$, ce qui viole le domaine d'application des opérations sur les équivalents/DL (on ne peut pas sommer des $o$ ou manipuler des limites infinies de la sorte sans précautions). Il est impératif de factoriser l'intérieur du log sous la forme $1 + u(x)$ avec $\lim_{x\to 0} u(x) = 0$.
2. **Rigueur des $o(x^n)$ :** Le calcul de $u(x)^2$ ne doit pas être mené trop rapidement. Écrire explicitement $u(x) = -\frac{x^2}{6} + o(x^2)$ pour la partie carré suffit amplement à justifier que les termes suivants tombent dans le $o(x^4)$.
3. **Rédaction :** Aux concours, l'utilisation correcte des symboles $\sim$ et $o$ permet de gagner de précieux points. Veillez à bien expliciter le prolongement par continuité avant d'appliquer des théorèmes de dérivation ou de développements limités.