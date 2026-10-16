---
title: 'Exercice 2 : Réactivité des alcools et des amines'
description: 'Problème d entraînement type concours pour BCPST.'
---

### 🌐 Énoncé du problème / Étude de cas

Les fonctions alcool ($-\text{OH}$) et amine ($-\text{NH}_2$, $-\text{NHR}$, $-\text{NR}_2$) sont omniprésentes tant dans les molécules de la vie courante que dans les intermédiaires de synthèse pharmaceutique. Leur réactivité vis-à-vis des dérivés carbonylés ou des halogénures d'alkyle conditionne l'accès à de nombreuses familles de composés.

Dans le cadre d'un projet de synthèse éco-responsable d'un anesthésique local dérivé de l'amino-alcool, on s'intéresse à la sélectivité de la réaction entre un amino-alcool dissymétrique, le 2-(diméthylamino)éthanol (noté $A$), et un chlorure d'acyle, le chlorure de benzoyle (noté $B$).

Le composé $A$ possède à la fois un site nucléophile oxygéné (alcool tertiaire ou primaire ? Attention à la formule : $\text{HO}-\text{CH}_2-\text{CH}_2-\text{N(CH}_3)_2$, il s'agit d'un alcool primaire) et un site nucléophile azoté (amine tertiaire). 

On souhaite analyser les paramètres thermodynamiques et cinétiques régissant l'estérification par rapport à l'éventuelle amidation, et discuter de l'utilisation de solvants et de catalyseurs dans le respect des principes de la chimie verte.

Données thermodynamiques et physiques à $298\text{ K}$ :
- Constante diélectrique du dichlorométhane ($\text{CH}_2\text{Cl}_2$) : $\varepsilon_r \approx 8{,}9$
- Constante diélectrique de l'eau ($\text{H}_2\text{O}$) : $\varepsilon_r \approx 78{,}5$
- $\text{p}K_a$ du couple protoné de l'amine tertiaire de $A$ : $\text{p}K_{a1} \approx 9{,}0$
- $\text{p}K_a$ du couple protoné de l'alcool (ion alcoolate) : non mesurable directement en milieu aqueux ($\text{p}K_a > 16$).

---

### ❓ Questions progressives (incluant des questions d'analyse critique)

1. **Étude structurale et fonctionnelle**
   1.1. Représenter la formule topologique du 2-(diméthylamino)éthanol ($A$) et identifier les groupes caractéristiques ainsi que leurs sites nucléophiles respectifs.
   1.2. Justifier qualitativement la basicité relative de l'atome d'azote par rapport à l'atome d'oxygène.

2. **Analyse thermodynamique et équilibres acido-basiques**
   2.1. Écrire l'équation de la réaction acido-basique prépondérante lorsque l'on dissout le composé $A$ dans l'eau pure. Calculer la constante d'équilibre associée à $\text{pH} = 7{,}0$.
   2.2. *Analyse critique :* En milieu strictement aqueux, est-il pertinent d'envisager une attaque nucléophile directe de l'amine non protonée sur un dérivé carbonylé électrophile sensible à l'hydrolyse ? Justifier à l'aide de considérations cinétiques et thermodynamiques.

