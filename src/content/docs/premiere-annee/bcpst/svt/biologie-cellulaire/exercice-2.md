---
title: 'Exercice 2 : Enzymologie et cinétique de Michaelis-Menten'
description: 'Problème d entraînement type concours pour BCPST.'
---

### 🌐 Énoncé du problème / Étude de cas

Dans le cadre de l'étude de la glycolyse chez la levure *Saccharomyces cerevisiae*, on s'intéresse à une enzyme clé, la phosphoglucose isomérase (PGI), qui catalyse la conversion réversible du glucose-6-phosphate (G6P) en fructose-6-phosphate (F6P). 

L'objectif de ce problème est d'étudier les paramètres cinétiques de cette enzyme par une approche de biochimie quantitative, d'analyser l'impact d'un effecteur métabolique, et de discuter les limites biologiques du modèle mathématique utilisé (modèle de Michaelis-Menten).

**Données expérimentales préliminaires :**
Les expériences sont menées à $T = 30\text{ }\text{°C}$ et $\text{pH} = 7.4$ (conditions physiologiques standard de la cellule). La concentration totale en enzyme introduite dans le milieu réactionnel est fixée à $E_0 = 0.1\text{ }\mu\text{mol}\cdot\text{L}^{-1}$.

---

### ❓ Questions progressives

1. **Rappel du modèle et hypothèses**
   Écrire le schéma réactionnel simple à une étape réversible menant à la cinétique de Michaelis-Menten pour une enzyme $E$ et un substrat $S$ donnant un produit $P$, en passant par un complexe enzyme-substrat $ES$. 
   Enoncer les hypothèses fondamentales (notamment l'approximation de l'état quasi-stationnaire de Briggs et Haldane) qui permettent d'aboutir à l'équation de la vitesse initiale $v_i$.

2. **Établissement de l'équation cinétique**
   Démontrer l'expression de la vitesse initiale $v_i$ en fonction de la concentration initiale en substrat $[S]_0$, de la constante de Michaelis $K_M$ et de la vitesse maximale $V_{\max}$. Préciser les unités de chaque terme.

3. **Exploitation graphique et détermination des paramètres**
   On mesure la vitesse initiale $v_i$ de la réaction pour différentes concentrations en G6P. Les résultats permettent de tracer la représentation de Lineweaver-Burk ($\frac{1}{v_i}$ en fonction de $\frac{1}{[S]_0}$).
   On obtient la droite de régression linéaire suivante : 
   $$\frac{1}{v_i} = 1.5 \cdot 10^4 \cdot \frac{1}{[S]_0} + 2.0 \cdot 10^2$$
   *(avec $\frac{1}{v_i}$ en $\min\cdot\mu\text{mol}^{-1}\cdot\text{L}$ et $\frac{1}{[S]_0}$ en $\text{mmol}^{-1}\cdot\text{L}$)*.
   Déterminer graphiquement ou par calcul les valeurs numériques de $V_{\max}$ et de $K_M$ pour la PGI (en précisant les unités). En déduire la constante catalytique $k_{\text{cat}}$ (ou nombre de turnover).

4. **Analyse critique des limites du modèle**
   Le milieu intracellulaire de la levure est extrêmement encombré (concentration macromoléculaire totale estimée entre $80$ et $300\text{ g}\cdot\text{L}^{-1}$, phénomène de *crowding* moléculaire). De plus, le rapport $\frac{[E]_0}{[S]_0}$ dans certaines zones du cytoplasme peut localement s'élever. 
   Discuter la validité des hypothèses du modèle de Michaelis-Menten dans le contexte in vivo. Quels biais peut-on attendre si l'on extrapole directement les $K_M$ in vitro obtenus en solution diluée ?

5. **Étude de l'inhibition**
   On étudie l'effet du 6-phosphogluconate (un métabolite de la voie des pentoses phosphates) sur l'activité de la PGI. Les expériences montrent que $V_{\max}$ reste inchangée en présence de cet effecteur, mais que la valeur apparente de $K_M$ augmente. 
   Identifier le type d'inhibition en jeu. Proposer un mécanisme moléculaire simple pour rendre compte de cet effet.

---

### 💡 Pistes & Indications

