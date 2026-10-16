---
title: 'Exercice 1 : Transformée de Laplace'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Étude fréquentielle et temporelle d'un système asservi de position (Filière PTSI - SII)

---

## 1. Énoncé

Dans le cadre de l'étude d'un axe motorisé de position pour une machine-outil de découpe laser, on s'intéresse à l'asservissement de position d'un chariot mobile. L'objectif est d'obtenir un positionnement précis et rapide, sans dépassement excessif, malgré les perturbations exercées par l'effort de coupe.

Le système est régi par les éléments suivants :
* Un correcteur $C(p)$ dont la structure reste à déterminer.
* Un ensemble convertisseur-amplificateur de gain $K_a$ (supposé pur, sans dynamique notable devant le reste du système).
* Un moteur à courant continu (MCC) commandé par l'induit, caractérisé par sa constante de couple $K_m$, sa résistance d'induit $R$, et son moment d'inertie ramené sur l'axe $J$. On négligera l'inductance de l'induit $L$ ainsi que les frottements visqueux ($f=0$).
* Un réducteur de rapport de réduction $r = \frac{\theta_m}{\theta_s} = \frac{1}{10}$ (où $\theta_m$ est l'angle moteur et $\theta_s$ la position angulaire ou linéaire de sortie). Pour simplifier, on assimilera la sortie à un système linéaire équivalent de position avec un gain unité pour la conversion angle-position.
* Un capteur de position de fonction de transfert $H(p) = K_c$ avec $K_c = 1 \text{ V}\cdot\text{rad}^{-1}$.

### Données numériques constructeur :
* Résistance d'induit : $R = 2,5\ \Omega$
* Constante de couple / force électromotrice : $K_m = 0,2\ \text{N}\cdot\text{A}^{-1}$ (ou $\text{V}\cdot\text{rad}^{-1}\cdot\text{s}$)
* Inertie totale ramenée sur l'arbre moteur : $J = 4\times 10^{-3}\ \text{kg}\cdot\text{m}^2$
* Gain de l'amplificateur : $K_a = 10$
* Rapport du réducteur : $r = 0,1$

---

## 2. Questions

1. **Modélisation du système non corrigé ($C(p) = 1$) :**
   1.1. Établir les équations régissant le moteur à courant continu dans le domaine de Laplace (en négligeant $L$ et $f$). En déduire la fonction de transfert de la chaîne ouverte non corrigée $FTBO(p) = \frac{\Theta_s(p)}{E(p)}$ sous forme canonique, où $E(p)$ est l'image de la tension de commande et $\Theta_s(p)$ celle de la position de sortie.
   1.2. Préciser la classe et l'ordre de ce système. Quel est son comportement statique face à une consigne en échelon ?

2. **Analyse dynamique et critique du modèle :**
   2.1. Déterminer la fonction de transfert en boucle fermée $FTBF(p) = \frac{\Theta_s(p)}{\Theta_consigne(p)}$ dans le cas d'un retour unitaire ($K_c = 1$). Mettre $FTBF(p)$ sous la forme canonique d'un système du 2ème ordre.
   2.2. Identifier la pulsation propre non amortie $\omega_0$ et le coefficient d'amortissement $\xi$. Calculer numériquement ces deux grandeurs.
   2.3. *Analyse critique :* Le modèle mathématique retenu néglige l'inductance $L$ de l'induit et les frottements $f$. Discuter de la validité de ces hypothèses physiques au regard des ordres de grandeur industriels usuels et des limites de ce modèle pour des fréquences élevées.

3. **Correction proportionnelle et performances :**
   On souhaite améliorer la précision tout en maintenant un amortissement suffisant ($\xi \ge 0,7$). On introduit un correcteur proportionnel $C(p) = K_p$.
   3.1. Exprimer le nouveau coefficient d'amortissement $\xi'$ en fonction de $K_p$ et des paramètres du système.
   3.2. Calculer la valeur de $K_p$ permettant d'obtenir un amortissement $\xi' = 0,707$.
   3.3. Évaluer l'erreur statique indicielle du système corrigé ainsi que le temps de réponse à 5% associé.

---

## 3. Pistes et indications

* **Q1.1 :** Pensez à relier la tension d'induit $U(p)$, la force contre-électromotrice $E_{cem}(p) = K_m \Omega_m(p)$, le couple moteur $C_m(p) = K_m I(p)$ et l'équation fondamentale de la dynamique en rotation $J p \Omega_m(p) = C_m(p)$.
* **Q1.2 :** La classe correspond au nombre d'intégrateurs pur dans la $FTBO$. L'erreur statique se déduit directement du théorème de la valeur finale.
* **Q2.2 :** Identifiez par identification terme à terme avec la forme type : $\frac{1}{\frac{1}{\omega_0^2}p^2 + \frac{2\xi}{\omega_0}p + 1}$ ou $\frac{K}{\frac{p^2}{\omega_0^2} + \frac{2\xi}{\omega_0}p + 1}$.
* **Q3.3 :** Pour un système du 2ème ordre avec $\xi = 0,707$, le produit $\omega_0 t_{r5\%}$ est approximativement égal à $3.0$.

---

## 4. Corrigé pas à pas

### Corrigé de la Question 1 : Modélisation du système non corrigé
1.1. Les équations du MCC dans le domaine de Laplace sont :
* Loi d'ohm dans l'induit (en négligeant $L$): $U(p) = R \cdot I(p) + E_{cem}(p)$
* Force contre-électromotrice : $E_{cem}(p) = K_m \cdot \Omega_m(p)$
* Couple électromagnétique : $C_m(p) = K_m \cdot I(p)$
* PFD en rotation (avec $f=0$) : $C_m(p) = J \cdot p \cdot \Omega_m(p)$

En combinant ces équations :
$$U(p) = R \cdot \left(\frac{J \cdot p \cdot \Omega_m(p)}{K_m}\right) + K_m \cdot \Omega_m(p) = \left(\frac{R \cdot J \cdot p + K_m^2}{K_m}\right) \Omega_m(p)$$

La vitesse de sortie $\Omega_s(p)$ est liée à $\Omega_m(p)$ par le réducteur : $\Omega_s(p) = r \cdot \Omega_m(p)$, et $\Theta_s(p) = \frac{\Omega_s(p)}{p}$.
En tenant compte de l'amplificateur ($E(p)$ étant la tension de commande d'entrée) : $U(p) = K_a \cdot E(p)$.

