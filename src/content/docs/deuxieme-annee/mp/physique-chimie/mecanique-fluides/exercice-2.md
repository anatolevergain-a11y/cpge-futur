---
title: 'Exercice 2 : Écoulements incompressibles et Bernoulli'
description: 'Problème d entraînement type concours pour MP.'
---

### 🌐 Énoncé du problème / Cadre d'étude

L'objectif de ce problème est l'étude théorique et pratique d'un dispositif d'aspiration de type éjecteur-mélangeur, inspiré des trompes à eau de laboratoire et des systèmes de ventilation industrielle. On s'intéresse à l'entraînement d'un fluide secondaire par un écoulement principal à grande vitesse.

Le fluide considéré est l'air, modélisé comme un fluide parfait, incompressible et de masse volumique constante $\rho = 1{,}20\,\text{kg}\cdot\text{m}^{-3}$. L'écoulement est supposé permanent, irrotationnel et bidimensionnel dans le plan $(Ox, Oy)$.

On étudie un canal de section rectangulaire de largeur constante $b$ selon l'axe $(Oz)$. Le dispositif comporte :
- Une section principale d'amont (zone 1) où l'air arrive à la vitesse $V_1$ sous la pression atmosphérique $P_0$.
- Un convergent (zone 2) qui accélère l'écoulement principal.
- Une chambre de mélange (zone 3) où l'air principal à haute vitesse croise un conduit secondaire relié à une enceinte à aspirer.
- Une section d'aval (zone 4) où les débits se mélangent et décélèrent.

---

### ❓ Questions progressives (incluant une analyse critique du modèle)

1. **Cinématique et conservation du débit**
   Soit $S(x)$ la section du canal traversée par l'écoulement principal. En écrivant la conservation de la masse pour un écoulement stationnaire incompressible, exprimer la vitesse $V(x)$ en fonction de la vitesse initiale $V_1$, de la section initiale $S_1$ et de la section locale $S(x)$.

2. **Équation de Bernoulli généralisée**
   Énoncer les hypothèses physiques permettant d'appliquer le théorème de Bernoulli le long d'une ligne de courant. Établir l'expression de la pression statique $P(x)$ dans le convergent en fonction de $\rho$, $V_1$, $S_1$ et $S(x)$.

3. **Application numérique et effet Venturi**
   Le convergent fait passer la section de $S_1 = 20\,\text{cm}^2$ à $S_2 = 5\,\text{cm}^2$. La vitesse d'entrée est $V_1 = 10\,\text{m}\cdot\text{s}^{-1}$ et la pression d'entrée est $P_1 = P_0 = 1{,}013 \times 10^5\,\text{Pa}$. 
   Calculer la vitesse $V_2$ et la pression $P_2$ dans la section $S_2$. Commenter la variation de pression.

4. **Aspiration du fluide secondaire**
   On débouche le convergent dans une chambre de mélange de section $S_3 = S_2$ où l'on souhaite aspirer un fluide secondaire (débit massique négligeable devant le débit principal). Quelle condition sur la pression $P_2$ permet d'amorcer l'aspiration ?

5. **Analyse critique du modèle du fluide parfait**
   Discuter la validité de l'hypothèse de fluide parfait ($\eta = 0$) dans les zones de forte courbure et au voisinage des parois du convergent. Quel phénomène physique négligé ici modifie en pratique l'efficacité réelle du dispositif ?

---

### 💡 Pistes & Indications méthodologiques

- **Question 1 :** Utilisez l'équation de conservation de la masse (continuité) sous sa forme globale pour un tube de courant indéformable : $\rho_1 A_1 V_1 = \rho_2 A_2 V_2$.
- **Question 2 :** Rappelez les conditions d'application de Bernoulli (fluide parfait, incompressible, stationnel, forces de volume conservatives, le long d'une même ligne de courant ou partout si l'écoulement est irrotationnel).
- **Question 3 :** Veillez à bien homogénéiser les unités dans le Système International (SI) avant d'effectuer les applications numériques.
- **Question 4 :** Reliez la condition d'aspiration à la surpression ou la dépression par rapport à la pression extérieure de référence.
- **Question 5 :** Pensez aux notions de couche limite, de forces de frottement visqueux et de décollement d'écoulement.

