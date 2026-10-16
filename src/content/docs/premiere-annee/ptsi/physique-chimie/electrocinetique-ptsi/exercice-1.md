---
title: 'Exercice 1 : Loi d Ohm et lois de Kirchhoff'
description: 'Problème d entraînement type concours pour PTSI.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Les réseaux électriques complexes rencontrés en électronique de puissance ou en électrotechnique nécessitent une maîtrise rigoureuse des lois fondamentales de l'électrocinétique. L'objectif de ce problème est l'étude d'un circuit pont schoélisé, comportant des sources réelles de tension et de courant, en régime permanent continu. 

On considère le circuit de la **Figure 1**, alimenté par une source idéale de tension de force électromotrice $E$ et une source idéale de courant $I_0$. Le réseau comporte quatre résistors de résistance $R$ et une résistance variable $R_c$ (dite de charge). Le système est référencé par rapport à une masse (potentiel nul en un nœud de référence).

Données numériques et paramétriques :
* $E = 12\text{ V}$
* $I_0 = 50\text{ mA}$
* $R = 100\,\Omega$
* $R_c$ variable entre $0\,\Omega$ et $500\,\Omega$.

---

### ❓ Questions progressives (incluant une analyse critique du modèle)

1. **Analyse topologique du circuit :** Déterminer le nombre de nœuds $N$ et de branches $B$ du circuit. En déduire le nombre d'équations indépendantes nécessaires issues des lois de Kirchhoff.
2. **Application des lois de Kirchhoff :** Écrire la loi des nœuds (LKC) en chaque nœud pertinent et la loi des mailles (LKM) permettant de caractériser le comportement du réseau.
3. **Étude par la méthode des potentiels aux nœuds :** 
   - Choisir un nœud de référence (masse, potentiel $V = 0\text{ V}$).
   - Exprimer le potentiel des autres nœuds en fonction des paramètres du circuit.
   - En déduire l'expression générale du courant $I_c$ traversant la charge $R_c$.
4. **Application numérique et étude de la charge :** Calculer la puissance $P_c$ dissipée dans la charge $R_c$ pour $R_c = R$ et tracer l'allure de $P_c(R_c)$.
5. **Analyse critique du modèle :** Les sources réelles sont modélisées ici par des générateurs idéaux. Quel est l'impact de l'ajout d'une résistance interne $r$ en série avec la source de tension $E$ sur le comportement asymptotique du circuit lorsque $R_c \to \infty$ ?

---

### 💡 Pistes & Indications méthodologiques

* **Question 1 & 2 :** Pensez à la formule d'Euler pour les graphes plans $B = N + L - 1$ où $L$ est le nombre de mailles indépendantes.
* **Question 3 :** La méthode des potentiels aux nœuds (théorème de Millman) est particulièrement efficace pour réduire le nombre d'équations à résoudre.
* **Question 4 :** Pour l'étude de la puissance $P_c = R_c I_c^2$, déterminez s'il existe une valeur de $R_c$ maximisant cette puissance (théorème d'adaptation d'impédance).
* **Question 5 :** Analysez la dimension des grandeurs et l'effet d'un dépassement de modèle (non-linéarités, échauffement Joule).

---

### 📋 Corrigé détaillé pas à pas

#### 1. Analyse topologique du circuit
Soit $N$ le nombre de nœuds et $B$ le nombre de branches. Le circuit comporte $N = 4$ nœuds principaux et $B = 6$ branches (incluant les générateurs et les résistors).
* Le nombre d'équations indépendantes fournies par la loi des nœuds est $N - 1 = 3$.
* Le nombre d'équations indépendantes par la loi des mailles est $L = B - (N - 1) = 6 - 3 = 3$.

#### 2. Application des lois de Kirchhoff
Notons $A, B, C, D$ les nœuds du circuit. 
* En appliquant la **Loi des Nœuds (LKC)** au nœud $A$ (en orientant les courants sortants) :
  $$\sum_{\text{sortants}} I = 0 \implies \frac{V_A - V_B}{R} + \frac{V_A - V_C}{R} - I_0 = 0$$
