---
title: "ENS BCPST - Chimie"
description: "Sujet type concours corrigé pas à pas pour la filière BCPST."
sidebar:
  badge:
    text: "Annale Concours"
    variant: "caution"
---

## 📄 Partie 1 : Énoncé du Problème

### Étude physico-chimique du système red-ox du fer sous contrainte complexante : application au stockage géologique profond et à la biogéochimie des sols

Les équilibres régissant la spéciation du fer en solution aqueuse revêtent une importance capitale tant en génie des procédés qu'en sciences de l'environnement (oxydation des sols hydromorphes, intégrité des conteneurs de déchets radioactifs en formation argileuse). En milieu naturel, le fer coexiste principalement sous les degrés d'oxydation $+II$ et $+III$. 

Le présent problème se propose d'étudier l'influence conjointe du pH, du potentiel redox et de la complexation par un ligand organique modèle, l'acide oxalique ($\text{H}_2\text{C}_2\text{O}_4$, noté $\text{H}_2\text{L}$), sur la stabilité thermodynamique des phases solides et dissoutes du fer. L'acide oxalique est un diacide faible présent dans la rhizosphère par exudation racinaire, capable de mobiliser le fer par formation de complexes stables.

On s'intéressera dans un premier temps aux équilibres acido-basiques et de solubilité en l'absence de ligand complexant, pour étendre ensuite la modélisation thermodynamique au système multicomposant $\text{Fe}-\text{H}_2\text{O}-\text{L}$.

---

## ❓ Partie 2 : Questions

### Partie A : Domaines de prédominance et diagramme de Pourbaix du fer en l'absence de ligand

On considère une solution aqueuse diluée à $T = 298,15\text{ K}$. La concentration totale en espèces dissoutes du fer est fixée à $C_{\text{ref}} = 10^{-4}\text{ mol}\cdot\text{L}^{-1}$. Les pressions partielles des gaz sont standardisables à $P^\circ = 1\text{ bar}$.

Données thermodynamiques à $298,15\text{ K}$ :
* Produit ionique de l'eau : $K_e = 10^{-14,0}$
* Constantes d'acidité du couple $\text{H}_2\text{C}_2\text{O}_4 / \text{HC}_2\text{O}_4^-$ : $\text{p}K_{a1} = 1,2$ ; $\text{HC}_2\text{O}_4^- / \text{C}_2\text{O}_4^{2-}$ : $\text{p}K_{a2} = 4,2$
* Produit de solubilité de l'hydroxyde de fer(II) $\text{Fe(OH)}_2\text{ (s)}$ : $K_{s1} = 10^{-15,1}$
* Produit de solubilité de l'hydroxyde de fer(III) $\text{Fe(OH)}_3\text{ (s)}$ (ou oxyhydroxyde hydraté) : $K_{s2} = 10^{-38,8}$
* Potentiel standard apparent du couple $\text{Fe}^{3+} / \text{Fe}^{2+}$ : $E^\circ(\text{Fe}^{3+}/\text{Fe}^{2+}) = +0,77\text{ V}$
* Constante universelle des gaz parfaits : $R = 8,314\text{ J}\cdot\text{mol}^{-1}\cdot\text{K}^{-1}$ ; Constante de Faraday : $F = 96485\text{ C}\cdot\text{mol}^{-1}$. On pose $\frac{RT\ln(10)}{F} \approx 0,06\text{ V}$ à $298,15\text{ K}$.

1. Établir l'expression littérale puis calculer la valeur limite du pH au-delà de laquelle l'hydroxyde de fer(II) $\text{Fe(OH)}_2\text{ (s)}$ commence à précipiter à partir d'une solution contenant $\text{Fe}^{2+}$ à la concentration $C_{\text{ref}}$.
2. Écrire la demi-équation électronique du couple $\text{Fe(OH)}_3\text{ (s)} / \text{Fe}^{2+}$ et exprimer le potentiel de Nernst associé en fonction du pH et de l'activité des espèces dissoutes. Tracer qualitativement l'allure de la frontière entre ces deux espèces dans un diagramme $E-\text{pH}$.
3. Déterminer l'équation de la frontière séparant les domaines de prédominance de $\text{Fe}^{3+}$ et $\text{Fe}^{2+}$ en tenant compte de la possible précipitation des hydroxydes métalliques.

