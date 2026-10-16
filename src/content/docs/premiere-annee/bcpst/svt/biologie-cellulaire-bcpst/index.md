---
title: 'Cours : Biologie cellulaire et métabolisme'
description: 'Synthèse officielle du cours et démonstrations clés.'
---

# Biologie Cellulaire et Métabolisme — Fiche de Cours (BCPST1)

---

## 1. Organisation générale de la cellule eucaryote et compartimentation

La cellule eucaryote se caractérise par une compartimentation membranaire poussée (système endomembranaire et organites endosymbiotiques), permettant la cooccurrence de réactions métaboliques incompatibles et l'optimisation des flux biochimiques.

### 1.1. Le système endomembranaire
*   **Réticulum Endoplasmique (RE) :** 
    *   *RE rugueux (REG) :* criblé de ribosomes, site de synthèse des protéines destinées à la voie sécrétoire, aux lysosomes ou insérées dans les membranes. Siège des premières étapes de la $N$-glycosylation.
    *   *RE lisse (REL) :* dépourvu de ribosomes, impliqué dans la synthèse des lipides (phospholipides, stéroïdes), le métabolisme du glycogène (dans les hépatocytes) et le stockage des ions calcium ($\text{Ca}^{2+}$).
*   **Appareil de Golgi :** Polarisé (faces *cis* et *trans*). Siège de la maturation terminale des glycoprotéines, des $O$-glycosulations, de la sulfatation et du tri des protéines vésiculaires.
*   **Lysosomes et vacuoles :** Compartiments acides ($\text{pH} \approx 4.5\text{-}5.0$ maintenu par des ATPases vacuolaires à $\text{H}^+\text{out}$) contenant des hydrolases acides pour la dégradation macromoléculaire.

### 1.2. Les organites semi-autonomes (Origine endosymbiotique)
*   **Mitochondrie :** Double membrane (externe poreuse, interne très plissée en crêtes, imperméable). Siège du cycle de Krebs, de la $\beta$-oxydation des acides gras et de la phosphorylation oxydative.
*   **Plastes (Chloroplastes chez les végétaux) :** Triple membrane (externe, interne, thylakoïdienne). Siège de la photosynthèse (phase photochimique dans les thylakoïdes, phase biochimique ou cycle de Calvin dans le stroma).

---

## 2. Bioénergétique et Thermodynamique cellulaire

Toute cellule est un système thermodynamique ouvert, stationnaire, loin de l'équilibre.

### 2.1. Rappels thermodynamiques
La variation d'enthalpie libre $\Delta G$ (en $\text{J}\cdot\text{mol}^{-1}$) d'une réaction chimique à température $T$ et pression $P$ constantes est définie par :
$$\Delta G = \Delta G^\circ' + R \cdot T \cdot \ln\left(\frac{[\text{Produits}]_{\text{eff}}}{[\Réactifs]_{\text{eff}}}\right)$$

Avec $\Delta G^\circ'$ la variation d'enthalpie libre standard à $\text{pH} = 7$.
*   Si $\Delta G < 0$, la réaction est **thermodynamiquement exergonique** (spontanée).
*   Si $\Delta G > 0$, la réaction est **endergonique** (nécessite un couplage énergétique).

