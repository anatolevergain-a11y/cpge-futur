---
title: 'Exercice 2 : Marges de phase et de gain, lieux de Bode et Nyquist'
description: 'Problème d entraînement type concours pour PT.'
---

### 🌐 Énoncé du problème / Cadre d'étude

On s'intéresse à l'asservissement en position d'un axe motorisé utilisé dans un système aéronautique. Le schéma-blocs de la boucle de régulation est donné par une structure classique à retour unitaire. 

La fonction de transfert en boucle ouverte du système non corrigé, notée $H_{BO}(p)$, est définie par :
$$H_{BO}(p) = \frac{K}{p(1 + \tau_1 p)(1 + \tau_2 p)}$$

On pose les valeurs numériques suivantes pour l'application numérique :
- $K = 10 \text{ s}^{-1}$
- $\tau_1 = 0,1 \text{ s}$
- $\tau_2 = 0,02 \text{ s}$

L'objectif de ce problème est d'analyser la stabilité relative du système asservi en utilisant les diagrammes de Bode et le diagramme de Nyquist, puis de proposer une correction proportionnelle-dérivée (PD) pour améliorer les performances dynamiques.

---

### ❓ Questions progressives

1. **Analyse qualitative de la FTBO :** Préciser la classe et l'ordre du système en boucle ouverte. En déduire le comportement asymptotique du diagramme de Bode en gain (asymptote basse fréquence).
2. **Diagramme de Bode - Tracé asymptotique :** 
   - Identifier les pulsations caractéristiques (pulsations de cassure).
   - Tracer l'allure des diagrammes de Bode asymptotiques (gain en $\text{dB}$ et phase en degrés) de la FTBO.
3. **Stabilité et Marges de stabilité :**
   - Définir rigoureusement la pulsation de coupure à 0 dB ($\omega_{c0}$) et la pulsation critique ($\omega_{-180}$).
   - Exprimer littéralement et calculer graphiquement ou analytiquement la **marge de phase** ($M_\phi$) et la **marge de gain** ($M_G$).
   - Conclure quant à la stabilité du système bouclé.
4. **Diagramme de Nyquist :**
   - Tracer l'allure du diagramme de Nyquist de $H_{BO}(j\omega)$ pour $\omega \in [0, +\infty[$.
   - Retrouver graphiquement la marge de phase et la marge de gain sur ce diagramme.
5. **Correction du système :**
   - Pour des raisons de cahier des charges, on souhaite obtenir une marge de phase supérieure à $45^\circ$. Le système non corrigé satisfait-il cette condition ?
   - Proposer l'ajout d'un correcteur proportionnel-dérivé (PD) de la forme $C(p) = K_c(1 + T_d p)$ pour améliorer cette marge de phase. Expliquer qualitativement l'effet de ce correcteur sur la phase au voisinage de la pulsation de coupure.

---

### 💡 Pistes & Indications méthodologiques

- **Pour les diagrammes de Bode :** Pensez à mettre la fonction de transfert sous sa forme canonique avant de déterminer les pentes et les retards de phase induits par les pôles réels.
- **Pour la pulsation de coupure à 0 dB ($\omega_{c0}$) :** Elle se détermine par l'équation $|H_{BO}(j\omega_{c0})| = 1$ (soit $20\log(|H_{BO}(j\omega_{c0})|) = 0 \text{ dB}$). Souvent, dans les zones de transition, l'approximation de l'asymptote simplifie le calcul.
- **Pour la marge de phase :** $M_\phi = 180^\circ + \arg(H_{BO}(j\omega_{c0}))$. Attention au sens des angles (négatifs pour les retards de phase).
- **Pour la marge de gain :** On cherche d'abord $\omega_{-180}$ telle que $\arg(H_{BO}(j\omega_{-180})) = -180^\circ$, puis $M_G = -20\log(|H_{BO}(j\omega_{-180})|)$ en $\text{dB}$.
- **Pour Nyquist :** Étudiez le comportement de la partie réelle et de la partie imaginaire quand $\omega \to 0$ et $\omega \to +\infty$, ainsi que l'intersection avec l'axe réel négatif.

