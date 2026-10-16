---
title: 'Exercice 2 : Capacité thermique des solides (Modèle d Einstein)'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Capacité thermique des solides – Modèle d'Einstein

## Énoncé

La détermination de la capacité thermique molaire à volume constant $C_v$ des solides cristallins a constitué l'un des triomphes de la physique statistique au début du XXe siècle. Alors que la loi classique de Dulong et Petit (1819) prévoit une valeur indépendante de la température égale à $3R$, les mesures expérimentales à basse température montrent une décroissance inattendue de $C_v$ qui s'annule au zéro absolu.

En 1907, Albert Einstein propose le premier modèle microscopique quantique pour résoudre cette anomalie. On se propose d'étudier ce modèle, d'en analyser les limites et de le confronter aux données expérimentales.

### Données et constantes physiques :
* Constante des gaz parfaits : $R \approx 8{,}314\text{ J}\cdot\text{K}^{-1}\cdot\text{mol}^{-1}$
* Constante de Boltzmann : $k_B \approx 1{,}38 \times 10^{-23}\text{ J}\cdot\text{K}^{-1}$
* Nombre d'Avogadro : $\mathcal{N}_A \approx 6{,}02 \times 10^{23}\text{ mol}^{-1}$
* Pour le cuivre $(\text{Cu})$, la température caractéristique d'Einstein $\theta_E$ est de l'ordre de $240\text{ K}$.

---

## Questions

### I. Le modèle statistique d'Einstein
On considère un cristal parfait constitué de $N$ atomes identiques. Dans le modèle d'Einstein, on assimile les vibrations de chaque atome dans le réseau cristallin à un oscillateur harmonique quantique tridimensionnel indépendant. 
De manière équivalente, le système est modélisé par $3N$ oscillateurs harmoniques quantiques unidimensionnels indépendants, tous de même pulsation propre $\omega_E = 2\pi \nu_E$.

1. Rappeler l'expression des niveaux d'énergie $E_n$ d'un oscillateur harmonique quantique unidimensionnel de pulsation $\omega_E$, où $n$ est un entier naturel.
2. Écrire la fonction de partition canonique $z$ d'un tel oscillateur à la température $T$. On posera $\beta = \frac{1}{k_B T}$ et l'on introduira la température d'Einstein $\theta_E = \frac{\hbar \omega_E}{k_B}$.
3. En déduire l'énergie interne moyenne $U$ du cristal, composé de $3N$ oscillateurs indépendants.
4. Exprimer la capacité thermique molaire à volume constant $C_v$ du solide en fonction de $T$, $\theta_E$ et $R$.

### II. Étude asymptotique et analyse critique
5. Étudier le comportement de $C_v$ aux hautes températures ($T \gg \theta_E$). Retrouve-t-on la loi classique de Dulong et Petit ?
6. Étudier le comportement de $C_v$ aux très basses températures ($T \ll \theta_E$). Le modèle est-il en accord qualitatif et quantitatif avec la réalité physique ($C_v \propto T^3$ selon la loi de Debye) ?
7. **Analyse critique :** Tracer schématiquement l'allure de $C_v(T)$ selon le modèle d'Einstein et comparer avec les données expérimentales (on pourra discuter de la forme de la décroissance à basse température). Quelles sont les limites de l'hypothèse d'Einstein ?

---

## Pistes et indications

1. **Q1 :** Penser à l'énergie du point zéro.
2. **Q2 :** La fonction de partition d'un système à états discrets est $z = \sum_n e^{-\beta E_n}$. Reconnaître une série géométrique.
3. **Q3 & Q4 :** Utiliser la relation entre l'énergie interne moyenne d'un système et sa fonction de partition, puis dériver par rapport à $T$ (ou $\beta$).
4. **Q5 & Q6 :** Effectuer des développements limités de la fonction exponentielle ($\exp(x) \approx 1 + x$ ou équivalents dominants) lorsque l'argument tend vers $0$ ou $+\infty$.
5. **Q7 :** Pour aller plus loin, Einstein a supposé une fréquence unique $\omega_E$, ce qui revient à négliger le caractère acoustique des vibrations collectives du réseau (modes de phonons de basse fréquence).

---

## Corrigé détaillé

### I. Le modèle statistique d'Einstein

1. **Niveaux d'énergie :**
   Les niveaux d'énergie d'un oscillateur harmonique quantique 1D sont donnés par :
   $$E_n = \left(n + \frac{1}{2}\right)\hbar \omega_E \quad \text{avec } n \in \mathbb{N}$$

