---
title: 'Cours : Automatique et systèmes asservis'
description: 'Synthèse de cours, théorèmes et démonstrations.'
---

# Fiche de Cours : Automatique et Systèmes Asservis
**Filière :** PTSI — Sciences Industrielles de l'Ingénieur (SII)  
Niveau: ** Première année

---

## 1. Introduction et généralités sur les systèmes

### A. Définitions fondamentales
* **Système :** Ensemble de composants organisés pour accomplir une fonction (généralement convertir des grandeurs physiques).
* **Chaîne d'information / Chaîne de puissance :** Tout système asservi est composé d'une chaîne d'information (mesurer, traiter, communiquer) et d'une chaîne de puissance (alimenter, distribuer, convertir).
* **Système en Boucle Ouverte (SBO) :** Système pour lequel l'action sur le processus ne dépend pas de la grandeur de sortie mesurée. Il n'y a pas de correction automatique des perturbations.
* **Système en Boucle Fermée (SBF) ou Asservissement :** Système dont l'action dépend de la mesure de la sortie, comparée en permanence à la consigne afin de corriger les écarts dus aux perturbations.

### B. Schéma bloc (ou schéma fonctionnel)
Les blocs représentent des fonctions de transfert dans le domaine de Laplace ($p$ variable de Laplace).

* **Entrée :** $E(p)$ (souvent la consigne $W(p)$)
* **Sortie :** $S(p)$
* **Fonction de Transfert (FT) :** $H(p) = \frac{S(p)}{E(p)}$

> **Théorème (Association de blocs) :**
> * **Mise en cascade (série) :** $H_{eq}(p) = H_1(p) \cdot H_2(p)$
> * **Mise en parallèle :** $H_{eq}(p) = H_1(p) + H_2(p)$
> * **Boucle de retour (FTBF) :** Pour un système avec une chaîne directe $H(p)$ et un retour $K(p)$ (souvent un capteur) :
>   $$\text{FTBF}(p) = \frac{S(p)}{E(p)} = \frac{H(p)}{1 + H(p)K(p)}$$
>   *(Le produit $H(p)K(p)$ est appelé Fonction de Transfert avec Boucle Ouverte - FTBO).*

---

## 2. Modélisation temporelle : Ordres 1 et 2

### A. Systèmes du 1er ordre

#### Définition
Un système du 1er ordre a pour fonction de transfert canonique :
$$H(p) = \frac{K}{1 + \tau p}$$
* $K$ : Gain statique (sans dimension ou homogène au rapport des unités).
* $\tau$ : Constante de temps du système (en $\text{s}$).

#### Réponse indicielle (Entrée échelon d'amplitude $E_0$)
Pour $e(t) = E_0 \cdot \mathcal{U}(t)$, la sortie $s(t)$ s'exprime par :
$$s(t) = K \cdot E_0 \left( 1 - e^{-\frac{t}{\tau}} \right) \mathcal{U}(t)$$

> **Propriétés remarquables :**
> * À $t = \tau$, $s(\tau) \approx 0,63 \cdot K \cdot E_0$ (soit $63\%$ de la valeur finale).
> * À $t = 3\tau$, $s(3\tau) \approx 0,95 \cdot K \cdot E_0$ ($95\%$).
> * À $t = 5\tau$, $s(5\tau) \approx 0,993 \cdot K \cdot E_0$ ($99\%$, régime permanent atteint).
> * La tangente à l'origine $(t=0)$ coupe l'asymptote horizontale finale $s(\infty) = K \cdot E_0$ au point d'abscisse $t = \tau$.

---

### B. Systèmes du 2ème ordre

#### Définition
Un système du 2ème ordre a pour fonction de transfert canonique :
$$H(p) = \frac{K}{1 + \frac{2z}{\omega_0}p + \frac{p^2}{\omega_0^2}}$$
* $K$ : Gain statique.
* $\omega_0$ : Pulsation propre non amortie (en $\text{rad}\cdot\text{s}^{-1}$).
* $z$ : Coefficient d'amortissement (sans dimension).

Selon la valeur de $z$, le régime temporel diffère :
1. **$z > 1$ (Régime aperiodique) :** Deux pôles réels négatifs. Pas de dépassement, cinétique lente.
2. **$z = 1$ (Régime critique) :** Pôle double. Retour rapide à l'équilibre sans dépassement.
3. **$0 < z < 1$ (Régime pseudo-périodique) :** Pôles complexes conjugués. La réponse présente des oscillations amorties.

#### Réponse indicielle en régime pseudo-périodique ($0 < z < 1$)
$$s(t) = K \cdot E_0 \left[ 1 - \frac{e^{-z\omega_0 t}}{\sqrt{1-z^2}} \sin(\omega_p t + \phi) \right]$$
Avec :
* $\omega_p = \omega_0 \sqrt{1-z^2}$ : Pulsation pseudo-propre (en $\text{rad}\cdot\text{s}^{-1}$).
* $\phi = \arccos(z)$ : Phase à l'origine.

> **Théorème (Dépassement maximal) :**
> Le premier dépassement $D_1$ (en pourcentage de la valeur finale) ne dépend que de l'amortissement $z$ :
> $$D_1 = 100 \cdot e^{-\frac{\pi z}{\sqrt{1-z^2}}}$$
> Inversement : $z = \frac{-\ln(D_1 / 100)}{\sqrt{\pi^2 + \ln^2(D_1 / 100)}}$

