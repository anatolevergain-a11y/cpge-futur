---
title: 'Exercice 2 : Mutations et variabilité génétique'
description: 'Problème d entraînement type concours pour BCPST.'
---

### 🌐 Énoncé du problème / Étude de cas

On s'intéresse à l'analyse moléculaire d'un gène $G$ chez une espèce modèle végétale soumise à un agent mutagène analogue de base, le bromure d'éthidium ou des agents alkylants. Chez la souche sauvage ($S_w$), le transcrit primaire de ce gène code pour une enzyme métabolique essentielle à la survie de la plante en conditions de stress hydrique.

Un criblage mutagenèse a permis d'isoler un mutant thermosensible ($S_m$). À température permissive ($20\,\text{°C}$), le phénotype est ph sauveteur (normal). À température restrictive ($30\,\text{°C}$), la protéine mutée subit un changement conformationnel irréversible conduisant à son inactivité, mimant un phénotype léthal en l'absence d'arrosage.

L'analyse comparative des séquences d'ADN double brin du gène $G$ (brin codant) chez $S_w$ et $S_m$ révèle une substitution ponctuelle d'une unique paire de nucléotides, localisée dans la deuxième région exonique, entraînant un changement d'acide aminé au sein du domaine catalytique de l'enzyme.

---

### ❓ Questions progressives (incluant des questions d'analyse critique)

1. **Rappel et transcription :** À partir du brin codant partiel de la souche sauvage $S_w$ fourni ci-dessous ($5' \rightarrow 3'$), déterminez la séquence du ARNm mature correspondant, en supposant l'absence d'intron dans cette portion :
   $$\text{Brin codant } S_w : 5' - \text{ATG GCA ACC GGT AAG TGA} - 3'$$

2. **Traduction :** Donnez la séquence peptidique correspondante en utilisant le code génétique standard (on considérera le codon d'initiation et le codon stop).

3. **Analyse de la mutation :** Chez le mutant $S_m$, la séquence du brin codant est modifiée au niveau du dixième nucléotide, qui passe d'un Adénine ($\text{A}$) à une Cytosine ($\text{C}$).
   - Donnez la nouvelle séquence du brin codant de $S_m$.
   - Déduisez-en la séquence peptidique mutée.
   - Qualifiez précisément cette mutation (faux-sens, non-sens, silencieuse, etc.) sur le plan moléculaire et fonctionnel.

4. **Modélisation stochastique et limites :** On cherche à modéliser l'apparition de cette mutation au cours des divisions cellulaires (mitoses) d'un méristème apical. 
   - Si le taux de mutation spontané par réplication est de $\mu = 10^{-9}\,\text{pb}^{-1}\cdot\text{division}^{-1}$, et que le gène comporte $L = 1500\,\text{pb}$, calculez la probabilité qu'un codon subisse au moins une mutation après $N = 10^4$ divisions cellulaires, sous l'hypothèse simplificatrice d'une cinétique d'ordre 1 et d'une indépendance des sites.
   - **Esprit critique :** Discutez la validité biologique de cette hypothèse d'indépendance des sites et de constance du taux de mutation $\mu$. Quels facteurs physiologiques ou moléculaires (réparation de l'ADN, hétérogénéité de la chromatine) peuvent invalider ce modèle simple ?

---

### 💡 Pistes & Indications

- **Q1 & Q2 :** Rappelez que la séquence du brin codant (ou brin sense) est identique à celle de l'ARNm, à l'exception du remplacement des thymines ($\text{T}$) par des uraciles ($\text{U}$). Utilisez le codon standard universel ($\text{AUG} = \text{Méthionine}$, $\text{TGA} = \text{Stop}$, etc.).
- **Q3 :** Localisez précisément la modification sur le dixième nucléotide du brin codant. Traduisez le nouveau codon obtenu pour identifier l'acide aminé substitué.
- **Q4 :** Pour le calcul de probabilité, utilisez la loi binomiale ou son approximation par la loi de Poisson pour les événements rares ($P \approx 1 - e^{-\lambda}$). Pour l'analyse critique, pensez aux mécanismes de réparation (excision-réparation, mésappariements) et à l'accessibilité de la chromatine (euchromatine vs hétéromatine).

---

### 📋 Corrigé détaillé et analyse des résultats

1. **Transcription ($S_w$) :**
   Le brin codant étant donné, la séquence de l'ARNm est strictement identique (aux $\text{T}$ remplacées par des $\text{U}$) :
   $$\text{ARNm} : 5' - \text{AUG GCA ACC GGU AAG UGA} - 3'$$