---

### 📋 Corrigé détaillé pas à pas

#### 1. Analyse qualitative de la FTBO
La fonction de transfert s'écrit :
$$H_{BO}(p) = \frac{10}{p(1 + 0,1p)(1 + 0,02p)}$$
- **Classe :** Le dénominateur possède un terme en $p^1$ seul (intégration pure). Le système est de **classe 1**.
- **Ordre :** Le degré du polynôme dénominateur en $p$ est $3$. Le système est d'**ordre 3**.
- **Comportement BF :** Lorsque $\omega \to 0$, $H_{BO}(j\omega) \approx \frac{10}{j\omega}$. Le gain asymptotique en basses fréquences est une droite de pente $-20 \text{ dB/décade}$.

#### 2. Diagramme de Bode - Tracé asymptotique
- **Pulsations de cassure :**
  - $\omega_1 = \frac{1}{\tau_1} = \frac{1}{0,1} = 10 \text{ rad/s}$
  - $\omega_2 = \frac{1}{\tau_2} = \frac{1}{0,02} = 50 \text{ rad/s}$
- **Allure du gain (dB) :**
  - Pour $\omega < 10 \text{ rad/s}$ : Pente de $-20 \text{ dB/décade}$ passant par $20\log(10) = 20 \text{ dB}$ à $\omega = 1 \text{ rad/s}$.
  - Pour $10 < \omega < 50 \text{ rad/s}$ : Pente de $-40 \text{ dB/décade}$ (suite au pôle en $10$).
  - Pour $\omega > 50 \text{ rad/s}$ : Pente de $-60 \text{ dB/décade}$ (suite au pôle en $50$).
