---
title: 'Cours : Probabilités discrètes et continues'
description: 'Fiche de synthèse officielle et démonstrations du programme CPGE MPI.'
---

## 📌 1. Définitions & Cadre d'étude

Soit $(\Omega, \mathcal{A}, \mathbb{P})$ un espace probabilisé. $\Omega$ est l'univers, $\mathcal{A}$ est une tribu (ou $\sigma$-algèbre) sur $\Omega$, et $\mathbb{P}$ est une mesure de probabilité sur $(\Omega, \mathcal{A})$.

### Variables aléatoires discrètes
Une variable aléatoire réelle discrète $X$ est une application de $\Omega$ dans $\mathbb{R}$ telle que $X(\Omega)$ est fini ou dénombrable, et pour tout $x \in \mathbb{R}$, l'événement $\{X = x\} = X^{-1}(\{x\})$ appartient à $\mathcal{A}$.

*   **Loi de probabilité :** Déterminée par la famille des réels $\{\mathbb{P}(X = x)\}_{x \in X(\Omega)}$.
*   **Espérance :** $X$ admet une espérance si la famille $(\omega \mapsto X(\omega))$ est sommable, c'est-à-dire si $\sum_{x \in X(\Omega)} |x| \mathbb{P}(X = x) < +\infty$. Dans ce cas :
    $$\mathbb{E}[X] = \sum_{x \in X(\Omega)} x \mathbb{P}(X = x)$$
*   **Variance :** Si $X$ admet un moment d'ordre $2$ ($\mathbb{E}[X^2] < +\infty$), alors :
    $$\text{V}(X) = \mathbb{E}[(X - \mathbb{E}[X])^2] = \mathbb{E}[X^2] - (\mathbb{E}[X])^2$$

### Variables aléatoires à densité (continues)
Une variable aléatoire réelle $X$ est dite à densité s'il existe une application $f : \mathbb{R} \to \mathbb{R}_+,$ continue par morceaux et intégrable sur $\mathbb{R}$, telle que pour tous réels $a \le b$ :
$$\mathbb{P}(a \le X \le b) = \int_{a}^{b} f(t) \, \text{d}t$$
L'application $f$ est appelée **densité de probabilité** de $X$. On a nécessairement $\int_{-\infty}^{+\infty} f(t) \, \text{d}t = 1$.

*   **Fonction de répartition :** $F_X(x) = \mathbb{P}(X \le x) = \int_{-\infty}^{x} f_X(t) \, \text{d}t$. $F_X$ est de classe $\mathcal{C}^1$ sur $\mathbb{R}$ (sauf en un nombre fini de points) et $F'_X(x) = f_X(x)$ là où $f_X$ est continue.
*   **Espérance :** $X$ admet une espérance si l'intégrale $\int_{-\infty}^{+\infty} t f(t) \, \text{d}t$ converge absolument. Le cas échéant :
    $$\mathbb{E}[X] = \int_{-\infty}^{+\infty} t f(t) \, \text{d}t$$
*   **Variance :** Si $\mathbb{E}[X^2] < +\infty$ (convergence absolue de $\int_{-\infty}^{+\infty} t^2 f(t) \, \text{d}t$), alors :
    $$\text{V}(X) = \int_{-\infty}^{+\infty} (t - \mathbb{E}[X])^2 f(t) \, \text{d}t = \mathbb{E}[X^2] - (\mathbb{E}[X])^2$$

---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### Théorème de transfert (Theoreme de transport)
**Énoncé :** Soit $X$ une variable aléatoire (discrète ou à densité de densité $f$) et $g : \mathbb{R} \to \mathbb{R}$ une fonction continue (ou continue par morceaux).
*   Dans le cas discret, $g(X)$ admet une espérance si et seulement si $\sum_{x \in X(\Omega)} |g(x)|\mathbb{P}(X=x) < +\infty$, et alors :
    $$\mathbb{E}[g(X)] = \sum_{x \in X(\Omega)} g(x) \mathbb{P}(X = x)$$
*   Dans le cas continu, $g(X)$ admet une espérance si et seulement si $\int_{-\infty}^{+\infty} |g(t)| f(t) \, \text{d}t < +\infty$, et alors :
    $$\mathbb{E}[g(X)] = \int_{-\infty}^{+\infty} g(t) f(t) \, \text{d}t$$

