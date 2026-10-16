---
title: 'Exercice 1 : Enthalpie standard de réaction et chaleurs de combustion'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Analyse thermodynamique et énergétique de la combustion du méthane et du méthanol

**Filière :** PCSI  
**Matière :** Physique-Chimie (Thermochimie)  
**Thème :** Enthalpie standard de réaction, loi de Hess et analyse critique des combustibles.

---

## I. Énoncé du problème

Dans le cadre de la transition énergétique, la comparaison des performances énergétiques des combustibles fossiles (comme le gaz naturel, principalement composé de méthane $\text{CH}_4(\text{g})$) et des carburants alternatifs (comme le méthanol $\text{CH}_3\text{OH}(\text{l})$) est un enjeu majeur. 

L'objectif de ce problème est de déterminer les enthalpies standard de combustion de ces deux espèces à l'aide de données thermodynamiques tabulées, d'évaluer la quantité de chaleur libérée lors de leur utilisation dans des conditions réelles, et de porter un regard critique sur l'impact environnemental et les limites des modèles thermodynamiques utilisés.

### Données thermodynamiques à $T^\circ = 298\text{ K}$ et $P^\circ = 1\text{ bar}$ :
*   Enthalpies standard de formation $\Delta_f H^\circ$ :
    *   $\text{CH}_4(\text{g}) : -74,8\text{ kJ}\cdot\text{mol}^{-1}$
    *   $\text{CH}_3\text{OH}(\text{l}) : -238,6\text{ kJ}\cdot\text{mol}^{-1}$
    *   $\text{CO}_2(\text{g}) : -393,5\text{ kJ}\cdot\text{mol}^{-1}$
    *   $\text{H}_2\text{O}(\text{l}) : -285,8\text{ kJ}\cdot\text{mol}^{-1}$
    *   $\text{H}_2\text{O}(\text{g}) : -241,8\text{ kJ}\cdot\text{mol}^{-1}$
*   Capacités thermiques massiques ou molaires (supposées indépendantes de la température dans la plage considérée) :
    *   Capacité thermique molaire isobar de l'eau gazeuse : $C_{p,\text{m}}(\text{H}_2\text{O, g}) = 33,6\text{ J}\cdot\text{K}^{-1}\cdot\text{mol}^{-1}$
    *   Capacité thermique molaire isobar de l'eau liquide : $C_{p,\text{m}}(\text{H}_2\text{O, l}) = 75,3\text{ J}\cdot\text{K}^{-1}\cdot\text{mol}^{-1}$
    *   Enthalpie standard de vaporisation de l'eau à $298\text{ K}$ : $\Delta_{\text{vap}} H^\circ (298\text{ K}) = 44,0\text{ kJ}\cdot\text{mol}^{-1}$

---

## II. Questions

1.  **Écriture des bilans réactionnels**  
    Écrire l'équation bilan de la réaction de combustion complète (conduisant à du dioxyde de carbone gazeux et de l'eau liquide) du méthane, puis du méthanol.

2.  **Calcul des enthalpies standard de combustion**  
    Définir l'enthalpie standard de réaction $\Delta_r H^\circ$ à partir des enthalpies standard de formation. Calculer $\Delta_c H^\circ$ (à $298\text{ K}$) pour une mole de méthane, puis pour une mole de méthanol.

3.  **Analyse massique et comparaison**  
    Calculer le pouvoir calorifique massique (exprimé en $\text{kJ}\cdot\text{g}^{-1}$) du méthane et du méthanol pour la combustion menant à l'eau liquide. Quel est le combustible le plus performant par unité de masse ?

4.  **Influence de l'état physique de l'eau**  
    Dans un moteur thermique ou une chaudière à condensation, l'eau produite lors de la combustion du méthane est initialement sous forme de gaz (vapeur d'eau). 
    *   Calculer l'enthalpie standard de combustion du méthane conduisant à de l'eau *gazeuse* à $298\text{ K}$.
    *   Expliquer l'intérêt thermodynamique et technologique des chaudières dites "à condensation" par rapport à cette valeur.

5.  **Analyse critique et limites du modèle**  
    *   Calculer la chaleur réellement échangée avec l'extérieur lors de la combustion isobare de $1\text{ kg}$ de méthane à $298\text{ K}$ dans les conditions standard, en supposant la réaction totale.
    *   Discuter de la valablement des hypothèses (constance des $C_p$, température de référence $298\text{ K}$, réactivité totale) face à une situation réelle de flamme industrielle (où la température atteint $1500\text{--}2000\text{ K}$).

