---
title: 'Agro-Véto - Biologie (Synthèse)'
description: 'Sujet type concours corrigé pas à pas pour la filière BCPST.'
sidebar:
  badge:
    text: 'Annale Concours'
    variant: 'caution'
---

# CONCOURS COMMUNS INSTITUTS AGRONOMIQUES ET VÉTÉRINAIRES
## Filière BCPST — Épreuve de Biologie (Option Synthèse)
*Durée : 4 heures*

---

## 📄 Partie 1 : Énoncé du Problème

### Dynamique éco-évolutive d'une métapopulation fragmentée face aux pressions anthropiques

Le réchauffement climatique global et la fragmentation croissante des habitats naturels par l'urbanisation et l'agriculture intensive imposent aux espèces sauvages des contraintes adaptatives et démographiques inédites. On s'intéresse ici à une métapopulation d'un rongeur forestier inféodé, le campagnol des bois (*Clethrionomys glareolus*), répartie dans un archipel d'habitats forestiers insulaires.

L'objectif de ce problème est d'analyser couplé la démographie spatiale (dynamique de métapopulation au sens de Levins modifiée par Hanski) et la génétique des populations (dérive, flux génique, sélection naturelle) afin d'évaluer la viabilité à long terme de ces populations fragmentées et de concevoir des corridors écologiques optimisés.

Le problème est structuré en deux grands volets : 
1. L'étude de la colonisation, de l'extinction et de la persistance de la métapopulation sous l'effet de la connectivité paysagère.
2. L'analyse de la réponse évolutive (maintien de polymorphismes, dérive génétique, fardeau génétique) dans ces petites populations isolées, en intégrant l'immunité et la résistance aux métaux lourds liés aux pollutions périphériques.

---

## ❓ Partie 2 : Questions

### Partie A : Écologie des métapopulations et connectivité paysagère

1. Établir l'équation différentielle classique de Hanski décrivant la variation temporelle de la proportion de patches d'habitat occupés $p$, en notant $c$ le taux de colonisation et $e$ le taux d'extinction locale. Préciser les hypothèses fondatrices de ce modèle.
2. En intégrant l'effet de la fragmentation paysagère, Hanski a modifié le taux de colonisation en fonction de la connectivité. Soit $S_iisolation$ une mesure de l'isolement d'un patch. Comment la distance moyenne entre patches et la matrice paysagère (hostile vs neutre) modifient-elles mathématiquement le terme $c$ ? Déduire l'expression de l'équilibre de la métapopulation $p^*$.
3. On introduit un flux migratoire asymétrique induit par un gradient de vent et de pente. Écrire le bilan de variation de $p$ pour deux sous-populations interconnectées (modèle source-puits). Discuter des conditions de persistance de la métapopulation si le patch source voit son taux d'extinction $e_1$ augmenter brutalement suite à une canicule.

### Partie B : Génétique évolutive et fardeau adaptatif en milieu fragmenté

4. Dans une sous-population isolée de taille effective $N_e$, on étudie un locus autosomique diallélique $(A_1, A_2)$ impliqué dans la tolérance au cadmium (présent dans les sols agricoles adjacents). Soit $p$ la fréquence de l'allèle $A_1$. Rappeler l'expression de la variance de la variation de fréquence alléliquedue à la dérive génétique d'une génération à l'autre.
5. En présence conjointe de dérive génétique et de sélection naturelle (valeurs sélectives : $w_{11} = 1+s$, $w_{12} = 1+hs$, $w_{22} = 1$), écrire l'équation déterministe de récurrence de la fréquence allélique $p$. Sous quelle condition rigoureuse la sélection naturelle surmonte-t-elle la force de la dérive génétique dans une population de taille $N_e$ ?
6. Le paysage est désormais aménagé avec un corridor écologique de largeur $L$. En utilisant les équations de cline génétique ou le modèle d'île de Wright avec taux de migration $m$, analyser l'effet de ce corridor sur la différenciation génétique entre patches mesurée par l'indice $F_{ST}$ de Wright. Conclure sur la stratégie d'ingénierie écologique à adopter pour maximiser la diversité allélique tout en limitant la propagation d'pathogènes.

---

## 💡 Partie 3 : Rapport du Jury

### Pièges à éviter et attentes majeures

* **Rigoureuse modélisation mathématique :** Les candidats ont trop souvent tendance à réciter des définitions vagues de la dérive ou de la métapopulation sans poser les équations différentielles sous-jacentes. Les hypothèses des modèles (fermeture, démographie stochastique vs déterministe) doivent être explicitées.
* **Confusion sémantique :** Bien distinguer la taille démographique $N$ de la taille effective $N_e$. De même, ne pas confondre flux migratoire (démographie) et flux génique (génétique).
* **Esprit critique :** Face aux questions d'ingénierie écologique (corridors), le jury attend une vision nuancée : un corridor favorise le sauvetage démographique et le flux génique (lutte contre la consanguinité), mais peut aussi faciliter la diffusion de maladies ou d'espèces invasives.

---

## 📋 Partie 4 : Corrigé Détaillé et Analyse

### Partie A : Écologie des métapopulations et connectivité paysagère

