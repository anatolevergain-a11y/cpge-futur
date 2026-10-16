---
title: 'Cours : Électrocinétique linéaire'
description: 'Fiche de synthèse officielle et démonstrations du programme CPGE PCSI.'
---

## 📌 1. Définitions & Cadre d'étude

L'électrocinétique étudie la circulation des charges électriques dans les conducteurs filiformes. Le cadre fondamental de la filière PCSI repose sur l'**approximation des régimes quasi-stationnaires (ARQS)**.

### A. L'Approximation des Régimes Quasi-Stationnaires (ARQS)
L'ARQS est valide si le temps caractéristique du système $\tau$ (temps de propagation des ondes électromagnétiques sur la dimension caractéristique $d$ du circuit) est très inférieur à la période caractéristique $T$ des signaux temporels étudiés, soit :
$$\tau = \frac{d}{c} \ll T \iff d \ll \lambda$$
où $c$ est la célérité de la lumière dans le vide et $\lambda$ la longueur d'onde associée au signal. 

**Conséquences mathématiques et physiques :**
1. **Conservation locale de la charge (Invariance de l'intensité) :** Le courant électrique est à flux conservatif dans un fil conducteur : $\text{div}(\vec{j}) = 0 \implies \frac{\partial \rho}{\partial t} = 0$ à l'échelle des conducteurs. En tout nœud, la somme algébrique des intensités est nulle (Loi des nœuds de Kirchhoff).
2. **Champ électrostatique instantané :** Le champ électrique $\vec{E}$ derive d'un potentiel scalaire $V$ selon $\vec{E} = -\text{grad}(V)$, ce qui permet de définir la tension $U_{AB} = V_A - V_B$ indépendamment du chemin suivi à l'extérieur du conducteur, et la circulation du champ électrique le long d'un contour fermé est nulle (Loi des mailles de Kirchhoff).

### B. Modèles de composants linéaires idéaux
Un dipôle est caractérisé par sa relation tension-courant $(u(t), i(t))$.

* **Résistance idéale :** $u(t) = R \, i(t)$ avec $R > 0$ en convention récepteur. (Unité : $\text{ohm}$, $\Omega$).
* **Condensateur idéal :** $i(t) = C \frac{\text{d}u}{\text{d}t}$ en convention récepteur. (Unité : $\text{farad}$, $\text{F}$).
* **Bobine idéale (inductance pure) :** $u(t) = L \frac{\text{d}i}{\text{d}t}$ en convention récepteur. (Unité : $\text{henry}$, $\text{H}$).
* **Sources idéales :**
  * Source de tension idéale : $u(t) = E(t)$ quel que soit $i(t)$.
  * Source de courant idéale : $i(t) = I_0(t)$ quel que soit $u(t)$.

---

## 📐 2. Théorèmes fondamentaux & Demonstrations clés

### A. Théorème de Thévenin
Tout dipôle linéaire actif $D$ interconnecté à l'extérieur par deux bornes $A$ et $B$ est électriquement équivalent, pour l'extérieur, à une association en série d'une source idéale de tension de force électromotrice $E_{Th}$ et d'une résistance interne $R_{Th}$.

* **$E_{Th}$** est la tension à vide aux bornes $A$ et $B$ : $E_{Th} = U_{AB,\text{vide}}$.
* **$R_{Th}$** est la résistance équivalente vue des bornes $A$ et $B$ lorsque toutes les sources indépendantes sont "éteintes" (sources de tension court-circuitées, sources de courant ouvertes).

### B. Théorème de Norton
Tout dipôle linéaire actif $D$ connecté entre deux bornes $A$ et $B$ est électriquement équivalent à une association en parallèle d'une source idéale de courant d'intensité $I_N$ et d'une résistance interne $R_N$.

* **$I_N$** est le courant de court-circuit circulant de $A$ vers $B$ lorsque ces bornes sont reliées par un fil idéal : $I_N = I_{AB,\text{cc}}$.
* **$R_N$** est la résistance équivalente vue des bornes $A$ et $B$ avec les sources indépendantes éteintes ($R_N = R_{Th}$).

### C. Démonstration de l'équivalence Thévenin - Norton (Théorème de Millman)
Considérons un nœud $A$ relié à $n$ branches comportant chacune une source de tension idéale $E_k$ en série avec une résistance $R_k$. Soit $V_A$ le potentiel du nœud $A$ par rapport à une référence (masse) fixée à $0\text{ }\text{V}$.

La loi des nœuds en $A$ s'écrit :
$$\sum_{k=1}^{n} I_k = 0$$
En utilisant la loi d'Ohm dans chaque branche (en convention récepteur par rapport au nœud, soit un courant quittant le nœud si $V_A > E_k$) :
$$I_k = \frac{V_A - E_k}{R_k}$$
En injectant cette expression dans la loi des nœuds :
$$\sum_{k=1}^{n} \frac{V_A - E_k}{R_k} = 0 \implies V_A \sum_{k=1}^{n} \frac{1}{R_k} = \sum_{k=1}^{n} \frac{E_k}{R_k}$$
On obtient ainsi le **théorème de Millman** :
$$V_A = \frac{\sum_{k=1}^{n} \frac{E_k}{R_k}}{\sum_{k=1}^{n} \frac{1}{R_k}}$$

Cette expression permet d'identifier immédiatement le modèle de Thévenin équivalent du réseau vu depuis le nœud $A$ et une masse de référence :
$$E_{Th} = V_A \quad \text{et} \quad R_{Th} = \left( \sum_{k=1}^{n} \frac{1}{R_k} \right)^{-1}$$

---

## 💡 3. Méthodes de calcul & Algorithmes

### A. Analyse systématique d'un circuit linéaire d'ordre 1 ou 2
1. **Étape 1 :** Identifier le nombre de dipôles stockant de l'énergie (condensateurs $C$, bobines $L$). Leur nombre détermine l'ordre de l'équation différentielle.
2. **Étape 2 :** Établir les lois de Kirchhoff (nœuds, mailles) et les relations constitutives des dipôles.
3. **Étape 3 :** Éliminer les variables intermédiaires pour obtenir une unique équation différentielle linéaire à coefficients constants d'ordre $n$ portant sur la grandeur d'intérêt $s(t)$ (tension ou courant) :
   $$\frac{\text{d}^2 s}{\text{d}t^2} + \frac{\omega_0}{Q} \frac{\text{d}s}{\text{d}t} + \omega_0^2 s = f(t)$$
4. **Étape 4 :** Résoudre l'équation homogène (régime libre) puis trouver une solution particulière liée au second membre $f(t)$ (régime forcé).
5. **Étape 5 :** Appliquer les **conditions initiales de continuité** :
   * La tension aux bornes d'un condensateur $u_C(t)$ est continue (car $i_C = C \frac{\text{d}u_C}{\text{d}t}$ ne peut être infinie).
   * L'intensité traversant une bobine $i_L(t)$ est continue (car $u_L = L \frac{\text{d}i_L}{\text{d}t}$ ne peut être infinie).

### B. Utilisation de l'analyse complexe (Régime Sinusoïdal Forcé - RSF)
En régime sinusoïdal de pulsation $\omega$, toute grandeur réelle $x(t) = X_M \cos(\omega t + \varphi)$ est associée à une grandeur complexe sous forme phasorielle $\underline{X} = X_M e^{j\varphi}$, telle que $x(t) = \text{Re}\left(\underline{X} e^{j\omega t}\right)$.

Les impédances complexes $\underline{Z}$ des dipôles linéaires passifs s'expriment ainsi :
* Résistance : $\underline{Z}_R = R$
* Condensateur : $\underline{Z}_C = \frac{1}{j \mathcal{C} \omega} = - \frac{j}{\mathcal{C} \omega}$
* Bobine : $\underline{Z}_L = j L \omega$

Toutes les lois fondamentales de l'électrocinétique (diviseur de tension, diviseur de courant, Thévenin, Norton, Millman) s'appliquent strictement à l'identique dans le domaine complexe avec des impédances au lieu de résistances.

---

## ⚠️ 4. Pièges classiques aux Concours

1. **Oubli des conventions :** Ne pas préciser explicitement la convention (récepteur ou générateur) sur le schéma avant d'écrire les équations conduit quasi-systématiquement à des erreurs de signes.
2. **Discontinuités physiques illicites :** Affirmer qu'une tension aux bornes d'une bobine ou qu'un courant traversant un condensateur est continu(e). Seules les variables d'état intégrales ($u_C$ et $i_L$) sont continues.
3. **Erreur d'homogénéité sur les équations caractéristiques :** En régime oscillant amorti, confondre le facteur de qualité $Q$ et la pulsation propre $\omega_0$. Vérifiez toujours que les termes $\frac{1}{\tau}$ ou $\frac{\omega_0}{Q}$ sont homogènes à l'inverse d'un temps ($\text{s}^{-1}$).
4. **Utilisation abusive du théorème de Millman :** Appliquer Millman sur des nœuds non indépendants ou oublier qu'une source de tension idéale seule en parallèle impose le potentiel, rendant le calcul de la somme des conductances caduc.