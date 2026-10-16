---
title: 'Exercice 1 : Organomagnésiens'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Stratégie de synthèse énantioselective et limites de la réactivité des organomagnésiens

## Énoncé

Les organomagnésiens mixtes, ou réactifs de Grignard, découverts par Victor Grignard au début du XXe siècle, constituent l'un des outils les plus puissants de formation de liaisons carbone-carbone en synthèse organique. Néanmoins, leur mise en œuvre industrielle et de laboratoire requiert une maîtrise rigoureuse des conditions opératoires en raison de leur basicité prononcée et de leur sensibilité à l'humidité.

Le problème s'intéresse à la synthèse stéréocontrôlée d'un alcool chiral, le $(3S)$-3-méthylpentan-3-ol à partir de substrats halogénés, puis discute des réactions secondaires parasites limitant les rendements. On s'intéressera également à l'analyse critique du modèle de Cram pour l'addition diastéréosélective.

Données thermodynamiques et cinétiques à $T = 298\text{ K}$ :
* Constante diélectrique du tétrahydrofurane (THF) : $\varepsilon_r = 7,6$
* Énergie d'activation moyenne pour la formation d'un organomagnésien bromé aliphatique : $E_a \approx 45\text{ kJ}\cdot\text{mol}^{-1}$
* Potentiel standard apparent du couple $\text{Mg}^{2+}/\text{Mg(s)}$ dans les conditions de synthèse : $E^\circ \approx -2,37\text{ V}$ vs ENH.

---

## Questions

### Partie I : Synthèse et thermodynamique de formation du réactif

1. Écrire l'équation bilan de la formation du 2-bromobutane à partir d'un alcool précurseur, puis détailler le mécanisme de formation du réactif organomagnésien correspondant $\text{R-MgBr}$ (noté $\text{RM}_g$). Quel est le rôle crucial du solvant (le THF) dans cette étape ?
2. D'un point de vue thermodynamique, expliquez pourquoi l'utilisation de traces d'eau dans le milieu réactionnel inhibe totalement la formation du réactif de Grignard. Illustrez par une application numérique simple de l'enthalpie libre de réaction (on admettra que la réaction parasite avec l'eau a une constante d'équilibre $K^\circ > 10^{15}$).

### Partie II : Réactivité et stéréochimie de l'addition nucléophile

On fait réagir le 2-méthylbutanal avec le bromure de méthylmagnésium ($\text{CH}_3\text{MgBr}$).

3. Proposer un mécanisme réactionnel rigoureux (utilisant les flèches courbées) pour l'addition du magnésien sur la fonction aldéhyde. Précisez la nature de l'état de transition (modèle cyclique à 6 centres).
4. Le 2-méthylbutanal possédant un carbone asymétrique, l'addition conduit à un mélange de diastéréoisomères. En appliquant le modèle de Cram (ou Felkin-Anh), déterminez le stéréoisomère majoritaire formé. Justifiez clairement à l'aide d'une représentation spatiale (cram ou Newman).

### Partie III : Analyse critique des limites du modèle

5. Lors de la manipulation, le chimiste observe la formation d'un sous-produit majoritaire par couplage réactionnel si la température dépasse $55\,^\circ\text{C}$ ou en présence de traces de sels de transition $\text{Fe(III)}$. Identifier ce sous-produit et expliquer son mode de formation (oxydation de Gomberg ou couplage radicalaire).
6. Discutez de la validité de l'approximation du modèle de Cram dans le cas où le solvant est changé du THF par l'éther diéthylique ($\varepsilon_r = 4,3$). Quel impact cela a-t-il sur l'état d'agrégation du magnésien (équilibre de Schlenk) et par conséquent sur la stéréosélectivité ?

---

## Pistes et indications

* **Q1 :** Penser à l'acidité de l'hydrogène de l'eau ($pK_a \approx 14$) face à la basicité extrême du carbanion masqué du magnésien ($\text{R}^-$, $pK_a$ conjugué $\approx 50$).
* **Q3 :** L'atome de magnésium agit comme un acide de Lewis dur, se coordonnant à l'oxygène carbonyle pour exacerber l'électrophilie du carbone fonctionnel.
* **Q5 :** Le fer induit une monoréduction radicalaire menant au radical $\text{R}^\bullet$, qui réagit très rapidement par recombinaison.

---

## Corrigé pas à pas

### Partie I : Synthèse et thermodynamique