**Démonstration (Cas continu - Admission de la version mesurable générale, application via le théorème de Fubini-Tonelli pour les v.a. positives) :**
Soit $X$ une variable aléatoire à densité $f$. On pose $Y = g(X)$. Par définition de l'espérance via la loi de $Y$ (si $Y$ admet une densité $f_Y$), on a $\mathbb{E}[Y] = \int_{\mathbb{R}} y f_Y(y) \, \text{d}y$. 
En utilisant le théorème de changement de variable dans les intégrales de Lebesgue (ou le théorème de transfert démontré rigoureusement en théorie de la mesure via l'intégration des fonctions étagées croissantes), si $\int_{\mathbb{R}} |g(t)| f(t) \, \text{d}t < +\infty$, alors :
$$\mathbb{E}[g(X)] = \int_{\mathbb{R}} g(t) f(t) \, \text{d}t$$
La preuve formelle repose sur la mesurabilité de $g$ et l'égalité des mesures images $\mathbb{P}_{g(X)} = g_*(\mathbb{P}_X)$. Q.E.D.

### Inégalité de Bienaymé-Tchebychev
**Énoncé :** Soit $X$ une variable aléatoire admettant un moment d'ordre $2$ et une variance $\text{V}(X)$ strictement positive. Alors, pour tout réel $\epsilon > 0$ :
$$\mathbb{P}(|X - \mathbb{E}[X]| \ge \epsilon) \le \frac{\text{V}(X)}{\epsilon^2}$$

**Démonstration :**
Posons $m = \mathbb{E}[X]$ et $\sigma^2 = \text{V}(X)$. Soit $\epsilon > 0$. On introduit l'indicateur $I = \mathbf{1}_{|X - m| \ge \epsilon}$. 
On remarque l'inégalité suivante valable pour tout $\omega \in \Omega$ :
$$\epsilon^2 \mathbf{1}_{|X(\omega) - m| \ge \epsilon} \le (X(\omega) - m)^2 \mathbf{1}_{|X(\omega) - m| \ge \epsilon} \le (X(\omega) - m)^2$$
En passant à l'espérance (qui est un opérateur croissant et linéaire) :
$$\epsilon^2 \mathbb{E}[\mathbf{1}_{|X - m| \ge \epsilon}] \le \mathbb{E}[(X - m)^2]$$
Or, l'espérance de l'indicateur d'un événement est égale à la probabilité de cet événement : $\mathbb{E}[\mathbf{1}_{|X - m| \ge \epsilon}] = \mathbb{P}(|X - m| \ge \epsilon)$.
Ainsi :
$$\epsilon^2 \mathbb{P}(|X - m| \ge \epsilon) \le \sigma^2 \implies \mathbb{P}(|X - m| \ge \epsilon) \le \frac{\sigma^2}{\epsilon^2}$$
CQFD.

---

## 💡 3. Méthodes de calcul & Algorithmes

### Calcul de la loi d'une fonction de variable aléatoire
Pour déterminer la loi de $Y = g(X)$ où $X$ est une variable aléatoire continue de densité $f_X$ :
1.  **Méthode de la fonction de répartition :** 
    Exprimer $F_Y(y) = \mathbb{P}(g(X) \le y)$ en résolvant l'inéquation $g(X) \le y$ sous forme d'intervalles sur $X$.
    Dériver ensuite $F_Y$ par morceaux pour obtenir la densité $f_Y = F'_Y$ (aux points de continuité).
2.  **Formule de transfert / Changement de variable (Cas bijectif) :**
    Si $g$ est de classe $\mathcal{C}^1$, strictement monotone sur un intervalle $I$ tel que $\mathbb{P}(X \in I) = 1$, alors $Y = g(X)$ admet une densité $f_Y$ nulle hors de $g(I)$ et donnée par :
    $$f_Y(y) = f_X(g^{-1}(y)) \left| \frac{\text{d}}{\text{d}y} (g^{-1}(y)) \right|$$

### Implémentation en Python (Simulation de variables aléatoires)
En MPI, l'utilisation de `numpy` est standard pour manipuler et simuler des lois de probabilité.

```python
import numpy as np

def simuler_loi_perso(n_samples: int) -> np.ndarray:
    """
    Simule un echantillon de taille n_samples d'une loi continue 
    f(x) = 2x sur [0, 1] par la methode de l'inverse (fonction de repartition).
    F(x) = x^2 donc x = sqrt(u) avec u uniforme sur [0, 1].
    """
    u = np.random.uniform(0.0, 1.0, n_samples)
    x = np.sqrt(u)
    return x

# Verification numerique de l'esperance theorique (E[X] = 2/3)
echantillon = simuler_loi_perso(100000)
esperance_empirique = np.mean(echantillon)
print(f"Esperance empirique : {esperance_empirique:.4f} (Theorique : {2/3:.4f})")
```

---

## ⚠️ 4. Pièges classiques aux Concours

1.  **Confondre variable aléatoire à densité et variable aléatoire discrète :** Une variable à densité a une probabilité nulle de prendre une valeur ponctuelle isolée ($\mathbb{P}(X = x) = 0$ pour tout $x \in \mathbb{R}$). N'écrivez jamais $\mathbb{P}(X = x) f(x)$ ou de sommations sur des variables continues (remplacez par des intégrales).
2.  **Oublier de vérifier l'intégrabilité (ou la sommabilité) :** L'écriture $\mathbb{E}[X] = \int_{-\infty}^{+\infty} t f(t) \, \text{d}t$ exige l'**existence** de l'intégrale, c'est-à-dire la convergence absolue $\int_{-\infty}^{+\infty} |t| f(t) \, \text{d}t < +\infty$. Si l'intégrale semi-converge (ex: distribution de Cauchy), l'espérance n'existe pas !
3.  **Mauvaise manipulation des bornes lors des changements de variables :** Pour les densités, veillez à bien identifier le support de la nouvelle variable aléatoire $Y = g(X)$. Une densité est nulle en dehors de son support.
4.  **Indépendance vs Non-corrélation :** Deux variables aléatoires peuvent être de covariance nulle (non corrélées) sans pour autant être indépendantes (l'indépendance implique la non-corrélation, la réciproque est fausse en general, sauf pour le couple gaussien).