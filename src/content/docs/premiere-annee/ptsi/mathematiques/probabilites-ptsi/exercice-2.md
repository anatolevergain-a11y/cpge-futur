---
title: 'Exercice 2 : Variables aléatoires discrètes'
description: 'Problème d entraînement type concours pour PTSI.'
---

### 🌐 Énoncé du problème / Cadre d'étude

Dans le cadre de l'étude des processus stochastiques appliqués aux réseaux de communication, on s'intéresse à un protocole de transmission de données par paquets. Un émetteur envoie des messages sous forme de blocs binaires. La liaison est imparfaite : chaque paquet transmis est reçu erroné avec une probabilité $p \in ]0, 1[$, indépendamment des autres paquets.

Afin d'assurer la fiabilité de la transmission, le protocole utilise un mécanisme de retransmission (type ARQ - *Automatic Repeat reQuest*) :
1. L'émetteur envoie un paquet.
2. Si le paquet est reçu corrompu, un signal de demande de répétition est renvoyé, et l'émetteur renvoie le même paquet.
3. Le processus s'arrête dès le premier succès (premier paquet reçu correctement).

On cherche à modéliser mathématiquement le nombre d'essais nécessaires pour réussir la transmission d'un paquet, ainsi que le coût énergétique associé à ce protocole.

---

### ❓ Questions progressives (incluant une analyse critique du modèle)

1. **Modélisation élémentaire :** On note $X$ la variable aléatoire représentant le nombre total d'envois nécessaires pour obtenir un premier succès.
   a. Quel est l'univers des possibles $\Omega$ associé à $X$ ?
   b. Préciser la loi de probabilité de $X$ en explicitant pour tout $k \in \mathbb{N}^*$ la probabilité $\mathbb{P}(X = k)$.
   c. Rappeler, sans démonstration, l'espérance et la variance de $X$.

2. **Somme de variables aléatoires et temps d'attente global :** 
   On souhaite maintenant transmettre un fichier comportant $n$ paquets indépendants ($n \in \mathbb{N}^*$). Soit $Y_n$ la variable aléatoire représentant le nombre *total* d'envois nécessaires pour transmettre avec succès l'intégralité des $n$ paquets.
   a. Exprimer $Y_n$ à l'aide d'une suite de variables aléatoires $(X_i)_{1 \le i \le n}$, où chaque $X_i$ suit la même loi que $X$ et est indépendante des autres.
   b. En déduire l'espérance $\mathbb{E}(Y_n)$ et la variance $\mathbb{V}(Y_n)$.

3. **Modélisation d'un coût énergétique aléatoire :**
   Chaque tentative d'envoi d'un paquet consomme une quantité d'énergie fixe $e_0 > 0$. Cependant, en raison de fluctuations du canal, le coût de la $k$-ième tentative est modulé par un facteur aléatoire. Plus précisément, soit $C_k$ le coût de la $k$-ième tentative. On suppose que la suite $(C_k)_{k \ge 1}$ est une suite de variables aléatoires indépendantes et de même loi, admettant une espérance $\mu_C > 0$ et une variance $\sigma_C^2 > 0$, et que ces coûts sont indépendants de la variable $X$.
   On s'intéresse au coût total $S_X$ de la transmission d'un unique paquet (qui nécessite $X$ essais) :
   $$S_X = \sum_{k=1}^{X} C_k$$
   En utilisant la formule de l'espérance totale (ou conditionnement par rapport à la valeur de $X$), exprimer l'espérance $\mathbb{E}(S_X)$ en fonction de $\mu_C$ et de $p$.

4. **Analyse critique du modèle :**
   Dans la réalité, l'hypothèse d'indépendance des erreurs de transmission d'un paquet à l'autre est-elle toujours réaliste ? Citer un phénomène physique ou technique susceptible de vicier cette hypothèse et proposer qualitativement une modification du modèle.

---

### 💡 Pistes & Indications méthodologiques

* **Q1 :** Reconnaissez un schéma de Bernoulli répété jusqu'au premier succès. Pensez à la formule de l'événement $\{X = k\}$ : il faut $k-1$ échecs suivis d'un succès.
* **Q2 :** Si les paquets sont transmis séquentiellement et de manière indépendante, le temps total est la somme de variables aléatoires indépendantes de même loi que $X$. Utilisez la linéarité de l'espérance et les propriétés de la variance pour des variables indépendantes.
* **Q3 :** Pour calculer l'espérance d'une somme aléatoire $S_X = \sum_{k=1}^{X} C_k$ où la borne est elle-même une variable aléatoire, introduisez l'espérance conditionnelle sachant $X = k$ ou utilisez l'indicateur d'événements $\sum_{k=1}^{+\infty} \mathbb{C}_k \mathbb{1}_{(X \ge k)}$.
* **Q4 :** Pensez aux canaux de transmission radioélectriques soumis à des évanouissements (*fading* par trajets multiples) où si un paquet est corrompu, le suivant a de fortes chances de l'être aussi.

---

### 📋 Corrigé détaillé pas à pas

#### 1. Modélisation élémentaire
a. **Univers des possibles :** 
Le nombre d'essais nécessaires pour obtenir un succès peut théoriquement être infini si le canal est perpétuellement défaillant. Ainsi, l'univers des valeurs prises par $X$ est $\Omega_X = \mathbb{N}^* = \{1, 2, 3, \dots\}$.

b. **Loi de probabilité :**
L'événement $\{X = k\}$ signifie que l'on essaye $k$ fois, ce qui se traduit par $k-1$ échecs successifs lors des $k-1$ premières tentatives, suivis d'un succès à la $k$-ième tentative. 
Les essais étant indépendants et la probabilité d'échec étant $q = 1-p$, on a par multiplication des probabilités :
$$\mathbb{P}(X = k) = (1-p)^{k-1}p \quad \text{pour tout } k \in \mathbb{N}^*$$
La variable $X$ suit donc une **loi géométrique** de paramètre $p$, notée $\mathcal{G}(p)$.

c. **Espérance et variance :**
Il s'agit de résultats de cours classiques pour la loi géométrique :
$$\mathbb{E}(X) = \frac{1}{p} \quad \text{et} \quad \mathbb{V}(X) = \frac{1-p}{p^2}$$

#### 2. Somme de variables aléatoires et temps d'attente global
a. **Expression de $Y_n$ :**
Pour transmettre $n$ paquets indépendants, le temps total est la somme des temps nécessaires pour transmettre chaque paquet individuellement. Soit $X_i$ le nombre d'essais pour transmettre le $i$-ème paquet. Les variables $(X_i)_{1 \le i \le n}$ sont indépendantes et suivent toutes la loi $\mathcal{G}(p)$. On a alors :
$$Y_n = \sum_{i=1}^{n} X_i$$

b. **Espérance et variance de $Y_n$ :**
* Par **linéarité de l'espérance** :
  $$\mathbb{E}(Y_n) = \mathbb{E}\left(\sum_{i=1}^{n} X_i\right) = \sum_{i=1}^{n} \mathbb{E}(X_i) = n \times \frac{1}{p} = \frac{n}{p}$$
* Les variables $(X_i)$ étant **mutuellement indépendantes**, la variance de leur somme est la somme de leurs variances :
  $$\mathbb{V}(Y_n) = \mathbb{V}\left(\sum_{i=1}^{n} X_i\right) = \sum_{i=1}^{n} \mathbb{V}(X_i) = n \times \frac{1-p}{p^2}$$

#### 3. Modélisation d'un coût énergétique aléatoire
On cherche à calculer l'espérance de $S_X = \sum_{k=1}^{X} C_k$. 
Utilisons la formule de l'espérance totale par conditioning sur la valeur de $X$ (qui est à valeurs dans $\mathbb{N}^*$) :
$$\mathbb{E}(S_X) = \sum_{k=1}^{+\infty} \mathbb{E}(S_X \mid X = k) \mathbb{P}(X = k)$$

Si $X = k$, alors $S_X = \sum_{j=1}^{k} C_j$. Par conséquent, sachant $X = k$, l'espérance de $S_X$ devient :
$$\mathbb{E}\left(\sum_{j=1}^{k} C_j \;\middle|\; X = k\right)$$
Puisque la suite $(C_j)_{j \ge 1}$ est indépendante de la variable aléatoire $X$, le fait de savoir que $X = k$ ne donne aucune information sur les coûts $(C_j)_{1 \le j \le k}$. Ainsi :
$$\mathbb{E}\left(\sum_{j=1}^{k} C_j \;\middle|\; X = k\right) = \mathbb{E}\left(\sum_{j=1}^{k} C_j\right) = \sum_{j=1}^{k} \mathbb{E}(C_j) = k \mu_C$$
*(en utilisant l'égalité $\mathbb{E}(C_j) = \mu_C$ pour tout $j$)*.

Revenons à l'espérance totale :
$$\mathbb{E}(S_X) = \sum_{k=1}^{+\infty} (k \mu_C) \mathbb{P}(X = k) = \mu_C \sum_{k=1}^{+\infty} k \mathbb{P}(X = k)$$
Or, la somme $\sum_{k=1}^{+\infty} k \mathbb{P}(X = k)$ n'est autre que l'espérance de la variable $X$, c'est-à-dire $\mathbb{E}(X) = \frac{1}{p}$. 
Finalement :
$$\mathbb{E}(S_X) = \mu_C \times \frac{1}{p} = \frac{\mu_C}{p}$$

#### 4. Analyse critique du modèle
* **Validité de l'hypothèse :** L'hypothèse d'indépendance des erreurs d'un paquet à l'autre est souvent mise en défaut dans les réseaux réels (par exemple en téléphonie mobile ou en Wi-Fi). 
* **Phénomène physique :** Les canaux de transmission radioélectriques sont sujets à des évanouissements sélectifs ou à des blocages temporaires (phénomène de *fading* par trajets multiples ou obstacles mobiles). Si un paquet est corrompu en raison d'un évanouissement profond du canal, il est très probable que le paquet suivant, envoyé quelques millisecondes plus tard, le soit également. Les erreurs présentent donc une **persistance temporelle**.
* **Amélioration du modèle :** Pour pallier cette limite, on remplace généralement la suite des succès/échecs indépendants (schéma de Bernoulli) par une **chaîne de Markov à deux états** (modèle de Gilbert-Elliott), où l'état du canal à l'instant $k$ (bon ou mauvais) dépend probabilistiquement de son état à l'instant $k-1$.