---
title: 'Exercice 2 : Loi normale et théorème limite central'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Modélisation stochastique de la teneur en métaux lourds dans les sols forestiers et analyse critique

---

## Énoncé et Contexte Biologique/Géologique

Dans le cadre d'une étude de bio-indication menée par l'Agence Française pour la Biodiversité, on s'intéresse à la contamination des sols forestiers par le cadmium (\text{Cd}), un métal lourd toxique issu des activités industrielles et des épandages passés. La concentration en cadmium dans la couche arable d'une forêt est une grandeur soumise à de multiples facteurs micro-locaux (pH du sol, activité microbienne, apports éoliens, percolation des eaux de pluie). 

L'objectif de ce problème est d'étudier la modélisation probabiliste de cette concentration, notée $X$ et exprimée en milligrammes par kilogramme (\text{mg/kg}), d'estimer la moyenne sur un grand domaine par le biais d'échantillonnages, et d'évaluer la pertinence biologique des hypothèses mathématiques faites.

---

## Partie I : Modélisation initiale et propriétés de la loi normale

On suppose dans un premier temps que la concentration $X$ (en \text{mg/kg}) suit une loi normale $\mathcal{N}(\mu, \sigma^2)$, avec $\mu = 2.5$ \text{mg/kg} et $\sigma = 0.8$ \text{mg/kg}.

### Questions

