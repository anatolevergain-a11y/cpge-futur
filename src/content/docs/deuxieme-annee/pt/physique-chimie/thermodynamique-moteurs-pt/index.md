---
title: 'Cours : Thermodynamique et moteurs thermiques'
description: 'Fiche de synthèse officielle et démonstrations du programme CPGE PT.'
---

## 📌 1. Définitions & Cadre d'étude

Le cadre d'étude de la thermodynamique macroscopique en classes préparatoires se fonde sur la description d'un système thermodynamique fermé ou ouvert, échangeant de l'énergie avec l'extérieur sous forme de travail $\delta W$ et de transfert thermique $\delta Q$.

### Systèmes et transformations
- **Système fermé :** Aucun échange de matière avec l'extérieur ($dN = 0$).
- **Transformation monotherme :** Le système échange de l'énergie avec une seule source de température extérieure $T_0$.
- **Transformation réversible :** Transformation quasi-statique et sans phénonmènes dissipatifs internes (viscosité, frottements, effets Joule). L'entropie créée $\delta S_{\text{créée}}$ est nulle.

### Premier et Second Principes
- **Premier principe (Principe de conservation de l'énergie) :** Pour une transformation fermée finie entre un état initial $A$ et un état final $B$, la variation d'énergie totale $U$ (en négligeant les énergies macroscopiques cinétique et potentielle) s'écrit :
$$\Delta U = W + Q$$
- **Second principe (Principe d'évolution) :** Pour toute transformation, l'entropie $S$ du système vérifie :
$$\Delta S = S_{\text{éch}} + S_{\text{créée}} \quad \text{avec} \quad S_{\text{créée}} \ge 0$$
où $S_{\text{éch}} = \int \frac{\delta Q}{T_{\text{ext}}}$.

---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### Inégalité de Clausius
Pour tout cycle thermodynamique monotherme au contact d'une source à la température $T_0$, l'inégalité de Clausius s'établit à partir du second principe.

*Démonstration :*
Considérons un système effectuant un cycle fermé ($\Delta S_{\text{cycle}} = 0$). D'après le second principe :
$$\Delta S_{\text{cycle}} = S_{\text{éch, cycle}} + S_{\text{créée}} = 0$$
Soit :
$$\oint \frac{\delta Q}{T_{\text{ext}}} + S_{\text{créée}} = 0$$
Puisque le système est au contact d'une source unique à la température $T_0$, $T_{\text{ext}} = T_0$ (constante) :
$$\frac{1}{T_0} \oint \delta Q + S_{\text{créée}} = 0 \implies \oint \delta Q = -T_0 S_{\text{créée}}$$
Comme $S_{\text{créée}} \ge 0$, il vient immédiatement :
$$\oint \frac{\delta Q}{T_0} \le 0$$
Dans le cas particulier d'un cycle réversible, $S_{\text{créée}} = 0$, d'où $\oint \frac{\delta Q_{\text{rev}}}{T} = 0$.

### Efficacité et rendement des moteurs thermiques et machines thermiques
Un moteur thermique monokinetique ou fonctionnant entre deux sources (sources chaude $T_2$ et froide $T_1$, avec $T_2 > T_1$) reçoit de l'énergie thermique $Q_2 > 0$ de la source chaude, cède $Q_1 < 0$ à la source froide et fournit un travail $W < 0$ au milieu extérieur.

Le premier principe appliqué sur un cycle donne :
$$\Delta U_{\text{cycle}} = 0 = W + Q_1 + Q_2 \implies -W = Q_1 + Q_2$$

Le **rendement** $\eta$ du moteur est défini par le rapport de l'énergie utile sur l'énergie dépensée :
$$\eta = \frac{-W}{Q_2} = \frac{Q_1 + Q_2}{Q_2} = 1 + \frac{Q_1}{Q_2}$$

*Démonstration du théorème de Carnot :*
Appliquons le second principe sur le cycle en faisant intervenir les transferts thermiques avec les deux thermostats $T_1$ et $T_2$ :
$$S_{\text{créée}} = \Delta S_{\text{cycle}} - \left( \frac{Q_1}{T_1} + \frac{Q_2}{T_2} \right) = -\left( \frac{Q_1}{T_1} + \frac{Q_2}{T_2} \right) \ge 0$$
Puisque $Q_2 > 0$, divisons par $Q_2$ :
$$\frac{Q_1}{Q_2 T_1} + \frac{1}{T_2} \le 0 \implies \frac{Q_1}{Q_2} \le -\frac{T_1}{T_2}$$
En injectant cette relation dans l'expression du rendement :
$$\eta = 1 + \frac{Q_1}{Q_2} \le 1 - \frac{T_1}{T_2}$$
On définit ainsi le **rendement de Carnot** maximal :
$$\eta_{\text{Carnot}} = 1 - \frac{T_1}{T_2}$$

---

## 💡 3. Méthodes de calcul & Algorithmes

Pour traiter un problème de thermodynamique appliquée aux moteurs (cycles de Beau de Rochas, Diesel, Hirn, etc.) :

1. **Bilan des états :** Identifier tous les états caractéristiques du cycle ($A, B, C, \dots$) dans le diagramme de Clapeyron ($P, V$).
2. **Modélisation des transformations :** 
   - Isotherme ($T = \text{cte}$)
   - Isobare ($P = \text{cte}$)
   - Isochore ($V = \text{cte}$)
   - Adiabatique réversible (Isentropique, $P V^\gamma = \text{cte}$)
3. **Calcul des transferts énergétiques par étape :**
   - Pour un gaz parfait de capacité thermique $C_v$ constante : $\Delta U = C_v \Delta T$ et $\Delta H = C_p \Delta T$.
   - Utiliser $W = -\int P dV$ pour le travail échangé lors des transformations quasi-statiques.
4. **Calcul global :** Sommer les travaux et transferts thermiques sur l'ensemble du cycle pour en déduire le travail net et le rendement global.

---

## ⚠️ 4. Pièges classiques aux Concours

- **Confusion de signe sur les grandeurs échangées :** Toujours orienter les flux énergétiques du point de vue du système (reçu > 0, cédé < 0). Un moteur fournit un travail *négatif* à l'extérieur ($W < 0$), d'où l'utilisation de $-W$ pour exprimer l'énergie mécanique produite.
- **Utilisation abusive de la formule de Laplace :** La relation $P V^\gamma = \text{cte}$ n'est valable **que** pour un gaz parfait subissant une transformation adiabatique *réversible* (isentropique). Elle est fausse si la transformation est irréversible, même adiabatique.
- **Températures en Celsius :** Dans toutes les expressions faisant intervenir des quotients de températures (notamment le rendement de Carnot $\eta = 1 - T_1 / T_2$), $T_1$ et $T_2$ doivent impérativement être exprimées en **Kelvin** ($\text{K}$).
- **Oubli du nombre de cycles par seconde :** Attention à bien distinguer l'énergie par cycle (en Joules) de la puissance moyenne (en Watts), cette dernière dépendant de la fréquence de rotation du moteur.