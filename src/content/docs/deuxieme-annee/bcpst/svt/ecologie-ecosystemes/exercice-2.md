---
title: 'Exercice 2 : Dynamique des populations (modèle Lotka-Volterra)'
description: 'Problème d entraînement type concours pour BCPST.'
---

### 🌐 Énoncé du problème / Étude de cas

Dans le cadre de la gestion d’une réserve naturelle semi-fermée en Afrique de l'Est, les écologues étudient la cinétique des populations d'un grand herbivore (le zèbre, noté $H$) et de son prédateur principal (le lion, noté $P$). Les gestionnaires souhaitent anticiper les fluctuations démographiques pour maintenir l'intégrité de la biodiversité sans perturber le fragile équilibre trophique.

On note $H(t)$ l'effectif de la population d'herbivores et $P(t)$ l'effectif de la population de carnivores à l'instant $t$ (exprimé en années). Pour modéliser cette interaction trophique, on utilise une variante du système de Lotka-Volterra à temps continu :

$$\begin{cases} 
\dfrac{dH}{dt} = r H - a H P \\ 
\dfrac{dP}{dt} = b H P - d P 
\end{cases}$$

**Données numériques et ordres de grandeur réalistes :**
* Taux de croissance intrinsèque des herbivores : $r = 0,5\text{ an}^{-1}$
* Coefficient de prédation (rencontres fructueuses) : $a = 0,01\text{ individus}^{-1}\cdot\text{an}^{-1}$
* Coefficient de conversion de la biomasse proie en prédateur : $b = 0,002\text{ individus}^{-1}\cdot\text{an}^{-1}$
* Taux de mortalité naturelle des prédateurs : $d = 0,2\text{ an}^{-1}$

---

### ❓ Questions progressives

1. **Analyse préliminaire et dimensionnelle :**
   Justifier rapidement le signe des quatre paramètres $r$, $a$, $b$ et $d$ d'un point de vue biologique. Préciser l'unité de chacun de ces paramètres dans le système international.

2. **Recherche des états stationnaires :**
   Déterminer les équilibres du système, c'est-à-dire les couples $(H^*, P^*)$ pour lesquels les populations sont stables ($dH/dt = 0$ et $dP/dt = 0$). Interpréter biologiquement ces deux solutions.

3. **Étude locale au voisinage de l'équilibre non trivial :**
   Linéariser le système au voisinage de l'équilibre non trivial $(H^*, P^*)$. Écrire la matrice jacobienne associée et analyser la nature de cet équilibre (valeurs propres imaginaires pures, centre, absence d'amortissement).

4. **Analyse critique des limites du modèle de Lotka-Volterra :**
   * *Critique 1 (Proies) :* En l'absence de prédateurs ($P = 0$), que devient l'équation des herbivores ? Ce comportement est-il réaliste à grande échelle pour une population naturelle ? Proposer une modification mathématique simple de l'équation pour corriger ce biais.
   * *Critique 2 (Environnement) :* Le modèle suppose des coefficients $r, a, b, d$ constants. Citer deux facteurs stochastiques ou déterministes majeurs en écologie de terrain qui font varier ces paramètres au cours du temps.

---

### 💡 Pistes & Indications

* **Q1 :** Analysez l'effet de chaque terme sur la variation relative de la population concernée $\left(\frac{1}{X}\frac{dX}{dt}\right)$.
* **Q2 :** Mettez en facteur $H$ dans la première équation et $P$ dans la seconde. Vous trouverez deux cas : l'extinction totale et la coexistence.
* **Q3 :** Posez $H(t) = H^* + u(t)$ et $P(t) = P^* + v(t)$ avec $u$ et $v$ petits devant l'équilibre. Calculez les dérivées partielles.
* **Q4 :** Pensez à la notion de capacité charge ($K$) introduite par Verhulst pour la croissance démographique intraspécifique.

---

### 📋 Corrigé détaillé et analyse des résultats

