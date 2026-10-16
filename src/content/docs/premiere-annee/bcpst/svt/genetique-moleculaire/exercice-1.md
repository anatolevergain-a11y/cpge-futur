---
title: 'Exercice 1 : Réplication, transcription et traduction'
description: 'Problème d entraînement type concours pour BCPST.'
---

### 🌐 Énoncé du problème / Étude de cas

On s'intéresse à l'expression et à la duplication d'un gène d'intérêt chez un procaryote modèle, *Escherichia coli*, dans des conditions physiologiques optimales. Le gène étudié code pour une protéine enzymatique cytoplasmique chimérique de $400$ acides aminés. 

La séquence codante (ADN double brin) est placée sous le contrôle d'un promoteur fort. On souhaite modéliser l'énergétique et la cinétique de la machinerie macromoléculaire (ADN polymérase, ARN polymérase, ribosome) impliquée dans la production de cette protéine, tout en évaluant la rigueur des modèles thermodynamiques et cinétiques face à la réalité cellulaire.

On donne les ordres de grandeur suivants en conditions physiologiques :
- Vitesse de réplication (ADN polymérase III) : $v_{\text{rep}} \approx 1000\text{ pb}\cdot\text{s}^{-1}$ (paires de bases par seconde).
- Vitesse de transcription (ARN polymérase) : $v_{\text{transcrit}} \approx 50\text{ nt}\cdot\text{s}^{-1}$ (nucléotides par seconde).
- Vitesse de traduction (ribosome) : $v_{\text{trad}} \approx 15\text{ aa}\cdot\text{s}^{-1}$ (acides aminés par seconde).
- Énergie libre d'hydrolyse d'une liaison triphosphate (ATP/GTP) : $\Delta G \approx -30\text{ kJ}\cdot\text{mol}^{-1}$.

---

### ❓ Questions progressives

1. **Calculs préliminaires et cinétiques**
   a. Calculer la longueur en nucléotides de la séquence d'ADN codant pour la protéine d'intérêt, en négligeant le codon stop.
   b. Déterminer le temps minimal nécessaire pour transcrire cet ARNm, puis pour traduire la protéine correspondante à partir d'un ARNm déjà mature et disponible.

2. **Couplage transcription-traduction chez les procaryotes**
   a. Expliquer pourquoi, chez *E. coli*, la traduction d'un ARNm peut débuter avant même que sa transcription ne soit totalement achevée. Quel est l'impact de ce couplage sur la cinétique globale de production protéique ?
   b. *Analyse critique du modèle :* En supposant une durée de vie moyenne de l'ARNm de $3\text{ minutes}$ dans le cytoplasme bactérien, calculez le nombre théorique maximal de protéines synthétisées par molécule d'ARNm. Discutez des limites biologiques de ce modèle linéaire (ex: encombrement stérique, disponibilité des ribosomes, dégradation).

3. **Bilan énergétique de la machinerie**
   a. Rappelez le coût énergétique (en molécules d'ATP ou équivalent GTP consommées) pour l'incorporation :
      - d'un nucléotide lors de la réplication (en considérant le coût global de relecture/proofreading) ;
      - d'un nucléotide lors de la transcription ;
      - d'un acide aminé lors de la traduction (activation de l'acide aminé + élongation).
   b. Calculez le coût énergétique total en équivalents ATP pour synthétiser une molécule de cette protéine de $400$ acides aminés à partir de ses monomères activés, en incluant la transcription de l'ARNm associé.
   c. *Esprit critique :* Ce calcul ne tient compte que de la polymérisation. Proposez une critique thermodynamique et énergétique de la cellule : quel pourcentage approximatif des ressources énergétiques cellulaires cela représente-t-il, et quelles hypothèses simplificatrices fait-on en négligeant la phase d'initiation et de terminaison ?

---

### 💡 Pistes & Indications

- **Q1 :** Pensez au code génétique : un acide aminé est codé par un triplet de nucléotides (codon). Multipliez par 3.
- **Q2 :** Rappelez-vous l'absence de noyau chez les procaryotes et l'absence d'epissage (pas d'introns). Pour le calcul, faites un ratio entre la durée de vie de l'ARNm et le temps de traduction d'un ribosome.
- **Q3 :** Pour la traduction, comptez $2$ GTP pour l'élongation (aminoacyl-ARNt + translocation) et au moins $1$ ATP pour l'aminoacylation par l'aminoacyl-ARNt synthétase (soit $3$ équivalents ATP par acide aminé).

---

### 📋 Corrigé détaillé et analyse des résultats

