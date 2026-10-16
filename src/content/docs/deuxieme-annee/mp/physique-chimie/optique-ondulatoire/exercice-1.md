---
title: 'Exercice 1 : Fentes d Young'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Étude avancée des fentes d'Young et analyse critique du modèle

---

## 1. Énoncé

Le dispositif des fentes d'Young est l'expérience fondatrice de l'optique ondulatoire. On se propose ici d'étudier non seulement l'interférence lumineuse idéale, mais aussi d'introduire progressivement des nuances expérimentales (cohérence spatiale et temporelle, diffraction par les fentes) souvent éludées dans les modèles introductifs.

**Données et notations :**
*   Source lumineuse primaire ponctuelle (ou étendue selon les questions) émettant une longueur d'onde dans le vide $\lambda_0 = 633 \text{ nm}$ (laser hélium-néon).
*   Plan source (ou plan des fentes $F_1, F_2$) distant de $D$ du plan d'observation $E$.
*   Distance entre les deux fentes : $a = 1,0 \text{ mm}$.
*   Distance fentes-écran : $D = 1,5 \text{ m}$.
*   Largeur des fentes $b$ et hauteur $h$.
*   Vitesse de la lumière dans le vide : $c = 3 \times 10^8 \text{ m}\cdot\text{s}^{-1}$.

---

## 2. Questions

### Partie A : Modèle idéal (Interférences à deux ondes)
1. Établir l'expression de la différence de marche $\delta(x)$ en un point $M$ de l'écran d'abscisse $x$ (repéré par rapport à l'axe optique), dans l'approximation des fentes jointives ($a \ll D$) et paraxial.
2. En déduire l'interfrange $i$ et l'intensité lumineuse $I(x)$ sur l'écran, en notant $I_0$ l'intensité maximale.
3. Calculer numériquement l'interfrange $i$.

### Partie B : Cohérence temporelle (Source polychromatique)
4. On remplace le laser par une source émettant deux longueurs d'onde $\lambda_1$ et $\lambda_2 = \lambda_1 + \Delta\lambda$ (avec $\Delta\lambda \ll \lambda_1$). Exprimer la nouvelle intensité $I(x)$.
5. À partir de quelle différence de marche $\delta_{\text{max}}$ observe-t-on un brouillage des franges (extinction du contraste) ? Application numérique pour $\lambda_1 = 600 \text{ nm}$ et $\Delta\lambda = 10 \text{ nm}$.

### Partie C : Analyse critique du modèle et diffraction par les fentes
6. Dans la réalité, les fentes ont une largeur non nulle $b$ (on prend $b = 0,1 \text{ mm}$). Quel phénomène physique supplémentaire doit-on prendre en compte pour décrire correctement l'intensité lumineuse ?
7. Établir l'expression de l'intensité globale $I_{\text{réel}}(x)$ en tenant compte de la diffraction par chaque fente supposée rectangulaire et uniformément éclairée.
8. Décrire qualitativement l'aspect de la figure d'interférence obtenue sur l'écran et analyser les limites du modèle idéal des sources ponctuelles.

---

## 3. Pistes et indications

*   **Partie A :** Utiliser le théorème de Malus ou le calcul direct des chemins optiques $S_1M$ et $S_2M$ en faisant un développement limité au premier ordre en $a/D$ et $x/D$.
*   **Partie B :** L'intensité totale pour une source polychromatique incohérente est la somme des intensités associées à chaque longueur d'onde. Le contraste est défini par $C = \frac{I_{\text{max}} - I_{\text{min}}}{I_{\text{max}} + I_{\text{min}}}$.
*   **Partie C :** Utiliser le principe de Huygens-Fresnel : chaque point de la fente agit comme une source secondaire. L'amplitude totale résulte d'une sommation (intégration) sur la largeur de la fente $b$.

---

## 4. Corrigé pas à pas

### Partie A : Modèle idéal
1. **Différence de marche :**
   Soit $S_1$ de coordonnées $(0, -a/2, 0)$ et $S_2$ de coordonnées $(0, a/2, 0)$. Le point $M$ sur l'écran a pour coordonnées $(D, x, 0)$.
   La différence de marche est $\delta = S_2M - S_1M$.
   $$S_2M = \sqrt{D^2 + \left(x - \frac{a}{2}\right)^2} = D \sqrt{1 + \frac{(x - a/2)^2}{D^2}} \approx D + \frac{(x - a/2)^2}{2D}$$
   De même :
   $$S_1M \approx D + \frac{(x + a/2)^2}{2D}$$
   Par soustraction :
   $$\delta = \frac{1}{2D} \left[ \left(x - \frac{a}{2}\right)^2 - \left(x + \frac{a}{2}\right)^2 \right] = -\frac{2xa}{2D} = -\frac{ax}{D}$$
   En valeur absolue, $\delta = \frac{ax}{D}$.

