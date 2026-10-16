---
title: 'Cours : Cinétique enzymatique'
description: 'Synthèse de cours, théorèmes et démonstrations.'
---

# Cinétique enzymatique - Fiche de cours (BCPST1)

## Introduction et Définitions fondamentales

La cinétique enzymatique a pour objet l'étude quantitative de la vitesse des réactions catalysées par des enzymes et des facteurs qui l'influencent.

*   **Enzyme :** Catalyseur biologique (majoritairement protéique, parfois ARN - ribozyme) qui accélère une réaction thermodynamiquement possible sans être consommé ni modifié de façon permanente à la fin de la réaction.
*   **Substrat ($\text{S}$) :** Molécule transformée en produit ($\text{P}$) grâce à l'action de l'enzyme ($\text{E}$).
*   **Complexe enzyme-substrat ($\text{ES}$) :** Intermédiaire réactionnel non covalent indispensable formé lors de la catalyse.

Le schéma réactionnel de base (modèle de Michaelis et Menten) est le suivant :

$$\text{E} + \text{S} \underset{k_{-1}}{\overset{k_1}{\rightleftharpoons}} \text{ES} \overset{k_2}{\longrightarrow} \text{E} + \text{P}$$

*   $k_1$ : constante de vitesse de formation du complexe $\text{ES}$ ($\text{L}\cdot\text{mol}^{-1}\cdot\text{s}^{-1}$).
*   $k_{-1}$ : constante de vitesse de dissociation du complexe $\text{ES}$ ($\text{s}^{-1}$).
*   $k_2$ (ou $k_{\text{cat}}$) : constante catalytique ou nombre de turnover, vitesse de la réaction chimique proprement dite ($\text{s}^{-1}$).

---

## Le Modèle de Michaelis-Menten

### 1. Hypothèses du modèle
1.  **Stationnarité (approximation de Bodenstein) :** Après un transitoire très court, la concentration du complexe $\text{ES}$ est considérée comme constante au cours du temps : $\frac{d[\text{ES}]}{dt} \approx 0$.
2.  **Conditions initiales :** On mesure la vitesse *initiale* ($v_i$). À $t=0$, $[\text{P}] = 0$, donc la réaction inverse ($\text{P} \rightarrow \text{S}$) est négligeable. De plus, $[\text{S}] \approx [\text{S}]_0$.
3.  **Conservation de l'enzyme :** L'enzyme totale ($\text{E}_t$) se trouve sous forme libre ($\text{E}$) ou liée ($\text{ES}$) : 
    $$[\text{E}]_t = [\text{E}] + [\text{ES}]$$

### 2. Démonstration de l'équation de Michaelis-Menten

Exprimons la vitesse initiale $v_i$ de formation du produit :
$$v_i = \frac{d[\text{P}]}{dt}_{(t=0)} = k_2 [\text{ES}]$$

Appliquons l'approximation de Bodenstein sur le complexe $\text{ES}$ :
$$\frac{d[\text{ES}]}{dt} = k_1 [\text{E}][\text{S}] - k_{-1}[\text{ES}] - k_2[\text{ES}] = 0$$

En remplaçant $[\text{E}]$ par $[\text{E}]_t - [\text{ES}]$ :
$$k_1 ([\text{E}]_t - [\text{ES}])[\text{S}] - (k_{-1} + k_2)[\text{ES}] = 0$$

Développons et factorisons par $[\text{ES}]$ :
$$k_1 [\text{E}]_t [\text{S}] - k_1 [\text{ES}][\text{S}] - (k_{-1} + k_2)[\text{ES}] = 0$$
$$k_1 [\text{E}]_t [\text{S}] = [\text{ES}] \left( k_1 [\text{S}] + k_{-1} + k_2 \right)$$

D'où :
$$[\text{ES}] = \frac{[\text{E}]_t [\text{S}]}{\frac{k_{-1} + k_2}{k_1} + [\text{S}]}$$

On pose la **constante de Michaelis**, notée $K_m$ :
$$K_m = \frac{k_{-1} + k_2}{k_1}$$
*(Note : $K_m$ s'exprime en $\text{mol}\cdot\text{L}^{-1}$. C'est une concentration, pas une constante d'affinité thermodynamique stricte, bien qu'elle y soit reliée).*

On obtient alors :
$$[\text{ES}] = \frac{[\text{E}]_t [\text{S}]}{K_m + [\text{S}]}$$

En injectant dans l'expression de $v_i$ :
$$v_i = k_2 [\text{E}]_t \frac{[\text{S}]}{K_m + [\text{S}]}$$

La vitesse maximale $V_{\text{max}}$ est atteinte lorsque toute l'enzyme est sous forme liée ($\text{ES}$), c'est-à-dire quand $[\text{S}] \gg K_m$ (saturation) :
$$V_{\text{max}} = k_2 [\text{E}]_t$$

D'où l'**équation de Michaelis-Menten** :
$$\boxed{v_i = \frac{V_{\text{max}} [\text{S}]}{K_m + [\text{S}]}}$$

---

### Propriétés fondamentales de la constante de Michaelis ($K_m$)

