---
title: 'Exercice 1 : Stéréochimie'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Analyse stéréochimique et limites conformationnelles d'un principe actif

## Énoncé

La stéréochimie joue un rôle primordial dans l'industrie pharmaceutique, l'activité biologique d'une molécule étant souvent intimement liée à sa configuration tridimensionnelle. On s'intéresse dans ce problème à la structure d'un intermédiaire réactionnel de synthèse, le **2-amino-1-phénylpropan-1-ol** (molécule $M$), dont certains stéréoisomères entrent dans la composition de médicaments vasoconstricteurs.

La molécule $M$ possède deux carbones asymétriques (porteurs de substituants différents et de quatre groupements distincts), notés $C_1$ et $C_2$. Sa formule plane est la suivante :
$$\text{C}_6\text{H}_5-\text{CH}(\text{OH})-\text{CH}(\text{NH}_2)-\text{CH}_3$$

L'objectif de ce problème est de déterminer la configuration absolue de ces centres, d'étudier les relations stéréochimiques entre les différents diastéréoisomères, et d'analyser de manière critique la stabilité conformationnelle de ces espèces en solution.

---

## Questions

### Partie 1 : Détermination de la configuration absolue
1. Rappeler la définition d'un carbone asymétrique et identifier les deux carbones asymétriques $C_1$ et $C_2$ de la molécule $M$.
2. Énoncer les règles de Cahn-Ingold-Prelog (CIP) permettant de hiérarchiser les groupements autour d'un centre stéréogène.
3. Appliquer ces règles au carbone $C_1$ pour la configuration où le groupement hydroxyle $(-\text{OH})$ est orienté vers l'avant. Attribuer la configuration $(R)$ ou $(S)$ à ce carbone en explicitant la méthode de visualisation (projection de Fischer ou vision en perspective).
4. Déterminer, par un raisonnement similaire, la configuration absolue du carbone $C_2$.

### Partie 2 : Stéréoisomérie et relations d'isomérie
5. Combien de stéréoisomères configurationnels la molécule $M$ peut-elle théoriquement posséder ? Justifier.
6. Représenter en projection de Fischer l'ensemble de ces stéréoisomères.
7. Préciser la relation de stéréoisomérie existant entre :
   - Le stéréoisomère $(1R, 2R)$ et le stéréoisomère $(1S, 2S)$.
   - Le stéréoisomère $(1R, 2R)$ et le stéréoisomère $(1R, 2S)$.
