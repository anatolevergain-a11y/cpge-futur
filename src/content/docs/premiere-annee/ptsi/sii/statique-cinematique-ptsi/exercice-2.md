---
title: 'Exercice 2 : Engrenages et roulement sans glissement'
description: 'Problème d entraînement type concours.'
---

# Problème GUIDÉ : Étude d'un réducteur à engrenages et contact avec roulement sans glissement

---

## Préambule et Objectifs

Cet énoncé est structuré comme un problème de concours de Sciences Industrielles de l'Ingénieur (filière PTSI). L'objectif est d'étudier les performances d'un mécanisme de transmission de puissance associant un réducteur à engrenages droits et un système de roulement sans glissement sur un plan.

**Compétences évaluées :**
* Modélisation cinématique des liaisons et des mécanismes (engrenages, roulement sans glissement).
* Application du Principe Fundamental de la Statique (PFS) pour la détermination des efforts transmissibles.
* Analyse critique des résultats (rendement, conditions de non-glissement).

---

## 1. Description du système

Le système étudié est un mécanisme de propulsion miniature. Il est composé de :
* **Un bâti (0)**, galérien fixe.
* **Un pignon d'entrée (1)**, lié à un arbre moteur tournant à la vitesse angulaire $\Omega_{1/0} = \dot{\theta}_1$. Le pignon a un rayon primitif $R_1$ et comporte $Z_1$ dents.
* **Une roue intermédiaire (2)**, de rayon primitif $R_2$ et de nombre de dents $Z_2$, mobile en rotation autour d'un axe fixe par rapport à 0. (Note : cet engrenage est extérieur).
* **Une roue motrice (3)**, liée à un tambour de rayon $R$, en contact direct par roulement sans glissement avec un plan horizontal $(O, \vec{x}, \vec{y})$.

La liaison entre le pignon (1) et la roue (2) est un engrenage droit à crémaillère ou à denture externe (on considère ici un engrenage extérieur standard).

---

## 2. Étude Cinématique

### Question 2.1 : Relation entre les vitesses de rotation des engrenages
On note $\vec{V}(I, 1/0)$ et $\partial$ le point de contact géométrique entre les dents du pignon (1) et de la roue (2). En traduisant la condition de roulement sans glissement au point de contact $I$ entre les deux flancs de dents (absence de vitesse de glissement tangentiel), exprimer le rapport de réduction cinématique $k = \frac{\Omega_{3/0}}{\Omega_{1/0}}$ en fonction des rayons $R_1, R_2$ et du rayon $R_3$ de la roue (3).

#### Correction pas à pas :
1. **Condition d'engrènement :** Au point de contact $I$ entre (1) et (2), la vitesse du point $I$ appartenant au solide (1) par rapport à (0) est égale à la vitesse du point $I$ appartenant au solide (2) par rapport à (0) :
   $$\vec{V}(I, 1/0) = \vec{V}(I, 2/0)$$
