---
title: 'Exercice 1 : 1er et 2nd principes'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Étude thermodynamique d'un système ouvert et analyse critique d'un cycle moteur

**Filière :** MPSI  
**Matière :** Physique-Chimie  
Chapitre: ** Thermodynamique (1er et 2nd principes)  

---

## I. Énoncé

On s'intéresse au fonctionnement d'un compresseur industriel adiabatique d'air, assimilé à un gaz parfait diatomic ($\gamma = 1{,}4$, masse molaire $M = 29\text{ g}\cdot\text{mol}^{-1}$, capacité thermique massique à pression constante $c_p = 1{,}00\text{ kJ}\cdot\text{kg}^{-1}\cdot\text{K}^{-1}$). 

L'air entre dans le compresseur (considéré comme un système ouvert en régime permanent) à la température $T_1 = 293\text{ K}$ et à la pression $P_1 = 1{,}0\text{ bar}$. Il est comprimé de manière réversible jusqu'à la pression $P_2 = 5{,}0\text{ bars}$.

Dans un second temps, le gaz traverse un échangeur thermique isobare où il cède de la chaleur à l'atmosphère extérieure (à la température $T_0 = 293\text{ K}$) avant d'être utilisé dans une application industrielle.

### Données :
* Constante des gaz parfaits : $R = 8{,}314\text{ J}\cdot\text{mol}^{-1}\cdot\text{K}^{-1}$
* Débit massique d'air : $D_m = 0{,}50\text{ kg}\cdot\text{s}^{-1}$

---

## II. Questions

1. **Rappel de cours :** Énoncer le premier principe de la thermodynamique appliqué à un système ouvert en régime permanent, en précisant les termes énergétiques mis en jeu. Exprimer le travail massique technique reçu par le fluide.
2. **Compression adiabatique réversible :** En déduire l'expression de la température de sortie $T_2$ en fonction de $P_1$, $P_2$, $T_1$ et $\gamma$ (loi de Laplace). Calculer $T_2$ en kelvins.
3. **Bilan énergétique :** Calculer la puissance thermique $\mathcal{P}_1$ et la puissance mécanique $\mathcal{P}_{mech}$ reçues par le gaz lors de cette compression. Discuter le signe de $\mathcal{P}_{mech}$.
4. **Création d'entropie :** Calculer la variation d'entropie de l'air entre l'entrée et la sortie du compresseur. Le résultat était-il prévisible ? Justifier.
5. **Analyse critique et limites du modèle :** Dans la réalité, la compression n'est pas strictement réversible et s'accompagne d'un échauffement supérieur. Si la température réelle de sortie mesurée est $T_{2,\text{réel}} = 510\text{ K}$, calculer la création d'entropie massique $\Delta s_{\text{créée}}$ par seconde. Conclure sur la validité du modèle idéal.

---

## III. Pistes et méthodologie

* **Question 1 :** Pensez à l'enthalpie massique $h$ et au travail technique $w_t = \int V dP$ (ou travail des forces de pression hors forces de transvasement).
* **Question 2 & 3 :** Utilisez l'isentropique ($s = \text{cte}$) pour les gaz parfaits. Attention aux unités : convertissez les débits massiques en $\text{kg}\cdot\text{s}^{-1}$.
* **Question 4 :** Pour un système ouvert adiabatique réversible, que dire du flux d'entropie échangé ?
* **Question 5 :** Exprimez le second principe pour le système ouvert en régime permanent : $\Delta S_{\text{universe}} = S_{\text{créée}} > 0$.

---

## IV. Corrigé pas à pas

### 1. Premier principe pour un système ouvert en régime permanent
Pour un système ouvert en régime permanent, le premier principe s'écrit sous la forme massique :
$$\Delta h + \Delta E_c + \Delta E_p = q + w_t$$
En négligeant les variations d'énergie cinétique et potentielle entre l'entrée (1) et la sortie (2), et pour une transformation adiabatique ($q = 0$) :
$$h_2 - h_1 = w_t$$
Où $w_t$ représente le travail technique massique reçu par le fluide ($w_t = -\int V dP$).

