---
title: 'Cours : Systèmes discrets et échantillonnés'
description: 'Synthèse de cours, théorèmes et démonstrations.'
---

# Fiche de Cours : Systèmes discrets et échantillonnés (PSI - STI / SII)

En classe préparatoire PSI, l'étude des systèmes asservis ne se limite plus aux signaux continus. Avec l'omniprésence des microcontrôleurs, des DSP et des automates programmables industriels (API), le traitement de l'information s'effectue de manière **discrète** (échantillonnée). Cette fiche pose le formalisme rigoureux indispensable pour modéliser, analyser et corriger ces systèmes.

---

## 1. Échantillonnage et bloc d'ordre zéro (BOZ)

### A. L'échantillonnage idéal
L'échantillonnage consiste à prélever à intervalles réguliers de période $T_e$ (période d'échantillonnage) la valeur d'un signal analogique $s(t)$. 

*   **Définition mathématique du signal échantillonné $s^*(t)$ :**
    $$s^*(t) = s(t) \cdot \text{Ш}_{T_e}(t) = \sum_{k=-\infin}^{+\infin} s(t) \cdot \delta(t - k T_e)$$
    où $\text{Ш}_{T_e}(t)$ est le peigne de Dirac de période $T_e$ et $\delta$ la distribution de Dirac.
*   **Fréquence d'échantillonnage :** $f_e = \frac{1}{T_e}$.

### B. Le bloqueur d'ordre zéro (BOZ) ou Zero-Order Hold (ZOH)
Dans la chaîne de commande, un convertisseur Numérique-Analogique (CNA) est généralement suivi d'un bloqueur qui maintient la valeur échantillonnée constante pendant toute la période $T_e$.

