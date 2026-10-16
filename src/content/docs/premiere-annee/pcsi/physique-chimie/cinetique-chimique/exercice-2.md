---
title: 'Exercice 2 : Mécanismes réactionnels et approximation de l état quasi-stationnaire'
description: 'Problème d entraînement type concours pour PCSI.'
---

### 🌐 Énoncé du problème / Étude de cas

La décomposition thermique de l'éthanal ($\text{CH}_3\text{CHO}$) en phase gazeuse conduit à la formation de méthane et de monoxyde de carbone selon la stœchiométrie globale :
$$\text{CH}_3\text{CHO}_{(g)} \xrightarrow{T} \text{CH}_{4}_{(g)} + \text{CO}_{(g)}$$

L'étude expérimentale de la vitesse initiale de formation du méthane à haute température (typ. $T \approx 800\text{ K}$) a mis en évidence un ordre global fractionnaire, ce qui exclut une réaction élémentaire unique et suggère un mécanisme réactionnel complexe en chaine.

Le mécanisme cinétique proposé par Rice et Herzfeld comprend les étapes élémentaires suivantes :

1. **Amorçage :** $\text{CH}_3\text{CHO} \xrightarrow{k_1} \dot{\text{CH}}_3 + \dot{\text{CHO}}$
2. **Propagation 1 :** $\dot{\text{CH}}_3 + \text{CH}_3\text{CHO} \xrightarrow{k_2} \text{CH}_4 + \text{CH}_3\dot{\text{C}}\text{O}$
3. **Propagation 2 :** $\text{CH}_3\dot{\text{C}}\text{O} \xrightarrow{k_3} \dot{\text{CH}}_3 + \text{CO}$
4. **Rupture (Terminaison) :** $2 \dot{\text{CH}}_3 \xrightarrow{k_4} \text{C}_2\text{H}_6$

*Données et hypothèses de modélisation :*
- Les entités $\dot{\text{CH}}_3$, $\dot{\text{CHO}}$ et $\text{CH}_3\dot{\text{C}}\text{O}$ sont des intermédiaires réactionnels hautement réactifs (radicaux libres).
- Le réacteur est supposé isochore et isotherme.
- *Analyse critique préliminaire :* Ce modèle néglige la possible recombinaison d'autres radicaux (comme $\text{CH}_3\dot{\text{C}}\text{O}$ ou $\dot{\text{CHO}}$) ainsi que les réactions de parois du réacteur. À très basse pression, les effets de paroi deviennent prépondérants, invalidant l'hypothèse d'un mécanisme purement homogène.

---

### ❓ Questions progressives

1. **Écriture des vitesses :** Exprimer la vitesse de disparition de l'éthanal $-\frac{d[\text{CH}_3\text{CHO}]}{dt}$ et la vitesse de formation du méthane $\frac{d[\text{CH}_4]}{dt}$ en fonction des concentrations des espèces et des constantes de vitesse $k_1$, $k_2$, $k_3$ et $k_4$.
2. **Application de l'AEQS :** Identifier les intermédiaires réactionnels et appliquer l'approximation de l'état quasi-stationnaire (AEQS) à chacun d'eux.
3. **Expression des concentrations intermédiaires :** En déduire l'expression de la concentration du radical méthyle $[\dot{\text{CH}}_3]$ et du radical acétyle $[\text{CH}_3\dot{\text{C}}\text{O}]$ en fonction de $[\text{CH}_3\text{CHO}]$ et des constantes cinétiques.
4. **Loi de vitesse globale :** Montrer que la vitesse de formation du méthane peut se mettre sous la forme :
   $$\frac{d[\text{CH}_4]}{dt} = k_{\text{obs}} [\text{CH}_3\text{CHO}]^n$$
   Préciser l'expression de la constante apparente $k_{\text{obs}}$ et la valeur de l'ordre apparent $n$.
