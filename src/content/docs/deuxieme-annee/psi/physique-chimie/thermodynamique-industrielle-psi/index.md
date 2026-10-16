---
title: 'Cours : Thermodynamique et échangeurs thermiques'
description: 'Fiche de synthèse officielle et démonstrations du programme CPGE PSI.'
---

## 📌 1. Définitions & Cadre d'étude

L'étude des systèmes ouverts et des échangeurs thermiques en filière PSI nécessite de manipuler les bilans énergétiques et massiques avec une rigueur mathématique absolue.

### 1.1. Système ouvert en régime permanent
Un système thermodynamique ouvert est délimité par une surface de contrôle $\Sigma$ fixe ou mobile à travers laquelle s'échangent de la masse, du travail et de la chaleur. 
Le régime est dit **permanent** (ou stationnaire) si toutes les variables intensives et extensives du système ainsi que les flux traversant la surface de contrôle sont indépendants du temps :
$$\forall M \in \Sigma \cup V, \quad \frac{\partial X}{\partial t} = 0$$

### 1.2. Grandeurs massiques et flux
Soit $\dot{m} = \frac{\mathrm{d}m}{\mathrm{d}t}$ le débit massique ($\text{kg}\cdot\text{s}^{-1}$) traversant une section de la surface de contrôle. Pour toute grandeur extensive $X$ associée à une grandeur massique $x = X/m$, le flux convectif de $X$ à travers la section est donné par $\dot{m}x$.
Le premier principe de la thermodynamique appliqué à un système ouvert en régime permanent s'exprime sous la forme globale :
$$\dot{U} = \dot{Q} + \dot{W}_{\text{ut}} + \sum_{\text{entrées}} \dot{m}_i \left( h_i + \frac{v_i^2}{2} + g z_i \right) - \sum_{\text{sorties}} \dot{m}_j \left( h_j + \frac{v_j^2}{2} + g z_j \right) = 0$$
Où $h$ désigne l'enthalpie massique ($\text{J}\cdot\text{kg}^{-1}$), $\dot{Q}$ le flux thermique ($\text{W}$) et $\dot{W}_{\text{ut}}$ la puissance utile (ou mécanique transmise par un arbre, hors forces de pression trans-frontières).

---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### 2.1. Équation de bilan d'enthalpie pour un échangeur à co-courant et contre-courant
Un échangeur thermique met en contact deux fluides (chaud $c$ et froid $f$) séparés par une paroi imperméable. Soit $x$ l'abscisse curviligne le long de l'échangeur, allant de $0$ à $L$.

Considérons une tranche élémentaire d'échangeur comprise entre $x$ et $x + \mathrm{d}x$. 
- Débit massique du fluide chaud : $\dot{m}_c$, capacité thermique massique : $c_{p,c}$.
- Débit massique du fluide froid : $\dot{m}_f$, capacité thermique massique : $c_{p,f}$.
- Flux thermiques de capacité : $C_c = \dot{m}_c c_{p,c}$ et $C_f = \dot{m}_f c_{p,f}$ ($\text{W}\cdot\text{K}^{-1}$).

Soit $\mathrm{d}S = p \, \mathrm{d}x$ l'aire de la surface d'échange de la tranche élémentaire (où $p$ est le périmètre mouillé). Le flux thermique élémentaire $\mathrm{d}\Phi$ cédé par le fluide chaud au fluide froid à travers $\mathrm{d}S$ s'exprime via le coefficient global d'échange $U$ ($\text{W}\cdot\text{m}^{-2}\cdot\text{K}^{-1}$) :
$$\mathrm{d}\Phi = U \, (T_c(x) - T_f(x)) \, \mathrm{d}S = U \, (T_c(x) - T_f(x)) \, p \, \mathrm{d}x$$

### 2.2. Démonstration de l'efficacité d'un échangeur (Méthode NUT)
Exprimons la conservation de l'énergie sur la tranche $\mathrm{d}x$ pour un **contre-courant** (les fluides circulent en sens opposés, soit $\dot{m}_c \mathrm{d}h_c = -\mathrm{d}\Phi$ et $\dot{m}_f \mathrm{d}h_f = -\mathrm{d}\Phi$ si l'on oriente l'axe dans le sens du fluide chaud) :
$$\begin{cases}
C_c \frac{\mathrm{d}T_c}{\mathrm{d}x} = -U p (T_c - T_f) \\
\pm C_f \frac{\mathrm{d}T_f}{\mathrm{d}x} = \mp U p (T_c - T_f)
\end{cases}$$

