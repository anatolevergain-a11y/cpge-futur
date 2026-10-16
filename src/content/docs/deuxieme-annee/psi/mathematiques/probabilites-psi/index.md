---
title: 'Cours : Probabilités discrètes'
description: 'Fiche de synthèse officielle et démonstrations du programme CPGE PSI.'
---

## 📌 1. Définitions & Cadre d'étude

Soit $\Omega$ un ensemble. Un système d'événements est formalisé par une tribu (ou $\sigma$-algèbre) $\mathcal{A}$ sur $\Omega$. Dans le cadre des probabilités discrètes au programme de PSI, l'univers $\Omega$ est au plus dénombremburn.

- **Espace probabilisable :** Un couple $(\Omega, \mathcal{A})$ où $\Omega$ est un ensemble et $\mathcal{A} \subset \mathcal{P}(\Omega)$ une tribu (si $\Omega$ est fini ou dénombrable, on prend généralement $\mathcal{A} = \mathcal{P}(\Omega)$).
- **Mesure de probabilité :** Une application $P : \mathcal{A} \to [0, 1]$ telle que :
  1. $P(\Omega) = 1$.
  2. Pour toute famille (finie ou dénombrable) d'événements $(A_n)_{n \in \mathbb{N}}$ deux à deux disjoints ($A_i \cap A_j = \emptyset$ pour $i \neq j$), on a :
     $$P\left(\bigcup_{n=0}^{+\infty} A_n\right) = \sum_{n=0}^{+\infty} P(A_n)$$

- **Variable aléatoire discrète :** Une application $X : \Omega \to E$ (où $E \subset \mathbb{R}$) telle que pour tout $x \in E$, $\{X = x\} = X^{-1}(\{x\}) \in \mathcal{A}$, et dont l'ensemble des valeurs prises $X(\Omega)$ est fini ou dénombrable.
- **Loi d'une variable aléatoire :** La loi de $X$ est caractérisée par la famille des probabilités $(P(X = x))_{x \in X(\Omega)}$, avec la condition de normalisation :
  $$\sum_{x \in X(\Omega)} P(X = x) = 1$$

