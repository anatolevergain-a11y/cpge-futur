---
title: 'Cours : Équilibres en solution aqueuse'
description: 'Fiche de synthèse officielle et démonstrations du programme CPGE MPSI.'
---

## 📌 1. Définitions & Cadre d'étude

Le cadre d'étude est celui de la chimie en solution aqueuse diluée. L'eau est à la fois le solvant majoritaire et un réactif ampholyte.

*   **Activité d'une espèce dissoute en solution diluée :** Pour un soluté $X$ en solution aqueuse infiniment diluée, l'activité $a(X)$ est définie par le quotient de sa concentration molaire effective $C(X)$ par la concentration standard $C^\circ = 1\text{ mol}\cdot\text{L}^{-1}$ :
    $$a(X) = \frac{C(X)}{C^\circ}$$
    Par convention, pour les solides et les solvants purs (l'eau), $a = 1$. Pour les gaz dissous, $a(X) = \frac{P(X)}{P^\circ}$ où $P^\circ = 1\text{ bar}$.
*   **Constante d'équilibre thermodynamique :** Pour une réaction chimique modélisée par l'équation stœchiométrique :
    $$\sum_{\text{i}} \nu_{i,\text{réactifs}} \text{Réactif}_i \rightleftharpoons \sum_{\text{j}} \nu_{j,\text{produits}} \text{Produit}_j$$
    Le quotient de réaction $Q_r$ s'exprime par :
    $$Q_r = \prod_{i} a(\text{Espèce}_i)^{\nu_i}$$
    À l'équilibre thermodynamique, $Q_r = K^\circ(T)$, où $K^\circ(T)$ est la constante thermodynamique d'équilibre, fonction exclusive de la température $T$.
*   **Auto-protolyse de l'eau :** À toute température, l'eau subit la réaction d'auto-protolyse :
    $$2\text{H}_2\text{O}_{(l)} \rightleftharpoons\text{H}_3\text{O}^+_{(aq)} + \text{OH}^-_{(aq)}$$
    La constante associée est le produit ionique de l'eau, noté $K_e(T)$ :
    $$K_e(T) = a(\text{H}_3\text{O}^+) \cdot a(\text{OH}^-)$$
    À $25^\circ\text{C}$ ($298,15\text{ K}$), $\text{p}K_e = -\log_{10}(K_e) = 14,0$.

---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### Théorème de Guldberg et Waage (Loi d'action de masse)
À l'équilibre chimique, le quotient de réaction $Q_r$ est égal à la constante d'équilibre $K^\circ(T)$ indépendamment des conditions initiales de composition du système.

### Démonstration : Lien entre enthalpie libre standard de réaction et constante d'équilibre
*   **Hypothèse :** Système chimique siège d'une réaction unique à température $T$ et pression $P$ constantes.
*   **Démonstration :**
    La variation élémentaire d'enthalpie libre du système s'exprime en fonction de l'avancement de réaction $\xi$ :
    $$\mathrm{d}G = \Delta_r G \cdot \mathrm{d}\xi$$
    où $\Delta_r G$ est l'enthalpie libre de réaction, reliée au potentiel chimique $\mu_i$ des espèces par :
    $$\Delta_r G = \sum_{\text{i}} \nu_i \mu_i$$
    En exprimant le potentiel chimique sous sa forme chimique standard $\mu_i^\circ$ et l'activité $a_i$ :
    $$\mu_i = \mu_i^\circ + R T \ln(a_i)$$
    Il vient :
    $$\Delta_r G = \sum_{\text{i}} \nu_i \left( \mu_i^\circ + R T \ln(a_i) \right) = \sum_{\text{i}} \nu_i \mu_i^\circ + R T \ln\left( \prod_{i} a_i^{\nu_i} \right)$$
    En introduisant l'enthalpie libre standard de réaction $\Delta_r G^\circ = \sum_{\text{i}} \nu_i \mu_i^\circ$ :
    $$\Delta_r G = \itude = \Delta_r G^\circ + R T \ln(Q_r)$$
    À l'équilibre thermodynamique, le système atteint un minimum d'enthalpie libre, soit $\Delta_r G = 0$. Par conséquent :
    $$\Delta_r G^\circ = - R T \ln(K^\circ)$$
    Soit la relation fondamentale :
    $$K^\circ(T) = \exp\left( -\frac{\Delta_r G^\circ}{R T} \right)$$
    Ce qui achève la démonstration. $\blacksquare$

---

## 💡 3. Méthodes de calcul & Algorithmes

Pour résoudre un système acido-basique ou de précipitation en solution aqueuse, la méthode systématique (dite "de conservation") s'articule selon l'algorithme rigoureux suivant :

1.  **Inventaire des espèces chimiques en solution :** Lister toutes les espèces introduites et celles formées, sans oublier $\text{H}_3\text{O}^+$, $\text{OH}^-$ et le solvant $\text{H}_2\text{O}$.
2.  **Recensement des équilibres chimiques :** Écrire les équations des réactions prépondérantes (acido-basiques, complexation, précipitation, oxydoréduction) et identifier leurs constantes d'équilibre $K^\circ$.
3.  **Équations de conservation de la matière :** Pour chaque élément chimique (autre que $\text{H}$ et $\text{O}$ provenant de l'eau), écrire la relation liant les concentrations analytiques.
4.  **Équation de l'électroneutralité de la solution (ENS) :** La solution macroscopiquement neutre vérifie :
    $$\sum_{\text{i}} z_i \cdot C(\text{Espèce}_i) = 0$$
    où $z_i$ est la charge algébrique de l'ion $i$.
5.  **Mise en place de l'approximation de la Réaction Prépondérante (RP) :**
    *   Identifier la réaction thermodynamiquement la plus favorisée (constante la plus élevée, par exemple réaction entre l'acide le plus fort et la base la plus forte).
    *   Vérifier si cette réaction est totale ($K^\circ > 10^4$) ou limitée ($10^{-4} \le K^\circ \le 10^4$).
    *   Résoudre le bilan de matière de la RP, puis valider les hypothèses simplificatrices a posteriori (vérification des domaines de prédominance ou d'unicité des espèces).

---

## ⚠️ 4. Pièges classiques aux Concours

*   **Oubli de la dilution lors du mélange de solutions :** Ne jamais additionner directement les concentrations des espèces lors d'un mélange. Il est impératif d'utiliser les *quantités de matière* $n$ et de diviser par le *volume total* $V_{\text{total}} = V_1 + V_2$.
*   **Confusion entre concentration effective et concentration molaire initiale (apportée) :** Un acide faible $AH$ introduit à la concentration $C_0$ vérifie $C(AH) + C(A^-) = C_0$, mais $C(AH) \neq C_0$ en raison de la dissociation partielle.
*   **Utilisation abusive des approximations de pH :**
    *   Pour un acide faible de concentration $C_0$ et de p$K_a$, l'approximation classique $\text{pH} = \frac{1}{2}(\text{p}K_a - \log_{10}(C_0))$ n'est valide que si l'acide est faiblement dissocié ($\alpha \ll 1$) *et* si l'on peut négliger l'auto-protolyse de l'eau ($\text{pH} < 6,5$).
    *   Toujours vérifier a posteriori que les ions $\text{H}_3\text{O}^+$ (ou $\text{OH}^-$) fournis par l'auto-protolyse de l'eau sont négligeables devant ceux fournis par l'acide ou la base.
*   **Dimensions et grandeurs sans dimension :** Une constante d'équilibre $K^\circ$ ou un quotient de réaction $Q_r$ sont *toujours* des grandeurs sans dimension. Ne jamais faire figurer d'unités pour $K^\circ$.