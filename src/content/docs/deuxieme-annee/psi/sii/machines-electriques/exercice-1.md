---
title: 'Exercice 1 : Machine à courant continu'
description: 'Problème d entraînement type concours officiel.'
---

# PROBLÈME GUIDÉ : Étude d'un actionneur à Machine à Courant Continu (MCC) pour axe asservi

**Filière :** PSI  
**Matière :** Sciences Industrielles de l'Ingénieur (SII)  
Chapitre: ** Conversion électromécanique  
**Thème :** Machine à courant continu et critique des modèles  

---

## 1. Énoncé

Dans le cadre de la conception d'un système de positionnement industriel de haute précision (type axe $X$ d'une machine-outil), on s'intéresse à l'actionneur principal constitué d'une machine à courant continu (MCC) à aimants permanents. 

L'induit de la machine est alimenté par un hacheur à quatre quadrants fonctionnant à la fréquence de découpage $f_d$. Le rotor entraîne une charge via un réducteur mécanique parfait de rapport de réduction $k = \frac{\Omega_c}{\omega} = \frac{1}{10}$ (où $\omega$ est la vitesse de rotation du moteur et $\Omega_c$ celle de la charge).

L'objectif du problème est de modéliser le comportement électromécanique de l'ensemble, d'évaluer ses performances en régime permanent et transitoire, puis d'analyser de manière critique les limites du modèle linéaire usuel face aux réalités physiques industrielles.

### Données constructeur et caractéristiques :
* Résistance de l'induit : $R = 1,2\ \Omega$
* Inductance de l'induit : $L = 5\ \text{mH}$
* Constante de force contre-électromotrice (et de couple) : $K = 0,25\ \text{V}\cdot\text{s}\cdot\text{rad}^{-1}$ (ou $\text{N}\cdot\text{m}\cdot\text{A}^{-1}$)
* Moment d'inertie propre du rotor : $J_m = 2 \times 10^{-3}\ \text{kg}\cdot\text{m}^2$
* Moment d'inertie de la charge rapporté sur l'arbre moteur : $J_c = 3 \times 10^{-3}\ \text{kg}\cdot\text{m}^2$
* Coefficient de frottement visqueux total ramené sur l'arbre moteur : $f = 10^{-3}\ \text{N}\cdot\text{m}\cdot\text{rad}^{-1}\cdot\text{s}$
* Tension nominale d'induit : $U_n = 48\ \text{V}$

---

## 2. Questions

### Partie A : Modélisation et régime permanent
1. Établir les équations électriques et mécaniques de la MCC dans le cadre du modèle linéaire de kenntelly-Blondel.
2. Exprimer la vitesse de rotation $\omega$ en fonction de la tension d'induit $U$, du courant $I$ et des paramètres de la machine. En déduire l'expression de la vitesse à vide $\omega_0$ pour une tension $U_n$.
3. Calculer le courant absorbé $I_n$ et le couple électromagnétique $C_em$ de la machine lorsqu'elle délivre son couple nominal $C_{n} = 1\ \text{N}\cdot\text{m}}$ en régime permanent.

### Partie B : Étude dynamique et fonction de transfert
4. Établir l'équation différentielle reliant la vitesse $\omega(t)$ à la tension d'induit $U(t)$ et au couple résistant $C_r(t)$.
5. Mettre cette équation sous forme canonique et identifier la constante de temps électrique $\tau_e$ et la constante de temps mécanique $\tau_m$. Conclure quant à l'hypothèse usuelle de simplification (négligeabilité de $L$).

