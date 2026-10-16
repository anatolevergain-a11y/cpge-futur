---
title: 'Exercice 1 : Combinaisons et arrangements'
description: 'Problème d entraînement type concours.'
---

# Problème : Analyse combinatoire et limites d'un système de cryptographie par permutation

## Énoncé

Dans le cadre de la sécurisation des communications d'un système embarqué, on étudie un protocole de chiffrement simplifié. Le système génère des clés de chiffrement en manipulant un alphabet de $N$ symboles distincts. 

Une clé de chiffrement valide est un mot de passe constitué d'une séquence ordonnée de $k$ symboles distincts choisis parmi les $N$ disponibles.

Pour des raisons de performance et de sécurité, les ingénieurs hésitent entre deux configurations :
- **Configuration A (Système standard) :** $N = 26$ (les lettres de l'alphabet latin) et $k = 6$.
- **Configuration B (Système étendu) :** $N = 62$ (les 26 lettres minuscules, 26 majuscules et 10 chiffres) et $k = 8$.

On souhaite évaluer la robustesse de ces configurations face à une attaque par force brute, tout en analysant la pertinence mathématique et informatique des modèles probabilistes associés.

---

## Questions

### Partie I : Dénombrement et ordres de grandeur

1. **(Rappel de cours)** Exprimer en fonction de $N$ et $k$ le nombre total de clés possibles, que l'on notera $A_N^k$, dans le cas où l'ordre des symboles importe et sans remise. Rappeler la formule explicite avec les factorielles.
2. Calculer numériquement (sous forme de puissance de 10 approchée) le nombre de clés pour la **Configuration A** et la **Configuration B**.
3. Un supercalculateur actuel est capable de tester $10^{11}$ clés par seconde. Calculer le temps moyen (en années) nécessaire pour tester toutes les combinaisons possibles de la Configuration B par force brute. On prendra $1 \text{ an} \approx 3,15 \times 10^7 \text{ secondes}$.

### Partie II : Modèle probabiliste et paradoxe des anniversaires généralisé

On suppose désormais qu'un générateur pseudo-aléatoire (PRNG) produit des clés de longueur $k$ (avec remises cette fois, chaque symbole pouvant être répété, soit $N^k$ clés possibles équiprobables). On s'intéresse à la probabilité qu'au moins deux clés générées dans un lot de $M$ clés soient identiques (collision).

4. Soit $P(M, N, k)$ la probabilité qu'il n'y ait *aucune* collision parmi $M$ clés générées de manière indépendante et uniformément répartie parmi les $N^k$ possibles. Montrer que :
   $$P(M, N, k) = \prod_{j=1}^{M-1} \left(1 - \frac{j}{N^k}\right)$$
5. À l'aide de l'approximation $\ln(1 - x) \approx -x$ valable pour $x \to 0$, proposer un développement limités ou une estimation de $\ln(P(M, N, k))$ pour $M$ grand devant $1$ mais petit devant $N^{k/2}$. En déduire une approximation de la probabilité de collision $C(M) = 1 - P(M, N, k)$.

### Partie III : Analyse critique et limites du modèle

6. **Analyse critique :** Dans la réalité, un générateur pseudo-aléatoire informatique (comme un LCG ou même Mersenne Twister non initialisé par une source cryptographique robuste) possède une période finie et ne produit pas des séquences véritablement uniformes et indépendantes. 
   Discuter brièvement de l'impact d'une telle imperfection sur le modèle probabiliste de la question II. Quel est le risque majeur si l'entropie réelle de la source est inférieure à $\ln_2(N^k)$ bits ?

---

## Pistes et indications

* **Partie I :** Pensez à la définition d'un arrangement sans répétition. Pour les grands nombres, utilisez une calculatrice ou le calcul logarithmique pour estimer l'ordre de grandeur (via la formule de Stirling pour les factorielles si nécessaire).
* **Partie II :** Raisonnez sur le complémentaire en construisant les clés une par une : la première clé est quelconque, la deuxième ne doit pas être égale à la première, etc.
* **Partie III :** Pour l'analyse critique, interrogez-vous sur la différence entre le modèle mathématique idéal (équiprobabilité, indépendance) et la réalité physique/informatique (déterminisme des algorithmes, biais de distribution).

---

## Corrigé pas à pas

### Partie I : Dénombrement et ordres de grandeur

1. **Nombre de clés ($A_N^k$) :**
   Puisque l'ordre importe et qu'il n'y a pas de remise, il s'agit du nombre d'arrangements de $k$ éléments parmi $N$.
   $$A_N^k = \frac{N!}{(N-k)!} = N(N-1)(N-2)\dots(N-k+1)$$

2. **Calculs numériques :**
   * **Configuration A ($N=26, k=6$) :**
     $$A_{26}^6 = \frac{26!}{20!} = 26 \times 25 \times 24 \times 23 \times 22 \times 21 = 165\,788\,900 \approx 1,66 \times 10^8 \text{ clés.}$$
   * **Configuration B ($N=62, k=8$) :**
     $$A_{62}^8 = \frac{62!}{54!} = 62 \times 61 \times 60 \times 59 \times 58 \times 57 \times 56 \times 55 \approx 2,18 \times 10^{14} \text{ clés.}$$

3. **Temps de calcul par force brute pour la Configuration B :**
   Le nombre total de clés est $T \approx 2,18 \times 10^{14}$.
   À raison de $10^{11}$ clés par seconde, le temps en secondes est :
   $$t_{\text{sec}} = \frac{2,18 \times 10^{14}}{10^{11}} = 2,18 \times 10^3 \text{ secondes.}$$
   En convertissant en années (avec $1 \text{ an} \approx 3,15 \times 10^7 \text{ s}$) :
   $$t_{\text{ans}} = \frac{2,18 \ldots \times 10^3}{3,15 \times 10^7} \approx 6,92 \times 10^{-5} \text{ ans} \approx 37 \text{ minutes.}$$
   *Commentaire critique :* $37$ minutes pour casser la Configuration B par force brute pure avec un supercalculateur est un délai **très faible** en cryptographie moderne. Cela montre que les paramètres choisis ici ($k=8$) sont beaucoup trop faibles pour un usage sécurisé réel (où l'on vise des espaces de clés de l'ordre de $2^{128}$ ou $2^{256}$).

---

### Partie II : Modèle probabiliste et paradoxe des anniversaires

4. **Probabilité sans collision $P(M, N, k)$ :**
   Soit $K = N^k$ le nombre total de clés possibles avec remise.
   Pour $M$ clés générées successivement :
   - La $1^\text{re}$ clé peut être choisie librement (probabilité $1$).
   - La $2^\text{e}$ clé doit être différente de la $1^\text{re}$ (probabilité $1 - \frac{1}{K}$).
   - La $i^\text{e}$ clé doit être différente des $i-1$ précédentes (probabilité $1 - \frac{i-1}{K}$).
   
   Par indépendance des tirages du PRNG, la probabilité qu'aucune collision ne se produise est le produit de ces probabilités :
   $$P(M, N, k) = \prod_{i=1}^{M} \left(1 - \frac{i-1}{K}\right) = \prod_{j=1}^{M-1} \left(1 - \frac{j}{N^k}\right)$$

5. **Estimation de la probabilité de collision :**
   En passant par le logarithme népérien :
   $$\ln(P(M, N, k)) = \sum_{j=1}^{M-1} \ln\left(1 - \frac{j}{N^k}\right)$$
   Puisque $\frac{j}{N^k}$ est petit (car $M \ll N^{k/2}$), on utilise l'approximation $\ln(1 - x) \approx -x$ :
   $$\ln(P(M, N, k)) \approx \sum_{j=1}^{M-1} -\frac{j}{N^k} = -\frac{1}{N^k} \sum_{j=1}^{M-1} j = -\frac{(M-1)M}{2N^k} \approx -\frac{M^2}{2N^k}$$
   On en déduit que :
   $$P(M, N, k) \approx \exp\left(-\frac{M^2}{2N^k}\right)$$
   La probabilité de collision $C(M)$ est donc :
   $$C(M) = 1 - P(M, N, k) \approx 1 - \exp\left(-\frac{M^2}{2N^k}\right)$$

---

### Partie III : Analyse critique et limites du modèle

6. **Analyse critique des limites du modèle :**
   * **Biais du PRNG :** Le modèle mathématique suppose une distribution uniforme (chaque clé a exactement la même probabilité $1/N^k$). En pratique, les générateurs pseudo-aléatoires peuvent présenter des biais statistiques (certains multiplets sont générés plus fréquemment que d'autres). Cela invalide l'hypothèse d'équiprobabilité et **accélère** souvent les attaques par collision (le nombre effectif de clés uniques est inférieur à $N^k$).
   * **Périodicité :** Tout PRNG est une machine à états finis ; sa séquence finit par reboucler (période). Si le nombre de clés générées approche ou dépasse cette période, le système devient totalement prévisible.
   * **Entropie insuffisante :** Si l'entropie initiale (la "seed") du système est faible (par exemple basée sur l'horloge système à la milliseconde près), un attaquant peut balayer l'espace des graines possibles (qui est bien plus petit que $N^k$) et retrouver la clé instantanément, rendant caduque l'analyse combinatoire pure de l'espace des clés.