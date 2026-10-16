---
title: 'Exercice 1 : Membranes biologiques et transports'
description: 'Problème d entraînement type concours pour BCPST.'
---

### 🌐 Énoncé du problème / Étude de cas

Les membranes biologiques délimitent les cellules et leurs compartiments internes, assurant une barrière sélective essentielle à l'homéostasie cellulaire. L'étude de la perméabilité membranaire et des flux de matière repose souvent sur des modèles physico-chimiques simplifiés, qu'il convient d'analyser avec rigueur pour comprendre les mécanismes physiologiques sous-jacents.

Dans ce problème, on s'intéresse à la cinétique d'entrée d'un soluté $S$ (une molécule organique neutre) à travers la membrane plasmique d'une cellule animale (volume $V = 10^{-12}\text{ L}$, surface membranaire $S_m = 3 \times 10^{-7}\text{ cm}^2$). 

On modélise initialement la membrane comme une barrière lipidique pure où le soluté diffuse selon la loi de Fick, avant de considérer la mise en place de transporteurs protéiques spécifiques.

---

### ❓ Questions progressives (incluant des questions d'analyse critique)

1. **Rappel et modélisation initiale :** Écrire l'expression du flux molaire diffusif $J$ (en $\text{mol}\cdot\text{s}^{-1}\cdot\text{cm}^{-2}$) d'un soluté à travers une membrane homogène d'épaisseur $e$, en fonction du coefficient de partage lipide/eau $K$, du coefficient de diffusion $D$ du soluté dans la membrane, et de la différence de concentration $\Delta C = C_{ext} - C_{int}$. En déduire la perméabilité membranaire $P$ (en $\text{cm}\cdot\text{s}^{-1}$).

2. **Application numérique et ordre de grandeur :** Pour une molécule hautement lipophile, on estime $K = 10$, $D = 10^{-7}\text{ cm}^2\cdot\text{s}^{-1}$ et $e = 5\text{ nm}$. Calculer la perméabilité $P$. 
   *Question d'esprit critique :* La membrane plasmique biologique est-elle réductible à une simple couche d'hydrocarbures homogène de $5\text{ nm}$ ? Discutez des limites de ce modèle pour des molécules très polaires ou ioniques.

3. **Cinétique d'accumulation :** On place cette cellule dans un milieu extérieur où la concentration en soluté est maintenue constante à $C_{ext} = 10^{-3}\text{ mol}\cdot\text{L}^{-1}$. La concentration intrajacente initiale est nulle ($C_{int}(0) = 0$). 
   Établir l'équation différentielle régissant l'évolution de la concentration interne $C_{int}(t)$. Résoudre cette équation.

4. **Modélisation du transport facilité :** Dans la réalité physiologique, le transport de nombreux nutriments (ex: glucose) ne suit pas une simple loi linéaire de diffusion, mais sature à forte concentration externe. On modélise la vitesse de transport $v$ par une cinétique de type Michaelis-Menten :
   $$v = \frac{V_{max} \cdot C_{ext}}{K_m + C_{ext}}$$
   Définir brièvement la signification biologique des paramètres $V_{max}$ et $K_m$.
   
5. **Analyse critique énergétique :** Certains transporteurs couplent ce transport à celui d'ions sodium ($\text{Na}^+$), selon un mécanisme de symport. Rappelez la source d'énergie indirecte qui permet de maintenir le gradient de $\text{Na}^+$ nécessaire à ce fonctionnement, et discutez de l'impact thermodynamique sur l'accumulation du soluté $S$ dans la cellule.

---

### 💡 Pistes & Indications

* **Q1 :** Utilisez la première loi de Fick $J = -D \frac{dC}{dx}$ au sein de la membrane, en tenant compte de la discontinuité de concentration entre la solution aqueuse et la phase lipophile (via le coefficient de partage $K$).
* **Q2 :** Veillez à homogénéiser les unités dans le système international ou en unités usuelles (cm, s, mol). Pensez à la structure en mosaïque fluide de la membrane (présence de protéines, hétérogénéité des lipides).
* **Q3 :** Exprimez le bilan de matière pour la cellule : la variation de quantité de matière à l'intérieur ($V \cdot dC_{int}/dt$) est égale au flux traversant la surface ($J \cdot S_m$).
* **Q4 :** Analysez l'asymptote de la fonction $v(C_{ext})$ lorsque $C_{ext} \to +\infty$.

