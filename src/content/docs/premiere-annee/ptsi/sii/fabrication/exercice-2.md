---
title: 'Exercice 2 : Moulage et déformation plastique'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Analyse d'un procédé combiné de fonderie et d'emboutissage pour un carter aéronautique

## Énoncé

Dans le cadre de la conception d'un carter structural d'accessoires pour turbomachine aéronautique, on s'intéresse à la fabrication d'une pièce semi-finie en alliage d'aluminium (A356, Al-Si7Mg). Le cahier des charges impose un compromis alliant complexité géométrique interne (assurée par fonderie) et intégrité mécanique locale renforcée sur certaines zones de fixation (obtenue par une opération ultérieure de déformation plastique).

Le sujet se divise en deux parties indépendantes : 
1. Étude thermique et solidification lors du moulage en coquille par gravité.
2. Analyse énergétique et limites d'formabilité lors d'une opération de calibration/emboutissage à froid.

---

## Données constructeur et technologiques

*   **Matériau (Alliage A356) :**
    *   Masse volumique : $\rho = 2680 \text{ kg}\cdot\text{m}^{-3}$
    *   Température de fusion (liquidus) : $T_{\text{liq}} = 615 \text{ }^\circ\text{C}$
    *   Température de coulé : $T_{\text{coul}} = 700 \text{ }^\circ\text{C}$
    *   Chaleur latente de solidification : $L_f = 389 \text{ kJ}\cdot\text{kg}^{-1}$
    *   Capacité thermique massique (moyenne liquide/solide) : $C_p = 960 \text{ J}\cdot\text{kg}^{-1}\cdot\text{K}^{-1}$
    *   Coefficient d'écrouissage (loi de Hollomon $\sigma = K \cdot \varepsilon^n$) : $K = 350 \text{ MPa}$, $n = 0{,}18$
    *   Limite d'élasticité initiale : $R_e = 130 \text{ MPa}$

*   **Géométrie de la pièce moulée (zone critique) :**
    *   Épaisseur moyenne de la paroi : $e = 8 \text{ mm}$
    *   Module de Chvorinov de la zone d'étude : $M = \frac{V}{S} \approx 2{,}1 \times 10^{-3} \text{ m}$

---

## Questions

### Partie 1 : Fonderie (Moulage en coquille)

**Q1.** Exprimer, puis calculer la quantité de chaleur totale $Q$ (exprimée par unité de masse) qu'un kilogramme de métal liquide doit évacuer depuis sa température de coulée jusqu'à sa température de solidus, fixée à $T_{\text{sol}} = 575 \text{ }^\circ\text{C}$.

**Q2.** Rappeler la loi de Chvorinov régissant le temps de solidification $t_s$ d'une pièce coulée en fonction de son module $M$ et de la constante du moule $B$. Pour une coquille en acier thermorégulée, on estime $B = 2200 \text{ s}\cdot\text{m}^{-2}$. Calculer le temps de solidification $t_s$.

**Q3.** *Analyse critique :* L'hypothèse d'un transfert thermique purement unidirectionnel est-elle valide pour un coin vif de la pièce où le flux thermique est bi- ou tridimensionnel ? Quel défaut de fonderie risque d'apparaître dans cette zone si l'alimentation en métal liquide est insuffisante ?

---

### Partie 2 : Déformation plastique (Opération de calibration)

La zone de fixation subit une opération de compression/emboutissage localisée à froid induisant une déformation vraie équivalente $\varepsilon = 0{,}25$.

**Q4.** En appliquant le modèle de Hollomon, calculer la contrainte d'écoulement plastique $\sigma$ nécessaire pour maintenir la déformation à ce niveau.

**Q5.** Sachant que la section initiale soumise à l'effort est $S_0 = 450 \text{ mm}^2$, calculer l'effort maximal $F$ à appliquer sur l'outil en supposant un modèle de matériau rigide-écroui sans frottement.

**Q6.** *Analyse critique des limites du modèle :* 
*   **a)** Discuter de l'influence de la vitesse de déformation (effet de la vitesse de pressage) que néglige le modèle statique de Hollomon pour un alliage d'aluminium à chaud ou à froid.
*   **b)** Quel phénomène métallurgique majeur, non pris en compte dans ce modèle purement mécaniste, risque d'altérer la pièce si la déformation locale dépasse $\varepsilon = 0{,}4$ sans traitement thermique intermédiaire ?

---

## Pistes de réflexion

*   **Partie 1 :** Décomposez le bilan thermique en trois phases : refroidissement du liquide, changement d'phase (solidification isotherme ou sur un intervalle, ici approché par $L_f$), et refroidissement du solide jusqu'au solidus. Pensez à vérifier l'homogénéité des unités.
*   **Partie 2 :** Veillez à bien distinguer déformation nominale et déformation vraie si nécessaire, mais l'énoncé donne directement la déformation vraie $\varepsilon$. Appliquez directement la loi de comportement. Pour l'effort, utilisez $F = \sigma \cdot S(instant)$, en évaluant la variation de section par conservation du volume ($V = S_0 L_0 = S L$).

