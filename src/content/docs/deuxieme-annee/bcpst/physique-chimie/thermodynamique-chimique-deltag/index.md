---
title: "Thermodynamique Chimique : Enthalpie Libre & Équilibres"
description: "Méthodologie détaillée, rédactions modèles et conseils des jurys de concours Agro-Véto / G2E."
sidebar:
  badge:
    text: "Méthode Concours"
    variant: "caution"
---

## 🎯 Analyse des attentes et critères d'évaluation des jurys

En classe préparatoire BCPST, les concours Agro-Véto et G2E accordent une importance capitale à la thermodynamique chimique. Les examinateurs attendent des candidats une rigueur absolue tant dans la manipulation des grandeurs thermodynamiques que dans la rédaction.

Les critères majeurs d'évaluation lors de la correction des copies sont les suivants :
- **L'expression littérale avant l'application numérique** : Aucune valeur numérique ne doit être injectée sans qu'une relation littérale claire, démontrée ou justifiée du cours n'ait été posée au préalable.
- **L'homogénéité des unités** : Les candidats doivent veiller à exprimer la température en kelvins ($\text{K}$), la pression standard en bars ($\text{bar}$) ou en pascals ($\text{Pa}$), et les énergies molaires en joules par mole ($\text{J}\cdot\text{mol}^{-1}$).
- **La rigueur du vocabulaire** : Confondre constante d'équilibre standard $K^\circ$ (sans dimension) et quotient de réaction $Q_r$, ou omettre l'état standard de référence, est lourdement sanctionné.
- **La justification rigoureuse du sens d'évolution** : L'utilisation correcte du signe de l'enthalpie libre de réaction $\Delta_r G$ ou de la comparaison entre $Q_r$ et $K^\circ$ doit être explicitée en lien avec le second principe de la thermodynamique.

---

## 📐 Rappels théoriques & Démonstrations incontournables

L'enthalpie libre $G$ est définie par la relation :
$$G = H - T S$$

Pour un système fermé subissant une transformation isotherme et isobar, le second principe s'exprime par l'inégalité de Clausius, menant à la condition d'évolution spontanée à température et pression constantes :
$$\Delta G_{\text{sys}, T, P} \le 0$$

Pour une réaction chimique symbolisée par :
$$\sum \nu_i \text{A}_i = 0$$

L'enthalpie libre de réaction $\Delta_r G$ s'écrit :
$$\Delta_r G = \left( \frac{\partial G}{\partial \xi} \right)_{T,P} = \Delta_r G^\circ + R T \ln(Q_r)$$

Où $\Delta_r G^\circ$ est l'enthalpie libre standard de réaction, liée à l'enthalpie standard $\Delta_r H^\circ$ et à l'entropie standard $\Delta_r S^\circ$ par :
$$\Delta_r G^\circ = \Delta_r H^\circ - T \Delta_r S^\circ$$

À l'équilibre thermodynamique, on a $\Delta_r G = 0$, ce qui conduit à la relation fondamentale :
$$\Delta_r G^\circ = - R T \ln(K^\circ)$$

---

### 📌 Question / Problématique classique 1 : Calcul de l'enthalpie libre de réaction $\Delta_r G$ et condition d'évolution spontanée

#### 💡 Méthode de rédaction canonique
1. Établir l'équation bilan de la réaction en précisant l'état physique de chaque espèce chimique.
2. Exprimer le quotient de réaction $Q_r$ en fonction des activités des espèces (pressions partielles normalisées $P_i / P^\circ$ pour les gaz parfaits, concentrations normalisées $C_i / C^\circ$ pour les solutions diluées, et $1$ pour les solides ou solvants purs).
3. Calculer ou récupérer la valeur de $\Delta_r G^\circ$ à la température $T$ considérée (souvent via $\Delta_r H^\circ$ et $\Delta_r S^\circ$ en supposant ces grandeurs indépendantes de $T$ si l'approximation d'Ellingham est valide).
4. Calculer $\Delta_r G$ pour l'état initial du système et conclure quant au sens d'évolution spontanée.

#### 📋 Exercice type concours résolu pas à pas
**Énoncé :** Soit la synthèse de l'ammoniac à $T = 298 \text{ K}$ :
$$\text{N}_2(g) + 3 \text{ H}_2(g) \rightleftharpoons 2 \text{ NH}_3(g)$$
On donne $\Delta_r G^\circ(298 \text{ K}) = -33.0 \text{ kJ}\cdot\text{mol}^{-1}$. Dans un réacteur de volume fixe, on introduit initialement $1.0 \text{ mol}$ de $\text{N}_2$, $3.0 \text{ mol}$ de $\text{H}_2$ et $2.0 \text{ mol}$ de $\text{NH}_3$ sous une pression totale $P = 200 \text{ bar}$. Déterminer le sens d'évolution spontanée du système.