---

## 3. Analyse des performances des systèmes asservis

### A. Précision en régime permanent
La précision quantifie l'écart entre la consigne $w(t)$ et la sortie $s(t)$ lorsque $t \to +\infty$. On définit l'écart $\varepsilon(t) = w(t) - s(t)$.

> **Théorème (Théorème de la valeur finale) :**
> $\lim_{t \to +\infty} \varepsilon(t) = \lim_{p \to 0} p \cdot \varepsilon(p) = \lim_{p \to 0} p \cdot [W(p) - S(p)]$

On définit la **classe** d'un système par le nombre d'integrateurs pur ($p$ au dénominateur) dans sa chaîne ouverte $\text{FTBO}(p) = \frac{N(p)}{p^\alpha \cdot D(p)}$.

| Entrée \ Classe | Classe 0 ($\alpha = 0$) | Classe 1 ($\alpha = 1$) | Classe 2 ($\alpha = 2$) |
| :--- | :---: | :---: | :---: |
| **Échelon** ($E_0 / p$) | $\varepsilon_{\infty} = \frac{E_0}{1 + K_{BO}}$ | $\varepsilon_{\infty} = 0$ | $\varepsilon_{\infty} = 0$ |
| **Rampe** ($E_0 / p^2$) | $\varepsilon_{\infty} = +\infty$ | $\varepsilon_{\infty} = \frac{E_0}{K_v}$ | $\varepsilon_{\infty} = 0$ |
| **Parabole** ($E_0 / p^3$) | $\varepsilon_{\infty} = +\infty$ | $\varepsilon_{\infty} = +\infty$ | $\varepsilon_{\infty} = \frac{E_0}{K_a}$ |

* $K_{BO}$ : Gain statique de la FTBO.
* $K_v$ : Constante de vitesse.
* $K_a$ : Constante d'accélération.

---

### B. Stabilité des systèmes bouclés

#### Définition
Un système est stable si, soumis à une perturbation ou à une entrée bornée, sa sortie demeure bornée. En régime linéaire, la stabilité ne dépend que des pôles de la fonction de transfert en boucle fermée (les racines de $1 + H(p)K(p) = 0$).

> **Théorème (Condition de stabilité) :**
> Un système linéaire invariant est stable si et seulement si **tous les pôles** de sa fonction de transfert en boucle fermée ont leur partie réelle strictement négative (situés dans le demi-plan gauche du plan complexe de Laplace).

#### Critère algébrique de Routh (pour les polynômes)
Soit le polynôme caractéristique du dénominateur de la FTBF :
$$P(p) = a_n p^n + a_{n-1} p^{n-1} + \dots + a_1 p + a_0 \quad (\text{avec } a_i > 0)$$
On construit le tableau de Routh.
* **Condition nécessaire :** Tous les coefficients $a_i$ doivent être de même signe et non nuls.
* **Condition suffisante (Routh) :** Tous les termes de la première colonne du tableau de Routh doivent être de même signe.

---

## 4. Correction des systèmes

Pour améliorer simultanément la stabilité, la précision et la rapidité, on insère un **correcteur** $C(p)$ dans la chaîne directe.

* **Correcteur Proportionnel (P) :** $C(p) = K_p$
  * *Action :* Améliore la rapidité et réduit l'écart statique, mais peut dégrader la stabilité (voire amener à l'instabilité si $K_p$ est trop grand).
* **Correcteur Proportionnel Intégrateur (PI) :** $C(p) = K_p \left( 1 + \frac{1}{T_i p} \right)$
  * *Action :* Annule l'erreur statique (augmente la classe du système de 1), mais diminue la rapidité et la stabilité (introduction d'un déphasage négatif).
* **Correcteur Proportionnel Dérivé (PD) :** $C(p) = K_p (1 + T_d p)$
  * *Action :* Améliore la stabilité et la rapidité (introduit un amortissement et un déphasage positif), mais amplifie le bruit de mesure à hautes fréquences.

---

## 5. Méthodes et Pièges à éviter

> **Méthode - Étude d'un système asservi :**
> 1. Modéliser les blocs et exprimer la $\text{FTBF}(p)$.
> 2. Déterminer l'ordre du système et vérifier la stabilité (Routh ou position des pôles).
> 3. Calculer l'erreur statique en fonction de l'entrée (théorème de la valeur finale).
> 4. Étudier la rapidité et le dépassement si le système est d'ordre 2.

> **⚠️ Pièges classiques :**
> * **Confondre FTBO et FTBF :** La stabilité se calcule sur les pôles de la **FTBF**, jamais de la FTBO directement (sauf application du critère du revers non abordé ici en détail).
> * **Oublier les conditions initiales nulles :** L'utilisation de la transformée de Laplace en PTSI suppose des conditions initiales nulles ($s(0^+) = 0$, $\dot{s}(0^+) = 0$, etc.).
> * **Erreur d'homogénéité :** Vérifier systématiquement que $\tau p$ est sans dimension, donc que $\tau$ s'exprime bien en secondes et $p$ en $\text{s}^{-1}$.