*   **Signification graphique :** $K_m$ est la concentration en substrat pour laquelle la vitesse initiale est égale à la moitié de la vitesse maximale ($v_i = \frac{V_{\text{max}}}{2}$).
*   **Signification biochimique :** 
    *   Si $K_m$ est faible, l'affinité de l'enzyme pour son substrat est forte (il faut peu de $\text{S}$ pour saturer l'enzyme à moitié).
    *   $K_m$ dépend de l'enzyme, du substrat considéré, du pH et de la température.

---

## Représentations Linéarisées (Méthodes d'étude expérimentale)

L'exploitation directe de l'hyperbole de Michaelis ($v_i = f([\text{S}])$) est peu précise pour déterminer $V_{\text{max}}$ et $K_m$. On utilise des transformations mathématiques.

### Représentation de Lineweaver-Burk (des doubles inverses)
On prend l'inverse de l'équation de Michaelis-Menten :
$$\frac{1}{v_i} = \frac{K_m + [\text{S}]}{V_{\text{max}} [\text{S}]} = \frac{K_m}{V_{\text{max}}} \cdot \frac{1}{[\text{S}]} + \frac{1}{V_{\text{max}}}$$

*   C'est l'équation d'une droite de type $y = ax + b$ avec :
    *   $y = \frac{1}{v_i}$
    *   $x = \frac{1}{[\text{S}]}$
    *   Pente $a = \frac{K_m}{V_{\text{max}}}$
    *   Ordonnée à l'origine $b = \frac{1}{V_{\text{max}}}$
    *   Intersection avec l'axe des abscisses : $x = -\frac{1}{K_m}$

---

## Inhibition Enzymatique

Un inhibiteur ($\text{I}$) est une molécule qui diminue la vitesse d'une réaction enzymatique. On distingue deux grands types d'inhibiteurs réversibles :

### 1. Inhibition compétitive
*   **Mécanisme :** L'inhibiteur ressemble structuralement au substrat et se fixe de manière réversible sur le *site actif* de l'enzyme. La fixation de $\text{S}$ et de $\text{I}$ s'excluent mutuellement.
*   **Conséquences cinétiques :** 
    *   $V_{\text{max}}$ **inchangée** (en présence d'une forte concentration de substrat, on déplace l'inhibiteur, l'enzyme retrouve sa vitesse maximale).
    *   $K_m$ **apparente augmentée** ($K_{m,\text{app}} > K_m$), car l'affinité apparente de l'enzyme pour le substrat diminue.
*   **Lineweaver-Burk :** Les droites avec et sans inhibiteur se coupent sur l'ordonnée à l'origine ($\frac{1}{V_{\text{max}}}$).

### 2. Inhibition non compétitive (ou incompétitive / mixte selon les cas rigoureux, version classique BCPST)
*   **Mécanisme :** L'inhibiteur se fixe sur un site distinct du site actif (site allostérique), que l'enzyme soit libre ou liée au substrat ($\text{ES}$).
*   **Conséquences cinétiques :**
    *   $V_{\text{max}}$ **diminue** ($V_{\text{max,app}} < V_{\text{max}}$), car une fraction de l'enzyme est rendue définitivement inactive par l'inhibiteur, peu importe $[\text{S}]$.
    *   $K_m$ **inchangée** (dans le modèle strict non compétitif pur).
*   **Lineweaver-Burk :** Les droites se coupent sur l'axe des abscisses ($-\frac{1}{K_m}$).

---

## Méthodes et Démarches en BCPST

*   **Vérifier la validité des conditions initiales :** Toujours s'assurer que la mesure de $v_i$ est faite sur la portion linéaire de la courbe $[\text{P}] = f(t)$ (généralement dans les premières minutes).
*   **Identifier graphiquement les paramètres :** Savoir lire $V_{\text{max}}$ et $K_m$ sur une courbe $v = f([\text{S}])$ et sur une droite de Lineweaver-Burk.

---

## Pièges Classiques à Éviter

1.  **Confondre $K_m$ et affinité :** Plus $K_m$ est *petit*, plus l'affinité est *grande*. Ne pas dire "l'affinité est égale à $K_m$".
2.  **Oublier les unités :** $v_i$ est en $\text{mol}\cdot\text{L}^{-1}\cdot\text{s}^{-1}$ (ou $\mu\text{mol}\cdot\min^{-1}$), $K_m$ en $\text{mol}\cdot\text{L}^{-1}$, et $V_{\text{max}}$ a la même unité que $v_i$.
3.  **Mauvaise interprétation de Lineweaver-Burk :** L'erreur classique est d'oublier que l'axe des abscisses représente $\frac{1}{[\text{S}]}$ et non $[\text{S}]$. Une valeur lue à l'origine doit être inversée pour obtenir $K_m$ ou $V_{\text{max}}$.
4.  **Causalisme erroné en cinétique :** L'enzyme ne "modifie pas l'équilibre thermodynamique" d'une réaction ($\Delta_r G$ reste inchangé), elle accélère seulement l'atteinte de cet équilibre en abaissant l'énergie d'activation ($\Delta G^\ddagger$).