- **Q1 & Q2 :** Pensez à exprimer la vitesse de formation du produit $v_i = \frac{d[P]}{dt}_{t=0} = k_2[ES]$. Appliquez l'AEQS (Approximation de l'État Quasi-Stationnaire) sur le complexe $[ES]$ dès les premiers instants de la réaction.
- **Q3 :** Identifiez les ordonnées à l'origine et les pentes de la transformation de Lineweaver-Burk : $\frac{1}{v_i} = \frac{K_M}{V_{\max}} \frac{1}{[S]_0} + \frac{1}{V_{\max}}$.
- **Q4 :** Sondez les concepts de diffusion restreinte, de viscosité micro-environnementale et l'hypothèse de l'excès de substrat par rapport à l'enzyme ($[S]_0 \gg [E]_0$).
- **Q5 :** Analysez l'impact sur l'affinité apparente de l'enzyme pour son substrat sans modifier la capacité maximale de transformation du complexe.

---

### 📋 Corrigé détaillé et analyse des résultats

#### 1. Rappel du modèle et hypothèses
Le schéma réactionnel de base est :
$$E + S \underset{k_{-1}}{\overset{k_1}{\rightleftharpoons}} ES \overset{k_2}{\longrightarrow} E + P$$

**Hypothèses fondamentales :**
* **Irréversibilité initiale :** On se place à $t = 0$ (vitesse initiale $v_i$), la concentration en produit $[P] \approx 0$, ce qui annule la réaction inverse $E + P \to ES$.
* **Approximation de l'état quasi-stationnaire (AEQS de Briggs-Haldane) :** Après une phase transitoire très brève (pre-steady state), la concentration du complexe enzyme-substrat $[ES]$ varie très peu au cours du temps : $\frac{d[ES]}{dt} \approx 0$.
* **Conservation de l'enzyme :** L'enzyme totale est sous forme libre ou liée : $[E]_0 = [E] + [ES]$.

#### 2. Établissement de l'équation cinétique
La vitesse initiale de la réaction est la vitesse de formation du produit :
$$v_i = k_2[ES]$$

D'après l'AEQS :
$$\frac{d[ES]}{dt} = k_1[E][S] - (k_{-1} + k_2)[ES] = 0$$
$$k_1([E]_0 - [ES])[S] = (k_{-1} + k_2)[ES]$$

En factorisant $[ES]$ :
$$[ES] = \frac{[E]_0 [S]}{\frac{k_{-1} + k_2}{k_1} + [S]}$$

On pose la **constante de Michaelis** $K_M = \frac{k_{-1} + k_2}{k_1}$ (exprimée en $\text{mol}\cdot\text{L}^{-1}$). 
La vitesse maximale $V_{\max}$ est atteinte lorsque toute l'enzyme est complexée ($[ES] = [E]_0$), soit $V_{\max} = k_2 [E]_0$.

On obtient l'équation de Michaelis-Menten :
$$v_i = \frac{V_{\max} [S]_0}{K_M + [S]_0}$$

#### 3. Exploitation graphique et détermination des paramètres
L'équation de Lineweaver-Burk s'écrit :
$$\frac{1}{v_i} = \frac{K_M}{V_{\max}} \cdot \frac{1}{[S]_0} + \frac{1}{V_{\max}}$$

Par identification avec l'équation de la droite donnée dans l'énoncé ($\frac{1}{v_i} = 1.5 \cdot 10^4 \cdot \frac{1}{[S]_0} + 2.0 \cdot 10^2$) :
* **Ordonnée à l'origine :** 
  $$\frac{1}{V_{\max}} = 2.0 \cdot 10^2 \min\cdot\mu\text{mol}^{-1}\cdot\text{L} \implies V_{\max} = \frac{1}{2.0 \cdot 10^2} = 5.0 \cdot 10^{-3}\text{ }\mu\text{mol}\cdot\text{L}^{-1}\cdot\min^{-1}$$

* **Pente de la droite :** 
  $$\text{Pente} = \frac{K_M}{V_{\max}} = 1.5 \cdot 10^4 \min$$
  $$K_M = 1.5 \cdot 10^4 \times V_{\max} = 1.5 \cdot 10^4 \times 5.0 \cdot 10^{-3} = 75\text{ }\mu\text{mol}\cdot\text{L}^{-1} \text{ (ou } 0.075\text{ mmol}\cdot\text{L}^{-1}\text{)}$$

