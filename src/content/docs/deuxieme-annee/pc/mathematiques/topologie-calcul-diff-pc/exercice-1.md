---
title: 'Exercice 1 : Espaces vectoriels normés'
description: 'Problème d entraînement type concours pour PC.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Soit $E = \mathcal{C}([0, 1], \mathbb{R})$ l'espace vectoriel des fonctions continues de $[0, 1]$ dans $\mathbb{R}$. 
Pour tout élément $f \in E$, on définit les applications suivantes :
$$N_1(f) = \int_{0}^{1} |f(t)| \, \text{d}t, \quad N_\infty(f) = \sup_{t \in [0, 1]} |f(t)|$$

L'objectif de ce problème est d'étudier la topologie induite par ces différentes normes sur $E$, de comparer leurs propriétés de convergence et d'analyser la continuité d'opérateurs linéaires agissant sur $(E, N_\infty)$.

---

### ❓ Questions progressives (incluant une analyse critique du modèle)

1. **Vérification normée :** Montrer que $N_\infty$ est une norme sur $E$. On admettra que $N_1$ en est une également.
2. **Comparaison de normes :** Montrer qu'il existe une constante $C > 0$ telle que, pour tout $f \in E$, $N_1(f) \le C N_\infty(f)$. En déduire que la convergence pour la norme $N_\infty$ implique la convergence pour la norme $N_1$.
3. **Analyse critique et non-équivalence :** 
   - Construire une suite de fonctions $(f_n)_{n \in \mathbb{N}^\ast}$ de $E$ telle que $f_n$ converge vers $0$ pour la norme $N_1$, mais diverge grossièrement pour la norme $N_\infty$.
   - Conclure quant à l'existence d'une constante $c > 0$ telle que $N_\infty(f) \le c N_1(f)$ pour tout $f \in E$. Que peut-on dire de la topologie associée sur $E$ ?
4. **Continuité d'une forme linéaire :** On considère l'application $\varphi : (E, N_\infty) \to \mathbb{R}$ définie par $\varphi(f) = \int_{0}^{1} t f(t) \, \text{d}t$. 
   - Montrer que $\varphi$ est linéaire et continue. 
   - Déterminer la norme interépandante (ou norme d'opérateur) de $\varphi$, notée $\|\varphi\|'$.

---

### 💡 Pistes & Indications méthodologiques

* **Question 1 :** Pour la séparation, pensez à utiliser la continuité de la fonction $f$. Si une fonction est continue et non nulle en un point, elle est non nulle sur un voisinage.
* **Question 2 :** Majorez l'intégrale définissant $N_1(f)$ en remplaçant la fonction par son supremum sur $[0, 1]$.
* **Question 3 :** Pour exhiber la suite $(f_n)$, imaginez des pics de hauteur $1$ et de largeur tendant vers $0$ (par exemple des fonctions triangulaires ou en forme de créneaux).
* **Question 4 :** Pour la continuité, majorez $|\varphi(f)|$ en fonction de $N_\infty(f)$. Pour la norme d'opérateur, trouvez une suite de fonctions qui s'approche du supremum de la définition.

---

### 📋 Corrigé détaillé pas à pas

#### 1. Vérification que $N_\infty$ est une norme sur $E$
Soit $f, g \in E$ et $\lambda \in \mathbb{R}$.
* **Positivité :** Pour tout $t \in [0, 1]$, $|f(t)| \ge 0$, donc par passage au supremum, $N_\infty(f) \ge 0$.
* **Séparation :** Supposons $N_\infty(f) = 0$. Alors $\sup_{t \in [0, 1]} |f(t)| = 0$, ce qui implique que pour tout $t \in [0, 1]$, $|f(t)| \le 0$, soit $f(t) = 0$. Ainsi, $f = 0_{\mathcal{C}}$. Réciproquement, si $f = 0$, $N_\infty(0) = 0$.
* **Homogénéité :** 
  $$N_\infty(\lambda f) = \sup_{t \in [0, 1]} |\lambda f(t)| = |\lambda| \sup_{t \in [0, 1]} |f(t)| = |\lambda| N_\infty(f)$$
* **Inégalité triangulaire :** Pour tout $t \in [0, 1]$, 
  $$|f(t) + g(t)| \le |f(t)| + |g(t)| \le N_\infty(f) + N_\infty(g)$$
  Le membre de droite est un majorant indépendant de $t$. En passant au supremum sur le membre de gauche, il vient :
  $$N_\infty(f + g) \le N_\infty(f) + N_\infty(g)$$
$N_\infty$ est donc bien une norme sur $E$.

#### 2. Comparaison de normes
Soit $f \in E$. Pour tout $t \in [0, 1]$, on a $|f(t)| \le N_\infty(f)$. En intégrant cette inégalité sur $[0, 1]$ :
$$N_1(f) = \int_{0}^{1} |f(t)| \, \text{d}t \le \int_{0}^{1} N_\infty(f) \, \text{d}t = N_\infty(f) \int_{0}^{1} 1 \, \text{d}t = N_\infty(f)$$
On a donc $N_1(f) \le 1 \cdot N_\infty(f)$ (avec $C = 1$). 
Si une suite $(f_n)$ converge vers $f$ pour la norme $N_\infty$, alors $N_\infty(f_n - f) \to 0$ lorsque $n \to +\infty$. Par l'inégalité précédente :
$$0 \le N_1(f_n - f) \le N_\infty(f_n - f) \xrightarrow[n \to +\infty]{} 0$$
Par le théorème des gendarmes, $N_1(f_n - f) \to 0$, ce qui signifie que $f_n$ converge vers $f$ pour la norme $N_1$.

#### 3. Analyse critique et non-équivalence
Pour tout entier $n \ge 1$, définissons la fonction continue $f_n$ par :
$$f_n(t) = \begin{cases} 
1 - n t & \text{si } t \in [0, \frac{1}{n}] \\ 
0 & \text{si } t \in ]\frac{1}{n}, 1] 
\end{cases}$$
* Calculons $N_1(f_n)$ :
  $$N_1(f_n) = \int_{0}^{1/n} (1 - nt) \, \text{d}t = \left[ t - \frac{n t^2}{2} \right]_{0}^{1/n} = \frac{1}{n} - \frac{1}{2n} = \frac{1}{2n}$$
  Ainsi, $\lim_{n \to +\infty} N_1(f_n) = 0$, c'est-à-dire que $f_n \xrightarrow[N_1]{} 0$.