---

### 📋 Corrigé détaillé pas à pas

#### 1. Conservation du débit
Pour un écoulement stationnaire et incompressible ($\rho = \text{constante}$), le débit volumique $D_v$ se conserve à travers toute section $S(x)$ perpendiculaire à l'écoulement :
$$D_v = S(x) \cdot V(x) = S_1 \cdot V_1$$
On en déduit l'expression de la vitesse locale :
$$V(x) = V_1 \frac{S_1}{S(x)}$$

#### 2. Équation de Bernoulli
Les hypothèses requises pour appliquer le théorème de Bernoulli le long d'une ligne de courant sont :
1. Fluide newtonien dont la viscosité est négligeable (fluide parfait, $\eta = 0$).
2. Écoulement stationnel ($\partial/\partial t = 0$).
3. Fluide incompressible ($\rho = \text{constante}$).
4. Forces volumiques conservatives dériver d'un potentiel (ici le champ de pesanteur, que l'on peut supposer négligeable devant les forces de pression et d'inertie dans un écoulement d'air horizontal, ou dont l'effet est compensé si les variations d'altitude sont nulles).

Entre l'entrée (section $S_1$) et une section quelconque $S(x)$ sur une même ligne de courant horizontale :
$$P_1 + \frac{1}{2}\rho V_1^2 = P(x) + \frac{1}{2}\rho V(x)^2$$

En injectant l'expression de $V(x)$ trouvée à la question 1 :
$$P(x) = P_1 + \frac{1}{2}\rho V_1^2 \left(1 - \frac{S_1^2}{S(x)^2}\right)$$

#### 3. Application numérique
- **Calcul de la vitesse $V_2$ :**
  $$V_2 = V_1 \frac{S_1}{S_2} = 10 \times \frac{20}{5} = 40\,\text{m}\cdot\text{s}^{-1}$$

- **Calcul de la pression $P_2$ :**
  $$P_2 = P_1 - \frac{1}{2}\rho (V_2^2 - V_1^2)$$
  $$\frac{1}{2}\rho (V_2^2 - V_1^2) = \frac{1}{2} \times 1{,}20 \times (40^2 - 10^2) = 0{,}6 \times (1600 - 100) = 0{,}6 \times 1500 = 900\,\text{Pa}$$
  $$P_2 = 1{,}013 \times 10^5 - 900 = 1{,}004 \times 10^5\,\text{Pa}$$
Commentaire: * L'accélération du fluide provoque une chute de pression significative (effet Venturi).

#### 4. Aspiration du fluide secondaire
Pour que le dispositif puisse aspirer un fluide secondaire, il faut que la pression statique dans la zone de mélange $P_2$ soit inférieure à la pression $P_{\text{ext}}$ du réservoir secondaire que l'on cherche à vider (généralement la pression atmosphérique ambiante $P_0$) :
$$P_2 < P_0$$
Ici, $P_2 = 1{,}004 \times 10^5\,\text{Pa} < 1{,}013 \times 10^5\,\text{Pa}$, l'aspiration est donc théoriquement possible.

#### 5. Analyse critique du modèle
L'hypothèse du fluide parfait ($\eta = 0$) néglige les effets visqueux. En réalité :
- **Couche limite :** Au voisinage des parois solides du convergent, la vitesse s'annule (condition d'adhérence), créant un gradient de vitesse important et des forces de frottement visqueux qui dissipent de l'énergie mécanique en chaleur (pertes de charge régulières).
- **Décollement :** Si le convergent ou le divergent est trop brusque, l'écoulement ne peut suivre la géométrie de la paroi, il se décolle, formant des zones de recirculation turbulentes (pertes de charge singulières).
- **Conséquence :** La pression réelle $P_2$ sera supérieure à celle prédite par le modèle de Bernoulli, ce qui réduit l'efficacité réelle de l'aspiration par rapport aux prévisions théoriques.