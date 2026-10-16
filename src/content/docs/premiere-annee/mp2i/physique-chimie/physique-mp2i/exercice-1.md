---
title: 'Exercice 1 : Filtrage analogique'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Étude d'un système de filtrage actif du second ordre

**Concours MP2I — Physique-Chimie**  
*Mots-clés : Électrocinétique, régimes transitoire et harmonique, fonction de transfert, diagramme de Bode, stabilité.*

---

## Préambule et Objectifs

Ce problème propose l'étude d'un filtre analogique actif du second ordre intégrant un amplificateur opérationnel (AO) supposé idéal et fonctionnant en régime linéaire. L'objectif est de caractériser ses propriétés fréquentielles, d'analyser son comportement asymptotique et de discuter de son utilisation potentielle dans une chaine de traitement du signal.

---

## Partie I : Étude théorique et Fonction de transfert

On considère le montage de la **Figure 1** (circuit théorique non dessiné, décrit ci-après). 
Le montage comporte :
- Une tension d'entrée $e(t)$ et une tension de sortie $s(t)$.
- Un amplificateur opérationnel idéal, alimenté en $\pm 15\text{ V}$, fonctionnant en régime linéaire (compte tenu de la contre-réaction négative).
- Deux résistances de même valeur $R$ et deux condensateurs de même capacité $C$.

Le circuit relie l'entrée $e(t)$ au pôle non iniverseur de l'AO via un réseau passe-bas $(R, C)$, et réalise une contre-réaction complexe incluant le second réseau $(R, C)$.

### Question 1.1
En régime sinusoïdal de pulsation $\omega$, on note $\underline{E}(j\omega)$ et $\underline{S}(j\omega)$ les amplitudes complexes respectives de $e(t)$ et $s(t)$. 
Justifier l'utilisation de l'AO en régime linéaire et rappeler les conditions aux bornes de ses entrées.

> **Corrigé pas à pas :**
> L'amplificateur opérationnel est bouclé de la sortie vers son entrée inverteuse, ce contre-réaction assure la stabilité du montage. En régime linéaire (supposé car la sortie ne sature pas), l'AO idéal possède :
> 1. Un courant nul sur ses entrées : $I_+ = I_- = 0$.
> 2. Une différence de potentiel nulle entre ses entrées en raison de son gain différentiel infini : $\varepsilon = V_+ - V_- = 0$, soit $\underline{V}_+ = \underline{V}_-$.

---

### Question 1.2
Établir la fonction de transfert isochrone $\underline{H}(j\omega) = \frac{\underline{S}(j\omega)}{\underline{E}(j\omega)}$ sous la forme canonique :
$$\underline{H}(j\omega) = \frac{H_0}{1 + \frac{j}{\ Q} \left(\frac{\omega}{\omega_0}\right) - \left(\frac{\omega}{\omega_0}\right)^2}$$
ou sous une forme équivalente adaptée au type de filtre, en exprimant $H_0$, $\omega_0$ et $Q$ en fonction de $R$ et $C$.