**Résolution rédigée :**
*Étape 1 : Expression du quotient de réaction.*
Le quotient de réaction $Q_r$ s'exprime par :
$$Q_r = \frac{(P_{\text{NH}_3} / P^\circ)^2}{(P_{\text{N}_2} / P^\circ) (P_{\text{H}_2} / P^\circ)^3}$$
Avec $P^\circ = 1 \text{ bar}$. En utilisant la loi des gaz parfaits et la fraction molaires $y_i$, on a $P_i = y_i P$.
Le nombre total de moles initial est $n_{\text{tot}} = 1.0 + 3.0 + 2.0 = 6.0 \text{ mol}$.
Les fractions molaires initiales sont :
$$y_{\text{N}_2} = \frac{1.0}{6.0}, \quad y_{\text{H}_2} = \frac{3.0}{6.0}, \quad y_{\text{NH}_3} = \frac{2.0}{6.0}$$
Les pressions partielles initiales valent donc :
$$P_{\text{N}_2} = \frac{1}{6} \times 200 \text{ bar}, \quad P_{\text{H}_2} = \frac{3}{6} \times 200 \text{ bar}, \quad P_{\text{NH}_3} = \frac{2}{6} \times 200 \text{ bar}$$

*Étape 2 : Calcul de $Q_r$.*
En injectant ces valeurs dans $Q_r$ :
$$Q_r = \frac{\left( \frac{2}{3} \times 200 \right)^2}{\left( \frac{1}{6} \times 200 \right) \left( \frac{1}{2} \times 200 \right)^3} = \frac{\frac{4}{9} \times 40000}{\frac{1}{6} \times \frac{1}{8} \times 8000000} = \dots$$
Après simplification numérique, on obtient $Q_r \approx 1.28 \times 10^{-3}$.

*Étape 3 : Calcul de $\Delta_r G$ et conclusion.*
$$\Delta_r G = \Delta_r G^\circ + R T \ln(Q_r)$$
$$\Delta_r G = -33.0 \times 10^3 + (8.314 \times 298 \times \ln(1.28 \times 10^{-3}))$$
$$\Delta_r G = -33000 + 2477.6 \times (-6.66) \approx -33000 - 16490 = -49490 \text{ J}\cdot\text{mol}^{-1}$$
Puisque $\Delta_r G < 0$, le système évolue spontanément dans le **sens direct** (formation d'ammoniac).

#### ⚠️ Les pièges majeurs relevés dans les rapports de jury
- Oublier de normaliser les pressions par $P^\circ$ dans le calcul de $Q_r$, ce qui rend l'argument du logarithme adimensionné faux (erreur d'analyse dimensionnelle critique).
- Confondre l'état initial des quantités de matière avec l'avancement à l'équilibre.

---

### 📌 Question / Problématique classique 2 : Influence de la température et de la pression (loi de van 't Hoff)

#### 💡 Méthode de rédaction canonique
1. Partir de la relation liant la constante d'équilibre $K^\circ$ à l'enthalpie libre standard : $\ln(K^\circ) = - \frac{\Delta_r G^\circ}{R T}$.
2. Dériver cette expression par rapport à la température $T$ en utilisant la relation de Gibbs-Helmholtz :
   $$\frac{d}{dT} \left( \frac{\Delta_r G^\circ}{T} \right) = - \frac{\Delta_r H^\circ}{T^2}$$
3. Obtenir la loi de van 't Hoff différentielle :
   $$\frac{d \ln(K^\circ)}{dT} = \frac{\Delta_r H^\circ}{R T^2}$$
4. Intégrer cette équation en supposant $\Delta_r H^\circ$ constante sur l'intervalle de température considéré pour évaluer $K^\circ$ à une nouvelle température.

#### 📋 Exercice type concours résolu pas à pas
**Énoncé :** On considère l'équilibre chimique endothermique de dissociation du dioxyde d'azote :
$$\text{N}_2\text{O}_4(g) \rightleftharpoons 2 \text{ NO}_2(g)$$
À $T_1 = 298 \text{ K}$, la constante d'équilibre vaut $K^\circ_1 = 0.14$. Sachant que l'enthalpie standard de réaction vaut $\Delta_r H^\circ = 57.2 \text{ kJ}\cdot\text{mol}^{-1}$ (supposée indépendante de $T$), calculer la constante d'équilibre $K^\circ_2$ à $T_2 = 350 \text{ K}$.

**Résolution rédigée :**
*Étape 1 : Poser la loi de van 't Hoff intégrée.*
En intégrant la loi de van 't Hoff entre $T_1$ et $T_2$ sous l'hypothèse de l'indépendance de $\Delta_r H^\circ$ vis-à-vis de $T$, on obtient :
$$\ln\left( \frac{K^\circ_2}{K^\circ_1} \right) = - \frac{\Delta_r H^\circ}{R} \left( \frac{1}{T_2} - \frac{1}{T_1} \right)$$

