---
title: 'Exercice 2 : Lois usuelles (Binomiale, Poisson, Normale)'
description: 'Problème d entraînement type concours pour PC.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Dans le cadre de l'étude de la fiabilité d'un système de transmission de données par fibre optique, un ingénieur s'intéresse au nombre de bits erronés reçus sur un intervalle de temps donné. Soit $N$ le nombre de bits transmis par seconde, supposé constant et très grand. Chaque bit est transmis indépendamment des autres avec une probabilité de corruption $p \in ]0, 1[$, supposée très faible.

L'objectif de ce problème est d'étudier la modélisation stochastique de ce phénomène par une variable aléatoire binomiale, puis d'analyser ses approximations classiques (loi de Poisson et loi normale) par des méthodes probabilistes rigoureuses (convergence en loi, théorème de la limite centrale).

---

### ❓ Questions progressives (incluant une analyse critique du modèle)

1. **Modélisation initiale :** Soit $X$ la variable aléatoire représentant le nombre de bits erronés parmi les $N$ bits transmis. 
   Justifier que $X$ suit une loi binomiale dont on précisera les paramètres. Exprimer son espérance $\mathbb{E}(X)$ et sa variance $\mathbb{V}(X)$.
2. **Approximation par la loi de Poisson :** On suppose que le produit $N p$ tend vers une constante strictement positive $\lambda > {0}$ lorsque $N \to +\infty$ et $p \to 0$. 
   Pour tout $k \in \mathbb{N}$, déterminer la limite de $\mathbb{P}(X = k)$ lorsque $N \to +\infty$ sous cette contrainte. 
   Reconnaître la loi limite de $X$ et en donner l'espérance et la variance.
3. **Fonction génératrice des moments :** 
   a) Rappeler la définition de la fonction génératrice des moments (ou transformée de Laplace) d'une variable aléatoire discrète $Y$ à valeurs dans $\mathbb{N}$, notée $M_Y(t)$.
   b) Calculer la fonction génératrice des moments $M_X(t)$ de la variable binomiale $X$.
   c) Retrouver le résultat de la question 2 en étudiant la limite de $M_X(t)$ lorsque $N \to +\infty$ avec $Np \to \lambda$.
4. **Approximation normale (Théorème de la limite centrale) :** 
   On pose $X_N = X$. Soit $Y_N$ la variable centrée réduite associée à $X$. 
   Écrire l'expression de $Y_N$ en fonction de $X$, $N$ et $p$. 
   Énoncer précisément le théorème de la limite centrale (TLC) et en déduire la limite en loi de $Y_N$ lorsque $N \to +\infty$.
5. **Analyse critique du modèle et application numérique :**
   On prend $N = 10^4$ bits par seconde et $p = 10^{-3}$.
   a) Calculer la probabilité exacte qu'il y ait exactement $5$ erreurs en une seconde.
   b) Calculer l'approximation de cette probabilité en utilisant la loi de Poisson de paramètre $\lambda = 10$.
   c) Proposer une approximation par la loi normale avec correction de continuité, et comparer qualitativement les trois approches. Discuter des limites de validité de ces approximations dans le cas où $p$ ne serait plus négligeable.

---

### 💡 Pistes & Indications méthodologiques

* **Question 1 :** Pensez aux conditions d'application d'un schéma de Bernoulli indépendant répété $N$ fois.
* **Question 2 :** Écrivez $\mathbb{P}(X = k)$ sous forme factorielle et utilisez un équivalent ou un passage à la limite sous forme de produit.
* **Question 3 :** Utilisez le binôme de Newton pour exprimer $M_X(t) = \mathbb{E}(e^{tX})$ et exploitez la limite classique $(1 + x/N)^N \to e^x$.
* **Question 4 :** Exprimez $X$ comme une somme de $N$ variables de Bernoulli indépendantes pour appliquer le théorème de Lindeberg-Lévy (TLC).
* **Question 5 :** Pour la correction de continuité, rappelez qu'une variable discrète $X$ prenant des valeurs entières est approchée par une variable continue $Z$ par $\mathbb{P}(X = k) \approx \mathbb{P}\left(k - \frac{1}{2} \le Z \le k + \frac{1}{2}\right)$.

---

### 📋 Corrigé détaillé pas à pas

