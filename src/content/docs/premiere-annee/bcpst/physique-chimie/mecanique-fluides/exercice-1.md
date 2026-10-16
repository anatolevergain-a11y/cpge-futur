---
title: 'Exercice 1 : Statique des fluides'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Statique des fluides en milieu biologique et géologique

## Contexte et problématique
La statique des fluides ne se limite pas à l'étude des barrages ou des grands fonds océaniques. En biologie végétale et en géologie, la pression hydrostatique joue un rôle moteur ou régulateur fondamental. 

Ce problème s'intéresse à deux aspects :
1. **En géologie :** L'estimation de la pression au fond d'un bassin sédimentaire et l'impact de la compaction des sédiments sur la circulation des fluides interstitiels (excès de pression poreuse).
2. **En biologie végétale :** La montée de la sève brute dans le xylène des arbres de grande taille, où la capillarité et la pression hydrostatique (ainsi que la cavitation) s'entrecroisent.

---

## Énoncé

On se place dans le référentiel terrestre, supposé galiléen. L'accélération de la pesanteur est notée $\vec{g} = -g \vec{e}_z$, avec $g = 9{,}81\text{ m}\cdot\text{s}^{-2}$ et $\vec{e}_z$ orienté verticalement vers le haut.

### Partie I : Pression lithostatique et hydrostatique dans un bassin sédimentaire
Un bassin sédimentaire est constitué d'une matrice solide poreuse (le squelette minéral) saturée d'eau (le fluide interstitiel). 
* Soit $\rho_s = 2500\text{ kg}\cdot\text{m}^{-3}$ la masse volumique moyenne du solide.
* Soit $\rho_f = 1000\text{ kg}\cdot\text{m}^{-3}$ la masse volumique de l'eau.
* La porosité $\phi$ est définie comme le rapport du volume de vide sur le volume total ($0 < \phi < 1$). On la supposera constante ici, $\phi = 0{,}4$.

La masse volumique globale du milieu saturé est notée $\rho_{glob}$.

### Partie II : Modèle simplifié de la colonne sèveuse chez les végétaux
On modélise le xylème (vaisseaux conducteurs de la sève brute) d'un arbre géant (type *Sequoia sempervirens*) par un tube cylindrique vertical de hauteur $H = 100\text{ m}$. La sève est assimilée à de l'eau pure de masse volumique $\rho = 1000\text{ kg}\cdot\text{m}^{-3}$.

---

## Questions

### Partie I : Sédimentologie
1. Exprimer la masse volumique globale $\rho_{glob}$ du milieu en fonction de $\rho_s$, $\rho_f$ et $\phi$. Calculer sa valeur numérique.
2. Établir l'équation fondamentale de la statique des fluides (EFSF) pour le fluide interstitiel au repos dans le référentiel terrestre.
3. En déduire l'expression de la pression $P(z)$ dans le fluide à une profondeur $z$ (on repérera l'altitude $z=0$ à la surface du bassin, et $z$ négatif vers le bas). On note $P_0$ la pression atmosphérique à la surface.
4. Qu'appelle-t-on "surpression poreuse" si la sédimentation est trop rapide pour permettre l'évacuation de l'eau ?