---

## III. Pistes et indications

*   *Question 2* : Veillez à bien équilibrer les stœchiométries et à n'oublier aucune espèce. N'oubliez pas que l'enthalpie standard de formation d'un corps pur simple stable dans l'état standard est nulle par convention, mais aucun des réactifs et produits ici n'est un corps pur simple.
*   *Question 3* : Le pouvoir calorifique massique (PCM) correspond à $-\Delta_c H^\circ$ rapporté à la masse molaire du combustible.
*   *Question 4* : Utilisez la loi de Hess en introduisant l'étape de vaporisation de l'eau, ou recalculez directement avec $\Delta_f H^\circ(\text{H}_2\text{O, g})$.
*   *Question 5* : Pensez à la loi de Kirchhoff pour la dépendance en température de l'enthalpie de réaction ($\mathrm{d}\Delta_r H^\circ / \mathrm{d}T = \Delta_r C_p$) et aux équilibres chimiques de dissociation à haute température ($\text{CO}_2 \rightleftharpoons \text{CO} + \frac{1}{2}\text{O}_2$).

---

## IV. Corrigé détaillé

### 1. Équations bilans des combustions
*   **Méthane :**  
    $$\text{CH}_4(\text{g}) + 2\,\text{O}_2(\text{g}) \longrightarrow \text{CO}_2(\text{g}) + 2\,\text{H}_2\text{O}(\text{l})$$
*   **Méthanol :**  
    $$\text{CH}_3\text{OH}(\text{l}) + \frac{3}{2}\,\text{O}_2(\text{g}) \longrightarrow \text{CO}_2(\text{g}) + 2\,\text{H}_2\text{O}(\text{l})$$

### 2. Calcul des enthalpies standard de combustion à $298\text{ K}$
Par définition, l'enthalpie standard de réaction s'exprime via les enthalpies standard de formation $\Delta_f H^\circ$ :
$$\Delta_r H^\circ = \sum \nu_i \Delta_f H^\circ(\text{produits}) - \sum |\nu_j| \Delta_f H^\circ(\text{réactifs})$$
*(Note : $\text{O}_2(\text{g})$ est un corps pur simple stable, $\Delta_f H^\circ(\text{O}_2, \text{g}) = 0\text{ kJ}\cdot\text{mol}^{-1}$)*.

*   **Pour le méthane ($\Delta_{c,1}^\circ$) :**
    $$\Delta_{c,1}^\circ = \Delta_f H^\circ(\text{CO}_2, \text{g}) + 2\,\Delta_f H^\circ(\text{H}_2\text{O}, \text{l}) - \left[ \Delta_f H^\circ(\text{CH}_4, \text{g}) + 0 \right]$$
    $$\Delta_{c,1}^\circ = (-393,5) + 2 \times (-285,8) - (-74,8) = -393,5 - 571,6 + 74,8 = -890,3\text{ kJ}\cdot\text{mol}^{-1}$$

*   **Pour le méthanol ($\Delta_{c,2}^\circ$) :**
    $$\Delta_{c,2}^\circ = \Delta_f H^\circ(\text{CO}_2, \text{g}) + 2\,\Delta_f H^\circ(\text{H}_2\text{O}, \text{l}) - \left[ \Delta_f H^\circ(\text{CH}_3\text{OH}, \text{l}) + 0 \right]$$
    $$\Delta_{c,2}^\circ = (-393,5) + 2 \times (-285,8) - (-238,6) = -393,5 - 571,6 + 238,6 = -726,7\text{ kJ}\cdot\text{mol}^{-1}$$

### 3. Analyse massique (Pouvoir Calorifique Inférieur / Supérieur)
Calculons les masses molaires :
*   $M(\text{CH}_4) = 12,0 + 4 \times 1,0 = 16,0\text{ g}\cdot\text{mol}^{-1}$
*   $M(\text{CH}_3\text{OH}) = 12,0 + 4 \times 1,0 + 16,0 = 32,0\text{ g}\cdot\text{mol}^{-1}$