2. **Interfrange et intensité :**
   L'interfrange $i$ correspond à la distance entre deux maxima consécutifs, soit $\delta = \lambda_0 \implies x = i = \frac{\lambda_0 D}{a}$.
   L'intensité s'écrit :
   $$I(x) = 4 I_1 \cos^2\left(\frac{\pi \delta}{\lambda_0}\right) = I_0 \cos^2\left(\frac{\pi a x}{\lambda_0 D}\right)$$

3. **Application numérique :**
   $$i = \frac{633 \times 10^{-9} \times 1,5}{1,0 \times 10^{-3}} = 9,50 \times 10^{-4} \text{ m} = 0,95 \text{ mm}$$

---

### Partie B : Cohérence temporelle
4. **Intensité polychromatique :**
   Les longueurs d'onde étant incohérentes entre elles, les intensités s'ajoutent :
   $$I_{\text{poly}}(x) = I_1(x) + I_2(x) = I_0 \left[ \cos^2\left(\frac{\pi a x}{\lambda_1 D}\right) + \cos^2\left(\frac{\pi a x}{\lambda_2 D}\right) \right]$$

5. **Brouillage des franges :**
   Les franges de longueurs d'onde $\lambda_1$ et $\lambda_2$ se superposent. Le brouillage intervient lorsque les maxima de l'une coïncident avec les minima de l'autre, soit un décalage de $\pi$ pour la phase à l'ordre $k$.
   La condition d'extinction du contraste se produit pour une différence de marche $\delta_{\text{max}}$ telle que :
   $$\delta_{\text{max}} \left(\frac{1}{\lambda_1} - \frac{1}{\lambda_2}\right) \approx \frac{\delta_{\text{max}} \Delta\lambda}{\lambda_1^2} \sim \frac{1}{2}$$
   Soit $\delta_{\text{max}} \approx \frac{\lambda_1^2}{2 \Delta\lambda}$.
   *A.N.* : $\delta_{\text{max}} = \frac{(600 \times 10^{-9})^2}{2 \times 10 \times 10^{-9}} = 1,8 \times 10^{-5} \text{ m} = 18 \ \mu\text{m}$.

---

### Partie C : Analyse critique du modèle et limites

6. **Phénomène supplémentaire :**
   Le modèle idéal considère des sources ponctuelles (fentes de largeur nulle). Lorsque $b$ n'est plus négligeable, **la diffraction** par chaque fente rectangulaire intervient. Chaque fente se comporte comme une source lumineuse étendue qui module l'amplitude reçue sur l'écran.

7. **Intensité réelle :**
   L'amplitude diffractée par une fente de largeur $b$ donne un facteur d'amplitude proportionnel à la fonction $\text{sinc}(\beta)$, où $\beta = \frac{\pi b x}{\lambda_0 D}$.
   L'intensité globale est le produit de l'intensité d'interférence par le facteur de diffraction :
   $$I_{\text{réel}}(x) = I_0 \left( \frac{\sin\left(\frac{\pi b x}{\lambda_0 D}\right)}{\frac{\pi b x}{\lambda_0 D}} \ght)^2 \cos^2\left(\frac{\pi a x}{\lambda_0 D}\right)$$

8. **Analyse critique et limites du modèle idéal :**
   *   **Mododulation par la diffraction :** La figure d'interférence (franges fines espacées de $i$) est "enveloppée" par une tache centrale de diffraction beaucoup plus large (dont la largeur dépend de $b$). Si $b$ est du même ordre de grandeur que $a$, certaines franges d'interférences coïncident avec des extinctions (minima) de diffraction : on observe des **trous d'interférence** (disparition des franges dans les ordres élevés).
   *   **Limites du modèle :** Le modèle des fentes d'interférence parfaites suppose une cohérence spatiale totale (source primaire ponctuelle) et une monochromaticité parfaite (cohérence temporelle infinie). Dès que la source a une extension transversale non nulle $S$ ou une largeur spectrale $\Delta\lambda$, le contraste des franges chute rapidement loin de l'axe central, menant à une uniformité lumineuse (absence d'interférences visibles).