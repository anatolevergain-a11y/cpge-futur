---
title: 'Cours : Calcul différentiel à plusieurs variables'
description: 'Fiche de synthèse officielle et démonstrations du programme CPGE MPSI.'
---

## 📌 1. Définitions & Cadre d'étude

Soit $(E, \|\cdot\|)$ et $(F, \|\cdot\|_F)$ deux espaces vectoriels normés (souvent de dimension finie, tels que $\mathbb{R}^n$ et $\mathbb{R}^p$). Soit $U$ un ouvert de $E$ et $f : U \to F$ une application.

### Différentiabilité en un point
On dit que $f$ est différentiable en un point $a \in U$ s'il existe une application linéaire continue $L \in \mathcal{L}(E, F)$ et une application $\varepsilon : U \to F$ telles que, pour tout $h \in E$ tel que $a+h \in U$ :
$$f(a+h) = f(a) + L(h) + \|h\|_E \varepsilon(h)$$
avec $\lim_{h \to 0} \varepsilon(h) = 0_F$. 

Si une telle application $L$ existe, elle est unique. On la note $df(a)$ ou $\text{d}f(a)$, appelée **différentielle** de $f$ en $a$.

### Lien avec les dérivées partielles
Si $E = \mathbb{R}^n$, la base canonique est notée $(e_1, \dots, e_n)$. Si $f$ est différentiable en $a$, alors $f$ admet des dérivées partielles par rapport à toutes ses variables en $a$. La dérivée partielle par rapport à la $i$-ème variable se note :
$$\frac{\partial f}{\partial x_i}(a) = \lim_{t \to 0} \frac{f(a_1, \dots, a_i + t, \dots, a_n) - f(a)}{t}$$

### Matrice jacobienne
Si $F = \mathbb{R}^p$ et $f = (f_1, \dots, f_p)$, la matrice de l'application linéaire $df(a) \in \mathcal{L}(\mathbb{R}^n, \mathbb{R}^p)$ dans les bases canoniques est la **matrice jacobienne**, notée $J_f(a) \in \mathcal{M}_{p,n}(\mathbb{R})$ :
$$J_f(a) = \begin{pmatrix} 
\frac{\partial f_1}{\partial x_1}(a) & \frac{\partial f_1}{\partial x_2}(a) & \cdots & \frac{\partial f_1}{\partial x_n}(a) \\ 
\frac{\partial f_2}{\partial x_1}(a) & \frac{\partial f_2}{\partial x_2}(a) & \cdots & \frac{\partial f_2}{\partial x_n}(a) \\ 
\vdots & \vdots & \ddots & \vdots \\ 
\frac{\partial f_p}{\partial x_1}(a) & \frac{\partial f_p}{\partial x_2}(a) & \cdots & \frac{\partial f_p}{\partial x_n}(a) 
\end{pmatrix}$$

---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### Théorème de Schwarz (Symétrie des dérivées secondes)
**Énoncé :** Soit $U$ un ouvert de $\mathbb{R}^n$ et $f : U \to \mathbb{R}$ une fonction de classe $\mathcal{C}^2$ sur $U$. Alors pour tout $a \in U$ et pour tout $(i, j) \in \{1, \dots, n\}^2$, on a l'égalité des dérivées partielles croisées :
$$\frac{\partial^2 f}{\partial x_i \partial x_j}(a) = \frac{\partial^2 f}{\partial x_j \partial x_i}(a)$$

---

### Théorème de composition (Dérivation des fonctions composées)
**Énoncé :** Soit $U$ un ouvert de $\mathbb{R}^n$, $V$ un ouvert de $\mathbb{R}^p$, $f : U \to V$ une application différentiable en $a \in U$, et $g : V \to \mathbb{R}^m$ une application différentiable en $b = f(a)$. 
Alors l'application composée $g \circ f : U \to \mathbb{R}^m$ est différentiable en $a$, et sa différentielle est donnée par la formule de composition :
$$\text{d}(g \circ f)(a) = \text{d}g(f(a)) \circ \text{d}f(a)$$

