---
title: 'Exercice 1 : Transformée en Z et stabilité numérique'
description: 'Problème d entraînement type concours.'
---

# Problème : Commande numérique d'un axe asservi et analyse de stabilité

## Introduction et Contexte Industriel

Les systèmes de commande numérique actuels remplacent les régulateurs analogiques par des calculateurs (microcontrôleurs ou DSP) qui traitent l'information de manière échantillonnée. Ce problème s'intéresse à la modélisation, à l'analyse de la stabilité et à la mise en œuvre numérique d'un correcteur pour l'axe de lacet d'un mini-drone d'inspection. 

L'objectif est d'étudier l'impact de la période d'échantillonnage $T_e$ et de la quantification des coefficients sur la stabilité du système bouclé, en insistant sur la rigueur méthodologique attendue aux concours Mines-Ponts et Centrale-Supélec.

---

## 1. Énoncé du Problème

On considère un moteur à courant continu entraînant l'axe de lacet du drone. Le modèle continu de la chaîne directe (comprenant l'amplificateur, le moteur et la charge inertielle) est décrit par sa fonction de transfert $H(p)$ :

$$H(p) = \frac{\Omega(p)}{U(p)} = \frac{K}{p(1 + \tau p)}$$

Avec les données numériques constructeur :
* Gain statique : $K = 10\text{ rad}\cdot\text{s}^{-1}\cdot\text{V}^{-1}$
* Constante de temps mécanique : $\tau = 0{,}05\text{ s}$ ($50\text{ ms}$)
* Période d'échantillonnage du calculateur : $T_e = 0{,}01\text{ s}$ ($10\text{ ms}$)

Le système est placé dans une boucle de commande numérique classique avec un bloqueur d'ordre zéro (BOZ) en amont et un échantillonneur idéal en aval.

---

## 2. Questions

### Partie A : Modélisation discrète de la chaîne directe

1. **[Q1]** Rappeler l'expression temporelle du signal de sortie $u(t)$ issu d'un bloqueur d'ordre zéro alimenté par une suite d'impulsions pondérées par $e[k]$.
2. **[Q2]** Exprimer la fonction de transfert en $z$ globale $H(z) = \mathcal{Z}\left\{ \text{BOZ} * H(p) \right\}$ en tenant compte de la période d'échantillonnage $T_e$. 
Indication: On pourra utiliser la décomposition en éléments simples de $\frac{H(p)}{p}$.*
3. **[Q3]** A.N. : Calculer l'expression numérique de $H(z)$ pour $T_e = 0{,}01\text{ s}$.

### Partie B : Analyse de la stabilité en boucle ouverte et fermée

On implémente un retour de position pur (gain proportionnel $K_p$). La commande en sortie du correcteur numérique est $e[k] = K_p (\theta_c[k] - \theta[k])$, avec $\Omega(p) = p \Theta(p)$.

4. **[Q4]** Définir le critère mathématique de stabilité asymptotique d'un système linéaire invariant discret dans le plan $z$. Représenter graphiquement le domaine de stabilité.
5. **[Q5]** Exprimer la fonction de transfert en boucle fermée $F(z) = \frac{\Theta(z)}{\Theta_c(z)}$ en fonction de $H(z)$ et de $K_p$.
6. **[Q6]** Déterminer la condition sur le gain $K_p$ garantissant la stabilité du système bouclé. Conclure quant à la faisabilité d'un gain arbitrairement grand.

### Partie C : Analyse critique et limites du modèle numérique

7. **[Q7]** Dans un calculateur réel, les coefficients de la fonction de transfert du correcteur sont stockés sur un nombre fini de bits (virgule fixe 16 bits). Expliquer qualitativement l'impact de cette quantification sur la position des pôles en boucle fermée.
8. **[Q8]** Discuter de l'influence d'une réduction drastique de la période d'échantillonnage (par exemple $T_e = 0{,}0001\text{ s}$) sur le comportement numérique du système (arrondis de calcul, saturation des registres).

---

## 3. Pistes et Méthode

* **Pour la transformée en Z :** Penser à utiliser la table usuelle de correspondance entre le plan $p$ et le plan $z$ pour les systèmes échantillonnés avec BOZ : 
  $$\mathcal{Z}\left\{ \frac{1-e^{-T_e p}}{p} H(p) \right\} = (1-z^{-1}) \mathcal{Z}\left\{ \mathcal{L}^{-1}\left( \frac{H(p)}{p} \right)_{t=kT_e} \right\}$$
* **Pour la stabilité :** Le polynôme caractéristique $1 + K_p H(z) = 0$ doit avoir toutes ses racines à l'intérieur du cercle unité du plan complexe.
* **Esprit Concours :** Ne jamais se contenter de calculs bruts ; l'examinateur attend une validation physique des ordres de grandeur (comparaison entre $\tau$ et $T_e$).

---

## 4. Corrigé Pas à Pas

### Partie A : Modélisation discrète de la chaîne directe

