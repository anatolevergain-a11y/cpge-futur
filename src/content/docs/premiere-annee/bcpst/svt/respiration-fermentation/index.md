---
title: 'Cours : Métabolisme et conversion d énergie'
description: 'Synthèse de cours, théorèmes et démonstrations.'
---

# Fiche de Cours : Métabolisme et conversion d'énergie
**Filière :** BCPST 1ère année — **Matière :** Sciences de la Vie et de la Terre (SVT)

---

## I. Introduction au métabolisme cellulaire

### 1. Définitions fondamentales
Le **métabolisme** désigne l'ensemble des réactions chimiques qui se déroulent au sein d'une cellule vivante. Il est divisé en deux grandes voies interconnectées :
*   **Anabolisme :** Ensemble des réactions de biosynthèse. Ce sont des processus endergoniques (consommateurs d'énergie, $\Delta G > 0$).
*   **Catabolisme :** Ensemble des réactions de dégradation des molécules organiques. Ce sont des processus exergoniques (producteurs d'énergie, $\Delta G < 0$).

### 2. Monnaie énergétique : l'ATP
L'adénosine triphosphate (ATP) est l'intermédiaire énergétique universel du vivant. Son hydrolyse en ADP et $P_i$ (phosphate inorganic) est une réaction fortement exergonique :
$$\text{ATP} + \text{H}_2\text{O} \rightleftharpoons \text{ADP} + P_i \quad (\Delta G^\circ' \approx -30,5 \text{ kJ}\cdot\text{mol}^{-1})$$

> **Définition (Couplage énergétique) :** Le couplage énergétique consiste à associer une réaction exergonique (fournisseuse d'énergie, souvent l'hydrolyse de l'ATP) à une réaction endergonique (consommatrice d'énergie) de sorte que la variation globale d'enthalpie libre du système couplé soit négative ($\Delta G_{tot} < 0$).

---

## II. Le catabolisme énergétique : de la matière organique à l'ATP

### 1. La glycolyse (Voie d'Embden-Meyerhof-Parnas)
La glycolyse se déroule dans le **hyaloplasme** (cytosol). Elle est commune à la très grande majorité des organismes (anaérobies et aérobies).

*   **Bilan global :**
    $$\text{Glucose} + 2\text{ NAD}^+ + 2\text{ ADP} + 2\text{ P}_i \longrightarrow 2 \text{ Pyruvate} + 2\text{ NADH, H}^^+ + 2\text{ ATP} + 2\text{ H}_2\text{O}$$
*   **Étapes clés :** Phosphorylations successives du glucose piégeant la molécule dans la cellule, coupure en deux trioses phosphates, puis oxydation couplée à une phosphorylation au niveau du substrat.

### 2. Le destin du pyruvate en conditions aérobies : le cycle de Krebs
En présence de dioxygène, le pyruvate pénètre dans la **matrice mitochondriale**.

*   **Étape préliminaire (Décarboxylation oxydative) :**
    Le pyruvate est converti en Acétyl-Coenzyme A par le complexe de la pyruvate déshydrogénase.
    $$\text{Pyruvate} + \text{CoA-SH} + \text{NAD}^+ \longrightarrow \text{Acétyl-CoA} + \text{CO}_2 + \text{NADH, H}^^+$$

*   **Le cycle de Krebs (Cycle des acides tricarboxyliques) :**
    L'acétyl-CoA (2C) fusionne avec l'oxaloacétate (4C) pour donner du citrate (6C). Au fil des 8 réactions du cycle :
    *   2 molécules de $\text{CO}_2$ sont libérées (oxydation totale des carbones organiques).
    *   Réduction de coenzymes : $3\text{ NADH, H}^+$ et $1\text{ FADH}_2$ par tour.
    *   Synthèse d'un GTP par phosphorylation au niveau du substrat (équivalent à 1 ATP).

*   **Bilan d'un tour de cycle de Krebs (pour 1 Acétyl-CoA) :**
    $$\text{Acétyl-CoA} + 3\text{ NAD}^+ + \text{FAD} + \text{GDP} + P_i + 2\text{ H}_2\text{O} \longrightarrow 2\text{ CO}_2 + 3\text{ NADH, H}^^+ + \text{FADH}_2 + \text{CoA-SH} + \text{GTP}$$

---

## III. Les phosphorylations oxydatives et la chaîne respiratoire

### 1. Organisation de la chaîne respiratoire mitochondriale
Située dans la **membrane interne mitochondriale**, la chaîne respiratoire est constituée de 4 complexes multiprotéiques majeurs (Complexes I à IV) et de transporteurs mobiles (l'ubiquinone ou coenzyme Q, et le cytochrome c).

*   Les coenzymes réduits ($\text{NADH, H}^+$ et $\text{FADH}_2$) issus de la glycolyse et du cycle de Krebs cèdent leurs électrons aux complexes.
*   Les électrons transitent le long de la chaîne selon un potentiel redox croissant, jusqu'à l'accepteur final : le dioxygène ($\text{O}_2$), qui est réduit en eau ($\text{H}_2\text{O}$).

### 2. Le mécanisme chimio-osmotique (Mitchell)
> **Théorème (Couplage chimio-osmotique) :** Le transfert d'électrons le long de la chaîne respiratoire est exergonique. Cette énergie est couplée par les complexes I, III et IV au **transport active de protons ($H^+$)** de la matrice vers l'espace intermembranaire. Il en résulte la création d'une force motrice protonique (gradient de pH et potentiel de membrane).

*   **L'ATP synthase (Complexe V) :**
    Les protons refluent passivement de l'espace intermembranaire vers la matrice à travers le canal protonique de l'ATP synthase. Ce flux exergonique fournit l'énergie nécessaire à la réaction de phosphorylation :
    $$\text{ADP} + P_i + H^+_{\text{ext}} \rightleftharpoons \text{ATP} + \text{H}_2\text{O} + H^+_{\text{int}}$$

---

## IV. L'anabolisme : La photosynthèse (Exemple autotrophe)

Chez les végétaux chlorophylliens, la conversion énergétique s'effectue en deux phases couplées au sein des **chloroplastes**.

### 1. La phase photochimique (réactions claires)
Localisée dans la **membrane des thylakoïdes**.
*   Absorption de la lumière par les pigments photosynthétiques (chlorophylles).
*   Oxygénation de l'eau (photolyse de l'eau) au niveau du Photosystème II (PSII) :
    $$2\text{ H}_2\text{O} \longrightarrow \text{O}_2 + 4\text{ H}^+ + 4\text{ e}^-$$
*   Transport d'électrons générant un gradient de protons (analogue à la mitochondrie, mais inversé topologiquement).
*   Réduction du $\text{NADP}^+$ en $\text{NADPH, H}^+$ au niveau du Photosystème I (PSI) et production photophosphorylée d'ATP.

### 2. La phase biochimique (cycle de Calvin / réactions sombres)
Localisée dans le **stroma** du chloroplaste.
*   Fixation du $\text{CO}_2$ sur le ribulose-1,5-bisphosphate (RuBP) grâce à une enzyme clé : la **Rubisco** (Ribulose-1,5-bisphosphate carboxylase/oxygénase).
*   Réduction des intermédiaires carbonés utilisant l'ATP et le $\text{NADPH, H}^+$ produits lors de la phase photochimique pour synthétiser des trioses-phosphates (précurseurs des glucides complexes).

---

## V. Méthodes et Résolution d'exercices

> **Méthode (Calcul de bilan énergétique) :**
> Pour calculer le rendement ou le bilan en ATP d'une oxydation complète du glucose :
> 1. Restituer précisément les bilans de chaque étape (Glycolyse, Cycle de Krebs, Phosphorylations oxydatives).
> 2. Utiliser les équivalences standard admises en CPGE (sauf mention contraire dans le texte) : 1 $\text{NADH, H}^+$ permet la synthèse d'environ $2,5$ ATP, et 1 $\text{FADH}_2$ permet la synthèse d'environ $1,5$ ATP.
> 3. Ne pas oublier de tenir compte des coûts de transport des métabolites à travers les membranes (ex: navettes mitochondriales).

---

## VI. Pièges classiques à éviter

*   **Piège 1 :** Confondre **phosphorylation au niveau du substrat** (synthèse directe d'ATP/GTP par transfert d'un groupement phosphate d'une molécule organique phosphorylée, ex: glycolyse) et **photophosphorylation / phosphorylation oxydative** (synthèse d'ATP via une ATP synthase alimentée par un gradient protonique).
*   **Piège 2 :** Oublier que le cycle de Krebs est une voie *amphibolique* (à la fois catabolique et anabolique) : ses intermédiaires servent aussi de points de départ pour la synthèse d'acides aminés ou d'acides gras.
*   **Piège 3 :** Dire que la photosynthèse ne fonctionne *que* le jour. La phase photochimique est dépendante de la lumière, mais la phase biochimique (cycle de Calvin) n'utilise pas directement la lumière (bien qu'elle soit régulée par elle et s'arrête rapidement à l'obscurité par manque de substrats ATP/NADPH).
*   **Piège 4 :** Négliger la compartimentation cellulaire. Préciser *toujours* où se déroule chaque réaction (hyaloplasme, matrice, espace intermembranaire, stroma, thylakoïde).