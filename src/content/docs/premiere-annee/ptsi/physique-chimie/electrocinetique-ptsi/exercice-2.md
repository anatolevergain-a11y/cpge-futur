---
title: 'Exercice 2 : Circuits RC et RL'
description: 'Problème d entraînement type concours pour PTSI.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Les régimes transitoires en électrocinétique jouent un rôle fondamental dans la compréhension du comportement fréquentiel et temporel des systèmes physiques. Dans ce problème, inspiré des épreuves de concours de la filière PTSI, on s'intéresse à l'association de composants linéaires passifs soumis à des excitations en échelons de tension. L'objectif est d'étudier l'établissement et la relaxation des grandeurs électriques dans un circuit mixte contenant à la fois des effets capacitifs et inductifs, puis d'analyser l'influence de la résistance interne des générateurs réels.

On considère le circuit de la figure ci-dessous (modélisé par l'énoncé textuel) :
- Un générateur idéal de tension délivrant un échelon de tension de force électromotrice $E$ à l'instant $t = 0$.
- Une résistance de protection $R_1$.
- Une branche capacitive constituée d'un condensateur parfait de capacité $C$ initialement déchargé.
- Une branche inductive constituée d'une bobine réelle modélisée par une inductance $L$ et une résistance série $r$, le tout traversé par un courant nul pour $t < 0$.

---

### ❓ Questions progressives (incluant une analyse critique du modèle)

1. **Établissement de l'équation différentielle :** 
   Établir l'équation différentielle vérifiée par la tension aux bornes du condensateur $u_C(t)$ pour $t > 0$. On exprimera les coefficients en fonction de $E$, $R_1$, $r$, $L$ et $C$.

2. **Analyse dimensionnelle :** 
   Vérifier l'homogénéité de l'équation obtenue à la question précédente à l'aide d'une analyse dimensionnelle. Préciser les grandeurs caractéristiques du système (temps caractéristiques).

3. **Résolution analytique :** 
   On se place dans le cas particulier où la résistance $R_1$ et les paramètres $L, C, r$ sont tels que le régime est apériodique (ou pseudo-périodique). Résoudre l'équation différentielle pour $u_C(t)$ avec les conditions initiales adaptées.

4. **Étude du courant dans la branche inductive :** 
   En déduire l'expression de l'intensité du courant $i_L(t)$ traversant la bobine. 

5. **Analyse critique du modèle :** 
   Lors de l'établissement de l'équation, on suppose le condensateur initialement déchargé et la bobine sans énergie initiale. Que se passerait-il si l'on ouvrait brutalement l'interrupteur après un régime permanent établi ? Discuter la validité du modèle linéaire face aux surtensions réelles.

---

### 💡 Pistes & Indications méthodologiques

- **Q1 :** Utiliser la loi des nœuds et la loi des mailles. Exprimez les courants en fonction des tensions à l'aide des caractéristiques des composants : $i_C = C \frac{\mathrm{d}u_C}{\mathrm{d}t}$ et $u_L = L \frac{\mathrm{d}i_L}{\mathrm{d}t} + r i_L$.
- **Q2 :** Rappeler les dimensions des grandeurs fondamentales $[U], [T], [I]$. Attention à la dimension de la résistance et de l'inductance ($[L] = [\text{U}]\cdot[\text{T}]\cdot[\text{I}]^{-1}$).
- **Q3 :** Résoudre l'équation linéaire du second ordre à coefficients constants en posant l'équation caractéristique associée. Discuter selon le signe du discriminant $\Delta$.
- **Q4 :** Exploiter la relation entre la tension $u_C(t)$ et le courant dans la branche capacitive, puis utiliser la conservation du flux ou la loi des nœuds pour obtenir $i_L(t)$.
- **Q5 :** Pour l'analyse critique, considérer l'énergie magnétique stockée dans la bobine $E_m = \frac{1}{2}L i^2$ et son devenir lors d'une ouverture brusque ($\frac{\mathrm{d}i}{\mathrm{d}t} \to -\infty$).

---

### 📋 Corrigé détaillé pas à pas

#### 1. Établissement de l'équation différentielle
Soit $i(t)$ le courant total débité par le générateur, qui se sépare en un courant $i_C(t)$ traversant la branche du condensateur et un courant $i_L(t)$ traversant la branche de la bobine.
D'après la loi des nœuds :
$$i(t) = i_C(t) + i_L(t)$$

exprimons les différentes tensions du circuit en posant la maille principale (générateur - résistance $R_1$ - parallèle $(C) \parallel (L,r)$) :
$$E = R_1 i(t) + u_C(t)$$
où $u_C(t)$ est la tension aux bornes du condensateur. Comme les deux branches sont en parallèle, la tension aux bornes de la branche inductive est également $u_C(t)$. Ainsi :
$$u_C(t) = L \frac{\mathrm{d}i_L}{\mathrm{d}t} + r i_L(t)$$

De plus, le courant dans le condensateur s'écrit :
$$i_C(t) = C \frac{\mathrm{d}u_C}{\mathrm{d}t}$$

En combinant ces relations, on exprime $i_L(t)$ :
$$i_L(t) = i(t) - i_C(t) = \frac{E - u_C(t)}{R_1} - C \frac{\mathrm{d}u_C}{\mathrm{d}t}$$

Dérivons cette expression par rapport au temps pour l'injecter dans l'équation de la bobine :
$$\frac{\mathrm{d}i_L}{\mathrm{d}t} = -\frac{1}{R_1}\frac{\mathrm{d}u_C}{\mathrm{d}t} - C \frac{\mathrm{d}^2u_C}{\mathrm{d}t^2}$$

Substituons $i_L$ et $\frac{\mathrm{d}i_L}{\mathrm{d}t}$ dans l'équation de la bobine :
$$u_C = L \left( -\frac{1}{R_1}\frac{\mathrm{d}u_C}{\mathrm{d}t} - C \frac{\mathrm{d}^2u_C}{\mathrm{d}t^2} \right) + r \left( \frac{E - u_C}{R_1} - C \frac{\mathrm{d}u_C}{\mathrm{d}t} \right)$$

En réorganisant les termes par ordre croissant de dérivation, on obtient l'équation différentielle du second ordre :
$$\frac{\mathrm{d}^2u_C}{\mathrm{d}t^2} + \left( \frac{r}{L} + \frac{1}{R_1 C} \right) \frac{\mathrm{d}u_C}{\mathrm{d}t} + \frac{R_1 + r}{R_1 L C} u_C = \frac{r}{R_1 L C} E$$

*(Note : Si la résistance interne $r$ de la bobine est négligeable $r \to 0$, l'équation se simplifie considérablement).*

#### 2. Analyse dimensionnelle
Vérifions l'homogénéité des termes de l'équation différentielle. 
- La tension $u_C$ a pour dimension $[U]$.
- Le premier terme $\frac{\mathrm{d}^2u_C}{\mathrm{d}t^2}$ est homogène à $[U] \cdot [\text{T}]^{-2}$.
- Le coefficient devant $\frac{\mathrm{d}u_C}{\mathrm{d}t}$ doit donc être homogène à $[\text{T}]^{-1}$. Vérifions :
  $$\left[ \frac{r}{L} \right] = \frac{[\text{U}][\text{I}]^{-1}}{[\text{U}][\text{T}][\text{I}]^{-1}} = [\text{T}]^{-1} \quad \text{et} \quad \left[ \frac{1}{R_1 C} \right] = \frac{1}{\left(\frac{[\text{U}]}{[\text{I}]}\right) \left(\frac{[\text{I}][\text{T}]}{[\text{U}]}\right)} = [\text{T}]^{-1}$$
  L'homogénéité est vérifiée.
- Le terme constant $\omega_0^2 = \frac{R_1 + r}{R_1 L C}$ est homogène à $[\text{T}]^{-2}$, ce qui définit une pulsation propre caractéristique du système.

#### 3. Résolution analytique
L'équation différentielle s'écrit sous la forme canonique :
$$\frac{\mathrm{d}^2u_C}{\mathrm{d}t^2} + \frac{\omega_0}{Q} \frac{\mathrm{d}u_C}{\mathrm{d}t} + \omega_0^2 u_C = A$$
avec $\omega_0 = \sqrt{\frac{R_1 + r}{R_1 L C}}$, $\frac{\omega_0}{Q} = \frac{r}{L} + \frac{1}{R_1 C}$ et $A = \frac{r}{R_1 L C} E$.

La solution générale est la somme de la solution générale de l'équation sans second membre et d'une solution particulière.
- **Solution particulière :** En régime permanent ($t \to +\infty$), les dérivées s'annulent :
  $$u_{C,\text{p}} = \frac{A}{\omega_0^2} = \frac{r}{R_1 + r} E$$
- **Solution sans second membre :** On pose l'équation caractéristique :
  $$r^2 + \frac{\omega_0}{Q} r + \omega_0^2 = 0$$
  Supposons le régime pseudo-périodique ($Q > 1/2$, soit un discriminant $\Delta < 0$). Les racines sont complexes conjuguées : $r_\pm = -\sigma \pm j \omega_D$, avec $\sigma = \frac{\omega_0}{2Q}$ et $\omega_D = \omega_0 \sqrt{1 - \frac{1}{4Q^2}}$.

La solution générale prend la forme :
$$u_C(t) = e^{-\sigma t} \left( A_1 \cos(\omega_D t) + A_2 \sin(\omega_D t) \right) + \frac{r}{R_1 + r} E$$

**Conditions initiales :**
1. À $t = 0^+$, la tension aux bornes du condensateur est continue : $u_C(0^+) = u_C(0^-) = 0$ (car le condensateur est déchargé).
2. À $t = 0^+$, l'intensité dans la bobine est continue : $i_L(0^+) = i_L(0^-) = 0$. 
   Or, on a établi que $i_L(t) = \frac{E - u_C(t)}{R_1} - C \frac{\mathrm{d}u_C}{\mathrm{d}t}$. En $t = 0^+$ :
   $$i_L(0^^+) = \frac{E - 0}{R_1} - C \left. \frac{\mathrm{d}u_C}{\mathrm{d}t} \right|_{t=0^+} = 0 \implies \left. \frac{\mathrm{d}u_C}{\mathrm{d}t} \right|_{t=0^+} = \frac{E}{R_1 C}$$

En appliquant ces conditions à la solution :
- $u_C(0) = 0 \implies A_1 = -\frac{r}{R_1 + r} E$
- $\left. \frac{\mathrm{d}u_C}{\mathrm{d}t} \right|_{t=0} = -\sigma A_1 + \omega_D A_2 = \frac{E}{R_1 C} \implies A_2 = \frac{1}{\omega_D} \left( \frac{E}{R_1 C} + \sigma A_1 \right)$

#### 4. Étude du courant dans la branche inductive
Une fois $u_C(t)$ déterminé, le courant $i_L(t)$ s'obtient directement par application de la relation établie à la question 1 :
$$i_L(t) = \frac{E - u_C(t)}{R_1} - C \frac{\mathrm{d}u_C}{\mathrm{d}t}$$
Cette expression montre que $i_L(t)$ évolue également selon une dynamique pseudo-périodique amortie, tendant vers sa valeur de régime permanent $I_{L,\infty} = \frac{E}{R_1 + r}$.

#### 5. Analyse critique du modèle
Supposons que le régime permanent soit établi ($i_L = I_{L,\infty}$) et que l'on ouvre brutalement l'interrupteur principal (ou que l'on isole la branche inductive). 
- **Bilan énergétique :** La bobine emmagasine une énergie magnétique $E_m = \frac{1}{2} L I_{L,\infty}^2$.
- **Rupture du modèle linéaire :** Mathématiquement, imposer une interruption brutale du courant ($i_L$ passe de $I_{L,\infty}$ à $0$ en un temps $\Delta t \to 0$) impliquerait une dérivée $\frac{\mathrm{d}i_L}{\mathrm{d}t} \rightarrow -\infty$. 
- **Conséquence physique :** La tension aux bornes de la bobine $u_L = L \frac{\mathrm{d}i_L}{\mathrm{d}t}$ tendrait vers $-\infty$ (surtension critique). Dans la réalité, cette surtension provoque un arc électrique au niveau des contacts de l'interrupteur ou la claquage diélectrique des composants semi-conducteurs environnants. Le modèle linéaire de composant parfait trouve ici ses limites, nécessitant l'adjonction d'une diode de roue libre ou d'un dispositif de protection (varistance) dans les montages pratiques.