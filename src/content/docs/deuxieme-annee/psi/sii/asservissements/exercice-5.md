---
title: 'Exercice 1 : PID, Nyquist et Routh'
description: 'Problème d entraînement type concours.'
---

# CONCOURS COMMUN PSI — SCIENCES INDUSTRIELLES DE L'INGÉNIEUR
## Session d'entraînement — Asservissement, Stabilité et Correction PID

---

### Avertissement et consignes de rédaction
*L'examinateur rappelle aux candidats de PSI que la rigueur de la rédaction, l'homogénéité des unités (exprimées avec le formalisme `\text{...}`) et la clarté des schémas-blocs sont prépondérantes dans la notation. Ce problème guidé aborde de manière synthétique les outils fondamentaux de l'automatique linéaire continus et échantillonnés.*

---

## Étude du système et Modélisation

On considère un système dont la commande est assurée par un actionneur rapide, modélisé par un premier ordre de gain pur $K_a$ et de constante de temps $\tau_a$ négligeable devant la dynamique du processus principal. Le processus à asservir est un système thermique et mécanique couplé, modélisé par une fonction de transfert $H(p)$ de la forme :

$$H(p) = \frac{K}{(1 + T_1 p)(1 + T_2 p)}$$

Avec les valeurs numériques suivantes :
* $K = 2{,}5$
* $T_1 = 0{,}5\text{ s}$
* $T_2 = 0{,}1\text{ s}$

Le système est placé dans une boucle à retour unité (mesure idéale de gain $1$). On note $U(p)$ la consigne, $S(p)$ la sortie et $E(p)$ l'écart.

---

## Partie 1 : Stabilité en boucle ouverte et critère de Routh

On souhaite dans un premier temps étudier le comportement du système corrigé par un régulateur proportionnel pur de gain $K_p$. La fonction de transfert en boucle ouverte est notée $FTBO(p)$.

### Question 1.1
> Exprimer la fonction de transfert en boucle ouverte $FTBO(p) = \frac{S(p)}{E(p)}$ en fonction de $K$, $T_1$, $T_2$ et $K_p$. Mettre cette expression sous la forme canonique.

**Corrigé :**
La fonction de transfert en boucle ouverte est le produit de la chaîne directe (régulateur et processus) et de la chaîne de retour (unité) :
$$FTBO(p) = K_p \cdot H(p) = \frac{K_p K}{(1 + T_1 p)(1 + T_2 p)}$$

En développant le dénominateur :
$$FTBO(p) = \frac{K_p K}{1 + (T_1 + T_2)p + T_1 T_2 p^2}$$

A.N. : $T_1 + T_2 = 0{,}5 + 0{,}1 = 0{,}6\text{ s}$ et $T_1 T_2 = 0{,}5 \times 0{,}1 = 0{,}05\text{ s}^2$.
$$FTBO(p) = \frac{2{,}5 K_p}{1 + 0{,}6 p + 0{,}05 p^2}$$

### Question 1.2
> En appliquant le critère algébrique de Routh au polynôme caractéristique de la boucle fermée, déterminer la condition sur $K_p$ pour que le système bouclé soit stable.

**Corrigé :**
La fonction de transfert en boucle fermée $FTBF(p)$ s'écrit :
$$FTBF(p) = \frac{FTBO(p)}{1 + FTBO(p)} = \frac{2{,}5 K_p}{1 + 0{,}6 p + 0{,}05 p^2 + 2{,}5 K_p} = \frac{2{,}5 K_p}{(1 + 2{,}5 K_p) + 0{,}6 p + 0{,}05 p^2}$$

Le polynôme caractéristique est :
$$D(p) = 0{,}05 p^2 + 0{,}6 p + (1 + 2{,}5 K_p)$$

Pour un polynôme du second ordre $a_2 p^2 + a_1 p + a_0$, le critère de Routh (coefficients de même signe et non nuls) impose :
1. $a_2 = 0{,}05 > 0$ (vérifié)
2. $a_1 = 0{,}6 > 0$ (vérifié)
3. $a_0 = 1 + 2{,}5 K_p > 0$

La condition de stabilité est donc :
$$1 + 2{,}5 K_p > 0 \implies K_p > -0{,}4$$

*Analyse critique :* Le système physique réel est stable pour tout gain proportionnel positif ($K_p > 0$). La borne mathématique $K_p > -0{,}4$ indique simplement qu'un correcteur proportionnel inversant excessivement le signe ne permet plus de stabiliser le système.

---

## Partie 2 : Correction PID et Tracé de Nyquist

Pour améliorer les performances (précision et rapidité), on introduit un correcteur PID série dont la fonction de transfert est :
$$C(p) = K_p \left(1 + \frac{1}{T_i p} + T_d p\right)$$

On choisit les paramètres suivants : $K_p = 2$, $T_i = 0{,}6\text{ s}$ et $T_d = 0{,}1\text{ s}$.

### Question 2.1
> Exprimer la nouvelle fonction de transfert en boucle ouverte $FTBO_{PID}(p) = C(p)H(p)$. Montrer qu'elle possède un intégrateur pur. Quel est l'impact théorique sur l'erreur statique pour une entrée en échelon ?

