---
title: 'Exercice 1 : Événements et probabilités conditionnelles'
description: 'Problème d entraînement type concours pour PTSI.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Dans le cadre de la sécurisation des flux d'informations sur un réseau informatique à haut débit, on s'intéresse à la transmission de paquets de données. Un émetteur envoie des paquets successifs qui peuvent subir des interférences ou des altérations lors de leur transit.

Soit $n \in \mathbb{N}^*$. On considère une suite de $n$ transmissions de paquets indépendants. 
Pour tout $i \in \{1, \dots, n\}$, on définit les événements suivants :
- $A_i$ : « Le $i$-ème paquet émis est correct. »
- $B_i$ : « Le $i$-ème paquet reçu est déclaré valide par le système de contrôle. »

Les caractéristiques du canal de transmission et du système de contrôle sont modélisées par les hypothèses suivantes :
1. La probabilité qu'un paquet émis soit correct est $\mathbb{P}(A_i) = p$, où $p \in ]0, 1[$. Cette probabilité est supposée constante pour tout $i$.
2. Si un paquet est effectivement correct, le système de contrôle commet parfois une erreur de type I (faux négatif / rejet injustifié) avec une probabilité $\alpha \in [0, 1[$, c'est-à-dire que $\mathbb{P}(\overline{B_i} \mid A_i) = \alpha$.
3. Si un paquet est incorrect, le système de contrôle commet parfois une erreur de type II (faux positif / acceptation erronée) avec une probabilité $\beta \in [0, 1[$, c'est-à-dire que $\mathbb{P}(B_i \mid \overline{A_i}) = \beta$.

---

### ❓ Questions progressives (incluant une analyse critique du modèle)

1. **Calculs préliminaires sur une transmission unique**
   Exprimer la probabilité de l'événement $B_1$ en fonction de $p$, $\alpha$ et $\beta$. En déduire la probabilité conditionnelle $\mathbb{P}(A_1 \mid B_1)$.

2. **Fiabilité globale du canal**
   On pose $p' = \mathbb{P}(A_1 \mid B_1)$. Sous quelle condition portant sur $p$, $\alpha$ et a priori $\beta$ a-t-on l'inégalité $p' > p$ ? Interpréter ce résultat de manière critique quant à l'utilité du système de contrôle.

3. **Chaîne de transmissions et probabilités composées**
   On s'intéresse à présent à deux transmissions consécutives ($n=2$). On suppose que les couples d'événements $(A_1, B_1)$ et $(A_2, B_2)$ sont mutuellement indépendants.
   Calculer la probabilité $\mathbb{P}(A_1 \cap B_2)$ en fonction des paramètres du modèle.

4. **Analyse bayésienne séquentielle**
   Sachant que le deuxième paquet a été déclaré valide par le système ($B_2$ réalisé), déterminer la probabilité que le premier paquet ait été correct, c'est-à-dire calculer $\mathbb{P}(A_1 \mid B_2)$.

5. **Étude asymptotique et critique du modèle**
   On fixe $\alpha = 0,05$ et $\beta = 0,01$. 
   - Étudier le comportement de $\mathbb{P}(A_1 \mid B_1$ lorsque $p$ tend vers $0$ (cas d'un canal très bruité où les messages corrects sont rares).
   - Le modèle d'indépendance entre les paquets successifs est-il réaliste dans une infrastructure réseau physique réelle ? Proposer une critique constructive.

---

### 💡 Pistes & Indications méthodologiques

- **Question 1 :** Utilisez la formule des probabilités totales avec le système complet d'événements $(A_1, \overline{A_1})$. Pour la probabilité conditionnelle, appliquez la définition rigoureuse et la formule de Bayes.
- **Question 2 :** Posez l'inégalité $p' > p$ et résolvez-la algébriquement en isolant les termes liés à $p$. Observez l'impact des taux d'erreur $\alpha$ et $\beta$.
- **Question 3 :** Traduisez l'indépendance des transmissions pour simplifier l'intersection de variables indicées par des temps différents.
- **Question 4 :** Même méthodologie que la question 1, mais appliquée au deuxième processus tout en remontant l'information sur le premier (attention à bien formaliser l'indépendance).
- **Question 5 :** Utilisez un passage à la limite (croissance comparée ou équivalents simples) et discutez des hypothèses physiques sous-jacentes (rafales d'erreurs, saturation du réseau).

---

### 📋 Corrigé détaillé pas à pas

#### 1. Calculs préliminaires sur une transmission unique
Le système $\{A_1, \overline{A_1}\}$ forme un système complet d'événements. D'après la formule des probabilités totales, on a :
$$\mathbb{P}(B_1) = \mathbb{P}(B_1 \cap A_1) + \mathbb{P}(B_1 \cap \overline{A_1})$$
En utilisant la définition des probabilités conditionnelles :
$$\mathbb{P}(B_1) = \mathbb{P}(B_1 \mid A_1)\mathbb{P}(A_1) + \mathbb{P}(B_1 \mid \overline{A_1})\mathbb{P}(\overline{A_1})$$
D'après l'énoncé :
- $\mathbb{P}(A_1) = p$, donc $\mathbb{P}(\overline{A_1}) = 1 - p$.
- $\mathbb{P}(\overline{B_1} \mid A_1) = \alpha \implies \mathbb{P}(B_1 \mid A_1) = 1 - \alpha$.
- $\mathbb{P}(B_1 \mid \overline{A_1}) = \beta$.

En remplaçant, on obtient :
$$\mathbb{P}(B_1) = (1 - \alpha)p + \beta(1 - p)$$

Pour calculer $p' = \mathbb{P}(A_1 \mid B_1)$, on utilise la formule de Bayes :
$$p' = \mathbb{P}(A_1 \mid B_1) = \frac{\mathbb{P}(B_1 \mid A_1)\mathbb{P}(A_1)}{\mathbb{P}(B_1)} = \frac{(1 - \alpha)p}{(1 - \alpha)p + \beta(1 - p)}$$

#### 2. Fiabilité globale du canal
Exprimons la condition $p' > p$ :
$$\frac{(1 - \alpha)p}{(1 - \alpha)p + \beta(1 - p)} > p$$
Puisque $p > 0$ et que le dénominateur est strictement positif, on peut diviser par $p$ :
$$\frac{1 - \alpha}{(1 - \alpha)p + \beta(1 - p)} > 1 \implies 1 - \alpha > (1 - \alpha)p + \beta(1 - p)$$
Développons et regroupons les termes :
$$1 - \alpha > p - \alpha p + \beta - \beta p \implies 1 - \alpha - \beta > p(1 - \alpha - \beta)$$
En factorisant :
$$(1 - p)(1 - \alpha - \beta) > 0$$
Comme $p \in ]0, 1[$, on a $1 - p > 0$. L'inégalité est donc équivalente à :
$$1 - \alpha - \beta > 0 \iff \alpha + \beta < 1$$

**Interprétation critique :** Si $\alpha + \beta < 1$, alors le fait qu'un paquet soit déclaré valide augmente effectivement la confiance que l'on peut avoir dans le fait qu'il soit correct ($p' > p$). Si cette condition n'est pas respectée, le système de contrôle est tellement défaillant qu'il introduit un bruit pire que l'absence de contrôle.

#### 3. Chaîne de transmissions et probabilités composées
On cherche $\mathbb{P}(A_1 \cap B_2)$. Par hypothèse, les couples $(A_1, B_1)$ et $(A_2, B_2)$ sont indépendants, ce qui implique en particulier que les événements relatifs à l'instant 1 et à l'instant 2 sont indépendants.
Ainsi, $A_1$ et $B_2$ sont des événements indépendants. On a donc :
$$\mathbb{P}(A_1 \cap B_2) = \mathbb{P}(A_1) \times \mathbb{P}(B_2)$$
La probabilité $\mathbb{P}(B_2)$ se calcule de la même manière que $\mathbb{P}(B_1)$ (les lois stationnaires étant identiques) :
$$\mathbb{P}(B_2) = (1 - \alpha)p + \beta(1 - p)$$
Par conséquent :
$$\mathbb{P}(A_1 \cap B_2) = p \big((1 - \alpha)p + \beta(1 - p)\big)$$

#### 4. Analyse bayésienne séquentielle
On cherche $\mathbb{P}(A_1 \mid B_2)$. Par définition de la probabilité conditionnelle :
$$\mathbb{P}(A_1 \mid B_2) = \frac{\mathbb{P}(A_1 \cap B_2)}{\mathbb{P}(B_2)}$$
En remplaçant par les expressions obtenues à la question 3 :
$$\mathbb{P}(A_1 \mid B_2) = \frac{p \big((1 - \alpha)p + \beta(1 - p)\big)}{(1 - \alpha)p + \beta(1 - p)} = p$$

**Remarque remarquable :** On trouve $\mathbb{P}(A_1 \mid B_2) = p = \mathbb{P}(A_1)$. Les événements $A_1$ et $B_2$ sont donc indépendants. La validation du second paquet n'apporte aucune information sur l'état du premier paquet émis, ce qui est cohérent avec l'hypothèse d'indépendance temporelle des transmissions.

#### 5. Étude asymptotique et critique du modèle
- **Étude de $p'$ lorsque $p \to 0$ :**
  Reprenons l'expression de $p'$ avec $\alpha = 0,05$ et $\beta = 0,01$ :
  $$p' = \frac{0,95 p}{0,95 p + 0,01(1 - p)} = \frac{0,95 p}{0,94 p + 0,01}$$
  Lorsque $p$ tend vers $0$ :
  $$\lim_{p \to 0} p' = \lim_{p \to 0} \frac{0,95 p}{0,94 p + 0,01} = 0$$
  *Analyse critique :* Même si le système a un taux de faux positifs très faible ($\beta = 0,01$), si la proportion de messages corrects émis est quasi nulle ($p \to 0$), la majorité des paquets reçus valides proviennent en réalité de faux positifs. Le filtre est saturé d'erreurs.

- **Critique du modèle d'indépendance :**
  Dans la réalité des réseaux de télécommunications, l'hypothèse d'indépendance entre les paquets successifs $(A_i)$ est souvent mise en défaut. Les perturbations physiques (parasites électromagnétiques, évanouissements par trajets multiples) affectent généralement les signaux par **rafales** (bursts). Si le paquet $i$ est altéré ($\overline{A_i}$), il y a une forte probabilité que le paquet $i+1$ le soit également. Un modèle plus robuste ferait appel aux chaînes de Markov discrètes pour modéliser la persistance temporelle des erreurs.