* Regardons maintenant la norme $N_\infty$ :
  $$N_\infty(f_n) = \sup_{t \in [0, 1]} |f_n(t)| = f_n(0) = 1$$
  La suite $(N_\infty(f_n))$ diverge vers $1$ (et non vers $0$). Par conséquent, $f_n$ **ne converge pas** vers $0$ pour la norme $N_\infty$.

**Conclusion critique :** S'il existait une constante $c > 0$ telle que $N_\infty(f) \le c N_1(f)$ pour tout $f \in E$, alors la convergence en norme $N_1$ impliquerait la convergence en norme $N_\infty$. L'exemple de la suite $(f_n)$ prouve qu'**une telle constante $c$ n'existe pas**. Les normes $N_1$ et $N_\infty$ ne sont donc pas équivalentes sur $E$, la topologie associée à $N_\infty$ étant strictement plus fine que celle associée à $N_1$.

#### 4. Continuité d'une forme linéaire
* **Linéarité :** Pour tous $f, g \in E$ et tous $\alpha, \beta \in \mathbb{R}$ :
  $$\varphi(\alpha f + \beta g) = \int_{0}^{1} t (\alpha f(t) + \beta g(t)) \, \text{d}t = \alpha \int_{0}^{1} t f(t) \, \text{d}t + \beta \int_{0}^{1} t g(t) \, \text{d}t = \alpha \varphi(f) + \beta \varphi(g)$$
  $\varphi$ est bien linéaire.
* **Continuité et norme d'opérateur :** 
  Pour tout $f \in E$ :
  $$|\varphi(f)| = \left| \int_{0}^{1} t f(t) \, \text{d}t \right| \le \int_{0}^{1} t |f(t)| \, \text{d}t \le \int_{0}^{1} t N_\infty(f) \, \text{d}t = N_\infty(f) \left[ \frac{t^2}{2} \right]_{0}^{1} = \frac{1}{2} N_\infty(f)$$
  Cette majoration prouve que $\varphi$ est continue sur $(E, N_\infty)$ et que $\|\varphi\|' \le \frac{1}{2}$.
  
  Pour montrer qu'il yogn a égalité, construisons une suite approchant cette borne. Soit $f_k(t) = t^k$ (ou par régularisation, une suite tendant vers la fonction constante $1$). Plus simplement, en considérant le majorant, testons avec la fonction constante $f(t) = 1$ (qui est dans $E$ et vérifie $N_\infty(f) = 1$) :
  $$\varphi(1) = \int_{0}^{1} t \cdot 1 \, \text{d}t = \frac{1}{2}$$
  Puisque $N_\infty(1) = 1$, on a par définition de la norme subordonnée :
  $$\|\varphi\|' \ge \frac{|\varphi(1)|}{N_\infty(1)} = \frac{1/2}{1} = \frac{1}{2}$$
  
  Finalement, $\|\varphi\|' = \frac{1}{2}$.