### 2. Température de sortie $T_2$
La compression étant adiabatique et réversible (isentropique), la loi de Laplace s'applique aux gaz parfaits :
$$T_2 = T_1 \left(\frac{P_2}{P_1}\right)^{\frac{\gamma-1}{\gamma}}$$
A.N. : $T_2 = 293 \times \left(\frac{5{,}0}{1{,}0}\right)^{\frac{0{,}4}{1{,}4}} = 293 \times (5)^{0{,}2857} \approx 293 \times 1{,}584 \approx 464\text{ K}$ (soit $191\,^{\circ}\text{C}$).

### 3. Puissances mises en jeu
Le gaz étant assimilé à un gaz parfait, $h_2 - h_1 = c_p(T_2 - T_1)$.
Le travail technique massique est donc $w_t = c_p(T_2 - T_1)$.
La puissance mécanique reçue est $\mathcal{P}_{\text{mech}} = D_m \cdot w_t = D_m \cdot c_p (T_2 - T_1)$.
A.N. : $\mathcal{P}_{\text{mech}} = 0{,}50 \times 1000 \times (464 - 293) = 0{,}50 \times 1000 \times 171 = 85{,}5\text{ kW}$.
* **Discussion :** $\mathcal{P}_{\text{mech}} > 0$, ce qui est cohérent car le compresseur fournit de l'énergie mécanique au gaz. La compression est un récepteur d'énergie. Par définition, le transfert thermique $\mathcal{P}_1 = 0\text{ W}$ puisque la transformation est adiabatique.

### 4. Variation d'entropie
Puisque la transformation est réversible et adiabatique, le système subit une transformation isentropique :
$$\Delta s = s_2 - s_1 = 0$$
* **Justification :** C'était prévisible car toute transformation adiabatique réversible est par définition isentropique ($\Delta S_{\text{créée}} = 0$).

### 5. Analyse critique et limites du modèle réel
Dans la réalité, la température de sortie est $T_{2,\text{réel}} = 510\text{ K} > 464\text{ K}$. 
Appliquons le second principe (inégalité de Clausius) pour un système ouvert en régime permanent :
$$\Delta s = s_{2,\text{réel}} - s_1 = \int_1^2 \frac{dq}{T} + s_{\text{créée}}$$
Puisque le compresseur est supposé adiabatique ($dq = 0$), on a :
$$s_{\text{créée}} = s_{2,\text{réel}} - s_1 = c_p \ln\left(\frac{T_{2,\text{réel}}}{T_1}\right) - R_{\text{massique}} \ln\left(\frac{P_2}{P_1}\right)$$
Avec $R_{\text{massique}} = \frac{R}{M} = \frac{8{,}314}{29 \times 10^{-3}} \approx 287\text{ J}\cdot\text{kg}^{-1}\cdot\text{K}^{-1}$.

A.N. :
$$s_{\text{créée}} = 1000 \times \ln\left(\frac{510}{293}\right) - 287 \times \ln\left(\frac{5}{1}\right)$$
$$s_{\text{créée}} = 1000 \times 0{,}554 - 287 \times 1{,}609 = 554 - 461{,}8 = 92{,}2\text{ J}\cdot\text{kg}^{-1}\cdot\text{K}^{-1}$$

* **Analyse critique :** On trouve $s_{\text{créée}} > 0$, ce qui est conforme au second principe (irreversibilités dues aux frottements visqueux et aux turbulences internes). Le modèle idéal isentropique surestime l'efficacité du compresseur : la température réelle est plus élevée, ce qui entraîne une perte d'énergie sous forme de chaleur non souhaitée et nécessite une puissance mécanique réelle supérieure à celle calculée au modèle idéal.