---

## Corrigé pas à pas

### Partie 1 : Fonderie

**Corrigé Q1 :**
Le bilan thermique massique $Q$ se décompose en trois termes :
1. Refroidissement du liquide de $T_{\text{coul}}$ à $T_{\text{liq}}$ : 
   $$Q_1 = C_p \cdot (T_{\text{coul}} - T_{\text{liq}}) = 960 \times (700 - 615) = 960 \times 85 = 81\,600 \text{ J}\cdot\text{kg}^{-1}$$
2. Solidification (changement de phase de $T_{\text{liq}}$ à $T_{\text{sol}}$, supposée ici concentrée ou ramenée à l'enthalpie globale) : 
   $$Q_2 = L_f = 389\,000 \text{ J}\cdot\text{kg}^{-1}$$
3. Refroidissement du solide de $T_{\text{liq}}$ à $T_{\text{sol}}$ (on prend l'intervalle global $T_{\text{liq}} - T_{\text{sol}}$ pour simplifier, ou plus rigoureusement de $T_{\text{liq}}$ à $T_{\text{sol}}$) : 
   $$Q_3 = C_p \cdot (T_{\text{liq}} - T_{\text{sol}}) = 960 \times (615 - 575) = 960 \times 40 = 38\,400 \text{ J}\cdot\text{kg}^{-1}$$

Total :
$$Q = Q_1 + Q_2 + Q_3 = 81\,600 + 389\,000 + 38\,400 = 509\,000 \text{ J}\cdot\text{kg}^{-1} = 509 \text{ kJ}\cdot\text{kg}^{-1}$$

**Corrigé Q2 :**
La loi de Chvorinov s'écrit :
$$t_s = B \cdot \left(\frac{V}{S}\right)^2 = B \cdot M^2$$
A.N. :
$$t_s = 2200 \times (2{,}1 \times 10^{-3})^2 = 2200 \times 4{,}41 \times 10^{-6} \approx 9{,}7 \text{ s}$$

**Corrigé Q3 (Analyse critique) :**
*   **Validité 1D :** Dans un coin vif, les flux thermiques convergent (effets d'angle). Le modèle 1D (paroi plane) sous-estime localement le transfert thermique car la surface d'échange externe est supérieure à la surface interne. Le refroidissement y est donc plus rapide.
*   **Défaut associé :** Un refroidissement accéléré combiné à un obstacle à l'alimentation (le reste de la pièce étant déjà solidifié) provoque un **retassure** (retrait liquide-solide non compensé) ou des micro-nids de porosité.

---

### Partie 2 : Déformation plastique

**Corrigé Q4 :**
D'après la loi de Hollomon ($\sigma = K \cdot \varepsilon^n$) :
$$\sigma = 350 \times (0{,}25)^{0{,}18}$$
Calculons $(0{,}25)^{0{,}18}$ : $\ln(0{,}25) \approx -1{,}386$; $-1{,}386 \times 0{,}18 \approx -0{,}2495$; $\exp(-0{,}2495) \approx 0{,}779$.
$$\sigma = 350 \times 0{,}779 \approx 272{,}7 \text{ MPa}$$

**Corrigé Q5 :**
Par conservation du volume ($V = S_0 L_0 = S L$), la section instantanée $S$ liée à la déformation vraie $\varepsilon = \ln\left(\frac{S_0}{S}\right)$ s'exprime par :
$$S = S_0 \cdot e^{-\varepsilon}$$
A.N. :
$$S = 450 \times e^{-0{,}25} = 450 \times 0{,}7788 \approx 350{,}5 \text{ mm}^2$$
L'effort de plastification $F$ est :
$$F = \sigma \cdot S = 272{,}7 \times 10^6 \text{ Pa} \times 350{,}5 \times 10^{-6} \text{ m}^2 \approx 95\,580 \text{ N} \approx 95{,}6 \text{ kN}$$

**Corrigé Q6 (Analyse critique des limites du modèle) :**
*   **a) Effet de vitesse :** Le modèle de Hollomon estathérmique et quasi-statique. En réalité, pour les alliages d'aluminium, la vitesse de déformation $\dot{\varepsilon}$ induit un amortissement visqueux (sensibilité à la vitesse $m$). Si la vitesse de la presse est élevée, l'échauffement adiabatique local ne peut être évacué, provoquant un adoucissement thermique non prévu par le modèle purement mécanique.
*   **b) Phénomène métallurgique :** Au-delà d'un seuil critique de déformation ($\varepsilon > 0{,}4$), l'accumulation de dislocations conduit à la saturation de l'écrouissage. Sans recuit de recristallisation intermédiaire, le matériau atteint sa limite de ductilité, ce qui génère des **micro-fissures intergranulaires** (phénomène de sur-écrouissage et rupture fragile locale).