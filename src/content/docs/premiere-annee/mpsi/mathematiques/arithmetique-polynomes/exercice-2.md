---
title: 'Exercice 2 : Racines de polynômes et décomposition en fractions partielles'
description: 'Problème d entraînement type concours pour MPSI.'
---

### 🌐 Énoncé du problème / Étude de cas

Dans le cadre de l'étude des systèmes linéaires continus invariants (utilisés en automatique et en traitement du signal), la réponse fréquentielle d'un filtre ou la réponse temporelle d'un système dynamique est souvent modélisée par une fraction rationnelle de la variable complexe $s$ (représentant la pulsation de Laplace). 

Soit $n \ge 2$ un entier. On considère le polynôme $P \in \mathbb{C}[X]$ défini par :
$$P(X) = X^n - 1$$
Ce polynôme modélise les pôles d'un réseau de résonateurs couplés en physique des oscillations. L'objectif de ce problème est d'étudier les propriétés de décomposition en éléments simples (fractions partielles) de fractions de la forme $\frac{Q(X)}{P(X)}$, où $Q$ est un polynôme de degré strictement inférieur à $n$, et d'analyser la sensibilité de ces décompositions face à des incertitudes expérimentales sur les coefficients.

---

### ❓ Questions progressives

1. **Rappels sur les racines de $P$**
   Donner l'ensemble des racines complexes de $P(X) = X^n - 1$, que l'on notera $\mathbb{U}_n$. Expliciter ces racines sous forme trigonométrique et sous forme exponentielle.

2. **Dérivée et simplicité des racines**
   Calculer le polynôme dérivé $P'$ et montrer que toutes les racines de $P$ sont simples. En déduire la valeur de la somme $\sum_{\omega \in \mathbb{U}_n} \omega^k$ pour tout entier $k \in \mathbb{Z}$.

3. **Décomposition en éléments simples (DES)**
   Soit $Q \in \mathbb{C}[X]$ un polynôme tel que $\deg(Q) < n$. On souhaite décomposer la fraction rationnelle $F(X) = \frac{Q(X)}{P(X)}$ en éléments simples sur $\mathbb{C}(X)$.
   Justifier l'existence de coefficients complexes $\lambda_\omega$ (pour $\omega \in \mathbb{U}_n$) tels que :
   $$F(X) = \sum_{\omega \in \mathbb{U}_n} \frac{\lambda_\omega}{X - \omega}$$
   Exprimer explicitement chaque coefficient $\lambda_\omega$ en fonction de $Q$ et de $P'$.

4. **Application numérique et modélisation physique**
   On pose $n = 4$ et $Q(X) = X^2 + 1$. 
   Déterminer la décomposition en éléments simples de $F(X) = \frac{X^2 + 1}{X^4 - 1}$ sur $\mathbb{R}(X)$, puis sur $\mathbb{C}(X)$.

5. **Analyse critique et limites du modèle (Ingénierie)**
   En pratique industrielle, les coefficients des polynômes physiques ne sont jamais connus de manière exacte en raison des tolérances de fabrication des composants (résistances, condensateurs), entrainant une incertitude $\varepsilon$ sur les racines de $P$. 
   * a) Si une racine $\omega$ est déplacée de $\delta \omega$, analyser l'impact sur le calcul des résidus $\lambda_\omega$ lorsque $n$ devient grand.
   * b) Discuter de la robustesse numérique de la décomposition en éléments simples pour les grands ordres ($n \gg 1$). Quel problème algorithmique majeur cela pose-t-il pour la simulation numérique sur ordinateur (représentation en virgule flottante) ?

---

### 💡 Pistes & Indications

* **Q1 & Q2** : Pensez à utiliser la formule d'Euler et la structure de groupe cyclique de $\mathbb{U}_n$. Pour la somme, utilisez la sommation des termes d'une suite géométrique ou les relations entre coefficients et racines.
* **Q3** : Utilisez la formule générale des résidus pour les pôles simples d'une fraction rationnelle (multiplication par $(X-\omega)$ puis évaluation en $\omega$).
* **Q4** : Factorisez d'abord $X^4 - 1$ dans $\mathbb{R}[X]$ puis dans $\mathbb{C}[X]$. Vous pouvez utiliser l'unicité de la décomposition ou la méthode par identification.
* **Q5** : Regardez le dénominateur $P'(\omega) = n\omega^{n-1}$. Lorsque $n$ grandit, observez la proximité des pôles sur le cercle unité et concluez sur le conditionnement du problème mathématique.

---

### 📋 Corrigé détaillé et analyse des résultats

