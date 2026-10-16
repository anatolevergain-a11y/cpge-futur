---
title: 'Cours : Cartographie et histoire géologique de la France'
description: 'Synthèse de cours, théorèmes fondamentaux et démonstrations.'
---

## 📌 1. Définitions & Cadre d'étude

La cartographie géologique et la reconstitution de l'histoire géologique de la France reposent sur l'analyse spatiale et temporelle des ensembles orogéniques et sédimentaires qui constituent le territoire métropolitain. La France présente une remarquable diversité géologique, synthèse de plusieurs cycles orogéniques majeurs.

### 1.1. Les grands domaines structuraux de la France
*   **Le socle hercynien (ou varisque) :** Issu de l'orogenèse hercynienne (Paléozoïque, du Dévonien au Permien), il affleure dans les massifs anciens (Massif armoricain, Massif central, Vosges, Ardennes, Morvan, partie des Maures et de l'Esterel). Il résulte de la collision entre les supercontinents Euramérique (Laurussia) et Gondwana, menant à la fermeture de l'océan Rhéïque.
*   **Les bassins sédimentaires :** Vastes zones en subsidence, caractérisées par l'accumulation de séries sédimentaires post-hercyniennes (Mésozoïque et Cénozoïque). Les deux principaux sont le Bassin parisien et le Bassin aquitain.
*   **Les chaînes de montagnes alpines et pyrénéennes :** Résultant de l'orogenèse alpine (Cénozoïque) pour les Alpes, le Jura et les Pyrénées (Eocène). Ces chaînes impliquent la fermeture de domaines océaniques (Téthys alpine, golfe de Gascogne/rift pyrénéen) et la convergence des plaques africaine (ou blocs adriatiques) et ibérique sous la plaque eurasiatique.

### 1.2. Outils fondamentaux de la cartographie géologique
*   **La carte géologique topographique :** Représentation plane, à différentes échelles (notamment le $1/50\,000$ édité par le BRGM), de la géométrie des formations affleurantes ou sous-jacentes (après restitution).
*   **Les critères géométriques de lecture :**
    *   *La règle des V de de Lamothe :* Permet de déterminer le pendage des couches sédimentaires en fonction de l'intersection des limites stratigraphiques avec la topographie (les vallées).
    *   *La coupe géologique :* Interprétation en trois dimensions de la géométrie souterraine à partir des données de surface (affleurements, forages, pendages).

---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### 2.1. Principes de la stratigraphie relative
L'histoire géologique de la France se lit par l'application stricte des principes stratigraphiques fondamentaux, qui permettent d'établir une chronologie relative des événements enregistrés dans les bassins et les massifs.

*   **Principe de superposition :** Toute couche sédimentaire sus-jacente est plus récente que la couche sous-jacente, sauf en cas de tectonique inverse avérée (charriage).
*   **Principe de continuité :** Une même couche est définie par le même âge sur toute son étendue.
*   **Principe d'horizontalité :** Les sédiments se déposent initialement à l'horizontale (ou selon un pendage initial faible). Tout pendage prononcé ou plissement ultérieur témoigne d'une phase tectonique postérieure.
*   **Principe d'inclusion :** Tout objet inclus dans une formation géologique est plus ancien que la formation qui l'inclut (ex. : xénolites dans un granite, galets dans un conglomérat).
*   **Principe de recoupement :** Toute structure géologique qui en recoupe une autre est plus récente que celle qu'elle affecte (ex. : faille recoupant des strates sédimentaires, filon magmatique).

### 2.2. Analyse cinématique et géométrique des structures tectoniques
La reconstitution de l'histoire géologique nécessite l'analyse des régimes contraints :

*   **Régime compressif :** Caractérisé par des failles inverses, des chevauchements, des plis (anticlinaux et synclinaux) et une schistosité de flux (ex. : orogenèse alpine ou hercynienne). L'axe de raccourcissement maximal $\sigma_1$ est horizontal.
*   **Régime distensif :** Caractérisé par des failles normales, des fossés d'effondrement (grabens) et des demi-grabens (ex. : fossé rhénan, rift cévenol). L'axe d'extension maximal $\sigma_3$ est horizontal.
*   **Régime décrochant :** Caractérisé par des failles coulissantes à mouvement horizontal (ex. : faille de Nîmes).

