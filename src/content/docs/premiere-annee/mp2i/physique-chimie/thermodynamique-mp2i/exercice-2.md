---
title: 'Exercice 2 : Machines thermiques dithermes'
description: 'Problème d entraînement type concours pour MP2I.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Les machines thermiques dithermes constituent un pilier fondamental de la thermodynamique appliquée et de la conversion d'énergie. Ce problème s'intéresse à l'étude thermodynamique d'un système fermé évoluant selon un cycle de Carnot, puis à la modélisation d'une installation réelle de type pompe à chaleur (PAC) fonctionnant avec des sources de température de capacités thermiques finies.

On considère un fluide thermodynamique subissant des cycles de transformations quasi-statiques entre deux sources de chaleur : une source chaude de température thermodynamique constante $T_c$ et une source froide de température thermodynamique constante $T_f$ (avec $T_c > T_f$). Par la suite, on notera $Q_c$ (resp. $Q_f$) l'échange thermique algébrique du fluide avec la source chaude (resp. froide) au cours d'un cycle, et $W$ le travail total reçu par le fluide au cours d'un cycle.

---

### ❓ Questions progressives

1. **Rappels et lois fondamentales**
   À l'aide du premier principe de la thermodynamique appliqué à un cycle, exprimer la conservation de l'énergie pour le fluide. Énoncer le second principe de la thermodynamique (inégalité de Clausius) sous forme d'une relation liant $Q_c$, $Q_f$, $T_c$ et $T_f$.

2. **Étude du cycle de Carnot (Moteur thermique)**
   Dans le cas d'un cycle réversible (cycle de Carnot), exprimer le rendement $\eta$ du moteur thermique en fonction de $T_c$ et $T_f$. Montrer que ce rendement est strictement inférieur à $1$.

3. **Application à une Pompe à Chaleur (PAC)**
   On inverse le cycle de Carnot pour en faire une pompe à chaleur destinée à chauffer un local à la température $T_c$ en puisant de l'énergie thermique dans l'environnement extérieur à la température $T_f$.
   Définir l'efficacité (ou coefficient de performance) $\xi_{\text{PAC}}$ de la pompe à chaleur et l'exprimer en fonction des températures $T_c$ et $T_f$ dans le cas idéal (réversible).

4. **Analyse critique et régime transitoire**
   On considère désormais que la source chaude (le local à chauffer) possède une capacité thermique massique $C$ constante et est de masse $M$. La température initiale du local est $T_0$ (avec $T_0 < T_c^{\text{final}}$). La source froide est maintenue à température constante $T_f$.
   La pompe à chaleur fonctionne en régime réversible avec une puissance reçue $W_{\text{cycle}}$ par cycle et une durée de cycle $\tau$.
   Établir l'équation différentielle régissant l'évolution de la température du local $T(t)$ en fonction de $T_f$, $C_{\text{tot}} = M \cdot C$, et de la puissance thermique fournie au local $\mathcal{P}_c$.

---

### 💡 Pistes & Indications méthodologiques

- **Question 1 :** Pour le premier principe, exploiter le fait que l'énergie interne d'un système au terme d'un cycle est inchangée ($\Delta U_{\text{cycle}} = 0$). Pour le second principe, utiliser l'entropie échangée et la variation d'entropie sur un cycle.
- **Question 2 :** La réversibilité implique que l'entropie créée au cours du cycle est nulle ($\mathcal{S}_{\text{cr}} = 0$). Cela transforme l'inégalité de Clausius en une égalité.
- **Question 3 :** L'efficacité d'une machine thermique se définit toujours par le rapport $\frac{\text{Ce que l'on veut}}{\text{Ce que l'on paie}}$ (en termes énergétiques).
- **Question 4 :** Exprimer la puissance thermique instantanée $\mathcal{P}_c(t)$ reçue par la source chaude en fonction du flux thermique issu du fluide, puis relier cette quantité à la variation élémentaire de température $dT$ du local pendant un intervalle de temps $dt$.

---

### 📋 Corrigé détaillé pas à pas

#### 1. Bilans énergétiques et entropiques sur un cycle
* **Premier principe :** Le fluide subit un cycle, donc la variation de son énergie interne est nulle :
  $$\Delta U_{\text{cycle}} = W + Q_c + Q_f = 0 \implies W = -(Q_c + Q_f)$$
* **Second principe (inégalité de Clausius) :** Pour toute transformation cyclique, la variation d'entropie du fluide est nulle, et l'entropie créée $\mathcal{S}_{\text{cr}}$ est positive ou nulle :
  $$\Delta S_{\text{cycle}} = \frac{Q_c}{T_c} + \frac{Q_f}{T_f} + \mathcal{S}_{\text{cr}} = 0 \implies \frac{Q_c}{T_c} + \frac{Q_f}{T_f} \le 0$$