*   **Fonctionnement temporel :** Pour $t \in [kT_e, (k+1)T_e[$, $\quad s_{boz}(t) = s(kT_e)$.
*   **Fonction de transfert du BOZ (dans le domaine de Laplace) :**
    En considérant la réponse à une impulsion de Dirac, on montre que :
    $$H_{boz}(p) = \frac{1 - e^{-Tp}}{p}$$
    *(Note : en PSI, on note souvent $T$ ou $T_e$ la période d'échantillonnage).*

---

## 2. La Transformée en Z

De même que la transformation de Laplace permet de résoudre les équations différentielles linéaires à coefficients constants, la **transformée en $Z$** est l'outil algébrique adapté aux équations aux différences (récurrences) régissant les systèmes discrets.

### A. Définitions et notations
Soit une suite de nombres réels ou complexes $(s_k)_{k \in \mathbb{N}}$ représentant un signal discret (où $s_k = s(kT_e)$).

*   **Définition (Transformée en $Z$ unilatérale) :**
    $$\mathcal{Z}\{s_k\} = S(z) = \sum_{k=0}^{+\infin} s_k z^{-k}$$
    où $z$ est une variable complexe.
*   **Opérateur de retard temporel :**
    La transformée en $Z$ possède une propriété fondamentale concernant le retard d'un échantillon :
    $$\mathcal{Z}\{s_{k-1}\} = z^{-1}S(z) + s_{-1}$$
    Si les **conditions initiales sont nulles** ($s_{-1} = 0, s_{-2} = 0$, etc.) :
    $$\mathcal{Z}\{s_{k-n}\} = z^{-n}S(z)$$
    *Le multiplieur $z^{-1}$ joue donc le rôle d'un opérateur de retard d'une période d'échantillonnage.*

### B. Transformées usuelles à connaître par cœur

| Signal temporel $s_k$ ($k \geq 0$) | Transformée en $Z$ $S(z)$ |
| :--- | :--- |
| Impulsion de Kronecker $\delta_0[k] = (1, 0, 0, \dots)$ | $1$ |
| Échelon unité $u_k = (1, 1, 1, \dots)$ | $\displaystyle\frac{1}{1 - z^{-1}} = \frac{z}{z-1}$ |
| Rampe $s_k = k$ | $\displaystyle\frac{z^{-1}}{(1 - z^{-1})^2} = \frac{z}{(z-1)^2}$ |
| Exponentielle $s_k = a^k$ | $\displaystyle\frac{1}{1 - a z^{-1}} = \frac{z}{z-a}$ |

---

## 3. Fonction de transfert discrète

### A. Définition
Pour un système linéaire invariant (SLI) discret, régi par une équation aux différences de la forme :
$$s_k + a_1 s_{k-1} + \dots + a_n s_{k-n} = b_0 e_k + b_1 e_{k-1} + \dots + b_m e_{k-m}$$

En appliquant la transformée en $Z$ (avec conditions initiales nulles), on définit la **fonction de transfert discrète** $H(z)$ :
$$H(z) = \frac{S(z)}{E(z)} = \frac{b_0 + b_1 z^{-1} + \dots + b_m z^{-m}}{1 + a_1 z^{-1} + \dots + a_n z^{-n}}$$

### B. Lien entre le domaine continu et le domaine discret
Si un système continu $H(p)$ est précédé d'un BOZ et suivi d'un échantillonneur (cadencement synchrone), on définit la fonction de transfert échantillonnée en cascade :
$$H(z) = \mathcal{Z}\left\{ \mathcal{T}^{-1} \left( H_{boz}(p) \cdot H(p) \right) \right\} = \mathcal{Z}\left\{ \mathcal{T}^{-1} \left( \frac{1 - e^{-Tp}}{p} H(p) \right) \right\}$$

---

## 4. Stabilité des systèmes discrets

C'est un point crucial fréquemment évalué aux concours.

> ### Théorème de stabilité (Critère des racines)
> Un système linéaire discret de fonction de transfert $H(z)$ est **asymptotiquement stable** si et seulement si **tous** les pôles de $H(z)$ (c'est-à-dire les racines du dénominateur) sont situés ** strictement à l'intérieur du cercle unité** du plan complexe $z$.
> 
> $$\forall i, \quad |p_i| < 1$$

*   **Interprétation :** 
    *   Si un pôle est à l'extérieur du cercle unité ($|p_i| > 1$), la réponse tend vers l'infini (instabilité).
    *   Si un pôle est sur le cercle unité ($|p_i| = 1$), le système est limite stable (oscillations non amorties).

---

## 5. Précision et performances dynamiques

### A. Erreur statique et théorème de la valeur finale
Soit un système en boucle fermée de fonction de transfert en boucle ouverte (FTBO) $FTBO(z)$. L'erreur epsilon est définie par $E(z) = \mathcal{Z}\{e_k\}$.

> ### Théorème de la valeur finale
> Si toutes les singularités de $(1 - z^{-1})S(z)$ sont à l'intérieur du cercle unité :
> $$\lim_{k \to +\infty} s_k = \lim_{z \to 1} (1 - z^{-1})S(z)$$

Pour un **échelon d'entrée** d'amplitude $E_0$ ($E(z) = \frac{E_0}{1-z^{-1}}$), l'erreur statique $\varepsilon_s$ s'exprime via l'efficacité du système (classe $n$ du système, nombre d'intégrateurs purs $1 - z^{-1}$ dans la chaîne ouverte).

### B. Rapidité
La rapidité d'un système discret est liée à la position des pôles dominants en boucle fermée :
*   Plus les pôles sont proches de l'origine $z = 0$, plus le système est **rapide** (le régime transitoire s'amortit en un nombre restreint de périodes $T_e$).
*   Plus les pôles se rapprochent du point $z = 1$, plus le système est **lent**.

---

## 6. Méthodes et Savoir-Faire (PSI)

1.  **Passer d'une équation récurrente à la fonction de transfert :** 
    *Remplacer* $s_{k-n}$ par $z^{-n}S(z)$ (en négligeant les conditions initiales si on cherche la fonction de transfert).
2.  **Déterminer la stabilité :**
    *Calculer* les racines du polynôme caractéristique (dénominateur de $H(z)$) et *vérifier* que leur module est strictement inférieur à 1.
3.  **Calculer la réponse temporelle :**
    *   Exprimer $S(z) = H(z)E(z)$.
    *   Effectuer une **décomposition en éléments simples (DES)** de $\frac{S(z)}{z}$ (astuce classique : décomposer $S(z)/z$ et non $S(z)$ pour faire apparaitre les termes en $\frac{z}{z-a}$).
    *   Inverser via le formulaire de transformées en $Z$.

---

## 7. Pièges à éviter (Attention aux concours)

*   **Piège 1 : Confondre les plans $p$ et $z$.** 
    Pour la stabilité, la zone stable est le **demi-plan gauche** pour le plan de Laplace ($Re(p) < 0$), mais c'est **l'intérieur du cercle unité** pour le plan en $Z$ ($|z| < 1$). Un pôle à $z = -0.5$ est stable (oscillant amorti), tandis qu'un pôle à $p = -0.5$ l'est aussi, mais leur dynamique temporelle est très différente.
*   **Piège 2 : Oublier le $z$ au numérateur lors de la DES.** 
    Pour inverser une transformée en $Z$ par identification, pensez toujours à manipuler $\frac{S(z)}{z}$ pour retrouver les formes canoniques $\frac{z}{z-a}$.
*   **Piège 3 : Conditions initiales non nulles.** 
    Ne pas appliquer bêtement $\mathcal{Z}\{s_{k-1}\} = z^{-1}S(z)$ si l'énoncé précise explicitement des conditions initiales non nulles (ce qui est rare en SII en CPGE, mais théoriquement rigoureux).