3. **Réactivité en synthèse organique et sélectivité**
   3.1. On réalise la réaction entre le composé $A$ et le chlorure de benzoyle ($B$) en solution dans le dichlorométhane $\text{CH}_2\text{Cl}_2$ en présence d'une quantité stœchiométrique de pyridine (base faible non nucléophile en pratique ou jouant le rôle piégeur de $\text{HCl}$). Écrire le mécanisme réactionnel conduisant au produit majoritaire. Préciser s'il s'agit d'une addition-élimination ou d'une substitution nucléophile d'ordre $2$ ($\text{S}_\text{N}2$).
   3.2. Le produit obtenu est un ester (que l'on notera $E$). Pourquoi l'estérification l'emporte-t-elle cinétiquement ou thermodynamiquement dans ces conditions, ou observe-t-on une compétition avec la formation d'un sel d'ammonium ? Discuter de la réversibilité.

4. **Approche de chimie verte et modélisation**
   4.1. Le dichlorométhane est un solvant chloré volatile dont l'utilisation industrielle est de plus en plus restreinte pour des raisons de toxicité et d'impact environnemental. Proposer un critère thermodynamique simple (lié par exemple aux moments dipolaires ou aux liaisons hydrogène) permettant de classer les solvants, et discuter des limites du remplacement d'un solvant organique par de l'eau dans le cas de la synthèse de l'ester $E$.
   4.2. *Esprit critique et limites du modèle :* Un étudiant affirme que « puisque la constante diélectrique de l'eau est très élevée ($\varepsilon_r = 78{,}5$), elle stabilise remarquablement bien tous les intermédiaires réactionnels ioniques et favorise donc universellement toutes les réactions organiques par rapport au dichlorométhane ». Critiquez rigoureusement cette affirmation en vous appuyant sur la nature des espèces réactives en jeu (molécules neutres, ions, liaisons hydrogène, compétition avec l'eau hydrolysante).

---

### 💡 Pistes & Indications

- **1.2.** Penser à l'électronégativité comparée de l'azote et de l'oxygène, ainsi qu'à la polarisabilité du doublet non liant.
- **2.2.** Le chlorure d'acyle est un électrophile très réactif, mais l'eau est un nucléophile abondant et un bon milieu d'hydrolyse rapide des halogénures d'acyles.
- **3.1.** Le chlorure d'acyle réagit prioritairement avec la fonction alcool pour former un ester via un mécanisme d'addition-élimination (addition nucléophile sur le groupement carbonyle suivie de l'élimination de l'ion chlorure). L'amine tertiaire peut quant à elle être quaternisée ou salifiée par $\text{HCl}$ libéré.
- **4.2.** Pensez à l'effet de solvatation des réactifs nucléophiles (liaisons hydrogène fortes avec l'eau qui diminuent leur nucléophilie) et à la réaction parasite d'hydrolyse du chlorure d'acyle.

---

### 📋 Corrigé détaillé et analyse des résultats

#### 1. Étude structurale et fonctionnelle
1.1. Formule topologique de $A$ : $\text{(CH}_3)_2\text{N}-\text{CH}_2-\text{CH}_2-\text{OH}$. 
- Site 1 : L'hydroxyle $-\text{OH}$ (alcool primaire), site nucléophile porteur d'un doublet libre sur l'oxygène et site électrophile/acide faible par le proton labile.
- Site 2 : L'amine tertiaire $-\text{N(CH}_3)_2$, site nucléophile basique porteur d'un doublet non liant sur l'azote.

1.2. L'azote est moins électronégatif que l'oxygène ($\chi(\text{N}) \approx 3{,}0 < \chi(\text{O}) \approx 3{,}4$). Son doublet non liant est donc moins fortement retenu par le noyau et plus polarisable, ce qui confère à l'amine une basicité et un pouvoir nucléophile intrinsèquement supérieurs à ceux de l'alcool dans des conditions comparables.

#### 2. Analyse thermodynamique et équilibres acido-basiques
2.1. Équilibre dans l'eau :
$$\text{(CH}_3)_2\text{N}-\text{CH}_2-\text{CH}_2-\text{OH} + \text{H}_2\text{O} \rightleftharpoons \text{(CH}_3)_2\text{NH}^+-\text{CH}_2-\text{CH}_2-\text{OH} + \text{OH}^-$$
La constante associée est $K_b = \frac{K_e}{K_{a1}}$. À $\text{pH} = 7{,}0$ (soit $[\text{H}_3\text{O}^+] = 10^{-7}\text{ mol}\cdot\text{L}^{-1}$ et $[\text{OH}^-] = 10^{-7}\text{ mol}\cdot\text{L}^{-1}$), le rapport des formes s'obtient par la relation d'Henderson-Hasselbalch :
$$\text{pH} = \text{p}K_{a1} + \log\left(\frac{[\text{amine}]}{[\text{ammonium}]}\right) \implies 7{,}0 = 9{,}0 + \log\left(\frac{[\text{A}]}{[\text{AH}^+]}\right)$$
$$\log\left(\frac{[\text{A}]}{[\text{AH}^+]}\right) = -2 \implies \frac{[\text{amine non protonée}]}{[\text{forme protonée}]} = 10^{-2} = 0{,}01$$
L'amine est donc quasi-totalement sous forme protonée ($\approx 99\,\%$) à $\text{pH} = 7$.

