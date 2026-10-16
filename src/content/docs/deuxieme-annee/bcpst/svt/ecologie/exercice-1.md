---
title: 'Exercice 1 : Dynamique des populations'
description: 'Problème d entraînement type concours.'
---

# Problème guidé : Dynamique des populations et gestion d'une ressource halieutique

**Filière :** BCPST  
**Matière :** Sciences de la Vie et de la Terre (SVT)  
Chapitre: ** Écologie / Dynamique des populations  

---

## Énoncé

L'étude de la dynamique des populations est fondamentale pour comprendre le maintien de la biodiversité et pour gérer durablement les ressources naturelles, notamment dans un contexte de surpêche. On s'intéresse ici à une population de poissons pélagiques, le merlu blanc (*Merluccius merluccius*), exploitée dans le Golfe de Gascogne.

L'objectif de ce problème est d'analyser l'évolution de l'effectif de cette population au cours du temps à l'aide de modèles mathématiques, d'évaluer l'impact d'une exploitation par la pêche, et de discuter de la pertinence biologique des hypothèses sous-jacentes.

On note $N(t)$ l'effectif de la population de poissons à l'instant $t$ (exprimé en nombre d'individus ou, par simplification des ordres de grandeur, en biomasse totale exprimée en tonnes, $\text{t}$).

---

## Questions

### Partie I : Le modèle de croissance exponentielle (Malthus)
1. **(Rappel de cours)** Écrire l'équation différentielle régissant le modèle de Malthus en introduisant le taux intrinsèque d'accroissement naturel $r$ (exprimé en $\text{an}^{-1}$). Préciser la signification biologique de $r$.
2. Résoudre cette équation avec la condition initiale $N(0) = N_0$. 
3. Sachant que pour le merlu blanc, le taux intrinsèque est estimé à $r = 0{,}4\text{ an}^{-1}$, calculez le temps nécessaire pour que la population double en l'absence de toute limitation. Ce modèle est-il réaliste à long terme ? Justifiez.

### Partie II : Le modèle logistique de Verhulst
Pour corriger les limites du modèle précédent, Pierre-François Verhulst introduit la notion de capacité charge (ou carrying capacity), notée $K$.
4. Écrire l'équation différentielle du modèle logistique. Expliquer le terme correctif apporté par rapport au modèle de Malthus.
5. Déterminer les points d'équilibre de ce système et étudier leur stabilité.
6. On estime que la capacité de charge du Golfe de Gascogne pour cette espèce est $K = 150\,000\text{ t}$ et que la biomasse initiale mesurée est $N_0 = 30\,000\text{ t}$. Calculez la valeur de la biomasse $N(t)$ vers laquelle tend le système lorsque $t \to +\infty$.

### Partie III : Modélisation de la pêche et rendement maximal soutenable (RMS)
On introduit maintenant une pression de pêche. On suppose que le prélèvement par la pêche est proportionnel à la biomasse de la population, de sorte que l'équation devient :
$$\frac{dN}{dt} = r N \left(1 - \frac{N}{K}\right) - E \cdot N$$
où $E$ représente l'effort de pêche ($E > 0$, en $\text{an}^{-1}$).

7. Mettez cette équation sous la forme $\frac{dN}{dt} = r' N \left(1 - \frac{N}{K'}\right)$ en exprimant le nouveau taux de croissance $r'$ et la nouvelle capacité de charge $K'$ en fonction de $r$, $K$ et $E$.
8. À l'équilibre, le rendement de la pêche (ou capture $C$) est donné par $C = E \cdot N_{eq}$, où $N_{eq}$ est la biomasse à l'équilibre en présence de pêche. Exprimez $C$ en fonction de $r, K$ et $E$.
9. Déterminez l'effort de pêche optimal $E_{opt}$ qui permet d'atteindre le **Rendement Maximal Soutenable** (RMS). Calculez la valeur de ce RMS en fonction de $r$ et $K$.

---

## Pistes et Méthode

* **Partie I :** Pensez à l'intégration simple d'une équation à variables séparées. Pour le temps de doublement, résolvez $N(t) = 2N_0$.
* **Partie II :** Un équilibre est atteint lorsque $\frac{dN}{dt} = 0$. La stabilité se déduit du signe de $\frac{dN}{dt}$ de part et d'autre de l'équilibre.
* **Partie III :** Factorisez l'expression de $\frac{dN}{dt}$ pour l'identifier à la forme logistique standard. Pour le maximum, dérivez le rendement $C$ par rapport à l'effort $E$ et cherchez l'annulation de cette dérivée.

---

## Corrigé pas à pas

### Partie I : Le modèle de croissance exponentielle (Malthus)

1. **Équation de Malthus :**
   $$\frac{dN}{dt} = r \cdot N$$
   *Signification biologique :* Le paramètre $r = b - d$ représente la différence entre le taux de natalité $b$ et le taux de mortalité $d$ par individu. Il traduit la capacité maximale de multiplication de l'espèce dans des conditions idéales (ressources illimitées, absence de prédateurs).