5. **Analyse critique et limites du modèle :** 
   - Justifier qualitativement la validité de l'AEQS pour les radicaux en comparant leurs ordres de grandeur de durée de vie face à ceux des réactifs stables.
   - Discuter de l'impact d'une augmentation importante de la température sur la pertinence de ce mécanisme (apparition potentielle de réactions secondaires de craquage ou de pyrolyse radicalaire non prises en compte).

---

### 💡 Pistes & Indications

- **Q1 :** Traduisez chaque étape par une contribution algébrique aux vitesses des espèces en tenant compte des coefficients stœchiométriques.
- **Q2 & Q3 :** Écrivent les équations différentielles régissant l'évolution des intermédiaires ($\dot{\text{CH}}_3$, $\dot{\text{CHO}}$, $\text{CH}_3\dot{\text{C}}\text{O}$). Attention au radical $\dot{\text{CHO}}$ qui disparaît très rapidement (souvent assimilé dans les bilans simplifiés, ou dont on pose la dérivée nulle).
- **Q4 :** Substituez les expressions obtenues dans l'équation de la vitesse de formation de $\text{CH}_4$ (étape 2).
- **Q5 :** Pensez au fait que l'AEQS repose sur l'hypothèse que la vitesse de variation temporelle du radical est négligeable devant les vitesses de formation et de consommation de celui-ci ($\frac{d[\text{Rad}]}{dt} \approx 0 \ll v_{\text{format}}$).

---

### 📋 Corrigé détaillé et analyse des résultats

#### 1. Expressions des vitesses des espèces
D'après les lois cinétiques élémentaires (admettant la cinétique de mass action pour chaque étape) :
- Étape 1 : $v_1 = k_1 [\text{CH}_3\text{CHO}]$
- Étape 2 : $v_2 = k_2 [\dot{\text{CH}}_3][\text{CH}_3\text{CHO}]$
- Étape 3 : $v_3 = k_3 [\text{CH}_3\dot{\text{C}}\text{O}]$
- Étape 4 : $v_4 = k_4 [\dot{\text{CH}}_3]^2$

