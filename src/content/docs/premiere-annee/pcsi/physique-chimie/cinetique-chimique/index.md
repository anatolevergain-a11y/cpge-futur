---
title: 'Cours : Cinétique chimique'
description: 'Synthèse de cours, théorèmes et démonstrations fondamentales.'
---

## 📌 1. Définitions & Cadre d'étude

La cinétique chimique a pour objet l'étude quantitative de l'évolution des systèmes chimiques au cours du temps. Contrairement à la thermochimie qui se focalise sur les états d'équilibre (via l'enthalpie libre $\Delta_r G$), la cinétique s'intéresse à la vitesse à laquelle ces états sont atteints.

### 1.1. Avancement et vitesse de réaction
Considérons une réaction chimique modélisée par l'équation Bilan suivante :
$$\sum_{\text{i}} \nu_i A_i = 0$$
où les $\nu_i$ sont les coefficients algébriques (négatifs pour les réactifs, positifs pour les produits).

Pour un système fermé le volume réactionnel $V$ étant constant, on définit l'avancement de la réaction $\xi$ (exprimé en $\text{mol}$). La vitesse volumique de réaction $v$ est définie par :
$$v = \frac{1}{V} \frac{\mathrm{d}\xi}{\mathrm{d}t} = \frac{1}{\nu_i} \frac{\mathrm{d}[A_i]}{\mathrm{d}t}$$
où $[A_i] = \frac{n_i}{V}$ représente la concentration molaire de l'espèce $A_i$ (en $\text{mol}\cdot\text{L}^{-1}$ ou $\text{mol}\cdot\text{m}^{-3}$). L'unité usuelle de $v$ est $\text{mol}\cdot\text{L}^{-1}\cdot\text{s}^{-1}$.

### 1.2. Facteurs cinétiques
Un facteur cinétique est tout paramètre physique ou chimique modifiant la rapidité d'évolution d'un système :
* **La température $T$** : Décrite qualitativement par la loi de Van't Hoff et quantitativement par la loi d'Arrhenius.
* **Les concentrations initiales des réactifs** : Plus les concentrations sont élevées, plus les fréquences des chocs efficaces sont grandes.
* **La présence d'un catalyseur** : Espèce chimique qui accélère une réaction sans modifier l'état d'équilibre final et qui se retrouve régénérée à l'fin.
* **L'état physique des réactifs** (systèmes hétérogènes).

---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### 2.1. Loi de vitesse et ordre de réaction
Une réaction est dite d'ordre global $n = \alpha + \beta + \dots$ si sa vitesse s'exprime sous la forme différentielle (loi de Guldberg et Waage) :
$$v = k(T) \prod_{\text{réactifs}} [A_i]^{\alpha_i}$$
avec $k(T)$ la constante de vitesse (ou coefficient de vitesse), dont l'unité dépend de l'ordre global de la réaction.

### 2.2. Études des cinétiques d'ordres courants (Volume constant)

#### A. Ordre 0 ($v = k$)
La vitesse est indépendante des concentrations.
* Équation différentielle pour un réactif $A$ : $\frac{\mathrm{d}[A]}{\mathrm{d}t} = -k$
* Loi horaire :
  $$[A](t) = [A]_0 - k t$$
* Temps de demi-réaction $t_{1/2}$ (défini par $[A](t_{1/2}) = \frac{[A]_0}{2}$) :
  $$t_{1/2} = \frac{[A]_0}{2k}$$

#### B. Ordre 1 ($v = k[A]$)
* Équation différentielle : $\frac{\mathrm{d}[A]}{\mathrm{d}t} = -k[A]$
* Loi horaire (par séparation des variables et intégration) :
  $$\ln\left(\frac{[A](t)}{[A]_0}\right) = -k t \iff [A](t) = [A]_0 \exp(-kt)$$
* Temps de demi-réaction :
  $$t_{1/2} = \frac{\ln(2)}{k}$$
  *Remarquons que pour une cinétique d'ordre 1, le temps de demi-réaction est indépendant de la concentration initiale.*

#### C. Ordre 2 ($v = k[A]^2$)
* Équation différentielle : $\frac{\mathrm{d}[A]}{\mathrm{d}t} = -k[A]^2$
* Loi horaire :
  $$\frac{1}{[A](t)} - \frac{1}{[A]_0} = k t$$
* Temps de demi-réaction :
  $$t_{1/2} = \frac{1}{k[A]_0}$$

---

## 💡 3. Méthodes classiques de résolution

