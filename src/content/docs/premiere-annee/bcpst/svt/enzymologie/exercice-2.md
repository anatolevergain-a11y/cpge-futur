---
title: 'Exercice 2 : Inhibiteurs compétitifs et non compétitifs'
description: 'Problème d entraînement type concours officiel.'
---

# Problème guidé : Analyse thermodynamique et cinétique de l'inhibition enzymatique

**Filière :** BCPST  
**Matière :** Sciences de la Vie et de la Terre (SVT)  
Chapitre: ** Cinétique enzymatique et régulation métabolique  
**Thème :** Caractérisation moléculaire des inhibiteurs compétitifs et non compétitifs  

---

## 1. Énoncé

Dans le cadre de l'étude d'une voie métabolique impliquée chez *Escherichia coli*, on s'intéresse à l'enzyme $E$ (une oxydoréductase) qui catalyse la transformation d'un substrat $S$ en un produit $P$. Afin de comprendre les mécanismes de régulation allostérique et d'identifier de potentielles molécules thérapeutiques antibactériennes, on étudie l'effet de deux molécules inhibitrices, notées $I_1$ et $I_2$, sur la cinétique de cette réaction.

Les expériences sont réalisées à température et $\text{pH}$ constants, avec une concentration totale d'enzyme $[E]_0 = 10^{-6}\text{ mol}\cdot\text{L}^{-1}$.

### Données expérimentales préliminaires :
* Modèle de Michaelis-Menten de base (en l'absence d'inhibiteur) :
  $$\text{v} = \frac{v_{\text{max}} \cdot [S]}{K_m + [S]}$$
* Les vitesses initiales $v$ sont exprimées en $\mu\text{mol}\cdot\text{L}^{-1}\cdot\text{min}^{-1}$ et les concentrations $[S]$ en $\text{mmol}\cdot\text{L}^{-1}$.

---

## 2. Questions

### Partie A : Rappels et analyse de la cinétique de base
1. Établir l'équation de la réaction catalytique standard en faisant intervenir le complexe enzyme-substrat $(ES)$. Préciser l'hypothèse de l'état stationnaire (ou quasi-stationnaire) formulée par Briggs et Haldane.
2. Définir graphiquement ou algébriquement les paramètres $K_m$ et $v_{\text{max}}$. Quelle est l'unité de $K_m$ ?

### Partie B : Étude de l'inhibiteur $I_1$
En présence de l'inhibiteur $I_1$ à une concentration fixe $[I_1] = 2\text{ mmol}\cdot\text{L}^{-1}$, on mesure les vitesses initiales pour différentes concentrations de $S$. 
L'exploitation des résultats sous la forme d'une représentation de Lineweaver-Burk ($\frac{1}{v}$ en fonction de $\frac{1}{[S]}$) montre que les droites obtenues en présence et en l'absence de $I_1$ se coupent toutes deux sur l'axe des ordonnées ($\frac{1}{v}$).

3. Identifier le type d'inhibition exercée par $I_1$. Justifier rigoureusement à partir de la représentation graphique.
4. Écrire le schéma réactionnel incluant l'enzyme $E$, le substrat $S$, le produit $P$ et l'inhibiteur $I_1$ avec ses constantes de dissociation.
5. Démontrer l'équation de la vitesse initiale apparente $v_i$ en présence de $I_1$ :
   $$v_i = \frac{v_{\text{max}} \cdot [S]}{K_m \left(1 + \frac{[I_1]}{K_i}\right) + [S]}$$
   où $K_i$ est la constante de dissociation du complexe enzyme-inhibiteur ($EI$).

### Partie C : Étude de l'inhibiteur $I_2$
En présence de l'inhibiteur $I_2$ à la concentration $[I_2] = 1\text{ mmol}\cdot\text{L}^{-1}$, la représentation de Lineweaver-Burk montre que la pente de la droite est modifiée ainsi que son ordonnée à l'origine, tandis que l'abscisse à l'origine est inchangée.

6. Quel est le type d'inhibition de $I_2$ ? En déduire l'effet de cet inhibiteur sur $v_{\text{max}}$ et $K_m$.
7. Où se fixe l'inhibiteur $I_2$ sur l'enzyme $E$ par rapport au site catalytique ?

### Partie D : Analyse critique et limites du modèle
8. **Synthèse et esprit critique :** Le modèle de Michaelis-Menten et les équations d'inhibition reposent sur des hypothèses fortes (système homogène, absence de coopérativité, concentrations stationnaires). Discuter des limites de ce modèle *in vivo* dans le cytoplasme d'une cellule bactérienne.

---

## 3. Pistes et conseils méthodologiques

* **Pour la partie A :** Pensez à la stœchiométrie apparente de la réaction et rappelez que l'hypothèse de l'état stationnaire suppose que la variation temporelle de la concentration du complexe $[ES]$ est nulle ($\frac{d[ES]}{dt} \approx 0$).
* **Pour la partie B :** L'intersection sur l'axe des ordonnées en représentation double-réciproque signifie que $\frac{1}{v_{\text{max, app}}} = \frac{1}{v_{\text{max}}}$. Le paramètre maximal reste inaffecté.
* **Pour la partie C :** Une abscisse à l'origine inchangée implique que $-\frac{1}{K_{m,\text{app}}} = -\frac{1}{K_m}$, donc $K_{m,\text{app}} = K_m$.
* **Pour la partie D :** Pensez aux notions de macromolécules encombrées, de compartimentation, et au fait que les enzymes ne sont pas toujours libres en solution diluée.