### Partie II : Biophysique végétale
5. Écrire l'EFSF pour la sève dans le vaisseau du xylème, en choisissant l'axe $z$ vertical ascendant, avec $z=0$ au niveau du sol et $z=H$ au sommet de l'arbre.
6. En déduire la différence de pression $\Delta P = P(H) - P(0)$ nécessaire pour maintenir la sève en équilibre statique (colonne immobile). 
7. Calculer la valeur numérique de $\Delta P$ en Pascals et en atmosphères ($1\text{ atm} \approx 101325\text{ Pa}$).
8. **Analyse critique :** Chez les arbres, la sève ne monte pas par simple poussée hydrostatique depuis le sol, mais est "tirée" par évapotranspiration au niveau des feuilles (théorie de Cohésion-Tension). Si la tension (pression négative) dépasse une valeur critique de $-2\text{ MPa}$, il se produit un phénomène de *cavitation* (rupture de la colonne d'eau). Le modèle statique simple est-il viable pour expliquer la hauteur des arbres de $100\text{ m}$ ? Conclure.

---

## Pistes et indications
* **Q1 :** Pensez à exprimer la masse totale dans un volume élémentaire $V = V_s + V_f$.
* **Q2 & Q3 :** Appliquer le théorème d'Euler pour un fluide au repos ($\vec{f}_{vol} = \rho \vec{g}$). Attention au signe de $g$ selon l'orientation de l'axe.
* **Q6 & Q7 :** Intégrer entre le sol et le sommet. Ne pas oublier que $g$ est dirigé vers le bas.
* **Q8 :** Comparer la pression hydrostatique calculée à la limite de cavitation du vivant.

---

## Corrigé pas à pas

### Partie I_1. Dans un volume total $V$, le volume de fluide est $V_f = \phi V$ et le volume de solide est $V_s = (1-\phi)V$. 
   La masse totale est $M = \rho_f V_f + \rho_s V_s = (\phi \rho_f + (1-\phi)\rho_s)V$.
   La masse volumique globale est donc :
   $$\rho_{glob} = (1-\phi)\rho_s + \phi \rho_f$$
   *A.N. :* $\rho_{glob} = (1 - 0{,}4) \times 2500 + 0{,}4 \times 1000 = 1500 + 400 = 1900\text{ kg}\cdot\text{m}^{-3}$.

2. Pour un fluide au repos dans un référentiel galiléen, l'équation de la statique des fluides s'écrit :
   $$\vec{\nabla} P = \rho_f \vec{g}$$

3. En projetant sur l'axe $\vec{e}_z$ vertical ascendant ($\vec{g} = -g \vec{e}_z$) :
   $$\frac{d}{dz} P(z) = -\rho_f g$$
   Par intégration entre $z=0$ (surface, $P(0) = P_0$) et une profondeur $z$ (avec $z < 0$) :
   $$P(z) = P_0 - \rho_f g z = P_0 + \rho_f g |z|$$
   (où $|z| = -z$ représente la profondeur).

4. Si la sédimentation est rapide, l'eau piégée ne peut s'échapper à travers les pores (faible perméabilité). Le poids des nouveaux sédiments est alors partiellement supporté par l'eau interstitielle, ce qui crée une **surpression poreuse** (la pression du fluide est supérieure à la pression hydrostatique normale $\rho_f g |z|$).

### Partie II
5. Pour la sève dans le xylème, l'EFSF s'écrit de la même manière :
   $$\frac{d P}{dz} = -\rho g$$
   avec $\rho = 1000\text{ kg}\cdot\text{m}^{-3}$.

6. En intégrant entre $z=0$ (sol) et $z=H$ (sommet) :
   $$P(H) - P(0) = -\rho g H$$
   $$\Delta P = -\rho g H$$

7. *A.N. :* $\Delta P = -1000 \times 9{,}81 \times 100 = -981000\text{ Pa} = -9{,}81 \times 10^5\text{ Pa}$.
   En atmosphères : $\Delta P = \frac{-981000}{101325} \approx -9{,}68\text{ atm}$.
   Le sol doive "pousser" ou le sommet "tirer" avec une différence de près de $10\text{ bars}$.

8. **Analyse critique :** 
   Le calcul montre qu'une colonne d'eau de $100\text{ m}$ induit une différence de pression hydrostatique d'environ $-1\text{ MPa}$ ($10\text{ bars}$). 
   * Si l'arbre devait *pousser* la sève par le bas (pression positive à la base), la pression au sol devrait être très élevée, ce qui détruirait les cellules racinaires.
   * En réalité, la sève est *tirée* par le haut grâce au gradient de potentiel hydrique généré par l'évapotranspiration foliaire. Le sommet de l'arbre subit donc une **dépression** (tension) de l'ordre de $-1\text{ MPa}$, à laquelle s'ajoute la colonne d'eau, soit au total environ $-2\text{ MPa}$ au sommet.
   * Cette valeur est très proche du seuil critique de cavitation ($\approx -2\text{ à } -3\text{ MPa}$). Le modèle de statique des fluides montre ici sa limite fondamentale : il ne prend pas en compte la **dynamique** de transpiration ni la résistance thermodynamique du vivant. Au-delà de $100\text{ à } 120\text{ m}$, la cavitation devient inévitable, ce qui explique la limite biologique de la hauteur maximale des arbres sur Terre.