---
title: 'Exercice 2 : Filtrage linéaire et diagrammes de Bode'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Étude d'un filtre correcteur pour capteur piézoélectrique

## Énoncé

Dans le cadre de l'instrumentation sismique, on s'intéresse à la chaîne de conditionnement du signal délivré par un capteur piézoélectrique. Ce type de capteur modélise une source de tension réelle par un générateur de Thévenin comprenant une source idéale de tension $e(t)$ proportionnelle à l'accélération mesurée, en série avec une capacité interne $C_s$. 

Afin de limiter l'influence des bruits parasites haute fréquence et de supprimer la composante continue (dérive thermique), le signal est traité par un circuit électronique dont on étudie ici un étage simplifié.

Le circuit est alimenté par une tension sinusoïdale d'entrée $e(t) = E_m \cos(\omega t)$ et l'on mesure la tension de sortie $s(t) = S_m \cos(\omegát + \varphi)$. On pose la pulsation propre $\omega_0 = \frac{1}{R C}$, où $R$ et $C$ sont des composants du circuit de filtrage.

---

## Questions

### Partie I : Modélisation et fonction de transfert
1. Établir le schéma équivalent du montage en régime sinusoïdal établi, en modélisant le capteur par son équivalent de Thévenin ($E_s(\underline{j\omega}) = E(\underline{j\omega})$, $C_s$) branché en amont d'une cellule RC série constituée d'une résistance $R$ et d'un condensateur $C$ (la tension de sortie $\underline{S}(\underline{j\omega})$ étant aux bornes du condensateur $C$).
2. Exprimer la fonction de transfert complexe $\underline{H}(\underline{j\omega}) = \frac{\underline{S}(\underline{j\omega})}{\underline{E}(\underline{j\omega})}$ en fonction de $\omega$, $C_s$, $R$ et $C$.
3. Mettre $\underline{H}(\underline{j\omega})$ sous la forme canonique :
   $$\underline{H}(\underline{j\omega}) = \frac{A_0 \cdot j\frac{\omega}{\omega_1}}{1 + j\frac{\omega}{\omega_2}}$$
   Exprimer le gain statique apparent $A_0$, ainsi que les pulsations caractéristiques $\omega_1$ et $\omega_2$ en fonction de $R$, $C$ et $C_s$. Préciser la nature du filtre.

### Partie II : Étude fréquentielle et Diagrammes de Bode
4. Donner l'expression du gain $G(\omega) = 20 \log_{10} |\underline{H}(\underline{j\omega})|$ et de la phase $\varphi(\omega) = \arg(\underline{H}(\underline{j\omega}))$.
5. Tracer l'allure du diagramme de Bode en amplitude (gain en dB) en distinguant les cas selon les ordres de grandeur des composants. On posera $a = \frac{C_s}{C} = 0,1$.
6. Déterminer la pulsation $\omega_{max}$ pour laquelle le gain est maximal. Que vaut ce gain maximal ?

### Partie III : Analyse critique et limites du modèle
7. Calculer la phase $\varphi(\omega)$ aux limites $\omega \to 0$ et $\omega \to +\infty$. Quel est le comportement du filtre face à un créneau de tension ?
8. **Analyse critique :** Dans la pratique, les composants réels possèdent des limites. Si l'on pousse l'étude à très haute fréquence ($\omega \gg \omega_2$), le modèle linéaire simple présenté ici reste-t-il valide ? Citer deux phénomènes physiques non pris en compte dans ce modèle qui viendraient modifier le diagramme de Bode réel.

---

## Pistes et indications

* **Q1 & Q2 :** Utilisez la formule du diviseur de tension complexe en considérant l'impédance équivalente de l'association de $C_s$ et du bloc $RC$. Attention, le capteur impose $C_s$ en série avec l'entrée du filtre $RC$. Soit l'impédance totale $Z_{tot} = \frac{1}{j C_s \omega} + R + \frac{1}{j C \omega}$.
* **Q3 :** Identifiez les termes de manière à faire apparaître un passe-bande ou un passe-haut selon le comportement asymptotique.
* **Q6 :** Dérivez le gain par rapport à $\omega$ (ou étudiez $\frac{d(G^2)}{d\omega}$) pour trouver le maximum.
* **Q8 :** Pensez aux éléments parasites des composants réels (inductances de cablage, résistance série des condensateurs dite ESR, capacité de sortie des AOP si le filtre est actif).

