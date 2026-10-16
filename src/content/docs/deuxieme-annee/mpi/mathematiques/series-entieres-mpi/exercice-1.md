---
title: 'Exercice 1 : Rayon de convergence'
description: 'Problème d entraînement type concours pour MPI.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Le but de ce problème est l'étude détaillée du rayon de convergence et du comportement au bord du domaine de définition d'une série entière paramétrée. Ce type de situation se rencontre fréquemment dans l'analyse asymptotique des coefficients de Fourier de fonctions définies par des intégrales singulières.

Soit $\alpha \in \mathbb{R}$ un paramètre réel. On considère la suite $(a_n)_{n \in \mathbb{N}^*}$ définie par :
$$a_n = \frac{n^\alpha \ln(n)}{n! + 3^n}$$

On s'intéresse à la série entière de la variable complexe $z$ :
$$\sum_{n \ge 1} a_n z^n$$

---

### ❓ Questions progressives (incluant une analyse critique du modèle)

1. **Étude asymptotique préliminaire** : Déterminer un équivalent simple de la suite $(a_n)_{n \ge 1}$ lorsque $n \to +\infty$. Ce résultat dépend-il de la valeur de $\alpha$ ?
2. **Calcul du rayon de convergence** : En déduire le rayon de convergence $R$ de la série entière $\sum_{n \ge 1} a_n z^n$.
3. **Comportement sur le cercle de convergence** : 
   - Étudier la nature de la série numérique pour $z = R$ et $z = -R$ en fonction de la valeur du paramètre $\alpha$.
   - Que peut-on en déduire pour le domaine de convergence ouverte, fermée ou semi-fermée de la série entière ?
4. **Analyse critique du modèle** : Supposons que l'on modifie le terme général en remplaçant $3^n$ par $n!$. Quel serait l'impact sur le rayon de convergence ? Discuter de la robustesse du modèle face à la compétition de croissance entre la factorielle et la fonction exponentielle.

---

### 💡 Pistes & Indications méthodologiques

- **Question 1** : Mettez en facteur le terme prépondérant au dénominateur (ici $n!$ croît beaucoup plus vite que $3^n$). Utilisez les croissances comparées classiques.
- **Question 2** : Utilisez la règle de d'Alembert pour les séries numériques associée au calcul du rayon de convergence, ou le critère de Cauchy.
- **Question 3** : Pour l'étude de la convergence sur le bord, ramenez la série à des séries de Riemann ou de Bertrand par comparaison de séries à termes positifs ou par le critère d'Abel si des signes alternent.
- **Question 4** : Analysez la limite du quotient $\left|\frac{a_{n+1}}{a_n}\right|$ dans le nouveau cadre.

---

### 📋 Corrigé détaillé pas à pas

#### 1. Étude asymptotique préliminaire

Soit $n \ge 1$. Le terme général est $a_n = \frac{n^\alpha \ln(n)}{n! + 3^n}$. 
Au dénominateur, nous comparons $n!$ et $3^n$. Par croissances comparées, pour tout réel $\beta$ (en particulier $\beta = 0$), on sait que :
$$\lim_{n \to +\infty} \frac{3^n}{n!} = 0$$
On peut donc factoriser par $n!$ au dénominateur :
$$n! + 3^n = n! \left(1 + \frac{3^n}{n!}\right)$$
Ainsi, le terme général s'écrit :
$$a_n = \frac{n^\alpha \ln(n)}{n!} \cdot \frac{1}{1 + \frac{3^n}{n!}}$$
Puisque $\lim_{n \to +\infty} \frac{3^n}{n!} = 0$, il vient par quotient :
$$a_n \underset{n \to +\infty}{\sim} \frac{n^\alpha \ln(n)}{n!}$$

Conclusion: L'équivalent asymptotique de $a_n$ ne dépend pas de la valeur du paramètre $\alpha$ en tant qu'ordre de grandeur dominant, car la factorielle au dénominateur l'emporte toujours sur $n^\alpha \ln(n)$.

---

#### 2. Calcul du rayon de convergence

