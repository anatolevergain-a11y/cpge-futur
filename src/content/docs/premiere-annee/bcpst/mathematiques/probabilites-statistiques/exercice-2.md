---
title: 'Exercice 2 : Lois usuelles et modélisation biologique'
description: 'Problème d entraînement type concours.'
---

# Énoncé

Dans le cadre de la lutte contre les bactéries multi-résistantes, la phagothérapie suscite un intérêt majeur. Ce problème propose d'étudier la cinétique d'adsorption et d'infection de bactéries *Escherichia coli* par des bactériophages T4 au sein d'un chemostat. 

On considère une population de $N$ bactéries en suspension homogène dans un volume $V$, en présence d'une quantité $M$ de phages virulents. On note $\lambda = \frac{M}{N}$ le ratio initial phages/bactéries, usuellement appelé **multiplicité d'infection** ($\text{MOI}$).

---

### Partie I : Répartition des phages et cellules non infectées

On suppose que chaque phage se fixe indépendamment sur une bactérie choisie uniformément parmi les $N$ bactéries présentes. Pour une bactérie donnée fixée, on note $X_N$ la variable aléatoire représentant le nombre de phages adsorbés à sa surface.

1. **Loi exacte :** Justifier que $X_N$ suit une loi usuelle dont on précisera les paramètres.
2. **Convergence en loi :** On se place dans le cadre d'un grand nombre de bactéries ($N \to +\infty$) et de phages ($M \to +\infty$), le ratio $\lambda = M/N$ restant constant. 
   Démontrer que la suite de variables aléatoires $(X_N)$ converge en loi vers une variable aléatoire $X$ dont on précisera la loi et les paramètres.
3. **Fraction de cellules indemnes :** En déduire la proportion théorique $P_0$ de bactéries n'ayant adsorbé aucun phage. Pour $\lambda = 3$, calculer numériquement $P_0$ à $10^{-3}$ près. Commenter ce résultat au regard de l'objectif d'éradication bactérienne.

---

### Partie II : Efficacité de l'infection et processus de lyse

Tous les phages adsorbés n'injectent pas avec succès leur matériel génétique. On suppose que chaque phage adsorbé a une probabilité indépendante $p \in ]0, 1[$ de déclencher l'infection lytique de la bactérie hôte. 
On note $Y$ le nombre de phages ayant réussi l'injection dans une bactérie portant $X$ phages adsorbés, où $X \sim \mathcal{P}(\lambda)$.

1. Soit $k \in \mathbb{N}$. Quelle est la loi conditionnelle de $Y$ sachant l'événement $(X = k)$ ?
2. En utilisant le système complet d'événements $((X=k))_{k \in \mathbb{N}}$, déterminer la loi marginale de $Y$. Reconnaître une loi usuelle et expliciter ses paramètres.
3. Calculer la probabilité qu'une cellule subisse une lyse, sachant qu'au moins un événement d'infection réussie suffit à lyser la cellule.

---

### Partie III : Hétérogénéité cellulaire et loi Binomiale Négative

En réalité, les bactéries ne présentent pas toutes la même surface membranaire ni la même densité de récepteurs OmpC (récepteurs du phage T4). Pour modéliser cette variabilité phénotypique, on suppose désormais que le paramètre d'adsorption n'est pas une constante $\lambda$, mais une variable aléatoire $\Lambda$ suivant une loi continue à valeurs dans $\mathbb{R}^+$. 
Conditionnellement à $(\Lambda = \theta)$, le nombre de phages adsorbés $Z$ suit une loi de Poisson $\mathcal{P}(\theta)$.
On suppose que $\Lambda$ admet pour densité :
$$
f_{\Lambda}(\theta) = \frac{\beta^\alpha}{\Gamma(\alpha)} \theta^{\alpha - 1} \mathrm{e}^{-\beta \theta} \, \mathbb{I}_{]0, +\infty[}(\theta) \quad (\text{loi Gamma } \gamma(\alpha, \beta), \text{ avec } \alpha > 0, \beta > 0)
$$
où $\Gamma(\alpha) = \int_0^{+\infty} t^{\alpha - 1}\mathrm{e}^{-t}\mathrm{d}t$.

1. Pour tout $k \in \mathbb{N}$, exprimer $P(Z = k)$ sous forme d'une intégrale faisant intervenir la loi conjointe de $(Z, \Lambda)$.
2. En effectuant le changement de variable approprié dans l'intégrale, montrer que :
   $$
   P(Z = k) = \frac{\Gamma(k+\alpha)}{k! \, \Gamma(\alpha)} \left(\frac{\beta}{\beta + 1}\right)^\alpha \left(\frac{1}{\beta + 1}\right)^k
   $$
