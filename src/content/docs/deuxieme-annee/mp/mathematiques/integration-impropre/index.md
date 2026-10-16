---
title: 'Cours : Intégration sur un intervalle quelconque'
description: 'Synthèse de cours, théorèmes et démonstrations.'
---

# Fiche de Cours : Intégration sur un intervalle quelconque
**Filière :** MP — **Niveau :** Deuxième année  
**Matière :** Mathématiques  

---

## 1. Introduction et Intégrale d'une fonction continue par morceaux

Soit $I$ un intervalle de $\mathbb{R}$ (borné ou non, ouvert, fermé ou semi-ouvert). On note $IC(I, \mathbb{K})$ l'espace vectoriel des fonctions continues par morceaux de $I$ dans $\mathbb{K}$ (avec $\mathbb{K} = \mathbb{R}$ ou $\mathbb{C}$).

### A. Intégrale sur un intervalle quelconque
#### Définition (Intégrabilité pour les fonctions positives)
Soit $f \in IC(I, \mathbb{R}_+)$ (ou plus généralement $f : I \to \mathbb{R}_+$ continue par morceaux). On dit que $f$ est **intégrable sur $I$** si l'ensemble des intégrales sur les segments inclus dans $I$ est majoré :
$$\sup_{\substack{[a,b] \subset I \\ a \leq b}} \int_a^b f(t) \, dt < +\infty$$
Si $f$ est positive et intégrable, son intégrale sur $I$ est définie par :
$$\int_I f(t) \, dt = \sup_{[a,b] \subset I} \int_a^b f(t) \, dt = \lim_{\substack{a \to \alpha^+ \\ b \to \beta^-}} \int_a^b f(t) \, dt$$
où $\alpha = \inf I$ et $\beta = \sup I$.

#### Définition (Intégrabilité pour les fonctions à valeurs complexes)
Soit $f \in IC(I, \mathbb{C})$. On dit que $f$ est **intégrable sur $I$** si sa partie réelle $\text{Re}(f)$, sa partie imaginaire $\text{Im}(f)$ le sont, ou de manière équivalente, si la fonction $|f|$ est intégrable sur $I$.
Dans ce cas, on pose :
$$\int_I f(t) \, dt = \int_I \text{Re}(f)(t) \, dt + i \int_I \text{Im}(f)(t) \, dt$$

On note $L^1(I, \mathbb{K})$ l'espace vectoriel des fonctions intégrables sur $I$.

---

## 2. Propriétés fondamentales de l'intégrale

### Théorème (Structure et Linéarité)
1. **Espace vectoriel :** $L^1(I, \mathbb{K})$ est un $\mathbb{K}$-espace vectoriel et l'application $f \mapsto \int_I f$ est une forme linéaire.
2. **Relation de Chasles :** Si $f \in L^1(I, \mathbb{K})$ et $c \in I$, alors pour tout $a, b \in I$, les intégrales existent et se comportent comme sur les segments.
3. **Positivité :** Si $f \in L^1(I, \mathbb{R})$ et $f \ge 0$, alors $\int_I f \ge 0$. De plus, si $f$ est continue et $\int_I f = 0$, alors $f = 0$.
4. **Croissance :** Si $f, g \in L^1(I, \mathbb{R})$ et $f \le g$, alors $\int_I f \le \int_I g$.
5. **Inégalité triangulaire :** Si $f \in L^1(I, \mathbb{K})$, alors $|f| \in L^1(I, \mathbb{R})$ et :
   $$\left| \int_I f(t) \, dt \right| \le \int_I |f(t)| \, dt$$

---

## 3. Théorèmes de comparaison et critères d'intégrabilité

### A. Cas des fonctions à valeurs positives
#### Théorème (Comparaison / Majoration)
Soient $f, g \in IC(I, \mathbb{R}_+)$ telles que $0 \le f \le g$ au voisinage de la borne problématique.
* Si $g$ est intégrable sur $I$, alors $f$ est intégrable sur $I$ (**Majoration**).
* Si $f$ est non intégrable sur $I$, alors $g$ est non intégrable sur $I$ (**Minoration**).

#### Théorème (Équivalence)
Si $f, g \in IC(I, \mathbb{R}_+)$ sont positives et $f(t) \underset{t \to \beta}{\sim} g(t)$ (où $\beta$ est une borne de $I$), alors $f$ et $g$ sont **de même nature**.

