---
title: 'Exercice 2 : Chaîne respiratoire mitochondriale'
description: 'Problème d entraînement type concours officiel.'
---

# PROBLÈME GUIDÉ : La chaîne respiratoire mitochondriale et le couplage énergético-osmotique

**Filière :** BCPST  
**Matière :** Sciences de la Vie et de la Terre  
Chapitre: ** Métabolisme et conversion d'énergie  
**Thème :** Fonctionnement, régulation et critique du modèle chimiosmotique de la chaîne respiratoire.

---

## 1. Énoncé du problème

La cellule eucaryote hétérotrophe convertit l'énergie des nutriments en énergie utilisable (ATP) principalement au niveau de la membrane interne mitochondriale. Le flux d'électrons le long de la chaîne respiratoire (complexes I à IV) est couplé à l'éjection de protons ($\text{H}^+$) de la matrice vers l'espace intermembranaire. Ce gradient électrochimique de protons est ensuite exploité par l'ATP synthase (Complexe V) pour phosphoryler l'ADP. 

Ce problème propose d'analyser, à travers des données expérimentales et biochimiques, les mécanismes de ce couplage, les conséquences de toxiques métaboliques, et d'exercer un regard critique indispensable sur les limites du modèle classique de Mitchell.

---

## 2. Questions

1. **Restitution des connaissances :** Décrire brièvement le devenir des coenzymes réduits ($\text{NADH}, \text{H}^+$ et $\text{FADH}_2$) issus du cycle de Krebs au niveau des complexes I et II de la chaîne respiratoire. Préciser le rôle final du dioxygène ($\text{O}_2$).
2. **Analyse de données expérimentales :** On étudie la consommation d'oxygène ($\text{O}_2$) et la synthèse d'ATP par des mitochondries isolées in vitro. 
   - *Expérience A :* Ajout d'ADP et de malate/pyruvate (substrats du cycle de Krebs). On observe une forte augmentation de la consommation d' $\text{O}_2$ et de la production d'ATP.
   - *Expérience B :* En l'absence d'ADP, on ajoute du 2,4-dinitrophénol (2,4-DNP), une molécule hydrophobe capable de transporter les protons à travers les membranes. On observe une augmentation drastique de la consommation d' $\text{O}_2$, mais une chute de la production d'ATP à zéro.  
   *Expliquer ces résultats en introduisant la notion de contrôle respiratoire et le mode d'action du 2,4-DNP.*
3. **Démarche quantitative :** La force motrice protonique ($\Delta p$) est définie par l'équation thermodynamique : 
   $$\Delta p = \Delta\Psi - \frac{2.3 RT}{F} \Delta\text{pH}$$
   Sachant que $\Delta\Psi$ (potentiel de membrane) est négatif dans la matrice (environ $-180\text{ mV}$ par rapport à l'espace intermembranaire) et que le $\text{pH}$ matriciel est de $8.0$ contre $7.0$ dans l'espace intermembranaire, calculer qualitativement le sens du flux spontané des protons et justifier le rôle de l'ATP synthase.
4. **Analyse critique et limites du modèle :** Le modèle chimiosmotique standard suppose que les protons sont uniformément libérés dans le grand réservoir de l'espace intermembranaire et que la membrane interne est un isolant parfait. Discuter de la validité de ces postulats au regard des données biophysiques récentes (organisation en supercomplexes ou "respirosomes", fuites protoniques basales).

---

## 3. Pistes de réflexion

- **Q1 :** Pensez à la notion de potentiel redox ($\text{E}^\circ$) croissant le long de la chaîne.
- **Q2 :** Dissociez l'oxydation des substrats (flux d'électrons) de la phosphorylation de l'ADP. Qu'indique l'effet du 2,4-DNP sur le couplage énergétique ?
- **Q3 :** Attention aux signes : le gradient de $\text{pH}$ et le potentiel électrique s'additionnent pour former une force thermodynamique globale (exergonique).
- **Q4 :** Sondez l'organisation spatiale des complexes protéiques membranaires : fonctionnent-ils de manière isolée ou en clusters fonctionnels ? Quid de la perméabilité membranaire passive ?

---

## 4. Corrigé pas à pas

