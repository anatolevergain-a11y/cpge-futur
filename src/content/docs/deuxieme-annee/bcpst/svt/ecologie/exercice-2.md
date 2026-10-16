---
title: 'Exercice 2 : Flux d énergie dans les écosystèmes'
description: 'Problème d entraînement type concours.'
---

# Concours BCPST - Épreuve de SVT
## Problème guidé : Quantification et modélisation thermodynamique des flux d'énergie dans un écosystème forestier tempéré

---

### Énoncé

L'étude des flux d'énergie au sein d'un écosystème forestier permet de comprendre la structuration trophique des communautés et l'efficacité du transfert de la matière organique. On s'intéresse ici à une chênaie-hêtraie tempérée. 

Les données biophysiques de base mesurées par flux de tourbières et analyses radiométriques sur un hectare ($\text{ha}$) de cet écosystème sont les suivantes :
* **Rayonnement global incident ($R_g$) :** $4{,}2 \times 10^9 \text{ kJ}\cdot\text{ha}^{-1}\cdot\text{an}^{-1}$
* **Albédo moyen de la canopée ($A$) :** $18\ \%$
* **Énergie solaire photosynthétiquement active (PAR, soit 40 à 50 % du rayonnement global incident) :** on retiendra $45\ \%$ de $R_g$.
* **Production Primaire Brute (PPB) :** $2{,}1 \times 10^8 \text{ kJ}\cdot\text{ha}^{-1}\cdot\text{an}^{-1}$
* **Respiration autrophe ($R_A$) :** $1{,}2 \times 10^8 \text{ kJ}\cdot\text{ha}^{-1}\cdot\text{an}^{-1}$
* **Consommation par les herbivores primaires ($C$) :** $3{,}1 \times 10^6 \text{ kJ}\cdot\text{ha}^{-1}\cdot\text{an}^{-1}$
* **Assimilation par les herbivores ($A_H$) :** $1{,}8 \times 10^6 \text{ kJ}\cdot\text{ha}^{-1}\cdot\text{an}^{-1}$
* **Respiration des herbivores ($R_H$) :** $1{,}4 \times 10^6 \text{ kJ}\cdot\text{ha}^{-1}\cdot\text{an}^{-1}$

---

### Questions

1. **Calculs énergétiques primaires**
   a. Définir et calculer la quantité d'énergie lumineuse réellement absorbée par la canopée.
   b. En déduire la *rendement de la photosynthèse* (ou efficacité photosynthétique brute), défini comme le rapport entre la PPB et l'énergie lumineuse absorbée. Discuter cet ordre de grandeur au regard des limites biochimiques de la machinerie chlorophyllienne.

2. **Bilan de la production végétale**
   a. Calculer la Production Primaire Nette ($\text{PPN}$) de cet écosystème. Préciser sa signification écologique.
   b. Quelle proportion de la PPN est directement prélevée par les herbivores ? Comment qualifie-t-on le devenir de la fraction restante de la PPN ?

3. **Transfert trophique au niveau des consommateurs**
   a. Pour le niveau trophique des herbivores, calculer :
      * L'efficacité d'assimilation ($E_A = A_H / C$).
      * L'efficacité de production nette ($E_P = P_H / A_H$, où $P_H$ est la production secondaire nette des herbivores, calculée par la différence entre l'assimilation et la respiration).
   b. Comparer ces efficacités à celles observées chez les producteurs primaires et discuter des contraintes thermodynamiques et physiologiques qui pèsent sur les animaux (homéothermie, métabolisme).

4. **Analyse critique et limites du modèle**
   Le modèle trophique linéaire simplifie grandement la réalité de l'écosystème. Citer et expliquer deux limites majeures de cette approche énergétique (notamment concernant le rôle des détritivores et la dynamique temporelle).

---

### Pistes de réflexion

* *Q1a :* Penser à retrancher la part réfléchie par l'albédo avant de s'intéresser au rayonnement global, puis à isoler la fraction PAR.
* *Q1b :* Un rendement de photosynthèse "brut" à l'échelle d'un écosystème est structurellement très inférieur au rendement théorique d'un chloroplaste isolé in vitro. Pourquoi ? (Penser aux pertes par réflexion, transmission, inactivité des pigments non chlorophylliens, auto-ombrage).
* *Q3a :* Attention à bien distinguer l'énergie ingérée ($C$), l'énergie assimilée ($A_H$), et l'énergie rejetée dans les fèces/urines.
* *Q4 :* Ne pas oublier la filière "décomposeurs/détritivores" qui canalise souvent plus de 80 % de la PPN dans les écosystèmes forestiers tempérés.

---

### Corrigé pas à pas