2.2. *Analyse critique :* En milieu aqueux, l'amine étant protonée à pH neutre ou acide, son doublet non liant n'est plus disponible pour agir comme nucléophile. De plus, les dérivés halogénés d'acyles (chlorure de benzoyle) subissent une hydrolyse cinétiquement très rapide en acides carboxyliques au contact de l'eau. Il est donc thermodynamiquement et cinétiquement aberrant d'opérer en milieu aqueux non contrôlé pour synthétiser un ester à partir d'un chlorure d'acyle et d'un amino-alcool.

#### 3. Réactivité en synthèse organique et sélectivité
3.1. Dans $\text{CH}_2\text{Cl}_2$ (solvant aprotique polaire modéré), en présence de pyridine, le chlorure d'acyle réagit préférentiellement avec l'alcool (nucléophile oxygéné non protoné dans ces conditions anhydres) selon un mécanisme d'**addition-élimination** sur le carbone fonctionnel du groupe acyle :
1. Addition nucléophile du doublet de l'oxygène de l'alcool sur le carbone carbonyle du chlorure de benzoyle, conduisant à un intermédiaire tétraédrique.
2. Élimination de l'ion chlorure $\text{Cl}^-$ et restitution de la double liaison $\text{C=O}$, suivie de la déprotonation par la pyridine pour donner l'ester benzoylé et du chlorhydrate de pyridinium.

3.2. L'estérification l'emporte car l'oxygène de l'alcool primaire est stériquement plus accessible et l'intermédiaire tétraédrique conduit irréversiblement à l'ester du fait de la bonne, voire excellente, aptitude au départ de l'ion chlorure. L'amine tertiaire quant à elle se retrouve partiellement salifiée par le $\text{HCl}$ formé, ce qui bloque sa réactivité ultérieure parasite (pas de formation d'amide car l'amine est tertiaire, ni d'amide secondaire non souhaitée).

#### 4. Approche de chimie verte et modélisation
4.1. Pour s'affranchir du dichlorométhane, le remplacement par l'eau se heurte au problème de l'hydrolyse compétitive du chlorure d'acyle (principe de compatibilité chimique et de cinétique d'hydrolyse). Pour respecter la chimie verte sans basculer dans l'eau, on privilégie l'utilisation de solvants alternatifs biosourcés (esters méthyliques d'acides gras, 2-méthyltétrahydrofurane) ou des procédés sans solvant (réactifs à l'état fondu si les points de fusion le permettent).

4.2. *Esprit critique et limites du modèle :* L'affirmation de l'étudiant est **fausse et chimiquement naïve**. 
- D'une part, une constante diélectrique élevée stabilise certes les ions, mais elle va aussi **solrater fortement les espèces neutres nucléophiles** (par liaisons hydrogène dans l'eau), abaissant drastiquement leur énergie et donc leur réactivité (diminution de la nucléophilie par effet de cage de solvatation).
- D'autre part, elle ignore la réactivité compétitive du solvant lui-même (l'eau est un réactif inépuisable qui hydrolyse les halogénures d'acyles). 
En modélisation cinétique, la constante de vitesse $k$ dépend de l'énergie d'activation $\Delta G^\ddagger$, laquelle intègre l'énergie de déssolvatation des réactifs : un solvant trop polaire et protique peut augmenter la barrière cinétique d'une réaction entre espèces neutres. Le modèle macroscopique de $\varepsilon_r$ est donc insuffisant et doit être couplé à la prise en compte des interactions spécifiques (liaisons hydrogène, polarité locale).