---

### 📋 Corrigé détaillé et analyse des résultats

#### 1. Expression du flux et de la perméabilité
D'après la première loi de Fick, le flux molaire à travers l'épaisseur $e$ de la membrane s'exprime par :
$$J = -D \frac{dC_{mem}}{dx} \approx D \frac{K \cdot C_{ext} - K \cdot C_{int}}{e}$$
En factorisant, on obtient :
$$J = \frac{D \cdot K}{e} (C_{ext} - C_{int}) = P \cdot (C_{ext} - C_{int})$$
La perméabilité membranaire est donc définie par :
$$P = \frac{D \cdot K}{e}$$

#### 2. Application numérique et esprit critique
Convertissons l'épaisseur $e = 5\text{ nm} = 5 \times 10^{-7}\text{ cm}$.
$$P = \frac{10^{-7}\text{ cm}^2\cdot\text{s}^{-1} \times 10}{5 \times 10^{-7}\text{ cm}} = 2\text{ cm}\cdot\text{s}^{-1}$$

* **Analyse critique :** Ce modèle de Overton (le "carré hydrophobe") suppose que la membrane est un milieu isotrope et continu. Or, la membrane plasmique est une **bicouche lipidique fluide** asymétrique, traversée par des protéines intrinsèques, et dont le cœur hydrophobe est très mince. Pour des molécules polaires ou des ions, le coefficient de partage $K$ est extrêmement faible ($\ll 1$) car l'enthalpie libre de transfert d'un milieu aqueux vers un milieu hydrocarboné est fortement endergonique. Le modèle sous-estime ou omet la contribution des pores protéiques (aquaporines, canaux ioniques) qui permettent des perméabilités sélectives sans passer par la phase lipidique.

#### 3. Cinétique d'accumulation
Le bilan molaire pour la cellule s'écrit :
$$V \frac{dC_{int}}{dt} = J \cdot S_m = S_m \cdot P \cdot (C_{ext} - C_{int})$$
Posons $\tau = \frac{V}{S_m \cdot P}$ (temps caractéristiques d'échange). L'équation différentielle devient :
$$\frac{dC_{int}}{dt} + \frac{1}{\tau} C_{int} = \frac{C_{ext}}{\tau}$$
La résolution de cette équation linéaire du premier ordre avec la condition initiale $C_{int}(0) = 0$ donne :
$$C_{int}(t) = C_{ext} \left( 1 - e^{-t/\tau} \right)$$
À long terme ($t \to +\infty$), $C_{int}$ tend vers $C_{ext}$ (équilibre de concentration par simple diffusion passive).

#### 4. Transport facilité (Michaelis-Menten)
* $V_{max}$ représente la vitesse maximale de transport lorsque tous les transporteurs membranaires sont saturés par le soluté.
* $K_m$ (constante de Michaelis) correspond à la concentration externe pour laquelle la vitesse de transport est égale à la moitié de la vitesse maximale ($\frac{V_{max}}{2}$). Elle traduit l'affinité du transporteur pour son substrat (plus $K_m$ est faible, plus l'affinité est forte).

#### 5. Analyse critique énergétique du transport actif secondaire
Le transport couplé (symport ou antiport) de solutés contre leur gradient de concentration est rendu possible par l'utilisation d'un gradient ionique préexistant (souvent $\text{Na}^+$ ou $\text{H}^+$). 
* **Source d'énergie :** Ce gradient ionique est maintenu loin de l'équilibre thermodynamique grâce à des pompes ATPasiques transmembranaires (ex : $\text{Na}^+/\text{K}^+$-ATPase), consommatrices directes d'ATP.
* **Limites thermodynamiques du modèle :** Si la diffusion simple tend inéluctablement vers une annulation du gradient de concentration ($C_{int} = C_{ext}$), le transport actif couplé permet un **stockage d'énergie chimique** sous forme d'un gradient électrochimique élevé. Cependant, ce système a une limite énergétique stricte dictée par la variation d'énergie libre globale $\Delta G = \Delta G_{\text{gradient ionique}} + \Delta G_{\text{soluté}} \le 0$. Si le gradient ionique s'effondre (par exemple en cas d'hypoxie cellulaire bloquant la synthèse d'ATP), le transport actif secondaire cesse et les cellules subissent une turgescence ou une lyse par déséquilibre osmotique.