---
title: 'Cours : Génétique moléculaire'
description: 'Synthèse de cours, théorèmes et démonstrations fondamentales.'
---

## 📌 1. Définitions & Cadre d'étude

La génétique moléculaire étudie la nature chimique, la structure, la réplication, l'expression et la régulation du matériel génétique (ADN et ARN) chez les organismes vivants. 

* **Acide nucléique :** Polymère linéaire de nucléotides unis par des liaisons phosphodiester. Chaque nucléotide est composé d'un pentose (désoxyribose pour l'ADN, ribose pour l'ARN), d'un groupement phosphate et d'une base azotée (purique : Adénine, Guanine ; pyrimidique : Cytosine, Thymine ou Uracile).
* **Dogme central de la biologie moléculaire :** Formulé par F. Crick, il décrit le flux de l'information génétique : l'ADN est transcrit en ARN, lui-même traduit en protéines. (Des exceptions existent, comme la rétrotranscription chez les Rétrovirus).
* **Gène :** Séquence d'ADN (ou d'ARN chez certains virus) nécessaire à la production d'un produit fonctionnel (ARN ou polypeptide).
* **Transcription :** Synthèse d'une molécule d'ARN complémentaire à un brin matrice d'ADN, catalysée par une ARN polymérase.
* **Traduction :** Synthèse d'une chaîne polypeptidique à partir de l'information portée par l'ARN messager (ARNm), réalisée au niveau des ribosomes grâce au code génétique.

---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### Théorème 1 : Modèle de la réplication semi-conservative de l'ADN (Expérience de Meselson et Stahl, 1958)
La réplication de l'ADN est semi-conservative : chaque molécule d'ADN fils conserve un brin parental et intègre un brin nouvellement synthétisé.

* **Démonstration expérimentale :**
  1. Culture de bactéries *Escherichia coli* dans un milieu contenant un isotope lourd de l'azote (${}^{15}\text{N}$). L'ADN extrait présente une densité élevée (ADN "lourd").
  2. Transfert des bactéries dans un milieu contenant l'isotope léger (${}^{14}\text{N}$) pour une durée correspondant à un cycle cellulaire. L'ADN extrait, après centrifugation en gradient de chlorure de césium ($\text{CsCl}$), présente une densité intermédiaire (ADN "hybride" ${}^{15}\text{N/}{}^{14}\text{N}$). Cela exclut le modèle conservateur.
  3. Après un second cycle de réplication dans le milieu ${}^{14}\text{N}$, on observe deux populations d'ADN : une population hybride (${}^{15}\text{N/}{}^{14}\text{N}$) et une population légère (${}^{14}\text{N/}{}^{14}\text{N}$). Cela exclut le modèle dispersif et valide définitivement le modèle semi-conservatif.

### Théorème 2 : Universalité et dégénérescence du code génétique
Le code génétique fait correspondre des triplets de nucléotides (codons) à des acides aminés. Il possède les propriétés fondamentales suivantes :
* **Il est universel** (avec de très rares exceptions près, comme les génomes mitochondriaux) : un même codon code pour le même acide aminé chez la quasi-totalité des organismes vivants.
* **Il est non ambigu** (ou univoque) : un codon donné code pour un et un seul acide aminé.
* **Il est dégénéré** (ou redondant) : un même acide aminé peut être codé par plusieurs codons différents (généralement par variation de la troisième base, dite base du "wobble" ou ballottement).

---

## 💡 3. Méthodes classiques de résolution

### Méthode 1 : Prédiction d'une séquence polypeptidique à partir d'une séquence d'ADN
1. **Identifier le brin matrice (ou transcrit) :** Par convention, le brin d'ADN codant est écrit de $5'$ vers $3'$. Le brin matrice est orienté de $3'$ vers $5'$ et est complémentaire et antiparallèle à l'ARNm.
2. **Déterminer l'ARNm :** Écrire la séquence d'ARN par transcription du brin matrice (complémentarité $\text{A}\to\text{U}$, $\text{T}\to\text{A}$, $\text{C}\to\text{G}$, $\text{G}\to\text{C}$), orientée de $5'$ vers $3'$.
3. **Rechercher le codon initiateur :** Le premier codon d'initiation de la traduction est généralement $\text{AUG}$ (codant pour la Méthionine).
4. **Traduire par blocs de 3 nucléotides (codons) :** Utiliser la table du code génétique pour associer chaque codon à son acide aminé, jusqu'à l'apparition d'un codon stop ($\text{UAA}$, $\text{UAG}$, $\text{UGA}$).

### Méthode 2 : Analyse de l'impact d'une mutation ponctuelle
Face à une mutation par substitution, insertion ou délétion :
* **Substitution silencieuse :** Modifie un codon en un codon synonyme (pas de changement de la séquence protéique).
* **Substitution faux-sens :** Remplace un acide aminé par un autre, ce qui peut altérer ou non la fonction de la protéine selon la nature chimique de l'acide aminé substitué et sa localisation (site actif, etc.).
* **Substitution non-sens :** Transforme un codon sens en un codon stop prématuré, entraînant une troncature de la protéine.
* **Indel (insertion/délétion) non multiple de 3 :** Provoque un décalage du cadre de lecture (*frameshift*), modifiant tous les acides aminés en aval de la mutation et générant fréquemment un codon stop prématuré.

---

## ⚠️ 4. Pièges classiques aux Concours

1. **Confondre les brins d'ADN :** Oublier que l'ARN polymérase lit le brin matrice de $3'$ vers $5'$ et synthétise l'ARN de $5'$ vers $3'$. Ne jamais traduire directement le brin codant (non matrice) sans l'avoir préalablement converti en ARNm.
2. **Erreur d'orientation :** Ne pas respecter la polarité des acides nucléiques ($5'$ et $3'$) et des protéines ($\text{N-ter}$ et $\text{C-ter}$). La traduction débute toujours par l'extrémité $5'$ de l'ARNm et correspond à l'extrémité $\text{N-terminale}$ du peptide.
3. **Confondre ADN et ARN dans le code génétique :** Les tables de code génétique fournies aux concours expriment les codons en **ARNm** (avec des $\text{U}$). Face à une question d'ADN, il faut impérativement transcrire l'ADN en ARNm avant d'utiliser la table.
4. **Oublier les introns et exons (chez les Eucaryotes) :** Un gène eucaryote subit un épissage. La séquence d'ARNm mature est plus courte que le pré-ARNm initial. Ne pas traduire les introns excisés lors du calcul de la taille de la protéine.