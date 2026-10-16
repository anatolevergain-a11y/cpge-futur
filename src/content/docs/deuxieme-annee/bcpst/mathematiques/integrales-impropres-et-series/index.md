---
title: "Intégrales Impropres & Séries Numériques"
description: "Fiche méthode et exercices corrigés sur les points les plus sélectifs du concours Agro-Véto / G2E."
sidebar:
  badge:
    text: "Point Clé Concours"
    variant: "danger"
---

## 🎯 Pourquoi cette notion est-elle décisive au concours ?

En deuxième année de classe préparatoire BCPST, le diptyque formé par les intégrales impropres et les séries numériques constitue le "juge de paix" des épreuves écrites des concours Agro-Véto et G2E. Les jurys ne cherchent pas seulement à évaluer une récitation de cours, mais bien votre rigueur logique, votre capacité à manipuler des théorèmes généraux avec les bonnes hypothèses, et votre dextérité calculatoire. 

Une erreur dans le choix d'un critère de convergence ou l'oubli de la vérification du signe d'une fonction invalide immédiatement toute la suite d'un problème (notamment lors des études de variables aléatoires à densité ou de transformées de Laplace). Ce guide synthétise les exigences du jury pour transformer ces pièges classiques en points assurés.

---

## 📐 Rappels théoriques & Formules incontournables

Une intégrale impropre sur un intervalle semi-ouvert $[a, b[$ (où $b \in \mathbb{R} \cup \{+\infty\}$) d'une fonction $f : [a, b[ \to \mathbb{R}$ continue est dite convergente si la limite suivante existe et est finie :
$$\lim_{x \to b^{-}} \int_{a}^{x} f(t) \, \text{d}t$$

Une série numérique $\sum u_n$ est convergente si la suite de ses sommes partielles $S_N = \sum_{n=0}^{N} u_n$ admet une limite finie quand $N \to +\infty$.

*   **Intégrales de Riemann usuelles :** L'intégrale $\int_{a}^{+\infty} \frac{1}{t^\alpha} \, \text{d}t$ (avec $a>0$) converge si et seulement si $\alpha > 1$. L'intégrale $\int_{0}^{b} \frac{1}{t^\alpha} \, \text{d}t$ (avec $b>0$) converge si et seulement si $\alpha < 1$.
*   **Séries de Riemann usuelles :** La série $\sum \frac{1}{n^\alpha}$ converge si et seulement si $\alpha > 1$.
*   **Séries géométriques :** La série $\sum q^n$ converge si et seulement si $|q| < 1$, et dans ce cas :
$$\sum_{n=0}^{+\infty} q^n = \frac{1}{1-q}$$

---

### 📌 Point d'obstacle 1 : Justification de la convergence aux bornes ouvertes (équivalents, comparaison)

#### 💡 Méthode de rédaction attendue par le jury
Pour étudier la nature d'une intégrale impropre en une borne posant problème (souvent $0$ ou $+\infty$), la rédaction doit suivre un protocole strict :
1.  **Vérifier la continuité** de la fonction sur l'intervalle considéré.
2.  **Isoler la borne** problématique.
3.  Utiliser les théorèmes de comparaison ou d'équivalence **uniquement** pour des fonctions à valeurs positives (ou de signe constant au voisinage de la borne).
4.  Citer explicitement le théorème de référence (par exemple : *"Par comparaison à une intégrale de Riemann convergente"*).

#### 📋 Exercice type concours résolu pas à pas
**Énoncé :** Étudier la nature de l'intégrale suivante :
$$I = \int_{0}^{1} \frac{\ln(1+t)}{t \sqrt{t}} \, \text{d}t$$

**Corrigé rédigé :**
1. Soit $f : t \mapsto \frac{\ln(1+t)}{t \sqrt{t}}$. La fonction $f$ est continue sur l'intervalle $]0, 1]$. La borne $0$ est une borne impropre.
2. Étude au voisinage de $0^+$. Par les développements limités usuels, lorsque $t \to 0$ :
$$\ln(1+t) \underset{0}{=} t - \frac{t^2}{2} + o(t^2) \underset{0}{\sim} t$$
3. On en déduit le comportement de $f$ au voisinage de $0^+$ :
$$f(t) \underset{t \to 0^{+}}{\sim} \frac{t}{t \sqrt{t}} = \frac{1}{t^{1/2}}$$
4. La fonction $t \mapsto \frac{1}{t^{1/2}}$ est positive et continue sur $]0, 1]$. Son intégrale entre $0$ et $1$ converge car il s'agit d'une intégrale de Riemann de paramètre $\alpha = \frac{1}{2} < 1$.
5. Par conséquent, par le **théorème d'équivalence pour les fonctions positives**, l'intégrale impropre $I$ **converge**.

