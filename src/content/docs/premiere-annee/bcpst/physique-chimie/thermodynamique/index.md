---
title: 'Cours : Thermodynamique'
description: 'Synthèse de cours, théorèmes et démonstrations.'
---

# Thermodynamique Macroscopique (BCPST 1)

---

## I. Description d'un système à l'équilibre thermodynamique

### 1. Définitions fondamentales

* **Système thermodynamique** : Région de l'espace délimitée par une surface (réelle ou fictive) à travers laquelle s'effectuent ou non des échanges de matière et d'énergie avec le milieu extérieur.
  * **Ouvert** : échange de matière et d'énergie.
  * **Fermé** : échange d'énergie uniquement.
  * **Isolé** : aucun échange (ni matière, ni énergie sous forme de travail ou de chaleur).
* **Grandeurs d'état** : Variables macroscopiques caractérisant le système.
  * **Extensives** : proportionnelles à la quantité de matière et additives lors de la réunion de sous-systèmes disjoints (ex. : volume $V$, masse $m$, quantité de matière $n$, énergie interne $U$, entropie $S$).
  * **Intensives** : indépendantes de la taille du système, définies localement, non additives (ex. : pression $P$, température $T$, masse volumique $\rho$, potentiel chimique $\mu$).
* **Équilibre thermodynamique** : Un système est à l'équilibre si ses grandeurs d'état sont stationnaires en l'absence de tout flux net d'énergie ou de matière avec l'extérieur. Il implique simultanément :
  * Équilibre mécanique : homogénéité de la pression $P$ (en l'absence de champ de pesanteur).
  * Équilibre thermique : homogénéité de la température $T$.
  * Équilibre chimique / de diffusion : potentiel chimique uniforme.

### 2. Équations d'état usuelles

#### Modèle du Gaz Parfait (GP)
Le gaz parfait est un modèle limite (basses pressions, $P \to 0$) où les molécules sont ponctuelles (sans volume propre) et sans interactions mutuelles à distance.
$$\boxed{P \, V = n \, R \, T = N \, k_B \, T}$$
Avec :
* $P$ en Pascals ($\text{Pa}$).
* $V$ en mètres cubes ($\text{m}^3$).
* $n$ en moles ($\text{mol}$).
* $R \approx 8{,}314\text{ J}\cdot\text{mol}^{-1}\cdot\text{K}^{-1}$ (constante des gaz parfaits).
* $T$ en Kelvins ($\text{K}$), où $T(\text{K}) = \theta(^\circ\text{C}) + 273{,}15$.
* $k_B = \frac{R}{\mathcal{N}_A} \approx 1{,}38 \times 10^{-23}\text{ J}\cdot\text{K}^{-1}$ (constante de Boltzmann).

#### Modèle de la phase condensée idéale (incompressible et indilatable)
Pour un liquide ou un solide dans les conditions usuelles (hors transitions de phase) :
$$\chi_T = -\frac{1}{V}\left(\frac{\partial V}{\partial P}\right)_T \approx 0 \implies V \approx \text{cte}$$
$$\alpha = \frac{1}{V}\left(\frac{\partial V}{\partial T}\right)_P \approx 0 \implies V \approx \text{cte}$$
Le volume molaire $V_m$ est une constante indépendante de $P$ et de $T$.

---

## II. Échanges d'énergie : Travail et Transfert thermique

### 1. Convention de signe
Toute grandeur énergétique algébrique ($W$, $Q$) est comptée **positivement si elle est reçue** par le système et **négativement si elle est cédée** par le système au milieu extérieur (**convention récepteur**).

### 2. Travail des forces de pression

Le travail élémentaire des forces de pression exercées par l'extérieur sur les parois mobiles du système vaut :
$$\boxed{\delta W = - P_{\text{ext}} \, \text{d}V}$$

* **Transformation mécaniquement réversible (ou quasi-statique sans frottement)** : À chaque instant, l'équilibre mécanique est réalisé à la frontière, soit $P_{\text{ext}} = P$.
  $$\delta W_{\text{rev}} = - P \, \text{d}V \implies W_{1\to 2} = -\int_{V_1}^{V_2} P(V) \, \text{d}V$$
* **Transformation isochore** ($V = \text{cte}$) : $\text{d}V = 0 \implies W = 0$.
* **Transformation monobare** ($P_{\text{ext}} = \text{cte} = P_0$) :
  $$W = -P_0 \int_{V_1}^{V_2}\text{d}V = -P_0(V_2 - V_1)$$

```
Pression P
  ^
  |      . (1)
  |       \
  |        \  Transformation réversible
  |         \
  |          . (2)
  |           |
--+-----------+--------> Volume V_0          V1    V2
  Aire sous la courbe = - W_rev
```

### 3. Transfert thermique élémentaire et capacités thermiques

Le transfert thermique élémentaire s'écrit formellement en fonction des coefficients calorimétriques :
$$\delta Q = C_V \, \text{d}T + l \, \text{d}V = C_P \, \text{d}T + h \, \text{d}P$$
Pour un système sans réaction chimique et homogène :
* $C_V = \left(\frac{\partial U}{\partial T}\right)_V$ : capacité thermique isochore ($\text{J}\cdot\text{K}^{-1}$).
* $C_P = \left(\frac{\partial H}{\partial T}\right)_P$ : capacité thermique isobare ($\text{J}\cdot\text{K}^{-1}$).
* Capacités molaires : $C_{V,m} = \frac{C_V}{n}$, $C_{P,m} = \frac{C_P}{n}$.
* Capacités massiques : $c_v = \frac{C_V}{m}$, $c_p = \frac{C_P}{m}$ ($\text{J}\cdot\text{kg}^{-1}\cdot\text{K}^{-1}$).

---

## III. Le Premier Principe de la Thermodynamique

### 1. Énoncé

Pour tout système fermé subissant une transformation le menant d'un état d'équilibre initial $(1)$ à un état d'équilibre final $(2)$, il existe une fonction d'état extensive, notée $U$ (énergie interne), telle que la variation de l'énergie totale $E_{\text{tot}} = U + E_c^{\text{macro}} + E_p^{\text{ext}}$ s'écrive :

$$\boxed{\Delta E_{\text{tot}} = \Delta U + \Delta E_c^{\text{macro}} + \Delta E_p^{\text{ext}} = W + Q}$$

Sous forme différentielle :
$$\text{d}U + \text{d}E_c^{\text{macro}} + \text{d}E_p^{\text{ext}} = \delta W + \delta Q$$
Dans l'immense majorité des cas en chimie et thermodynamique physique de première année, le système est macroscopiquement au repos : $\Delta E_c^{\text{macro}} = 0$ et $\Delta E_p^{\text{ext}} = 0$. On a alors :
$$\boxed{\Delta U = W + Q \quad \Longleftrightarrow \quad \text{d}U = \delta W + \delta Q}$$

### 2. Fonction Enthalpie $H$ et intérêt chimique

#### Définition
L'enthalpie est la fonction d'état définie par :
$$\boxed{H = U + P \, V}$$
Elle est homogène à une énergie ($\text{J}$) et extensive.

#### Propriété fondamentale des transformations monobares
Considérons une transformation d'un système fermé n'échangeant que du travail de forces de pression, sous une pression extérieure constante $P_{\text{ext}} = P_0$, entre deux états d'équilibre $(1)$ et $(2)$ où $P_1 = P_2 = P_0$.
$$W = -P_0(V_2 - V_1)$$
Le premier principe donne :
$$\Delta U = U_2 - U_1 = W + Q_P = -P_0(V_2 - V_1) + Q_P$$
$$U_2 - U_1 = -P_2 V_2 + P_1 V_1 + Q_P$$
$$(U_2 + P_2 V_2) - (U_1 + P_1 V_1) = Q_P$$
D'où :
$$\boxed{\Delta H = Q_P}$$

> **Théorème :** Lors d'une transformation monobare ($P_{\text{ext}} = P_0$) sans travail autre que celui des forces de pression, entre deux états d'équilibre mécanique ($P_1 = P_2 = P_0$), la chaleur échangée par le système est égale à la variation de son enthalpie : $Q = \Delta H$.

### 3. Lois de Joule et applications aux gaz parfaits

#### Première loi de Joule
L'énergie interne d'un gaz parfait ne dépend que de sa température thermodynamique :
$$U = U(T) \iff \left(\frac{\partial U}{\partial V}\right)_T = 0$$
Par conséquent :
$$\boxed{\text{d}U = C_V(T)\,\text{d}T \quad \text{et} \quad \Delta U = \int_{T_1}^{T_2} C_V(T)\,\text{d}T}$$

#### Seconde loi de Joule
L'enthalpie d'un gaz parfait ne dépend que de sa température :
$$H = U + PV = U(T) + nRT = H(T) \iff \left(\frac{\partial H}{\partial P}\right)_T = 0$$
Par conséquent :
$$\boxed{\text{d}H = C_P(T)\,\text{d}T \quad \text{et} \quad \Delta H = \int_{T_1}^{T_2} C_P(T)\,\text{d}T}$$

#### Relations fondamentales du Gaz Parfait
1. **Relation de Mayer** :
   $$H = U + nRT \implies \text{d}H = \text{d}U + nR\,\text{d}T \implies C_P\,\text{d}T = C_V\,\text{d}T + nR\,\text{d}T$$
   $$\boxed{C_P - C_V = n\,R \quad \Longleftrightarrow \quad C_{P,m} - C_{V,m} = R}$$
2. **Coefficient isentropique** $\gamma$ :
   $$\gamma = \frac{C_P}{C_V} > 1$$
   On en déduit l'expression des capacités :
   $$\boxed{C_V = \frac{nR}{\gamma - 1}, \qquad C_P = \frac{\gamma \, nR}{\gamma - 1}}$$
   * Gaz parfait monoatomique (ex. : $\text{He}, \text{Ar}$) : 3 degrés de liberté de translation $\implies C_{V,m} = \frac{3}{2}R$, d'où $\gamma = \frac{5}{3} \approx 1{,}67$.
   * Gaz parfait diatomique aux températures usuelles (ex. : $\text{N}_2, \text{O}_2$) : 3 de translation + 2 de rotation $\implies C_{V,m} = \frac{5}{2}R$, d'où $\gamma = \frac{7}{5} = 1{,}40$.

### 4. Cas de la phase condensée idéale
Pour un solide ou un liquide incompressible et indilatable :
$$V \approx \text{cte} \implies \text{d}V = 0$$
De plus, $C_P \approx C_V \approx C$.
* $\text{d}U = C\,\text{d}T \implies \Delta U = C\,\Delta T$
* $H = U + PV \implies \text{d}H = \text{d}U + V\text{d}P + P\text{d}V = C\,\text{d}T + V\text{d}P$
Dans la majorité des transformations à pression modérée :
$$\Delta H \approx \Delta U \approx C\,\Delta T$$

---

## IV. Le Second Principe de la Thermodynamique

### 1. Énoncé

Pour tout système fermé, il existe une fonction d'état extensive notée $S$ (entropie, en $\text{J}\cdot\text{K}^{-1}$), telle que sa variation au cours d'une transformation entre un état $(1)$ et un état $(2)$ s'écrit :

$$\boxed{\Delta S = S_2 - S_1 = S_{\text{éch}} + S_{\text{créée}}}$$

* **Entropie échangée** : due aux transferts thermiques avec le milieu extérieur à travers la surface de frontière :
  $$S_{\text{éch}} = \int \frac{\delta Q}{T_{\text{frontière}}}$$
  Si le milieu extérieur est constitué de thermostats à températures $T_{\text{ext}, k}$ :
  $$S_{\text{éch}} = \sum_k \frac{Q_k}{T_{\text{ext}, k}}$$
* **Entropie créée** : rend compte de l'irréversibilité des processus internes :
  $$\boxed{S_{\text{créée}} \ge 0}$$
  * $S_{\text{créée}} = 0$ : transformation réversible.
  * $S_{\text{créée}} > 0$ : transformation irréversible.
  * $S_{\text{créée}} < 0$ : **impossible** (violation du second principe).

* **Causes physiques de l'irréversibilité** :
  * Phénomènes dissipatifs mécaniques (frottements fluides et solides, viscosité).
  * Transferts thermiques sous un écart fini de température (loi de Fourier).
  * Diffusion de matière sous gradient de concentration (loi de Fick).
  * Réactions chimiques spontanées s'effectuant hors équilibre.

* **Cas particulier d'un système isolé** :
  $$\delta Q = 0 \implies S_{\text{éch}} = 0 \implies \Delta S = S_{\text{créée}} \ge 0$$
  L'entropie d'un système isolé ne peut que croître ou rester constante.

### 2. Identités thermodynamiques fondamentales

Pour un système fermé de composition fixe, homogène, subissant une transformation élémentaire réversible ($\delta W_{\text{rev}} = -P\,\text{d}V$ et $\delta Q_{\text{rev}} = T\,\text{d}S$) :
$$\text{d}U = \delta W_{\text{rev}} + \delta Q_{\text{rev}}$$
D'où la **première identité thermodynamique** :
$$\boxed{\text{d}U = T\,\text{d}S - P\,\text{d}V}$$

En utilisant $H = U + PV \implies \text{d}H = \text{d}U + P\,\text{d}V + V\,\text{d}P$ :
$$\text{d}H = (T\,\text{d}S - P\,\text{d}V) + P\,\text{d}V + V\,\text{d}P$$
D'où la **seconde identité thermodynamique** :
$$\boxed{\text{d}H = T\,\text{d}S + V\,\text{d}P}$$

> **Remarque capitale :** Bien qu'établies en supposant une transformation réversible, ces relations ne relient que des **fonctions d'état**. Elles sont donc valables pour **toute transformation élémentaire**, qu'elle soit réversible ou irréversible.

### 3. Calculs pratiques de variations d'entropie $\Delta S$

#### Pour un Gaz Parfait
À partir des identités thermodynamiques :
$$\text{d}S = \frac{\text{d}U}{T} + \frac{P}{T}\text{d}V = C_V \frac{\text{d}T}{T} + nR \frac{\text{d}V}{V}$$
$$\text{d}S = \frac{\text{d}H}{T} - \frac{V}{T}\text{d}P = C_P \frac{\text{d}T}{T} - nR \frac{\text{d}P}{P}$$

Par intégration pour des capacités $C_V$ et $C_P$ indépendantes de la température :
$$\boxed{\Delta S = C_V \ln\left(\frac{T_2}{T_1}\right) + nR \ln\left(\frac{V_2}{V_1}\right)}$$
$$\boxed{\Delta S = C_P \ln\left(\frac{T_2}{T_1}\right) - nR \ln\left(\frac{P_2}{P_1}\right)}$$
En éliminant $T$ via $PV=nRT$ :
$$\boxed{\Delta S = C_V \ln\left(\frac{P_2}{P_1}\right) + C_P \ln\left(\frac{V_2}{V_1}\right)}$$

#### Pour une phase condensée idéale
$V = \text{cte} \implies \text{d}V = 0$ et $\text{d}U = C\,\text{d}T$ :
$$\text{d}S = \frac{C\,\text{d}T}{T} \implies \boxed{\Delta S = C \ln\left(\frac{T_2}{T_1}\right)}$$

### 4. Lois de Laplace pour le Gaz Parfait

#### Hypothèses indispensables d'application
1. Le système est un **Gaz Parfait**.
2. Les capacités thermiques ($C_V, C_P$) sont **constantes** sur l'intervalle de température (donc $\gamma = \text{cte}$).
3. La transformation est **adiabatique** ($\delta Q = 0$).
4. La transformation est **réversible** ($S_{\text{créée}} = 0$).
   *(Conséquence directe : la transformation est **isentropique**, $\text{d}S = 0$)*.

#### Démonstration
Pour une transformation isentropique, $\text{d}S = 0$ :
$$\text{d}S = C_V \frac{\text{d}T}{T} + nR \frac{\text{d}V}{V} = 0$$
Or $nR = C_P - C_V = C_V(\gamma - 1)$. En divisant par $C_V$ :
$$\frac{\text{d}T}{T} + (\gamma - 1)\frac{\text{d}V}{V} = 0$$
Par intégration :
$$\ln T + (\gamma - 1)\ln V = \text{cte} \implies \boxed{T \, V^{\gamma - 1} = \text{cte}}$$

En substituant $T = \frac{PV}{nR}$ :
$$\left(\frac{PV}{nR}\right) V^{\gamma - 1} = \text{cte} \implies \boxed{P \, V^\gamma = \text{cte}}$$

En substituant $V = \frac{nRT}{P}$ :
$$P \left(\frac{nRT}{P}\right)^\gamma = \text{cte} \implies P^{1-\gamma} \, T^\gamma = \text{cte} \iff \boxed{T^\gamma \, P^{1-\gamma} = \text{cte}}$$

---

## V. Changements d'état d'un corps pur

### 1. Enthalpie de changement d'état
Lors d'une transition de phase d'un corps pur (ex. : vaporisation, fusion, sublimation) sous pression constante :
* La température reste constante tant que les deux phases coexistent : $T = T_{\text{chgt}}(P)$.
* **Enthalpie molaire de changement d'état** : $\Delta_{\text{chgt}}H_m = H_{m,\text{phase 2}} - H_{m,\text{phase 1}}$ (en $\text{J}\cdot\text{mol}^{-1}$).
* Pour une masse $m$ ou une quantité $n$ transformée sous la pression d'équilibre :
  $$\boxed{Q_P = \Delta H = n \, \Delta_{\text{chgt}}H_m = m \, \Delta_{\text{chgt}}h}$$

### 2. Entropie de changement d'état
Le changement d'état étant réversible à l'équilibre thermique à la température $T_{\text{chgt}}$ :
$$\boxed{\Delta_{\text{chgt}}S_m = \frac{\Delta_{\text{chgt}}H_m}{T_{\text{chgt}}}}$$

---

## VI. Machines thermiques dithermes

Une machine thermique fonctionne selon un cycle fermé périodique : $\Delta U_{\text{cycle}} = 0$ et $\Delta S_{\text{cycle}} = 0$.
Elle échange de l'énergie avec deux thermostats :
* Source chaude à $T_C$.
* Source froide à $T_F$ (avec $T_C > T_F$).

### 1. Bilans fondamentaux
* **Premier principe** :
  $$\boxed{W + Q_C + Q_F = 0}$$
* **Second principe** :
  $$\Delta S = \frac{Q_C}{T_C} + \frac{Q_F}{T_F} + S_{\text{créée}} = 0 \implies \boxed{\frac{Q_C}{T_C} + \frac{Q_F}{T_F} \le 0} \quad \text{(Inégalité de Clausius)}$$
  L'égalité stricte a lieu si et seulement si le cycle est réversible ($S_{\text{créée}} = 0$).

### 2. Les différents types de machines dithermes

```
                +--------------------+
                |  Source Chaude Tc  |
                +--------------------+
                     |          ^
                  Qc | < 0   Qc | > 0
                     v          |
               +----------------------+
      W < 0    |       MOTEUR         |
    <----------|  Qc > 0, Qf < 0      |
               +----------------------+
               +----------------------+
      W > 0    |  MACHINE FRIGORIFIQUE|
    ---------->|   OU POMPE A CHALEUR |
               |  Qc < 0, Qf > 0      |
               +----------------------+
                     |          ^
                  Qf | < 0   Qf | > 0
                     v          |
                +--------------------+
                |  Source Froide Tf  |
                +--------------------+
```

#### Moteur thermique
* **Objectif** : Fournir du travail mécanique à l'extérieur ($W < 0$).
* **Signes des transferts** : $W < 0$, $Q_C > 0$, $Q_F < 0$.
* **Rendement thermodynamique** :
  $$\eta = \frac{\text{Gain}}{\text{Dépense}} = \frac{-W}{Q_C} = \frac{Q_C + Q_F}{Q_C} = 1 + \frac{Q_F}{Q_C}$$
* D'après l'inégalité de Clausius :
  $$\frac{Q_F}{T_F} \le -\frac{Q_C}{T_C} \implies \frac{Q_F}{Q_C} \le -\frac{T_F}{T_C} \quad (\text{car } Q_C > 0)$$
* **Théorème de Carnot** :
  $$\boxed{\eta \le \eta_C = 1 - \frac{T_F}{T_C} < 1}$$
  $\eta_C$ est le **rendement de Carnot** (rendement maximal théorique, obtenu pour un cycle réversible).

#### Réfrigérateur
* **Objectif** : Extraire de la chaleur à la source froide ($Q_F > 0$) en recevant du travail ($W > 0$).
* **Signes des transferts** : $W > 0$, $Q_F > 0$, $Q_C < 0$.
* **Efficacité frigorifique** :
  $$e_{\text{frig}} = \frac{Q_F}{W} = \frac{Q_F}{-Q_C - Q_F} = \frac{1}{-\frac{Q_C}{Q_F} - 1}$$
* Borne de Carnot :
  $$\boxed{e_{\text{frig}} \le e_{C,\text{frig}} = \frac{T_F}{T_C - T_F}}$$

#### Pompe à chaleur (PAC)
* **Objectif** : Chauffer la source chaude ($Q_C < 0$, gain pour l'utilisateur : $-Q_C > 0$) en recevant du travail ($W > 0$).
* **Signes des transferts** : $W > 0$, $Q_C < 0$, $Q_F > 0$.
* **Coefficient de performance (COP)** :
  $$\text{COP} = \frac{-Q_C}{W} = \frac{-Q_C}{-Q_C - Q_F} = \frac{1}{1 + \frac{Q_F}{Q_C}}$$
* Borne de Carnot :
  $$\boxed{\text{COP} \le \text{COP}_C = \frac{T_C}{T_C - T_F} > 1}$$
  *(Remarque : $\text{COP}_C = e_{C,\text{frig}} + 1$)*.

---

## VII. Méthodes fondamentales de résolution

### Méthode 1 : Calcul de travail et de chaleur sur une étape hors équilibre
Lors d'une compression/détente brutale contre une pression extérieure constante $P_{\text{ext}} = P_2$ :
1. Calculer le travail par la formule monobare : $W = -P_2(V_2 - V_1)$.
2. Utiliser l'équation d'état dans l'état final pour exprimer $V_2$ ou $T_2$ si nécessaire.
3. Appliquer le premier principe pour trouver la température finale ou la chaleur :
   * Si adiabatique ($Q = 0$) : $\Delta U = W \implies C_V(T_2 - T_1) = -P_2(V_2 - V_1)$. Remplacer les volumes via le modèle du GP pour obtenir $T_2$.
   * Si non adiabatique : Déterminer $T_2$ par d'autres conditions (ex. : équilibre thermique $T_2 = T_{\text{ext}}$), puis calculer $\Delta U = C_V(T_2 - T_1)$ et enfin en déduire $Q = \Delta U - W$.

### Méthode 2 : Calcul complet d'un bilan d'entropie
Pour évaluer le caractère réversible ou irréversible d'une transformation $(1) \to (2)$ :
1. **Calculer $\Delta S$** : Choisir un chemin réversible fictif entre l'état initial et l'état final et intégrer les identités thermodynamiques (la valeur de $\Delta S$ ne dépend pas du chemin réellement suivi car $S$ est une fonction d'état).
2. **Calculer $S_{\text{éch}}$** : Identifier les frontières thermiques et évaluer $S_{\text{éch}} = \int \frac{\delta Q}{T_{\text{ext}}}$. Si thermostat unique : $S_{\text{éch}} = \frac{Q}{T_{\text{ext}}}$.
3. **Déduire $S_{\text{créée}}$** : Poser $S_{\text{créée}} = \Delta S - S_{\text{éch}}$.
4. **Valider** : Vérifier impérativement que $S_{\text{créée}} \ge 0$. Si $S_{\text{créée}} < 0$, réexaminer les signes de $Q$ ou les températures aux bornes.

---

## VIII. Pièges classiques à éviter

| Pièges fréquents | Règle absolue / Correction |
| :--- | :--- |
| **Confondre transformation isobare et monobare** | Une transformation **monobare** impose $P_{\text{ext}} = \text{cte}$, mais la pression interne du gaz $P$ peut être mal définie ou varier. Une transformation **isobare** implique un équilibre mécanique permanent avec $P = P_{\text{ext}} = \text{cte}$. |
| **Utiliser les lois de Laplace lors d'une détente brutale** | Une détente brutale contre une pression constante (ex. : rupture d'une membrane) est **irréversible**. Bien qu'adiabatique, **Laplace est strictement interdit** car $S_{\text{créée}} \neq 0$. Utiliser obligatoirement $\Delta U = W = -P_{\text{ext}}\Delta V$. |
| **Écrire $\Delta U = Q_V$ pour n'importe quelle transformation** | $\Delta U = Q_V$ n'est vrai **que** si la transformation est **isochore** ($\text{d}V=0$) et sans autre travail que les forces de pression. |
| **Oublier les unités dans l'équation des gaz parfaits** | La pression $P$ doit toujours être convertie en $\text{Pa}$ ($1\text{ bar} = 10^5\text{ Pa}$, $1\text{ atm} = 1{,}013 \times 10^5\text{ Pa}$), le volume $V$ en $\text{m}^3$ ($1\text{ L} = 10^{-3}\text{ m}^3$), et la température $T$ en $\text{K}$. |
| **Confondre $T$ et $T_{\text{ext}}$ dans l'entropie échangée** | $S_{\text{éch}} = \int \frac{\delta Q}{T_{\text{frontière}}}$. Si le système échange avec un thermostat, c'est la température du **thermostat** ($T_{\text{ext}}$) qui intervient au dénominateur, pas celle du système $T(t)$ ! |
| **Calculer l'entropie créée directement par une intégrale** | Il n'existe pas de formule d'intégration microscopique directe de $S_{\text{créée}}$ en thermo macroscopique. On calcule **toujours** $S_{\text{créée}}$ de manière indirecte : $S_{\text{créée}} = \Delta S - S_{\text{éch}}$. |