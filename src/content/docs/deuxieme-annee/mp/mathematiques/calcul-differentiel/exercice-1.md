---
title: 'Exercice 1 : Différentiabilité et matrice jacobienne'
description: 'Problème d entraînement type concours pour MP.'
---

### 🌐 Énoncé du problème / Étude de cas

Dans le cadre de la modélisation thermodynamique d'un réacteur chimique diphasique, on s'intéresse à la transformation d'un vecteur d'état représentant les concentrations de réactifs et les températures locales. Pour optimiser le rendement énergétique du procédé, les ingénieurs cherchent à linéariser le comportement du système autour d'un point de fonctionnement stationnaire.

Soit $\Omega = ]0, +\infty[^2 \times ]0, T_{\max}[$ l'ouvert de $\mathbb{R}^3$ représentant l'espace des paramètres physiques accessibles (concentrations molaires normalisées $x, y$ et température absolue $T$). On définit l'application $F : \Omega \to \mathbb{R}^2$ modélisant le flux de matière net par :
$$F(x, y, T) = \begin{pmatrix} f_1(x, y, T) \\ f_2(x, y, T) \end{pmatrix} = \begin{pmatrix} k_0 \, x \, y \, \exp\left(-\frac{E_a}{R T}\right) - \frac{Q}{V} x \\ k_0 \, x \, y \, \exp\left(-\frac{E_a}{R T}\right) - \left(\frac{Q}{V} + k_d\right) y \end{pmatrix}$$

où :
- $k_0 > \text{min}(\text{Pratiques})$ est le facteur pré-exponentiel d'Arrhenius ($\text{s}^{-1}$).
- $E_a > 0$ est l'énergie d'activation ($\text{J}\cdot\text{mol}^{-1}$).
- $R$ est la constante gaz parfaits ($\text{J}\cdot\text{mol}^{-1}\cdot\text{K}^{-1}$).
- $Q/V > 0$ est le taux de renouvellement volumique ($\text{s}^{-1}$).
- $k_d > 0$ est la constante de désactivation thermique ($\text{s}^{-1}$).

*Note de modélisation et esprit critique :* La loi d'Arrhenius $\exp(-E_a / RT)$ est une approximation empirique valable pour des régimes thermiques modérés. En cas d'emballement thermique ($T \to T_{\max}$), cette modélisation diverge physiquement car elle néglige la fusion des parois ou la déplétion totale des sites réactifs. Les ingénieurs doivent donc valider la pertinence du modèle local uniquement sur un domaine restreint de température $\Delta T$.

---

### ❓ Questions progressives

1. **Régularité et calculs formels**
   Justifier que l'application $F$ est de classe $\mathcal{C}^1$ sur $\Omega$. Expliciter les dérivées partielles premières de $f_1$ et $f_2$ par rapport à $x$, $y$ et $T$.

2. **Matrice Jacobienne**
   Écrire la matrice jacobienne $J_F(x, y, T)$ de l'application $F$ en tout point $(x, y, T) \in \Omega$. 

3. **Linéarisation et point de fonctionnement**
   On considère un point de fonctionnement stationnaire $M_0 = (x_0, y_0, T_0)$ tel que $F(M_0) = \mathbf{0}$. Écrire l'approximation affine de $F$ au voisinage de $M_0$. Quel est l'intérêt pratique d'une telle matrice en automatique et régulation industrielle ?

4. **Analyse critique des sensibilités**
   On pose $E_a = 80 \, 000 \, \text{J}\cdot\text{mol}^{-1}$, $R = 8{,}314 \, \text{J}\cdot\text{mol}^{-1}\cdot\text{K}^{-1}$, et $T_0 = 400 \, \text{K}$. Évaluer l'ordre de grandeur du terme $\frac{\partial}{\\partial T}\left[\exp\left(-\frac{E_a}{R T}\right)\right]_{T=T_0}$. Conclure quantitativement sur la sensibilité extrême du réacteur face à de légères fluctuations thermiques.

---

### 💡 Pistes & Indications

- **Q1 :** Utilisez les théorèmes généraux de régularité (somme, produit, composition de fonctions usuelles de classe $\mathcal{C}^\infty$).
- **Q2 :** La matrice jacobienne est de taille $2 \times 3$. Veillez à bien ranger les lignes (fonctions $f_1, f_2$) et les colonnes (variables $x, y, T$).
- **Q3 :** Rappelez le théorème des accroissements finis ou l'inégalité des accroissements finis pour justifier l'erreur commise lors de l'approximation linéaire $\Delta F \approx J_F(M_0) \Delta M$.
- **Q4 :** Calculez explicitement la dérivée par rapport à $T$ de l'exponentielle d'Arrhenius et faites l'application numérique. Discutez de l'impact d'une variation de $\pm 1\,^{\circ}\text{C}$ sur le système.

---

### 📋 Corrigé détaillé et analyse des résultats

#### 1. Régularité de $F$
Les fonctions $f_1$ et $f_2$ sont composées et produits de :
- Fonctions polynômes en $x$ et $y$ (qui sont $\mathcal{C}^\infty$ sur $\mathbb{R}^2$).
- L'application $T \mapsto \exp\left(-\frac{E_a}{R T}\end{right)$ qui est $\mathcal{C}^\infty$ sur $]0, T_{\max}[$ car le dénominateur ne s'annule pas et l'exponentielle est de classe $\mathcal{C}^\infty$ sur $\mathbb{R}$.

Par conséquent, $F$ est de classe $\mathcal{C}^1$ (et même $\mathcal{C}^\infty$) sur l'ouvert $\Omega$.

Calculons les dérivées partielles :
$$\frac{\partial f_1}{\partial x} = k_0 \, y \, \exp\left(-\frac{E_a}{R T}\right) - \frac{Q}{V}, \quad \frac{\partial f_1}{\partial y} = k_0 \, x \, \exp\left(-\frac{E_a}{R T}\right), \quad \frac{\partial f_1}{\partial T} = k_0 \, x \, y \, \frac{E_a}{R T^2} \exp\left(-\frac{E_a}{R T}\right)$$

$$\frac{\partial f_2}{\partial x} = k_0 \, y \, \exp\left(-\frac{E_a}{R T}\right), \quad \frac{\partial f_2}{\partial y} = k_0 \, x \, \exp\left(-\frac{E_a}{R T}\right) - \left(\frac{Q}{V} + k_d\right), \quad \frac{\partial f_2}{\partial T} = k_0 \, x \, y \, \frac{E_a}{R T^2} \exp\left(-\frac{E_a}{R T}\right)$$

#### 2. Matrice Jacobienne
La matrice jacobienne est de format $2 \times 3$ :
$$J_F(x, y, T) = \begin{pmatrix}
\dfrac{\partial f_1}{\partial x} & \dfrac{\partial f_1}{\partial y} & \dfrac{\partial f_1}{\partial T} \\[8pt]
\dfrac{\dfrac{\partial f_2}{\partial x}} & \dfrac{\partial f_2}{\partial y} & \dfrac{\partial f_2}{\partial T}
\end{pmatrix}$$

En remplaçant par les expressions précédentes :
$$J_F(x, y, T) = \begin{pmatrix}
k_0 y e^{-\frac{E_a}{RT}} - \frac{Q}{V} & k_0 x e^{-\frac{E_a}{RT}} & k_0 x y \frac{E_a}{RT^2} e^{-\frac{E_a}{RT}} \\[6pt]
k_0 y e^{-\frac{E_a}{RT}} & k_0 x e^{-\frac{E_a}{RT}} - (\frac{Q}{V} + k_d) & k_0 x y \frac{E_a}{RT^2} e^{-\frac{E_a}{RT}}
\end{pmatrix}$$

#### 3. Linéarisation et intérêt pratique
Puisque $F$ est de classe $\mathcal{C}^1$, l'approximation affine au voisinage du point stationnaire $M_0$ est donnée par :
$$F(M) \approx F(M_0) + J_F(M_0)(M - M_0) = J_F(M_0)(M - M_0)$$
*Intérêt en ingénierie :* En théorie du contrôle (automatique), cette matrice jacobienne permet de construire le système linéaire tangent $\dot{X} = A X + B U$. Elle autorise l'utilisation des outils de l'analyse linéaire (valeurs propres pour la stabilité, transformée de Laplace, correcteurs PID) autour du point de consigne.

#### 4. Analyse critique des sensibilités
La dérivée de terme d'Arrhenius par rapport à $T$ vérifie :
$$\frac{\partial}{\partial T}\left[e^{-\frac{E_a}{R T}}\right] = \frac{E_a}{R T^2} e^{-\frac{E_a}{R T}}$$
A.N. pour $E_a = 80\,000$, $R = 8{,}314$ et $T_0 = 400\,\text{K}$ :
$$\frac{E_a}{R T_0^2} = \frac{80\,000}{8{,}314 \times 400^2} = \frac{80\,000}{8{,}314 \times 160\,000} = \frac{1}{2 \times 8{,}314} \approx 0{,}060 \, \text{K}^{-1}$$

*Conclusion critique :* Une variation de température de seulement $+1\,\text{K}$ entraîne une augmentation relative du terme cinétique de l'ordre de $6\,\%$. Ce facteur multiplicatif élevé sur la température montre que le modèle possède une **forte non-linéarité thermique**. Si le système de refroidissement faiblit, l'élévation locale de température accélère exponentiellement la réaction, dégageant plus de chaleur (réaction exothermique non modélisée explicitement ici mais implicite), ce qui peut conduire à l'emballement thermique. Le modèle linéaire n'est donc valable que pour de très infimes variations ($\Delta T \ll 1\,\text{K}$).