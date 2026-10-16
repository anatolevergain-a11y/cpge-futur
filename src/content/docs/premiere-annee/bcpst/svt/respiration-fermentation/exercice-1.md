---
title: 'Exercice 1 : Glycolyse et cycle de Krebs'
description: 'Problème d entraînement type concours officiel.'
---

# Problème : Exploration biochimique et thermodynamique du métabolisme énergétique cellulaire

## Préambule et consignes
Ce problème, inspiré des épreuves écrites des concours de la filière BCPST (Mines-Ponts et Agro-Veto), aborde les couplages énergétiques de la glycolyse et du cycle de Krebs. Il est exigé une rigueur scientifique, l'utilisation correcte de la nomenclature chimique et biochimique, ainsi qu'une **analyse critique des limites des modèles** présentés au fil des questions.

---

## Énoncé

Dans les conditions physiologiques standard modifiées ($\text{pH} = 7$, $\text{T} = 37\ \text{°C}$), le métabolisme cellulaire assure la dégradation du D-glucose en dioxyde de carbone $\text{CO}_2$ et en eau $\text{H}_2\text{O}$. Chez les eucaryotes aérobies, cette oxydation complète met en jeu deux grandes étapes intra-cellulaires : la glycolyse (dans le hyaloplasme) et le cycle de Krebs (dans la matrice mitochondriale).

L'objectif de ce problème est d'étudier le rendement énergétique de ces voies, les mécanismes de régulation allostérique des enzymes clés, et de discuter de la pertinence des bilans théoriques face à la réalité cellulaire.

---

## Questions

### Partie I : La glycolyse et le découplage énergétique partiel
1. Écrire le bilan global de la glycolyse sous forme d'une réaction chimique stœchiométriquement équilibrée, partant du D-glucose et menant au pyruvate.
2. Identifier les étapes de la glycolyse consommatrices et productrices d'ATP. Préciser le rôle des coenzymes $\text{NAD}^+$.
3. La phosphofructokinase-1 (PFK-1) catalyse la phosphorylation du D-fructose-6-phosphate en D-fructose-1,6-bisphosphate. C'est le principal point de contrôle de la glycolyse. Expliquer comment l'ATP, à forte concentration, agit comme un effecteur allostérique négatif de cette enzyme, alors qu'il est par ailleurs substrat de la réaction.
4. **Analyse critique :** En considérant uniquement les variations d'enthalpie libre standard ($\Delta G'^{\circ}$) de chaque réaction, on modélise souvent la glycolyse comme une suite unidirectionnelle. Discutez de la validité de ce modèle en tenant compte des réversibilités locales et des concentrations physiologiques réelles des métabolites.

### Partie II : Du pyruvate au cycle de Krebs
Le pyruvate formé dans le hyaloplasme pénètre dans la mitochondrie où il est converti en acétyl-CoA par le complexe de la pyruvate déshydrogénase (PDH), avant d'entrer dans le cycle de Krebs.

5. Schématiser le bilan global en coenzymes réduits ($\text{NADH}, \text{H}^+$ et $\text{FADH}_2$) et en équivalents énergétiques (ATP/GTP) pour un tour complet du cycle de Krebs, en partant d'une molécule d'acétyl-CoA.
6. L'oxydation de l'isocitrate en $\alpha$-cétoglutarate est catalysée par l'isocitrate déshydrogénase. Cette étape libère une molécule de $\text{CO}_2$ et réduit une molécule de $\text{NAD}^+$. Indiquer la nature chimique de cette réaction (oxydoréduction, décarboxylation) et préciser son régulateur allostérique positif majeur.
7. **Analyse critique :** Le cycle de Krebs est historiquement décrit comme une voie purement catabolique de dégradation. Montrer, en illustrant par deux exemples précis de carrefours métaboliques, les limites de cette vision linéaire en faisant référence au concept d'amphibolisme.

---

## Pistes pour la résolution
* **Pour la stœchiométrie :** Veillez à équilibrer les charges électriques et les protons $\text{H}^+$ puisque le $\text{pH}$ cellulaire est maintenu à $7$.
* **Pour la régulation (Q3) :** Pensez à l'existence de deux types de sites de liaison sur les enzymes allostériques : le site catalytique et le site régulateur (ou effecteur).
* **Pour l'analyse critique (Q7) :** Songez aux intermédiaires du cycle de Krebs qui servent de précurseurs à la synthèse d'acides aminés ou de porphyrines.

---

## Corrigé pas à pas

### Partie I : La glycolyse et le découplage énergétique partiel

**1. Bilan global de la glycolyse :**
$$\text{D-glucose} + 2\ \text{ADP}^{3-} + 2\ \text{P}_i^{2-} + 2\ \text{NAD}^+ \rightarrow 2\ \text{Pyruvate}^^{-} + 2\ \text{ATP}^{4-} + 2\ (\text{NADH}, \text{H}^+) + 2\ \text{H}_2\text{O}$$