### Corrigé de la Q1 : Transfert d'électrons et réduction de l'oxygène
Les coenzymes réduits ($\text{NADH}, \text{H}^+$ et $\text{FADH}_2$) sont oxydés au niveau de la face matricielle de la membrane interne mitochondriale, respectivement par le complexe I (NADH déshydrogénase) et le complexe II (succinate déshydrogénase). 
Les électrons transitent ensuite le long d'une cascade de transporteurs (ubiquinone, cytochromes) de potentiels redox croissants. Ce flux d'électrons libère de l'énergie libre, utilisée par les complexes I, III et IV pour pomper des protons ($\text{H}^+$) de la matrice vers l'espace intermembranaire. 
À l'extrémité de la chaîne, au niveau du complexe IV (cytochrome c oxydase), les électrons sont pris en charge par l'accepteur final, le dioxygène ($\text{O}_2$), qui est réduit en molécules d'eau ($\text{H}_2\text{O}$) en captant des protons matriciels.

### Corrigé de la Q2 : Contrôle respiratoire et découplage
- **Expérience A :** L'ajout de substrats et d'ADP permet le fonctionnement couplé de la chaîne respiratoire et de l'ATP synthase. L'ADP est indispensable : sans lui, le gradient de protons s'accumule tellement qu'il exerce une "pression" thermodynamique qui inhibe le pompage par les complexes respiratoires (contrôle respiratoire). L'ajout d'ADP permet sa phosphorylation en ATP, dissipe partiellement le gradient, et relance la consommation d' $\text{O}_2$.
- **Expérience B :** Le 2,4-DNP est un agent **découplant**. Étant lipophile, il peut traverser la bicouche lipidique en transportant des protons, court-circuitant ainsi l'ATP synthase. Le gradient protonique est dissipé sans production d'ATP. La chaîne respiratoire fonctionne alors "à vide" et à vitesse maximale, ce qui explique l'explosion de la consommation d' $\text{O}_2$ couplée à une absence totale de synthèse d'ATP (l'énergie est perdue sous forme de chaleur).

### Corrigé de la Q3 : Force motrice protonique
La formule de $\Delta p$ combine le gradient électrique ($\Delta\Psi$) et le gradient chimique ($\Delta\text{pH}$) :
- Le pH passe de $7.0$ (espace intermembranaire) à $8.0$ (matrice), soit un $\Delta\text{pH} = -1.0$ (plus basique dans la matrice).
- Le potentiel de membrane $\Delta\Psi$ est d'environ $-180\text{ mV}$ (interne négatif).

Ces deux composantes agissent de concert pour attirer les protons de l'espace intermembranaire vers la matrice. La force motrice protonique ($\Delta p$) est donc fortement négative, ce qui rend le flux de retour des protons **thermodynamiquement spontané et exergonique**. L'ATP synthase utilise cette énergie cinétique de diffusion pour catalyser la réaction endergonique : 
$$\text{ADP} + \text{P}_i + \text{H}^+ \rightarrow \text{ATP} + \text{H}_2\text{O}$$

---

### 5. Analyse critique et limites du modèle (Question 4)

Si le modèle chimiosmotique de Peter Mitchell (1961) a révolutionné la bioénergétique et reste le socle de l'enseignement, il présente aujourd'hui des **limites conceptuelles et biophysiques** majeures qui nécessitent d'être nuancées :

1. **Le dogme du "réservoir homogène" vs les nanodomaines :** 
   Le modèle suppose que les protons éjectés par les complexes se diluent uniformément dans tout l'espace intermembranaire avant d'être captés par l'ATP synthase. Or, la microscopie à haute résolution et la biochimie structurale moderne ont mis en évidence l'existence de **supercomplexes respiratoires** (ou *respirosomes*, associant les complexes I, III et IV). Les protons ne sont donc pas libérés dans un grand bain aléatoire, mais sont canalisés de manière préférentielle vers l'ATP synthase via des "micro-canaux" hydratés de surface membranaire, invalidant l'hypothèse d'une diffusion purement aléatoire.
2. **L'étanchéité de la membrane :** 
   La membrane interne n'est pas un isolant parfait. Il existe une "fuite protonique basale" non négligeable (due à la présence de lipides spécifiques comme la cardiolipine, ou de transporteurs basaux comme les UCP - *uncoupling proteins*). Le rendement énergétique théorique (calculé à $3$ ou $2,5$ ATP par NADH) est donc un idéal thermodynamique jamais atteint in vivo.
3. **Le rôle pléiotrope de $\Delta\Psi$ :** 
   Le gradient de protons ne sert pas uniquement à fabriquer de l'ATP ; il est aussi massivement consommé pour le transport actif de métabolites (ex: entrée du pyruvate, sortie de l'ATP via l'adénine nucléotide translocase). Le modèle linéaire simple de couplage proton-ATP sous-estime la complexité du réseau métabolique mitochondrial global.
Conclusion: ** Le modèle chimiosmotique demeure une approximation macroscopique robuste, mais il doit être complété par une vision supramoléculaire et dynamique de la membrane mitochondriale interne.