#### Règle $o$ de Riemann ($t^\alpha$)
Soit $f \in IC(]a, b], \mathbb{R}_+)$ avec $a$ fini et $b = +\infty$ (par exemple).
* Si $t^\alpha f(t) \xrightarrow[t \to +\infty]{} L \in \mathbb{R}$ avec $\alpha > 1$, alors $f$ est intégrable sur $[a, +\infty[$.
* Si $t f(t) \xrightarrow[t \to +\infty]{} L > 0$, alors $f$ **n'est pas** intégrable sur $[a, +\infty[$.

### B. Cas des fonctions à valeurs complexes ou quelconques
#### Définition (Intégrabilité absolue / Semi-convergence)
Soit $f \in IC(I, \mathbb{K})$. On dit que $f$ est **absolument intégrable** si $|f|$ est intégrable sur $I$.

#### Théorème (Absolue convergence implique convergence)
Tout <u>absolument intégrable</u> fonction est intégrable. Autrement dit, $L^1$ est stable par passage à la valeur absolue.
$$\int_I |f| < +\infty \implies \int_I f \text{ existe}$$
Attention: La réciproque est fausse (ex: $\int_0^{+\infty} \frac{\sin t}{t} dt$ converge mais n'est pas absolument convergente).*

---

## 4. Méthodes de calcul et transformations

### A. Intégration par parties (IPP)
Soient $u, v$ de classe $\mathcal{C}^1$ sur $[a, b[$ (où $b$ est une borne exclue). Si les limites $\lim_{t \to b^-} [u(t)v(t)]$ existent et sont finies, et si l'intégrale de $u'v$ converge, alors l'intégrale de $uv'$ converge et :
$$\int_a^b u(t)v'(t) \, dt = [u(t)v(t)]_a^b - \int_a^b u'(t)v(t) \, dt$$

### B. Changement de variable (CDV)
Soit $\phi : [\alpha, \beta[ \to [a, b[$ une bijection de classe $\mathcal{C}^1$, strictement monotone. Si $f \in IC([a, b[, \mathbb{K})$, alors les intégrales $\int_a^b f(t) \, dt$ et $\int_\alpha^\beta f(\phi(u))\phi'(u) \, du$ sont de **même nature** et, en cas de convergence, égales.

---

## 5. Pièges et Erreurs Classiques à Éviter

1. **Confondre limite nulle et intégrabilité :** 
   Ce n'est pas parce que $\lim_{t \to +\infty} f(t) = 0$ que $\int^{+\infty} f$ converge. *(Contre-exemple : $f(t) = \frac{1}{t}$ sur $[1, +\infty[$).*
2. **Utiliser des équivalents sur des fonctions de signe quelconque :** 
   Les théorèmes d'équivalence ($f \sim g$) et de comparaison ne s'appliquent **qu'aux fonctions de signe constant** (au moins au voisinage de la borne).
3. **Oublier la condition d'absolue convergence :** 
   Pour montrer qu'une intégrale converge, on essaie souvent de borner par une fonction positive. Si $|f| \le g$ et $\int g$ converge, alors $f$ converge (via $L^1$). Mais si $\int f$ converge, on n'a **pas** $\int |f|$ converge.
4. **Permutation limite-intégrale abusive :** 
   $\lim \int f_n \neq \int \lim f_n$ en général sans les théorèmes de convergence adéquats (Convergence Dominée, etc.).

---

## 6. Exercices Types / Méthodes de Résolution

* **Pour montrer qu'une intégrale converge :**
  1. Identifier la ou les bornes "problématiques" (là où la fonction n'est pas définie ou tend vers $+\infty$).
  2. Isoler le signe de la fonction. Si elle est de signe constant, utiliser des équivalents usuels (Riemann, Bertrand) ou des théorèmes de majoration ($\mathcal{O}(1/t^\alpha)$ avec $\alpha > 1$).
  3. Si la fonction change de signe, essayer de montrer l'intégrabilité absolue ($|f|$), ou utiliser une IPP (ex: $\int \frac{\sin t}{t^\alpha} dt$).
* **Pour calculer une intégrale généralisée :**
  1. Revenir à la définition avec des segments (bornes $A$ et $B$).
  2. Calculer l'intégrale sur $[A, B]$.
  3. Passer à la limite lorsque $A$ et $B$ tendent vers les bornes de l'intervalle.