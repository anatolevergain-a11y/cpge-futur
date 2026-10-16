---
title: 'Exercice 1 : Micro-états et macro-états'
description: 'Problème d entraînement type concours officiel.'
---

# Problème guidé : Fluctuations et entropie statistique d'un système à deux états

---

## 1. Énoncé

Le modèle du système à deux états (ou système de spin $1/2$) constitue la brique élémentaire de la physique statistique pour comprendre le paramagnétisme et l'émergence de la notion de température. On considère un système macroscopique constitué de $N$ sous-systèmes indépendants (ou "spins"), avec $N \gg 1$. 

Chaque sous-système $i$ (pour $i \in \{1, 2, \dots, N\}$) possède un moment magnétique dont l'orientation par rapport à un champ magnétique extérieur uniforme $\vec{B} = B \vec{e}_z$ ne peut prendre que deux valeurs :
* Parallèle au champ : énergie $\varepsilon_1 = -\mu B$ (état noté $+1$).
* Antiparallèle au champ : énergie $\varepsilon_2 = +\mu B$ (état noté $-1$).

On note $n_1$ le nombre de sous-systèmes dans l'état $+1$ et $n_2$ le nombre de sous-systèmes dans l'état $-1$. L'énergie totale du système s'écrit $U$.

---

## 2. Questions

### Partie I : Dénombrement et probabilités
1. Exprimer la relation entre le nombre total de spins $N$, $n_1$ et $n_2$. Exprimer l'énergie totale $U$ du système en fonction de $N$, $n_1$, $\mu$ et $B$.
2. Déterminer le nombre de micro-états $\Omega(n_1)$ correspondant à un macro-état caractérisé par $n_1$. Rappeler la formule de Stirling sous la forme $\ln(x!) \approx x \ln(x) - x$ pour $x \gg 1$.
3. En déduire une expression approchée de $\ln \Omega(n_1)$ en fonction de $N$ et de la fraction $x = \frac{n_1}{N}$.

### Partie II : Équilibre et entropie
4. Définir l'entropie statistique $S$ du système en fonction de $\Omega$. Écrire $S$ en fonction de $N$, du boulon de Boltzmann $k_B$ et de $x$.
5. Étudier les variations de la fonction $x \mapsto S(x)$ sur l'intervalle $[0, 1]$. Déterminer la valeur de $x$ pour laquelle l'entropie est maximale. Quel est le sens physique de cet état ?
6. En effectuant un développement limité de $\ln \Omega(x)$ au voisinage de sa valeur la plus probable $x_0 = 1/2$ (pour une énergie $U = 0$), montrer que la probabilité d'observer une fluctuation de l'énergie s'écrit sous la forme d'une loi gaussienne :
   $$\mathcal{P}(n_1) \propto \exp\left( -\frac{(n_1 - N/2)^2}{N/2} \noscript \right)$$
   *(Note : on pourra utiliser $\ln(1+\epsilon) \approx \epsilon - \frac{\epsilon^2}{2}$ pour $|\epsilon| \ll 1$)*.

### Partie III : Limites du modèle et analyse critique
7. Discuter la validité thermodynamique de ce modèle discret. Quelles sont les limites inhérentes à l'hypothèse d'indépendance des sous-systèmes ? En quoi ce modèle est-il insuffisant pour décrire un gaz réel ou un liquide ?

---

## 3. Pistes et indications

* **Q1-Q3 :** Pensez aux arrangements et combinaisons (coefficient binomial $\binom{N}{n_1}$). Pour Stirling, appliquez-la à $\ln(N!), \ln(n_1!), \ln(n_2!)$.
* **Q4-Q5 :** Utilisez la relation de Boltzmann $S = k_B \ln \Omega$. Dérivez par rapport à $x$ pour trouver le maximum.
* **Q6 :** Posez $n_1 = \frac{N}{2} + \delta n$ avec $\delta n \ll N$. Développez le logarithme de la probabilité (proportionnelle au nombre de micro-états).
* **Q7 :** Interrogez-vous sur les interactions inter-particules (termes d'énergie potentielle d'interaction négligés ici) et sur la nature quantique vs classique des degrés de liberté.

---

## 4. Corrigé pas à pas

### Partie I : Dénombrement et probabilités
1. Par définition, le nombre total de spins est la somme des spins orientés positivement et négativement :
   $$N = n_1 + n_2$$
   L'énergie totale est l'oreillete statistique des énergies individuelles :
   $$U = n_1 \varepsilon_1 + n_2 \varepsilon_2 = -n_1 \mu B + n_2 \mu B = -(n_1 - n_2)\mu B$$
   En substituant $n_2 = N - n_1$, on obtient :
   $$U = -(2n_1 - N)\mu B$$

2. Le nombre de façons de choisir $n_1$ spins parmi $N$ pour être dans l'état $+1$ est donné par le coefficient binomial :
   $$\Omega(n_1) = \binom{N}{n_1} = \frac{N!}{n_1! (N - n_1)!}$$
   En appliquant la formule de Stirling $\ln(k!) \approx k \ln k - k$ valable pour $k \gg 1$, on a :
   $$\ln \Omega(n_1) = \ln(N!) - \ln(n_1!) - \ln((N-n_1)!)$$
   $$\ln \Omega(n_1) \approx [N \ln N - N] - [n_1 \ln n_1 - n_1] - [(N-n_1) \ln(N-n_1) - (N-n_1)]$$
   Les termes en $-N$ s'annulent ($N - n_1 - (N-n_1) = 0$), ce qui donne :
   $$\ln \Omega(n_1) \approx N \ln N - n_1 \ln n_1 - (N-n_1)\ln(N-n_1)$$

