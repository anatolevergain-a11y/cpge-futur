---
title: 'Exercice 1 : Constante de solubilité K_s, effet d ion commun et facteur pH'
description: 'Problème d entraînement type concours.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Les équilibres de précipitation couplés à des réactions acido-basiques ou de complexation constituent des outils fondamentaux en chimie analytique pour la séparation sélective des ions en solution aqueuse. Ce problème s'intéresse à l'étude thermodynamique et quantitative de la précipitation de l'hydroxyde de zinc $\text{Zn(OH)}_2\text{(s)}$. 

Le zinc est un élément amphothère dont les espèces en solution jouent un rôle clé dans les procédés industriels et environnementaux. L'objectif de ce problème est d'établir les conditions de précipitation et de dissolution de $\text{Zn(OH)}_2\text{(s)}$ en milieu aqueux à $T = 298\text{ K}$, en évaluant l'influence de l'effet d'ion commun et du pH, avant d'aborder les limites du modèle thermodynamique idéal.

Données thermodynamiques à $T = 298\text{ K}$ :
* Produit de solubilité de l'hydroxyde de zinc : $K_{s} = [\text{Zn}^{2+}][\text{OH}^{-}]^{2} = 10^{-16.0}$
* Constantes de dissociation (ou de formation globale des complexes hydroxydés) :
  L'espèce $\text{Zn}^{2+}$ forme des complexes successifs avec l'ion hydroxyde :
  - $\text{Zn}^{2+} + \text{OH}^{-} \rightleftharpoons \text{Zn(OH)}^{+}$ : $\beta_1 = 10^{5.0}$
  - $\text{Zn}^{2+} + 2\,\text{OH}^{-} \rightleftharpoons \text{Zn(OH)}_2\text{(aq)}$ : $\beta_2 = 10^{11.1}$
  - $\text{Zn}^{2+} + 3\,\text{OH}^{-} \rightleftharpoons \text{Zn(OH)}_3^{-}$ : $\beta_3 = 10^{13.6}$
  - $\text{Zn}^{2+} + 4\,\text{OH}^{-} \rightleftharpoons \text{Zn(OH)}_4^{2-}$ : $\beta_4 = 10^{14.8}$
* Produit ionique de l'eau : $K_e = 10^{-14.0}$
* Concentrations standard : $C^\circ = 1\text{ mol}\cdot\text{L}^{-1}$

---

### ❓ Questions progressives (incluant une analyse critique du modèle)

1. **Définition et solubilité simple :** Écrire l'équation de mise en solution (dissolution) de $\text{Zn(OH)}_2\text{(s)}$ en négligeant dans un premier temps la formation des complexes hydroxyde dissous. Exprimer la solubilité $s$ (en $\text{mol}\cdot\text{L}^{-1}$) de $\text{Zn(OH)}_2\text{(s)}$ dans l'eau pure en fonction de $K_s$. Calculer sa valeur numérique et le pH de la solution saturée.
2. **Effet d'ion commun :** On prépare une solution en introduisant du nitrate de zinc $\text{Zn(NO}_3)_2$ à la concentration initiale $C_0 = 10^{-2}\text{ mol}\cdot\text{L}^{-1}$ dans de l'eau, puis on ajuste le pH. Déterminer la valeur limite du pH au-delà de laquelle la précipitation de $\text{Zn(OH)}_2\text{(s)}$ commence.
3. **Diagramme de solubilité et influence du pH :** 
   a. En tenant compte cette fois de l'ensemble des espèces dissoutes du zinc ($\text{Zn}^{2+}$, $\text{Zn(OH)}^{+}$, $\text{Zn(OH)}_2\text{(aq)}$, $\text{Zn(OH)}_3^{-}$, $\text{Zn(OH)}_4^{2-}$), exprimer la concentration analytique (ou solubilité globale) $s$ du zinc dissous en fonction de $[\text{OH}^{-}]$, de $K_s$ et des constantes $\beta_i$.
   b. Montrer que $s$ passe par un minimum. À quel domaine de pH correspond ce minimum ?
4. **Analyse critique du modèle :** 
   a. Les expressions thermodynamiques précédentes utilisent les concentrations molaires des espèces. Quelle approximation majeure fait-on implicitement en identifiant activité et concentration ?
   b. Dans quel domaine de concentration cette approximation est-elle mise en défaut et pourquoi le modèle thermodynamique simple s'écarte-t-il alors de l'expérience ?

---

### 💡 Pistes & Indications méthodologiques

