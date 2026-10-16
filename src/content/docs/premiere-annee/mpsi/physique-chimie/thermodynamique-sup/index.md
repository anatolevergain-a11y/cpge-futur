---
title: 'Cours : Thermodynamique macroscopique'
description: 'Synthèse de cours, théorèmes et démonstrations fondamentales.'
---

## 📌 1. Définitions & Cadre d'étude

### A. Le système thermodynamique et son environnement
La thermodynamique macroscopique étudie les systèmes de la matière à l'échelle macroscopique, sans faire référence à leur structure microscopique discrète.
* **Système :** Partie de l'univers que l'on isole pour l'étude, délimitée par une frontière (réelle ou fictive).
* **Classification des systèmes selon les échanges :**
  * *Isolé :* n'échange ni masse ni énergie avec l'extérieur.
  * *Fermé :* n'échange pas de masse, mais peut échanger de l'énergie (travail $W$ et/ou transfert thermique $Q$).
  * *Ouvert :* échange de la masse et de l'énergie avec l'extérieur.

### B. Variables d'état et équation d'état
L'état d'équilibre thermodynamique d'un système simple (fluide homogène) est caractérisé par un ensemble de variables macroscopiques mesurables.
* **Variables intensives :** Indépendantes de la taille du système (ex. : température $T$, pression $P$, masse volumique $\mu$).
* **Variables extensives :** Proportionnelles à la quantité de matière ou au volume (ex. : volume $V$, masse $m$, quantité de matière $n$, énergie interne $U$). *Le rapport de deux variables extensives est une variable intensive.*

Une **équation d'état** relie les variables d'état intensives et extensives d'un système à l'équilibre. 
* *Exemple du gaz parfait :* 
  $$P V = n R T$$
  où $R \approx 8{,}314\text{ J}\cdot\text{mol}^{-1}\cdot\text{K}^{-1}$ est la constante universelle des gaz parfaits.

### C. Transformations thermodynamiques
Une transformation fait passer un système d'un état d'équilibre initial à un état d'équilibre final.
* **Quasistatique :** Succession continue d'états d'équilibre infiniment proches.
* **Réversible :** Quasistatique et sans aucun effet dissipatif (frottements, viscosité, résistance électrique, etc.). Dans le cas contraire, la transformation est **irréversible**.

---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### A. Premier Principe de la Thermodynamique (Énergie)
Pour un système fermé au repos macroscopique, le premier principe postule l'existence d'une fonction d'état extensive appelée **énergie interne** $U$. Au cours d'une transformation quelconque entre un état initial et un état final :
$$\Delta U = W + Q$$
* $W$ : Travail des forces extérieures reçu par le système au cours de la transformation.
* $Q$ : Transfert thermique (chaleur) reçu par le système.

