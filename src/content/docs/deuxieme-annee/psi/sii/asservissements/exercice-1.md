---
title: 'Exercice 1 : Critères de stabilité'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Analyse de la stabilité d'un système asservi à retours multiples

**Filière :** PSI  
**Matière :** Sciences Industrielles de l'Ingénieur (SII)  
**Thème :** Systèmes asservis – Critères de stabilité et analyse critique des modèles.

---

## 1. Énoncé

On considère un système asservi linéaire invariant dans le temps (SLIT), représenté par le schéma-blocs de la figure 1. Ce système intervient dans l'axe de commande en position d'un actionneur électromécanique de haute précision (type table XY pour lithographie).

Le système comporte une boucle interne de correction et une boucle externe d'asservissement de position. 

*   $C(p)$ est le correcteur à action proportionnelle-intégrale (PI) : $C(p) = K_p \left(1 + \frac{1}{T_i p}\right)$
*   $H_1(p)$ représente l'onduleur et le moteur à courant continu (modèle du premier ordre) : $H_1(p) = \_{ \text{K}_m } / { (1 + \tau_m p) }$
*   $H_2(p)$ représente la chaîne de retour de vitesse (capteur tachymétrique) : $H_2(p) = K_v$
*   $H_3(p)$ représente la cinématique et la chaîne directe de position : $H_3(p) = \_{ 1 } / { p }$
*   $H_4(p)$ représente le capteur de position : $H_4(p) = K_c$

On pose les valeurs numériques suivantes :  
$K_m = 10$, $\tau_m = 0{,}05\text{ s}$, $K_v = 0{,}1$, $K_c = 1$, $T_i = 0{,}2\text{ s}$.

---

## 2. Questions