#### Question 1
Le modèle de Hanski (1994) formalise la dynamique d'une métapopulation par l'évolution de la proportion $p$ de patches d'habitat occupés (avec $0 \le p \le 1$). 
Les hypothèses fondamentales sont :
* Le nombre de patches d'habitat est grand et constant.
* Chaque patch est soit vide, soit occupé par une seule population de l'espèce.
* La dynamique temporelle locale est rapide devant la dynamique globale de la métapopulation (les extinctions et recolonisations locales instantanées à l'échelle macro).

L'équation différentielle régissant la variation de $p$ est :
$$\frac{dp}{dt} = c \cdot p \cdot (1 - p) - e \cdot p$$

Où :
* $c$ est le taux global de colonisation des patches vides par les propagules issues des patches occupés (proportionnels à $p(1-p)$).
* $e$ est le taux constant d'extinction locale des patches occupés.

#### Question 2
Hanski a affiné le terme de colonisation en l'exprimant comme une fonction décroissante de l'isolement des patches. Si l'on considère un paysage où la matrice inter-patch oppose une résistance au déplacement caractérisée par un coefficient de mortalité migratoire $\alpha$, le taux de colonisation effectif s'écrit :
$$c_{\text{eff}} = c_0 \cdot \mathcal{M}(\alpha)$$
Où $c_0$ est le taux de colonisation de base et $\mathcal{M}(\alpha)$ représente la connectivité globale du réseau, souvent modélisée par un noyau de dispersion exponentiel ou gaussien dépendant de la distance inter-patch $d_{ij}$.

À l'équilibre de la métapopulation, $\frac{dp}{dt} = 0$. On a donc :
$$c_{\text{eff}} \cdot p^* \cdot (1 - p^*) - e \cdot p^* = 0$$

Ce qui donne deux solutions triviales ou non :
1. $p^* = 0$ (extinction totale de la métapopulation).
2. $p^* = 1 - \frac{e}{c_{\text{eff}}}$ (si $c_{\text{eff}} > e$, condition de persistance pérenne de la métapopulation).

#### Question 3
Considérons deux patches asymétriques (1 : source, 2 : puits) reliés par des taux de migration $m_{1\to 2}$ et $m_{2\to 1}$ avec $m_{1\to 2} > m_{2\to 1}$ (en raison d'un gradient de vent/pente). 
Les équations d'occupation couplées s'écrivent :
$$\begin{cases} 
\frac{dp_1}{dt} = c_1 p_1 (1-p_1) - e_1 p_1 - m_{1\to 2} p_1 + m_{2\to 1} p_2 \\
\frac{dp_2}{dt} = c_2 p_2 (1-p_2) - e_2 p_2 + m_{1\to 2} p_1 - m_{2\to 1} p_2 
\end{cases}$$

Si une canicule augmente brutalement $e_1$, la source 1 voit son occupation chuter. Le terme d'apport migratoire $m_{1\to 2} p_1$ vers le puits 2 diminue drastiquement. Si $e_1$ dépasse le seuil critique où $c_1(1-p_1) - e_1 < 0$, la source ne produit plus assez d'émigrants. Par effet de cascade, le patch 2 (puits), qui dépendait de l'immigration pour se maintenir malgré un taux d'extinction propre $e_2 > c_2(1-p_2)$, s'effondre également. La métapopulation s'éteint globalement, démontrant la fragilité des systèmes source-puits face à la dégradation de la source.

---

### Partie B : Génétique évolutive et fardeau adaptatif en milieu fragmenté

#### Question 4
Dans une population de taille effective $N_e$, la fréquence de l'allèle $A_1$ (notée $p$) fluctue d'une génération à l'autre en raison de l'échantillonnage aléatoire des gamètes (dérive génétique). La variance de la variation de la fréquence allélique $\Delta p$ par génération est donnée par :
$$\text{Var}(\Delta p) = \frac{p(1-p)}{2N_e}$$

Cette variance montre que l'effet de la dérive est inversement proportionnel à la taille effective $N_e$.

#### Question 5
En combinant l'effet de la sélection naturelle (valeurs sélectives $w_{11}=1+s$, $w_{12}=1+hs$, $w_{22}=1$) et de la dérive, la variation déterministe moyenne de la fréquence allélique par la sélection est :
$$\Delta_{\text{sel}} p = \frac{pq[s(p + h(q-p)]}{\bar{w}}$$
Avec $q = 1-p$ et $\bar{w}$ la valeur sélective moyenne de la population.

La condition rigoureuse pour que la sélection naturelle surmonte la dérive génétique et gouverne l'évolution de l'allèle (par exemple pour fixer un allèle avantageux de résistance au cadmium) s'exprime par l'inégalité de Wright :
$$4 N_e s \gg 1$$
Si $4 N_e s < 1$, c'est la dérive génétique stochastique qui domine, conduisant potentiellement à la perte d'allèles adaptatifs avantageux (fixation aléatoire d'allèles délétères, augmentation du fardeau génétique).

#### Question 6
L'indice $F_{ST}$ de Wright mesure la différenciation génétique entre sous-populations. En présence d'un corridor écologique caractérisé par un taux de migration effectif $m$ entre les patches, la relation d'équilibre de Wright sous le modèle "island model" modifié est :
$$F_{ST} \approx \frac{1}{4 N_e m + 1}$$

* **Analyse :** Plus le corridor est large et fonctionnel, plus le taux de migration $m$ augmente, ce qui fait tendre $F_{ST}$ vers 0 (homogénéisation génétique, lutte efficace contre la consanguinité et la dérive).
* **Nuance / Compromis écologique :** Si $m$ devient trop élevé, il supprime l'adaptation locale potentielle par un flux génique mal adaptatif ("migration load"). De plus, un corridor trop perméable peut accélérer la transmission de zoonoses ou de pathogènes d'une sous-population à l'autre. L'ingénieur écologue doit donc calibrer la largeur $L$ du corridor pour atteindre un compromis optimal : un $m$ suffisant pour maintenir $4 N_e m > 1$ (évitant la dérive) sans pour autant niveler les spécificités adaptatives locales.