La vitesse de formation du méthane (intervenant uniquement dans l'étape 2) est :
$$\frac{d[\text{CH}_4]}{dt} = v_2 = k_2 [\dot{\text{CH}}_3][\text{CH}_3\text{CHO}]$$

La vitesse de disparition de l'éthanal (consommé dans l'étape 1 et l'étape 2) est :
$$-\frac{d[\text{CH}_3\text{CHO}]}{dt} = v_1 + v_2 = k_1 [\text{CH}_3\text{CHO}] + k_2 [\dot{\text{CH}}_3][\text{CH}_3\text{CHO}]$$

#### 2. Application de l'AEQS
Les intermédiaires réactionnels (IR) sont des espèces instables produites et consommées au cours du mécanisme : $\dot{\text{CH}}_3$, $\dot{\text{CHO}}$ et $\text{CH}_3\dot{\text{C}}\text{O}$.
L'application de l'AEQS consiste à supposer que leurs concentrations varient de manière négligeable devant celles des réactifs :
$$\frac{d[\dot{\text{CH}}_3]}{dt} = 0, \quad \frac{d[\dot{\text{CHO}}]}{dt} = 0, \quad \frac{d[\text{CH}_3\dot{\text{C}}\text{O}]}{dt} = 0$$

Écrivons les bilans pour chaque IR :
- Pour $\dot{\text{CHO}}$ (produit par 1) : 
  $$\frac{d[\dot{\text{CHO}}]}{dt} = v_1 = 0 \implies \text{En réalité, ce radical s'isomérise ou se décompose instantanément en } \text{CO} + \text{H}^\bullet \text{ ou autre, mais restons stricts au texte :}$$
  *(Note pédagogique : Souvent, l'étape 1 produit directement $\dot{\text{CH}}_3$ et $\text{CO} + \text{H}^\bullet$, simplifions selon le texte fourni où $\dot{\text{CHO}}$ se comporte comme un intermédiaire éphémère dont la production équivaut à la libération de CO).*
  
  Plus rigoureusement avec les équations du texte :
  - $\frac{d[\dot{\text{CH}}_3]}{dt} = v_1 - v_2 + v_3 - 2v_4 = 0$
  - $\frac{d[\text{CH}_3\dot{\text{C}}\text{O}]}{dt} = v_2 - v_3 = 0$
  - $\frac{d[\dot{\text{CHO}}]}{dt} = v_1 = 0$ (ce qui montre une limite du modèle brut si $\dot{\text{CHO}}$ n'a pas de voie de consommation explicite dans le texte ; on suppose implicitement que $\dot{\text{CHO}} \rightarrow \text{CO} + \dots$ est instantané ou que l'étape 1 génère directement $\text{CO}$).

#### 3. Détermination des concentrations des intermédiaires
D'après l'AEQS sur le radical acétyle :
$$\frac{d[\text{CH}_3\dot{\text{C}}\text{O}]}{dt} = v_2 - v_3 = 0 \implies k_2 [\dot{\text{CH}}_3][\text{CH}_3\text{CHO}] = k_3 [\text{CH}_3\dot{\text{C}}\text{O}]$$
Soit :
$$[\text{CH}_3\dot{\text{C}}\text{O}] = \frac{k_2}{k_3} [\dot{\text{CH}}_3][\text{CH}_3\text{CHO}]$$

Appliquons l'AEQS au radical méthyle $\dot{\text{CH}}_3$ :
$$\frac{d[\dot{\text{CH}}_3]}{dt} = v_1 - v_2 + v_3 - 2v_4 = 0$$
Puisque $v_2 = v_3$, il vient :
$$v_1 - 2v_4 = 0 \implies k_1 [\text{CH}_3\text{CHO}] - 2 k_4 [\dot{\text{CH}}_3]^2 = 0$$
On en extrait la concentration du radical méthyle :
$$[\dot{\text{CH}}_3] = \left( \frac{k_1}{2k_4} [\text{CH}_3\text{CHO}] \right)^{1/2}$$

#### 4. Loi de vitesse globale
exprimons la vitesse de formation du méthane :
$$\frac{d[\text{CH}_4]}{dt} = k_2 [\dot{\text{CH}}_3][\text{CH}_3\text{CHO}]$$
Substituons $[\dot{\text{CH}}_3]$ :
$$\frac{d[\text{CH}_4]}{dt} = k_2 [\text{CH}_3\text{CHO}] \times \left( \frac{k_1}{2k_4} \right)^{1/2} [\text{CH}_3\text{CHO}]^{1/2}$$
$$\frac{d[\text{CH}_4]}{dt} = k_2 \left( \frac{k_1}{2k_4} \right)^{1/2} [\text{CH}_3\text{CHO}]^{3/2}$$

On obtient bien la forme demandée avec :
- $k_{\text{obs}} = k_2 \left( \frac{k_1}{2k_4} \right)^{1/2}$
- L'ordre apparent de la réaction est **$n = \frac{3}{2}$** (ordre fractionnaire caractéristique des réactions en chaîne radicalaires).

#### 5. Analyse critique et limites du modèle
- **Validité de l'AEQS :** L'approximation repose sur l'inégalité $|\frac{d[\text{IR}]}{dt}| \ll v_{\text{format}} \approx v_{\text{consom}}$. Les radicaux possèdent des énergies d'activation de terminaison très faibles et réagissent quasi-diffusionnellement. Leurs concentrations stationnaires sont extrêmement faibles ($< 10^{-8}\text{ mol}\cdot\text{L}^{-1}$), ce qui valide mathématiquement l'AEQS car $\frac{d[\text{IR}]ีน}{dt}$ est négligeable devant les flux de propagation.
- **Limites thermodynamiques et cinétiques :** À très haute température ($> 900\text{ K}$), d'autres voies de craquage de la liaison C-C ou C-H deviennent compétitives. De plus, le réacteur réel présente des gradients thermiques (non-isothermie) et des effets catalytiques de surface (parois du réacteur en quartz ou acier inox) qui peuvent détruire les radicaux plus vite que la terminaison homogène d'étape 4, invalidant partiellement l'ordre $3/2$ observé en réacteur idéal.