2. **Résolution :**
   En séparant les variables :
   $$\frac{dN}{N} = r \, dt \implies \int \frac{dN}{N} = \int r \, dt \implies \ln(N(t)) = r t + Cte$$
   En appliquant la condition initiale $N(0) = N_0$, on obtient :
   $$N(t) = N_0 e^{rt}$$

3. **Temps de doublement et analyse critique :**
   On cherche $t_d$ tel que $N(t_d) = 2N_0$ :
   $$2N_0 = N_0 e^{r t_d} \implies 2 = e^{r t_d} \implies t_d = \frac{\ln(2)}{r}$$
   A.N. : $t_d = \frac{\ln(2)}{0{,}4} \approx \frac{0{,}693}{0{,}4} \approx 1{,}73\text{ ans}$.
   
   *Analyse critique :* Ce modèle **n'est pas réaliste à long terme**. Il conduit à une croissance géométrique (ou exponentielle) explosive vers l'infini, ce qui est biologiquement impossible car les ressources de l'environnement (nourriture, espace, oxygène) sont limitées.

---

### Partie II : Le modèle logistique de Verhulst

4. **Équation de Verhulst :**
   $$\frac{dN}{dt} = r N \left(1 - \frac{N}{K}\right)$$
   *Terme correctif :* Le facteur $(1 - N/K)$ représente la résistance de l'environnement. Lorsque $N$ est très petit devant $K$, le terme tend vers $1$ (croissance malthusienne). Lorsque $N$ se rapproche de $K$, le terme tend vers $0$, ce qui freine la croissance démographique en raison de la compétition intraspécifique.

5. **Points d'équilibre et stabilité :**
   Les équilibres s'obtiennent pour $\frac{dN}{dt} = 0$, soit :
   $$r N \left(1 - \frac{N}{K}\right) = 0$$
   Cela donne deux équilibres :
   - $N_{eq1} = 0$ (extinction de la population, instable).
   - $N_{eq2} = K$ (capacité de charge, stable).
   *Justification de la stabilité :* Si $N < K$, $\frac{dN}{dt} > 0$ (la population augmente vers $K$). Si $N > K$, $\frac{dN}{dt} < 0$ (la population diminue vers $K$).

6. **Application numérique :**
   Puisque $N_0 = 30\,000\text{ t} > 0$ et $K = 150\,000\text{ t}$, la population évolue en restant inférieure à $K$ et tend vers la capacité de charge :
   $$\lim_{t \to +\infty} N(t) = K = 150\,000\text{ t}$$

---

### Partie III : Modélisation de la pêche et rendement maximal soutenable (RMS)

7. **Transformation de l'équation :**
   Développons l'expression initiale :
   $$\frac{dN}{dt} = rN - \frac{r}{K}N^2 - EN = (r - E)N - \frac{r}{K}N^2$$
   Mettons $(r - E)N$ en facteur :
   $$\frac{dN}{dt} = (r - E) N \left(1 - \frac{r}{K(r - E)}N\right)$$
   Par identification avec la forme $\frac{dN}{dt} = r' N \left(1 - \frac{N}{K'}\right)$, on obtient :
   - Le nouveau taux de croissance : $r' = r - E$
   - La nouvelle capacité de charge : $K' = K \left(1 - \frac{E}{r}\right)$

8. **Expression du rendement (capture $C$) à l'équilibre :**
   À l'équilibre avec pêche, $\frac{dN}{dt} = 0$, donc la biomasse à l'équilibre $N_{eq}$ est la nouvelle capacité de charge $K'$ :
   $$N_{eq} = K \left(1 - \frac{E}{r}\right)$$
   Le rendement de la pêche est donc :
   $$C = E \cdot N_{eq} = E \cdot K \left(1 - \frac{E}{r}\right) = E K - \frac{K}{r} E^2$$

9. **Effort de pêche optimal et RMS :**
   Le rendement $C$ est une fonction polynomiale du second degré de la variable $E$ de la forme $aE^2 + bE$. Son maximum s'obtient en annulant sa dérivée par rapport à $E$ :
   $$\frac{dC}{dE} = K - \frac{2K}{r} E = 0$$
   $$\frac{2K}{r} E_{opt} = K \implies E_{opt} = \frac{r}{2}$$
   
   *Calcul du RMS :*
   On substitue $E_{opt}$ dans l'expression de $C$ :
   $$RMS = \left(\frac{r}{2}\right) K \left(1 - \frac{r/2}{r}\right) = \frac{rK}{2} \left(1 - \frac{1}{2}\right) = \frac{rK}{4}$$

   *Discussion critique (Limite du modèle) :* Ce modèle déterministe est très utile pour fixer des quotas de pêche macroscopiques. Cependant, il présente des limites majeures : il suppose un recrutement instantané, ne prend pas en compte les fluctuations stochastiques environnementales (température, salinité) ni la structure d'âge de la population (capturer des juveniles immatures effondre le stock de manière bien plus drastique que ne le prédit ce modèle global).