Pour déterminer le rayon de convergence $R$ de la série entière $\sum_{n \ge 1} a_n z^n$, utilisons la règle de d'Alembert pour les séries entières (applicable car $a_n \neq 0$ pour $n$ assez grand) :
$$\left|\frac{a_{n+1}}{a_n}\right| = \frac{(n+1)^\alpha \ln(n+1)}{(n+1)! + 3^{n+1}} \cdot \frac{n! + 3^n}{n^\alpha \ln(n)}$$

En utilisant l'équivalent trouvé à la question 1 :
$$\left|\frac{a_{n+1}}{a_n}\right| \underset{n \to +\infty}{\sim} \frac{(n+1)^\alpha \ln(n+1)}{(n+1)!} \cdot \frac{n!}{n^\alpha \ln(n)}$$

Or, $(n+1)! = (n+1)n!$, ce qui simplifie le quotient factoriel :
$$\frac{(n+1)!}{n!} = \frac{1}{n+1}$$
De plus, 
$$\frac{(n+1)^\alpha}{n^\alpha} = \left(1 + \frac{1}{n}\right)^\alpha \underset{n \to +\infty}{\longrightarrow} 1$$
Et pour le terme logarithmique :
$$\frac{\ln(n+1)}{\ln(n)} = \frac{\ln(n(1 + \frac{1}{n}))}{\ln(n)} = \frac{\ln(n) + \ln(1 + \frac{1}{n})}{\ln(n)} = 1 + \frac{\ln(1 + \frac{1}{n})}{\ln(n)} \underset{n \to +\infty}{\longrightarrow} 1$$

En rassemblant ces limites :
$$\lim_{n \to +\infty} \left|\frac{a_{n+1}}{a_n}\right| = \lim_{n \to +\infty} \frac{1}{n+1} \cdot \left(1 + \frac{1}{n}\right)^\alpha \cdot \frac{\ln(n+1)}{\ln(n)} = 0$$

Par le critère de d'Alembert, le rayon de convergence $R$ est donné par :
$$R = \frac{1}{\lim_{n \to +\infty} \left|\frac{a_{n+1}}{a_n}\right|} = +\infty$$

Conclusion: La série entière a un **rayon de convergence infini** ($R = +\infty$). Elle converge donc pour tout $z \in \mathbb{C}$.

---

#### 3. Comportement sur le cercle de convergence

Puisque $R = +\infty$, le "cercle" de convergence est réduit à l'ensemble vide (la série converge sur tout le plan complexe $\mathbb{C}$). Il n'y a donc pas de points au bord à étudier pour la convergence simple ou absolue, la convergence étant absolue sur tout $\mathbb{C}$. 

*(Note pédagogique : si le problème s'était restreint à un rayon fini par modification des coefficients, on aurait appliqué les critères de Riemann/Bertrand ou le critère spécial des séries alternées (CSAE).*

---

#### 4. Analyse critique du modèle

Modifions le dénominateur en remplaçant $3^n$ par $n!$. Le nouveau terme général devient :
$$\tilde{a}_n = \frac{n^\alpha \ln(n)}{n! + n!} = \frac{n^\alpha \ln(n)}{2 \cdot n!}$$

Le calcul du nouveau rapport de d'Alembert donne :
$$\left|\frac{\tilde{a}_{n+1}}{\tilde{a}_n}\right| \underset{n \to +\infty}{\sim} \frac{(n+1)^\alpha \ln(n+1)}{2(n+1)!} \cdot \frac{2n!}{n^\alpha \ln(n)} = \frac{1}{n+1} \cdot \left(1+\frac{1}{n}\right)^\alpha \frac{\ln(n+1)}{\ln(n)}$$

La limite reste $0$, et le rayon de convergence est donc toujours $R = +\infty$. 

**Discussion sur la robustesse du modèle** : 
Le comportement asymptotique est dicté par la compétition entre le numérateur (polynomial en $log$ et $n$) et le dénominateur. Pour que le rayon de convergence devienne fini ($R < +\infty$), il faudrait que le dénominateur croisse géométriquement ou polynomialement de manière moins agressive (par exemple en $c^n$ avec $c > 1$, ou $n^k$). La présence de la factorielle $n!$ au dénominateur est une "force centrifuge" si puissante qu'elle écrase n'importe quelle croissance polynomiale ou polylogarithmique au numérateur, garantissant une convergence universelle dans $\mathbb{C}$.