#### 2. Rendement du cycle de Carnot moteur
Pour un moteur thermique, le travail utile est cédé au milieu extérieur ($W_{\text{moteur}} = -W > 0$). La source chaude fournit de l'énergie au fluide ($Q_c > 0$) et le fluide cède de l'énergie à la source froide ($Q_f < 0$).
Le rendement $\eta$ est défini par :
$$\eta = \frac{-W}{Q_c} = \frac{Q_c + Q_f}{Q_c} = 1 + \frac{Q_f}{Q_c}$$

Dans le cas d'un cycle réversible (Carnot), l'entropie créée est nulle ($\mathcal{S}_{\text{cr}} = 0$), d'où :
$$\frac{Q_c}{T_c} + \frac{Q_f}{T_f} = 0 \implies \frac{Q_f}{Q_c} = -\frac{T_f}{T_c}$$

En reportant dans l'expression du rendement :
$$\eta_{\text{Carnot}} = 1 - \frac{T_f}{T_c}$$
Puisque $T_f > 0$ et $T_c > 0$ (températures thermodynamiques) avec $T_c > T_f$, on a $\frac{T_f}{T_c} \in ]0, 1[$, ce qui implique bien que $\eta_{\text{Carnot}} < 1$ (conformément au second principe de Kelvin-Planck).

#### 3. Efficacité de la Pompe à Chaleur (PAC) idéale
La pompe à chaleur a pour objectif de chauffer la source chaude. L'énergie utile est donc le transfert thermique reçu par la source chaude, soit $-Q_c$ (avec $Q_c < 0$ du point de vue du fluide dans ce mode de fonctionnement, ou posé positivement comme quantité de chaleur fournie au local). Exprimons l'efficacité $\xi_{\text{PAC}}$ :
$$\xi_{\text{PAC}} = \frac{-Q_c}{W} = \frac{-Q_c}{- (Q_c + Q_f)} = \frac{Q_c}{Q_c + Q_f}$$
*(en considérant ici les transferts reçus par la source chaude et fournis par le travail, $Q_c^{\text{local}} = -Q_c > 0$)*.

Pour un fonctionnement réversible (Carnot inversé), on a toujours $\frac{Q_c}{T_c} + \frac{Q_f}{T_f} = 0$. En injectant cette relation :
$$\xi_{\text{PAC, Carnot}} = \frac{Q_c}{Q_c - T_c \frac{Q_c}{T_f}} = \frac{1}{1 - \frac{T_c}{T_f}} = \frac{T_f}{T_f - T_c}$$
En prenant les valeurs absolues pour s'assurer de la positivité :
$$\xi_{\text{PAC, Carnot}} = \frac{T_c}{T_c - T_f}$$
*Analyse critique :* Puisque $T_c > T_f$, on constate que $\xi_{\text{PAC, Carnot}} > 1$. Cela ne viole en rien le premier principe (conversion de travail en chaleur via un transfert thermique), l'efficacité mesurant un coefficient de amplification et non un rendement énergétique.

#### 4. Évolution de la température du local (Régime transitoire)
Soit $C_{\text{tot}} = M \cdot C$ la capacité thermique totale du local. Le premier principe appliqué au local pendant un intervalle de temps élémentaire $dt$ s'écrit :
$$dQ_{\text{local}} = C_{\text{tot}} \, dT = \mathcal{P}_c(t) \, dt$$
où $\mathcal{P}_c(t) = \frac{-Q_c}{dt}$ est la puissance thermique instantanée fournie au local par la PAC.

Si la PAC fonctionne en permanence selon le cycle de Carnot réversible entre la température variable du local $T(t)$ et la source extérieure constante $T_f$, l'efficacité instantanée s'écrit :
$$\xi_{\text{PAC}}(t) = \frac{T(t)}{T(t) - T_f}$$
Par définition de la puissance reçue et de la puissance électrique fournie $\mathcal{P}_{\text{élec}} = \frac{W}{dt}$ :
$$\mathcal{P}_c(t) = \xi_{\text{PAC}}(t) \cdot \mathcal{mathcal{P}}_{\text{élec}} = \frac{T(t)}{T(t) - T_f} \mathcal{P}_{\text{élec}}$$

En substituant cette expression dans l'équation du premier principe du local :
$$C_{\text{tot}} \frac{dT}{dt} = \mathcal{P}_{\text{élec}} \frac{T(t)}{T(t) - T_f}$$

Il s'agit d'une équation différentielle non linéaire du premier ordre régissant l'échauffement du local :
$$\frac{dT}{dt} = \frac{\mathcal{P}_{\text{élec}}}{C_{\text{tot}}} \frac{T(t)}{T(t) - T_f}$$
Cette modélisation montre que plus la température du local $T(t)$ se rapproche de $T_f$, plus l'efficacité théorique est grande, mais en pratique, l'écart de température $T(t) - T_f$ réduit la performance réelle des échangeurs thermiques et rend ce modèle limite lorsque $T(t) \to T_f$.