* **Q1 :** Utilisez un tableau d'avancement par volume unitaire. Reliez $[\text{Zn}^{2+}]$ et $[\text{OH}^{-}]$ à l'aide de la stœchiométrie du solide et de $K_s$. N'oubliez pas l'auto-protolyse de l'eau pour le calcul précis du pH si nécessaire, ou vérifiez si l'autoprotolyse est négligeable devant les ions $\text{OH}^{-}$ libérés par le solide.
* **Q2 :** Le début de précipitation correspond à l'égalité entre le produit ionique réel et la constante de solubilité $K_s$. La concentration en ions $\text{Zn}^{2+}$ est fixée par $C_0$.
* **Q3 :** Écrivez la conservation de la matière pour le zinc total dissous. Exprimez chaque concentration d'espèce dissoute en fonction de $[\text{Zn}^{2+}]$ ou directement de $[\text{OH}^{-}]$ en utilisant $K_s$ pour la zone saturée (où le solide est présent).
* **Q4 :** Pensez à la force ionique du milieu et à la loi de Debye-Hückel.

---

### 📋 Corrigé détaillé pas à pas

#### 1. Solubilité simple de $\text{Zn(OH)}_2\text{(s)}$ dans l'eau pure
L'équation de dissolution s'écrit :
$$\text{Zn(OH)}_2\text{(s)} \rightleftharpoons \text{Zn}^{2+}\text{(aq)} + 2\,\text{OH}^{-}\text{(aq)}$$

Si on néglige la formation des complexes en solution, la relation d'équilibre stœchiométrique dans l'eau pure indique qu'à l'état d'équilibre :
* $[\text{Zn}^{2+}] = s$
* $[\text{OH}^{-}] = 2s + [\text{H}_3\mathrm{O}^+]_{\text{eau}}$

En milieu basique (car la dissolution libère des ions $\text{OH}^{-}$), $[\text{H}_3\mathrm{O}^+] \ll [\text{OH}^{-}]$, donc $[\text{OH}^{-}] \approx 2s$.
Le produit de solubilité s'exprime par :
$$K_s = [\text{Zn}^{2+}][\text{OH}^{-}]^2 = s \cdot (2s)^2 = 4s^3$$

On en déduit l'expression de la solubilité :
$$s = \left(\frac{K_s}{4}\right)^{1/3}$$

A.N. : $K_s = 10^{-16.0} = 10^{-16}$
$$s = \left(\frac{10^{-16}}{4}\right)^{1/3} = \left(0{,}25 \times 10^{-16}\right)^{1/3} = \left(25 \times 10^{-18}\right)^{1/3} \approx 2{,}92 \times 10^{-6}\text{ mol}\cdot\text{L}^{-1}$$

La concentration en ions $\text{OH}^{-}$ est $[\text{OH}^{-}] = 2s \approx 5{,}85 \times 10^{-6}\text{ mol}\cdot\text{L}^{-1}$.
Le pOH vaut :
$$\text{pOH} = -\log_{10}(5{,}85 \times 10^{-6}) \approx 5{,}23$$
Le pH de la solution saturée est donc :
$$\text{pH} = 14{,}0 - \text{pOH} = 14{,}0 - 5{,}23 = 8{,}77$$

#### 2. Effet d'ion commun
On introduit $\text{Zn(NO}_3)_2$ tel que $[\text{Zn}^{2+}]_{\text{initiale}} = C_0 = 10^{-2}\text{ mol}\cdot\text{L}^{-1}$. 
La précipitation de $\text{Zn(OH)}_2\text{(s)}$ commence dès que le produit des concentrations effectif atteint la valeur du produit de solubilité $K_s$ :
$$[\text{Zn}^{2+}][\text{OH}^{-}]^2 = K_s$$

Comme la concentration en ions $\text{Zn}^{2+}$ est imposée par l'ion commun (et que la quantité précipitée au seuil est infiniment faible), on a $[\text{Zn}^{2+}] \approx C_0 = 10^{-2}\text{ mol}\cdot\text{L}^{-1}$.
On isole la concentration en ions $\text{OH}^{-}$ au seuil de précipitation :
$$[\text{OH}^{-}] = \sqrt{\frac{K_s}{C_0}} = \sqrt{\frac{10^{-16}}{10^{-2}}} = \sqrt{10^{-14}} = 10^{-7}\text{ mol}\cdot\text{L}^{-1}$$

En déduire le pOH et le pH :
$$\text{pOH} = -\log_{10}(10^{-7}) = 7{,}0 \implies \text{pH} = 14{,}0 - 7{,}0 = 7{,}0$$

Le début de la précipitation de $\text{Zn(OH)}_2\text{(s)}$ intervient pour **$\text{pH} = 7{,}0$**.