3. Lorsque $\alpha = r \in \mathbb{N}^*$, reconnaître la loi de $Z$. Quel nom donne-t-on couramment à ce phénomène où la variance de la distribution observée est strictement supérieure à son espérance ?
4. **Analyse critique du modèle :** 
   Discuter de la pertinence de l'hypothèse d'indépendance des adsorptions de phages lorsque le nombre de phages par bactérie devient très grand. Quels phénomènes biologiques réels (encombrement stérique, résistance acquise CRISPR-Cas, déplétion locale de nutriments) limitent la validité de ce modèle ?

---

# Pistes de résolution

- **Partie I, Q1-Q2 :** Utiliser la définition d'un schéma de Bernoulli répété de façon indépendante pour la loi binomiale, puis appliquer le théorème d'approximation de la loi binomiale par la loi de Poisson (continuité de l'exponentielle).
- **Partie II, Q2 :** Appliquer la formule des probabilités totales. La somme à calculer correspond au développement en série entière de l'exponentielle : $\sum_{k=j}^{+\infty} \frac{x^k}{(k-j)!} = x^j \mathrm{e}^x$.
- **Partie III, Q2 :** L'intégrale obtenue pour $P(Z = k)$ est $\int_0^{+\infty} \frac{\theta^k}{k!} \mathrm{e}^{-\theta} f_{\Lambda}(\theta)\,\mathrm{d}\theta$. Regrouper les termes en $\theta^{k+\alpha-1}\mathrm{e}^{-(\beta+1)\theta}$ et poser le changement de variable $u = (\beta+1)\theta$ pour faire réapparaître $\Gamma(k+\alpha)$.
- **Partie III, Q3 :** Calculer ou comparer $E(Z)$ et $V(Z)$ à l'aide de la formule de décomposition de la variance : $V(Z) = E(V(Z|\Lambda)) + V(E(Z|\Lambda))$.

---

# Corrigé détaillé

### Partie I : Répartition des phages et cellules non infectées

1. **Loi exacte de $X_N$ :**
   Considérons une bactérie fixée $B_0$. Pour chacun des $M$ phages indépendants, l'événement « le phage se lie à $B_0$ » est une épreuve de Bernoulli de succès avec probabilité :
   $$
   p_N = \frac{1}{N}
   $$
   puisque le choix de la cellule parmi les $N$ bactéries est uniforme et les suspensions sont homogènes.
   Les adsorptions des $M$ phages étant mutuellement indépendantes, la variable aléatoire $X_N$ compte le nombre de succès parmi $M$ épreuves indépendantes. Ainsi :
   $$
   X_N \sim \mathcal{B}\left(M, \frac{1}{N}\right)
   $$

2. **Convergence en loi :**
   On a $M = \lambda N$, donc $p_N = \frac{\lambda}{M}$.
   Pour tout $k \in \mathbb{N}$, pour $M \ge k$ :
   $$
   P(X_N = k) = \binom{M}{k} \left(\frac{\lambda}{M}\right)^k \left(1 - \frac{\lambda}{M}\right)^{M-k}
   $$
   Développons l'expression :
   $$
   \binom{M}{k} \frac{1}{M^k} = \frac{M(M-1)\dots(M-k+1)}{k! \, M^k} = \frac{1}{k!} \prod_{j=0}^{k-1} \left(1 - \frac{j}{M}\right) \xrightarrow[M \to +\infty]{} \frac{1}{k!}
   $$
   D'autre part :
   $$
   \left(1 - \frac{\lambda}{M}\right)^{M-k} = \exp\left((M-k)\ln\left(1 - \frac{\lambda}{M}\right)\right)
   $$
   Comme $\ln(1 - u) = -u + o(u)$ au voisinage de 0 :
   $$
   (M-k)\left(-\frac{\lambda}{M} + o\left(\frac{1}{M}\right)\right) = -\lambda + o(1) \xrightarrow[M \to +\infty]{} -\lambda
   $$
   Par continuité de la fonction exponentielle :
   $$
   \lim_{N \to +\infty} P(X_N = k) = \frac{\lambda^k}{k!} \mathrm{e}^{-\lambda}
   $$
   La suite $(X_N)$ converge donc en loi vers une variable aléatoire $X$ suivant une **loi de Poisson de paramètre $\lambda$** :
   $$
   X \sim \mathcal{P}(\lambda)
   $$

3. **Fraction de cellules indemnes :**
   La proportion asymptotique de bactéries sans aucun phage fixé est :
   $$
   P_0 = P(X = 0) = \mathrm{e}^{-\lambda}
   $$
   Pour $\lambda = 3$ :
   $$
   P_0 = \mathrm{e}^{-3} \approx 0{,}0498 \approx 5{,}0 \times 10^{-2}
   $$
   **Commentaire biologique :** Même avec un ratio de 3 phages par bactérie en moyenne, environ $5\,\%$ des bactéries échappent totalement à l'adsorption dans l'immédiat. Dans un contexte de phagothérapie, ces cellules résiduelles non infectées peuvent continuer à se diviser, favorisant un rebond bactérien ou l'émergence de mutants résistants si la cinétique de réplication bactérienne est plus rapide que les cycles secondaires de relargage des phages.

---

### Partie II : Efficacité de l'infection et processus de lyse

1. **Loi conditionnelle :**
   Sachant que la bactérie possède $k$ phages adsorbés, chaque phage injecte son matériel avec une probabilité $p$ indépendamment des autres. Le nombre $Y$ d'infections réussies représente la somme de $k$ variables de Bernoulli indépendantes de paramètre $p$.
   Par conséquent, la loi conditionnelle de $Y$ sachant $(X = k)$ est une **loi binomiale** :
   $$
   Y \mid (X = k) \sim \mathcal{B}(k, p)
   $$

2. **Loi marginale de $Y$ :**
   La famille $((X = k))_{k \in \mathbb{N}}$ forme un système complet d'événements. Par la formule des probabilités totales, pour tout $j \in \mathbb{N}$ :
   $$
   P(Y = j) = \sum_{k=0}^{+\infty} P(X = k) P(Y = j \mid X = k)
   $$
   Or, $P(Y = j \mid X = k) = 0$ dès que $k < j$. Ainsi :
   $$
   P(Y = j) = \sum_{k=j}^{+\infty} \mathrm{e}^{-\lambda} \frac{\lambda^k}{k!} \binom{k}{j} p^j (1-p)^{k-j}
   $$
   Sachant que $\frac{1}{k!}\binom{k}{j} = \frac{1}{k!} \frac{k!}{j!(k-j)!} = \frac{1}{j!(k-j)!}$, on factorise les termes indépendants de $k$ :
   $$
   P(Y = j) = \mathrm{e}^{-\lambda} \frac{p^j}{j!} \sum_{k=j}^{+\infty} \frac{\lambda^k}{(k-j)!} (1-p)^{k-j}
   $$
   Posons l'indice $m = k - j \in \mathbb{N}$ :
   $$
   P(Y = j) = \mathrm{e}^{-\lambda} \frac{p^j \lambda^j}{j!} \sum_{m=0}^{+\infty} \frac{[\lambda(1-p)]^m}{m!} = \mathrm{e}^{-\lambda} \frac{(\lambda p)^j}{j!} \mathrm{e}^{\lambda(1-p)}
   $$
   En simplifiant l'exponentielle ($\mathrm{e}^{-\lambda + \lambda - \lambda p} = \mathrm{e}^{-\lambda p}$) :
   $$
   P(Y = j) = \mathrm{e}^{-\lambda p} \frac{(\lambda p)^j}{j!}
   $$
   On reconnaît que **$Y$ suit une loi de Poisson de paramètre $\lambda p$** :
   $$
   Y \sim \mathcal{P}(\lambda p)
   $$

3. **Probabilité de lyse cellulaire :**
   Une cellule subit la lyse si et seulement si au moins un phage a réussi l'infection, c'est-à-dire si l'événement $(Y \ge 1)$ est réalisé.
   $$
   P(\text{Lyse}) = P(Y \ge 1) = 1 - P(Y = 0) = 1 - \mathrm{e}^{-\lambda p}
   $$

---

### Partie III : Hétérogénéité cellulaire et loi Binomiale Négative

1. **Expression intégrale :**
   Le couple $(Z, \Lambda)$ associe une variable discrète et une variable continue. En utilisant la formule des probabilités totales continue :
   $$
   P(Z = k) = \int_0^{+\infty} P(Z = k \mid \Lambda = \theta) f_\Lambda(\theta) \, \mathrm{d}\theta
   $$
   Comme $Z \mid (\Lambda = \theta) \sim \mathcal{P}(\theta)$, on a $P(Z = k \mid \Lambda = \theta) = \frac{\theta^k}{k!} \mathrm{e}^{-\theta}$. Donc :
   $$
   P(Z = k) = \int_0^{+\infty} \frac{\theta^k}{k!} \mathrm{e}^{-\theta} \frac{\beta^\alpha}{\Gamma(\alpha)} \theta^{\alpha - 1} \mathrm{e}^{-\beta \theta} \, \mathrm{d}\theta = \frac{\beta^\alpha}{k! \, \Gamma(\alpha)} \int_0^{+\infty} \theta^{k+\alpha-1} \mathrm{e}^{-(\beta + 1)\theta} \, \mathrm{d}\theta
   $$

2. **Calcul de la loi marginale :**
   Dans l'intégrale $I_k = \int_0^{+\infty} \theta^{k+\alpha-1} \mathrm{e}^{-(\beta + 1)\theta} \, \mathrm{d}\theta$, effectuons le changement de variable affine $u = (\beta + 1)\theta$. 
   La fonction $\theta \mapsto (\beta + 1)\theta$ est de classe $\mathcal{C}^1$, strictement croissante de $]0, +\infty[$ sur $]0, +\infty[$, avec $\mathrm{d}\theta = \frac{\mathrm{d}u}{\beta + 1}$ :
   $$
   I_k = \int_0^{+\infty} \left(\frac{u}{\beta+1}\right)^{k+\alpha-1} \mathrm{e}^{-u} \frac{\mathrm{d}u}{\beta+1} = \frac{1}{(\beta+1)^{k+\alpha}} \int_0^{+\infty} u^{(k+\alpha)-1} \mathrm{e}^{-u} \, \mathrm{d}u
   $$
   Par définition de la fonction d'Euler $\Gamma$, l'intégrale vaut $\Gamma(k+\alpha)$. Par suite :
   $$
   P(Z = k) = \frac{\beta^\alpha}{k! \, \Gamma(\alpha)} \frac{\Gamma(k+\alpha)}{(\beta+1)^{k+\alpha}} = \frac{\Gamma(k+\alpha)}{k! \, \Gamma(\alpha)} \left(\frac{\beta}{\beta + 1}\right)^\alpha \left(\frac{1}{\beta + 1}\right)^k
   $$

3. **Identification et surdispersion :**
   Si $\alpha = r \in \mathbb{N}^*$, on sait que $\Gamma(r) = (r-1)!$ et $\Gamma(k+r) = (k+r-1)!$. Le terme pré-exponentiel s'écrit :
   $$
   \frac{(k+r-1)!}{k! \, (r-1)!} = \binom{k+r-1}{k}
   $$
   En posant $p_0 = \frac{\beta}{\beta+1} \in ]0, 1[$, on a $1 - p_0 = \frac{1}{\beta+1}$. On obtient :
   $$
   P(Z = k) = \binom{k+r-1}{k} p_0^r (1-p_0)^k
   $$
   Il s'agit de la **loi binomiale négative** $\mathcal{NB}(r, p_0)$ (nombre d'échecs avant d'obtenir $r$ succès).

   *Phénomène de surdispersion :*
   Calculons la variance de $Z$ via la formule de décomposition :
   $$
   E(Z) = E(E(Z|\Lambda)) = E(\Lambda)
   $$
   $$
   V(Z) = E(V(Z|\Lambda)) + V(E(Z|\Lambda)) = E(\Lambda) + V(\Lambda)
   $$
   Comme $\Lambda$ n'est pas constante, $V(\Lambda) > 0$, d'où :
   $$
   V(Z) > E(Z)
   $$
   Ce phénomène est la **surdispersion** (ou distribution agrégative). En biologie, cela traduit une hétérogénéité des hôtes : quelques bactéries concentrent un très grand nombre de phages tandis qu'une plus grande proportion reste totalement dépourvue de phages comparativement à un simple modèle de Poisson.

4. **Analyse critique du modèle :**
   Le modèle repose sur l'hypothèse de fixation mutuellement indépendante et ponctuelle des phages. En conditions réelles, plusieurs limites apparaissent :
   - **Encombrement stérique :** La surface de la membrane externe est finie ($1 \text{ à } 2 \, \mu\text{m}^2$). Quand le nombre de phages fixés augmente, les récepteurs libres deviennent moins accessibles, ce qui induit un phénomène de saturation non linéaire (cinétique de type Langmuir ou Michaelis-Menten), contredisant l'indépendance des tirages.
   - **Défenses antivirales intracellulaires (CRISPR-Cas, systèmes de restriction-modification) :** L'inactivation du phage n'est pas simplement une probabilité $p$ constante : les nucléases bactériennes peuvent être saturées si un grand nombre de phages injectent simultanément leur génome, rendant le paramètre $p$ dépendant de $k$ (effet coopératif).
   - **Variations physiologiques et micro-environnement :** En phase stationnaire ou en biofilm, la régulation transcriptionnelle diminue le nombre de récepteurs OmpC. De plus, la diffusion des phages dans le milieu n'est pas infiniment rapide (mélange imparfait), créant des gradients locaux de concentration.