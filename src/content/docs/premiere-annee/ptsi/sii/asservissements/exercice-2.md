---
title: 'Exercice 2 : Fonctions de transfert'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Étude d'un axe asservi de position pour machine-outil (Filière PTSI - SII)

## Énoncé et contexte industriel

Dans le cadre de l'usinage à grande vitesse (UGV), on s'intéresse à l'axe longitudinal d'un chariot porte-pièce d'une fraiseuse numérique. L'objectif de cette étude est de valider les performances dynamiques de l'axe asservi en position, afin de garantir le respect du cahier des charges en termes de précision et de rapidité d'exécution.

Le système est constitué des éléments suivants :
1. **Un convertisseur / variateur de vitesse** qui délivre une tension image de la vitesse au moteur.
2. **Un moteur à courant continu (MCC)** à aimants permanents.
3. **Un réducteur mécanique** de rapport $k = \frac{1}{10}$.
4. **Un système vis-écrou** transformant le mouvement de rotation en mouvement de translation (pas de la vis $p = 5\text{ mm}$).
5. **Un capteur de position incrémental** placé sur l'arbre moteur, délivrant une tension $u_c(t)$ image de la position linéaire $x(t)$ de la table.

---

## Données constructeur et paramètres du modèle

* Résistance d'induit du MCC : $R = 1,2\ \Omega$
* Inductance d'induit : $L$ (considérée comme négligeable devant les effets mécaniques dans un premier temps)
* Constante de couple et de force contre-électromotrice : $K = 0,25\text{ N}\cdot\text{m}\cdot\text{A}^{-1}$ (ou $\text{V}\cdot\text{s}\cdot\text{rad}^{-1}$)
* Moment d'inertie équivalent rapporté sur l'arbre moteur : $J = 2 \times 10^{-3}\text{ kg}\cdot\text{m}^2$
* Coefficient de frottement visqueux équivalent rapporté sur l'arbre moteur : $f = 10^{-3}\text{ N}\cdot\text{m}\cdot\text{rad}^{-1}\cdot\text{s}$
* Gain du capteur de position : $K_c = 10\text{ V}\cdot\text{m}^{-1}$
* Gain de l'adaptateur de consigne : $K_0 = 1$

---

## Questions

### Partie I : Modélisation des constituants élémentaires
1. Étabrire les équations électriques et mécaniques du moteur à courant continu dans le domaine de Laplace (conditions initiales nulles). En déduire la fonction de transfert en boucle ouverte du moteur $H_m(p) = \frac{\Omega(p)}{U_m(p)}$, où $\Omega(p)$ est la vitesse de rotation de l'arbre moteur et $U_m(p)$ la tension d'induit.
2. Mettre sous forme canonique la fonction de transfert $H_m(p)$ en faisant apparaître un gain $K_m$ et une constante de temps mécanique $\tau_m$. Calculer numériquement ces deux grandeurs et donner leurs unités.
3. Établir la relation cinématique entre la vitesse de rotation du moteur $\Omega(p)$ et la vitesse linéaire du chariot $V(p) = p\cdot X(p)$ (où $X(p)$ est la position de la table). En déduire la fonction de transfert $H_c(p) = \frac{X(p)}{\Omega(p)}$.

### Partie II : Structuration et mise sous forme canonique de la chaîne ouverte
4. Le système est asservi en position au moyen d'un comparateur et d'un bloc de commande proportionnel de gain $K_p$. Dessiner le schéma-blocs global du système bouclé.
5. Déterminer l'expression de la fonction de transfert en boucle ouverte (FTBO) notée $FTBO(p) = \frac{U_c(p)}{E(p)}$, où $E(p)$ est l'erreur d'asservissement en tension.

### Partie III : Analyse critique et limites du modèle
6. Discuter de l'hypothèse de négligeabilité de l'inductance $L$. Quel ordre de grandeur de fréquence met en défaut cette hypothèse simplificatrice ?

---

## Pistes de résolution

* **Q1 & Q2 :** Pensez aux lois fondamentales de l'électrotechnique ($U = E + RI$, $E = K\Omega$, $C_m = KI$) et au PFD en rotation ($J\dot{\Omega} = C_m - f\Omega - C_r$).
* **Q3 :** Attention au réducteur de rapport $k$ et au pas $p$ de la vis. Veillez à bien homogénéiser les unités (rad/s vers m/s).
* **Q5 :** Le produit des fonctions de transfert de la chaîne directe (variateur, moteur, réducteur/vis, capteur) donne la FTBO.

---

## Corrigé détaillé pas à pas

### Partie I : Modélisation des constituants élémentaires

1. **Équations du MCC dans le domaine de Laplace :**
   * Équation électrique : $U_m(p) = E(p) + R \cdot I(p)$ (en négligeant $Lp$).
   * Force contre-électromotrice : $E(p) = K \cdot \Omega(p)$.
   * Couple moteur : $C_m(p) = K \cdot I(p)$.
   * PFD en rotation (en négligeant le couple de perturbation extérieur) : $Jp \cdot \Omega(p) = C_m(p) - f \cdot \Omega(p)$.

   En combinant ces équations :
   $$I(p) = \frac{U_m(p) - K\Omega(p)}{R}$$
   $$Jp \cdot \Omega(p) = K \left( \frac{U_m(p) - K\Omega(p)}{R} \right) - f \cdot \Omega(p) \implies \left( Jp + f + \frac{K^2}{R} \right) \Omega(p) = \frac{K}{R} U_m(p)$$
   
   On en déduit :
   $$H_m(p) = \frac{\Omega(p)}{U_m(p)} = \frac{\frac{K}{R}}{Jp + f + \frac{K^2}{R}}$$