La fonction de transfert de la chaîne ouverte est donc :
$$FTBO(p) = \frac{\Theta_s(p)}{E(p)} = \frac{K_a \cdot K_m \cdot r}{p \cdot (R \cdot J \cdot p + K_m^2)} = \frac{\frac{K_a \cdot r}{K_m}}{p \left(\frac{R \cdot J}{K_m^2}p + 1\right)}$$

1.2. La $FTBO(p)$ possède un pôle à l'origine ($p$), le système est donc de **Classe 1** et d'**Ordre 2**.
Face à une consigne en échelon, l'erreur statique est nulle (car le système est de classe $\ge 1$).

---

### Corrigé de la Question 2 : Analyse dynamique et critique
2.1. Avec un retour unitaire ($K_c = 1$), la fonction de transfert en boucle fermée $FTBF(p)$ s'écrit :
$$FTBF(p) = \frac{FTBO(p)}{1 + FTBO(p)} = \frac{\frac{K_a \cdot K_m \cdot r}{R \cdot J}}{p^2 + \frac{K_m^2}{R \cdot J}p + \frac{K_a \cdot K_m \cdot r}{R \cdot J}}$$

2.2. Par identification avec la forme canonique $FTBF(p) = \frac{K}{\frac{p^2}{\omega_0^2} + \frac{2\xi}{\omega_0}p + 1}$ :
* Pulsation propre : $\omega_0 = \sqrt{\frac{K_a \cdot K_m \cdot r}{R \cdot J}}$
* Coefficient d'amortissement : $2\xi \omega_0 = \frac{K_m^2}{R \cdot J} \implies \xi = \frac{K_m^2}{2 \cdot R \cdot J \cdot \omega_0}$

