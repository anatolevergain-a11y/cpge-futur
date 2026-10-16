---
title: "Optimisation Concours : SII PSI/PSI*"
description: "Méthodes canoniques, rédactions modèles type concours et pièges du barème pour les concours CPGE."
sidebar:
  badge:
    text: "Méthode Concours"
    variant: "caution"
---

## 🎯 Objectif du Module & Exigences des Jurys

En tant que concepteur de sujets et membre de jurys de concours (Mines-Ponts, Centrale-Supélec, CCINP), je constate chaque année les mêmes failles dans les copies de PSI/PSI*. Le problème ne réside pas seulement dans la maîtrise du cours, mais dans **l'art de rédiger pour enclencher les points du barème**. 

Ce guide synthétise les trois questions les plus discriminantes en Sciences Industrielles pour l'Ingénieur en filière PSI. Pour chaque question, vous trouverez la stratégie exacte du correcteur, la structure de rédaction exigée (avec un formalisme mathématique rigoureux), un cas pratique corrigé et les erreurs éliminatoires à bannir.

---

### 📌 Question Type 1 : Synthèse et dimensionnement d'un correcteur à avance ou retard de phase (marge de phase et erreur statique)

#### 💡 Méthode canonique & Étapes de rédaction

Le dimensionnement d'un correcteur correctif (généralement de type proportionnel-dérivé ou avance de phase) vise à satisfaire simultanément un cahier des charges d'**erreur statique** (précision) et de **stabilité dynamique** (rapidité, marge de phase).

1. **Analyse de la classe et de la précision :**
   Déterminer la classe $C$ du système en boucle ouverte pour fixer l'erreur en régime permanent face à une entrée polynomiale (échelon, rampe). L'introduction d'un gain proportionnel $K$ ou d'un correcteur passe-bas/passe-haut doit conserver cette classe si l'écart statique est imposé, ou l'améliorer si nécessaire.
2. **Expression du correcteur :**
   Sous sa forme canonique, le correcteur à avance de phase s'écrit :
   $$C(s) = K_c \frac{1 + \tau s}{1 + a \tau s} \quad \text{avec} \quad 0 < a < 1$$
3. **Exploitation de la Marge de Phase (MP) :**
   La pulsation de coupure à 0 dB du système corrigé, notée $\omega_{c2}$, est imposée par le temps de réponse ou par le choix direct de la phase. On calcule l'apport de phase nécessaire $\Delta \varphi$ en tenant compte de la phase initiale du système non corrigé $\varphi(\omega_{c2})$ :
   $$\Delta \varphi = \text{MP}_{\text{cible}} - \left( 180^\circ + \varphi_0(\omega_{c2}) \right) + \text{marge de sécurité}$$
4. **Calcul du paramètre $a$ et de $\tau$ :**
   La relation liant le paramètre d'avance $a$ à l'angle maximal $\varphi_m = \Delta \varphi$ est :
   $$\sin(\varphi_m) = \frac{1 - a}{1 + a} \implies a = \frac{1 - \sin(\varphi_m)}{1 + \sin(\varphi_m)}$$
   La constante de temps $\tau$ est ensuite choisie pour que le maximum d'avance de phase soit centré sur la nouvelle pulsation de coupure :
   $$\tau = \frac{1}{\omega_{c2} \sqrt{a}}$$

#### 📋 Exemple de sujet corrigé type Concours

**Énoncé type :** Soit un système de fonction de transfert en boucle ouverte non corrigée $H_{BO}(s) = \frac{K}{s(s+1)(s+5)}$. On impose une erreur nulle face à un échelon (système de classe $\ge 1$), un coefficient d'amortissement ou une marge de phase $\text{MP} = 45^\circ$ à la pulsation $\omega_{c} = 2 \text{ rad/s}$.

**Rédaction type exigée sur la copie :**

*   *Étape 1 : Analyse de la marge de phase initiale.*
    À la pulsation $\omega_c = 2 \text{ rad/s}$, évaluons la phase de la boucle ouverte non corrigée :
    $$\varphi_0(\omega_c) = \text{arg}(H_{BO}(j\omega_c)) = -90^\circ - \arctan\left(\frac{\omega_c}{1}\right) - \arctan\left(\frac{\omega_c}{5}\right)$$
    A N : $\varphi_0(2) = -90^\circ - \arctan(2) - \arctan(0.4) = -90^\circ - 63.4^\circ - 21.8^\circ = -175.2^\circ$.
    La marge de phase initiale vaut donc :
    $$\text{MP}_0 = 180^\circ + \varphi_0(2) = 180^\circ - 175.2^\circ = 4.8^\circ$$
    Cette marge est insuffisante pour garantir la stabilité (exigence : $\text{MP} \ge 45^\circ$).