- **Espérance mathématique :** Une variable aléatoire discrète $X$ admet une espérance (on dit aussi qu'elle est intégrable) si la famille $(x P(X = x))_{x \in X(\Omega)}$ est **absolument sommable**, c'est-à-dire si :
  $$\sum_{x \in X(\Omega)} |x| P(X = x) < +\infty$$
  Dans ce cas, l'espérance est définie par :
  $$E[X] = \sum_{x \in X(\Omega)} x P(X = x)$$

- **Variance et Écart-type :** Si $X$ admet un moment d'ordre 2 (i.e., $E[X^2] < +\infty$), alors la variance de $X$ est définie par :
  $$V(X) = E\left[(X - E[X])^2\right] = E[X^2] - (E[X])^2$$
  L'écart-type est $\sigma(X) = \sqrt{V(X)}$.

---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### Théorème : Formule de transfert (Loi du statisticien inconscient)
Soit $X$ une variable aléatoire discrète sur $(\Omega, \mathcal{A}, P)$ et $g : X(\Omega) \to \mathbb{R}$ une application. 
La variable aléatoire $g(X)$ admet une espérance si et seulement si la famille $(g(x) P(X = x))_{x \in X(\Omega)}$ est absolument sommable. 
Dans ce cas :
$$E[g(X)] = \sum_{x \in X(\Omega)} g(x) P(X = x)$$

> **Démonstration :**
> Par définition, la loi de la variable aléatoire $Y = g(X)$ est donnée par, pour tout $y \in g(X(\Omega))$ :
> $$P(Y = y) = P(\{g(X) = y\}) = P\left(\bigcup_{x \in X(\Omega), g(x) = y} \{X = x\}\right)$$
> Par additivité (ou $\sigma$-additivité) de la probabilité, les événements $\{X = x\}$ étant deux à deux disjoints :
> $$P(Y = y) = \sum_{x \in X(\Omega), g(x) = y} P(X = x)$$
> Par définition de l'espérance de $Y$, si la somme converge absolument :
> $$E[g(X)] = E[Y] = \sum_{y \in g(X(\Omega))} y P(Y = y) = \sum_{y \in g(X(\Omega))} y \left( \sum_{x \in X(\Omega), g(x) = y} P(X = x) \right)$$
> En regroupant les termes par sommation par paquets (autorisée par l'absolue convergence), on obtient :
> $$E[g(X)] = \sum_{x \in X(\Omega)} g(x) P(X = x)$$
> Ce qui achève la démonstration. $\blacksquare$

### Théorème : Linéarité de l'espérance
Soient $X$ et $Y$ deux variables aléatoires définies sur le même espace probabilisé, admettant toutes deux une espérance, et soit $\alpha, \beta \in \mathbb{R}$. Alors $\alpha X + \beta Y$ admet une espérance et :
$$E[\alpha X + \beta Y] = \alpha E[X] + \beta E[Y]$$
*(Ce théorème est admis au programme sous réserve d'absolue convergence, et constitue un outil fondamental car il ne requiert aucune hypothèse d'indépendance).*

---

## 💡 3. Méthodes de calcul & Algorithmes

1. **Calcul d'une espérance ou d'une variance par le calcul de séries entières :**
   - *Méthode :* Face à une loi à support infini dénombrable (type $\mathbb{N}$ ou $\mathbb{N}^*$), on exprime $P(X = x)$ en fonction d'un paramètre $t$. On identifie la série de terme général $x P(X = x)$ ou $x^2 P(X = x)$ comme la dérivée (première ou seconde) d'une série entière usuelle de rayon de convergence non nul (ex: $\sum t^n$, $\sum \frac{t^n}{n!}$).
   - *Exemple type (loi de Poisson $\mathcal{P}(\lambda)$) :* $P(X = k) = e^{-\lambda} \frac{\lambda^k}{k!}$ pour $k \in \mathbb{N}$.
     $$E[X] = \sum_{k=0}^{+\infty} k e^{-\lambda} \frac{\lambda^k}{k!} = e^{-\lambda} \lambda \sum_{k=1}^{+\infty} \frac{\lambda^{k-1}}{(k-1)!} = e^{-\lambda} \lambda e^{\lambda} = \lambda$$

2. **Utilisation de la méthode des variables muettes (indicateurs) :**
   - Pour calculer l'espérance d'une somme de variables aléatoires dépendantes (ex: nombre de points fixes, nombre de coïncidences), on introduit les indicatrices :
     $$I_i = \begin{cases} 1 & \text{si la condition } i \text{ est realisee} \\ 0 & \text{sinon} \end{cases}$$
   - On a alors $X = \sum_{\text{i}} I_i$, d'où par linéarité :
     $$E[X] = \sum_{\text{i}} E[I_i] = \sum_{\text{i}} P(\text{condition } i \text{ realisee})$$

---

## ⚠️ 4. Pièges classiques aux Concours

- **Confusion entre non-corrélation et indépendance :** Si $E[XY] = E[X]E[Y]$, les variables $X$ et $Y$ sont non corrélées. Cela n'implique **en aucun cas** leur indépendance (sauf dans le cas de lois jointes gaussiennes, ce qui est hors-programme pour des variables discrètes générales).
- **Oubli de la vérification de l'absolue convergence :** Appliquer la formule de l'espérance ou du théorème de transfert sans s'assurer que $\sum |x| P(X = x) < +\infty$ est une faute éliminatoire. Pour les séries à termes de signe quelconque, il faut impérativement étudier la convergence de la série en valeur absolue.
- **Mauvaise manipulation du support :** Lors de factorisations d'indices dans les sommes (par exemple pour passer de $k=0$ à $k=1$ car le terme en $k=0$ est nul), veillez à bien justifier le changement d'indice et à ne pas perdre de termes non nuls.