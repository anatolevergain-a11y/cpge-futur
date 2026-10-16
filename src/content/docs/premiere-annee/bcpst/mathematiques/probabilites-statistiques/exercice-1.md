---
title: 'Exercice 1 : Variables aléatoires discrètes'
description: 'Problème d entraînement type concours.'
---

# Problème : Modélisation stochastique de la transmission virale chez les végétaux et méthode de dilution limite

## Contexte biologique
Le virus de la mosaïque du tabac (*Tobacco Mosaic Virus*, TMV) et le virus de la mosaïque du concombre (*Cucumber Mosaic Virus*, CMV) sont des phytovirus majeurs transmis par contact mécanique ou par des insectes vecteurs (notamment les pucerons du genre *Aphis*). 

Lors d'une piqûre d'essai sur une feuille, un puceron injecte de la salive contenant un nombre aléatoire de virions dans une cellule végétale. L'infection de la cellule par le virus dépend à la fois du nombre de particules virales introduites et de leur capacité à franchir les barrières intracellulaires de l'hôte pour initier la réplication. 

Ce problème propose de modéliser le succès de l'infection à l'échelle cellulaire, la dynamique des piqûres successives d'un puceron, ainsi que le titrage stochastique de la charge virale par la méthode de dilution limite (*Most Probable Number*).

---

## Énoncé

### Partie I — Inoculation cellulaire et modèle à coup unique (*single-hit*)

On s'intéresse à une cellule végétale subissant une piqûre d'essai. 
On suppose qu'au cours de cette piqûre, le stylet du puceron dépose un nombre $N$ de particules virales dans le cytoplasme. 
On modélise $N$ par une variable aléatoire suivant une loi de Poisson de paramètre $\lambda > 0$, représentatif de la charge virale moyenne contenue dans le canal salivaire du vecteur.

