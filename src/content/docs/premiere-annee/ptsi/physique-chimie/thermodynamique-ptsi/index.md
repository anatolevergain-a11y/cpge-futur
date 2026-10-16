---
title: "📌 1. Définitions & Cadre d'étude"
description: "Fiche de cours et d'exercice CPGE."
---

## 📌 1. Définitions & Cadre d'étude

En classe de PTSI, l'étude thermodynamique s'inscrit dans le cadre de la description macroscopique de la matière à l'équilibre ou au cours d'évolutions quasi-statiques.

### Système thermodynamique et variables d'état
Un **système** est une portion de l'univers délimitée par une surface réelle ou fictive. Il peut être :
- **Fermé** : pas d'échange de matière avec l'extérieur.
- **Ouvert** : échange de matière et d'énergie.
- **Isolé** : aucun échange ni de matière ni d'énergie.

L'état d'un système à l'équilibre thermodynamique est décrit par des **variables d'état** (température $T$, pression $P$, volume $V$, nombre de moles $n$). 
- Les grandeurs **extensives** (ex: $V$, $U$, $S$) sont proportionnelles à la quantité de matière.
- Les grandeurs **intensives** (ex: $P$, $T$) sont indépendantes de la quantité de matière.

### Modèle du gaz parfait
L'équation d'état du gaz parfait est :
$$P V = n R T$$
avec $R = 8{,}314\text{ J}\cdot\text{mol}^{-1}\cdot\text{K}^{-1}$.
Les énergies internes $U$ et enthalphie $H$ d'un gaz parfait ne dépendent que de la température :
$$\Delta U = \int_{T_1}^{T_2} C_v(T) \, dT \quad \text{et} \quad \Delta H = \int_{T_1}^{T_2} C_p(T) \, dT$$
Pour un gaz parfait monoatomique ou diatomique de capacités thermiques massiques ou molaires constantes, on utilise la relation de Mayer : $C_p - C_n = n R$ (ou $c_p - c_v = r$).
---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### Premier principe de la thermodynamique
Pour un système fermé au repos macroscopique, le premier principe postule l'existence d'une fonction d'état extensive, l'**énergie interne** $U$, telle que pour toute transformation :
$$\Delta U = W + Q$$
où $W$ est le travail des forces extérieures et $Q$ le transfert thermique.
- **Forme infinitésimale** : $dU = \delta W + \delta Q$ (attention, $dU$ est une différentielle exacte, mais $\delta W$ et $\delta Q$ sont des formes différentielles non exactes).

### Second principe de la thermodynamique
Il introduit l'existence d'une fonction d'état extensive, l'**entropie** $S$, non conservative. Pour une transformation entre deux états d'équilibre :
$$\Delta S = S_{\text{ech}} + S_{\text{cre}}$$
avec l'entropie créée vérifiant $S_{\text{cre}} \ge 0$ (principe d'évolution).
- $S_{\text{cre}} > 0$ pour une transformation irréversible.
- $S_{\text{cre}} = 0$ pour une transformation réversible (idéalisation).

### Second principe sous forme d'inégalité de Clausius
Pour tout cycle ou transformation :
$$\Delta S \ge \int \frac{\delta Q}{T_{\text{ext}}}$$
Et pour une transformation monotherme avec l'extérieur à la température $T_0$ :
$$S_{\text{cre}} = \Delta S - \frac{Q}{T_0} \ge 0$$

---

## 💡 3. Méthodes de calcul & Algorithmes

### Calcul du travail $W$
Le travail élémentaire des forces de pression s'exprime par :
$$\delta W = - P_{\text{ext}} dV$$
- **Transformation monobare** ($P_{\text{ext}} = P_0 = \text{cte}$) :
  $$W = - P_0 (V_2 - V_1)$$
- **Transformation réversible** ($P_{\text{ext}} = P_{\text{système}}$) :
  $$W = - \int_{V_1}^{V_2} P(V) \, dV$$
- **Transformation isochore** ($V = \text{cte}$) :
  $$W = 0$$

### Application aux machines thermiques cycliques
Une machine thermique échange de l'énergie avec $N$ sources de chaleur. Le cas le plus courant est le fonctionnement entre une source chaude (température $T_c$) et une source froide (température $T_f$).

1. **Bilan d'énergie (1er principe sur un cycle)** :
   $$\Delta U_{\text{cycle}} = 0 \implies W_{\text{cycle}} + Q_c + Q_f = 0$$
   où $Q_c$ est reçu de la source chaude et $Q_f$ de la source froide.

2. **Bilan d'entropie (2ème principe sur un cycle)** :
   $$\Delta S_{\text{cycle}} = 0 = \frac{Q_c}{T_c} + \frac{Q_f}{T_f} + S_{\text{cre}}$$
   avec $S_{\text{cre}} \ge 0$.

3. **Efficacités et performances** :
   - **Moteur thermique** (convertit de la chaleur en travail, $W_{\text{cycle}} < 0$) :
     $$\eta = \frac{-W_{\text{cycle}}}{Q_c} = 1 + \frac{Q_f}{Q_c} \le 1 - \frac{T_f}{T_c} = \eta_{\text{Carnot}}$$
   - **Réfrigérateur** (transfère de la chaleur du froid vers le chauds grâce au travail, $W_{\text{cycle}} > 0$) :
     $$\text{COP}_{\text{réfrigérateur}} = \frac{Q_f}{W_{\text{cycle}}} \le \frac{T_f}{T_c - T_f}$$
   - **Pompe à chaleur** :
     $$\text{COP}_{\text{PAC}} = \frac{-Q_c}{W_{\text{cycle}}} \le \frac{T_c}{T_c - T_f}$$

---

## ⚠️ 4. Pièges classiques aux Concours

1. **Confondre fonction d'état et transfert** :
   Dire $\Delta W$ ou $\tombstone$ est une erreur fatale. $W$ et $Q$ dépendent du chemin thermodynamique suivi, ce ne sont pas des différentielles exactes (on note $\delta W$ et $\delta Q$). Seuls $dU$, $dH$ et $dS$ s'intègrent simplement entre deux états.

2. **Oublier le signe de la pression extérieure ($P_{\text{ext}}$)** :
   Dans la formule $\delta W = -P_{\text{ext}}dV$, la pression extérieure n'est pas nécessairement la pression interne du gaz. En cas de détente brutale contre une pression atmosphérique constante $P_0$, on utilise $P_{\text{ext}} = P_0$, et non $P(V)$ du gaz.

3. **Mauvaise utilisation des unités de température** :
   Toutes les relations issues du second principe et les lois des gaz parfaits impliquent impérativement des températures en **Kelvin** ($T$ en $\text{K} = \theta \text{ en } ^\circ\text{C} + 273{,}15$). Utiliser des degrés Celsius dans les expressions de Carnot conduit à des résultats aberrants.

4. **Inverser les sources dans les coefficients de performance** :
   Soyez rigoureux sur les signes algébriques : $Q_c$ est la chaleur reçue de la source chaude, $Q_f$ celle de la source froide. Pour un moteur, $Q_c > 0$ et $Q_f < 0$.