* **[Q1]** Le bloqueur d'ordre zéro maintient la valeur échantillonnée $e[k]$ constante durant toute la période d'échantillonnage $T_e$ :
  $$u(t) = e[k] \quad \text{pour } kTe \le t < (k+1)Te$$

* **[Q2]** La fonction de transfert avec BOZ s'écrit :
  $$H(z) = (1 - z^{-1}) \mathcal{Z} \left\{ \mathcal{L}^{-1}\left( \frac{H(p)}{p} \right) \right\}$$
  Exprimons $\frac{H(p)}{p}$ :
  $$\frac{H(p)}{p} = \frac{K}{p^2(1 + \tau p)} = K \left( \frac{1}{p^2} - \frac{\tau}{p} + \frac{\tau^2}{1 + \tau p} \right)$$
  En appliquant l'anti-transformée de Laplace puis la transformée en Z :
  $$\mathcal{Z}\left\{ t - \tau + \tau e^{-t/\tau} \right\} = \frac{T_e z}{(z-1)^2} - \tau \frac{z}{z-1} + \tau \frac{z}{z - e^{-T_e/\tau}}$$
  En multipliant par $(1 - z^{-1}) = \frac{z-1}{z}$, on obtient :
  $$H(z) = K \left[ \frac{T_e}{z-1} - \tau + \tau \frac{1 - e^{-T_e/\tau}}{z - e^{-T_e/\tau}} \right]$$
  Après mise au même dénominateur, on met $H(z)$ sous la forme canonique :
  $$H(z) = \frac{b_1 z + b_2}{z^2 + a_1 z + a_2}$$

* **[Q3]** A.N. : 
  * $K = 10$, $\tau = 0{,}05$, $T_e = 0{,}01$.
  * $e^{-T_e/\tau} = e^{-0{,}01 / 0{,}05} = e^{-0{,}2} \approx 0{,}8187$
  * $H(z) = \frac{10 \cdot 0{,}01 z + 10 \cdot 0{,}05 (0{,}01 - 0{,}05(1 - 0{,}8187))}{(z-1)(z-0{,}8187)}$
  * Calcul numérique menant à :
    $$H(z) = 0{,}00187 \frac{z + 0{,}935}{z^2 - 1{,}8187 z + 0{,}8187}$$

---

### Partie B : Analyse de la stabilité en boucle ouverte et fermée

* **[Q4]** Un système numérique est asymptotiquement stable si et seulement si **tous les pôles** de sa fonction de transfert en boucle fermée (les racines de l'équation caractéristique dans le plan $z$) ont un module strictement inférieur à $1$ :
  $$\forall i, \quad |z_i| < 1$$
  Graphiquement, les pôles doivent se situer **à l'intérieur du cercle unité** du plan complexe.

* **[Q5]** La fonction de transfert en boucle fermée est :
  $$F(z) = \frac{K_p H(z)}{1 + K_p H(z)}$$

* **[Q6]** Le polynôme caractéristique est $D(z) = 1 + K_p H(z) = 0$. 
  Pour un système d'ordre 2, on utilise la condition aux limites du cercle unité (critère de Jury ou évaluation en $z = -1$ et $z = 1$). 
  En $z = 1$ : $1 + K_p H(1) = 0 \implies K_p = -1/H(1)$. Comme $H(1) = K \cdot T_e > 0$ (gain statique positif), un gain $K_p > 0$ est nécessaire.
  En $z = -1$ : l'évaluation donne la borne supérieure du gain pour éviter l'instabilité par dépassement de la bande passante (phénomène de battement ou résonance à $\omega = \frac{\pi}{T_e}$).
Conclusion: * Il existe une plage finie de gain $0 < K_p < K_{max}$ assurant la stabilité. Un gain arbitrairement grand conduit nécessairement les pôles à sortir du cercle unité, provoquant une instabilité numérique et physique (saturation, destruction des actionneurs).

---

### Partie C : Analyse critique et limites du modèle numérique

* **[Q7]** **Quantification des coefficients :** Les coefficients réels calculés (ex: $1{,}8187$) sont stockés sous forme binaire arrondie. Si le nombre de bits est insuffisant, les pôles réels se déplacent dans le plan $z$. Si un pôle dépasse le cercle unité par suite d'un arrondi malheureux, le système devient instable de manière "inexpliquée" par le modèle théorique idéal. C'est l'erreur de limit-cycle ou d'arrondi de coefficients.

* **[Q8]** **Effet d'une sur-échantillonnage excessif ($T_e = 0{,}0001\text{ s}$) :** 
  * *Sur le plan théorique :* Le système se rapproche du modèle continu.
  * *Sur le plan numérique (limite pratique) :* $T_e$ devient très petit devant la dynamique, ce qui signifie que $e^{-T_e/\tau} \to 1$. Le dénominateur de $H(z)$ tend vers $(z-1)^2$, ce qui crée des pôles très proches de $z = 1$. Les calculs en virgule fixe souffrent alors d'une perte catastrophique de chiffres significatifs lors des soustractions (termes du type $1 - z^{-1}$), rendant l'algorithme inutilisable en l'état sans l'emploi de virgule flottante double précision.