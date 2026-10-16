---
title: 'Exercice 2 : Échangeurs thermiques'
description: 'Problème d entraînement type concours.'
---

# PROBLÈME GUIDÉ : Étude d'un échangeur thermique tubulaire

*L'objectif de ce problème est d'étudier les performances thermiques d'un échangeur tubulaire à co-courants et à contre-courants, dispositif omniprésent dans l'industrie chimique et les systèmes énergétiques (chauffage, climatisation, cycles thermodynamiques).*

---

## Données et notations

On considère un échangeur thermique constitué de deux tubes coaxiaux (le tube intérieur et l'espace annulaire). 
* Fluide chaud (indice $1$) : s'écoule dans le tube intérieur. Débit massique $q_{m1}$, capacité thermique massique $c_{p1}$ (supposée constante).
* Fluide froid (indice $2$) : s'écoule dans l'espace annulaire. Débit massique $q_{m2}$, capacité thermique massique $c_{p2}$ (supposée constante).
* Les températures d'entrée des fluides sont respectivement $T_{1e}$ et $T_{2e}$.
* Les températures de sortie sont $T_{1s}$ et $T_{2s}$.
* L'échangeur a une surface totale d'échange $S$. Le coefficient global d'échange thermique par unité de surface, noté $U$, est supposé uniformément réparti le long de l'échangeur.

On pose les capacités thermiques par unité de temps (ou flux thermiques capacitifs) :
$$C_1 = q_{m1} c_{p1} \quad \text{et} \quad C_2 = q_{m2} c_{p2}$$

---

## Partie I : Étude préliminaire et bilan global

On considère une portion d'échangeur comprise entre l'abscisse $x$ et $x + \mathrm{d}x$ (avec $x \in [0, L]$). La surface d'échange élémentaire associée est $\mathrm{d}S = \mathcal{p} \, \mathrm{d}x$, où $\mathcal{p}$ est le périmètre mouillé.

1. **[Q1]** Établir, par un bilan d'énergie sur une tranche élémentaire de fluide chaud comprise entre $x$ et $x+\mathrm{d}x$, la relation liant la variation de température $\mathrm{d}T_1$ au flux thermique élémentaire $\mathrm{d}\Phi$ échangé avec le fluide froid. Faire de même pour le fluide chaud et le fluide froid.
2. **[Q2]** Exprimer le flux thermique élémentaire $\mathrm{d}\Phi$ à travers la surface $\mathrm{d}S$ en fonction de $U$, $T_1(x)$, $T_2(x)$ et $\mathrm{d}S$.
3. **[Q3]** En effectuant un bilan thermique global sur l'ensemble de l'échangeur (entre l'entrée $x=0$ et la sortie $x=L$), exprimer la conservation de l'énergie. En déduire une relation simple entre les variations globales de température $\Delta T_1 = T_{1s} - T_{1e}$ et $\Delta T_2 = T_{2s} - T_{2e}$ en fonction des capacités $C_1$ et $C_2$.

---

## Partie II : Cas des co-courants

Dans cette partie, les deux fluides circulent dans le même sens, de l'abscisse $x = 0$ (entrée) vers $x = L$ (sortie).
On a donc $T_1(0) = T_{1e}$, $T_1(L) = T_{1s}$, $T_2(0) = T_{2e}$ et $T_2(L) = T_{2s}$.

4. **[Q4]** À l'aide des questions précédentes, montrer que la différence de température $\Delta T(x) = T_1(x) - T_2(x)$ obéit à une équation différentielle de la forme :
   $$\frac{\mathrm{d}(\Delta T)}{\mathrm{d}x} = - K \Delta T(x)$$
   où l'on exprimera la constante $K$ en fonction de $U$, $\mathcal{p}$, $C_1$ et $C_2$.
5. **[Q5]** Résoudre cette équation différentielle et déterminer l'expression de $\Delta T(x)$ en fonction de $x$, $U$, $S$, $C_1$ et $C_2$ (on introduira la surface totale $S = \mathcal{p}L$).
6. **[Q6]** En déduire l'expression du flux thermique total $\Phi$ échangé dans l'échangeur en fonction de $U$, $S$, des températures d'entrée et de sortie.

---

## CORRIGÉ PAS À PAS

### Partie I : Étude préliminaire et bilan global

* **[Q1] Bilan d'énergie élémentaire :**
  Pour la tranche de fluide chaud comprise entre $x$ et $x+\mathrm{d}x$, la variation d'enthalpie est due uniquement à l'échange thermique avec le fluide froid à travers la surface $\mathrm{d}S$. Le flux thermique cédé par le fluide chaud est $\mathrm{d}\Phi_1 = - C_1 \mathrm{d}T_1$ (avec $\mathrm{d}T_1 < 0$).
  De même, pour le fluide froid, le flux thermique reçu est $\mathrm{d}\Phi_2 = C_2 \mathrm{d}T_2$ (avec $\mathrm{d}T_2 > 0$).

* **[Q2] Expression de $\mathrm{d}\Phi$ :**
  Par définition du coefficient global d'échange $U$ :
  $$\mathrm{d}\Phi = U \left( T_1(x) - T_2(x) \right) \mathrm{d}S$$

* **[Q3] Bilan thermique global :**
  En régime permanent, il n'y a pas d'accumulation d'énergie dans l'échangeur. Le flux cédé par le fluide chaud est intégralement récupéré par le fluide froid (en supposant l'échangeur parfaitement adiabatique par rapport à l'extérieur) :
  $$\Phi = C_1 (T_{1e} - T_{1s}) = C_2 (T_{2s} - T_{2e})$$
  Soit encore : $- C_1 \Delta T_1 = C_2 \Delta T_2$.

---

### Partie II : Cas des co-courants

* **[Q4] Équation différentielle pour $\Delta T(x)$ :**
  On pose $\Delta T(x) = T_1(x) - T_2(x)$.
  En différenciant : $\frac{\mathrm{d}(\Delta T)}{\mathrm{d}x} = \frac{\mathrm{d}T_1}{\mathrm{d}x} - \frac{\mathrm{d}T_2}{\mathrm{d}x}$.
  D'après les bilans locaux :
  $$\frac{\mathrm{d}T_1}{\mathrm{d}x} = -\frac{1}{C_1} \frac{\mathrm{d}\Phi}{\mathrm{d}x} = -\frac{U \mathcal{p}}{C_1} (T_1 - T_2)$$
  $$\frac{\mathrm{d}T_2}{\mathrm{d}x} = +\frac{1}{C_2} \frac{\mathrm{d}\Phi}{\mathrm{d}x} = +\frac{U \mathcal{p}}{C_2} (T_1 - T_2)$$
  En injectant ces expressions :
  $$\frac{\mathrm{d}(\Delta T)}{\mathrm{d}x} = - U \mathcal{p} \left( \frac{1}{C_1} + \frac{1}{C_2} \right) \Delta T(x)$$
  On obtient bien l'équation demandée avec $K = U \mathcal{p} \left(\frac{1}{C_1} + \frac{1}{C_2}\right)$.

* **[Q5] Résolution :**
  L'intégration de cette équation différentielle linéaire homogène d'ordre 1 donne :
  $$\Delta T(x) = \Delta T(0) \exp(-Kx) = (T_{1e} - T_{2e}) \exp\left(- U \mathcal{p} \left(\frac{1}{C_1} + \frac{1}{C_2}\right) x \right)$$
  À la sortie ($x = L$, avec $\mathcal{p}L = S$) :
  $$\Delta T(L) = T_{1s} - T_{2s} = (T_{1e} - T_{2e}) \exp\left(- US \left(\frac{1}{C_1} + \frac{1}{C_2}\right) \right)$$

* **[Q6] Expression du flux thermique total $\Phi$ :**
  exprimons $T_{1s}$ et $T_{2s}$ à partir des bilans globaux :
  $T_{1s} = T_{1e} - \frac{\Phi}{C_1}$ et $T_{2s} = T_{2e} + \frac{\Phi}{C_2}$.
  En reportant dans l'expression de $\Delta T(L)$ :
  $$(T_{1e} - \frac{\Phi}{C_1}) - (T_{2e} + \frac{\Phi}{C_2}) = (T_{1e} - T_{2e}) \exp(-US(\frac{1}{C_1}+\frac{1}{C_2}))$$
  $$(T_{1e} - T_{2e}) - \Phi \left(\frac{1}{C_1} + \frac{1}{C_2}\right) = (T_{1e} - T_{2e}) \exp\(-US(\frac{1}{C_1}+\frac{1}{C_2}))$$
  Finalement, le flux thermique total s'exprime sous la forme :
  $$\Phi = \frac{T_{1e} - T_{2e}}{\frac{1}{C_1} + \frac{1}{C_2}} \left[ 1 - \exp\left( -US \left(\frac{1}{C_1} + \frac{1}{C_2}\right) \right) \right]$$

---

## Analyse critique et prospective (Hors-barème)

1. **Limite thermodynamique ($S \to +\infty$) :** 
   Lorsque la surface d'échange $S$ tend vers l'infini (échangeur infiniment long), le terme exponentiel tend vers $0$. Le flux thermique atteint une valeur limite :
   $$\Phi_{\max} = \frac{T_{1e} - T_{2e}}{\frac{1}{C_1} + \frac{1}{C_2}}$$
   Dans ce cas de co-courants, les températures de sortie des deux fluides tendent vers une même température d'équilibre $T_{eq}$ (avec $T_{2e} < T_{eq} < T_{1e}$). Il est donc **impossible** d'amener le fluide froid à une température supérieure à la température de sortie du fluide chaud.

2. **Comparaison avec les contre-courants (Perspectives) :**
   Dans un montage à contre-courants (les fluides entrent aux extrémités opposées), l'efficacité thermique est supérieure. En effet, le fluide froid sortant du côté de l'entrée du fluide chaud peut théoriquement atteindre une température proche de $T_{1e}$, ce que les co-courants prohibent. C'est pourquoi les configurations à contre-courants sont quasi-systématiquement privilégiées dans les applications industrielles exigeantes.