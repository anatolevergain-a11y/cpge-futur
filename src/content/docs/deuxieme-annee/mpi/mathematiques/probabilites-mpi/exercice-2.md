---
title: 'Exercice 2 : Théorème limite central'
description: 'Problème d entraînement type concours pour MPI.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Le théorème limite central (TLC) est l'un des piliers de la théorie des probabilités et de la statistique inférentielle. Il formalise le fait que la somme d'un grand nombre de variables aléatoires indépendantes et identiquement distribuées (iid) tend, après centrage et réduction, à suivre une loi normale, indépendamment de la loi sous-jacente des variables (pour peu que leur variance soit finie).

Dans ce problème, on se propose de démontrer une version simplifiée mais fondamentale du TLC à l'aide de l'outil caractéristique qu'est la **fonction caractéristique**, puis d'appliquer ce résultat à l'analyse asymptotique d'une suite de variables aléatoires et à une discussion critique de la vitesse de convergence.

Soit $(\Omega, \mathcal{A}, \mathbb{P})$ un espace probabilisé. Toutes les variables aléatoires considérées sont définies sur cet espace.

---

### ❓ Questions progressives (incluant une analyse critique du modèle)

#### Partie I : Préliminaires sur les fonctions caractéristiques
1. Soit $X$ une variable aléatoire réelle admettant un moment d'ordre 2. Définir sa fonction caractéristique $\phi_X$ sur $\mathbb{R}$. Rappeler son développement limité à l'ordre 2 au voisinage de $0$ lorsque l'espérance de $X$ est nulle et sa variance est notée $\sigma^2$.
2. Soit $(X_n)_{n \ge 1}$ une suite de variables aléatoires réelles et $X$ une variable aléatoire réelle. Énoncer le théorème de convergence en loi via les fonctions caractéristiques (théorème de Paul Lévy).

#### Partie II : Démonstration du Théorème Limite Central
3. Soit $(X_i)_{i \ge 1}$ une suite de variables aléatoires réelles indépendantes et identiquement distribuées (i.i.d.), intégrables, de moyenne $\mu = \mathbb{E}[X_1] = 0$ et de variance $\sigma^2 = \text{Var}(X_1) = 1$.
   Pour tout entier $n \ge 1$, on pose $S_n = \sum_{i=1}^{n} X_i$ et $Z_n = \frac{S_n}{\sqrt{n}}$.
   Exprimer la fonction caractéristique $\phi_{Z_n}(t)$ en fonction de $\phi_{X_1}$ pour $t \in \mathbb{R}$.
4. À l'aide du développement limité obtenu à la question 1, montrer que pour tout $t \in \mathbb{R}$ fixé :
   $$\lim_{n \to +\infty} \phi_{Z_n}(t) = e^{-\frac{t^2}{2}}$$
5. Conclure quant à la loi limite de la suite $(Z_n)_{n \ge 1}$ et énoncer le Théorème Limite Central sous sa forme générale (pour $\mu$ quelconque et $\sigma > 0$).

#### Partie III : Application et analyse critique
6. Soit $(U_i)_{i \ge 1}$ une suite de variables aléatoires i.i.d. suivant la loi uniforme sur l'intervalle $]0, 1[$. Déterminer l'espérance $\mu$ et la variance $\sigma^2$ de $U_1$.
7. On pose $S_n = \sum_{i=1}^n U_i$. Déterminer un équivalent ou une approximation numérique de $\mathbb{P}\left( \frac{S_n - 50}{\sqrt{25/6}} \le 1.96 \right)$ pour $n = 100$ en invoquant le TLC.
8. **Analyse critique du modèle :** Le TLC garantit une convergence en loi. Explique pourquoi cela ne garantit en rien la convergence des densités (dans le cas à densité) ni la convergence presque sûre. Quel théorème permet d'obtenir des bornes explicites sur l'erreur commise en approximant la loi de $Z_n$ par une loi normale ?

---

### 💡 Pistes & Indications méthodologiques

