---
title: 'Cours : Optique interférentielle'
description: 'Synthèse de cours, théorèmes et démonstrations fondamentales.'
---

## 📌 1. Définitions & Cadre d'étude

L'optique interférentielle étudie la superposition de champs lumineux cohérents et les modulations d'intensité lumineuse qui en résultent. 

### Modèle scalaires des ondes lumineuses
Dans le cadre du programme de CPGE, on se restreint généralement à l'étude d'une composante scalaire du champ électrique, notée $s(M, t)$, représentant une onde lumineuse monochromatique de pulsation $\omega = 2\pi\nu$ et de longueur d'onde dans le vide $\lambda_0 = \frac{2\pi c}{\omega}$ :
$$s(M, t) = A(M) \cos\left(\omega t - \varphi(M)\right) = \text{Re} \left( \underline{s}(M) e^{j\omega t} \right)$$
où $\underline{s}(M) = A(M) e^{-j\varphi(M)}$ est l'amplitude complexe de l'onde au point $M$.

### Superposition d'ondes et Intensité
Soit un point $M$ éclairé par $N$ sources lumineuses. Le champ total est la somme des champs incidents (principe de superposition) :
$$\underline{s}_{\text{tot}}(M) = \sum_{i=1}^{N} \underline{s}_i(M)$$

L'intensité lumineuse $I(M)$, grandeur physique mesurée par un récepteur (œil, capteur CCD, photodiode) est proportionnelle à la moyenne temporelle du carré du champ (sur un temps grand devant la période optique $T = \frac{2\pi}{\omega}$, mais petit devant le temps de réponse du détecteur) :
$$I(M) = K \langle s_{\text{tot}}^2(M, t) \rangle_t$$
En notation complexe, pour deux ondes 1 et 2 :
$$I(M) = I_1(M) + I_2(M) + 2 \text{Re} \left( \langle \underline{s}_1(M,t) \underline{s}_2^*(M,t) \rangle_t \right)$$
où $I_1 = K \frac{|\underline{s}_1|^2}{2}$ et $I_2 = K \frac{|\underline{s}_2|^2}{2}$ sont les intensités propres des ondes.

### Interférences à deux ondes
Le terme d'interférence $I_{12}(M)$ s'écrit :
$$I_{12}(M) = 2 \text{Re} \left( \underline{s}_1(M) \underline{s}_2^*(M) \right) = 2 A_1(M) A_2(M) \cos\left(\varphi_2(M) - \varphi_1(M)\right)$$
L'intensité totale devient :
$$I(M) = I_1(M) + I_2(M) + 2 \sqrt{I_1(M) I_2(M)} \cos(\Delta\varphi(M))$$
avec $\Delta\varphi(M) = \varphi_1(M) - \varphi_2(M)$ la différence de phase entre les deux ondes.

### Notion de cohérence
*   **Ondes cohérentes :** La différence de phase $\Delta\varphi(M)$ est stationnaire au cours du temps ($\frac{d\Delta\varphi}{dt} = 0$). Il y a des interférences visibles.
*   **Ondes incohérentes :** (cas de sources indépendantes comme deux ampoules spectrales ou deux lasers différents), $\Delta\varphi(M, t)$ fluctue de manière aléatoire et rapide. La moyenne temporelle du terme d'interférence est nulle ($\langle \cos(\Delta\varphi(t)) \rangle_t = 0$). On a $I(M) = I_1(M) + I_2(M)$, il n'y a pas de figure d'interférence observable.

---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### Démonstration : Lien entre différence de phase et différence de marche
Objectif: ** Exprimer la différence de phase $\Delta\varphi$ en fonction du chemin optique parcouru par les ondes.

Soit une onde lumineuse se propageant dans un milieu d'indice optique $n$ (avec $n = \frac{c}{v}$ où $v$ est la vitesse de la lumière dans le milieu).
La phase le long d'un trajet géométrique de longueur $L$ s'écrit :
$$\varphi = \omega t - \mathbf{k}\cdot\mathbf{r} = \omega t - \frac{2\pi n}{\lambda_0} s$$
où $s$ est l'abscisse curviligne le long du rayon lumineux.

Pour un trajet reliant une source $S$ à un point d'observation $M$ à travers un milieu d'indice $n(M)$, la phase à l'arrivée est :
$$\varphi(M) = \varphi(S) - \frac{2\pi}{\lambda_0} \int_{S}^{M} n(s) ds$$

On définit le **chemin optique** $\mathcal{A}(S \to M)$ (ou $\left[SM\right]$) entre $S$ et $M$ par :
$$\mathcal{A}(S \to M) = \int_{S}^{M} n(s) ds$$

