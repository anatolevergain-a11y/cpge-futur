---
title: 'Exercice 2 : Variables aléatoires finies'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Fiabilité d'un réseau de capteurs et analyse critique

## Énoncé

Dans le cadre de la surveillance environnementale d'une zone industrielle sensible, on souhaite déployer un réseau de $n$ capteurs identiques et autonomes ($n \in \mathbb{N}^*$, $n \ge 10$). Chaque capteur mesure en continu un paramètre critique et transmet l'information à une station centrale. 

Cependant, le milieu ambiant est hostile. On modélise le fonctionnement de chaque capteur de manière indépendante par une loi de Bernoulli de paramètre $p \in ]0, 1[$ : un capteur est opérationnel avec la probabilité $p$ et défaillant (il transmet une information erronée ou cesse d'émettre) avec la probabilité $q = 1-p$.

Pour garantir la redondance et éviter les fausses alertes, la station centrale applique la règle suivante : le système global est considéré comme **fiable** si et seulement si un nombre suffisant de capteurs fonctionne correctement. Plus précisément, on se fixe un seuil entier $k$ (avec $1 \le k \le n$) tel que le système est opérationnel si **au moins $k$ capteurs** fonctionnent simultanément.

L'objectif de ce problème est de modéliser mathématiquement ce système à l'aide des variables aléatoires finies, d'étudier le comportement de la fiabilité globale en fonction de la taille du réseau $n$ et du seuil $k$, puis d'analyser les limites réalistes de ce modèle probabiliste.

---

## Questions

### Partie I : Modélisation élémentaire
1. Pour tout $i \in \{1, \dots, n\}$, on note $X_i$ la variable aléatoire égale à $1$ si le $i$-ème capteur est opérationnel, et $0$ s'il est défaillant. Quelle est la loi de $X_i$ ? Rappon-ter son espérance $\mathbb{E}(X_i)$ et sa variance $\text{V}(X_i)$.
2. On note $S_n = \sum_{i=1}^n X_i$ le nombre total de capteurs opérationnels dans le réseau. 
   a) Justifier que $S_n$ suit une loi binomiale dont on précisera les paramètres.
   b) Donner l'expression de la probabilité $P(S_n = j)$ pour tout $j \in \{0, 1, \dots, n\}$.
3. Exprimez l'événement "le système global est fiable" à l'aide de la variable $S_n$ et du seuil $k$. On note $R(n, k)$ la probabilité de cet événement. Donnez l'expression littérale de $R(n, k)$ en fonction de $n$, $k$ et $p$.

### Partie II : Étude asymptotique et ordres de grandeur
On se place dans un cas concret où la probabilité de bon fonctionnement d'un capteur individuel est estimée à $p = 0{,}95$ (ce qui correspond à un taux de panne de $5\%$). Le gestionnaire du réseau impose que le système global soit opérationnel avec une fiabilité d'au moins $99\%$ ($R(n, k) \ge 0{,}99$).

4. On fixe $n = 20$ capteurs. 
   a) Écrire l'expression de $R(20, k)$ sous forme d'une somme.
   b) À l'aide d'une approche numérique ou qualitative, déterminez la valeur maximale du seuil $k$ que l'on peut fixer tout en respectant la contrainte de fiabilité $R(20, k) \ge 0{,}99$.
5. On s'intéresse maintenant au cas où le seuil est proportionnel à la taille du réseau : on pose $k = \lfloor \alpha n \rfloor$ avec $\alpha \in ]0, 1[$. 
   En utilisant l'inégalité de Bienaymé-T Chebyshev, majorez la probabilité de défaillance du système $1 - R(n, k)$ en fonction de $n$, $p$ et $\alpha$ (dans le cas où $\alpha < p$).

### Partie III : Analyse critique du modèle (Esprit concours)
6. Le modèle mathématique repose sur l'hypothèse fondamentale d'indépendance des variables $(X_i)_{1 \le i \le n}$. 
   a) Discutez de la validité de cette hypothèse dans un contexte industriel réel (on pourra penser à des causes communes de défaillance telles qu'une coupure de courant générale, une surtension, ou un vieillissement thermique simultané).
   b) Si les capteurs sont soumis à une source de panne commune, qualitatif, la variance globale de $S_n$ va-t-elle augmenter ou diminuer par rapport au modèle binomial ? Quel impact cela a-t-il sur la fiabilité réelle $R(n, k)$ par rapport à la prédiction théorique ?

---

## Pistes et indications

* **Q1 & Q2** : Reconnaître les lois classiques. La somme de variables de Bernoulli indépendantes de même paramètre suit une loi binomiale.
* **Q3** : Traduire "au moins $k$ capteurs fonctionnent" par une condition sur $S_n$, puis sommer les probabilités élémentaires.
* **Q4** : Calculer les valeurs de $R(20, k)$ pour $k = 10, 11, 12, \dots$ en sachant que $q = 0{,}05$.
* **Q5** : Penser à centrer et réduire la variable $S_n$. Rappel : l'inégalité de Bienaymé-T Chebyshev s'applique à une variable aléatoire pour écarter sa valeur de son espérance.
* **Q6** : Analyse critique. En physique/ingénierie, l'indépendance parfaite n'existe pas. Les corrélations positives augmentent la probabilité d'événements extrêmes (tous en panne en même temps).

---

## Corrigé pas à pas

### Partie I : Modélisation élémentaire
1. Chaque capteur $i$ est soit opérationnel ($X_i = 1$) avec la probabilité $p$, soit défaillant ($X_i = 0$) avec la probabilité $1-p$. Ainsi, $X_i \mathcal{B}(p)$.
   On a immédiatement :
   $$\mathbb{E}(X_i) = p \quad \text{et} \quad \text{V}(X_i) = p(1-p) = pq$$