**2. Étapes clés et coenzymes :**
* *Consommation d'ATP :* Hexokinase (glucose $\rightarrow$ glucose-6-phosphate) et PFK-1 (fructose-6-phosphate $\rightarrow$ fructose-1,6-bisphosphate). Coût : $2\ \text{ATP}$.
* *Production d'ATP :* Phosphoglycérate kinase et Pyruvate kinase. Gain : $4\ \text{ATP}$ (soit un gain net de $2\ \text{ATP}$).
* *Rôle du $\text{NAD}^+$ :* Il agit comme un oxydant biologique (accepteur d'hydrures $\text{H}^-$) lors de la conversion du glycéraldéhyde-3-phosphate en 1,3-bisphosphoglycérate, catalysée par la glycéraldéhyde-3-phosphate déshydrogénase.

**3. Régulation allostérique de la PFK-1 par l'ATP :**
La PFK-1 possède un site actif qui fixe le substrat (fructose-6-phosphate et ATP) et un site allostérique distinct. À forte concentration, l'ATP se fixe sur ce site régulateur, induisant un changement conformationnel de l'enzyme qui diminue son affinité pour le fructose-6-phosphate. 
* *Avantage biologique :* La cellule évite de consommer inutilement du glucose pour produire de l'ATP lorsque ses stocks énergétiques sont déjà saturés.

**4. Analyse critique du modèle thermodynamique de la glycolyse :**
* *Limites du modèle $\Delta G'^{\circ}$ :* En thermodynamique standard ($\mathrm{pH\ 7}$, concentrations unitaires à $1\ \text{mol}\cdot\text{L}^{-1}$), certaines réactions de la glycolyse possèdent un $\Delta G'^{\circ}$ fortement positif (donc endergoniques en conditions standard).
* *Réalité physiologique :* Dans la cellule, les concentrations réelles des réactifs et des produits s'éloignent drastiquement de l'état standard (notamment grâce à la consommation rapide des produits par les étapes aval). Par conséquent, le $\Delta G$ réel de ces réactions est négatif ou proche de zéro, permettant leur déroulement spontané. Le modèle considérant la glycolyse comme une suite strictement irréductible d'étapes exergoniques est donc une **simplification excessive** ; plusieurs étapes (comme celle catalysée par l'aldolase ou la triose-phosphate isomérase) sont physiologiquement réversibles (flux métabolique bidirectionnel possible selon les besoins de la cellule).

---

### Partie II : Du pyruvate au cycle de Krebs

**5. Bilan d'un tour de cycle de Krebs (par acétyl-CoA) :**
$$\text{Acétyl-CoA} + 3\ \text{NAD}^+ + \text{FAD} + \text{GDP} + \text{P}_i + 2\ \text{H}_2\text{O} \rightarrow 2\ \text{CO}_2 + 3\ (\text{NADH}, \text{H}^+) + \text{FADH}_2 + \text{GTP} + \text{CoA-SH}$$

**6. Réaction de l'isocitrate déshydrogénase :**
* *Nature chimique :* C'est une oxydoréduction couplée à une décarboxylation oxydative. L'isocitrate est oxydé en oxalosuccinate transitoire (réduction du $\text{NAD}^+$ en $\text{NADH}, \text{H}^+$), suivi d'une perte spontanée de $\text{CO}_2$ pour donner l' $\alpha$-cétoglutarate.
* *Régulateur allostérique positif :* L'ADP (témoin d'un déficit énergétique cellulaire) stimule l'enzyme, tout comme le $\text{Ca}^{2+}$ dans les cellules musculaires.

**7. Analyse critique : Le cycle de Krebs comme voie amphibolique :**
* *Limites du modèle catabolique strict :* Décrire le cycle de Krebs uniquement comme une "centrale d'incinération" productrice de $\text{CO}_2$ et d'énergie est un modèle obsolète.
* *Illustration par l'amphibolisme (couplage catabolisme/anabolisme) :*
  1. L'oxaloacétate et l' $\alpha$-cétoglutarate ne servent pas uniquement à boucler le cycle : ce sont des précurseurs directs pour la biosynthèse d'acides aminés (respectivement l'aspartate et le glutamate).
  2. Le succinyl-CoA est un intermédiaire indispensable à la synthèse des porphyrines (groupe hème de l'hémoglobine et des cytochromes).
* *Conclusion critique :* Les flux métaboliques traversant le cycle de Krebs sont ouverts. Des réactions anaplétiques (comme la carboxylation du pyruvate en oxaloacétate par la pyruvate carboxylase) sont nécessaires pour réalimenter continuellement le cycle en intermédiaires s'ils sont siphonnés par les voies de biosynthèse. Le modèle fermé et linéaire est donc une abstraction didactique éloignée de la plasticité dynamique in vivo.