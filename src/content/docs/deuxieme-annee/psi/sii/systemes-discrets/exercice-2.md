---
title: 'Exercice 2 : Correcteurs PID numériques'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Commande numérique d'un axe de positionnement haute précision

## Énoncé

On s'intéresse à l'axe de commande en position d'un chariot motorisé utilisé dans un système de fabrication additive par dépôt de fil fondu. Le cahier des charges impose une précision statique nulle, un temps de réponse à $5\%$ inférieur à $0,1\text{ s}$ et un dépassement maximal toléré de $5\%$ pour un échelon de consigne.

Le moteur à courant continu et sa chaîne cinématique sont modélisés par la fonction de transfert en boucle ouverte continue suivante (après simplification dans la bande passante utile) :

$$H(p) = \frac{\Omega(p)}{U(p)} = \frac{K}{p(1 + \tau p)}$$

Avec :
* $K = 20\text{ rad}\cdot\text{s}^{-1}\cdot\text{V}^{-1}$ (gain global du système)
* $\tau = 0,02\text{ s}$ (constante de temps électromécanique)
* $u(t)$ : tension de commande (en $\text{V}$)
* $\Omega(t)$ : vitesse de rotation de l'arbre moteur (en $\text{rad}\cdot\text{s}^{-1}$)

La position angulaire $\theta(t)$ est obtenue par intégration de la vitesse : $\Theta(p) = \frac{1}{p}\Omega(p)$.

Afin d'implanter la loi de commande sur un microcontrôleur cadencé à la période d'échantillonnage $T_e$, on souhaite synthétiser un correcteur PID numérique.

---

## Questions

