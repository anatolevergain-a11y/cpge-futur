---
title: 'Cours : Optique et interférences'
description: 'Fiche de synthèse officielle et démonstrations du programme CPGE PT.'
---

## 📌 1. Définitions & Cadre d'étude

L'optique ondulatoire étudie la propagation de la lumière en tenant compte de sa nature électromagnétique. Dans le cadre du programme de CPGE PT, le champ lumineux est modélisé par une grandeur scalaire réelle, appelée *vibration lumineuse* $s(M, t)$, représentant la composante pertinente d'un champ électrique optique.

### 1.1. Modèle du signal lumineux
- **Onde plane monochromatique (OPM)** : 
  $$s(M, t) = A \cos(\omega t - \vec{k}\cdot\vec{OM} + \varphi_0)$$
  où $\omega = 2\pi\nu$ est la pulsation, $\vec{k}$ le vecteur d'onde (de norme $k = \frac{2\pi}{\lambda} = \frac{n\omega}{c}$), et $\varphi_0$ la phase à l'origine.
- **Vecteur de Poynting et Intensité lumineuse** : L'intensité lumineuse $I(M)$ en un point $M$ est définie comme la moyenne temporelle du carré de la vibration lumineuse (assimilée à l'éclairement énergétique) :
  $$I(M) = \langle s^2(M, t) \rangle_T$$

### 1.2. Conditions d'interférences
Pour observer des interférences lumineuses stationnaires issues de deux sources $S_1$ et $S_2$, les sources doivent être :
1. **Synchrones** : même pulsation $\omega$.
2. **Cohérentes** : différence de phase $\Delta \varphi(t)$ en moyenne temporelle stationnaire (sources issues d'une même source primaire par division du front d'onde ou d'amplitude).
3. **De même état de polarisation** (pour des interférences optimales avec un contraste maximal).

---

## 📐 2. Théorèmes fondamentaux & Démonstrations clés

### 2.1. Superposition et formule de Fresnel
Soit un point $M$ éclairé par deux sources synchrones $S_1$ et $S_2$ de vibrations respectives :
$$s_1(M, t) = A_1 \cos(\omega t - \varphi_1(M))$$
$$s_2(M, t) = A_2 \cos(\omega t - \varphi_2(M))$$

La vibration résultante est $s(M, t) = s_1(M, t) + s_2(M, t)$. L'intensité lumineuse s'écrit, en introduisant la différence de phase $\Delta \varphi(M) = \varphi_2(M) - \varphi_1(M)$ :

$$I(M) = \langle s(M, t)^2 \rangle_T = I_1 + I_2 + 2 \sqrt{I_1 I_2} \cos(\Delta \varphi(M))$$

Où $I_1 = \frac{A_1^2}{2}$ et $I_2 = \frac{A_2^2}{2}$.

### 2.2. Démonstration : Lien entre différence de marche et différence de phase
Objectif: Exprimer $\Delta \varphi$ en fonction du chemin optique.*

Le chemin optique $\mathcal{A}(A, B)$ entre deux points $A$ et $B$ dans un milieu d'indice de réfraction $n$ (éventuellement variable) est défini par :
$$\mathcal{A}(A, B) = \int_{A}^{B} n(M) \, \text{d}\sigma$$

Pour une onde se propageant de la source $S_i$ au point $M$, la phase s'exprime par :
$$\varphi_i(M) = \varphi_{0,i} - k_0 \mathcal{A}(S_i, M)$$
où $k_0 = \frac{\omega}{c} = \frac{2\pi}{\lambda_0}$ est le nombre d'onde dans le vide.

La différence de phase $\Delta \varphi(M)$ entre les deux chemins optiques s'écrit alors :
$$\Delta \varphi(M) = \varphi_2(M) - \varphi_1(M) = -k_0 \left( \mathcal{A}(S_2, M) - \mathcal{A}(S_1, M) \right) + \Delta \varphi_0$$

En définissant la **différence de marche** $\delta = \mathcal{A}(S_2, M) - \mathcal{A}(S_1, M)$ et en supposant les sources en phase ($\Delta \varphi_0 = 0$), on obtient la relation fondamentale :
$$\Delta \varphi(M) = \frac{2\pi}{\lambda_0} \delta(M)$$
L'intensité devient :
$$I(M) = I_1 + I_2 + 2 \sqrt{I_1 I_2} \cos\left( \frac{2\pi}{\lambda_0} \delta(M) \right)$$

---

## 💡 3. Méthodes de calcul & Algorithmes

### 3.1. Calcul d'interférences à deux onde (Interféromètre de Michelson, Frousse d'Young)
1. **Identifier les sources secondaires** $S_1$ et $S_2$ ou les miroirs équivalents.
2. **Exprimer le chemin optique** $\mathcal{A}(S_i, M)$ en faisant une approximation parabolique (approximation paraxiale) si nécessaire :
   $$\mathcal{A} \approx z + \frac{x^2+y^2}{2z}$$
3. **Calculer la différence de marche** $\delta$.
4. **Déterminer l'interfrange $\dot{i}$ ou l'entre-anneau** :
   - Interfrange (configuration d'Young) : distance entre deux franges brillantes consécutives, $\Delta x = i = \frac{\lambda_0 D}{a}$.
   - Dispositif à division d'amplitude (Michelson réglé en lame d'air) : étude des anneaux d'égale inclinaison.

### 3.2. Notion de contraste (Visibilité des franges)
Le contraste (ou visibilité) $C$ d'un système d'interférences est défini par :
$$C = \frac{I_{\text{max}} - I_{\text{min}}}{I_{\text{max}} + I_{\text{min}}}$$

Pour deux ondes d'intensités égales $I_1 = I_2 = I_0$ :
$$I_{\text{max}} = 4 I_0, \quad I_{\text{min}} = 0 \implies C = 1$$

---

## ⚠️ 4. Pièges classiques aux Concours

1. **Confondre chemin géométrique et chemin optique** : Ne jamais oublier de multiplier la distance géométrique par l'indice du milieu $n$ traversé. $\delta = \sum n_i \text{d}l_i$.
2. **Oublier le déphasage par réflexion (lames minces)** : Lors d'une réflexion sur un milieu plus réfringent ($n_2 > n_1$), l'onde subit un saut de phase de $\pi$ (soit une modification de la différence de marche de $\frac{\lambda_0}{2}$). Ne pas l'inclure fausse complètement la localisation des franges brillantes et sombres.
3. **Domaine de validité de la cohérence temporelle** : Pour une source polychromatique ou présentant une largeur spectrale $\Delta \lambda$, les interférences se brouillent lorsque la différence de marche $\delta$ dépasse la longueur de cohérence $L_c \approx \frac{\lambda_0^2}{\Delta \lambda}$.
4. **Erreurs d'unités dans les applications numériques** : Toujours convertir les longueurs d'onde en mètres (\text{m}) et vérifier l'homogénéité des expressions littérales avant tout calcul numérique exigé par le jury.