2. **Fonction de partition d'un oscillateur :**
   La fonction de partition s'écrit :
   $$z = \sum_{n=0}^{+\infty} e^{-\beta E_n} = \sum_{n=0}^{+\infty} e^{-\beta \hbar \omega_E (n + 1/2)} = e^{-\frac{\beta \hbar \omega_E}{2}} \sum_{n=0}^{+\infty} \left(e^{-\beta \hbar \omega_E}\right)^n$$
   En posant $\theta_E = \frac{\hbar \omega_E}{k_B}$, on a $\beta \hbar \omega_E = \frac{\theta_E}{T}$. La somme est une série géométrique de raison $q = e^{-\theta_E / T} < 1$ :
   $$z = \frac{e^{-\frac{\theta_E}{2T}}}{1 - e^{-\frac{\theta_E}{T}}}$$

3. **Énergie interne du cristal :**
   Le cristal est formé de $3N$ oscillateurs indépendants. L'énergie interne moyenne est donc :
   $$U = 3N \langle E \rangle = -3N \frac{\partial \ln z}{\partial \beta}$$
   Exprimons d'abord $\ln z$ :
   $$\ln z = -\frac{\theta_E}{2T} - \ln\left(1 - e^{-\frac{\theta_E}{T}}\right) = -\frac{\beta \hbar \omega_E}{2} - \ln\left(1 - e^{-\beta \hbar \omega_E}\right)$$
   En dérivant par rapport à $\beta$ :
   $$\langle E \rangle = -\frac{\partial \ln z}{\partial \beta} = \frac{\hbar \omega_E}{2} + \hbar \omega_E \frac{e^{-\beta \hbar \omega_E}}{1 - e^{-\beta \hbar \omega_E}} = \hbar \omega_E \left(\frac{1}{2} + \frac{1}{e^{\frac{\theta_E}{T}} - 1}\right)$$
   L'énergie interne totale est donc :
   $$U = 3N k_B \left[ \frac{\theta_E}{2} + \frac{\theta_E}{e^{\frac{\theta_E}{T}} - 1}\right]$$

4. **Capacité thermique molaire $C_v$ :**
   Par définition, $C_v = \left(\frac{\partial U}{\partial T}\right)_V$. Pour une mole, $N = \mathcal{N}_A$ et $R = \mathcal{N}_A k_B$ :
   $$C_v = 3R \frac{\partial}{\partial T} \left( \frac{\theta_E}{e^{\frac{\theta_E}{T}} - 1} \right)$$
   En effectuant la dérivée :
   $$C_v = 3R \left(\frac{\theta_E}{T}\right)^2 \frac{e^{\frac{\theta_E}{T}}}{\left(e^{\frac{\theta_E}{T}} - 1\right)^2}$$

---

### II. Étude asymptotique et analyse critique

5. **Régime des hautes températures ($T \gg \theta_E$) :**
   Si $T \gg \theta_E$, alors $\frac{\theta_E}{T} \ll 1$. On réalise un développement limité de l'exponentielle $e^x \approx 1 + x$ avec $x = \frac{\theta_E}{T}$ :
   $$e^{\frac{\theta_E}{T}} - 1 \approx \frac{\theta_E}{T}$$
   En remplaçant dans l'expression de $C_v$ :
   $$C_v \approx 3R \left(\frac{\theta_E}{T}\right)^2 \frac{1}{(\theta_E/T)^2} = 3R$$
Conclusion: * On retrouve exactement la **loi de Dulong et Petit**, ce qui valide le modèle à haute température.

6. **Régime des très basses températures ($T \ll \theta_E$) :**
   Si $T \ll \theta_E$, alors $\frac{\theta_E}{T} \gg 1$. Le terme $e^{\frac{\theta_E}{T}}$ devient prépondérant devant $1$ au dénominateur :
   $$C_v \approx 3R \left(\frac{\theta_E}{T}\right)^2 \frac{e^{\frac{\theta_E}{T}}}{\left(e^{\frac{\theta_E}{T}}\right)^2} = 3R \left(\frac{\theta_E}{T}\right)^2 e^{-\frac{\theta_E}{T}}$$
   *Analyse critique :* Lorsque $T \to 0$, le terme exponentiel $e^{-\theta_E/T}$ l'emporte devant la divergence algébrique en $1/T^2$. Par conséquent, **$C_v \to 0$ lorsque $T \to 0$**, ce qui est qualitativement correct et corrige le défaut majeur de la physique classique.

7. **Limites du modèle d'Einstein :**
   Bien que qualitatifs, les résultats d'Einstein échouent quantitativement à très basse température. 
   * **Modèle d'Einstein :** Décroissance exponentielle $C_v \propto e^{-\theta_E / T}$.
   * **Réalité expérimentale (et modèle de Debye) :** Décroissance en puissance $C_v \propto T^3$ (loi en $T^3$ de Debye).
   
   *Justification physique :* L'hypothèse d'Einstein suppose que tous les atomes vibrent à la *même* fréquence indépendante $\omega_E$. Or, dans un solide réel, les vibrations sont collectives (propagation d'ondes élastiques ou phonons). Il existe un spectre continu de fréquences allant de zéro jusqu'à une fréquence maximale, ce qui autorise des modes de très basse énergie à basse température, conduisant à la loi en $T^3$.