#### ⚠️ Les erreurs à bannir absolument
*   Appliquer un théorème d'équivalence sur des fonctions changeant de signe sans le justifier (le théorème s'applique aux fonctions de signe constant).
*   Oublier de mentionner la continuité de la fonction sur l'intervalle ouvert avant d'appliquer les critères.

---

### 📌 Point d'obstacle 2 : Séries à termes positifs et critères de comparaison

#### 💡 Méthode de rédaction attendue par le jury
Face à une série $\sum u_n$ à termes positifs, le jury attend une démarche structurée :
1.  Vérifier que $u_n \ge 0$ (ou à partir d'un certain rang $n_0$).
2.  Rechercher un équivalent simple $v_n$ de $u_n$ lorsque $n \to +\infty$, ou utiliser une majoration par une série de référence (Riemann ou géométrique).
3.  Conclure clairement en citant le théorème de comparaison des séries à termes positifs.

#### 📋 Exercice type concours résolu pas à pas
**Énoncé :** Déterminer la nature de la série de terme général :
$$u_n = \ln\left(1 + \frac{1}{n^2}\right)$$

**Corrigé rédigé :**
1. Pour tout entier $n \ge 1$, on a $\frac{1}{n^2} > 0$, donc $1 + \frac{1}{n^2} > 1$, ce qui implique que $u_n > 0$. La série $\sum u_n$ est donc une **série à termes positifs**.
2. Lorsque $n \to +\infty$, $\frac{1}{n^2} \to 0$. En utilisant l'équivalent usuel $\ln(1+X) \underset{0}{\sim} X$, on obtient :
$$u_n \underset{n \to +\infty}{\sim} \frac{1}{n^2}$$
3. La série de terme général $\frac{1}{n^2}$ est une **série de Riemann** convergente (car $\alpha = 2 > 1$).
4. Par le **critère d'équivalence pour les séries à termes positifs**, la série $\sum u_n$ **converge**.

#### ⚠️ Les erreurs à bannir absolument
*   Utiliser la condition nécessaire de convergence $\lim u_n = 0$ pour prouver qu'une série converge (c'est une condition nécessaire mais **jamais** suffisante).
*   Appliquer le critère d'équivalence sur des séries dont le terme général n'est pas de signe constant.

---

### 📌 Point d'obstacle 3 : Lien intégrale-série et séries entières usuelles

#### 💡 Méthode de rédaction attendue par le jury
Le lien entre intégrales et séries repose principalement sur la **comparaison série-intégrale** (pour les fonctions monotones) ou sur l'utilisation des développements en série entière. Le jury valorise les candidats qui posent clairement les hypothèses de régularité et de positivité avant d'encadrer une somme partielle par des intégrales.

#### 📋 Exercice type concours résolu pas à pas
**Énoncé :** Établir la convergence et calculer la somme de la série numérique :
$$S = \sum_{n=1}^{+\infty} \frac{(-1)^{n-1}}{n}$$

**Corrigé rédigé :**
1. Il s'agit d'une **série alternée**. Posons, pour tout $n \ge 1$, $v_n = \frac{1}{n}$.
2. La suite $(v_n)_{n \ge 1}$ est positive, décroissante, et tend vers $0$ lorsque $n \to +\infty$.
3. Par le **critère spécial des séries alternées (CSSA)**, la série $\sum \frac{(-1)^{n-1}}{n}$ **converge**.
4. Pour calculer sa somme, on relie cette série au développement en série entière de la fonction $x \mapsto \ln(1+x)$. Pour tout $x \in ]-1, 1[$ :
$$\ln(1+x) = \sum_{n=1}^{+\infty} \frac{(-1)^{n-1}}{n} x^n$$
5. Par application du **théorème d'Abel radial** (ou par étude directe de la limite de la série entière sur le cercle de convergence), la somme de la série alternée est égale à la valeur de la fonction en $x = 1$ (car la série converge en $x=1$) :
$$S = \ln(1+1) = \ln(2)$$

#### ⚠️ Les erreurs à bannir absolument
*   Oublier de vérifier la décroissance de la suite $(v_n)$ dans le cadre du critère spécial des séries alternées.
*   Appliquer le théorème d'Abel sans avoir préalablement démontré la convergence de la série entière à la borne considérée.