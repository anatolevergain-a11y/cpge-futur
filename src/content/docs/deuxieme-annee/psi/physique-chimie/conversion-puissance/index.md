---
title: 'Cours : Conversion de puissance'
description: 'Synthèse de cours, théorèmes et démonstrations.'
---

# Fiche de Cours : Conversion de Puissance (PSI)

---

## 1. Introduction et Définitions Fondamentales

La conversion de puissance en électrotechnique et en électronique de puissance étudie les transferts d'énergie entre une source et une charge, en modifiant la forme (continue ou alternative), l'amplitude ou la fréquence des grandeurs électriques ($\text{V}$ et $\text{I}$).

### A. Représentation des convertisseurs et conventions
Un convertisseur statique est un système interconnectant des sources d'énergie. On distingue deux types fondamentaux de sources :
*   **Source de Tension (ST) :** Impédance interne faible (idéalement nulle). Sa tension est imposée par l'amont, le courant qu'elle débite dépend de la charge. *Règle absolue : Ne jamais court-circuiter une source de tension.*
*   **Source de Courant (SC) :** Impédance interne élevée (idéalement infinie). Son courant est imposé, la tension à ses bornes dépend de la charge. *Règle absolue : Ne jamais ouvrir une source de courant.*

### B. Puissance en régime harmonique et périodique
Soit une tension $v(t) = V_{\max} \cos(\omega t)$ et un courant $i(t) = I_{\max} \cos(\omega t - \varphi)$.
*   **Valeur efficace :** $X = \sqrt{\frac{1}{T} \int_0^T x^2(t) \, \text{dt}}$. Pour un signal sinusoïdal, $V = \frac{V_{\max}}{\sqrt{2}}$.
*   **Puissance active ($P$) :** Moyenne temporelle de la puissance instantanée $p(t) = v(t)i(t)$. 
    $$P = V I \cos(\varphi)$$
*   **Puissance réactive ($Q$) :** Liée au stockage temporaire d'énergie dans les éléments réactifs ($L$ et $C$).
    $$Q = V I \sin(\varphi)$$
*   **Puissance apparente ($S$) :** $S = V I = \sqrt{P^2 + Q^2}$.
*   **Facteur de puissance ($\text{FP}$) :** $\text{FP} = \frac{P}{S} = \cos(\varphi)$ en régime sinusoïdal pur.

---

## 2. Les Différents Types de Conversion

On classe les convertisseurs selon la nature de l'entrée et de la sortie :

1.  **Continu $\rightarrow$ Continu :** Hacheurs (DC-DC).
2.  **Alternatif $\rightarrow$ Continu :** Redresseurs (AC-DC).
3.  **Continu $\rightarrow$ Alternatif :** Onduleurs (DC-AC).
4.  **Alternatif $\rightarrow$ Alternatif :** Gradateurs ou convertisseurs de fréquence (AC-AC).

---

## 3. Étude des Principaux Convertisseurs

### A. Le Hacheur Série (Abaisseur / *Buck*)
Le hacheur série permet d'abaisser une tension continue $E$ en une tension continue réglable $<v_s>$.

*   **Schéma de principe :** Un interrupteur commandé $K$ (transistor $\text{MOS}$ ou $\text{IGBT}$) associé à une diode de roue libre $D$ (en anti-parallèle par rapport à la charge inductive).
*   **Relations fondamentales (en conduction continue) :**
    Soit $\alpha = \frac{t_{\text{on}}}{T}$ le rapport cyclique ($\alpha \in [0, 1]$).
    La tension moyenne de sortie vaut :
    $$\langle v_s \rangle = \alpha E$$
*   **Ondulation de courant :** Si la charge est inductive ($R-L$), le courant $i(t)$ est lissé. L'ondulation maximale $\Delta i$ s'exprime par :
    $$\Delta i \approx \frac{E \alpha (1-\alpha)}{L f}$$
    où $f = \frac{1}{T}$ est la fréquence de découpage.

### B. Le Redresseur non contrôlé (Pont de Graetz monophasé)
Il convertit une tension alternative sinusoïdale en une tension unidirectionnelle.