### Partie B : Effet de la complexation par l'ion oxalate

On introduit à présent de l'acide oxalique dans le système. La concentration totale en ligand oxalique dissout et complexé est notée $C_L = 10^{-2}\text{ mol}\cdot\text{L}^{-1}$. Le fer(III) forme avec l'oxalate un complexe stable de stœchiométrie 1:3 noté $\text{[Fe(L)}_3]^{3-}$ dont la constante globale de formation est $\beta_3 = \frac{[\text{Fe(L)}_3^{3-}]}{[\text{Fe}^{3+}][\text{L}^{2-}]^3} = 10^{20,0}$.

4. Définir le coefficient de réaction conditionnel (ou coefficient de complexation) $\alpha_{\text{Fe(III)}}$ traduisant le rapport entre la concentration totale en fer(III) sous forme dissoute (libre et complexée) et la concentration en fer(III) libre $[\text{Fe}^{3+}]$. Exprimer $\alpha_{\text{Fe(III)}}$ en fonction de $[\text{L}^{2-}]$, $\beta_3$ et des coefficients de dissociation de l'acide oxalique $\gamma_0(\text{pH})$ correspondant à la fraction de $\text{H}_2\text{L}$ sous forme $\text{L}^{2-}$.
5. Montrer que la présence du ligand oxalique modifie le potentiel apparent du couple redox $\text{Fe(III)}/\text{Fe(II)}$, en supposant que le fer(II) ne complexe pas significativement avec l'oxalate dans les conditions de l'étude. Calculer la variation du potentiel standard apparent $\Delta E^\circ$ à $\text{pH} = 5,0$.
6. Discuter thermodynamiquement de l'impact de l'exsudation racinaire d'acide oxalique sur la mobilité du fer dans les sols en s'appuyant sur les notions de sursaturation et de dissolution réductrice.

---

## 💡 Partie 3 : Rapport du Jury

### Pièges classiques et attentes du jury pour cette épreuve ENS

* **Rigoureuse gestion des échelles logarithmiques :** Le jury déplore régulièrement des erreurs dans l'utilisation des $\text{p}K_s$ et des $\text{p}K_a$. Une attention particulière doit être portée aux signes lors du passage aux cologarithmes.
* **Frontières mixtes dans les diagrammes de Pourbaix :** Pour les équilibres impliquant des phases solides et des espèces dissoutes dont la concentration n'est pas unitaire, le tracé de la frontière dépend de $C_{\text{ref}}$. Le candidat doit expliciter clairement si la frontière est verticale, horizontale ou inclinée.
* **Distinction entre constantes globales et successives :** Dans la question 4, l'utilisation directe de la constante globale $\beta_3$ est attendue sans s'embrouiller dans l'écriture de chaque équation intermédiaire, bien que la maîtrise de ces dernières soit pré requise.
* **Esprit critique :** Le jury attend des élèves de BCPST une capacité à relier les formalismes mathématiques de la thermodynamique à des problématiques environnementales concrètes (ici la biodisponibilité du fer et la podzolisation).

---

## 📋 Partie 4 : Corrigé Détaillé et Analyse

### Partie A : Domaines de prédominance et diagramme de Pourbaix du fer en l'absence de ligand

1. **Précipitation de $\text{Fe(OH)}_2\text{ (s)}$ :**
   L'équilibre de solubilité s'écrit :
   $$\text{Fe(OH)}_2\text{ (s)} \rightleftharpoons \text{Fe}^{2+} + 2\,\text{OH}^-$$
   Le produit de solubilité est $K_{s1} = [\text{Fe}^{2+}][\text{OH}^-]^2$.
   La précipitation débute lorsque le produit ionique dépasse $K_{s1}$, soit à saturation :
   $$[\text{OH}^-] = \sqrt{\frac{K_{s1}}{C_{\text{ref}}}}$$
   En utilisant $K_e = [\text{H}_3\text{O}^+][\text{OH}^-] = 10^{-14}$, on obtient :
   $$[\text{H}_3\text{O}^+] = \frac{K_e}{\sqrt{K_{s1}/C_{\text{ref}}}}$$
   En passant au cologarithme ($\text{pH} = -\log[\text{H}_3\text{O}^+]$) :
   $$\text{pH} = \text{p}K_e - \frac{1}{2}\text{p}K_{s1} + \frac{1}{2}\log(C_{\text{ref}})$$
   A.NUM. : 
   $$\text{pH} = 14,0 - \frac{15,1}{2} + \frac{1}{2}(-4) = 14,0 - 7,55 - 2,0 = 4,45$$