2. **Mise sous forme canonique :**
   $$H_m(p) = \frac{\frac{K}{Rf + K^2}}{1 + \frac{JR}{Rf + K^2}p} = \frac{K_m}{1 + \tau_m p}$$

   * **A.N. pour le gain $K_m$ :**
     $$Rf = 1,2 \times 10^{-3} = 1,2 \times 10^{-3}\text{ V}\cdot\text{s}\cdot\text{rad}^{-1}$$
     $$K^2 = (0,25)^2 = 0,0625\text{ N}\cdot\text{m}\cdot\text{A}^{-1}$$
     $$K_m = \frac{0,25}{1,2 \times 10^{-3} + 0,0625} = \frac{0,25}{0,0637} \approx 3,92\text{ rad}\cdot\text{s}^{-1}\cdot\text{V}^{-1}$$

   * **A.N. pour la constante de temps $\tau_m$ :**
     $$\tau_m = \frac{2 \times 10^{-3} \times 1,2}{0,0637} = \frac{2,4 \times 10^{-3}}{0,0637} \approx 0,0377\text{ s}$$

3. **Relation cinématique :**
   La vitesse de rotation de la vis est $\Omega_v(p) = k \cdot \Omega(p)$.
   La vitesse linéaire du chariot est liée à $\Omega_v(p)$ par le pas $p$ (attention à ne pas confondre le symbole du pas $p$ de la vis et la variable de Laplace $p$) :
   $$V(p) = \frac{p_{as}}{2\pi} \cdot \Omega_v(p) = \frac{p_{as} \cdot k}{2\pi} \cdot \Omega(p)$$
   Comme $X(p) = \frac{V(p)}{p_{laplace}}$ (où $p_{laplace}$ est la variable de Laplace), on a :
   $$H_c(p) = \frac{X(p)}{\Omega(p)} = \frac{p_{as} \cdot k}{2\pi \cdot p_{laplace}}$$
   *A.N. : $p_{as} = 5\text{ mm} = 5 \times 10^{-3}\text{ m}$, $k = 0,1$.*
   $$H_c(p) = \frac{5 \times 10^{-3} \times 0,1}{2\pi \cdot p} = \frac{7,96 \times 10^{-5}}{p}\text{ m}\cdot\text{rad}^{-1}\cdot\text{s}$$

---

### Partie II : Structuration et mise sous forme canonique de la chaîne ouverte

4. **Schéma-blocs :**
   Le schéma met en cascade :
   * Le comparateur : $E(p) = U_{consigne}(p) - U_c(p)$
   * Le correcteur proportionnel : $K_p$
   * Le variateur / MCC : $H_m(p)$
   * La chaîne cinématique : $H_c(p)$
   * Le capteur : $K_c$

5. **Fonction de transfert en boucle ouverte (FTBO) :**
   $$\text{FTBO}(p) = \frac{U_c(p)}{E(p)} = K_p \cdot H_m(p) \cdot H_c(p) \cdot K_c$$
   $$\text{FTBO}(p) = K_p \cdot \left( \frac{K_m}{1 + \tau_m p} \right) \cdot \left( \frac{p_{as} \cdot k}{2\pi \cdot p} \right) \cdot K_c$$
   $$\text{FTBO}(p) = \frac{K_{tot}}{p(1 + \tau_m p)}$$
   Avec $K_{tot} = K_p \cdot K_m \cdot \frac{p_{as} \cdot k}{2\pi} \cdot K_c$.

---

### Partie III : Analyse critique et limites du modèle

6. **Discussion sur l'inductance $L$ :**
   * **Justification physique :** L'oubli de l'terme $Lp$ dans l'équation électrique revient à supposer que le pôle électrique associé ($\tau_e = \frac{L}{R}$) est très petit devant le pôle mécanique ($\tau_m$).
   * **Ordre de grandeur réaliste :** Pour un moteur de cette taille, $L$ est typiquement de l'ordre de quelques mH (ex: $L = 2\text{ mH}$). La constante de temps électrique vaut alors $\tau_e = \frac{2 \times 10^{-3}}{1,2} \approx 1,67\text{ ms}$.
   * **Limite du modèle :** On a $\tau_e \approx 1,67\text{ ms}$ et $\tau_m \approx 37,7\text{ ms}$. Le rapport $\frac{\tau_e}{\tau_m} \approx 0,044$, ce qui valide en première approximation l'hypothèse (les dynamiques électriques sont 20 fois plus rapides que les dynamiques mécaniques). Cependant, pour l'étude des régimes très transitoires (haute fréquence au-delà de $\frac{1}{2\pi \tau_e} \approx 95\text{ Hz}$), le modèle du premier ordre mécanique pur est mis en défaut et il conviendrait d'utiliser un modèle du second ordre tenant compte de l'inductance.