8. La molécule $M$ présente-t-elle une activité optique mesurable dans toutes ses formes ? Discuter le cas particulier des formes particulières (méso, s'il y en a).

### Partie 3 : Analyse conformationnelle et limites du modèle
9. Représenter en projection de Newman la conformation la plus stable du diastéréoisomère $(1R, 2S)$ selon l'axe $C_1-C_2$, en tenant compte des interactions stériques et des éventuelles liaisons hydrogène intramoléculaires.
10. **Analyse critique :** Le modèle classique des structures rigides (Fischer, Newman figé) est-il suffisant pour prédire l'activité biologique de $M$ à température physiologique ? Discuter des limites de ce modèle en abordant la notion de flexibilité conformationnelle et d'effet solvant.

---

## Pistes et indications

* **Piste 1 (Règles CIP) :** Pour le carbone $C_1$, comparez les numéros atomiques des atomes directement liés : $\text{O}$ (oxygène), $\text{C}$ (carbone du phényle), $\text{C}$ (carbone $C_2$), et $\text{H}$ (hydrogène).
* **Piste 2 (Projection) :** Si le groupement de plus faible priorité (souvent $-\text{H}$) est dirigé vers l'avant dans une représentation en perspective, inversez la conclusion $(R/S)$ obtenue initialement.
* **Piste 3 (Liaison hydrogène) :** En solution, les fonctions $-\text{OH}$ et $-\text{NH}_2$ peuvent interagir par liaison hydrogène intramoléculaire, ce qui stabilise certaines conformations décalées particulières.
* **Piste 4 (Esprit concours) :** Pour la dernière question, ne vous limitez pas à réciter le cours sur les conformations. Pensez à l'échelle de temps des mouvements moléculaires (cinétique d'interconversion conformationnelle $vs$ temps d'interaction récepteur-ligand).

---

## Corrigé pas à pas

### Partie 1 : Détermination de la configuration absolue

1. **Carbone asymétrique et identification :**
   Un carbone asymétrique (ou stéréogène) est un carbone $sp^3$ lié à quatre groupements atomiques chimiquement différents. Pour la molécule $M$ ($\text{C}_6\text{H}_5-\text{CH(OH)}-\text{CH(NH}_2)-\text{CH}_3$) :
   - Le carbone $C_1$ est le carbone portant le groupement $-\text{OH}$. Ses quatre substituants sont : $-\text{OH}$, $-\text{C}_6\text{H}_5$ (phényle), $-\text{CH(NH}_2)\text{CH}_3$ (le reste de la chaîne $C_2$), et $-\text{H}$. Ils sont tous différents : $C_1$ est asymétrique.
   - Le carbone $C_2$ est le carbone portant le groupement $-\text{NH}_2$. Ses quatre substituants sont : $-\text{NH}_2$, $-\text{CH}(\text{OH})\text{C}_6\text{H}_5$ ($C_1$), $-\text{CH}_3$ (méthyle), et $-\text{H}$. Ils sont tous différents : $C_2$ est asymétrique.

2. **Règles de Cahn-Ingold-Prelog (CIP) :**
   - **Règle 1 :** On classe les atomes directement liés au carbone asymétrique par ordre de numéro atomique ($Z$) décroissant. Le plus grand $Z$ obtient la priorité 1, le plus faible la priorité 4.
   - **Règle 2 :** En cas d'égalité (deux atomes identiques liés au centre), on examine les atomes de rang suivant liés à ces atomes, classés par $Z$ décroissant, en progressant le long de la chaîne jusqu'à trouver une différence.
   - **Règle 3 :** Les liaisons multiples (doubles, triples) sont comptées comme autant de liaisons simples fictives équivalentes avec l'atome lié.

3. **Application au carbone $C_1$ :**
   Substituants de $C_1$ et numéros atomiques des atomes liés directement :
   - $-\text{OH}$ : atome d'oxygène ($Z = 8$) $\rightarrow$ **Priorité 1**
   - $-\text{CH}(\text{NH}_2)\text{CH}_3$ ($C_2$) : lié à $\text{N}$, $\text{C}$, $\text{H}$ ($\max Z = 7$ pour $\text{N}$) $\rightarrow$ **Priorité 2**
   - $-\text{C}_6\text{H}_5$ (phényle) : le carbone ipso est lié à deux carbones du cycle et un carbone en double liaison (équivalent à trois liaisons $\text{C-C}$, $Z = 6$) $\rightarrow$ **Priorité 3**
   - $-\text{H}$ : atome d'hydrogène ($Z = 1$) $\rightarrow$ **Priorité 4**

   Si l'on observe $C_1$ avec le groupement $-\text{H}$ (priorité 4) vers l'arrière, et que l'on tourne de 1 $\rightarrow$ 2 $\rightarrow$ 3 dans le sens des aiguilles d'une montre, la configuration est $(R)$. Dans le cas contraire, elle est $(S)$.

4. **Application au carbone $C_2$ :**
   Substituants de $C_2$ :
   - $-\text{NH}_2$ ($\text{N}, Z = 7$) $\rightarrow$ **Priorité 1**
   - $-\text{CH}(\text{OH})\text{C}_6\text{H}_5$ ($C_1$) : lié à $\text{O}, \text{C}, \text{H}$ ($\max Z = 8$ pour $\text{O}$) $\rightarrow$ **Priorité 2**
   - $-\text{CH}_3$ (méthyle, $\text{C}$ lié à 3 $\text{H}$) $\rightarrow$ **Priorité 3**
   - $-\text{H}$ ($\text{H}, Z = 1$) $\rightarrow$ **Priorité 4**
   En orientant le groupement $-\text{H}$ vers l'arrière, on détermine le sens de circulation de 1 vers 3 pour attribuer $(R)$ ou $(S)$.

---

### Partie 2 : Stéréoisomérie et relations d'isomérie

5. **Nombre de stéréoisomères :**
   La molécule possède $n = 2$ carbones asymétriques non symétriques (les extrémités de la chaîne carbonée sont différentes : $-\text{C}_6\text{H}_5$ d'un côté et $-\text{CH}_3$ de l'autre). Le nombre maximal de stéréoisomères configurationnels est donc de $2^n = 2^2 = 4$.

6. **Représentation en projection de Fischer :**
   Les 4 stéréoisomères sont des couples d'énantiomères :
   - Paire 1 : $(1R, 2R)$ et son énantiomère $(1S, 2S)$
   - Paire 2 : $(1R, 2S)$ et son énantiomère $(1S, 2R)$

7. **Relations de stéréoisomérie :**
   - Entre $(1R, 2R)$ et $(1S, 2S)$ : tous les centres asymétriques ont des configurations inversées. Ce sont des **énantiomères** (images miroir non superposables).
   - Entre $(1R, 2R)$ et $(1R, 2S)$ : un seul centre change de configuration ($C_2$ passe de $R$ à $S$), tandis que l'autre reste identique. Ce sont des **diastéréoisomères** (stéréoisomères qui ne sont pas énantiomères).

8. **Activité optique :**
   Chacun des 4 stéréoisomères possède un pouvoir rotatoire non nul car la molécule est chirale (pas d'axe de symétrie impropre $S_n$, ni de plan ou de centre de symétrie global). Il n'existe pas de forme méso ici, car la molécule n'est pas symétrique (les deux moitiés de part et d'autre de la liaison $C_1-C_2$ sont différentes).

---

### Partie 3 : Analyse conformationnelle et limites du modèle

9. **Conformation la plus stable (Newman selon $C_1-C_2$) :**
   Pour le diastéréoisomère $(1R, 2S)$, la conformation la plus stable en solution non polaire minimise l'gêne stérique (conformation décalée) et maximise la stabilisation par liaison hydrogène intramoléculaire entre l'hydrogène du groupement $-\text{OH}$ et le doublet non liant de l'azote de l'amine $-\text{NH}_2$.
   En plaçant le carbone $C_1$ devant et $C_2$ derrière, l'isomère privilégié adopte une disposition où $-\text{OH}$ et $-\text{NH}_2$ sont en position gauche (angle dièdre $\approx 60^\circ$), permettant l'établissement d'un pont hydrogène cyclique à 5 ou 6 chaînons, abaissant l'énergie du système.

10. **Analyse critique et limites du modèle (Rigueur et Nuance) :**
    * **Limites du modèle statique (Fischer / Newman figé) :** 
      Les représentations de Fischer et de Newman suggèrent des structures figées dans l'espace. Or, à température ambiante ($T = 298\text{ K}$), l'énergie thermique disponible ($RT \approx 2,5\text{ kJ}\cdot\text{mol}^{-1}$) est amplement suffisante pour franchir les barrières de rotation autour des liaisons simples $\sigma$ (typiquement 12 à 25 $\text{kJ}\cdot\text{mol}^{-1}$ pour des gènes stériques modérées). La molécule $M$ existe donc non pas sous une seule conformation, mais sous un **ensemble dynamique de conformères** en équilibre rapide.
    * **Effet du milieu (Solvatation) :**
      Le modèle conformationnel basé uniquement sur les interactions intramoléculaires (liaison hydrogène) néglige l'effet crucial du solvant. Dans un solvant protique ou polaire (comme l'eau biologique), les groupements $-\text{OH}$ et $-\text{NH}_2$ forment de fortes liaisons hydrogène avec les molécules de solvant, ce qui concurrence et perturbe la liaison hydrogène intramoléculaire. La conformation privilégiée *in vitro* (ou *in vivo* dans la poche hydrophobe d'une enzyme) peut ainsi différer radicalement de celle calculée en phase gaz ou en solvant apolaire.
    * **Conclusion critique :** Le modèle stéréochimique classique (CIP + Fischer) est un outil topologique indispensable pour nommer et classer les molécules, mais il constitue une **simplification excessive** de la réalité physique. Pour prédire l'activité biologique, il est impératif d'associer la stéréochimie configurationnelle à une approche thermodynamique et dynamique (mécanique moléculaire, dynamique moléculaire) prenant en compte la flexibilité conformationnelle de la molécule et sa complémentarité de forme adaptative ("ajustement induit" ou *induced fit*) avec sa cible biologique.