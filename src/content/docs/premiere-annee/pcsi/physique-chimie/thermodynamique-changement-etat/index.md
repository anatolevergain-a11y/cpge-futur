---
title: 'Cours : Changements d état des corps purs'
description: 'Synthèse de cours, théorèmes fondamentaux et démonstrations.'
---

## 📌 1. Définitions & Cadre d'étude

Un corps pur est un système matériel constitué d'une seule espèce chimique. Un changement d'état (ou transition de phase du premier ordre) correspond à une modification discontinue des propriétés thermodynamiques macroscopiques du corps pur lors d'une variation de ses conditions extérieures (généralement température $T$ et pression $P$).

### Les états de la matière usuels
* **Solide ($s$)** : Organisation spatiale rigide, fortes interactions intermoléculaires.
* **Liquide ($l$)** : Condensé, désordonné mais interactions locales importantes.
* **Gaz ($g$)** : Dispersé, hautement compressible, interactions négligeables (modèle du gaz parfait).

### Grandeurs thermodynamiques molaires
Soit une variable extensive $X$ associée au système. On définit la grandeur molaire correspondante $X_m$ par :
$$X_m = \frac{X}{n}$$
où $n$ est la quantité de matière (en $\text{mol}$).

Pour un corps pur diphasé (coexistence de deux états $1$ et $2$), on introduit le **titre massique** (ou fraction massique) en vapeur $y$, ou le titre molaire $x_v$, défini par la quantité de matière de l'état $2$ (vapeur) sur la quantité totale :
$$x_v = \frac{n_2}{n_1 + n_2} \in [0, 1]$$

---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### Variance et Formule de Clapeyron

#### 1. Règle des phases de Gibbs
Pour un corps pur sous deux phases en équilibre, la variance $v$ du système vaut :
$$v = c - \phi + 2 = 1 - 2 + 2 = 1$$
Le système est univariant : fixer la température $P$ impose la pression d'équilibre $P_{\text{sat}}(T)$.

#### 2. Formule de Clapeyron (Démonstration)
Considérons l'équilibre diphasique d'un corps pur à l'équilibre à $(T, P)$. Les potentiels chimiques des deux phases (notées $1$ et $2$) sont égaux :
$$\mu_1(T, P) = \mu_2(T, P)$$

Si l'on fait varier la température de $\mathrm{d}T$ le long de la courbe d'équilibre, la pression varie de $\mathrm{d}P$ de sorte que l'égalité des potentiels chimiques soit maintenue :
$$\mathrm{d}\mu_1 = \mathrm{d}\mu_2$$

Or, pour une mole de corps pur, $\mathrm{d}\mu = -S_m \mathrm{d}T + V_m \mathrm{d}P$ (relation de Gibbs-Duhem). Par conséquent :
$$-S_{m,1}\mathrm{d}T + V_{m,1}\mathrm{d}P = -S_{m,2}\mathrm{d}T + V_{m,2}\mathrm{d}P$$

En regroupant les termes en $\mathrm{d}T$ et $\mathrm{d}P$ :
$$(V_{m,2} - V_{m,1})\mathrm{d}P = (S_{m,2} - S_{m,1})\mathrm{d}T$$

Soit l'enthalpie molaire de changement d'état $\Delta_{\text{chg}}H_m = T(S_{m,2} - S_{m,1})$ et la variation de volume molaire $\Delta_{\text{chg}}V_m = V_{m,2} - V_{m,1}$. On obtient la **formule de Clapeyron** :
$$\frac{\mathrm{d}P}{\mathrm{d}T} = \frac{\Delta_{\text{chg}}H_m}{T \Delta_{\text{chg}}V_m}$$

---

## 💡 3. Méthodes de calcul & Algorithmes

### Algorithme de résolution d'un bilan enthalpique avec changement d'état

Pour déterminer l'état final d'un système subissant une transformation monobare à pression $P_0$:

1. **Identifier les états initiaux et finaux** du corps pur ainsi que la température de transition $T_{\text{chg}}(P_0)$.
2. **Définir le chemin thermodynamique réversible fictif** :
   * Échauffement/refroidissement de la phase initiale jusqu'à $T_{\text{chg}}$.
   * Changement d'état isotherme et monobare à $T_{\text{chg}}$.
   * Échauffement/refroidissement de la phase finale jusqu'à la température finale $T_f$.
3. **Exprimer la variation d'enthalpie globale** $\Delta H$ en sommant les contributions :
   $$\Delta H = \int_{T_i}^{T_{\text{chg}}} n C_{p,\text{init}} \mathrm{d}T + n \Delta_{\text{chg}}H_m + \int_{T_{\text{chg}}}^{T_f} n C_{p,\text{fin}} \mathrm{d}T$$
4. **Appliquer le premier principe de la thermodynamique** selon la nature de la transformation (système isolé $\implies \Delta H = 0$ si pression constante, etc.).

---

## ⚠️ 4. Pièges classiques & Erreurs à éviter

* **Oubli du caractère discontinu des fonctions d'état molaires** : L'enthalpie $H$ et l'entropie $S$ sont continues lors d'un changement d'état, mais les capacités thermiques $C_p = T \left(\frac{\partial S}{\partial T}\right)_P$ presentent une discontinuité (voire une divergence au point critique).
* **Confusion entre corps pur et mélange** : La vaporisation d'un corps pur s'effectue à température *constante* sous pression fixée (palier de température). Pour un mélange binaire, la vaporisation s'effectue sur un intervalle de température (domaines liquide et vapeur séparés par les courbes d'ebullition et de rosée).
* **Mauvaise utilisation des unités dans la formule de Clapeyron** : Veiller à exprimer $\Delta_{\text{chg}}H_m$ en $\text{J}\cdot\text{mol}^{-1}$, $T$ en $\text{K}$, et $\Delta_{\text{chg}}V_m$ en $\text{m}^3\cdot\text{mol}^{-1}$ (attention au volume molaire du gaz souvent dominant devant celui du liquide : $\Delta_{\text{vap}}V_m \approx V_{m,g} = \frac{RT}{P}$ dans le modèle du gaz parfait).