#### 1. Calculs préliminaires et cinétiques
a. La protéine comporte $N = 400$ acides aminés. Chaque acide aminé étant codé par un codon (triplet de nucléotides), la séquence codante compte :
$$\text{Longueur} = 400 \times 3 = 1200\text{ paires de bases (pb)}$$
*(Note : On ajoute généralement $3$ pb pour le codon stop, soit $1203\text{ pb}$, mais l'ordre de grandeur reste de $1,2\text{ kpb}$)*.

b. 
- **Transcription :** L'ARNm synthétisé comptera $1203$ nucléotides. Avec $v_{\text{transcrit}} = 50\text{ nt}\cdot\text{s}^{-1}$ :
$$t_{\text{transcrit}} = \frac{1203}{50} \approx 24{,}1\text{ s}$$
- **Traduction :** La protéine fait $400$ acides aminés. Avec $v_{\text{trad}} = 15\text{ aa}\cdot\text{s}^{-1}$ :
$$t_{\text{trad}} = \frac{400}{15} \approx 26{,}7\text{ s}$$

#### 2. Couplage transcription-traduction chez les procaryotes
a. Chez les bactéries, l'ADN est libre dans le cytoplasme et il n'y a pas d'introns. L'ARN polymérase et les ribosomes partagent le même compartiment cellulaire. Dès que l'extrémité 5' de l'ARNm émerge de l'ARN polymérase, des ribosomes peuvent s'y fixer et initier la traduction (phénomène de polysome). Cela confère une réactivité adaptative extrêmement rapide face aux variations environnementales (réponse métabolique immédiate).

b. 
- *Calcul théorique :* Si l'ARNm dure $T = 180\text{ s}$ ($3\text{ min}$) et qu'un ribosome met $26{,}7\text{ s}$ pour traduire l'ARNm (en supposant qu'un nouveau ribosome s'y initie dès que la place le permet, soit toutes les ~5 secondes selon l'espacement des ribosomes sur un polysome), le nombre maximal théorique de protéines par ARNm est de l'ordre de :
$$N_{\text{prot}} \approx \frac{180}{26{,}7} \approx 6{,}7 \text{ vagues de ribosomes}$$
En tenant compte de la densité des ribosomes (environ 1 ribosome tous les 80 nucléotides), un ARNm de $1200$ nt peut porter simultanément une dizaine de ribosomes. Sur sa durée de vie totale, un ARNm peut ainsi produire de l'ordre de $50$ à $100$ protéines.
- *Limites du modèle :* Ce modèle suppose une cinétique stationnaire et une disponibilité infinie en acides aminés, en énergie (ATP/GTP) et en facteurs d'initiation. Or, en situation de stress, la raréfaction des aminoacyl-ARNt ou l'épuisement du pool ribosomique libre invalide cette linéarité. De plus, la dégradation de l'ARNm commence souvent par l'extrémité 5' (par une ribonucléase comme la RNase E), ce qui stoppe la traduction avant la fin théorique de la durée de vie moyenne.

#### 3. Bilan énergétique de la machinerie
a. 
- **Réplication :** L'incorporation d'un désoxyribonucléotide (dNMP) consomme l'équivalent de $2$ liaisons phosphates riches en énergie (hydrolyse d'un dNTP en dNMP + PPi, puis hydrolyse du pyrophosphate), plus un coût lié au *proofreading* (relecture exonucléasique 3'->5'), soit environ $2$ à $3$ ATP par nucléotide intégré.
- **Transcription :** L'incorporation d'un ribonucléotide (NMP) consomme l'équivalent de $2$ liaisons phosphates (NTP en NMP + PPi).
- **Traduction :** 
  - Activation de l'acide aminé par l'aminoacyl-ARNt synthétase : $1\text{ ATP} \rightarrow \text{AMP} + 2\text{ Pi}$ (équivaut à $2$ liaisons à haute énergie).
  - Fixation de l'aminoacyl-ARNt sur le site A (facteur Tu) : $1\text{ GTP}$.
  - Translocation (facteur G) : $1\text{ GTP}$.
  Soit un total de $3$ équivalents ATP par acide aminé incorporé.

b. 
- Coût de transcription de l'ARNm ($1203$ nt) : $1203 \times 2 = 2406\text{ équivalents ATP}$.
- Coût de traduction de la protéine ($400$ aa) : $400 \times 3 = 1200\text{ équivalents ATP}$.
- **Coût total de polymérisation :** 
$$\text{Coût total} = 2406 + 1200 = 3606\text{ équivalents ATP}$$

c. *Analyse critique :* 
- Ce calcul omet les phases d'initiation (qui consomment des facteurs d'initiation liés au GTP, ex: IF2, EF-Tu, RF3) et les boucles de terminaison/recyclage des ribosomes (nécessitant le facteur RRF et l'EF-G). 
- D'un point de vue thermodynamique, la dépense énergétique globale de la cellule pour maintenir ce flux traductionnel représente une part majeure du métabolisme énergétique (souvent plus de $40\%$ de la consommation d'ATP d'une bactérie en croissance rapide). 
- **Hypothèse simplificatrice majeure :** Le modèle considère un rendement énergétique déterministe et constant, alors que les constantes cinétiques ($K_M$ et $v_{\text{max}}$ des polymérases) dépendent fortement des concentrations locales fluctuantes en métabolites cellulaires. L'utilisation d'une énergie libre $\Delta G$ standard ($\approx -30\text{ kJ}\cdot\text{mol}^{-1}$) s'éloigne des conditions physiologiques réelles où le rapport $[ATP]/([ADP][Pi])$ maintient un $\Delta G$ effectif plus proche de $-50\text{ kJ}\cdot\text{mol}^{-1}$, rendant les réactions de polymérisation quasi-irréversibles in vivo.