---
title: "Probabilités Continues, Densités & Théorèmes Limites"
description: "Fiche méthode et exercices corrigés sur les points les plus sélectifs du concours Agro-Véto / G2E."
sidebar:
  badge:
    text: "Point Clé Concours"
    variant: "danger"
---

## 🎯 Pourquoi cette notion est-elle décisive au concours ?

Les chapitres sur les probabilités continues et les théorèmes limites constituent l'un des pilier de l'épreuve écrite de mathématiques des concours Agro-Véto et G2E. Les rapporteurs des jurys déplorent chaque année une maîtrise fragile des notions de convergence, de manipulation des densités et de rigueur dans la rédaction des hypothèses. 

Au concours, ces questions ne se limitent pas à une simple application de cours : elles servent de pont entre l'analyse (intégrales généralisées, théorèmes de convergence, fonctions définies par des intégrales) et les probabilités. Maîtriser ce module permet non seulement de s'assurer d'excellentes notes aux questions de probabilités, mais valorise également votre copie par une rigueur lexicale et logique très attendue par les correcteurs.

## 📐 Rappels théoriques & Formules incontournables

Une variable aléatoire réelle $X$ est dite à densité s'il existe une fonction $f : \mathbb{R} \to \mathbb{R}$ positive, continue (ou par morceaux), telle que pour tout intervalle $[a, b]$ :
$$P(a \le X \le b) = \int_{a}^{b} f(t) \, \text{d}t$$

* **Fonction de répartition :** $F_X(x) = P(X \le x) = \int_{-\infty}^{x} f(t) \, \text{d}t$. Elle est de classe $\mathcal{C}^1$ partout où $f$ est continue.
* **Espérance (si elle existe) :** $E(X) = \int_{-\infty}^{+\infty} t f(t) \, \text{d}t$ (convergence absolue requise : $\int_{-\infty}^{+\infty} |t| f(t) \, \text{d}t < +\infty$).
* **Variance (si elle existe) :** $V(X) = E(X^2) - (E(X))^2 = \int_{-\infty}^{+\infty} (t - E(X))^2 f(t) \, \text{d}t$.
* **Loi Normale $\mathcal{N}(\mu, \sigma^2)$ :** de densité $f(x) = \frac{1}{\sigma \sqrt{2\pi}} \exp\left(-\frac{(x - \mu)^2}{2\sigma^2}\right)$.
* **Théorème Central Limite (TCL) :** Soit $(X_n)_{n \in \mathbb{N}^*}$ une suite de variables aléatoires indépendantes et identiquement distribuées (i.i.d.), admises de même espérance $\mu$ et de même variance $\sigma^2 > 0$. Alors, la suite des variables centrées réduites $\frac{\overline{X}_n - \mu}{\sigma/\sqrt{n}}$ converge en loi vers une variable suivant la loi normale centrée réduite $\mathcal{N}(0, 1)$.

---

### 📌 Point d'obstacle 1 : Calcul de fonctions de répartition et passage à la densité

#### 💡 Méthode de rédaction attendue par le jury
Le jury pénalise lourdement les candidats qui écrivent directement des intégrales sans préciser le domaine de validité de la variable $x$. 
1. **Poser explicitement** la définition : $F_X(x) = P(X \le x)$.
2. **Discuter selon les valeurs de $x$** en lien avec le support de la densité de $f$.
3. **Calculer l'intégrale** en explicitant les bornes.
4. **Conclure par dérivation** sur les intervalles de continuité pour obtenir la densité de $X$ ou d'une fonction de $X$ (méthode de la fonction de répartition).

#### 📋 Exercice type concours résolu pas à pas
Soit $X$ une variable aléatoire suivant la loi uniforme sur $[0, 1]$. On pose $Y = -\ln(X)$. Déterminer la fonction de répartition de $Y$ puis en déduire sa densité.