Analyse: * Pour $\text{pH} > 4,45$, l'hydroxyde de fer(II) précipite.

2. **Frontière $\text{Fe(OH)}_3\text{ (s)} / \text{Fe}^{2+}$ :**
   La demi-équation redox est :
   $$\text{Fe(OH)}_3\text{ (s)} + 3\,\text{H}^+ + e^- \rightleftharpoons \text{Fe}^{2+} + 3\,\text{H}_2\text{O}$$
   La loi de Nernst s'écrit :
   $$E = E^\circ(\text{Fe(OH)}_3/\text{Fe}^{2+}) + \frac{RT}{F}\ln\left(\frac{[\text{H}^+]^3}{[\text{Fe}^{2+}]}\right)$$
   Or, le potentiel standard apparent dépend du produit de solubilité $K_{s2} = [\text{Fe}^{3+}][\text{OH}^-]^3$ et du potentiel standard $E^\circ(\text{Fe}^{3+}/\text{Fe}^{2+})$. Exprimons $E^\circ(\text{Fe(OH)}_3/\text{Fe}^{2+})$ :
   À l'équilibre entre $\text{Fe(OH)}_3\text{ (s)}$ et $\text{Fe}^{3+}$ dissous : $[\text{Fe}^{3+}] = \frac{K_{s2}}{[\text{OH}^-]^3} = K_{s2} \frac{[\text{H}^+]^3}{K_e^3}$.
   En injectant dans Nernst du couple $\text{Fe}^{3+}/\text{Fe}^{2+}$ :
   $$E = E^\circ(\text{Fe}^{3+}/\text{Fe}^{2+}) + \frac{RT}{F}\ln\left(\frac{K_{s2}}{K_e^3} \frac{[\text{H}^+]^3}{[\text{Fe}^{2+}]}\right)$$
   En regroupant les termes :
   $$E = E^\circ(\text{Fe}^{3+}/\text{Fe}^{2+}) + \frac{RT}{F}\ln\left(\frac{K_{s2}}{K_e^3}\right) - \frac{3RT\ln(10)}{F}\text{pH} - \frac{RT}{F}\ln(C_{\text{ref}})$$
   A.NUM. : 
   La pente de la droite dans le plan $E-\text{pH}$ est $-\frac{3 \times 0,06}{1} = -0,18\text{ V}\cdot\text{pH}^{-1}$.

3. **Frontière $\text{Fe}^{3+} / \text{Fe}^{2+}$ en zone acide :**
   Tant qu'il n'y a pas précipitation de $\text{Fe(OH)}_3\text{ (s)}$ (soit $\text{pH} < \text{pH}_{\text{limite}}(\text{Fe(III)})$), la frontière est indépendante du pH car le nombre d'électrons échangés est égal au nombre de protons mis en jeu (ici 1 électron, 0 proton pour le couple $\text{Fe}^{3+}/\text{Fe}^{2+}$ en milieu fortement acide non complexant) :
   $$E = E^\circ(\text{Fe}^{3+}/\text{Fe}^{2+}) + \frac{RT}{F}\ln\left(\frac{[\text{Fe}^{3+}]}{[\text{Fe}^{2+}]}\right)$$
   Si $[\text{Fe}^{3+}] = [\text{Fe}^{2+}] = C_{\text{ref}}$, alors $E = E^\circ(\text{Fe}^{3+}/\text{Fe}^{2+}) = +0,77\text{ V}$ (frontière horizontale). Dès que $\text{pH}$ atteint la valeur de précipitation de l'hydroxyde de fer(III), la frontière est dictée par l'équilibre de réduction de $\text{Fe(OH)}_3\text{ (s)}$ établi à la question 2.

---

### Partie B : Effet de la complexation par l'ion oxalate

