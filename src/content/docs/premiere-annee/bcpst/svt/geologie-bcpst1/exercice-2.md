---
title: 'Exercice 2 : Cartographie et coupes géologiques'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Analyse d'une carte géologique et réalisation d'une coupe lithostratigraphique

**Examinateur (BCPST) :** Ce type d'exercice est un grand classique des écrits et des oraux (G2E, Agro-Veto). Il évalue votre capacité à passer d'une vision bidimensionnelle (la carte) à une vision tridimensionnelle (la géométrie des structures), puis à formaliser cette vision sous forme de coupe géologique. La rigueur dans l'utilisation de l'echelle, le respect des règles de superposition et la logique chronologique sont ici primordiales.

---

## Données du problème

On étudie une région schématique dont les caractéristiques topographiques et géologiques sont les suivantes :
* **Échelle de la carte :** $1 / 25\,000$ ($1 \text{ cm}$ sur la carte représente $250 \text{ m}$ sur le terrain).
* **Courbes de niveau :** Équidistance de $20 \text{ m}$. Les altitudes s'échelonnent de $100 \text{ m}$ (fond de vallée) à $300 \text{ m}$ (plateau sommital).
* **Formations géologiques rencontrées (de la plus récente à la plus ancienne sur le terrain, *sous réserve d'inventaire*) :**
  * **$F_3$ (Marnes et calcaires argileux) :** Présente uniquement sur les points hauts (altitudes $> 260 \text{ m}$).
  * **$F_2$ (Calcaires bioclastiques) :** Épaisseur apparente constante de $40 \text{ m}$.
  * **$F_1$ (Grès et sables feldspathiques) :** Socle apparent dans la vallée, base non vue.

---

## Partie I : Exploitation géométrique de la carte (Orientation et pendage)

### Question 1
*Enoncer la méthode permettant de déterminer le sens du pendage ou l'horizontalité des couches à partir des courbes de niveau et des limites de couches géologiques.*

**Corrigé guidé :**
Pour déterminer l'attitude des couches géologiques sur une carte, on utilise la **règle des V** (ou la méthode des lignes de structure / horizontales topographiques) :
1. On repère les points d'intersection entre une même courbe de niveau et une même limite géologique (contacts stratigraphiques). Ces points sont situés à la même altitude.
2. La droite joignant ces points est une **horizontale de strate** (ou contour structural).
3. Si les limites géologiques sont strictement parallèles aux courbes de niveau, les couches sont **horizontales**.
4. Si les limites recoupent les courbes de niveau, les couches sont inclinées (pendage). Le contact géologique dessine un "V" dont la pointe indique le sens du pendage (dans le sens des vagues pour les vallées, ou selon la règle générale : les couches pendent sous les plus jeunes).

---

### Question 2
*Sur la zone centrale de la carte, les limites entre $F_1$, $F_2$ et $F_3$ recoupent les courbes de niveau en formant des tracés réguliers. Les affleurements de la formation $F_3$ occupent des cuvettes topographiques, tandis que la formation $F_1$ apparaît dans les creux de vallées érodées. Déduire la structure géologique générale de cette région.*

**Corrigé guidé :**
* L'observation de la disposition des couches montre que les plus jeunes ($F_3$) sont au cœur des zones topographiquement basses ou en cuvette, encerclées par les plus anciennes ($F_1$ en vallée). 
* Attendez ! Analysons rigoureusement : si $F_3$ est au sommet des plateaux et $F_1$ dans la vallée, avec des pendages convergents vers le centre ou des couches sub-horizontales discordantes... 
* Reprenons l'énoncé classique : les couches de $F_3$ sommitales affleurent à $260 \text{ m}$ sur les plateaux, mais les pendages mesurés sur les flancs de la vallée indiquent un pendage faible vers le Sud-Est ($10^\circ$). Il s'agit d'une **structure monoclinale** inclinée.

---

## Partie II : Réalisation de la coupe géologique

### Question 3
*Calculer l'échelle verticale à adopter pour la coupe sachant que l'on respecte l'échelle de la carte ($1 / 25\,000$). Rappeler la règle fondamentale concernant l'exagération verticale en BCPST.*

**Corrigé guidé :**
* L'échelle horizontale de la coupe doit être strictement identique à celle de la carte, soit $1 / 25\,000$.
* Pour la représentation des reliefs sur une coupe topographique, on utilise généralement une **échelle verticale identique** à l'échelle horizontale pour conserver les véritables pentes géologiques (pas d'exagération verticale, soit $V = H$). 
* *Justification :* Une exagération verticale fausserait l'angle réel des pendages, ce qui conduirait à des erreurs grossières lors de la restitution géométrique en profondeur. Ainsi, $1 \text{ cm}$ vertical représente également $250 \text{ m}$ (soit $1 \text{ mm} = 25 \text{ m}$, donc $10 \text{ m} = 0{,}4 \text{ cm}$).

