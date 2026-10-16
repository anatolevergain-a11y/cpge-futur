---
title: 'Exercice 2 : Normes équivalentes'
description: 'Problème d entraînement type concours.'
---

# Problème : Étude de l'équivalence de normes et analyse critique sur les espaces vectoriels normés

**Filière :** MP  
**Matière :** Mathématiques  
Chapitre: ** Topologie  
**Thème :** Normes équivalentes et compacité  

---

## 1. Énoncé

Soit $E = \mathcal{C}([0, 1], \mathbb{R})$ l'espace vectoriel des fonctions continues de $[0, 1$ dans $\mathbb{R}$. 
On considère sur $E$ les normes suivantes :
1. La norme infinie (ou norme de la convergence uniforme) : 
   $$\forall f \in E, \quad \|f\|_\infty = \sup_{x \in [0, 1]} |f(x)|$$
2. La norme $1$ (ou norme intégrale) : 
   $$\forall f \in E, \quad \|f\|_1 = \int_{0}^{1} |f(x)| \, dx$$

L'objectif de ce problème est d'étudier la topologie induite par ces deux normes, de démontrer leur non-équivalence, et d'analyser les limites conceptuelles de l'utilisation de ces normes dans l'étude des espaces fonctionnels en dimension infinie, ouvrant ainsi une réflexion critique sur la modélisation mathématique en analyse.

---

## 2. Questions