*Étape 2 : Application numérique rigoureuse.*
$$\ln\left( \frac{K^\circ_2}{0.14} \right) = - \frac{57.2 \times 10^3}{8.314} \left( \frac{1}{350} - \frac{1}{298} \right)$$
Calculons le terme entre parenthèses :
$$\frac{1}{350} - \frac{1}{298} = 2.857 \times 10^{-3} - 3.356 \times 10^{-3} = -4.99 \times 10^{-4} \text{ K}^{-1}$$
Calculons le préfacteur :
$$- \frac{57200}{8.314} \approx -6879.9 \text{ K}$$
Ainsi :
$$\ln\left( \frac{K^\circ_2}{0.14} \right) = -6879.9 \times (-4.99 \times 10^{-4}) \approx 3.433$$
*Étape 3 : Calcul final de $K^\circ_2$.*
$$\frac{K^\circ_2}{0.14} = \exp(3.433) \approx 30.98$$
$$K^\circ_2 = 0.14 \times 30.98 \approx 4.34$$
La constante d'équilibre augmente, ce qui est cohérent avec une réaction endothermique ($\Delta_r H^\circ > 0$) favorisée par une élévation de température (loi de moderation de Le Châtelier).

#### ⚠️ Les pièges majeurs relevés dans les rapports de jury
- Inverser les bornes de l'intégrale ($T_2$ et $T_1$), ce qui conduit à une erreur de signe aberrante sur le logarithme.
- Oublier de convertir les kilojoules en joules pour le terme énergétique $\Delta_r H^\circ$.

---

### 📌 Question / Problématique classique 3 : Couplage de réactions endergoniques et exergoniques en biochimie

#### 💡 Méthode de rédaction canonique
1. Identifier la réaction biologique non spontanée (endergonique, $\Delta_r G_1^\circ > 0$) que l'organisme souhaite réaliser.
2. Identifier la réaction de couplage exergonique disponible (généralement l'hydrolyse de l'adénosine triphosphate - ATP, $\Delta_r G_2^\circ < 0$).
3. Écrire la réaction globale bilan comme la somme des deux réactions :
   $$\text{Bilan} = \text{Réaction } 1 + \text{Réaction } 2$$
4. Appliquer la propriété additive des enthalpies libres standard de réaction :
   $$\Delta_r G_{\text{bilan}}^\circ = \Delta_r G_1^\circ + \Delta_r G_2^\circ$$
5. Conclure sur la faisabilité thermodynamique du couplage ($\Delta_r G_{\text{bilan}}^\circ < 0$).

#### 📋 Exercice type concours résolu pas à pas
**Énoncé :** En biochimie, la phosphorylation du glucose en glucose-6-phosphate (G6P) à partir de glucose et de phosphate inorganique ($P_i$) est une réaction endergonique :
$$\text{Glucose} + P_i \rightleftharpoons \text{G6P} + \text{H}_2\text{O} \quad (\Delta_r G_1^\circ = +13.8 \text{ kJ}\cdot\text{mol}^{-1})$$
L'hydrolyse de l'ATP est exergonique :
$$\text{ATP} + \text{H}_2\text{O} \rightleftharpoons \text{ADP} + P_i \quad (\Delta_r G_2^\circ = -30.5 \text{ kJ}\cdot\text{mol}^{-1})$$
Déterminer l'enthalpie libre standard de la réaction globale de phosphorylation du glucose couplée à l'hydrolyse de l'ATP, et conclure.

**Résolution rédigée :**
*Étape 1 : Écriture de la réaction globale de couplage.*
En sommant les deux équations chimiques, la molécule d'eau $\text{H}_2\text{O}$ et le phosphate inorganique $P_i$ s'annulent de part et d'autre :
$$\text{Glucose} + \text{ATP} \rightleftharpoons \text{G6P} + \text{ADP}$$

*Étape 2 : Calcul de l'enthalpie libre standard globale.*
Par application du premier principe et de la fonction d'état $G$, l'enthalpie libre standard de la réaction globale est la somme des enthalpies libres standard des deux réactions couplées :
$$\Delta_r G_{\text{bilan}}^\circ = \Delta_r G_1^\circ + \Delta_r G_2^\circ$$
$$\Delta_r G_{\text{bilan}}^\circ = 13.8 + (-30.5) = -16.7 \text{ kJ}\cdot\text{mol}^{-1}$$

*Étape 3 : Conclusion thermodynamique.*
Puisque $\Delta_r G_{\text{bilan}}^\circ < 0$, la réaction globale de phosphorylation du glucose couplée à l'hydrolyse de l'ATP est **thermodynamiquement favorisée** (exergonique), contrairement à la réaction isolée. Le couplage énergétique par un intermédiaire métabolique commun (ici l'ATP) permet ainsi de contourner le verrou cinétique ou thermodynamique cellulaire.

#### ⚠️ Les pièges majeurs relevés dans les rapports de jury
- Croire erronément que le couplage modifie les constantes d'équilibre de manière multiplicative simple sans additionner les $\Delta_r G^\circ$ (Rappel : $K^\circ_{\text{bilan}} = K^\circ_1 \times K^\circ_2$).
- Ne pas préciser les conditions standard biologiques (pH souvent fixé à $7$ pour les grandeurs notées avec un prime $\Delta_r G^{\prime\circ}$, bien que le raisonnement thermodynamique brut reste identique en concours).