---
title: 'Cours : Systèmes linéaires asservis'
description: 'Fiche de synthèse officielle et démonstrations du programme CPGE MPSI.'
---

## 📌 1. Définitions & Cadre d'étude

En Sciences Industrielles pour l'Ingénieur en classe de première année MPSI, l'étude des Systèmes Linéaires Continus Invariants (SLCI) repose sur l'utilisation d'outils mathématiques rigoureux permettant de modéliser le comportement temporel et fréquentiel des systèmes physiques.

Un système linéaire asservi (bouclé) a pour objectif principal de garantir qu'une grandeur de sortie $s(t)$ (ou $S(p)$ dans le domaine de Laplace) suive au mieux une consigne d'entrée $e(t)$ (ou $E(p)$), malgré les perturbations extérieures.

### 1.1. Modélisation fréquentielle et Fonction de Transfert
Pour un système linéaire continu invariant, régi par une équation différentielle linéaire à coefficients constants, on définit la **fonction de transfert** $H(p)$ dans le domaine de la variable de Laplace complexe $p \in \mathbb{C}$ (avec $\text{Re}(p) > \sigma_0$) comme le rapport de la transformée de Laplace de la sortie sur la transformée de Laplace de l'entrée, sous des conditions initiales nulles :
$$H(p) = \frac{S(p)}{E(p)}$$

On note $\mathcal{H}(p)$ l'ensemble des fonctions de transfert, isomorphe au corps des fractions rationnelles à coefficients réels en la variable $p$.

### 1.2. Schéma fonctionnel de base (Boucle fermée)
Considérons un système à retour unitaire ou non. Soit $C(p)$ le correcteur, $K(p)$ la chaîne directe (ou partie opérante) et $H_c(p)$ la chaîne de retour. La fonction de transfert en boucle ouverte (FTBO) est notée $FTBO(p)$ et la fonction de transfert en boucle fermée (FTBF) est notée $F(p)$ :
$$F(p) = \frac{S(p)}{E(p)} = \frac{C(p)K(p)}{1 + C(p)K(p)H_c(p)}$$

---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### 2.1. Théorème de la valeur finale
Soit $s(t)$ un signal causal dont la transformée de Laplace $S(p)$ n'a pas de pôle à partie réelle strictement positive. Si la limite de $s(t)$ quand $t$ tend vers $+\infty$ existe, alors :
$$\lim_{t \to +\infty} s(t) = \lim_{p \to 0} p S(p)$$

#### Démonstration :
Partons de la définition de la transformée de Laplace de la dérivée d'un signal, sous des conditions initiales nulles ($s(0^-) = 0$) :
$$\mathcal{L}\left[\frac{ds}{dt}\right](p) = p S(p) - s(0^-) = p S(p)$$
Par définition de la transformée de Laplace :
$$\mathcal{L}\left[\frac{ds}{dt}\right](p) = \int_{0}^{+\infty} \frac{ds}{dt}(t) e^{-p t} dt$$
Passons à la limite lorsque $p \to 0$ (en supposant l'inversion limite-intégrale licite sous les hypothèses de régularité du théorème) :
$$\lim_{p \to 0} \int_{0}^{+\infty} \frac{ds}{dt}(t) e^{-p t} dt = \int_{0}^{+\infty} \frac{ds}{dt}(t) dt = \left[ s(t) \right]_{0}^{+\infty} = \lim_{t \to +\infty} s(t) - s(0)$$
Puisque $s(0) = 0$ par causalité, on obtient directement l'égalité du théorème :
$$\lim_{t \to +\infty} s(t) = \lim_{p \to 0} p S(p) \quad \text{Q.E.D.}$$

### 2.2. Stabilité des systèmes linéaires continus invariants
Un système linéaire est dit **asymptotiquement stable** si et seulement si tous les pôles de sa fonction de transfert en boucle fermée $F(p)$ (c'est-à-dire les racines de son équation caractéristique $1 + FTBO(p) = 0$) ont leur partie réelle strictement négative.

Soit $p_k = \alpha_k + j \beta_k$ un pôle de $F(p)$ avec $(\alpha_k, \beta_k) \in \mathbb{R}^2$. La condition de stabilité asymptotique s'écrit :
$$\forall k, \quad \alpha_k < 0$$

---

## 💡 3. Méthodes de calcul & Algorithmes

### 3.1. Analyse indicielle des systèmes du 1er ordre
La fonction de transfert canonique d'un système du 1er ordre est :
$$H(p) = \frac{K}{1 + \tau p}$$
où $K \in \mathbb{R}$ est le gain statique et $\tau \in \mathbb{R}_^{+\infty}$ la constante de temps (en $\text{s}$).

Pour une entrée échelon unité $e(t) = \mathcal{U}(t)$ dont la transformée est $E(p) = \frac{1}{p}$, la sortie s'exprime par décomposition en éléments simples :
$$S(p) = \frac{K}{p(1 + \tau p)} = K \left( \frac{1}{p} - \frac{\tau}{1 + \tau p} \right) = K \left( \frac{1}{p} - \frac{1}{p + \frac{1}{\tau}} \right)$$
Le retour dans le domaine temporel donne :
$$s(t) = K \left( 1 - e^{-\frac{t}{\tau}} \right) \mathcal{U}(t)$$

### 3.2. Analyse indicielle des systèmes du 2nd ordre
La fonction de transfert canonique d'un système du 2nd ordre est :
$$H(p) = \frac{K}{1 + \frac{2z}{\omega_0}p + \frac{p^2}{\omega_0^2}}$$
avec :
- $K \in \mathbb{R}$ : gain statique.
- $\omega_0 \in \mathbb{R}_^{+\infty}$ : pulsation propre non amortie (en $\text{rad}\cdot\text{s}^{-1}$).
- $z \in \mathbb{R}_+$ : facteur d'amortissement (sans dimension).

Selon la valeur de $z$, le régime temporel change :
1. **$z > 1$ (Régime apériodique)** : Deux pôles réels négatifs.
2. **$z = 1$ (Régime critique)** : Un pôle double réel négatif.
3. **$0 < z < 1$ (Régime pseudo-périodique)** : Pôles complexes conjoints à partie réelle négative. La pulsation des oscillations pseudo-périodiques est $\omega_p = \omega_0 \sqrt{1 - z^2}$.

---

## ⚠️ 4. Pièges classiques aux Concours

1. **Confondre FTBO et FTBF** : Appliquer les critères de stabilité (Routh, revers, etc.) directement sur la FTBO pour conclure sur la stabilité de la boucle fermée est une erreur éliminatoire. Le théorème de revers s'applique sous conditions strictes, mais la stabilité concerne **toujours** les pôles de la FTBF.
2. **Oublier les conditions initiales nulles** : Utiliser la formule $S(p) = H(p)E(p)$ alors que le système possède de l'énergie stockée à $t = 0^-$ fausse totalement l'analyse.
3. **Mauvaise manipulation des unités en représentation harmonique** : Lors du calcul du gain en décibels $G_{\text{dB}} = 20 \log_{10}(|H(j\omega)|)$, l'oubli du facteur $20$ ou l'utilisation du log népérien au lieu du log décimal est une source fréquente d'erreur numérique.
4. **Erreur sur le calcul de l'erreur statique** : Pour déterminer l'erreur indicielle permanente $\varepsilon(+\infty)$, il faut impérativement appliquer le théorème de la valeur finale sur l'écart $\varepsilon(p) = E(p) - S(p)$ (ou $\frac{E(p)}{1 + FTBO(p)}$ dans le cas d'un retour unitaire), après s'être assuré de la stabilité du système.