En introduisant la différence de température locale $\Delta T(x) = T_c(x) - T_f(x)$, on obtient une équation différentielle régissant l'évolution de l'écart thermique. 
Le nombre d'unités de transfert ($\text{NUT}$) et le rapport des capacités thermiques $R$ sont définis par :
$$\text{NUT} = \frac{U S}{C_{\min}} \quad \text{et} \quad R = \frac{C_{\min}}{C_{\max}}$$
Où $C_{\min} = \min(C_c, C_f)$ et $C_{\max} = \max(C_c, C_f)$.

L'efficacité $\varepsilon$ de l'échangeur est le rapport entre le flux thermique réellement échangé $\Phi$ et le flux thermique maximal théoriquement possible :
$$\varepsilon = \frac{\Phi}{\Phi_{\max}} = \frac{\Phi}{C_{\min}(T_{c,\text{ent}} - T_{f,\text{ent}})}$$

Pour un échangeur à **contre-courant**, l'intégration du système conduit à l'expression magistrale de l'efficacité :
$$\varepsilon = \frac{1 - \exp\left(-\text{NUT}(1 - R)\right)}{1 - R \exp\left(-\text{NUT}(1 - R)\right)} \quad (\text{si } R < 1)$$
En cas de $R = 0$ (changement d'état d'un des fluides, par exemple évaporation ou condensation), l'expression se simplifie en :
$$\varepsilon = 1 - \exp(-\text{NUT})$$

---

## 💡 3. Méthodes de calcul & Algorithmes

Pour résoudre un problème d'échangeur thermique en concours, la méthodologie rigoureuse s'articule ainsi :

1. **Bilan global (Premier Principe)** : 
   Écrire la conservation de l'enthalpie pour chaque flux supposé adiabatique avec l'extérieur :
   $$\Phi = C_c (T_{c,\text{ent}} - T_{c,\text{sor}}) = C_f (T_{f,\text{sor}} - T_{f,\text{ent}})$$
2. **Identification des paramètres caractéristiques** :
   Calculer $C_c$ et $C_f$, identifier $C_{\min}$ et $C_{\max}$, puis calculer le rapport $R = C_{\min}/C_{\max}$.
3. **Choix de l'outil de calcul** :
   - Si les quatre températures d'entrée et de sortie sont connues (ou déductibles), utiliser la méthode de la **moyenne logarithmique des écarts de température (MLET)** :
     $$\Phi = U S \Delta T_{\text{lm}} \quad \text{avec} \quad \Delta T_{\text{lm}} = \frac{\Delta T_1 - \Delta T_2}{\ln\left(\frac{\Delta T_1}{\Delta T_2}\right)}$$
   - Si des températures de sortie sont inconnues et qu'il faut dimensionner ou trouver un flux, utiliser la **méthode NUT-Efficacité** via l'abaque ou la formule analytique du cours.

---

## ⚠️ 4. Pièges classiques aux Concours

- **Confusion co-courant / contre-courant** : Ne jamais appliquer la formule de $\Delta T_{\text{lm}}$ ou de l'efficacité d'un contre-courant à un co-courant. Les expressions analytiques divergent fondamentalement.
- **Unités et homogénéité** : Veiller scrupuleusement à exprimer les débits en $\text{kg}\cdot\text{s}^{-1}$ et les capacités thermiques massiques en $\text{J}\cdot\text{kg}^{-1}\cdot\text{K}^{-1}$. Une erreur d'un facteur 1000 sur les débits massiques (ex: $\text{g}\cdot\text{s}^{-1}$ au lieu de $\text{kg}\cdot\text{s}^{-1}$) est éliminatoire.
- **Sens des flux thermiques** : Dans l'expression de $\Delta T_{\text{lm}}$, veillez à ce que les différences $\Delta T_1$ et $\Delta T_2$ soient prises aux mêmes extrémités géométriques de l'échangeur et qu'elles restent strictement positives ($\Delta T > 0$).
- **Hypothèse $U$ constant** : $U$ dépend des coefficients de convective locaux (qui dépendent eux-mêmes de la vitesse des fluides via les nombres de Reynolds et Nusselt). Sauf mention explicitement contraire du texte, $U$ est supposé constant, mais l'examinateur appréciera une mention critique de cette hypothèse.