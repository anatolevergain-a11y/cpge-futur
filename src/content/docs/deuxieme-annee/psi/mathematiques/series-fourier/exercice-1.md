---
title: 'Exercice 1 : Coefficients de Fourier'
description: 'Problème d entraînement type concours.'
---

# Problème : Étude asymptotique et régularité de coefficients de Fourier

**Filière :** PSI  
**Matière :** Mathématiques  
Chapitre: ** Séries de Fourier  
**Thème :** Coefficients de Fourier et régularité  

---

## Énoncé

Soit $f : \mathbb{R} \to \mathbb{C}$ une application $2\pi$-périodique et continue. On note $\mathcal{C}_{2\pi}$ l'espace vectoriel de ces fonctions. Pour tout $n \in \mathbb{Z}$, on définit le $n$-ième coefficient de Fourier complexe de $f$ par la formule :
$$c_n(f) = \frac{1}{2\pi} \int_{-\pi}^{\pi} f(t)e^{-int} \, dt$$

L'objectif de ce problème est d'analyser le lien entre la régularité de la fonction $f$ (exprimée par son appartenance à des classes de Hölder ou des espaces de Sobolev) et la vitesse de décroissance de la suite $(c_n(f))_{n \in \mathbb{Z}}$ lorsque $|n| \to +\infty$. Nous mettrons également en lumière les limites de ce modèle face à des phénomènes oscillatoires singuliers.

---

## Questions

### Partie I : Régularité lipschitzienne et décroissance

1. **Rappel de cours :** Si $f \in \mathcal{C}^{1}_{2\pi}$ (c'est-à-dire $2\pi$-périodique de classe $\mathcal{C}^1$), exprimer $c_n(f')$ en fonction de $c_n(f)$ pour tout $n \in \mathbb{Z}$. En déduire une majoration de $|c_n(f)|$ en fonction de $\|f'\|_\infty$.
2. On suppose désormais que $f$ n'est plus $\mathcal{C}^1$, mais qu'elle vérifie une condition de Hölder d'exposant $\alpha \in ]0, 1]$, c'est-à-dire qu'il existe $K > 0$ tel que pour tout $(x, y) \in \mathbb{R}^2$,
   $$|f(x) - f(y)| \le K |x - y|^\alpha$$
   On note $\mathcal{H}^\alpha$ cet ensemble. Montrer par un changement de variable judicieux dans l'intégrale définissant $c_n(f)$ que pour tout $n \in \mathbb{Z}^*$, on a :
   $$c_n(f) = -\frac{1}{2\pi} \int_{-\pi}^{\pi} f\left(t + \frac{\pi}{n}\right) e^{-int} \, dt$$
3. En déduire l'égalité symétrique :
   $$c_n(f) = \frac{1}{4\pi} \int_{-\pi}^{\pi} \left( f(t) - f\left(t + \frac{\pi}{n}\right) \right) e^{-int} \, dt$$
4. À l'aide de l'hypothèse $\mathcal{H}^\alpha$, établir qu'il existe une constante $M > 0$ telle que pour tout $n \in \mathbb{Z}^*$ :
   $$|c_n(f)| \le \frac{M}{|n|^\alpha}$$

### Partie II : Analyse critique des limites du modèle

5. Soit $(\alpha_n)_{n \in \mathbb{Z}^*}$ une suite complexe telle que $\sum_{n \in \mathbb{Z}^*} |\alpha_n| < +\infty$. Que peut-on affirmer sur la fonction $S$ définie par sa série de Fourier associée ?
6. Supposons que l'on dispose d'un modèle physique où le signal mesuré $g(t)$ possède des coefficients de Fourier $c_n(g) \sim \frac{1}{|n|^\beta}$ avec $\beta \le 1$. Le théorème de Dirichlet ou de Jordan-Dirichlet garantit-il la convergence simple ou uniforme de la série de Fourier ? Discuter des limites de l'utilisation des séries de Fourier pour modéliser des signaux discontinus ou présentant des singularités en $t$.

---

## Pistes et Indications

1. **Q1 :** Utiliser une intégration par parties sachant que $f$ et $f'$ sont continues et $2\pi$-périodiques.
2. **Q2 :** Effectuer le changement de variable $u = t - \frac{\pi}{n}$ et utiliser la $2\pi$-périodicité de l'intégrant.
3. **Q3 :** Additionner l'expression initiale de $c_n(f)$ et celle trouvée à la question 2, puis diviser par 2.
4. **Q4 :** Majorer la valeur absolue de l'intégrale en sortant la borne de Hölder à l'intérieur de l'intégrale.
5. **Q5 :** Utiliser le critère de convergence normale des séries de fonctions.
6. **Q6 :** Penser au phénomène de Gibbs et à la distinction entre convergence en moyenne quadratique (Parseval) et convergence ponctuelle.

---

## Corrigé