1. **Modélisation :** Déterminer la fonction de transfert en boucle interne $H_{bi}(p)$ définie par le rapport entre la vitesse de rotation $\Omega(p)$ et la sortie du correcteur $E_c(p)$ (en considérant la boucle interne fermée avec son correcteur local éventuel, ici $H_2$).
2. **Fonction de transfert en boucle ouverte (FTBO) :** Exprimer la fonction de transfert en boucle ouverte globale du système $FTBO(p) = \_{ \text{Signal de retour} } / { \text{Signal d'erreur} }$ en fonction des blocs précédents.
3. **Application numérique et Stabilité algébrique :** Déterminer l'expression de la fonction de transfert en boucle fermée (FTBF) $T(p) = \_{ S(p) } / { Consigne(p) }$. À l'aide du critère de Routh, déterminer la condition sur le gain proportionnel $K_p$ pour assurer la stabilité asymptotique du système.
4. **Analyse fréquentielle et Marges de stabilité :** 
    * Tracer (ou caractériser précisément) l'allure du diagramme de Bode de la $FTBO(p)$ pour une valeur nominale $K_p = 2$.
    * Définir graphiquement ou analytiquement la marge de gain et la marge de phase.
5. **Analyse critique du modèle :** Le modèle linéaire utilisé néglige certains phénomènes physiques (flexibilités mécaniques de l'arbre, retards purs liés au traitement numérique du calculateur). Discuter de l'impact de l'ajout d'un retard pur $\tau_r$ sur la validité des conclusions obtenues concernant la stabilité.

---

## 3. Pistes et méthodologie

*   **Question 1 :** Procédez par étapes en réduisant d'abord la boucle interne de vitesse. Attention aux signes dans le sommateur.
*   **Question 3 :** Le polynôme caractéristique $D(p)$ de la FTBF s'obtient en annulant $1 + FTBO(p)$. Le tableau de Routh pour un polynôme de degré 3 de la forme $a_3 p^3 + a_2 p^2 + a_1 p + a_0 = 0$ exige que tous les coefficients soient de même signe et que $a_2 a_1 > a_3 a_0$.
*   **Question 5 :** Pensez à l'expression fréquentielle d'un retard pur ($e^{-\tau_r p}$) et à son influence sur la phase de la $FTBO(j\omega)$.

---

## 4. Corrigé pas à pas

### 1. Modélisation de la boucle interne
La boucle interne relie la grandeur de commande $E_c(p)$ à la vitesse $\Omega(p)$. En considérant un retour unitaire ou via $H_2(p)$, la fonction de transfert de la boucle interne fermée est :
$$H_{bi}(p) = \frac{H_1(p)}{1 + H_1(p)H_2(p)} = \frac{\frac{K_m}{1 + \tau_m p}}{1 + \frac{K_m K_v}{1 + \tau_m p}} = \frac{K_m}{(1 + \tau_m p) + K_m K_v}$$
En regroupant les termes :
$$H_{bi}(p) = \frac{K_m}{(1 + K_m K_v) + \tau_m p} = \frac{\frac{K_m}{1 + K_m K_v}}{1 + \frac{\tau_m}{1 + K_m K_v} p}$$

### 2. Expression de la FTBO globale
La chaîne directe globale $GD(p)$ est le produit du correcteur $C(p)$, de la boucle interne $H_{bi}(p)$, et de $H_3(p)$. La chaîne de retour est $H_4(p)$.
$$FTBO(p) = C(p) \cdot H_{bi}(p) \cdot H_3(p) \cdot H_4(p)$$
$$FTBO(p) = \left[ K_p \left(1 + \frac{1}{T_i p}\right) \right] \cdot \left[ \frac{\frac{K_m}{1 + K_m K_v}}{1 + \frac{\tau_m}{1 + K_m K_v} p} \right] \cdot \left[ \frac{1}{p} \right] \cdot [K_c]$$

### 3. Stabilité algébrique (Critère de Routh)
Avec les valeurs numériques : $K_m = 10$, $\tau_m = 0{,}05$, $K_v = 0{,}1$, $K_c = 1$, $T_i = 0{,}2$.
*   $1 + K_m K_v = 1 + 10 \times 0{,}1 = 2$
*   Gain statique de la boucle interne : $\frac{10}{2} = 5$
*   Constante de temps de la boucle interne : $\frac{0{,}05}{2} = 0{,}025\text{ s}$

La $FTBO(p)$ devient :
$$FTBO(p) = K_p \left(\frac{1 + T_i p}{T_i p}\right) \left(\frac{5}{1 + 0{,}025 p}\right) \left(\frac{1}{p}\right) (1) = \frac{5 K_p (1 + 0{,}2 p)}{0{,}2 p^2 (1 + 0{,}025 p)}$$
$$\text{Soit } FTBO(p) = \frac{25 K_p (1 + 0{,}2 p)}{p^2 (1 + 0{,}025 p)}$$

La fonction de transfert en boucle fermée $T(p) = \frac{FTBO(p)}{1 + FTBO(p)}$ conduit au polynôme caractéristique :
$$D(p) = p^2(1 + 0{,}025 p) + 25 K_p (1 + 0{,}2 p) = 0$$
$$0{,}025 p^3 + p^2 + (5 K_p) p + 25 K_p = 0$$

Appliquons le critère de Routh au polynôme $a_3 p^3 + a_2 p^2 + a_1 p + a_0 = 0$ avec :
*   $a_3 = 0{,}025$
*   $a_2 = 1$
*   $a_1 = 5 K_p$
*   $a_0 = 25 K_p$

Tableau de Routh :
*   Ligne 3 : $a_3 = 0{,}025$ \quad $a_1 = 5 K_p$
*   Ligne 2 : $a_2 = 1$ \quad $a_0 = 25 K_p$
*   Ligne 1 : $b_1 = \frac{a_2 a_1 - a_3 a_0}{a_2} = \frac{1 \times (5 K_p) - 0{,}025 \times (25 K_p)}{1} = 5 K_p - 0{,}625 K_p = 4{,}375 K_p$
*   Ligne 0 : $c_1 = 25 K_p$

Pour assurer la stabilité asymptotique (tous les coefficients de la première colonne de Routh de même signe strictement positif) :
$$\begin{cases} 0{,}025 > 0 \\ 1 > 0 \\ 4{,}375 K_p > 0 \implies K_p > 0 \\ 25 K_p > 0 \implies K_p > 0 \end{cases}$$
Conclusion: ** Le système est stable pour tout $K_p > 0$ (dans le cadre de ce modèle idéal de degré 3).

### 4. Analyse fréquentielle (Marges de stabilité)
Pour $K_p = 2$ :
$$FTBO(j\omega) = \frac{50 (1 + 0{,}2 j\omega)}{(j\omega)^2 (1 + 0{,}025 j\omega)}$$
*   **Pulsation de coupure à 0 dB ($\omega_{c0}$)** : Définie par $|FTBO(j\omega_{c0})| = 1$. Aux hautes pulsations ($\omega \gg 1/0{,}2$ et $\omega \gg 1/0{,}025$), le module s'approxime par $\frac{50 \times 0{,}2 \omega}{\omega^2 \times 0{,}025 \omega}$ ? Reprenons proprement l'asymptote :
    $|FTBO(j\omega)| \approx \frac{50}{\omega^2}$ pour $\omega \in [5, 40]$.
    $\frac{50}{\omega_{c0}^2} = 1 \implies \omega_{c0} = \sqrt{50} \approx 7{,}07\text{ rad/s}$.
*   **Marge de phase ($M_\phi$)** : 
    $$\phi(\omega_{c0}) = \arg(FTBO(j\omega_{c0})) = 180^\circ + \arg(1 + 0{,}2 j\omega_{c0}) - 2 \times 90^\circ - \arg(1 + 0{,}025 j\omega_{c0})$$
    $$\phi(\omega_{c0}) = 180^\circ + \operatorname{arctan}(0{,}2 \times 7{,}07) - 180^\circ - \operatorname{arctan}(0{,}025 \times 7{,}07)$$
    $$\phi(\omega_{c0}) = \operatorname{arctan}(1{,}414) - \operatorname{arctan}(0{,}177) \approx 54{,}7^\circ - 10{,}0^\circ = 44{,}7^\circ$$
    La marge de phase vaut donc $M_\phi = 180^\circ + \phi(\omega_{c0}) = 44{,}7^\circ$. (Le système est stable et moyennement amorti).

### 5. Analyse critique et limites du modèle
*   **Retard pur :** Dans une implementation numérique (par exemple sur microcontrôleur d'une carte de commande), un retard pur $\tau_r$ (provenant de la période d'échantillonnage et du temps de calcul de la loi de commande) s'ajoute au système. La FTBO devient $FTBO_{REEL}(p) = FTBO(p) e^{-\tau_r p}$.
*   **Impact sur la stabilité :** En harmonique, le terme $e^{-j\omega \tau_r}$ introduit un déphasage supplémentaire $\Delta \phi = -\omega \tau_r$ qui décroît linéairement (et rapidement) avec la pulsation. À la pulsation de coupure $\omega_{c0}$, ce retard va soustraire un angle $\omega_{c0} \tau_r$ à la marge de phase. 
*   **Limite du modèle proposé :** Si $\tau_r = 5\text{ ms}$, la perte de phase est de $7{,}07 \times 0{,}005 \text{ rad} \approx 0{,}035\text{ rad} \approx 2^\circ$. Cependant, si la bande passante est augmentée (en augmentant $K_p$), $\omega_{c0}$ augmente, et le déphasage induit par le retard devient critique, pouvant amener la marge de phase à zéro et déstabiliser réellement le système physique, ce que le modèle algébrique pur de la question 3 ne prévoyait pas (stabilité inconditionnelle apparente pour tout $K_p >0$). L'ingénieur doit donc impérativement coupler l'analyse de Routh à une vérification des marges de robustesse fréquentielle incluant les retards et les résonances non modélisées (flexibilités).