---

## 💡 3. Méthodes de calcul & Algorithmes

Pour analyser une coupe géologique ou résoudre un problème de cartographie aux concours (épreuve écrite ou orale de travaux pratiques), la méthode rigoureuse suivante doit être appliquée :

### 3.1. Algorithme de résolution d'une coupe géologique et de calcul de pendage réel
1.  **Repérage des données topographiques et structurales :**
    *   Identifier sur la carte les altitudes des points d'affleurement d'une même limite stratigraphique.
    *   Relever les mesures de pendage ($\alpha$) et de direction (azimut $\theta$) si elles sont indiquées.
2.  **Calcul de la puissance $P$ d'une couche sédimentaire :**
    Si la couche est inclinée avec un pendage $\alpha$ et que l'on mesure sa largeur d'affleurement $l$ sur une surface topographique horizontale, la puissance réelle $P$ (épaisseur perpendiculaire aux plans de stratification) se calcule par la relation trigonométrique :
    $$P = l \cdot \sin(\alpha)$$
Note: Si le terrain présente une pente topographique $\beta$, il convient d'utiliser les relations géométriques vectorielles adaptées dans le plan vertical de la coupe.*
3.  **Datation absolue par géochronologie (Radiochronologie) :**
    L'utilisation des couples radiométriques (ex. : $^{87}\text{Rb}/^{87}\text{Sr}$ ou $^{40}\text{K}/^{40}\text{Ar}$) obéit à la loi de désintégration radioactive :
    $$N(t) = N(0) \cdot e^{-\lambda t}$$
    Où $N(t)$ est le nombre d'atomes fils ou pères mesurés, et $\lambda$ la constante radioactive. L'âge $t$ de cristallisation d'un socle magmatique hercynien s'obtient par l'équation de la droite isochrone :
    $$\left(\frac{87\text{Sr}}{86\text{Sr}}\right)_{\text{mesuré}} = \left(\frac{87\text{Sr}}{86\text{Sr}}\right)_{\text{initial}} + \left(\frac{87\text{Rb}}{86\text{Sr}}\right) \cdot (e^{\lambda t} - 1)$$

---

## ⚠️ 4. Pièges classiques aux Concours

1.  **Confondre chronologie relative et absolue :**
    *   *Piège :* Dater un faciès uniquement par son aspect lithologique (ex. : "les grès sont forcément cambriens").
    *   *Correction :* Utiliser les associations fossilifères (biostratigraphie) et recouper avec la radiochronologie. Un même faciès lithologique (faciès gréseux ou calcaire) est souvent diachrone.
2.  **Mauvaise interprétation de la règle des V dans les vallées :**
    *   *Piège :* Croire que le V pointe toujours dans le sens du pendage.
    *   *Correction :* Le V pointe dans le sens du pendage *si et seulement si* les couches plongent dans le sens contraire de la pente de la vallée (ou avec un pendage inférieur à la pente topographique). Si le pendage est supérieur et dans le même sens que la pente, le V pointe vers l'amont.
3.  **Oublier les lacunes stratigraphiques (discordances) :**
    *   *Piège :* Considérer que la sédimentation a été continue entre le Paléozoïque et le Mésozoïque dans tous les bassins français.
    *   *Correction :* Rechercher systématiquement les discordances angulaires ou érosives qui témoignent des phases majeures d'émersion et d'orogenèse (ex. : discordance permo-triasique sur le socle hercynien).
4.  **Erreurs de vocabulaire tectonique :**
    *   *Piège :* Utiliser le terme "fausse faille" ou confondre "synclinal perché" avec un anticlinal topographique.
    *   *Correction :* Un synclinal perché correspond à une cuvette structurale dont le cœur (plus récent) est plus résistant à l'érosion que les anticlinaux adjacents, formant ainsi un relief positif. La topographie ne reflète pas toujours directement la structure géologique profonde.