Chaque particule virale déposée a, indépendamment des autres, une probabilité $p \in ]0, 1[$ de contourner les défenses immunitaires basales de la cellule (silencage d'ARN) et de commencer la traduction de son génome. On note $X$ le nombre de particules virales qui réussissent cette étape dans la cellule.

1. **Loi du nombre de virions effectifs**
   a. Pour tout entier naturel $n$, donner la loi conditionnelle de $X$ sachant l'événement $(N = n)$.  
   b. En appliquant la formule des probabilités totales, démontrer que $X$ suit une loi de Poisson dont on déterminera le paramètre $\mu$ en fonction de $\lambda$ et $p$.  
   c. Retrouver l'espérance $\mathbb{E}(X)$ et la variance $\mathbb{V}(X)$.

2. **Probabilité d'infection et modèle à coup unique**
   Selon l'hypothèse d'action unitaire (*single-hit hypothesis*), il suffit d'au moins un virion compétent pour induire l'infection systémique de la cellule. Soit $I$ l'événement : « la cellule est infectée ».  
   a. Exprimer la probabilité $\mathbb{P}(I)$ en fonction de $\lambda$ et $p$.  
   b. Que devient cette probabilité si la charge moyenne injectée $\lambda$ est très faible devant $1$ ? Interpréter biologiquement.

3. **Généralisation : Seuil de coopérativité virale**
   Chez certains virus multipartites, plusieurs virions distincts doivent infecter simultanément la même cellule pour reconstituer le génome complet. On suppose désormais que l'infection requiert au moins $k$ virions compétents ($k \in \mathbb{N}^*$).  
   Donner l'expression de la probabilité d'infection $\mathbb{P}(I_k)$ sous cette hypothèse et comparer l'allure de la courbe de $\mathbb{P}(I_k)$ en fonction de $\mu$ pour $k = 1$ et $k \ge 2$.

---

### Partie II — Dynamique des piqûres successives et persistance du virus

Un puceron porteur du virus visite successivement des plantes saines d'une parcelle cultivée. À chaque visite, il réalise une piqûre d'essai. 
On suppose dans un premier temps que le stock viral dans le stylet est suffisant pour que les piqûres successives soient indépendantes et présentent la même probabilité de succès d'infection $\pi \in ]0, 1[$, où $\pi = \mathbb{P}(I) = 1 - \mathrm{e}^{-\mu}$.

4. On note $T$ la variable aléatoire représentant le rang de la première plante infectée par le puceron.  
   a. Déterminer la loi de $T$, son espérance et sa variance.  
   b. Établir la propriété d'absence de mémoire de la loi géométrique : pour tous entiers $n, m \ge 1$,
   $$\mathbb{P}(T > n + m \mid T > n) = \mathbb{P}(T > m)$$
   c. **Discussion biologique :** Cette propriété d'absence de mémoire est-elle réaliste pour un virus non persistant (qui adhère transitoirement à la cuticule du stylet sans s'y répliquer) ? Proposer une modification qualitative du modèle pour traduire l'épuisement de la charge virale au fil des piqûres.

---

### Partie III — Quantification virale par dilution limite et estimation

Pour mesurer la concentration $c$ (exprimée en virions infectieux par millilitre, $\text{virions}\cdot\text{mL}^{-1}$) d'un extrait de sève brute, on réalise un essai de dilution limite.
On prélève un volume calibré $v$ ($\text{mL}$) de sève diluée, que l'on inocule à $m$ disques foliaires indépendants ($m \ge 2$). 

On admet que le nombre de virions infectieux déposés sur chaque disque suit une loi de Poisson de paramètre $\theta = c \cdot v$. D'après le modèle à coup unique ($p=1$), un disque présente une lésion nécrotique si et seulement s'il a reçu au moins un virion infectieux. Un disque sans lésion est dit « stérile ».

On définit, pour chaque disque $i \in \{1, \dots, m\}$, la variable de Bernoulli $Y_i$ valant $1$ si le disque est stérile (aucun virion reçu), et $0$ sinon. On pose :
$$S_m = \sum_{i=1}^m Y_i$$

5. a. Justifier que les variables $(Y_1, \dots, Y_m)$ sont mutuellement indépendantes et préciser la loi de $Y_i$.  
   b. En déduire la loi de la variable $S_m$, ainsi que son espérance et sa variance.

6. **Estimateur de la charge virale**  
   Pour estimer le paramètre $\theta$, on observe la proportion de disques stériles, notée $f_m = \frac{S_m}{m}$.  
   a. Justifier que $\mathbb{E}(f_m) = \mathrm{e}^{-\theta}$.  
   b. En utilisant l'inégalité de Bienaymé-Tchebychev, démontrer que pour tout $\varepsilon > 0$ :
   $$\lim_{m \to +\infty} \mathbb{P}(|f_m - \mathrm{e}^{-\theta}| \ge \varepsilon) = 0$$
   c. Lorsque $S_m > 0$, on propose d'estimer $\theta$ par la statistique :
   $$\widehat{\theta}_m = -\ln(f_m) = -\ln\left(\frac{S_m}{m}\right)$$
   En utilisant la convexité de la fonction $x \mapsto -\ln(x)$ sur $]0, +\infty[$, montrer que si l'on prolonge de façon adéquate l'estimateur pour éviter la division par zéro, on a l'inégalité théorique :
   $$\mathbb{E}(\widehat{\theta}_m) > \theta$$
   Quel est le biais de cet estimateur ?

7. **Analyse critique des hypothèses**  
   Dans la pratique agronomique, la méthode de dilution limite conduit souvent à sous-estimer le nombre réel de particules physiques déterminé par microscopie électronique à transmission (MET) ou par RT-qPCR.  
   Relever et expliciter au moins deux limites du modèle mathématique développé ici au regard de la réalité biologique des phytovirus.

---

## Pistes de résolution

* **Question 1 :** $X \mid (N=n)$ compte le nombre de « succès » parmi $n$ particules indépendantes. Reconnaitre une loi usuelle. Pour la loi marginale de $X$, utiliser le système complet d'événements $(N=n)_{n \in \mathbb{N}}$, intervertir les sommes après avoir posé $j = n - k$.
* **Question 2 :** L'événement contraire de « la cellule est infectée » est $(X = 0)$. Pour l'approximation au premier ordre, effectuer un développement limité de $\mathrm{e}^{-\mu}$ au voisinage de 0.
* **Question 3 :** Exprimer $I_k$ comme le complémentaire de l'événement $(X \le k - 1)$. Analyser le comportement de la dérivée par rapport à $\mu$ en $\mu = 0$ : que vaut la pente pour $k=1$ ? pour $k \ge 2$ ?
* **Question 4 :** Modéliser $T$ par un temps de premier succès dans une suite d'épreuves de Bernoulli indépendantes. Pour l'absence de mémoire, revenir à la définition de la probabilité conditionnelle et utiliser $\mathbb{P}(T > j) = (1-\pi)^j$.
* **Question 5 :** Somme de variables de Bernoulli indépendantes et identiquement distribuées.
* **Question 6 :** Appliquer l'inégalité de Bienaymé-Tchebychev à $f_m$. Pour l'inégalité d'espérance, appliquer l'inégalité de Jensen à la fonction strictement convexe $-\ln$ sur un intervalle où elle est bien définie.
* **Question 7 :** Réfléchir à l'état physique des virions (agrégation en amas), à la variabilité génétique (génomes défectueux / particules non infectieuses), et à l'hétérogénéité de la réceptivité cellulaire selon l'âge de la feuille.

---

## Corrigé détaillé

### Partie I — Inoculation cellulaire et modèle à coup unique

#### 1. Loi du nombre de virions effectifs

**a. Loi conditionnelle de $X$ sachant $(N=n)$**  
Soit $n \in \mathbb{N}$. Sachant que $n$ virions ont été introduits dans la cellule, chaque virion a une probabilité $p$ de franchir les défenses de la cellule, indépendamment des autres virions. Le nombre $X$ de virions compétents représente donc la somme de $n$ variables de Bernoulli indépendantes de même paramètre $p$.  
Ainsi :
* Si $n = 0$, $X = 0$ de manière déterministe ($\mathbb{P}(X=0 \mid N=0) = 1$).
* Si $n \ge 1$, la loi conditionnelle de $X$ sachant $(N=n)$ est la loi binomiale $\mathcal{B}(n, p)$ :
$$\forall k \in \{0, \dots, n\}, \quad \mathbb{P}(X = k \mid N = n) = \binom{n}{k} p^k (1-p)^{n-k}$$
Pour tout $k > n$, $\mathbb{P}(X = k \mid N = n) = 0$.

**b. Loi marginale de $X$**  
La famille d'événements $(N = n)_{n \in \mathbb{N}}$ forme un système complet d'événements tel que $\mathbb{P}(N = n) = \mathrm{e}^{-\lambda} \frac{\lambda^n}{n!}$.  
D'après la formule des probabilités totales, pour tout $k \in \mathbb{N}$ :
$$\mathbb{P}(X = k) = \sum_{n=0}^{+\infty} \mathbb{P}(N = n) \, \mathbb{P}(X = k \mid N = n)$$
Comme $\mathbb{P}(X = k \mid N = n) = 0$ pour tout $n < k$, la somme démarre à $n = k$ :
$$\mathbb{P}(X = k) = \sum_{n=k}^{+\infty} \mathrm{e}^{-\lambda} \frac{\lambda^n}{n!} \binom{n}{k} p^k (1-p)^{n-k}$$
En développant le coefficient binomial $\binom{n}{k} = \frac{n!}{k!(n-k)!}$ :
$$\mathbb{P}(X = k) = \frac{\mathrm{e}^{-\lambda} p^k}{k!} \sum_{n=k}^{+\infty} \frac{\lambda^n}{(n-k)!} (1-p)^{n-k}$$
Effectuons le changement d'indice $j = n - k$. Lorsque $n$ varie de $k$ à $+\infty$, $j$ varie de $0$ à $+\infty$ :
$$\mathbb{P}(X = k) = \frac{\mathrm{e}^{-\lambda} p^k \lambda^k}{k!} \sum_{j=0}^{+\infty} \frac{\lambda^j (1-p)^j}{j!} = \frac{\mathrm{e}^{-\lambda} (\lambda p)^k}{k!} \sum_{j=0}^{+\infty} \frac{[\lambda(1-p)]^j}{j!}$$
On reconnaît le développement en série entière de l'exponentielle $\sum_{j=0}^{+\infty} \frac{[\lambda(1-p)]^j}{j!} = \mathrm{e}^{\lambda(1-p)}$. Il vient :
$$\mathbb{P}(X = k) = \frac{\mathrm{e}^{-\lambda} (\lambda p)^k}{k!} \mathrm{e}^{\lambda(1-p)} = \mathrm{e}^{-\lambda + \lambda - \lambda p} \frac{(\lambda p)^k}{k!} = \mathrm{e}^{-\lambda p} \frac{(\lambda p)^k}{k!}$$
On conclut que **$X$ suit la loi de Poisson de paramètre $\mu = \lambda p$** :
$$X \sim \mathcal{P}(\lambda p)$$

**c. Espérance et variance**  
D'après les propriétés d'une loi de Poisson de paramètre $\mu$ :
$$\mathbb{E}(X) = \mu = \lambda p \quad \text{et} \quad \mathbb{V}(X) = \mu = \lambda p$$

---

#### 2. Probabilité d'infection et modèle à coup unique

**a. Calcul de $\mathbb{P}(I)$**  
L'événement « la cellule est infectée » est réalisé dès lors qu'au moins un virion est compétent : $I = (X \ge 1)$.  
L'événement contraire est $\bar{I} = (X = 0)$. Par conséquent :
$$\mathbb{P}(I) = 1 - \mathbb{P}(X = 0) = 1 - \mathrm{e}^{-\mu} = 1 - \mathrm{e}^{-\lambda p}$$

**b. Comportement pour de faibles charges virales**  
Lorsque $\lambda \ll 1$, le paramètre $\mu = \lambda p$ est également petit devant $1$.  
Au voisinage de $0$, $\mathrm{e}^{-\mu} = 1 - \mu + o(\mu)$, d'où :
$$\mathbb{P}(I) = \lambda p + o(\lambda p) \approx \lambda p$$
*Interprétation biologique :* À faible dose d'inoculum, la probabilité d'infection est directement proportionnelle à la charge virale moyenne inoculée. Il n'existe pas d'effet de seuil minimum : une unique particule virale a une probabilité non nulle ($p$) d'initier seule l'infection. C'est le fondement du modèle à coup unique (*independent action hypothesis*).

---

#### 3. Seuil de coopérativité virale

Si l'infection requiert au moins $k$ virions compétents ($k \ge 2$), on note $I_k = (X \ge k)$. Alors :
$$\mathbb{P}(I_k) = 1 - \sum_{j=0}^{k-1} \mathbb{P}(X = j) = 1 - \mathrm{e}^{-\mu} \sum_{j=0}^{k-1} \frac{\mu^j}{j!}$$
* Comparaison de l'allure des courbes :
  * Pour $k = 1$ : $f_1(\mu) = 1 - \mathrm{e}^{-\mu}$. La dérivée est $f_1'(\mu) = \mathrm{e}^{-\mu}$, donc $f_1'(0) = 1 > 0$. La courbe part de l'origine avec une pente non nulle (courbe concave).
  * Pour $k \ge 2$ : par dérivation d'une somme télescopique, 
    $$f_k'(\mu) = \frac{\mathrm{e}^{-\mu} \mu^{k-1}}{(k-1)!}$$
    Comme $k \ge 2$, on a $f_k'(0) = 0$. La courbe part de l'origine avec une tangente horizontale, prend une forme sigmoïde (courbe en « S ») avec un point d'inflexion.
* *Conséquence biologique :* Pour $k \ge 2$, les faibles doses sont très peu efficaces, et l'infection ne se déclenche brutalement qu'à partir d'un seuil critique de virions injectés (coopérativité virale).

```
Probabilité
d'infection
  1 ^                k = 1 (coup unique)
    |              . - - - -
    |          . '
    |       . '       k >= 2 (coopérativité / seuil)
    |     .'          _ _ - -
    |   .'        _ -
    |  /      _ -
    | /   _ -
  0 +------------------------> Dose moyenne (mu)
```

---

### Partie II — Dynamique des piqûres successives et persistance du virus

#### 4. Analyse du rang de la première infection

**a. Loi de $T$, espérance et variance**  
La variable aléatoire $T$ représente le temps d'attente du premier succès lors d'une suite d'épreuves de Bernoulli indépendantes de probabilité de succès $\pi \in ]0, 1[$.  
Par définition, $T$ suit une loi géométrique sur $\mathbb{N}^*$ de paramètre $\pi$ :
$$\forall k \in \mathbb{N}^*, \quad \mathbb{P}(T = k) = (1 - \pi)^{k-1} \pi$$
L'espérance et la variance sont données par le cours :
$$\mathbb{E}(T) = \frac{1}{\pi} = \frac{1}{1 - \mathrm{e}^{-\mu}}, \quad \mathbb{V}(T) = \frac{1 - \pi}{\pi^2} = \frac{\mathrm{e}^{-\mu}}{(1 - \mathrm{e}^{-\mu})^2}$$

**b. Absence de mémoire**  
Pour tout $j \in \mathbb{N}$, l'événement $(T > j)$ signifie que les $j$ premières piqûres ont toutes été des échecs. Par indépendance :
$$\mathbb{P}(T > j) = (1 - \pi)^j$$
Soient $n, m \ge 1$. Par définition de la probabilité conditionnelle :
$$\mathbb{P}(T > n + m \mid T > n) = \frac{\mathbb{P}(\{T > n + m\} \cap \{T > n\})}{\mathbb{P}(T > n)}$$
Comme $\{T > n + m\} \subset \{T > n\}$, l'intersection se réduit à $\{T > n + m\}$ :
$$\mathbb{P}(T > n + m \mid T > n) = \frac{\mathbb{P}(T > n + m)}{\mathbb{P}(T > n)} = \frac{(1-\pi)^{n+m}}{(1-\pi)^n} = (1-\pi)^m = \mathbb{P}(T > m)$$
La loi géométrique est bien sans mémoire.

**c. Discussion biologique critique**  
Dans le cas d'une transmission **non persistante** (stylet-borne), le virus adhère aux protéines cuticulaires de l'extrémité distale des stylets lors d'une piqûre sur plante infectée, mais il ne s'y réplique pas. À chaque piqûre sur une plante saine, le puceron « lave » son stylet :
1. Une fraction importante des virions est relarguée dans la salive dès la première piqûre.
2. Des enzymes salivaires ou le simple détachement mécanique réduisent rapidement la charge virale résiduelle.

Par conséquent, l'hypothèse d'absence de mémoire ($\pi$ constant) n'est **pas réaliste**. La probabilité de transmission $\pi_j$ à la $j$-ième piqûre doit être une fonction strictement décroissante de $j$ (par exemple $\pi_j = \pi_0 \alpha^{j-1}$ avec $\alpha \in ]0, 1[$), traduisant l'épuisement rapide du potentiel infectieux de l'insecte.

---

### Partie III — Quantification virale par dilution limite et estimation

#### 5. Loi de la proportion de disques stériles

**a. Loi de $Y_i$ et indépendance**  
Chaque disque foliaire $i$ reçoit un nombre de virions $V_i \sim \mathcal{P}(\theta)$.  
Un disque est stérile ($Y_i = 1$) si et seulement si $V_i = 0$. Donc :
$$\mathbb{P}(Y_i = 1) = \mathbb{P}(V_i = 0) = \mathrm{e}^{-\theta}$$
Comme $Y_i$ ne prend que les valeurs 0 et 1, **$Y_i$ suit une loi de Bernoulli de paramètre $q = \mathrm{e}^{-\theta}$**.  
Les disques recevant des aliquotes indépendantes issues d'une suspension homogène, les variables aléatoires $(Y_1, \dots, Y_m)$ sont mutuellement indépendantes.

**b. Loi de $S_m$, espérance et variance**  
La variable $S_m = \sum_{i=1}^m Y_i$ est la somme de $m$ variables de Bernoulli indépendantes et de même paramètre $q = \mathrm{e}^{-\theta}$.  
Elle suit donc une loi binomiale :
$$S_m \sim \mathcal{B}(m, \mathrm{e}^{-\theta})$$
On en déduit immédiatement :
$$\mathbb{E}(S_m) = m \mathrm{e}^{-\theta} \quad \text{et} \quad \mathbb{V}(S_m) = m \mathrm{e}^{-\theta}(1 - \mathrm{e}^{-\theta})$$

---

#### 6. Estimateur de la charge virale

**a. Espérance de $f_m$**  
Par linéarité de l'espérance :
$$\mathbb{E}(f_m) = \mathbb{E}\left(\frac{S_m}{m}\right) = \frac{1}{m} \mathbb{E}(S_m) = \frac{1}{m} (m \mathrm{e}^{-\theta}) = \mathrm{e}^{-\theta}$$
La statistique $f_m$ est donc un estimateur sans biais de $\mathrm{e}^{-\theta}$.

**b. Convergence via Bienaymé-Tchebychev**  
Calculons la variance de $f_m$ :
$$\mathbb{V}(f_m) = \mathbb{V}\left(\frac{S_m}{m}\right) = \frac{1}{m^2} \mathbb{V}(S_m) = \frac{\mathrm{e}^{-\theta}(1 - \mathrm{e}^{-\theta})}{m}$$
D'après l'inégalité de Bienaymé-Tchebychev appliquée à $f_m$, pour tout $\varepsilon > 0$ :
$$\mathbb{P}(|f_m - \mathrm{e}^{-\theta}| \ge \varepsilon) \le \frac{\mathbb{V}(f_m)}{\varepsilon^2} = \frac{\mathrm{e}^{-\theta}(1 - \mathrm{e}^{-\theta})}{m \varepsilon^2}$$
Comme $\lim_{m \to +\infty} \frac{\mathrm{e}^{-\theta}(1 - \mathrm{e}^{-\theta})}{m \varepsilon^2} = 0$, le théorème des gendarmes impose :
$$\lim_{m \to +\infty} \mathbb{P}(|f_m - \mathrm{e}^{-\theta}| \ge \varepsilon) = 0$$
L'estimateur $f_m$ converge en probabilité vers $\mathrm{e}^{-\theta}$ (loi faible des grands nombres).

**c. Biais de l'estimateur $\widehat{\theta}_m$**  
La fonction $g : x \mapsto -\ln(x)$ est deux fois dérivable sur $]0, +\infty[$ et :
$$\forall x > 0, \quad g''(x) = \frac{1}{x^2} > 0$$
La fonction $g$ est donc **strictement convexe** sur $]0, +\infty[$.  
Sous réserve que $S_m > 0$ (événement de probabilité tendant vers 1 quand $m \to +\infty$), l'inégalité de Jensen pour les fonctions strictement convexes stipule que si une variable $Z$ n'est pas presque sûrement constante :
$$\mathbb{E}(g(Z)) > g(\mathbb{E}(Z))$$
En appliquant ce résultat à la variable aléatoire $f_m$ conditionnellement à $S_m > 0$ :
$$\mathbb{E}(\widehat{\theta}_m) = \mathbb{E}(-\ln(f_m)) > -\ln(\mathbb{E}(f_m))$$
Or $\mathbb{E}(f_m) = \mathrm{e}^{-\theta}$, donc :
$$\mathbb{E}(\widehat{\theta}_m) > -\ln(\mathrm{e}^{-\theta}) = \theta$$
Conclusion: * L'estimateur $\widehat{\theta}_m$ présente un **biais positif** ($\mathbb{E}(\widehat{\theta}_m) - \theta > 0$). En pratique, l'utilisation directe du logarithme de la fréquence des tubes négatifs tend systématiquement à surestimer la concentration virale moyenne sur des échantillons de taille modérée.

---

#### 7. Analyse critique des limites biologiques du modèle

L'écart fréquent entre le titre infectieux estimé par dilution limite et la charge réelle mesurée par microscopie électronique (MET) ou RT-qPCR s'explique par la rupture de plusieurs hypothèses fondamentales :

1. **Phénomène d'agrégation virale (formation de virions en grappes) :**  
   Le modèle de Poisson suppose que les virions sont distribués individuellement et de façon homogène dans le solvant. Or, de nombreuses particules de phytovirus (comme le TMV sous forme de bâtonnets rigides) ont tendance à s'agréger par interactions électrostatiques ou hydrophobes. Un agrégat de dix particules inoculé sur un disque foliaire n'induit qu'une seule lésion unitaire, conduisant la méthode de Poisson à sous-estimer considérablement le nombre réel de particules physiques.
   
2. **Ratio particules physiques / particules infectieuses élevé :**  
   La RT-qPCR quantifie les copies d'ARN génomique (qu'elles soient encapsidées, intègres ou fragmentées) et la MET dénombre toutes les capsides visibles. Or, une fraction majeure des virions produits lors d'une infection présente des mutations létales, des ARN tronqués ou des capsides instables. Le modèle de dilution limite ne détecte que les virions dits « compétents pour l'infection » (souvent $1$ virion sur $10^2$ à $10^4$).

3. **Hétérogénéité de la susceptibilité de l'hôte :**  
   L'hypothèse selon laquelle chaque disque présente exactement la même réceptivité ($p = 1$ ou $p$ constant) est invalidée en biologie végétale. L'épaisseur de la cuticule, la teneur en composés phénoliques inhibiteurs et l'état physiologique des cellules varient selon la position de la feuille sur la tige et son exposition lumineuse, rendant le paramètre de succès aléatoire d'un disque à l'autre.