### 2.2. Le rôle pivot de l'ATP
L'adénosine triphosphate (ATP) est la monnaie énergétique cellulaire. L'hydrolyse de sa liaison phosphoanhydride terminale présente une forte variation d'enthalpie libre standard :
$$\text{ATP} + \text{H}_2\text{O} \rightleftharpoons \text{ADP} + \text{P}_i \quad (\Delta G^\circ' \approx -30.5\text{ kJ}\cdot\text{mol}^{-1})$$

Ce caractère fortement exergonique permet de coupler l'hydrolyse de l'ATP à des réactions endergoniques par le biais d'enzymes intermédiaires (phosphorylation de substrat).

---

## 3. Métabolisme énergétique catabolique

Le catabolisme oxydatif du glucose permet la conversion de l'énergie chimique des nutriments en ATP.

### 3.1. La glycolyse (Cytoplasme)
Oxydation partielle du glucose (hexose, $6\text{C}$) en deux molécules de pyruvate ($3\text{C}$).
$$\text{Glucose} + 2\text{ P}_i + 2\text{ ADP} + 2\text{ NAD}^+ \longrightarrow 2\text{ Pyruvate} + 2\text{ ATP} + 2\text{ NADH, H}^+ + 2\text{ H}_2\text{O}$$

*   Bilan net : $2\text{ ATP}$ et $2\text{ NADH, H}^+$ par mole de glucose.
*   Le pyruvate formé pénètre dans la mitochondrie (via une pyruvate translocase) où il est décarboxylé en acétyl-CoA par le complexe de la **pyruvate déshydrogénase** (matrice mitochondriale).

### 3.2. Le cycle de Krebs (Matrice mitochondriale)
L'acétyl-CoA ($2\text{C}$) se combine à l'oxaloacétate ($4\text{C}$) pour former le citrate ($6\text{C}$). Au cours d'un tour complet du cycle :
$$\text{Acétyl-CoA} + 3\text{ NAD}^+ + \text{FAD} + \text{GDP} + \text{P}_i + 2\text{ H}_2\text{O} \longrightarrow 2\text{ CO}_2 + 3\text{ NADH, H}^+ + \text{FADH}_2 + \text{GTP} + \text{CoA-SH}$$

### 3.3. La phosphorylation oxydative et la chaîne respiratoire (Membrane interne mitochondriale)
Les coenzymes réduits ($\text{NADH, H}^+$ et $\text{FADH}_2$) formés lors de la glycolyse, de la $\beta$-oxydation et du cycle de Krebs cèdent leurs électrons à la chaîne respiratoire (complexes I à IV).

1.  **Transfert d'électrons :** Les électrons transitent le long des complexes protéiques selon un potentiel redox croissant, jusqu'à l'accepteur final, le dioxygène ($\text{O}_2$), réduit en $\text{H}_2\text{O}$.
2.  **Génération d'un gradient de protons :** L'énergie libérée par le transport électronique est couplée à l'expulsion de protons ($\text{H}^+$) de la matrice vers l'espace intermembranaire (Complexes I, III et IV).
3.  **Synthèse d'ATP par l'ATP synthase (Complexe V) :** Le retour des protons dans la matrice selon leur gradient électrochimique à travers le canal $F_0$ de l'ATP synthase fournit l'énergie nécessaire à la réaction de phosphorylation :
$$\text{ADP} + \text{P}_i + H^+_{\text{ext}} \rightleftharpoons \text{ATP} + \text{H}_2\text{O} + H^+_{\text{mat}}$$

*   *Rendement bioénergétique théorique :* Environ 30 à 32 ATP par molécule de glucose oxydée (varie selon les navettes mitochondriales).

---

## 4. Métabolisme anabolique : La Photosynthèse (Cellules chlorophylliennes)

La photosynthèse convertit l'énergie lumineuse en énergie chimique stockée sous forme de glucides.
$$\text{6 CO}_2 + 6\text{ H}_2\text{O} \xrightarrow{\text{Lumière}} \text{C}_6\text{H}_{12}\text{O}_6 + 6\text{ O}_2$$

### 4.1. La phase photochimique (Thylakoïdes)
*   **Photosystème II (PSII) :** Oxydation de l'eau (photolyse) : $2\text{ H}_2\text{O} \rightarrow \text{O}_2 + 4\text{ H}^+ + 4\text{ e}^-$. Les électrons excités par la lumière transitent via une chaîne de transporteurs (plastoquinones, complexe $b_6f$, plastocyanine) vers le PSI.
*   **Photosystème I (PSI) :** Ré-excitation des électrons pour réduire le $\text{NADPH}$ en $\text{NADP}^+$ (via la ferrédoxine et la $\text{NADP}^+$ réductase).
*   **Photophosphorylation :** Création d'un gradient transmembranaire de protons (du stroma vers la lumière du thylakoïde) pilotant une ATP synthase thylakoïdienne.

### 4.2. La phase biochimique ou Cycle de Calvin (Stroma)
Fixation et réduction du $\text{CO}_2$ en trioses-phosphates :
1.  **Carboxylation :** Fixation du $\text{CO}_2$ sur le ribulose-1,5-bisphosphate ($\text{RuBP}$, $5\text{C}$) catalysée par la **Rubisco** (Ribulose-1,5-bisphosphate carboxylase/oxygénase), donnant deux molécules de 3-phosphoglycérate ($3\text{PGA}$).
2.  **Réduction :** Consommation de l'ATP et du $\text{NADPH, H}^+$ produits lors de la phase photochimique pour réduire le $3\text{PGA}$ en trioses-phosphates.
3.  **Régénération :** Régénération du $\text{RuBP}$ initial.

---

## 5. Synthèse et démonstrations clés (À retenir pour les colles et écrits)

*   **Bilan énergétique comparé :** Ne pas confondre rendement de la fermentation ($2\text{ ATP}$ par glucose, voie anaérobie stricte) et de la respiration cellulaire ($\approx 32\text{ ATP}$, voie aérobie).
*   **Couplage chimio-osmotique (Mitchell) :** Démontré par l'utilisation d'agents découplants (ex: 2,4-dinitrophénol) qui rendent la membrane interne mitochondriale perméable aux $\text{H}^+$ : le gradient protonique s'effondre, la chaîne respiratoire continue de consommer de l' $\text{O}_2$ mais l'ATP synthase ne synthétise plus d'ATP (dissipation de l'énergie sous forme de chaleur).
*   **Compartimentage et régulation :** L'alternance des voies métaboliques (glycolyse dans le hyaloplasme, cycle de Krebs dans la matrice) évite les boucles de futilité métabolique grâce à des transporteurs membranaires spécifiques.