#### 1. Modélisation initiale
Chaque bit transmis subit une altération indépendamment des autres avec une probabilité constante $p$. Le nombre total de bits transmis étant $N$, la variable aléatoire $X$ comptant le nombre de bits erronés suit donc une **loi binomiale** de paramètres $N$ et $p$, notée $\mathcal{B}(N, p)$.

Par définition des lois usuelles :
$$\forall k \in [[0, N]], \quad \mathbb{P}(X = k) = \binom{N}{k} p^k (1-p)^{N-k}$$
Les caractéristiques de $X$ sont :
$$\mathbb{E}(X) = Np \quad \text{et} \quad \mathbb{V}(X) = Np(1-p)$$

---

#### 2. Approximation par la loi de Poisson
Fixons $k \in \mathbb{N}$ et supposons que $N \to +\infty$ et $p \to 0$ de telle sorte que $Np \to \lambda$ (où $\lambda > 0$). Pour $N$ assez grand, $k \le N$ :
$$\mathbb{P}(X = k) = \frac{N!}{k!(N-k)!} \left(\frac{\lambda}{N}\right)^k \left(1 - \frac{\lambda}{N}\right)^{N-k}$$
Réécrivons cette expression :
$$\mathbb{P}(X = k) = \frac{\lambda^k}{k!} \cdot \frac{N(N-1)\dots(N-k+1)}{N^k} \cdot \left(1 - \frac{\lambda}{N}\right)^N \cdot \left(1 - \frac{\lambda}{N}\right)^{-k}$$
Analysons chaque terme lorsque $N \to +\infty$ :
1. $\frac{N(N-1)\dots(N-k+1)}{N^k} = 1 \cdot \left(1-\frac{1}{N}\right)\dots\left(1-\frac{k-1}{N}\right) \xrightarrow[N \to +\infty]{} 1$
2. $\left(1 - \frac{\lambda}{N}\right)^N \xrightarrow[N \to +\infty]{} e^{-\lambda}$
3. $\left(1 - \frac{\lambda}{N}\right)^{-k} \xrightarrow[N \to +\infty]{} 1^{-k} = 1$

Par conséquent, par produit des limites :
$$\lim_{N \to +\infty} \mathbb{P}(X = k) = e^{-\lambda} \frac{\lambda^k}{k!}$$
La loi limite est la **loi de Poisson de paramètre $\lambda$**, notée $\mathcal{P}(\lambda)$. Pour cette loi, l'espérance et la variance valent toutes deux $\lambda$.

---

#### 3. Fonction génératrice des moments
a) La fonction génératrice des moments d'une variable aléatoire discrète $Y$ à valeurs dans $\mathbb{N}$ est définie pour tout $t$ (ou pour tout $t$ dans un voisinage de $0$) par :
$$M_Y(t) = \mathbb{E}(e^{tY}) = \sum_{k=0}^{+\infty} e^{tk} \mathbb{P}(Y = k)$$

b) Pour la variable binomiale $X \sim \mathcal{B}(N, p)$ :
$$M_X(t) = \sum_{k=0}^{N} e^{tk} \binom{N}{k} p^k (1-p)^{N-k} = \sum_{k=0}^{N} \binom{N}{k} (pe^t)^k (1-p)^{N-k}$$
D'après la formule du binôme de Newton :
$$M_X(t) = \left(pe^t + (1-p)\right)^N = \left(1 + p(e^t - 1)\right)^N$$

c) Remplaçons $p$ par $\frac{\lambda + o(1)}{N}$ :
$$M_X(t) = \left(1 + \frac{\lambda(e^t - 1)}{N}\right)^N$$
En passant à la limite lorsque $N \to +\infty$, on reconnait la limite classique de l'exponentielle :
$$\lim_{N \to +\infty} M_X(t) = \exp\left(\lambda(e^t - 1)\right)$$
Cette expression est précisément la fonction génératrice des moments d'une loi de Poisson $\mathcal{P}(\lambda)$. Par injectivité de la correspondance (unicité de la transformée), on retrouve le résultat de la convergence en loi vers la loi $\mathcal{P}(\lambda)$.

---

#### 4. Approximation normale (Théorème de la limite centrale)
Soit $X \sim \mathcal{B}(N, p)$. On peut écrire $X = \sum_{i=1}^N I_i$, où les $(I_i)_{1 \le i \le N}$ sont des variables de Bernoulli indépendantes de paramètre $p$.
L'espérance de $X$ est $\mu = Np$ et sa variance est $\sigma^2 = Np(1-p)$.