2. **Expression vectorielle :** En projetant sur l'axe tangentiel au cercle primitif, on obtient l'égalité des vitesses scalaires modulaires :
   $$R_1 \cdot \Omega_{1/0} = - R_2 \cdot \Omega_{2/0}$$
   *(Le signe moins traduit l'inversion du sens de rotation pour un engrenage extérieur).*
3. **Généralisation au train de roulement :** La roue (3) est solidaire de l'arbre portant la roue (2) ou directement engrenée. On pose l'hypothèse d'un réducteur tel que $\Omega_{3/0} = k' \cdot \Omega_{2/0}$.
4. **Conclusion :** Le rapport global s'exprime par :
   $$k = \frac{\Omega_{3/0}}{\Omega_{1/0}} = (-1)^{n} \frac{Z_1}{Z_3} = -\frac{R_1}{R_3}$$
   *(Application numérique type : si $R_1 = 20\text{ mm}$ et $R_3 = 80\text{ mm}$, $k = -0{,}25$.)*

---

### Question 2.2 : Condition de roulement sans glissement sur le sol
La roue (3) de rayon $R$ roule sans glisser sur un plan horizontal en un point de contact $C$. Écrire la condition cinématique traduisant le roulement sans glissement (RSG) au point $C$ entre la roue (3) et le plan horizontal (0).

#### Correction pas à pas :
1. Par définition, le roulement sans glissement implique que le vecteur vitesse du point de contact $C$ de la roue (3) par rapport au plan (0) est nul :
   $$\vec{V}(C, 3/0) = \vec{0}$$
2. En utilisant le champ des vitesses du solide (3) en rotation par rapport à (0) de centre d'axe $\Omega_{3/0}$ :
   $$\vec{V}(C, 3/0) = \vec{V}(O_3, 3/0) + \vec{\Omega}_{3/0} \wedge \vec{O_3 C} = \vec{0}$$
3. En notant $V = \|\vec{V}(O_3, 3/0)\|$ la vitesse d'avancement du centre de la roue et $\Omega_{3/0}$ la vitesse de rotation, la condition scalaire de RSG s'écrit :
   $$V + \Omega_{3/0} \cdot R = 0 \implies V = -R \cdot \Omega_{3/0}$$

---

## 3. Étude Statique (Détermination des efforts)

On suppose le mécanisme en régime permanent (accélération nulle). Un couple moteur $\vec{C}_m = C_m \vec{z}$ est appliqué sur l'arbre (1). On cherche à déterminer l'effort de propulsion transmissible au niveau du sol en $C$.

### Question 3.1 : Bilan des actions mécaniques sur l'ensemble \{1 + 2 + 3\}
Isoler l'ensemble mobile $\Sigma = \{1, 2, 3\}$. Écrire le Théorème du Moment Statique (TMS) appliqué à $\Sigma$ au point $O_3$ (centre de la roue motrice), en projection sur l'axe $\vec{z}$.

#### Correction pas à pas :
1. **Recensement des actions extérieures à $\Sigma$ :**
   * Action du bâti (0) sur l'arbre (1) : couple moteur $\vec{C}_m = C_m \vec{z}$ (et liaisons pivot).
   * Action du plan (0) sur la roue (3) au point $C$ : $\vec{R}_{0 \to 3} = N \vec{y} + T \vec{x}$ (où $N$ est la réaction normale et $T$ l'effort tangentiel).
   * Action de la pesanteur (négligée devant les efforts transmis).
2. **Application du TMS en $O_3$ sur l'axe $\vec{z}$ :**
   $$\sum \mathcal{M}_{O_3}(\text{Ext} \to \Sigma) \cdot \vec{z} = 0$$
   * Moment du couple moteur rapporté à l'arbre 3 via le rapport de transmission : $C_m \cdot \left(\frac{\Omega_{1/0}}{\Omega_{3/0}}\right) = \frac{C_m}{k}$ (en considérant un rendement parfait pour l'instant).
   * Plus rigoureusement, par application du théorème de l'énergie puissance (ou rendement $\eta = 1$) :
     $$P_{\text{moteur}} + P_{\text{sol}} = 0 \implies C_m \cdot \Omega_{1/0} + T \cdot V = 0$$
3. En remplaçant $V$ par $-R \Omega_{3/0}$ et sachant que $\Omega_{3/0} = k \cdot \Omega_{1/0}$ :
   $$C_m \cdot \Omega_{1/0} + T \cdot (-R \cdot k \cdot \Omega_{1/0}) = 0$$
   $$T = \frac{C_m}{R \cdot k}$$ *(en valeur algébrique, selon l'orientation).*

---

### Question 3.2 : Condition limite de non-glissement
Rappeler la loi de Coulomb régissant le contact frottant au point $C$ entre la roue (3) et le plan (0). En déduire la condition maximale sur le couple moteur $C_m$ pour que le roulement sans glissement soit effectif.

#### Correction pas à pas :
1. **Loi de Coulomb :** Au point de contact $C$, le rapport de l'effort tangentiel $T$ sur l'effort normal $N$ doit être inférieur ou égal au coefficient de frottement statique $f$ :
   $$|T| \le f \cdot |N|$$
2. **Détermination de $N$ :** Par application du PFD/PFS en projection sur $\vec{y}$ pour l'ensemble $\Sigma$ (en négligeant le poids) :
   $$N = P_{\text{total}} \approx 0 \quad (\text{ou égal au poids } Mg \text{ si la masse est prise en compte}).$$
   *Supposons une charge verticale totale $W$ appliquée sur le centre du système : $N = W$.*
3. **Condition sur le couple moteur :**
   $$\left|\frac{C_m}{R \cdot k}\right| \le f \cdot W$$
   $$|C_m| \le f \cdot W \cdot R \cdot |k|$$
4. **Interprétation :** Si le couple moteur dépasse cette limite, $|T| > f \cdot W$, la condition de roulement sans glissement n'est plus respectée : **la roue patine**.

---

## 4. Analyse critique des résultats

Cette dernière partie consiste à analyser l'impact des hypothèses simplificatrices et les limites physiques du modèle.

### Question 4.1 : Influence du rendement des engrenages
Dans la réalité, les engrenages possèdent un rendement $\eta < 1$ (généralement compris entre $0{,}90$ et $0{,}98$ par étage en raison des frottements aux flancs des dents). 

1. *Comment l'expression de l'effort tangentiel $T$ est-elle modifiée ?*
   * **Correction :** Le puissance utile transmise au sol est diminuée des pertes par frottement dans l'engrenage. L'équation de conservation de la puissance devient :
     $$\eta \cdot C_m \cdot \Omega_{1/0} + T \cdot V = 0$$
     L'effort tangentiel disponible $T$ est donc réduit :
     $$T = \eta \cdot \frac{C_m}{R \cdot |k|}$$

2. *Qu'en est-il de la susceptibilité au patinage ?*
   * **Correction :** Puisque l'effort tangentiel $T$ effectif est réduit d'un facteur $\eta$, le risque de patinage (exigé par $|T| \le f \cdot N$) est paradoxalement **légèrement diminué** pour un même couple moteur nominal $C_m$. Cependant, pour obtenir la même performance de traction, il faut fournir un couple moteur supérieur, ce qui augmente les pertes thermiques.

### Question 4.2 : Limites du modèle de contact ponctuel rigide
Le modèle cinématique suppose un contact ponctuel (ou linéique) entre des solides rigides. 
* Citez deux phénomènes physiques réels non pris en compte qui modifient la zone de contact et la cinématique :
  1. **Le déformation élastique locale (Hertz) :** Le contact s'établit sur une surface (et non un point géométrique), ce qui engendre un phénomène d'hystérésis élastique à l'origine d'une résistance au roulement (couple résistant $C_r$).
  2. **Le micro-glissement (glissement élastique) :** Au sein même de la surface de contact sous charge, les zones avant et arrière subissent des micro-allongements et des micro-retractions élastiques (phénomène de *creep* ou glissement microscopique), rendant le "roulement sans glissement" parfait impossible en pratique (le glissement réel est de l'ordre de $0{,}1\%$ à $1\%$).