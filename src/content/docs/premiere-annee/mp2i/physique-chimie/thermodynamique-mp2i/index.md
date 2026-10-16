---
title: 'Cours : Thermodynamique physique'
description: 'Fiche de synthèse officielle et démonstrations du programme CPGE MP2I.'
---

## 📌 1. Définitions & Cadre d'étude

La thermodynamique macroscopique étudie les systemes macropiques echangeant de l'energie avec leur environnement sous forme de travail et de chaleur.

### Système thermodynamique et variables d'état
Un systeme est delimite par une surface (reelle ou fictive). 
- **Systeme ferme** : Aucun echange de matiere avec l'exterieur.
- **Systeme ouvert** : Echange de matiere et d'energie.
- **Variables d'etat intensives** : independantes de la taille du systeme (ex: pression $P$, temperature $T$).
- **Variables d'etat extensives** : proportionnelles a la quantite de matiere (ex: volume $V$, nombre de moles $n$).

### Equation d'état du gaz parfait
Un gaz parfait obeit a l'equation d'etat :
$$PV = nRT$$
ou $R = 8.314 \text{ J}\cdot\text{K}^{-1}\cdot\text{mol}^{-1}$ est la constante des gaz parfaits. 
L'energie interne $U$ d'un gaz parfait ne depend que de sa temperature (premiere loi de Joule) :
$$dU = C_v dT$$
avec $C_v$ la capacite thermique a volume constant.

---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### Premier Principe de la Thermodynamique
Pour toute transformation d'un systeme ferme, l'energie totale $E = U + E_c + E_p$ se conserve. Entre un etat initial et un etat final, le premier principe s'ecrit :
$$\Delta U + \Delta E_c + \Delta E_p = W + Q$$
ou $W$ est le travail des forces exterieures et $Q$ la quantite de chaleur transferee.

En systeme thermodynamique au repos macropique ($\Delta E_c = 0$, $\Delta E_p = 0$) :
$$\Delta U = W + Q$$
Sous forme infinitesimale :
$$dU = \delta W + \delta Q$$
*(Note : $dU$ est une d(ifferentielle exacte, contrairement a $\delta W$ et $\delta Q$ qui dependent du chemin de transformation).*

### Deuxième Principe de la Thermodynamique
Il introduit une fonction d'etat extensive, l'entropie $S$. Pour toute transformation :
$$\Delta S = S_e + S_c$$
avec $S_e = \int \frac{\delta Q}{T_{\text{ext}}}$ l'entropie echangee et $S_c$ l'entropie creee a l'interieur du systeme. Le second principe postule que :
$$S_c \ge 0$$
- Transformation reversible : $S_c = 0$.
- Transformation irreversible : $S_c > 0$.

### Démonstration : Relation de Mayer
Objectif: Relier les capacites thermiques $C_p$ et $C_v$ pour un gaz parfait.*

Par definition, pour une mole de gaz parfait :
$$dH = dU + d(PV) = dU + d(RT) = C_v dT + R dT = (C_v + R) dT$$
Or, par definition de la capacite thermique a pression constante $C_p$ :
$$dH = C_p dT$$
Par identification, on obtient la relation de Mayer :
$$C_p - C_v = R$$

---

## 💡 3. Méthodes de calcul & Algorithmes

### Calcul du travail et de la chaleur le long d'une transformation
1. **Transformation isochore ($V = \text{cte}$)** :
   - $W = -\int P_{\text{ext}} dV = 0$ (si le volume est fixe).
   - $Q = \Delta U = \int C_v dT$.

2. **Transformation isobare ($P = P_{\text{ext}} = \text{cte}$)** :
   - $W = -P_{\text{ext}}(V_f - V_i)$.
   - $Q = \Delta H = \int C_p dT$.

3. **Transformation isotherme ($T = \text{cte}$) pour un gaz parfait** :
   - $\Delta U = 0 \implies Q = -W$.
   - $W = -\int_{V_i}^{V_f} \frac{nRT}{V} dV = -nRT \ln\left(\frac{V_f}{V_i}\right)$.

4. **Transformation adiabatique reversible (isentropique, $S_c = 0$) pour un gaz parfait ($\gamma = C_p/C_v$)** :
   - $\delta Q = 0 \implies dU = \delta W$.
   - Loi de Laplace : $PV^\gamma = \text{cte}$, $T P^{(1-\gamma)/\gamma} = \text{cte}$, $T V^{\gamma-1} = \text{cte}$.

---

## ⚠️ 4. Pièges classiques aux Concours

1. **Confusion entre fonctions d'état et transferts** : $U$, $H$, $S$ et $P, V, T$ sont des fonctions d'etat (leur variation ne depend que des etats initial et final). $W$ et $Q$ dependent du chemin suivi (ce ne sont pas des differentielles exactes, on note $\delta W$ et $\delta Q$).
2. **Utilisation abusive de la loi de Laplace** : La relation $PV^\gamma = \text{cte}$ n'est valable **que** pour un gaz parfait subissant une transformation **adiabatique et reversible** (isentropique). Elle est fausse pour une transformation irreversible meme adiabatique.
3. **Oubli du signe de la pression extérieure** : Le travail recu par le systeme est $\delta W = -P_{\text{ext}} dV$. Si le gaz se detend ($dV > 0$), le travail recu est negatif (le systeme fournit du travail a l'exterieur).
4. **Homogénéité des unités** : Veiller a exprimer $T$ en Kelvin ($\text{K}$), $P$ en Pascal ($\text{Pa}$ ou $\text{N}\cdot\text{m}^{-2}$), $V$ en $\text{m}^3$ et $R = 8.314 \text{ J}\cdot\text{K}^{-1}\cdot\text{mol}^{-1}$.