### Partie I_1. **Intégration par parties :**  
   Pour $n \neq 0$, on intègre par parties :
   $$c_n(f) = \frac{1}{2\pi} \left[ f(t) \frac{e^{-int}}{-in} \right]_{-\pi}^{\pi} - \frac{1}{2\pi} \int_{-\pi}^{\pi} f'(t) \frac{e^{-int}}{-in} \, dt$$
   Par $2\pi$-périodicité de $f$ et de $t \mapsto e^{-int}$, le terme tout intégré est nul. Il vient :
   $$c_n(f) = \frac{1}{in} \left( \frac{1}{2\pi} \int_{-\pi}^{\pi} f'(t) e^{-int} \, dt \right) = \frac{c_n(f')}{in}$$
   En prenant la valeur absolue et sachant que $|c_n(f')| \le \|f'\|_\infty$, on obtient :
   $$|c_n(f)| \le \frac{\|f'\|_\infty}{|n|}$$

2. **Changement de variable :**  
   Partons de $c_n(f) = \frac{1}{2\pi} \int_{-\pi}^{\pi} f(u)e^{-inu} \, du$. Posons $u = t + \frac{\pi}{n}$. Lorsque $u$ varie de $-\pi$ à $\pi$, $тельный$ $t$ varie de $-\pi - \frac{\pi}{n}$ à $\pi - \frac{\pi}{n}$. Par $2\pi$-périodicité de la fonction $u \mapsto f(u)e^{-inu}$, l'intégrale sur un intervalle de longueur $2\pi$ est invariante par translation. Ainsi :
   $$c_n(f) = \frac{1}{2\pi} \int_{-\pi}^{\pi} f\left(t + \frac{\pi}{n}\right) e^{-in\left(t + \frac{\pi}{n}\right)} \, dt$$
   Remarquons que $e^{-in(t + \pi/n)} = e^{-int} e^{-i\pi} = -e^{-int}$ (car $n \in \mathbb{Z}^*$). D'où :
   $$c_n(f) = -\frac{1}{2\pi} \int_{-\pi}^{\pi} f\left(t + \frac{\pi}{n}\right) e^{-int} \, dt$$

3. **Combinaison linéaire :**  
   En additionnant l'expression de départ $c_n(f) = \frac{1}{2\pi} \int_{-\pi}^{\pi} f(t)e^{-int} \, dt$ et l'expression obtenue à la question 2 :
   $$2 c_n(f) = \frac{1}{2\pi} \int_{-\pi}^{\pi} \left( f(t) - f\left(t + \frac{\pi}{n}\right) \right) e^{-int} \, dt$$
   En divisant par 2, on obtient le résultat escompté.

4. **Majoration höldérienne :**  
   En passant aux valeurs absolues :
   $$|c_n(f)| \le \frac{1}{4\pi} \int_{-\pi}^{\pi} \left| f(t) - f\left(t + \frac{\pi}{n}\right) \right| \left| e^{-int} \right| \, dt$$
   Puisque $f \in \mathcal{H}^\alpha$, $\left| f(t) - f\left(t + \frac{\pi}{n}\right) \right| \le K \left| \frac{\pi}{n} \right|^\alpha$ et $|e^{-int}| = 1$ :
   $$|c_n(f)| \le \frac{1}{4\pi} \int_{-\pi}^{\pi} K \left(\frac{\pi}{|n|}\right)^\alpha \, dt = \frac{1}{4\pi} \cdot 2\pi \cdot K \left(\frac{\pi}{|n|}\right)^\alpha = \frac{K \pi^\alpha}{2} \frac{1}{|n|^\alpha}$$
   En posant $M = \frac{K \pi^\alpha}{2}$, on a bien $|c_n(f)| \le \frac{M}{|n|^\alpha}$.

### Partie II : Analyse critique des limites du modèle

5. **Convergence normale :**  
   Si $\sum_{n \in \mathbb{Z}^*} |\alpha_n| < +\infty$, alors par majoration simple de la série de fonctions trigonométriques $\sum \alpha_n e^{int}$ par le terme général $|\alpha_n|$, la série converge **normalement** (et donc uniformément et absolument) sur $\mathbb{R}$ vers une fonction $S$ continue (comme limite uniforme de fonctions continues).

6. **Limites du modèle physique :**  
   Si $\beta \le 1$, la condition $\sum |c_n(g)| < +\infty$ n'est généralement pas vérifiée (par exemple pour $\beta = 1$, la série harmonique diverge). 
   * **Limite mathématique :** La série de Fourier associée ne converge plus nécessairement normalement, ni même uniformément. Des théorèmes plus fins (comme Dirichlet) s'appliquent si $g$ est par morceaux $\mathcal{C}^1$, mais la convergence ponctuelle peut présenter des dépassements aberrants au voisinage des discontinuités (**phénomène de Gibbs**, avec un dépassement d'environ $9\%$ de la saut de discontinuité).
   * **Analyse critique :** Le modèle de Fourier classique présuppose une régularité globale ou au moins une intégrabilité forte de l'énergie. Lorsque l'on modélise des signaux réels bruités ou comportant des chocs (champs de vitesses en mécanique des fluides turbulents, signaux sismiques), la décroissance en $O(|n|^{-\beta})$ avec $\beta \le 1$ montre que la représentation fréquentielle traditionnelle est inefficace (lent convergence). Cela motive l'utilisation de modèles alternatifs en traitement du signal, tels que l'analyse par **ondelettes**, qui s'affranchissent des contraintes de périodicité globale et s'adaptent mieux aux singularités locales.