Considérons maintenant deux ondes issues d'une même source synchrone $S$ (division d'amplitude ou du front d'onde) empruntant deux chemins distincts (1) et (2) pour arriver en $M$.
*   Phase de l'onde 1 en $M$ : $\varphi_1(M) = \varphi(S) - \frac{2\pi}{\lambda_0} \mathcal{A}_1(S \to M)$
*   Phase de l'onde 2 en $M$ : $\varphi_2(M) = \varphi(S) - \frac{2\pi}{\lambda_0} \mathcal{A}_2(S \to M)$

La différence de phase $\Delta\varphi(M)$ vaut alors :
$$\Delta\varphi(M) = \varphi_1(M) - \varphi_2(M) = \frac{2\pi}{\lambda_0} \left( \mathcal{A}_2(S \to M) - \mathcal{A}_1(S \to M) \right)$$

En posant $\delta = \mathcal{A}_2 - \mathcal{A}_1$, la **différence de marche**, on obtient la relation fondamentale :
$$\boxed{\Delta\varphi(M) = \frac{2\pi}{\lambda_0} \delta(M)}$$

L'intensité lumineuse s'exprime ainsi sous sa forme canonique :
$$I(M) = I_1 + I_2 + 2\sqrt{I_1 I_2} \cos\left( \frac{2\pi \delta}{\lambda_0} \right)$$

### Visibilité des franges de Michelson
La visibilité (ou contraste) $V$ d'une figure d'interférence est définie par :
$$V = \frac{I_{\max} - I_{\min}}{I_{\max} + I_{\min}}$$
Si les intensités des deux ondes sont égales ($I_1 = I_2 = I_0$), on a :
*   $I_{\max} = 4 I_0$
*   $I_{\min} = 0$
*   $V = 1$ (contraste maximal)

---

## 💡 3. Méthodes classiques de résolution

### Méthode générale pour l'étude d'un dispositif interférentiel
1.  **Identifier le type de division :** Division du front d'onde (frous d'Young, miroir de Lloyd) ou division d'amplitude (interféromètre de Michelson, lames minces, anneaux de Newton).
2.  **Déterminer les sources secondaires (ou fictives) :** Remplacer le système optique par des sources cohérentes équivalentes $S_1$ et $S_2$.
3.  **Calculer la différence de marche $\delta$ :** 
    *   Exprimer les chemins optiques géométriquement sous des approximations valables (approximation paraxial).
    *   Prendre en compte les **retards de phase à la réflexion** (changement de pi de phase lors d'une réflexion sur un milieu plus réfringent : $\delta_{\text{refl}} = \pm \frac{\lambda_0}{2}$).
4.  **Établir l'expression de l'intensité :** $I = I_0 \left( 1 + m \cos\left(\frac{2\pi\delta}{\lambda_0}\right) \right)$.
5.  **Caractériser les franges :**
    *   *Franges brillantes* si $\delta = k \lambda_0$ ($k \in \mathbb{Z}$).
    *   *Franges sombres* si $\delta = (k + \frac{1}{2}) \lambda_0$.
    *   Déterminer l'interfrange $i$ (distance entre deux franges de même nature).

### Exemple type : Frous d'Young
*   Dispositif : Deux sources ponctuelles $S_1$ et $S_2$ séparées par $a$, distantes de $D$ de l'écran d'observation $(Oxy)$.
*   Différence de marche au point $M(x, y)$ : $\delta \approx \frac{ax}{D}$.
*   Interfrange : $i = \frac{\lambda_0 D}{a}$.

---

## ⚠️ 4. Pièges classiques aux Concours

1.  **Oubli du déphasage par réflexion ($\pi$ radians) :** 
    Une onde réfléchie sur un milieu d'indice plus élevé que le milieu incident subit un saut de phase de $\pi$, ce qui équivaut à ajouter $\frac{\lambda_0}{2}$ à la différence de marche. Ne pas l'inclure inverse systématiquement franges brillantes et sombres (inversion du contraste au centre).
2.  **Confusion entre interfrange et largeur de frange :** 
    L'interfrange $i$ est la distance spatiale séparant deux maxima d'intensité consécutifs. Pour des interférences non isinclines (comme les coins d'air), l'interfrange n'est pas constant si l'approximation paraxiale est mal menée.
3.  **Conditions de non-brouillage (Cohérence temporelle et spatiale) :** 
    *   Si la source n'est pas monochromatique (largeur spectrale $\Delta\lambda$), les figures d'interférences se brouillent au-delà d'un ordre d'interférence $p_{\max} \approx \frac{\lambda_0}{\Delta\lambda}$.
    *   Si la source n'est pas ponctuelle (étendue spatiale), chaque point de la source incohérente crée un système de franges décalé, ce qui conduit à un brouillage global si la taille de la source dépasse la limite de cohérence spatiale.
4.  **Mauvaise manipulation de l'indice optique dans le calcul du chemin optique :** 
    Le chemin optique est $\int n(s) ds$. Dans un milieu d'indice $n$ sur une épaisseur $e$, la contribution à la différence de marche est $n \cdot e$, et non simplement $e$.