---

## 4. Corrigé détaillé

### Partie A : Rappels et analyse de la cinétique de base
1. Le schéma réactionnel de base est :
   $$E + S \underset{k_{-1}}{\overset{k_1}{\rightleftharpoons}} ES \xrightarrow{k_2} E + P$$
   **Hypothèse de l'état stationnaire :** Après une phase transitoire très brève, la concentration du complexe enzyme-substrat $[ES]$ est considérée comme constante au cours du temps : $\frac{d[ES]}{dt} = 0$.
2. 
   * $v_{\text{max}}$ : Vitesse maximale de la réaction, atteinte lorsque l'enzyme est saturée par le substrat ($[ES] \approx [E]_0$). Unité : $\mu\text{mol}\cdot\text{L}^{-1}\cdot\text{min}^{-1}$.
   * $K_m$ (Constante de Michaelis) : Concentration de substrat pour laquelle la vitesse initiale est égale à la moitié de la vitesse maximale ($\frac{v_{\text{max}}}{2}$). Unité : $\text{mmol}\cdot\text{L}^{-1}$ (ou $\text{mol}\cdot\text{L}^{-1}$).

---

### Partie B : Étude de l'inhibiteur $I_1$
3. Les droites se coupant sur l'axe des ordonnées ($\frac{1}{v}$), l'ordonnée à l'origine $\frac{1}{v_{\text{max}}}$ est inchangée ($\text{v}_{\text{max}}$ est constante), tandis que la pente varie. Il s'agit d'une **inhibition compétitive**.
4. Schéma réactionnel :
   $$E + S \underset{k_{-1}}{\overset{k_1}{\rightleftharpoons}} ES \xrightarrow{k_2} E + P$$
   $$E + I_1 \underset{k_{-i}}{\overset{k_i}{\rightleftharpoons}} EI_1$$
5. *Démonstration (type cours) :*
   * Bilan des concentrations : $[E]_0 = [E] + [ES] + [EI_1]$
   * Constantes d'équilibre : $K_m = \frac{[E][S]}{[ES]}$ et $K_i = \frac{[E][I_1]}{[EI_1]} \implies [EI_1] = \frac{[E][I_1]}{K_i}$
   * En injectant $[EI_1]$ dans la conservation :
     $[E]_0 = [E] + [ES] + \frac{[E][I_1]}{K_i} = [E]\left(1 + \frac{[I_1]}{K_i}\right) + [ES]$
   * En exprimant $[E]$ par le rapport de $K_m$ : $[E] = \frac{[ES] \cdot K_m}{[S]}$
   * On obtient : $[E]_0 = \frac{[ES] \cdot K_m}{[S]}\left(1 + \frac{[I_1]}{K_i}\right) + [ES] = [ES] \left[ \frac{K_m}{[S]}\left(1 + \frac{[I_1]}{K_i}\right) + 1 \right]$
   * Sachant que $v_i = k_2[ES]$ et $v_{\text{max}} = k_2[E]_0$, on isole $v_i$ pour aboutir à l'expression demandée.

---

### Partie C : Étude de l'inhibiteur $I_2$
6. L'abscisse à l'origine ($-\frac{1}{K_m}$) étant inchangée en double-réciproque, $K_m$ ne varie pas. L'ordonnée à l'origine ($\frac{1}{v_{\text{max}}}$) et la pente augmentent. Il s'agit d'une **inhibition non compétitive** (pure). L'inhibiteur réduit $v_{\text{max}}$ sans modifier $K_m$.
7. L'inhibiteur $I_2$ se fixe sur un site distinct du site actif (site allostérique), que l'enzyme soit libre ($E$) ou liée au substrat ($ES$), modifiant la conformation de l'enzyme et altérant sa capacité catalytique ($k_2$ apparente diminuée) sans affecter l'affinité apparente pour le substrat ($K_m$ inchangée).

---

### Partie D : Analyse critique et limites du modèle
8. **Analyse critique des limites :**
   * **Milieu homogène vs Milieu hétérogène :** Le modèle in vitro postule une solution idéale et homogène. Dans le cytoplasme bactérien (milieu gélifié, encombré de macromolécules - *crowding* moléculaire), les coefficients de diffusion des molécules $S$ et $E$ sont fortement réduits.
   * **Concentrations des enzymes *in vivo* :** L'hypothèse de Michaelis-Menten suppose que $[E]_0 \ll [S]$. Or, dans certaines conditions cellulaires, la concentration des enzymes peut être proche de celle des métabolites, invalidant l'état stationnaire classique.
   * **Complexité des réseaux métaboliques :** *In vivo*, l'enzyme $E$ ne subit pas l'action d'un seul inhibiteur pur, mais est soumise à de multiples régulations croisées (rétroinhibition, modifications covalentes, canalisation métabolique ou *metabolic channeling*). Le modèle simple de Michaelis-Menten ne donne qu'une approximation locale valable uniquement en conditions diluées contrôlées.