**Résolution :**
La variable $X$ admet pour densité $f_X(t) = 1$ si $t \in [0, 1]$ et $0$ sinon.
Soit $y \in \mathbb{R}$. Par définition, la fonction de répartition de $Y$ est :
$$F_Y(y) = P(Y \le y) = P(-\ln(X) \le y)$$
Par stricte décroissance de la fonction logarithme, cela équivaut à :
$$P(\ln(X) \ge -y) \iff P(X \ge \exp(-y))$$
Cas 1 : Si $y < 0$, alors $\exp(-y) > 1$. Comme $X(\Omega) = [0, 1]$, on a $P(X \ge \exp(-y)) = 0$. Ainsi, $F_Y(y) = 0$.
Cas 2 : Si $y \ge 0$, alors $\exp(-y) \le 1$. Comme $\exp(-y) > 0$ :
$$F_Y(y) = \int_{\exp(-y)}^{1} 1 \, \text{d}t = 1 - \exp(-y)$$
En résumé :
$$F_Y(y) = \begin{cases} 0 & \text{si } y < 0 \\ 1 - \exp(-y) & \text{si } y \ge 0 \end{cases}$$
La fonction $F_Y$ est continue sur $\mathbb{R}$, dérivable partout sauf en $0$. Sa dérivée fournit la densité $f_Y$ de $Y$ :
$$f_Y(y) = \begin{cases} 0 & \text{si } y < 0 \\ \exp(-y) & \text{si } y > 0 \end{cases}$$
*(On reconnaît la loi exponentielle de paramètre $\lambda = 1$)*.

#### ⚠️ Les erreurs à bannir absolument
* Oublier de mentionner que $F_Y$ est nulle en deçà du support de la variable.
* Dériver $F_Y$ sans avoir préalablement vérifié sa continuité et sa dérivabilité par morceaux.
* Confondre $P(X \le x)$ et $P(X \ge x)$ lors des manipulations d'inégalités avec des fonctions monotones.

---

### 📌 Point d'obstacle 2 : Espérance, variance et transfert pour les variables à densité

#### 💡 Méthode de rédaction attendue par le jury
Le théorème de transfert (ou loi du statisticien inconscient) est indispensable mais son application requiert la mention explicite de la **convergence absolue** de l'intégrale.

1. Énoncer clairement la condition d'existence : l'intégrale $\int_{-\infty}^{+\infty} |g(t)| f(t) \, \text{d}t$ doit converger.
2. Écrire la formule générale : $E(g(X)) = \int_{-\infty}^{+\infty} g(t) f(t) \, \text{d}t$.
3. Ne jamais supposer l'existence d'une espérance sans l'avoir démontrée ou justifiée par le cours (par exemple, les variables usuelles à densité sur un segment ont toujours une espérance et une variance).

#### 📋 Exercice type concours résolu pas à pas
Soit $X$ une variable aléatoire de densité $f(x) = \frac{1}{2}\exp(-|x|)$ pour $x \in \mathbb{R}$. Calculer l'espérance et la variance de $X$.

**Résolution :**
Vérifions d'abord la convergence absolue pour l'espérance via le calcul de l'intégrale de $|t| f(t)$ :
$$\int_{-\infty}^{+\infty} |t| \frac{1}{2}\exp(-|t|) \, \text{d}t = \int_{0}^{+\infty} t \exp(-t) \, \text{d}t$$
Par croissances comparées ou intégration par parties (licite et classique), cette intégrale converge et vaut $1$. L'espérance existe donc.
Par symétrie de la densité $f$ (fonction paire) et impéricité de $t \mapsto t f(t)$ (fonction impaire) sur un domaine symétrique :
$$E(X) = \int_{-\infty}^{+\infty} t \frac{1}{2}\exp(-|t|) \, \text{d}t = 0$$
Pour la variance, calculons $E(X^2)$ en utilisant le théorème de transfert avec $g(t) = t^2$ :
$$E(X^2) = \int_{-\infty}^{+\infty} t^2 \frac{1}{2}\exp(-|t|) \, \text{d}t = \int_{0}^{+\infty} t^2 \exp(-t) \, \text{d}t$$
À l'aide de deux intégrations par parties successives (bien rédigées en posant les termes de classe $\mathcal{C}^1$), on obtient :
$$\int_{0}^{+\infty} t^2 \exp(-t) \, \text{d}t = 2$$
Ainsi, $E(X^2) = 2$.
Finalement, par König-Huygens :
$$V(X) = E(X^2) - (E(X))^2 = 2 - 0^2 = 2$$