*   **Composants :** 4 diodes montées en pont.
*   **Débit sur charge inductive (courant $i(t)$ supposé parfaitement lissé $I_0$) :**
    La tension redressée a pour valeur moyenne :
    $$\langle v_s \rangle = \frac{2 V_{\max}}{\pi}$$
    où $V_{\max}$ est la valeur de crête de la tension d'entrée $v(t) = V_{\max} \sin(\omega t)$.

### C. L'Ondulateur autonome
Il convertit une source de tension continue en un système de tensions alternatives (souvent triphasées pour l'industrie).
*   **Commande par MЛО (Modulation de Largeur d'Impulsion - PWM) :** On compare un signal modulant (sinusoïdal à la fréquence désirée $f$) à une porteuse triangulaire (haute fréquence $f_d$). Les intersections déterminent les instants de commutation des interrupteurs. Cela permet de maîtriser la fréquence fondamentale et l'amplitude de la tension de sortie tout en rejetant les harmoniques vers les hautes fréquences.

---

## 4. Rendement et Pertes dans les Convertisseurs

Un convertisseur réel dissipe de l'énergie. Le bilan de puissance s'écrit :
$$P_{\text{entrée}} = P_{\text{sortie}} + P_{\text{pertes}}$$

Le **rendement** $\eta$ est défini par :
$$\eta = \frac{P_{\text{sortie}}}{P_{\text{entrée}}} = \frac{P_{\text{sortie}}}{P_{\text{sortie}} + P_{\text{pertes}}}$$

*   **Pertes par conduction :** Liées à la résistance à l'état passant des interrupteurs ($R_{\text{DSon}}$ pour un $\text{MOS}$) ou à leur chute de tension directe ($V_d$ pour une diode). $P_{\text{cond}} = V_{\text{on}} I_{\text{moy}} + R_{\text{on}} I_{\text{eff}}^2$.
*   **Pertes par commutation :** Liées au temps de transition (recouvrement des tensions et courants) lors de l'ouverture et de la fermeture des interrupteurs. $P_{\text{comm}} = f \times (E_{\text{allumage}} + E_{\text{extinction}})$. Ces pertes augmentent linéairement avec la fréquence de découpage $f$.

---

## 5. Méthodes et Savoir-Faire (PSI)

1.  **Calcul de valeurs moyennes :** Toujours utiliser la définition mathématique sur une période $T$ :
    $$\langle x \rangle = \frac{1}{T} \int_0^T x(t) \, \text{dt}$$
Astuce: * Exploiter les symétries et périodicités pour réduire les bornes d'intégration.
2.  **Utilisation de l'approximation des régimes permanents :** En régime établi, l'variation d'une grandeur d'état sur une période est nulle. 
    *   Pour une bobine : $\langle v_L \rangle = 0 \implies \int_0^T v_L(t) \, \text{dt} = 0$ (Loi des volts-secondes).
    *   Pour un condensateur : $\langle i_C \rangle = 0 \implies \int_0^T i_C(t) \, \text{dt} = 0$ (Loi des ampères-secondes).
3.  **Dimensionnement :** Savoir exprimer l'ondulation d'un courant ou d'une tension pour dimensionner un filtre ($L$ ou $C$) garantissant le respect d'un cahier des charges.

---

## 6. Pièges à Éviter (Attention aux erreurs classiques)

*   ❌ **Confondre valeur efficace et valeur moyenne** pour un signal quelconque. Pour un signal sinusoïdal pur redressé par un pont parfait, $\langle v \rangle = \frac{2V_{\max}}{\pi}$, mais $V_{\text{eff}} = \frac{V_{\max}}{\sqrt{2}}$ (la valeur efficace ne change pas lors d'un redressement parfait).
*   ❌ **Oublier la diode de roue libre** dans un hacheur alimentant une charge inductive. Sans elle, l'ouverture de l'interrupteur $K$ provoquerait une surtension destructrice aux bornes du circuit (car $u = L \frac{\text{di}}{\text{dt}}$ et $\frac{\text{di}}{\text{dt}} \rightarrow -\infty$).
*   ❌ **Négliger les harmoniques :** En régime non sinusoïdal, la puissance apparente $S$ ne se calcule pas seulement via $P$ et $Q$ fondamentaux, il faut intégrer la puissance déformante $D$ : $S^2 = P^2 + Q^2 + D^2$.