3. Introduisons la fraction $x = \frac{n_1}{N}$ (donc $n_1 = xN$ et $N-n_1 = (1-x)N$) :
   $$\ln \Omega(x) = N \ln N - xN \ln(xN) - (1-x)N \ln((1-x)N)$$
   $$\ln \Omega(x) = N \ln N - xN (\ln x + \ln N) - (1-x)N (\ln(1-x) + \ln N)$$
   En factorisant et sachant que $x + (1-x) = 1$ :
   $$\ln \Omega(x) = -N \left[ x \ln x + (1-x) \ln(1-x) \right]$$

### Partie II : Équilibre et entropie
4. D'après le postulat de Boltzmann, l'entropie statistique est :
   $$S(x) = k_B \ln \Omega(x) = -Nk_B \left[ x \ln x + (1-x) \ln(1-x) \right]$$

5. Étudions la fonction $f(x) = x \ln x + (1-x) \ln(1-x)$ pour $x \in ]0, 1[$.
   Dérivons par rapport à $x$ :
   $$f'(x) = \ln x + x \left(\frac{1}{x}\right) - \ln(1-x) - (1-x)\left(\frac{-1}{1-x}\right) = \ln x + 1 - \ln(1-x) - 1 = \ln\left(\frac{x}{1-x}\right)$$
   Le maximum de l'entropie correspond à $f'(x) = 0$, soit $\frac{x}{1-x} = 1 \implies x_0 = \frac{1}{2}$.
   La dérivée seconde est $f''(x) = \frac{1}{x} + \frac{1}{1-x} > 0$ sur $]0, 1[$, ce qui confirme qu'il s'agit bien d'un maximum pour $S$ ($S$ est concave).
   **Sens physique :** L'état $x = 1/2$ (soit $n_1 = n_2 = N/2$) est l'état le plus probable, correspondant à une énergie $U = 0$. C'est l'état de désordre maximal où les orientations haut/bas sont équiprobables.

6. Posons $n_1 = \frac{N}{2} + \delta n$, ce qui implique $x = \frac{1}{2} + \frac{\delta n}{N}$. 
   Effectuons un développement limité de $\ln \Omega(x)$ autour de $x_0 = 1/2$ :
   $$\ln \Omega(\delta n) \approx \ln \Omega\left(\frac{1}{2}\right) + \underbrace{f'\left(\frac{1}{2}\right)}_{=0} \delta n + \frac{1}{2} f''\left(\frac{1}{2}\right) (\delta n)^2$$
   Calculons $f''(1/2) = \frac{1}{1/2} + \frac{1}{1/2} = 4$. Ainsi :
   $$\ln \Omega(\delta n) \approx \ln \Omega_0 - \frac{N}{2} \left[ 4 \left(\frac{\delta n}{N}\right)^2 \right] = \ln \Omega_0 - \frac{2 (\delta n)^2}{N}$$
   La probabilité $\mathcal{P}(n_1)$ est proportionnelle à $\Omega(n_1)$ :
   $$\mathcal{P}(n_1) \propto \exp(\ln \Omega) \propto \exp\left( \ln \Omega_0 - \frac{2 (\delta n)^2}{N} \right) \propto \exp\left( -\frac{(n_1 - N/2)^2}{N/2} \right)$$
   C'est bien une loi gaussienne dont la largeur à mi-hauteur (écart-type $\sigma = \sqrt{N}/2$) témoigne de fluctuations relatives $\frac{\sigma}{N} \propto \frac{1}{\sqrt{N}}$ d'autant plus négligeables que $N$ est grand (loi des grands nombres).

---

### Partie III : Limites du modèle et analyse critique

Le modèle du système à deux états (ou réseau de spins sans interaction) présente des limites fondamentales qu'il convient d'analyser rigoureusement :

1. **Hypothèse d'indépendance (Champ moyen nul) :** 
   Le modèle suppose que l'énergie totale est simplement la somme des énergies individuelles, ce qui revient à négliger toute interaction énergétique entre les sous-systèmes voisins ($J = 0$ dans le modèle d'Ising). Dans un système réel (solide cristallin, liquide), les forces interatomiques ou l'énergie d'échange magnétique couplent fortement les constituants.
2. **Discrétisation excessive des degrés de liberté :** 
   Restreindre les états possibles à seulement deux niveaux d'énergie $\pm \mu B$ est une approximation valable à basse température pour des spins électroniques ou nucléaires isolés, mais totalement inadaptée pour un fluide (gaz/liquide) où les degrés de liberté translationnels et rotationnels sont continus et décrits par l'espace des phases classique $(\vec{r}, \vec{p})$.
3. **Absence d'effets quantiques collectifs :** 
   Le modèle néglige la statistique quantique des particules (indiscernabilité effective gérée ici par les combinaisons, mais sans symétrie d'échange de type Bose-Einstein ou Fermi-Dirac, bien que les spins soient localisés et discernables par leur position sur un réseau).
4. **Thermodynamique macroscopique vs Fluctuations :** 
   Bien que l'approche statistique permette de quantifier les fluctuations ($\propto 1/\sqrt{N}$), le modèle de spin idéal conduit à des paradoxes à très haute température (capacité thermique tendant vers zero, "catastrophe" d'inversion de population non stabilisée par un réservoir thermique réaliste).