La variable centrée réduite associée est :
$$Y_N = \frac{X - \mathbb{E}(X)}{\sqrt{\mathbb{V}(X)}} = \frac{X - Np}{\sqrt{Np(1-p)}}$$

**Théorème de la limite centrale (Lindeberg-Lévy) :** 
Soit $(Z_n)_{n \ge 1}$ une suite de variables aléatoires indépendantes et de même loi, d'espérance $\mu$ et de variance $\sigma^2 < +\infty$. Alors la suite des variables centrées réduites associées converge en loi vers une variable suivant la loi normale centrée réduite $\mathcal{N}(0, 1)$.

Puisque $X$ est la somme de $N$ variables i.i.d. de Bernoulli, le TLC s'applique directement :
$$Y_N \xrightarrow[N \to +\infty]{(\text{loi})} \mathcal{N}(0, 1)$$

---

#### 5. Analyse critique du modèle et application numérique
On a $N = 10^4$ et $p = 10^{-3}$. Ainsi, le paramètre de Poisson associé est $\lambda = Np = 10^4 \times 10^{-3} = 10$.

a) **Calcul exact (loi binomiale) :**
$$\mathbb{P}(X = 5) = \binom{10^4}{5} (10^{-3})^5 (10^{-3})^{10^4 - 5} \quad (\text{terme exact})$$
Numériquement, ce calcul direct à la main est lourd, mais s'exprime par :
$$\mathbb{P}(X = 5) = \binom{10000}{5} (0.001)^5 (0.999)^{9995}$$
On trouve par évaluation numérique $\mathbb{P}(X = 5) \approx 0.03783$ (soit environ $3.78\,\%$).

b) **Approximation par la loi de Poisson :**
Avec $\lambda = 10$ :
$$\mathbb{P}(X = 5) \approx e^{-10} \frac{10^5}{5!} = e^{-10} \frac{100000}{120} = \frac{2500}{3} e^{-10}$$
En sachant que $e^{-10} \approx 4.53999 \times 10^{-5}$ :
$$\mathbb{P}(X = 5) \approx \frac{2500 \times 4.53999 \times 10^{-5}}{3} \approx 0.037833$$
L'approximation de Poisson est ici extrêmement précise car $N$ est grand et $p$ est petit ($Np = 10$ modéré).

c) **Approximation par la loi normale (avec correction de continuité) :**
On approxime $X$ par une variable continue $Z \sim \mathcal{N}(\mu, \sigma^2)$ avec $\mu = 10$ et $\sigma = \sqrt{Np(1-p)} = \sqrt{10 \times 0.999} = \sqrt{9.99} \approx 3.1607$.
La correction de continuité pour $\mathbb{P}(X = 5)$ consiste à calculer :
$$\mathbb{P}(4.5 \le Z \le 5.5) = \mathbb{P}\left(\frac{4.5 - 10}{3.1607} \le \frac{Z - \mu}{\sigma} \le \frac{5.5 - 10}{3.1607}\right)$$
Soit avec $U \sim \mathcal{N}(0, 1)$ :
$$\mathbb{P}(-1.740 \le U \le -1.424) = \Phi(-1.424) - \Phi(-1.740)$$
À l'aide des tables de la loi normale :
* $\Phi(-1.424) \approx 0.0772$
* $\Phi(-1.740) \approx 0.0409$
$$\mathbb{P}(X = 5) \approx 0.0772 - 0.0409 = 0.0363 \quad (\text{soit } 3.63\,\%)$$

* **Discussion critique :** 
  * La **loi binomiale** donne la valeur exacte, mais est numériquement instable pour de grands $N$.
  * La **loi de Poisson** est excellente ici car $p \ll 1$ et $Np$ est "moyen" ($\lambda = 10$). Elle évite la manipulation de factorielles énormes.
  * La **loi normale** est moins précise pour de petites valeurs de comptage ($k = 5$ est proche de $0$ par rapport à l'écart-type, et la distribution binomiale asymétrique est mal approchée par une gaussienne symétrique lorsque $p$ n'est pas proche de $0.5$). La loi normale serait beaucoup plus performante pour estimer des probabilités sur des événements centrés autour de $\mu = 10$.