* **Partie I :** Pensez à utiliser le théorème de convergence dominée pour justifier la dérivation sous le signe intégral de $\mathbb{E}[e^{itX}]$, ce qui relie les dérivées en $0$ de $\phi_X$ aux moments de $X$.
* **Partie II :** Utilisez la multiplicativité de la fonction caractéristique pour des variables indépendantes. Souvenez-vous de la limite classique $\lim_{n \to +\infty} \left(1 + \frac{x}{n}\right)^n = e^x$.
* **Partie III :** Pour la loi uniforme $\mathcal{U}(0,1)$, calculez $\int_0^1 x \, dx$ et $\int_0^1 x^2 \, dx$. Pour l'analyse critique, pensez au théorème de Berry-Esseen.

---

### 📋 Corrigé détaillé pas à pas

#### Partie I : Préliminaires sur les fonctions caractéristiques

1. **Définition :** La fonction caractéristique de $X$ est définie pour tout $t \in \mathbb{R}$ par :
   $$\phi_X(t) = \mathbb{E}[e^{itX}] = \int_{-\infty}^{+\infty} e^{itx} d\mathbb{P}_X(x)$$
   Puisque $X$ admet un moment d'ordre 2, $\mathbb{E}[|X|^2] < \\infty$, ce qui implique par l'inégalité de Cauchy-Schwarz que $X$ est intégrable ($\mathbb{E}[|X|] < +\infty$). 
   Par application du théorème de dérivation des intégrales dépendant d'un paramètre (théorème de Leibniz), $\phi_X$ est de classe $\mathcal{C}^2$ sur $\mathbb{R}$. 
   Si $\mathbb{E}[X] = 0$ et $\text{Var}(X) = \sigma^2$, un développement de Taylor à l'ordre 2 de $e^{itx} = 1 + itx - \frac{t^2 x^2}{2} + o(t^2 x^2)$ au voisinage de $0$ donne :
   $$\phi_X(t) = 1 + it\mathbb{E}[X] - \frac{t^2}{2}\mathbb{E}[X^2] + o(t^2) = 1 - \frac{\sigma^2 t^2}{2} + o(t^2)$$

2. **Théorème de Paul Lévy :** Soit $(X_n)_{n \ge 1}$ une suite de variables aléatoires et $X$ une variable aléatoire. Si, pour tout $t \in \mathbb{R}$, la suite des fonctions caractéristiques $(\phi_{X_n}(t))_{n \ge 1}$ converge simplement vers $\phi_X(t)$ et si $\phi_X$ est continue en $0$, alors $X_n$ converge en loi vers $X$ ($X_n \xrightarrow{\mathcal{L}} X$).

---

#### Partie II : Démonstration du Théorème Limite Central

3. Par indépendance des variables $(X_i)_{i=1}^n$, la fonction caractéristique de la somme $S_n$ est le produit des fonctions caractéristiques :
   $$\phi_{S_n}(t) = \prod_{i=1}^n \phi_{X_i}(t) = (\phi_{X_1}(t))^n$$
   Puisque $Z_n = \frac{1}{\sqrt{n}} S_n$, on a par une propriété élémentaire de la fonction caractéristique ($\phi_{aX}(t) = \phi_X(at)$) :
   $$\phi_{Z_n}(t) = \phi_{S_n}\left(\frac{t}{\sqrt{n}}\right) = \left( \phi_{X_1}\left(\frac{t}{\sqrt{n}}\right) \right)^n$$

4. D'après la question 1, comme $\mathbb{E}[X_1] = 0$ et $\text{Var}(X_1) = 1$, on a au voisinage de $0$ :
   $$\phi_{X_1}(u) = 1 - \frac{u^2}{2} + o(u^2)$$
   En posant $u = \frac{t}{\sqrt{n}}$ (qui tend vers $0$ lorsque $n \to +\infty$ pour $t$ fixé), il vient :
   $$\phi_{Z_n}(t) = \left( 1 - \frac{t^2}{2n} + o\left(\frac{1}{n}\right) \right)^n$$
   En passant au logarithme népérien (ou en utilisant la limite classique $(1 + x/n)^n \to e^x$) :
   $$\ln(\phi_{Z_n}(t)) = n \ln\left( 1 - \frac{t^2}{2n} + o\left(\frac{1}{n}\right) \right) = n \left( -\frac{t^2}{2n} + o\left(\frac{1}{n}\right) \right) = -\frac{t^2}{2} + o(1)$$
   Ainsi, en passant à l'exponentielle :
   $$\lim_{n \to +\infty} \phi_{Z_n}(t) = e^{-\frac{t^2}{2}}$$

