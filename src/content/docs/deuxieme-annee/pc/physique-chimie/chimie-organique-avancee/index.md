---
title: 'Cours : Chimie organique synthétique'
description: 'Synthèse de cours, théorèmes et démonstrations fondamentales.'
---

## 📌 1. Définitions & Cadre d'étude

La chimie organique synthétique en classe préparatoire de seconde année (filière PC) s'articule autour de la maîtrise de la réactivité des fonctions chimiques et de la stratégie de construction carbonée. L'objectif est d'obtenir une molécule cible à partir de réactifs disponibles (synthèse totale ou hémi-synthèse), en optimisant la sélectivité et le rendement.

*   **Synthèse régiosélective :** Réaction conduisant majoritairement à un isomère de constitution parmi plusieurs possibles (ex. : règle de Markovnikov, orientation de substitution en série aromatique).
*   **Synthèse stéréosélective :** Réaction menant préférentiellement à un stéréoisomère (diastéréoisomère ou énantiomère) par rapport à un autre. On distingue la diastéréosélectivité (obtention d'un couple de diastéréoisomères majoritaire) et l'énantiosélectivité (excès énantiomérique).
*   **Protection de fonction :** Stratégie en plusieurs étapes consistant à transformer temporairement un groupe fonctionnel réactif pour éviter qu'il ne réagisse lors d'une étape réactionnelle ultérieure, avant de le régénérer (déprotection).
*   **Analyse rétrosynthétique :** Démarche intellectuelle consistant à déconnecter une molécule cible (C) en précurseurs de plus en plus simples, par application de réactions univoques inverses (synthons).

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### Stratégie de formation de liaisons carbone-carbone
La construction du squelette carboné est l'enjeu majeur de la synthèse organique. Les outils fondamentaux reposent sur la formation de liaisons $\text{C-C}$ par addition nucléophile, substitution nucléophile ou couplages catalysés.

#### Théorème de l'addition nucléophile sur les composés carbonylés
Soit un aldéhyde ou une cétone de formule générale $\text{R}^1-\text{C}(=\text{O})-\text{R}^2$. L'attaque d'un nucléophile fort ou activé $\text{Nu}^-$ conduit à un intermédiaire tétraédrique alcoxyde, protoné ensuite en alcool.

$$\text{R}^1-\text{C}(=\text{O})-\text{R}^2 + \text{Nu}^- \xrightarrow{\text{1. Nu}^-} [\text{Intermédiaire tétraédrique}] \xrightarrow{\text{2. } \text{H}_3\text{O}^+} \text{R}^1-\text{C}(\text{OH})(\text{Nu})-\text{R}^2$$

*Démonstration / Justification cinétique et thermodynamique :*
L'atome de carbone carbonyle présente un déficit électronique marqué en raison de l'effet inductif attracteur $-\text{I}$ et mésomère $-\text{M}$ de l'oxygène. Le profil énergétique de la réaction montre une première étape cinétiquement déterminante d'addition du nucléophile dans la LUMO ($\pi^*_{\text{C=O}}$) par l'HOMO du nucléophile.

### Réactions de couplage palladié (Hors-programme limitatif mais notions clés PC)
Les couplages croisés catalysés par des complexes de palladium(0) (type Suzuki-Miyaura ou Heck) permettent la formation de liaisons $\text{C(sp}^2\text{)-C(sp}^2\text{)}$ avec un excellent contrôle stéréochimique. Le cycle catalytique standard comprend trois étapes fondamentales :
1.  **L'addition oxydante** d'un dérivé halogéné $\text{R}-\text{X}$ sur le catalyseur $\text{Pd}^0\text{L}_n$ :
    $$\text{R}-\text{X} + \text{Pd}^0\text{L}_n \longrightarrow \text{R}-\text{Pd}^{\text{II}}(\text{X})\text{L}_2 + (n-2)\text{L}$$
2.  **La transmetalation** avec un organométallique (ex. : acide boronique).
3.  **L'élimination réductrice** régénérant le catalyseur $\text{Pd}^0$ et libérant le produit couplé.

## 💡 3. Méthodes classiques de résolution

Pour aborder un problème de synthèse organique aux concours (écrits Mines-Ponts, Centrale-Supélec, CCMP), la démarche méthodologique suivante est exigée :

1.  **Analyse de la molécule cible :** Repérer les fonctions présentes, identifier les degrés d'oxydation des différents carbones et compter le nombre d'atomes de carbone du squelette principal.
2.  **Rétrosynthèse ciblée :** 
    *   Si la cible est un alcool : penser aux organomagnésiens mixtes ($\text{RMgX}$) sur des aldéhydes, cétones ou époxydes, ou à la réduction de dérivés d'acides.
    *   Si la cible est un alcène : penser aux réactions de Wittig ou aux éliminations stéréospécifiques ($\text{E2}$).
3.  **Validation de la chimiosélectivité :** Si la molécule possède plusieurs groupes fonctionnels réactifs, vérifier si une étape de protection/déprotection est nécessaire (par exemple, protéger une fonction alcool par formation d'un éther silylé ou un aldéhyde par formation d'un acétal cyclique avant d'utiliser un réactif organométallique réducteur ou basique).
4.  **Bilan stœchiométrique et conditions opératoires :** Préciser systématiquement les conditions de traitement (souvent $\text{H}_3\text{O}^$ aqueux pour hydrolyser les intermédiaires alcoolates ou sels magnésiens).

## ⚠️ 4. Pièges classiques aux Concours

*   **Incompatibilité des organomagnésiens ($\text{RMgX}$) :** Un organomagnésien ne peut *jamais* être préparé ou utilisé en présence de protons acides (alcools, amines, acides carboxyliques, eau). La réaction acidobasique est immensément plus rapide que l'addition nucléophile.
*   **Oubli de la stéréochimie relative/absolue :** Lors de l'addition d'un nucléophile sur un plan trigonal (aldéhyde ou cétone prochiral), l'attaque se fait de part et d'autre avec une équiprobabilité (sauf induction asymétrique), conduisant à un mélange racémique. Il faut impérativement mentionner la formation d'un mélange s'il n'y a pas de contrôle énantiosélectif.
*   **Erreur de régiosélectivité dans les éliminations ($\text{E2}$) :** En présence d'une base encombrée (comme le tert-butylate de potassium), la régiosélectivité conduit majoritairement à l'alcène le *moins* substitué (produit de Hofmann) par effet cinétique, contrairement à la règle de Zaitsev (alcène le plus substitué, thermodynamique).
*   **Mauvaise gestion des degrés d'oxydation :** Ne pas oxyder par mégarde un aldéhyde en acide carboxylique (utilisation de $\text{KMnO}_4$ ou $\text{Cr(VI)}$) alors qu'on souhaite s'arrêter au stade aldéhyde (nécessité d'utiliser du PCC ou des conditions douces).