1. **Formation du précurseur et du magnésien :**
   * Halogénation : $\text{CH}_3-\text{CH}_2-\text{CH(OH)}-\text{CH}_3 + \text{HBr} \rightarrow \text{CH}_3-\text{CH}_2-\text{CH(Br)}-\text{CH}_3 + \text{H}_2\text{O}$
   * Mécanisme radicalaire hétérogène à la surface du magnésium métallique : 
     Transfert mono-électronique (SET) : $\text{R-Br} + \text{Mg(s)} \rightarrow [\text{R-Br}]^{\bullet-} + \text{Mg}^{\bullet+}$ puis formation du radical $\text{R}^\bullet + \text{MgBr}^\bullet \rightarrow \text{R-MgBr}$.
   * **Rôle du THF :** Le THF est un éther couronne potentiel et un donneur de double électron (base de Lewis). Il solvate l'ion $\text{Mg}^{2+}$ par complexation (coordination des doublets non liants de l'oxygène), abaissant ainsi l'énergie de l'état de transition et stabilisant le réactif organomagnésien en solution homogène.

2. **Inhibition par l'eau :**
   * L'eau est un acide fort vis-à-vis du carbanion organomagnésien (qui se comporte comme une base ultra-forte). La réaction acido-basique est totale :
     $$\text{R-MgBr} + \text{H}_2\text{O} \rightarrow \text{R-H} + \text{HO-MgBr}\downarrow$$
   * Δ<i>G</i>° = $-RT \ln K^\circ$. Avec $K^\circ > 10^{15}$, $\Delta_r G^\circ < -85\text{ kJ}\cdot\text{mol}^{-1}$. Cette réaction parasite est thermodynamiquement très favorisée et consomme stœchiométriquement le réactif, empêchant l'attaque nucléophile désirée.

### Partie II : Réactivité et stéréochimie

3. **Mécanisme de l'addition :**
   * L'atome de $\text{Mg}$ (acide de Lewis) se coordonne à l'oxygène du groupement carbonyle du 2-méthylbutanal.
   * L'attaque s'effectue selon un état de transition cyclique à six centres (modèle de Zimmerman-Traxler) : le groupe $\text{CH}_3^$ transfère sa charge vers le carbone électrophile $\text{C}=\text{O}$ tandis que le magnésium lie simultanément l'oxygène.

4. **Modèle de Cram / Felkin-Anh :**
   * En projetant le 2-méthylbutanal selon Felkin-Anh, le groupement le plus volumineux (le groupe éthyle $-\text{CH}_2\text{CH}_3$) se place perpendiculairement au plan du carbonyle.
   * L'attaque du nucléophile méthyle s'effectue par la face la moins encombrée (trajectoire de Bürgi-Dunitz à environ $107^\circ$).
   * *Analyse critique :* Le modèle prédit majoritairement le diastéréoisomère issu de l'attaque du côté opposé au groupement alkyle le plus encombrant, menant préférentiellement à l'énantiomère $(3S)$ après hydrolyse acide finale.

### Partie III : Analyse critique des limites du modèle

5. **Couplage radicalaire (Réaction parasite) :**
   * Le sous-produit majoritaire est l'alcane symétrique issu de l'homodimérisation des radicaux alkyles : $\text{R}-\text{R}$ (ici le 3,4-diméthylhexane).
   * En présence de $\text{Fe(III)}$ ou d'élévation thermique, l'oxydation mono-électronique engendre des espèces radicalaires libres $\text{R}^\bullet$ qui échappent à la cage solvantée et se recombinent bimoléculairement (réaction très rapide, diffusion-limitée).

6. **Influence du solvant et de l'agrégation (Équilibre de Schlenk) :**
   * L'équilibre de Schlenk régit la structure en solution des organomagnésiens : 
     $$2\text{R-MgX} \rightleftharpoons \text{R}_2\text{Mg} + \text{MgX}_2$$
   * Le passage du THF ($\varepsilon_r = 7,6$) à l'éther diéthylique ($\varepsilon_r = 4,3$) modifie la constante diélectrique et donc la force de solvation des ions. Dans un solvant moins polaire, l'agrégation est plus forte (dimères ou polymères complexes). 
   * **Conséquence analytique :** L'état d'agrégation modifie l'empêchement stérique effectif autour du centre réactif. La stéréosélectivité (le rapport des diastéréoisomères de Cram) diminue généralement car l'espèce réactive n'est plus un monomère isolé mais un agrégat hautement encombré, invalidant partiellement les hypothèses stériques simples du modèle de Cram standard.