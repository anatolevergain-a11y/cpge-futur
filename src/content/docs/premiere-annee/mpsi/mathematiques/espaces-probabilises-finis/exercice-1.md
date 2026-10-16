---
title: 'Exercice 1 : Conditionnement, indépendance et formule de Bayes'
description: 'Problème d entraînement type concours.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Dans le cadre de l'évaluation de la fiabilité d'un système de sécurité industrielle complexe, on met en place un dispositif de double dépistage d'une anomalie rare. Soit $\Omega$ l'univers associé à l'état d'un composant prélevé au hasard dans une chaîne de production. 

On considère les événements suivants :
- $A$ : « Le composant présente effectivement l'anomalie. »
- $T_1$ : « Le premier test de dépistage est positif. »
- $T_2$ : « Le second test de dépistage est positif. »

On suppose que la probabilité que le composant présente l'anomalie est $P(A) = p$, où $p \in ]0, 1[$. 
Les performances des tests sont modélisées par les hypothèses probabilistes suivantes :
1. **Sensibilité du test 1** : $P(T_1 \mid A) = \alpha$ et **Spécificité du test 1** : $P(\overline{T_1} \mid \overline{A}) = \beta$, avec $\alpha, \beta \in ]0, 1[$.
2. **Conditionnement du second test** : Le second test est effectué avec un équipement indépendant du premier, mais dépendant de la nature réelle du composant. Ainsi, les événements $T_1$ et $T_2$ sont **conditionnellement indépendants sachant $A$**, et **conditionnellement indépendants sachant $\overline{A}$**. Formellement :
   $$P(T_1 \cap T_2 \mid A) = P(T_1 \mid A)P(T_2 \mid A) \quad \text{et} \quad P(\overline{T_1} \cap \overline{T_2} \mid \overline{A}) = P(\overline{T_1} \mid \overline{A})P(\overline{T_2} \mid \overline{A})$$
   De plus, on pose $P(T_2 \mid A) = \alpha_2$ et $P(\overline{T_2} \mid \overline{A}) = \beta_2$, avec $\alpha_2, \beta_2 \in ]0, 1[$.

L'objectif de ce problème est d'étudier l'évolution de la probabilité d'avoir l'anomalie sachant les résultats des tests, d'analyser l'impact de l'indépendance conditionnelle, et d'évaluer la pertinence de ce modèle dans un contexte de décision critique.

---

### ❓ Questions progressives (incluant une analyse critique du modèle)

1. **Calculs préliminaires et probabilités totales**
   Exprimer la probabilité de l'événement $T_1$, notée $P(T_1)$, en fonction de $p$, $\alpha$ et $\beta$. En déduire la probabilité conditionnelle $P(A \mid T_1)$ (Formule de Bayes).

2. **Modélisation de la double épreuve**
   En utilisant l'hypothèse d'indépendance conditionnelle sachant $A$ et sachant $\overline{A}$, exprimer la probabilité conjointe $P(T_1 \cap T_2 \mid A)$ et $P(T_1 \cap T_2 \mid \overline{A})$. En déduire l'expression de $P(T_1 \cap T_2)$ en fonction de $p$, $\alpha$, $\alpha_2$, $\beta$ et $\beta_2$.

3. **Mise à jour bayésienne séquentielle ou conjointe**
   On observe que les deux tests sont positifs ($T_1 \cap T_2$ est réalisé). Établir l'expression de la probabilité a posteriori $P(A \mid T_1 \cap T_2)$ en fonction des paramètres du modèle.

4. **Analyse asymptotique et critique du modèle**
   On pose $\alpha = \alpha_2 = 0{,}95$ (fiabilité des tests) et $\beta = \beta_2 = 0{,}90$ (spécificité). 
   - Calculer $P(A \mid T_1)$ et $P(A \mid T_1 \cap T_2)$ dans le cas où l'anomalie est extrêmement rare : $p = 10^{-4}$.
   - Discuter de l'impact des faux positifs lorsque $p \to 0$. Le modèle est-il robuste face à la rareté de l'événement ?

---

### 💡 Pistes & Indications méthodologiques

- **Question 1** : Penser à utiliser le système complet d'événements $(A, \overline{A})$ pour exprimer $P(T_1)$ via la formule des probabilités totales.
- **Question 2** : Pour relier les probabilités conditionnelles composées, utiliser la définition de la probabilité conditionnelle : $P(T_1 \cap T_2 \cap A) = P(T_1 \cap T_2 \mid A)P(A)$.
- **Question 3** : Appliquer de nouveau le théorème de Bayes généralisé avec l'événement intersection $T_1 \cap T_2$.
- **Question 4** : Faire un calcul numérique explicite et analyser l'ordre de grandeur du numérateur par rapport au dénominateur (notamment la contribution des faux positifs $\overline{A}$).

---

### 📋 Corrigé détaillé pas à pas

#### 1. Calculs préliminaires et probabilités totales
Les événements $A$ et $\overline{A}$ forment un système complet d'événements. D'après la formule des probabilités totales :
$$P(T_1) = P(T_1 \cap A) + P(T_1 \cap \overline{A}) = P(T_1 \mid A)P(A) + P(T_1 \mid \overline{A})P(\overline{A})$$
On nous donne $P(T_1 \mid A) = \alpha$ et $P(A) = p$, donc $P(\overline{A}) = 1 - p$. 
De plus, la spécificité du test est $P(\overline{T_1} \mid \overline{A}) = \beta$, ce qui implique que $P(T_1 \mid \overline{A}) = 1 - \beta$.
Ainsi :
$$P(T_1) = \alpha p + (1 - \beta)(1 - p)$$

Appliquons maintenant la formule de Bayes pour trouver la probabilité d'avoir l'anomalie sachant que le premier test est positif :
$$P(A \mid T_1) = \frac{P(T_1 \mid A)P(A)}{P(T_1)} = \frac{\alpha p}{\alpha p + (1 - \beta)(1 - p)}$$

#### 2. Modélisation de la double épreuve
Par définition de l'indépendance conditionnelle :
- Sachant $A$ : $P(T_1 \cap T_2 \mid A) = P(T_1 \mid A)P(T_2 \mid A) = \alpha \alpha_2$
- Sachant $\overline{A}$ : $P(\overline{T_1} \cup \overline{T_2} \dots)$ Pour $T_1 \cap T_2$ sachant $\overline{A}$, on a $P(T_1 \cap T_2 \mid \overline{A}) = P(T_1 \mid \overline{A})P(T_2 \mid \overline{A}) = (1 - \beta)(1 - \beta_2)$.

Utilisons à nouveau la formule des probabilités totales pour l'événement $T_1 \cap T_2$ :
$$P(T_1 \cap T_2) = P(T_1 \cap T_2 \mid A)P(A) + P(T_1 \cap T_2 \mid \overline{A})P(\overline{A})$$
$$P(T_1 \cap T_2) = \alpha \alpha_2 p + (1 - \beta)(1 - \beta_2)(1 - p)$$

#### 3. Mise à jour bayésienne pour deux tests positifs
La probabilité recherchée est $P(A \mid T_1 \cap T_2)$. Par la formule de Bayes :
$$P(A \mid T_1 \cap T_2) = \frac{P(T_1 \cap T_2 \mid A)P(A)}{P(T_1 \cap T_2)}$$
En injectant les expressions obtenues à la question précédente :
$$P(A \mid T_1 \cap T_2) = \frac{\alpha \alpha_2 p}{\alpha \alpha_2 p + (1 - \beta)(1 - \beta_2)(1 - p)}$$

#### 4. Analyse asymptotique et critique du modèle
Fuche d'application numérique avec :
$p = 10^{-4}$, $\alpha = \alpha_2 = 0{,}95$, et $\beta = \beta_2 = 0{,}90$ (donc $1 - \beta = 0{,}10$).

- **Pour un test ($P(A \mid T_1)$)** :
  $$P(A \mid T_1) = \frac{0{,}95 \times 10^{-4}}{0{,}95 \times 10^{-4} + 0{,}10 \times (1 - 10^{-4})} \approx \frac{9{,}5 \times 10^{-5}}{0{,}10} = 9{,}5 \times 10^{-4}$$
  Malgré un test positif, la probabilité que le composant ait l'anomalie reste inférieure à $0{,}1 \, \text{\%}$.

- **Pour deux tests ($P(A \mid T_1 \cap T_2)$)** :
  Supposons $\alpha_2 = 0{,}95$ et $\beta_2 = 0{,}90$. Le numérateur vaut :
  $$0{,}95^2 \times 10^{-4} = 0{,}9025 \times 10^{-4}$$
  Le terme issu des faux positifs au dénominateur vaut :
  $$(1 - \beta)(1 - \beta_2)(1 - p) = 0{,}10 \times 0{,}10 \times (1 - 10^{-4}) = 0{,}01 \times (1 - 10^{-4}) \approx 0{,}01$$
  Ainsi :
  $$P(A \mid T_1 \cap T_2) \approx \frac{9{,}025 \times 10^{-5}}{9{,}025 \times 10^{-5} + 10^{-2}} \approx \frac{9{,}025 \times 10^{-5}}{10^{-2}} \approx 9{,}025 \times 10^{-3}$$
  La probabilité passe à environ $0{,}9 \, \text{\%}$.

- **Analyse critique** : 
  Même avec deux tests positifs successifs, la probabilité a posteriori reste faible ($< 1 \, \text{\%}$). Cela s'explique par le **phénomène de base rate fallacy** (ou biais du taux de base) : l'événement $A$ est tellement rare ($p = 10^{-4}$) que le nombre de faux positifs générés par la population saine $(\overline{A})$ reste supérieur au nombre de vrais positifs issus de la population défectueuse. Pour fiabiliser le système face à des anomalies rares, il faudrait soit augmenter drastiquement la spécificité ($\beta \to 1$), soit croiser avec des tests totalement non corrélés sur d'autres principes physiques.