---
title: 'Exercice 2 : Échangeurs thermiques et rendement'
description: 'Problème d entraînement type concours pour PSI.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Les échangeurs thermiques sont des dispositifs essentiels dans de nombreux systèmes industriels, de la production d'énergie aux procédés chimiques. L'objectif de ce problème est d'étudier un **échangeur tubulaire co-courant et contre-courant**, et d'évaluer son efficacité thermodynamique ainsi que son rendement exergétique.

On considère un échangeur thermique stationnaire dans lequel circulent deux fluides caloporteurs non miscibles, assimilés à des fluides parfaits incompressibles de capacités thermiques massiques respectives $c_1$ et $c_2$ (supposées constantes). 
- Le **Fluide 1** (chaud) entre dans l'échangeur à l'abscisse $x = 0$ à la température $T_{1,\text{ent}}$ avec un débit massique $\dot{m}_1$.
- Le **Fluide 2** (froid) entre dans l'échangeur et parcourt celui-ci sur une longueur totale $L.

On note $C_1 = \dot{m}_1 c_1$ et $C_2 = \dot{m}_2 c_2$ les capacités thermiques par unité de temps (ou flux de capacité thermique) des deux flux. Le coefficient global d'échange thermique par unité de longueur est noté $\mathcal{H}$ (en $\text{W}\cdot\text{m}^{-1}\cdot\text{K}^{-1}$).

---

### ❓ Questions progressives (incluant une analyse critique du modèle)

1. **Bilan thermique élémentaire (Configuration co-courant)**
   Établir les équations différentielles régissant l'évolution des températures $T_1(x)$ et $T_2(x)$ le long de l'échangeur dans le cas où les deux fluides circulent dans le **même sens** (co-courant, de $x = 0$ à $x = L$).

2. **Résolution du profil de température**
   En posant $\Delta T(x) = T_1(x) - T_2(x)$, exprimer l'équation différentielle vérifiée par $\Delta T(x)$. Résoudre cette équation et exprimer $\Delta T(x)$ en fonction de $\Delta T(0)$, $x$, $\mathcal{H}$, $C_1$, $C_2$ et $L$.

3. **Puissance thermique échangée**
   En déduire l'expression de la puissance thermique totale $P_{\text{éch}}$ échangée entre les deux fluides en fonction de $C_1$, $C_2$, $T_{1,\text{ent}}$, $T_{2,\text{ent}}$ et des températures de sortie $T_{1,\text{sor}}$ et $T_{2,\text{sor}}$.

4. **Efficacité de l'échangeur**
   On définit l'efficacité $\varepsilon$ de l'échangeur comme le rapport entre la puissance réellement échangée et la puissance maximale théorique échangeable. 
   - Expliciter la puissance maximale $P_{\max}$.
   - Exprimer l'efficacité $\varepsilon$ en fonction de $C_1$, $C_2$ et du nombre d'unités de transfert (NUT) défini par $\text{NUT} = \frac{\mathcal{H}L}{C_{\min}}$, où $C_{\min} = \min(C_1, C_2)$.

5. **Analyse critique du modèle et irréversibilités**
   - Discuter l'hypothèse de constance des coefficients $c_1$, $c_2$ et $\mathcal{H}$.
   - Définir qualitativement la création d'entropie dans l'échangeur. Pourquoi un échangeur à contre-courant est-il thermodynamiquement plus performant qu'un échangeur à co-courant ?

---

### 💡 Pistes & Indications méthodologiques