#### 1. Analyse préliminaire et dimensionnelle
* **$r > 0$** : En l'absence de prédateurs ($P=0$), la population d'herbivores croît exponentiellement. Unité : $\text{an}^{-1}$.
* **$a > 0$** : Traduit la prédation qui diminue le taux d'accroissement des herbivores. Unité : $\text{individu}^{-1}\cdot\text{an}^{-1}$.
* **$b > 0$** : Traduit le bénéfice pour les prédateurs de la capture des proies (reproduction). Unité : $\text{individu}^{-1}\cdot\text{an}^{-1}$.
* **$d > 0$** : Mortalité naturelle des prédateurs en l'absence de nourriture. Unité : $\text{an}^{-1}$.

#### 2. Recherche des états stationnaires
On cherche les points $(H^*, P^*)$ tels que :
$$\begin{cases} 
H(r - a P) = 0 \\ 
P(b H - d) = 0 
\end{cases}$$

Cela donne deux solutions :
* **Premier équilibre (extinction) :** $H^* = 0$ et $P^* = 0$. Les deux populations sont éteintes.
* **Second équilibre (coexistence) :** 
  $$r - a P^* = 0 \implies P^* = \frac{r}{a}$$
  $$b H^* - d = 0 \implies H^* = \frac{d}{b}$$
  
  Application numérique avec les données :
  $$H^* = \frac{0,2}{0,002} = 100\text{ herbivores}$$
  $$P^* = \frac{0,5}{0,01} = 50\text{ prédateurs}$$
  *Interprétation :* Ce point représente les effectifs moyens autour desquels les populations oscillent périodiquement en l'absence de perturbations externes.

#### 3. Étude locale au voisinage de l'équilibre non trivial
Posons le système non linéaire $\mathbf{F}(H,P) = \begin{pmatrix} rH - aHP \\ bHP - dP \end{pmatrix}$.
La matrice Jacobienne $J$ au point $(H^*, P^*)$ est :
$$J(H^*, P^*) = \begin{pmatrix} 
\dfrac{\partial F_1}{\partial H} & \dfrac{\partial F_1}{\partial P} \\ 
\dfrac{\partial F_2}{\partial H} & \dfrac{\partial F_2}{\partial P} 
\end{pmatrix}_{(H^*, P^*)} = \begin{pmatrix} 
r - aP^* & -aH^* \\ 
bP^* & bH^* - d 
\end{pmatrix}$$

Puisque $r - aP^* = 0$ et $bH^* - d = 0$, la matrice se simplifie en :
$$J = \begin{pmatrix} 
0 & -aH^* \\ 
bP^* & 0 
\end{pmatrix}$$

L'équation caractéristique $\det(J - \lambda I) = 0$ donne :
$$\begin{vmatrix} -\lambda & -aH^* \\ bP^* & -\lambda \end{vmatrix} = 0 \implies \lambda^2 + abH^*P^* = 0$$

Les valeurs propres sont imaginaires pures : $\lambda = \pm i\sqrt{abH^*P^*}$. 
* *Conclusion :* Le modèle de Lotka-Volterra linéaire prédit des **oscillations neutres** (centre). Les amplitudes des oscillations dépendent des conditions initiales et ne s'amortissent jamais vers l'équilibre, ce qui constitue une idéalisation mathématique éloignée de la réalité biologique.

#### 4. Analyse critique des limites du modèle
* **Critique 1 (Absence de capacité de charge des proies) :**
  Si $P=0$, l'équation devient $\frac{dH}{dt} = rH$, ce qui conduit à une croissance exponentielle infinie. C'est biologiquement aberrant car le milieu possède des ressources limitées (espace, eau, nourriture). 
  * *Correction (Modèle de Verhulst-Volterra) :* Remplacer $r H$ par $r H \left(1 - \frac{H}{K}\right)$ où $K$ est la capacité de charge de l'environnement.
* **Critique 2 (Constante des paramètres) :**
  Les paramètres $r, a, b, d$ sont supposés constants, or :
  1. *Variations climatiques saisonnières :* Une sécheresse (saison des pluies vs saison sèche) modifie drastiquement $r$ (pousse de la végétation) et $d$.
  2. *Effet de structure démographique :* Le coefficient de prédation $a$ dépend de la proportion de jeunes ou de vieux individus, plus vulnérables, rendant l'efficacité de la chasse variable.