### 3.1. Méthode intégrale (ou de vérification)
Elle consiste à faire l'hypothèse d'un ordre (souvent 0, 1 ou 2), à intégrer l'équation différentielle, puis à tracer la grandeur correspondante en fonction du temps ($[A](t)$, $\ln([A](t))$ ou $\frac{1}{[A](t)}$). Si les points expérimentaux s'alignent sur une droite de manière satisfaisante, l'hypothèse d'ordre est validée.

### 3.2. Méthode différentielle
Elle exploite directement la définition de la vitesse : $v = -\frac{\mathrm{d}[A]}{\mathrm{d}t}$.
En prenant le logarithme népérien de la loi de vitesse pour un ordre 1 :
$$\ln(v) = \ln(k) + \alpha \ln([A])$$
Le tracé de $\ln(v)$ en fonction de $\ln([A])$ permet d'obtenir une droite dont la pente est l'ordre $\alpha$.

### 3.3. Dégénérescence de l'ordre
Si l'on étudie une réaction impliquant plusieurs réactifs (par exemple $A + B \rightarrow \text{produits}$ de vitesse $v = k[A]^\alpha [B]^\beta$), l'exploitation mathématique est complexe. On utilise la **dégénérescence de l'ordre** en introduisant l'un des réactifs (disons $B$) en **excès stœchiométrique massif** :
$$[B]_0 \gg [A]_0$$
Au cours du temps, la concentration de $B$ varie très peu et peut être considérée comme constante : $[B](t) \approx [B]_0$.
La loi de vitesse se simplifie alors en :
$$v = k_{\text{app}}[A]^\alpha \quad \text{avec} \quad k_{\text{app}} = k [B]_0^\beta$$
On accède ainsi à l'ordre partiel $\alpha$ par rapport à $A$. En réitérant l'opération avec $A$ en excès, on détermine l'ordre $\beta$.

### 3.4. Approximation de l'État Quasi-Stationniste (AEQS)
Appliquée aux mécanismes réactionnels complexes comportant des intermédiaires réactionnels $I$ (espèces hautement réactives, non isolables). L'AEQS consiste à supposer que la vitesse de formation de l'intermédiaire réactionnel compense instantanément sa vitesse de disparition après une brève phase d'induction :
$$\frac{\mathrm{d}[I]}{\mathrm{d}t} \approx 0$$
Cette approximation algébrique permet d'exprimer la concentration de $I$ en fonction des concentrations des réactifs stables, afin d'injecter cette expression dans la vitesse globale de la réaction.

---

## ⚠️ 4. Pièges classiques aux Concours

1. **Confondre stœchiométrie et ordre cinétique** : 
   Pour une réaction chimique bilantaires $aA + bB \rightarrow \text{produits}$, **rien n'impose** que l'ordre partiel soit égal au coefficient stœchiométrique ($\alpha = a$ et $\beta = b$). Ceci n'est vrai que pour une réaction élémentaire (se déroulant en une seule étape microscopique).
2. **Unités de la constante de vitesse $k$** :
   Oublier d'adapter l'unité de $k$ en fonction de l'ordre global $n$ de la réaction. L'équation aux dimensions impose que $[v] = [k] \cdot (\text{concentration})^n$, soit $[k] = (\text{concentration})^{1-n}\cdot\text{temps}^{-1}$.
3. **Oublier le volume variable** :
   Dans un système ouvert ou lors de réactions en phase gazeuse à pression et température constantes où le nombre de moles change ($\Delta \nu_g \neq 0$), le volume $V$ n'est pas constant. Écrire $\frac{\mathrm{d}[A]}{\mathrm{d}t} = \frac{1}{V}\frac{\mathrm{d}n_A}{\mathrm{d}t}$ oblige à dériver un quotient si $V = V(t)$.
4. **Mauvaise application de l'AEQS** :
   Utiliser l'AEQS sur un réactif ou un produit stable. L'AEQS est strictement réservée aux **intermédiaires réactionnels** (espèces instables en faible concentration stationnaire).
5. **Température et loi d'Arrhenius** :
   Attention aux unités lors de l'utilisation de la loi d'Arrhenius $k = A \exp\left(-\frac{E_a}{R T}\right)$. L'énergie d'activation $E_a$ est impérativement en $\text{J}\cdot\text{mol}^{-1}$, la température $T$ en Kelvin ($\text{K}$), et $R = 8,314 \, \text{J}\cdot\text{K}^{-1}\cdot\text{mol}^{-1}$.