---
title: 'Exercice 1 : Interférences lumineuses'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Étude interférométrique et application à la mesure du taux d'humidité foliaire (Biophysique végétale)

**Filière :** BCPST  
**Matière :** Physique-Chimie  
Chapitre: ** Physique des ondes — Interférences lumineuses  
**Thème :** Dispositif d'interférences à division du front d'onde (fentes d'Young) et capteur optique biologique.

---

## 1. Contexte et Problématique biologique

Chez certaines espèces végétales hygrophiles, la face inférieure des feuilles présente des stomates (pores régulateurs des échanges gazeux et de la transpiration) dont l'ouverture est modulée par la turgescence des cellules stomatiques. Lors d'un stress hydrique, la perte d'eau s'accompagne d'une variation microscopique de l'indice optique et de l'épaisseur de la cuticule foliaire sus-jacente, modifiant le chemin optique des rayonnements réfléchis.

Pour concevoir un capteur non destructif mesurant in vivo ce stress hydrique, on modélise la feuille comme un milieu réfléchissant dont on cherche à caractériser les micro-variations d'épaisseur par une méthode interférométrique. 

L'objectif de ce problème est d'étudier un dispositif interférentiel de type fentes d'Young éclairé par une source laser, puis d'analyser la perturbation introduite par l'interposition d'un échantillon foliaire dans l'un des faisceaux.

---

## 2. Énoncé et Questions

### Partie A : Étude du dispositif de référence (Fentes d'Young)

On considère un dispositif des fentes d'Young dans le vide (ou l'air, d'indice $n_0 \approx 1$). Une source laser monochromatique de longueur d'onde dans le vide $\lambda_0 = 633 \text{ nm}$ éclaire deux fentes fines $F_1$ et $F_2$ distantes de $a = 1,0 \text{ mm}$. 
Les fentes jouent le rôle de sources secondaires en phase. Un écran d'observation $E$ est placé à une distance $D = 1,5 \text{ m}$ des fentes, parallèlement au plan contenant $F_1$ et $F_2$. On repère un point $M$ de l'écran par sa coordonnée cartésienne $x$ mesurée à partir de l'axe optique $(Ox)$, perpendiculaire au plan des fentes et passant par le milieu $I$ du segment $[F_1F_2]$.

**Q1.** Rappeler la condition d'interférences constructives et destructives en un point $M$ de l'écran en fonction de la différence de marche $\delta(M) = r_2 - r_1$, où $r_1 = F_1M$ et $r_2 = F_2M$.

**Q2.** En effectuant un développement limité (approximation des fentes minces et de l'écran lointain : $a \ll D$ et $|x| \ll D$), exprimer la différence de marche $\delta(x)$ en fonction de $x$, $a$ et $D$.

**Q3.** En déduire l'expression de l'intensité lumineuse $I(x)$ reçue sur l'écran, notée sous la forme :
$$I(x) = I_0 \left(1 + m \cos\left(\frac{2\pi x}{i}\right)\right)$$
où l'on explicitera l'interfrange $i$ et le contraste $m$ (en supposant les ondes issues de $F_1$ et $F_2$ d'amplitudes égales $A_0$). Calculer la valeur numérique de $i$.

---

### Partie B : Introduction d'un échantillon biologique (Feuille végétale)

On interpose maintenant devant la fente $F_2$ une fine coupe transversale de feuille végétale d'épaisseur géométrique $e = 20 \;\mu\text{m}$ et d'indice optique moyen $n$ (réel, $n > 1$). La fente $F_1$ reste dans l'air ($n_0 = 1$).

**Q4.** Définir la notion de chemin optique $\mathcal{L}$ le long d'un trajet géométrique. Exprimer la nouvelle différence de marche $\delta'(x)$ au point $M$ en tenant compte de la lame végétale traversée par le faisceau 2.

**Q5.** Comment cette modification se traduit-elle visuellement sur la figure d'interférence observée sur l'écran ? 

**Q6.** On mesure expérimentalement un déplacement de la frange centrale (frange d'ordre zéro) de $\Delta x = 1,5 \text{ mm}$. En déduire l'expression puis la valeur numérique de l'indice optique $n$ de la coupe végétale.

---

### Partie C : Analyse critique du modèle biologique

**Q7.** Le modèle utilisé considère un indice $n$ homogène et réel. Discuter brièvement des limites de ce modèle face à la réalité biologique (hétérogénéité tissulaire, diffusion multiple par les cellules stomatiques, absorption potentielle dans le visible).

---

## 3. Pistes et Indications

*   **Q1 & Q2 :** Utilisez le théorème de Pythagore sur les triangles formés par les fentes et le point $M$, puis l'approximation $(1+u)^\alpha \approx 1 + \alpha u$ valable pour $|u| \ll 1$.
*   **Q3 :** L'intensité est proportionnelle au carré de la somme des amplitudes complexes. Le contraste témoigne de la visibilité des franges.
*   **Q4 :** Le chemin optique dans un milieu d'indice $n$ sur une épaisseur $e$ est défini par $\int n(s) ds$. Attention à retrancher l'épaisseur d'air équivalente.
*   **Q6 :** La frange centrale correspond à une différence de marche nulle. Écrivez la condition $\delta'(x_0) = 0$.

---

## 4. Corrigé détaillé pas à pas

### Partie A

**Q1.** 
Les ondes issues de $F_1$ et $F_2$ étant en phase, l'interférence en $M$ dépend de la différence de marche $\delta = r_2 - r_1$ :
*   **Interférences constructives** (luminosité maximale) si $\delta = k \lambda_0$ avec $k \in \mathbb{Z}$ (ordre d'interférence).
*   **Interférences destructives** (extinction) si $\delta = \left(k + \frac{1}{2}\right) \lambda_0$ avec $k \in \mathbb{Z}$.

**Q2.** 
Soit $M(x, y=0, z=x)$ dans le repère lié à l'écran. Les coordonnées des fentes dans le plan $x=0$ sont $F_1(0, -a/2, 0)$ et $F_2(0, a/2, 0)$.
On a :
$$r_1^2 = D^2 + \left(x + \frac{a}{2}\right)^2 = D^2 \left[ 1 + \frac{\left(x + \frac{a}{2}\right)^2}{D^2} \right]$$
En extrayant la racine carrée et en utilisant l'approximation $D \gg |x \pm a/2|$ :
$$r_1 \approx D \left[ 1 + \frac{1}{2D^2}\left(x + \frac{a}{2}\right)^2 \right] = D + \frac{x^2}{2D} + \frac{ax}{2D} + \frac{a^2}{8D}$$
De même pour $r_2$ :
$$r_2 \approx D + \frac{x^2}{2D} - \frac{ax}{2D} + \frac{a^2}{8D}$$
La différence de marche est donc :
$$\delta(x) = r_2 - r_1 \approx -\frac{ax}{D}$$
*(Note : en prenant $r_1 - r_2$ ou $\frac{ax}{D}$ selon l'orientation, on retient la valeur absolue ou la convention algébrique. Ici $\delta(x) = \frac{ax}{D}$ si l'on pose $r_1$ associé à $+a/2$. Restons homogène : $\delta(x) = \frac{ax}{D}$ en orientant correctement).*

**Q3.** 
L'intensité s'écrit $I(x) = |\underline{E}_1 + \underline{E}_2|^2$. Avec des amplitudes égales $A_0$ :
$$I(x) = 2 A_0^2 \left( 1 + \cos\left(\frac{2\pi \delta}{\lambda_0}\right) \right) = I_0 \left( 1 + \cos\left(\frac{2\pi a x}{\lambda_0 D}\right) \right)$$
*   **Interfrange $i$** (distance entre deux maxima successifs) : $\frac{2\pi a i}{\lambda_0 D} = 2\pi \implies i = \frac{\lambda_0 D}{a}$.
*   **Contraste $m$** : $m = 1$ (franges idéalement contrastées).

*Application numérique :*
$$i = \frac{633 \times 10^{-9} \times 1,5}{1,0 \times 10^{-3}} = 9,495 \times 10^{-4} \text{ m} \approx 0,95 \text{ mm}$$

---

### Partie B

**Q4.** 
Le chemin optique $\mathcal{L}$ est défini par $\mathcal{L} = \int_{(Path)} n(s) ds$. 
Pour le faisceau 2, l'onde traverse l'échantillon d'épaisseur $e$ et d'indice $n$, et une épaisseur $(D - e)$ dans l'air. Son chemin optique total est :
$$\mathcal{L}_2 = r_2 - e + n \cdot e$$
Pour le faisceau 1 (entièrement dans l'air d'indice $1$) :
$$\mathcal{L}_1 = r_1$$
La nouvelle différence de marche $\delta'(x)$ est par conséquent :
$$\delta'(x) = \mathcal{L}_2 - \mathcal{L}_1 = (r_2 - r_1) + (n - 1)e = \frac{ax}{D} + (n - 1)e$$

**Q5.** 
L'interposition de la lame entraîne un décalage global de la figure d'interférence. La frange centrale (anciennement en $x = 0$ où $\delta = 0$) se déplace vers une nouvelle position $x_0$ telle que $\delta'(x_0) = 0$. Le système d'interfranges est rigidement déplacé sans modification de l'interfrange $i$.

**Q6.** 
La nouvelle position de la frange centrale $x_0$ (qui correspond au déplacement mesuré $\Delta x$) vérifie :
$$\frac{a x_0}{D} + (n - 1)e = 0 \implies x_0 = -\frac{(n-1)e D}{a}$$
En valeur absolue, le déplacement est $\Delta x = \frac{(n-1)e D}{a}$. On isole l'indice $n$ :
$$n = 1 + \frac{\Delta x \cdot a}{e \cdot D}$$

*Application numérique :*
$$n = 1 + \frac{1,5 \times 10^{-3} \times 1,0 \times 10^{-3}}{20 \times 10^{-6} \times 1,5} = 1 + \frac{1,5 \times 10^{-6}}{30 \times 10^{-6}} = 1 + 0,05 = 1,05$$
L'indice optique mesuré de la coupe foliaire est $n = 1,05$.

---

### Partie C

**Q7. Analyse critique (Rigueur BCPST) :**
*   **Hétérogénéité tissulaire :** La feuille n'est pas un milieu diélectrique homogène. Elle est composée d'épidermes, de parenchyme palissadique et lacuneux, et de lacunes remplies d'air. Le modèle de l'indice unique $n$ macroscopique est une moyenne pondérée (loi des mélanges).
*   **Diffusion multiple :** Les parois cellulaires et les chloroplastes provoquent de la diffusion (et non seulement de la réfraction spéculaire), ce qui dégrade le contraste $m$ des franges.
*   **Caractère complexe de l'indice :** Si le pigment foliaire (chlorophylle) absorbe à la longueur d'onde du laser choisi ($\lambda_0 = 633 \text{ nm}$, proche du pic d'absorption de la chlorophylle a/b), l'indice optique doit être modélisé par une grandeur complexe $\underline{n} = n + i\chi$, entraînant une atténuation de l'intensité qui complique la mesure interférométrique pure.