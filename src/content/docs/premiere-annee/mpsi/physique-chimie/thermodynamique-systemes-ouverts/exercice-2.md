---
title: 'Exercice 2 : Étude thermodynamique des tuyères, turbines et compresseurs'
description: 'Problème d entraînement type concours.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Les machines thermiques à écoulement (tuyères, turbines, compresseurs) jouent un rôle central dans les systèmes énergétiques modernes (moteurs d'avion, centrales à gaz ou thermiques, réseaux de climatisation). L'objectif de ce problème est d'établir et d'exploiter le premier principe de la thermodynamique appliqué aux systèmes ouverts (en régime permanent) pour modéliser ces différents composants.

On considère un fluide circulant dans un dispositif (tuyère, turbine ou compresseur) modélisé comme un **système ouvert en régime permanent**. Le fluide est assimilé à un gaz parfait de masse molaire $M$, de capacité thermique massique à pression constante $c_p$ et à volume constant $c_v$ supposées constantes. On note $\gamma = \frac{c_p}{c_v}$ l'indice adiabatique du gaz.

### ❓ Questions progressives (incluant une analyse critique du modèle)

1. **Rappel du premier principe pour un système ouvert :** 
   Établir l'expression du premier principe de la thermodynamique appliqué à un système ouvert en régime permanent, en présence d'un seul flux de matière entrant et d'un seul flux sortant. On négligera les variations d'énergie potentielle de pesanteur.

2. **Application aux machines adiabatiques sans travail extérieur (Tuyères et Diffuseurs) :**
   Une tuyère est un conduit de section variable où un gaz subit une détente isentropique (réversible et adiabatique) visant à convertir son énergie thermique en énergie cinétique.
   * a) En déduire la relation liant la vitesse de sortie $v_s$, la vitesse d'entrée $v_e$, et les enthalpies massiques $h_e$ et $h_s$.
   * b) Exprimer la vitesse de sortie $v_s$ en fonction de $c_p$, de la température d'entrée $T_e$, de la température de sortie $T_s$, et de la vitesse d'entrée $v_e$ (supposée négligeable).
   * c) En déduire l'expression de $T_s$ en fonction de $T_e$, des pressions $P_e$ et $P_s$, et de $\gamma$, en supposant la transformation isentropique.

3. **Application aux turbines (Détente avec production de travail) :**
   Une turbine permet de détendre un gaz de haute pression à une basse pression en récupérant de l'énergie mécanique sur un arbre en rotation. On suppose la transformation adiabatique et réversible (isentropique).
   * a) Exprimer le travail massique $w_{\text{ut}}$ reçu par le fluide au cours de sa traversée de la turbine en fonction des enthalpies massiques d'entrée $h_e$ et de sortie $h_s$. Préciser le signe de $w_{\text{ut}}$.
   * b) Exprimer ce travail massique en fonction de $c_p$, $T_e$, $T_s$ et du rapport de détentes $\tau = \frac{P_s}{P_e}$.

4. **Application aux compresseurs (Compression avec consommation de travail) :**
   Un compresseur élève la pression d'un gaz en lui fournissant du travail mécanique.
   * a) Définir l'efficacité (ou rendement isentropique) d'un compresseur $\eta_c$ en comparant le travail massique réel $w_{\text{réel}}$ au travail massique isentropique (réversible) $w_{\text{is}}$ pour une même variation de pression.
   * b) Pourquoi les compresseurs réels s'écartent-ils du modèle isentropique (analyse critique) ?

### 💡 Pistes & Indications méthodologiques

* **Question 1 :** Utilisez le premier principe sous sa forme massique pour un système ouvert en régime permanent (bilan d'enthalpie totale).
* **Question 2 & 3 :** Pensez à utiliser la loi de Laplace ($P^{1-\gamma}T^\gamma = \text{cte}$) pour relier les températures aux pressions lors d'une transformation adiabatique réversible d'un gaz parfait.
* **Question 4 :** Attention aux conventions de signe : le travail reçu par le fluide est négatif si l'on suit la convention usuelle du premier principe, mais on utilise souvent des grandeurs en valeur absolue pour les rendements.

---

### 📋 Corrigé détaillé pas à pas

#### 1. Premier principe pour un système ouvert en régime permanent
Pour un système ouvert traversé par un débit massique constant $\mathcal{D}_m$ (un flux entrant $e$ et un flux sortant $s$), le premier principe s'écrit en régime permanent (les grandeurs d'état dans le volume de contrôle ne dépendent pas du temps) sous la forme massique :
$$\Delta h + \Delta e_c + \Delta e_p = q + w_{\text{ut}}$$