1. **Racines de $P$**
   Les racines de $P(X) = X^n - 1$ dans $\mathbb{C}$ sont les racines $n$-ièmes de l'unité. L'ensemble $\mathbb{U}_n$ s'écrit :
   $$\mathbb{U}_n = \left\{ \omega_k = e^{\frac{2i\pi k}{n}} \mid k \in \llbracket 0, n-1 \rrbracket \right\}$$
   Sous forme trigonométrique : $\omega_k = \cos\left(\frac{2\pi k}{n}\right) + i\sin\left(\frac{2\pi k}{n}\right)$.

2. **Simplicité des racines et sommes**
   On a $P'(X) = nX^{n-1}$. Pour tout $\omega \in \mathbb{U}_n$, on a $\omega \neq 0$, donc $P'(\omega) = n\omega^{n-1} \neq 0$. 
   Puisque les racines de $P$ sont des racines de $P'$, elles sont toutes de multiplicité 1 : **les racines de $P$ sont simples**.
   Pour la somme :
   * Si $k$ n'est pas un multiple de $n$, $\omega_1^k \neq 1$, et la somme des termes d'une suite géométrique donne :
     $$\sum_{\omega \in \mathbb{U}_n} \omega^k = \frac{1 - (\omega_1^k)^n}{1 - \omega_1^k} = \frac{1 - (e^{2i\pi k})}{1 - \omega_1^k} = 0$$
   * Si $k$ est un multiple de $n$, chaque terme $\omega^k = 1$, donc la somme vaut $n$.

3. **Décomposition en éléments simples (DES)**
   Puisque $\deg(Q) < \deg(P) = n$ et que les $n$ racines $\omega$ de $P$ sont simples, la théorie des fractions rationnelles garantit l'existence d'une unique décomposition de la forme :
   $$F(X) = \sum_{\omega \in \mathbb{U}_n} \frac{\lambda_\omega}{X - \omega}$$
   Pour déterminer le coefficient $\lambda_\omega$, on multiplie par $(X - \omega)$ et on évalue en $X = \omega$ :
   $$\lambda_\omega = \left[ (X - \omega) \frac{Q(X)}{P(X)} \right]_{X=\omega} = \frac{Q(\omega)}{P'(\omega)}$$
   En utilisant $P'(\omega) = n\omega^{n-1} = n\omega^{-1}$ (car $\omega^n = 1$), on obtient $\lambda_\omega = \frac{\omega Q(\omega)}{n}$.

4. **Application numérique ($n=4$)**
   On a $P(X) = X^4 - 1 = (X^2-1)(X^2+1) = (X-1)(X+1)(X-i)(X+i)$.
   La fraction est $F(X) = \frac{X^2+1}{X^4-1}$. On remarque immédiatement une simplification possible :
   $$F(X) = \frac{X^2+1}{(X^2-1)(X^2+1)} = \frac{1}{X^2-1} \quad (\text{pour } X \neq \pm i)$$
   Dans $\mathbb{R}(X)$, la décomposition est :
   $$F(X) = \frac{1/2}{X-1} - \frac{1/2}{X+1}$$
   Dans $\mathbb{C}(X)$, en poussant avec les pôles complexes $i$ et $-i$, on retrouve les coefficients via la formule générale :
   $$\lambda_1 = \frac{1^2+1}{4(1^3)} = \frac{1}{2}, \quad \lambda_{-1} = -\frac{1}{2}, \quad \lambda_i = \frac{i^2+1}{4(i^3)} = 0$$
   *(Le fait que $\lambda_i = 0$ s'explique par la simplification préalable par $X^2+1$)*.

5. **Analyse critique et limites du modèle (Ingénierie)**
   * **a) Sensibilité aux perturbations :** Le dénominateur des résidus fait intervenir $P'(\omega) = n\omega^{n-1}$. Lorsque $n$ est grand, les pôles $\omega$ sont extrêmement rapprochés sur le cercle unité (distance angulaire de $\frac{2\pi}{n}$). Une incertitude expérimentale $\delta \omega$ sur la position des pôles induit une erreur relative sur $P'(\omega)$ qui se propage directement aux coefficients $\lambda_\omega$.
   * **b) Robustesse numérique :** Pour des grands ordres ($n > 50$), le calcul des coefficients de $P$ et de leur inversion conduit à un système linéaire de Vandermonde mal conditionné. En calcul scientifique (précision machine finie, type `double` IEEE 754), les erreurs d'arrondi se cumulent, menant à des instabilités majeures (phénomène de gigue numérique). 
   * **Conclusion critique du modèle :** Bien que la solution analytique soit élégante et exacte sur le papier, la mise en œuvre numérique directe de cette décomposition pour des systèmes d'ordre élevé est **fortement déconseillée** en ingénierie. On préfère factoriser le polynôme $P$ en blocs de degré 2 (produit de trinômes réels à coefficients stables) pour garantir la robustesse des calculs en temps réel.