---

## Corrigé pas à pas

### Partie I : Modélisation et fonction de transfert
1. Le schéma équivalent associe en série la source idéale de tension $\underline{E}$, la capacité $C_s$ du capteur, la résistance $R$ et la capacité de sortie $C$.
2. Par application du diviseur de tension complexe :
   $$\underline{S}(\underline{j\omega}) = \underline{E}(\underline{j\omega}) \frac{\frac{1}{j C \omega}}{R + \frac{1}{j C_s \omega} + \frac{1}{j C \omega}}$$
   En multipliant numérateur et dénominateur par $j C_s \omega \cdot j C \omega$ (ou plus simplement en factorisant), on obtient :
   $$\underline{H}(\underline{j\omega}) = \frac{\frac{1}{j C \omega}}{R + \frac{C + C_s}{j C C_s \omega}} = \frac{C_s}{C + C_s} \frac{j R C \omega}{1 + j R \frac{C C_s}{C + C_s} \omega}$$

3. Par identification avec la forme canonique :
   * $A_0 = 1$ (ou $1$ après réajustement du facteur multiplicatif, posons $H_{max}$). Plus rigoureusement : $\underline{H}(\underline{j\omega}) = \frac{C_s}{C} \frac{j R C \omega}{1 + j R \frac{C C_s}{C + C_s} \omega}$ sous réserve de factorisation.
   * Posons $\omega_1 = \frac{1}{R C}$ et $\omega_2 = \frac{C + C_s}{R C C_s}$.
   * Le diagramme montre un comportement de type **passe-bande** : atténuation aux basses fréquences (présence du $j\omega$ au numérateur, dérivrateur) et atténuation aux hautes fréquences (pôle au dénominateur).

### Partie II : Étude fréquentielle et Diagrammes de Bode
4. Le gain en décibels s'écrit :
   $$G(\omega) = 20 \log_{10}\left(\frac{C_s}{C}\right) + 20 \log_{10}\left(\frac{\omega}{\omega_1}\right) - 20 \log_{10}\left(\sqrt{1 + \left(\frac{\omega}{\omega_2}\right)^2}\right)$$
   La phase est :
   $$\varphi(\omega) = \frac{\pi}{2} - \arctan\left(\frac{\omega}{\omega_2}\right)$$

5. **Asymptotes :**
   * Si $\omega \ll \omega_1 < \omega_2$ : $G(\omega) \approx 20 \log(a) + 20 \log(\omega/\omega_1)$ (pente de $+20 \text{ dB/decade}$).
   * Si $\omega_1 \ll \omega \ll \omega_2$ : $G(\omega) \approx 20 \log(\omega/\omega_2)$ (selon les valeurs, palier ou transition).
   * Si $\omega \gg \omega_2$ : $G(\omega) \ décroit$ avec une pente de $-20 \text{ dB/decade}$.

6. La pulsation de raccordement du maximum correspond au sommet du passe-bande. En étudiant $\frac{dG}{d\omega} = 0$, on trouve $\omega_{max} = \sqrt{\omega_1 \omega_2}$.

### Partie III : Analyse critique et limites du modèle
7. 
   * Lorsque $\omega \to 0$, $\varphi(\omega) \to +\pi/2$. 
   * Lorsque $\omega \to +\infty$, $\varphi(\omega) \to \frac{\pi}{2} - \frac{\pi}{2} = 0$.
   * **Réponse indicielle :** Le terme en $j\omega$ à basse fréquence se comporte comme un opérateur dérivateur idéal $\frac{d}{dt}$. Soumis à un créneau (discontinuité), le signal de sortie présenterait théoriquement des pics de Dirac infinis, ce qui physiquement saturerait l'électronique en aval.

8. **Analyse critique des limites du modèle :**
   Le modèle linéaire repose sur des composants parfaits. À très haute fréquence ($\omega > 10^6 \text{ rad.s}^{-1}$ pour des composants usuels) :
   * **Effets inductifs parasitaires :** Les résistances et les pattes des condensateurs se comportent comme de petites inductances $L$ en série, créant des résonances parasites non prévues (cassure de la pente à $-40 \text{ dB/decade}$ ou plus).
   * **Résistance série équivalente (ESR) :** Les condensateurs réels possèdent une résistance interne non nulle qui empêche le gain de chuter indéfiniment ou de descendre strictement selon l'asymptote théorique, plafonnant l'atténuation.