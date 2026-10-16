---
title: 'Exercice 2 : Équivalents et développements limités'
description: 'Problème d entraînement type concours pour MPSI.'
---

### 🌐 Énoncé du problème / Étude de cas

Dans le cadre de l'étude de la propagation de signaux faibles en électronique de puissance, on s'intéresse à la modélisation de la réponse fréquentielle d'un filtre correcteur non linéaire. Le signal de sortie $S(t)$ en régime perturbé autour d'un point de repos est relié au signal d'entrée $E(t)$ par une équation implicite dont l'étude se ramène à l'analyse asymptotique d'une suite implicite.

Plus précisément, pour tout entier $n \ge 1$ et pour un paramètre réel $x > 0$ représentant l'amplitude normalisée de l'excitation, on définit la suite $(u_n(x))_{n \ge 1}$ par la relation de récurrence implicite :
$$\forall n \ge 1, \quad \ln(1 + u_n(x)) + u_n(x) = \frac{x}{n}$$

Dans les applications industrielles (comme les convertisseurs de $"\text{W}"$ à haut rendement), le paramètre $x$ est un grand nombre réel ($x \gg 1$) traduisant une forte impulsion de tension, ou au contraire un paramètre infinitésimal ($x \to 0^+$) en régime de faible bruit. L'objectif de ce problème est d'analyser le comportement de cette suite lorsque $x$ tend vers $0^+$, puis de proposer un regard critique sur la pertinence du modèle mathématique retenu face aux incertitudes de mesure.

---

### ❓ Questions progressives