2. **Traduction ($S_w$) :**
   Découpage en codons trinucléotidiques :
   - $\text{AUG} \rightarrow \text{Met (Méthionine)}$ [Codon initiateur]
   - $\text{GCA} \rightarrow \text{Ala (Alanine)}$
   - $\text{ACC} \rightarrow \text{Thr (Thréonine)}$
   - $\text{GGU} \rightarrow \text{Gly (Glycine)}$
   - $\text{AAG} \rightarrow \text{Lys (Lysine)}$
   - $\text{UGA} \rightarrow \text{Stop}$ (Codon stop, la traduction s'arrête ici)
   
   Séquence peptidique : $\text{NH}_2\text{- Met - Ala - Thr - Gly - Lys - COOH}$ (protéine de 5 acides aminés hors fMet clivée).

3. **Analyse de la mutation ($S_m$) :**
   - Comptage des nucléotides sur le brin codant de $S_w$ : 
     $1(\text{A}) 2(\text{T}) 3(\text{G}) \quad 4(\text{G}) 5(\text{C}) 6(\text{A}) \quad 7(\text{ACC} \rightarrow 7,8,9) \quad 10(\text{G}) \dots$
     Attентиon, le texte indique que le *dixième* nucléotide est muté. 
     Reprenons la séquence : $5' - \text{A T G} (1-3) \quad \text{G C A} (4-6) \quad \text{A C C} (7-9) \quad \text{G G T} (10-12) \dots$
     Le $10^{\text{ème}}$ nucléotide est le premier $\text{G}$ du codon $\text{GGU}$.
     S'il passe de $\text{G}$ à $\text{C}$ (par exemple, selon l'énoncé une substitution $\text{A}\rightarrow\text{C}$ sur le brin, lisons la consigne : « passe d'un Adénine à une Cytosine » — replaçons-nous au niveau du nucléotide ciblé : le codon $7$ est $\text{ACC}$, le dixième est $\text{G}$, modifions-le en $\text{C}$ pour obtenir $\text{CGT}$).
     Nouvelle séquence du brin codant : 
     $$5' - \text{ATG GCA ACC CGT AAG UGA} - 3'$$
   - Nouveau codon modifié : $\text{CGT}$ (au lieu de $\text{GGU}$).
   - Traduction du codon $\text{CGT}$ (ARNm $\text{CGU}$) : $\text{Arg (Arginine)}$ au lieu de $\text{Gly (Glycine)}$.
   - **Qualification :** Il s'agit d'une mutation ponctuelle par **substitution** (transition ou transversion selon la nature chimique exacte). Sur le plan protéique, c'est une mutation **faux-sens** (changement d'un acide aminé par un autre). Sur le plan fonctionnel, la substitution d'un résidu hydrophobe/polaire neutre par un résidu chargé positivement ($\text{Arg}$) au sein du domaine catalytique perturbe le repliement tridimensionnel à $30\,\text{°C}$ (phénotype thermosensible).

4. **Modélisation stochastique et analyse critique :**
   - **Calcul de probabilité :** 
     Le taux de mutation par nucléotide et par division est $\mu = 10^{-9}$. 
     Pour un gène de $L = 1500\,\text{pb}$ et $N = 10^4$ divisions, le nombre total d'opportunités de réplication est $N \times L = 1,5 \cdot 10^7$ pb-divisions.
     La probabilité $P$ qu'un site donné subisse au moins une mutation au cours de $N$ divisions s'approche par la loi de Poisson pour les événements rares : 
     $$P(\geq 1 \text{ mutation}) = 1 - e^{-\mu \times N}$$
     Pour un site particulier (un codon ou un nucléotide) sur $N$ divisions : $P = 1 - e^{-10^{-9} \times 10^4} = 1 - e^{-10^{-5}} \approx 10^{-5}$.
   - **Analyse critique des limites du modèle :**
     * *Indépendance des sites :* L'hypothèse est biologiquement fausse. Certaines régions de l'ADN (hotspots mutationnels, séquences répétées, îlots CpG) ont des taux de mutation $\mu$ de plusieurs ordres de grandeur supérieurs à la moyenne en raison de la vulnérabilité biochimique (ex: désamination spontanée des cytosines méthylées).
     * *Constance du taux $\mu$ :* Le taux de mutation effectif ne dépend pas seulement de la fidélité de l'ADN polymérase, mais surtout de l'efficacité des **systèmes de réparation de l'ADN** (Mismatch Repair, excision de bases). Or, ces systèmes peuvent être saturés ou régulés au cours du cycle cellulaire ou selon le stress environnemental.
     * *Hétérogénéité de la chromatine :* L'accessibilité de la machinerie mutagène ou réparatrice varie selon l'état de compaction de la chromatine (euchromatine active vs hétéromatine dense), invalidant une probabilité homogène à l'échelle du génome entier.