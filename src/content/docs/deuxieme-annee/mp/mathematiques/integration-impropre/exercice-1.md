---
title: 'Exercice 1 : Critères de convergence'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Étude asymptotique et critères de convergence d'intégrales généralisées

Le présent problème propose l'étude fine de la convergence d'intégrales généralisées à l'aide de techniques de comparaison, de sommabilité et de développements asymptotiques, s'apparentant aux exigences des épreuves écrites des concours Mines-Ponts et Centrale-Supélec.

---

## I. Énoncé

Soit $f : [a, +[\to \mathbb{R}$ une fonction continue par morceaux. On s'intéresse à l'existence et à la valeur de l'intégrale généralisée :
$$I(f) = \int_a^{+\infty} f(t) \, dt$$

L'objectif de ce problème est d'analyser le comportement de $I(f)$ lorsque $f$ présente des oscillations ou un comportement critique aux bornes, échappant aux critères usuels de Riemann ou de Bertrand. On étudiera en particulier la fonction définie pour $x > 0$ par :
$$F(x) = \int_0^{+\infty} e^{-xt} \frac{\sin t}{t} \, dt$$

---

## II. Questions

1. **Rappels et échauffement (Critères de base)**
   a. Énoncer le critère de Riemann pour l'intégrabilité sur $[1, +\infty[$ d'une fonction positive.
   b. Étudier la convergence de l'intégrale $\int_1^{+\infty} \frac{\sin(t^\alpha)}{t^\beta} \, dt$ selon les valeurs de $\alpha > 0$ et $\beta \in \mathbb{R}$.

2. **Le critère d'Abel généralisé**
   Soient $u, v : [a, +[\to \mathbb{R}$ deux fonctions continues. On suppose que :
   - $v$ est de classe $\mathcal{C}^1$, décroissante, et $\lim_{t \to +\infty} v(t) = 0$.
   - Il existe $M > 0$ tel que pour tout $x \ge a$, $\left| \int_a^x u(t) \, dt \right| \le M$.
   
   Démontrer que l'intégrale $\int_a^{+\infty} u(t)v(t) \, dt$ est convergente.

3. **Application à une intégrale paramétrique**
   On considère la fonction $F$ définie sur $]0, +\infty[$ par :
   $$F(x) = \int_0^{+\infty} e^{-xt} \frac{\sin t}{t} \, dt$$
   a. Justifier l'existence de $F(x)$ pour tout $x > 0$.
   b. À l'aide d'une intégration par partie ou d'une dérivation sous le signe somme (justifiée rapidement), relier $F'(x)$ à une fraction rationnelle simple.
   c. En déduire une expression explicite de $F(x)$ pour $x > 0$.
   d. Calculer la limite de $F(x)$ lorsque $x$ tend vers $0^+$. Quelle conséquence remarquable en déduit-on pour l'intégrale de Dirichlet $\int_0^{+\infty} \frac{\sin t}{t} \, dt$ ?

4. **Analyse critique du modèle et des approximations**
   On souhaite approcher la valeur de l'intégrale de Dirichlet par troncature : $I_A = \int_0^A \frac{\sin t}{t} \, dt$.
   a. Discuter la validité de l'approximation de $I(f)$ par $I_A$ lorsque $A \to +\infty$ au regard de la vitesse de convergence.
   b. *Analyse critique :* Quel est l'impact de l'utilisation conjointe de troncatures numériques et de modèles continus idéalisés en physique mathématique (par exemple en théorie du signal pour la transformée de Fourier) ?

---

## III. Pistes et indications

- **Q1 :** Penser à effectuer un changement de variable $u = t^\alpha$ pour se ramener à une intégrale de Fourier ou de Riemann modifiée.
- **Q2 :** Utiliser la formule d'intégration par parties sur un segment $[a, X]$, puis passer à la limite en majorant à l'aide de la décroissance de $v$.
- **Q3 :** 
  - Pour la convergence en $0$, prolonger par continuité la fonction $\frac{\sin t}{t}$.
  - Pour la dérivée, la domination par $e^{-xt}$ sur $[\epsilon, +\infty[$ (avec $x \ge \delta > 0$) permet d'appliquer le théorème de Leibniz.
- **Q4 :** L'alternance des signes (intégrale semi-convergente) impose une convergence en $O(1/A)$, ce qui nécessite un grand nombre de périodes pour obtenir une précision satisfaisante.

---

## IV. Corrigé pas à pas

### 1. Rappels et critères de base
a. **Riemann :** Si $f \ge 0$ et est continue par morceaux sur $[1, +\infty[$, l'intégrale $\int_1^{+\infty} f(t) \, dt$ converge si et seulement si $f(t) = o\left(\frac{1}{t^\beta}\right)$ avec $\beta > 1$.
b. Pour $I = \int_1^{+\infty} \frac{\sin(t^\alpha)}{t^\beta} \, dt$, on pose le changement de variable $u = t^\alpha$ ($du = \alpha t^{\alpha-1} dt$). L'intégrale devient :
$$I = \int_1^{+\infty} \frac{\sin u}{u^{\beta/\alpha}} \frac{u^{\frac{1}{\alpha}-1}}{\alpha} \, du = \frac{1}{\alpha} \int_1^{+\infty} \frac{\sin u}{u^{\beta + \alpha - 1}} \, du$$
Par le critère d'Abel (car $\sin u$ a des intégrales bornées et $u^{-\beta-\alpha+1}$ tend vers 0 en décroissant si $\beta + \alpha - 1 > 0$), l'intégrale converge si **$\beta + \alpha > 1$**.

### 2. Le critère d'Abel généralisé
Soit $U(x) = \int_a^x u(t) \, dt$. Par hypothèse, $|U(x)| \le M$ pour tout $x \ge a$.
Soit $X > a$. Une intégration par parties donne :
$$\int_a^X u(t)v(t) \, dt = [U(t)v(t)]_a^X - \int_a^X U(t)v'(t) \, dt = U(X)v(X) - U(a)v(a) - \int_a^X U(t)v'(t) \, dt$$
Comme $v(X) \to 0$ et $U$ est bornée, $U(X)v(X) \to 0$ quand $X \to +\infty$.
De plus, $|U(t)v'(t)| \le M |v'(t)| = -M v'(t)$ (puisque $v$ est décroissante, $v' \le 0$).
L'intégrale $\int_a^{+\infty} -v'(t) \, dt = v(a) - \lim_{t\to+\infty} v(t) = v(a)$ converge. 
Par conséquent, par majoration pour les fonctions positives, $\int_a^{+\infty} |U(t)v'(t)| \, dt$ converge, donc l'intégrale $\int_a^{+\infty} U(t)v'(t) \, dt$ est absolument convergente, donc convergente.
Conclusion: ** L'intégrale $\int_a^{+\infty} u(t)v(t) \, dt$ converge.

### 3. Application à une intégrale paramétrique
a. En $0$, $\lim_{t \to 0} e^{-xt}\frac{\sin t}{t} = 1$, donc la fonction prolonge par continuité en $0$ (pas de singularité). En $+\infty$, pour tout $x > 0$, $e^{-xt} \frac{\sin t}{t} = o\left(\frac{1}{t^2}\right)$ par croissance comparée, ce qui assure la convergence absolue pour tout $x > 0$.
b. Par dérivation sous le signe somme (légitimée sur tout intervalle $[\delta, +\infty[$ avec $\delta > 0$), on a :
$$F'(x) = \int_0^{+\infty} -t e^{-xt} \frac{\sin t}{t} \, dt = -\int_0^{+\infty} e^{-xt} \sin t \, dt$$
En calculant cette dernière intégrale à l'aide des nombres complexes ($\sin t = \frac{e^{it} - e^{-it}}{2i}$) ou par double IPP :
$$F'(x) = -\frac{1}{1 + x^2}$$
c. En intégrant entre $x$ et $1$ :
$$F(x) = F(1) - \int_1^x \frac{-1}{1+u^2} \, du = F(1) + \arctan(x) - \arctan(1) = F(1) + \arctan(x) - \frac{\pi}{4}$$
En remarquant que $\lim_{x \to +\infty} F(x) = 0$ (par majoration directe), on trouve $F(1) = \frac{\pi}{4} - \frac{\pi}{4} = 0$? Non, faisons the limit : $\lim_{x \to +\infty} \arctan(x) = \frac{\pi}{2}$, donc $0 = F(1) + \frac{\pi}{2} - \frac{\pi}{4} \implies F(1) = \frac{\pi}{4}$.
Ainsi, pour tout $x > 0$ :
$$F(x) = \frac{\pi}{2} - \arctan(x) = \arctan\left(\frac{1}{x}\right)$$
d. Par continuité de $F$ en $0^+$ (ou par convergence dominée), $\lim_{x \to 0^+} F(x) = \int_0^{+\infty} \frac{\sin t}{t} \, dt$.
Or $\lim_{x \to 0^+} \arctan\left(\frac{1}{x}\right) = \frac{\pi}{2}$.
**Résultat fondamental :** $\int_0^{+\infty} \frac{\sin t}{t} \, dt = \frac{\pi}{2}$.

### 4. Analyse critique du modèle et des approximations
a. L'intégrale de Dirichlet est semi-convergente (non absolument convergente). L'erreur commise en tronquant à l'ordre $A$ est $\int_A^{+\infty} \frac{\sin t}{t} \, dt$. 
Une intégration par parties donne :
$$\int_A^{+\infty} \frac{\sin t}{t} \, dt = \left[ -\frac{\cos t}{t} \right]_A^{+\infty} - \int_A^{+\infty} \frac{\cos t}{t^2} \, dt = \frac{\cos A}{A} - \int_A^{+\infty} \frac{\cos t}{t^2} \, dt$$
L'erreur est donc en $\mathcal{O}\left(\frac{1}{A}\end{mathcal})$. Cette décroissance en $1/A$ est **lente** : pour gagner une décimale, il faut multiplier $A$ par 10.
b. **Analyse critique des limites du modèle :** 
En physique mathématique, négliger la queue d'une intégrale semi-convergente en posant une coupure abrupte (fonction porte en $A$) induit des oscillations parasites (phénomène de Gibbs) lors du retour temporel/fréquentiel via la transformée de Fourier. Le modèle continu suppose une précision infinie des mesures et une absence de borne physique, ce qui est mathématiquement parfait mais numériquement et physiquement illusoire. Les méthodes de sommation de Cesàro ou l'introduction de facteurs d'amortissement (comme le facteur $e^{-xt}$ de la question 3) sont indispensables pour régulariser ces modèles.