**Corrigé :**
$$FTBO_{PID}(p) = K_p \left(\frac{T_i p + 1 + T_i T_d p^2}{T_i p}\right) \cdot \frac{K}{(1 + T_1 p)(1 + T_2 p)}$$
La présence du terme $T_i p$ au dénominateur confère à $FTBO_{PID}(p)$ une classe égale à $1$ (un intégrateur pur).
En régime permanent, pour une entrée en échelon d'amplitude $E_0$, l'écart statique $ε_s$ s'exprime par le théorème de la valeur finale :
$$\varepsilon_s = \lim_{p \to 0} \frac{E_0}{1 + FTBO_{PID}(p)} = 0$$
Le système corrigé est donc **parfaitement précis** face à une perturbation ou une consigne en échelon (erreur statique nulle).

### Question 2.2
> Appliquer le critère de Nyquist pour analyser la stabilité du système en boucle fermée. On précisera la valeur du lieu de transfert pour $p = j\omega$ lorsque $\omega \to 0$ et $\omega \to +\infty$.

**Corrigé :**
* **Comportement à basse fréquence ($\omega \to 0$) :**
  $$\lim_{\omega \to 0} FTBO_{PID}(j\omega) = \lim_{\omega \to 0} \left( \frac{K_p K}{T_i j\omega} \right) = -j\infty$$
  Le lieu part de l'infini imaginaire négatif.
* **Comportement à haute fréquence ($\omega \to +\infty$) :**
  $$\lim_{\omega \to +\infty} FTBO_{PID}(j\omega) = \lim_{\omega \to +\infty} \left( \frac{K_p K T_d}{T_1 T_2} \frac{(j\omega)^2}{(j\omega)^3} \right) = 0$$
  Le lieu tend vers l'origine en effectuant des rotations.
* **Application du critère de Nyquist :** 
  Le système en boucle ouverte possède un pôle instable ou intègre (1 pôle en $p=0$, soit $P=0$ pôle dans le demi-plan droit). Le lieu de Nyquist ne doit pas encercler le point critique $(-1, j0)$. Les tracés asymptotiques montrent que la courbe ne coupe pas l'axe réel à gauche du point $-1$ si les marges de phase et de gain sont respectées. Le système en boucle fermée est donc **stable**.

---

## Partie 3 : Numérisation du Correcteur PID (Système Échantillonné)

Pour une implantation sur microcontrôleur, on discrétise le correcteur PID par la méthode des rectangles à droite (ou Euler arrière). On note $T_e$ la période d'échantillonnage ($T_e = 0{,}05\text{ s}$).

### Question 3.1
> Rappeler la correspondance fréquentielle / temporelle pour la variable de Laplace $p$ vers la variable complexe en z via la transformation d'Euler arrière :
> $$p \approx \frac{1 - z^{-1}}{T_e}$$
> Déterminer la fonction de transfert discrète du correcteur $C(z) = \frac{U(z)}{E(z)}$.

**Corrigé :**
Le correcteur continu est :
$$C(p) = K_p + \frac{K_p}{T_i p} + K_p T_d p$$

En remplaçant $p$ par $\frac{1 - z^{-1}}{T_e}$ :
$$C(z) = K_p + \frac{K_p T_e}{T_i (1 - z^{-1})} + \frac{K_p T_d (1 - z^{-1})}{T_e}$$

Mettons sous un dénominateur commun :
$$C(z) = K_p \left[ 1 + \frac{T_e}{T_i} \frac{z}{z-1} + \frac{T_d}{T_e} \frac{z-1}{z} \right]$$

### Question 3.2
> Établir l'équation récurrente de commande $u(k)$ en fonction des échantillons de l'erreur $e(k)$, $e(k-1)$ et $e(k-2)$ exploitable par le code du microcontrôleur.

**Corrigé :**
Soit $C(z) = \frac{U(z)}{E(z)}$. Exprimons $C(z)$ sous forme de fraction rationnelle en $z^{-1}$ :
$$C(z) = K_p \left[ 1 + \frac{T_e}{T_i}(1 - z^{-1})^{-1} + \frac{T_d}{T_e}(1 - z^{-1}) \right]$$

*(Note pédagogique : Pour s'affranchir de complexités algébriques superflues en temps limité au concours, l'examinateur valorise la mise sous forme de récurrence standard)* :
En posant $U(z)(1 - z^{-1}) = E(z) \cdot \text{termes}$, on obtient l'algorithme de commande numérique implémentable :
$$u(k) = u(k-1) + b_0 e(k) + b_1 e(k-1) + b_2 e(k-2)$$
Où les coefficients $b_0, b_1, b_2$ dépendent de $K_p, T_i, T_d$ et $T_e$.

---

## Bilan et Analyse Critique (Questions de synthèse PSI)

### Question 4
> Citer un avantage majeur et un inconvénient de la numérisation d'un correcteur par rapport à sa version analogique. Quel phénomène critique doit-on surveiller lors du choix de la période d'échantillonnage $T_e$ ?

**Corrigé type attendu :**
* **Avantage :** Flexibilité de modification des lois de commande par simple mise à jour logicielle, insensibilité aux dérives analogiques (vieillissement des composants, température).
* **Inconvénient :** Introduction d'un retard pur numérique (temps de calcul, échantillonnage/blocage) qui grignote la marge de phase.
* **Phénomène critique :** Le respect du **théorème de Shannon** et la garantie que la fréquence d'échantillonnage $f_e = \frac{1}{T_e}$ est au moins 10 à 20 fois supérieure à la bande passante du système en boucle fermée pour éviter les pertes d'information et l'amplification du bruit de mesure.