- **Question 1 :** Appliquer le premier principe de la thermodynamique (ou un bilan d'énergie) sur une tranche élémentaire d'épaisseur $\text{d}x$ pour chaque fluide. Attention aux signes selon le sens des flux.
- **Question 2 :** Soustraire les deux équations différentielles obtenues pour obtenir une équation d'ordre 1 en $\Delta T(x)$.
- **Question 3 :** Utiliser la conservation de l'enthalpie pour chaque flux entre l'entrée et la sortie.
- **Question 4 :** La puissance maximale est obtenue si le fluide ayant le $C_{\min}$ subit la variation de température maximale possible (soit $\Delta T_{\max} = T_{1,\text{ent}} - T_{2,\text{ent}}$).

---

### 📋 Corrigé détaillé pas à pas

#### 1. Bilan thermique élémentaire (Co-courant)
Considérons une tranche d'échangeur comprise entre les abscisses $x$ et $x + \text{d}x$. 
Pour le fluide 1 (chaud, circulant dans le sens des $x$ croissants), la variation d'enthalpie sur $\text{d}x$ s'exprime par :
$$\delta Q_1 = \dot{m}_1 c_1 \text{d}T_1 = C_1 \text{d}T_1$$
Puisque le fluide cède de la chaleur, cette quantité est négative si $\text{d}T_1 < 0$. Le flux thermique cédé par le fluide 1 à travers la surface latérale $\mathcal{H} \text{d}x$ est :
$$C_1 \frac{\text{d}T_1}{\text{d}x} \text{d}x = -\mathcal{H}(T_1 - T_2)\text{d}x$$
Soit :
$$\frac{\text{d}T_1}{\text{d}x} = -\frac{\mathcal{H}}{C_1}(T_1 - T_2)$$

De même, pour le fluide 2 (froid, circulant également dans le sens des $x$ croissants) :
$$C_2 \frac{\text{d}T_2}{\text{d}x} = +\mathcal{H}(T_1 - T_2)$$
Soit :
$$\frac{\text{d}T_2}{\text{d}x} = \frac{\mathcal{H}}{C_2}(T_1 - T_2)$$

#### 2. Résolution du profil de température
Posons $\Delta T(x) = T_1(x) - T_2(x)$. Dérivons cette grandeur par rapport à $x$ :
$$\frac{\text{d}(\Delta T)}{\text{d}x} = \frac{\text{d}T_1}{\text{d}x} - \frac{\text{d}T_2}{\text{d}x} = -\mathcal{H} \left( \frac{1}{C_1} + \frac{1}{C_2} \right) (T_1 - T_2)$$
En posant $\alpha = \mathcal{H} \left( \frac{1}{C_1} + \frac{1}{C_2} \right)$, l'équation différentielle devient :
$$\frac{\text{d}(\Delta T)}{\text{d}x} + \alpha \Delta T(x) = 0$$
La solution générale de cette équation linéaire du premier ordre est :
$$\Delta T(x) = \Delta T(0) \exp(-\alpha x)$$
Avec $\Delta T(0) = T_{1,\text{ent}} - T_{2,\text{ent}}$.

#### 3. Puissance thermique échangée
La puissance thermique totale $P_{\text{éch}}$ échangée sur toute la longueur $L$ de l'échangeur s'obtient par le bilan global sur le fluide 1 (ou le fluide 2) :
$$P_{\text{éch}} = C_1 (T_{1,\text{ent}} - T_{1,\text{sor}}) = C_2 (T_{2,\text{sor}} - T_{2,\text{ent}})$$
En intégrant le flux thermique local sur toute la longueur :
$$P_{\text{éch}} = \int_{0}^{L} \mathcal{H} [T_1(x) - T_2(x)] \text{d}x = \mathcal{H} \int_{0}^{L} \Delta T(0) e^{-\alpha x} \text{d}x$$
$$P_{\text{éch}} = \mathcal{H} \Delta T(0) \left[ \frac{-1}{\alpha} e^{-\alpha x} \right]_0^L = \frac{\mathcal{H} \Delta T(0)}{\alpha} (1 - e^{-\alpha L})$$

#### 4. Efficacité de l'échangeur
La puissance maximale théorique $P_{\max}$ serait atteinte dans un échangeur de longueur infinie ($L \to +\infty$), où le fluide dont la capacité thermique est la plus faible atteindrait la température d'entrée de l'autre fluide :
$$P_{\max} = C_{\min} (T_{1,\text{ent}} - T_{2,\text{ent}}) = C_{\min} \Delta T(0)$$
L'efficacité $\varepsilon$ est par définition :
$$\varepsilon = \frac{P_{\text{éch}}}{P_{\max}} = \frac{\frac{\mathcal{H}}{\alpha} \Delta T(0) (1 - e^{-\alpha L})}{C_{\min} \Delta T(0)}$$
Or, $\frac{\mathcal{H}}{\alpha} = \frac{\mathcal{H}}{\mathcal{H}(\frac{1}{C_1} + \frac{1}{C_2})} = \frac{C_1 C_2}{C_1 + C_2}$. 
En introduisant le rapport des capacités $R = \frac{C_{\min}}{C_{\max}}$ et le $\text{NUT} = \frac{\mathcal{H}L}{C_{\min}}$, on obtient après simplification l'expression classique de l'efficacité pour le co-courant :
$$\varepsilon = \frac{1 - \exp\left(-\text{NUT}(1 + R)\right)}{1 + R}$$

#### 5. Analyse critique du modèle et irréversibilités
- **Validité des hypothèses :** 
  - Les capacités thermiques $c_1$ et $c_2$ dépendent en réalité de la température. L'hypothèse de constance n'est valide que pour des variations de température modérées.
  - Le coefficient global d'échange $\mathcal{H}$ dépend des régimes d'écoulement (laminaire ou turbulent, via les nombres de Reynolds et Prandtl) et peut varier le long de l'échangeur.
- **Irréversibilités et second principe :** 
  - Les transferts thermiques s'effectuent à travers des écarts de température finis $\Delta T(x) \neq 0$, ce qui constitue une source majeure d'irréversibilité (création d'entropie $\Delta S_{\text{création}} > 0$).
  - Dans un échangeur à **contre-courant** (les fluides circulent en sens inverse), le profil de température permet d'atteindre un écart thermique plus homogène et d'obtenir, pour une même surface d'échange, une efficacité supérieure et une moindre création d'entropie qu'en co-courant.