*Application numérique :*
* $R = 2,5\ \Omega$
* $K_m = 0,2\ \text{V}\cdot\text{s}\cdot\text{rad}^{-1}$
* $J = 4\times 10^{-3}\ \text{kg}\cdot\text{m}^2$
* $K_a = 10$
* $r = 0,1$

$$\omega_0 = \sqrt{\frac{10 \times 0,2 \times 0,1}{2,5 \times 4\times 10^{-3}}} = \sqrt{\frac{0,2}{0,01}} = \sqrt{20} \approx 4,47\ \text{rad}\cdot\text{s}^{-1}$$

$$\xi = \frac{0,2^2}{2 \times 2,5 \times 4\times 10^{-3} \times 4,47} = \frac{0,04}{0,0894} \approx 0,447$$

2.3. *Analyse critique et limites du modèle :*
* **Négligence de l'inductance $L$ :** Cette hypothèse est valide si la constante de temps électrique $\tau_e = \frac{L}{R}$ est très inférieure à la constante de temps mécanique $\tau_m = \frac{R \cdot J}{K_m^2}$. Pour un MCC de cette taille, $L$ est de l'ordre de quelques mH, ce qui valide l'approximation aux basses fréquences. En revanche, pour l'étude de la stabilité robuste ou du rejet de perturbations haute fréquence, cette approximation conduit à négliger un pôle supplémentaire qui peut induire un déphasage non modélisé.
* **Négligence des frottements $f$ :** Supposer $f=0$ surestime légèrement le coefficient d'amortissement réel, les frottements visqueux naturels aidant généralement à amortir le système.
* **Linéarité :** Les saturations (tension maximale de l'amplificateur, courant maximal du moteur) ne sont pas prises en compte. Pour de grands échelons, le système entrera en saturation, rendant caduque l'analyse linéaire par transformée de Laplace.

---

### Corrigé de la Question 3 : Correction proportionnelle
3.1. L'introduction du correcteur $C(p) = K_p$ modifie le gain de la chaîne ouverte qui devient $K_p \cdot FTBO_{init}(p)$.
La nouvelle pulsation propre est $\omega_0' = \omega_0 \sqrt{K_p}$ et le nouvel amortissement devient :
$$\xi' = \xi \cdot \frac{1}{\sqrt{K_p}}$$
*(Note : un correcteur proportionnel pur dégrade l'amortissement si $K_p > 1$, ce qui est typiquement le cas recherché pour augmenter la bande passante, nécessitant souvent un correcteur plus élaboré type PID, mais répond au cahier des charges immédiat si $K_p$ est ajusté).*

3.2. On souhaite $\xi' = 0,707$ (soit $\frac{\sqrt{2}}{2}$) :
$$\xi' = \frac{\xi}{\sqrt{K_p}} \implies \sqrt{K_p} = \frac{\xi}{0,707} \implies K_p = \left(\frac{0,447}{0,707}\right)^2 \approx 0,4\ (\text{ou via réglage inverse si } K_p \text{ est placé différemment})\text{.}$$
*Attitude critique :* Un gain $K_p < 1$ réduit la dynamique globale. Pour un véritable gain de performance, on aurait recours à un correcteur à action dérivée (type PD) pour augmenter $\xi$ sans pénaliser la vitesse.

3.3. 
* **Erreur statique :** Le système corrigé reste de classe 1 (car $C(p) = K_p$ est un gain pur). L'erreur statique pour une consigne en échelon demeure **nulle**.
* **Temps de réponse à 5% :** Avec $\xi' \approx 0,7$, la formule usuelle donne $\omega_0 t_{r5\%} \approx 3,0$. 
Avec $K_p$ abaissé pour l'amortissement, $\omega_0' = \omega_0 \sqrt{0,4} \approx 4,47 \times 0,632 \approx 2,83\ \text{rad}\cdot\text{s}^{-1}$.
D'où $t_{r5\%} \approx \frac{3,0}{2,83} \approx 1,06\ \text{s}$.