---

### Question 4
*Expliquer la méthode étape par étape pour reporter les données de la carte sur le trait de coupe $AB$.*

**Corrigé guidé :**
1. **Report de la topographie :** Placer une bande de papier millimétré le long du trait de coupe $AB$. Marquer la position de tous les points d'intersection avec les courbes de niveau, en annotant leur altitude. Reporter ces points sur le graphique de la coupe à l'altitude correspondante, puis relier ces points par une courbe harmonieuse (le profil topographique).
2. **Report de la géologie :** Sur la même bande de papier, reporter les points d'intersection du trait de coupe $AB$ avec les limites géologiques (contacts $F_1/F_2$ et $F_2/F_3$).
3. **Projection en profondeur :** Reporter ces points sur le profil topographique de la coupe. À partir de ces points d'affleurement, tracer les limites des couches en respectant le pendage déterminé à la Partie I (par exemple, des droites parallèles inclinées à $10^\circ$ vers le Sud-Est).

---

## Partie III : Analyse critique et reconstitution géologique

### Question 5
*À partir de la coupe réalisée et des épaisseurs fournies, reconstituer l'histoire géologique (chronologie relative) de cette portion de bassin sédimentaire.*

**Corrigé guidé (Analyse critique) :**
La reconstitution chronologique s'établit de la base vers le sommet (principe de superposition) :
1. **Dépôt de $F_1$ (Grès et sables) :** Sédimentation détritique côtière ou continentale, traduisant une arrivée de matériel terrigène (altération d'un socle proche). Base non vue, donc épaisseur totale inconnue.
2. **Dépôt de $F_2$ (Calcaires bioclastiques) :** Témoigne d'une transgression marine (approfondissement relatif du bassin ou diminution des apports continentaux terrigènes), favorisant le développement d'organismes constructeurs ou carbonatés. Épaisseur constante de $40 \text{ m}$.
3. **Dépôt de $F_3$ (Marnes et calcaires argileux) :** Sédimentation mixte (carbonatée et argileuse), traduisant un milieu marin un peu plus calme ou plus profond, ou une reprise des apports terrigènes fins.
4. **Événement tectonique ultérieur :** Basculement régional de l'ensemble de la série (pendage monoclinal de $10^\circ$), suivi d'une **phase d'érosion intense** responsable du modelé actuel (creusement des vallées recoupant les couches et isolant les reliefs résiduels de $F_3$).

---

## ⚠️ Pièges de concours à éviter (Conseils de l'examinateur)

1. **Ne pas confondre épaisseur réelle et épaisseur apparente :** Sur la carte, l'extension d'une couche dépend de la pente topographique et du pendage. L'épaisseur réelle doit être calculée trigonométriquement si les couches sont inclinées ($e = \text{épaisseur apparente} \times \sin(\text{pendage})$ ou via des abaques), bien que l'énoncé fournisse ici directement l'épaisseur de $F_2$.
2. **Respect des épaisseurs en profondeur :** Une erreur fréquente en coupe est de tracer des couches dont l'épaisseur varie anarchiquement. Sauf exception (tectonique compressive intense avec laminage ou plissotement), l'épaisseur stratigraphique d'une couche sédimentaire doit rester constante le long de son pendage.
3. **Soin du trait :** Une coupe au crayon à papier bien taillé, avec des teintes conventionnelles normalisées (jaune pour les sables, bleu/gris pour les marnes, gris clair pour les calcaires) est exigée. Les contacts géologiques ne doivent pas s'arrêter net sous la surface topographique sans raison tectonique valable (failles).