5. La fonction $t \mapsto e^{-\frac{t^2}{2}}$ est la fonction caractéristique de la loi normale centrée réduite $\mathcal{N}(0,1)$. Par le théorème de Paul Lévy, on conclut que :
   $$Z_n = \frac{S_n}{\sum} \xrightarrow{\mathcal{L}} \mathcal{N}(0,1)$$
   *Forme générale :* Si $(X_i)$ sont i.i.d. d'espérance $\mu$ et de variance $\sigma^2 > 0$, alors en posant $\tilde{S}_n = \frac{\sum_{i=1}^n X_i - n\mu}{\sigma \sqrt{n}}$, on a $\tilde{S}_n \xrightarrow{\mathcal{L}} \mathcal{N}(0,1)$.

---

#### Partie III : Application et analyse critique

6. Pour $U_1 \sim \mathcal{U}(0,1)$ :
   * Espérance : $\mu = \mathbb{E}[U_1] = \int_0^1 x \, dx = \frac{1}{2}$
   * Moment d'ordre 2 : $\mathbb{E}[U_1^2] = \int_0^1 x^2 \, dx = \frac{1}{3}$
   * Variance : $\sigma^2 = \mathbb{E}[U_1^2] - (\mathbb{E}[U_1])^2 = \frac{1}{3} - \left(\frac{1}{2}\right)^2 = \frac{1}{12}$

7. Pour $n = 100$, l'espérance de $S_{100}$ est $100 \times \frac{1}{2} = 50$ et sa variance est $100 \times \frac{1}{12} = \frac{100}{12} = \frac{25}{3}$, soit un écart-type $\sigma_{S_{100}} = \sqrt{\frac{25}{3}} = \frac{5}{\sqrt{3}} = \sqrt{\frac{25}{6}}$ (selon le libellé de la question, l'écart-type est $\sqrt{25/6}$).
   D'après le TLC, la variable $Z_{100} = \frac{S_{100} - 50}{\sqrt{25/6}}$ suit approximativement une loi $\mathcal{N}(0,1)$.
   Par conséquent :
   $$\mathbb{P}\left( Z_{100} \le 1.96 \right) \approx \Phi(1.96) \approx 0.975$$
   où $\Phi$ désigne la fonction de répartition de la loi $\mathcal{N}(0,1)$.

8. **Analyse critique du modèle :**
   * **Convergence en loi vs Densité :** Le TLC énonce une convergence en loi, c'est-à-dire la convergence des fonctions de répartition en tout point de continuité. Cela n'implique pas la convergence des densités (qui nécessite des hypothèses supplémentaires d'intégrabilité sur les fonctions caractéristiques, via le théorème d'inversion).
   * **Vitesse de convergence :** Le TLC ne fournit pas, par lui-même, d'information sur la vitesse à laquelle la loi de $Z_n$ s'approche de la loi $\mathcal{N}(0,1)$. 
   * **Théorème de Berry-Esseen :** Pour quantifier cette erreur, on fait appel au **théorème de Berry-Esseen**, qui énonce que si les variables $X_i$ admettent en outre un moment d'ordre 3 fini ($\mathbb{E}[|X_1|^3] < +\infty$), alors il existe une constante universelle $C$ (estimée aujourd'hui autour de $0.4748$) telle que pour tout $n$ :
     $$\sup_{x \in \mathbb{R}} \left| \mathbb{P}(Z_n \le x) - \Phi(x) \right| \le \frac{C \mathbb{E}[|X_1 - \mu|^3]}{\sigma^3 \sqrt{n}}$$
     Ce résultat garantit une vitesse de convergence en $\mathcal{O}\left(\frac{1}{\sqrt{n}}\right)$, justifiant l'utilisation pratique des approximations normales pour des valeurs de $n$ modérées ($n \ge 30$ classiquement).