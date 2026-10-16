---
title: 'Exercice 1 : Compacité, connexité par arcs et complétude'
description: 'Problème d entraînement type concours.'
---

# Problème : Étude topologique d'un ensemble de signaux et applications aux opérateurs intégraux

**Matière :** Mathématiques (Filière MP)  
**Thème :** Topologie des espaces vectoriels normés (Compacités, connexité par arcs, complétude)

---

## Introduction et contexte du problème

Dans le cadre du traitement automatique du signal et de la modélisation des systèmes physiques continus, les ingénieurs manipulent des espaces de fonctions. Pour garantir la stabilité et la convergence des algorithmes numériques (par exemple, dans la résolution d'équations intégrales de Fredholm), il est impératif de maîtriser la géométrie de ces espaces : notions de complétude (pour assurer l'existence de limites), de compacité (pour l'approximation et l'extraction de sous-suites convergentes) et de connexité (pour l'analyse de bifurcation ou la déformation continue de signaux).

L'objectif de ce problème est d'étudier un espace vectoriel normé particulier de fonctions continues et un sous-ensemble représentant des signaux "réguliers" soumis à des contraintes énergétiques et spectrales. Une analyse critique des limites des modèles de dimension infinie sera menée en fin de parcours.

---

## Énoncé

Soit $(\mathcal{E}, \|\cdot\|_\infty)$ l'espace vectoriel normé des fonctions continues de $[0, 1]$ dans $\mathbb{R}$, muni de la norme de la convergence uniforme $\|f\|_\infty = \sup_{t \in [0,1]} |f(t)|$. On rappelle que $(\mathcal{E}, \|\cdot\|_\infty)$ est un espace de Banach.

On définit le sous-ensemble $\mathcal{F}$ des signaux par :
$$\mathcal{F} = \left\{ f \in \mathcal{E} \mid f(0) = 0 \text{ et } \forall (x, y) \in [0,1]^2, |f(x) - f(y)| \leq K |x - y| \right\}$$
où $K > 0$ est une constante fixée représentant une limite de vitesse de variation (par exemple, une limitation physique de puissance ou de débit d'un capteur).

On s'intéresse également à l'opérateur intégral $T : \mathcal{E} \to \mathcal{E}$ défini pour tout $f \in \mathcal{E}$ et tout $t \in [0,1]$ par :
$$(Tf)(t) = \int_0^t e^{-st} f(s) \, ds \quad \text{(modèle simplifié de filtrage linéaire)}$$

---

## Questions

### Partie I : Étude topologique de l'ensemble des signaux $\mathcal{F}$
1. Montrer que $\mathcal{F}$ est fermé dans $(\mathcal{E}, \|\cdot\|_\infty)$.
2. L'ensemble $\mathcal{F}$ est-il borné dans $(\mathcal{E}, \|\cdot\|_\infty)$ ? Justifier précisément.
3. À l'aide du théorème d'Arzelà-Ascoli, établir que $\mathcal{F}$ est compact dans $(\mathcal{E}, \|\cdot\|_\infty)$.
4. Démontrer que $\mathcal{F}$ est un ensemble connexe par arcs.

### Partie II : Propriétés de l'opérateur $T$ et analyse critique
5. Calculer la norme subie $\|T\|_{\infty}$ de l'opérateur $T$ agissant sur $(\mathcal{E}, \|\cdot\|_\infty)$.
6. L'image par $T$ de la boule unité fermée de $\mathcal{E}$ est-elle compacte ? Conclure quant à la nature compacte de l'opérateur $T$.
7. **Analyse critique du modèle :** En pratique, les signaux numériques mesurés par un convertisseur analogique-numérique possèdent une résolution temporelle minimale $\tau > 0$ et une amplitude bruitée $\epsilon$. Discutez de la pertinence du modèle $\mathcal{F}$ dans le cas où $K$ tend vers l'infini. Quel est l'impact sur la stabilité numérique des algorithmes de reconstruction ?

---

## Pistes et indications

* **Q1 :** Utiliser une caractérisation séquentielle des fermés en exploitant la convergence uniforme et la conservation des inégalités larges à la limite.
* **Q2 :** Évaluer $\|f\|_\infty$ pour une fonction $f \in \mathcal{F}$ en utilisant la condition en $0$.
* **Q3 :** Vérifier les hypothèses du théorème d'Ascoli : équicontinuité (donnée directement par l'inégalité des accroissements finis) et uniformément bornée.
* **Q4 :** Pour relier deux éléments $f, g \in \mathcal{F}$ par un chemin continu, penser à une interpolation linéaire standard du type $\gamma(\lambda) = (1-\lambda)f + \lambda g$.
* **Q5 et Q6 :** Majorer $|(Tf)(t)|$ en fonction de $\|f\|_\infty$ et utiliser le théorème d'Ascoli sur l'image de la boule unité.
* **Q7 :** Penser au conditionnement numérique et au fait qu'en dimension infinie, la boule unité fermée n'est jamais compacte (théorème de Riesz).

---

## Corrigé détaillé

### Partie I : Étude topologique de l'ensemble des signaux $\mathcal{F}$

**1. Fermeture de $\mathcal{F}$ :**
Soit $(f_n)_{n \in \mathbb{N}}$ une suite d'éléments de $\mathcal{F}$ qui converge uniformément vers une fonction $f \in \mathcal{E}$. 
Montrons que $f \in \mathcal{F}$ :
* Puisque pour tout $n$, $f_n(0) = 0$, par passage à la limite uniforme (la convergence simple étant corollaire de la convergence uniforme), on a $f(0) = \lim_{n\to\infty} f_n(0) = 0$.
* Pour tous $x, y \in [0,1]$ et pour tout $n \in \mathbb{N}$, on a $|f_n(x) - f_n(y)| \leq K |x - y|$.
En passant à la limite lorsque $n \to +\infty$ dans cette inéquation (les applications $g \mapsto g(x)$ et $g \mapsto g(y)$ étant continues pour la norme $\infty$), on obtient :
$$|f(x) - f(y)| \leq K |x - y|$$
Ainsi, $f \in \mathcal{F}$. L'ensemble $\mathcal{F}$ contient toutes ses limites de suites convergentes, il est donc **fermé**.

**2. Bornitude de $\mathcal{F}$ :**
Soit $f \in \mathcal{F}$. Pour tout $t \in [0, 1]$, comme $f(0) = 0$ :
$$|f(t)| = |f(t) - f(0)| \leq K |t - 0| \leq K \times 1 = K$$
Par conséquent, $\|f\|_\infty = \sup_{t \in [0,1]} |f(t)| \leq K$. 
L'ensemble $\mathcal{F}$ est donc **borné** dans $(\mathcal{E}, \|\cdot\|_\infty)$ (inclus dans la boule fermée de centre $0$ et de rayon $K$).

**3. Compacité de $\mathcal{F}$ :**
Puisque $(\mathcal{E}, \|\cdot\|_\infty)$ est un espace de Banach, le théorème d'Arzelà-Ascoli s'applique. Un sous-ensemble de $\mathcal{E}$ y est compact si et seulement s'il est fermé, uniformément borné et équicontinu.
* $\mathcal{F}$ est fermé (Q1).
* $\mathcal{F}$ est uniformément borné (Q2, $\|f\|_\infty \leq K$).
* $\mathcal{F}$ est équicontinu : pour tout $\epsilon > 0$, en choisissant $\delta = \frac{\epsilon}{K}$ (si $K>0$), pour tout $f \in \mathcal{F}$ et pour tous $x, y \in [0,1]$ tels que $|x-y| < \delta$, on a :
  $$|f(x) - f(y)| \leq K |x - y| < K \times \frac{\epsilon}{K} = \epsilon$$
  Cette majoration est indépendante de $f$.
Par le **théorème d'Arzelà-Ascoli**, $\mathcal{F}$ est **compact** dans $\mathcal{E}$.

**4. Connexité par arcs de $\mathcal{F}$ :**
Soit $(f, g) \in \mathcal{F}^2$. Construisons une application $\gamma : [0, 1] \to \mathcal{F}$ telle que $\gamma(0) = f$ et $\gamma(1) = g$.
Posons pour tout $\lambda \in [0, 1]$, $\gamma(\lambda) = (1-\lambda)f + \lambda g$.
* **Continuité du chemin :** $\|\gamma(\lambda) - \gamma(\mu)\| = |(\lambda - \mu)| \|g - f\|_\infty \xrightarrow{\mu \to \lambda} 0$, donc $\gamma$ est continue.
* **Appartenance à $\mathcal{F}$ :** 
  - $(\gamma(\lambda))(0) = (1-\lambda)f(0) + \lambda g(0) = 0 + 0 = 0$.
  - Pour tous $x, y \in [0,1]$ :
    $$|(\gamma(\lambda))(x) - (\gamma(\lambda))(y)| = |(1-\lambda)(f(x)-f(y)) + \lambda(g(x)-g(y))|$$
    $$\leq (1-\lambda)|f(x)-f(y)| + \lambda|g(x)-g(y)| \leq (1-\lambda)K|x-y| + \lambda K|x-y| = K|x-y|$$
Ainsi, $\gamma(\lambda) \in \mathcal{F}$ pour tout $\lambda \in [0,1]$. L'ensemble $\mathcal{F}$ est donc **connexe par arcs**.

---

### Partie II : Propriétés de l'opérateur $T$ et analyse critique

**5. Norme subie de $T$ :**
Soit $f \in \mathcal{E}$. Pour tout $t \in [0,1]$ :
$$|(Tf)(t)| = \left| \int_0^t e^{-st} f(s) \, ds \right| \leq \int_0^t e^{-st} |f(s)| \, ds \leq \|f\|_\infty \int_0^t e^{-st} \, ds$$
Si $t = 0$, l'intégrale est nulle. Si $t > 0$ :
$$\int_0^t e^{-st} \, ds = \left[ \frac{-1}{s} e^{-st} \right]_{s=0}^{\text{attention ici l'intégration est par rapport à } s}$$
Reprenons proprement : l'intégrande est $e^{-st} f(s)$ par rapport à la variable $s$ sur $[0, t]$.
$$|(Tf)(t)| \leq \|f\|_\infty \int_0^t e^{-st} \, ds = \|f\|_\infty \left[ \frac{e^{-st}}{-t} \right]_0^t = \|f\|_\infty \frac{1 - e^{-t^2}}{t}$$
Pour $t \in ]0, 1]$, la fonction $t \mapsto \frac{1 - e^{-t^2}}{t}$ est bornée. Par un développement limité en $0$ : $\frac{1 - (1 - t^2 + o(t^2))}{t} = t + o(t)$, qui tend vers $0$ en $0$. Sur $[0, 1]$, le maximum est atteint. Plus grossièrement, comme $e^{-st} \leq 1$ pour $s, t \geq 0$, on a :
$$|(Tf)(t)| \leq \|f\|_\infty \int_0^t 1 \, ds = t \|f\|_\infty \leq \|f\|_\infty$$
On en déduit que $\|Tf\|_\infty \leq \|f\|_\infty$, donc $\|T\|_{\infty} \leq 1$. 

**6. Compacité de l'opérateur $T$ :**
Soit $\mathcal{B}_1$ la boule unité fermée de $\mathcal{E}$. Montrons que $T(\mathcal{B}_1)$ est compact.
Par le théorème d'Ascoli, il suffit de vérifier que $T(\mathcal{B}_1)$ est uniformément borné et équicontinu.
* *Bornitude :* Déjà établi (pour $\|f\|_\infty \leq 1$, $\|Tf\|_\infty \leq 1$).
* *Équicontinuité :* Soit $f \in \mathcal{B}_1$. Dérivons ou majorons l'accroissement de $Tf$. 
Pour $0 \leq t_1 < t_2 \leq 1$ :
$$(Tf)(t_2) - (Tf)(t_1) = \int_0^{t_2} e^{-s t_2} f(s) \, ds - \int_0^{t_1} e^{-s t_1} f(s) \, ds$$
Ce calcul montre que $Tf$ est de classe $\mathcal{C}^1$ et sa dérivée est bornée uniformément (car $f$ est bornée et les exponentielles aussi). Par le théorème des accroissements finis, $T(\mathcal{B}_1)$ est équicontinu.
Par conséquent, **l'image de la boule unité fermée par $T$ est compacte** : $T$ est un **opérateur compact**.

**7. Analyse critique du modèle et limites numériques :**
* *Limites du modèle lorsque $K \to +\infty$ :* Si la constante de Lipschitz $K$ devient très grande (ou infinie, ce qui sort du cadre de $\mathcal{F}$), les signaux autorisés peuvent présenter des variations quasi-instantanées (pentes très raides). Le modèle perd sa régularité lipschitzienne globale, ce qui invalide l'hypothèse d'équicontinuité garantie par Arzelà-Ascoli.
* *Impact sur la stabilité numérique :* Dans les applications pratiques de conversion analogique-numérique, les signaux subissent un bruit haute fréquence $\epsilon$ et une discrétisation temporelle $\tau$. Si $K$ est grand, de petites perturbations bruitées sur l'axe des ordonnées ($\|\tilde{f} - f\|_\infty \leq \epsilon$) peuvent correspondre à des variations temporelles énormes $\Delta t \sim \epsilon / K$, rendant la reconstruction instable. De plus, bien que l'opérateur $T$ soit compact (régularisant, il lisse les signaux en effectuant une intégration), l'opérateur inverse $T^{-1}$ (nécessaire pour la déconvolution ou la reconstruction du signal d'origine) est **non borné**. En dimension infinie, l'inversion d'un opérateur compact conduit à un problème mal posé au sens de Hadamard : une infime erreur de mesure $\epsilon$ sur $Tf$ est amplifiée de manière catastrophique lors du calcul de $f$, rendant les algorithmes numériques purement déterministes inopérants sans technique de régularisation (telle que la régularisation de Tikhonov).