### Partie I : Modélisation continue et analyse du système
1. Déterminer la fonction de transfert en boucle ouverte globale $H_{BO}(p) = \frac{\Theta(p)}{E(p)}$ (où $E(p)$ est l'écart entre la consigne de position et la position mesurée).
2. Préciser la classe et l'unicité de la perturbation ou de l'entrée pour laquelle l'erreur statique est nulle. Conclure sur la nécessité d'ajouter ou non une action intégratrice.

### Partie II : Discrétisation du correcteur PID
On choisit une structure de correcteur PID analogique de la forme :
$$C(p) = K_p \left(1 + \frac{1}{T_i p} + T_d p\right)$$
Pour l'implantation numérique, on utilise la méthode d'Euler explicite (approximation des différences en arrière pour la dérivation et en avant pour l'intégration, ou formulation aux différences finies équivalente) avec une période d'échantillonnage $T_e = 0,005\text{ s}$.
3. Rappeler la transformation en $z$ associée à un retard pur (ou décalage temporel) et exprimer l'intégrateur et le dérivateur sous forme de fonctions de transfert en $z$.
4. En déduire l'expression de la fonction de transfert discrète du correcteur $C(z) = \frac{U(z)}{E(z)}$ en fonction des paramètres $K_p$, $T_i$, $T_d$ et $T_e$.

### Partie III : Synthèse et analyse critique
5. Écrire l'équation de récurrence (algorithme de commande) exploitable directement par le microcontrôleur sous la forme $u[k] = f(e[k], e[k-1], e[k-2], u[k-1])$.
6. **Analyse critique et limites du modèle :** Expliquer pourquoi un dérivé pur implémenté numériquement pose un problème majeur face aux bruits de mesure haute fréquence. Proposer une modification classique de la structure du correcteur pour y remédier.

---

## Pistes et indications

* **Q1 & Q2 :** Pensez à relier $\Theta(p)$ à $U(p)$ via $H(p)$ et l'intégrateur pur $1/p$. Le système de base est de type 1.
* **Q3 :** Pour la dérivation $p \approx \frac{1 - z^{-1}}{T_e}$ et pour l'intégration $\frac{1}{p} \approx \frac{T_e}{1 - z^{-1}}$ (Euler arrière).
* **Q6 :** Pensez à l'amplification du bruit de quantification et de mesure par le terme en $z^{-1} - 1$ à haute fréquence.

---

## Corrigé pas à pas

### Partie I : Modélisation continue et analyse du système

1. **Fonction de transfert en boucle ouverte globale :**
   La relation entre la tension $U(p)$ et la position $\Theta(p)$ est :
   $$\Theta(p) = \frac{1}{p} \cdot H(p) \cdot U(p) = \frac{K}{p^2(1 + \tau p)} U(p)$$
   La fonction de transfert en boucle ouverte globale (avec un retour unitaire) est donc :
   $$H_{BO}(p) = \frac{\Theta(p)}{E(p)} = \frac{K}{p^2(1 + \tau p)}$$

2. **Classe et erreur statique :**
   Le système est de classe 2 (présence d'un terme en $p^2$ au dénominateur). 
   * Pour une entrée en échelon de position, l'erreur statique est nulle.
   * Pour une entrée en rampe (vitesse constante), l'erreur statique est également nulle.
   
   Cependant, pour maîtriser les dynamiques (temps de réponse et dépassement) imposées par le cahier des charges, un réglage fin par un correcteur PID reste nécessaire.

---

### Partie II : Discrétisation du correcteur PID

3. **Transformées en $z$ élémentaires :**
   En utilisant la méthode d'Euler (différences en arrière pour le calcul numérique causal) :
   * Opérateur dérivateur ($p$) : $p \longleftrightarrow \frac{1 - z^{-1}}{T_e}$
   * Opérateur intégrateur ($\frac{1}{p}$) : $\frac{1}{p} \longleftrightarrow \frac{T_e}{1 - z^{-1}}$

4. **Fonction de transfert discrète du PID :**
   En remplaçant $p$ par son expression approchée dans $C(p) = K_p + \frac{K_p}{T_i p} + K_p T_d p$ :
   $$C(z) = K_p \left[ 1 + \frac{T_e}{T_i (1 - z^{-1})} + \frac{T_d (1 - z^{-1})}{T_e} \right]$$
   
   En mettant au même dénominateur $1 - z^{-1}$ :
   $$C(z) = \frac{b_0 + b_1 z^{-1} + b_2 z^{-2}}{1 - z^{-1}}$$
   
   Avec par identification :
   * $b_0 = K_p \left(1 + \frac{T_e}{T_i} + \frac{T_d}{T_e}\right)$
   * $b_1 = -K_p \left(1 + \frac{2T_d}{T_e}\right)$
   * $b_2 = K_p \frac{T_d}{T_e}$

---

### Partie III : Synthèse et analyse critique

5. **Algorithme de commande (Équation de récurrence) :**
   Partant de $C(z) = \frac{U(z)}{E(z)} = \frac{b_0 + b_1 z^{-1} + b_2 z^{-2}}{1 - z^{-1}}$, on passe dans le domaine temporel discret :
   $$U(z)(1 - z^{-1}) = E(z)(b_0 + b_1 z^{-1} + b_2 z^{-2})$$
   Soit l'équation aux différences :
   $$u[k] - u[k-1] = b_0 e[k] + b_1 e[k-1] + b_2 e[k-2]$$
   Ce qui donne l'algorithme implémenté dans le microcontrôleur :
   $$u[k] = u[k-1] + b_0 e[k] + b_1 e[k-1] + b_2 e[k-2]$$

6. **Analyse critique et limites du modèle :**
   * **Problème du dérivateur pur numérisé :** Le terme $(1 - z^{-1})$ au numérateur agit comme un filtre passe-haut sur le signal d'erreur (ou de mesure). En présence de bruits de mesure haute fréquence (bruit de quantification du codeur incrémental, bruits électromagnétiques), ces variations rapides sont multipliées par $1/T_e$ (qui est grand car $T_e = 0,005\text{ s}$), ce qui entraîne une saturation de la commande $u[k]$ et une usure prématurée de l'actionneur.
   * **Solution technologique :** On associe systématiquement au terme dérivé un filtre passe-bas du premier ordre (dérivée filtrée), conduisant à un correcteur de la forme :
     $$C_{filtre}(p) = K_p \left(1 + \frac{1}{T_i p} + \frac{T_d p}{1 + T_f p}\right)$$
     avec $T_f \ll T_d$ (souvent $T_f \approx \frac{T_d}{10}$).