> **Corrigé pas à pas :**
> 1. Appliquons le théorème de Millman sur l'entrée non inverteuse $V_+$ :
>    $$\underline{V}_+ = \frac{\frac{\underline{E}}{R} + \frac{0}{R}}{\frac{1}{R} + j\omega C} \times \frac{1}{R} \quad \text{après simplification avec le pont diviseur d'impédance...}$$
>    Plus rigoureusement, en posant les impédances $\underline{Z}_C = \frac{1}{j\omega C}$ :
>    Le pont diviseur d'entrée donne : $\underline{V}_+ = \underline{E} \cdot \frac{\underline{Z}_C}{\underline{Z}_C + R} = \frac{\underline{E}}{1 + j\omega RC}$.
> 2. L'analyse du réseau de contre-réaction relié à la sortie $\underline{S}$ et à l'entrée $\underline{V}_-$ conduit, après résolution des lois de Kirchhoff, à la relation liant $\underline{V}_-$ et $\underline{S}$. Pour un montage de Rauch ou de SalgetKey typique, on obtient la mise en forme :
>    $$\underline{H}(j\omega) = \frac{H_0}{1 + 3j\omega RC - (\omega RC)^2}$$
> 3. Par identification avec la forme canonique :
>    - La pulsation propre est $\omega_0 = \frac{1}{RC}$.
>    - Le facteur de qualité est $Q = \frac{1}{3}$.
>    - Le gain statique est $H_0 = 1$ (ou $0\text{ dB}$).

---

## Partie II : Étude fréquentielle et Diagrammes de Bode

### Question 2.1
Déterminer le comportement asymptotique de la fonction de transfert $\underline{H}(j\omega)$ :
1. Lorsque $\omega \ll \omega_0$ (basses fréquences).
2. Lorsque $\omega \gg \omega_0$ (hautes fréquences).
En déduire la nature du filtre.

> **Corrigé pas à pas :**
> 1. **Basses fréquences ($\omega \to 0$)** : Les termes en $\omega$ deviennent négligeables devant 1. 
>    $$\underline{H}(j\omega) \sim H_0 = 1 \implies G_{\text{dB}} = 0\text{ dB} \quad \text{et} \quad \phi = 0\text{ rad}$$
> 2. **Hautes fréquences ($\omega \to \infty$)** : Le terme en $(\frac{\omega}{\omega_0})^2$ l'emporte au dénominateur :
>    $$\underline{H}(j\omega) \sim -\left(\frac{\omega_0}{\omega}\right)^2 \implies G_{\text{dB}} \sim -40 \log\left(\frac{\omega}{\omega_0}\right)$$
> 3. **Conclusion** : Il s'agit d'un **filtre passe-bas du second ordre**. La pente de l'asymptote haute fréquence est de $-40\text{ dB/decade}$.

---

### Question 2.2
Exprimer le gain en décibels $G_{\text{dB}}(\omega) = 20 \log(|\underline{H}(j\omega)|)$ et tracer l'allure du diagramme de Bode en amplitude. Préciser l'influence de la valeur de $Q$ au voisinage de $\omega_0$.

> **Corrigé pas à pas :**
> Le module s'écrit :
> $$|\underline{H}(j\omega)| = \frac{1}{\sqrt{\left(1 - x^2\right)^2 + \frac{x^2}{Q^2}}} \quad \text{avec } x = \frac{\omega}{\omega_0}$$
> Comme $Q = \frac{1}{3} < \frac{1}{\sqrt{2}}$, le système est fortement amorti. Il n'y a **pas de résonance** : la courbe du gain décroît monotonesement dès les basses fréquences sans pic de résonance.

---

## Partie III : Analyse critique des résultats

### Question 3.1
Discuter des limites du modèle de l'amplificateur opérationnel utilisé ici. Quel paramètre dynamique constructeur limite la validité de l'atténuation en $-40\text{ dB/decade}$ à très haute fréquence ?

> **Analyse critique :**
> 1. **Produit Gain-Bande (PGB)** : Dans la réalité, l'AO possède un gain différentiel fini qui décroit avec la fréquence selon un modèle du premier ordre : $A(j\omega) \approx \frac{A_0}{1 + j\omega/\omega_1}$. À très haute fréquence, l'amplification s'effondre, ce qui détériore l'atténuation théorique du filtre.
> 2. **Vitesse de balayage (*slew rate*)** : Si un signal transitoire trop rapide est injecté, la sortie de l'AO ne pourra pas suivre la pente requise, entraînant une distorsion non linéaire (écrêtage de la vitesse).
> 3. **Impédances parasites** : Les capacités de câblage et les résistances de fuite des condensateurs limitent la sélectivité réelle du montage aux fréquences supérieures au mégahertz.