2. 
   a) La variable $S_n = \sum_{i=1}^n X_i$ représente le nombre de succès (capteurs opérationnels) sur $n$ épreuves de Bernoulli indépendantes de même paramètre $p$. Donc **$S_n$ suit la loi binomiale $\mathcal{B}(n, p)$**.
   b) Pour tout $j \in \{0, 1, \dots, n\}$ :
      $$P(S_n = j) = \binom{n}{j} p^j q^{n-j}$$

3. Le système est fiable si le nombre de capteurs opérationnels est supérieur ou égal à $k$, c'est-à-dire $S_n \ge k$. 
   La fiabilité du système est donc :
   $$R(n, k) = P(S_n \ge k) = \sum_{j=k}^{n} P(S_n = j) = \sum_{j=k}^{n} \binom{n}{j} p^j (1-p)^{n-j}$$

---

### Partie II : Étude asymptotique et ordres de grandeur
4. 
   a) Pour $n = 20$ et $p = 0{,}95$ (donc $q = 0{,}05$), on a :
      $$R(20, k) = \sum_{j=k}^{20} \binom{20}{j} (0{,}95)^j (0{,}05)^{20-j}$$
   b) On cherche le plus grand $k$ tel que $R(20, k) \ge 0{,}99$. Evaluons les termes extrêmes (en calculant la probabilité de panne $1 - R(20, k) = P(S_n < k)$) :
      - Pour $k = 17$ : $P(S_{20} < 17) = P(S_{20} = 16) + \dots + P(S_{20} = 0)$.
      - Numériquement, pour $p=0{,}95$ :
        - $P(S_{20} = 20) \approx 0{,}358$
        - $P(S_{20} = 19) \approx 0{,}377$
        - $P(S_{20} = 18) \approx 0{,}189$
        - $P(S_{20} = 17) \approx 0{,}060$
        La somme cumulée pour $j \ge 17$ donne $0{,}358 + 0{,}377 + 0{,}189 + 0{,}060 = 0{,}984$ (soit $98{,}4\%$, insuffisant car $< 99\%$).
        Testons $k = 16$ : 
        $P(S_{20} = 16) \approx 0{,}013$. La fiabilité passe à $0{,}984 + 0{,}013 = 0{,}997$ (soit $99{,}7\% \ge 99\%$).
        Ainsi, **le seuil maximal est $k = 16$**.

5. On souhaite évaluer $1 - R(n, k) = P(S_n < k)$. 
   Puisque $k = \lfloor \alpha n \rfloor$, posons $k \le \alpha n$. On a $\mathbb{E}(S_n) = np$ et $\text{V}(S_n) = npq$.
   L'inégalité de Bienaymé-Chebyshev ne s'applique pas directement à une queue unilatérale de manière optimale, mais on peut écrire via l'inégalité de Markov ou en utilisant la concentration de la loi binomiale (type Hoeffding ou Chebyshev centré) :
   Puisque $\alpha < p$, on a $k \le \alpha n < np$.
   $$P(S_n \le \alpha n) \le P(|S_n - np| \ge np - \alpha n)$$
   En posant $\epsilon = p - \alpha > 0$, l'inégalité de Bienaymé-T Chebyshev donne :
   $$P(|S_n - np| \ge n\epsilon) \le \frac{\text{V}(S_n)}{(n\epsilon)^2} = \frac{npq}{n^2 \epsilon^2} = \frac{pq}{n(p-\alpha)^2}$$
   Ainsi, la probabilité de défaillance du système est majorée par $\frac{pq}{n(p-\alpha)^2}$, ce qui montre bien qu'elle tend vers $0$ lorsque $n$ tend vers $+\infty$ (pour $\alpha$ fixé strictement inférieur à $p$).

---

### Partie III : Analyse critique du modèle

6. 
   a) **Validité de l'hypothèse d'indépendance :** 
      Dans la réalité industrielle, l'hypothèse d'indépendance des $X_i$ est **faiblement réaliste** pour des réseaux de capteurs d'un même type situés dans une zone géographique restreinte. En effet, des facteurs environnementaux externes (variation brutale de température, surtension sur le réseau électrique d'alimentation, perturbation électromagnétique, ou vieillissement simultané des composants d'un même lot de fabrication) provoquent des **pannes corrélées**. Si un événement perturbe un capteur, il a une forte probabilité d'en perturber d'autres simultanément.

   b) **Impact sur la variance et la fiabilité :**
      S'il existe des sources de pannes communes, les variables $(X_i)$ ne sont plus indépendantes et leur covariance est globalement positive ($\text{Cov}(X_i, X_j) > 0$ pour $i \neq j$). 
      La variance de la somme devient alors :
      $$\text{V}(S_n) = \sum_{i=1}^n \text{V}(X_i) + \sum_{i \neq j} \text{Cov}(X_i, X_j)$$
      Cette variance **augmente significativement** par rapport au modèle binomial indépendant ($npq$). 
      Une variance plus élevée signifie une dispersion plus grande de $S_n$ autour de sa moyenne : la distribution s'aplatit et les queues de distribution s'épaississent. Par conséquent, **la probabilité d'avoir simultanément un grand nombre de pannes augmente**. 
      *Conséquence critique pour l'ingénieur :* Le modèle binomial (indépendant) **sur-estime la fiabilité du système** $R(n, k)$. Dans la réalité, le système aura une probabilité de panne effective supérieure à celle prédite par le calcul théorique, ce qui nécessite d'ajouter une marge de sécurité (par exemple, augmenter $n$ ou revoir à la baisse le seuil $k$, voire diversifier les technologies de capteurs pour briser la corrélation des pannes).