Où :
* $h = u + Pv$ est l'enthalpie massique.
* $e_c = \frac{1}{2}v^2$ est l'énergie cinétique massique.
* $e_p = gz$ est l'énergie potentielle massique (négligeable ici).
* $q$ est le transfert thermique massique reçu par le fluide.
* $w_{\text{ut}}$ est le travail utile (ou travail transmissible, hors travail des forces de pression intérieures) massique reçu par le fluide.

Entre l'entrée $(e)$ et la sortie $(s)$, cela donne :
$$(h_s - h_e) + \frac{1}{2}(v_s^2 - v_e^2) = q + w_{\text{ut}}$$

---

#### 2. Étude de la tuyère
* **a) Vitesse de sortie :**
  Une tuyère n'a pas d'arbre en mouvement, donc $w_{\text{ut}} = 0$. De plus, la transformation est supposée adiabatique, donc $q = 0$. Le bilan devient :
  $$(h_s - h_e) + \frac{1}{2}(v_s^2 - v_e^2) = 0 \implies v_s^2 = v_e^2 + 2(h_e - h_s)$$

* **b) Expression avec les températures :**
  Pour un gaz parfait, la variation d'enthalpie massique est $\Delta h = c_p(T_s - T_e)$. Ainsi :
  $$v_s^2 = v_e^2 + 2c_p(T_e - T_s)$$
  Si la vitesse d'entrée est négligeable ($v_e \approx 0$), on obtient :
  $$v_s = \sqrt{2c_p(T_e - T_s)}$$

* **c) Expression de la température de sortie $T_s$ :**
  La transformation est adiabatique et réversible (isentropique) pour un gaz parfait, la loi de Laplace s'applique :
  $$T_e^{\gamma} P_e^{1-\gamma} = T_s^{\gamma} P_s^{1-\gamma} \implies T_s = T_e \left(\frac{P_s}{P_e}\right)^{\frac{\gamma-1}{\gamma}}$$

---

#### 3. Étude de la turbine
* **a) Travail massique de la turbine :**
  Pour une turbine, il y a production de travail mécanique, donc $w_{\text{ut}} < 0$ (le fluide fournit du travail à l'extérieur). Le flux thermique est généralement négligé devant les transferts énergétiques mécaniques ($q \approx 0$). Le premier principe donne :
  $$(h_s - h_e) + \frac{1}{2}(v_s^2 - v_e^2) = w_{\text{ut}}$$
  Souvent, les variations d'énergie cinétique entre l'entrée et la sortie sont négligeables devant le travail échangé :
  $$w_{\text{ut}} = h_s - h_e = c_p(T_s - T_e)$$
  Comme $T_s < T_e$ (détente), on a bien $w_{\text{ut}} < 0$.

* **b) Expression en fonction du rapport de détentes :**
  En utilisant la loi de Laplace pour la détente isentropique :
  $$T_s = T_e \left(\frac{P_s}{P_e}\right)^{\frac{\gamma-1}{\gamma}} = T_e \, \tau^{\frac{\gamma-1}{\gamma}}$$
  En reportant dans l'expression du travail :
  $$w_{\text{ut}} = c_p T_e \left( \tau^{\frac{\gamma-1}{\gamma}} - 1 \right)$$

---

#### 4. Étude du compresseur et analyse critique
* **a) Rendement isentropique d'un compresseur :**
  Un compresseur reçoit du travail de l'extérieur ($w_{\text{réel}} > 0$). Le travail minimal nécessaire pour élever la pression d'une pression $P_e$ à $P_s$ est obtenu pour une compression isentropique réversible $w_{\is}$. En raison des frottements et des irréversibilités internes, le travail réel fourni est supérieur au travail isentropique. Le rendement isentropique $\eta_c$ s'exprime donc par :
  $$\eta_c = \frac{w_{\text{is}}}{w_{\text{réel}}} = \frac{h_{\text{s,is}} - h_e}{h_{\text{s,réel}} - h_e} = \frac{T_{\text{s,is}} - T_e}{T_{\text{s,réel}} - T_e}$$

* **b) Analyse critique du modèle :**
  * **Irréversibilités :** Les frottements visqueux du fluide contre les parois et les turbulences générées dans les aubages créent de l'entropie ($\Delta S_{\text{créée}} > 0$). Cela se traduit par une augmentation de la température de sortie réelle $T_{\text{s,réel}}$ supérieure à celle prédite par la loi de Laplace ($T_{\text{s,is}}$).
  * **Transferts thermiques :** Le modèle adiabatique ($q = 0$) est une approximation. En réalité, un compresseur ou une turbine échange de la chaleur avec l'extérieur (refroidissement par eau ou air des compresseurs, pertes thermiques des turbines).
  * **Régime permanent idéal :** Les fluctuations de débit ou de pression ne sont pas prises en compte dans ce modèle stationnaire de base.