**Forme infinitésimale :**
$$d U = \delta W + \delta Q$$
*(Note : $dU$ est une différentielle totale exacte, notée avec un $d$, car $U$ est une fonction d'état. En revanche, $\delta W$ et $\delta Q$ dépendent du chemin parcouru, ce sont des formes différentielles non exactes, notées avec un $\delta$).*

Pour un fluide échangeant uniquement des forces de pression extérieures de valeur $P_{\text{ext}}$ :
$$\delta W = - P_{\text{ext}} dV$$
Si la transformation est quasi-statique, $P_{\text{ext}} = P$ (pression interne du système).

### B. Second Principe de la Thermodynamique (Entropie)
Il postule l'existence d'une fonction d'état extensive, l'**entropie** $S$. 
Pour toute transformation subie par un système fermé :
$$\Delta S = S_e + S_c$$
* $S_e = \int \frac{\delta Q}{T_{\text{ext}}}$ : Entropie échangée avec l'extérieur.
* $S_c$ : Entropie créée à l'intérieur du système en raison des irréversibilités.

**Inégalité de Clausius :**
* $S_c \ge 0$ (Principe d'évolution).
* $S_c = 0$ si et seulement si la transformation est **réversible**.

### C. Application aux gaz parfaits : Lois de Joule
* **Première loi de Joule :** Pour un gaz parfait, l'énergie interne $U$ ne dépend que de la température $T$.
  $$dU = n C_v dT$$
  où $C_v$ est la capacité thermique molaire à volume constant.
* **Deuxième loi de Joule :** Pour un gaz parfait, l'enthalpie $H = U + PV$ ne dépend que de la température $T$.
  $$dH = n C_p dT$$
  où $C_p$ est la capacité thermique molaire à pression constante.
  *Relation de Mayer :* $C_p - C_v = R$ (pour une mole de gaz parfait).

---

## 💡 3. Méthodes classiques de résolution

### A. Calcul du travail $W$ et du transfert thermique $Q$
1. **Identifier le système** et le type de transformation (isotherme, isobare, isochore, adiabatique).
2. **Pour le travail :** Utiliser l'expression générale $W = -\int_{V_i}^{V_f} P_{\text{ext}} dV$. Si la transformation est quasi-statique, $P_{\text{ext}} = P_{\text{gaz}}(V, T)$.
   * *Transformation isobare ($P = \text{cte}$) :* $W = -P(V_f - V_i)$
   * *Transformation isochore ($V = \text{cte}$) :* $W = 0$
   * *Transformation isotherme ($T = \text{cte}$, gaz parfait) :* $W = -nRT \ln\left(\frac{V_f}{V_i}\right)$
3. **Pour le transfert thermique $Q$ :** 
   * Si la transformation est **adiabatique** ($\delta Q = 0$), alors $Q = 0$. (Pour un gaz parfait subissant une transformation adiabatique réversible, on utilise la loi de Laplace : $P V^\gamma = \text{cte}$, avec $\gamma = \frac{C_p}{C_v}$).
   * Sinon, on utilise le **Premier Principe** ($\Delta U = W + Q$) en ayant préalablement calculé $\Delta U$ via la première loi de Joule ($\Delta U = n C_v (T_f - T_i)$).

### B. Bilan d'entropie et étude de l'irréversibilité
Pour calculer l'entropie créée $S_c$ lors d'une transformation irréversible :
1. Calculer la variation d'entropie réelle $\Delta S = S_f - S_i$ entre l'état initial et l'état final. Puisque $S$ est une fonction d'état, **cette variation ne dépend pas du chemin**. On peut donc imaginer une transformation *réversible fictive* reliant le même état initial au même état final pour calculer $\Delta S = \int_i^f \frac{\delta Q_{\text{rev}}}{T}$.
2. Calculer l'entropie échangée $S_e = \int \frac{\delta Q_{\text{réelle}}}{T_{\text{ext}}}$ le long du chemin réel.
3. En déduire l'entropie créée par différence : 
   $$S_c = \Delta S - S_e \ge 0$$

---

## ⚠️ 4. Pièges classiques aux Concours

1. **Confusion entre $P$ et $P_{\text{ext}}$ :** Dans l'expression $\delta W = -P_{\text{ext}} dV$, c'est toujours la pression extérieure qui s'applique. $P_{\text{ext}}$ n'est égale à la pression interne $P$ du système que si la transformation est quasi-statique.
2. **Utilisation abusive de la loi de Laplace :** La relation $P V^\gamma = \text{cte}$ n'est valable **que** pour un gaz parfait subissant une transformation à la fois **adiabatique** ($Q=0$) **et réversible** ($S_c=0$). Elle est fausse pour une détente adiabatique irréversible (dans le vide par exemple).
3. **Fonctions d'état vs transferts :** $U$ et $S$ sont des fonctions d'état (leurs variations $\Delta U$ et $\Delta S$ ne dépendent que des états initial et final). $W$ et $Q$ ne sont **pas** des fonctions d'état ; leurs valeurs dépendent entièrement du chemin thermodynamique suivi. Ne pas écrire $\int dW = W_f - W_i$ (notation interdite).
4. **Oubli de l'extensivité :** Veiller à bien homogénéiser les grandeurs (massiques ou molaires) lors de l'application des bilans énergétiques. Utiliser les notations minuscules ($u, h, s$) pour les grandeurs massiques et majuscules ($U, H, S$) pour les grandeurs globales.