**Traduction matricielle :** Les matrices jacobiennes se multiplient :
$$J_{g \circ f}(a) = J_g(f(a)) \times J_f(a) \quad \text{avec} \quad J_{g \circ f}(a) \in \mathcal{M}_{m,n}(\mathbb{R}), \, J_g(f(a)) \in \mathcal{M}_{m,p}(\mathbb{R}), \, J_f(a) \in \mathcal{M}_{p,n}(\mathbb{R})$$

---

## 💡 3. Méthodes de calcul & Algorithmes

### Algorithme de calcul de la différentielle
1. **Vérifier le domaine :** Préciser l'ouvert $U$ sur lequel la fonction est définie et étudier la régularité (les fonctions usuelles construites par sommes, produits, quotients de fonctions coordonnées sont de classe $\mathcal{C}^\infty$ sur leur domaine).
2. **Calculer les dérivées partielles :** Pour chaque variable $x_i$, dériver la fonction en considérant les autres variables comme des constantes.
3. **Écrire la différentielle sous forme de forme linéaire :** 
   $$\text{d}f(a) = \sum_{i=1}^{n} \frac{\partial f}{\partial x_i}(a) \, \text{d}x_i$$
   où les $\text{d}x_i$ désignent les formes coordonnées de $\mathbb{R}^n$.

### Recherche d'extremums locaux
Soit $f : U \to \mathbb{R}$ une fonction de classe $\mathcal{C}^1$ sur un ouvert $U$ de $\mathbb{R}^n$.
1. **Conditions nécessaires d'extremum local :** Si $a \in U$ est un extremum local (maximum ou minimum), alors $a$ est un **point critique** de $f$, c'est-à-dire :
   $$\text{d}f(a) = 0_{\mathcal{L}(E, \mathbb{R})} \iff \forall i \in \{1, \dots, n\}, \, \frac{\partial f}{\partial x_i}(a) = 0$$
2. **Étude au voisinage d'un point critique (si $f$ est $\mathcal{C}^2$) :** On introduit la matrice hessienne $H_f(a) \in \mathcal{M}_{n,n}(\mathbb{R})$ définie par $(H_f(a))_{i,j} = \frac{\partial^2 f}{\partial x_i \partial x_j}(a)$.
   - Si les valeurs propres de $H_f(a)$ sont toutes strictement positives, $f$ présente un **minimum local** strict en $a$.
   - Si les valeurs propres de $H_f(a)$ sont toutes strictement négatives, $f$ présente un **maximum local** strict en $a$.
   - Si $H_f(a)$ possède des valeurs propres strictement positives et strictement négatives (et pas de valeur propre nulle), $a$ est un **point selle** (ou point col).

---

## ⚠️ 4. Pièges classiques aux Concours

1. **Confondre continuité, existence des dérivées partielles et différentiabilité :**
   Une fonction peut admettre des dérivées partielles en un point sans y être continue (donc non différentiable). Pire, une fonction peut admettre des dérivées partielles partout sur un ouvert et **ne pas être continue** en un point. Pour garantir la différentiabilité, le théorème de continuité des dérivées partielles (classe $\mathcal{C}^1$) est suffisant mais non nécessaire.
2. **Oublier de préciser l'ouvert :**
   La notion de différentiabilité n'a de sens que sur les **ouverts** d'un espace vectoriel normé. Mentionner systématiquement que le domaine d'étude est un ouvert.
3. **Mauvaise manipulation des dimensions dans la règle de chaine :**
   Lors du calcul de $J_{g \circ f}(a) = J_g(f(a)) J_f(a)$, veillez scrupuleusement à la conformité des dimensions des matrices. Une erreur d'inversion entre lignes et colonnes dans la matrice jacobienne invalide immédiatement tout le calcul ultérieur de physique ou de mathématiques appliquées.
4. **Conclure hâtivement pour les points critiques :**
   Si la matrice hessienne est non inversible (présence d'au moins une valeur propre nulle), le test de second ordre est inopérant. Il faut alors recourir à l'étude locale directe de la fonction (par exemple, par développement limité ou par minoration/majoration le long de droites ou de paraboles passant par le point critique).