- **Allure de la phase :**
  - Démarre à $-90^\circ$ en $\omega = 0$ (à cause de l'intégrateur $1/p$).
  - Tend vers $-270^\circ$ en haute fréquence ($\,90^\circ$ par pôle).

#### 3. Stabilité et Marges de stabilité
- **Pulsation de coupure $\omega_{c0}$ :** 
  À la pulsation $\omega_{c0}$, le gain vaut $0 \text{ dB}$. Supposons que $\omega_{c0}$ se situe entre $10$ et $50 \text{ rad/s}$ (zone à $-40 \text{ dB/décade}$).
  L'équation du gain asymptotique dans cette zone s'écrit :
  $$20\log(10) - 20\log(\omega_{1}) - 40\log\left(\frac{\omega_{c0}}{\omega_1}\right) = 0$$
  Soit $20 - 20 - 40\log\left(\frac{\omega_{c0}}{10}\right) = 0 \implies \log\left(\frac{\omega_{c0}}{10}\right) = 0 \implies \omega_{c0} = 10 \text{ rad/s}$.
  *(Vérification exacte : à $\omega = 10$, $|H_{BO}(j10)| = \frac{10}{10 \times \sqrt{1 + 1^2} \times \sqrt{1 + 0,2^2}} = \frac{1}{\sqrt{2} \times \sqrt{1,04}} \approx 0,69$ soit $-3,2 \text{ dB}$. La coupure réelle est donc légèrement inférieure, $\omega_{c0} \approx 8 \text{ rad/s}$. Pour la suite, faisons les calculs rigoureux à la pulsation réelle).*
  
  Calculons la phase à $\omega_{c0} \approx 8 \text{ rad/s}$ :
  $$\arg(H_{BO}(j\omega_{c0})) = -90^\circ - \arctan(0,1 \times 8) - \arctan(0,02 \times 8)$$
  $$\arg(H_{BO}(j8)) = -90^\circ - \arctan(0,8) - \arctan(0,16) \approx -90^\circ - 38,7^\circ - 9,1^\circ = -137,8^\circ$$

- **Marge de phase ($M_\phi$) :**
  $$M_\phi = 180^\circ + \arg(H_{BO}(j\omega_{c0})) = 180^\circ - 137,8^\circ = \mathbf{42,2^\circ}$$

- **Pulsation critique $\omega_{-180}$ :**
  On cherche $\omega$ tel que $\arg(H_{BO}(j\omega)) = -180^\circ$.
  $$-90^\circ - \arctan(0,1\omega) - \arctan(0,02\omega) = -180^\circ \implies \arctan(0,1\omega) + \arctan(0,02\omega) = 90^\circ$$
  En utilisant la formule $\tan(a+b) = \frac{\tan a + \tan b}{1 - \tan a \tan b}$ avec $a+b = 90^\circ$ (donc $\tan(a+b) \to \infty$, soit le dénominateur s'annule) :
  $$0,1\omega_{-180} \times 0,02\omega_{-180} = 1 \implies 0,002 \omega_{-180}^2 = 1 \implies \omega_{-180} = \sqrt{\frac{1}{0,002}} = \sqrt{500} \approx \mathbf{22,36 \text{ rad/s}}$$

- **Marge de gain ($M_G$) :**
  On calcule le gain à cette pulsation :
  $$|H_{BO}(j\omega_{-180})| = \frac{10}{22,36 \times \sqrt{1 + (0,1 \times 22,36)^2} \times \sqrt{1 + (0,02 \times 22,36)^2}}$$
  $$|H_{BO}(j22,36)| = \frac{10}{22,36 \times \sqrt{1 + 5} \times \sqrt{1 + 0,2}} = \frac{10}{22,36 \times \sqrt{6} \times \sqrt{1,2}} = \frac{10}{22,36 \times 2,45 \times 1,095} \approx 0,166$$
  $$M_G = -20\log(0,166) \approx \mathbf{15,6 \text{ dB}}$$

- **Conclusion sur la stabilité :** $M_\phi > 0$ et $M_G > 0$, le système bouclé est **stable**.

#### 4. Diagramme de Nyquist
- **Allure :** 
  - Pour $\omega \to 0^+$, le vecteur part de l'infini avec un argument de $-90^\circ$ (demi-plan inférieur droit, asymptotique à une droite verticale).
  - Le lieu contourne les quadrants pour couper l'axe réel négatif en un point d'abscisse $-\frac{1}{M_G} \approx -0,166$ à la pulsation $\omega_{-180} = 22,36 \text{ rad/s}$.
  - Il se termine à l'origine $(0,0)$ avec un angle de $-270^\circ$.
- **Représentation des marges :**
  - Le point critique $(-1 + j0)$ est à l'extérieur du lieu. Le nombre d'tours autour de ce point est nul ($Z = N + P = 0 + 0 = 0$), confirmant la stabilité (critère du revers).
  - La **marge de gain** se lit sur l'axe réel négatif comme l'inverse de la distance entre l'origine et le point d'intersection du lieu avec cet axe.
  - La **marge de phase** correspond à l'angle entre le semi-axe réel négatif et le vecteur reliant l'origine au point d'intersection du lieu de Nyquist avec le cercle unité.

#### 5. Correction du système
- **Satisfaction du cahier des charges :** La marge de phase actuelle est de $42,2^\circ$, ce qui est inférieur aux $45^\circ$ requis. Le système non corrigé **ne satisfait pas** le cahier des charges.
- **Apport du correcteur PD $C(p) = K_c(1 + T_d p)$ :**
  Le terme $(1 + T_d p)$ apporte une **avance de phase** positive dans la plage de fréquences choisie. 
  En plaçant judicieusement le zéro du correcteur avant la pulsation de coupure, on majore la phase de la FTBO au voisinage de $\omega_{c0}$, ce qui a pour effet direct **d'augmenter la marge de phase** et d'améliorer la rapidité du système tout en conservant une bonne stabilité relative.