1. Rappeler l'expression de la densité de probabilité $f$ de la variable aléatoire $X$. Préciser son support et ses variations.
2. Calculer la probabilité qu'un échantillon de sol prélevé au hasard présente une concentration en cadmium supérieure à la seuil critique d'alerte fixé à $4.1$ \text{mg/kg}. 
   *(On exprimera le résultat à l'aide de la fonction de répartition $\Phi$ de la loi normale centrée réduite, puis on donnera une valeur approchée sachant que $\Phi(2) \approx 0.9772$).*
3. Un laboratoire analyse des carottes de sol par lots de $4$ échantillons indépendants. Soit $Y$ le nombre d'échantillons du lot dépassant le seuil critique de $4.1$ \text{mg/kg}. Quelle est la loi de $Y$ ? Calculer la probabilité qu'au moins un échantillon du lot dépasse ce seuil.

---

## Partie II : Échantillonnage et Théorème Limite Central (TLC)

Dans la réalité, les paramètres $\mu$ et $\sigma$ de la loi de $X$ sont inconnus. Pour estimer la concentration moyenne réelle $\mu$ sur une vaste zone forestière, on prélève un échantillon de $n$ sites indépendants $(X_1, X_2, \dots, X_n)$, où chaque $X_i$ a même espérance $\mu$ et même écart-type $\sigma > 0$ (sans supposer nécessairement que $X$ suit une loi normale).

On introduit la moyenne empirique :
$$\overline{X}_n = \frac{1}{n} \sum_{i=1}^{n} X_i$$

### Questions

4. Déterminer l'espérance $\mathbb{E}(\overline{X}_n)$ et la variance $\text{V}(\overline{X}_n)$ en fonction de $\mu$, $\sigma$ et $n$.
5. Énoncer précisément le Théorème Limite Central (TLC). Quelle est la loi limite de la variable centrée réduite associée $\overline{X}_n$ ?
6. Combien de prélèvements $n$ doit-on effectuer au minimum pour que l'intervalle de confiance à $95\,\%$ pour $\mu$ ait une amplitude inférieure à $0.2$ \text{mg/kg} ? 
   *(On pourra utiliser l'approximation numérique $u_{0.975} \approx 1.96$ pour le quantile de la loi normale centrée réduite, et on prendra majoritairement $\sigma \approx 0.8$ \text{mg/kg}).*

---

## Partie III : Analyse critique et limites du modèle biologique

7. **Analyse critique :** En pratique, les concentrations mesurées sur le terrain présentent souvent une distribution asymétrique (étalée vers les fortes valeurs) et les valeurs négatives sont impossibles. 
   - Le modèle de la loi normale est-il biologiquement satisfaisant pour modéliser $X$ ? 
   - Proposer une modification classique de la variable $X$ (par exemple en considérant son logarithme) pour remédier à cette incohérence, tout en conservant un cadre probabiliste gérable.

---

## Pistes et Indications

* **Q1 & Q2 :** Penser à centrer et réduire la variable $X$ en posant $Z = \frac{X - \mu}{\sigma}$ pour se ramener à la table ou aux valeurs usuelles de $\Phi$.
* **Q3 :** Reconnaître une loi binomiale pour $Y$.
* **Q5 :** Le TLC s'applique à toute suite de variables i.i.d. possédant une variance finie, indépendamment de la loi sous-jacente des $X_i$.
* **Q6 :** L'amplitude de l'intervalle de confiance au niveau $1-\alpha$ est liée à l'écart-type de $\overline{X}_n$.
* **Q7 :** Penser aux contraintes de positivité des grandeurs écologiques et aux processus multiplicatifs (loi log-normale).

---

## Corrigé Détaillé

### Partie I_1. **Densité de probabilité :** 
   La variable $X$ à valeurs dans $\mathbb{R}$ admet pour densité :
   $$f(x) = \frac{1}{\sigma\sqrt{2\pi}} \exp\left(-\frac{(x-\mu)^2}{2\sigma^2}\right)$$
   Ici, $\mu = 2.5$ et $\sigma = 0.8$. Le support est $\mathbb{R}$ (bien que, pour un sol, les valeurs négatives soient de probabilité quasi-nulle si $\sigma \ll \mu$). La fonction $f$ est strictement croissante sur $]-\infty, \mu]$, admet un maximum en $\mu$ égal à $\frac{1}{0.8\sqrt{2\pi}}$, et est strictement décroissante sur $[\mu, +\infty[$.

2. **Calcul de probabilité :**
   On cherche $P(X > 4.1)$.
   $$P(X > 4.1) = P\left(\frac{X - 2.5}{0.8} > \frac{4.1 - 2.5}{0.8}\right) = P(Z > \frac{1.6}{0.8}) = P(Z > 2)$$
   où $Z \sim \mathcal{N}(0,1)$.
   $$P(Z > 2) = 1 - \Phi(2) = 1 - 0.9772 = 0.0228$$
   Il y a environ $2.28\,\%$ de chances qu'un échantillon dépasse le seuil critique.

3. **Loi de $Y$ et probabilité :**
   Les tirages étant indépendants, la variable $Y$ (nombre d'échantillons dépassant $4.1$ \text{mg/kg} parmi $4$) suit la loi binomiale $\mathcal{B}(4, p)$ avec $p = 0.0228$.
   La probabilité qu'au moins un échantillon dépasse le seuil est :
   $$P(Y \ge 1) = 1 - P(Y = 0) = 1 - \binom{4}{0} p^0 (1-p)^4 = 1 - (1 - 0.0228)^4$$
   $1 - 0.9772^4 \approx 1 - 0.912 = 0.088$.
   La probabilité est d'environ $8.8\,\%$.

---

### Partie II

4. **Espérance et variance de $\overline{X}_n$ :**
   Par linéarité de l'espérance :
   $$\mathbb{E}(\overline{X}_n) = \mathbb{E}\left(\frac{1}{n}\sum_{i=1}^n X_i\right) = \frac{1}{n}\sum_{i=1}^n \mathbb{E}(X_i) = \frac{n\mu}{n} = \mu$$
   Par indépendance des $X_i$ :
   $$\text{V}(\overline{X}_n) = \text{V}\left(\frac{1}{n}\sum_{i=1}^n X_i\right) = \frac{1}{n^2}\sum_{i=1}^n \text{V}(X_i) = \frac{n\sigma^2}{n^2} = \frac{\sigma^2}{n}$$

5. **Théorème Limite Central (TLC) :**
   *Énoncé :* Soit $(X_n)_{n \ge 1}$ une suite de variables aléatoires indépendantes et de même loi (i.i.d.), admettant une espérance $\mu$ et un écart-type $\sigma$ finis et non nuls. Alors, la suite des variables centrées réduites associées à $\overline{X}_n$, définie par :
   $$Z_n = \frac{\overline{X}_n - \mu}{\sigma/\sqrt{n}}$$
   converge en loi vers une variable aléatoire suivant la loi normale centrée réduite $\mathcal{N}(0,1)$.

6. **Taille d'échantillon $n$ :**
   L'intervalle de confiance au niveau $95\,\%$ ($1-\alpha = 0.95$) pour $\mu$ est donné par :
   $$I_n = \left[ \overline{X}_n - u_{1-\alpha/2}\frac{\sigma}{\sqrt{n}} \,,\, \overline{X}_n + u_{1-\alpha/2}\frac{\sigma}{\sqrt{n}} \right]$$
   L'amplitude de cet intervalle est $A = 2 \times 1.96 \times \frac{\sigma}{\sqrt{n}}$.
   On souhaite $A < 0.2$, soit :
   $$2 \times 1.96 \times \frac{0.8}{\sqrt{n}} < 0.2 \iff \sqrt{n} > \frac{2 \times 1.96 \times 0.8}{0.2} = 15.68$$
   En élevant au carré :
   $$n > (15.68)^2 \approx 245.8$$
   Il faut donc prélever au minimum **$246$ échantillons** pour atteindre la précision requise.

---

### Partie III

7. **Analyse critique et limites biologiques :**
   - *Pertinence du modèle normal :* Le modèle de la loi normale est **biologiquement insatisfaisant** à plusieurs titres. D'une part, une loi normale attribue une probabilité non nulle à des valeurs strictement négatives ($P(X < 0) > 0$ si $\sigma$ n'est pas infiniment petit devant $\mu$), ce qui est physiquement impossible pour une concentration massique. D'autre part, les concentrations de polluants dans les sols suivent généralement des distributions asymétriques à queue droite (présence de "points chauds" ou hot spots pollués par des rejets localisés).
   - *Alternative proposée :* Pour s'affranchir de la contrainte de positivité et de l'asymétrie, on modélise souvent la variable $X$ par une **loi log-normale**. On suppose alors que la variable $Y = \ln(X)$ suit une loi normale $\mathcal{N}(\nu, \omega^2)$. Ainsi, $X = e^Y$ est nécessairement strictement positive, et l'application du théorème limite central peut alors être conduite sur le logarithme des concentrations mesurées.