*   *Étape 2 : Détermination de l'avance de phase requise.*
    L'apport de phase nécessaire est :
    $$\Delta \varphi = \text{MP}_{\text{cible}} - \text{MP}_0 + \text{marge de sécurité (de l'ordre de } 5^\circ \text{ pour compenser le gain du correcteur)} \implies \Delta \varphi = 45^\circ - 4.8^\circ + 5^\circ = 45.2^\circ$$

*   *Étape 3 : Calcul de $a$ et $\tau$.*
    $$\sin(45.2^\circ) \approx 0.71 \implies a = \frac{1 - 0.71}{1 + 0.71} \approx 0.17$$
    $$\tau = \frac{1}{\omega_c \sqrt{a}} = \frac{1}{2 \times \sqrt{0.17}} \approx 1.21 \text{ s}$$

*   *Étape 4 : Ajustement du gain global $K_c$.*
    Le gain du correcteur à avance de phase à haute fréquence introduit un facteur $\frac{1}{a}$. Le gain statique $K$ doit être réajusté pour que $|C(j\omega_c) H_{BO}(j\omega_c)| = 1$.

#### ⚠️ Les pièges majeurs soulignés dans les rapports de jury
- **Oubli des unités :** Mélanger les radians et les degrés dans les calculs trigonométriques ($\arctan$ en radians vs degrés). Le jury sanctionne lourdement l'absence de conversion.
- **Hypothèse fausse sur le gain :** Oublier que le correcteur à avance de phase amplifie les hautes fréquences, ce qui peut exacerber le bruit de mesure (et rendre le système sensible aux instabilités non modélisées).

---

### 📌 Question Type 2 : Cinématique 3D, torseurs dynamique/cinétique et calcul de matrice d'inertie

#### 💡 Méthode canonique & Étapes de rédaction

Les questions de dynamique menant au théorème du moment dynamique (TMD) ou au théorème de la résultante dynamique (TRD) exigent une rigueur absolue dans le choix des points de projection et l'application des torseurs.

1. **Paramétrage et cinématique du solide :**
   Établir clairement le repère d'étude $\mathcal{R}_0(O, \vec{x}_0, \vec{y}_0, \vec{z}_0)$ et les repères intermédiaires associés aux liaisons via les angles d'Euler ou de Cardano. Écrire le vecteur rotation $\vec{\Omega}_{i/j}$ sous forme explicite.
2. **Expression du torseur cinétique :**
   Pour un solide $S_i$ en mouvement par rapport à $\mathcal{R}_0$, le torseur cinétique au point $P$ s'exprime par :
   $$\{\mathcal{C}(S_i/\mathcal{R}_0)\} = \left\{ \begin{array}{c} \vec{\mathcal{D}}(P, S_i/\mathcal{R}_0) = m_i \vec{V}(G_i \in S_i/\mathcal{R}_0) \\ \vec{\sigma}(P, S_i/\mathcal{R}_0) = \overline{\overline{I}}(P, S_i) \vec{\Omega}_{S_i/\mathcal{R}_0} \end{array} \right\}_P$$
3. **Application du Théorème du Moment Dynamique (TMD) :**
   Projeter impérativement le TMD en un point judicieux $A$ (centre d'une liaison pivot, point fixe, ou centre de masse $G$) pour éliminer les forces de liaison inconnues (réactions articulaires ne travaillant pas ou dont le moment en $A$ est nul).
   $$\{\mathcal{D}(S_i/\mathcal{R}_0)\} = \{\mathcal{E}_{\text{ext} \to S_i}\}$$
   En un point fixe ou au centre de masse $G_i$ :
   $$\vec{\delta}(A, S_i/\mathcal{R}_0) = \left. \frac{d\vec{\sigma}(A, S_i/\mathcal{R}_0)}{dt} \right|_{\mathcal{R}_0} + \vec{V}(A \in S_i/\mathcal{R}_0) \wedge m_i \vec{V}(G_i \in S_i/\mathcal{R}_0) = \vec{M}_A(\text{ext} \to S_i)$$

#### 📋 Exemple de sujet corrigé type Concours

**Énoncé type :** Soit un bras manipulateur modélisé par un solide $S$ de masse $m$, de centre de gravité $G$ tel que $\vec{OG} = L \vec{x}_1$. Le solide est en rotation autour de l'axe $(O, \vec{z}_0)$ avec un angle $\theta(t)$. Déterminer le couple moteur $C_m(t)\vec{z}_0$ nécessaire pour imposer un mouvement $\theta(t)$.

**Rédaction type exigée sur la copie :**

*   *Étape 1 : Isollement et bilan des actions mécaniques.*
    Isolons le solide $S$. Le bilan des actions mécaniques extérieures agissant sur $S$ comprend :
    - L'action de la liaison pivot d'axe $(O, \vec{z}_0)$, modélisée par un torseur de résultante $\vecR_{\text{pivot}}$ et de moment nul en $O$ (si les frottements sont négligés).
    - L'action de la pesanteur : $\vec{P} = -mg \vec{z}_0$.
    - L'action du moteur : $\{\mathcal{T}_{\text{moteur}}\} = \left\{ \begin{array}{c} \vec{0} \\ C_m(t)\vec{z}_0 \end{array} \right\}_O$.

*   *Étape 2 : Cinématique du point $G$.*
    Le repère lié au solide est $\mathcal{R}_1(O, \vec{x}_1, \vec{y}_1, \vec{z}_0)$ avec $\vec{\Omega}_{1/0} = \dot{\theta} \vec{z}_0$.
    La position de $G$ est $\vec{OG} = L \vec{x}_1$.
    La vitesse du point $G$ dans $\mathcal{R}_0$ est :
    $$\vec{V}(G \in S/\mathcal{R}_0) = \left. \frac{d\vec{OG}}{dt} \right|_{\mathcal{R}_0} = \vec{\Omega}_{1/0} \wedge \vec{OG} = \dot{\theta} \vec{z}_0 \wedge L \vec{x}_1 = L \dot{\theta} \vec{y}_1$$

*   *Étape 3 : Application du TMD au point $O$.*
    Le point $O$ étant fixe dans le galiléen $\mathcal{R}_0$, on applique directement le TMD en $O$ :
    $$\vec{\delta}(O, S/\mathcal{R}_0) \cdot \vec{z}_0 = \vec{M}_O(\text{ext} \to S) \cdot \vec{z}_0$$
    Exprimons le moment dynamique projeté sur $\vec{z}_0$ :
    $$\vec{\sigma}(O, S/\mathcal{R}_0) \cdot \vec{z}_0 = C_z \dot{\theta}$$
    où $C_z$ est le moment d'inertie de $S$ par rapport à l'axe $(O, \vec{z}_0)$ ($C_z = m L^2$ par le théorème de Huygens si nécessaire).
    Dérivons par rapport au temps :
    $$\left. \frac{d\vec{\sigma}(O, S/\mathcal{R}_0)}{dt} \right|_{\mathcal{R}_0} \cdot \vec{z}_0 = C_z \ddot{\theta} \vec{z}_0$$
    Le moment des actions extérieures en $O$ se réduit au couple moteur et au moment du poids :
    $$\vec{M}_O(\text{pesanteur}) = \vec{OG} \wedge (-mg \vec{z}_0) = (L \vec{x}_1) \wedge (-mg \vec{z}_0) = -mgL \vec{y}_1$$
    En projetant sur $\vec{z}_0$, le moment du poids s'annule. On obtient l'équation du mouvement :
    $$C_z \ddot{\theta} = C_m(t) \implies C_m(t) = m L^2 \ddot{\theta}(t)$$

#### ⚠️ Les pièges majeurs soulignés dans les rapports de jury
- **Oubli du terme de transport :** Ne pas appliquer la bonne formule de dérivation vectorielle dans un repère non galiléen ou omettre le terme $\vec{V}(A) \wedge m\vec{V}(G)$ lorsque le point $A$ n'est ni fixe ni confondu avec $G$.
- **Erreur de projection :** Projeter une équation vectorielle sur une base non adaptée (ex: projeter dans la base fixe $\mathcal{R}_0$ des vecteurs exprimés dans $\mathcal{R}_1$ sans avoir écrit explicitement la matrice de passage).

---

### 📌 Question Type 3 : Modélisation des asservissements discrets et analyse de stabilité

#### 💡 Méthode canonique & Étapes de rédaction

Avec l'omniprésence des microcontrôleurs et des correcteurs numériques dans les sujets de SII, la maîtrise de la transformée en $z$ et de l'analyse spectrale discrète est indispensable.

1. **Modélisation de la chaîne d'échantillonnage :**
   Passer de la variable Laplace $s$ à la variable discrète $z$ via la transformée en $z$. Pour un bloqueur d'ordre zéro (BOZ) de période d'échantillonnage $T_e$, la fonction de transfert discrétisée associée à un système continu $H(s)$ est :
   $$H(z) = \mathcal{Z}\left\{ \text{BOZ} * H(s) \right\} = (1 - z^{-1}) \mathcal{Z}\left\{ \mathcal{L}^{-1}\left( \frac{H(s)}{s} \right)_{t = k T_e} \right\}$$
2. **Détermination de la fonction de transfert en boucle fermée (FTBF) :**
   À partir de la fonction de transfert en boucle ouverte discrète $H_{BO}(z) = C(z) H(z)$, la FTBF $H_{BF}(z)$ s'exprime par :
   $$H_{BF}(z) = \frac{C(z)H(z)}{1 + C(z)H(z)}$$
3. **Critère de stabilité dans le plan $z$ :**
   Un système échantillonné linéaire invariant est stable si et seulement si **tous les pôles** de sa fonction de transfert en boucle fermée (les racines du polynôme caractéristique $1 + C(z)H(z) = 0$) sont situés **strictement à l'intérieur du cercle unité** du plan complexe, c'est-à-dire :
   $$|z_i| < 1 \quad \forall i$$

#### 📋 Exemple de sujet corrigé type Concours

**Énoncé type :** Soit un système numérique défini par sa fonction de transfert en boucle ouverte en $z$ :
$$H_{BO}(z) = \frac{K}{z - 1}$$
avec un correcteur proportionnel $C(z) = K_p$. Déterminer la condition sur le gain $K_{\text{global}} = K K_p$ pour assurer la stabilité du système en boucle fermée.

**Rédaction type exigée sur la copie :**

*   *Étape 1 : Calcul de la FTBF discrète.*
    La fonction de transfert en boucle fermée s'écrit :
    $$H_{BF}(z) = \frac{C(z)H_{BO}(z)}{1 + C(z)H_{BO}(z)} = \frac{K_p \frac{K}{z - 1}}{1 + K_p \frac{K}{z - 1}}$$
    Mettons cette expression sous forme canonique fractionnaire en multipliant numérateur et dénominateur par $(z - 1)$ :
    $$H_{BF}(z) = \frac{K K_p}{(z - 1) + K K_p} = \frac{K K_p}{z - (1 - K K_p)}$$

*   *Étape 2 : Recherche des pôles et application du critère de stabilité.*
    Le pôle unique de la boucle fermée (racine du polynôme caractéristique) est :
    $$z_p = 1 - K K_p$$
    Pour que le système numérique soit stable, le pôle doit respecter la condition de localisation dans le cercle unité :
    $$|z_p| < 1 \implies |1 - K K_p| < 1$$

*   *Étape 3 : Résolution de l'inéquation.*
    Cette inéquation se traduit par :
    $$-1 < 1 - K K_p < 1$$
    En soustrayant $1$ de chaque membre :
    $$-2 < -K K_p < 0$$
    En multipliant par $-1$ (ce qui inverse les inégalités) :
    $$0 < K K_p < 2$$
    Conclusion : Le système est stable si et seulement si le gain global satisfait la condition $0 < K K_p < 2$.

#### ⚠️ Les pièges majeurs soulignés dans les rapports de jury
- **Confusion entre plan $s$ et plan $z$ :** Appliquer par réflexe les critères du plan gauche (partie réelle strictement négative) au plan $z$. En discret, la frontière de stabilité n'est plus l'axe imaginaire, mais le **cercle trigonométrique de rayon 1**.
- **Oubli des conditions d'échantillonnage de Shannon :** Ne pas mentionner la fréquence d'échantillonnage minimale lors de la phase de discrétisation d'un modèle continu, ce qui rend la modélisation caduque aux yeux du jury.