4. **Coefficient de complexation $\alpha_{\text{Fe(III)}}$ :**
   La concentration totale en fer(III) dissous s'écrit :
   $$C_{\text{Fe(III)}} = [\text{Fe}^{3+}]_{\text{libre}} + [\text{Fe(L)}_3^{3-}]$$
   Par définition de la constante globale $\beta_3$ :
   $$[\text{Fe(L)}_3^{3-}] = \beta_3 [\text{Fe}^{3+}][\text{L}^{2-}]^3$$
   Ainsi :
   $$C_{\text{Fe(III)}} = [\text{Fe}^{3+}](1 + \beta_3 [\text{L}^{2-}]^3)$$
   Le coefficient de complexation est donc :
   $$\alpha_{\text{Fe(III)}} = \frac{C_{\text{Fe(III)}}}{\text{[Fe}^{3+}\text{]}} = 1 + \beta_3 [\text{L}^{2-}]^3$$
   La concentration en ions oxalate libres $[\text{L}^{2-}]$ s'exprime via la fraction molaire $\gamma_2(\text{pH})$ de l'acide oxalique sous forme de dianion :
   $$[\text{L}^{2-}] = C_L \cdot \gamma_2(\text{pH}) = C_L \cdot \frac{K_{a1}K_{a2}}{[\text{H}_3\text{O}^+]^2 + K_{a1}[\text{H}_3\text{O}^+] + K_{a1}K_{a2}}$$

5. **Modification du potentiel apparent :**
   Le couple redox réel impliquant les espèces complexées s'écrit formellement :
   $$\text{Fe(L)}_3^{3-} + e^- \rightleftharpoons \text{Fe}^{2+} + 3\,\text{L}^{2-}$$
   La loi de Nernst s'établit avec les concentrations totales :
   $$E = E^\circ(\text{Fe}^{3+}/\text{Fe}^{2+}) + \frac{RT}{F}\ln\left(\frac{[\text{Fe(L)}_3^{3-}]}{\beta_3 [\text{L}^{2-}]^3 [\text{Fe}^{2+}]}\right)$$
   En posant le potentiel apparent $E^\circ_{\text{app}}$ :
   $$E^\circ_{\text{app}} = E^\circ(\text{Fe}^{3+}/\text{Fe}^{2+}) - \frac{RT}{F}\ln(\beta_3) - \frac{3RT}{F}\ln([\text{L}^{2-}schl}])$$
   La variation du potentiel standard est $\Delta E^\circ = E^\circ_{\text{app}} - E^\circ(\text{Fe}^{3+}/\text{Fe}^{2+}) = -\frac{RT}{F}\ln(\beta_3 [\text{L}^{2-}]^3)$.
   À $\text{pH} = 5,0$, le ligand est quasi-totalement sous forme $\text{L}^{2-}$ (car $\text{pH} > \text{p}K_{a2} = 4,2$), donc $[\text{L}^{2-}] \approx C_L = 10^{-2}\text{ mol}\cdot\text{L}^{-1}$.
   A.NUM. :
   $$\Delta E^\circ = -0,06 \times \log\left(10^{20,0} \times (10^{-2})^3\right) = -0,06 \times \log(10^{20} \times 10^{-6}) = -0,06 \times 14 = -0,84\text{ V}$$
Analyse: * La complexation forte du fer(III) stabilise considérablement ce dernier par rapport au fer(II). Le potentiel apparent chute de $0,84\text{ V}$, rendant le fer(III) beaucoup plus facile à réduire, ou dit autrement, facilitant grandement la mise en solution oxydée du fer.

6. **Discussion géochimique (Mobilité et Podzolisation) :**
   L'acide oxalique exsudé par les racines complexants les ions $\text{Fe}^{3+}$ abaisse drastiquement leur concentration libre par complexation. Selon la loi de Le Chatelier et les produits de solubilité, cette chute de $[\text{Fe}^{3+}]$ dissous libre déplace les équilibres de dissolution des oxydes et hydroxydes de fer insolubles ($\text{Fe(OH)}_3\text{ (s)}$) vers la libération de fer soluble sous forme de complexes organiques. C'est le processus fondamental de la **chéluviation** (ou podzolisation) dans les sols tempérés acides : le fer est mobile sous forme complexée en surface, migre en profondeur où la biodégradation du ligand ou la modification du pH provoque sa reprécipitation (horizon d'accumulation B).