* En appliquant la **Loi des Mailles (LKM)**, toute maille fermée vérifie $\sum_{\text{maille}} U_i = 0$. Par exemple, pour la maille contenant le générateur $E$ et les résistances de branches adjacentes :
  $$E - R I_1 - R I_2 = 0$$

#### 3. Méthode des potentiels aux nœuds
Fixons le potentiel du nœud de référence $D$ à $V_D = 0\text{ V}$. 
Soit $V_A$ le potentiel du nœud amont de la charge $R_c$. En appliquant le théorème de Millman au nœud $A$ interconnectant la source de courant $I_0$, la branche de tension $E$ (de résistance équivalente $R$) et la charge $R_c$ :

$$V_A = \frac{\frac{E}{R} + I_0}{\frac{1}{R} + \frac{1}{R} + \frac{1}{R_c}} = \frac{\frac{E}{R} + I_0}{\frac{2}{R} + \frac{1}{R_c}}$$

Le courant $I_c$ traversant la charge $R_c$ (reliée entre le nœud $A$ et la masse $D$) s'exprime simplement par la loi d'Ohm :
$$I_c = \frac{V_A}{R_c} = \frac{\frac{E}{R} + I_0}{R_c \left(\frac{2}{R} + \frac{1}{R_c}\right)} = \frac{E + R I_0}{2 R_c + R}$$

Vérification dimensionnelle : $[E] = \text{V}$, $[R I_0] = \Omega \times \text{A} = \text{V}$, $[2 R_c + R] = \Omega$. Le rapport donne bien des ampères ($\text{A}$). L'expression est homogène.

#### 4. Application numérique et étude de la charge
Pour $R_c = R = 100\,\Omega$ :
$$I_c = \frac{12 + 100 \times 50 \times 10^{-3}}{2(100) + 100} = \frac{12 + 5}{300} = \frac{17}{300} \approx 56{,}7\text{ mA}$$

La puissance électrique dissipée dans la charge est :
$$P_c = R_c I_c^2 = R_c \left( \frac{E + R I_0}{2 R_c + R} \right)^2$$

Pour trouver la condition de puissance maximale, dérivons $P_c$ par rapport à $R_c$ et annulons la dérivée :
$$\frac{\mathrm{d}P_c}{\mathrm{d}R_c} = (E + R I_0)^2 \frac{(2 R_c + R)^2 - R_c \cdot 2(2 R_c + R)(2)}{(2 R_c + R)^4} = 0$$
$$\implies 2 R_c + R - 4 R_c = 0 \implies R_c = \frac{R}{2}$$
La puissance maximale est donc délivrée pour $R_c = 50\,\Omega$ (application du théorème de Thévenin/Adaptation d'impédance).

#### 5. Analyse critique du modèle
Si l'on considère une résistance interne $r$ non nulle en série avec le générateur de tension $E$, le potentiel $V_A$ devient :
$$V_A = \frac{\frac{E}{R+r} + I_0}{\frac{1}{R+r} + \frac{1}{R} + \frac{1}{R_c}}$$
* **Limite $R_c \to \infty$ (circuit ouvert) :** Le modèle idéal ($r=0$) conduit à une tension de circuit ouvert constante. L'ajout de $r$ modifie l'ordonnée à l'origine de la caractéristique externe de Thévenin ($U_{th} = \frac{R}{R+r}E$), traduisant une chute de tension interne due au courant de polarisation.
* **Limites du modèle :** Les composants réels présentent des limites thermiques ($P > P_{\max} \implies \text{destruction par effet Joule}$) et des non-linéarités (phénomènes d'avalanche ou de saturation pour les semi-conducteurs modélisant les sources). Le modèle linéaire par morceaux reste donc valide uniquement dans un domaine restreint de tension et de courant.