**Partie I : Comparaison initiale et non-équivalence**
* **Q1.** Démontrer qu'il existe une constante réelle $C > 0$ telle que pour tout $f \in E$, on a $\|f\|_1 \le C \|f\|_\infty$. Que peut-on en déduire concernant l'application identité de $(E, \|\cdot\|_\infty$ vers $(E, \|\cdot\|_1)$ ?
* **Q2.** On cherche à savoir s'il existe une constante $K > 0$ telle que $\forall f \in E, \; \|f\|_\infty \le K \|f\|_1$.
  Pour tout $n \in \mathbb{N}^*$, on définit la fonction $f_n$ par son graphe : une "pic" triangulaire de hauteur $1$ et de base $2/n$ centrée en $0$, ou plus explicitement :
  $$f_n(x) = \begin{cases} 
  1 - nex & \text{si } 0 \le x \le \frac{1}{n} \\ 
  0 & \text{si } \frac{1}{n} < x \le 1 
  \end{cases}$$
  *(Note : ajuster la fonction pour qu'elle soit continue, par exemple $f_n(x) = \max(0, 1 - nx)$)*.
  Calculer $\|f_n\|_\infty$ et $\|f_n\|_1$ pour tout $n \in \mathbb{N}^*$.
* **Q3.** En déduire que les normes $\|\cdot\|_\infty$ et $\|\cdot\|_1$ ne sont **pas équivalentes** sur $E$.

**Partie II : Conséquences topologiques et analyse critique**
* **Q4.** Soit $B_{\infty}(0, 1) = \{f \in E \mid \|f\|_\infty \le 1$ la boule unité fermée pour la norme infinie. Est-elle compacte dans $(E, \|\cdot\|_\infty)$ ? (Justifier brièvement à l'aide du théorème d'Arzelà-Ascoli ou d'un argument classique).
* **Q5.** Soit $B_{1}(0, 1) = \{f \in E \mid \|f\|_1 \le 1$ la boule unité fermée pour la norme $1$. En utilisant la suite $(f_n)_{n \ge 1}$ de la question Q2, montrer que $B_{1}(0, 1)$ n'est **pas** compacte pour la norme $\|\cdot\|_\infty$. 
* **Q6. (Analyse critique et limites du modèle)** Rédiger une analyse critique argumentée : expliquez pourquoi le fait que $\|\cdot\|_1$ et $\|\cdot\|_\infty$ ne soient pas équivalentes met en lumière une difficulté fondamentale en analyse numérique ou en physique mathématique lorsqu'on approxime des fonctions par des suites de Cauchy. Quelles sont les limites de l'intuition "finie-dimensionnelle" dans ce contexte ?

---

## 3. Pistes et Indications

* **Q1 & Q2 :** Pour la majoration, l'intégrale d'une fonction continue positive est bornée par la longueur de l'intervalle multipliée par le supremum. Pour la non-équivalence, raisonnez par l'absurde en supposant l'existence de $K$ et évaluez sur la suite $(f_n)$.
* **Q4 & Q5 :** Rappelez-vous que le théorème de Riesz caractérise les espaces de dimension finie par la compacité de leur boule unité fermée. En dimension infinie, la compacité dépend fortement de la topologie (donc de la norme) choisie.
* **Q6 :** Pensez à la notion de convergence simple vs convergence uniforme vs convergence en moyenne (norme 1). En quoi une suite convergente pour $\|\cdot\|_1$ peut diverger grossièrement en norme infinie (phénomène d'oscillation ou de pic non contrôlé partout) ?

---

## 4. Corrigé pas à pas

### Partie I : Comparaison initiale et non-équivalence

* **Q1.** Soit $f \in E$. Par définition de la norme infinie, pour tout $x \in [0, 1]$, on a :
  $$|f(x)| \le \|f\|_\infty$$
  En intégrant cette inégalité entre $0$ et $1$, il vient :
  $$\int_{0}^{1} |f(x)| \, dx \le \int_{0}^{1} \|f\|_\infty \, dx = \|f\|_\infty \int_{0}^{1} 1 \, dx = \|f\|_\infty$$
  Ainsi, $\|f\|_1 \le 1 \cdot \|f\|_\infty$. La constante $C = 1$ convient. 
  *Conséquence :* L'application identité $\text{id} : (E, \|\cdot\|_\infty) \to (E, \|\cdot\|_1)$ est continue.

* **Q2.** Posons $f_n(x) = \max(0, 1 - nx)$ pour $x \in [0, 1]$. 
  * Calcul de $\|f_n\|_\infty$ : La fonction atteint son maximum en $x = 0$, et $f_n(0) = 1$. Donc **$\|f_n\|_\infty = 1$**.
  * Calcul de $\|f_n\|_1$ : La fonction est non nulle uniquement sur l'intervalle $[0, 1/n]$, où elle forme un triangle de base $1/n$ et de hauteur $1$. L'aire sous la courbe vaut donc :
    $$\|f_n\|_1 = \int_{0}^{1/n} (1 - nx) \, dx = \left[ x - \frac{nx^2}{2} \right]_0^{1/n} = \frac{1}{n} - \frac{n(1/n^2)}{2} = \frac{1}{2n}$$
    Donc **$\|f_n\|_1 = \frac{1}{2n}$**.

* **Q3.** Supposons par l'absurde qu'il existe une constante $K > 0$ telle que :
  $$\forall f \in E, \quad \|f\|_\infty \le K \|f\|_1$$
  En appliquant cette prétendue inégalité aux fonctions $f_n$ définies précédemment, on obtient :
  $$1 = \|f_n\|_\infty \le K \|f_n\|_1 = \frac{K}{2n}$$
  C'est-à-dire que pour tout $n \in \mathbb{N}^*$, on a $n \le \frac{K}{2}$, ce qui est manifestement absurde puisque l'ensemble des entiers naturels $\mathbb{N}$ n'est pas majoré (propriété archimédienne). 
  Par conséquent, une telle constante $K$ n'existe pas, ce qui prouve que **les normes $\|\cdot\|_\infty$ et $\|\cdot\|_1$ ne sont pas équivalentes**.

---

### Partie II : Conséquences topologiques et analyse critique

* **Q4.** D'après le théorème de Riesz (ou par application du théorème d'Arzelà-Ascoli combiné au fait que $(E, \|\cdot\|_\infty)$ est un espace de Banach), la boule unité fermée $B_\infty(0, 1)$ **n'est pas compacte**. En effet, $E$ est de dimension infinie. (On peut aussi exhiber la suite de fonctions $g_n(x) = x^n$ qui n'admet aucune sous-suite convergeant uniformément vers une fonction continue limite).

* **Q5.** Montrons que la boule unité fermée $B_1(0, 1)$ n'est pas compacte pour la norme $\|\cdot\|_\infty$. 
  Considérons la suite de fonctions $(h_n)_{n \ge 1}$ définie par des pics translatés ou simplement par la suite $(f_n)$ normalisée. Observons que pour la suite $(f_n)$ de la Q2, on a $\|f_n\|_1 = \frac{1}{2n} \le 1$, donc $f_n \in B_1(0, 1)$. 
  Cependant, la suite $(f_n)$ converge uniformément (ou en norme $\|\cdot\|_\infty$) vers la fonction discontinue $0$ ? Non, attention : $f_n(0) = 1$ pour tout $n$, mais $f_n(x) \to 0$ pour tout $x > 0$. La suite ne converge pas en norme infinie vers $0$ car $\|f_n - 0\|_\infty = 1$. 
  Pour construire un argument de compacité séquentielle par l'absurde ou par extraction : la suite $(f_n)$ est dans $B_1(0, 1)$, mais elle ne possède aucune sous-suite qui converge uniformément (la hauteur reste toujours $1$ en $0$ tandis que le support se resserre, empêchant la convergence uniforme vers une fonction continue). Ainsi, $B_1(0, 1)$ n'est pas séquentiellement compacte pour $\|\cdot\|_\infty$.

* **Q6. Analyse critique et limites du modèle :**
  
  L'étude de la non-équivalence des normes en dimension infinie met en exergue une rupture épistémologique majeure par rapport à l'algèbre linéaire de dimension finie (où toutes les normes sont mutuellement équivalentes). 
  
  1. **Limites de l'intuition géométrique :** En dimension finie, la convergence d'une suite ou la compacité d'un ensemble (comme la boule unité) sont des notions intrinsèques, indépendantes du choix de la norme. En dimension infinie, la topologie dépend crucialement de la norme choisie. Une fonction peut être "proche" d'une autre au sens de l'intégrale (norme $1$), ce qui signifie que l'aire entre leurs graphes est faible, tout en étant extrêmement éloignée au sens ponctuel (norme infinie), en raison de pics étroits et de grande amplitude (comme le démontre la suite $f_n$).
  
  2. **Implications en analyse numérique et physique mathématique :** 
     * Si l'on résout une équation aux dérivées partielles (EDP) en physique, travailler avec la norme $1$ (souvent liée aux espaces de Lebesgue $L^1$) est parfois naturel pour des raisons énergétiques ou d'intégrabilité. 
     * Néanmoins, un résultat de convergence en norme $1$ ne garantit **aucune** approximation ponctuelle satisfaisante (pas de contrôle des pics locaux). Pour garantir la continuité des trajectoires ou des erreurs uniformes, la norme infinie (ou la convergence uniforme) est indispensable.
     * **Conclusion critique :** Le choix d'une norme est un acte de modélisation fort. Ignorer la non-équivalence des normes conduit à des aberrations conceptuelles : affirmer qu'une méthode numérique "converge" n'a aucun sens mathématique rigoureux tant que l'on n'a pas spécifié *quelle topologie* (donc quelle norme) est utilisée pour mesurer l'erreur.