* **Constante catalytique ($k_{\text{cat}}$) :**
  Sachant que $V_{\max} = k_{\text{cat}} [E]_0$ avec $[E]_0 = 0.1\text{ }\mu\text{mol}\cdot\text{L}^{-1} = 0.1 \cdot 10^{-6}\text{ mol}\cdot\text{L}^{-1}$ (exprimons $V_{\max}$ en $\text{mol}\cdot\text{L}^{-1}\cdot\text{s}^{-1}$ pour $k_{\text{cat}}$ en $\text{s}^{-1}$) :
  $$V_{\max} = \frac{5.0 \cdot 10^{-3}\text{ }\mu\text{mol}\cdot\text{L}^{-1}}{60\text{ s}} = 8.33 \cdot 10^{-5}\text{ }\mu\text{mol}\cdot\text{L}^{-1}\cdot\text{s}^{-1} = 8.33 \cdot 10^{-11}\text{ mol}\cdot\text{L}^{-1}\cdot\text{s}^{-1}$$
  *Attทุนion aux unités :* reprenons proprement : 
  $[E]_0 = 0.1\text{ }\mu\text{mol}\cdot\text{L}^{-1} = 0.1 \cdot 10^{-3}\text{ mmol}\cdot\text{L}^{-1}$.
  $V_{\max} = \frac{1}{2.0 \cdot 10^2} = 0.005\text{ }\mu\text{mol}\cdot\text{L}^{-1}\cdot\min^{-1}$ ? Non, attention aux unités de l'énoncé : $\frac{1}{v_i}$ en $\min\cdot\mu\text{mol}^{-1}\cdot\text{L}$ signifie que $v_i$ est en $\mu\text{mol}\cdot\text{L}^{-1}\cdot\min^{-1}$.
  Donc $V_{\max} = 5.0 \cdot 10^{-3}\text{ }\mu\text{mol}\cdot\text{L}^{-1}\cdot\min^{-1}$.
  En unités SI ($\text{mol}\cdot\text{L}^{-1}\cdot\text{s}^{-1}$) : 
  $V_{\max} = \frac{5.0 \cdot 10^{-3}}{60} = 8.33 \cdot 10^{-5}\text{ }\mu\text{mol}\cdot\text{L}^{-1}\cdot\text{s}^{-1} = 8.33 \cdot 10^{-11}\text{ mol}\cdot\text{L}^{-1}\cdot\text{s}^{-1}$.
  Avec $[E]_0 = 0.1\text{ }\mu\text{mol}\cdot\text{L}^{-1} = 10^{-7}\text{ mol}\cdot\text{L}^{-1}$ :
  $$k_{\text{cat}} = \frac{V_{\max}}{[E]_0} = \frac{8.33 \cdot 10^{-11}}{10^{-7}} = 8.33 \cdot 10^{-4}\text{ s}^{-1}$$
  *(Note pédagogique : ordre de grandeur volontairement bas pour l'exercice, les enzymes réelles ont souvent des $k_{\text{cat}}$ bien plus élevés, de l'ordre de $10^2$ à $10^4\text{ s}^{-1}$).*

#### 4. Analyse critique des limites du modèle *in vivo*
L'application directe de ce modèle *in vitro* à la cellule présente plusieurs limites majeures :
* **L'encombrement stérique (*crowding*) :** Le cytoplasme n'est pas une solution aqueuse diluée idéale. Les concentrations élevées en macromolécules réduisent le volume de diffusion disponible, modifient les coefficients de diffusion des molécules et peuvent induire des interactions faibles non spécifiques, modifiant ainsi les constantes cinétiques réelles ($K_M$ *in vivo* souvent différentes).
* **L'hypothèse $[S]_0 \gg [E]_0$ :** Dans certaines micro-compartimentations cellulaires, la concentration locale d'enzymes peut approcher celle du substrat, ce qui invalide l'approximation de steady-state classique de Briggs-Haldane.
* **Canalisation métabolique (*metabolic channeling*) :** La PGI n'est pas isolée ; elle est souvent couplée physiquement ou fonctionnellement aux enzymes adjacentes de la glycolyse (comme l'hexokinase). Le substrat n'est donc pas uniformément disponible en solution libre.

#### 5. Étude de l'inhibition
* **Type d'inhibition :** Le fait que $V_{\max}$ reste inchangée tandis que $K_M$ augmente caractérise une **inhibition compétitive**.
* **Mécanisme moléculaire :** L'inhibiteur (le 6-phosphogluconate, structure proche du G6P) se fixe de manière réversible sur le site actif de la PGI, empêchant ainsi l'accès du substrat naturel (G6P). Cet effet est réversible et peut être surmonté en augmentant fortement la concentration en substrat $[S]_0$.