#### ⚠️ Les erreurs à bannir absolument
* Utiliser la symétrie d'une fonction sans vérifier que l'intégrale est absolument convergente (intégrales semi-convergentes).
* Oublier de retrancher $(E(X))^2$ dans la formule de König-Huygens.
* Ne pas mentionner le théorème de transfert lorsque l'on calcule l'espérance d'une fonction de $X$.

---

### 📌 Point d'obstacle 3 : Utilisation de la loi normale et théorème central limite aux concours Agro-Véto

#### 💡 Méthode de rédaction attendue par le jury
Les problèmes d'Agro-Véto modélisent souvent des mesures biologiques ou agronomiques par des sommes de variables aléatoires. Le jury exige une rigueur absolue dans la citation des hypothèses du Théorème Central Limite.

1. **Vérifier l'indépendance** des variables aléatoires (souvent mentionnée dans l'énoncé).
2. **Vérifier l'appartenance à une même loi** ou du moins l'identité des moments (espérance $\mu$ et variance $\sigma^2$ finies communes).
3. **Introduire la variable centrée réduite** avant d'appliquer la convergence en loi vers $\mathcal{N}(0, 1)$.
4. Ne pas confondre la convergence en loi (qui porte sur les fonctions de répartition) avec la convergence des variables elles-mêmes.

#### 📋 Exercice type concours résolu pas à pas
Un laboratoire étudie la teneur en un principe actif d'une plante. On mesure cette teneur sur $n$ échantillons indépendants. On modélise chaque mesure par une variable aléatoire $X_i$ d'espérance $\mu = 5$ et d'écart-type $\sigma = 1,2$. 
À l'aide du Théorème Central Limite, déterminer un entier $n$ minimal pour que la moyenne empirique $\overline{X}_n = \frac{1}{n}\sum_{i=1}^{n} X_i$ s'écarte de $\mu$ de moins de $0,1$ avec une probabilité supérieure ou égale à $0,95$. On rappelle que pour une variable $Z \sim \mathcal{N}(0,1)$, $P(-1,96 \le Z \le 1,96) \approx 0,95$.

**Résolution :**
Les variables $(X_i)_{1 \le i \le n}$ sont indépendantes, de même espérance $\mu = 5$ et de même variance $\sigma^2 = (1,2)^2 = 1,44 < +\infty$.
D'après le Théorème Central Limite, la suite des variables centrées réduites :
$$Z_n = \frac{\overline{X}_n - \mu}{\sigma / \sqrt{n}} = \frac{\overline{X}_n - 5}{1,2 / \sqrt{n}}$$
converge en loi vers une variable suivant la loi normale $\mathcal{N}(0, 1)$.
On cherche $n$ tel que :
$$P\left(|\overline{X}_n - 5| \le 0,1\right) \ge 0,95$$
Ceci équivaut à :
$$P\left(\frac{|\overline{X}_n - 5|}{1,2/\sqrt{n}} \le \frac{0,1}{1,2/\sqrt{n}}\right) \ge 0,95 \iff P\left(|Z_n| \le \frac{0,1 \sqrt{n}}{1,2}\right) \ge 0,95$$
En effectuant l'approximation asymptotique par la loi normale $\mathcal{N}(0,1)$, on pose :
$$\frac{0,1 \sqrt{n}}{1,2} \ge 1,96 \iff \frac{\sqrt{n}}{12} \ge 1,96 \iff \sqrt{n} \ge 23,52$$
En élevant au carré :
$$n \ge (23,52)^2 \approx 553,19$$
Il faut donc au minimum $n = 554$ échantillons pour satisfaire la condition du laboratoire.

#### ⚠️ Les erreurs à bannir absolument
* Oublier de diviser l'écart-type par $\sqrt{n}$ lors du centrage-réduction de la moyenne empirique $\overline{X}_n$ (confusion entre l'écart-type de $X_i$ et celui de $\overline{X}_n$).
* Appliquer le TCL sans mentionner l'indépendance et l'existence des moments d'ordre 2.
* Utiliser abusivement la loi normale sans préciser qu'il s'agit d'une approximation légitimée par le Théorème Central Limite pour $n$ grand.