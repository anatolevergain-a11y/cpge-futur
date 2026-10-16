---
title: 'Cours : Cinétique chimique'
description: 'Synthèse de cours, théorèmes et démonstrations.'
---

# Cinétique chimique — Fiche de cours (BCPST1)

## 1. Introduction et vocabulaire fondamental

La cinétique chimique a pour objet l'étude de la vitesse d'évolution des systèmes chimiques vers leur état d'équilibre.

### Définitions fondamentales
*   **Système homogène / hétérogène :** Un système est homogène si ses propriétés intensives sont uniformes dans tout le volume. Il est hétérogène s'il comporte plusieurs phases (liquide/gaz, solide/liquide).
*   **Réaction lente / rapide :** Une réaction est dite rapide si elle est acheurée dès le mélanges des réactifs (à l'échelle humaine, temps de réaction inférieur au temps de manipulation). Elle est dite lente si son suivi temporel est possible par les méthodes usuelles de laboratoire.
*   **Temps de demi-réaction ($t_{1/2}$) :** C'est la durée au bout de laquelle l'avancement $\xi(t)$ de la réaction a atteint la moitié de son avancement final $\xi_f$ (ou $\xi_{max}$ si la réaction est totale) :
    $$\xi(t_{1/2}) = \frac{\xi_f}{2}$$

---

## 2. Vitesse de réaction et avancement volumique

Soit une réaction chimique modélisée par l'équation Bilan :
$$\sum_{\text{i}} \nu_i \cdot \text{A}_i = 0$$
*(avec $\nu_i < i$ pour les réactifs et $\nu_i > 0$ pour les produits)*.

### Définitions
*   **Avancement volumique $x(t)$ :** Défini par $x(t) = \frac{\xi(t)}{V}$, où $V$ est le volume réactionnel (supposé constant). Son unité usuelle est le $\text{mol}\cdot\text{L}^{-1}$ ou $\text{mol}\cdot\text{m}^{-3}$.
*   **Vitesse volumique de réaction $v(t)$ :** 
    $$v(t) = \frac{dx}{dt} = \frac{1}{V} \frac{d\xi}{dt}$$
    Par définition, $v(t) \ge 0$. Son unité est $\text{mol}\cdot\text{L}^{-1}\cdot\text{s}^{-1}$.
*   **Vitesse d'apparition ou de disparition d'une espèce $A_i$ :**
    *   Vitesse de disparition de $A_i$ (si c'est un réactif) : $v_{\text{disp}}(A_i) = -\frac{d[A_i]}{dt}$
    *   Vitesse d'apparition de $A_i$ (si c'est un produit) : $v_{\text{app}}(A_i) = \frac{d[A_i]}{dt}$

### Théorème de liaison
Pour tout constituant $A_i$ participant à la réaction :
$$v(t) = \frac{1}{\nu_i} \frac{d[A_i]}{dt}$$
*(où $\nu_i$ est le coefficient algébrique)*.

---

## 3. Modélisation macroscopique : Lois de vitesse

### Définitions
*   **Loi de vitesse :** Relation mathématique reliant la vitesse volumique de réaction $v(t)$ aux concentrations (ou pressions partielles) des espèces présentes à l'instant $t$ :
    $$v = k(T) \cdot \prod_{\text{réactifs}} [A_i]^{\alpha_i}$$
    où $k(T)$ est la **constante de vitesse** (qui ne dépend que de la température) et $\alpha_i$ sont les **ordres partiels** par rapport aux réactifs $A_i$.
*   **Ordre global $n$ :** C'est la somme des ordres partiels : $n = \sum \alpha_i$.
*   **Piège classique :** *Les ordres partiels $\alpha_i$ ne sont en général PAS les coefficients stœchiométriques* $\nu_i$ de l'équation bilan. Ils ne le sont que pour les réactions dites **élémentaires** (se déroulant en une seule étape microscopique).

---

## 4. Études cinétiques des ordres courants (Cinésique en volume constant)

### A. Ordre 0 ($n = 0$)
*   **Loi de vitesse :** $v = -\frac{d[A]}{dt} = k$
*   **Équation différentielle :** $\frac{d[A]}{dt} = -k$
*   **Loi horaire (intégration) :** 
    $$[A](t) = [A]_0 - k \cdot t$$
*   **Temps de demi-réaction :** 
    $$t_{1/2} = \frac{[A]_0}{2k}$$
    *(Dépend de la concentration initiale : caractéristique de l'ordre 0).*

### B. Ordre 1 ($n = 1$)
Soit la réaction $A \rightarrow \text{produits}$ d'ordre 1.
*   **Loi de vitesse :** $v = -\frac{d[A]}{dt} = k [A]$
*   **Loi horaire :** 
    $$\ln\left(\frac{[A](t)}{[A]_0}\right) = -k \cdot t \iff [A](t) = [A]_0 \cdot e^{-k t}$$
*   **Temps de demi-réaction :** 
    $$t_{1/2} = \frac{\ln(2)}{k}$$
    *(Indépendant de la concentration initiale : caractéristique majeure de l'ordre 1).*

### C. Ordre 2 ($n = 2$)
Soit la réaction $A \rightarrow \text{produits}$ d'ordre 2 (ou $2A \rightarrow$ produits avec $v = k[A]^2$).
*   **Loi de vitesse :** $v = -\frac{d[A]}{dt} = k [A]^2$
*   **Loi horaire :** 
    $$\frac{1}{[A](t)} - \frac{1}{[A]_0} = k \cdot t$$
*   **Temps de demi-réaction :** 
    $$t_{1/2} = \frac{1}{k [A]_0}$$
    *(Inversément proportionnel à la concentration initiale).*

---

## 5. Méthodes de détermination d'un ordre

### A. Méthode intégrale (suivi temporel)
On fait l'hypothèse d'un ordre (ex: ordre 1), on intègre la loi de vitesse et on teste la linéarité d'une fonction du temps :
*   Ordre 0 : $[A](t) = f(t)$ est une droite.
*   Ordre 1 : $\ln([A](t)) = f(t)$ est une droite de pente $-k$.
*   Ordre 2 : $\frac{1}{[A](t)} = f(t)$ est une droite de pente $k$.

### B. Méthode différentielle
On mesure $v(t)$ à partir de la tangente à la courbe $[A](t)$ en différents points. Comme $\ln(v) = \ln(k) + n \ln([A])$, le tracé de $\ln(v)$ en fonction de $\ln([A])$ donne une droite de pente $n$ (ordre global).

### C. Méthode des excès (ou dégénérescence de l'ordre)
Pour étudier l'ordre par rapport à un réactif $A$ dans une réaction impliquant $A$ et $B$ ($v = k[A]^\alpha [B]^\beta$), on place tous les autres réactifs (ici $B$) en **excès stœchiométrique**.
Ainsi, $[B](t) \approx [B]_0 = \text{Cpte}$.
La loi de vitesse devient : 
$$v = k_{\text{app}} [A]^\alpha \quad \text{avec} \quad k_{\text{app}} = k [B]_0^\beta$$
On détermine ainsi l'ordre partiel $\alpha$ (ordre apparent). En répétant l'opération pour différents $[B]_0$, on trouve $\beta$.

---

## 6. Influence de la température : Loi d'Arrhenius

### Théorème (Loi d'Arrhenius)
La constante de vitesse $k$ dépend de la température $T$ (en Kelvin) selon la relation :
$$k(T) = A \cdot \exp\left(-\frac{E_a}{R \cdot T}\right)$$
*   $A$ : Facteur pré-exponentiel (ou facteur de fréquence), de même unité que $k$.
*   $E_a$ : **Énergie d'activation** (en $\text{J}\cdot\text{mol}^{-1}$), généralement positive.
*   $R$ : Constante des gaz parfaits ($R \approx 8{,}314 \, \text{J}\cdot\text{K}^{-1}\cdot\text{mol}^{-1}$).

### Forme logarithmique
$$\ln(k) = \ln(A) - \frac{E_a}{R} \cdot \frac{1}{T}$$
Le tracé de $\ln(k)$ en fonction de $\frac{1}{T}$ est une droite de pente $-\frac{E_a}{R}$, ce qui permet d'extraire l'énergie d'activation $E_a$.

---

## 7. Pièges et conseils du professeur (BCPST)

1.  **Attention aux unités dans la loi d'Arrhenius :** $E_a$ est presque toujours donnée en $\text{kJ}\cdot\text{mol}^{-1}$, pensez impérativement à la convertir en $\text{J}\cdot\text{mol}^{-1}$ (en multipliant par $10^3$) pour l'harmoniser avec $R$ en $\text{J}\cdot\text{K}^{-1}\cdot\text{mol}^{-1}$.
2.  **Catalyseurs :** Un catalyseur modifie le mécanisme réactionnel et **diminue l'énergie d'activation** $E_a$, accélérant ainsi la réaction sans modifier l'état d'équilibre final (thermodynamique).
3.  **Approximation de l'état quasi-stationnaire (AEQS) :** En BCPST, pour les réactions complexes (mécanismes réactionnels), l'application de l'AEQS à un intermédiaire réactionnel $I$ se traduit par :
    $$\frac{d[I]}{dt} \approx 0$$
    *Piège :* Ne l'appliquez jamais aux réactifs ou aux produits finaux ! Uniquement aux intermédiaires hautement réactifs.