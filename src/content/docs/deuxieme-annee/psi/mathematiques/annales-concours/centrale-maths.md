---
title: 'Centrale-Supélec - Mathématiques'
description: 'Sujet type concours corrigé pas à pas pour la filière PSI.'
sidebar:
  badge:
    text: 'Annale Concours'
    variant: 'caution'
---

## 📄 Partie 1 : Énoncé du Problème (Mise en situation ingénieur/recherche)

### Étude d'un signal thermo-élastique non linéaire et régulation par équation aux dérivées ordinaires couplées

Dans le cadre de la conception de boucliers thermiques pour des lanceurs spatiaux hypersoniques, on s'intéresse à la modélisation de la température $u(t)$ en un point critique d'une structure soumise à un flux thermique externe périodique et à une rétroaction de refroidissement non linéaire. 

Le comportement de ce système est régi par l'équation différentielle fonctionnelle suivante, valable pour tout $t \in \mathbb{R}$ :

$$\frac{du}{dt} + \lambda u(t) + \mu \int_{0}^{t} e^{-(t-s)} u(s) \, ds = f(t) - \varepsilon u(t)^3$$

où :
- $\lambda > 0$ et $\mu > 0$ sont des constantes physiques caractéristiques du matériau.
- $\varepsilon > 0$ est un paramètre de non-linéarité faible (effet thermo-élastique d'ordre supérieur).
- $f : \mathbb{R} \to \mathbb{R}$ est une fonction continue, $2\pi$-périodique, représentant le flux thermique incident, développable en série de Fourier.

L'objectif de ce problème est, dans un premier temps, d'analyser la réponse linéaire du système (cas $\varepsilon = 0$) à l'aide de la théorie des séries de Fourier et des transformées de Laplace, puis d'utiliser une méthode de perturbation régulière pour déterminer l'influence de la non-linéarité cubique ($\varepsilon \neq 0$) sur le régime permanent stationnaire.

---

## ❓ Partie 3 : Questions (Divisées en sous-parties A et B)

### Partie A : Analyse harmonique du système linéaire ($\varepsilon = 0$)

On considère l'équation linéaire associée :
$$(E_0) \quad \frac{du}{dt} + \lambda u(t) + \mu \int_{0}^{t} e^{-(t-s)} u(s) \, ds = f(t)$$

1. **A.1.** On pose $v(t) = \int_{0}^{t} e^{-(t-s)} u(s) \, ds$. Montrer que le système $(E_0)$ couplé à l'équation de $v$ peut se réécrire sous la forme d'un système différentiel linéaire vectoriel d'ordre 1 avec condition initiale. Expliciter la matrice du système.
2. **A.2.** On suppose que le second membre $f$ est une fonction continue $2\pi$-périodique développable en série de Fourier, de la forme :
   $$f(t) = \sum_{n=-\infty}^{+\infty} c_n(f) e^{inat}$$
   On cherche une solution particulière $u_p$ de $(E_0)$ qui soit $2\pi$-périodique. En formalisant rigoureusement l'application de l'opérateur de dérivation sur les séries de Fourier, déterminer l'expression des coefficients de Fourier $c_n(u_p)$ en fonction de $c_n(f)$, $\lambda$, $\mu$ et $n$.
3. **A.3.** Établir une condition suffisante sur $\lambda$ et $\mu$ garantissant que l'amplitude des harmoniques du signal de sortie $u_p$ est uniformément bornée par celle du signal d'entrée $f$. Préciser le comportement asymptotique de $|c_n(u_p)|$ lorsque $n \to +\infty$ si $f$ est de classe $\mathcal{C}^1$.

### Partie B : Perturbation non linéaire et recherche de solutions périodiques ($\varepsilon > 0$)

On revient à l'équation complète $(E)$ avec $\varepsilon > 0$ et on suppose désormais que $f(t) = F_0 \cos(\omega t)$ où $\omega > 0$ est fixé et $F_0 > 0$. On cherche une solution $2\pi/\omega$-périodique de l'équation $(E)$ sous la forme d'un développement asymptotique régulier au voisinage de $\varepsilon = 0$ :
$$u(t) = u_0(t) + \varepsilon u_1(t) + o(\varepsilon)$$

4. **B.1.** Identifier l'équation vérifiée par le terme d'ordre 0, $u_0(t)$, et exprimer sa solution générale en régime permanent.
5. **B.2.** Écrire l'équation différentielle et intégro-différentielle vérifiée par le terme de correction d'ordre 1, $u_1(t)$.
6. **B.3.** En injectant la solution harmonique d'ordre 0 dans le terme non linéaire $\varepsilon u_0(t)^3$, mettre en évidence l'apparition de termes séculaires ou d'harmoniques supérieurs. Conclure sur la validité du développement au voisinage de $t \to +\infty$.

---

## 💡 Partie 3 : Rapport du Jury (Pièges et attentes)

- **Séries de Fourier et Opérateurs :** Le jury a constaté de trop nombreuses confusions entre interversion de la sommation infinie et dérivation. Pour justifier l'application d'un opérateur linéaire sur une série de Fourier, le candidat doit impérativement invoquer les théorèmes de convergence normale (propriété de $\mathcal{C}^1$-régularité).
- **Intégro-différentielles :** La transformation d'une équation intégro-différentielle en système différentiel ordinaire (via l'introduction d'une variable auxiliaire $v$) est une méthode classique souvent éludée par les candidats de PSI. Elle est pourtant indispensable pour l'analyse rigoureuse de l'unicité et de l'existence des solutions.
- **Calculs perturbatifs :** Dans la partie B, le développement asymptotique nécessite une maîtrise rigoureuse de la trigonométrie (linéarisation de $\cos^3(\omega t)$). Les erreurs de calcul de coefficients sont lourdement sanctionnées.

---

## 📋 Partie 4 : Corrigé Détaillé et Analyse

### Corrigé de la Partie A

#### Question A.1
Posons $v(t) = \int_{0}^{t} e^{-(t-s)} u(s) \, ds$. En dérivant cette expression par rapport à $t$ :
$$\frac{dv}{dt} = \frac{d}{dt} \left( e^{-t} \int_{0}^{t} e^s u(s) \, ds \right) = -e^{-t} \int_{0}^{t} e^s u(s) \, ds + e^{-t} \cdot e^t u(t)$$
$$\frac{dv}{dt} = -v(t) + u(t)$$

L'équation $(E_0)$ s'écrit alors :
$$\frac{du}{dt} + \lambda u(t) + \mu v(t) = f(t)$$

On obtient ainsi le système différentiel linéaire vectoriel d'ordre 1 suivant, en posant $X(t) = \begin{pmatrix} u(t) \\ v(t) \end{pmatrix}$ :
$$\frac{dX}{dt} = A X(t) + B(t)$$

avec la matrice $A$ et le vecteur $B(t)$ définis par :
$$A = \begin{pmatrix} -\lambda & -\mu \\ 1 & -1 \end{pmatrix} \quad \text{et} \quad B(t) = \begin{pmatrix} f(t) \\ 0 \end{pmatrix}$$

#### Question A.2
Supposons que $u_p$ est une solution $2\pi$-périodique de $(E_0)$ et développable en série de Fourier :
$$u_p(t) = \sum_{n=-\infty}^{+\infty} c_n(u_p) e^{inat}$$

L'opérateur intégro-différentiel appliqué à un terme de Fourier $e^{inat}$ s'évalue comme suit. Pour le terme intégral :
$$\int_{0}^{t} e^{-(t-s)} e^{inas} \, ds = e^{-t} \int_{0}^{t} e^{(1+ina)s} \, ds = e^{-t} \left[ \frac{e^{(1+ina)s}}{1+ina} \right]_{0}^{t} = \frac{e^{inat} - e^{-t}}{1+ina}$$

En régime permanent (termes non transitoires s'annulant lorsque $t \to +\infty$, car $\text{Re}(1) > 0$), la contribution intégro-différentielle se réduit à :
$$\mathcal{I}_n(t) = \frac{1}{1+ina} e^{inat}$$

En injectant le développement de $u_p$ et de $f$ dans $(E_0)$ et par identification des coefficients de Fourier (unicité du développement en série de Fourier pour les fonctions de classe $\mathcal{C}^1$), on obtient, pour chaque $n \in \mathbb{Z}$ (avec ici $a = 1$ par périoduité $2\pi$) :
$$ina \, c_n(u_p) + \lambda c_n(u_p) + \mu \frac{c_n(u_p)}{1+in} = c_n(f)$$

$$\implies c_n(u_p) \left( in + \lambda + \frac{\mu}{1+in} \right) = c_n(f)$$

En réduisant au même dénominateur :
$$c_n(u_p) \left( \frac{(in + \lambda)(1+in) + \mu}{1+in} \right) = c_n(f)$$

Soit l'expression explicite :
$$c_n(u_p) = \frac{1 + in}{(in + \lambda)(1+in) + \mu} c_n(f)$$

#### Question A.3
Évaluons le module du facteur de transfert $\chi(n) = \frac{1 + in}{(in + \lambda)(1+in) + \mu}$ :
$$\chi(n) = \frac{1 + in}{-\lambda n^2 + \lambda + i(n + n\lambda) + \mu} = \frac{1 + in}{(\lambda + \mu - \lambda n^2) + i n(1+\lambda)}$$

Le carré du module est donné par :
$$|\chi(n)|^2 = \frac{1 + n^2}{(\lambda + \mu - \lambda n^2)^2 + n^2(1+\lambda)^2}$$

Puisque $\lambda > 0$ et $\mu > 0$, le dénominateur est strictement positif pour tout $n \in \mathbb{Z}$. Si l'on suppose de plus que $\lambda$ et $\mu$ sont choisis de sorte que $|\chi(n)| \le M$ pour une constante universelle $M$ (ce qui est assuré dès que $\lambda n^2$ ne s'annule pas de façon critique avec $\lambda+\mu$, c'est-à-dire hors d'éventuelles résonances non amorties), alors l'amplitude des harmoniques est bornée.

Si $f$ est de classe $\mathcal{C}^1$, ses coefficients de Fourier vérifient $|c_n(f)| = o\left(\frac{1}{|n|}\right)$. Comme $|\chi(n)| \sim \frac{|n|}{\lambda n^2} = \mathcal{O}\left(\frac{1}{|n|}\right)$ lorsque $|n| \to +\infty$, il vient :
$$|c_n(u_p)| = \mathcal{O}\left(\frac{1}{n^2}\right)$$
Ce qui démontre par le théorème de convergence normale que $u_p$ est de classe $\mathcal{C}^1$ (et même $\mathcal{C}^2$ si $f$ est plus régulière).

---

### Corrigé de la Partie B

#### Question B.1
L'équation complète est :
$$\frac{du}{dt} + \lambda u(t) + \mu \int_{0}^{t} e^{-(t-s)} u(s) \, ds = F_0 \cos(\omega t) - \varepsilon u(t)^3$$

En substituant le développement $u(t) = u_0(t) + \varepsilon u_1(t) + o(\varepsilon)$ et en identifiant les termes d'ordre $\varepsilon^0$ :
$$(E_1) \quad \frac{du_0}{dt} + \lambda u_0(t) + \mu \int_{0}^{t} e^{-(t-s)} u_0(s) \, ds = F_0 \cos(\omega t)$$

En régime permanent, la solution $u_0(t)$ est harmonique de pulsation $\omega$. On la cherche sous la forme :
$$u_0(t) = A \cos(\omega t) + B \sin(\omega t)$$

#### Question B.2
En identifiant les termes d'ordre $\varepsilon^1$, l'équation pour $u_1(t)$ devient :
$$\frac{du_1}{dt} + \lambda u_1(t) + \mu \int_{0}^{t} e^{-(t-s)} u_1(s) \, ds = -u_0(t)^3$$

#### Question B.3
Développons le terme non linéaire $-u_0(t)^3$ en sachant que $u_0(t) = \text{Re}\left( \mathcal{U}_0 e^{i\omega t} \right)$ avec $\mathcal{U}_0 = F_0 \chi(\omega)$. En utilisant l'identité trigonométrique $\cos^3(\omega t) = \frac{3}{4}\cos(\omega t) + \frac{1}{4}\cos(3\omega t)$ :
$$u_0(t)^3 = \left( A \cos(\omega t) + B \sin(\omega t) \right)^3$$

Le calcul développe des termes en $\cos(\omega t)$, $\sin(\omega t)$, ainsi que des harmoniques supérieurs en $\cos(3\omega t)$ et $\sin(3\omega t)$. 
La présence de termes proportionnels à $\cos(\omega t)$ et $\sin(\omega t)$ dans le cube du signal d'entrée engendre un phénomène de **résonance harmonique non linéaire** (création d'un déphasage séculaire d'ordre 1 en temps long si les conditions de non-résonance n'admettent pas d'ajustement de fréquence). Pour s'affranchir des termes séculaires compromettant la validité du développement asymptotique uniformément valides sur $\mathbb{R}^+$, des techniques de type *Poincaré-Lindstedt* doivent être mises en œuvre pour corriger la pulsation $\omega$ en $\omega(\varepsilon)$.