#### 1. Calculs énergétiques primaires
* **a. Énergie lumineuse absorbée ($E_{abs}$) :**
  L'énergie réfléchie est de $18\ \%$ ; l'énergie absorbée est donc de $100 - 18 = 82\ \%$.
  L'énergie globale absorbée est :
  $$E_{abs\_totale} = R_g \times (1 - A) = 4{,}2 \times 10^9 \times 0{,}82 = 3{,}444 \times 10^9 \text{ kJ}\cdot\text{ha}^{-1}\cdot\text{an}^{-1}$$
  Cependant, seule la fraction PAR (Photosynthetically Active Radiation) est utilisable par les pigments photosynthétiques. 
  $$E_{abs\_PAR} = E_{abs\_totale} \times 0{,}45 = 3{,}444 \times 10^9 \times 0{,}45 \approx 1{,}55 \times 10^9 \text{ kJ}\cdot\text{ha}^{-1}\cdot\text{an}^{-1}$$

* **b. Efficacité photosynthétique brute :**
  $$\eta = \frac{\text{PPB}}{E_{abs\_PAR}} = \frac{2{,}1 \times 10^8}{1{,}55 \times 10^9} \approx 0{,}135 \text{ soit } 13{,}5\ \%$$
  *(Note : Si l'on rapporte la PPB au rayonnement global total $R_g$, on trouve $\frac{2{,}1 \times 10^8}{4{,}2 \times 10^9} = 5\ %$.)*
  **Analyse critique :** Ce rendement apparent (de l'ordre de 1 à 5 % par rapport au flux incident total) paraît élevé pour un processus biochimique dont le rendement quantique théorique est d'environ 20-30 % au niveau moléculaire. Cela s'explique par les multiples facteurs limitants à l'échelle de la canopée : saturation lumineuse des feuilles sommitales, auto-ombrage, pertes par diffusion, et inadaptation spectrale partielle.

#### 2. Bilan de la production végétale
* **a. Calcul de la $\text{PPN}$ :**
  $$\text{PPN} = \text{PPB} - R_A = 2{,}1 \times 10^8 - 1{,}2 \times 10^8 = 9{,}0 \times 10^7 \text{ kJ}\cdot\text{ha}^{-1}\cdot\text{an}^{-1}$$
  La $\text{PPN}$ représente l'énergie réellement convertie en biomasse végétale et disponible pour les hétérotrophes et le stockage (litière, bois).

* **b. Prélèvement par les herbivores :**
  $$\text{Proportion} = \frac{C}{\text{PPN}} = \frac{3{,}1 \times 10^6}{9{,}0 \times 10^7} \approx 0{,}034 \text{ soit } 3{,}4\ \%$$
  Seule une infime fraction de la PPN (moins de 5 %) transite directement par la chaîne trophique des herbivores en milieu forestier tempéré. 
  **Devenir de la fraction restante ($> 96\ \%$) :** Elle alimente la filière de décomposition (ou réseau trophique des détritivores) via la chute des feuilles, du bois mort et la nécromasse racinaire.

#### 3. Transfert trophique au niveau des herbivores
* **a. Calcul des efficacités :**
  * *Efficacité d'assimilation ($E_A$) :*
    $$E_A = \frac{A_H}{C} = \frac{1{,}8 \times 10^6}{3{,}1 \times 10^6} \approx 0{,}58 \text{ soit } 58\ \%$$
    *(42 % de l'énergie ingérée est rejetée sous forme de fèces et d'urines).*
  * *Production secondaire nette des herbivores ($P_H$) :*
    $$P_H = A_H - R_H = 1{,}8 \times 10^6 - 1{,}4 \times 10^6 = 4{,}0 \times 10^5 \text{ kJ}\cdot\text{ha}^{-1}\cdot\text{an}^{-1}$$
  * *Efficacité de production nette ($E_P$) :*
    $$E_P = \frac{P_H}{A_H} = \frac{4{,}0 \times 10^5}{1{,}8 \times 10^6} \approx 0{,}22 \text{ soit } 22\ \%$$

* **b. Comparaison et discussion :**
  L'efficacité de production des animaux ($E_P \approx 22\ \%$ de l'énergie assimilée) est bien inférieure à celle des végétaux (où $\text{PPN}/\text{PPB} \approx 43\ \%$ ici). Chez les animaux homéothermes (mammifères, oiseaux), une part considérable de l'énergie assimilée est dissipée sous forme de chaleur pour maintenir la température corporelle ($R_H / A_H \approx 78\ \%$ ici). Les poïkilothermes auraient une efficacité de production nette plus élevée, car leurs coûts métaboliques de maintenance sont moindres.

#### 4. Analyse critique et limites du modèle
Le modèle de flux d'énergie linéaire présente plusieurs biais majeurs que l'écologue doit nuancer :
1. **La compartimentation négligée de la litière :** Le modèle sépare artificiellement herbivores et détritivores. Or, dans une forêt tempérée, le flux majeur passe par la filière détritivore (champignons, bactéries, invertébrés du sol), qui recycle les nutriments indispensables à la boucle fermée de la production primaire.
2. **La dynamique temporelle et le stockage (résilience) :** Les écosystèmes forestiers accumulent de la biomasse sur de longues périodes (bois des arbres). Un bilan annuel ne prend pas en compte l'allochtonie (apports extérieurs, ex: feuilles mortes transportées par le vent) ni la variation interannuelle (sécheresses, perturbations climatiques modifiant $R_A$ et la $\text{PPN}$).