---
title: 'Cours : Thermodynamique'
description: 'Synthèse de cours, théorèmes et démonstrations.'
---

# Fiche de Cours : Thermodynamique (MPSI)

## Introduction et Outils Préliminaires

La thermodynamique macroscopique étudie les systèmes énergétiques à l'échelle de la matière condensée ou gazeuse, indépendamment de leur structure microscopique, par l'intermédiaire de variables d'état mesurables macroscopiquement.

### Définitions Fondamentales
*   **Système thermodynamique :** Partie de l'univers que l'on isole pour l'étude. Il peut être fermé (échange d'énergie mais pas de matière), ouvert (échange d'énergie et de matière) ou isolé (aucun échange).
*   **Variables d'état :** Grandeurs macroscopiques caractérisant le système à l'équilibre ($P, V, T, n$).
*   **Variables intensives :** Indépendantes de la taille du système (ex: pression $P$, température $T$).
*   **Variables extensives :** Proportionnelles à la quantité de matière ou au volume (ex: volume $V$, masse $m$, nombre de moles $n$, capacité thermique $C$). *Le rapport de deux variables extensives est une variable intensive (ex: volume massique ou molaire).*
*   **Équateur d'état :** Relation unissant les variables d'état à l'équilibre. Pour un gaz parfait : 
    $$PV = nRT$$
    où $R \approx 8{,}314\text{ J}\cdot\text{K}^{-1}\cdot\text{mol}^{-1}$.

---

## 1. Le Premier Principe de la Thermodynamique

### Théorème (Premier Principe - Énergie Totale et Interne)
Au cours d'une transformation thermodynamique d'un système fermé, l'énergie totale $E$ du système varie selon les transferts énergétiques avec l'extérieur. L'énergie totale se décompose en énergie cinétique macroscopique $E_c$, énergie potentielle macroscopique $E_p$ et énergie interne $U$ (microscopique) :
$$\Delta E = \Delta E_c + \Delta E_p + \Delta U = W + Q$$
*   $W$ : Travail des forces extérieures (mécanique, électrique, etc.).
*   $Q$ : Transfert thermique (chaleur).

Pour un système au repos macroscopique ($\Delta E_c = 0$, $\Delta E_p = 0$) :
$$\Delta U = W + Q$$

Sous forme infinitésimale :
$$dU = \delta W + \delta Q$$
*Note mathématique fondamentale :* $dU$ est une **différentielle exacte** (sa variation ne dépend que des états initial et final), tandis que $\delta W$ et $\delta Q$ dépendent du chemin thermodynamique suivi (ce ne sont pas des différentielles exactes).

### Définitions : Capacités Thermiques
*   **Capacité thermique à volume constant ($C_v$) :** Pour un système fermé, indilatable, sans changement d'état :
    $$dU = C_v dT \quad (\text{si } V = \text{cte})$$
*   **Capacité thermique à pression constante ($C_p$) :** 
    $$dH = C_p dT \quad (\text{si } P = \text{cte})$$
    où $H = U + PV$ est l'**enthalpie**.

### Premier principe pour les gaz parfaits (Lois de Joule)
1. **Première loi de Joule :** L'énergie interne d'un gaz parfait ne dépend que de sa température :
   $$dU = C_v dT$$
2. **Deuxième loi de Joule :** L'enthalpie d'un gaz parfait ne dépend que de sa température :
   $$dH = C_p dT$$
   On a de plus la relation de Mayer : $C_p - C_v = nR$ (pour une mole : $C_{p,m} - C_{v,m} = R$). On définit $\gamma = \frac{C_p}{C_v} > 1$.

---

## 2. Le Second Principe de la Thermodynamique

### Définition (Entropie)
Il existe une fonction d'état extensive, l'**entropie** $S$ (exprimée en $\text{J}\cdot\text{K}^{-1}$), telle que pour toute transformation :
$$S_{\text{créée}} = \Delta S - \int \frac{\delta Q}{T_{\ext}}$$
où $S_{\text{créée}}$ est l'entropie créée par les irréversibilités du système.

### Théorème (Second Principe / Inégalité de Clausius)
Le second principe postule que l'entropie créée au cours d'une transformation réelle est nécessairement positive ou nulle :
$$S_{\text{créée}} \ge 0$$
*   Transformation **réversible** (idéale) : $S_{\text{créée}} = 0$ $\implies dS = \frac{\delta Q}{T}$.
*   Transformation **irrévisible** (réelle) : $S_{\text{créée}} > 0$ $\implies dS > \frac{\delta Q}{T}$.

Pour un système **isolé** ($Q = 0$ et $W = 0$), $dS = dS_{\text{créée}} \ge 0$ : l'entropie d'un système isolé ne peut qu'augmenter (principe d'évolution).

---

## 3. Transformations Particulières des Gaz Parfaits

Pour une transformation quasi-statique d'un gaz parfait :
*   **Monotherme :** $T_{\text{ext}} = \text{cste}$.
*   **Isotherme :** $T = \text{cste} \implies \Delta U = 0$ (si gaz parfait) $\implies Q = -W$.
*   **Isobare :** $P = \text{cste} \implies \delta Q = n C_p dT$.
*   **Isochore :** $V = \text{cste} \implies \delta Q = n C_v dT \implies W = 0$.
*   **Adiabatique (et réversible) :** $\delta Q = 0 \implies PV^\gamma = \text{cste}$ (Loi de Laplace). On a aussi $TV^{\gamma-1} = \text{cste}$ et $P^{1-\gamma}T^\gamma = \text{cste}$.

---

## 4. Méthodes

### Méthode : Calculer le travail $W$
1. Écrire l'expression élémentaire : $\delta W = -P_{\text{ext}} dV$.
2. Si la transformation est quasi-statique, $P_{\text{ext}} = P_{\text{système}}$.
3. Utiliser l'équation d'état pour exprimer $P$ en fonction de $V$ et intégrer :
   $$W = -\int_{V_i}^{V_f} P(V) dV$$

### Méthode : Appliquer les principes à un cycle
Pour un cycle thermodynamique (l'état initial est égal à l'état final) :
*   $\Delta U_{\text{cycle}} = 0 \implies Q_{\text{cycle}} + W_{\text{cycle}} = 0$.
*   $\Delta S_{\text{cycle}} = 0 \implies S_{\text{créée}} = \int_{\text{cycle}} \frac{\delta Q}{T} > 0$.

---

## 5. Pièges à Éviter (Alerte MPSI)

1. **Confusion entre $P$ et $P_{\text{ext}}$ :** Dans l'intégrale du travail $\int -P_{\text{ext}}dV$, c'est toujours la pression *extérieure* qui intervient. Elle n'est égale à la pression du gaz que si la transformation est quasi-statique (mécaniquement réversible).
2. **Utilisation abusive de Laplace :** La loi de Laplace ($PV^\gamma = \text{cste}$) n'est **valable** que pour un gaz parfait subissant une transformation **adiabatique *et* réversible** (donc isentropique : $S_{\text{créée}} = 0$). Ne l'utilisez jamais pour une détente libre, par exemple !
3. **Oubli de convertir en Kelvin :** Toutes les températures en thermodynamique doivent impérativement être exprimées en Kelvin ($\text{K}$).
4. **Nature des fonctions :** Ne confondez pas $U$ et $H$ (fonctions d'état, différentielles exactes $dU, dH$) avec $W$ et $Q$ (quantités échangées dépendant du chemin, notées $\delta W, \delta Q$).