### Partie C : Analyse critique des limites du modèle (Attendu Concours)
6. **Analyse critique :** Le modèle linéaire utilisé néglige plusieurs phénomènes physiques réels (saturation magnétique, réaction d'induit, pertes fer, seuil de tension des balais). Discuter qualitativement et quantitativement de l'impact de la saturation magnétique et de la résistance des balais sur la linéarité de la constante $K$ et sur le rendement global de l'actionneur.

---

## 3. Pistes et Indications

* **Q1 & Q2 :** Pensez à la loi des mailles pour l'induit et au théorème du moment dynamique appliqué au rotor.
* **Q4 & Q5 :** Réalisez la transformée de Laplace des équations (conditions initiales nulles) pour obtenir le bloc diagramme ou la fonction de transfert $H(p) = \frac{\Omega(p)}{U(p)}$ à couple résistant nul.
* **Q6 :** Pour la critique, pensez à l'évolution de la courbe $B(H)$ du fer et à la chute de tension aux bornes des balais en carbone (souvent estimée constante autour de $2\text{ V}$).

---

## 4. Corrigé pas à pas

### Partie A : Modélisation et régime permanent

**1. Équations du modèle :**
* Électrique (loi des mailles) : 
  $$U(t) = R \cdot i(t) + L \frac{di(t)}{dt} + e(t)$$
  Avec $e(t) = K \cdot \omega(t)$ (force contre-électromotrice).
* Mécanique (Théorème du moment dynamique sur l'arbre moteur) :
  $$C_{em}(t) - C_r(t) - f \cdot \omega(t) = J_{eq} \frac{d\omega(t)}{dt}$$
  Avec $C_{em}(t) = K \cdot i(t)$ et $J_{eq} = J_m + J_c = 5 \times 10^{-3}\ \text{kg}\cdot\text{m}^2$.

**2. Vitesse à vide :**
En régime permanent, les dérivées sont nulles et le couple résistant est nul ($C_r = 0 \implies I = 0$).
$$U = E = K \cdot \omega_0 \implies \omega_0 = \frac{U_n}{K}$$
A.N. : $\omega_0 = \frac{48}{0,25} = 192\ \text{rad}\cdot\text{s}^{-1}$.

**3. Courant et couple nominal :**
En régime permanent sous couple nominal $C_n = 1\ \text{N}\cdot\text{m}$ :
$$C_{em} = K \cdot I_n = C_n \implies I_n = \frac{C_n}{K} = \frac{1}{0,25} = 4\ \text{A}$$
La tension d'induit étant $U_n$ :
$$U_n = R \cdot I_n + K \cdot \omega_n + f \cdot \omega_n \implies \omega_n = \frac{U_n - R \cdot I_n}{K + f} \approx \frac{U_n - R \cdot I_n}{K}$$
A.N. : $\omega_n = \frac{48 - 1,2 \times 4}{0,25} = \frac{43,2}{0,25} = 172,8\ \text{rad}\cdot\text{s}^{-1}$.

---

### Partie B : Étude dynamique et fonction de transfert

**4. & 5. Équations et constantes de temps :**
En passant dans le domaine de Laplace (conditions initiales nulles) :
$$\begin{cases} U(p) = (R + L p)I(p) + K\Omega(p) \\ K I(p) = (J_{eq} p + f)\Omega(p) + C_r(p) \end{cases}$$

En éliminant $I(p)$ :
$$U(p) = (R + L p)\frac{(J_{eq} p + f)\Omega(p) + C_r(p)}{K} + K\Omega(p)$$

Si l'on considère $C_r(p) = 0$ :
$$\frac{\Omega(p)}{U(p)} = \frac{K}{(R + L p)(J_{eq} p + f) + K^2} = \frac{K}{LJ_{eq} p^2 + (RJ_{eq} + Lf) p + (Rf + K^2)}$$

* **Constante de temps électrique :** $\tau_e = \frac{L}{R} = \frac{5 \times 10^{-3}}{1,2} \approx 4,17\ \text{ms}$
* **Constante de temps mécanique :** $\tau_m = \frac{R \cdot J_{eq}}{Rf + K^2} \approx \frac{R \cdot J_{eq}}{K^2}$ (car $Rf \ll K^2$)  
  A.N. : $\tau_m = \frac{1,2 \times 5 \times 10^{-3}}{0,25^2} = \frac{6 \times 10^{-3}}{0,0625} = 0,096\ \text{s} = 96\ \text{ms}$.
Conclusion: ** On constate que $\tau_m$ ($96\ \text{ms}$) est environ 23 fois plus grande que $\tau_e$ ($4,17\ \text{ms}$). Dans le cadre d'une étude de commande ou d'asservissement en position, il est donc classique et rigoureux de négliger la dynamique électrique ($L \approx 0$), ce qui simplifie la fonction de transfert du moteur en un système du **premier ordre**.

---

### Partie C : Analyse critique des limites du modèle (Attendu Concours)

Le modèle linéaire étudié repose sur des hypothèses fortes qui s'avèrent limitées en conditions industrielles sévères :

1. **La saturation magnétique :**  
   Le modèle suppose que le flux magnétique $\Phi$ produit par les aimants (ou l'inducteur) est constant, ce qui implique $K = \text{cte}$. Or, pour des fortes valeurs du courant d'induit $I$ (lors des phases d'accélération maximale), le champ magnétique induit par l'induit (réaction d'induit) peut saturer le circuit magnétique. Il en résulte une **diminution effective de la constante $K$**. Le couple réel fourni devient alors inférieur à celui prédit par le modèle linéaire ($C_{em} < K \cdot I$), nécessitant une surintensité transitoire non anticipée par le modèle idéal.

2. **La chute de tension aux balais :**  
   Le contact glissant entre les balais en charbon et le collecteur engendre une chute de tension de contact quasi-constante (souvent évaluée à $\Delta U_b \approx 2\text{ V}$ pour l'ensemble des balais), peu dépendant du courant. L'équation de maille réelle est donc :
   $$U = R \cdot I + E + \Delta U_b$$
   Négliger $\Delta U_b$ conduit à surestimer la vitesse réelle $\omega$ de la machine, particulièrement sensible à faible charge ou en régime établi à vide partiel.

3. **Pertes Joule et rendement :**  
   Les pertes par effet Joule ($R \cdot I^2$) augmentent rapidement avec la charge. Couplées aux pertes fer (hystérésis et courants de Foucault proportionnels à $\omega^2$ et $\omega^{1.6}$) et aux pertes mécaniques, le rendement réel de l'actionneur chute drastiquement loin du point nominal, induisant un échauffement thermique critique non modélisé ici par un schéma équivalent de type Cauer (thermique).