#### 3. Diagramme de solubilité et influence du pH
**a.** La concentration analytique $s$ du zinc dissous en présence du solide est la somme des concentrations de toutes les espèces contenant du zinc en solution :
$$s = [\text{Zn}^{2+}] + [\text{Zn(OH)}^{+}] + [\text{Zn(OH)}_2\text{(aq)}] + [\text{Zn(OH)}_3^{-}] + [\text{Zn(OH)}_4^{2-}]$$

À l'aide des constantes globales de formation $\beta_i$ (avec $\beta_0 = 1$), on a pour chaque espèce $\text{Zn(OH)}_i^{(2-i)+}$ :
$$[\text{Zn(OH)}_i^{(2-i)+}] = \beta_i [\text{Zn}^{2+}][\text{OH}^{-}]^i$$
où l'on pose par convention $\beta_0 = 1$.

En présence du précipité $\text{Zn(OH)}_2\text{(s)}$, la concentration en ions zinc est fixée par l'équilibre de solubilité :
$$[\text{Zn}^{2+}] = \frac{K_s}{[\text{OH}^{-}]^2}$$

En injectant cette expression dans la somme :
$$s = \frac{K_s}{[\text{OH}^{-}]^2} \sum_{i=0}^{4} \beta_i [\text{OH}^{-}]^i$$
$$s = K_s \left( \frac{1}{[\text{OH}^{-}]^2} + \frac{\beta_1}{[\text{OH}^{-}]} + \beta_2 + \beta_3 [\text{OH}^{-}] + \beta_4 [\text{OH}^{-}]^2 \right)$$

**b.** Analysons les variations de $s$ en fonction de $[\text{OH}^{-}]$ (ou du pH) :
* En milieu très acide ($\text{pH}$ faible, $[\text{OH}^{-}]$ très faible), le terme dominant est $\frac{K_s}{[\text{OH}^{-}]^2}$, donc $s$ est très grand (le solide se dissout totalement). $s$ décroît lorsque le pH augmente.
* En milieu très basique ($\text{pH}$ élevé, $[\text{OH}^{-}]$ très grand), le terme dominant devient $K_s \beta_4 [\text{OH}^{-}]^2$, traduisant la formation du complexe soluble anionique $\text{Zn(OH)}_4^{2-}$ (phénomène d'amphotérie). $s$ croît alors avec le pH.

La fonction $s([\text{OH}^{-}])$ passe donc par un **minimum** pour une valeur intermédiaire du pH, correspondant à la zone où la forme neutre $\text{Zn(OH)}_2\text{(aq)}$ ou le domaine de prédominance des formes peu chargées est majoritaire.

#### 4. Analyse critique du modèle
**a.** L'approximation fondamentale réalisée ici consiste à utiliser les **concentrations molaires** (exprimées en $\text{mol}\cdot\text{L}^{-1}$) à la place des **activités thermodynamiques** des espèces ioniques en solution. Le produit de solubilité s'écrit rigoureusement :
$$K_s^\circ = \frac{a(\text{Zn}^{2+}) \cdot a(\text{OH}^{-})^2}{a(\text{Zn(OH)}_2\text{, s})} = \gamma_{\text{Zn}^{2+}} [\text{Zn}^{2+}] \cdot \left(\gamma_{\text{OH}^{-}} [\text{OH}^{-}]\right)^2$$
où $\gamma_i$ représente le coefficient d'activité de l'ion $i$ (avec $\gamma(\text{Zn(OH)}_2\text{, s}) = 1$ pour le corps pur solide). En milieu dilué, on pose $\gamma_i \approx 1$.

**b.** Cette approximation est mise en défaut lorsque la **force ionique** $I = \frac{1}{2} \sum c_i z_i^2$ du milieu devient élevée (typiquement $I > 0{,}1\text{ mol}\cdot\text{L}^{-1}$), ce qui est le cas en présence d'une forte concentration d'électrolytes indifférents (par exemple, des concentrations importantes de sels comme $\text{KNO}_3$ ou $\text{NaNO}_2$). 

Dans ce cas, les interactions électrostatiques entre ions en solution augmentent, les coefficients d'activité $\gamma_i s'écartent$ significativement de $1$ (diminuant selon la loi de Debye-Hückel). Par conséquent, la **solubilité expérimentale mesurée s'avère supérieure** à celle prédite par le modèle idéal basé uniquement sur $K_s$ et les concentrations, ce phénomène étant connu sous le nom d'effet de sel (ou augmentation de la solubilité par la force ionique).