1. **Existence et unicité :** Montrer que pour tout $x > 0$ et pour tout $n \ge 1$, l'équation $\ln(1 + u) + u = \frac{x}{n}$ admet une unique solution réelle $u_n(x)$ dans l'intervalle $]0, +\infty[$.
2. **Monotonie et limite simple :** Étudier le signe de $u_n(x)$ et déterminer, pour un entier $n$ fixé, la limite de $u_n(x)$ lorsque $x \to 0^+$, puis lorsque $x \to +\infty$.
3. **Premier ordre (Équivalent) :** À l'aide d'un développement limité ou d'un encadrement rigoureux, déterminer un équivalent simple de $u_n(x)$ lorsque $x \to 0^+$ (avec $n$ fixé).
4. **Développement asymptotique poussé :** En écrivant $u_n(x) = \frac{x}{2n} + v_n(x)$, déterminer un second terme dans le développement limité de $u_n(x)$ en $0^+$, sous la forme :
   $$u_n(x) = \frac{x}{2n} + \alpha_n x^2 + o(x^2)$$
   en explicitant le coefficient $\alpha_n$ en fonction de $n$.
5. **Sommation de relations de comparaison :** On pose $S(x) = \sum_{n=1}^{N} u_n(x)$ pour un ordre de filtre $N$ fixé. Déterminer un équivalent de $S(x)$ lorsque $x \to 0^+$.
6. **Analyse critique du modèle et des approximations :** 
   * Supposons que le paramètre $x$ soit entaché d'une erreur relative expérimentale $\epsilon$ telle que $\tilde{x} = x(1 + \epsilon)$, avec $|\epsilon| \le 10^{-3}$. Évaluer l'impact de cette incertitude sur le calcul de $u_n(x)$ à l'aide de la formule du premier ordre obtenue à la question 3.
   * Discuter des limites physiques de ce modèle mathématique si l'on poussait le développement asymptotique à l'ordre $p$ lorsque $x$ s'approche de $0^+$, sachant que les composants réels possèdent une impédance parasite minimale non nulle en $\text{"}\Omega\text{"}$ (ohms) et un bruit thermique de fond de l'ordre de $10^{-6}\text{ }\text{"V"}$.

---

### 💡 Pistes & Indications

* **Q1 :** Introduisez la fonction $f_n(u) = \ln(1+u) + u$ sur $[0, +\infty[$ et étudiez ses variations (continuité, stricte croissante, bijections).
* **Q3 :** Écrivez que $u_n(x) \to 0$ lorsque $x \to 0^+$ (justifiez-le proprement par l'absurde ou par minoration), puis utilisez les équivalents usuels au voisinage de $0$ ($\ln(1+u) \sim u$).
* **Q4 :** Posez $u_n(x) = \frac{x}{2n} + \varepsilon(x)$ avec $\varepsilon(x) = o(x)$ et injectez cette forme dans l'équation initiale en poussant les développements limités à l'ordre 2.
* **Q6 :** Utilisez la notion de conditionnement ou de dérivation logarithmique pour quantifier l'amplification de l'erreur.

---

### 📋 Corrigé détaillé et analyse des résultats

#### Corrigé de la Q1
Soit $n \ge 1$ et $x > 0$ fixés. Considérons la fonction $f_n : [0, +\infty[ \to \mathbb{R}$ définie par :
$$f_n(u) = \ln(1+u) + u$$
* $f_n$ est continue sur $[0, +\infty[$ et dérivable sur $]0, +\infty[$.
* Pour tout $u > 0$, $f_n'(u) = \frac{1}{1+u} + 1 = \frac{2+u}{1+u} > 0$. La fonction $f_n$ est donc strictement croissante sur $[0, +\infty[$.
* $f_n(0) = 0$ et $\lim_{u \to +\infty} f_n(u) = +\infty$.

Par le théorème de la bijection (ou corollaire des valeurs intermédiaires), pour tout réel $y = \frac{x}{n} > 0$, l'équation $f_n(u) = y$ admet une unique solution réelle $u_n(x)$ dans $]0, +\infty[$.

#### Corrigé de la Q2
Puisque $x > 0$ et $n \ge 1$, on a $\frac{x}{n} > 0 = f_n(0)$. Par stricte croissante de $f_n$, on en déduit que $u_n(x) > 0$.
* Lorsque $x \to 0^+$, $\frac{x}{n} \to 0$. Par continuité de la bijection réciproque $f_n^{-1}$, $u_n(x) = f_n^{-1}\left(\frac{x}{n}\right) \xrightarrow[x \to 0^+]{} f_n^{-1}(0) = 0$.
* Lorsque $x \to +\infty$, $\frac{x}{n} \to +\infty$, donc $u_n(x) \to +\infty$.

#### Corrigé de la Q3
Comme $u_n(x) \to 0$ lorsque $x \to 0^+$, on peut utiliser le développement limité usuel au voisinage de $0$ :
$$\ln(1 + u_n(x)) = u_n(x) - \frac{u_n(x)^2}{2} + o(u_n(x)^2)$$
L'équation s'écrit alors :
$$2u_n(x) - \frac{u_n(x)^2}{2} + o(u_n(x)^2) = \frac{x}{n}$$
En première approximation, $\ln(1 + u_n(x)) \sim u_n(x)$, donc $2u_n(x) \sim \frac{x}{n}$, soit :
$$u_n(x) \underset{x \to 0^+}{\sim} \frac{x}{2n}$$

#### Corrigé de la Q4
Posons $u_n(x) = \frac{x}{2n} + v_n(x)$ avec $v_n(x) = o(x)$. 
En injectant $u_n(x)$ dans l'équation :
$$u_n(x) + \left(u_n(x) - \frac{u_n(x)^2}{2} + O(u_n(x)^3)\right) = \frac{x}{n}$$
$$2u_n(x) - \frac{u_n(x)^2}{2} = \frac{x}{n} + O(x^3)$$
Substituons $u_n(x) = \frac{x}{2n} + v_n(x)$ :
$$2\left(\frac{x}{2n} + v_n(x)\right) - \frac{1}{2}\left(\frac{x}{2n} + o(x)\right)^2 = \frac{x}{n}$$
$$\frac{x}{n} + 2v_n(x) - \frac{x^2}{8n^2} + o(x^2) = \frac{x}{n}$$
En simplifiant $\frac{x}{n}$ des deux côtés :
$$2v_n(x) = \frac{x^2}{8n^2} + o(x^2) \implies v_n(x) = \frac{x^2}{16n^2} + o(x^2)$$
Ainsi :
$$u_n(x) = \frac{x}{2n} + \frac{1}{16n^2} x^2 + o(x^2)$$
Le coefficient recherché est $\alpha_n = \frac{1}{16n^2}$.

#### Corrigé de la Q5
Pour un ordre de filtre $N$ fixé, le signal global $S(x)$ est la somme des réponses :
$$S(x) = \sum_{n=1}^{N} u_n(x) = \sum_{n=1}^{N} \left( \frac{x}{2n} + O(x^2) \right)$$
$$S(x) = \frac{x}{2} \sum_{n=1}^{N} \frac{1}{n} + O(x^2)$$
Ainsi, lorsque $x \to 0^+$, on a l'équivalent :
$$S(x) \underset{x \to 0^+}{\sim} \left( \frac{1}{2} \sum_{n=1}^{N} \frac{1}{n} \right) x$$

---

#### 🔬 Analyse critique et limites du modèle

1. **Sensibilité aux incertitudes expérimentales :**
   Si l'entrée mesurée est $\tilde{x} = x(1 + \epsilon)$ avec $|\epsilon| \le 10^{-3}$, l'approximation du premier ordre donne :
   $$\tilde{u}_n(x) \approx \frac{\tilde{x}}{2n} = \frac{x(1+\epsilon)}{2n} = u_n(x)(1+\epsilon)$$
   L'erreur relative sur la sortie $u_n(x)$ est donc de l'ordre de $|\epsilon|$. Le modèle est donc **linéaire en termes de propagation d'erreur** au voisinage de $0$, ce qui garantit une bonne robustesse numérique du filtre pour les faibles signaux.

2. **Limites physiques et pertinence asymptotique :**
   * Pousser le développement limité à un ordre élevé $p$ n'a de sens physique que si le plancher de bruit du dispositif électronique (typiquement de l'ordre de $10^{-6}\text{ }\text{"V"}$ en raison de l'agitation thermique de Nyquist) est inférieur au terme d'ordre $p$. 
   * Si $x < 10^{-6}$, les fluctuations aléatoires du système masquent totalement les termes correcteurs en $x^2$ ou $x^3$. Vouloir appliquer un développement asymptotique de rang supérieur à 1 dans cette zone conduit à un artéfact mathématique sans correspondance physique mesurable. C'est la limite fondamentale de tout modèle asymptotique en ingénierie : **la complexité du calcul formel ne doit jamais dépasser la résolution instrumentale.**