Pouvoirs calorifiques massiques (exprimés en valeur absolue par gramme de combustible) :
*   **Méthane :**  
    $$PCM_1 = \frac{|\Delta_{c,1}^\circ|}{M(\text{CH}_4)} = \frac{890,3\text{ kJ}}{16,0\text{ g}} \approx 55,6\text{ kJ}\cdot\text{g}^{-1}$$
*   **Méthanol :**  
    $$PCM_2 = \frac{|\Delta_{c,2}^\circ|}{M(\text{CH}_3\text{OH})} = \frac{726,7\text{ kJ}}{32,0\text{ g}} \approx 22,7\text{ kJ}\cdot\text{g}^{-1}$$
Conclusion: ** Le méthane est un combustible nettement plus performant par unité de masse que le méthanol (plus du double). Cela s'explique par le fait que le méthanol possède déjà un átome d'oxygène lié dans sa molécule, ce qui "précède" une partie de l'oxydation et réduit le nombre de liaisons $\text{C-H}$ et $\text{C-C}$ hautement énergétiques.

### 4. Influence de l'état physique de l'eau
*   **Enthalpie de combustion avec eau gazeuse :**  
    En utilisant $\Delta_f H^\circ(\text{H}_2\text{O}, \text{g}) = -241,8\text{ kJ}\cdot\text{mol}^{-1}$ :
    $$\Delta_{c,1,\text{gaz}}^\circ = (-393,5) + 2 \times (-241,8) - (-74,8) = -393,5 - 483,6 + 74,8 = -802,3\text{ kJ}\cdot\text{mol}^{-1}$$
    *(On retrouve l'écart via $\Delta_{\text{vap}} H^\circ$ : $-890,3 + 2 \times 44,0 = -802,3\text{ kJ}\cdot\text{mol}^{-1}$)*.
*   **Intérêt des chaudières à condensation :**  
    Une chaudière classique rejette les fumées chaudes contenant de la vapeur d'eau, perdant ainsi l'enthalpie de vaporisation (soit $2 \times 44 = 88\text{ kJ}$ par mole de $\text{CH}_4$ brûlé, soit environ $10\%$ de l'énergie totale). La chaudière à condensation refroidit les fumées en dessous du point de rosée pour condenser l'eau produite, récupérant ainsi cette énergie fatale, ce qui augmente nettement le rendement énergétique global de l'installation.

### 5. Analyse critique et limites du modèle
*   **Chaleur échangée pour $1\text{ kg}$ de $\text{CH}_4$ :**  
    Nombre de moles dans $1\text{ kg}$ : $n = \frac{1000\text{ g}}{16,0\text{ g}\cdot\text{mol}^{-1}} = 62,5\text{ mol}$.  
    La transformation est isobare, fermée, et on suppose qu'il n'y a pas de travail autre que transite-massique ($W_u = 0$). D'après le premier principe, la chaleur échangée vaut :
    $$Q = \Delta H = n \cdot \Delta_{c,1}^\circ = 62,5 \times (-890,3) \cdot 10^3 = -5,56 \times 10^4\text{ kJ} = -55,6\text{ MJ}$$

*   **Limites et discussion critique du modèle :**
    1.  *Température de référence ($298\text{ K}$) vs Réalité industrielle :* Les réactions de combustion se produisent à des températures élevées ($> 1500\text{ K}$). L'hypothèse d'indépendance des $C_p$ avec la température (loi de Kirchhoff : $\Delta_r H^\circ(T) = \Delta_r H^\circ(298) + \int_{298}^{T} \Delta_r C_p \mathrm{d}T$) conduit à des erreurs sensibles car les capacités thermiques des gaz varient.
    2.  *Totalité de la réaction et équilibres :* À haute température, la combustion n'est pas strictement totale en raison de la dissociation thermique des produits (par exemple, $\text{CO}_2 \rightleftharpoons \text{CO} + \frac{1}{2}\text{O}_2$ ou $\text{H}_2\text{O} \rightleftharpoons \text{H}_2 + \frac{1}{2}\text{O}_2$). 
    3.  *Phénomènes annexes :* La formation de polluants (oxydes d'azote $\text{NO}_x$ par fixation thermique de l'azote de l'air) absorbe de l'énergie et modifie le bilan thermique réel. Le modèle tabulé à $298\text{ K}$ fournit donc une borne supérieure idéale de l'énergie récupérable, qu'il convient de nuancer par des bilans exergétiques plus poussés.